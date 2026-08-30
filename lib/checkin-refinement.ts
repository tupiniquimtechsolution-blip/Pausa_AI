import { allFocusExercises } from "@/lib/focus-exercises";
import { energyMissions } from "@/lib/energy-missions";
import { happinessMissions } from "@/lib/happiness-missions";
import { sleepMissions } from "@/lib/sleep-missions";
import { coreConditioningMovementById, coreConditioningMovements } from "@/lib/core-conditioning-reference";
import { plannedReferenceMovementById, plannedReferenceMovements } from "@/lib/planned-reference-catalog";
import { sleepSupportMovementById, sleepSupportMovements } from "@/lib/sleep-support-reference";
import { stretchingExercises } from "@/lib/stretching-exercises";
import { isCatalogEntryActive } from "@/lib/catalog-reconciliation";

export type CheckinArea = "FOCUS" | "ENERGY" | "SLEEP" | "HAPPINESS";

export const checkinTagOptions = [
  "Telas",
  "Trabalho",
  "Estudo",
  "Sono",
  "Cansaco",
  "Preocupacao",
  "Relacionamentos",
  "Corpo tenso",
  "Sem foco",
  "Sem vontade",
  "Ansiedade",
  "Agitacao",
  "Energia acumulada",
  "Dificuldade para dormir",
  "Sonolencia",
  "Dor no pescoco",
  "Dor no ombro",
  "Tensao nos ombros",
  "Costas superiores",
  "Dor de cabeca tensional",
  "Lombar rigida",
  "Dor lombar",
  "Quadril ou ciatica",
  "Dor no joelho",
  "Sinusite ou congestao",
  "Relaxamento",
  "Pernas pesadas",
  "Baixa mobilidade",
  "Muito tempo sentado",
  "Maos e punhos cansados",
  "Fortalecer core",
  "Perder gordura corporal",
  "Condicionamento",
  "Pernas e gluteos",
  "Treino em casa",
  "Sem equipamentos",
  "Rotina matinal",
  "Sedentarismo",
  "Estabilidade corporal",
  "Fortalecimento geral",
  "Yoga",
  "Flexibilidade",
  "SOP",
  "Equilibrio hormonal",
  "Abertura de quadril",
  "Mobilidade de coluna",
  "Costas rigidas",
  "Conforto nas costas",
  "Pes cansados",
  "Fascia plantar",
  "Chakras",
  "Respiracao consciente"
] as const;

export type CheckinTag = (typeof checkinTagOptions)[number];

export type CheckinRefinementInput = {
  focusScore: number;
  moodScore: number;
  stressScore: number;
  energyScore: number;
  sleepScore: number;
  journalText?: string | null;
  manualTags?: string[];
  recentCheckins?: Array<{
    primaryArea?: string | null;
    focusScore: number;
    moodScore: number;
    stressScore: number;
    energyScore: number;
    sleepScore: number;
  }>;
  recentInstructionSlugs?: string[];
  userLevel?: number;
};

export type CheckinRefinement = {
  primaryArea: CheckinArea;
  secondaryArea?: CheckinArea;
  manualTags: CheckinTag[];
  detectedTags: CheckinTag[];
  summary: string;
  recommendation: string;
  recommendationReason: string;
  recommendedInstructionSlug: string;
  missionTitle: string;
  missionDescription: string;
  missionSteps: string[];
  encouragement: string;
};

const areaLabels: Record<CheckinArea, string> = {
  FOCUS: "Foco",
  ENERGY: "Energia",
  SLEEP: "Sono",
  HAPPINESS: "Felicidade"
};

