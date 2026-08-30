import { PrismaClient } from "@prisma/client";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { exerciseImagePath } from "../lib/exercise-images";

const prisma = new PrismaClient();

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(`W4 gate: ${message}`);
}

function publicAssetExists(path: string) {
  return Boolean(path) && existsSync(join(process.cwd(), "public", path.replace(/^\/+/, "")));
}

async function main() {
  const categories = await prisma.contentCategory.findMany({
    where: { status: "APPROVED" },
    include: { circuits: { include: { movements: true } } }
  });
  assert(categories.length > 0, "nenhuma categoria aprovada");
  assert(categories.some((item) => item.pillar === "BODY"), "biblioteca Corpo ausente");
  assert(categories.some((item) => item.pillar === "MIND"), "biblioteca Mente ausente");

  const movements = categories.flatMap((category) => {
    assert(category.locale === "pt-BR", `locale incompleto em ${category.slug}`);
    assert(category.approvedAt, `categoria sem aprovação: ${category.slug}`);
    assert(category.circuits.length > 0, `categoria vazia: ${category.slug}`);
    return category.circuits.flatMap((circuit) => {
      assert(circuit.categoryId === category.id, `circuito órfão: ${circuit.slug}`);
      assert(circuit.locale === "pt-BR", `locale incompleto em ${circuit.slug}`);
      assert(circuit.approvedAt, `circuito sem aprovação: ${circuit.slug}`);
      assert(circuit.movements.length > 0, `circuito vazio: ${circuit.slug}`);
      return circuit.movements;
    });
  });

  for (const movement of movements) {
    assert(movement.circuitId, `movimento órfão: ${movement.slug}`);
    assert(movement.locale === "pt-BR", `locale incompleto em ${movement.slug}`);
    assert(movement.approvedAt, `movimento sem aprovação: ${movement.slug}`);
    assert(movement.thumbnailKey, `thumbnail ausente: ${movement.slug}`);
    assert(movement.objective && movement.progression && movement.difficulty, `metadados incompletos: ${movement.slug}`);
    assert(publicAssetExists(exerciseImagePath(movement.thumbnailKey)), `arquivo de thumbnail ausente: ${movement.slug}`);
  }

  const approvedEditorial = await prisma.editorialCard.findMany({ where: { status: "APPROVED" } });
  for (const card of approvedEditorial) {
    assert(card.approvedAt, `card editorial sem aprovação: ${card.slug}`);
    assert(card.locale === "pt-BR", `card editorial sem locale: ${card.slug}`);
    assert(card.sourceName && card.sourceUrl, `card editorial sem fonte: ${card.slug}`);
    assert(card.equivalentText, `card editorial sem texto equivalente: ${card.slug}`);
    assert(publicAssetExists(card.imagePath), `imagem editorial ausente: ${card.slug}`);
  }

  const movementPage = readFileSync(join(process.cwd(), "app/app/movimento/page.tsx"), "utf8");
  for (const forbidden of ["Regras dessa volta", "Retorno completo, sem pressa", "Como decidir intensidade"]) {
    assert(!movementPage.includes(forbidden), `bloco removido reapareceu: ${forbidden}`);
  }

  console.log(JSON.stringify({
    ok: true,
    categories: categories.length,
    circuits: categories.reduce((sum, item) => sum + item.circuits.length, 0),
    movements: movements.length,
    editorialCardsPublished: approvedEditorial.length,
    pillars: Object.fromEntries(["BODY", "MIND"].map((pillar) => [pillar, categories.filter((item) => item.pillar === pillar).length]))
  }, null, 2));
}

main()
  .finally(async () => prisma.$disconnect())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
