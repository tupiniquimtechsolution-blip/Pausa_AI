import { PrismaClient } from "@prisma/client";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const prisma = new PrismaClient();

const sources = [
  ["Exercise", "exercise"],
  ["ExerciseInstruction", "exerciseInstruction"],
  ["Partner", "partner"],
  ["YogaPractice", "yogaPractice"],
  ["YogaSequence", "yogaSequence"],
  ["Achievement", "achievement"],
  ["Mission", "mission"],
  ["CatalogVisualAsset", "catalogVisualAsset"],
  ["CatalogReconciliation", "catalogReconciliation"],
  ["InstructionalVideo", "instructionalVideo"],
  ["ContentCategory", "contentCategory"],
  ["ContentCircuit", "contentCircuit"],
  ["ContentMovement", "contentMovement"],
  ["EditorialCard", "editorialCard"],
  ["WorkoutRoutine", "workoutRoutine"]
] as const;

function ident(value: string) {
  return '"' + value.replaceAll('"', '""') + '"';
}

function literal(value: unknown): string {
  if (value === null || value === undefined) return "NULL";
  if (value instanceof Date) return "'" + value.toISOString().replaceAll("'", "''") + "'";
  if (typeof value === "boolean") return value ? "TRUE" : "FALSE";
  if (typeof value === "bigint") return value.toString();
  if (typeof value === "number") {
    if (!Number.isFinite(value)) throw new Error("Non-finite number cannot be exported");
    return String(value);
  }
  if (Buffer.isBuffer(value)) return "decode('" + value.toString("hex") + "', 'hex')";
  const text = typeof value === "string" ? value : JSON.stringify(value);
  return "'" + text.replaceAll("'", "''") + "'";
}

async function main() {
  const outputDir = join(process.cwd(), "prisma", "staging-seed");
  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });

  const manifest: Array<{ table: string; delegate: string; rows: number; file?: string }> = [];

  for (const [table, delegate] of sources) {
    const model = (prisma as unknown as Record<string, { findMany: () => Promise<Record<string, unknown>[]> }>)[delegate];
    if (!model?.findMany) throw new Error("Unknown Prisma delegate: " + delegate);
    const rows = await model.findMany();

    if (!rows.length) {
      manifest.push({ table, delegate, rows: 0 });
      continue;
    }

    const columns = Object.keys(rows[0]);
    const statements: string[] = [
      "-- Generated from the canonical Pausa AI seed using a synthetic SQLite database.",
      "-- Static/reference data only. No users, profiles, credentials, check-ins, GPS or health records.",
      "-- Table: " + table,
      ""
    ];

    const chunkSize = 50;
    for (let offset = 0; offset < rows.length; offset += chunkSize) {
      const chunk = rows.slice(offset, offset + chunkSize);
      const values = chunk
        .map((row) => "(" + columns.map((column) => literal(row[column])).join(", ") + ")")
        .join(",\n");
      statements.push(
        "INSERT INTO " + ident("public") + "." + ident(table) +
          " (" + columns.map(ident).join(", ") + ") VALUES\n" +
          values + "\nON CONFLICT DO NOTHING;\n"
      );
    }

    const index = String(manifest.length + 1).padStart(2, "0");
    const file = index + "_" + table + ".sql";
    await writeFile(join(outputDir, file), statements.join("\n"), "utf8");
    manifest.push({ table, delegate, rows: rows.length, file });
  }

  const totalRows = manifest.reduce((sum, item) => sum + item.rows, 0);
  await writeFile(
    join(outputDir, "manifest.json"),
    JSON.stringify({ generatedAt: new Date().toISOString(), totalRows, tables: manifest }, null, 2) + "\n",
    "utf8"
  );

  console.info(JSON.stringify({ event: "static_seed_export_complete", totalRows, tables: manifest }));
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => prisma.$disconnect());
