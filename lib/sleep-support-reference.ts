export const sleepSupportReference = {
  id: "ref_002",
  originalTitle: "Sleep Smarter",
  adaptedTitle: "Posicoes para dormir melhor com apoio corporal",
  collectionId: "sono_inteligente_apoio_corporal",
  collectionTitle: "Sono inteligente - apoio para dores e tensao corporal",
  category: "Sono / Relaxamento",
  subcategory: "Posicoes de descanso",
  assetBasePath: "/instructional-images/sleep/support",
  objective:
    "Orientar posicoes de descanso que podem ajudar a aliviar tensao, melhorar conforto e reduzir sobrecarga em regioes especificas do corpo durante sono ou repouso."
} as const;

export type SleepSupportAssetStatus = "GENERATED_PENDING_REVIEW" | "PLANNED";
export type SleepSupportVideoStatus = "PLANNED";
export type SleepSupportImageRole = "COVER" | "PREPARATION" | "SETUP" | "ADJUSTMENT" | "FINAL" | "COMMON_MISTAKE" | "CORRECTION";

export type SleepSupportImage = {
  stepId: string;
  role: SleepSupportImageRole;
  filename: string;
  src: string;
  alt: string;
  status: SleepSupportAssetStatus;
};

export type SleepSupportMovement = {
  id: string;
  referenceId: typeof sleepSupportReference.id;
  collectionId: typeof sleepSupportReference.collectionId;
  collectionTitle: typeof sleepSupportReference.collectionTitle;
  title: string;
  originalTitle: string;
  type: string;
  category: typeof sleepSupportReference.category;
  subcategory: typeof sleepSupportReference.subcategory;
  mainFunction: string;
  primaryFunction: string;
  secondaryFunctions: string[];
  indications: string[];
  indicatedFor: string[];
  notIndicatedFor: string[];
  bodyRegions: string[];
  bodyRegion: string;
  muscleGroups: string[];
  muscleGroup: string;
  jointList: string[];
  joints: string;
  bodyPosition: string;
  equipment: string[];
  level: string;
  intensity: string;
  recommendedDuration: string;
  durationSeconds: number;
  breathing: string;
  idealMoment: string;
  instructions: string;
  howTo: string;
  stepByStep: string[];
  commonMistake: string;
  posturalCorrection: string;
  postureCorrection: string;
  careNotes: string;
  care: string;
  contraindications: string[];
  userKeywords: string[];
  keywords: string[];
  synonyms: string[];
  relatedSymptoms: string[];
  physicalGoal: string;
  physicalObjective: string;
  emotionalGoal: string;
  emotionalObjective: string;
  recommendationTags: string[];
  priority: string;
  recommendationPriority: string;
  recommendWhen: string[];
  whenRecommend: string[];
  avoidWhen: string[];
  whenAvoid: string[];
  safetyFlags: string[];
  pageText: string;
  coverFile: string;
  coverPath: string;
  primaryImage: SleepSupportImage;
  images: SleepSupportImage[];
  missingImages: string[];
  assetStatus: SleepSupportAssetStatus;
  videoStatus: SleepSupportVideoStatus;
};

const safetyNote =
  "Nao substitui orientacao profissional. Pare e procure avaliacao se houver dor forte, dor aguda, formigamento, perda de forca, dor no peito, falta de ar, febre, trauma recente, dor irradiada intensa, inchaco importante ou sintomas neurologicos.";

const severeSafetyFlags = [
  "dor forte",
  "dor aguda",
  "formigamento",
  "perda de forca",
  "dor no peito",
  "falta de ar",
  "febre",
  "trauma recente",
  "pos-operatorio",
  "gravidez de risco",
  "tontura intensa",
  "dor irradiada intensa",
  "inchaco importante",
  "sintomas neurologicos"
];

type ImagePlan = {
  stepId: string;
  role: SleepSupportImageRole;
  filename: string;
  alt: string;
  exists?: boolean;
};

function image(stepId: string, role: SleepSupportImageRole, filename: string, alt: string, exists = true): ImagePlan {
  return { stepId, role, filename, alt, exists };
}

