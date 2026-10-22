import assert from "node:assert/strict";
import { once } from "node:events";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import net from "node:net";
import { build } from "esbuild";
import { Miniflare, convertV4MiniflareOptions } from "miniflare";
import WebSocket from "ws";
import pg from "pg";
import { SignJWT } from "jose";

// This diagnostic never reads runtime secrets or contacts staging. The fixture
// must already have the PostgreSQL Prisma schema; all credentials are synthetic.
const fixtureUrl = new URL(process.env.CPU_FIXTURE_DATABASE_URL || "http://invalid");
assert.equal(fixtureUrl.protocol, "postgresql:");
assert.ok(["127.0.0.1", "localhost", "[::1]"].includes(fixtureUrl.hostname));
assert.equal(fixtureUrl.pathname, "/pausa_cpu");
const output = path.resolve(process.env.CPU_PROFILE_OUTPUT || "tmp/worker-cpu");
await mkdir(output, { recursive: true });
const timeout = setTimeout(() => { console.error("Local CPU diagnostic timed out."); process.exit(2); }, 90000);
const jwtSecret = randomUUID() + randomUUID();
const userId = `cpu-fixture-${randomUUID()}`;
const email = `${userId}@example.test`;
const otherId = `cpu-fixture-${randomUUID()}`;
const db = new pg.Client({ connectionString: fixtureUrl.toString() });
const reports = [];
let queries = 0, userQueries = 0, credentialQueries = 0;
const sockets = new Set();
// Count protocol statements only. Do not record SQL, bind values or passwords.
const proxy = net.createServer(socket => {
  const upstream = net.connect(Number(fixtureUrl.port || 5432), fixtureUrl.hostname);
  sockets.add(socket); sockets.add(upstream);
  let buffer = Buffer.alloc(0), startup = true;
  socket.on("data", chunk => {
    buffer = Buffer.concat([buffer, chunk]);
    while (buffer.length >= (startup ? 4 : 5)) {
      const size = buffer.readInt32BE(startup ? 0 : 1) + (startup ? 0 : 1);
      if (buffer.length < size) break;
      if (!startup && [80, 81].includes(buffer[0])) {
        queries++;
        if (buffer.subarray(5, size).includes(Buffer.from('"User"'))) userQueries++;
        if (buffer.subarray(5, size).includes(Buffer.from('"passwordHash"'))) credentialQueries++;
      }
      buffer = buffer.subarray(size); startup = false;
    }
  });
  socket.pipe(upstream); upstream.pipe(socket);
  for (const s of [socket, upstream]) {
    s.on("error", () => { socket.destroy(); upstream.destroy(); });
    s.on("close", () => sockets.delete(s));
  }
});
await new Promise(resolve => proxy.listen(0, "127.0.0.1", resolve));
const workerFixtureUrl = new URL(fixtureUrl);
workerFixtureUrl.hostname = "127.0.0.1";
workerFixtureUrl.port = String(proxy.address().port);

function summarize(profile) {
  const nodes = new Map(profile.nodes.map(n => [n.id, n]));
  const time = new Map();
  let sampledUs = 0, idleUs = 0;
  for (let i = 0; i < (profile.samples || []).length; i++) {
    const node = nodes.get(profile.samples[i]);
    const us = profile.timeDeltas?.[i] || 0;
    sampledUs += us;
    if (node.callFrame.functionName === "(idle)") idleUs += us;
    const name = node.callFrame.functionName || "(anonymous)";
    time.set(name, (time.get(name) || 0) + us);
  }
  return {
    sampledMs: Math.round(sampledUs / 1000),
    activeSampledMs: Math.round((sampledUs - idleUs) / 1000),
    topFunctions: [...time].sort((a, b) => b[1] - a[1]).slice(0, 12)
      .map(([name, us]) => ({ name, sampledMs: Math.round(us / 1000) })),
  };
}

