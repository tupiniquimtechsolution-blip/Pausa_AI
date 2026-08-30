export type StretchType = "static" | "dynamic" | "active" | "passive" | "ballistic" | "pnf" | "mobility";
export type StretchLevel = "beginner" | "intermediate" | "advanced";

export type StretchExercise = {
  id: string;
  title: string;
  category: string;
  bodyRegion: string;
  primaryMuscles: string[];
  secondaryMuscles: string[];
  joints: string[];
  type: StretchType;
  objective: string;
  indicatedFor: string[];
  avoidIf: string[];
  instructions: string[];
  duration: string;
  sets: string;
  breathing: string;
  correctFeeling: string;
  commonMistakes: string[];
  warningSigns: string[];
  easyVariation: string;
  advancedVariation: string;
  bestMoment: string;
  anatomicalNote: string;
  level: StretchLevel;
  tags: string[];
};

type StretchBlueprint = {
  id: string;
  title: string;
  primaryMuscles: string[];
  secondaryMuscles?: string[];
  joints: string[];
  type?: StretchType;
  objective?: string;
  indicatedFor?: string[];
  avoidIf?: string[];
  instructions?: string[];
  duration?: string;
  sets?: string;
  breathing?: string;
  correctFeeling?: string;
  commonMistakes?: string[];
  warningSigns?: string[];
  easyVariation?: string;
  advancedVariation?: string;
  bestMoment?: string;
  anatomicalNote?: string;
  level?: StretchLevel;
  tags?: string[];
};

type RegionBlueprint = {
  region: string;
  category: string;
  tags: string[];
  items: StretchBlueprint[];
};

export const stretchingPrinciples = {
  intro:
    "Alongamento muscular e a aplicacao controlada de tensao sobre musculos, tendoes, fascias e estruturas ao redor das articulacoes para manter ou ampliar a amplitude de movimento. Ele envolve adaptacao neuromuscular, tolerancia ao alongamento, hidratacao dos tecidos, controle respiratorio, percepcao corporal e mobilidade articular.",
  difference:
    "Alongamento costuma sustentar ou conduzir uma tensao muscular. Mobilidade trabalha controle ativo da articulacao dentro da amplitude disponivel.",
  safety:
    "O alongamento adequado deve gerar tensao confortavel, nunca dor aguda. Queimacao intensa, formigamento, perda de forca, dor irradiada, tontura ou sensacao de choque sao sinais de alerta."
};

export const stretchingTypeCards = [
  { type: "static", title: "Estatico", description: "Mantem uma posicao por tempo determinado.", bestFor: "Pos-treino, relaxamento e flexibilidade." },
  { type: "dynamic", title: "Dinamico", description: "Usa movimentos controlados dentro da amplitude.", bestFor: "Aquecimento e preparacao para atividades." },
  { type: "active", title: "Ativo", description: "A propria musculatura sustenta a posicao.", bestFor: "Mobilidade e controle motor." },
  { type: "passive", title: "Passivo", description: "Usa apoio externo.", bestFor: "Relaxamento, sem forcar." },
  { type: "ballistic", title: "Balistico", description: "Usa impulso ou rebote.", bestFor: "Evitar para iniciantes." },
  { type: "pnf", title: "PNF", description: "Contracao, relaxamento e alongamento.", bestFor: "Mais avancado, idealmente com orientacao profissional." }
] as const;

export const stretchingLevelRules = [
  { level: "beginner" as const, title: "Iniciante", duration: "15 a 30 segundos", sets: "1 a 2 series", tension: "Tensao leve" },
  { level: "intermediate" as const, title: "Intermediario", duration: "30 a 45 segundos", sets: "2 a 3 series", tension: "Tensao moderada" },
  { level: "advanced" as const, title: "Avancado", duration: "45 a 90 segundos", sets: "2 a 4 series", tension: "Tensao controlada, sem dor" }
];

export const stretchingCheckinFilters = [
  "dor ou tensao no pescoco",
  "tensao nos ombros",
  "lombar rigida",
  "muito tempo sentado",
  "antes do treino",
  "depois do treino",
  "antes de dormir",
  "rigidez matinal",
  "maos e punhos cansados",
  "caminhada ou corrida",
  "mobilidade geral",
  "relaxamento",
  "foco no trabalho",
  "ansiedade corporal",
  "iniciante",
  "intermediario",
  "avancado"
];

