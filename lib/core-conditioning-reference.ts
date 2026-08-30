export const coreConditioningReference = {
  id: "ref_006",
  originalTitle: "Remove Belly Fat - 7 Days Challenge",
  adaptedTitle: "Desafio de core e corpo inteiro - 7 dias",
  collectionId: "desafio_core_corpo_inteiro_7_dias",
  collectionTitle: "Desafio core e corpo inteiro - 7 dias",
  category: "Fitness / Treino funcional / Condicionamento",
  subcategory: "Core, abdomen, pernas e gluteos",
  originalLanguage: "Ingles",
  appLanguage: "Portugues",
  assetBasePath: "/instructional-images/fitness/core-conditioning",
  objective:
    "Pode apoiar fortalecimento do core, ativacao abdominal, condicionamento fisico geral, fortalecimento de pernas e gluteos, resistencia muscular, gasto calorico por treino corporal e consistencia em rotina curta sem equipamentos.",
  safeObservation: "Mantenha constancia, cuide da alimentacao e hidrate-se bem.",
  safetyAlert:
    "Esta colecao nao promete perda de gordura localizada. Reducao de gordura corporal depende de alimentacao, sono, rotina, gasto energetico, genetica e acompanhamento profissional quando necessario.",
  forbiddenClaims: [
    "remove barriga",
    "elimina gordura abdominal",
    "perde barriga em 7 dias",
    "seca barriga",
    "resultado garantido",
    "queima gordura localizada"
  ],
  safeClaims: [
    "pode ajudar no fortalecimento do core",
    "pode contribuir para gasto calorico",
    "pode apoiar uma rotina ativa",
    "pode melhorar resistencia muscular",
    "pode favorecer condicionamento fisico",
    "pode ajudar na consistencia de treino"
  ]
} as const;

export type CoreConditioningAssetStatus = "READY" | "PARTIAL" | "PLANNED";
export type CoreConditioningVideoStatus = "PLANNED";
export type CoreConditioningImageRole = "START" | "EXECUTION" | "ALTERNATE_SIDE" | "HOLD" | "COMMON_MISTAKE" | "CORRECTION";

export type CoreConditioningImage = {
  stepId: string;
  role: CoreConditioningImageRole;
  filename: string;
  src: string;
  alt: string;
  status: "READY" | "PLANNED";
  supplemental: boolean;
};

export type CoreConditioningMovement = {
  id: string;
  referenceId: typeof coreConditioningReference.id;
  collectionId: typeof coreConditioningReference.collectionId;
  collectionTitle: typeof coreConditioningReference.collectionTitle;
  categoria: typeof coreConditioningReference.category;
  subcategoria: typeof coreConditioningReference.subcategory;
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
  volume_original: string;
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
  status_asset: CoreConditioningAssetStatus;
  status_video: CoreConditioningVideoStatus;
  imagePaths: string[];
  expectedImagePaths: string[];
  missingImages: string[];
  thumbnail: string;
  coverImage: string;
  primaryImage: CoreConditioningImage;
  images: CoreConditioningImage[];
  searchText: string;
  safetyFlags: string[];
};

type ImagePlan = {
  stepId: string;
  role: CoreConditioningImageRole;
  filename: string;
  alt: string;
  exists?: boolean;
  supplemental?: boolean;
};

function image(stepId: string, role: CoreConditioningImageRole, filename: string, alt: string, exists = true, supplemental = false): ImagePlan {
  return { stepId, role, filename, alt, exists, supplemental };
}

