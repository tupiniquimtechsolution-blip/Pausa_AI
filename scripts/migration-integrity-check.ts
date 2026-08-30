import assert from "node:assert/strict";
import { resolve } from "node:path";
import { PrismaClient } from "@prisma/client";

type TableRow = { name: string };
type IntegrityRow = { integrity_check: string };
type CountRow = { count: bigint | number };

function databaseUrl(path: string) {
  return `file:${resolve(path).replaceAll("\\", "/")}`;
}

function safeIdentifier(value: string) {
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(value)) throw new Error(`Identificador SQLite inválido: ${value}`);
  return `"${value}"`;
}

async function tableNames(client: PrismaClient) {
  const rows = await client.$queryRawUnsafe<TableRow[]>(
    "SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' ORDER BY name"
  );
  return rows.map((row) => row.name).filter((name) => name !== "_prisma_migrations");
}

async function rowCount(client: PrismaClient, table: string) {
  const [row] = await client.$queryRawUnsafe<CountRow[]>(`SELECT COUNT(*) AS count FROM ${safeIdentifier(table)}`);
  return Number(row.count);
}

async function verifyDatabase(client: PrismaClient, label: string) {
  const [integrity] = await client.$queryRawUnsafe<IntegrityRow[]>("PRAGMA integrity_check");
  assert.equal(integrity?.integrity_check, "ok", `${label}: PRAGMA integrity_check falhou`);
  const foreignKeyIssues = await client.$queryRawUnsafe<unknown[]>("PRAGMA foreign_key_check");
  assert.equal(foreignKeyIssues.length, 0, `${label}: há violações de chave estrangeira`);
}

async function main() {
  const sourcePath = process.env.SOURCE_DB;
  const targetPath = process.env.TARGET_DB;
  if (!sourcePath || !targetPath) throw new Error("Defina SOURCE_DB e TARGET_DB.");

  const source = new PrismaClient({ datasourceUrl: databaseUrl(sourcePath) });
  const target = new PrismaClient({ datasourceUrl: databaseUrl(targetPath) });
  try {
    await Promise.all([verifyDatabase(source, "origem"), verifyDatabase(target, "destino")]);
    const [sourceTables, targetTables] = await Promise.all([tableNames(source), tableNames(target)]);
    const targetSet = new Set(targetTables);
    const missing = sourceTables.filter((table) => !targetSet.has(table));
    assert.deepEqual(missing, [], `Tabelas preexistentes ausentes no destino: ${missing.join(", ")}`);

    const differences: Array<{ table: string; source: number; target: number }> = [];
    for (const table of sourceTables) {
      const [sourceCount, targetCount] = await Promise.all([
        rowCount(source, table),
        rowCount(target, table)
      ]);
      if (sourceCount !== targetCount) differences.push({ table, source: sourceCount, target: targetCount });
    }
    assert.deepEqual(differences, [], `Contagens alteradas em tabelas preexistentes: ${JSON.stringify(differences)}`);
    console.info(JSON.stringify({
      event: "migration_integrity_check_passed",
      preservedTables: sourceTables.length,
      targetTables: targetTables.length,
      newTables: targetTables.filter((table) => !sourceTables.includes(table))
    }));
  } finally {
    await Promise.all([source.$disconnect(), target.$disconnect()]);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