const tagAliases: Record<string, CheckinTag> = {
  telas: "Telas",
  tela: "Telas",
  celular: "Telas",
  notificacao: "Telas",
  notificacoes: "Telas",
  redes: "Telas",
  instagram: "Telas",
  whatsapp: "Telas",
  trabalho: "Trabalho",
  reuniao: "Trabalho",
  reunioes: "Trabalho",
  chefe: "Trabalho",
  prazo: "Trabalho",
  expediente: "Trabalho",
  estudo: "Estudo",
  estudar: "Estudo",
  prova: "Estudo",
  faculdade: "Estudo",
  aula: "Estudo",
  sono: "Sono",
  dormir: "Dificuldade para dormir",
  dormi: "Sono",
  dormindo: "Sono",
  noite: "Sono",
  acordar: "Sono",
  acordei: "Sono",
  insonia: "Dificuldade para dormir",
  cansaco: "Cansaco",
  cansada: "Cansaco",
  cansado: "Cansaco",
  exausto: "Cansaco",
  exausta: "Cansaco",
  esgotado: "Cansaco",
  esgotada: "Cansaco",
  preocupacao: "Preocupacao",
  preocupado: "Preocupacao",
  preocupada: "Preocupacao",
  ansiedade: "Ansiedade",
  ansioso: "Ansiedade",
  ansiosa: "Ansiedade",
  medo: "Preocupacao",
  ruminar: "Preocupacao",
  relacionamento: "Relacionamentos",
  relacionamentos: "Relacionamentos",
  familia: "Relacionamentos",
  conflito: "Relacionamentos",
  solidao: "Relacionamentos",
  sozinho: "Relacionamentos",
  sozinha: "Relacionamentos",
  tensao: "Corpo tenso",
  tenso: "Corpo tenso",
  tensa: "Corpo tenso",
  relaxar: "Relaxamento",
  relaxamento: "Relaxamento",
  descansar: "Relaxamento",
  descanso: "Relaxamento",
  repouso: "Relaxamento",
  ombro: "Tensao nos ombros",
  ombros: "Tensao nos ombros",
  "dor no ombro": "Dor no ombro",
  "ombro dolorido": "Dor no ombro",
  "ombro pesado": "Dor no ombro",
  "nao consigo dormir de lado": "Dor no ombro",
  "costas superiores": "Costas superiores",
  "parte superior das costas": "Costas superiores",
  "costas altas": "Costas superiores",
  "dor entre escapulas": "Costas superiores",
  escapulas: "Costas superiores",
  "dor de cabeca": "Dor de cabeca tensional",
  "cefaleia tensional": "Dor de cabeca tensional",
  "cabeca pesada": "Dor de cabeca tensional",
  mandibula: "Corpo tenso",
  corpo: "Corpo tenso",
  foco: "Sem foco",
  distraido: "Sem foco",
  distraida: "Sem foco",
  disperso: "Sem foco",
  dispersa: "Sem foco",
  procrastinar: "Sem foco",
  procrastinacao: "Sem foco",
  travado: "Sem foco",
  travada: "Sem foco",
  vontade: "Sem vontade",
  desanimo: "Sem vontade",
  desanimado: "Sem vontade",
  desanimada: "Sem vontade",
  vazio: "Sem vontade",
  tristeza: "Sem vontade",
  agitado: "Agitacao",
  agitada: "Agitacao",
  agitacao: "Agitacao",
  inquieto: "Agitacao",
  inquieta: "Agitacao",
  irritado: "Agitacao",
  irritada: "Agitacao",
  excesso: "Energia acumulada",
  acumulada: "Energia acumulada",
  noturna: "Dificuldade para dormir",
  sonolencia: "Sonolencia",
  sonolento: "Sonolencia",
  sonolenta: "Sonolencia",
  cochilando: "Sonolencia",
  pescoco: "Dor no pescoco",
  cervical: "Dor no pescoco",
  nuca: "Dor no pescoco",
  lombar: "Lombar rigida",
  "dor lombar": "Dor lombar",
  costas: "Lombar rigida",
  "costas rigidas": "Costas rigidas",
  "costas travadas": "Costas rigidas",
  "conforto nas costas": "Conforto nas costas",
  "mobilidade de coluna": "Mobilidade de coluna",
  coluna: "Mobilidade de coluna",
  quadril: "Quadril ou ciatica",
  ciatica: "Quadril ou ciatica",
  ciatico: "Quadril ou ciatica",
  gluteo: "Quadril ou ciatica",
  "dor no quadril": "Quadril ou ciatica",
  joelho: "Dor no joelho",
  joelhos: "Dor no joelho",
  "dor no joelho": "Dor no joelho",
  sinusite: "Sinusite ou congestao",
  congestao: "Sinusite ou congestao",
  "nariz entupido": "Sinusite ou congestao",
  "dormir elevado": "Sinusite ou congestao",
  "pernas pesadas": "Pernas pesadas",
  panturrilha: "Pernas pesadas",
  panturrilhas: "Pernas pesadas",
  "pes cansados": "Pes cansados",
  "pe cansado": "Pes cansados",
  "fascia plantar": "Fascia plantar",
  fascite: "Fascia plantar",
  "sola do pe": "Fascia plantar",
  calcanhar: "Fascia plantar",
  chakras: "Chakras",
  chakra: "Chakras",
  "respiracao consciente": "Respiracao consciente",
  pesado: "Pernas pesadas",
  pesadas: "Pernas pesadas",
  mobilidade: "Baixa mobilidade",
  limitada: "Baixa mobilidade",
  sentado: "Muito tempo sentado",
  sentada: "Muito tempo sentado",
  cadeira: "Muito tempo sentado",
  punho: "Maos e punhos cansados",
  punhos: "Maos e punhos cansados",
  mao: "Maos e punhos cansados",
  maos: "Maos e punhos cansados",
  teclado: "Maos e punhos cansados",
  mouse: "Maos e punhos cansados",
  abdomen: "Fortalecer core",
  abdominal: "Fortalecer core",
  abdomem: "Fortalecer core",
  core: "Fortalecer core",
  "fortalecer abdomen": "Fortalecer core",
  "fortalecer abdominal": "Fortalecer core",
  "fortalecer core": "Fortalecer core",
  "trincar abdomen": "Fortalecer core",
  "perder barriga": "Perder gordura corporal",
  emagrecer: "Perder gordura corporal",
  emagrecimento: "Perder gordura corporal",
  "perder gordura": "Perder gordura corporal",
  "perder gordura corporal": "Perder gordura corporal",
  condicionamento: "Condicionamento",
  "melhorar condicionamento": "Condicionamento",
  disposicao: "Condicionamento",
  perna: "Pernas e gluteos",
  gluteos: "Pernas e gluteos",
  "fortalecer pernas": "Pernas e gluteos",
  "fortalecer gluteos": "Pernas e gluteos",
  "treino em casa": "Treino em casa",
  "exercicio em casa": "Treino em casa",
  "em casa": "Treino em casa",
  "sem equipamento": "Sem equipamentos",
  "sem equipamentos": "Sem equipamentos",
  "peso corporal": "Sem equipamentos",
  "rotina matinal": "Rotina matinal",
  manha: "Rotina matinal",
  sedentarismo: "Sedentarismo",
  sedentario: "Sedentarismo",
  sedentaria: "Sedentarismo",
  estabilidade: "Estabilidade corporal",
  "estabilidade corporal": "Estabilidade corporal",
  equilibrio: "Estabilidade corporal",
  "fortalecimento geral": "Fortalecimento geral",
  "fortalecer corpo": "Fortalecimento geral",
  "corpo inteiro": "Fortalecimento geral",
  yoga: "Yoga",
  "fazer yoga": "Yoga",
  "quero fazer yoga": "Yoga",
  "saudacao ao sol": "Yoga",
  "surya namaskar": "Yoga",
  flexibilidade: "Flexibilidade",
  "melhorar flexibilidade": "Flexibilidade",
  "alongar corpo todo": "Flexibilidade",
  "alongar o corpo todo": "Flexibilidade",
  sop: "SOP",
  "ovario policistico": "SOP",
  "ovarios policisticos": "SOP",
  "tenho sop": "SOP",
  hormonios: "Equilibrio hormonal",
  hormonal: "Equilibrio hormonal",
  "equilibrio hormonal": "Equilibrio hormonal",
  ciclo: "Equilibrio hormonal",
  colica: "Equilibrio hormonal",
  "colica leve": "Equilibrio hormonal",
  pelve: "Abertura de quadril",
  pelvica: "Abertura de quadril",
  virilha: "Abertura de quadril",
  adutores: "Abertura de quadril",
  "abrir quadril": "Abertura de quadril",
  "abertura de quadril": "Abertura de quadril",
  "mobilidade do quadril": "Abertura de quadril",
  espacate: "Abertura de quadril",
  "espacate lateral": "Abertura de quadril"
};

type ExerciseSummary = {
  title: string;
  duration: number;
  description: string;
  steps: string[];
};

const baseExerciseBySlug: Record<string, ExerciseSummary> = {
  "pausa-sem-tela": {
    title: "Pausa sem tela",
    duration: 5,
    description: "Reduza estimulos por alguns minutos antes de tentar produzir ou responder notificacoes.",
    steps: [
      "Afaste o celular ou vire a tela para baixo.",
      "Olhe para um ponto distante por alguns ciclos de respiracao.",
      "Escolha uma unica proxima acao pequena.",
      "Volte apenas quando a pausa terminar."
    ]
  },
  "reset-de-foco": {
    title: "Reset de foco",
    duration: 7,
    description: "Organize a atencao com uma tarefa pequena e um comeco possivel.",
    steps: [
      "Anote tudo que esta competindo pela sua atencao.",
      "Escolha uma unica tarefa para os proximos minutos.",
      "Feche abas e notificacoes que nao ajudam agora.",
      "Comece pela menor parte da tarefa."
    ]
  },
  "respiracao-4-4-6": {
    title: "Respiracao 4-4-6",
    duration: 3,
    description: "Use uma respiracao curta para reduzir a urgencia antes de decidir o proximo passo.",
    steps: [
      "Inspire pelo nariz por 4 segundos.",
      "Segure o ar com suavidade por 4 segundos.",
      "Expire lentamente por 6 segundos.",
      "Repita por 3 minutos, sem forcar."
    ]
  },
  "pausa-de-energia": {
    title: "Pausa de energia",
    duration: 5,
    description: "Comece por energia basica: agua, postura e movimento leve, sem cobranca.",
    steps: [
      "Beba agua com calma.",
      "Solte ombros, mandibula e pescoco.",
      "Respire de pe ou sentado por 1 minuto.",
      "Escolha uma tarefa simples ou uma pausa real."
    ]
  },
  "ativacao-leve-3-minutos": {
    title: "Ativacao leve de 3 minutos",
    duration: 3,
    description: "Acorde o corpo com movimentos pequenos e seguros.",
    steps: [
      "Levante devagar e ajuste a postura.",
      "Movimente ombros e bracos por 1 minuto.",
      "Faca marcha parada leve por 1 minuto.",
      "Finalize respirando e percebendo sua energia."
    ]
  },
  "ritual-sono-sem-tela": {
    title: "Ritual de sono sem tela",
    duration: 10,
    description: "Prepare uma transicao mais calma para a noite, com menos estimulo visual.",
    steps: [
      "Afaste telas por alguns minutos.",
      "Reduza luzes e sons fortes.",
      "Anote uma pendencia para amanha.",
      "Faca respiracao lenta antes de deitar."
    ]
  },
  "respiracao-antes-de-dormir": {
    title: "Respiracao antes de dormir",
    duration: 3,
    description: "Desacelere o corpo com uma respiracao suave antes de descansar.",
    steps: [
      "Sente-se ou deite com apoio.",
      "Inspire devagar e sem pressa.",
      "Expire por mais tempo do que inspirou.",
      "Volte ao ritmo natural se ficar desconfortavel."
    ]
  },
  "gratidao-rapida": {
    title: "Gratidao rapida",
    duration: 3,
    description: "Reconheca um ponto pequeno que ainda pode ser visto, sem forcar alegria.",
    steps: [
      "Pense em algo simples que ajudou hoje.",
      "Escreva uma frase concreta.",
      "Nomeie o que isso trouxe de util.",
      "Escolha uma acao gentil para as proximas horas."
    ]
  },
  "checkin-emocional-guiado": {
    title: "Check-in emocional guiado",
    duration: 3,
    description: "Nomeie seu estado com gentileza antes de tentar mudar qualquer coisa.",
    steps: [
      "Pergunte: como eu estou agora?",
      "Escolha uma palavra simples para esse estado.",
      "Observe onde isso aparece no corpo.",
      "Feche com uma frase de cuidado possivel."
    ]
  }
};