const imagePlansByMovement: Record<string, ImagePlan[]> = {
  ref_002_mov_01: [
    image("cover", "COVER", "sleep_support_001_ombro_lateral_cover.png", "Pessoa deitada de lado com travesseiro abracado para apoiar o ombro."),
    image("step_01_prepare", "PREPARATION", "sleep_support_001_ombro_lateral_step_01_prepare.png", "Preparacao com travesseiros proximos antes de deitar de lado."),
    image("step_02_head_pillow", "SETUP", "sleep_support_001_ombro_lateral_step_02_head_pillow.png", "Ajuste do travesseiro sob a cabeca em posicao lateral."),
    image("step_03_arm_support", "ADJUSTMENT", "sleep_support_001_ombro_lateral_step_03_arm_support.png", "Travesseiro a frente do peito para apoiar o braco superior."),
    image("step_04_final", "FINAL", "sleep_support_001_ombro_lateral_step_04_final.png", "Posicao final deitada de lado abracando o travesseiro."),
    image("step_05_common_mistake", "COMMON_MISTAKE", "sleep_support_001_ombro_lateral_step_05_common_mistake.png", "Erro comum com ombro comprimido ou braco sem apoio."),
    image("step_06_correction", "CORRECTION", "sleep_support_001_ombro_lateral_step_06_correction.png", "Correcao com braco superior apoiado e ombro mais neutro.")
  ],
  ref_002_mov_02: [
    image("step_01_prepare", "PREPARATION", "sleep_support_002_costas_superiores_step_01_prepare.png", "Preparacao do apoio atras da parte superior das costas."),
    image("step_02_recline", "SETUP", "sleep_support_002_costas_superiores_step_02_recline.png", "Pessoa deitando lentamente sobre o apoio toracico."),
    image("step_03_head_adjust", "ADJUSTMENT", "sleep_support_002_costas_superiores_step_03_head_adjust.png", "Ajuste de cabeca e pescoco com apoio confortavel."),
    image("step_04_final", "FINAL", "sleep_support_002_costas_superiores_step_04_final.png", "Posicao final com peito levemente aberto e ombros soltos."),
    image("step_05_common_mistake", "COMMON_MISTAKE", "sleep_support_002_costas_superiores_step_05_common_mistake.png", "Erro comum com apoio baixo demais comprimindo a lombar."),
    image("step_06_correction", "CORRECTION", "sleep_support_002_costas_superiores_step_06_correction.png", "Correcao com apoio na regiao toracica e pescoco confortavel.")
  ],
  ref_002_mov_03: [
    image("step_01_prepare", "PREPARATION", "sleep_support_003_dor_cabeca_tensional_step_01_prepare.png", "Preparacao de travesseiros para cabeca e joelhos."),
    image("step_02_lie_down", "SETUP", "sleep_support_003_dor_cabeca_tensional_step_02_lie_down.png", "Pessoa deitando de barriga para cima com apoio na cabeca."),
    image("step_03_knee_pillow", "ADJUSTMENT", "sleep_support_003_dor_cabeca_tensional_step_03_knee_pillow.png", "Travesseiro posicionado sob os joelhos para relaxar a lombar."),
    image("step_04_final", "FINAL", "sleep_support_003_dor_cabeca_tensional_step_04_final.png", "Posicao final relaxada com cabeca e joelhos apoiados."),
    image("step_05_common_mistake", "COMMON_MISTAKE", "sleep_support_003_dor_cabeca_tensional_step_05_common_mistake.png", "Erro comum com travesseiro alto demais flexionando o pescoco."),
    image("step_06_correction", "CORRECTION", "sleep_support_003_dor_cabeca_tensional_step_06_correction.png", "Correcao com pescoco neutro e ombros relaxados.")
  ],
  ref_002_mov_04: [
    image("step_01_prepare", "PREPARATION", "sleep_support_004_lombar_joelhos_step_01_prepare.png", "Preparacao do travesseiro para apoio sob os joelhos."),
    image("step_02_lie_down", "SETUP", "sleep_support_004_lombar_joelhos_step_02_lie_down.png", "Pessoa deitando de barriga para cima antes de ajustar o apoio."),
    image("step_03_knee_support", "ADJUSTMENT", "sleep_support_004_lombar_joelhos_step_03_knee_support.png", "Apoio sob os joelhos para reduzir tensao lombar."),
    image("step_04_final", "FINAL", "sleep_support_004_lombar_joelhos_step_04_final.png", "Posicao final com joelhos apoiados e lombar confortavel."),
    image("step_05_common_mistake", "COMMON_MISTAKE", "sleep_support_004_lombar_joelhos_step_05_common_mistake.png", "Erro comum com pernas estendidas e lombar tensionada."),
    image("step_06_correction", "CORRECTION", "sleep_support_004_lombar_joelhos_step_06_correction.png", "Correcao com joelhos elevados em apoio confortavel.")
  ],
  ref_002_mov_05: [
    image("cover", "COVER", "sleep_support_005_pescoco_apoio_cover.png", "Pessoa descansando com apoio adequado para o pescoco."),
    image("step_01_prepare", "PREPARATION", "sleep_support_005_pescoco_apoio_step_01_prepare.png", "Preparacao do travesseiro ou suporte de pescoco."),
    image("step_02_head_position", "SETUP", "sleep_support_005_pescoco_apoio_step_02_head_position.png", "Cabeca posicionada sobre o apoio em descanso."),
    image("step_03_support_adjust", "ADJUSTMENT", "sleep_support_005_pescoco_apoio_step_03_support_adjust.png", "Ajuste da altura do apoio para preencher o espaco do pescoco."),
    image("step_04_final", "FINAL", "sleep_support_005_pescoco_apoio_step_04_final.png", "Posicao final com cabeca, pescoco e coluna alinhados."),
    image("step_05_common_mistake", "COMMON_MISTAKE", "sleep_support_005_pescoco_apoio_step_05_common_mistake.png", "Erro comum com travesseiro alto ou baixo demais."),
    image("step_06_correction", "CORRECTION", "sleep_support_005_pescoco_apoio_step_06_correction.png", "Correcao com alinhamento entre cabeca, pescoco e coluna.")
  ],
  ref_002_mov_06: [
    image("cover", "COVER", "sleep_support_006_sinusite_elevada_cover.png", "Pessoa em repouso com tronco levemente elevado."),
    image("step_01_prepare", "PREPARATION", "sleep_support_006_sinusite_elevada_step_01_prepare.png", "Preparacao de travesseiros em inclinacao suave.", false),
    image("step_02_recline", "SETUP", "sleep_support_006_sinusite_elevada_step_02_recline.png", "Pessoa deitando com tronco parcialmente elevado."),
    image("step_03_adjust", "ADJUSTMENT", "sleep_support_006_sinusite_elevada_step_03_adjust.png", "Ajuste de cabeca e ombros com apoio distribuido."),
    image("step_04_final", "FINAL", "sleep_support_006_sinusite_elevada_step_04_final.png", "Posicao final elevada com pescoco confortavel."),
    image("step_05_common_mistake", "COMMON_MISTAKE", "sleep_support_006_sinusite_elevada_step_05_common_mistake.png", "Erro comum com apenas a cabeca elevada e pescoco dobrado.", false),
    image("step_06_correction", "CORRECTION", "sleep_support_006_sinusite_elevada_step_06_correction.png", "Correcao com elevacao distribuida pelo tronco superior.")
  ],
  ref_002_mov_07: [
    image("cover", "COVER", "sleep_support_007_ciatica_quadril_cover.png", "Pessoa deitada de lado com travesseiro entre os joelhos."),
    image("step_01_side_lie", "PREPARATION", "sleep_support_007_ciatica_quadril_step_01_side_lie.png", "Inicio deitado de lado para organizar a postura."),
    image("step_02_knee_bend", "SETUP", "sleep_support_007_ciatica_quadril_step_02_knee_bend.png", "Joelhos levemente dobrados em posicao lateral."),
    image("step_03_pillow_between_knees", "ADJUSTMENT", "sleep_support_007_ciatica_quadril_step_03_pillow_between_knees.png", "Travesseiro colocado entre os joelhos."),
    image("step_04_final", "FINAL", "sleep_support_007_ciatica_quadril_step_04_final.png", "Posicao final com quadris e joelhos alinhados."),
    image("step_05_common_mistake", "COMMON_MISTAKE", "sleep_support_007_ciatica_quadril_step_05_common_mistake.png", "Erro comum com joelho superior caido a frente."),
    image("step_06_correction", "CORRECTION", "sleep_support_007_ciatica_quadril_step_06_correction.png", "Correcao com joelhos alinhados e travesseiro entre eles.")
  ],
  ref_002_mov_08: [
    image("cover", "COVER", "sleep_support_008_joelhos_apoio_cover.png", "Pessoa de barriga para cima com travesseiro sob os joelhos."),
    image("step_01_prepare", "PREPARATION", "sleep_support_008_joelhos_apoio_step_01_prepare.png", "Preparacao do travesseiro para apoio dos joelhos."),
    image("step_02_lie_down", "SETUP", "sleep_support_008_joelhos_apoio_step_02_lie_down.png", "Pessoa deitando de barriga para cima."),
    image("step_03_knee_support", "ADJUSTMENT", "sleep_support_008_joelhos_apoio_step_03_knee_support.png", "Travesseiro posicionado sob os joelhos."),
    image("step_04_final", "FINAL", "sleep_support_008_joelhos_apoio_step_04_final.png", "Posicao final com joelhos apoiados e pernas relaxadas."),
    image("step_05_common_mistake", "COMMON_MISTAKE", "sleep_support_008_joelhos_apoio_step_05_common_mistake.png", "Erro comum com apoio alto demais ou pernas sem suporte."),
    image("step_06_correction", "CORRECTION", "sleep_support_008_joelhos_apoio_step_06_correction.png", "Correcao com apoio suave e confortavel sob os joelhos.")
  ]
};