const universalWarningSigns = ["dor aguda", "formigamento", "perda de forca", "dor irradiada", "tontura", "sensacao de choque"];
const universalMistakes = ["quicar em alongamento estatico", "prender a respiracao", "forcar articulacoes", "ignorar sinais de alerta"];
const universalAvoid = ["dor aguda", "lesao recente sem liberacao", "formigamento", "tontura", "condicao medica sem orientacao"];

const regionBlueprints: RegionBlueprint[] = [
  {
    region: "Maos, dedos e punhos",
    category: "Punhos e dedos",
    tags: ["maos e punhos cansados", "foco no trabalho", "muito tempo sentado"],
    items: [
      {
        id: "extensao-flexores-punho",
        title: "Extensao dos flexores do punho",
        primaryMuscles: ["flexor radial do carpo", "flexor ulnar do carpo", "palmar longo"],
        secondaryMuscles: ["flexores dos dedos"],
        joints: ["punho", "dedos", "cotovelo"],
        type: "passive",
        objective: "Reduzir tensao da face anterior do antebraco.",
        indicatedFor: ["teclado", "mouse", "celular", "musculacao"],
        avoidIf: ["formigamento", "dor no tunel do carpo", "cirurgia recente"],
        instructions: ["Estenda o braco a frente com a palma para cima.", "Com a outra mao, puxe suavemente os dedos para baixo e para tras.", "Mantenha o cotovelo estendido sem travar.", "Respire e sustente tensao confortavel."],
        duration: "20 a 30 segundos",
        sets: "2 por lado",
        breathing: "Lenta, sem prender o ar.",
        correctFeeling: "Puxar na palma e na face anterior do antebraco.",
        commonMistakes: ["dobrar o cotovelo", "puxar com forca", "elevar o ombro"],
        warningSigns: ["dormencia", "choque", "dor irradiada"],
        easyVariation: "Cotovelo semiflexionado.",
        advancedVariation: "Dedos mais estendidos, sem aumentar dor.",
        bestMoment: "Pausas de trabalho ou pos-treino.",
        anatomicalNote: "Alonga tendoes flexores que passam pela regiao anterior do punho.",
        level: "beginner",
        tags: ["punho", "antebraco", "teclado"]
      },
      { id: "flexao-extensores-punho", title: "Flexao dos extensores do punho", primaryMuscles: ["extensor radial longo do carpo", "extensor radial curto do carpo", "extensor ulnar do carpo"], joints: ["punho", "dedos", "cotovelo"], tags: ["punho", "mouse"] },
      { id: "abertura-dedos", title: "Abertura dos dedos", primaryMuscles: ["interosseos", "lumbricais", "adutor do polegar"], joints: ["dedos", "metacarpofalangicas"], type: "active", tags: ["dedos", "celular"] },
      { id: "alongamento-polegar", title: "Alongamento do polegar", primaryMuscles: ["adutor do polegar", "flexor curto do polegar"], joints: ["polegar", "punho"], tags: ["polegar", "celular"] },
      { id: "circulos-punho-mobilidade", title: "Circulos de punho", primaryMuscles: ["flexores do punho", "extensores do punho"], joints: ["punho"], type: "mobility", tags: ["mobilidade", "punho"] }
    ]
  },
  {
    region: "Antebracos e cotovelos",
    category: "Antebraco",
    tags: ["maos e punhos cansados", "foco no trabalho"],
    items: [
      { id: "pronacao-supinacao-antebraco", title: "Pronacao e supinacao do antebraco", primaryMuscles: ["pronador redondo", "supinador"], joints: ["cotovelo", "radio-ulnar"], type: "mobility", tags: ["antebraco", "cotovelo"] },
      { id: "alongamento-braquiorradial", title: "Alongamento do braquiorradial", primaryMuscles: ["braquiorradial"], joints: ["cotovelo", "punho"], tags: ["antebraco"] },
      { id: "alongamento-pronadores", title: "Alongamento dos pronadores", primaryMuscles: ["pronador redondo", "pronador quadrado"], joints: ["cotovelo", "punho"], tags: ["antebraco", "teclado"] },
      { id: "alongamento-supinadores", title: "Alongamento dos supinadores", primaryMuscles: ["supinador", "biceps braquial"], joints: ["cotovelo", "radio-ulnar"], tags: ["antebraco"] },
      { id: "mobilidade-cotovelo", title: "Mobilidade leve de cotovelo", primaryMuscles: ["biceps braquial", "triceps braquial"], joints: ["cotovelo"], type: "mobility", tags: ["cotovelo", "mobilidade"] }
    ]
  },
  {
    region: "Biceps, triceps e bracos",
    category: "Bracos",
    tags: ["depois do treino", "mobilidade geral"],
    items: [
      { id: "alongamento-biceps-parede", title: "Alongamento de biceps na parede", primaryMuscles: ["biceps braquial", "braquial"], joints: ["ombro", "cotovelo"], tags: ["biceps"] },
      { id: "triceps-acima-cabeca", title: "Triceps acima da cabeca", primaryMuscles: ["triceps braquial"], joints: ["ombro", "cotovelo"], tags: ["triceps", "ombros"] },
      { id: "braco-cruzado-suave", title: "Braco cruzado suave", primaryMuscles: ["deltoide posterior", "triceps braquial"], joints: ["ombro"], tags: ["bracos", "ombros"] },
      { id: "extensao-bracos-atras", title: "Extensao dos bracos atras", primaryMuscles: ["biceps braquial", "peitoral maior"], joints: ["ombro", "cotovelo"], tags: ["bracos", "peitoral"] },
      { id: "mobilidade-braco-cotovelo", title: "Mobilidade de braco e cotovelo", primaryMuscles: ["biceps braquial", "triceps braquial"], joints: ["ombro", "cotovelo"], type: "mobility", tags: ["mobilidade", "bracos"] }
    ]
  },
  {
    region: "Ombros e deltoides",
    category: "Ombros",
    tags: ["tensao nos ombros", "foco no trabalho", "muito tempo sentado"],
    items: [
      { id: "deltoide-posterior-cruzado", title: "Deltoide posterior cruzado", primaryMuscles: ["deltoide posterior"], secondaryMuscles: ["romboides"], joints: ["ombro", "escapula"], tags: ["ombros"] },
      { id: "elevacao-ombros-circulos", title: "Circulos lentos de ombros", primaryMuscles: ["trapezio superior", "deltoides"], joints: ["ombro", "escapula"], type: "mobility", tags: ["ombros", "mobilidade"] },
      { id: "rotacao-externa-parede", title: "Rotacao externa na parede", primaryMuscles: ["infraespinal", "redondo menor"], joints: ["ombro"], type: "active", tags: ["ombros"] },
      { id: "capsula-posterior-ombro", title: "Alongamento posterior do ombro", primaryMuscles: ["capsula posterior do ombro", "deltoide posterior"], joints: ["ombro"], tags: ["ombros"] },
      { id: "pendulo-ombro", title: "Pendulo de ombro", primaryMuscles: ["deltoides", "manguito rotador"], joints: ["ombro"], type: "mobility", tags: ["ombros", "relaxamento"] }
    ]
  },
  {
    region: "Peitoral",
    category: "Peitoral",
    tags: ["muito tempo sentado", "foco no trabalho", "tensao nos ombros"],
    items: [
      { id: "abertura-peito-porta", title: "Abertura de peito na porta", primaryMuscles: ["peitoral maior", "peitoral menor"], joints: ["ombro", "escapula"], tags: ["peitoral", "postura"] },
      { id: "peitoral-parede-um-braco", title: "Peitoral na parede com um braco", primaryMuscles: ["peitoral maior"], joints: ["ombro"], tags: ["peitoral"] },
      { id: "maos-atras-costas", title: "Maos atras das costas", primaryMuscles: ["peitoral maior", "deltoide anterior"], joints: ["ombro"], tags: ["peitoral", "ombros"] },
      { id: "peitoral-no-canto", title: "Peitoral no canto da parede", primaryMuscles: ["peitoral maior", "peitoral menor"], joints: ["ombro", "toracica"], tags: ["peitoral"] },
      { id: "extensao-toracica-peito", title: "Extensao toracica com abertura de peito", primaryMuscles: ["peitoral maior", "reto abdominal"], joints: ["coluna toracica", "ombro"], type: "mobility", tags: ["peitoral", "toracica"] }
    ]
  },
  {
    region: "Costas superiores e escapulas",
    category: "Costas superiores",
    tags: ["tensao nos ombros", "muito tempo sentado", "relaxamento"],
    items: [
      { id: "abraco-escapulas", title: "Abraco das escapulas", primaryMuscles: ["romboides", "trapezio medio"], joints: ["escapula", "ombro"], tags: ["costas superiores"] },
      { id: "alongamento-dorsal-cadeira", title: "Dorsal com apoio na cadeira", primaryMuscles: ["latissimo do dorso", "redondo maior"], joints: ["ombro", "toracica"], tags: ["dorsal"] },
      { id: "retracao-protracao-escapular", title: "Retracao e protracao escapular", primaryMuscles: ["serrato anterior", "romboides"], joints: ["escapula"], type: "mobility", tags: ["escapulas", "mobilidade"] },
      { id: "postura-crianca-lateral", title: "Postura da crianca lateral", primaryMuscles: ["latissimo do dorso", "quadrado lombar"], joints: ["ombro", "coluna"], tags: ["dorsal", "relaxamento"] },
      { id: "gato-vaca-escapular", title: "Gato-vaca escapular", primaryMuscles: ["serrato anterior", "trapezio"], joints: ["escapula", "toracica"], type: "mobility", tags: ["escapulas", "toracica"] }
    ]
  },
  {
    region: "Pescoco e cervical",
    category: "Cervical",
    tags: ["dor ou tensao no pescoco", "tensao nos ombros", "foco no trabalho"],
    items: [
      { id: "inclinacao-lateral-pescoco", title: "Inclinacao lateral do pescoco", primaryMuscles: ["esternocleidomastoideo", "escalenos"], joints: ["cervical"], tags: ["pescoco"] },
      { id: "flexao-cervical-suave", title: "Flexao cervical suave", primaryMuscles: ["extensores cervicais"], joints: ["cervical"], tags: ["pescoco"] },
      { id: "rotacao-cervical-controlada", title: "Rotacao cervical controlada", primaryMuscles: ["rotadores cervicais"], joints: ["cervical"], type: "mobility", tags: ["pescoco", "mobilidade"] },
      { id: "elevador-escapula", title: "Alongamento do elevador da escapula", primaryMuscles: ["elevador da escapula"], joints: ["cervical", "escapula"], tags: ["pescoco", "ombros"] },
      { id: "queixo-para-tras", title: "Queixo para tras", primaryMuscles: ["flexores profundos do pescoco"], secondaryMuscles: ["extensores cervicais"], joints: ["cervical"], type: "active", tags: ["pescoco", "postura"] }
    ]
  },
  {
    region: "Coluna toracica",
    category: "Toracica",
    tags: ["muito tempo sentado", "mobilidade geral", "antes do treino"],
    items: [
      { id: "rotacao-toracica-sentada", title: "Rotacao toracica sentada", primaryMuscles: ["multifidos toracicos", "obliquos"], joints: ["coluna toracica"], type: "mobility", tags: ["toracica"] },
      { id: "extensao-toracica-cadeira", title: "Extensao toracica na cadeira", primaryMuscles: ["eretores da coluna toracica"], joints: ["coluna toracica"], type: "mobility", tags: ["toracica", "postura"] },
      { id: "gato-vaca-toracico", title: "Gato-vaca toracico", primaryMuscles: ["eretores da coluna", "reto abdominal"], joints: ["toracica", "lombar"], type: "mobility", tags: ["toracica"] },
      { id: "livro-aberto", title: "Livro aberto", primaryMuscles: ["peitoral maior", "obliquos"], joints: ["toracica", "ombro"], type: "mobility", tags: ["toracica", "peitoral"] },
      { id: "alcance-lateral-toracico", title: "Alcance lateral toracico", primaryMuscles: ["intercostais", "latissimo do dorso"], joints: ["toracica", "ombro"], tags: ["toracica", "lateral"] }
    ]
  },
  {
    region: "Lombar",
    category: "Lombar",
    tags: ["lombar rigida", "muito tempo sentado", "antes de dormir"],
    items: [
      { id: "joelhos-ao-peito", title: "Joelhos ao peito", primaryMuscles: ["eretores lombares", "gluteos"], joints: ["lombar", "quadril"], tags: ["lombar"] },
      { id: "torcao-lombar-leve", title: "Torcao lombar leve", primaryMuscles: ["eretores da coluna", "obliquos"], joints: ["lombar", "quadril"], tags: ["lombar", "sono"] },
      { id: "postura-crianca", title: "Postura da crianca", primaryMuscles: ["eretores da coluna", "latissimo do dorso"], joints: ["lombar", "quadril"], tags: ["lombar", "relaxamento"] },
      { id: "bascula-pelvica", title: "Bascula pelvica", primaryMuscles: ["reto abdominal", "eretores lombares"], joints: ["lombar", "pelve"], type: "mobility", tags: ["lombar", "mobilidade"] },
      { id: "flexao-lombar-sentada", title: "Flexao lombar sentada", primaryMuscles: ["eretores lombares"], joints: ["lombar", "quadril"], tags: ["lombar", "trabalho"] }
    ]
  },
  {
    region: "Abdomen e tronco anterior",
    category: "Tronco anterior",
    tags: ["mobilidade geral", "antes do treino"],
    items: [
      { id: "cobra-suave", title: "Cobra suave", primaryMuscles: ["reto abdominal", "obliquos"], joints: ["coluna", "quadril"], tags: ["abdomen"] },
      { id: "extensao-abdominal-em-pe", title: "Extensao abdominal em pe", primaryMuscles: ["reto abdominal"], joints: ["coluna", "quadril"], tags: ["abdomen", "postura"] },
      { id: "alongamento-lateral-tronco", title: "Alongamento lateral do tronco", primaryMuscles: ["obliquos", "quadrado lombar"], joints: ["coluna", "costelas"], tags: ["tronco", "lateral"] },
      { id: "ponte-suave-abertura", title: "Ponte suave com abertura anterior", primaryMuscles: ["reto abdominal", "flexores do quadril"], joints: ["quadril", "coluna"], type: "active", tags: ["tronco", "quadril"] },
      { id: "respiracao-costelas", title: "Respiracao nas costelas", primaryMuscles: ["intercostais", "diafragma"], joints: ["costelas", "toracica"], type: "mobility", tags: ["respiracao", "tronco"] }
    ]
  },
  {
    region: "Quadril",
    category: "Quadril",
    tags: ["muito tempo sentado", "antes do treino", "rigidez matinal"],
    items: [
      { id: "flexor-quadril-ajoelhado", title: "Flexor do quadril ajoelhado", primaryMuscles: ["iliopsoas", "reto femoral"], joints: ["quadril", "joelho"], tags: ["quadril", "sentado"] },
      { id: "borboleta", title: "Borboleta", primaryMuscles: ["adutores do quadril"], joints: ["quadril"], tags: ["quadril", "adutores"] },
      { id: "noventa-noventa", title: "90/90 de quadril", primaryMuscles: ["rotadores externos do quadril", "gluteos"], joints: ["quadril"], type: "mobility", tags: ["quadril", "mobilidade"] },
      { id: "circulos-quadril", title: "Circulos de quadril", primaryMuscles: ["gluteos", "flexores do quadril"], joints: ["quadril"], type: "mobility", tags: ["quadril"] },
      { id: "abertura-quadril-sentado", title: "Abertura de quadril sentado", primaryMuscles: ["adutores", "gluteos"], joints: ["quadril"], tags: ["quadril", "sentado"] }
    ]
  },
  {
    region: "Gluteos",
    category: "Gluteos",
    tags: ["muito tempo sentado", "lombar rigida", "depois do treino"],
    items: [
      { id: "figura-quatro-sentado", title: "Figura quatro sentado", primaryMuscles: ["gluteo maximo", "piriforme"], joints: ["quadril"], tags: ["gluteos", "sentado"] },
      { id: "piriforme-deitado", title: "Piriforme deitado", primaryMuscles: ["piriforme", "gluteo medio"], joints: ["quadril", "lombar"], tags: ["gluteos"] },
      { id: "pombo-adaptado", title: "Pombo adaptado", primaryMuscles: ["gluteos", "rotadores externos do quadril"], joints: ["quadril"], tags: ["gluteos", "quadril"] },
      { id: "joelho-ao-peito-cruzado", title: "Joelho ao peito cruzado", primaryMuscles: ["gluteo maximo", "piriforme"], joints: ["quadril", "lombar"], tags: ["gluteos", "lombar"] },
      { id: "gluteo-parede", title: "Gluteo na parede", primaryMuscles: ["gluteos", "isquiotibiais"], joints: ["quadril"], tags: ["gluteos", "relaxamento"] }
    ]
  },
  {
    region: "Posterior de coxa",
    category: "Posterior de coxa",
    tags: ["caminhada ou corrida", "depois do treino", "lombar rigida"],
    items: [
      { id: "posterior-sentado", title: "Posterior sentado", primaryMuscles: ["isquiotibiais"], joints: ["quadril", "joelho"], tags: ["posterior", "sentado"] },
      { id: "posterior-em-pe-apoio", title: "Posterior em pe com apoio", primaryMuscles: ["isquiotibiais"], joints: ["quadril", "joelho"], tags: ["posterior"] },
      { id: "toalha-deitado", title: "Posterior com toalha deitado", primaryMuscles: ["isquiotibiais", "gastrocnemio"], joints: ["quadril", "joelho", "tornozelo"], tags: ["posterior", "relaxamento"] },
      { id: "bom-dia-mobilidade", title: "Bom dia de mobilidade", primaryMuscles: ["isquiotibiais", "eretores da coluna"], joints: ["quadril"], type: "dynamic", tags: ["posterior", "antes do treino"] },
      { id: "inclinacao-unilateral-cadeira", title: "Inclinacao unilateral na cadeira", primaryMuscles: ["isquiotibiais"], joints: ["quadril", "joelho"], tags: ["posterior", "trabalho"] }
    ]
  },
  {
    region: "Anterior de coxa",
    category: "Anterior de coxa",
    tags: ["depois do treino", "caminhada ou corrida"],
    items: [
      { id: "quadriceps-em-pe-apoio", title: "Quadriceps em pe com apoio", primaryMuscles: ["quadriceps", "reto femoral"], joints: ["joelho", "quadril"], tags: ["quadriceps"] },
      { id: "quadriceps-lateral-deitado", title: "Quadriceps deitado de lado", primaryMuscles: ["quadriceps"], joints: ["joelho", "quadril"], tags: ["quadriceps", "relaxamento"] },
      { id: "flexor-quadril-com-quadriceps", title: "Flexor do quadril com quadriceps", primaryMuscles: ["reto femoral", "iliopsoas"], joints: ["quadril", "joelho"], tags: ["quadriceps", "quadril"] },
      { id: "joelho-no-chao-anterior", title: "Anterior de coxa com joelho no chao", primaryMuscles: ["quadriceps", "reto femoral"], joints: ["joelho", "quadril"], tags: ["quadriceps"] },
      { id: "anterior-coxa-cadeira", title: "Anterior de coxa na cadeira", primaryMuscles: ["quadriceps"], joints: ["joelho"], tags: ["quadriceps", "trabalho"] }
    ]
  },
  {
    region: "Panturrilhas",
    category: "Panturrilhas",
    tags: ["caminhada ou corrida", "depois do treino", "rigidez matinal"],
    items: [
      { id: "panturrilha-parede", title: "Panturrilha na parede", primaryMuscles: ["gastrocnemio"], joints: ["tornozelo", "joelho"], tags: ["panturrilha"] },
      { id: "soleo-joelho-flexionado", title: "Soleo com joelho flexionado", primaryMuscles: ["soleo"], joints: ["tornozelo", "joelho"], tags: ["panturrilha", "tornozelo"] },
      { id: "degrau-panturrilha", title: "Panturrilha no degrau", primaryMuscles: ["gastrocnemio", "soleo"], joints: ["tornozelo"], tags: ["panturrilha"] },
      { id: "panturrilha-toalha", title: "Panturrilha com toalha", primaryMuscles: ["gastrocnemio", "soleo"], joints: ["tornozelo", "joelho"], tags: ["panturrilha", "relaxamento"] },
      { id: "mobilidade-tornozelo-panturrilha", title: "Mobilidade tornozelo-panturrilha", primaryMuscles: ["soleo", "gastrocnemio"], joints: ["tornozelo"], type: "mobility", tags: ["tornozelo", "panturrilha"] }
    ]
  },
  {
    region: "Tornozelos",
    category: "Tornozelos",
    tags: ["caminhada ou corrida", "antes do treino", "mobilidade geral"],
    items: [
      { id: "dorsiflexao-parede", title: "Dorsiflexao na parede", primaryMuscles: ["soleo", "tibial anterior"], joints: ["tornozelo"], type: "mobility", tags: ["tornozelo"] },
      { id: "circulos-tornozelo", title: "Circulos de tornozelo", primaryMuscles: ["tibial anterior", "fibulares"], joints: ["tornozelo"], type: "mobility", tags: ["tornozelo"] },
      { id: "inversao-eversao-controlada", title: "Inversao e eversao controlada", primaryMuscles: ["tibial posterior", "fibulares"], joints: ["tornozelo"], type: "active", tags: ["tornozelo", "controle"] },
      { id: "alongamento-frente-tornozelo", title: "Alongamento da frente do tornozelo", primaryMuscles: ["tibial anterior", "extensores dos dedos"], joints: ["tornozelo", "dedos"], tags: ["tornozelo"] },
      { id: "alfabeto-tornozelo", title: "Alfabeto com tornozelo", primaryMuscles: ["tibial anterior", "fibulares", "gastrocnemio"], joints: ["tornozelo"], type: "mobility", tags: ["tornozelo", "mobilidade"] }
    ]
  },
  {
    region: "Pes e dedos",
    category: "Pes",
    tags: ["caminhada ou corrida", "relaxamento", "rigidez matinal"],
    items: [
      { id: "extensao-dedos-pe", title: "Extensao dos dedos do pe", primaryMuscles: ["flexores dos dedos do pe"], joints: ["dedos", "metatarsofalangicas"], tags: ["pes", "dedos"] },
      { id: "flexao-dedos-pe", title: "Flexao dos dedos do pe", primaryMuscles: ["extensores dos dedos do pe"], joints: ["dedos"], tags: ["pes", "dedos"] },
      { id: "arco-plantar-bola", title: "Arco plantar com bola", primaryMuscles: ["fascia plantar", "musculos intrinsecos do pe"], joints: ["pe", "dedos"], type: "mobility", tags: ["pes", "relaxamento"] },
      { id: "fascia-plantar-toalha", title: "Fascia plantar com toalha", primaryMuscles: ["fascia plantar", "flexores dos dedos"], joints: ["pe", "tornozelo"], tags: ["pes", "panturrilha"] },
      { id: "abertura-dedos-pe", title: "Abertura dos dedos do pe", primaryMuscles: ["interosseos plantares", "lumbricais"], joints: ["dedos"], type: "active", tags: ["pes", "dedos"] }
    ]
  }
];

