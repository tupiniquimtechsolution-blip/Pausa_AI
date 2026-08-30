import assert from "node:assert/strict";
import { PrismaClient } from "@prisma/client";

const baseUrl = process.env.TEST_BASE_URL || "http://127.0.0.1:3101";
const masterPassword = process.env.MASTER_SEED_PASSWORD;
if (!masterPassword) throw new Error("MASTER_SEED_PASSWORD é obrigatório para o gate autenticado.");

function sessionCookie(response: Response) {
  const value = response.headers.get("set-cookie");
  assert.ok(value, "Resposta de autenticação sem cookie de sessão.");
  return value.split(";")[0];
}

async function jsonRequest(path: string, init: RequestInit = {}, cookie?: string) {
  const response = await fetch(`${baseUrl}${path}`, {
    ...init,
    redirect: "manual",
    headers: {
      "Content-Type": "application/json",
      "x-correlation-id": `w1-gate-${crypto.randomUUID()}`,
      ...(cookie ? { Cookie: cookie } : {}),
      ...(init.headers || {})
    }
  });
  const body = await response.json().catch(() => null);
  return { response, body };
}

async function main() {
  const prisma = new PrismaClient();
  const testEmail = `w1-pilot-${Date.now()}@example.test`;
  try {
    const login = await jsonRequest("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email: "rmedrado15@gmail.com", password: masterPassword })
    });
    assert.equal(login.response.status, 200);
    const masterCookie = sessionCookie(login.response);

    const flags = await jsonRequest("/api/admin/feature-flags", {}, masterCookie);
    assert.equal(flags.response.status, 200);
    assert.equal(typeof flags.body.resolved.NAV_V2, "boolean");
    const initialNavigationFlag = flags.body.resolved.NAV_V2 as boolean;
    const initialFlagAuditCount = await prisma.featureFlagAudit.count({
      where: { featureFlagKey: "NAV_V2" }
    });

    const enableFlag = await jsonRequest("/api/admin/feature-flags", {
      method: "POST",
      body: JSON.stringify({
        key: "NAV_V2",
        environment: "local",
        enabled: true,
        reason: "Gate W1: validar ativação auditada"
      })
    }, masterCookie);
    assert.equal(enableFlag.response.status, 200);

    const restoreFlag = await jsonRequest("/api/admin/feature-flags", {
      method: "POST",
      body: JSON.stringify({
        key: "NAV_V2",
        environment: "local",
        enabled: initialNavigationFlag,
        reason: "Gate W1: restaurar estado anterior"
      })
    }, masterCookie);
    assert.equal(restoreFlag.response.status, 200);

    const theme = await jsonRequest("/api/profile/preferences", {
      method: "PATCH",
      body: JSON.stringify({ theme: "black-green", language: "pt-BR" })
    }, masterCookie);
    assert.equal(theme.response.status, 200);

    const pendingLocale = await jsonRequest("/api/profile/preferences", {
      method: "PATCH",
      body: JSON.stringify({ language: "en" })
    }, masterCookie);
    assert.equal(pendingLocale.response.status, 400);

    const capabilities = await jsonRequest(
      "/api/platform/capabilities?platform=desktop-web",
      {},
      masterCookie
    );
    assert.equal(capabilities.response.status, 200);
    assert.equal(capabilities.body.capabilities.app_blocking.state, "UNSUPPORTED");

    const permission = await jsonRequest("/api/platform/permissions", {
      method: "POST",
      body: JSON.stringify({
        permissionKey: "notifications",
        platform: "desktop-web",
        status: "denied",
        source: "CLIENT_REPORTED",
        details: { gate: "W1" }
      })
    }, masterCookie);
    assert.equal(permission.response.status, 200);

    const register = await jsonRequest("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: "Usuário Gate W1",
        email: testEmail,
        password: "W1-User-Password-2026!",
        confirmPassword: "W1-User-Password-2026!"
      })
    });
    assert.equal(register.response.status, 200);
    const userCookie = sessionCookie(register.response);

    const forbiddenFlags = await jsonRequest("/api/admin/feature-flags", {}, userCookie);
    assert.equal(forbiddenFlags.response.status, 403);

    const target = await prisma.user.findUniqueOrThrow({ where: { email: testEmail } });
    const assignment = await jsonRequest("/api/admin/roles/assign", {
      method: "POST",
      body: JSON.stringify({
        userId: target.id,
        role: "SUPPORT",
        reason: "Gate W1: atribuição persistida e auditada"
      })
    }, masterCookie);
    assert.equal(assignment.response.status, 200);

    const [flagAudits, generalAudits, supportAssignment, permissionRecord] = await Promise.all([
      prisma.featureFlagAudit.count({ where: { featureFlagKey: "NAV_V2" } }),
      prisma.auditLog.count(),
      prisma.userRole.findFirst({
        where: { userId: target.id, role: { key: "SUPPORT" } }
      }),
      prisma.platformPermissionRecord.findFirst({
        where: {
          userId: (await prisma.user.findUniqueOrThrow({ where: { email: "rmedrado15@gmail.com" } })).id,
          permissionKey: "notifications",
          platform: "desktop-web"
        }
      })
    ]);
    assert.equal(flagAudits, initialFlagAuditCount + 2);
    assert.ok(generalAudits >= 4);
    assert.ok(supportAssignment);
    assert.equal(permissionRecord?.status, "denied");

    console.info(JSON.stringify({
      event: "w1_authenticated_pilot_passed",
      auth: true,
      rbac: true,
      theme: true,
      localeGate: true,
      permission: true,
      errorPath: true,
      featureFlag: true
    }));
  } finally {
    await prisma.user.deleteMany({ where: { email: testEmail } }).catch(() => undefined);
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
