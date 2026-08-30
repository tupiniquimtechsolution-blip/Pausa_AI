import { spawn } from "node:child_process";
import { copyFileSync, existsSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { setTimeout as delay } from "node:timers/promises";

const root = process.cwd();
const port = 3104;
const baseUrl = `http://127.0.0.1:${port}`;
const sourceDb = resolve(root, "prisma", "dev.db");
const gateDb = resolve(root, "prisma", "w9-auth-gate-20260726.db");
const generatedConfigFiles = ["next-env.d.ts", "tsconfig.json"];
const originalGeneratedConfig = Object.fromEntries(
  generatedConfigFiles.map((path) => [path, readFileSync(resolve(root, path), "utf8")])
);
const env = {
  ...process.env,
  DATABASE_URL: "file:./w9-auth-gate-20260726.db",
  NEXT_DIST_DIR: ".next-w9-auth-gate",
  JWT_SECRET: "w9-gate-jwt-secret-2026-at-least-32-characters",
  COOKIE_SECURE: "false",
  APP_BASE_URL: baseUrl,
  SMOKE_BASE_URL: baseUrl,
  WALKING_BASE_URL: baseUrl
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
      : reject(new Error(`Processo encerrou com código ${code}.`)));
  });
}

async function stop(child) {
  if (!child || child.exitCode !== null) return;
  if (process.platform === "win32") {
    await new Promise((resolvePromise) => spawn("taskkill", ["/PID", String(child.pid), "/T", "/F"], {
      windowsHide: true,
      stdio: "ignore"
    }).once("exit", resolvePromise));
  } else child.kill("SIGTERM");
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
  if (!existsSync(sourceDb)) throw new Error("Banco representativo local não encontrado.");
  await removeWithRetries(gateDb);
  copyFileSync(sourceDb, gateDb);
  server = npm(["run", "dev", "--", "--hostname", "127.0.0.1", "--port", String(port)]);
  for (let attempt = 0; attempt < 90; attempt += 1) {
    if (server.exitCode !== null) throw new Error(`Servidor W9 encerrou com código ${server.exitCode}.`);
    try {
      const response = await fetch(`${baseUrl}/login`);
      if (response.ok) break;
    } catch {
      // Starting.
    }
    if (attempt === 89) throw new Error("Servidor autenticado W9 não ficou pronto.");
    await delay(1000);
  }
  await wait(npm(["run", "test:smoke"]));
  await wait(npm(["run", "test:walking:auth"]));
  console.info("W9 authenticated legacy gate passed.");
} finally {
  await stop(server);
  for (const path of [gateDb, `${gateDb}-journal`]) {
    if (path.startsWith(resolve(root, "prisma"))) await removeWithRetries(path);
  }
  for (const [path, content] of Object.entries(originalGeneratedConfig)) {
    writeFileSync(resolve(root, path), content, "utf8");
  }
}
