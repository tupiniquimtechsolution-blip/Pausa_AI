import type { ExerciseInstructionSeed, InstructionType } from "@/lib/exercise-instruction-data";
import { extraPlannedReferenceMovementInputs, extraPlannedReferences } from "@/lib/reference-extra-catalog";
import { plannedReferenceVisualDecisions } from "@/lib/catalog-visual-decisions";

export type PlannedReferenceAssetStatus = "READY" | "GENERATED_PENDING_REVIEW" | "PLANNED" | "NEEDS_REVIEW";
export type PlannedReferenceAssetReuseStatus = "REUSED" | "NEW_REQUIRED" | "PARTIAL_REUSE" | "CHECK_BEFORE_GENERATE";
export type PlannedReferenceVideoStatus = "PLANNED";
export type PlannedReferenceCategory = "YOGA" | "MOBILITY" | "STRETCHING" | "HOME_FUNCTIONAL";
export type PlannedReferenceImageRole = "START" | "EXECUTION" | "FINAL" | "COMMON_MISTAKE" | "CORRECTION";

export type PlannedReference = {
  id: "ref_001" | "ref_003" | "ref_004" | "ref_005" | "ref_007" | "ref_008" | "ref_009" | "ref_010" | "ref_011";
  originalTitle: string;
  adaptedTitle: string;
  collectionId: string;
  collectionTitle: string;
  category: string;
  appCategory: PlannedReferenceCategory;
  subcategory: string;
  originalLanguage: string;
  appLanguage: string;
  assetBasePath: string;
  objective: string;
  benefits: string[];
  safetyAlert: string;
  safeObservation: string;
  globalTags: string[];
  globalRecommendWhen: string[];
  globalAvoidWhen: string[];
};

export type PlannedReferenceImage = {
  stepId: string;
  role: PlannedReferenceImageRole;
  filename: string;
  src: string;
  alt: string;
  status: PlannedReferenceAssetStatus;
};

export type PlannedReferenceMovement = {
  id: string;
  referenceId: PlannedReference["id"];
  collectionId: string;
  collectionTitle: string;
  categoria: string;
  appCategory: PlannedReferenceCategory;
  subcategoria: string;
  nome_pt: string;
  nome_original: string;
  tipo: string;
  objetivo_principal: string;
  objetivos_secundarios: string[];
  descricao: string;
  beneficios: string[];
  como_fazer: string;
  passo_a_passo: string[];
  erro_comum: string;
  correcao_postural: string;
  indicacoes: string[];
  contraindicacoes: string[];
  cuidados: string[];
  regioes_corporais: string[];
  grupos_musculares: string[];
  articulacoes: string[];
  equipamentos: string[];
  nivel: string;
  levelNumber: number;
  intensidade: string;
  duracao: string;
  durationSeconds: number;
  sets: number | null;
  repeticoes: string | null;
  restSeconds: number | null;
  respiracao: string;
  palavras_chave: string[];
  sinonimos: string[];
  tags: string[];
  prioridade: string;
  quando_recomendar: string[];
  quando_evitar: string[];
  objetivo_fisico: string;
  objetivo_emocional: string;
  status_asset: PlannedReferenceAssetStatus;
  status_video: PlannedReferenceVideoStatus;
  visual_reuse: string;
  assetReuseStatus: PlannedReferenceAssetReuseStatus;
  imagePaths: string[];
  expectedImagePaths: string[];
  missingImages: string[];
  thumbnail: string;
  coverImage: string;
  primaryImage: PlannedReferenceImage;
  images: PlannedReferenceImage[];
  searchText: string;
  safetyFlags: string[];
};

export type MovementInput = {
  referenceId: PlannedReference["id"];
  id: string;
  nome_pt: string;
  nome_original: string;
  tipo?: string;
  appCategory?: PlannedReferenceCategory;
  instructionType?: InstructionType;
  objetivo_principal: string;
  objetivos_secundarios?: string[];
  descricao?: string;
  beneficios?: string[];
  como_fazer: string;
  passo_a_passo?: string[];
  erro_comum?: string;
  correcao_postural?: string;
  indicacoes?: string[];
  contraindicacoes?: string[];
  cuidados?: string[];
  regioes_corporais?: string[];
  grupos_musculares?: string[];
  articulacoes?: string[];
  equipamentos?: string[];
  nivel?: string;
  levelNumber?: number;
  intensidade?: string;
  duracao?: string;
  durationSeconds?: number;
  sets?: number | null;
  repeticoes?: string | null;
  restSeconds?: number | null;
  respiracao?: string;
  palavras_chave?: string[];
  sinonimos?: string[];
  tags?: string[];
  prioridade?: string;
  quando_recomendar?: string[];
  quando_evitar?: string[];
  objetivo_fisico?: string;
  objetivo_emocional?: string;
  imageFiles: string[];
  readyImageFiles?: string[];
  generatedPendingReviewImageFiles?: string[];
  needsReviewImageFiles?: string[];
  visual_reuse?: string;
  assetReuseStatus?: PlannedReferenceAssetReuseStatus;
};

export const plannedReferences: PlannedReference[] = [
  ...extraPlannedReferences,
  {
    id: "ref_003",
    originalTitle: "Surya Namaskar - 12 Steps: A Complete Workout for Body, Mind & Soul",
    adaptedTitle: "Saudacao ao Sol - 12 passos para corpo, mente e respiracao",
    collectionId: "surya_namaskar_12_passos",
    collectionTitle: "Saudacao ao Sol - 12 passos",
    category: "Yoga",
    appCategory: "YOGA",
    subcategory: "Sequencia guiada / Yoga energizante",
    originalLanguage: "Ingles",
    appLanguage: "Portugues",
    assetBasePath: "/instructional-images/yoga/surya-namaskar",
    objective:
      "Sequencia tradicional de yoga com 12 etapas para ativar o corpo, melhorar flexibilidade, fortalecer membros superiores, pernas, core e costas, mobilizar coluna, estimular respiracao consciente e apoiar reducao de estresse leve.",
    benefits: [
      "ajuda a ativar o corpo inteiro",
      "pode melhorar a flexibilidade",
      "contribui para mobilidade e disposicao",
      "fortalece bracos, pernas, core e costas",
      "pode melhorar postura e consciencia corporal",
      "ajuda a reduzir estresse e ansiedade leve",
      "promove equilibrio entre corpo, mente e respiracao"
    ],
    safetyAlert:
      "Faca os movimentos com calma e respeite seus limites. Pare se sentir dor forte, tontura, falta de ar ou desconforto incomum.",
    safeObservation: "As imagens finais desta referencia ainda nao foram adicionadas. Todo texto, respiracao e instrucao ficam no app.",
    globalTags: ["yoga", "saudacao ao sol", "surya namaskar", "manha", "energia", "flexibilidade", "forca", "postura", "respiracao", "corpo inteiro", "mobilidade", "equilibrio", "estresse", "ansiedade leve"],
    globalRecommendWhen: ["quero fazer yoga", "quero alongar o corpo todo", "quero comecar o dia melhor", "estou sem energia", "quero melhorar minha flexibilidade", "quero uma sequencia completa", "quero algo para corpo e mente", "quero me movimentar pela manha", "quero reduzir estresse", "quero melhorar postura"],
    globalAvoidWhen: ["dor forte", "dor aguda na lombar", "dor intensa nos punhos", "dor no ombro", "tontura", "falta de ar", "pressao descontrolada", "lesao recente", "pos-operatorio", "gravidez de risco", "dor no peito", "formigamento", "perda de forca"]
  },
  {
    id: "ref_004",
    originalTitle: "20 Yoga Asanas for PCOD & Hormonal Balance",
    adaptedTitle: "20 posturas de yoga para SOP, equilibrio hormonal e reducao do estresse",
    collectionId: "yoga_hormonal_sop_equilibrio",
    collectionTitle: "Yoga para SOP e equilibrio hormonal",
    category: "Yoga",
    appCategory: "YOGA",
    subcategory: "Yoga para equilibrio hormonal e bem-estar feminino",
    originalLanguage: "Ingles",
    appLanguage: "Portugues",
    assetBasePath: "/instructional-images/yoga/hormonal-balance",
    objective:
      "Colecao de posturas e respiracoes de yoga voltada a bem-estar feminino, relaxamento do sistema nervoso, mobilidade de quadril e pelve, autocuidado e reducao de estresse.",
    benefits: [
      "pode apoiar o equilibrio hormonal",
      "pode contribuir para uma rotina mais regulada e consciente",
      "pode ajudar a reduzir estresse e tensao",
      "pode favorecer relaxamento, mobilidade e consciencia corporal"
    ],
    safetyAlert:
      "Esta colecao nao substitui acompanhamento medico, ginecologico, nutricional ou endocrinologico. Em caso de SOP, dor intensa, sangramento anormal, tontura, gestacao, pos-operatorio, doenca hormonal diagnosticada ou uso de medicacao, busque orientacao profissional.",
    safeObservation:
      "Use linguagem segura: nao prometer cura de SOP, regulacao hormonal garantida ou tratamento de ciclo menstrual.",
    globalTags: ["yoga", "SOP", "ovario policistico", "equilibrio hormonal", "ciclo menstrual", "estresse", "ansiedade leve", "respiracao", "quadril", "pelve", "relaxamento", "bem-estar feminino", "autocuidado", "flexibilidade"],
    globalRecommendWhen: ["tenho SOP", "quero yoga para hormonios", "quero reduzir estresse", "estou ansiosa", "quero melhorar meu ciclo", "quero yoga para colica leve", "quero relaxar", "quero alongar quadril", "quero uma pratica feminina", "quero equilibrio hormonal"],
    globalAvoidWhen: ["dor pelvica intensa", "sangramento anormal", "febre", "gravidez de risco", "pos-operatorio", "tontura forte", "dor aguda", "falta de ar", "sintomas neurologicos", "dor no peito"]
  },
  {
    id: "ref_005",
    originalTitle: "From here / To here",
    adaptedTitle: "Sequencia para abertura de quadril e flexibilidade lateral",
    collectionId: "abertura_quadril_flexibilidade_lateral",
    collectionTitle: "Abertura de quadril e flexibilidade lateral",
    category: "Mobilidade / Yoga / Alongamento",
    appCategory: "MOBILITY",
    subcategory: "Abertura de quadril e preparacao para abertura lateral",
    originalLanguage: "Ingles",
    appLanguage: "Portugues",
    assetBasePath: "/instructional-images/mobility/split-prep",
    objective:
      "Sequencia progressiva para abertura gradual de quadril, mobilidade de virilha, flexibilidade de adutores, alongamento de posteriores de coxa e preparacao segura para abertura lateral.",
    benefits: [
      "pode ajudar no ganho gradual de mobilidade",
      "pode melhorar flexibilidade de quadril e adutores",
      "favorece consciencia corporal",
      "apoia alongamento progressivo sem promessa de espacate"
    ],
    safetyAlert:
      "Nao apresente como promessa de conseguir espacate. Respeite limites individuais e evite em caso de dor aguda, lesao recente, formigamento, dor irradiada ou instabilidade.",
    safeObservation: "A sequencia deve ser progressiva, sem forcar abertura lateral alem do conforto.",
    globalTags: ["abertura de quadril", "mobilidade", "virilha", "adutores", "flexibilidade", "espacate lateral", "alongamento", "yoga", "pernas", "quadril", "parede", "postura", "mobilidade de quadril"],
    globalRecommendWhen: ["quero abrir o quadril", "quero melhorar flexibilidade", "quero treinar espacate", "minha virilha e muito encurtada", "quero alongar pernas", "quero melhorar mobilidade do quadril", "quero uma rotina de alongamento para pernas"],
    globalAvoidWhen: ["dor forte no quadril", "dor no joelho", "dor na virilha", "lesao recente", "formigamento", "dor irradiada", "cirurgia recente", "instabilidade articular", "gravidez de risco"]
  }
];

export const plannedReferenceById = Object.fromEntries(plannedReferences.map((item) => [item.id, item])) as Record<PlannedReference["id"], PlannedReference>;

const severeSafetyFlags = [
  "dor forte",
  "dor intensa",
  "dor aguda",
  "falta de ar",
  "dor no peito",
  "formigamento",
  "perda de forca",
  "tontura forte",
  "tontura intensa",
  "pressao descontrolada",
  "lesao recente",
  "pos-operatorio",
  "cirurgia recente",
  "gravidez de risco",
  "febre",
  "sintomas neurologicos",
  "dor irradiada",
  "instabilidade articular"
];

