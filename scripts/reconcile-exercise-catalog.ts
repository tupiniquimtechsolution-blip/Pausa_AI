import { existsSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { basename, dirname, join, relative, resolve } from "node:path";
import { exerciseInstructionSeeds } from "../lib/exercise-instruction-data";
import { stretchingExercises } from "../lib/stretching-exercises";
import { yogaPracticeSeeds, yogaSequenceSeeds } from "../lib/yoga-data";
import { catalogVisualAssetDecisionByKey } from "../lib/catalog-visual-decisions";
import {
  deriveCatalogMappingState,
  deriveCatalogReconciliationState,
  resolveDependencyApproval,
  type CatalogAssetStatus,
  type CatalogBlockReasonCode,
  type CatalogImageStatus as ImageStatus,
  type CatalogReconciliationStatus as ReconciliationStatus
} from "../lib/catalog-reconciliation-engine";
import type { ApprovalRequirement, ApprovalStatus, ReleasePolicy } from "../lib/catalog-visual-decisions";
import { requiresCatalogVisualAsset } from "../lib/catalog-policy";

type VisualMapping = {
  identityKey: string;
  catalogSection: string;
  catalogArea: string;
  catalogIdOrSlug: string;
  catalogTitle: string;
  matchType: string;
  matchedReferenceMovement: string;
  imageAction: string;
  visualAssetMode: string;
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
  requiredPhysicalFiles: string[];
  requiresCompleteAssetSet: boolean;
  approvalRequirement: ApprovalRequirement;
  approvalStatus: ApprovalStatus;
  dependencyMovementIds: string[];
  releasePolicy: ReleasePolicy;
  decisionDate: string | null;
  approvalDate: string | null;
  approvalNote: string | null;
  blockReasonCode: CatalogBlockReasonCode | null;
};

type VisualData = {
  source: string;
  generatedAt: string;
  totalMappings: number;
  mappings: VisualMapping[];
};

type CatalogSourceEntry = {
  catalogArea: string;
  catalogIdOrSlug: string;
  catalogTitle: string;
  sourceCatalog: "PRE_REFERENCE_CATALOG" | "REFERENCE_EXTRACTED";
};

type CatalogReconciliationEntry = CatalogSourceEntry & {
  identityKey: string;
  reconciliationStatus: ReconciliationStatus;
  imageStatus: ImageStatus;
  archiveReason: string | null;
  mappingCount: number;
  matchedReferenceMovementIds: string[];
  resolvedImagePaths: string[];
  candidateImagePaths: string[];
  blockReasonCode: CatalogBlockReasonCode | null;
  needsReview: boolean;
};

const root = resolve(process.cwd());
const publicRoot = join(root, "public");
const mappingPath = join(root, "lib", "catalog-visual-assets-data.json");
const reconciliationPath = join(root, "lib", "catalog-reconciliation-data.json");
const reportPath = join(root, "docs", "RELATORIO_CONCILIACAO_EXERCICIOS_IMAGENS.md");
const csvPath = join(root, "docs", "exercicios-arquivados-sem-imagem.csv");
const checkMode = process.argv.includes("--check");

function unique<T>(items: T[]) {
  return Array.from(new Set(items));
}

function webPathToDisk(webPath: string) {
  return join(publicRoot, webPath.replace(/^\//, "").replace(/\//g, "\\"));
}

function diskPathToWeb(diskPath: string) {
  return `/${relative(publicRoot, diskPath).replace(/\\/g, "/")}`;
}

function isPhysicalFile(webPath: string) {
  if (!webPath || webPath.includes("*")) return false;
  const diskPath = webPathToDisk(webPath);
  return existsSync(diskPath) && statSync(diskPath).isFile();
}

function globWebPattern(pattern: string) {
  if (!pattern.includes("*")) return isPhysicalFile(pattern) ? [pattern] : [];
  const diskPattern = webPathToDisk(pattern);
  const folder = dirname(diskPattern);
  if (!existsSync(folder)) return [];
  const filenamePattern = basename(diskPattern);
  const regex = new RegExp(`^${filenamePattern.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*")}$`, "i");
  return readdirSync(folder)
    .filter((filename) => regex.test(filename))
    .map((filename) => diskPathToWeb(join(folder, filename)))
    .sort((a, b) => a.localeCompare(b, "pt-BR", { numeric: true }));
}

function reconcileMapping(mapping: VisualMapping): VisualMapping {
  const discoveredFromPatterns = mapping.reusedFromAssetPatterns.flatMap(globWebPattern);
  const existingResolved = mapping.resolvedImagePaths.filter(isPhysicalFile);
  const newlyExistingExpected = mapping.physicalFilesMissing.filter(isPhysicalFile);
  const physicalFilesFound = unique([...existingResolved, ...discoveredFromPatterns, ...newlyExistingExpected])
    .sort((a, b) => a.localeCompare(b, "pt-BR", { numeric: true }));
  const physicalFilesMissing = unique([
    ...mapping.physicalFilesMissing,
    ...mapping.reusedFromAssetPatterns.filter((pattern) => !globWebPattern(pattern).length)
  ]).filter((path) => !isPhysicalFile(path) && (!path.includes("*") || !globWebPattern(path).length));
  const requiredPhysicalFiles = unique(mapping.requiredPhysicalFiles || []);
  const state = deriveCatalogMappingState({
    physicalFilesFound,
    requiredPhysicalFiles,
    releasePolicy: mapping.releasePolicy || (mapping.requiresCompleteAssetSet === false ? "PARTIAL_ALLOWED" : "COMPLETE"),
    approvalRequirement: mapping.approvalRequirement || "NONE",
    approvalStatus: mapping.approvalStatus || "APPROVED"
  });

  return {
    ...mapping,
    imageSourcePath: physicalFilesFound[0] || null,
    resolvedImagePaths: physicalFilesFound,
    physicalFilesFound,
    physicalFilesMissing,
    requiredPhysicalFiles,
    releasePolicy: mapping.releasePolicy || (mapping.requiresCompleteAssetSet === false ? "PARTIAL_ALLOWED" : "COMPLETE"),
    approvalRequirement: mapping.approvalRequirement || "NONE",
    approvalStatus: mapping.approvalStatus || "APPROVED",
    dependencyMovementIds: mapping.dependencyMovementIds || [],
    requiresCompleteAssetSet: mapping.releasePolicy
      ? mapping.releasePolicy !== "PARTIAL_ALLOWED"
      : mapping.requiresCompleteAssetSet !== false,
    assetStatus: state.assetStatus,
    blockReasonCode: state.blockReasonCode,
    needsReview: state.needsReview
  };
}

function applyConfirmedDecision(mapping: VisualMapping): VisualMapping {
  const decision = catalogVisualAssetDecisionByKey.get(`${mapping.catalogArea}::${mapping.catalogIdOrSlug}`);
  if (!decision) return mapping;
  return {
    ...mapping,
    matchType: decision.matchType,
    matchedReferenceMovement: decision.matchedReferenceMovement,
    imageAction: decision.imageAction,
    visualAssetMode: decision.visualAssetMode,
    pullFromReferenceMovement: decision.pullFromReferenceMovement,
    reusedFromReferenceId: decision.reusedFromReferenceId,
    reusedFromReferenceIds: decision.reusedFromReferenceIds,
    reusedFromMovementId: decision.reusedFromMovementId,
    reusedFromMovementIds: decision.reusedFromMovementIds,
    reusedFromAssetPattern: decision.reusedFromAssetPattern,
    reusedFromAssetPatterns: decision.reusedFromAssetPatterns,
    canonicalPoseId: decision.canonicalPoseId,
    imageSourcePath: null,
    resolvedImagePaths: [],
    physicalFilesFound: [],
    physicalFilesMissing: decision.expectedPhysicalFiles,
    requiredPhysicalFiles: decision.requiredPhysicalFiles,
    requiresCompleteAssetSet: decision.requiresCompleteAssetSet,
    approvalRequirement: decision.approvalRequirement,
    approvalStatus: decision.approvalStatus,
    dependencyMovementIds: decision.dependencyMovementIds,
    releasePolicy: decision.releasePolicy,
    decisionDate: decision.decisionDate,
    approvalDate: decision.approvalDate,
    approvalNote: decision.approvalNote,
    blockReasonCode: null,
    assetStatus: "PLANNED",
    needsReview: false,
    notes: decision.notes
  };
}

function applyDependencyApprovals(mapping: VisualMapping, mappings: VisualMapping[]): VisualMapping {
  if (!mapping.dependencyMovementIds?.length) return mapping;
  const dependencies = mappings.filter((candidate) =>
    mapping.dependencyMovementIds.includes(candidate.catalogIdOrSlug)
  );
  const approval = resolveDependencyApproval(mapping, dependencies.map((candidate) => ({
    movementId: candidate.catalogIdOrSlug,
    approvalRequirement: candidate.approvalRequirement,
    approvalStatus: candidate.approvalStatus,
    approvalDate: candidate.approvalDate,
    approvalNote: candidate.approvalNote
  })));
  return {
    ...mapping,
    ...approval
  };
}

function isPhysicalInstruction(instruction: (typeof exerciseInstructionSeeds)[number]) {
  return requiresCatalogVisualAsset(instruction);
}

function sourceKind(id: string): CatalogSourceEntry["sourceCatalog"] {
  return /^ref_\d+_mov_\d+$/i.test(id) ? "REFERENCE_EXTRACTED" : "PRE_REFERENCE_CATALOG";
}

function catalogSources(mappings: VisualMapping[]): CatalogSourceEntry[] {
  const explicitExercises = mappings
    .filter((item) => item.catalogArea === "EXERCISE")
    .map((item) => ({
      catalogArea: item.catalogArea,
      catalogIdOrSlug: item.catalogIdOrSlug,
      catalogTitle: item.catalogTitle,
      sourceCatalog: sourceKind(item.catalogIdOrSlug)
    }));
  const physicalInstructions = exerciseInstructionSeeds.filter(isPhysicalInstruction).map((item) => ({
    catalogArea: "EXERCISE_INSTRUCTION",
    catalogIdOrSlug: item.slug,
    catalogTitle: item.title,
    sourceCatalog: sourceKind(item.slug)
  }));
  const yogaPractices = yogaPracticeSeeds.map((item) => ({
    catalogArea: "YOGA_PRACTICE",
    catalogIdOrSlug: item.slug,
    catalogTitle: item.title,
    sourceCatalog: sourceKind(item.slug)
  }));
  const yogaSequences = yogaSequenceSeeds.map((item) => ({
    catalogArea: "YOGA_SEQUENCE",
    catalogIdOrSlug: item.slug,
    catalogTitle: item.title,
    sourceCatalog: sourceKind(item.slug)
  }));
  const stretches = stretchingExercises.map((item) => ({
    catalogArea: "STRETCHING_EXERCISE",
    catalogIdOrSlug: item.id,
    catalogTitle: item.title,
    sourceCatalog: sourceKind(item.id)
  }));

  const byIdentity = new Map<string, CatalogSourceEntry>();
  for (const item of [...explicitExercises, ...physicalInstructions, ...yogaPractices, ...yogaSequences, ...stretches]) {
    byIdentity.set(`${item.catalogArea}::${item.catalogIdOrSlug}`, item);
  }
  return [...byIdentity.values()].sort((a, b) =>
    a.catalogArea.localeCompare(b.catalogArea) || a.catalogTitle.localeCompare(b.catalogTitle, "pt-BR")
  );
}

function reconciliationEntry(source: CatalogSourceEntry, mappings: VisualMapping[]): CatalogReconciliationEntry {
  const related = mappings.filter((item) =>
    item.catalogArea === source.catalogArea && item.catalogIdOrSlug === source.catalogIdOrSlug
  );
  const state = deriveCatalogReconciliationState(related, { sequence: source.catalogArea === "YOGA_SEQUENCE" });

  return {
    ...source,
    identityKey: `${source.catalogArea}::${source.catalogIdOrSlug}`,
    reconciliationStatus: state.reconciliationStatus,
    imageStatus: state.imageStatus,
    archiveReason: state.archiveReason,
    mappingCount: related.length,
    matchedReferenceMovementIds: unique(related.flatMap((item) => [
      item.matchedReferenceMovement,
      item.pullFromReferenceMovement,
      ...item.reusedFromMovementIds
    ]).filter(Boolean)),
    resolvedImagePaths: state.resolvedImagePaths,
    candidateImagePaths: state.candidateImagePaths,
    blockReasonCode: state.blockReasonCode,
    needsReview: state.needsReview
  };
}

function countBy<T>(items: T[], key: (item: T) => string) {
  return items.reduce<Record<string, number>>((acc, item) => {
    const value = key(item);
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function markdownTable(rows: string[][]) {
  if (!rows.length) return "_Nenhum item._";
  const header = rows[0];
  return [
    `| ${header.join(" | ")} |`,
    `| ${header.map(() => "---").join(" | ")} |`,
    ...rows.slice(1).map((row) => `| ${row.map((cell) => cell.replace(/\|/g, "\\|")).join(" | ")} |`)
  ].join("\n");
}

function technicalQueue(mappings: VisualMapping[]) {
  return mappings
    .filter((mapping) => mapping.assetStatus !== "READY")
    .map((mapping) => {
      const movementIds = unique([
        mapping.catalogIdOrSlug,
        mapping.matchedReferenceMovement,
        mapping.pullFromReferenceMovement,
        ...mapping.reusedFromMovementIds
      ]);
      const consumers = mappings.filter((candidate) =>
        candidate.identityKey !== mapping.identityKey &&
        candidate.dependencyMovementIds.some((movementId) => movementIds.includes(movementId))
      );
      const missingRequired = mapping.requiredPhysicalFiles.filter((path) => !mapping.physicalFilesFound.includes(path));
      return {
        mapping,
        missingRequired: missingRequired.length || mapping.physicalFilesMissing.length,
        consumers: unique(consumers.map((consumer) => `${consumer.catalogArea}::${consumer.catalogIdOrSlug}`))
      };
    })
    .sort((a, b) =>
      b.consumers.length - a.consumers.length ||
      a.missingRequired - b.missingRequired ||
      a.mapping.identityKey.localeCompare(b.mapping.identityKey)
    );
}

function report(entries: CatalogReconciliationEntry[], mappings: VisualMapping[], generatedAt: string) {
  const statusCounts = countBy(entries, (item) => item.reconciliationStatus);
  const areaRows = Object.entries(countBy(entries, (item) => item.catalogArea)).sort(([a], [b]) => a.localeCompare(b));
  const activeRows = entries.filter((item) => item.reconciliationStatus === "ACTIVE");
  const archivedRows = entries.filter((item) => item.reconciliationStatus !== "ACTIVE");
  const missingRows = entries.filter((item) => item.reconciliationStatus === "ARCHIVED_MISSING_IMAGE");
  const reviewRows = entries.filter((item) => item.reconciliationStatus === "ARCHIVED_NEEDS_REVIEW");
  const rejectedRows = entries.filter((item) => item.reconciliationStatus === "ARCHIVED_REJECTED");
  const preReferenceArchived = archivedRows.filter((item) => item.sourceCatalog === "PRE_REFERENCE_CATALOG");
  const queue = technicalQueue(mappings);

  return `# Relatorio de conciliacao entre exercicios e banco de imagens

Gerado em: ${generatedAt}

Este relatorio cruza o catalogo de exercicios fisicos, alongamentos e yoga com os mapeamentos das referencias e com os arquivos realmente presentes em \`public/instructional-images\`.

## Regra operacional

- \`ACTIVE\`: existe correspondencia confirmada e pelo menos uma imagem fisica utilizavel. O aplicativo pode exibir o exercicio e puxar a sequencia vinculada.
- \`ARCHIVED_MISSING_IMAGE\`: nao ha correspondencia confirmada ou o arquivo fisico ainda nao existe. O registro permanece no banco, mas nao entra no catalogo ativo nem em novas recomendacoes.
- \`ARCHIVED_NEEDS_REVIEW\`: o mapeamento exige validacao humana explicita (por exemplo, anatomia ou aceitacao visual) antes da liberacao.
- \`ARCHIVED_REJECTED\`: a decisao humana rejeitou explicitamente o asset; candidatos fisicos permanecem apenas para auditoria.

## Resumo

${markdownTable([
  ["Status", "Total"],
  ["ACTIVE", String(statusCounts.ACTIVE || 0)],
  ["ARCHIVED_MISSING_IMAGE", String(statusCounts.ARCHIVED_MISSING_IMAGE || 0)],
  ["ARCHIVED_NEEDS_REVIEW", String(statusCounts.ARCHIVED_NEEDS_REVIEW || 0)],
  ["ARCHIVED_REJECTED", String(statusCounts.ARCHIVED_REJECTED || 0)],
  ["TOTAL", String(entries.length)]
])}

## Escopo por area

${markdownTable([
  ["Area", "Total"],
  ...areaRows.map(([area, total]) => [area, String(total)])
])}

## Resultado pratico

- ${activeRows.length} itens ficaram ligados ao banco de imagens e podem aparecer no aplicativo.
- ${archivedRows.length} itens ficaram preservados no arquivo morto.
- ${missingRows.length} itens precisam de criacao ou localizacao de imagens.
- ${reviewRows.length} itens aguardam a validacao humana explicita registrada no mapeamento.
- ${rejectedRows.length} itens foram rejeitados explicitamente.
- ${preReferenceArchived.length} pendencias pertencem ao catalogo anterior as referencias extraidas.

## Itens sem imagem criada ou sem correspondencia confirmada

${markdownTable([
  ["Area", "ID/slug", "Titulo", "Origem", "Motivo", "REFs candidatas"],
  ...missingRows.map((item) => [
    item.catalogArea,
    item.catalogIdOrSlug,
    item.catalogTitle,
    item.sourceCatalog,
    item.archiveReason || "",
    item.matchedReferenceMovementIds.join(", ") || "-"
  ])
])}

## Itens aguardando validacao humana

${markdownTable([
  ["Area", "ID/slug", "Titulo", "REFs candidatas", "Imagens encontradas"],
  ...reviewRows.map((item) => [
    item.catalogArea,
    item.catalogIdOrSlug,
    item.catalogTitle,
    item.matchedReferenceMovementIds.join(", ") || "-",
    String(item.candidateImagePaths.length)
  ])
])}

## Fila tecnica por impacto

${markdownTable([
  ["Prioridade", "Mapeamento", "Bloqueio", "Arquivos faltantes", "Consumidores desbloqueados"],
  ...queue.map((item, index) => [
    String(index + 1),
    `${item.mapping.catalogArea}::${item.mapping.catalogIdOrSlug}`,
    item.mapping.blockReasonCode || "-",
    String(item.missingRequired),
    item.consumers.join(", ") || "-"
  ])
])}

## Como atualizar depois de novas referencias

1. Adicione as novas imagens fisicas em \`public/instructional-images\` e atualize o mapeamento de equivalencias quando surgir um novo par catalogo/REF.
2. Rode \`npm run catalog:reconcile\`.
3. Revise este relatorio e o CSV \`docs/exercicios-arquivados-sem-imagem.csv\`.
4. Rode \`npm run catalog:sync\` para refletir os novos status no banco local.
`;
}

function csvCell(value: string | number | boolean | null) {
  const text = value === null ? "" : String(value);
  return `"${text.replace(/"/g, '""')}"`;
}

function archiveCsv(entries: CatalogReconciliationEntry[]) {
  const rows = entries
    .filter((item) => item.reconciliationStatus !== "ACTIVE")
    .map((item) => [
      item.reconciliationStatus,
      item.catalogArea,
      item.catalogIdOrSlug,
      item.catalogTitle,
      item.sourceCatalog,
      item.imageStatus,
      item.archiveReason,
      item.matchedReferenceMovementIds.join("; "),
      item.mappingCount
    ]);
  return [
    ["status", "area", "id_slug", "titulo", "origem", "status_imagem", "motivo", "refs_candidatas", "mapeamentos"],
    ...rows
  ].map((row) => row.map(csvCell).join(",")).join("\n") + "\n";
}

function stableJson(value: unknown) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

function assertGeneratedFile(path: string, expected: string) {
  if (!existsSync(path) || readFileSync(path, "utf8") !== expected) {
    throw new Error(`Arquivo gerado desatualizado: ${relative(root, path)}. Rode npm run catalog:reconcile.`);
  }
}

function main() {
  const source = JSON.parse(readFileSync(mappingPath, "utf8")) as VisualData;
  const generatedAt = checkMode ? source.generatedAt : new Date().toISOString().slice(0, 10);
  const decisionMappings = source.mappings.map(applyConfirmedDecision);
  const mappings = decisionMappings.map((mapping) => applyDependencyApprovals(mapping, decisionMappings)).map(reconcileMapping);
  const entries = catalogSources(mappings).map((item) => reconciliationEntry(item, mappings));
  const duplicateIdentity = entries.find((entry, index) => entries.findIndex((item) => item.identityKey === entry.identityKey) !== index);
  if (duplicateIdentity) throw new Error(`Identidade duplicada: ${duplicateIdentity.identityKey}`);
  const invalidActive = entries.find((entry) => entry.reconciliationStatus === "ACTIVE" && !entry.resolvedImagePaths.length);
  if (invalidActive) throw new Error(`Item ACTIVE sem imagem fisica: ${invalidActive.identityKey}`);

  const nextVisualData = stableJson({
    ...source,
    generatedAt,
    totalMappings: mappings.length,
    mappings
  });
  const nextReconciliation = stableJson({
    source: "catalog-visual-assets-data.json + catalogos TypeScript + arquivos fisicos em public/instructional-images",
    generatedAt,
    totalEntries: entries.length,
    totalsByStatus: countBy(entries, (item) => item.reconciliationStatus),
    entries
  });
  const nextReport = report(entries, mappings, generatedAt);
  const nextCsv = archiveCsv(entries);

  if (checkMode) {
    assertGeneratedFile(mappingPath, nextVisualData);
    assertGeneratedFile(reconciliationPath, nextReconciliation);
    assertGeneratedFile(reportPath, nextReport);
    assertGeneratedFile(csvPath, nextCsv);
  } else {
    writeFileSync(mappingPath, nextVisualData, "utf8");
    writeFileSync(reconciliationPath, nextReconciliation, "utf8");
    writeFileSync(reportPath, nextReport, "utf8");
    writeFileSync(csvPath, nextCsv, "utf8");
  }

  const totals = countBy(entries, (item) => item.reconciliationStatus);
  console.log(JSON.stringify({
    mode: checkMode ? "check" : "write",
    mappings: mappings.length,
    catalogEntries: entries.length,
    ...totals
  }, null, 2));
}

main();
