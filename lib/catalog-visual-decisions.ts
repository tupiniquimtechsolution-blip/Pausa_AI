export type ConfirmedCatalogArea = "EXERCISE" | "EXERCISE_INSTRUCTION" | "STRETCHING_EXERCISE";
export type ApprovalRequirement = "NONE" | "VISUAL" | "ANATOMY";
export type ApprovalStatus = "PENDING" | "APPROVED" | "REJECTED";
export type ReleasePolicy = "PARTIAL_ALLOWED" | "COMPLETE" | "COMPLETE_AND_APPROVED";

type VisualSource = {
  referenceIds: string[];
  movementIds: string[];
  patterns: string[];
  files: string[];
  canonicalPoseId: string;
  pullFromReferenceMovement: string;
};

export type CatalogVisualAssetDecision = {
  catalogArea: ConfirmedCatalogArea;
  catalogIdOrSlug: string;
  matchType: string;
  matchedReferenceMovement: string;
  imageAction: string;
  visualAssetMode: "REUSED" | "NEW_REQUIRED" | "PARTIAL_REUSE" | "CHECK_BEFORE_GENERATE";
  pullFromReferenceMovement: string;
  reusedFromReferenceId: string | null;
  reusedFromReferenceIds: string[];
  reusedFromMovementId: string | null;
  reusedFromMovementIds: string[];
  reusedFromAssetPattern: string;
  reusedFromAssetPatterns: string[];
  canonicalPoseId: string;
  expectedPhysicalFiles: string[];
  requiredPhysicalFiles: string[];
  requiresCompleteAssetSet: boolean;
  approvalRequirement: ApprovalRequirement;
  approvalStatus: ApprovalStatus;
  dependencyMovementIds: string[];
  releasePolicy: ReleasePolicy;
  decisionDate: string;
  approvalDate: string | null;
  approvalNote: string;
  needsReview: boolean;
  notes: string;
};

type DecisionOptions = {
  mode?: CatalogVisualAssetDecision["visualAssetMode"];
  needsReview?: boolean;
  requiresCompleteAssetSet?: boolean;
  approvalRequirement?: ApprovalRequirement;
  approvalStatus?: ApprovalStatus;
  dependencyMovementIds?: string[];
  releasePolicy?: ReleasePolicy;
  approvalDate?: string | null;
  approvalNote?: string;
  notes: string;
};

const catCowFiles = [
  "/instructional-images/mobility/spine-health/spine_health_001_cat_cow_step_01_tabletop.png",
  "/instructional-images/mobility/spine-health/spine_health_001_cat_cow_step_02_cow_pose.png",
  "/instructional-images/mobility/spine-health/spine_health_001_cat_cow_step_03_cat_pose.png",
  "/instructional-images/mobility/spine-health/spine_health_001_cat_cow_step_04_common_mistake.png",
  "/instructional-images/mobility/spine-health/spine_health_001_cat_cow_step_05_correction.png"
];

const cobraLowFiles = [
  "/instructional-images/mobility/spine-health/spine_health_006_cobra_low_step_01_prone.png",
  "/instructional-images/mobility/spine-health/spine_health_006_cobra_low_step_02_hands_under_shoulders.png",
  "/instructional-images/mobility/spine-health/spine_health_006_cobra_low_step_03_low_lift.png",
  "/instructional-images/mobility/spine-health/spine_health_006_cobra_low_step_04_final.png",
  "/instructional-images/mobility/spine-health/spine_health_006_cobra_low_step_05_common_mistake.png",
  "/instructional-images/mobility/spine-health/spine_health_006_cobra_low_step_06_correction.png"
];

const splitSquatFiles = [
  "/instructional-images/mobility/split-prep/mobility_split_001_agachamento_yogue_ativo_step_01_start.png",
  "/instructional-images/mobility/split-prep/mobility_split_001_agachamento_yogue_ativo_step_02_descend.png",
  "/instructional-images/mobility/split-prep/mobility_split_001_agachamento_yogue_ativo_step_03_low_squat.png",
  "/instructional-images/mobility/split-prep/mobility_split_001_agachamento_yogue_ativo_step_04_final.png",
  "/instructional-images/mobility/split-prep/mobility_split_001_agachamento_yogue_ativo_step_05_common_mistake.png",
  "/instructional-images/mobility/split-prep/mobility_split_001_agachamento_yogue_ativo_step_06_correction.png"
];