function minutesFromDuration(duration: string) {
  const match = duration.match(/(\d+)/);
  return match ? Number(match[1]) : 5;
}

function catalogExerciseBySlug(): Record<string, ExerciseSummary> {
  const focus = allFocusExercises.map((item) => [item.slug, {
    title: item.title,
    duration: minutesFromDuration(item.duration),
    description: item.purpose,
    steps: item.instructions
  }] as const);
  const energy = energyMissions.map((item) => [item.slug, {
    title: item.title,
    duration: minutesFromDuration(item.duration),
    description: item.purpose,
    steps: item.steps
  }] as const);
  const sleep = sleepMissions.map((item) => [item.slug, {
    title: item.title,
    duration: minutesFromDuration(item.duration),
    description: item.purpose,
    steps: item.steps
  }] as const);
  const happiness = happinessMissions.map((item) => [item.slug, {
    title: item.title,
    duration: minutesFromDuration(item.duration),
    description: item.purpose,
    steps: item.steps
  }] as const);
  const sleepSupport = sleepSupportMovements.map((item) => [item.id, {
    title: item.title,
    duration: Math.max(1, Math.round(item.durationSeconds / 60)),
    description: item.pageText,
    steps: item.stepByStep
  }] as const);
  const coreConditioning = coreConditioningMovements.map((item) => [item.id, {
    title: item.nome_pt,
    duration: Math.max(1, Math.round(item.durationSeconds / 60)),
    description: item.descricao,
    steps: item.passo_a_passo
  }] as const);
  const plannedReferences = plannedReferenceMovements.map((item) => [item.id, {
    title: item.nome_pt,
    duration: Math.max(1, Math.round(item.durationSeconds / 60)),
    description: item.descricao,
    steps: item.passo_a_passo
  }] as const);
  const stretches = stretchingExercises.map((item) => [item.id, {
    title: item.title,
    duration: minutesFromDuration(item.duration),
    description: item.objective,
    steps: item.instructions
  }] as const);

  return Object.fromEntries([...focus, ...energy, ...sleep, ...happiness, ...coreConditioning, ...plannedReferences, ...sleepSupport, ...stretches]);
}

const exerciseBySlug: Record<string, ExerciseSummary> = {
  ...baseExerciseBySlug,
  ...catalogExerciseBySlug()
};

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ");
}

function unique<T>(items: T[]) {
  return Array.from(new Set(items));
}

function normalizeManualTag(tag: string): CheckinTag | null {
  const clean = normalize(tag).trim().replace(/\s+/g, " ");
  const byOption = checkinTagOptions.find((option) => normalize(option) === clean);
  if (byOption) return byOption;
  return tagAliases[clean] || null;
}

export function normalizeManualTags(tags: string[] = []): CheckinTag[] {
  return unique(tags.map(normalizeManualTag).filter(Boolean) as CheckinTag[]);
}

export function detectObservationTags(text?: string | null): CheckinTag[] {
  const clean = normalize(text || "");
  if (!clean.trim()) return [];
  const found: CheckinTag[] = [];

  for (const [keyword, tag] of Object.entries(tagAliases)) {
    if (new RegExp(`\\b${keyword}\\b`, "i").test(clean)) found.push(tag);
  }

  if (clean.includes("mente acelerada") || clean.includes("pensando demais")) found.push("Preocupacao");
  if (clean.includes("sem energia") || clean.includes("corpo pesado")) found.push("Cansaco");
  if (clean.includes("dormi mal") || clean.includes("noite ruim") || clean.includes("acordei cansado")) found.push("Sono");
  if (clean.includes("sem foco") || clean.includes("sem concentracao")) found.push("Sem foco");
  if (clean.includes("sem vontade") || clean.includes("nada anima")) found.push("Sem vontade");
  if (clean.includes("tela a noite") || clean.includes("celular na cama")) found.push("Sono", "Telas");
  if (clean.includes("muito tempo sentado") || clean.includes("horas sentado")) found.push("Muito tempo sentado");
  if (clean.includes("dor lombar") || clean.includes("lombar doendo")) found.push("Dor lombar");
  if (clean.includes("dor no ombro") || clean.includes("ombro dolorido") || clean.includes("ombro pesado")) found.push("Dor no ombro");
  if (clean.includes("costas superiores") || clean.includes("parte superior das costas") || clean.includes("dor entre escapulas")) found.push("Costas superiores");
  if (clean.includes("dor de cabeca") || clean.includes("cefaleia tensional") || clean.includes("cabeca pesada")) found.push("Dor de cabeca tensional");
  if (clean.includes("dor no pescoco") || clean.includes("pescoco travado") || clean.includes("tensao cervical")) found.push("Dor no pescoco");
  if (clean.includes("dor no joelho") || clean.includes("joelho dolorido") || clean.includes("joelhos cansados")) found.push("Dor no joelho");
  if (clean.includes("dor no quadril") || clean.includes("ciatica") || clean.includes("quadril incomoda")) found.push("Quadril ou ciatica");
  if (clean.includes("sinusite") || clean.includes("congestao") || clean.includes("nariz entupido")) found.push("Sinusite ou congestao");
  if (clean.includes("relaxar antes de dormir") || clean.includes("quero relaxar") || clean.includes("quero descansar")) found.push("Relaxamento");
  if (clean.includes("pernas pesadas") || clean.includes("panturrilha pesada")) found.push("Pernas pesadas");
  if (clean.includes("baixa mobilidade") || clean.includes("mobilidade limitada")) found.push("Baixa mobilidade");
  if (clean.includes("punho cansado") || clean.includes("maos cansadas")) found.push("Maos e punhos cansados");
  if (clean.includes("energia acumulada") || clean.includes("preciso gastar energia")) found.push("Energia acumulada");
  if (clean.includes("dificuldade para dormir") || clean.includes("nao consigo dormir")) found.push("Dificuldade para dormir");
  if (clean.includes("fortalecer abdomen") || clean.includes("fortalecer abdominal") || clean.includes("fortalecer core") || clean.includes("trincar abdomen")) found.push("Fortalecer core");
  if (clean.includes("emagrecer") || clean.includes("perder gordura") || clean.includes("perder barriga")) found.push("Perder gordura corporal");
  if (clean.includes("melhorar condicionamento") || clean.includes("ganhar disposicao") || clean.includes("mais disposicao")) found.push("Condicionamento");
  if (clean.includes("fortalecer pernas") || clean.includes("fortalecer gluteos") || clean.includes("pernas e gluteos")) found.push("Pernas e gluteos");
  if (clean.includes("treino em casa") || clean.includes("exercicio em casa")) found.push("Treino em casa");
  if (clean.includes("sem equipamento") || clean.includes("sem equipamentos") || clean.includes("peso corporal")) found.push("Sem equipamentos");
  if (clean.includes("rotina matinal") || clean.includes("treino de manha")) found.push("Rotina matinal");
  if (clean.includes("sedentarismo") || clean.includes("muito sedentario") || clean.includes("muito sedentaria")) found.push("Sedentarismo");
  if (clean.includes("estabilidade corporal") || clean.includes("equilibrio") || clean.includes("mais estabilidade")) found.push("Estabilidade corporal");
  if (clean.includes("fortalecimento geral") || clean.includes("fortalecer corpo") || clean.includes("corpo inteiro")) found.push("Fortalecimento geral");
  if (clean.includes("quero fazer yoga") || clean.includes("saudacao ao sol") || clean.includes("surya namaskar") || clean.includes("yoga")) found.push("Yoga");
  if (clean.includes("flexibilidade") || clean.includes("alongar o corpo todo") || clean.includes("alongar corpo todo")) found.push("Flexibilidade");
  if (clean.includes("sop") || clean.includes("ovario policistico") || clean.includes("ovarios policisticos")) found.push("SOP");
  if (clean.includes("equilibrio hormonal") || clean.includes("hormonios") || clean.includes("colica leve") || clean.includes("ciclo menstrual")) found.push("Equilibrio hormonal");
  if (clean.includes("abrir quadril") || clean.includes("abertura de quadril") || clean.includes("mobilidade do quadril") || clean.includes("virilha") || clean.includes("adutores") || clean.includes("espacate")) found.push("Abertura de quadril");

  return unique(found);
}

