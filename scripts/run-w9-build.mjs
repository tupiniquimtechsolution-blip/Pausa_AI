import { spawnSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const nextEnvPath = resolve(root, "next-env.d.ts");
const tsconfigPath = resolve(root, "tsconfig.json");
const originalNextEnv = readFileSync(nextEnvPath);
const originalTsconfig = readFileSync(tsconfigPath);
const nextCli = resolve(root, "node_modules", "next", "dist", "bin", "next");

try {
  const tsconfig = JSON.parse(originalTsconfig.toString("utf8"));
  tsconfig.include = (tsconfig.include || []).filter(
    (entry) => typeof entry !== "string" || !entry.startsWith(".next")
  );
  tsconfig.include.push(".next-w9-build/types/**/*.ts");
  writeFileSync(tsconfigPath, `${JSON.stringify(tsconfig, null, 2)}\n`);
  writeFileSync(nextEnvPath, [
    '/// <reference types="next" />',
    '/// <reference types="next/image-types/global" />',
    'import "./.next-w9-build/types/routes.d.ts";',
    "",
    "// NOTE: This file should not be edited",
    "// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.",
    ""
  ].join("\n"));

  // The release gate validates migrations and the generated Prisma client in
  // earlier steps. Calling `prisma generate` again here tries to rename the
  // Windows query-engine DLL and fails whenever a local dev server is using it.
  // Build Next directly so the isolated RC check does not interrupt that server.
  const result = spawnSync(process.execPath, [nextCli, "build"], {
    cwd: root,
    env: { ...process.env, NEXT_DIST_DIR: ".next-w9-build" },
    stdio: "inherit"
  });
  process.exitCode = result.status || 0;
} finally {
  writeFileSync(nextEnvPath, originalNextEnv);
  writeFileSync(tsconfigPath, originalTsconfig);
}
