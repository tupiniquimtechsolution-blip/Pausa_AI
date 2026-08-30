import catalogReconciliationData from "@/lib/catalog-reconciliation-data.json";

export type CatalogArea = "EXERCISE" | "EXERCISE_INSTRUCTION" | "STRETCHING_EXERCISE" | "YOGA_PRACTICE" | "YOGA_SEQUENCE";
export type CatalogReconciliationStatus = "ACTIVE" | "ARCHIVED_MISSING_IMAGE" | "ARCHIVED_NEEDS_REVIEW" | "ARCHIVED_REJECTED";
export type CatalogImageStatus = "READY" | "PARTIAL" | "MISSING" | "NEEDS_REVIEW" | "REJECTED";

export type CatalogReconciliationEntry = {
  identityKey: string;
  catalogArea: CatalogArea;
  catalogIdOrSlug: string;
  catalogTitle: string;
  sourceCatalog: "PRE_REFERENCE_CATALOG" | "REFERENCE_EXTRACTED";
  reconciliationStatus: CatalogReconciliationStatus;
  imageStatus: CatalogImageStatus;
  archiveReason: string | null;
  mappingCount: number;
  matchedReferenceMovementIds: string[];
  resolvedImagePaths: string[];
  candidateImagePaths?: string[];
  blockReasonCode?: "MISSING_REQUIRED_FILES" | "PENDING_VISUAL_APPROVAL" | "PENDING_ANATOMY_APPROVAL" | "REJECTED" | "NO_MAPPING" | null;
  needsReview: boolean;
};

export const catalogReconciliationEntries = catalogReconciliationData.entries as CatalogReconciliationEntry[];

const reconciliationByIdentity = new Map(
  catalogReconciliationEntries.map((entry) => [entry.identityKey, entry])
);

export function getCatalogReconciliationEntry(catalogArea: CatalogArea, catalogIdOrSlug: string) {
  return reconciliationByIdentity.get(`${catalogArea}::${catalogIdOrSlug}`) || null;
}

export function isCatalogEntryActive(catalogArea: CatalogArea, catalogIdOrSlug: string) {
  const entry = getCatalogReconciliationEntry(catalogArea, catalogIdOrSlug);
  return entry?.reconciliationStatus === "ACTIVE";
}

export function activeCatalogIds(catalogArea: CatalogArea) {
  return catalogReconciliationEntries
    .filter((entry) => entry.catalogArea === catalogArea && entry.reconciliationStatus === "ACTIVE")
    .map((entry) => entry.catalogIdOrSlug);
}

export function archivedCatalogIds(catalogArea: CatalogArea) {
  return catalogReconciliationEntries
    .filter((entry) => entry.catalogArea === catalogArea && entry.reconciliationStatus !== "ACTIVE")
    .map((entry) => entry.catalogIdOrSlug);
}