function add(scores: Record<CheckinArea, number>, area: CheckinArea, value: number) {
  scores[area] += value;
}

function lowScoreWeight(score: number) {
  if (score <= 1) return 5;
  if (score <= 2) return 4;
  if (score === 3) return 1;
  return 0;
}

function addTagWeights(scores: Record<CheckinArea, number>, tags: CheckinTag[], weight = 1) {
  for (const tag of tags) {
    if (tag === "Telas") {
      add(scores, "FOCUS", 3 * weight);
      add(scores, "SLEEP", 1);
    }
    if (tag === "Trabalho" || tag === "Estudo" || tag === "Sem foco") add(scores, "FOCUS", 3 * weight);
    if (tag === "Sono" || tag === "Dificuldade para dormir") add(scores, "SLEEP", 3 * weight);
    if (tag === "Sonolencia") {
      add(scores, "ENERGY", 3 * weight);
      add(scores, "SLEEP", 1);
    }
    if (tag === "Cansaco") {
      add(scores, "ENERGY", 3 * weight);
      add(scores, "SLEEP", 1);
    }
    if (tag === "Preocupacao" || tag === "Ansiedade") {
      add(scores, "FOCUS", 2 * weight);
      add(scores, "SLEEP", 1);
    }
    if (tag === "Agitacao" || tag === "Energia acumulada") add(scores, "ENERGY", 3 * weight);
    if (tag === "Relacionamentos" || tag === "Sem vontade") add(scores, "HAPPINESS", 3 * weight);
    if (tag === "Relaxamento") add(scores, "SLEEP", 2 * weight);
    if (tag === "Sinusite ou congestao") add(scores, "SLEEP", 3 * weight);
    if (tag === "Dor no ombro" || tag === "Costas superiores" || tag === "Dor de cabeca tensional" || tag === "Quadril ou ciatica" || tag === "Dor no joelho") {
      add(scores, "ENERGY", 2 * weight);
      add(scores, "SLEEP", 2 * weight);
    }
    if (tag === "Corpo tenso" || tag === "Dor no pescoco" || tag === "Tensao nos ombros" || tag === "Lombar rigida" || tag === "Dor lombar" || tag === "Pernas pesadas" || tag === "Baixa mobilidade" || tag === "Muito tempo sentado" || tag === "Maos e punhos cansados") add(scores, "ENERGY", 3 * weight);
    if (tag === "Fortalecer core" || tag === "Perder gordura corporal" || tag === "Condicionamento" || tag === "Pernas e gluteos" || tag === "Treino em casa" || tag === "Sem equipamentos" || tag === "Rotina matinal" || tag === "Sedentarismo" || tag === "Estabilidade corporal" || tag === "Fortalecimento geral") {
      add(scores, "ENERGY", 3 * weight);
    }
    if (tag === "Yoga" || tag === "Flexibilidade" || tag === "Abertura de quadril") add(scores, "ENERGY", 3 * weight);
    if (tag === "SOP" || tag === "Equilibrio hormonal") {
      add(scores, "ENERGY", 2 * weight);
      add(scores, "SLEEP", 1 * weight);
      add(scores, "HAPPINESS", 1 * weight);
    }
  }
}

function addHistoryWeights(scores: Record<CheckinArea, number>, input: CheckinRefinementInput) {
  const recent = (input.recentCheckins || []).slice(0, 3);
  if (recent.length < 2) return;

  const areaCount: Record<CheckinArea, number> = { FOCUS: 0, ENERGY: 0, SLEEP: 0, HAPPINESS: 0 };
  for (const item of recent) {
    const area = item.primaryArea as CheckinArea;
    if (areaCount[area] !== undefined) areaCount[area] += 1;
  }
  for (const [area, count] of Object.entries(areaCount) as [CheckinArea, number][]) {
    if (count >= 2) add(scores, area, 3);
  }

  const poorSleepPattern = recent.filter((item) => item.sleepScore <= 2).length >= 2;
  const mediumSleepToday = input.sleepScore <= 3;
  if (poorSleepPattern && mediumSleepToday) add(scores, "SLEEP", 5);

  const lowEnergyPattern = recent.filter((item) => item.energyScore <= 2).length >= 2;
  if (lowEnergyPattern && input.energyScore <= 3) add(scores, "ENERGY", 3);

  const focusPattern = recent.filter((item) => item.focusScore <= 2).length >= 2;
  if (focusPattern && input.focusScore <= 3) add(scores, "FOCUS", 3);
}

function has(tags: CheckinTag[], tag: CheckinTag) {
  return tags.includes(tag);
}

function hasSleepSupportIntent(input: CheckinRefinementInput, tags: CheckinTag[]) {
  const text = normalize(input.journalText || "");
  return (
    has(tags, "Sono") ||
    has(tags, "Dificuldade para dormir") ||
    has(tags, "Relaxamento") ||
    text.includes("dormir") ||
    text.includes("sono") ||
    text.includes("deitar") ||
    text.includes("descans") ||
    text.includes("repous") ||
    text.includes("relax")
  );
}

function matchesAny(haystack: string, values: string[]) {
  return values.some((value) => {
    const clean = normalize(value);
    return clean.length >= 3 && haystack.includes(clean);
  });
}

function hasSleepSupportSignal(input: CheckinRefinementInput, tags: CheckinTag[]) {
  const haystack = normalize([input.journalText || "", ...tags].join(" "));
  return sleepSupportMovements.some((movement) =>
    matchesAny(haystack, [
      ...movement.userKeywords,
      ...movement.relatedSymptoms,
      ...movement.bodyRegions,
      ...movement.recommendationTags,
      ...movement.recommendWhen
    ])
  );
}

