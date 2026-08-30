import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join, resolve, sep } from "node:path";
import { spawnSync } from "node:child_process";
import { PrismaClient } from "@prisma/client";

const root = process.cwd();
const source = resolve(process.env.SOURCE_DB || join(root, "prisma", "dev.db"));
const tempRoot = resolve(root, "tmp");
mkdirSync(tempRoot, { recursive: true });
const work = mkdtempSync(join(tempRoot, "w8-db-drill-"));

function dbUrl(path) {
  return `file:${resolve(path).replaceAll("\\", "/")}`;
}

function sha256(path) {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

async function inspect(path) {
  const client = new PrismaClient({ datasourceUrl: dbUrl(path) });
  try {
    const [integrity] = await client.$queryRawUnsafe("PRAGMA integrity_check");
    const foreignKeys = await client.$queryRawUnsafe("PRAGMA foreign_key_check");
    const [migrations] = await client.$queryRawUnsafe(
      'SELECT COUNT(*) AS count FROM "_prisma_migrations" WHERE finished_at IS NOT NULL'
    );
    const tables = await client.$queryRawUnsafe(
      "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name"
    );
    const counts = {};
    for (const { name } of tables) {
      if (name === "_prisma_migrations") continue;
      if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) throw new Error(`Unsafe table name: ${name}`);
      const [row] = await client.$queryRawUnsafe(`SELECT COUNT(*) AS count FROM "${name}"`);
      counts[name] = Number(row.count);
    }
    return {
      integrity: integrity.integrity_check,
      foreignKeyIssues: foreignKeys.length,
      migrations: Number(migrations.count),
      counts
    };
  } finally {
    await client.$disconnect();
  }
}

async function main() {
  assert.ok(existsSync(source), `Representative database not found: ${source}`);
  const representative = join(work, "representative.db");
  const backup = join(work, "backup.db");
  const rollbackTarget = join(work, "rollback-target.db");
  const fresh = join(work, "fresh.db");
  copyFileSync(source, representative);

  const sourceState = await inspect(source);
  const representativeState = await inspect(representative);
  assert.deepEqual(representativeState, sourceState, "Representative copy differs from source.");

  copyFileSync(representative, backup);
  copyFileSync(representative, rollbackTarget);
  const mutationClient = new PrismaClient({ datasourceUrl: dbUrl(rollbackTarget) });
  await mutationClient.$executeRawUnsafe('CREATE TABLE "W8RollbackProbe" ("id" TEXT PRIMARY KEY)');
  await mutationClient.$disconnect();
  assert.notEqual(sha256(rollbackTarget), sha256(backup), "Rollback probe did not mutate the target.");
  copyFileSync(backup, rollbackTarget);
  assert.equal(sha256(rollbackTarget), sha256(backup), "Restored database hash differs from backup.");
  assert.deepEqual(await inspect(rollbackTarget), sourceState, "Restored database state differs from source.");

  writeFileSync(fresh, "");
  const prismaCli = resolve(root, "node_modules", "prisma", "build", "index.js");
  const migration = spawnSync(process.execPath, [prismaCli, "migrate", "deploy", "--schema", "prisma/schema.prisma"], {
    cwd: root,
    env: { ...process.env, DATABASE_URL: dbUrl(fresh) },
    encoding: "utf8"
  });
  if (migration.status !== 0) {
    throw new Error(`Fresh migration failed:\n${migration.stdout}\n${migration.stderr}`);
  }
  const freshState = await inspect(fresh);
  assert.equal(freshState.integrity, "ok");
  assert.equal(freshState.foreignKeyIssues, 0);
  assert.equal(freshState.migrations, sourceState.migrations);

  console.info(JSON.stringify({
    event: "w8_database_drill_passed",
    migrationCount: freshState.migrations,
    representativeTables: Object.keys(sourceState.counts).length,
    representativeRows: Object.values(sourceState.counts).reduce((sum, count) => sum + count, 0),
    backupHash: sha256(backup),
    restoredHash: sha256(rollbackTarget),
    freshIntegrity: freshState.integrity,
    foreignKeyIssues: freshState.foreignKeyIssues,
    temporaryArtifactsRemoved: true
  }));
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(() => {
    const resolvedWork = resolve(work);
    if (resolvedWork.startsWith(`${tempRoot}${sep}`)) rmSync(resolvedWork, { recursive: true, force: true });
  });
