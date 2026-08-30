import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { setTimeout as delay } from "node:timers/promises";

const port = 3102;
const baseUrl = `http://127.0.0.1:${port}`;
const env = {
  ...process.env,
  DATABASE_URL: "file:./w2-gate-v2-20260725.db",
  NEXT_DIST_DIR: ".next-w2-gate",
  JWT_SECRET: "w2-gate-jwt-secret-2026-at-least-32-characters",
  COOKIE_SECURE: "false",
  MASTER_SEED_PASSWORD: "W1-Gate-Only-Password-2026!",
  TEST_BASE_URL: baseUrl
};
const npmCli = process.env.npm_execpath
  || join(dirname(process.execPath), "node_modules", "npm", "bin", "npm-cli.js");

function npm(args) {
  return spawn(process.execPath, [npmCli, ...args], {
    cwd: process.cwd(),
    env,
    windowsHide: true,
    stdio: "inherit"
  });
}

function wait(child) {
  return new Promise((resolve, reject) => {
    child.once("error", reject);
    child.once("exit", (code) => code === 0 ? resolve() : reject(new Error(`Processo encerrou com código ${code}.`)));
  });
}

async function stop(child) {
  if (!child || child.exitCode !== null) return;
  if (process.platform === "win32") {
    await new Promise((resolve) => spawn("taskkill", ["/PID", String(child.pid), "/T", "/F"], {
      windowsHide: true,
      stdio: "ignore"
    }).once("exit", resolve));
  } else child.kill("SIGTERM");
}

let server;
try {
  await wait(npm(["run", "db:migrate:deploy"]));
  server = npm(["run", "dev", "--", "--hostname", "127.0.0.1", "--port", String(port)]);
  for (let attempt = 0; attempt < 60; attempt += 1) {
    if (server.exitCode !== null) throw new Error(`Servidor W2 encerrou com código ${server.exitCode}.`);
    try {
      const response = await fetch(`${baseUrl}/login`);
      if (response.ok) break;
    } catch {
      // Starting.
    }
    if (attempt === 59) throw new Error("Servidor W2 não ficou pronto.");
    await delay(1000);
  }
  await wait(npm(["run", "test:w2:auth"]));
} finally {
  await stop(server);
}