function sleepSupportScore(movement: (typeof sleepSupportMovements)[number], input: CheckinRefinementInput, tags: CheckinTag[]) {
  const haystack = normalize([input.journalText || "", ...tags].join(" "));
  let score = 0;

  if (matchesAny(haystack, movement.safetyFlags)) return { score: Number.NEGATIVE_INFINITY, blocked: true };
  if (matchesAny(haystack, movement.userKeywords)) score += 5;
  if (matchesAny(haystack, movement.relatedSymptoms)) score += 5;
  if (matchesAny(haystack, movement.bodyRegions)) score += 4;
  if (matchesAny(haystack, [movement.physicalGoal, movement.emotionalGoal])) score += 3;
  if (matchesAny(haystack, [movement.category, movement.subcategory, ...movement.recommendationTags])) score += 2;
  if ((input.sleepScore <= 3 || input.stressScore >= 4 || input.energyScore <= 2) && ["VERY_LIGHT", "LIGHT"].includes(movement.intensity)) score += 2;
  if (movement.equipment.some((item) => normalize(item).includes("nenhum"))) score += 1;
  if (matchesAny(haystack, unique([...movement.contraindications, ...movement.avoidWhen]))) score -= 10;

  return { score, blocked: false };
}

function chooseSleepSupportExercise(input: CheckinRefinementInput, tags: CheckinTag[]) {
  const wantsRest = hasSleepSupportIntent(input, tags);
  if (!wantsRest && !hasSleepSupportSignal(input, tags)) return null;

  const scored = sleepSupportMovements
    .filter((movement) => isCatalogEntryActive("EXERCISE_INSTRUCTION", movement.id))
    .map((movement) => ({ movement, ...sleepSupportScore(movement, input, tags) }))
    .filter((item) => !item.blocked)
    .sort((a, b) => b.score - a.score);

  const best = scored[0];
  if (!best || best.score < 5) return null;
  return best.movement.id;
}

const coreConditioningIntentTags: CheckinTag[] = [
  "Fortalecer core",
  "Perder gordura corporal",
  "Condicionamento",
  "Pernas e gluteos",
  "Treino em casa",
  "Sem equipamentos",
  "Rotina matinal",
  "Sedentarismo",
  "Estabilidade corporal",
  "Fortalecimento geral"
];

function hasCoreConditioningIntent(input: CheckinRefinementInput, tags: CheckinTag[]) {
  const haystack = normalize([input.journalText || "", ...tags].join(" "));
  return (
    tags.some((tag) => coreConditioningIntentTags.includes(tag)) ||
    coreConditioningMovements.some((movement) =>
      matchesAny(haystack, [
        movement.nome_pt,
        movement.nome_original,
        movement.collectionId,
        movement.collectionTitle,
        ...movement.palavras_chave,
        ...movement.sinonimos,
        ...movement.tags,
        ...movement.quando_recomendar,
        ...movement.objetivos_secundarios,
        ...movement.regioes_corporais,
        ...movement.grupos_musculares
      ])
    )
  );
}

function hasShortTimeIntent(haystack: string) {
  return ["rapido", "curto", "3 minutos", "5 minutos", "pouco tempo", "sem tempo"].some((term) => haystack.includes(term));
}

function coreConditioningScore(movement: (typeof coreConditioningMovements)[number], input: CheckinRefinementInput, tags: CheckinTag[]) {
  const haystack = normalize([input.journalText || "", ...tags].join(" "));
  const recentInstructionSlugs = input.recentInstructionSlugs || [];
  let score = 0;

  if (matchesAny(haystack, movement.safetyFlags)) return { score: Number.NEGATIVE_INFINITY, blocked: true };
  if ((haystack.includes("gravidez") || haystack.includes("gestante")) && movement.contraindicacoes.some((item) => normalize(item).includes("gravidez"))) {
    return { score: Number.NEGATIVE_INFINITY, blocked: true };
  }

  if (matchesAny(haystack, movement.palavras_chave)) score += 5;
  if (matchesAny(haystack, movement.sinonimos)) score += 5;
  if (matchesAny(haystack, movement.tags)) score += 4;
  if (matchesAny(haystack, movement.quando_recomendar)) score += 4;
  if (matchesAny(haystack, movement.objetivos_secundarios)) score += 3;
  if (matchesAny(haystack, movement.regioes_corporais)) score += 3;
  if (matchesAny(haystack, movement.grupos_musculares)) score += 3;
  if (matchesAny(haystack, [movement.objetivo_fisico, movement.objetivo_emocional, movement.objetivo_principal])) score += 3;

  const movementText = normalize(movement.searchText);
  if (tags.includes("Fortalecer core") && matchesAny(movementText, ["core", "abdomen", "obliquos"])) score += 5;
  if (tags.includes("Pernas e gluteos") && matchesAny(movementText, ["pernas", "gluteos", "quadril"])) score += 5;
  if (tags.includes("Condicionamento") && ["MODERATE", "LIGHT"].includes(movement.intensidade)) score += 3;
  if (tags.includes("Perder gordura corporal") && matchesAny(movementText, ["condicionamento", "pernas", "corpo inteiro", "fortalecimento geral"])) score += 3;
  if (tags.includes("Sem equipamentos") && movement.equipamentos.some((item) => normalize(item).includes("nenhum"))) score += 3;
  if (tags.includes("Treino em casa")) score += 2;
  if (tags.includes("Rotina matinal") && movement.durationSeconds <= 300) score += 2;
  if (tags.includes("Sedentarismo") && movement.levelNumber <= 2) score += 3;
  if (tags.includes("Estabilidade corporal") && matchesAny(movementText, ["estabilidade", "equilibrio", "prancha", "core"])) score += 4;
  if (tags.includes("Fortalecimento geral")) score += movement.levelNumber <= 3 ? 3 : 1;

  if (hasShortTimeIntent(haystack)) score += movement.durationSeconds <= 240 ? 2 : -1;
  if (input.userLevel && movement.levelNumber > input.userLevel) score -= (movement.levelNumber - input.userLevel) * 3;
  if (recentInstructionSlugs.includes(movement.id)) score -= 3;
  if ((input.energyScore <= 2 || input.sleepScore <= 2) && movement.intensidade === "MODERATE") score -= 4;
  if (input.stressScore >= 4 && movement.intensidade === "MODERATE") score -= 2;
  if (input.energyScore >= 4 && movement.intensidade === "MODERATE") score += 2;
  if (matchesAny(haystack, unique([...movement.contraindicacoes, ...movement.quando_evitar]))) score -= 20;

  return { score, blocked: false };
}

function chooseCoreConditioningExercise(input: CheckinRefinementInput, tags: CheckinTag[]) {
  if (!hasCoreConditioningIntent(input, tags)) return null;

  const scored = coreConditioningMovements
    .filter((movement) => isCatalogEntryActive("EXERCISE_INSTRUCTION", movement.id))
    .map((movement) => ({ movement, ...coreConditioningScore(movement, input, tags) }))
    .filter((item) => !item.blocked)
    .sort((a, b) => b.score - a.score || a.movement.levelNumber - b.movement.levelNumber);

  const best = scored[0];
  if (!best || best.score < 5) return null;
  return best.movement.id;
}

const plannedReferenceIntentTags: CheckinTag[] = [
  "Yoga",
  "Flexibilidade",
  "SOP",
  "Equilibrio hormonal",
  "Abertura de quadril",
  "Rotina matinal",
  "Relaxamento",
  "Mobilidade de coluna",
  "Costas rigidas",
  "Conforto nas costas",
  "Pes cansados",
  "Fascia plantar",
  "Chakras",
  "Respiracao consciente"
];

