import assert from "node:assert/strict";
import {
  catalogVisualAssetImageSequence,
  getCatalogVisualAssetCandidates,
  getCatalogVisualAssetMappings
} from "../lib/catalog-visual-assets";
import { catalogVisualAssetDecisions } from "../lib/catalog-visual-decisions";
import {
  deriveCatalogMappingState,
  resolveDependencyApproval
} from "../lib/catalog-reconciliation-engine";

assert.equal(catalogVisualAssetDecisions.length, 27, "As 27 decisoes semanticas devem permanecer declaradas.");
assert.equal(
  new Set(catalogVisualAssetDecisions.map((decision) => `${decision.catalogArea}::${decision.catalogIdOrSlug}`)).size,
  27,
  "Cada decisao precisa de identidade de area unica."
);

const partialDecisions = catalogVisualAssetDecisions.filter((decision) =>
  decision.dependencyMovementIds.includes("ref_003_mov_04") && decision.dependencyMovementIds.includes("ref_003_mov_09")
);
assert.equal(partialDecisions.length, 3, "A combinacao REF 003 mov. 04 + 09 deve ter tres consumidores.");
assert(partialDecisions.every((decision) => decision.releasePolicy === "PARTIAL_ALLOWED"));

for (const id of ["ref_004_mov_03", "ref_011_mov_25", "ref_008_mov_05"]) {
  assert.equal(getCatalogVisualAssetMappings(id).length, 0, `${id} nao pode aparecer nos getters publicos.`);
  assert.equal(catalogVisualAssetImageSequence(id).length, 0, `${id} nao pode expor imagens publicas.`);
  assert(getCatalogVisualAssetCandidates(id).length > 0, `${id} deve continuar auditavel nos getters internos.`);
}

const duplicateSlug = getCatalogVisualAssetCandidates("cobra-suave");
assert.equal(duplicateSlug.length, 2, "O slug compartilhado deve preservar os dois catalogos.");
for (const candidate of duplicateSlug) {
  const scoped = getCatalogVisualAssetCandidates("cobra-suave", candidate.catalogSection);
  assert(scoped.length > 0 && scoped.every((item) => item.catalogSection === candidate.catalogSection));
}

const required = ["/step-01.png", "/step-02.png"];
const missing = deriveCatalogMappingState({
  physicalFilesFound: [required[0]],
  requiredPhysicalFiles: required,
  releasePolicy: "COMPLETE_AND_APPROVED",
  approvalRequirement: "VISUAL",
  approvalStatus: "PENDING"
});
assert.deepEqual(missing, {
  assetStatus: "PLANNED",
  blockReasonCode: "MISSING_REQUIRED_FILES",
  needsReview: false
});

const awaitingApproval = deriveCatalogMappingState({
  physicalFilesFound: required,
  requiredPhysicalFiles: required,
  releasePolicy: "COMPLETE_AND_APPROVED",
  approvalRequirement: "VISUAL",
  approvalStatus: "PENDING"
});
assert.equal(awaitingApproval.assetStatus, "NEEDS_REVIEW", "Completar arquivos nao pode publicar sem aprovacao.");

const approved = deriveCatalogMappingState({
  physicalFilesFound: required,
  requiredPhysicalFiles: required,
  releasePolicy: "COMPLETE_AND_APPROVED",
  approvalRequirement: "VISUAL",
  approvalStatus: "APPROVED"
});
assert.equal(approved.assetStatus, "READY");

const rejected = deriveCatalogMappingState({
  physicalFilesFound: required,
  requiredPhysicalFiles: required,
  releasePolicy: "COMPLETE_AND_APPROVED",
  approvalRequirement: "ANATOMY",
  approvalStatus: "REJECTED"
});
assert.equal(rejected.blockReasonCode, "REJECTED");

const ownApproval = {
  approvalRequirement: "NONE" as const,
  approvalStatus: "APPROVED" as const,
  approvalDate: "2026-07-18",
  approvalNote: "Consumidor sem gate proprio."
};
const inheritedPending = resolveDependencyApproval(ownApproval, [{
  movementId: "ref_004_mov_03",
  approvalRequirement: "VISUAL",
  approvalStatus: "PENDING",
  approvalDate: null,
  approvalNote: "Aguarda revisao."
}]);
assert.equal(inheritedPending.approvalStatus, "PENDING");

const inheritedApproved = resolveDependencyApproval(ownApproval, [{
  movementId: "ref_004_mov_03",
  approvalRequirement: "VISUAL",
  approvalStatus: "APPROVED",
  approvalDate: "2026-07-18",
  approvalNote: "Aprovado."
}]);
assert.deepEqual(inheritedApproved, ownApproval, "Aprovacao da origem deve liberar o consumidor sem gate proprio.");

assert.deepEqual(
  deriveCatalogMappingState({
    physicalFilesFound: required,
    requiredPhysicalFiles: required,
    releasePolicy: "COMPLETE",
    approvalRequirement: "NONE",
    approvalStatus: "APPROVED"
  }),
  deriveCatalogMappingState({
    physicalFilesFound: required,
    requiredPhysicalFiles: required,
    releasePolicy: "COMPLETE",
    approvalRequirement: "NONE",
    approvalStatus: "APPROVED"
  }),
  "O motor deve ser deterministico para a mesma entrada."
);

console.log("Catalog checks passaram: 27 decisoes, gates, dependencias, escopo e getters seguros.");
