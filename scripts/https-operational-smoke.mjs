import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { writeFileSync } from "node:fs";

const base = (process.env.SMOKE_BASE_URL || "").replace(/\/$/, "");
const allowed = /^https:\/\/(?:fix-cloudflare-prisma-wasm-loader-pausa-ai-staging|pausa-ai-staging)\.tupiniquim-techsolution\.workers\.dev$/;
assert.ok(allowed.test(base), "Only the explicitly authorized Pausa AI staging hosts are permitted.");
assert.equal(process.env.SMOKE_SYNTHETIC_WRITES, "acknowledged", "Synthetic staging writes acknowledgement required.");
const results = [];
const accounts = [];
async function request(path, { account, method = "GET", body } = {}) {
  const start = performance.now();
  let r;
  const attempts = [];
  for (let attempt = 0; attempt < 3; attempt++) {
    r = await fetch(base + path, {
    method, redirect: "manual", signal: AbortSignal.timeout(60000),
    headers: { ...(body ? { "Content-Type": "application/json" } : {}), ...(account?.cookie ? { Cookie: account.cookie } : {}) },
    body: body ? JSON.stringify(body) : undefined,
    });
    attempts.push({ status: r.status, server: r.headers.get("server"), cfRay: r.headers.get("cf-ray") });
    if (r.status !== 503 || attempt === 2) break;
    await r.arrayBuffer();
    // A brief 503 must be recorded as availability uncertainty, not an IDOR.
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  const text = await r.text();
  let data;
  try { data = JSON.parse(text); } catch { data = null; }
  results.push({ path: path.replace(/checkin=[^&]+/, "checkin=[synthetic]"), method, status: r.status, attempts, ms: Math.round(performance.now() - start) });
  console.error(JSON.stringify(results.at(-1)));
  const cookies = r.headers.getSetCookie();
  if (account && cookies.some(c => c.startsWith("pausa_session="))) {
    const session = cookies.find(c => c.startsWith("pausa_session="));
    account.cookie = session.split(";")[0];
    account.cookieFlags = { httpOnly: /httponly/i.test(session), secure: /secure/i.test(session), sameSiteLax: /samesite=lax/i.test(session) };
  }
  return { r, data, text };
}

let failure;
try {
  assert.equal((await request("/api/health")).r.status, 200);
  for (let i = 0; i < 2; i++) {
    const account = { email: `ops-smoke-${randomUUID()}@example.test`, password: randomUUID() + "aA1!", cookie: "" };
    accounts.push(account);
    const registration = await request("/api/auth/register", { method: "POST", account, body: { name: "Synthetic Operational Smoke", email: account.email, password: account.password, confirmPassword: account.password } });
    assert.equal(registration.r.status, 200, "Synthetic registration failed.");
    account.created = true;
    assert.deepEqual(account.cookieFlags, { httpOnly: true, secure: true, sameSiteLax: true });
  }
  const [a, b] = accounts;
  for (let i = 0; i < 4; i++) assert.equal((await request("/app/onboarding", { account: a })).r.status, 200);
  const reloads = await Promise.all(Array.from({ length: 4 }, () => request("/app/onboarding", { account: a })));
  assert.ok(reloads.every(x => x.r.status === 200), "Authenticated concurrent reload failed.");
  const onboarding = await request("/api/onboarding", { method: "POST", account: a, body: { mainGoal: "SYNTHETIC_TEST", dailyTime: "5", preferredTime: "manha", stressLevel: "moderado", difficultyArea: "foco" } });
  assert.equal(onboarding.r.status, 200);
  const checkin = await request("/api/checkins", { method: "POST", account: a, body: { completionToken: randomUUID(), focusScore: 3, moodScore: 3, stressScore: 3, energyScore: 3, sleepScore: 3, availableMinutes: 5, journalText: "" } });
  assert.equal(checkin.r.status, 200);
  assert.ok(checkin.data.sessionId);
  assert.equal((await request("/api/recommendations/current", { account: a })).r.status, 200);
  const otherSubject = await request(`/api/recommendations/current?checkin=${encodeURIComponent(checkin.data.sessionId)}`, { account: b });
  assert.ok([403, 404].includes(otherSubject.r.status) || (otherSubject.r.status === 200 && otherSubject.data?.decision === null), `Ownership check inconclusive or failed (HTTP ${otherSubject.r.status}).`);
  assert.equal((await request(`/api/recommendations/current?checkin=${encodeURIComponent(checkin.data.sessionId)}`, { account: a })).r.status, 200);
  assert.equal((await request(`/api/recommendations/current?checkin=${randomUUID()}`, { account: a })).r.status, 404);
  assert.equal((await request("/api/admin/feature-flags", { account: a })).r.status, 403);
  assert.equal((await request("/api/cron/daily-recommendations", { method: "POST" })).r.status, 401);
  const exported = await request("/api/data-vault/subject-request", { account: a });
  assert.equal(exported.r.status, 200);
  assert.equal(exported.r.headers.get("cache-control"), "no-store");
  assert.equal(exported.data.identity.email, a.email);
  assert.equal(JSON.stringify(exported.data).includes(b.email), false);
  assert.equal(JSON.stringify(exported.data).includes("passwordHash"), false);
  const exportedCheckins = exported.data.categories.profileAndWellbeing.Checkin;
  assert.ok(exportedCheckins.length > 0);
  assert.ok(exportedCheckins.every(row => row.userId === exported.data.identity.id));
  assert.equal((await request("/app/historico", { account: a })).r.status, 200);
  let limited;
  for (let i = 0; i < 6; i++) {
    const invalid = await request("/api/auth/register", { method: "POST", body: {} });
    assert.ok([400, 429].includes(invalid.r.status));
    if (invalid.r.status === 429) { limited = invalid.r; break; }
  }
  assert.ok(limited, "Registration limiter did not block the invalid attempts.");
  assert.ok(Number(limited.headers.get("retry-after")) > 0);
  const movement = await Promise.all(Array.from({ length: 3 }, () => request("/app/movimento", { account: a })));
  assert.ok(movement.every(x => x.r.status === 200));
  assert.ok([303, 307].includes((await request("/api/auth/logout", { method: "POST", account: a })).r.status));
  a.cookie = "";
  assert.ok([303, 307].includes((await request("/app/onboarding", { account: a })).r.status));
  assert.equal((await request("/api/auth/login", { method: "POST", account: a, body: { email: a.email, password: a.password } })).r.status, 200);
  assert.equal((await request("/app/historico", { account: a })).r.status, 200);
} catch (error) { failure = error.message; }
finally {
  for (const account of accounts.filter(a => a.created)) {
    try {
      const login = await request("/api/auth/login", { method: "POST", account, body: { email: account.email, password: account.password } });
      assert.equal(login.r.status, 200);
      const cleanup = await request("/api/data-vault/subject-request", { method: "DELETE", account, body: { confirmation: "EXCLUIR MINHA CONTA", reason: "SYNTHETIC_OPERATIONAL_SMOKE_CLEANUP" } });
      assert.equal(cleanup.r.status, 200);
      account.cleaned = true;
    } catch { account.cleaned = false; }
  }
  const report = { date: new Date().toISOString(), base, ok: !failure && accounts.every(a => !a.created || a.cleaned), failure, syntheticAccountsCreated: accounts.filter(a => a.created).length, syntheticAccountsCleaned: accounts.filter(a => a.cleaned).length, credentialsRecorded: false, results };
  if (process.env.SMOKE_REPORT_PATH) writeFileSync(process.env.SMOKE_REPORT_PATH, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report));
  if (!report.ok) process.exitCode = 1;
}