function hasPlannedReferenceIntent(input: CheckinRefinementInput, tags: CheckinTag[]) {
  const haystack = normalize([input.journalText || "", ...tags].join(" "));
  return (
    tags.some((tag) => plannedReferenceIntentTags.includes(tag)) ||
    plannedReferenceMovements.some((movement) =>
      matchesAny(haystack, [
        movement.nome_pt,
        movement.nome_original,
        movement.collectionId,
        movement.collectionTitle,
        ...movement.palavras_chave,
        ...movement.sinonimos,
        ...movement.tags,
        ...movement.quando_recomendar,
        ...movement.objetivos_secundarios,
        ...movement.regioes_corporais,
        ...movement.grupos_musculares,
        movement.objetivo_fisico,
        movement.objetivo_emocional
      ])
    )
  );
}

function plannedReferenceScore(movement: (typeof plannedReferenceMovements)[number], input: CheckinRefinementInput, tags: CheckinTag[]) {
  const haystack = normalize([input.journalText || "", ...tags].join(" "));
  const recentInstructionSlugs = input.recentInstructionSlugs || [];
  const movementText = normalize(movement.searchText);
  let score = 0;

  if (movement.id === "ref_011_mov_26") return { score: Number.NEGATIVE_INFINITY, blocked: true };
  if (matchesAny(haystack, movement.safetyFlags)) return { score: Number.NEGATIVE_INFINITY, blocked: true };
  if ((haystack.includes("gravidez") || haystack.includes("gestante")) && movement.safetyFlags.some((item) => normalize(item).includes("gravidez"))) {
    return { score: Number.NEGATIVE_INFINITY, blocked: true };
  }
  const localizedPainBlocks = [
    ["dor no joelho", "joelho"],
    ["joelho dolorido", "joelho"],
    ["dor no quadril", "quadril"],
    ["dor na virilha", "virilha"],
    ["dor lombar", "lombar"],
    ["dor no ombro", "ombro"],
    ["dor no punho", "punho"]
  ];
  if (localizedPainBlocks.some(([pain, region]) => haystack.includes(pain) && movementText.includes(region))) {
    return { score: Number.NEGATIVE_INFINITY, blocked: true };
  }

  if (matchesAny(haystack, movement.palavras_chave)) score += 5;
  if (matchesAny(haystack, movement.sinonimos)) score += 4;
  if (matchesAny(haystack, movement.tags)) score += 4;
  if (matchesAny(haystack, movement.quando_recomendar)) score += 4;
  if (matchesAny(haystack, movement.objetivos_secundarios)) score += 3;
  if (matchesAny(haystack, movement.regioes_corporais)) score += 3;
  if (matchesAny(haystack, movement.grupos_musculares)) score += 2;
  if (matchesAny(haystack, [movement.objetivo_fisico, movement.objetivo_emocional, movement.objetivo_principal])) score += 3;

  if (tags.includes("Yoga") && movement.collectionId !== "abertura_quadril_flexibilidade_lateral") score += 4;
  if (tags.includes("Flexibilidade") && matchesAny(movementText, ["flexibilidade", "alongamento", "posterior", "mobilidade"])) score += 4;
  if (tags.includes("SOP") && movement.referenceId === "ref_004") score += 7;
  if (tags.includes("Equilibrio hormonal") && movement.referenceId === "ref_004") score += 6;
  if (tags.includes("Abertura de quadril") && matchesAny(movementText, ["quadril", "pelve", "virilha", "adutores", "abertura lateral"])) score += 6;
  if (tags.includes("Rotina matinal") && ["ref_003", "ref_008"].includes(movement.referenceId)) score += 4;
  if (tags.includes("Relaxamento") && matchesAny(movementText, ["relaxamento", "respiracao", "descanso", "estresse"])) score += 3;
  if (tags.includes("Fortalecer core") && matchesAny(movementText, ["core", "prancha", "forca"])) score += 3;
  if (tags.includes("Sem equipamentos") && movement.equipamentos.some((item) => normalize(item).includes("nenhum"))) score += 2;
  if (tags.includes("Mobilidade de coluna") && matchesAny(movementText, ["coluna", "costas", "lombar", "toracica"])) score += 6;
  if (tags.includes("Costas rigidas") && matchesAny(movementText, ["coluna", "costas", "lombar", "mobilidade"])) score += 5;
  if (tags.includes("Conforto nas costas") && ["ref_007", "ref_010"].includes(movement.referenceId)) score += 6;
  if ((tags.includes("Pes cansados") || tags.includes("Fascia plantar")) && movement.referenceId === "ref_009") score += 8;
  if (tags.includes("Chakras") && movement.referenceId === "ref_011") score += 6;
  if (tags.includes("Respiracao consciente") && matchesAny(movementText, ["respiracao", "pranayama", "consciencia corporal", "relaxamento"])) score += 5;

  if (hasShortTimeIntent(haystack)) score += movement.durationSeconds <= 300 ? 2 : -1;
  if (input.userLevel && movement.levelNumber > input.userLevel) score -= (movement.levelNumber - input.userLevel) * 3;
  if (recentInstructionSlugs.includes(movement.id)) score -= 3;
  if ((input.energyScore <= 2 || input.sleepScore <= 2) && movement.intensidade === "MODERATE") score -= 4;
  if (input.stressScore >= 4 && movement.intensidade === "MODERATE") score -= 2;
  if (input.stressScore >= 4 && ["VERY_LIGHT", "LIGHT"].includes(movement.intensidade)) score += 2;
  if (matchesAny(haystack, unique([...movement.contraindicacoes, ...movement.quando_evitar]))) score -= 20;

  return { score, blocked: false };
}

function choosePlannedReferenceExercise(input: CheckinRefinementInput, tags: CheckinTag[]) {
  if (!hasPlannedReferenceIntent(input, tags)) return null;

  const scored = plannedReferenceMovements
    .filter((movement) => isCatalogEntryActive("EXERCISE_INSTRUCTION", movement.id))
    .map((movement) => ({ movement, ...plannedReferenceScore(movement, input, tags) }))
    .filter((item) => !item.blocked)
    .sort((a, b) => b.score - a.score || a.movement.levelNumber - b.movement.levelNumber);

  const best = scored[0];
  if (!best || best.score < 5) return null;
  return best.movement.id;
}

function routeStress(scores: Record<CheckinArea, number>, input: CheckinRefinementInput, tags: CheckinTag[]) {
  if (input.stressScore < 4) return;
  let routed = false;
  if (input.focusScore <= 3 || has(tags, "Telas") || has(tags, "Sem foco") || has(tags, "Trabalho") || has(tags, "Estudo") || has(tags, "Preocupacao")) {
    add(scores, "FOCUS", 3);
    routed = true;
  }
  if (input.sleepScore <= 3 || has(tags, "Sono") || has(tags, "Dificuldade para dormir")) {
    add(scores, "SLEEP", 3);
    routed = true;
  }
  if (input.energyScore <= 3 || has(tags, "Cansaco") || has(tags, "Corpo tenso") || has(tags, "Agitacao") || has(tags, "Energia acumulada")) {
    add(scores, "ENERGY", 2);
    routed = true;
  }
  if (input.moodScore <= 3 || has(tags, "Sem vontade") || has(tags, "Relacionamentos")) {
    add(scores, "HAPPINESS", 2);
    routed = true;
  }
  if (!routed) add(scores, "FOCUS", 2);
}