const bridgeArticulatedFiles = [
  "/instructional-images/mobility/spine-health/spine_health_005_bridge_articulated_step_01_lie_down.png",
  "/instructional-images/mobility/spine-health/spine_health_005_bridge_articulated_step_02_pelvis_tilt.png",
  "/instructional-images/mobility/spine-health/spine_health_005_bridge_articulated_step_03_hips_lift.png",
  "/instructional-images/mobility/spine-health/spine_health_005_bridge_articulated_step_04_final.png",
  "/instructional-images/mobility/spine-health/spine_health_005_bridge_articulated_step_05_common_mistake.png",
  "/instructional-images/mobility/spine-health/spine_health_005_bridge_articulated_step_06_correction.png"
];

const kneeToChestFiles = [
  "/instructional-images/mobility/back-pain-relief/spine_backpain_005_knee_to_chest_step_01_lie_down.png",
  "/instructional-images/mobility/back-pain-relief/spine_backpain_005_knee_to_chest_step_02_one_knee_to_chest.png",
  "/instructional-images/mobility/back-pain-relief/spine_backpain_005_knee_to_chest_step_03_final_hold.png",
  "/instructional-images/mobility/back-pain-relief/spine_backpain_005_knee_to_chest_step_04_common_mistake.png",
  "/instructional-images/mobility/back-pain-relief/spine_backpain_005_knee_to_chest_step_05_correction.png"
];

const suryaLunge04Files = [
  "/instructional-images/yoga/surya-namaskar/surya_004_ashwa_sanchalanasana_step_01_start.png",
  "/instructional-images/yoga/surya-namaskar/surya_004_ashwa_sanchalanasana_step_02_leg_back.png",
  "/instructional-images/yoga/surya-namaskar/surya_004_ashwa_sanchalanasana_step_03_chest_open.png",
  "/instructional-images/yoga/surya-namaskar/surya_004_ashwa_sanchalanasana_step_04_final.png",
  "/instructional-images/yoga/surya-namaskar/surya_004_ashwa_sanchalanasana_step_05_common_mistake.png",
  "/instructional-images/yoga/surya-namaskar/surya_004_ashwa_sanchalanasana_step_06_correction.png"
];

const suryaLunge09Files = [
  "/instructional-images/yoga/surya-namaskar/surya_009_ashwa_sanchalanasana_oposto_step_01_start.png",
  "/instructional-images/yoga/surya-namaskar/surya_009_ashwa_sanchalanasana_oposto_step_02_leg_forward.png",
  "/instructional-images/yoga/surya-namaskar/surya_009_ashwa_sanchalanasana_oposto_step_03_chest_open.png",
  "/instructional-images/yoga/surya-namaskar/surya_009_ashwa_sanchalanasana_oposto_step_04_final.png",
  "/instructional-images/yoga/surya-namaskar/surya_009_ashwa_sanchalanasana_oposto_step_05_common_mistake.png",
  "/instructional-images/yoga/surya-namaskar/surya_009_ashwa_sanchalanasana_oposto_step_06_correction.png"
];

const suryaCobra07Files = [
  "/instructional-images/yoga/surya-namaskar/surya_007_bhujangasana_step_01_start.png",
  "/instructional-images/yoga/surya-namaskar/surya_007_bhujangasana_step_02_slide_forward.png",
  "/instructional-images/yoga/surya-namaskar/surya_007_bhujangasana_step_03_chest_lift.png",
  "/instructional-images/yoga/surya-namaskar/surya_007_bhujangasana_step_04_final.png",
  "/instructional-images/yoga/surya-namaskar/surya_007_bhujangasana_step_05_common_mistake.png",
  "/instructional-images/yoga/surya-namaskar/surya_007_bhujangasana_step_06_correction.png"
];

const suryaPlank05Files = [
  "/instructional-images/yoga/surya-namaskar/surya_005_phalakasana_step_01_start.png",
  "/instructional-images/yoga/surya-namaskar/surya_005_phalakasana_step_02_step_back.png",
  "/instructional-images/yoga/surya-namaskar/surya_005_phalakasana_step_03_alignment.png",
  "/instructional-images/yoga/surya-namaskar/surya_005_phalakasana_step_04_final.png",
  "/instructional-images/yoga/surya-namaskar/surya_005_phalakasana_step_05_common_mistake.png",
  "/instructional-images/yoga/surya-namaskar/surya_005_phalakasana_step_06_correction.png"
];