const generatedPendingReviewImageFilesByReference: Partial<Record<PlannedReference["id"], string[]>> = {
  ref_004: [
    "yoga_hormonal_001_borboleta_step_01_start.png",
    "yoga_hormonal_001_borboleta_step_02_knees_bend.png",
    "yoga_hormonal_001_borboleta_step_03_feet_together.png",
    "yoga_hormonal_001_borboleta_step_04_final.png",
    "yoga_hormonal_001_borboleta_step_05_common_mistake.png",
    "yoga_hormonal_001_borboleta_step_06_correction.png",
    "yoga_hormonal_002_borboleta_reclinada_step_01_start.png",
    "yoga_hormonal_002_borboleta_reclinada_step_02_feet_together_knees_open.png",
    "yoga_hormonal_002_borboleta_reclinada_step_03_final.png",
    "yoga_hormonal_002_borboleta_reclinada_step_04_common_mistake.png",
    "yoga_hormonal_002_borboleta_reclinada_step_05_correction.png",
    "yoga_hormonal_003_malasana_step_01_start.png",
    "yoga_hormonal_003_malasana_step_02_descend.png",
    "yoga_hormonal_003_malasana_step_04_final.png",
    "yoga_hormonal_003_malasana_step_05_common_mistake.png",
    "yoga_hormonal_003_malasana_step_06_correction.png",
    "yoga_hormonal_004_balasana_step_01_start.png",
    "yoga_hormonal_004_balasana_step_02_sit_back_reach_forward.png",
    "yoga_hormonal_004_balasana_step_03_final.png",
    "yoga_hormonal_004_balasana_step_04_common_mistake.png",
    "yoga_hormonal_004_balasana_step_05_correction.png",
    "yoga_hormonal_005_marjariasana_step_01_tabletop.png",
    "yoga_hormonal_005_marjariasana_step_04_common_mistake.png",
    "yoga_hormonal_005_marjariasana_step_05_correction.png",
    "yoga_hormonal_006_bitilasana_step_01_tabletop.png",
    "yoga_hormonal_006_bitilasana_step_02_chest_forward.png",
    "yoga_hormonal_006_bitilasana_step_03_final.png",
    "yoga_hormonal_006_bitilasana_step_04_common_mistake.png",
    "yoga_hormonal_006_bitilasana_step_05_correction.png",
    "yoga_hormonal_008_setu_bandhasana_step_01_lie_down.png",
    "yoga_hormonal_008_setu_bandhasana_step_02_knees_bent.png",
    "yoga_hormonal_008_setu_bandhasana_step_03_hips_lift.png",
    "yoga_hormonal_008_setu_bandhasana_step_04_final.png",
    "yoga_hormonal_008_setu_bandhasana_step_05_common_mistake.png",
    "yoga_hormonal_008_setu_bandhasana_step_06_correction.png",
    "yoga_hormonal_009_ustrasana_step_01_kneeling.png",
    "yoga_hormonal_009_ustrasana_step_02_hands_to_back.png",
    "yoga_hormonal_009_ustrasana_step_03_chest_open.png",
    "yoga_hormonal_009_ustrasana_step_04_final.png",
    "yoga_hormonal_009_ustrasana_step_05_common_mistake.png",
    "yoga_hormonal_009_ustrasana_step_06_correction.png",
    "yoga_hormonal_011_trikonasana_step_01_wide_stance.png",
    "yoga_hormonal_011_trikonasana_step_02_arms_open.png",
    "yoga_hormonal_011_trikonasana_step_03_side_reach.png",
    "yoga_hormonal_011_trikonasana_step_04_final.png",
    "yoga_hormonal_011_trikonasana_step_05_common_mistake.png",
    "yoga_hormonal_011_trikonasana_step_06_correction.png",
    "yoga_hormonal_012_parsvakonasana_step_01_wide_stance.png",
    "yoga_hormonal_012_parsvakonasana_step_02_front_knee_bend.png",
    "yoga_hormonal_012_parsvakonasana_step_03_side_angle.png",
    "yoga_hormonal_012_parsvakonasana_step_04_final.png",
    "yoga_hormonal_012_parsvakonasana_step_05_common_mistake.png",
    "yoga_hormonal_013_paschimottanasana_step_01_seated.png",
    "yoga_hormonal_013_paschimottanasana_step_02_arms_forward.png",
    "yoga_hormonal_013_paschimottanasana_step_03_final.png",
    "yoga_hormonal_013_paschimottanasana_step_04_common_mistake.png"
  ]
};

const supplementalGeneratedPendingReviewImageFilesByMovement: Record<string, string[]> = {
  ref_004_mov_02: [
    "yoga_hormonal_002_borboleta_reclinada_step_02_feet_together_knees_open.png",
    "yoga_hormonal_002_borboleta_reclinada_step_03_final.png",
    "yoga_hormonal_002_borboleta_reclinada_step_04_common_mistake.png",
    "yoga_hormonal_002_borboleta_reclinada_step_05_correction.png"
  ],
  ref_004_mov_04: [
    "yoga_hormonal_004_balasana_step_02_sit_back_reach_forward.png",
    "yoga_hormonal_004_balasana_step_03_final.png",
    "yoga_hormonal_004_balasana_step_04_common_mistake.png",
    "yoga_hormonal_004_balasana_step_05_correction.png"
  ],
  ref_004_mov_13: [
    "yoga_hormonal_013_paschimottanasana_step_03_final.png",
    "yoga_hormonal_013_paschimottanasana_step_04_common_mistake.png"
  ]
};

function unique(items: string[]) {
  return Array.from(new Set(items.map((item) => item.trim()).filter(Boolean)));
}

function imageRole(filename: string, index: number, total: number): PlannedReferenceImageRole {
  if (filename.includes("common_mistake")) return "COMMON_MISTAKE";
  if (filename.includes("correction")) return "CORRECTION";
  if (index === 0) return "START";
  if (index === total - 1) return "FINAL";
  return "EXECUTION";
}

function stepIdFromFilename(filename: string) {
  return filename.replace(/\.png$/i, "").replace(/^[a-z0-9]+_[0-9]+_/, "");
}

function secondsFromDuration(duration: string, fallback = 180) {
  const clean = duration.toLowerCase();
  const match = clean.match(/(\d+)/);
  const value = match ? Number(match[1]) : 0;
  if (!value) return fallback;
  if (clean.includes("s ") || clean.endsWith("s") || clean.includes("segundo")) return Math.max(60, value * 3);
  if (clean.includes("minuto")) return value * 60;
  if (clean.includes("respiracao") || clean.includes("respiracoes")) return Math.max(60, value * 8);
  return fallback;
}

function levelNumber(level: string) {
  const clean = level.toLowerCase();
  if (clean.includes("avanc")) return 5;
  if (clean.includes("intermedi")) return 3;
  return 1;
}

function defaultInstructionType(input: MovementInput, reference: PlannedReference): InstructionType {
  if (input.instructionType) return input.instructionType;
  const text = `${input.nome_pt} ${input.nome_original} ${input.tipo || ""}`.toLowerCase();
  if (text.includes("respiracao") || text.includes("pranayama")) return "BREATHING";
  if ((input.appCategory || reference.appCategory) === "STRETCHING") return "STRETCHING";
  if ((input.appCategory || reference.appCategory) === "HOME_FUNCTIONAL") return "REPS_BASED";
  return "MOBILITY";
}

function plannedImageStatus(input: MovementInput, filename: string): PlannedReferenceAssetStatus {
  if (input.readyImageFiles?.includes(filename)) return "READY";
  if (input.generatedPendingReviewImageFiles?.includes(filename)) return "GENERATED_PENDING_REVIEW";
  if (generatedPendingReviewImageFilesByReference[input.referenceId]?.includes(filename)) return "GENERATED_PENDING_REVIEW";
  if (input.needsReviewImageFiles?.includes(filename)) return "NEEDS_REVIEW";
  return "PLANNED";
}

function movementAssetStatus(images: PlannedReferenceImage[]): PlannedReferenceAssetStatus {
  const linkedImages = images.filter((image) => image.status === "READY" || image.status === "GENERATED_PENDING_REVIEW");
  const hasPlanned = images.some((image) => image.status === "PLANNED");
  const hasNeedsReview = images.some((image) => image.status === "NEEDS_REVIEW");
  if (!linkedImages.length && !hasNeedsReview) return "PLANNED";
  if (hasNeedsReview || hasPlanned) return "NEEDS_REVIEW";
  if (linkedImages.some((image) => image.status === "READY")) return "READY";
  return "GENERATED_PENDING_REVIEW";
}

function movement(input: MovementInput): PlannedReferenceMovement {
  const visualDecision = plannedReferenceVisualDecisions[input.id];
  if (visualDecision?.imageFiles) input = { ...input, imageFiles: visualDecision.imageFiles };
  const reference = plannedReferenceById[input.referenceId];
  const appCategory = input.appCategory || reference.appCategory;
  const duracao = input.duracao || "5 a 8 respiracoes";
  const nivel = input.nivel || "iniciante";
  const contraindications = unique([...(input.contraindicacoes || []), ...reference.globalAvoidWhen]);
  const whenAvoid = unique([...(input.quando_evitar || []), ...reference.globalAvoidWhen]);
  const tags = unique([...(input.tags || []), ...reference.globalTags, input.referenceId, reference.collectionId]);
  const keywords = unique([...(input.palavras_chave || []), input.nome_pt, input.nome_original, reference.adaptedTitle, reference.originalTitle, reference.collectionId, reference.collectionTitle]);
  const imageFiles = unique([...input.imageFiles, ...(supplementalGeneratedPendingReviewImageFilesByMovement[input.id] || [])]);
  const statusInput = visualDecision?.allImagesReady
    ? { ...input, readyImageFiles: imageFiles }
    : visualDecision?.needsReviewImageFiles
      ? { ...input, needsReviewImageFiles: visualDecision.needsReviewImageFiles }
      : input;
  const images = imageFiles.map((filename, index) => ({
    stepId: stepIdFromFilename(filename),
    role: imageRole(filename, index, imageFiles.length),
    filename,
    src: `${reference.assetBasePath}/${filename}`,
    alt: `${input.nome_pt} - imagem planejada ${index + 1}`,
    status: plannedImageStatus(statusInput, filename)
  }));
  const linkedImages = images.filter((image) => image.status === "READY" || image.status === "GENERATED_PENDING_REVIEW");
  const missingImages = images.filter((image) => image.status === "PLANNED");
  const primaryImage = images[0] || {
    stepId: "planned",
    role: "START" as const,
    filename: "",
    src: "",
    alt: input.nome_pt,
    status: "PLANNED" as const
  };
  const objetivosSecundarios = input.objetivos_secundarios || reference.benefits.slice(0, 4);
  const indicacoes = input.indicacoes || reference.globalRecommendWhen;
  const regioes = input.regioes_corporais || ["corpo inteiro"];
  const grupos = input.grupos_musculares || ["musculatura postural"];
  const articulacoes = input.articulacoes || ["coluna", "quadril", "ombros"];
  const equipamentos = input.equipamentos || ["Colchonete"];
  const cuidados = unique([
    ...(input.cuidados || []),
    "Respeite amplitude confortavel.",
    "Pare se sentir dor, tontura, falta de ar ou desconforto incomum.",
    reference.safetyAlert
  ]);
  const searchText = unique([
    input.id,
    input.nome_pt,
    input.nome_original,
    input.tipo || "yoga",
    input.objetivo_principal,
    ...objetivosSecundarios,
    input.descricao || input.objetivo_principal,
    input.como_fazer,
    input.erro_comum || "",
    input.correcao_postural || "",
    ...indicacoes,
    ...contraindications,
    ...cuidados,
    ...regioes,
    ...grupos,
    ...articulacoes,
    ...equipamentos,
    nivel,
    input.intensidade || "LIGHT",
    duracao,
    input.respiracao || "Respiracao lenta e nasal.",
    ...keywords,
    ...(input.sinonimos || []),
    ...tags,
    input.prioridade || "media",
    ...(input.quando_recomendar || reference.globalRecommendWhen),
    ...whenAvoid,
    input.objetivo_fisico || input.objetivo_principal,
    input.objetivo_emocional || "consciencia corporal e autocuidado",
    reference.id,
    reference.collectionId,
    reference.collectionTitle,
    reference.category,
    reference.subcategory,
    appCategory,
    visualDecision?.visualReuse || input.visual_reuse || "",
    visualDecision?.assetReuseStatus || input.assetReuseStatus || ""
  ]).join(" ");

  return {
    id: input.id,
    referenceId: reference.id,
    collectionId: reference.collectionId,
    collectionTitle: reference.collectionTitle,
    categoria: reference.category,
    appCategory,
    subcategoria: reference.subcategory,
    nome_pt: input.nome_pt,
    nome_original: input.nome_original,
    tipo: input.tipo || "yoga",
    objetivo_principal: input.objetivo_principal,
    objetivos_secundarios: objetivosSecundarios,
    descricao: input.descricao || input.objetivo_principal,
    beneficios: input.beneficios || unique([...reference.benefits, ...objetivosSecundarios]).slice(0, 8),
    como_fazer: input.como_fazer,
    passo_a_passo: input.passo_a_passo || [input.como_fazer],
    erro_comum: input.erro_comum || "Forcar amplitude ou perder o alinhamento durante a postura.",
    correcao_postural: input.correcao_postural || "Reduza a amplitude, organize a respiracao e mantenha a postura confortavel.",
    indicacoes,
    contraindicacoes: contraindications,
    cuidados,
    regioes_corporais: regioes,
    grupos_musculares: grupos,
    articulacoes,
    equipamentos,
    nivel,
    levelNumber: input.levelNumber || levelNumber(nivel),
    intensidade: input.intensidade || "LIGHT",
    duracao,
    durationSeconds: input.durationSeconds || secondsFromDuration(duracao),
    sets: input.sets ?? null,
    repeticoes: input.repeticoes ?? null,
    restSeconds: input.restSeconds ?? null,
    respiracao: input.respiracao || "Respire de forma lenta e confortavel.",
    palavras_chave: keywords,
    sinonimos: input.sinonimos || [],
    tags,
    prioridade: input.prioridade || "media para check-ins compativeis com a colecao",
    quando_recomendar: input.quando_recomendar || reference.globalRecommendWhen,
    quando_evitar: whenAvoid,
    objetivo_fisico: input.objetivo_fisico || input.objetivo_principal,
    objetivo_emocional: input.objetivo_emocional || "autocuidado, presenca e consciencia corporal",
    status_asset: movementAssetStatus(images),
    status_video: "PLANNED",
    visual_reuse: visualDecision?.visualReuse || input.visual_reuse || "CHECK_BEFORE_GENERATE",
    assetReuseStatus: visualDecision?.assetReuseStatus || input.assetReuseStatus || "CHECK_BEFORE_GENERATE",
    imagePaths: linkedImages.map((asset) => asset.src),
    expectedImagePaths: images.map((asset) => asset.src),
    missingImages: missingImages.map((asset) => asset.filename),
    thumbnail: linkedImages[0]?.src || "",
    coverImage: linkedImages[0]?.src || "",
    primaryImage,
    images,
    searchText,
    safetyFlags: unique([...severeSafetyFlags, ...whenAvoid, ...contraindications])
  };
}

