import type { ApprovalRequirement, ApprovalStatus, ReleasePolicy } from "@/lib/catalog-visual-decisions";

export type CatalogAssetStatus = "READY" | "PLANNED" | "NEEDS_REVIEW" | "REJECTED";
export type CatalogBlockReasonCode =
  | "MISSING_REQUIRED_FILES"
  | "PENDING_VISUAL_APPROVAL"
  | "PENDING_ANATOMY_APPROVAL"
  | "REJECTED"
  | "NO_MAPPING";

export type CatalogReconciliationStatus =
  | "ACTIVE"
  | "ARCHIVED_MISSING_IMAGE"
  | "ARCHIVED_NEEDS_REVIEW"
  | "ARCHIVED_REJECTED";
export type CatalogImageStatus = "READY" | "PARTIAL" | "MISSING" | "NEEDS_REVIEW" | "REJECTED";

export type MappingStateInput = {
  physicalFilesFound: string[];
  requiredPhysicalFiles: string[];
  releasePolicy: ReleasePolicy;
  approvalRequirement: ApprovalRequirement;
  approvalStatus: ApprovalStatus;
};

export type MappingState = {
  assetStatus: CatalogAssetStatus;
  blockReasonCode: CatalogBlockReasonCode | null;
  needsReview: boolean;
};

export type CatalogApprovalState = {
  approvalRequirement: ApprovalRequirement;
  approvalStatus: ApprovalStatus;
  approvalDate: string | null;
  approvalNote: string | null;
};

export function resolveDependencyApproval(
  own: CatalogApprovalState,
  dependencies: Array<CatalogApprovalState & { movementId: string }>
): CatalogApprovalState {
  const rejected = dependencies.find((dependency) => dependency.approvalStatus === "REJECTED");
  if (rejected) {
    return {
      approvalRequirement: rejected.approvalRequirement,
      approvalStatus: "REJECTED",
      approvalDate: rejected.approvalDate,
      approvalNote: `Dependencia rejeitada: ${rejected.movementId}. ${rejected.approvalNote || ""}`.trim()
    };
  }
  const pending = dependencies.find((dependency) =>
    dependency.approvalRequirement !== "NONE" && dependency.approvalStatus === "PENDING"
  );
  if (!pending) return own;
  return {
    approvalRequirement: pending.approvalRequirement,
    approvalStatus: "PENDING",
    approvalDate: null,
    approvalNote: `Aguarda aprovacao da dependencia ${pending.movementId}. ${pending.approvalNote || ""}`.trim()
  };
}

export type ReconciliationMappingState = MappingState & {
  resolvedImagePaths: string[];
  physicalFilesFound: string[];
  physicalFilesMissing: string[];
};

export type ReconciliationState = {
  reconciliationStatus: CatalogReconciliationStatus;
  imageStatus: CatalogImageStatus;
  blockReasonCode: CatalogBlockReasonCode | null;
  archiveReason: string | null;
  resolvedImagePaths: string[];
  candidateImagePaths: string[];
  needsReview: boolean;
};

function unique(items: string[]) {
  return Array.from(new Set(items.filter(Boolean)));
}

export function deriveCatalogMappingState(input: MappingStateInput): MappingState {
  if (input.approvalStatus === "REJECTED") {
    return { assetStatus: "REJECTED", blockReasonCode: "REJECTED", needsReview: false };
  }

  const found = new Set(input.physicalFilesFound);
  const missingRequired = input.requiredPhysicalFiles.filter((path) => !found.has(path));
  const requiresCompleteSet = input.releasePolicy !== "PARTIAL_ALLOWED";

  if (requiresCompleteSet && missingRequired.length > 0) {
    return { assetStatus: "PLANNED", blockReasonCode: "MISSING_REQUIRED_FILES", needsReview: false };
  }

  if (input.approvalRequirement !== "NONE" && input.approvalStatus === "PENDING") {
    return {
      assetStatus: "NEEDS_REVIEW",
      blockReasonCode: input.approvalRequirement === "ANATOMY" ? "PENDING_ANATOMY_APPROVAL" : "PENDING_VISUAL_APPROVAL",
      needsReview: true
    };
  }

  if (input.physicalFilesFound.length === 0) {
    return { assetStatus: "PLANNED", blockReasonCode: "MISSING_REQUIRED_FILES", needsReview: false };
  }

  return { assetStatus: "READY", blockReasonCode: null, needsReview: false };
}

export function deriveCatalogReconciliationState(
  mappings: ReconciliationMappingState[],
  options: { sequence: boolean }
): ReconciliationState {
  const ready = mappings.filter((mapping) => mapping.assetStatus === "READY" && mapping.resolvedImagePaths.length > 0);
  const rejected = mappings.filter((mapping) => mapping.assetStatus === "REJECTED");
  const review = mappings.filter((mapping) => mapping.assetStatus === "NEEDS_REVIEW");
  const candidateImagePaths = unique(mappings.flatMap((mapping) => mapping.physicalFilesFound));
  const sequenceComplete = options.sequence && mappings.length > 0 && mappings.every((mapping) =>
    mapping.assetStatus === "READY" && mapping.resolvedImagePaths.length > 0
  );
  const hasUsableImages = options.sequence ? sequenceComplete : ready.length > 0;
  const resolvedImagePaths = unique(ready.flatMap((mapping) => mapping.resolvedImagePaths));

  if (hasUsableImages) {
    const incomplete = mappings.some((mapping) => mapping.assetStatus !== "READY" || mapping.physicalFilesMissing.length > 0);
    return {
      reconciliationStatus: "ACTIVE",
      imageStatus: incomplete ? "PARTIAL" : "READY",
      blockReasonCode: null,
      archiveReason: null,
      resolvedImagePaths,
      candidateImagePaths,
      needsReview: false
    };
  }

  if (rejected.length > 0) {
    return {
      reconciliationStatus: "ARCHIVED_REJECTED",
      imageStatus: "REJECTED",
      blockReasonCode: "REJECTED",
      archiveReason: "O mapeamento foi rejeitado explicitamente no arquivo versionado de decisoes.",
      resolvedImagePaths: [],
      candidateImagePaths,
      needsReview: false
    };
  }

  if (review.length > 0) {
    const anatomy = review.some((mapping) => mapping.blockReasonCode === "PENDING_ANATOMY_APPROVAL");
    return {
      reconciliationStatus: "ARCHIVED_NEEDS_REVIEW",
      imageStatus: "NEEDS_REVIEW",
      blockReasonCode: anatomy ? "PENDING_ANATOMY_APPROVAL" : "PENDING_VISUAL_APPROVAL",
      archiveReason: anatomy
        ? "O mapeamento aguarda aprovacao anatomica humana explicita."
        : "O mapeamento aguarda aprovacao visual humana explicita.",
      resolvedImagePaths: [],
      candidateImagePaths,
      needsReview: true
    };
  }

  return {
    reconciliationStatus: "ARCHIVED_MISSING_IMAGE",
    imageStatus: "MISSING",
    blockReasonCode: mappings.length > 0 ? "MISSING_REQUIRED_FILES" : "NO_MAPPING",
    archiveReason: mappings.length > 0
      ? "O exercicio possui mapeamento, mas ainda faltam arquivos fisicos obrigatorios."
      : "Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias.",
    resolvedImagePaths: [],
    candidateImagePaths,
    needsReview: false
  };
}