const hormonalMalasana03Files = [
  "/instructional-images/yoga/hormonal-balance/yoga_hormonal_003_malasana_step_01_start.png",
  "/instructional-images/yoga/hormonal-balance/yoga_hormonal_003_malasana_step_02_descend.png",
  "/instructional-images/yoga/hormonal-balance/yoga_hormonal_003_malasana_step_03_hands_prayer.png",
  "/instructional-images/yoga/hormonal-balance/yoga_hormonal_003_malasana_step_04_final.png",
  "/instructional-images/yoga/hormonal-balance/yoga_hormonal_003_malasana_step_05_common_mistake.png",
  "/instructional-images/yoga/hormonal-balance/yoga_hormonal_003_malasana_step_06_correction.png"
];

const chakraForwardFold21Files = [
  "/instructional-images/yoga/chakra-flow/chakra_third_eye_21_forward_fold_step_01_start.png",
  "/instructional-images/yoga/chakra-flow/chakra_third_eye_21_forward_fold_step_02_entry.png",
  "/instructional-images/yoga/chakra-flow/chakra_third_eye_21_forward_fold_step_03_final.png",
  "/instructional-images/yoga/chakra-flow/chakra_third_eye_21_forward_fold_step_04_common_mistake.png",
  "/instructional-images/yoga/chakra-flow/chakra_third_eye_21_forward_fold_step_05_correction.png"
];

const chakraLotus25Files = [
  "/instructional-images/yoga/chakra-flow/chakra_crown_025_padmasana_step_01_start.png",
  "/instructional-images/yoga/chakra-flow/chakra_crown_025_padmasana_step_02_entry.png",
  "/instructional-images/yoga/chakra-flow/chakra_crown_025_padmasana_step_03_final.png",
  "/instructional-images/yoga/chakra-flow/chakra_crown_025_padmasana_step_04_common_mistake.png",
  "/instructional-images/yoga/chakra-flow/chakra_crown_025_padmasana_step_05_correction.png"
];

const chakraSavasana27Files = [
  "/instructional-images/yoga/chakra-flow/chakra_crown_027_savasana_step_01_start.png",
  "/instructional-images/yoga/chakra-flow/chakra_crown_027_savasana_step_02_entry.png",
  "/instructional-images/yoga/chakra-flow/chakra_crown_027_savasana_step_03_final.png",
  "/instructional-images/yoga/chakra-flow/chakra_crown_027_savasana_step_04_common_mistake.png",
  "/instructional-images/yoga/chakra-flow/chakra_crown_027_savasana_step_05_correction.png"
];

const sources = {
  catCow: source("ref_007", "ref_007_mov_01", "/instructional-images/mobility/spine-health/spine_health_001_cat_cow_step_*.png", catCowFiles),
  cobraLow: source("ref_007", "ref_007_mov_06", "/instructional-images/mobility/spine-health/spine_health_006_cobra_low_step_*.png", cobraLowFiles),
  splitSquat: source("ref_005", "ref_005_mov_01", "/instructional-images/mobility/split-prep/mobility_split_001_agachamento_yogue_ativo_step_*.png", splitSquatFiles),
  bridgeArticulated: source("ref_007", "ref_007_mov_05", "/instructional-images/mobility/spine-health/spine_health_005_bridge_articulated_step_*.png", bridgeArticulatedFiles),
  kneeToChest: source("ref_010", "ref_010_mov_05", "/instructional-images/mobility/back-pain-relief/spine_backpain_005_knee_to_chest_step_*.png", kneeToChestFiles),
  suryaLunges: combinedSource(
    ["ref_003"],
    ["ref_003_mov_04", "ref_003_mov_09"],
    [
      "/instructional-images/yoga/surya-namaskar/surya_004_ashwa_sanchalanasana_step_*.png",
      "/instructional-images/yoga/surya-namaskar/surya_009_ashwa_sanchalanasana_oposto_step_*.png"
    ],
    [...suryaLunge04Files, ...suryaLunge09Files],
    "ref_003_mov_04",
    "ref_003_mov_04 + ref_003_mov_09"
  ),
  suryaCobra: source("ref_003", "ref_003_mov_07", "/instructional-images/yoga/surya-namaskar/surya_007_bhujangasana_step_*.png", suryaCobra07Files),
  suryaPlank: source("ref_003", "ref_003_mov_05", "/instructional-images/yoga/surya-namaskar/surya_005_phalakasana_step_*.png", suryaPlank05Files),
  hormonalMalasana: source("ref_004", "ref_004_mov_03", "/instructional-images/yoga/hormonal-balance/yoga_hormonal_003_malasana_step_*.png", hormonalMalasana03Files),
  chakraForwardFold: source("ref_011", "ref_011_mov_21", "/instructional-images/yoga/chakra-flow/chakra_third_eye_21_forward_fold_step_*.png", chakraForwardFold21Files),
  chakraLotus: source("ref_011", "ref_011_mov_25", "/instructional-images/yoga/chakra-flow/chakra_crown_025_padmasana_step_*.png", chakraLotus25Files),
  chakraSavasana: source("ref_011", "ref_011_mov_27", "/instructional-images/yoga/chakra-flow/chakra_crown_027_savasana_step_*.png", chakraSavasana27Files)
};

