import { spawnSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const npmCli = process.env.npm_execpath;
if (!npmCli) throw new Error("Run this gate through npm so npm_execpath is available.");
const guardedFiles = ["next-env.d.ts", "tsconfig.json"].map((file) => {
  const path = resolve(process.cwd(), file);
  return { path, contents: readFileSync(path) };
});
function restoreGuardedFiles() {
  for (const file of guardedFiles) {
    writeFileSync(file.path, file.contents);
  }
}

const steps = [
  ["config:check"],
  ["typecheck"],
  ["lint", "--", "--quiet"],
  ["test:catalog"],
  ["test:xp"],
  ["test:walking"],
  ["test:w9:auth"],
  ["test:auth:regression"],
  ["test:mobile-gps"],
  ["test:foundations"],
  ["test:foundations:gate"],
  ["test:w2"],
  ["test:w2:gate"],
  ["test:buttons"],
  ["test:w3"],
  ["test:w3:gate"],
  ["test:w4"],
  ["test:w5"],
  ["test:w6"],
  ["test:w7"],
  ["test:w8"],
  ["test:themes"],
  ["privacy:retention:dry-run"],
  ["test:w8:database"],
  ["build:w9"]
];

const results = [];
try {
  for (const [script, ...extra] of steps) {
    if (script === "build:w9") restoreGuardedFiles();
    const startedAt = Date.now();
    const result = spawnSync(process.execPath, [npmCli, "run", script, ...extra], {
      cwd: process.cwd(),
      env: process.env,
      stdio: "inherit"
    });
    const durationSeconds = Math.round((Date.now() - startedAt) / 100) / 10;
    results.push({ script, durationSeconds, status: result.status });
    if (result.status !== 0) {
      console.error(JSON.stringify({ event: "w9_release_gate_failed", script, durationSeconds, results }));
      process.exitCode = result.status || 1;
      break;
    }
  }

  if (!process.exitCode) {
    console.info(JSON.stringify({
      event: "w9_release_gate_passed",
      steps: results.length,
      durationSeconds: Math.round(results.reduce((total, item) => total + item.durationSeconds, 0) * 10) / 10,
      results
    }));
  }
} finally {
  restoreGuardedFiles();
}
