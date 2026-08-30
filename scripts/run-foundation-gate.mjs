import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { setTimeout as delay } from "node:timers/promises";

const root = process.cwd();
const port = 3101;
const baseUrl = `http://127.0.0.1:${port}`;
const gatePassword = "W1-Gate-Only-Password-2026!";
const childEnvironment = {
  ...process.env,
  DATABASE_URL: "file:./w1-gate-20260725.db",
  NEXT_DIST_DIR: ".next-w1-gate",
  JWT_SECRET: "w1-gate-jwt-secret-2026-at-least-32-characters",
  COOKIE_SECURE: "false",
  MASTER_SEED_PASSWORD: gatePassword,
  RESET_MASTER_SEED_PASSWORD: "true",
  TEST_BASE_URL: baseUrl
};

const npmCli = process.env.npm_execpath
  || join(dirname(process.execPath), "node_modules", "npm", "bin", "npm-cli.js");

function runNpm(args, options = {}) {
  return spawn(process.execPath, [npmCli, ...args], {
    cwd: root,
    env: childEnvironment,
    windowsHide: true,
    stdio: "inherit",
    ...options
  });
}

async function waitForServer(server) {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    if (server.exitCode !== null) throw new Error(`Servidor do gate encerrou com código ${server.exitCode}.`);
    try {
      const response = await fetch(`${baseUrl}/login`);
      if (response.ok) return;
    } catch {
      // The server is still starting.
    }
    await delay(1000);
  }
  throw new Error("Servidor do gate W1 não ficou disponível em 60 segundos.");
}

function waitForExit(child) {
  return new Promise((resolve, reject) => {
    child.once("error", reject);
    child.once("exit", (code) => code === 0
      ? resolve()
      : reject(new Error(`Processo encerrou com código ${code}.`)));
  });
}

async function stopTree(child) {
  if (!child || child.exitCode !== null) return;
  if (process.platform === "win32") {
    const killer = spawn("taskkill", ["/PID", String(child.pid), "/T", "/F"], {
      windowsHide: true,
      stdio: "ignore"
    });
    await new Promise((resolve) => killer.once("exit", resolve));
  } else {
    child.kill("SIGTERM");
  }
}

let server;
try {
  const migrate = runNpm(["run", "db:migrate:deploy"]);
  await waitForExit(migrate);
  const seed = runNpm(["run", "db:seed:foundations"]);
  await waitForExit(seed);
  server = runNpm(["run", "dev", "--", "--hostname", "127.0.0.1", "--port", String(port)]);
  await waitForServer(server);
  console.info("W1 gate server ready.");
  const checks = runNpm(["run", "test:foundations:auth"]);
  await waitForExit(checks);
  console.info("W1 authenticated gate passed.");
} finally {
  await stopTree(server);
}