const scapularSource: VisualSource = {
  referenceIds: [],
  movementIds: [],
  patterns: ["/instructional-images/mobility/scapular-cat-cow/scapular_cat_cow_step_*.png"],
  files: ["/instructional-images/mobility/scapular-cat-cow/scapular_cat_cow_step_*.png"],
  canonicalPoseId: "gato-vaca-escapular",
  pullFromReferenceMovement: "gato-vaca-escapular"
};

export const catalogVisualAssetDecisions: CatalogVisualAssetDecision[] = [
  reused("EXERCISE", "energy-07-mobilidade-de-coluna", sources.catCow, {
    notes: "Decisao confirmada em 2026-07-18: reutilizar spine_health_001 Cat-Cow."
  }),
  reused("EXERCISE_INSTRUCTION", "ref_011_mov_07", sources.suryaLunges, {
    requiresCompleteAssetSet: false,
    notes: "Decisao confirmada em 2026-07-18: reutilizar REF 003 mov. 04 + 09. O mov. 09 cobre a lateral oposta; a correcao ausente do mov. 04 permanece registrada como pendencia de arquivo."
  }),
  own("EXERCISE_INSTRUCTION", "ref_005_mov_01", sources.splitSquat, {
    approvalRequirement: "NONE",
    approvalStatus: "APPROVED",
    notes: "Decisao confirmada em 2026-07-18: usar a sequencia propria da REF 005."
  }),
  reused("EXERCISE_INSTRUCTION", "ref_010_mov_06", sources.cobraLow, {
    notes: "Decisao confirmada em 2026-07-18: reutilizar spine_health_006 Cobra baixa."
  }),
  own("EXERCISE_INSTRUCTION", "ref_007_mov_06", sources.cobraLow, {
    approvalRequirement: "NONE",
    approvalStatus: "APPROVED",
    notes: "Decisao confirmada em 2026-07-18: usar a sequencia propria spine_health_006."
  }),
  reused("EXERCISE_INSTRUCTION", "cobra-suave", sources.cobraLow, {
    notes: "Decisao confirmada em 2026-07-18: reutilizar spine_health_006 Cobra baixa."
  }),
  own("EXERCISE_INSTRUCTION", "ref_011_mov_21", sources.chakraForwardFold, {
    approvalRequirement: "VISUAL",
    approvalStatus: "PENDING",
    releasePolicy: "COMPLETE_AND_APPROVED",
    approvalNote: "A sequencia propria deve ser aprovada visualmente depois que todos os arquivos obrigatorios existirem.",
    notes: "Decisao confirmada em 2026-07-18: criar e usar uma sequencia propria para a flexao a frente da REF 011."
  }),
  reused("EXERCISE_INSTRUCTION", "flexor-quadril-ajoelhado", sources.suryaLunges, {
    requiresCompleteAssetSet: false,
    notes: "Decisao confirmada em 2026-07-18: reutilizar REF 003 mov. 04 + 09."
  }),
  own("EXERCISE_INSTRUCTION", "ref_007_mov_01", sources.catCow, {
    approvalRequirement: "NONE",
    approvalStatus: "APPROVED",
    notes: "Decisao confirmada em 2026-07-18: usar a sequencia propria spine_health_001."
  }),
  reused("EXERCISE_INSTRUCTION", "ref_010_mov_01", sources.catCow, {
    notes: "Decisao confirmada em 2026-07-18: reutilizar spine_health_001."
  }),
  own("EXERCISE_INSTRUCTION", "gato-vaca-escapular", scapularSource, {
    approvalRequirement: "VISUAL",
    approvalStatus: "PENDING",
    releasePolicy: "COMPLETE_AND_APPROVED",
    requiresCompleteAssetSet: false,
    notes: "Decisao confirmada em 2026-07-18: criar sequencia escapular propria, compartilhada pelos catalogos. Aguarda criacao e aceitacao visual da nova sequencia."
  }),
  reused("EXERCISE_INSTRUCTION", "gato-vaca-toracico", sources.catCow, {
    notes: "Decisao confirmada em 2026-07-18: reutilizar spine_health_001."
  }),
  own("EXERCISE_INSTRUCTION", "ref_010_mov_05", sources.kneeToChest, {
    approvalRequirement: "NONE",
    approvalStatus: "APPROVED",
    notes: "Decisao confirmada em 2026-07-18: usar a sequencia propria spine_backpain_005."
  }),
  reused("EXERCISE_INSTRUCTION", "ref_011_mov_02", sources.hormonalMalasana, {
    approvalRequirement: "NONE",
    approvalStatus: "APPROVED",
    releasePolicy: "COMPLETE_AND_APPROVED",
    dependencyMovementIds: ["ref_004_mov_03"],
    notes: "Decisao confirmada em 2026-07-18: reutilizar REF 004 mov. 03. O step 03 foi criado e aguarda aceitacao visual antes da liberacao desta dependencia."
  }),
  reused("EXERCISE_INSTRUCTION", "mobilidade-de-coluna", sources.catCow, {
    notes: "Decisao confirmada em 2026-07-18: reutilizar spine_health_001."
  }),
  reused("EXERCISE_INSTRUCTION", "mobilidade-rapida-coluna", sources.catCow, {
    notes: "Decisao confirmada em 2026-07-18: reutilizar spine_health_001."
  }),
  own("EXERCISE_INSTRUCTION", "ref_007_mov_05", sources.bridgeArticulated, {
    approvalRequirement: "NONE",
    approvalStatus: "APPROVED",
    notes: "Decisao confirmada em 2026-07-18: usar a sequencia propria spine_health_005."
  }),
  reused("EXERCISE_INSTRUCTION", "ref_011_mov_13", sources.suryaCobra, {
    notes: "Decisao confirmada em 2026-07-18: reutilizar REF 003 mov. 07."
  }),
  own("EXERCISE_INSTRUCTION", "ref_011_mov_25", sources.chakraLotus, {
    approvalRequirement: "ANATOMY",
    approvalStatus: "PENDING",
    releasePolicy: "COMPLETE_AND_APPROVED",
    notes: "Decisao confirmada em 2026-07-18: usar chakra_crown_025 somente apos aprovacao anatomica humana."
  }),
  reused("EXERCISE_INSTRUCTION", "ref_008_mov_05", sources.suryaPlank, {
    notes: "Decisao confirmada em 2026-07-18: usar REF 003 mov. 05 somente quando a sequencia estiver fisicamente completa."
  }),
  reused("EXERCISE_INSTRUCTION", "ref_011_mov_10", sources.suryaPlank, {
    notes: "Decisao confirmada em 2026-07-18: usar REF 003 mov. 05 somente quando a sequencia estiver fisicamente completa."
  }),
  own("EXERCISE_INSTRUCTION", "ref_011_mov_27", sources.chakraSavasana, {
    approvalRequirement: "NONE",
    approvalStatus: "APPROVED",
    notes: "Decisao confirmada em 2026-07-18: usar chakra_crown_027."
  }),
  reused("STRETCHING_EXERCISE", "cobra-suave", sources.cobraLow, {
    notes: "Decisao confirmada em 2026-07-18: reutilizar spine_health_006 Cobra baixa."
  }),
  reused("STRETCHING_EXERCISE", "flexor-quadril-ajoelhado", sources.suryaLunges, {
    requiresCompleteAssetSet: false,
    notes: "Decisao confirmada em 2026-07-18: reutilizar REF 003 mov. 04 + 09."
  }),
  own("STRETCHING_EXERCISE", "gato-vaca-escapular", scapularSource, {
    approvalRequirement: "VISUAL",
    approvalStatus: "PENDING",
    releasePolicy: "COMPLETE_AND_APPROVED",
    requiresCompleteAssetSet: false,
    notes: "Decisao confirmada em 2026-07-18: criar sequencia escapular propria, compartilhada pelos catalogos. Aguarda criacao e aceitacao visual da nova sequencia."
  }),
  reused("STRETCHING_EXERCISE", "gato-vaca-toracico", sources.catCow, {
    notes: "Decisao confirmada em 2026-07-18: reutilizar spine_health_001."
  }),
  own("EXERCISE_INSTRUCTION", "ref_004_mov_03", sources.hormonalMalasana, {
    approvalRequirement: "VISUAL",
    approvalStatus: "PENDING",
    releasePolicy: "COMPLETE_AND_APPROVED",
    notes: "Decisao condicional confirmada em 2026-07-18: manter a sequencia propria da REF 004 e criar somente o step 03. O arquivo foi criado e aguarda aceitacao visual humana."
  })
];