function splitList(value: string) {
  return value.split(",").map((item) => item.trim()).filter(Boolean);
}

function unique(items: string[]) {
  return Array.from(new Set(items.filter(Boolean)));
}

type SleepSupportMovementInput = Omit<
  SleepSupportMovement,
  | "referenceId"
  | "collectionId"
  | "collectionTitle"
  | "category"
  | "subcategory"
  | "mainFunction"
  | "indications"
  | "bodyRegions"
  | "muscleGroups"
  | "jointList"
  | "instructions"
  | "posturalCorrection"
  | "careNotes"
  | "userKeywords"
  | "physicalGoal"
  | "emotionalGoal"
  | "priority"
  | "recommendWhen"
  | "avoidWhen"
  | "safetyFlags"
  | "coverPath"
  | "primaryImage"
  | "images"
  | "missingImages"
  | "videoStatus"
>;

function movement(input: SleepSupportMovementInput): SleepSupportMovement {
  const images = (imagePlansByMovement[input.id] || []).map((asset) => ({
    stepId: asset.stepId,
    role: asset.role,
    filename: asset.filename,
    src: `${sleepSupportReference.assetBasePath}/${asset.filename}`,
    alt: asset.alt,
    status: asset.exists === false ? "PLANNED" as const : "GENERATED_PENDING_REVIEW" as const
  }));
  const generatedImages = images.filter((asset) => asset.status === "GENERATED_PENDING_REVIEW");
  const primaryImage =
    generatedImages.find((asset) => asset.role === "COVER") ||
    generatedImages.find((asset) => asset.stepId === "step_04_final") ||
    generatedImages[0] ||
    images[0] ||
    {
      stepId: "planned",
      role: "FINAL" as const,
      filename: input.coverFile,
      src: `${sleepSupportReference.assetBasePath}/${input.coverFile}`,
      alt: input.title,
      status: input.assetStatus
    };
  const missingImages = images.filter((asset) => asset.status === "PLANNED").map((asset) => asset.filename);
  const assetStatus = missingImages.length ? "PLANNED" : primaryImage.status;

  return {
    ...input,
    referenceId: sleepSupportReference.id,
    collectionId: sleepSupportReference.collectionId,
    collectionTitle: sleepSupportReference.collectionTitle,
    category: sleepSupportReference.category,
    subcategory: sleepSupportReference.subcategory,
    mainFunction: input.primaryFunction,
    indications: input.indicatedFor,
    bodyRegions: splitList(input.bodyRegion),
    muscleGroups: splitList(input.muscleGroup),
    jointList: splitList(input.joints),
    instructions: input.howTo,
    posturalCorrection: input.postureCorrection,
    careNotes: input.care,
    userKeywords: input.keywords,
    physicalGoal: input.physicalObjective,
    emotionalGoal: input.emotionalObjective,
    priority: input.recommendationPriority,
    recommendWhen: input.whenRecommend,
    avoidWhen: input.whenAvoid,
    safetyFlags: unique([...severeSafetyFlags, ...input.whenAvoid, ...input.contraindications]),
    coverFile: primaryImage.filename,
    coverPath: primaryImage.src,
    primaryImage,
    images,
    missingImages,
    assetStatus,
    videoStatus: "PLANNED"
  };
}

