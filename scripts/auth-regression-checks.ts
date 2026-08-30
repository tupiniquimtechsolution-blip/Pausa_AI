import assert from "node:assert/strict";
import { createHash, randomUUID } from "node:crypto";
import { readFileSync } from "node:fs";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { localRequestOrigin, publicAppUrl, safeRelativeAppPath } from "../lib/security/urls";

const prisma = new PrismaClient();
const base127 = (process.env.AUTH_REGRESSION_BASE_URL || "http://127.0.0.1:3106").replace(/\/$/, "");
const baseLocalhost = (process.env.AUTH_REGRESSION_LOCALHOST_URL || "http://localhost:3106").replace(/\/$/, "");
const masterEmail = "rmedrado15@gmail.com";
const masterPasswordBeforeReset = process.env.MASTER_SEED_PASSWORD;
const masterPasswordAfterReset = "Auth-Gate-After-Reset-2026!";

if (!masterPasswordBeforeReset) {
  throw new Error("MASTER_SEED_PASSWORD e obrigatoria para o gate de autenticacao.");
}

type CookieJar = Map<string, string>;
type JsonData = Record<string, unknown>;

function captureCookies(headers: Headers, jar: CookieJar) {
  const raw = typeof headers.getSetCookie === "function"
    ? headers.getSetCookie()
    : [headers.get("set-cookie")].filter((value): value is string => Boolean(value));
  for (const cookie of raw) {
    const pair = cookie.split(";")[0];
    const separator = pair.indexOf("=");
    if (separator > 0) jar.set(pair.slice(0, separator), pair.slice(separator + 1));
  }
}

function cookieHeader(jar: CookieJar) {
  return Array.from(jar.entries()).map(([key, value]) => `${key}=${value}`).join("; ");
}

async function jsonRequest(
  baseUrl: string,
  path: string,
  options: { method?: string; body?: unknown; jar?: CookieJar; headers?: Record<string, string> } = {}
) {
  const response = await fetch(`${baseUrl}${path}`, {
    method: options.method || "GET",
    redirect: "manual",
    headers: {
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...(options.jar?.size ? { Cookie: cookieHeader(options.jar) } : {}),
      ...(options.headers || {})
    },
    body: options.body ? JSON.stringify(options.body) : undefined
  });
  if (options.jar) captureCookies(response.headers, options.jar);
  const text = await response.text();
  let data: JsonData = {};
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { text };
  }
  return { response, data };
}

async function formRequest(baseUrl: string, path: string, body: Record<string, string>, jar: CookieJar) {
  const response = await fetch(`${baseUrl}${path}`, {
    method: "POST",
    redirect: "manual",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      ...(jar.size ? { Cookie: cookieHeader(jar) } : {})
    },
    body: new URLSearchParams(body).toString()
  });
  captureCookies(response.headers, jar);
  return response;
}

async function ensureAdminGateUser() {
  const email = "auth-regression-admin@pausaai.test";
  const password = "Auth-Admin-Gate-2026!";
  const user = await prisma.user.upsert({
    where: { email },
    update: {
      passwordHash: await bcrypt.hash(password, 8),
      role: "ADMIN",
      onboardingCompleted: true
    },
    create: {
      name: "Auth Regression Admin",
      email,
      passwordHash: await bcrypt.hash(password, 8),
      role: "ADMIN",
      onboardingCompleted: true
    }
  });
  const role = await prisma.role.findUniqueOrThrow({ where: { key: "ADMIN" } });
  await prisma.userRole.upsert({
    where: { userId_roleId: { userId: user.id, roleId: role.id } },
    update: { reason: "AUTH_REGRESSION_GATE", expiresAt: null },
    create: { userId: user.id, roleId: role.id, reason: "AUTH_REGRESSION_GATE" }
  });
  return { email, password };
}