export const catalogVisualAssetDecisionByKey = new Map(
  catalogVisualAssetDecisions.map((decision) => [`${decision.catalogArea}::${decision.catalogIdOrSlug}`, decision])
);

export type PlannedReferenceVisualDecision = {
  visualReuse: string;
  assetReuseStatus: "REUSED" | "NEW_REQUIRED" | "PARTIAL_REUSE" | "CHECK_BEFORE_GENERATE";
  imageFiles?: string[];
  allImagesReady?: boolean;
  needsReviewImageFiles?: string[];
};

export const plannedReferenceVisualDecisions: Record<string, PlannedReferenceVisualDecision> = {
  ref_004_mov_03: {
    visualReuse: "USAR SEQUENCIA PROPRIA REF 004; o unico novo quadro e o step 03.",
    assetReuseStatus: "NEW_REQUIRED",
    needsReviewImageFiles: ["yoga_hormonal_003_malasana_step_03_hands_prayer.png"]
  },
  ref_005_mov_01: {
    visualReuse: "USAR SEQUENCIA PROPRIA mobility_split_001.",
    assetReuseStatus: "NEW_REQUIRED",
    allImagesReady: true
  },
  ref_007_mov_01: {
    visualReuse: "USAR SEQUENCIA PROPRIA spine_health_001.",
    assetReuseStatus: "NEW_REQUIRED",
    allImagesReady: true
  },
  ref_007_mov_05: {
    visualReuse: "USAR SEQUENCIA PROPRIA spine_health_005.",
    assetReuseStatus: "NEW_REQUIRED",
    allImagesReady: true
  },
  ref_007_mov_06: {
    visualReuse: "USAR SEQUENCIA PROPRIA spine_health_006; reutilizar nos equivalentes de cobra suave/baixa.",
    assetReuseStatus: "NEW_REQUIRED",
    allImagesReady: true
  },
  ref_010_mov_01: {
    visualReuse: "REUTILIZAR ref_007_mov_01 / spine_health_001.",
    assetReuseStatus: "REUSED"
  },
  ref_010_mov_05: {
    visualReuse: "USAR SEQUENCIA PROPRIA spine_backpain_005.",
    assetReuseStatus: "NEW_REQUIRED",
    allImagesReady: true
  },
  ref_010_mov_06: {
    visualReuse: "REUTILIZAR ref_007_mov_06 / spine_health_006 Cobra baixa.",
    assetReuseStatus: "REUSED"
  },
  ref_011_mov_02: {
    visualReuse: "REUTILIZAR ref_004_mov_03 apos aceitacao visual do step 03.",
    assetReuseStatus: "REUSED"
  },
  ref_011_mov_07: {
    visualReuse: "REUTILIZAR ref_003_mov_04 + ref_003_mov_09.",
    assetReuseStatus: "REUSED"
  },
  ref_011_mov_10: {
    visualReuse: "REUTILIZAR ref_003_mov_05 apos completar a sequencia.",
    assetReuseStatus: "REUSED"
  },
  ref_011_mov_13: {
    visualReuse: "REUTILIZAR ref_003_mov_07.",
    assetReuseStatus: "REUSED"
  },
  ref_011_mov_21: {
    visualReuse: "CRIAR E USAR SEQUENCIA PROPRIA chakra_third_eye_21_forward_fold.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  ref_011_mov_25: {
    visualReuse: "USAR SEQUENCIA PROPRIA chakra_crown_025 apos aprovacao anatomica.",
    assetReuseStatus: "NEW_REQUIRED",
    imageFiles: chakraLotus25Files.map(filenameFromWebPath),
    needsReviewImageFiles: chakraLotus25Files.map(filenameFromWebPath)
  },
  ref_011_mov_27: {
    visualReuse: "USAR SEQUENCIA PROPRIA chakra_crown_027.",
    assetReuseStatus: "NEW_REQUIRED",
    imageFiles: chakraSavasana27Files.map(filenameFromWebPath),
    allImagesReady: true
  }
};

