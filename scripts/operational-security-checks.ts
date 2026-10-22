import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { prisma } from "../lib/prisma";
import { consumeRateLimit, clientAddress } from "../lib/security/rate-limit";
import { exportDataSubject } from "../lib/privacy/data-subject";
import { seedStagingAdmin, stagingAdminInput } from "../lib/security/staging-admin-seed";
import { writeAuditLog } from "../lib/observability";
import { getUserRoles, userHasPermission } from "../lib/rbac/server";
import { resolveActiveRoles } from "../lib/rbac/roles";

async function main() {
  const url = process.env.DATABASE_URL || "";
  const localPostgres = /^postgres(?:ql)?:\/\//.test(url) &&
    ["127.0.0.1", "localhost"].includes(new URL(url).hostname);
  assert.equal(process.env.OPERATIONAL_TEST_DB, "isolated", "Isolated test database acknowledgement required.");
  assert.ok(localPostgres || /^file:.*(?:execution-local|ci|ops-checks)\.db$/.test(url), "Remote database tests are prohibited.");
  const scope = `ops.${randomUUID()}`;
  const correlationId = randomUUID();
  const now = new Date("2026-10-16T12:00:00Z");
  const input = { scope, key: "client", limit: 10, windowMs: 60000, now };
  const users: string[] = [];
  const adminEmail = `ops-${randomUUID()}@example.test`;
  try {
    const hits = await Promise.all(Array.from({ length: 64 }, () => consumeRateLimit(input)));
    assert.equal(hits.filter(h => h.allowed).length, 10);
    assert.equal((await prisma.rateLimitBucket.findFirstOrThrow({ where: { scope } })).count, 64);
    const resets = await Promise.all(Array.from({ length: 64 }, () => consumeRateLimit({ ...input, now: new Date(now.getTime() + 60001) })));
    assert.equal(resets.filter(h => h.allowed).length, 10);
    assert.equal((await prisma.rateLimitBucket.findFirstOrThrow({ where: { scope } })).count, 64);
    assert.equal(clientAddress(new Request("https://example.test", { headers: { "cf-connecting-ip": "192.0.2.1", "x-forwarded-for": "spoofed" } })), "192.0.2.1");
    assert.deepEqual(resolveActiveRoles([]), ["USER"]);
    assert.deepEqual(resolveActiveRoles(["INVALID"]), ["USER"]);
    assert.deepEqual(resolveActiveRoles(["ADMIN", "ADMIN", "USER"]), ["ADMIN", "USER"]);

    for (let i = 0; i < 2; i++) {
      const user = await prisma.user.create({ data: { name: "Synthetic privacy check", email: `ops-${randomUUID()}@example.test`, passwordHash: "not-a-login-password" } });
      users.push(user.id);
      await prisma.dataConsent.create({ data: { userId: user.id, scope: `SYNTHETIC_${i}`, sourceKind: "MANUAL" } });
      await prisma.scheduleMutex.create({ data: { userId: user.id, bucketKey: "synthetic" } });
      await prisma.calendarConnection.create({ data: { userId: user.id, provider: "SYNTHETIC", accessTokenEncrypted: "synthetic-private-value" } });
    }
    const exported = await exportDataSubject(users[0], correlationId);
    assert.equal(exported.categories.profileAndWellbeing.DataConsent.length, 1);
    assert.equal(exported.categories.profileAndWellbeing.DataConsent[0].userId, users[0]);
    assert.equal(exported.categories.routineAndAgenda.ScheduleMutex.length, 1);
    assert.equal(JSON.stringify(exported).includes(users[1]), false);
    assert.equal(JSON.stringify(exported).includes("passwordHash"), false);
    assert.equal(JSON.stringify(exported).includes("synthetic-private-value"), false);
    const injection = await prisma.user.create({ data: { id: `ops-' OR 1=1 -- ${randomUUID()}`, name: "SQL parameter check", email: `ops-${randomUUID()}@example.test`, passwordHash: "not-a-login-password" } });
    users.push(injection.id);
    const injectionExport = await exportDataSubject(injection.id, correlationId);
    assert.equal(injectionExport.categories.profileAndWellbeing.DataConsent.length, 0);

    assert.throws(() => stagingAdminInput({ DATABASE_URL: url }), /CONFIRMATION_REQUIRED/);
    assert.throws(() => stagingAdminInput({ APP_ENV: "production", STAGING_ADMIN_SEED_CONFIRM: "staging-only", DATABASE_URL: url }), /CONFIRMATION_REQUIRED/);
    const adminRole = await prisma.role.upsert({ where: { key: "ADMIN" }, update: {}, create: { key: "ADMIN", name: "Synthetic admin role", description: "Isolated test" } });
    // Stale scalar ADMIN must not authorize absent, expired or deleted grants.
    const stale = await prisma.user.create({ data: { name: "Synthetic stale role", email: `ops-${randomUUID()}@example.test`, passwordHash: "not-a-login-password", role: "ADMIN" } });
    users.push(stale.id);
    assert.deepEqual(await getUserRoles(stale.id), ["USER"]);
    const assignment = await prisma.userRole.create({ data: { userId: stale.id, roleId: adminRole.id, expiresAt: new Date(Date.now() + 60000) } });
    assert.equal(await userHasPermission(stale.id, "admin.access"), true);
    await prisma.userRole.update({ where: { id: assignment.id }, data: { expiresAt: new Date(Date.now() - 1000) } });
    assert.deepEqual(await getUserRoles(stale.id), ["USER"]);
    await prisma.userRole.update({ where: { id: assignment.id }, data: { expiresAt: null } });
    assert.equal(await userHasPermission(stale.id, "admin.access"), true);
    await prisma.userRole.delete({ where: { id: assignment.id } });
    assert.deepEqual(await getUserRoles(stale.id), ["USER"]);
    const adminInput = { email: adminEmail, password: randomUUID() };
    // Inject an error at the actual join write, after the user upsert. The real
    // transaction must roll back that user, not leave a scalar ADMIN behind.
    const failingDb = new Proxy(prisma, { get(target, key) {
      if (key === "$transaction") return (fn: Parameters<typeof prisma.$transaction>[0]) => target.$transaction(async tx => {
        const wrapped = new Proxy(tx, { get(t, k) {
          if (k === "userRole") return { upsert: async () => { throw new Error("SYNTHETIC_JOIN_FAILURE"); } };
          return Reflect.get(t, k);
        } });
        return (fn as unknown as (value: typeof tx) => unknown)(wrapped);
      });
      return Reflect.get(target, key);
    } });
    await assert.rejects(seedStagingAdmin(failingDb, adminInput), /SYNTHETIC_JOIN_FAILURE/);
    assert.equal(await prisma.user.findUnique({ where: { email: adminEmail } }), null);
    await seedStagingAdmin(prisma, adminInput);
    const firstAdmin = await prisma.user.findUniqueOrThrow({ where: { email: adminEmail } });
    assert.equal(firstAdmin.sessionVersion, 1);
    // A failed reseed rolls back the password and session-version update too.
    await assert.rejects(seedStagingAdmin(failingDb, { ...adminInput, password: randomUUID() }), /SYNTHETIC_JOIN_FAILURE/);
    const rolledBack = await prisma.user.findUniqueOrThrow({ where: { email: adminEmail } });
    assert.equal(rolledBack.passwordHash, firstAdmin.passwordHash);
    assert.equal(rolledBack.sessionVersion, firstAdmin.sessionVersion);
    await seedStagingAdmin(prisma, adminInput);
    const admin = await prisma.user.findUniqueOrThrow({ where: { email: adminEmail } });
    users.push(admin.id);
    assert.equal(admin.role, "ADMIN");
    assert.equal(admin.sessionVersion, firstAdmin.sessionVersion + 1);
    assert.equal(await prisma.userRole.count({ where: { userId: admin.id, roleId: adminRole.id } }), 1);

    const logs: string[] = [];
    const originalError = console.error;
    console.error = (...args: unknown[]) => { logs.push(args.join(" ")); };
    try {
      await writeAuditLog({ actorId: "nonexistent-synthetic-actor", action: "synthetic", targetType: "Synthetic", correlationId });
    } finally { console.error = originalError; }
    assert.ok(logs.some(line => line.includes("AUDIT_WRITE_FAILED")));
    assert.equal(logs.some(line => /Foreign key|prisma\.|query parameters|nonexistent-synthetic-actor/.test(line)), false);
    console.info(JSON.stringify({ ok: true, provider: localPostgres ? "postgresql" : "sqlite", concurrentHits: 128, subjectIsolation: true, sqlParameterBinding: true, activeAssignmentsAuthoritative: true, expiredAndDeletedRolesDenied: true, seedRollback: true, seedIdentityIdempotency: true, reseedRevokesPreviousSessions: true, sanitizedAuditFailure: true }));
  } finally {
    await prisma.user.deleteMany({ where: { OR: [{ id: { in: users } }, { email: adminEmail }] } });
    await prisma.rateLimitBucket.deleteMany({ where: { scope } });
    await prisma.auditLog.deleteMany({ where: { correlationId } });
  }
}

main().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => prisma.$disconnect());
