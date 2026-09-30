import { PrismaClient } from "@prisma/client";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const prisma = new PrismaClient();
const outputDir = join(process.cwd(), "prisma", "staging-seed");

type Row = Record<string, unknown>;
type ManifestItem = { table: string; rows: number; file?: string; strategy: string };

const genericSources = [
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

async function writeGeneric(table: string, rows: Row[], index: number, manifest: ManifestItem[]) {
  if (!rows.length) {
    manifest.push({ table, rows: 0, strategy: "generic-natural-conflict" });
    return;
  }
  const columns = Object.keys(rows[0]);
  const statements = [
    "-- Generated from the canonical Pausa AI seed using a synthetic SQLite database.",
    "-- Static/reference data only. No users, profiles, credentials, check-ins, GPS or health records.",
    "-- Generic import uses ON CONFLICT DO NOTHING so existing natural-key rows are preserved.",
    "-- Table: " + table,
    ""
  ];
  for (let offset = 0; offset < rows.length; offset += 50) {
    const chunk = rows.slice(offset, offset + 50);
    statements.push(
      "INSERT INTO " + ident("public") + "." + ident(table) +
        " (" + columns.map(ident).join(", ") + ") VALUES\n" +
        chunk.map((row) => "(" + columns.map((column) => literal(row[column])).join(", ") + ")").join(",\n") +
        "\nON CONFLICT DO NOTHING;\n"
    );
  }
  const file = String(index).padStart(2, "0") + "_" + table + ".sql";
  await writeFile(join(outputDir, file), statements.join("\n"), "utf8");
  manifest.push({ table, rows: rows.length, file, strategy: "generic-natural-conflict" });
}

async function writeContentCircuits(index: number, manifest: ManifestItem[]) {
  const [categories, circuits] = await Promise.all([
    prisma.contentCategory.findMany({ select: { id: true, slug: true } }),
    prisma.contentCircuit.findMany()
  ]);
  const categorySlug = new Map(categories.map((row) => [row.id, row.slug]));
  const statements = [
    "-- FK-safe import: categoryId is resolved from ContentCategory.slug in the target database.",
    ""
  ];
  for (const row of circuits) {
    const slug = categorySlug.get(row.categoryId);
    if (!slug) throw new Error("Missing category mapping for circuit " + row.slug);
    const { categoryId: _categoryId, ...rest } = row;
    const columns = Object.keys(rest);
    statements.push(
      "INSERT INTO \"public\".\"ContentCircuit\" (" +
        columns.map(ident).join(", ") + ', "categoryId")\n' +
        "SELECT " + columns.map((column) => literal((rest as Row)[column])).join(", ") + ', c."id"\n' +
        'FROM "public"."ContentCategory" c WHERE c."slug" = ' + literal(slug) + "\n" +
        "ON CONFLICT DO NOTHING;\n"
    );
  }
  const file = String(index).padStart(2, "0") + "_ContentCircuit.sql";
  await writeFile(join(outputDir, file), statements.join("\n"), "utf8");
  manifest.push({ table: "ContentCircuit", rows: circuits.length, file, strategy: "resolve-category-by-slug" });
}

async function writeContentMovements(index: number, manifest: ManifestItem[]) {
  const [circuits, movements] = await Promise.all([
    prisma.contentCircuit.findMany({ select: { id: true, slug: true } }),
    prisma.contentMovement.findMany()
  ]);
  const circuitSlug = new Map(circuits.map((row) => [row.id, row.slug]));
  const statements = [
    "-- FK-safe import: circuitId is resolved from ContentCircuit.slug in the target database.",
    ""
  ];
  for (const row of movements) {
    const slug = circuitSlug.get(row.circuitId);
    if (!slug) throw new Error("Missing circuit mapping for movement " + row.slug);
    const { circuitId: _circuitId, ...rest } = row;
    const columns = Object.keys(rest);
    statements.push(
      "INSERT INTO \"public\".\"ContentMovement\" (" +
        columns.map(ident).join(", ") + ', "circuitId")\n' +
        "SELECT " + columns.map((column) => literal((rest as Row)[column])).join(", ") + ', c."id"\n' +
        'FROM "public"."ContentCircuit" c WHERE c."slug" = ' + literal(slug) + "\n" +
        "ON CONFLICT DO NOTHING;\n"
    );
  }
  const file = String(index).padStart(2, "0") + "_ContentMovement.sql";
  await writeFile(join(outputDir, file), statements.join("\n"), "utf8");
  manifest.push({ table: "ContentMovement", rows: movements.length, file, strategy: "resolve-circuit-by-slug" });
}

async function main() {
  await rm(outputDir, { recursive: true, force: true });
  await mkdir(outputDir, { recursive: true });

  const manifest: ManifestItem[] = [];
  let index = 1;

  for (const [table, delegate] of genericSources) {
    const model = (prisma as unknown as Record<string, { findMany: () => Promise<Row[]> }>)[delegate];
    if (!model?.findMany) throw new Error("Unknown Prisma delegate: " + delegate);
    await writeGeneric(table, await model.findMany(), index++, manifest);
  }

  await writeContentCircuits(index++, manifest);
  await writeContentMovements(index++, manifest);

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