const suryaCommon = {
  referenceId: "ref_003" as const,
  tipo: "sequencia de yoga",
  appCategory: "YOGA" as const,
  equipamentos: ["Nenhum ou colchonete"],
  prioridade: "alta para rotina matinal, yoga energizante e alongamento do corpo todo",
  objetivo_emocional: "foco, energia leve e equilibrio entre corpo, mente e respiracao"
};

const hormonalCommon = {
  referenceId: "ref_004" as const,
  tipo: "yoga para bem-estar feminino",
  appCategory: "YOGA" as const,
  equipamentos: ["Colchonete"],
  prioridade: "alta quando houver busca por yoga hormonal, SOP, autocuidado, estresse ou tensao pelvica leve",
  objetivo_emocional: "calma, autocuidado e conexao corporal"
};

const splitCommon = {
  referenceId: "ref_005" as const,
  tipo: "mobilidade / yoga / alongamento",
  equipamentos: ["Colchonete"],
  prioridade: "alta para abertura de quadril, mobilidade e alongamento progressivo sem dor",
  objetivo_emocional: "paciencia corporal, controle e seguranca no progresso"
};

export const plannedReferenceMovements: PlannedReferenceMovement[] = [
  movement({
    ...suryaCommon,
    id: "ref_003_mov_01",
    nome_pt: "Postura da oracao",
    nome_original: "Pranamasana / Prayer Pose",
    objetivo_principal: "Preparar corpo e respiracao para iniciar a sequencia.",
    objetivos_secundarios: ["trazer foco", "alinhar postura", "estabilizar respiracao", "criar intencao para a pratica"],
    como_fazer: "Fique em pe com os pes proximos ou unidos, coluna alongada e maos unidas a frente do peito. Relaxe os ombros e respire naturalmente.",
    passo_a_passo: ["Ficar em pe na frente do colchonete.", "Alinhar pes e coluna.", "Unir as maos a frente do peito.", "Relaxar ombros.", "Respirar normalmente."],
    erro_comum: "Ombros elevados e coluna relaxada demais.",
    correcao_postural: "Alongar a coluna, relaxar ombros e manter maos no centro do peito.",
    indicacoes: ["inicio de pratica", "foco mental", "rotina matinal", "preparacao para yoga", "respiracao consciente"],
    contraindicacoes: ["tontura intensa em pe", "dificuldade de equilibrio sem apoio"],
    regioes_corporais: ["corpo inteiro", "coluna", "ombros", "peito"],
    grupos_musculares: ["core leve", "musculatura postural"],
    articulacoes: ["tornozelos", "joelhos", "quadril", "ombros"],
    nivel: "iniciante",
    intensidade: "VERY_LIGHT",
    duracao: "1 a 3 respiracoes",
    respiracao: "Normal.",
    palavras_chave: ["comecar yoga", "foco", "respiracao", "saudacao ao sol", "rotina matinal"],
    tags: ["yoga", "respiracao", "foco", "inicio", "manha", "postura"],
    objetivo_fisico: "alinhamento postural inicial",
    imageFiles: ["surya_001_pranamasana_step_01_start.png", "surya_001_pranamasana_step_02_hands_to_chest.png", "surya_001_pranamasana_step_03_final.png", "surya_001_pranamasana_step_04_common_mistake.png", "surya_001_pranamasana_step_05_correction.png"]
  }),
  movement({
    ...suryaCommon,
    id: "ref_003_mov_02",
    nome_pt: "Postura dos bracos elevados",
    nome_original: "Hasta Uttanasana / Raised Arms Pose",
    objetivo_principal: "Alongar a frente do corpo e abrir o peito.",
    objetivos_secundarios: ["mobilizar coluna em extensao suave", "ativar respiracao", "alongar bracos e abdomen", "preparar a flexao a frente"],
    como_fazer: "A partir da postura da oracao, inspire e eleve os bracos acima da cabeca, alongando o corpo para cima. Incline levemente o tronco para tras apenas se for confortavel.",
    erro_comum: "Comprimir a lombar e jogar a cabeca para tras.",
    correcao_postural: "Crescer para cima antes de inclinar e manter abdomen levemente ativo.",
    indicacoes: ["rigidez no tronco", "abertura do peito", "rotina matinal", "alongamento leve", "expansao respiratoria"],
    contraindicacoes: ["dor lombar ao estender", "tontura ao olhar para cima", "dor intensa no ombro"],
    regioes_corporais: ["bracos", "ombros", "peito", "abdomen", "coluna"],
    grupos_musculares: ["deltoides", "peitoral", "abdominais", "extensores da coluna"],
    articulacoes: ["ombros", "coluna", "quadril"],
    nivel: "iniciante",
    intensidade: "LIGHT",
    duracao: "1 respiracao ou transicao",
    respiracao: "Inspirar.",
    palavras_chave: ["abrir peito", "alongar bracos", "acordar corpo", "respiracao", "coluna"],
    tags: ["yoga", "extensao", "respiracao", "manha", "postura"],
    objetivo_fisico: "abertura anterior do tronco e mobilidade de ombros",
    imageFiles: ["surya_002_hasta_uttanasana_step_01_start.png", "surya_002_hasta_uttanasana_step_02_arms_rise.png", "surya_002_hasta_uttanasana_step_03_final.png", "surya_002_hasta_uttanasana_step_04_common_mistake.png", "surya_002_hasta_uttanasana_step_05_correction.png"]
  }),
  movement({
    ...suryaCommon,
    id: "ref_003_mov_03",
    nome_pt: "Flexao em pe com maos aos pes",
    nome_original: "Padahastasana / Hand to Foot Pose",
    objetivo_principal: "Alongar cadeia posterior e mobilizar a coluna em flexao.",
    objetivos_secundarios: ["alongar posteriores de coxa", "alongar panturrilhas", "desacelerar respiracao", "preparar a passada para tras"],
    como_fazer: "Expire e incline o tronco a frente a partir do quadril, levando as maos em direcao ao chao, pes ou tornozelos. Mantenha joelhos suavemente flexionados se necessario.",
    erro_comum: "Forcar a lombar com joelhos travados.",
    correcao_postural: "Dobrar levemente os joelhos e aproximar o abdomen das coxas com controle.",
    indicacoes: ["rigidez nas pernas", "alongamento posterior", "mobilidade de coluna", "rotina de flexibilidade"],
    contraindicacoes: ["dor lombar aguda", "tontura ao dobrar para frente", "pressao baixa com sintomas", "dor ciatica intensa"],
    regioes_corporais: ["coluna", "posteriores de coxa", "panturrilhas", "quadril"],
    grupos_musculares: ["isquiotibiais", "panturrilhas", "lombar", "gluteos"],
    articulacoes: ["quadril", "joelhos", "tornozelos", "coluna"],
    nivel: "iniciante a intermediario",
    intensidade: "LIGHT",
    duracao: "1 respiracao ou 5 a 8 respiracoes em pratica lenta",
    respiracao: "Expirar.",
    palavras_chave: ["alongar pernas", "posterior de coxa", "flexao a frente", "coluna", "rigidez"],
    tags: ["yoga", "alongamento", "posterior", "coluna", "flexibilidade"],
    objetivo_fisico: "alongamento posterior e flexibilidade",
    imageFiles: ["surya_003_padahastasana_step_01_start.png", "surya_003_padahastasana_step_02_hip_hinge.png", "surya_003_padahastasana_step_03_hands_down.png", "surya_003_padahastasana_step_04_final.png", "surya_003_padahastasana_step_05_common_mistake.png", "surya_003_padahastasana_step_06_correction.png"]
  }),
  movement({
    ...suryaCommon,
    id: "ref_003_mov_04",
    nome_pt: "Postura equestre",
    nome_original: "Ashwa Sanchalanasana / Equestrian Pose",
    objetivo_principal: "Abrir quadril e alongar a frente da perna de tras.",
    objetivos_secundarios: ["fortalecer pernas", "mobilizar quadril", "alongar flexores de quadril", "preparar a prancha"],
    como_fazer: "Leve uma perna para tras, mantendo a outra a frente entre as maos. Apoie o joelho de tras se necessario e abra o peito com controle.",
    erro_comum: "Joelho da frente desalinhado e quadril caido.",
    correcao_postural: "Alinhar joelho com tornozelo, alongar coluna e distribuir o peso.",
    indicacoes: ["quadril rigido", "encurtamento da frente do quadril", "mobilidade de pernas", "sequencia energetica"],
    contraindicacoes: ["dor forte no joelho", "dor intensa no quadril", "instabilidade importante", "lesao recente"],
    regioes_corporais: ["quadril", "pernas", "coluna", "peito"],
    grupos_musculares: ["flexores do quadril", "quadriceps", "gluteos", "core"],
    articulacoes: ["quadril", "joelho", "tornozelo", "coluna"],
    nivel: "iniciante a intermediario",
    intensidade: "MODERATE",
    duracao: "1 respiracao ou transicao",
    respiracao: "Inspirar.",
    palavras_chave: ["quadril", "flexor de quadril", "alongar pernas", "avanco", "yoga"],
    tags: ["yoga", "quadril", "pernas", "mobilidade", "saudacao ao sol"],
    objetivo_fisico: "mobilidade de quadril e extensao da perna de tras",
    imageFiles: ["surya_004_ashwa_sanchalanasana_step_01_start.png", "surya_004_ashwa_sanchalanasana_step_02_leg_back.png", "surya_004_ashwa_sanchalanasana_step_03_chest_open.png", "surya_004_ashwa_sanchalanasana_step_04_final.png", "surya_004_ashwa_sanchalanasana_step_05_common_mistake.png", "surya_004_ashwa_sanchalanasana_step_06_correction.png"]
  }),
  movement({
    ...suryaCommon,
    id: "ref_003_mov_05",
    nome_pt: "Prancha",
    nome_original: "Phalakasana / Plank Pose",
    objetivo_principal: "Fortalecer core, bracos e estabilidade corporal.",
    objetivos_secundarios: ["fortalecer ombros", "melhorar alinhamento", "preparar transicao para oito apoios", "ativar corpo inteiro"],
    como_fazer: "Leve a perna de tras para encontrar a outra e forme uma linha firme do topo da cabeca aos calcanhares, com maos abaixo dos ombros.",
    erro_comum: "Quadril caido ou elevado demais.",
    correcao_postural: "Alinhar cabeca, tronco, quadril e pernas em uma linha estavel.",
    indicacoes: ["fortalecimento leve a moderado", "postura", "estabilidade", "ativacao do core"],
    contraindicacoes: ["dor no punho", "dor no ombro", "dor lombar ao sustentar", "lesao recente"],
    regioes_corporais: ["core", "bracos", "ombros", "pernas", "coluna"],
    grupos_musculares: ["abdominais", "deltoides", "peitoral", "quadriceps", "gluteos"],
    articulacoes: ["punhos", "ombros", "coluna", "quadril"],
    nivel: "intermediario",
    intensidade: "MODERATE",
    duracao: "1 respiracao ou transicao",
    respiracao: "Expirar.",
    palavras_chave: ["prancha", "core", "fortalecer abdomen", "bracos", "estabilidade"],
    tags: ["yoga", "core", "forca", "prancha", "saudacao ao sol"],
    objetivo_fisico: "forca e estabilidade de core e ombros",
    imageFiles: ["surya_005_phalakasana_step_01_start.png", "surya_005_phalakasana_step_02_step_back.png", "surya_005_phalakasana_step_03_alignment.png", "surya_005_phalakasana_step_04_final.png", "surya_005_phalakasana_step_05_common_mistake.png", "surya_005_phalakasana_step_06_correction.png"]
  }),
  movement({
    ...suryaCommon,
    id: "ref_003_mov_06",
    nome_pt: "Saudacao com oito apoios",
    nome_original: "Ashtanga Namaskar / Salute with Eight Points",
    objetivo_principal: "Transicao de forca e controle com oito pontos de apoio.",
    objetivos_secundarios: ["fortalecer bracos", "preparar extensao da cobra", "trabalhar controle corporal", "desenvolver consciencia de apoio"],
    como_fazer: "A partir da prancha, abaixe joelhos, peito e queixo em direcao ao chao, mantendo quadril levemente elevado e cotovelos proximos ao corpo.",
    erro_comum: "Cair com o peso nos ombros ou colapsar o pescoco.",
    correcao_postural: "Descer com controle, mantendo cotovelos proximos ao corpo e pescoco confortavel.",
    indicacoes: ["pratica intermediaria", "fortalecimento de bracos", "controle de transicao", "sequencia tradicional"],
    contraindicacoes: ["dor em punhos", "dor nos ombros", "dor cervical", "dificuldade de sustentar o corpo"],
    regioes_corporais: ["bracos", "peito", "joelhos", "queixo", "coluna"],
    grupos_musculares: ["peitoral", "triceps", "ombros", "core"],
    articulacoes: ["punhos", "cotovelos", "ombros", "joelhos", "cervical"],
    nivel: "intermediario",
    intensidade: "MODERATE",
    duracao: "1 respiracao ou transicao",
    respiracao: "Expirar.",
    palavras_chave: ["oito apoios", "transicao", "forca", "bracos", "saudacao ao sol"],
    tags: ["yoga", "forca", "transicao", "bracos", "core"],
    objetivo_fisico: "controle corporal e apoio de bracos",
    imageFiles: ["surya_006_ashtanga_namaskar_step_01_start.png", "surya_006_ashtanga_namaskar_step_02_knees_down.png", "surya_006_ashtanga_namaskar_step_03_chest_chin_down.png", "surya_006_ashtanga_namaskar_step_04_final.png", "surya_006_ashtanga_namaskar_step_05_common_mistake.png", "surya_006_ashtanga_namaskar_step_06_correction.png"]
  }),
  movement({
    ...suryaCommon,
    id: "ref_003_mov_07",
    nome_pt: "Postura da cobra",
    nome_original: "Bhujangasana / Cobra Pose",
    objetivo_principal: "Mobilizar coluna em extensao e abrir o peito.",
    objetivos_secundarios: ["alongar abdomen", "fortalecer costas", "melhorar postura", "ativar respiracao"],
    como_fazer: "Deslize o tronco para frente e eleve o peito com as maos apoiadas no chao, mantendo ombros longe das orelhas e extensao confortavel da coluna.",
    erro_comum: "Empurrar demais com os bracos e comprimir a lombar.",
    correcao_postural: "Elevar o peito com controle, ombros baixos e extensao distribuida.",
    indicacoes: ["abertura de peito", "mobilidade da coluna", "postura", "sequencia de yoga"],
    contraindicacoes: ["dor lombar aguda", "compressao lombar", "gravidez avancada", "dor nos punhos ou ombros"],
    regioes_corporais: ["coluna", "peito", "abdomen", "ombros", "lombar"],
    grupos_musculares: ["extensores da coluna", "gluteos leves", "peitoral", "ombros"],
    articulacoes: ["coluna", "ombros", "cotovelos"],
    nivel: "iniciante a intermediario",
    intensidade: "LIGHT",
    duracao: "1 respiracao ou transicao",
    respiracao: "Inspirar.",
    palavras_chave: ["cobra", "abrir peito", "coluna", "lombar", "postura", "yoga"],
    tags: ["yoga", "coluna", "extensao", "peito", "postura"],
    objetivo_fisico: "extensao suave de coluna e abertura de peito",
    imageFiles: ["surya_007_bhujangasana_step_01_start.png", "surya_007_bhujangasana_step_02_slide_forward.png", "surya_007_bhujangasana_step_03_chest_lift.png", "surya_007_bhujangasana_step_04_final.png", "surya_007_bhujangasana_step_05_common_mistake.png", "surya_007_bhujangasana_step_06_correction.png"]
  }),
  movement({
    ...suryaCommon,
    id: "ref_003_mov_08",
    nome_pt: "Postura da montanha",
    nome_original: "Parvatasana / Mountain Pose",
    objetivo_principal: "Alongar cadeia posterior e fortalecer bracos em V invertido.",
    objetivos_secundarios: ["alongar panturrilhas", "alongar posteriores", "descomprimir a coluna", "estabilizar ombros"],
    como_fazer: "A partir da cobra, eleve o quadril para cima e para tras, formando um V invertido. Mantenha maos firmes e coluna alongada.",
    erro_comum: "Arredondar demais as costas e jogar peso nos punhos.",
    correcao_postural: "Empurrar o chao, alongar coluna e permitir joelhos levemente flexionados.",
    indicacoes: ["alongamento do corpo todo", "rigidez posterior", "mobilidade de coluna", "fortalecimento leve dos bracos"],
    contraindicacoes: ["dor intensa nos punhos", "tontura com cabeca baixa", "pressao descontrolada", "dor no ombro"],
    regioes_corporais: ["bracos", "ombros", "coluna", "posteriores", "panturrilhas"],
    grupos_musculares: ["deltoides", "triceps", "isquiotibiais", "panturrilhas", "costas"],
    articulacoes: ["punhos", "ombros", "quadril", "joelhos", "tornozelos"],
    nivel: "iniciante a intermediario",
    intensidade: "LIGHT",
    duracao: "1 respiracao ou transicao",
    respiracao: "Expirar.",
    palavras_chave: ["cao olhando para baixo", "alongar costas", "panturrilha", "ombros", "yoga"],
    sinonimos: ["cao olhando para baixo", "V invertido", "parvatasana"],
    tags: ["yoga", "alongamento", "coluna", "posteriores", "ombros"],
    objetivo_fisico: "alongamento posterior e estabilidade de ombros",
    imageFiles: ["surya_008_parvatasana_step_01_start.png", "surya_008_parvatasana_step_02_hips_lift.png", "surya_008_parvatasana_step_03_push_back.png", "surya_008_parvatasana_step_04_final.png", "surya_008_parvatasana_step_05_common_mistake.png", "surya_008_parvatasana_step_06_correction.png"]
  }),
  movement({
    ...suryaCommon,
    id: "ref_003_mov_09",
    nome_pt: "Postura equestre, lado oposto",
    nome_original: "Ashwa Sanchalanasana / Equestrian Pose",
    objetivo_principal: "Abrir quadril do lado oposto e retornar da sequencia.",
    objetivos_secundarios: ["equilibrar os lados do corpo", "alongar flexores de quadril", "preparar retorno a flexao em pe", "melhorar mobilidade"],
    como_fazer: "A partir da postura da montanha, leve uma perna a frente entre as maos, mantendo a outra estendida atras ou com joelho apoiado.",
    erro_comum: "Pe da frente longe das maos e tronco colapsado.",
    correcao_postural: "Ajustar o pe entre as maos e alongar o peito.",
    indicacoes: ["trabalho do lado oposto", "mobilidade de quadril", "retorno da sequencia", "equilibrio entre lados"],
    contraindicacoes: ["dor intensa no joelho", "dor intensa no quadril", "instabilidade", "lesao recente"],
    regioes_corporais: ["quadril", "pernas", "coluna", "peito"],
    grupos_musculares: ["flexores do quadril", "quadriceps", "gluteos", "core"],
    articulacoes: ["quadril", "joelho", "tornozelo", "coluna"],
    nivel: "iniciante a intermediario",
    intensidade: "MODERATE",
    duracao: "1 respiracao ou transicao",
    respiracao: "Inspirar.",
    palavras_chave: ["postura equestre", "lado oposto", "quadril", "saudacao ao sol"],
    tags: ["yoga", "quadril", "pernas", "mobilidade", "lado oposto"],
    objetivo_fisico: "mobilidade de quadril do lado oposto",
    imageFiles: ["surya_009_ashwa_sanchalanasana_oposto_step_01_start.png", "surya_009_ashwa_sanchalanasana_oposto_step_02_leg_forward.png", "surya_009_ashwa_sanchalanasana_oposto_step_03_chest_open.png", "surya_009_ashwa_sanchalanasana_oposto_step_04_final.png", "surya_009_ashwa_sanchalanasana_oposto_step_05_common_mistake.png", "surya_009_ashwa_sanchalanasana_oposto_step_06_correction.png"]
  }),
  movement({
    ...suryaCommon,
    id: "ref_003_mov_10",
    nome_pt: "Flexao em pe com maos aos pes",
    nome_original: "Padahastasana / Hand to Foot Pose",
    objetivo_principal: "Retornar a flexao a frente e alongar cadeia posterior.",
    objetivos_secundarios: ["alongamento posterior", "mobilidade", "retorno da sequencia"],
    como_fazer: "Leve a perna de tras a frente, aproximando os pes, e retorne a flexao em pe com maos proximas aos pes.",
    erro_comum: "Subir rapido demais ou travar joelhos.",
    correcao_postural: "Aproximar os pes com controle e suavizar joelhos se necessario.",
    indicacoes: ["alongamento posterior", "mobilidade", "retorno da sequencia"],
    contraindicacoes: ["tontura", "dor lombar aguda", "ciatica intensa"],
    regioes_corporais: ["coluna", "posteriores de coxa", "panturrilhas", "quadril"],
    grupos_musculares: ["isquiotibiais", "panturrilhas", "lombar", "gluteos"],
    articulacoes: ["quadril", "joelhos", "tornozelos", "coluna"],
    nivel: "iniciante a intermediario",
    intensidade: "LIGHT",
    duracao: "1 respiracao ou transicao",
    respiracao: "Expirar.",
    palavras_chave: ["flexao a frente", "retorno", "padahastasana", "posterior de coxa"],
    tags: ["yoga", "alongamento", "posterior", "retorno", "saudacao ao sol"],
    objetivo_fisico: "retorno controlado e alongamento posterior",
    imageFiles: ["surya_010_padahastasana_retorno_step_01_start.png", "surya_010_padahastasana_retorno_step_02_step_forward.png", "surya_010_padahastasana_retorno_step_03_fold_return.png", "surya_010_padahastasana_retorno_step_04_final.png", "surya_010_padahastasana_retorno_step_05_common_mistake.png", "surya_010_padahastasana_retorno_step_06_correction.png"]
  }),
  movement({
    ...suryaCommon,
    id: "ref_003_mov_11",
    nome_pt: "Postura dos bracos elevados",
    nome_original: "Hasta Uttanasana / Raised Arms Pose",
    objetivo_principal: "Retornar a extensao suave e abrir o peito antes do fechamento.",
    objetivos_secundarios: ["alongar frente do corpo", "expandir respiracao", "finalizar a sequencia com energia"],
    como_fazer: "Suba com controle, elevando bracos acima da cabeca e alongando o corpo para cima com leve extensao se confortavel.",
    erro_comum: "Subir rapido usando lombar.",
    correcao_postural: "Subir com controle, ativar abdomen e alongar a coluna.",
    indicacoes: ["retorno da sequencia", "postura", "respiracao"],
    contraindicacoes: ["dor lombar ao estender", "tontura", "dor no ombro"],
    regioes_corporais: ["bracos", "ombros", "peito", "abdomen", "coluna"],
    grupos_musculares: ["deltoides", "peitoral", "abdominais", "extensores da coluna"],
    articulacoes: ["ombros", "coluna", "quadril"],
    nivel: "iniciante",
    intensidade: "LIGHT",
    duracao: "1 respiracao ou transicao",
    respiracao: "Inspirar.",
    palavras_chave: ["bracos elevados", "retorno", "abrir peito", "saudacao ao sol"],
    tags: ["yoga", "extensao", "respiracao", "retorno", "postura"],
    objetivo_fisico: "extensao suave e abertura de peito",
    imageFiles: ["surya_011_hasta_uttanasana_retorno_step_01_start.png", "surya_011_hasta_uttanasana_retorno_step_02_rise_up.png", "surya_011_hasta_uttanasana_retorno_step_03_arms_overhead.png", "surya_011_hasta_uttanasana_retorno_step_04_final.png", "surya_011_hasta_uttanasana_retorno_step_05_common_mistake.png", "surya_011_hasta_uttanasana_retorno_step_06_correction.png"]
  }),
  movement({
    ...suryaCommon,
    id: "ref_003_mov_12",
    nome_pt: "Postura da oracao final",
    nome_original: "Pranamasana / Prayer Pose",
    objetivo_principal: "Finalizar a sequencia com foco e respiracao.",
    objetivos_secundarios: ["desacelerar", "perceber efeitos da pratica", "estabilizar postura", "encerrar com consciencia corporal"],
    como_fazer: "Retorne as maos ao centro do peito, relaxe os ombros e perceba a respiracao.",
    erro_comum: "Finalizar apressado sem reorganizar postura.",
    correcao_postural: "Estabilizar pes, coluna e respiracao antes de encerrar.",
    indicacoes: ["fechamento de sequencia", "pausa de respiracao", "integracao corpo e mente"],
    contraindicacoes: ["tontura intensa em pe", "dificuldade de equilibrio sem apoio"],
    regioes_corporais: ["corpo inteiro", "coluna", "ombros", "peito"],
    grupos_musculares: ["core leve", "musculatura postural"],
    articulacoes: ["tornozelos", "joelhos", "quadril", "ombros"],
    nivel: "iniciante",
    intensidade: "VERY_LIGHT",
    duracao: "1 a 3 respiracoes",
    respiracao: "Expirar e retornar ao normal.",
    palavras_chave: ["finalizar yoga", "oracao final", "respiracao", "saudacao ao sol"],
    tags: ["yoga", "respiracao", "fechamento", "postura", "saudacao ao sol"],
    objetivo_fisico: "retorno postural e fechamento da sequencia",
    imageFiles: ["surya_012_pranamasana_final_step_01_start.png", "surya_012_pranamasana_final_step_02_hands_down.png", "surya_012_pranamasana_final_step_03_final.png", "surya_012_pranamasana_final_step_04_common_mistake.png", "surya_012_pranamasana_final_step_05_correction.png"]
  }),

  movement({
    ...hormonalCommon,
    id: "ref_004_mov_01",
    nome_pt: "Postura da borboleta",
    nome_original: "Baddha Konasana",
    objetivo_principal: "Pode ajudar a mobilizar quadris e regiao pelvica, favorecendo relaxamento e abertura suave.",
    objetivos_secundarios: ["alongar parte interna das coxas", "melhorar mobilidade do quadril", "reduzir tensao pelvica leve", "favorecer respiracao calma", "apoiar rotina de autocuidado"],
    como_fazer: "Sente-se com a coluna alongada, una as solas dos pes e deixe os joelhos abrirem para os lados. Segure os pes com suavidade e respire mantendo o tronco ereto.",
    passo_a_passo: ["Sentar com pernas a frente.", "Dobrar os joelhos.", "Unir as solas dos pes.", "Aproximar os pes do corpo ate onde for confortavel.", "Alongar a coluna e relaxar os ombros."],
    erro_comum: "Arredondar a coluna e forcar os joelhos para baixo.",
    correcao_postural: "Manter a coluna longa e permitir que os joelhos descam naturalmente, usando apoio se necessario.",
    indicacoes: ["rigidez no quadril", "tensao na regiao pelvica", "pratica leve para relaxamento", "mobilidade feminina", "alongamento suave", "rotina de yoga para bem-estar hormonal"],
    contraindicacoes: ["dor aguda no quadril", "dor aguda no joelho", "dor aguda na pelve"],
    cuidados: ["nao pressionar os joelhos", "usar almofadas se houver desconforto"],
    regioes_corporais: ["quadril", "pelve", "virilha", "coluna"],
    grupos_musculares: ["adutores", "gluteos", "assoalho pelvico indireto", "musculatura postural"],
    articulacoes: ["quadril", "joelhos", "tornozelos", "coluna"],
    nivel: "iniciante",
    intensidade: "LIGHT",
    duracao: "5 a 10 respiracoes ou 30 a 60 segundos",
    respiracao: "Lenta e nasal.",
    palavras_chave: ["SOP", "ovario policistico", "equilibrio hormonal", "quadril rigido", "tensao pelvica", "relaxamento feminino", "alongamento de virilha"],
    sinonimos: ["borboleta", "abertura de quadril", "alongamento pelvico"],
    tags: ["yoga", "SOP", "quadril", "pelve", "relaxamento", "iniciante", "estresse", "ciclo menstrual"],
    quando_recomendar: ["tenho SOP", "quero relaxar", "estou com quadril travado", "quero yoga leve"],
    quando_evitar: ["dor pelvica intensa", "joelho dolorido", "lesao recente"],
    objetivo_fisico: "mobilidade de quadril e relaxamento pelvico",
    imageFiles: ["yoga_hormonal_001_borboleta_step_01_start.png", "yoga_hormonal_001_borboleta_step_02_knees_bend.png", "yoga_hormonal_001_borboleta_step_03_feet_together.png", "yoga_hormonal_001_borboleta_step_04_final.png", "yoga_hormonal_001_borboleta_step_05_common_mistake.png", "yoga_hormonal_001_borboleta_step_06_correction.png"]
  }),
  movement({
    ...hormonalCommon,
    id: "ref_004_mov_02",
    nome_pt: "Borboleta reclinada",
    nome_original: "Supta Baddha Konasana",
    tipo: "yoga / relaxamento",
    objetivo_principal: "Pode ajudar no relaxamento da regiao pelvica e abertura suave do quadril em posicao de descanso.",
    objetivos_secundarios: ["reduzir tensao corporal", "favorecer respiracao profunda", "relaxar abdomen", "abrir quadris sem esforco ativo", "apoiar pratica restaurativa"],
    como_fazer: "Deite de barriga para cima, una as solas dos pes e deixe os joelhos abrirem para os lados. Use apoios sob os joelhos se necessario.",
    erro_comum: "Deixar joelhos suspensos com tensao ou arquear a lombar.",
    correcao_postural: "Apoiar joelhos e manter lombar confortavel.",
    indicacoes: ["relaxamento noturno", "estresse", "tensao pelvica leve", "rotina de descanso", "yoga restaurativa"],
    contraindicacoes: ["dor lombar ao deitar", "desconforto intenso no quadril", "lesao no joelho"],
    regioes_corporais: ["pelve", "quadril", "abdomen", "virilha", "lombar"],
    grupos_musculares: ["adutores", "gluteos", "musculatura postural"],
    articulacoes: ["quadril", "joelhos", "coluna lombar"],
    nivel: "iniciante",
    intensidade: "VERY_LIGHT",
    duracao: "1 a 5 minutos",
    durationSeconds: 180,
    respiracao: "Lenta, abdominal.",
    palavras_chave: ["relaxamento", "SOP", "colica leve", "quadril", "pelvico", "sono", "estresse"],
    tags: ["yoga restaurativa", "pelve", "quadril", "relaxamento", "ciclo menstrual", "estresse"],
    objetivo_fisico: "abertura passiva de quadril e relaxamento pelvico",
    imageFiles: ["yoga_hormonal_002_borboleta_reclinada_step_01_start.png", "yoga_hormonal_002_borboleta_reclinada_step_02_feet_together.png", "yoga_hormonal_002_borboleta_reclinada_step_03_knees_open.png", "yoga_hormonal_002_borboleta_reclinada_step_04_final.png", "yoga_hormonal_002_borboleta_reclinada_step_05_common_mistake.png", "yoga_hormonal_002_borboleta_reclinada_step_06_correction.png"]
  }),
  movement({
    ...hormonalCommon,
    id: "ref_004_mov_03",
    nome_pt: "Postura da guirlanda / agachamento yogue",
    nome_original: "Malasana",
    tipo: "yoga / mobilidade",
    objetivo_principal: "Pode ajudar na mobilidade de quadril, tornozelos e pelve.",
    objetivos_secundarios: ["alongar virilha", "fortalecer pernas", "favorecer abertura pelvica", "melhorar postura no agachamento"],
    como_fazer: "Afaste os pes, agache lentamente e una as maos em frente ao peito, usando os cotovelos para abrir os joelhos com suavidade.",
    erro_comum: "Arredondar a coluna e deixar calcanhares levantarem sem controle.",
    correcao_postural: "Manter coluna longa, usar apoio sob calcanhares se necessario.",
    indicacoes: ["quadril rigido", "mobilidade pelvica", "alongamento de virilha", "rotina de yoga"],
    contraindicacoes: ["dor no joelho", "dor no tornozelo", "instabilidade", "tontura"],
    regioes_corporais: ["quadril", "pelve", "joelhos", "tornozelos", "coluna"],
    grupos_musculares: ["adutores", "gluteos", "quadriceps", "panturrilhas"],
    articulacoes: ["quadril", "joelhos", "tornozelos", "coluna"],
    nivel: "intermediario",
    intensidade: "MODERATE",
    duracao: "5 a 8 respiracoes",
    palavras_chave: ["malasana", "agachamento yogue", "quadril", "pelve", "SOP"],
    tags: ["quadril", "pelve", "mobilidade", "yoga", "SOP", "pernas"],
    objetivo_fisico: "mobilidade pelvica e de tornozelos",
    imageFiles: ["yoga_hormonal_003_malasana_step_01_start.png", "yoga_hormonal_003_malasana_step_02_descend.png", "yoga_hormonal_003_malasana_step_03_hands_prayer.png", "yoga_hormonal_003_malasana_step_04_final.png", "yoga_hormonal_003_malasana_step_05_common_mistake.png", "yoga_hormonal_003_malasana_step_06_correction.png"]
  }),
  movement({
    ...hormonalCommon,
    id: "ref_004_mov_04",
    nome_pt: "Postura da crianca",
    nome_original: "Balasana",
    tipo: "yoga / relaxamento",
    objetivo_principal: "Pode ajudar a relaxar costas, quadril e sistema nervoso.",
    como_fazer: "Ajoelhe-se, sente sobre os calcanhares e leve o tronco a frente, apoiando testa e bracos no chao.",
    erro_comum: "Forcar joelhos ou deixar pescoco tensionado.",
    correcao_postural: "Usar almofada sob tronco ou testa para conforto.",
    indicacoes: ["estresse", "pausa de descanso", "tensao nas costas", "relaxamento", "respiracao calma"],
    contraindicacoes: ["dor no joelho", "desconforto intenso no quadril", "tontura ao baixar a cabeca"],
    regioes_corporais: ["costas", "lombar", "quadril", "ombros", "pescoco"],
    grupos_musculares: ["lombar", "gluteos", "dorsais", "ombros"],
    articulacoes: ["quadril", "joelhos", "coluna", "ombros"],
    nivel: "iniciante",
    intensidade: "VERY_LIGHT",
    duracao: "5 a 10 respiracoes",
    palavras_chave: ["balasana", "postura da crianca", "descanso", "estresse", "relaxamento"],
    tags: ["relaxamento", "costas", "estresse", "yoga leve", "descanso"],
    objetivo_fisico: "relaxamento de costas e quadril",
    imageFiles: ["yoga_hormonal_004_balasana_step_01_start.png", "yoga_hormonal_004_balasana_step_02_sit_back.png", "yoga_hormonal_004_balasana_step_03_reach_forward.png", "yoga_hormonal_004_balasana_step_04_final.png", "yoga_hormonal_004_balasana_step_05_common_mistake.png", "yoga_hormonal_004_balasana_step_06_correction.png"]
  }),
  movement({
    ...hormonalCommon,
    id: "ref_004_mov_05",
    nome_pt: "Postura do gato",
    nome_original: "Marjariasana",
    tipo: "yoga / mobilidade",
    objetivo_principal: "Mobilizar a coluna em flexao.",
    como_fazer: "Em quatro apoios, arredonde a coluna para cima ao expirar, levando o abdomen para dentro e soltando a cabeca com controle.",
    erro_comum: "Mover so a lombar e colapsar bracos.",
    correcao_postural: "Empurrar o chao e distribuir a curva por toda a coluna.",
    indicacoes: ["rigidez nas costas", "mobilidade leve", "aquecimento", "tensao lombar"],
    contraindicacoes: ["dor aguda intensa", "lesao recente"],
    regioes_corporais: ["coluna", "lombar", "toracica", "pescoco", "ombros"],
    grupos_musculares: ["extensores da coluna", "abdominais leves", "ombros"],
    articulacoes: ["coluna", "ombros", "quadril", "punhos"],
    nivel: "iniciante",
    intensidade: "VERY_LIGHT",
    duracao: "5 a 8 respiracoes",
    respiracao: "Expirar arredondando a coluna.",
    palavras_chave: ["gato", "marjariasana", "coluna", "mobilidade", "costas"],
    tags: ["coluna", "mobilidade", "gato", "costas", "yoga"],
    objetivo_fisico: "mobilidade em flexao da coluna",
    imageFiles: ["yoga_hormonal_005_marjariasana_step_01_tabletop.png", "yoga_hormonal_005_marjariasana_step_02_spine_rounding.png", "yoga_hormonal_005_marjariasana_step_03_final.png", "yoga_hormonal_005_marjariasana_step_04_common_mistake.png", "yoga_hormonal_005_marjariasana_step_05_correction.png"]
  }),
  movement({
    ...hormonalCommon,
    id: "ref_004_mov_06",
    nome_pt: "Postura da vaca",
    nome_original: "Bitilasana",
    tipo: "yoga / mobilidade",
    objetivo_principal: "Mobilizar a coluna em extensao e abrir o peito.",
    como_fazer: "Em quatro apoios, inspire levando o peito a frente e elevando suavemente o olhar, mantendo apoio firme.",
    erro_comum: "Exagerar na lombar e tensionar pescoco.",
    correcao_postural: "Distribuir extensao por toda a coluna.",
    indicacoes: ["mobilidade da coluna", "abrir peito", "aquecimento", "postura"],
    contraindicacoes: ["dor cervical ao olhar para cima", "compressao lombar dolorosa"],
    regioes_corporais: ["coluna", "peito", "pescoco", "ombros", "quadril"],
    grupos_musculares: ["extensores da coluna", "peitoral", "ombros"],
    articulacoes: ["coluna", "ombros", "quadril", "punhos"],
    nivel: "iniciante",
    intensidade: "VERY_LIGHT",
    duracao: "5 a 8 respiracoes",
    respiracao: "Inspirar abrindo o peito.",
    palavras_chave: ["vaca", "bitilasana", "coluna", "abrir peito", "postura"],
    tags: ["coluna", "mobilidade", "vaca", "peito", "yoga"],
    objetivo_fisico: "mobilidade em extensao da coluna",
    imageFiles: ["yoga_hormonal_006_bitilasana_step_01_tabletop.png", "yoga_hormonal_006_bitilasana_step_02_chest_forward.png", "yoga_hormonal_006_bitilasana_step_03_final.png", "yoga_hormonal_006_bitilasana_step_04_common_mistake.png", "yoga_hormonal_006_bitilasana_step_05_correction.png"]
  }),
  movement({
    ...hormonalCommon,
    id: "ref_004_mov_07",
    nome_pt: "Postura da cobra",
    nome_original: "Bhujangasana",
    objetivo_principal: "Abrir o peito e mobilizar a coluna em extensao.",
    como_fazer: "Deite de barriga para baixo e eleve o peito com controle, mantendo ombros longe das orelhas.",
    erro_comum: "Empurrar demais com bracos e comprimir a lombar.",
    correcao_postural: "Elevar suavemente, peito aberto e ombros baixos.",
    indicacoes: ["postura", "abrir peito", "mobilidade de coluna", "ativacao leve"],
    contraindicacoes: ["dor lombar aguda", "compressao lombar", "gravidez avancada sem orientacao"],
    regioes_corporais: ["coluna", "peito", "abdomen", "ombros"],
    grupos_musculares: ["extensores da coluna", "peitoral", "ombros"],
    articulacoes: ["coluna", "ombros", "cotovelos"],
    nivel: "iniciante a intermediario",
    intensidade: "LIGHT",
    duracao: "5 a 8 respiracoes",
    respiracao: "Inspirar.",
    palavras_chave: ["cobra", "bhujangasana", "peito", "coluna", "postura"],
    tags: ["yoga", "coluna", "peito", "postura", "SOP"],
    objetivo_fisico: "abertura de peito e extensao suave da coluna",
    imageFiles: ["yoga_hormonal_007_bhujangasana_step_01_prone.png", "yoga_hormonal_007_bhujangasana_step_02_hands_under_shoulders.png", "yoga_hormonal_007_bhujangasana_step_03_chest_lift.png", "yoga_hormonal_007_bhujangasana_step_04_final.png", "yoga_hormonal_007_bhujangasana_step_05_common_mistake.png", "yoga_hormonal_007_bhujangasana_step_06_correction.png"]
  }),
  movement({
    ...hormonalCommon,
    id: "ref_004_mov_08",
    nome_pt: "Postura da ponte",
    nome_original: "Setu Bandhasana",
    tipo: "yoga / fortalecimento leve",
    objetivo_principal: "Fortalecer gluteos e costas, abrindo o peito.",
    como_fazer: "Deite de barriga para cima, flexione os joelhos e eleve o quadril com controle.",
    erro_comum: "Jogar peso no pescoco.",
    correcao_postural: "Apoiar ombros e elevar quadril sem comprimir cervical.",
    indicacoes: ["postura", "lombar leve", "gluteos", "abertura do peito"],
    contraindicacoes: ["dor cervical", "dor lombar aguda", "lesao recente"],
    regioes_corporais: ["gluteos", "lombar", "quadril", "peito", "pescoco"],
    grupos_musculares: ["gluteos", "posteriores de coxa", "extensores da coluna", "peitoral"],
    articulacoes: ["quadril", "joelhos", "coluna", "ombros"],
    nivel: "iniciante a intermediario",
    intensidade: "LIGHT",
    duracao: "5 a 8 respiracoes",
    palavras_chave: ["ponte", "setu bandhasana", "gluteos", "lombar", "peito"],
    tags: ["yoga", "gluteos", "ponte", "postura", "peito"],
    objetivo_fisico: "fortalecimento leve de gluteos e abertura de peito",
    imageFiles: ["yoga_hormonal_008_setu_bandhasana_step_01_lie_down.png", "yoga_hormonal_008_setu_bandhasana_step_02_knees_bent.png", "yoga_hormonal_008_setu_bandhasana_step_03_hips_lift.png", "yoga_hormonal_008_setu_bandhasana_step_04_final.png", "yoga_hormonal_008_setu_bandhasana_step_05_common_mistake.png", "yoga_hormonal_008_setu_bandhasana_step_06_correction.png"]
  }),
  ...[
    ["09", "Postura do camelo", "Ustrasana", "abrir peito, alongar frente do corpo e mobilizar coluna em extensao", ["postura", "peito fechado", "energia", "alongamento frontal"], ["dor lombar", "dor cervical", "tontura"], ["yoga_hormonal_009_ustrasana_step_01_kneeling.png", "yoga_hormonal_009_ustrasana_step_02_hands_to_back.png", "yoga_hormonal_009_ustrasana_step_03_chest_open.png", "yoga_hormonal_009_ustrasana_step_04_final.png", "yoga_hormonal_009_ustrasana_step_05_common_mistake.png", "yoga_hormonal_009_ustrasana_step_06_correction.png"]],
    ["10", "Cao olhando para baixo", "Adho Mukha Svanasana", "alongar cadeia posterior e fortalecer ombros e bracos", ["alongamento geral", "mobilidade", "energia"], ["dor nos punhos", "dor no ombro", "tontura", "pressao descontrolada"], ["yoga_hormonal_010_adho_mukha_svanasana_step_01_tabletop.png", "yoga_hormonal_010_adho_mukha_svanasana_step_02_hips_lift.png", "yoga_hormonal_010_adho_mukha_svanasana_step_03_push_back.png", "yoga_hormonal_010_adho_mukha_svanasana_step_04_final.png", "yoga_hormonal_010_adho_mukha_svanasana_step_05_common_mistake.png", "yoga_hormonal_010_adho_mukha_svanasana_step_06_correction.png"]],
    ["11", "Postura do triangulo", "Trikonasana", "alongar lateral do corpo, pernas e melhorar equilibrio", ["postura", "mobilidade lateral", "quadril", "equilibrio"], ["tontura", "dor no joelho", "instabilidade"], ["yoga_hormonal_011_trikonasana_step_01_wide_stance.png", "yoga_hormonal_011_trikonasana_step_02_arms_open.png", "yoga_hormonal_011_trikonasana_step_03_side_reach.png", "yoga_hormonal_011_trikonasana_step_04_final.png", "yoga_hormonal_011_trikonasana_step_05_common_mistake.png", "yoga_hormonal_011_trikonasana_step_06_correction.png"]],
    ["12", "Angulo lateral estendido", "Parsvakonasana", "alongar lateral do tronco, abrir quadril e fortalecer pernas", ["mobilidade lateral", "quadril", "postura"], ["dor no joelho", "tontura", "instabilidade"], ["yoga_hormonal_012_parsvakonasana_step_01_wide_stance.png", "yoga_hormonal_012_parsvakonasana_step_02_front_knee_bend.png", "yoga_hormonal_012_parsvakonasana_step_03_side_angle.png", "yoga_hormonal_012_parsvakonasana_step_04_final.png", "yoga_hormonal_012_parsvakonasana_step_05_common_mistake.png", "yoga_hormonal_012_parsvakonasana_step_06_correction.png"]],
    ["13", "Flexao sentada a frente", "Paschimottanasana", "alongar cadeia posterior e relaxar a coluna", ["flexibilidade", "relaxamento", "rigidez posterior"], ["dor lombar aguda", "ciatica intensa"], ["yoga_hormonal_013_paschimottanasana_step_01_seated.png", "yoga_hormonal_013_paschimottanasana_step_02_arms_forward.png", "yoga_hormonal_013_paschimottanasana_step_03_progression.png", "yoga_hormonal_013_paschimottanasana_step_04_final.png", "yoga_hormonal_013_paschimottanasana_step_05_common_mistake.png", "yoga_hormonal_013_paschimottanasana_step_06_correction.png"]],
    ["14", "Cabeca ao joelho", "Janu Sirsasana", "alongar uma perna por vez e mobilizar quadril e coluna", ["rigidez posterior", "assimetria", "relaxamento"], ["dor no joelho", "dor lombar aguda"], ["yoga_hormonal_014_janu_sirsasana_step_01_seated.png", "yoga_hormonal_014_janu_sirsasana_step_02_one_knee_bent.png", "yoga_hormonal_014_janu_sirsasana_step_03_forward_reach.png", "yoga_hormonal_014_janu_sirsasana_step_04_final.png", "yoga_hormonal_014_janu_sirsasana_step_05_common_mistake.png", "yoga_hormonal_014_janu_sirsasana_step_06_correction.png"]],
    ["15", "Joelhos ao peito", "Pavanamuktasana", "relaxar lombar e abdomen com joelhos ao peito", ["desconforto abdominal leve", "lombar cansada", "relaxamento"], ["dor abdominal forte", "cirurgia recente", "gravidez avancada sem orientacao"], ["yoga_hormonal_015_pavanamuktasana_step_01_lie_down.png", "yoga_hormonal_015_pavanamuktasana_step_02_one_knee_in.png", "yoga_hormonal_015_pavanamuktasana_step_03_both_knees_in.png", "yoga_hormonal_015_pavanamuktasana_step_04_final.png", "yoga_hormonal_015_pavanamuktasana_step_05_common_mistake.png", "yoga_hormonal_015_pavanamuktasana_step_06_correction.png"]],
    ["16", "Pernas na parede", "Viparita Karani", "favorecer relaxamento e retorno venoso leve com pernas elevadas", ["pernas cansadas", "relaxamento", "estresse", "fim do dia"], ["glaucoma", "pressao descontrolada", "desconforto com inversoes"], ["yoga_hormonal_016_viparita_karani_step_01_sit_near_wall.png", "yoga_hormonal_016_viparita_karani_step_02_legs_up.png", "yoga_hormonal_016_viparita_karani_step_03_adjust_hips.png", "yoga_hormonal_016_viparita_karani_step_04_final.png", "yoga_hormonal_016_viparita_karani_step_05_common_mistake.png", "yoga_hormonal_016_viparita_karani_step_06_correction.png"]],
    ["17", "Postura do sapo", "Mandukasana", "abrir quadril e alongar regiao interna das coxas", ["mobilidade pelvica", "quadril rigido"], ["dor no joelho", "dor no quadril", "dor na virilha"], ["yoga_hormonal_017_mandukasana_step_01_tabletop.png", "yoga_hormonal_017_mandukasana_step_02_knees_apart.png", "yoga_hormonal_017_mandukasana_step_03_hips_back.png", "yoga_hormonal_017_mandukasana_step_04_final.png", "yoga_hormonal_017_mandukasana_step_05_common_mistake.png", "yoga_hormonal_017_mandukasana_step_06_correction.png"]],
    ["18", "Postura do peixe", "Matsyasana", "abrir peito e alongar regiao anterior do pescoco e torso", ["peito fechado", "postura", "respiracao"], ["dor cervical", "tontura", "dor lombar"], ["yoga_hormonal_018_matsyasana_step_01_lie_down.png", "yoga_hormonal_018_matsyasana_step_02_elbows_support.png", "yoga_hormonal_018_matsyasana_step_03_chest_lift.png", "yoga_hormonal_018_matsyasana_step_04_final.png", "yoga_hormonal_018_matsyasana_step_05_common_mistake.png", "yoga_hormonal_018_matsyasana_step_06_correction.png"]],
    ["19", "Respiracao alternada pelas narinas", "Nadi Shodhana", "acalmar mente, foco e equilibrio respiratorio", ["estresse", "ansiedade leve", "foco", "pausa mental"], ["falta de ar", "crise respiratoria", "tontura"], ["yoga_hormonal_019_nadi_shodhana_step_01_seated.png", "yoga_hormonal_019_nadi_shodhana_step_02_hand_position.png", "yoga_hormonal_019_nadi_shodhana_step_03_inhale_one_side.png", "yoga_hormonal_019_nadi_shodhana_step_04_switch_side.png", "yoga_hormonal_019_nadi_shodhana_step_05_common_mistake.png", "yoga_hormonal_019_nadi_shodhana_step_06_correction.png"], "BREATHING"],
    ["20", "Respiracao da abelha", "Bhramari Pranayama", "favorecer relaxamento e reducao de estresse por vibracao sonora suave", ["ansiedade leve", "mente acelerada", "relaxamento", "foco"], ["dor ou infeccao no ouvido", "tontura", "desconforto respiratorio"], ["yoga_hormonal_020_bhramari_pranayama_step_01_seated.png", "yoga_hormonal_020_bhramari_pranayama_step_02_hands_to_ears.png", "yoga_hormonal_020_bhramari_pranayama_step_03_humming.png", "yoga_hormonal_020_bhramari_pranayama_step_04_final.png", "yoga_hormonal_020_bhramari_pranayama_step_05_common_mistake.png", "yoga_hormonal_020_bhramari_pranayama_step_06_correction.png"], "BREATHING"]
  ].map(([number, nome, original, funcao, indicated, avoid, files, instructionType]) =>
    movement({
      ...hormonalCommon,
      id: `ref_004_mov_${number}`,
      nome_pt: nome as string,
      nome_original: original as string,
      instructionType: instructionType as InstructionType | undefined,
      objetivo_principal: `Pode ajudar a ${(funcao as string)}.`,
      descricao: `Postura da colecao REF_004 para ${(funcao as string)}, com linguagem segura e sem promessa de tratamento.`,
      como_fazer: `Pratique ${String(nome).toLowerCase()} com respiracao lenta, amplitude confortavel e suporte quando necessario.`,
      erro_comum: "Forcar amplitude ou comprimir coluna, joelhos, ombros ou pescoco.",
      correcao_postural: "Reduzir amplitude, usar apoio e priorizar respiracao calma.",
      indicacoes: indicated as string[],
      contraindicacoes: avoid as string[],
      quando_evitar: avoid as string[],
      regioes_corporais: ["quadril", "pelve", "coluna", "pernas", "peito"],
      grupos_musculares: ["musculatura postural", "adutores", "gluteos", "costas"],
      articulacoes: ["quadril", "coluna", "joelhos", "ombros"],
      nivel: instructionType === "BREATHING" ? "iniciante" : "iniciante a intermediario",
      intensidade: instructionType === "BREATHING" ? "VERY_LIGHT" : "LIGHT",
      duracao: instructionType === "BREATHING" ? "3 a 5 minutos" : "5 a 8 respiracoes",
      durationSeconds: instructionType === "BREATHING" ? 180 : 90,
      respiracao: instructionType === "BREATHING" ? "Respiracao lenta, sem prender o ar." : "Respire de forma lenta e nasal.",
      palavras_chave: [nome as string, original as string, funcao as string, ...(indicated as string[])],
      tags: ["yoga", "SOP", "equilibrio hormonal", "estresse", "bem-estar feminino", ...(indicated as string[])],
      objetivo_fisico: funcao as string,
      imageFiles: files as string[]
    })
  ),

  ...[
    {
      id: "ref_005_mov_01",
      nome_pt: "Agachamento yogue ativo",
      nome_original: "Active Yogi Squat",
      objetivo_principal: "Pode ajudar a mobilizar quadris, tornozelos e regiao pelvica.",
      objetivos_secundarios: ["alongar virilha", "fortalecer pernas", "melhorar mobilidade de tornozelos", "preparar o corpo para aberturas mais profundas"],
      indicacoes: ["quadril rigido", "virilha encurtada", "mobilidade pelvica", "preparacao para abertura lateral", "alongamento ativo"],
      contraindicacoes: ["dor no joelho", "dor no quadril", "dor na virilha", "instabilidade no tornozelo", "lesao recente"],
      regioes_corporais: ["quadril", "virilha", "joelhos", "tornozelos", "coluna"],
      grupos_musculares: ["adutores", "gluteos", "quadriceps", "panturrilhas"],
      articulacoes: ["quadril", "joelhos", "tornozelos", "coluna lombar"],
      nivel: "iniciante a intermediario",
      intensidade: "MODERATE",
      duracao: "15 respiracoes",
      como_fazer: "Afaste os pes, agache lentamente e mantenha o tronco ereto. Apoie as maos no chao ou una as maos a frente do peito, usando os cotovelos para abrir os joelhos com suavidade.",
      erro_comum: "Arredondar a coluna, levantar calcanhares sem controle ou colapsar os joelhos para dentro.",
      correcao_postural: "Manter a coluna longa, joelhos alinhados com os pes e usar apoio se os calcanhares nao alcancarem o chao.",
      keywords: ["quadril travado", "abrir quadril", "virilha", "mobilidade", "agachamento", "espacate", "flexibilidade"],
      tags: ["quadril", "virilha", "mobilidade", "yoga", "adutores", "pernas", "abertura lateral"],
      files: ["mobility_split_001_agachamento_yogue_ativo_step_01_start.png", "mobility_split_001_agachamento_yogue_ativo_step_02_descend.png", "mobility_split_001_agachamento_yogue_ativo_step_03_low_squat.png", "mobility_split_001_agachamento_yogue_ativo_step_04_final.png", "mobility_split_001_agachamento_yogue_ativo_step_05_common_mistake.png", "mobility_split_001_agachamento_yogue_ativo_step_06_correction.png"]
    },
    {
      id: "ref_005_mov_02",
      nome_pt: "Alongamento lateral",
      nome_original: "Side Stretch",
      objetivo_principal: "Alongar lateral do tronco e abrir quadril em base baixa.",
      objetivos_secundarios: ["melhorar mobilidade de coluna", "alongar costelas e obliquos", "trabalhar abertura de quadril", "preparar movimentos laterais mais profundos"],
      indicacoes: ["tensao lateral do tronco", "quadril rigido", "mobilidade toracica", "preparacao para abertura lateral"],
      contraindicacoes: ["dor no joelho", "dor no quadril", "tontura ao inclinar", "dor lateral intensa"],
      regioes_corporais: ["lateral do tronco", "quadril", "virilha", "ombro", "coluna toracica"],
      grupos_musculares: ["obliquos", "dorsais", "adutores", "gluteos"],
      articulacoes: ["coluna toracica", "quadril", "ombro", "joelho"],
      nivel: "iniciante a intermediario",
      intensidade: "LIGHT",
      duracao: "8 respiracoes para cada lado",
      como_fazer: "A partir de uma base lateral baixa, apoie uma mao no chao ou na perna e leve o braco oposto por cima da cabeca, alongando a lateral do corpo.",
      erro_comum: "Colapsar o peito e jogar peso demais no joelho.",
      correcao_postural: "Manter peito aberto, coluna longa e distribuir o peso com controle.",
      keywords: ["alongamento lateral", "costelas", "quadril", "virilha", "mobilidade lateral", "tronco"],
      tags: ["lateral", "quadril", "tronco", "mobilidade", "alongamento", "yoga"],
      files: ["mobility_split_002_alongamento_lateral_step_01_start.png", "mobility_split_002_alongamento_lateral_step_02_hand_support.png", "mobility_split_002_alongamento_lateral_step_03_arm_lift.png", "mobility_split_002_alongamento_lateral_step_04_final.png", "mobility_split_002_alongamento_lateral_step_05_common_mistake.png", "mobility_split_002_alongamento_lateral_step_06_correction.png"]
    },
    {
      id: "ref_005_mov_03",
      nome_pt: "Arco-iris sentado",
      nome_original: "Rainbow",
      objetivo_principal: "Pode ajudar na rotacao suave do tronco e mobilidade da coluna em posicao sentada.",
      objetivos_secundarios: ["alongar coluna", "mobilizar quadril", "trabalhar controle respiratorio", "melhorar consciencia corporal"],
      indicacoes: ["coluna rigida", "quadril travado", "mobilidade de tronco", "alongamento sentado"],
      contraindicacoes: ["dor aguda na coluna", "torcao dolorosa", "lesao recente no quadril"],
      regioes_corporais: ["coluna", "quadril", "ombros", "lombar leve"],
      grupos_musculares: ["rotadores de tronco", "paravertebrais", "gluteos"],
      articulacoes: ["coluna toracica", "coluna lombar", "quadril"],
      nivel: "iniciante",
      intensidade: "LIGHT",
      duracao: "8 respiracoes para cada lado",
      como_fazer: "Sente-se com uma perna estendida e a outra dobrada. Gire o tronco suavemente para um lado, mantendo a coluna alongada e as maos em posicao de apoio ou oracao.",
      erro_comum: "Torcer apenas o pescoco e arredondar a coluna.",
      correcao_postural: "Alongar a coluna antes da rotacao e manter o peito aberto.",
      keywords: ["torcao sentada", "coluna travada", "quadril", "mobilidade", "yoga sentado"],
      tags: ["coluna", "quadril", "rotacao", "mobilidade", "yoga"],
      files: ["mobility_split_003_arco_iris_sentado_step_01_start.png", "mobility_split_003_arco_iris_sentado_step_02_knee_bend.png", "mobility_split_003_arco_iris_sentado_step_03_hands_prayer.png", "mobility_split_003_arco_iris_sentado_step_04_final.png", "mobility_split_003_arco_iris_sentado_step_05_common_mistake.png", "mobility_split_003_arco_iris_sentado_step_06_correction.png"]
    },
    {
      id: "ref_005_mov_04",
      nome_pt: "Arco-iris com flexao a frente",
      nome_original: "Rainbow With Fold",
      objetivo_principal: "Alongar quadril, coluna e posteriores em uma variacao de flexao lateral ou a frente.",
      objetivos_secundarios: ["alongar lombar e laterais do tronco", "abrir quadril", "preparar para flexoes mais profundas", "trabalhar respiracao em alongamento"],
      indicacoes: ["rigidez posterior", "quadril rigido", "alongamento de coluna", "preparacao para abertura lateral"],
      contraindicacoes: ["dor lombar aguda", "ciatica intensa", "dor na virilha"],
      regioes_corporais: ["lombar", "quadril", "posteriores de coxa", "virilha", "lateral do tronco"],
      grupos_musculares: ["isquiotibiais", "adutores", "paravertebrais", "obliquos"],
      articulacoes: ["quadril", "coluna", "joelho"],
      nivel: "intermediario",
      intensidade: "MODERATE",
      duracao: "8 respiracoes para cada lado",
      como_fazer: "A partir da posicao sentada com uma perna dobrada e outra alongada, incline o tronco a frente ou na diagonal, aproximando o peito do chao com controle.",
      erro_comum: "Forcar a cabeca para baixo e perder alinhamento da pelve.",
      correcao_postural: "Iniciar o movimento pelo quadril, manter respiracao e respeitar amplitude.",
      keywords: ["flexao a frente", "quadril", "coluna", "virilha", "posteriores", "mobilidade"],
      tags: ["alongamento", "quadril", "posterior", "coluna", "flexibilidade"],
      files: ["mobility_split_004_arco_iris_com_flexao_step_01_start.png", "mobility_split_004_arco_iris_com_flexao_step_02_arms_forward.png", "mobility_split_004_arco_iris_com_flexao_step_03_fold_progression.png", "mobility_split_004_arco_iris_com_flexao_step_04_final.png", "mobility_split_004_arco_iris_com_flexao_step_05_common_mistake.png", "mobility_split_004_arco_iris_com_flexao_step_06_correction.png"]
    },
    {
      id: "ref_005_mov_05",
      nome_pt: "Cabeca ao joelho",
      nome_original: "Head-to-Knee",
      objetivo_principal: "Alongar posteriores de coxa, lombar e quadril, trabalhando um lado por vez.",
      indicacoes: ["rigidez posterior", "assimetria entre lados", "alongamento sentado", "flexibilidade"],
      contraindicacoes: ["dor lombar aguda", "dor no joelho", "ciatica intensa"],
      regioes_corporais: ["posteriores de coxa", "lombar", "quadril", "panturrilha"],
      grupos_musculares: ["isquiotibiais", "panturrilhas", "lombar", "adutores"],
      articulacoes: ["quadril", "joelho", "coluna"],
      nivel: "iniciante a intermediario",
      intensidade: "LIGHT",
      duracao: "8 respiracoes para cada lado",
      como_fazer: "Sente-se com uma perna estendida e a outra dobrada. Incline o tronco em direcao a perna estendida, alcancando pe, tornozelo ou canela.",
      erro_comum: "Arredondar demais a coluna e puxar o corpo a forca.",
      correcao_postural: "Manter flexao suave no joelho se necessario e aproximar o tronco com controle.",
      keywords: ["posteriores", "alongar pernas", "cabeca ao joelho", "flexibilidade", "lombar"],
      tags: ["posterior", "coluna", "quadril", "alongamento", "yoga"],
      files: ["mobility_split_005_cabeca_ao_joelho_step_01_start.png", "mobility_split_005_cabeca_ao_joelho_step_02_one_knee_bent.png", "mobility_split_005_cabeca_ao_joelho_step_03_reach_forward.png", "mobility_split_005_cabeca_ao_joelho_step_04_final.png", "mobility_split_005_cabeca_ao_joelho_step_05_common_mistake.png", "mobility_split_005_cabeca_ao_joelho_step_06_correction.png"]
    },
    {
      id: "ref_005_mov_06",
      nome_pt: "Postura do sapo",
      nome_original: "Frog",
      objetivo_principal: "Alongar adutores e mobilizar quadril em abertura profunda.",
      objetivos_secundarios: ["trabalhar virilha", "melhorar abertura lateral", "preparar para espacate lateral", "desenvolver tolerancia gradual ao alongamento"],
      indicacoes: ["quadril rigido", "virilha encurtada", "preparacao para abertura lateral"],
      contraindicacoes: ["dor no joelho", "dor na virilha", "lesao no quadril", "desconforto agudo"],
      regioes_corporais: ["adutores", "quadril", "joelhos", "pelve"],
      grupos_musculares: ["adutores", "gluteos", "assoalho pelvico indireto"],
      articulacoes: ["quadril", "joelhos", "coluna lombar"],
      nivel: "intermediario",
      intensidade: "MODERATE",
      duracao: "15 respiracoes",
      como_fazer: "Em quatro apoios, afaste os joelhos lateralmente com cuidado, mantendo pes alinhados e quadril recuando levemente ate sentir alongamento na virilha.",
      erro_comum: "Abrir demais sem controle e deixar lombar colapsar.",
      correcao_postural: "Avancar gradualmente, manter apoio confortavel nos joelhos e controlar a pelve.",
      keywords: ["sapo", "virilha", "adutores", "abrir quadril", "espacate", "mobilidade"],
      tags: ["quadril", "virilha", "adutores", "mobilidade", "abertura lateral"],
      files: ["mobility_split_006_postura_sapo_step_01_tabletop.png", "mobility_split_006_postura_sapo_step_02_knees_apart.png", "mobility_split_006_postura_sapo_step_03_hips_back.png", "mobility_split_006_postura_sapo_step_04_final.png", "mobility_split_006_postura_sapo_step_05_common_mistake.png", "mobility_split_006_postura_sapo_step_06_correction.png"]
    },
    {
      id: "ref_005_mov_07",
      nome_pt: "Piramide ativa",
      nome_original: "Active Pyramid",
      objetivo_principal: "Alongar posteriores de coxa e panturrilha com controle ativo.",
      indicacoes: ["rigidez nas pernas", "flexibilidade", "mobilidade posterior", "preparacao para aberturas"],
      contraindicacoes: ["dor lombar aguda", "ciatica intensa", "dor no joelho"],
      regioes_corporais: ["posteriores de coxa", "panturrilhas", "quadril", "coluna"],
      grupos_musculares: ["isquiotibiais", "panturrilhas", "gluteos", "lombar"],
      articulacoes: ["quadril", "joelho", "tornozelo", "coluna"],
      nivel: "intermediario",
      intensidade: "MODERATE",
      duracao: "8 respiracoes para cada lado",
      como_fazer: "Em base com uma perna a frente e outra atras, incline o tronco em direcao a perna da frente mantendo controle e alongamento ativo.",
      erro_comum: "Arredondar a lombar e travar joelho.",
      correcao_postural: "Dobrar levemente o joelho se necessario e alongar coluna a frente.",
      keywords: ["piramide", "posterior de coxa", "panturrilha", "alongamento ativo", "flexibilidade"],
      tags: ["posterior", "pernas", "coluna", "flexibilidade", "yoga"],
      files: ["mobility_split_007_piramide_ativa_step_01_standing.png", "mobility_split_007_piramide_ativa_step_02_staggered_stance.png", "mobility_split_007_piramide_ativa_step_03_hip_hinge.png", "mobility_split_007_piramide_ativa_step_04_final.png", "mobility_split_007_piramide_ativa_step_05_common_mistake.png", "mobility_split_007_piramide_ativa_step_06_correction.png"]
    },
    {
      id: "ref_005_mov_08",
      nome_pt: "Postura da deusa",
      nome_original: "Goddess Pose",
      objetivo_principal: "Fortalecer pernas e abrir quadril em base ampla.",
      objetivos_secundarios: ["ativar gluteos", "fortalecer coxas", "trabalhar postura", "melhorar estabilidade"],
      indicacoes: ["abertura de quadril", "fortalecimento de pernas", "mobilidade ativa"],
      contraindicacoes: ["dor no joelho", "dor no quadril", "instabilidade", "tontura"],
      regioes_corporais: ["quadril", "coxas", "gluteos", "joelhos", "coluna"],
      grupos_musculares: ["gluteos", "quadriceps", "adutores", "core"],
      articulacoes: ["quadril", "joelhos", "tornozelos", "coluna"],
      nivel: "iniciante a intermediario",
      intensidade: "MODERATE",
      duracao: "15 respiracoes",
      como_fazer: "Afaste os pes, gire levemente os pes para fora e flexione os joelhos, mantendo o tronco ereto e joelhos alinhados com os pes.",
      erro_comum: "Joelhos caindo para dentro e tronco inclinado demais.",
      correcao_postural: "Alinhar joelhos com os pes, manter peito aberto e coluna longa.",
      keywords: ["postura da deusa", "fortalecer pernas", "abrir quadril", "gluteos", "adutores"],
      tags: ["quadril", "pernas", "forca", "yoga", "estabilidade"],
      files: ["mobility_split_008_postura_deusa_step_01_wide_stance.png", "mobility_split_008_postura_deusa_step_02_toes_out.png", "mobility_split_008_postura_deusa_step_03_knees_bend.png", "mobility_split_008_postura_deusa_step_04_final.png", "mobility_split_008_postura_deusa_step_05_common_mistake.png", "mobility_split_008_postura_deusa_step_06_correction.png"]
    },
    {
      id: "ref_005_mov_09",
      nome_pt: "Abertura de pernas na parede",
      nome_original: "Wall Straddle",
      tipo: "alongamento / relaxamento",
      appCategory: "STRETCHING" as const,
      objetivo_principal: "Alongar adutores e trabalhar abertura lateral com suporte da parede.",
      objetivos_secundarios: ["reduzir esforco ativo", "favorecer alongamento passivo", "preparar abertura lateral", "relaxar quadril e pernas"],
      indicacoes: ["virilha encurtada", "abertura lateral", "relaxamento de pernas", "flexibilidade passiva"],
      contraindicacoes: ["dor na virilha", "dor lombar intensa", "desconforto ao elevar pernas", "formigamento"],
      regioes_corporais: ["adutores", "quadril", "pernas", "lombar leve"],
      grupos_musculares: ["adutores", "isquiotibiais", "gluteos"],
      articulacoes: ["quadril", "joelhos", "coluna lombar"],
      equipamentos: ["Parede", "Colchonete"],
      nivel: "iniciante a intermediario",
      intensidade: "LIGHT",
      duracao: "15 respiracoes",
      como_fazer: "Deite de barriga para cima proximo a parede, eleve as pernas e deixe-as abrir lateralmente com controle, usando a parede como apoio.",
      erro_comum: "Deixar a lombar desconfortavel ou forcar a abertura alem do limite.",
      correcao_postural: "Ajustar a distancia da parede e abrir as pernas gradualmente.",
      keywords: ["abertura lateral", "parede", "espacate", "virilha", "adutores", "pernas abertas"],
      tags: ["quadril", "adutores", "parede", "flexibilidade", "relaxamento"],
      files: ["mobility_split_009_abertura_parede_step_01_sit_near_wall.png", "mobility_split_009_abertura_parede_step_02_legs_up.png", "mobility_split_009_abertura_parede_step_03_open_legs.png", "mobility_split_009_abertura_parede_step_04_final.png", "mobility_split_009_abertura_parede_step_05_common_mistake.png", "mobility_split_009_abertura_parede_step_06_correction.png"]
    }
  ].map((item) =>
    movement({
      ...splitCommon,
      appCategory: (item.appCategory as PlannedReferenceCategory | undefined) || "MOBILITY",
      tipo: item.tipo || splitCommon.tipo,
      id: item.id,
      nome_pt: item.nome_pt,
      nome_original: item.nome_original,
      objetivo_principal: item.objetivo_principal,
      objetivos_secundarios: item.objetivos_secundarios,
      indicacoes: item.indicacoes,
      contraindicacoes: item.contraindicacoes,
      quando_evitar: item.contraindicacoes,
      regioes_corporais: item.regioes_corporais,
      grupos_musculares: item.grupos_musculares,
      articulacoes: item.articulacoes,
      equipamentos: item.equipamentos,
      nivel: item.nivel,
      intensidade: item.intensidade,
      duracao: item.duracao,
      como_fazer: item.como_fazer,
      erro_comum: item.erro_comum,
      correcao_postural: item.correcao_postural,
      palavras_chave: item.keywords,
      tags: item.tags,
      objetivo_fisico: item.objetivo_principal,
      imageFiles: item.files
    })
  ),
  ...extraPlannedReferenceMovementInputs.map((input) => movement(input))
];

