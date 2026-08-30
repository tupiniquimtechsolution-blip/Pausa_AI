import { spawn } from "node:child_process";
import { copyFileSync, existsSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { setTimeout as delay } from "node:timers/promises";

const root = process.cwd();
const port = 3106;
const base127 = `http://127.0.0.1:${port}`;
const baseLocalhost = `http://localhost:${port}`;
const sourceDb = resolve(root, "prisma", "dev.db");
const gateDb = resolve(root, "prisma", "auth-regression-gate-20260728.db");
const generatedConfigFiles = ["next-env.d.ts", "tsconfig.json"];
const originalGeneratedConfig = Object.fromEntries(
  generatedConfigFiles.map((path) => [path, readFileSync(resolve(root, path), "utf8")])
);
const env = {
  ...process.env,
  DATABASE_URL: "file:./auth-regression-gate-20260728.db",
  NEXT_DIST_DIR: ".next-auth-regression-gate",
  JWT_SECRET: "auth-regression-jwt-secret-2026-at-least-32-characters",
  RATE_LIMIT_PEPPER: "auth-regression-rate-limit-pepper-2026",
  COOKIE_SECURE: "false",
  APP_BASE_URL: "http://localhost:3999",
  MASTER_SEED_PASSWORD: "Auth-Gate-Before-Reset-2026!",
  RESET_MASTER_SEED_PASSWORD: "true",
  RESEND_API_KEY: "",
  AUTH_REGRESSION_BASE_URL: base127,
  AUTH_REGRESSION_LOCALHOST_URL: baseLocalhost
};
const npmCli = process.env.npm_execpath
  || join(dirname(process.execPath), "node_modules", "npm", "bin", "npm-cli.js");

function npm(args) {
  return spawn(process.execPath, [npmCli, ...args], {
    cwd: root,
    env,
    windowsHide: true,
    stdio: "inherit"
  });
}

function wait(child) {
  return new Promise((resolvePromise, reject) => {
    child.once("error", reject);
    child.once("exit", (code) => code === 0
      ? resolvePromise()
      : reject(new Error(`Processo encerrou com codigo ${code}.`)));
  });
}

async function stop(child) {
  if (!child || child.exitCode !== null) return;
  if (process.platform === "win32") {
    await new Promise((resolvePromise) => spawn("taskkill", ["/PID", String(child.pid), "/T", "/F"], {
      windowsHide: true,
      stdio: "ignore"
    }).once("exit", resolvePromise));
  } else {
    child.kill("SIGTERM");
  }
}

async function removeWithRetries(path) {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    if (!existsSync(path)) return;
    try {
      rmSync(path, { force: true });
      return;
    } catch (error) {
      if (!["EBUSY", "EPERM"].includes(error?.code) || attempt === 19) throw error;
      await delay(250);
    }
  }
}

let server;
try {
  if (!existsSync(sourceDb)) throw new Error("Banco representativo local nao encontrado.");
  await removeWithRetries(gateDb);
  copyFileSync(sourceDb, gateDb);
  await wait(npm(["run", "db:migrate:deploy"]));
  await wait(npm(["run", "db:seed:foundations"]));

  server = npm(["run", "dev", "--", "--hostname", "0.0.0.0", "--port", String(port)]);
  for (let attempt = 0; attempt < 90; attempt += 1) {
    if (server.exitCode !== null) throw new Error(`Servidor de autenticacao encerrou com codigo ${server.exitCode}.`);
    try {
      const [response127, responseLocalhost] = await Promise.all([
        fetch(`${base127}/login`),
        fetch(`${baseLocalhost}/login`)
      ]);
      if (response127.ok && responseLocalhost.ok) break;
    } catch {
      // Starting.
    }
    if (attempt === 89) throw new Error("Servidor de autenticacao nao ficou pronto.");
    await delay(1000);
  }

  await wait(npm(["exec", "tsx", "scripts/auth-regression-checks.ts"]));
  console.info("Auth regression gate passed.");
} finally {
  await stop(server);
  for (const path of [gateDb, `${gateDb}-journal`]) {
    if (path.startsWith(resolve(root, "prisma"))) await removeWithRetries(path);
  }
  for (const [path, content] of Object.entries(originalGeneratedConfig)) {
    writeFileSync(resolve(root, path), content, "utf8");
  }
}