function source(referenceId: string, movementId: string, pattern: string, files: string[]): VisualSource {
  return combinedSource([referenceId], [movementId], [pattern], files, movementId, movementId);
}

function combinedSource(
  referenceIds: string[],
  movementIds: string[],
  patterns: string[],
  files: string[],
  canonicalPoseId: string,
  pullFromReferenceMovement: string
): VisualSource {
  return { referenceIds, movementIds, patterns, files, canonicalPoseId, pullFromReferenceMovement };
}

function reused(
  catalogArea: ConfirmedCatalogArea,
  catalogIdOrSlug: string,
  visualSource: VisualSource,
  options: DecisionOptions
): CatalogVisualAssetDecision {
  return decision(catalogArea, catalogIdOrSlug, visualSource, {
    ...options,
    mode: options.mode || "REUSED"
  });
}

function own(
  catalogArea: ConfirmedCatalogArea,
  catalogIdOrSlug: string,
  visualSource: VisualSource,
  options: DecisionOptions
): CatalogVisualAssetDecision {
  return decision(catalogArea, catalogIdOrSlug, visualSource, {
    ...options,
    mode: "NEW_REQUIRED"
  });
}

function decision(
  catalogArea: ConfirmedCatalogArea,
  catalogIdOrSlug: string,
  visualSource: VisualSource,
  options: DecisionOptions
): CatalogVisualAssetDecision {
  const ownSequence = options.mode === "NEW_REQUIRED";
  const approvalRequirement = options.approvalRequirement || (ownSequence ? "VISUAL" : "NONE");
  const approvalStatus = options.approvalStatus || (approvalRequirement === "NONE" ? "APPROVED" : "PENDING");
  const releasePolicy = options.releasePolicy || (options.requiresCompleteAssetSet === false ? "PARTIAL_ALLOWED" : "COMPLETE");
  const needsReview = approvalRequirement !== "NONE" && approvalStatus === "PENDING";
  return {
    catalogArea,
    catalogIdOrSlug,
    matchType: ownSequence ? "USER_CONFIRMED_OWN_SEQUENCE" : "USER_CONFIRMED_SEMANTIC_EQUIVALENCE",
    matchedReferenceMovement: visualSource.canonicalPoseId,
    imageAction: ownSequence
      ? "CRIAR/USAR O PROPRIO MOVIMENTO APOS CRIACAO"
      : "PUXAR IMAGEM REAPROVEITADA DE REFERENCIA EXISTENTE",
    visualAssetMode: options.mode || "REUSED",
    pullFromReferenceMovement: visualSource.pullFromReferenceMovement,
    reusedFromReferenceId: visualSource.referenceIds[0] || null,
    reusedFromReferenceIds: [...visualSource.referenceIds],
    reusedFromMovementId: visualSource.movementIds[0] || null,
    reusedFromMovementIds: [...visualSource.movementIds],
    reusedFromAssetPattern: visualSource.patterns.join(" ; "),
    reusedFromAssetPatterns: [...visualSource.patterns],
    canonicalPoseId: visualSource.canonicalPoseId,
    expectedPhysicalFiles: [...visualSource.files],
    requiredPhysicalFiles: releasePolicy === "PARTIAL_ALLOWED"
      ? []
      : visualSource.files.filter((path) => !path.includes("*")),
    requiresCompleteAssetSet: releasePolicy !== "PARTIAL_ALLOWED",
    approvalRequirement,
    approvalStatus,
    dependencyMovementIds: options.dependencyMovementIds || (ownSequence ? [] : [...visualSource.movementIds]),
    releasePolicy,
    decisionDate: "2026-07-18",
    approvalDate: options.approvalDate === undefined ? (approvalStatus === "APPROVED" ? "2026-07-18" : null) : options.approvalDate,
    approvalNote: options.approvalNote || options.notes,
    needsReview,
    notes: options.notes
  };
}

function filenameFromWebPath(webPath: string) {
  return webPath.split("/").pop() || webPath;
}