function chooseArea(scores: Record<CheckinArea, number>, input: CheckinRefinementInput): CheckinArea {
  const entries = Object.entries(scores) as [CheckinArea, number][];
  const highest = Math.max(...entries.map((entry) => entry[1]));

  if (highest === 0 && input.focusScore >= 4 && input.moodScore >= 4 && input.energyScore >= 4 && input.sleepScore >= 4 && input.stressScore <= 2) {
    return "HAPPINESS";
  }

  const tied = entries.filter((entry) => entry[1] === highest).map((entry) => entry[0]);
  if (tied.length === 1) return tied[0];

  const safetyOrder: CheckinArea[] = [];
  if (input.sleepScore <= 2) safetyOrder.push("SLEEP");
  if (input.energyScore <= 2) safetyOrder.push("ENERGY");
  if (input.stressScore >= 4 && input.focusScore <= 3) safetyOrder.push("FOCUS");
  if (input.stressScore >= 4 && input.sleepScore <= 3) safetyOrder.push("SLEEP");
  if (input.focusScore <= 2) safetyOrder.push("FOCUS");
  if (input.moodScore <= 2) safetyOrder.push("HAPPINESS");
  safetyOrder.push("FOCUS", "ENERGY", "SLEEP", "HAPPINESS");

  return safetyOrder.find((area) => tied.includes(area)) || tied[0];
}

function chooseExercise(area: CheckinArea, input: CheckinRefinementInput, tags: CheckinTag[]) {
  const sleepSupportExercise = chooseSleepSupportExercise(input, tags);
  const coreConditioningExercise = chooseCoreConditioningExercise(input, tags);
  const plannedReferenceExercise = choosePlannedReferenceExercise(input, tags);
  const explicitPlannedReferenceIntent = tags.some((tag) => plannedReferenceIntentTags.includes(tag));
  const explicitCoreIntent = tags.some((tag) => ["Fortalecer core", "Perder gordura corporal", "Condicionamento", "Pernas e gluteos", "Treino em casa", "Sem equipamentos", "Sedentarismo", "Estabilidade corporal", "Fortalecimento geral"].includes(tag));
  const explicitCoreStrengthIntent = tags.some((tag) => ["Fortalecer core", "Perder gordura corporal", "Pernas e gluteos", "Estabilidade corporal", "Fortalecimento geral"].includes(tag));
  const plannedMovement = plannedReferenceExercise ? plannedReferenceMovementById[plannedReferenceExercise] : null;
  if (area === "FOCUS" && !explicitPlannedReferenceIntent && !explicitCoreIntent) {
    if (has(tags, "Telas")) return "pausa-sem-tela";
    if (has(tags, "Sem foco")) return "um-minuto-de-foco";
  }
  if (sleepSupportExercise && (hasSleepSupportIntent(input, tags) || (!coreConditioningExercise && !plannedReferenceExercise))) return sleepSupportExercise;
  if (plannedMovement?.referenceId === "ref_008" && tags.includes("Rotina matinal") && !explicitCoreStrengthIntent) return plannedReferenceExercise;
  if (plannedReferenceExercise && explicitPlannedReferenceIntent && !explicitCoreIntent) return plannedReferenceExercise;
  if (coreConditioningExercise) return coreConditioningExercise;
  if (plannedReferenceExercise) return plannedReferenceExercise;
  if (sleepSupportExercise) return sleepSupportExercise;

  if (area === "FOCUS") {
    if (has(tags, "Telas")) return "pausa-sem-tela";
    if (input.stressScore >= 4 || has(tags, "Preocupacao") || has(tags, "Ansiedade")) return "respiracao-consciente-foco";
    if (has(tags, "Sem foco") || input.focusScore <= 2) return "um-minuto-de-foco";
    return "contagem-mental-direta-reversa";
  }
  if (area === "ENERGY") {
    if (has(tags, "Maos e punhos cansados")) return "extensao-flexores-punho";
    if (has(tags, "Dor no pescoco")) return "inclinacao-lateral-pescoco";
    if (has(tags, "Tensao nos ombros")) return "deltoide-posterior-cruzado";
    if (has(tags, "Lombar rigida") || has(tags, "Dor lombar")) return "torcao-lombar-leve";
    if (has(tags, "Pernas pesadas") || has(tags, "Baixa mobilidade")) return "rotacao-tornozelos";
    if (has(tags, "Muito tempo sentado") || has(tags, "Corpo tenso")) return "flexor-quadril-ajoelhado";
    if (has(tags, "Agitacao") || has(tags, "Energia acumulada") || (input.stressScore >= 4 && input.energyScore >= 4)) return "lutas-sombra-descarga";
    if (has(tags, "Sonolencia")) return "caminhada-curta-luz-solar";
    return input.energyScore <= 2 || has(tags, "Cansaco") ? "alongamento-matinal" : "polichinelos-pausa-ativa";
  }
  if (area === "SLEEP") {
    if (has(tags, "Sonolencia")) return "agua-gelada-alerta";
    if (has(tags, "Telas")) return "higiene-do-sono";
    if (has(tags, "Dificuldade para dormir") || input.sleepScore <= 2) return "tecnica-4-7-8";
    return "respiracao-antes-de-dormir";
  }
  if (has(tags, "Relacionamentos")) return "atos-de-bondade";
  if (input.moodScore <= 2 || has(tags, "Sem vontade")) return "diario-de-gratidao";
  return "saborear-momentos";
}

function areaCopy(area: CheckinArea, input: CheckinRefinementInput, tags: CheckinTag[]) {
  const tagText = tags.length ? ` Tambem consideramos estes sinais: ${tags.join(", ")}.` : "";

  if (area === "FOCUS") {
    const screenCopy = has(tags, "Telas") ? " e mencao a telas" : "";
    return {
      summary: `Hoje seu check-in aponta mais para sobrecarga de atencao${screenCopy}. Antes de exigir produtividade, vale reduzir estimulos e criar clareza.`,
      recommendation: "Comece com uma pausa curta para diminuir interrupcoes e escolher uma unica proxima acao.",
      reason: `A escolha veio de foco ${input.focusScore}/5, estresse ${input.stressScore}/5 e sinais ligados a atencao.${tagText}`,
      encouragement: "Clareza pequena ja muda o primeiro passo."
    };
  }

  if (area === "ENERGY") {
    const spend = has(tags, "Agitacao") || has(tags, "Energia acumulada") || input.energyScore >= 4;
    const bodySignal = has(tags, "Corpo tenso") || has(tags, "Dor no pescoco") || has(tags, "Tensao nos ombros") || has(tags, "Lombar rigida") || has(tags, "Dor lombar") || has(tags, "Pernas pesadas") || has(tags, "Baixa mobilidade") || has(tags, "Muito tempo sentado") || has(tags, "Maos e punhos cansados");
    return {
      summary: spend ? "Hoje seu check-in aponta energia acumulada ou agitacao. A recomendacao e gastar energia com seguranca, sem buscar exaustao." : bodySignal ? "Hoje o corpo apareceu como sinal importante. A recomendacao e soltar tensao com alongamento ou mobilidade guiada." : "Hoje sua energia parece mais baixa. A recomendacao e dar energia com ativacao leve, sem transformar cuidado em cobranca.",
      recommendation: spend ? "Use movimento controlado, pausas e retorno gradual a respiracao." : bodySignal ? "Priorize uma ficha corporal relacionada ao ponto de tensao marcado." : "Priorize agua, postura, movimento simples e uma tarefa pequena depois da pausa.",
      reason: `A escolha veio de energia ${input.energyScore}/5, sono ${input.sleepScore}/5 e sinais de cansaco, agitacao ou corpo tenso.${tagText}`,
      encouragement: "Voce pode recomecar pequeno."
    };
  }

  if (area === "SLEEP") {
    const wake = has(tags, "Sonolencia");
    return {
      summary: wake ? "Hoje apareceu sonolencia diurna. A recomendacao e tirar sono de forma paliativa e segura, sem substituir descanso adequado." : "Hoje o sono parece ter sido o ponto mais sensivel. Vamos proteger energia e preparar uma transicao mais calma para a noite.",
      recommendation: wake ? "Use luz, agua, movimento ou respiracao curta para recuperar alerta temporario." : "Use uma pratica curta para reduzir estimulos e sinalizar descanso ao corpo.",
      reason: `A escolha veio de sono ${input.sleepScore}/5, estresse ${input.stressScore}/5 e sinais ligados a noite ou descanso.${tagText}`,
      encouragement: "Seu progresso nao precisa ser perfeito para ser real."
    };
  }

  return {
    summary: "Hoje seu humor parece pedir cuidado gentil. Vamos comecar por reconhecer algo pequeno, sem forcar alegria.",
    recommendation: "Escolha uma pratica breve de nomeacao emocional ou gratidao simples.",
    reason: `A escolha veio de humor ${input.moodScore}/5, energia ${input.energyScore}/5 e sinais ligados a vontade, relacao ou desanimo.${tagText}`,
    encouragement: "O cuidado de hoje pode ser simples e ainda assim real."
  };
}