function createStretch(region: RegionBlueprint, item: StretchBlueprint): StretchExercise {
  const type = item.type || "static";
  const isMobility = type === "mobility" || type === "dynamic" || type === "active";
  const avoidIf = item.avoidIf || universalAvoid;

  return {
    id: item.id,
    title: item.title,
    category: region.category,
    bodyRegion: region.region,
    primaryMuscles: item.primaryMuscles,
    secondaryMuscles: item.secondaryMuscles || [],
    joints: item.joints,
    type,
    objective: item.objective || `Reduzir rigidez e melhorar conforto em ${region.region.toLowerCase()}.`,
    indicatedFor: item.indicatedFor || region.tags,
    avoidIf,
    instructions: item.instructions || [
      "Entre na posicao devagar e com apoio se precisar.",
      "Ajuste ate sentir tensao confortavel, sem dor aguda.",
      isMobility ? "Movimente dentro da amplitude disponivel de forma lenta." : "Sustente a posicao sem quicar.",
      "Respire sem prender o ar e retorne com calma."
    ],
    duration: item.duration || (isMobility ? "6 a 10 repeticoes lentas" : "20 a 30 segundos"),
    sets: item.sets || "1 a 2 series por lado",
    breathing: item.breathing || "Respiracao lenta, com expiracao suave.",
    correctFeeling: item.correctFeeling || `Tensao confortavel na regiao de ${region.category.toLowerCase()}, sem dor aguda.`,
    commonMistakes: item.commonMistakes || universalMistakes,
    warningSigns: item.warningSigns || universalWarningSigns,
    easyVariation: item.easyVariation || "Reduza amplitude, use apoio e diminua o tempo.",
    advancedVariation: item.advancedVariation || "Aumente tempo ou controle ativo somente se continuar confortavel.",
    bestMoment: item.bestMoment || "Pausas de trabalho, pos-treino leve, antes de dormir ou quando o check-in indicar tensao.",
    anatomicalNote: item.anatomicalNote || `Trabalha tecidos ao redor de ${item.joints.join(", ")} e ajuda a organizar a percepcao corporal dessa regiao.`,
    level: item.level || (isMobility ? "beginner" : "intermediate"),
    tags: Array.from(new Set([...region.tags, ...(item.tags || []), region.region.toLowerCase()]))
  };
}