export const sleepSupportMovements: SleepSupportMovement[] = [
  movement({
    id: "ref_002_mov_01",
    title: "Posicao lateral para ombro",
    originalTitle: "Shoulder Pain",
    type: "posicao para dormir",
    primaryFunction: "Pode ajudar a reduzir a sobrecarga no ombro sensivel durante o sono lateral.",
    secondaryFunctions: [
      "melhorar conforto ao dormir de lado",
      "reduzir tensao no ombro superior",
      "favorecer alinhamento do tronco",
      "evitar compressao direta no ombro dolorido"
    ],
    indicatedFor: [
      "desconforto leve no ombro",
      "tensao nos ombros",
      "dificuldade para dormir de lado",
      "necessidade de apoio para braco e tronco",
      "relaxamento antes de dormir"
    ],
    notIndicatedFor: ["dor aguda intensa", "lesao recente no ombro", "formigamento no braco", "perda de forca", "dor irradiando para braco ou peito"],
    bodyRegion: "ombros, pescoco, coluna toracica, braco superior",
    muscleGroup: "deltoides, trapezio, peitoral, musculatura escapular",
    joints: "ombro, coluna cervical, coluna toracica",
    bodyPosition: "deitado de lado, sobre o lado sem dor",
    equipment: ["travesseiro de cabeca", "travesseiro para abracar"],
    level: "iniciante",
    intensity: "VERY_LIGHT",
    recommendedDuration: "5 a 20 minutos ou durante o sono, se confortavel",
    durationSeconds: 600,
    breathing: "Lenta e nasal, sem esforco.",
    idealMoment: "antes de dormir, descanso noturno, relaxamento",
    howTo:
      "Deite-se de lado sobre o lado que nao esta dolorido. Mantenha um travesseiro confortavel sob a cabeca e abrace outro travesseiro a frente do peito, apoiando o braco superior para evitar que o ombro fique caido ou comprimido.",
    stepByStep: [
      "Deite de lado sobre o lado sem dor.",
      "Ajuste o travesseiro sob a cabeca.",
      "Coloque um travesseiro a frente do peito.",
      "Abrace o travesseiro, mantendo o ombro superior apoiado.",
      "Relaxe o pescoco e respire devagar."
    ],
    commonMistake: "Dormir sobre o ombro dolorido ou deixar o braco superior cair a frente do corpo sem apoio.",
    postureCorrection: "Use um travesseiro abracado para sustentar o braco e manter o ombro mais neutro.",
    care: "Nao force a posicao se aumentar a dor.",
    contraindications: ["dor intensa", "trauma recente", "dormencia", "formigamento", "perda de forca"],
    keywords: ["dor no ombro", "ombro dolorido", "ombro pesado", "dormir de lado", "ombros tensos", "tensao no ombro"],
    synonyms: ["desconforto no ombro", "ombro travado", "pressao no ombro"],
    relatedSymptoms: ["dor leve no ombro", "tensao escapular", "desconforto para dormir"],
    physicalObjective: "conforto articular e relaxamento muscular",
    emotionalObjective: "dormir com mais seguranca e conforto",
    recommendationTags: ["sono", "ombro", "relaxamento", "apoio com travesseiro", "dor leve", "posicao lateral"],
    recommendationPriority: "alta quando o usuario mencionar ombro e sono",
    whenRecommend: ["estou com dor no ombro", "nao consigo dormir de lado", "meus ombros estao tensos"],
    whenAvoid: ["dor forte", "lesao recente", "dormencia", "formigamento", "perda de forca"],
    pageText:
      "A posicao lateral com travesseiro abracado pode ajudar a reduzir a sobrecarga no ombro durante o descanso. Deite sobre o lado sem dor e apoie o braco superior em um travesseiro a frente do corpo para manter o ombro mais confortavel.",
    coverFile: "sleep_support_001_ombro_lateral_cover.png",
    assetStatus: "GENERATED_PENDING_REVIEW"
  }),
  movement({
    id: "ref_002_mov_02",
    title: "Posicao elevada para parte superior das costas",
    originalTitle: "Upper Back",
    type: "posicao para dormir",
    primaryFunction: "Pode ajudar a reduzir tensao na parte superior das costas usando apoio sob a regiao toracica.",
    secondaryFunctions: ["favorecer abertura suave do peito", "apoiar a coluna toracica", "melhorar conforto ao deitar de barriga para cima", "reduzir tensao entre as escapulas"],
    indicatedFor: ["tensao na parte superior das costas", "desconforto entre as escapulas", "postura fechada", "sensacao de costas cansadas", "relaxamento antes de dormir"],
    notIndicatedFor: ["dor aguda na coluna", "tontura ao deitar elevado", "dificuldade respiratoria", "dor no peito", "lesao recente"],
    bodyRegion: "parte superior das costas, coluna toracica, escapulas, peito",
    muscleGroup: "trapezio, romboides, peitoral, extensores toracicos",
    joints: "coluna toracica, ombros",
    bodyPosition: "deitado de barriga para cima",
    equipment: ["travesseiro pequeno ou rolo sob a parte superior das costas", "travesseiro para cabeca"],
    level: "iniciante",
    intensity: "LIGHT",
    recommendedDuration: "3 a 10 minutos",
    durationSeconds: 420,
    breathing: "Lenta, ampliando suavemente o peito.",
    idealMoment: "relaxamento, fim do dia, antes de dormir",
    howTo: "Deite de barriga para cima com um travesseiro pequeno ou apoio sob a parte superior das costas. Mantenha a cabeca apoiada e permita que o peito fique levemente aberto sem forcar a lombar.",
    stepByStep: ["Prepare o travesseiro ou apoio atras do tronco.", "Deite lentamente sobre o apoio.", "Ajuste o travesseiro sob a cabeca.", "Relaxe ombros e bracos.", "Respire suavemente."],
    commonMistake: "Colocar o apoio muito baixo, comprimindo a lombar.",
    postureCorrection: "Mantenha o apoio na regiao toracica, com cabeca e pescoco confortaveis.",
    care: "Nao use o apoio se ele aumentar dor, tontura ou desconforto respiratorio.",
    contraindications: ["dor aguda na coluna", "tontura", "dificuldade respiratoria", "dor no peito", "lesao recente"],
    keywords: ["parte superior das costas", "costas altas", "dor entre escapulas", "postura", "peito fechado", "ombros tensos"],
    synonyms: ["tensao toracica", "costas cansadas", "desconforto escapular"],
    relatedSymptoms: ["tensao entre escapulas", "postura fechada", "ombros tensos"],
    physicalObjective: "conforto toracico e abertura suave do peito",
    emotionalObjective: "desacelerar com apoio e seguranca",
    recommendationTags: ["sono", "costas", "toracica", "postura", "relaxamento", "travesseiro"],
    recommendationPriority: "alta quando o usuario mencionar costas superiores e descanso",
    whenRecommend: ["minhas costas estao tensas", "dor entre as escapulas", "quero relaxar antes de dormir"],
    whenAvoid: ["dor aguda", "dor no peito", "falta de ar", "tontura", "trauma recente"],
    pageText: "Essa posicao usa um apoio sob a parte superior das costas para criar uma abertura suave no peito e favorecer relaxamento da regiao toracica.",
    coverFile: "sleep_support_002_costas_superiores_cover.png",
    assetStatus: "PLANNED"
  }),
  movement({
    id: "ref_002_mov_03",
    title: "Posicao de descanso para dor de cabeca tensional",
    originalTitle: "Headaches",
    type: "posicao de relaxamento",
    primaryFunction: "Pode ajudar no relaxamento de pescoco e ombros em momentos de dor de cabeca associada a tensao.",
    secondaryFunctions: ["reduzir tensao cervical", "favorecer descanso em posicao neutra", "aliviar esforco do pescoco", "promover relaxamento"],
    indicatedFor: ["dor de cabeca tensional leve", "tensao na nuca", "pescoco cansado", "necessidade de descanso", "relaxamento com apoio sob joelhos"],
    notIndicatedFor: ["dor de cabeca subita e intensa", "visao turva", "tontura forte", "febre", "confusao mental", "dor apos queda ou trauma"],
    bodyRegion: "cabeca, cervical, ombros, lombar leve",
    muscleGroup: "musculatura cervical, trapezio, cadeia posterior leve",
    joints: "coluna cervical, ombros, quadris e joelhos apoiados",
    bodyPosition: "deitado de barriga para cima",
    equipment: ["travesseiro de cabeca", "travesseiro sob os joelhos"],
    level: "iniciante",
    intensity: "VERY_LIGHT",
    recommendedDuration: "5 a 15 minutos",
    durationSeconds: 600,
    breathing: "Lenta, relaxando mandibula, ombros e testa.",
    idealMoment: "descanso, fim do dia, antes de dormir",
    howTo: "Deite de barriga para cima com a cabeca apoiada em um travesseiro confortavel e coloque outro travesseiro sob os joelhos para relaxar a lombar. Mantenha os ombros soltos.",
    stepByStep: ["Prepare os travesseiros.", "Deite de barriga para cima.", "Ajuste o travesseiro sob os joelhos.", "Solte os ombros.", "Respire com mandibula e testa relaxadas."],
    commonMistake: "Usar travesseiro alto demais, deixando o pescoco flexionado.",
    postureCorrection: "Ajuste a altura do travesseiro para manter o pescoco neutro.",
    care: "Se a dor de cabeca for subita, muito forte ou vier com sintomas neurologicos, procure atendimento.",
    contraindications: ["dor de cabeca subita e intensa", "visao turva", "tontura forte", "febre", "confusao mental", "trauma recente"],
    keywords: ["dor de cabeca", "cefaleia tensional", "nuca", "pescoco tenso", "relaxar", "descansar", "cabeca pesada"],
    synonyms: ["tensao na cabeca", "cabeca pesada", "desconforto na nuca"],
    relatedSymptoms: ["tensao na nuca", "dor de cabeca leve", "pescoco cansado"],
    physicalObjective: "relaxamento cervical e apoio lombar leve",
    emotionalObjective: "descansar com menos esforco e menos tensao",
    recommendationTags: ["sono", "cabeca", "cervical", "relaxamento", "dor leve", "travesseiro"],
    recommendationPriority: "alta quando o usuario mencionar dor de cabeca tensional e descanso",
    whenRecommend: ["estou com dor de cabeca", "minha nuca esta tensa", "quero descansar com apoio"],
    whenAvoid: ["dor subita e intensa", "febre", "confusao", "visao turva", "trauma recente"],
    pageText: "Essa posicao favorece o descanso com apoio para cabeca e joelhos, ajudando a relaxar pescoco, ombros e lombar em momentos de tensao leve.",
    coverFile: "sleep_support_003_dor_cabeca_tensional_cover.png",
    assetStatus: "PLANNED"
  }),
  movement({
    id: "ref_002_mov_04",
    title: "Posicao com apoio para lombar",
    originalTitle: "Lower Back",
    type: "posicao para dormir",
    primaryFunction: "Pode ajudar a reduzir tensao lombar ao apoiar os joelhos em posicao deitada.",
    secondaryFunctions: ["diminuir sobrecarga na lombar", "relaxar quadril", "favorecer posicao neutra da pelve", "melhorar conforto ao deitar de barriga para cima"],
    indicatedFor: ["lombar cansada", "costas travadas", "tensao apos ficar sentado", "relaxamento antes de dormir", "rigidez leve"],
    notIndicatedFor: ["dor lombar aguda intensa", "dor irradiando para perna", "formigamento", "perda de forca", "lesao recente"],
    bodyRegion: "lombar, quadril, pelve, joelhos",
    muscleGroup: "lombar, gluteos, flexores de quadril, cadeia posterior",
    joints: "coluna lombar, quadris, joelhos",
    bodyPosition: "deitado de barriga para cima",
    equipment: ["travesseiro sob os joelhos", "travesseiro de cabeca"],
    level: "iniciante",
    intensity: "VERY_LIGHT",
    recommendedDuration: "5 a 20 minutos",
    durationSeconds: 600,
    breathing: "Abdominal lenta.",
    idealMoment: "antes de dormir, descanso, fim do dia",
    howTo: "Deite de barriga para cima e coloque um travesseiro sob os joelhos, deixando a lombar mais relaxada e a pelve em posicao confortavel.",
    stepByStep: ["Prepare um travesseiro sob os joelhos.", "Deite de barriga para cima.", "Ajuste o apoio sob os joelhos.", "Deixe a lombar confortavel.", "Respire de forma lenta."],
    commonMistake: "Deixar as pernas completamente estendidas quando isso aumenta a tensao lombar.",
    postureCorrection: "Eleve levemente os joelhos com apoio confortavel.",
    care: "Nao force a posicao se a dor irradiar para a perna ou aumentar.",
    contraindications: ["dor lombar aguda intensa", "dor irradiando para perna", "formigamento", "perda de forca", "lesao recente"],
    keywords: ["lombar", "dor nas costas", "costas travadas", "tensao lombar", "dormir melhor", "relaxar antes de dormir"],
    synonyms: ["desconforto lombar", "lombar rigida", "costas cansadas"],
    relatedSymptoms: ["lombar cansada", "rigidez leve", "tensao apos ficar sentado"],
    physicalObjective: "conforto lombar e relaxamento da pelve",
    emotionalObjective: "descansar com mais suporte corporal",
    recommendationTags: ["sono", "lombar", "relaxamento", "travesseiro", "descanso", "iniciante"],
    recommendationPriority: "alta quando o usuario mencionar lombar e sono",
    whenRecommend: ["estou com dor na lombar", "costas travadas para dormir", "tensao lombar no fim do dia"],
    whenAvoid: ["dor forte", "dor irradiada intensa", "formigamento", "perda de forca", "trauma recente"],
    pageText: "Essa posicao pode ajudar a reduzir tensao lombar com um apoio confortavel sob os joelhos, sem forcar alongamento ou amplitude.",
    coverFile: "sleep_support_004_lombar_joelhos_cover.png",
    assetStatus: "PLANNED"
  }),
  movement({
    id: "ref_002_mov_05",
    title: "Posicao de apoio para pescoco",
    originalTitle: "Neck Pain",
    type: "posicao para dormir",
    primaryFunction: "Pode ajudar a manter o pescoco mais neutro durante o descanso.",
    secondaryFunctions: ["reduzir tensao cervical", "apoiar nuca", "evitar inclinacao excessiva da cabeca", "melhorar conforto ao dormir de lado ou de barriga para cima"],
    indicatedFor: ["dor leve no pescoco", "tensao cervical", "nuca cansada", "dificuldade de achar posicao para dormir", "relaxamento noturno"],
    notIndicatedFor: ["torcicolo severo", "dormencia nos bracos", "dor irradiada", "lesao cervical recente", "tontura intensa"],
    bodyRegion: "pescoco, cervical, nuca, ombros",
    muscleGroup: "cervicais, trapezio superior, suboccipitais",
    joints: "coluna cervical, ombros",
    bodyPosition: "de lado ou de barriga para cima",
    equipment: ["travesseiro ou suporte de pescoco"],
    level: "iniciante",
    intensity: "VERY_LIGHT",
    recommendedDuration: "durante o descanso, se confortavel",
    durationSeconds: 600,
    breathing: "Natural e sem esforco.",
    idealMoment: "descanso noturno, antes de dormir, relaxamento",
    howTo: "Use um apoio que preencha o espaco natural entre cabeca, pescoco e colchao, evitando que a cabeca fique caida ou elevada demais.",
    stepByStep: ["Escolha um travesseiro ou suporte confortavel.", "Deite e posicione a cabeca.", "Ajuste a altura do apoio.", "Mantenha pescoco e coluna alinhados.", "Respire sem forcar."],
    commonMistake: "Usar travesseiro muito alto ou muito baixo.",
    postureCorrection: "Ajuste a altura para manter o pescoco alinhado com a coluna.",
    care: "Evite manter a posicao se houver tontura, dormencia ou dor irradiada.",
    contraindications: ["torcicolo severo", "dormencia nos bracos", "dor irradiada", "lesao cervical recente", "tontura intensa"],
    keywords: ["pescoco", "cervical", "nuca", "dor no pescoco", "torcicolo leve", "tensao cervical"],
    synonyms: ["nuca tensa", "pescoco travado", "desconforto cervical"],
    relatedSymptoms: ["tensao cervical", "nuca cansada", "dificuldade para achar posicao"],
    physicalObjective: "alinhamento cervical confortavel",
    emotionalObjective: "descansar com menos vigilancia corporal",
    recommendationTags: ["sono", "pescoco", "cervical", "travesseiro", "relaxamento"],
    recommendationPriority: "alta quando o usuario mencionar pescoco ou cervical antes de dormir",
    whenRecommend: ["meu pescoco esta travado", "dor no pescoco para dormir", "nuca cansada"],
    whenAvoid: ["dormencia", "dor irradiada", "tontura intensa", "lesao recente", "perda de forca"],
    pageText: "Essa posicao usa apoio para preencher o espaco natural do pescoco e pode favorecer mais conforto durante o descanso.",
    coverFile: "sleep_support_005_pescoco_apoio_cover.png",
    assetStatus: "GENERATED_PENDING_REVIEW"
  }),
  movement({
    id: "ref_002_mov_06",
    title: "Posicao elevada para sinusite ou congestao",
    originalTitle: "Sinus",
    type: "posicao de descanso",
    primaryFunction: "Pode ajudar no conforto respiratorio ao descansar com o tronco levemente elevado.",
    secondaryFunctions: ["favorecer respiracao mais confortavel", "reduzir sensacao de cabeca pesada", "apoiar descanso durante congestao", "evitar posicao totalmente plana quando desconfortavel"],
    indicatedFor: ["congestao nasal leve", "sinusite com desconforto leve", "sensacao de cabeca pesada", "dificuldade de deitar totalmente plano", "descanso elevado"],
    notIndicatedFor: ["falta de ar intensa", "febre alta", "dor facial forte", "tontura intensa", "piora respiratoria"],
    bodyRegion: "cabeca, vias respiratorias superiores, pescoco, tronco",
    muscleGroup: "regiao cervical e tronco superior apoiado",
    joints: "coluna cervical e toracica em apoio elevado",
    bodyPosition: "deitado de barriga para cima com tronco elevado",
    equipment: ["travesseiros", "apoio inclinado"],
    level: "iniciante",
    intensity: "VERY_LIGHT",
    recommendedDuration: "descanso conforme conforto",
    durationSeconds: 600,
    breathing: "Natural, sem tentar forcar entrada de ar.",
    idealMoment: "descanso, sono, momentos de congestao leve",
    howTo: "Use travesseiros para elevar levemente a cabeca e parte superior do tronco. Mantenha pescoco confortavel e ombros relaxados.",
    stepByStep: ["Prepare travesseiros em inclinacao.", "Deite com o tronco parcialmente elevado.", "Ajuste cabeca e ombros.", "Mantenha o pescoco confortavel.", "Respire de forma natural."],
    commonMistake: "Elevar apenas a cabeca, dobrando o pescoco.",
    postureCorrection: "Eleve tambem a parte superior do tronco para manter alinhamento mais confortavel.",
    care: "Se houver falta de ar, febre alta ou piora respiratoria, procure atendimento.",
    contraindications: ["falta de ar intensa", "febre alta", "dor facial forte", "tontura intensa", "piora respiratoria"],
    keywords: ["sinusite", "congestao", "nariz entupido", "respirar melhor", "cabeca pesada", "dormir elevado"],
    synonyms: ["congestao nasal", "pressao facial", "descanso elevado"],
    relatedSymptoms: ["nariz entupido", "cabeca pesada", "desconforto leve ao deitar plano"],
    physicalObjective: "conforto respiratorio e alinhamento elevado",
    emotionalObjective: "descansar com menos desconforto durante congestao leve",
    recommendationTags: ["sono", "respiracao", "sinusite", "congestao", "posicao elevada"],
    recommendationPriority: "alta quando o usuario mencionar sinusite, congestao ou nariz entupido",
    whenRecommend: ["estou com sinusite", "nariz entupido para dormir", "quero deitar mais elevado"],
    whenAvoid: ["falta de ar", "febre", "piora respiratoria", "dor facial forte", "tontura intensa"],
    pageText: "Essa posicao elevada pode favorecer conforto ao descansar com congestao leve, mantendo tronco e cabeca apoiados sem dobrar demais o pescoco.",
    coverFile: "sleep_support_006_sinusite_elevada_cover.png",
    assetStatus: "GENERATED_PENDING_REVIEW"
  }),
  movement({
    id: "ref_002_mov_07",
    title: "Posicao lateral para ciatica ou quadril",
    originalTitle: "Sciatica/Hip",
    type: "posicao para dormir",
    primaryFunction: "Pode ajudar a reduzir tensao no quadril e melhorar alinhamento das pernas durante o descanso lateral.",
    secondaryFunctions: ["apoiar joelhos", "reduzir torcao do quadril", "favorecer alinhamento da pelve", "aumentar conforto ao dormir de lado"],
    indicatedFor: ["desconforto leve no quadril", "tensao glutea", "ciatica leve sem sinais de alerta", "desconforto ao dormir de lado", "necessidade de apoio entre joelhos"],
    notIndicatedFor: ["dor ciatica intensa", "perda de forca", "formigamento persistente", "dor irradiada forte", "lesao recente de quadril ou coluna"],
    bodyRegion: "quadril, gluteos, lombar, joelhos",
    muscleGroup: "gluteos, piriforme, lombar, cadeia lateral do quadril",
    joints: "quadris, joelhos, coluna lombar",
    bodyPosition: "deitado de lado",
    equipment: ["travesseiro entre os joelhos", "travesseiro de cabeca"],
    level: "iniciante",
    intensity: "VERY_LIGHT",
    recommendedDuration: "durante o descanso, se confortavel",
    durationSeconds: 600,
    breathing: "Natural e lenta, sem prender o ar.",
    idealMoment: "descanso lateral, sono, relaxamento",
    howTo: "Deite de lado e coloque um travesseiro entre os joelhos para manter quadris e pernas mais alinhados. Mantenha a coluna confortavel.",
    stepByStep: ["Deite de lado.", "Dobre levemente os joelhos.", "Coloque um travesseiro entre os joelhos.", "Alinhe joelhos e quadris.", "Respire com a coluna confortavel."],
    commonMistake: "Deixar o joelho de cima cair a frente, torcendo a pelve.",
    postureCorrection: "Mantenha joelhos alinhados com o travesseiro entre eles.",
    care: "Evite se houver dor irradiada forte, perda de forca ou formigamento persistente.",
    contraindications: ["dor ciatica intensa", "perda de forca", "formigamento persistente", "dor irradiada forte", "lesao recente de quadril ou coluna"],
    keywords: ["ciatica", "quadril", "dor no quadril", "gluteo", "lombar", "travesseiro entre joelhos"],
    synonyms: ["desconforto no quadril", "tensao glutea", "apoio entre joelhos"],
    relatedSymptoms: ["quadril incomoda ao deitar", "tensao glutea", "ciatica leve sem alerta"],
    physicalObjective: "alinhamento de pelve e conforto lateral",
    emotionalObjective: "dormir de lado com mais suporte",
    recommendationTags: ["sono", "quadril", "ciatica leve", "apoio entre joelhos", "relaxamento"],
    recommendationPriority: "alta quando o usuario mencionar ciatica, quadril e descanso",
    whenRecommend: ["meu quadril incomoda ao deitar", "ciatica leve para dormir", "preciso de apoio entre joelhos"],
    whenAvoid: ["dor irradiada intensa", "perda de forca", "formigamento", "lesao recente", "dor forte"],
    pageText: "Essa posicao lateral usa um travesseiro entre os joelhos para ajudar no alinhamento de quadris e pernas durante o descanso.",
    coverFile: "sleep_support_007_ciatica_quadril_cover.png",
    assetStatus: "GENERATED_PENDING_REVIEW"
  }),
  movement({
    id: "ref_002_mov_08",
    title: "Posicao com apoio para joelhos",
    originalTitle: "Knee Pain",
    type: "posicao para dormir",
    primaryFunction: "Pode ajudar a reduzir desconforto nos joelhos ao apoiar as pernas durante o descanso.",
    secondaryFunctions: ["diminuir pressao nos joelhos", "favorecer relaxamento das pernas", "melhorar conforto em posicao de barriga para cima", "reduzir tensao posterior das pernas"],
    indicatedFor: ["dor leve no joelho", "joelhos cansados", "desconforto ao dormir de barriga para cima", "tensao nas pernas", "necessidade de apoio sob joelhos"],
    notIndicatedFor: ["dor intensa no joelho", "inchaco importante", "lesao recente", "bloqueio articular", "dor apos queda"],
    bodyRegion: "joelhos, pernas, lombar leve",
    muscleGroup: "quadriceps, posteriores de coxa, panturrilhas e lombar leve",
    joints: "joelhos, quadris, coluna lombar",
    bodyPosition: "deitado de barriga para cima",
    equipment: ["travesseiro sob os joelhos"],
    level: "iniciante",
    intensity: "VERY_LIGHT",
    recommendedDuration: "5 a 20 minutos ou durante repouso",
    durationSeconds: 600,
    breathing: "Natural, deixando as pernas pesarem no apoio.",
    idealMoment: "repouso, antes de dormir, descanso",
    howTo: "Deite de barriga para cima e coloque um travesseiro sob os joelhos, mantendo as pernas relaxadas e a lombar confortavel.",
    stepByStep: ["Prepare o travesseiro.", "Deite de barriga para cima.", "Posicione o travesseiro sob os joelhos.", "Relaxe as pernas.", "Respire de forma natural."],
    commonMistake: "Deixar os joelhos sem apoio quando ha desconforto ou colocar apoio alto demais.",
    postureCorrection: "Use apoio confortavel sob os joelhos, sem dobrar exageradamente as pernas.",
    care: "Evite se houver inchaco importante, lesao recente, bloqueio articular ou dor apos queda.",
    contraindications: ["dor intensa no joelho", "inchaco importante", "lesao recente", "bloqueio articular", "dor apos queda"],
    keywords: ["joelho", "dor no joelho", "pernas cansadas", "apoio nos joelhos", "relaxar pernas", "dormir melhor"],
    synonyms: ["joelhos cansados", "desconforto nos joelhos", "apoio sob joelhos"],
    relatedSymptoms: ["dor leve no joelho", "pernas cansadas", "tensao posterior das pernas"],
    physicalObjective: "conforto dos joelhos e relaxamento das pernas",
    emotionalObjective: "repousar com apoio simples e seguro",
    recommendationTags: ["sono", "joelhos", "pernas", "travesseiro", "relaxamento"],
    recommendationPriority: "alta quando o usuario mencionar joelhos e descanso",
    whenRecommend: ["estou com joelho dolorido", "joelhos cansados para dormir", "preciso apoiar as pernas"],
    whenAvoid: ["dor intensa", "inchaco importante", "lesao recente", "bloqueio articular", "dor apos queda"],
    pageText: "Essa posicao usa um apoio confortavel sob os joelhos e pode favorecer relaxamento das pernas durante o repouso.",
    coverFile: "sleep_support_008_joelhos_apoio_cover.png",
    assetStatus: "GENERATED_PENDING_REVIEW"
  })
];