async function measureWorker(name, options, requests, verifyConcurrent) {
  const mf = new Miniflare(convertV4MiniflareOptions({ name, inspectorPort: 0, ...options }));
  let ws;
  try {
    ws = new WebSocket(new URL(`/core:user:${name}`, await mf.getInspectorURL()));
    await once(ws, "open");
    let id = 0;
    const post = (method, params = {}) => new Promise((resolve, reject) => {
      const next = ++id;
      const listener = data => {
        const result = JSON.parse(data);
        if (result.id !== next) return;
        ws.off("message", listener);
        if (result.error) reject(new Error(result.error.message));
        else resolve(result.result);
      };
      ws.on("message", listener);
      ws.send(JSON.stringify({ id: next, method, params }));
    });
    await post("Profiler.enable");
    await post("Profiler.setSamplingInterval", { interval: 100 });
    for (const { label, pathname, init, expected, before, contains, excludes } of requests) {
      if (before) await before();
      const queryStart = queries, userQueryStart = userQueries, credentialStart = credentialQueries;
      await post("Profiler.start");
      const start = performance.now();
      const response = await mf.dispatchFetch(`http://localhost${pathname}`, { ...init, signal: AbortSignal.timeout(20000) });
      const body = await response.text();
      const wallMs = Math.round(performance.now() - start);
      const { profile } = await post("Profiler.stop");
      await writeFile(path.join(output, `${label}.cpuprofile`), JSON.stringify(profile));
      const report = { label, status: response.status, wallMs, statements: queries - queryStart, userStatements: userQueries - userQueryStart, credentialStatements: credentialQueries - credentialStart, ...summarize(profile) };
      reports.push(report);
      console.log(JSON.stringify(report));
      assert.equal(response.status, expected, label);
      if (contains) assert.ok(body.includes(contains), `${label}: expected synthetic identity`);
      if (excludes) assert.ok(!body.includes(excludes), `${label}: cross-request identity leak`);
      if (process.env.CPU_ASSERT_MINIMAL_SESSION === "true" && name === "app-cpu") assert.equal(report.credentialStatements, 0, `${label}: session must not fetch password hashes`);
    }
    if (verifyConcurrent) await verifyConcurrent(mf);
  } finally {
    ws?.terminate();
    await mf.dispose();
  }
}