function sleepSupportCopy(slug: string, input: CheckinRefinementInput, tags: CheckinTag[]) {
  const movement = sleepSupportMovementById[slug];
  const tagText = tags.length ? ` Tambem consideramos estes sinais: ${tags.join(", ")}.` : "";
  if (!movement) return areaCopy("SLEEP", input, tags);

  return {
    summary: `Hoje seu check-in trouxe sinais de sono, descanso ou desconforto corporal ligados a ${movement.bodyRegion}. A ideia e buscar uma posicao de apoio que pode favorecer conforto, sem prometer cura.`,
    recommendation: `${movement.title} pode ajudar a criar mais suporte corporal durante o repouso. Ajuste travesseiros sem forcar e interrompa se o desconforto aumentar.`,
    reason: `A escolha veio dos sinais informados e da busca por descanso ou sono.${tagText} Esta orientacao nao substitui orientacao profissional.`,
    encouragement: "Um ajuste pequeno de apoio ja pode tornar o descanso mais gentil."
  };
}

function coreConditioningCopy(slug: string, input: CheckinRefinementInput, tags: CheckinTag[]) {
  const movement = coreConditioningMovementById[slug];
  const tagText = tags.length ? ` Tambem consideramos estes sinais: ${tags.join(", ")}.` : "";
  if (!movement) return areaCopy("ENERGY", input, tags);

  return {
    summary: `Hoje seu check-in trouxe sinais ligados a movimento, energia ou fortalecimento. A sugestao vem da colecao ${movement.collectionTitle}, com foco em ${movement.objetivo_fisico}.`,
    recommendation: `${movement.nome_pt} combina com ${movement.quando_recomendar.slice(0, 3).join(", ")}. Mantenha a intensidade ${movement.intensidade.toLowerCase()} e pare se aparecer dor, tontura ou desconforto incomum.`,
    reason: `A escolha usou objetivo informado, intensidade, nivel, equipamento, historico recente e contraindicoes cadastradas.${tagText}`,
    encouragement: "Um bloco curto de movimento bem feito ja conta para voltar ao corpo."
  };
}

function plannedReferenceCopy(slug: string, input: CheckinRefinementInput, tags: CheckinTag[]) {
  const movement = plannedReferenceMovementById[slug];
  const tagText = tags.length ? ` Tambem consideramos estes sinais: ${tags.join(", ")}.` : "";
  if (!movement) return areaCopy("ENERGY", input, tags);
  const assetText = movement.imagePaths.length
    ? `com ${movement.imagePaths.length} imagem(ns) ja vinculada(s) e ${movement.missingImages.length} pendente(s)`
    : "com imagens ainda planejadas";

  return {
    summary: `Hoje seu check-in trouxe sinais compativeis com ${movement.collectionTitle}. A sugestao usa a REF oficial ${movement.referenceId}, ${assetText}.`,
    recommendation: `${movement.nome_pt} combina com ${movement.quando_recomendar.slice(0, 3).join(", ")}. Pratique em intensidade ${movement.intensidade.toLowerCase()}, sem forcar amplitude e interrompendo se houver dor ou tontura.`,
    reason: `A escolha usou nome, tags, objetivos, regiao corporal, intensidade, nivel, tempo, equipamento, historico recente e contraindicoes cadastradas.${tagText}`,
    encouragement: "A pratica pode nascer pequena: uma postura bem feita ja organiza o corpo."
  };
}

function activeRecommendationSlug(slug: string, area: CheckinArea) {
  if (isRecommendationSlugAvailable(slug)) return slug;
  const fallbacks = area === "ENERGY"
    ? ["postura-crianca", "ref_004_mov_04", "polichinelos-pausa-ativa"]
    : ["reset-de-foco"];
  return fallbacks.find(isRecommendationSlugAvailable) || "reset-de-foco";
}

function isRecommendationSlugAvailable(slug: string) {
  const isPhysical = Boolean(
    coreConditioningMovementById[slug] ||
    plannedReferenceMovementById[slug] ||
    sleepSupportMovementById[slug] ||
    stretchingExercises.some((exercise) => exercise.id === slug)
  );
  return !isPhysical || isCatalogEntryActive("EXERCISE_INSTRUCTION", slug);
}

export function refineCheckin(input: CheckinRefinementInput): CheckinRefinement {
  const manualTags = normalizeManualTags(input.manualTags || []);
  const detectedTags = detectObservationTags(input.journalText);
  const allTags = unique([...manualTags, ...detectedTags]);
  const scores: Record<CheckinArea, number> = {
    FOCUS: lowScoreWeight(input.focusScore),
    ENERGY: lowScoreWeight(input.energyScore),
    SLEEP: lowScoreWeight(input.sleepScore),
    HAPPINESS: lowScoreWeight(input.moodScore)
  };

  addTagWeights(scores, detectedTags, 1);
  addTagWeights(scores, manualTags, 2);
  addHistoryWeights(scores, input);
  routeStress(scores, input, allTags);

  const primaryArea = chooseArea(scores, input);
  const secondary = (Object.entries(scores) as [CheckinArea, number][])
    .filter(([area]) => area !== primaryArea)
    .sort((a, b) => b[1] - a[1])[0];
  const secondaryArea = secondary && secondary[1] >= 2 ? secondary[0] : undefined;
  const recommendedInstructionSlug = activeRecommendationSlug(
    chooseExercise(primaryArea, input, allTags) || "reset-de-foco",
    primaryArea
  );
  const mission = exerciseBySlug[recommendedInstructionSlug] || exerciseBySlug["reset-de-foco"];
  const copy = sleepSupportMovementById[recommendedInstructionSlug]
    ? sleepSupportCopy(recommendedInstructionSlug, input, allTags)
    : coreConditioningMovementById[recommendedInstructionSlug]
    ? coreConditioningCopy(recommendedInstructionSlug, input, allTags)
    : plannedReferenceMovementById[recommendedInstructionSlug]
    ? plannedReferenceCopy(recommendedInstructionSlug, input, allTags)
    : areaCopy(primaryArea, input, allTags);

  return {
    primaryArea,
    secondaryArea,
    manualTags,
    detectedTags,
    summary: copy.summary,
    recommendation: copy.recommendation,
    recommendationReason: `${copy.reason}${input.recentCheckins?.length ? " Tambem olhamos seus ultimos check-ins para evitar uma sugestao isolada demais." : ""} Exercicio sugerido: ${mission.title}.`,
    recommendedInstructionSlug,
    missionTitle: mission.title,
    missionDescription: mission.description,
    missionSteps: mission.steps,
    encouragement: copy.encouragement
  };
}

export function getCheckinAreaLabel(area?: string | null) {
  return areaLabels[(area || "") as CheckinArea] || "Bem-estar";
}
