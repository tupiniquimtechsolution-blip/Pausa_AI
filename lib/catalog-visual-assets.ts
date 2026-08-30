import catalogVisualAssetData from "@/lib/catalog-visual-assets-data.json";

export type VisualAssetMode = "REUSED" | "NEW_REQUIRED" | "PARTIAL_REUSE" | "CHECK_BEFORE_GENERATE";
export type CatalogAssetStatus = "READY" | "PLANNED" | "NEEDS_REVIEW" | "REJECTED";
export type CatalogBlockReasonCode = "MISSING_REQUIRED_FILES" | "PENDING_VISUAL_APPROVAL" | "PENDING_ANATOMY_APPROVAL" | "REJECTED" | "NO_MAPPING";

export type CatalogVisualAssetMapping = {
  identityKey: string;
  catalogSection: string;
  catalogArea: string;
  catalogIdOrSlug: string;
  catalogTitle: string;
  matchType: string;
  matchedReferenceMovement: string;
  imageAction: string;
  visualAssetMode: VisualAssetMode;
  pullFromReferenceMovement: string;
  reusedFromReferenceId: string | null;
  reusedFromReferenceIds: string[];
  reusedFromMovementId: string | null;
  reusedFromMovementIds: string[];
  reusedFromAssetPattern: string;
  reusedFromAssetPatterns: string[];
  canonicalPoseId: string | null;
  imageSourcePath: string | null;
  resolvedImagePaths: string[];
  physicalFilesFound: string[];
  physicalFilesMissing: string[];
  assetStatus: CatalogAssetStatus;
  videoStatus: "PLANNED";
  needsReview: boolean;
  notes: string | null;
  requiredPhysicalFiles?: string[];
  requiresCompleteAssetSet?: boolean;
  approvalRequirement?: "NONE" | "VISUAL" | "ANATOMY";
  approvalStatus?: "PENDING" | "APPROVED" | "REJECTED";
  dependencyMovementIds?: string[];
  releasePolicy?: "PARTIAL_ALLOWED" | "COMPLETE" | "COMPLETE_AND_APPROVED";
  decisionDate?: string | null;
  approvalDate?: string | null;
  approvalNote?: string | null;
  blockReasonCode?: CatalogBlockReasonCode | null;
};

export const catalogVisualAssetMappings = catalogVisualAssetData.mappings as CatalogVisualAssetMapping[];

const mappingsByCatalogId = catalogVisualAssetMappings.reduce<Record<string, CatalogVisualAssetMapping[]>>((acc, item) => {
  (acc[item.catalogIdOrSlug] ||= []).push(item);
  return acc;
}, {});

const mappingsBySectionAndCatalogId = catalogVisualAssetMappings.reduce<Record<string, CatalogVisualAssetMapping[]>>((acc, item) => {
  (acc[`${item.catalogSection}::${item.catalogIdOrSlug}`] ||= []).push(item);
  return acc;
}, {});

function unique(items: string[]) {
  return Array.from(new Set(items.filter(Boolean)));
}

function mappingRank(item: CatalogVisualAssetMapping) {
  if (item.assetStatus === "READY") return 0;
  if (item.assetStatus === "NEEDS_REVIEW") return 1;
  return 2;
}

function sortMappings(items: CatalogVisualAssetMapping[]) {
  return [...items].sort((a, b) => mappingRank(a) - mappingRank(b) || b.resolvedImagePaths.length - a.resolvedImagePaths.length);
}

export function getCatalogVisualAssetCandidates(catalogIdOrSlug: string, catalogSection?: string) {
  const scoped = catalogSection ? mappingsBySectionAndCatalogId[`${catalogSection}::${catalogIdOrSlug}`] : undefined;
  return sortMappings(scoped || mappingsByCatalogId[catalogIdOrSlug] || []);
}

export function getCatalogVisualAssetMappings(catalogIdOrSlug: string, catalogSection?: string) {
  return getCatalogVisualAssetCandidates(catalogIdOrSlug, catalogSection).filter((mapping) => mapping.assetStatus === "READY");
}

export function getPrimaryCatalogVisualAssetCandidate(catalogIdOrSlug: string, catalogSection?: string) {
  return getCatalogVisualAssetCandidates(catalogIdOrSlug, catalogSection)[0] || null;
}

export function getPrimaryCatalogVisualAsset(catalogIdOrSlug: string, catalogSection?: string) {
  return getCatalogVisualAssetMappings(catalogIdOrSlug, catalogSection)[0] || null;
}

export function catalogVisualAssetImagePath(catalogIdOrSlug: string, catalogSection?: string) {
  return getPrimaryCatalogVisualAsset(catalogIdOrSlug, catalogSection)?.imageSourcePath || "";
}

export function catalogVisualAssetImageSequence(catalogIdOrSlug: string, catalogSection?: string) {
  return unique(getCatalogVisualAssetMappings(catalogIdOrSlug, catalogSection).flatMap((item) => item.resolvedImagePaths));
}

export function catalogVisualAssetImageDescriptions(catalogIdOrSlug: string, catalogSection?: string) {
  return catalogVisualAssetImageSequence(catalogIdOrSlug, catalogSection).map((path) => {
    const filename = path.split("/").pop()?.replace(/\.[a-z]+$/i, "") || "imagem instrucional";
    return filename.replace(/_/g, " ");
  });
}
