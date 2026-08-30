import { Prisma, PrismaClient } from "@prisma/client";
import { catalogReconciliationEntries } from "../lib/catalog-reconciliation";
import { catalogVisualAssetMappings } from "../lib/catalog-visual-assets";

const prisma = new PrismaClient();
const checkMode = process.argv.includes("--check");

function date(value?: string | null) {
  return value ? new Date(`${value}T00:00:00.000Z`) : null;
}

function visualData(entry: (typeof catalogVisualAssetMappings)[number]) {
  return {
    catalogSection: entry.catalogSection,
    catalogArea: entry.catalogArea,
    catalogIdOrSlug: entry.catalogIdOrSlug,
    catalogTitle: entry.catalogTitle,
    matchType: entry.matchType,
    matchedReferenceMovement: entry.matchedReferenceMovement,
    imageAction: entry.imageAction,
    visualAssetMode: entry.visualAssetMode,
    pullFromReferenceMovement: entry.pullFromReferenceMovement,
    reusedFromReferenceId: entry.reusedFromReferenceId,
    reusedFromReferenceIds: JSON.stringify(entry.reusedFromReferenceIds),
    reusedFromMovementId: entry.reusedFromMovementId,
    reusedFromMovementIds: JSON.stringify(entry.reusedFromMovementIds),
    reusedFromAssetPattern: entry.reusedFromAssetPattern,
    reusedFromAssetPatterns: JSON.stringify(entry.reusedFromAssetPatterns),
    canonicalPoseId: entry.canonicalPoseId,
    imageSourcePath: entry.imageSourcePath,
    resolvedImagePaths: JSON.stringify(entry.resolvedImagePaths),
    physicalFilesFound: JSON.stringify(entry.physicalFilesFound),
    physicalFilesMissing: JSON.stringify(entry.physicalFilesMissing),
    requiredPhysicalFiles: JSON.stringify(entry.requiredPhysicalFiles || []),
    requiresCompleteAssetSet: entry.requiresCompleteAssetSet !== false,
    approvalRequirement: entry.approvalRequirement || "NONE",
    approvalStatus: entry.approvalStatus || "APPROVED",
    dependencyMovementIds: JSON.stringify(entry.dependencyMovementIds || []),
    releasePolicy: entry.releasePolicy || "COMPLETE",
    decisionDate: date(entry.decisionDate),
    approvalDate: date(entry.approvalDate),
    approvalNote: entry.approvalNote || null,
    blockReasonCode: entry.blockReasonCode || null,
    assetStatus: entry.assetStatus,
    videoStatus: entry.videoStatus,
    needsReview: entry.needsReview,
    notes: entry.notes
  };
}

function reconciliationData(entry: (typeof catalogReconciliationEntries)[number]) {
  return {
    catalogArea: entry.catalogArea,
    catalogIdOrSlug: entry.catalogIdOrSlug,
    catalogTitle: entry.catalogTitle,
    sourceCatalog: entry.sourceCatalog,
    reconciliationStatus: entry.reconciliationStatus,
    imageStatus: entry.imageStatus,
    archiveReason: entry.archiveReason,
    mappingCount: entry.mappingCount,
    matchedReferenceMovementIds: JSON.stringify(entry.matchedReferenceMovementIds),
    resolvedImagePaths: JSON.stringify(entry.resolvedImagePaths),
    candidateImagePaths: JSON.stringify(entry.candidateImagePaths || []),
    blockReasonCode: entry.blockReasonCode || null,
    needsReview: entry.needsReview
  };
}

async function sync(tx: Prisma.TransactionClient) {
  const visualIdentityKeys = catalogVisualAssetMappings.map((entry) => entry.identityKey);
  await tx.catalogVisualAsset.deleteMany({ where: { identityKey: { notIn: visualIdentityKeys } } });
  for (const entry of catalogVisualAssetMappings) {
    const data = visualData(entry);
    await tx.catalogVisualAsset.upsert({
      where: { identityKey: entry.identityKey },
      update: data,
      create: { identityKey: entry.identityKey, ...data }
    });
  }

  const reconciliationIdentityKeys = catalogReconciliationEntries.map((entry) => entry.identityKey);
  await tx.catalogReconciliation.deleteMany({ where: { identityKey: { notIn: reconciliationIdentityKeys } } });
  for (const entry of catalogReconciliationEntries) {
    const data = reconciliationData(entry);
    await tx.catalogReconciliation.upsert({
      where: { identityKey: entry.identityKey },
      update: data,
      create: { identityKey: entry.identityKey, ...data }
    });
  }
}

function comparable(value: unknown) {
  const parsed = JSON.parse(JSON.stringify(value));
  const sortKeys = (item: unknown): unknown => {
    if (Array.isArray(item)) return item.map(sortKeys);
    if (!item || typeof item !== "object") return item;
    return Object.fromEntries(
      Object.entries(item as Record<string, unknown>)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([key, entry]) => [key, sortKeys(entry)])
    );
  };
  return sortKeys(parsed);
}

async function assertParity() {
  const [visualRows, reconciliationRows] = await Promise.all([
    prisma.catalogVisualAsset.findMany({ orderBy: { identityKey: "asc" } }),
    prisma.catalogReconciliation.findMany({ orderBy: { identityKey: "asc" } })
  ]);
  const expectedVisual = catalogVisualAssetMappings
    .map((entry) => ({ identityKey: entry.identityKey, ...visualData(entry) }))
    .sort((a, b) => a.identityKey < b.identityKey ? -1 : a.identityKey > b.identityKey ? 1 : 0);
  const expectedReconciliation = catalogReconciliationEntries
    .map((entry) => ({ identityKey: entry.identityKey, ...reconciliationData(entry) }))
    .sort((a, b) => a.identityKey < b.identityKey ? -1 : a.identityKey > b.identityKey ? 1 : 0);
  const stripDatabaseFields = <T extends { id: string; createdAt: Date; updatedAt: Date }>(row: T) => {
    const rest = { ...row } as Record<string, unknown>;
    delete rest.id;
    delete rest.createdAt;
    delete rest.updatedAt;
    return rest;
  };
  if (JSON.stringify(comparable(visualRows.map(stripDatabaseFields))) !== JSON.stringify(comparable(expectedVisual))) {
    throw new Error("CatalogVisualAsset no banco diverge do manifesto gerado. Rode npm run catalog:sync.");
  }
  if (JSON.stringify(comparable(reconciliationRows.map(stripDatabaseFields))) !== JSON.stringify(comparable(expectedReconciliation))) {
    throw new Error("CatalogReconciliation no banco diverge do manifesto gerado. Rode npm run catalog:sync.");
  }
}

async function main() {
  if (checkMode) {
    await assertParity();
  } else {
    await prisma.$transaction((tx) => sync(tx), {
      isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
      maxWait: 5_000,
      timeout: 30_000
    });
    await assertParity();
  }

  const grouped = await prisma.catalogReconciliation.groupBy({
    by: ["reconciliationStatus"],
    _count: { _all: true }
  });
  console.log(JSON.stringify({
    mode: checkMode ? "check" : "sync",
    visualMappings: catalogVisualAssetMappings.length,
    reconciliationEntries: catalogReconciliationEntries.length,
    grouped
  }, null, 2));
}

main()
  .finally(async () => prisma.$disconnect());