const imagePlansByMovement: Record<string, ImagePlan[]> = {
  ref_006_mov_01: [
    image("step_01_start", "START", "fitness_core_001_heel_touch_step_01_start.png", "Inicio deitado com joelhos flexionados e bracos ao lado do corpo."),
    image("step_02_right_touch", "EXECUTION", "fitness_core_001_heel_touch_step_02_right_touch.png", "Flexao lateral controlada tocando o calcanhar direito."),
    image("step_03_left_touch", "ALTERNATE_SIDE", "fitness_core_001_heel_touch_step_03_left_touch.png", "Flexao lateral controlada tocando o calcanhar esquerdo."),
    image("step_04_common_mistake", "COMMON_MISTAKE", "fitness_core_001_heel_touch_step_04_common_mistake.png", "Erro comum com pescoco puxado e tronco girando sem controle."),
    image("step_05_correction", "CORRECTION", "fitness_core_001_heel_touch_step_05_correction.png", "Correcao mantendo costelas baixas, queixo solto e movimento curto.")
  ],
  ref_006_mov_02: [
    image("step_01_start", "START", "fitness_core_002_bicycle_crunch_step_01_start.png", "Inicio deitado com maos leves atras da cabeca e pernas elevadas."),
    image("step_02_right_cross", "EXECUTION", "fitness_core_002_bicycle_crunch_step_02_right_cross.png", "Rotacao aproximando cotovelo e joelho opostos com controle."),
    image("step_03_left_cross", "ALTERNATE_SIDE", "fitness_core_002_bicycle_crunch_step_03_left_cross.png", "Rotacao oposta aproximando cotovelo direito do joelho esquerdo."),
    image("step_04_common_mistake", "COMMON_MISTAKE", "fitness_core_002_bicycle_crunch_step_04_common_mistake.png", "Erro comum puxando o pescoco ou pedalando rapido demais."),
    image("step_05_correction", "CORRECTION", "fitness_core_002_bicycle_crunch_step_05_correction.png", "Correcao com cotovelos abertos, abdomen ativo e lombar estavel.", false)
  ],
  ref_006_mov_03: [
    image("step_01_start", "START", "fitness_core_003_russian_twist_step_01_start.png", "Inicio sentado com tronco levemente inclinado e pes apoiados."),
    image("step_02_twist_right", "EXECUTION", "fitness_core_003_russian_twist_step_02_twist_right.png", "Rotacao controlada do tronco levando as maos para o lado direito."),
    image("step_03_twist_left", "ALTERNATE_SIDE", "fitness_core_003_russian_twist_step_03_twist_left.png", "Rotacao controlada do tronco levando as maos para o lado esquerdo."),
    image("step_04_common_mistake", "COMMON_MISTAKE", "fitness_core_003_russian_twist_step_04_common_mistake.png", "Erro comum arredondando lombar e balancando os bracos."),
    image("step_05_correction", "CORRECTION", "fitness_core_003_russian_twist_step_05_correction.png", "Correcao com coluna longa, abdomen ativo e giro vindo do tronco.")
  ],
  ref_006_mov_04: [
    image("step_01_high_plank", "START", "fitness_core_004_shoulder_tap_step_01_high_plank.png", "Inicio em prancha alta com maos sob os ombros e pes afastados."),
    image("step_02_tap_right", "EXECUTION", "fitness_core_004_shoulder_tap_step_02_tap_right.png", "Toque da mao direita no ombro esquerdo mantendo quadris estaveis."),
    image("step_03_tap_left", "ALTERNATE_SIDE", "fitness_core_004_shoulder_tap_step_03_tap_left.png", "Toque da mao esquerda no ombro direito sem balancar o tronco."),
    image("step_04_common_mistake", "COMMON_MISTAKE", "fitness_core_004_shoulder_tap_step_04_common_mistake.png", "Erro comum deixando quadril girar ou lombar ceder."),
    image("step_05_correction", "CORRECTION", "fitness_core_004_shoulder_tap_step_05_correction.png", "Correcao afastando os pes, empurrando o chao e reduzindo a velocidade.")
  ],
  ref_006_mov_05: [
    image("step_01_standing", "START", "fitness_core_005_squats_step_01_standing.png", "Inicio em pe com pes afastados na largura do quadril."),
    image("step_02_descend", "EXECUTION", "fitness_core_005_squats_step_02_descend.png", "Descida do agachamento levando quadril para tras com peito aberto."),
    image("step_03_squat_position", "HOLD", "fitness_core_005_squats_step_03_squat_position.png", "Posicao baixa segura com joelhos alinhados aos pes."),
    image("step_04_common_mistake", "COMMON_MISTAKE", "fitness_core_005_squats_step_04_common_mistake.png", "Erro comum com joelhos caindo para dentro ou tronco colapsando."),
    image("step_05_correction", "CORRECTION", "fitness_core_005_squats_step_05_correction.png", "Correcao empurrando o chao, alinhando joelhos e subindo com controle.")
  ],
  ref_006_mov_06: [
    image("step_01_standing", "START", "fitness_core_006_lunges_step_01_standing.png", "Inicio em pe com postura alta e pes paralelos."),
    image("step_02_step_forward", "EXECUTION", "fitness_core_006_lunges_step_02_step_forward.png", "Passo a frente controlado preparando o afundo."),
    image("step_03_lunge_down", "HOLD", "fitness_core_006_lunges_step_03_lunge_down.png", "Descida do afundo com joelho da frente alinhado ao pe."),
    image("step_04_other_leg", "ALTERNATE_SIDE", "fitness_core_006_lunges_step_04_other_leg.png", "Alternancia de perna mantendo tronco estavel."),
    image("step_05_common_mistake", "COMMON_MISTAKE", "fitness_core_006_lunges_step_05_common_mistake.png", "Erro comum com passada curta e joelho passando sem controle."),
    image("step_06_correction", "CORRECTION", "fitness_core_006_lunges_step_06_correction.png", "Correcao ajustando distancia dos pes e descendo verticalmente.")
  ],
  ref_006_mov_07: [
    image("step_01_tabletop", "START", "fitness_core_007_donkey_kick_step_01_tabletop.png", "Inicio em quatro apoios com maos sob ombros e joelhos sob quadris."),
    image("step_02_leg_lift", "EXECUTION", "fitness_core_007_donkey_kick_step_02_leg_lift.png", "Elevacao da perna mantendo joelho flexionado e core ativo."),
    image("step_03_top_position", "HOLD", "fitness_core_007_donkey_kick_step_03_top_position.png", "Ponto alto do movimento sem arquear a lombar."),
    image("step_04_common_mistake", "COMMON_MISTAKE", "fitness_core_007_donkey_kick_step_04_common_mistake.png", "Erro comum levantando demais a perna e comprimindo a lombar."),
    image("step_05_correction", "CORRECTION", "fitness_core_007_donkey_kick_step_05_correction.png", "Correcao com pelve nivelada, abdomen firme e amplitude menor.")
  ],
  ref_006_mov_08: [
    image("step_01_forearms_setup", "START", "fitness_core_008_forearm_plank_step_01_forearms_setup.png", "Inicio apoiando antebracos no chao com cotovelos abaixo dos ombros."),
    image("step_02_legs_back", "EXECUTION", "fitness_core_008_forearm_plank_step_02_legs_back.png", "Pernas estendidas para tras formando linha longa do corpo."),
    image("step_03_final_hold", "HOLD", "fitness_core_008_forearm_plank_step_03_final_hold.png", "Prancha final com abdomen ativo, gluteos leves e respiracao continua."),
    image("step_04_common_mistake", "COMMON_MISTAKE", "fitness_core_008_forearm_plank_step_04_common_mistake.png", "Erro comum deixando quadril cair ou elevando demais o bumbum."),
    image("step_05_correction", "CORRECTION", "fitness_core_008_forearm_plank_step_05_correction.png", "Correcao alinhando costelas, pelve e nuca em uma linha confortavel.")
  ]
};

