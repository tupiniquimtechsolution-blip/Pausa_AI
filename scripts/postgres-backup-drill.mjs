import assert from "node:assert/strict";
import { createHash, randomUUID } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import pg from "pg";
import { PrismaClient } from "../generated/prisma-pg/index.js";
import { PrismaPg } from "@prisma/adapter-pg";

const sourceUrl = process.env.DATABASE_URL || "";
const targetUrl = process.env.POSTGRES_DRILL_TARGET_URL || "";
for (const value of [sourceUrl, targetUrl]) {
  const parsed = new URL(value);
  assert.ok(["localhost", "127.0.0.1"].includes(parsed.hostname), "Only loopback fixtures allowed; never restore into staging.");
}
assert.equal(process.env.OPERATIONAL_TEST_DB, "isolated");
assert.notEqual(sourceUrl, targetUrl);
const source = new pg.Client({ connectionString: sourceUrl });
const target = new pg.Client({ connectionString: targetUrl });
const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString: sourceUrl }), log: [] });
const quote = value => `"${value.replaceAll('"', '""')}"`;
const started = performance.now();
try {
  await source.connect(); await target.connect();
  assert.equal((await target.query("select count(*)::int as n from pg_tables where schemaname='public'")).rows[0].n, 0, "Restore target must be empty; existing tables will not be overwritten.");
  const users = [];
  for (let i = 0; i < 2; i++) {
    const user = await prisma.user.create({ data: { name: "Synthetic Restore Fixture", email: `drill-${randomUUID()}@example.test`, passwordHash: "synthetic-non-login" } });
    users.push(user.id);
    await prisma.profile.create({ data: { userId: user.id, mainGoal: "SYNTHETIC", dailyTime: "5", preferredTime: "morning", stressLevel: "synthetic", difficultyArea: "synthetic" } });
    await prisma.checkin.createMany({ data: Array.from({ length: 40 }, () => ({ userId: user.id, moodScore: 3, stressScore: 3, energyScore: 3, sleepScore: 3, aiSummary: "SYNTHETIC", aiRecommendation: "SYNTHETIC", dailyMissionTitle: "SYNTHETIC", dailyMissionDescription: "SYNTHETIC", dailyMissionSteps: "[]", encouragement: "SYNTHETIC" })) });
    await prisma.dataConsent.create({ data: { userId: user.id, scope: "SYNTHETIC_DRILL", sourceKind: "MANUAL" } });
  }
  const ddl = spawnSync(process.execPath, ["node_modules/prisma/build/index.js", "migrate", "diff", "--from-empty", "--to-schema-datamodel", "prisma/schema.postgresql.prisma", "--script"], { encoding: "utf8", env: process.env });
  assert.equal(ddl.status, 0, "Schema extraction failed.");
  const tables = (await source.query("select tablename from pg_tables where schemaname='public' order by tablename")).rows.map(r => r.tablename);
  assert.equal(tables.length, 85);
  const rows = {};
  for (const table of tables) rows[table] = (await source.query(`select * from public.${quote(table)}`)).rows;
  const snapshot = JSON.stringify({ format: "isolated-postgres-logical-snapshot-v1", schema: ddl.stdout, rows });
  mkdirSync("tmp", { recursive: true });
  const path = `tmp/postgres-drill-${randomUUID()}.json`;
  writeFileSync(path, snapshot);
  const restoredSnapshot = JSON.parse(readFileSync(path, "utf8"));
  const snapshotSha256 = createHash("sha256").update(readFileSync(path)).digest("hex");
  const restoreStart = performance.now();
  await target.query(restoredSnapshot.schema);
  const dependencies = (await source.query("select child.relname as child, parent.relname as parent from pg_constraint c join pg_class child on c.conrelid=child.oid join pg_class parent on c.confrelid=parent.oid join pg_namespace n on child.relnamespace=n.oid where c.contype='f' and n.nspname='public'")).rows;
  const pending = new Set(tables.filter(t => restoredSnapshot.rows[t].length));
  await target.query("begin");
  while (pending.size) {
    const ready = [...pending].filter(t => dependencies.every(d => d.child !== t || d.parent === t || !pending.has(d.parent)));
    assert.ok(ready.length, "Cyclic populated fixture requires a different restore strategy.");
    for (const table of ready) {
      for (const row of restoredSnapshot.rows[table]) {
        const columns = Object.keys(row), values = Object.values(row);
        await target.query(`insert into public.${quote(table)} (${columns.map(quote).join(",")}) values (${values.map((_, i) => `$${i + 1}`).join(",")})`, values);
      }
      pending.delete(table);
    }
  }
  await target.query("commit");
  const counts = {};
  for (const table of tables) {
    const count = (await target.query(`select count(*)::int as n from public.${quote(table)}`)).rows[0].n;
    assert.equal(count, rows[table].length, `Restore count mismatch: ${table}`);
    counts[table] = count;
  }
  const restored = new PrismaClient({ adapter: new PrismaPg({ connectionString: targetUrl }), log: [] });
  try {
    assert.equal(await restored.user.count({ where: { id: { in: users } } }), 2);
    assert.equal(await restored.checkin.count({ where: { userId: { in: users } } }), 80);
    assert.equal(await restored.profile.count({ where: { userId: { in: users } } }), 2);
  } finally { await restored.$disconnect(); }
  const report = { ok: true, kind: "POSTGRESQL_17_ISOLATED_LOGICAL_SNAPSHOT", tables: tables.length, rows: Object.values(counts).reduce((a, b) => a + b, 0), counts, snapshotSha256, restoreMs: Math.round(performance.now() - restoreStart), totalMs: Math.round(performance.now() - started), foreignKeysEnforced: true, prismaReadVerified: true, actualSupabaseBackupTested: false, cloudflareRollbackTested: false };
  if (process.env.POSTGRES_DRILL_REPORT_PATH) writeFileSync(process.env.POSTGRES_DRILL_REPORT_PATH, JSON.stringify(report, null, 2));
  console.info(JSON.stringify(report));
} finally {
  await prisma.$disconnect(); await source.end(); await target.end();
}