export const stretchingExercises: StretchExercise[] = regionBlueprints.flatMap((region) =>
  region.items.map((item) => createStretch(region, item))
);

export const stretchingRegions = regionBlueprints.map((region) => ({
  id: region.region.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  label: region.region,
  count: region.items.length,
  tags: region.tags
}));

export const stretchById: Record<string, StretchExercise> = Object.fromEntries(
  stretchingExercises.map((exercise) => [exercise.id, exercise])
);

export const stretchingRecommendationsBySignal: Record<string, string[]> = {
  "muito tempo sentado": ["flexor-quadril-ajoelhado", "torcao-lombar-leve", "abertura-peito-porta", "inclinacao-lateral-pescoco", "extensao-toracica-cadeira"],
  "tensao no punho": ["extensao-flexores-punho", "flexao-extensores-punho", "abertura-dedos", "alongamento-polegar"],
  "maos e punhos cansados": ["extensao-flexores-punho", "flexao-extensores-punho", "circulos-punho-mobilidade", "abertura-dedos"],
  "tensao nos ombros": ["deltoide-posterior-cruzado", "elevacao-ombros-circulos", "abraco-escapulas", "triceps-acima-cabeca"],
  "dor ou tensao no pescoco": ["inclinacao-lateral-pescoco", "flexao-cervical-suave", "rotacao-cervical-controlada", "elevador-escapula"],
  "lombar rigida": ["joelhos-ao-peito", "torcao-lombar-leve", "bascula-pelvica", "figura-quatro-sentado"],
  "caminhada ou corrida": ["panturrilha-parede", "soleo-joelho-flexionado", "posterior-sentado", "quadriceps-em-pe-apoio", "dorsiflexao-parede"],
  "antes do treino": ["circulos-quadril", "gato-vaca-toracico", "dorsiflexao-parede", "bom-dia-mobilidade"],
  "depois do treino": ["posterior-sentado", "quadriceps-em-pe-apoio", "peitoral-parede-um-braco", "panturrilha-parede"],
  "antes de dormir": ["postura-crianca", "torcao-lombar-leve", "inclinacao-lateral-pescoco", "respiracao-costelas"],
  "ansiedade corporal": ["postura-crianca", "respiracao-costelas", "abraco-escapulas", "torcao-lombar-leve"],
  "relaxamento": ["postura-crianca", "gluteo-parede", "panturrilha-toalha", "arco-plantar-bola"],
  "rigidez matinal": ["circulos-quadril", "gato-vaca-toracico", "panturrilha-parede", "rotacao-cervical-controlada"]
};

