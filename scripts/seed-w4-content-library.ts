import { PrismaClient } from "@prisma/client";
import { catalogReconciliationEntries } from "../lib/catalog-reconciliation";
import {
  CONTENT_APPROVED_STATUS,
  CONTENT_LIBRARY_VERSION,
  CONTENT_LOCALE,
  contentCategoryDefinition
} from "../lib/content-library/definitions";

const approvedInstructionSlugs = new Set(
  catalogReconciliationEntries
    .filter((entry) => entry.catalogArea === "EXERCISE_INSTRUCTION" && entry.reconciliationStatus === "ACTIVE")
    .map((entry) => entry.catalogIdOrSlug)
);

function jsonList(value: string) {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function seedW4ContentLibrary(prisma: PrismaClient) {
  const instructions = await prisma.exerciseInstruction.findMany({
    orderBy: [{ categoryGroup: "asc" }, { category: "asc" }, { level: "asc" }, { title: "asc" }]
  });
  const approvedAt = new Date("2026-07-25T12:00:00.000Z");
  const supported = instructions.filter((instruction) => {
    const definition = contentCategoryDefinition(instruction.categoryGroup, instruction.category);
    if (!definition) return false;
    return instruction.categoryGroup === "MENTAL" || approvedInstructionSlugs.has(instruction.slug);
  });
  const grouped = new Map<string, typeof supported>();
  for (const instruction of supported) {
    const key = `${instruction.categoryGroup}:${instruction.category}`;
    grouped.set(key, [...(grouped.get(key) || []), instruction]);
  }

  for (const [key, entries] of grouped) {
    const [group, category] = key.split(":");
    const definition = contentCategoryDefinition(group, category);
    if (!definition || !entries.length) continue;
    const pillar = group === "PHYSICAL" ? "BODY" : "MIND";
    const categoryRecord = await prisma.contentCategory.upsert({
      where: { slug: `${pillar.toLowerCase()}-${definition.slug}` },
      update: {
        pillar,
        title: definition.title,
        description: definition.description,
        modality: definition.modality,
        locale: CONTENT_LOCALE,
        status: CONTENT_APPROVED_STATUS,
        approvedAt,
        version: CONTENT_LIBRARY_VERSION,
        sortOrder: definition.sortOrder
      },
      create: {
        slug: `${pillar.toLowerCase()}-${definition.slug}`,
        pillar,
        title: definition.title,
        description: definition.description,
        modality: definition.modality,
        locale: CONTENT_LOCALE,
        status: CONTENT_APPROVED_STATUS,
        approvedAt,
        version: CONTENT_LIBRARY_VERSION,
        sortOrder: definition.sortOrder
      }
    });
    const circuit = await prisma.contentCircuit.upsert({
      where: { slug: `${categoryRecord.slug}-essenciais` },
      update: {
        categoryId: categoryRecord.id,
        title: `${definition.title}: essenciais`,
        objective: definition.description,
        difficulty: "ADAPTIVE",
        level: Math.min(...entries.map((item) => item.level)),
        durationSeconds: entries.find((item) => item.durationSeconds)?.durationSeconds || null,
        locale: CONTENT_LOCALE,
        status: CONTENT_APPROVED_STATUS,
        approvedAt,
        version: CONTENT_LIBRARY_VERSION,
        sortOrder: 10
      },
      create: {
        slug: `${categoryRecord.slug}-essenciais`,
        categoryId: categoryRecord.id,
        title: `${definition.title}: essenciais`,
        objective: definition.description,
        difficulty: "ADAPTIVE",
        level: Math.min(...entries.map((item) => item.level)),
        durationSeconds: entries.find((item) => item.durationSeconds)?.durationSeconds || null,
        locale: CONTENT_LOCALE,
        status: CONTENT_APPROVED_STATUS,
        approvedAt,
        version: CONTENT_LIBRARY_VERSION,
        sortOrder: 10
      }
    });

    for (const [index, instruction] of entries.entries()) {
      const assets = catalogReconciliationEntries.find(
        (entry) => entry.catalogArea === "EXERCISE_INSTRUCTION" && entry.catalogIdOrSlug === instruction.slug
      )?.resolvedImagePaths || [];
      await prisma.contentMovement.upsert({
        where: { sourceType_sourceKey: { sourceType: "EXERCISE_INSTRUCTION", sourceKey: instruction.slug } },
        update: {
          circuitId: circuit.id,
          title: instruction.title,
          objective: instruction.objective,
          level: instruction.level,
          durationSeconds: instruction.durationSeconds,
          difficulty: instruction.intensity,
          progression: `Nível ${instruction.level}; liberação ${instruction.unlockLevel}.`,
          thumbnailKey: instruction.imageKey,
          relatedAssetsJson: JSON.stringify(assets),
          contraindications: JSON.stringify(jsonList(instruction.contraindications)),
          locale: CONTENT_LOCALE,
          status: CONTENT_APPROVED_STATUS,
          approvedAt,
          version: CONTENT_LIBRARY_VERSION,
          sortOrder: index
        },
        create: {
          slug: instruction.slug,
          circuitId: circuit.id,
          sourceType: "EXERCISE_INSTRUCTION",
          sourceKey: instruction.slug,
          title: instruction.title,
          objective: instruction.objective,
          level: instruction.level,
          durationSeconds: instruction.durationSeconds,
          difficulty: instruction.intensity,
          progression: `Nível ${instruction.level}; liberação ${instruction.unlockLevel}.`,
          thumbnailKey: instruction.imageKey,
          relatedAssetsJson: JSON.stringify(assets),
          contraindications: JSON.stringify(jsonList(instruction.contraindications)),
          locale: CONTENT_LOCALE,
          status: CONTENT_APPROVED_STATUS,
          approvedAt,
          version: CONTENT_LIBRARY_VERSION,
          sortOrder: index
        }
      });
    }
  }
}

async function main() {
  const prisma = new PrismaClient();
  try {
    await seedW4ContentLibrary(prisma);
  } finally {
    await prisma.$disconnect();
  }
}

if (process.argv[1]?.includes("seed-w4-content-library")) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