try {
  await db.connect();
  await db.query('INSERT INTO "User" (id,name,email,"passwordHash","updatedAt") VALUES ($1,$2,$3,$4,NOW())',
    [userId, "Synthetic CPU Fixture", email, "unused-synthetic-hash"]);
  await db.query('INSERT INTO "User" (id,name,email,"passwordHash","updatedAt") VALUES ($1,$2,$3,$4,NOW())',
    [otherId, "Synthetic CPU Other", `${otherId}@example.test`, "unused-synthetic-hash"]);
  const token = await new SignJWT({ userId, sessionVersion: 1 })
    .setProtectedHeader({ alg: "HS256" }).setIssuer("pausa-ai").setAudience("pausa-ai-web")
    .setIssuedAt().setExpirationTime("5m").sign(new TextEncoder().encode(jwtSecret));
  const otherToken = await new SignJWT({ userId: otherId, sessionVersion: 1 })
    .setProtectedHeader({ alg: "HS256" }).setIssuer("pausa-ai").setAudience("pausa-ai-web")
    .setIssuedAt().setExpirationTime("5m").sign(new TextEncoder().encode(jwtSecret));
  const root = path.resolve(".cloudflare/output/v0/workers/default/bundle");
  const modules = await Promise.all((await readdir(root, { recursive: true }))
    .filter(p => p.endsWith(".js") || p.endsWith(".wasm"))
    .map(async p => ({ type: p.endsWith(".wasm") ? "CompiledWasm" : "ESModule", path: path.join(root, p), contents: await readFile(path.join(root, p), p.endsWith(".wasm") ? undefined : "utf8") })));
  modules.sort((a, b) => a.path === path.join(root, "index.js") ? -1 : b.path === path.join(root, "index.js") ? 1 : 0);
  await measureWorker("app-cpu", {
    modules, modulesRoot: root, compatibilityDate: "2026-09-30", compatibilityFlags: ["nodejs_compat"],
    bindings: { DATABASE_URL: workerFixtureUrl.toString(), JWT_SECRET: jwtSecret, RATE_LIMIT_PEPPER: "synthetic-cpu-fixture", APP_BASE_URL: "http://localhost", B2B_REAL_DASHBOARD_ENABLED: "false" },
    serviceBindings: { ASSETS: async () => new Response("not found", { status: 404 }) },
  }, [
    ...[1, 2, 3].map(n => ({ label: `health-${n}`, pathname: "/api/health", expected: 200 })),
    ...[1, 2, 3].map(n => ({ label: `onboarding-${n}`, pathname: "/app/onboarding", init: { headers: { Cookie: `pausa_session=${token}` } }, expected: 200 })),
    { label: "other-user", pathname: "/app/onboarding", init: { headers: { Cookie: `pausa_session=${otherToken}` } }, expected: 200, contains: "Synthetic CPU Other", excludes: "Synthetic CPU Fixture" },
    { label: "first-user-again", pathname: "/app/onboarding", init: { headers: { Cookie: `pausa_session=${token}` } }, expected: 200, contains: "Synthetic CPU Fixture", excludes: "Synthetic CPU Other" },
    { label: "rbac-user", pathname: "/api/admin/feature-flags", init: { headers: { Cookie: `pausa_session=${token}` } }, expected: 403 },
    { label: "rbac-admin", pathname: "/api/admin/feature-flags", init: { headers: { Cookie: `pausa_session=${token}` } }, expected: 200,
      before: () => db.query('UPDATE "User" SET role=$2 WHERE id=$1', [userId, "ADMIN"]) },
    { label: "rbac-admin-revoked", pathname: "/api/admin/feature-flags", init: { headers: { Cookie: `pausa_session=${token}` } }, expected: 403,
      before: () => db.query('UPDATE "User" SET role=$2 WHERE id=$1', [userId, "USER"]) },
    { label: "session-revoked", pathname: "/app/onboarding", init: { redirect: "manual", headers: { Cookie: `pausa_session=${token}` } },
      before: () => db.query('UPDATE "User" SET "sessionVersion"="sessionVersion"+1 WHERE id=$1', [userId]), expected: 307 },
    { label: "other-user-after-revocation", pathname: "/app/onboarding", init: { headers: { Cookie: `pausa_session=${otherToken}` } }, expected: 200, contains: "Synthetic CPU Other", excludes: "Synthetic CPU Fixture" },
  ], async mf => {
    await db.query('UPDATE "User" SET "sessionVersion"=1 WHERE id=$1', [userId]);
    await Promise.all(Array.from({ length: 6 }, async (_, index) => {
      const other = index % 2 === 1;
      const response = await mf.dispatchFetch("http://localhost/app/onboarding", { headers: { Cookie: `pausa_session=${other ? otherToken : token}` } });
      const body = await response.text();
      assert.equal(response.status, 200);
      assert.ok(body.includes(other ? "Synthetic CPU Other" : "Synthetic CPU Fixture"));
      assert.ok(!body.includes(other ? "Synthetic CPU Fixture" : "Synthetic CPU Other"));
    }));
    reports.push({ label: "concurrent-user-isolation", requests: 6, passed: true });
  });

  const script = (await build({ stdin: {
    contents: 'import bcrypt from "bcryptjs"; let hash; export default {async fetch(request) {if(new URL(request.url).pathname==="/hash")hash=await bcrypt.hash("Synthetic-CPU-only-2026!",12);else if(!await bcrypt.compare("Synthetic-CPU-only-2026!",hash))return new Response("mismatch",{status:500});return new Response("ok")}}',
    resolveDir: process.cwd(),
  }, bundle: true, write: false, format: "esm", platform: "browser" })).outputFiles[0].text;
  await measureWorker("bcrypt-cpu", { modules: true, script, compatibilityDate: "2026-09-30" },
    [1, 2, 3].flatMap(n => [
      { label: `bcrypt-hash-${n}`, pathname: "/hash", expected: 200 },
      { label: `bcrypt-compare-${n}`, pathname: "/compare", expected: 200 },
    ]));
} finally {
  await db.query('DELETE FROM "User" WHERE id=ANY($1::text[]) AND name LIKE $2', [[userId, otherId], "Synthetic CPU %"]).catch(() => {});
  await db.end();
  for (const socket of sockets) socket.destroy();
  await new Promise(resolve => proxy.close(resolve));
  clearTimeout(timeout);
  await writeFile(path.join(output, "summary.json"), JSON.stringify({
    scope: "Local workerd CPU samples, synthetic loopback PostgreSQL; excludes idle samples; hardware and overhead differ from Cloudflare. Not a remote CPU budget measurement or release gate.",
    node: process.version, reports,
  }, null, 2));
}