const tagAliases: Record<string, string> = {
  "Corpo tenso": "ansiedade corporal",
  "Muito tempo sentado": "muito tempo sentado",
  "Maos e punhos cansados": "maos e punhos cansados",
  "Dor no pescoco": "dor ou tensao no pescoco",
  "Tensao nos ombros": "tensao nos ombros",
  "Lombar rigida": "lombar rigida",
  "Ansiedade": "ansiedade corporal"
};

export function normalizeStretchingSignals(tags: string[] = []) {
  return Array.from(new Set(tags.map((tag) => tagAliases[tag] || tag.toLowerCase()).filter(Boolean)));
}

export function recommendStretchExercises(tags: string[] = [], level?: StretchLevel, limit = 5) {
  const signals = normalizeStretchingSignals(tags);
  const explicitIds = signals.flatMap((signal) => stretchingRecommendationsBySignal[signal] || []);
  const directMatches = stretchingExercises.filter((exercise) =>
    signals.some((signal) => exercise.tags.includes(signal) || exercise.indicatedFor.includes(signal))
  );
  const byId = [...explicitIds.map((id) => stretchById[id]).filter(Boolean), ...directMatches];
  const filtered = level ? byId.filter((exercise) => exercise.level === level || exercise.level === "beginner") : byId;
  return Array.from(new Map(filtered.map((exercise) => [exercise.id, exercise])).values()).slice(0, limit);
}