const severeSafetyFlags = [
  "dor forte",
  "dor intensa",
  "dor abdominal intensa",
  "dor aguda",
  "hernia abdominal",
  "diastase abdominal",
  "gravidez",
  "pos-parto",
  "dor no joelho",
  "dor no ombro",
  "dor no punho",
  "pressao descontrolada",
  "formigamento",
  "dormencia",
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

type MovementInput = Omit<
  CoreConditioningMovement,
  | "referenceId"
  | "collectionId"
  | "collectionTitle"
  | "categoria"
  | "subcategoria"
  | "status_asset"
  | "status_video"
  | "imagePaths"
  | "expectedImagePaths"
  | "missingImages"
  | "thumbnail"
  | "coverImage"
  | "primaryImage"
  | "images"
  | "searchText"
  | "safetyFlags"
>;

function unique(items: string[]) {
  return Array.from(new Set(items.map((item) => item.trim()).filter(Boolean)));
}

function movement(input: MovementInput): CoreConditioningMovement {
  const images = (imagePlansByMovement[input.id] || []).map((asset) => ({
    stepId: asset.stepId,
    role: asset.role,
    filename: asset.filename,
    src: `${coreConditioningReference.assetBasePath}/${asset.filename}`,
    alt: asset.alt,
    status: asset.exists === false ? "PLANNED" as const : "READY" as const,
    supplemental: Boolean(asset.supplemental)
  }));
  const readyImages = images.filter((asset) => asset.status === "READY");
  const primaryImage = readyImages[0] || images[0] || {
    stepId: "planned",
    role: "START" as const,
    filename: "",
    src: "",
    alt: input.nome_pt,
    status: "PLANNED" as const,
    supplemental: false
  };
  const imagePaths = readyImages.map((asset) => asset.src);
  const expectedImagePaths = images.filter((asset) => !asset.supplemental).map((asset) => asset.src);
  const missingImages = images.filter((asset) => asset.status === "PLANNED" && !asset.supplemental).map((asset) => asset.filename);
  const safetyFlags = unique([...severeSafetyFlags, ...input.quando_evitar, ...input.contraindicacoes]);
  const searchText = unique([
    input.nome_pt,
    input.nome_original,
    input.tipo,
    input.objetivo_principal,
    ...input.objetivos_secundarios,
    input.descricao,
    input.como_fazer,
    input.erro_comum,
    input.correcao_postural,
    ...input.indicacoes,
    ...input.contraindicacoes,
    ...input.cuidados,
    ...input.regioes_corporais,
    ...input.grupos_musculares,
    ...input.articulacoes,
    ...input.equipamentos,
    input.nivel,
    input.intensidade,
    input.duracao,
    input.volume_original,
    input.repeticoes || "",
    input.respiracao,
    ...input.palavras_chave,
    ...input.sinonimos,
    ...input.tags,
    input.prioridade,
    ...input.quando_recomendar,
    ...input.quando_evitar,
    input.objetivo_fisico,
    input.objetivo_emocional,
    coreConditioningReference.id,
    coreConditioningReference.collectionId,
    coreConditioningReference.collectionTitle,
    coreConditioningReference.category,
    coreConditioningReference.subcategory
  ]).join(" ");

  return {
    ...input,
    referenceId: coreConditioningReference.id,
    collectionId: coreConditioningReference.collectionId,
    collectionTitle: coreConditioningReference.collectionTitle,
    categoria: coreConditioningReference.category,
    subcategoria: coreConditioningReference.subcategory,
    status_asset: missingImages.length ? "PARTIAL" : "READY",
    status_video: "PLANNED",
    imagePaths,
    expectedImagePaths,
    missingImages,
    thumbnail: primaryImage?.src || "",
    coverImage: primaryImage?.src || "",
    primaryImage,
    images,
    searchText,
    safetyFlags
  };
}

export const coreConditioningMovements: CoreConditioningMovement[] = [
  movement({
    id: "ref_006_mov_01",
    nome_pt: "Toque nos calcanhares",
    nome_original: "Heel Touch",
    tipo: "exercicio de core em decubito dorsal",
    objetivo_principal: "Pode ajudar a ativar obliquos e musculatura abdominal lateral.",
    objetivos_secundarios: ["fortalecer core", "melhorar resistencia abdominal", "trabalhar controle do tronco", "favorecer consciencia corporal"],
    descricao: "Movimento de flexao lateral curta no chao, alternando o toque das maos nos calcanhares com o abdomen ativo.",
    beneficios: ["fortalece obliquos", "melhora controle do tronco", "pode entrar em treinos curtos de core", "nao exige equipamento"],
    como_fazer: "Deite de barriga para cima, flexione os joelhos e deixe os pes apoiados. Eleve levemente cabeca e ombros sem puxar o pescoco. Deslize uma mao em direcao ao calcanhar do mesmo lado, volte ao centro e alterne.",
    passo_a_passo: [
      "Deite com joelhos flexionados e pes apoiados no chao.",
      "Mantenha bracos ao lado do corpo e queixo relaxado.",
      "Eleve levemente ombros e costelas, sem puxar o pescoco.",
      "Toque ou aproxime a mao direita do calcanhar direito.",
      "Volte ao centro e repita para o lado esquerdo.",
      "Alterne os lados mantendo respiracao continua."
    ],
    erro_comum: "Girar o tronco rapido, puxar a cabeca ou perder a lombar totalmente do controle.",
    correcao_postural: "Reduza a amplitude, mantenha o olhar diagonal para cima e pense em aproximar costelas do quadril sem tensionar o pescoco.",
    indicacoes: ["fortalecimento abdominal leve a moderado", "treino de core", "rotina de condicionamento", "usuarios que querem treino sem equipamento"],
    contraindicacoes: ["dor lombar", "dor cervical", "hernia abdominal", "diastase sem orientacao", "dor abdominal forte"],
    cuidados: ["nao puxe a cabeca com as maos", "pare se sentir dor lombar ou cervical", "mantenha movimento curto e controlado", "evite prender a respiracao"],
    regioes_corporais: ["abdomen", "obliquos", "core", "cervical"],
    grupos_musculares: ["obliquos", "reto abdominal", "transverso do abdomen"],
    articulacoes: ["coluna toracica", "coluna lombar", "quadril"],
    equipamentos: ["Colchonete"],
    nivel: "iniciante a intermediario",
    levelNumber: 1,
    intensidade: "MODERATE",
    duracao: "3 a 5 minutos",
    durationSeconds: 240,
    sets: 2,
    volume_original: "45 repeticoes",
    repeticoes: "45 repeticoes",
    restSeconds: 30,
    respiracao: "Expire ao tocar o calcanhar e inspire ao voltar ao centro.",
    palavras_chave: ["heel touch", "toque no calcanhar", "abdominal lateral", "obliquos", "abdomen", "core", "sem equipamento"],
    sinonimos: ["toque alternado nos calcanhares", "abdominal obliquo curto", "calcanhar lateral"],
    tags: ["fitness", "core", "abdomen", "obliquos", "casa", "sem-equipamento", "iniciante", "ref_006", "desafio-core"],
    prioridade: "alta para objetivo de fortalecer core com baixo impacto",
    quando_recomendar: ["fortalecer abdomen", "fortalecer core", "treino em casa", "sem equipamentos", "estabilidade corporal", "sedentarismo leve"],
    quando_evitar: ["dor cervical", "dor lombar forte", "pos-operatorio abdominal", "tontura ao deitar", "gravidez sem orientacao"],
    objetivo_fisico: "fortalecimento de core e obliquos",
    objetivo_emocional: "gerar sensacao de ativacao possivel sem treino agressivo"
  }),
  movement({
    id: "ref_006_mov_02",
    nome_pt: "Abdominal bicicleta",
    nome_original: "Bicycle Crunches",
    tipo: "exercicio abdominal alternado",
    objetivo_principal: "Pode ajudar a fortalecer abdomen e obliquos com movimento alternado de pernas e tronco.",
    objetivos_secundarios: ["trabalhar coordenacao", "ativar core", "melhorar resistencia abdominal", "estimular controle respiratorio"],
    descricao: "Abdominal alternado no chao, aproximando cotovelo e joelho opostos sem puxar o pescoco.",
    beneficios: ["ativa reto abdominal e obliquos", "treina coordenacao cruzada", "aumenta desafio do core", "pode apoiar condicionamento geral"],
    como_fazer: "Deite de barriga para cima, apoie as maos suavemente atras da cabeca e eleve as pernas. Leve um joelho em direcao ao tronco enquanto gira o peito para o lado oposto, alternando com controle.",
    passo_a_passo: [
      "Deite com lombar confortavel e maos leves atras da cabeca.",
      "Eleve pernas e mantenha joelhos flexionados.",
      "Aproxime joelho direito e cotovelo esquerdo sem puxar o pescoco.",
      "Volte pelo centro e alterne para o outro lado.",
      "Mantenha ritmo moderado, com controle da lombar.",
      "Descanse se a tecnica comecar a cair."
    ],
    erro_comum: "Pedalar rapido demais, puxar a cabeca ou deixar a lombar arquear.",
    correcao_postural: "Use as maos apenas como apoio, gire pelo tronco e reduza a extensao das pernas se a lombar perder estabilidade.",
    indicacoes: ["treino abdominal", "condicionamento fisico", "fortalecimento do core", "rotina sem equipamento"],
    contraindicacoes: ["dor lombar", "dor cervical", "hernia abdominal", "diastase sem orientacao", "desconforto ao flexionar tronco"],
    cuidados: ["nao puxe o pescoco", "mantenha lombar controlada", "reduza velocidade antes de aumentar repeticoes", "pare se houver dor aguda"],
    regioes_corporais: ["abdomen", "obliquos", "quadril", "pernas"],
    grupos_musculares: ["reto abdominal", "obliquos", "flexores do quadril"],
    articulacoes: ["coluna", "quadril", "joelhos"],
    equipamentos: ["Colchonete"],
    nivel: "intermediario",
    levelNumber: 3,
    intensidade: "MODERATE",
    duracao: "3 a 5 minutos",
    durationSeconds: 240,
    sets: 2,
    volume_original: "45 repeticoes",
    repeticoes: "45 repeticoes",
    restSeconds: 40,
    respiracao: "Expire ao cruzar cotovelo e joelho, inspire ao trocar.",
    palavras_chave: ["bicycle crunch", "abdominal bicicleta", "core", "abdomen", "obliquos", "condicionamento", "emagrecer"],
    sinonimos: ["bicicleta abdominal", "abdominal cruzado", "crunch bicicleta"],
    tags: ["fitness", "core", "abdomen", "obliquos", "condicionamento", "casa", "sem-equipamento", "ref_006"],
    prioridade: "media-alta quando o usuario tem nivel estavel e busca core com mais intensidade",
    quando_recomendar: ["fortalecer abdomen", "fortalecer core", "melhorar condicionamento", "perder gordura corporal", "treino em casa"],
    quando_evitar: ["dor cervical", "dor lombar", "hernia abdominal", "diastase sem orientacao", "desconforto ao flexionar tronco"],
    objetivo_fisico: "fortalecimento abdominal dinamico e condicionamento de core",
    objetivo_emocional: "aumentar sensacao de energia e coordenacao corporal"
  }),
  movement({
    id: "ref_006_mov_03",
    nome_pt: "Torcao russa",
    nome_original: "Russian Twist",
    tipo: "rotacao sentada de core",
    objetivo_principal: "Pode ajudar a fortalecer obliquos e melhorar controle rotacional do tronco.",
    objetivos_secundarios: ["ativar abdomen", "trabalhar estabilidade", "melhorar coordenacao", "fortalecer core"],
    descricao: "Exercicio sentado com tronco inclinado, girando as maos de um lado ao outro sem colapsar a coluna.",
    beneficios: ["trabalha rotacao controlada", "fortalece obliquos", "melhora estabilidade do tronco", "ajuda a perceber postura sentada"],
    como_fazer: "Sente com joelhos flexionados e pes apoiados. Incline o tronco levemente para tras mantendo coluna longa. Gire o peito e as maos para um lado, volte ao centro e alterne.",
    passo_a_passo: [
      "Sente com joelhos flexionados e pes no chao.",
      "Incline o tronco um pouco para tras sem arredondar a lombar.",
      "Una as maos a frente do peito.",
      "Gire o tronco para a direita com controle.",
      "Volte ao centro e gire para a esquerda.",
      "Mantenha o movimento pequeno se perder postura."
    ],
    erro_comum: "Mover apenas os bracos, arredondar a lombar ou usar impulso.",
    correcao_postural: "Cresca a coluna, mantenha costelas organizadas e deixe o giro vir do tronco, nao dos ombros isolados.",
    indicacoes: ["treino de core", "fortalecimento abdominal", "condicionamento fisico", "controle de tronco"],
    contraindicacoes: ["dor lombar", "dor no quadril", "tontura", "dor ao rotacionar tronco", "hernia abdominal sem orientacao"],
    cuidados: ["mantenha pes apoiados se for iniciante", "evite carga externa nesta versao", "nao force amplitude", "pare se a lombar incomodar"],
    regioes_corporais: ["abdomen", "obliquos", "lombar", "quadril"],
    grupos_musculares: ["obliquos", "reto abdominal", "transverso do abdomen", "flexores do quadril"],
    articulacoes: ["coluna toracica", "coluna lombar", "quadril"],
    equipamentos: ["Colchonete"],
    nivel: "iniciante a intermediario",
    levelNumber: 2,
    intensidade: "MODERATE",
    duracao: "3 a 5 minutos",
    durationSeconds: 240,
    sets: 2,
    volume_original: "60 repeticoes",
    repeticoes: "60 repeticoes",
    restSeconds: 40,
    respiracao: "Expire durante o giro e inspire ao retornar ao centro.",
    palavras_chave: ["russian twist", "torcao russa", "rotacao de tronco", "core", "obliquos", "equilibrio", "estabilidade"],
    sinonimos: ["giro russo", "rotacao sentada", "twist abdominal"],
    tags: ["fitness", "core", "rotacao", "obliquos", "equilibrio", "casa", "sem-equipamento", "ref_006"],
    prioridade: "media para estabilidade rotacional e treino de core",
    quando_recomendar: ["fortalecer core", "estabilidade corporal", "equilibrio", "treino em casa", "sedentarismo"],
    quando_evitar: ["dor lombar", "dor no quadril", "tontura", "dor ao rotacionar tronco", "hernia abdominal sem orientacao"],
    objetivo_fisico: "forca rotacional e estabilidade de tronco",
    objetivo_emocional: "criar foco corporal e ritmo controlado"
  }),
  movement({
    id: "ref_006_mov_04",
    nome_pt: "Toque no ombro em prancha",
    nome_original: "Shoulder Tap",
    tipo: "prancha alta alternada",
    objetivo_principal: "Pode ajudar a fortalecer core, ombros e estabilidade corporal em prancha.",
    objetivos_secundarios: ["melhorar estabilidade escapular", "fortalecer bracos", "trabalhar anti-rotacao", "melhorar controle do quadril"],
    descricao: "Em prancha alta, alterna o toque das maos nos ombros mantendo quadris estaveis.",
    beneficios: ["fortalece core e ombros", "treina estabilidade anti-rotacao", "melhora controle em apoio de maos", "usa apenas peso corporal"],
    como_fazer: "Entre em prancha alta com maos abaixo dos ombros e pes afastados. Tire uma mao do chao para tocar o ombro oposto, volte e alterne, evitando balancar o quadril.",
    passo_a_passo: [
      "Apoie maos no chao abaixo dos ombros.",
      "Estenda as pernas para tras e afaste os pes para ganhar estabilidade.",
      "Empurre o chao, mantendo nuca longa e abdomen ativo.",
      "Toque a mao direita no ombro esquerdo.",
      "Volte ao apoio e toque a mao esquerda no ombro direito.",
      "Alterne devagar sem deixar o quadril girar."
    ],
    erro_comum: "Girar quadris, afundar a lombar ou apoiar maos muito a frente dos ombros.",
    correcao_postural: "Afaste mais os pes, contraia levemente gluteos e reduza a velocidade ate o tronco ficar estavel.",
    indicacoes: ["fortalecimento do core", "estabilidade de ombros", "treino funcional", "condicionamento sem equipamento"],
    contraindicacoes: ["dor no punho", "dor no ombro", "dor lombar", "instabilidade de ombro", "lesao recente em punhos ou ombros"],
    cuidados: ["apoie joelhos no chao se precisar adaptar", "nao deixe o quadril cair", "pare se punhos ou ombros doerem", "mantenha respiracao fluida"],
    regioes_corporais: ["core", "ombros", "bracos", "punhos", "coluna"],
    grupos_musculares: ["abdominais", "deltoides", "peitoral", "triceps", "estabilizadores escapulares"],
    articulacoes: ["ombro", "punho", "cotovelo", "coluna lombar", "quadril"],
    equipamentos: ["Colchonete"],
    nivel: "intermediario",
    levelNumber: 3,
    intensidade: "MODERATE",
    duracao: "3 a 5 minutos",
    durationSeconds: 240,
    sets: 2,
    volume_original: "60 repeticoes",
    repeticoes: "60 repeticoes",
    restSeconds: 45,
    respiracao: "Respire curto e continuo, expirando ao tocar o ombro.",
    palavras_chave: ["shoulder tap", "toque no ombro", "prancha alta", "core", "ombros", "estabilidade", "equilibrio"],
    sinonimos: ["prancha com toque no ombro", "tap shoulder", "toque alternado de ombro"],
    tags: ["fitness", "core", "ombros", "prancha", "estabilidade", "equilibrio", "casa", "sem-equipamento", "ref_006"],
    prioridade: "media-alta para estabilidade corporal quando nao ha queixa de ombro ou punho",
    quando_recomendar: ["fortalecer core", "estabilidade corporal", "equilibrio", "fortalecimento geral", "treino em casa"],
    quando_evitar: ["dor no punho", "dor no ombro", "dor lombar", "instabilidade de ombro", "lesao recente em punhos ou ombros"],
    objetivo_fisico: "estabilidade anti-rotacional de core e cintura escapular",
    objetivo_emocional: "aumentar confianca em apoio e controle corporal"
  }),
  movement({
    id: "ref_006_mov_05",
    nome_pt: "Agachamentos",
    nome_original: "Squats",
    tipo: "exercicio funcional de pernas",
    objetivo_principal: "Pode ajudar a fortalecer pernas e gluteos.",
    objetivos_secundarios: ["ativar core", "melhorar mobilidade de quadril", "fortalecer coxas", "apoiar condicionamento fisico"],
    descricao: "Movimento de descida e subida usando peso corporal, com joelhos alinhados e quadril indo para tras.",
    beneficios: ["fortalece quadriceps e gluteos", "treina movimento funcional diario", "aumenta gasto energetico leve", "ajuda condicionamento geral"],
    como_fazer: "Fique em pe com pes na largura do quadril. Leve o quadril para tras e dobre joelhos como se fosse sentar. Suba empurrando o chao, mantendo joelhos alinhados aos pes.",
    passo_a_passo: [
      "Fique em pe com pes na largura do quadril ou um pouco mais abertos.",
      "Mantenha peito aberto e abdomen ativo.",
      "Leve o quadril para tras iniciando a descida.",
      "Dobre joelhos mantendo alinhamento com os pes.",
      "Pare em amplitude confortavel.",
      "Suba empurrando o chao e contraindo gluteos sem travar joelhos."
    ],
    erro_comum: "Deixar joelhos cairem para dentro, levantar calcanhares ou desabar o tronco.",
    correcao_postural: "Reduza a profundidade, mantenha peso distribuido no pe inteiro e pense em abrir levemente os joelhos na linha dos pes.",
    indicacoes: ["fortalecimento de pernas", "treino funcional", "condicionamento", "rotina sem equipamento"],
    contraindicacoes: ["dor no joelho", "dor no quadril", "dor lombar", "instabilidade", "lesao recente"],
    cuidados: ["comece com amplitude pequena", "use cadeira como referencia se necessario", "nao prenda o ar", "pare se joelho ou quadril doerem"],
    regioes_corporais: ["pernas", "gluteos", "quadril", "joelhos", "core"],
    grupos_musculares: ["quadriceps", "gluteo maximo", "posteriores de coxa", "panturrilhas", "core"],
    articulacoes: ["quadril", "joelho", "tornozelo", "coluna lombar"],
    equipamentos: ["Nenhum ou colchonete"],
    nivel: "iniciante a intermediario",
    levelNumber: 1,
    intensidade: "MODERATE",
    duracao: "4 a 6 minutos",
    durationSeconds: 300,
    sets: 2,
    volume_original: "90 repeticoes",
    repeticoes: "90 repeticoes",
    restSeconds: 45,
    respiracao: "Inspire na descida e expire ao subir.",
    palavras_chave: ["squat", "agachamento", "pernas", "gluteos", "condicionamento", "emagrecer", "sedentarismo", "rotina matinal"],
    sinonimos: ["agachar", "sentar e levantar", "agachamento livre"],
    tags: ["fitness", "pernas", "gluteos", "funcional", "condicionamento", "casa", "sem-equipamento", "iniciante", "ref_006"],
    prioridade: "alta para fortalecimento geral e pernas sem equipamento",
    quando_recomendar: ["fortalecer pernas", "fortalecer gluteos", "fortalecimento geral", "melhorar condicionamento", "sedentarismo", "rotina matinal"],
    quando_evitar: ["dor no joelho", "dor no quadril", "dor lombar", "instabilidade", "lesao recente"],
    objetivo_fisico: "forca de membros inferiores e condicionamento funcional",
    objetivo_emocional: "gerar disposicao e sensacao de corpo ativo"
  }),
  movement({
    id: "ref_006_mov_06",
    nome_pt: "Avancos / passadas",
    nome_original: "Lunges",
    tipo: "exercicio unilateral de pernas",
    objetivo_principal: "Pode ajudar a fortalecer pernas, gluteos e estabilidade unilateral.",
    objetivos_secundarios: ["melhorar equilibrio", "ativar core", "trabalhar coordenacao", "fortalecer quadriceps e gluteos"],
    descricao: "Passada a frente com descida controlada, alternando pernas e mantendo joelho alinhado.",
    beneficios: ["fortalece pernas de forma unilateral", "trabalha gluteos", "melhora equilibrio", "pode corrigir assimetrias leves de controle"],
    como_fazer: "Fique em pe, de um passo a frente e desca flexionando os dois joelhos. Mantenha tronco alto, joelho da frente alinhado ao pe e volte para alternar a perna.",
    passo_a_passo: [
      "Fique em pe com postura alta.",
      "De um passo a frente com distancia confortavel.",
      "Desca dobrando os dois joelhos sem bater o joelho de tras no chao.",
      "Mantenha o joelho da frente alinhado ao pe.",
      "Empurre o chao para voltar.",
      "Alterne as pernas mantendo ritmo controlado."
    ],
    erro_comum: "Dar passada curta demais, deixar o joelho da frente cair para dentro ou inclinar o tronco em excesso.",
    correcao_postural: "Aumente um pouco a distancia da passada, desca verticalmente e mantenha o peso distribuido entre pe da frente e ponta do pe de tras.",
    indicacoes: ["fortalecimento de pernas", "treino funcional", "condicionamento", "estabilidade"],
    contraindicacoes: ["dor no joelho", "dor no quadril", "instabilidade", "dor lombar", "lesao recente"],
    cuidados: ["use apoio lateral se necessario", "comece sem profundidade", "nao force amplitude", "interrompa se houver dor no joelho"],
    regioes_corporais: ["pernas", "gluteos", "quadril", "joelhos", "core"],
    grupos_musculares: ["quadriceps", "gluteos", "posteriores de coxa", "panturrilhas"],
    articulacoes: ["quadril", "joelho", "tornozelo"],
    equipamentos: ["Nenhum ou colchonete"],
    nivel: "intermediario",
    levelNumber: 3,
    intensidade: "MODERATE",
    duracao: "4 a 6 minutos",
    durationSeconds: 300,
    sets: 2,
    volume_original: "70 repeticoes cada perna",
    repeticoes: "70 repeticoes cada perna",
    restSeconds: 50,
    respiracao: "Inspire ao descer e expire ao voltar para cima.",
    palavras_chave: ["lunge", "lunges", "avanco", "afundo", "pernas", "gluteos", "equilibrio", "condicionamento"],
    sinonimos: ["afundo alternado", "passada frontal", "avanco frontal", "avancos", "passadas"],
    tags: ["fitness", "pernas", "gluteos", "unilateral", "equilibrio", "condicionamento", "casa", "sem-equipamento", "ref_006"],
    prioridade: "media para pernas e gluteos quando o usuario tolera exercicio unilateral",
    quando_recomendar: ["fortalecer pernas", "fortalecer gluteos", "equilibrio", "fortalecimento geral", "melhorar condicionamento"],
    quando_evitar: ["dor no joelho", "dor no quadril", "instabilidade", "dor lombar", "lesao recente"],
    objetivo_fisico: "forca unilateral de pernas, gluteos e equilibrio",
    objetivo_emocional: "fortalecer sensacao de firmeza e estabilidade"
  }),
  movement({
    id: "ref_006_mov_07",
    nome_pt: "Coice de gluteo",
    nome_original: "Donkey Kick",
    tipo: "exercicio de gluteos em quatro apoios",
    objetivo_principal: "Pode ajudar a fortalecer gluteos e estabilizar quadril.",
    objetivos_secundarios: ["ativar core", "trabalhar estabilidade pelvica", "fortalecer cadeia posterior", "melhorar controle unilateral"],
    descricao: "Em quatro apoios, eleva uma perna flexionada ativando gluteo sem arquear a lombar.",
    beneficios: ["ativa gluteo maximo", "baixo impacto para pernas", "melhora controle de quadril", "pode ser adaptado para iniciantes"],
    como_fazer: "Fique em quatro apoios. Com o joelho flexionado, eleve uma perna para tras e para cima ate sentir gluteo trabalhar, sem girar a pelve ou arquear lombar. Volte devagar.",
    passo_a_passo: [
      "Entre em quatro apoios com maos abaixo dos ombros.",
      "Mantenha joelhos abaixo dos quadris e abdomen ativo.",
      "Flexione o joelho de uma perna a cerca de 90 graus.",
      "Eleve o pe em direcao ao teto sem arquear a lombar.",
      "Pause pouco no alto sentindo gluteo.",
      "Desca com controle e repita antes de trocar o lado."
    ],
    erro_comum: "Subir a perna alem do controle e compensar com lombar ou giro do quadril.",
    correcao_postural: "Diminua a altura da perna, mantenha a pelve apontada para o chao e imagine o abdomen sustentando a lombar.",
    indicacoes: ["fortalecimento de gluteos", "treino em casa", "condicionamento leve a moderado", "estabilidade de quadril"],
    contraindicacoes: ["dor lombar", "dor no joelho", "dor no quadril", "lesao recente", "desconforto em quatro apoios"],
    cuidados: ["apoie antebracos ou use colchonete se punhos incomodarem", "evite arquear a lombar", "nao use impulso", "pare se joelho ou quadril doerem"],
    regioes_corporais: ["gluteos", "quadril", "core", "lombar leve"],
    grupos_musculares: ["gluteo maximo", "gluteo medio", "posteriores de coxa", "transverso do abdomen"],
    articulacoes: ["quadril", "joelho", "ombro", "punho"],
    equipamentos: ["Colchonete"],
    nivel: "iniciante a intermediario",
    levelNumber: 1,
    intensidade: "MODERATE",
    duracao: "3 a 5 minutos",
    durationSeconds: 240,
    sets: 2,
    volume_original: "45 repeticoes cada perna",
    repeticoes: "45 repeticoes cada perna",
    restSeconds: 35,
    respiracao: "Expire ao elevar a perna e inspire ao voltar.",
    palavras_chave: ["donkey kick", "coice de gluteo", "gluteos", "quadril", "pernas", "sem equipamento", "treino em casa"],
    sinonimos: ["elevacao de perna em quatro apoios", "coice", "glute kickback no chao"],
    tags: ["fitness", "gluteos", "quadril", "pernas", "baixo-impacto", "casa", "sem-equipamento", "iniciante", "ref_006"],
    prioridade: "alta para gluteos com baixo impacto",
    quando_recomendar: ["fortalecer gluteos", "fortalecer pernas", "estabilidade corporal", "treino em casa", "sem equipamentos", "sedentarismo"],
    quando_evitar: ["dor lombar", "dor no joelho", "dor no quadril", "lesao recente", "desconforto em quatro apoios"],
    objetivo_fisico: "ativacao e fortalecimento de gluteos com controle lombopelvico",
    objetivo_emocional: "dar sensacao de ativacao localizada e segura"
  }),
  movement({
    id: "ref_006_mov_08",
    nome_pt: "Prancha de antebraco",
    nome_original: "Forearm Plank",
    tipo: "isometria de core",
    objetivo_principal: "Pode ajudar a fortalecer core e melhorar estabilidade corporal.",
    objetivos_secundarios: ["fortalecer ombros", "melhorar resistencia", "estabilizar coluna", "trabalhar controle postural"],
    descricao: "Posicao isometrica apoiada nos antebracos e pontas dos pes, mantendo corpo alinhado e respiracao continua.",
    beneficios: ["fortalece core profundo", "melhora resistencia postural", "treina estabilidade global", "nao exige equipamento"],
    como_fazer: "Apoie antebracos no chao com cotovelos abaixo dos ombros. Estenda as pernas para tras e mantenha corpo em linha, ativando abdomen e gluteos sem prender a respiracao.",
    passo_a_passo: [
      "Apoie antebracos no chao com cotovelos abaixo dos ombros.",
      "Estenda uma perna e depois a outra para tras.",
      "Mantenha pes afastados na largura do quadril.",
      "Ative abdomen e gluteos levemente.",
      "Segure a posicao respirando sem prender o ar.",
      "Descanse antes de perder alinhamento."
    ],
    erro_comum: "Deixar quadril cair, levantar demais o quadril ou prender a respiracao.",
    correcao_postural: "Imagine costelas e pelve se aproximando, empurre o chao com antebracos e reduza o tempo se a lombar ceder.",
    indicacoes: ["fortalecimento do abdomen", "estabilidade", "condicionamento", "treino sem equipamento"],
    contraindicacoes: ["dor no ombro", "dor lombar", "dor no cotovelo", "falta de ar", "pressao descontrolada", "lesao recente"],
    cuidados: ["comece com poucos segundos", "apoie joelhos para adaptar", "nao prenda a respiracao", "pare se lombar ou ombros doerem"],
    regioes_corporais: ["abdomen", "ombros", "bracos", "gluteos", "pernas"],
    grupos_musculares: ["transverso do abdomen", "reto abdominal", "obliquos", "gluteos", "deltoides", "serratico anterior"],
    articulacoes: ["ombros", "cotovelos", "quadril", "coluna"],
    equipamentos: ["Colchonete"],
    nivel: "iniciante a intermediario",
    levelNumber: 2,
    intensidade: "MODERATE",
    duracao: "2 a 4 minutos",
    durationSeconds: 180,
    sets: 3,
    volume_original: "1 minuto",
    repeticoes: "1 minuto",
    restSeconds: 40,
    respiracao: "Respire curto e continuo, soltando o ar lentamente enquanto mantem a postura.",
    palavras_chave: ["forearm plank", "prancha", "prancha de antebraco", "core", "abdomen", "estabilidade", "fortalecimento geral"],
    sinonimos: ["prancha baixa", "plank", "isometria abdominal"],
    tags: ["fitness", "core", "abdomen", "isometria", "estabilidade", "casa", "sem-equipamento", "ref_006"],
    prioridade: "alta para core, estabilidade e fortalecimento geral sem impacto",
    quando_recomendar: ["fortalecer core", "fortalecer abdomen", "estabilidade corporal", "fortalecimento geral", "treino em casa", "sem equipamentos"],
    quando_evitar: ["dor no ombro", "dor lombar", "dor no cotovelo", "falta de ar", "pressao descontrolada", "lesao recente"],
    objetivo_fisico: "resistencia isometrica de core e estabilidade global",
    objetivo_emocional: "criar foco, firmeza e controle respiratorio"
  })
];

export const coreConditioningMovementById: Record<string, CoreConditioningMovement> = Object.fromEntries(
  coreConditioningMovements.map((item) => [item.id, item])
);

export const coreConditioningExerciseInstructionSeeds = coreConditioningMovements.map((item) => ({
  slug: item.id,
  title: item.nome_pt,
  area: "BODY_MOVEMENT",
  category: "HOME_FUNCTIONAL",
  level: item.levelNumber,
  instructionType: item.nome_original === "Forearm Plank" ? "TIME_BASED" as const : "REPS_BASED" as const,
  shortDescription: item.descricao,
  objective: item.objetivo_principal,
  durationSeconds: item.durationSeconds,
  sets: item.sets,
  reps: item.repeticoes,
  restSeconds: item.restSeconds,
  intensity: item.intensidade,
  equipment: item.equipamentos.join(", "),
  imageKey: item.id,
  animationPromptKey: `${item.id}-guided-animation`,
  recommendedWhen: item.quando_recomendar,
  avoidWhen: item.quando_evitar,
  contraindications: item.contraindicacoes,
  howToSteps: item.passo_a_passo,
  postureTips: [item.correcao_postural, ...item.cuidados.slice(0, 2)],
  breathingTips: [item.respiracao],
  commonMistakes: [item.erro_comum],
  safetyNotes: item.cuidados
}));