export const sleepSupportMovementById = Object.fromEntries(sleepSupportMovements.map((item) => [item.id, item])) as Record<string, SleepSupportMovement>;

export const sleepSupportExerciseInstructionSeeds = sleepSupportMovements.map((item) => ({
  slug: item.id,
  title: item.title,
  area: "SLEEP",
  category: "SLEEP_SUPPORT",
  level: 1,
  instructionType: "RELAXATION" as const,
  shortDescription: item.pageText,
  objective: item.primaryFunction,
  durationSeconds: item.durationSeconds,
  sets: null,
  reps: null,
  restSeconds: null,
  intensity: item.intensity,
  equipment: item.equipment.join(", "),
  imageKey: item.id,
  animationPromptKey: `${item.id}-planned-video`,
  recommendedWhen: [
    ...item.recommendWhen,
    ...item.indications,
    ...item.userKeywords,
    ...item.relatedSymptoms,
    ...item.bodyRegions,
    ...item.recommendationTags,
    item.physicalGoal,
    item.emotionalGoal,
    `Colecao: ${item.collectionId}`
  ],
  avoidWhen: item.avoidWhen,
  contraindications: unique([...item.contraindications, ...item.safetyFlags]),
  howToSteps: item.stepByStep,
  postureTips: [item.bodyPosition, item.posturalCorrection, item.careNotes],
  breathingTips: [item.breathing],
  commonMistakes: [item.commonMistake],
  safetyNotes: [
    item.careNotes,
    safetyNote,
    `Asset principal: ${item.assetStatus}. Video: ${item.videoStatus}.`,
    item.missingImages.length ? `Imagens pendentes: ${item.missingImages.join(", ")}.` : "Imagens instrucionais cadastradas para revisao."
  ]
}));