async function main() {
  assert.equal(safeRelativeAppPath("/app?from=login"), "/app?from=login");
  assert.throws(() => safeRelativeAppPath("https://malicious.example/app"));
  assert.throws(() => safeRelativeAppPath("//malicious.example/app"));

  const localRequest = new Request(`${base127}/api/auth/password/forgot`, {
    headers: { Host: new URL(base127).host }
  });
  const localResetUrl = publicAppUrl(
    localRequest,
    "/redefinir-senha/test-token",
    { preferRequestOriginForLocal: true }
  );
  assert.equal(localResetUrl.origin, new URL(base127).origin);
  assert.notEqual(localResetUrl.origin, new URL(process.env.APP_BASE_URL || base127).origin);
  assert.equal(localRequestOrigin(localRequest), new URL(base127).origin);

  const configuredBaseUrl = process.env.APP_BASE_URL;
  process.env.APP_BASE_URL = "https://app.pausa.example";
  assert.equal(localRequestOrigin(localRequest), null);
  if (configuredBaseUrl) process.env.APP_BASE_URL = configuredBaseUrl;
  else delete process.env.APP_BASE_URL;

  const email = `auth-regression-${Date.now()}@pausaai.test`;
  const password = "Auth-User-Gate-2026!";
  const registerJar: CookieJar = new Map();
  const register = await jsonRequest(base127, "/api/auth/register", {
    method: "POST",
    jar: registerJar,
    body: { name: "Auth Regression User", email, password, confirmPassword: password }
  });
  assert.equal(register.response.status, 200);
  assert.equal(register.data.redirectTo, "/app/onboarding");

  const invalidJar: CookieJar = new Map();
  const invalidForm = await formRequest(
    base127,
    "/api/auth/login?redirect=1",
    { email, password: "Senha-Incorreta-2026!" },
    invalidJar
  );
  assert.equal(invalidForm.status, 303);
  assert.equal(invalidForm.headers.get("location"), "/login?error=credentials");
  assert.equal(invalidJar.has("pausa_session"), false);

  const invalidJson = await jsonRequest(base127, "/api/auth/login", {
    method: "POST",
    body: { email, password: "Senha-Incorreta-2026!" }
  });
  assert.equal(invalidJson.response.status, 401);
  assert.match(String(invalidJson.data.error), /e-mail e senha/i);

  const fallbackPage = await fetch(`${base127}/login?error=credentials`);
  assert.equal(fallbackPage.status, 200);
  assert.match(await fallbackPage.text(), /Nao foi possivel entrar/);

  const onboardingJar127: CookieJar = new Map();
  const onboardingLogin127 = await formRequest(
    base127,
    "/api/auth/login?redirect=1",
    { email, password },
    onboardingJar127
  );
  assert.equal(onboardingLogin127.status, 303);
  assert.equal(onboardingLogin127.headers.get("location"), "/app/onboarding");
  assert.equal(onboardingJar127.has("pausa_session"), true);
  assert.match(onboardingLogin127.headers.get("set-cookie") || "", /HttpOnly/i);
  assert.match(onboardingLogin127.headers.get("set-cookie") || "", /SameSite=Lax/i);

  await prisma.user.update({ where: { email }, data: { onboardingCompleted: true } });

  const authenticatedJar127: CookieJar = new Map();
  const login127 = await formRequest(
    base127,
    "/api/auth/login?redirect=1",
    { email, password },
    authenticatedJar127
  );
  assert.equal(login127.status, 303);
  assert.equal(login127.headers.get("location"), "/app");
  const app127 = await fetch(`${base127}/app`, {
    redirect: "manual",
    headers: { Cookie: cookieHeader(authenticatedJar127) }
  });
  assert.equal(app127.status, 200);

  const authenticatedJarLocalhost: CookieJar = new Map();
  const loginLocalhost = await formRequest(
    baseLocalhost,
    "/api/auth/login?redirect=1",
    { email, password },
    authenticatedJarLocalhost
  );
  assert.equal(loginLocalhost.status, 303);
  assert.equal(loginLocalhost.headers.get("location"), "/app");
  const appLocalhost = await fetch(`${baseLocalhost}/app`, {
    redirect: "manual",
    headers: { Cookie: cookieHeader(authenticatedJarLocalhost) }
  });
  assert.equal(appLocalhost.status, 200);

  const userAdminAttempt = await jsonRequest(base127, "/api/admin/feature-flags", {
    jar: authenticatedJar127
  });
  assert.equal(userAdminAttempt.response.status, 403);

  const adminGate = await ensureAdminGateUser();
  const adminJar: CookieJar = new Map();
  const adminLogin = await jsonRequest(base127, "/api/auth/login", {
    method: "POST",
    jar: adminJar,
    body: adminGate
  });
  assert.equal(adminLogin.response.status, 200);
  const adminFlags = await jsonRequest(base127, "/api/admin/feature-flags", { jar: adminJar });
  assert.equal(adminFlags.response.status, 200);

  const masterBefore = await prisma.user.findUniqueOrThrow({
    where: { email: masterEmail },
    include: { userRoles: { include: { role: true } } }
  });
  const rolesBefore = masterBefore.userRoles.map((assignment) => assignment.role.key).sort();
  assert.equal(masterBefore.role, "MASTER");
  assert.ok(rolesBefore.includes("MASTER"));

  const oldMasterJar: CookieJar = new Map();
  const oldMasterLogin = await jsonRequest(base127, "/api/auth/login", {
    method: "POST",
    jar: oldMasterJar,
    body: { email: masterEmail, password: masterPasswordBeforeReset }
  });
  assert.equal(oldMasterLogin.response.status, 200);

  const forgot = await jsonRequest(base127, "/api/auth/password/forgot", {
    method: "POST",
    body: { email: masterEmail }
  });
  assert.equal(forgot.response.status, 200);
  assert.equal(forgot.data.emailSent, false);
  assert.ok(typeof forgot.data.resetUrl === "string");
  const resetUrl = new URL(forgot.data.resetUrl);
  assert.equal(resetUrl.origin, new URL(base127).origin);
  const token = resetUrl.pathname.split("/").filter(Boolean).pop();
  assert.ok(token && token.length >= 20);

  const reset = await jsonRequest(base127, "/api/auth/password/reset", {
    method: "POST",
    body: {
      token,
      password: masterPasswordAfterReset,
      confirmPassword: masterPasswordAfterReset
    }
  });
  assert.equal(reset.response.status, 200);

  const masterAfter = await prisma.user.findUniqueOrThrow({
    where: { email: masterEmail },
    include: { userRoles: { include: { role: true } } }
  });
  const rolesAfter = masterAfter.userRoles.map((assignment) => assignment.role.key).sort();
  assert.equal(masterAfter.sessionVersion, masterBefore.sessionVersion + 1);
  assert.equal(masterAfter.role, "MASTER");
  assert.deepEqual(rolesAfter, rolesBefore);

  const reusedReset = await jsonRequest(base127, "/api/auth/password/reset", {
    method: "POST",
    body: {
      token,
      password: "Auth-Gate-Reused-2026!",
      confirmPassword: "Auth-Gate-Reused-2026!"
    }
  });
  assert.equal(reusedReset.response.status, 400);

  const oldSession = await fetch(`${base127}/app`, {
    redirect: "manual",
    headers: { Cookie: cookieHeader(oldMasterJar) }
  });
  assert.equal(oldSession.status, 307);
  assert.match(oldSession.headers.get("location") || "", /\/login\?session=expired$/);

  const newMasterJar: CookieJar = new Map();
  const newMasterLogin = await jsonRequest(base127, "/api/auth/login", {
    method: "POST",
    jar: newMasterJar,
    body: { email: masterEmail, password: masterPasswordAfterReset }
  });
  assert.equal(newMasterLogin.response.status, 200);
  const masterFlags = await jsonRequest(base127, "/api/admin/feature-flags", { jar: newMasterJar });
  assert.equal(masterFlags.response.status, 200);

  const expiredToken = `expired-${randomUUID()}-auth-regression-token`;
  await prisma.passwordResetToken.create({
    data: {
      userId: masterAfter.id,
      tokenHash: createHash("sha256").update(expiredToken).digest("hex"),
      expiresAt: new Date(Date.now() - 60_000)
    }
  });
  const expiredReset = await jsonRequest(base127, "/api/auth/password/reset", {
    method: "POST",
    body: {
      token: expiredToken,
      password: "Auth-Gate-Expired-2026!",
      confirmPassword: "Auth-Gate-Expired-2026!"
    }
  });
  assert.equal(expiredReset.response.status, 400);

  const limitedEmail = `rate-limit-${Date.now()}@pausaai.test`;
  for (let attempt = 1; attempt <= 11; attempt += 1) {
    const limited = await jsonRequest(base127, "/api/auth/login", {
      method: "POST",
      body: { email: limitedEmail, password: "Rate-Limit-Gate-2026!" }
    });
    if (attempt <= 10) {
      assert.equal(limited.response.status, 401);
    } else {
      assert.equal(limited.response.status, 429);
      assert.ok(Number(limited.response.headers.get("retry-after")) >= 1);
      assert.match(String(limited.data.error), /Muitas tentativas/i);
    }
  }

  const loginFormSource = readFileSync("components/login-form.tsx", "utf8");
  assert.match(loginFormSource, /credentials:\s*"include"/);
  assert.match(loginFormSource, /setPassword\(""\)/);
  assert.match(loginFormSource, /value=\{email\}/);
  assert.match(loginFormSource, /aria-live="assertive"/);
  assert.match(loginFormSource, /data-login-enhanced=\{enhanced \? "true" : "false"\}/);
  assert.match(loginFormSource, /action="\/api\/auth\/login\?redirect=1"/);

  console.info(JSON.stringify({
    event: "auth_regression_checks_passed",
    defects: ["BUG-AUTH-001", "BUG-AUTH-002", "BUG-AUTH-003"],
    origins: [new URL(base127).origin, new URL(baseLocalhost).origin],
    appBaseUrl: process.env.APP_BASE_URL,
    roles: ["USER", "ADMIN", "MASTER"],
    masterSessionRevoked: true,
    resetTokenSingleUse: true,
    expiredResetRejected: true,
    rateLimit: "10/15m"
  }));
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => prisma.$disconnect());