export const plannedReferenceMovementById = Object.fromEntries(plannedReferenceMovements.map((item) => [item.id, item])) as Record<string, PlannedReferenceMovement>;

export const plannedReferenceExerciseInstructionSeeds: ExerciseInstructionSeed[] = plannedReferenceMovements.map((item) => {
  const reference = plannedReferenceById[item.referenceId];
  const instructionType = defaultInstructionType({ referenceId: item.referenceId, id: item.id, nome_pt: item.nome_pt, nome_original: item.nome_original, objetivo_principal: item.objetivo_principal, como_fazer: item.como_fazer, imageFiles: item.missingImages }, reference);

  return {
    slug: item.id,
    title: item.nome_pt,
    area: "BODY_MOVEMENT",
    category: item.appCategory,
    level: item.levelNumber,
    instructionType,
    shortDescription: item.descricao,
    objective: item.objetivo_principal,
    durationSeconds: item.durationSeconds,
    sets: item.sets,
    reps: item.repeticoes,
    restSeconds: item.restSeconds,
    intensity: item.intensidade,
    equipment: item.equipamentos.join(", "),
    imageKey: item.id,
    animationPromptKey: `${item.id}-planned-video`,
    recommendedWhen: unique([
      ...item.quando_recomendar,
      ...item.indicacoes,
      ...item.palavras_chave,
      ...item.sinonimos,
      ...item.tags,
      ...item.regioes_corporais,
      ...item.grupos_musculares,
      item.objetivo_fisico,
      item.objetivo_emocional,
      `Referencia: ${item.referenceId}`,
      `Colecao: ${item.collectionId}`
    ]),
    avoidWhen: item.quando_evitar,
    contraindications: item.safetyFlags,
    howToSteps: item.passo_a_passo,
    postureTips: [item.correcao_postural, ...item.cuidados.slice(0, 2)],
    breathingTips: [item.respiracao],
    commonMistakes: [item.erro_comum],
    safetyNotes: [
      ...item.cuidados,
      `Status dos assets: ${item.status_asset}. Imagens vinculadas: ${item.imagePaths.length}. Imagens planejadas pendentes: ${item.missingImages.length}. Base: ${reference.assetBasePath}.`,
      `Reaproveitamento visual: ${item.assetReuseStatus}. ${item.visual_reuse}`,
      `Status do video: ${item.status_video}.`,
      item.missingImages.length ? `Imagens planejadas pendentes: ${item.missingImages.join(", ")}.` : "Todas as imagens esperadas cadastradas para o movimento possuem vinculo fisico ou revisao pendente."
    ]
  };
});
