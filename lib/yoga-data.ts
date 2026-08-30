export type YogaPracticeSeed = {
  slug: string;
  title: string;
  yogaType: "LIGHT" | "RESTORATIVE" | "FUNCTIONAL";
  area: "SLEEP" | "STRESS" | "FOCUS" | "ENERGY" | "MOOD" | "MOBILITY" | "WORK_BREAK";
  level: number;
  context: "HOME" | "WORK" | "BOTH";
  shortDescription: string;
  objective: string;
  durationSeconds: number;
  intensity: "VERY_LIGHT" | "LIGHT" | "MODERATE_LIGHT";
  imageKey: string;
  imageSequenceKeys: string[];
  animationPromptKey: string;
  imagePrompt: string;
  imageSequencePrompt: string;
  imageFrameDescriptions: string[];
  recommendedWhen: string[];
  avoidWhen: string[];
  contraindications: string[];
  howToSteps: string[];
  postureTips: string[];
  breathingTips: string[];
  commonMistakes: string[];
  safetyNotes: string[];
  progressionTips: string[];
};

export type YogaSequenceSeed = {
  slug: string;
  title: string;
  description: string;
  level: number;
  context: "HOME" | "WORK" | "BOTH";
  durationSeconds: number;
  goals: string[];
  practiceSlugs: string[];
  imageKey: string;
};

const commonAvoid = [
  "Evite se houver dor aguda ou desconforto incomum.",
  "Evite forcar amplitude ou buscar performance.",
  "Se tiver limitacao importante, adapte ou busque orientacao profissional."
];

const commonSafety = [
  "Faca em ritmo confortavel.",
  "Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.",
  "Reduza a amplitude sempre que o corpo pedir."
];

function keys(slug: string, frames: number) {
  return Array.from({ length: frames }, (_, index) => `${slug}-${index + 1}`);
}

function visualPrompt(title: string) {
  return `Ilustracao flat premium do Pausa AI para ${title}, personagem recorrente, fundo claro minimalista, menta e lavanda, anatomia funcional segura, sem texto, sem logo, foco didatico.`;
}

function sequencePrompt(title: string, frames: string[]) {
  return `Criar ${frames.length} imagens sequenciais para ${title}: ${frames.join("; ")}. Mostrar alinhamento seguro, amplitude confortavel, postura clara para iniciante, sem acrobacia e sem visual fitness agressivo.`;
}

function p(input: Omit<YogaPracticeSeed, "imageSequenceKeys" | "animationPromptKey" | "imagePrompt" | "imageSequencePrompt" | "imageFrameDescriptions" | "contraindications" | "safetyNotes" | "progressionTips"> & {
  frames: string[];
  contraindications?: string[];
  safetyNotes?: string[];
  progressionTips?: string[];
}): YogaPracticeSeed {
  const { frames, ...practice } = input;
  return {
    ...practice,
    imageSequenceKeys: keys(input.slug, frames.length),
    animationPromptKey: `${input.slug}-animacao`,
    imagePrompt: visualPrompt(input.title),
    imageSequencePrompt: sequencePrompt(input.title, frames),
    imageFrameDescriptions: frames,
    contraindications: input.contraindications || commonAvoid,
    safetyNotes: input.safetyNotes || commonSafety,
    progressionTips: input.progressionTips || [
      "Comece pelo tempo sugerido.",
      "Aumente apenas quando a pratica parecer facil e confortavel.",
      "Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."
    ]
  };
}

export const yogaPracticeSeeds: YogaPracticeSeed[] = [
  p({
    slug: "respiracao-sentada-tranquila",
    title: "Respiracao sentada tranquila",
    yogaType: "LIGHT",
    area: "STRESS",
    level: 1,
    context: "BOTH",
    shortDescription: "Uma pausa sentada para perceber o corpo e alongar a expiracao.",
    objective: "Reduzir estimulos e criar uma entrada suave na pratica.",
    durationSeconds: 180,
    intensity: "VERY_LIGHT",
    imageKey: "respiracao-sentada-tranquila",
    frames: ["sentar com apoio", "maos descansam nas pernas", "inspirar pelo nariz", "expirar longo", "retornar ao ritmo natural"],
    recommendedWhen: ["estresse alto", "mente acelerada", "pausa no trabalho"],
    avoidWhen: ["desconforto ao segurar ar", "tontura"],
    howToSteps: ["Sente-se com os pes apoiados.", "Alongue a coluna sem rigidez.", "Inspire pelo nariz de forma natural.", "Expire um pouco mais longo que a inspiracao.", "Repita por alguns ciclos."],
    postureTips: ["Ombros soltos.", "Mandibula relaxada.", "Pes firmes no chao."],
    breathingTips: ["Nao force o ar.", "Use expiracao suave e longa.", "Volte ao ritmo natural se desconfortar."],
    commonMistakes: ["Prender a respiracao.", "Elevar ombros.", "Tentar respirar profundo demais."]
  }),
  p({
    slug: "postura-facil-atencao-corpo",
    title: "Postura facil com atencao no corpo",
    yogaType: "LIGHT",
    area: "FOCUS",
    level: 1,
    context: "HOME",
    shortDescription: "Observacao simples do corpo em postura sentada confortavel.",
    objective: "Trazer presenca antes de iniciar outra tarefa.",
    durationSeconds: 180,
    intensity: "VERY_LIGHT",
    imageKey: "postura-facil-atencao-corpo",
    frames: ["sentar em base confortavel", "ajustar apoio do quadril", "maos relaxadas", "olhar suave", "fechar com respiracao natural"],
    recommendedWhen: ["foco baixo", "inicio do dia", "antes de estudar"],
    avoidWhen: ["dor ao sentar no chao"],
    howToSteps: ["Sente-se no chao ou cadeira.", "Apoie o quadril para nao forcar.", "Observe pes, pernas e coluna.", "Note a respiracao sem mudar muito.", "Finalize escolhendo uma pequena acao."],
    postureTips: ["Use almofada se precisar.", "Mantenha o pescoço longo.", "Relaxe as maos."],
    breathingTips: ["Respire sem controlar demais.", "Observe entrada e saida do ar."],
    commonMistakes: ["Sentar sem apoio com dor.", "Forcar coluna reta.", "Julgar pensamentos."]
  }),
  p({
    slug: "alongamento-lateral-sentado",
    title: "Alongamento lateral sentado",
    yogaType: "LIGHT",
    area: "MOBILITY",
    level: 2,
    context: "BOTH",
    shortDescription: "Inclinação lateral suave para abrir costelas e ombros.",
    objective: "Soltar tronco e criar espaco para respirar melhor.",
    durationSeconds: 240,
    intensity: "LIGHT",
    imageKey: "alongamento-lateral-sentado",
    frames: ["sentar com coluna confortavel", "braco sobe", "inclinar para um lado", "permanecer respirando", "retornar e trocar lado"],
    recommendedWhen: ["muitas horas sentado", "ombros tensos", "foco baixo"],
    avoidWhen: ["dor lateral intensa", "tontura ao inclinar"],
    howToSteps: ["Sente-se com base estavel.", "Eleve um braco sem travar o ombro.", "Incline o tronco para o lado oposto.", "Respire duas ou tres vezes.", "Volte ao centro e repita do outro lado."],
    postureTips: ["Nao gire o tronco para frente.", "Mantenha os dois lados do quadril apoiados.", "Evite elevar o ombro perto da orelha."],
    breathingTips: ["Inspire no centro.", "Expire durante a inclinacao.", "Respire nas costelas do lado alongado."],
    commonMistakes: ["Forcar alcance.", "Prender respiracao.", "Desabar o peito."]
  }),
  p({
    slug: "mobilidade-de-ombros-yoga",
    title: "Mobilidade de ombros",
    yogaType: "LIGHT",
    area: "WORK_BREAK",
    level: 2,
    context: "WORK",
    shortDescription: "Movimentos lentos para ombros depois de tela ou postura fixa.",
    objective: "Reduzir rigidez e retomar consciencia corporal.",
    durationSeconds: 240,
    intensity: "LIGHT",
    imageKey: "mobilidade-de-ombros-yoga",
    frames: ["sentar ou ficar em pe", "ombros sobem suavemente", "ombros giram para tras", "bracos abrem sem forcar", "retorno relaxado"],
    recommendedWhen: ["trabalho em tela", "ombros tensos", "pausa curta"],
    avoidWhen: ["dor no ombro", "formigamento"],
    howToSteps: ["Fique sentado ou em pe.", "Eleve e solte os ombros tres vezes.", "Faca circulos lentos para tras.", "Abra os bracos com amplitude pequena.", "Finalize relaxando as maos."],
    postureTips: ["Pes apoiados.", "Costelas sem projetar.", "Pescoço solto."],
    breathingTips: ["Inspire ao abrir.", "Expire ao soltar.", "Nao segure o ar."],
    commonMistakes: ["Fazer rapido demais.", "Encolher pescoço.", "Forcar amplitude."]
  }),
  p({
    slug: "postura-da-montanha",
    title: "Postura da montanha",
    yogaType: "LIGHT",
    area: "FOCUS",
    level: 3,
    context: "BOTH",
    shortDescription: "Postura em pe para alinhar corpo, atencao e respiracao.",
    objective: "Criar estabilidade antes de uma tarefa ou pratica maior.",
    durationSeconds: 300,
    intensity: "LIGHT",
    imageKey: "postura-da-montanha",
    frames: ["pes paralelos", "peso distribuido", "coluna longa", "ombros relaxados", "respiracao estavel"],
    recommendedWhen: ["dispersao", "antes de movimento", "inicio do dia"],
    avoidWhen: ["tontura em pe"],
    howToSteps: ["Fique em pe com pes na largura do quadril.", "Distribua o peso entre calcanhar e frente dos pes.", "Alongue a coluna sem travar joelhos.", "Relaxe os ombros.", "Respire por alguns ciclos."],
    postureTips: ["Joelhos destravados.", "Queixo paralelo ao chao.", "Abdomen relaxado, nao rigido."],
    breathingTips: ["Respire pelo nariz se confortavel.", "Use expiracao tranquila."],
    commonMistakes: ["Travar joelhos.", "Empinar costelas.", "Apertar mandibula."]
  }),
  p({
    slug: "gato-vaca-suave",
    title: "Gato-vaca suave",
    yogaType: "LIGHT",
    area: "MOBILITY",
    level: 3,
    context: "HOME",
    shortDescription: "Mobilidade leve de coluna em quatro apoios.",
    objective: "Destravar a coluna com movimento lento e seguro.",
    durationSeconds: 360,
    intensity: "LIGHT",
    imageKey: "gato-vaca-suave",
    frames: ["quatro apoios neutro", "preparar punhos e joelhos", "extensao suave", "flexao suave", "retorno ao neutro"],
    recommendedWhen: ["coluna rigida", "energia baixa moderada", "pausa em casa"],
    avoidWhen: ["dor nos punhos ou joelhos", "dor lombar forte"],
    howToSteps: ["Apoie maos e joelhos.", "Mantenha movimento pequeno.", "Inspire abrindo o peito suavemente.", "Expire arredondando a coluna sem forcar.", "Repita devagar."],
    postureTips: ["Maos abaixo dos ombros.", "Joelhos abaixo do quadril.", "Use manta sob joelhos se precisar."],
    breathingTips: ["Inspire na abertura.", "Expire ao arredondar.", "Movimento acompanha a respiracao."],
    commonMistakes: ["Movimento rapido.", "Afundar ombros.", "Forcar lombar."]
  }),
  p({
    slug: "alongamento-posterior-sentado",
    title: "Alongamento posterior sentado",
    yogaType: "LIGHT",
    area: "MOBILITY",
    level: 4,
    context: "HOME",
    shortDescription: "Alongamento leve da parte posterior sem buscar flexibilidade maxima.",
    objective: "Soltar pernas e lombar com amplitude confortavel.",
    durationSeconds: 420,
    intensity: "LIGHT",
    imageKey: "alongamento-posterior-sentado",
    frames: ["sentar com pernas estendidas", "dobrar levemente joelhos", "coluna alonga", "inclinar pouco a frente", "retornar devagar"],
    recommendedWhen: ["pernas rigidas", "fim do dia", "mobilidade leve"],
    avoidWhen: ["dor ciatica", "dor lombar forte"],
    howToSteps: ["Sente-se com as pernas a frente.", "Dobre um pouco os joelhos.", "Leve o tronco levemente a frente.", "Pare antes de qualquer dor.", "Volte empilhando a coluna devagar."],
    postureTips: ["Use almofada sob o quadril.", "Nao force tocar os pes.", "Mantenha rosto relaxado."],
    breathingTips: ["Inspire alongando a coluna.", "Expire reduzindo tensao.", "Respire sem prender."],
    commonMistakes: ["Arredondar demais para forcar.", "Travar joelhos.", "Comparar amplitude."]
  }),
  p({
    slug: "cachorro-adaptado-parede",
    title: "Cachorro olhando para baixo adaptado",
    yogaType: "LIGHT",
    area: "ENERGY",
    level: 4,
    context: "BOTH",
    shortDescription: "Versao na parede para alongar costas e ombros sem sobrecarga.",
    objective: "Criar energia suave e soltar a parte superior do corpo.",
    durationSeconds: 420,
    intensity: "LIGHT",
    imageKey: "cachorro-adaptado-parede",
    frames: ["ficar frente a parede", "maos apoiam na parede", "passos para tras", "quadril recua", "retorno caminhando"],
    recommendedWhen: ["ombros cansados", "pausa no trabalho", "energia moderada"],
    avoidWhen: ["dor no ombro", "tontura"],
    howToSteps: ["Apoie as maos na parede.", "Caminhe para tras ate alongar os bracos.", "Leve o quadril para tras.", "Mantenha joelhos destravados.", "Volte caminhando para perto da parede."],
    postureTips: ["Punhos alinhados aos ombros.", "Pes firmes.", "Coluna longa sem forcar."],
    breathingTips: ["Inspire preparando.", "Expire recuando o quadril.", "Respire nas costas."],
    commonMistakes: ["Empurrar cabeca para baixo.", "Travar joelhos.", "Forcar ombros."]
  }),
  p({
    slug: "guerreiro-dois-leve",
    title: "Guerreiro II leve",
    yogaType: "LIGHT",
    area: "ENERGY",
    level: 5,
    context: "HOME",
    shortDescription: "Postura em pe adaptada, com base menor e permanencia curta.",
    objective: "Estimular presenca, energia e estabilidade sem intensidade alta.",
    durationSeconds: 600,
    intensity: "MODERATE_LIGHT",
    imageKey: "guerreiro-dois-leve",
    frames: ["postura da montanha", "abrir base curta", "dobrar joelho da frente", "bracos abrem", "retornar ao centro"],
    recommendedWhen: ["estado equilibrado", "energia boa", "vontade de progressao"],
    avoidWhen: ["dor no joelho", "tontura", "energia muito baixa"],
    howToSteps: ["Abra os pes em base confortavel.", "Vire o pe da frente para fora.", "Dobre pouco o joelho da frente.", "Abra os bracos sem tensionar ombros.", "Volte e troque o lado."],
    postureTips: ["Joelho acompanha a direcao do pe.", "Base menor e segura.", "Ombros longe das orelhas."],
    breathingTips: ["Respire continuo.", "Expire relaxando ombros.", "Nao prenda o ar na permanencia."],
    commonMistakes: ["Base muito ampla.", "Joelho cair para dentro.", "Contrair ombros."]
  }),
  p({
    slug: "sequencia-energia-leve",
    title: "Sequencia curta de energia leve",
    yogaType: "LIGHT",
    area: "ENERGY",
    level: 5,
    context: "HOME",
    shortDescription: "Mini fluxo com montanha, alongamento lateral e retorno consciente.",
    objective: "Ativar o corpo mantendo ritmo calmo.",
    durationSeconds: 720,
    intensity: "MODERATE_LIGHT",
    imageKey: "sequencia-energia-leve",
    frames: ["montanha", "bracos sobem", "alongamento lateral", "retorno ao centro", "fechamento com maos no peito"],
    recommendedWhen: ["energia estavel", "manha", "estado equilibrado"],
    avoidWhen: ["sono muito ruim", "estresse muito alto", "tontura"],
    howToSteps: ["Comece em montanha.", "Eleve os bracos com conforto.", "Incline para um lado.", "Volte e repita do outro lado.", "Finalize com respiracao tranquila."],
    postureTips: ["Joelhos soltos.", "Quadril estavel.", "Ombros relaxados."],
    breathingTips: ["Inspire ao subir.", "Expire na inclinacao.", "Respire natural no fechamento."],
    commonMistakes: ["Fazer rapido.", "Forcar lombar.", "Segurar respiracao."]
  }),

  p({
    slug: "postura-da-crianca",
    title: "Postura da crianca",
    yogaType: "RESTORATIVE",
    area: "STRESS",
    level: 1,
    context: "HOME",
    shortDescription: "Postura restaurativa simples com apoio para desacelerar.",
    objective: "Criar sensacao de recolhimento e pausa corporal.",
    durationSeconds: 240,
    intensity: "VERY_LIGHT",
    imageKey: "postura-da-crianca",
    frames: ["ajoelhar com apoio", "quadril recua", "tronco desce", "testa apoia ou fica elevada", "retorno devagar"],
    recommendedWhen: ["estresse alto", "fim do dia", "necessidade de pausa"],
    avoidWhen: ["dor no joelho", "desconforto ao ajoelhar"],
    howToSteps: ["Ajoelhe-se com manta se precisar.", "Leve o quadril para tras.", "Apoie o tronco com conforto.", "Descanse os bracos.", "Volte devagar."],
    postureTips: ["Use almofada sob o tronco.", "Separe joelhos se ficar melhor.", "Nao force testa no chao."],
    breathingTips: ["Respire nas costas.", "Expire soltando o peso.", "Mantenha ar natural."],
    commonMistakes: ["Forcar joelhos.", "Entrar rapido demais.", "Prender respiracao."]
  }),
  p({
    slug: "pernas-na-parede-adaptada",
    title: "Pernas apoiadas na parede adaptada",
    yogaType: "RESTORATIVE",
    area: "SLEEP",
    level: 1,
    context: "HOME",
    shortDescription: "Descanso com pernas elevadas de forma confortavel.",
    objective: "Desacelerar o corpo antes da noite ou apos cansaço.",
    durationSeconds: 300,
    intensity: "VERY_LIGHT",
    imageKey: "pernas-na-parede-adaptada",
    frames: ["sentar de lado na parede", "girar com apoio", "pernas sobem confortaveis", "bracos descansam", "voltar de lado"],
    recommendedWhen: ["sono ruim", "pernas cansadas", "fim de dia"],
    avoidWhen: ["desconforto lombar", "tontura deitado"],
    howToSteps: ["Sente-se perto da parede.", "Deite de lado e suba as pernas.", "Ajuste distancia ate ficar confortavel.", "Descanse os bracos.", "Saia rolando de lado."],
    postureTips: ["Nao precisa encostar quadril na parede.", "Use almofada se ajudar.", "Mantenha pes relaxados."],
    breathingTips: ["Respire suave.", "Alongue a expiracao se for confortavel."],
    commonMistakes: ["Ficar perto demais da parede.", "Forcar pernas retas.", "Levantar rapido."]
  }),
  p({
    slug: "torcao-sentada-suave",
    title: "Torcao sentada suave",
    yogaType: "RESTORATIVE",
    area: "MOBILITY",
    level: 2,
    context: "BOTH",
    shortDescription: "Rotacao leve da coluna, segura para pausa curta.",
    objective: "Soltar costas sem torcao intensa.",
    durationSeconds: 300,
    intensity: "VERY_LIGHT",
    imageKey: "torcao-sentada-suave",
    frames: ["sentar com coluna longa", "maos apoiam", "girar pouco", "permanecer respirando", "retornar e trocar lado"],
    recommendedWhen: ["muitas horas sentado", "trabalho em tela", "tensao leve"],
    avoidWhen: ["dor aguda na coluna", "gestacao sem orientacao"],
    howToSteps: ["Sente-se com pes apoiados.", "Alongue a coluna.", "Gire pouco para um lado.", "Respire duas vezes.", "Volte e repita do outro lado."],
    postureTips: ["Comece o giro pelo peito, nao pelo pescoço.", "Mantenha quadril estavel.", "Nao puxe com forca."],
    breathingTips: ["Inspire crescendo.", "Expire girando pouco.", "Respire sem travar."],
    commonMistakes: ["Forcar com as maos.", "Girar pescoço demais.", "Inclinar o tronco."]
  }),
  p({
    slug: "flexao-frente-restaurativa",
    title: "Flexao a frente restaurativa",
    yogaType: "RESTORATIVE",
    area: "SLEEP",
    level: 2,
    context: "HOME",
    shortDescription: "Flexao sentada com apoio para encerrar o dia.",
    objective: "Criar transicao calma sem alongamento agressivo.",
    durationSeconds: 360,
    intensity: "VERY_LIGHT",
    imageKey: "flexao-frente-restaurativa",
    frames: ["sentar com apoio", "almofada a frente", "tronco inclina", "bracos descansam", "retorno empilhando coluna"],
    recommendedWhen: ["noite", "sono sensivel", "cansaço"],
    avoidWhen: ["dor lombar forte", "tontura ao inclinar"],
    howToSteps: ["Sente-se sobre apoio.", "Coloque almofada a frente.", "Incline o tronco ate apoiar.", "Respire sem pressa.", "Volte devagar."],
    postureTips: ["Joelhos podem dobrar.", "Apoie o tronco.", "Nao busque tocar os pes."],
    breathingTips: ["Expire soltando peso.", "Mantenha respiracao leve."],
    commonMistakes: ["Forcar flexibilidade.", "Entrar sem apoio.", "Subir rapido."]
  }),
  p({
    slug: "respiracao-para-desacelerar-yoga",
    title: "Respiracao para desacelerar",
    yogaType: "RESTORATIVE",
    area: "STRESS",
    level: 3,
    context: "BOTH",
    shortDescription: "Pratica respiratoria com expiracao mais longa, sem retencao intensa.",
    objective: "Ajudar o corpo a sair do ritmo de urgencia.",
    durationSeconds: 360,
    intensity: "VERY_LIGHT",
    imageKey: "respiracao-para-desacelerar-yoga",
    frames: ["sentar com apoio", "uma mao no peito", "inspirar natural", "expirar longo", "descansar maos"],
    recommendedWhen: ["estresse alto", "antes de dormir", "pausa entre tarefas"],
    avoidWhen: ["tontura", "desconforto respiratorio"],
    howToSteps: ["Sente-se com conforto.", "Inspire sem forcar.", "Expire contando um pouco mais longo.", "Repita por alguns ciclos.", "Volte ao ritmo natural."],
    postureTips: ["Coluna apoiada se preciso.", "Ombros baixos.", "Rosto suave."],
    breathingTips: ["Nao segure o ar.", "Expiracao deve ser confortavel.", "Pare se houver tontura."],
    commonMistakes: ["Controlar demais.", "Prender ar.", "Fazer com pressa."]
  }),
  p({
    slug: "alongamento-pescoco-ombros-restaurativo",
    title: "Alongamento de pescoco e ombros",
    yogaType: "RESTORATIVE",
    area: "WORK_BREAK",
    level: 3,
    context: "WORK",
    shortDescription: "Pausa restaurativa para quem ficou muito tempo em tela.",
    objective: "Soltar tensao sem tirar o usuario do ambiente de trabalho.",
    durationSeconds: 360,
    intensity: "VERY_LIGHT",
    imageKey: "alongamento-pescoco-ombros-restaurativo",
    frames: ["sentar com pes apoiados", "inclinar cabeca", "mao apoia sem puxar", "ombros soltam", "retornar ao centro"],
    recommendedWhen: ["tela demais", "ombros tensos", "pausa de expediente"],
    avoidWhen: ["dor irradiada", "formigamento"],
    howToSteps: ["Sente-se com apoio.", "Incline a cabeca para um lado.", "Mantenha o ombro oposto relaxado.", "Respire duas vezes.", "Volte e troque o lado."],
    postureTips: ["Nao puxe a cabeca.", "Queixo levemente recolhido.", "Peito aberto sem rigidez."],
    breathingTips: ["Expire soltando ombros.", "Respire pequeno e confortavel."],
    commonMistakes: ["Puxar forte.", "Elevar ombro.", "Girar o pescoço rapido."]
  }),
  p({
    slug: "escaneamento-corporal-postura-confortavel",
    title: "Escaneamento corporal com postura confortavel",
    yogaType: "RESTORATIVE",
    area: "SLEEP",
    level: 4,
    context: "HOME",
    shortDescription: "Observacao guiada do corpo em postura de descanso.",
    objective: "Preparar transicao para descanso com mais presenca.",
    durationSeconds: 600,
    intensity: "VERY_LIGHT",
    imageKey: "escaneamento-corporal-postura-confortavel",
    frames: ["deitar com apoio", "ajustar pernas", "maos repousam", "observar corpo", "virar de lado para sair"],
    recommendedWhen: ["sono sensivel", "fim de noite", "cansaço mental"],
    avoidWhen: ["desconforto deitado", "sonolencia em local inseguro"],
    howToSteps: ["Deite-se ou sente-se com apoio.", "Observe pes e pernas.", "Passe atencao por tronco, ombros e rosto.", "Nao tente mudar tudo.", "Finalize com respiracao natural."],
    postureTips: ["Apoie joelhos se precisar.", "Solte mandibula.", "Mantenha o corpo aquecido."],
    breathingTips: ["Respire natural.", "Use expiracao suave para soltar tensao."],
    commonMistakes: ["Tentar relaxar a forca.", "Ficar desconfortavel por muito tempo.", "Cobrar silencio mental."]
  }),
  p({
    slug: "sequencia-fim-de-dia",
    title: "Sequencia de fim de dia",
    yogaType: "RESTORATIVE",
    area: "SLEEP",
    level: 4,
    context: "HOME",
    shortDescription: "Sequencia curta para sair do modo alerta.",
    objective: "Criar ritual de fechamento sem depender de tela.",
    durationSeconds: 720,
    intensity: "LIGHT",
    imageKey: "sequencia-fim-de-dia",
    frames: ["sentar com luz baixa", "respirar lento", "torcao suave", "postura da crianca com apoio", "retorno sentado"],
    recommendedWhen: ["noite", "apos trabalho", "sono agitado"],
    avoidWhen: ["dor no joelho", "tontura"],
    howToSteps: ["Diminua estimulos.", "Sente-se e respire.", "Faca torcao suave para cada lado.", "Entre em postura da crianca apoiada.", "Volte e encerre."],
    postureTips: ["Use apoios.", "Movimentos lentos.", "Nao force permanencia."],
    breathingTips: ["Expire mais longo.", "Respire pelo nariz se confortavel."],
    commonMistakes: ["Fazer como treino.", "Ligar telas no meio.", "Forcar amplitude."]
  }),
  p({
    slug: "ritual-sono-yoga-leve",
    title: "Ritual de sono com yoga leve",
    yogaType: "RESTORATIVE",
    area: "SLEEP",
    level: 5,
    context: "HOME",
    shortDescription: "Ritual restaurativo com apoio, respiracao e fechamento do dia.",
    objective: "Preparar a noite de forma gentil e repetivel.",
    durationSeconds: 900,
    intensity: "LIGHT",
    imageKey: "ritual-sono-yoga-leve",
    frames: ["ambiente com luz baixa", "sentar e respirar", "flexao restaurativa", "pernas apoiadas", "fechamento deitado"],
    recommendedWhen: ["rotina de sono", "fim de semana", "desacelerar"],
    avoidWhen: ["dor ao flexionar", "tontura deitado"],
    howToSteps: ["Reduza luzes.", "Faca respiracao tranquila.", "Use flexao com apoio.", "Eleve pernas se confortavel.", "Finalize com escaneamento corporal."],
    postureTips: ["Apoios sao bem-vindos.", "Conforto acima de forma.", "Saia das posturas devagar."],
    breathingTips: ["Respiracao leve.", "Expiracao longa sem reter ar."],
    commonMistakes: ["Transformar em meta.", "Fazer sem apoio.", "Ficar em dor."]
  }),
  p({
    slug: "yoga-restaurativa-pausa-trabalho",
    title: "Yoga restaurativa para pausa no trabalho",
    yogaType: "RESTORATIVE",
    area: "WORK_BREAK",
    level: 5,
    context: "WORK",
    shortDescription: "Pausa restaurativa discreta para cadeira e mesa.",
    objective: "Recuperar atencao e reduzir estimulos durante o expediente.",
    durationSeconds: 600,
    intensity: "LIGHT",
    imageKey: "yoga-restaurativa-pausa-trabalho",
    frames: ["sentar na cadeira", "pes apoiados", "maos no abdomen", "inclinar tronco com apoio na mesa", "retornar ao foco"],
    recommendedWhen: ["tela demais", "reuniao dificil", "pausa de expediente"],
    avoidWhen: ["ambiente inseguro", "dor ao inclinar"],
    howToSteps: ["Sente-se na cadeira.", "Apoie os pes.", "Respire com maos no abdomen.", "Incline o tronco sobre a mesa se houver espaco.", "Volte escolhendo uma acao simples."],
    postureTips: ["Use apoio da mesa.", "Nao deixe pes suspensos.", "Relaxe ombros."],
    breathingTips: ["Inspire sentindo costelas.", "Expire soltando peso."],
    commonMistakes: ["Ficar em postura desconfortavel.", "Forcar pescoço.", "Tentar esconder respiracao."]
  }),

  p({
    slug: "montanha-com-respiracao",
    title: "Postura da montanha com respiracao",
    yogaType: "FUNCTIONAL",
    area: "FOCUS",
    level: 1,
    context: "BOTH",
    shortDescription: "Base em pe com respiracao para reorganizar postura.",
    objective: "Criar estabilidade corporal antes de movimento ou trabalho.",
    durationSeconds: 180,
    intensity: "VERY_LIGHT",
    imageKey: "montanha-com-respiracao",
    frames: ["pes paralelos", "ajustar peso", "coluna longa", "maos no abdomen", "respirar e finalizar"],
    recommendedWhen: ["foco baixo", "inicio de pausa", "antes de caminhar"],
    avoidWhen: ["tontura em pe"],
    howToSteps: ["Fique em pe.", "Distribua o peso.", "Solte ombros.", "Respire por alguns ciclos.", "Observe se a postura mudou."],
    postureTips: ["Joelhos destravados.", "Pes firmes.", "Olhar suave."],
    breathingTips: ["Inspire natural.", "Expire sem pressa."],
    commonMistakes: ["Travar joelhos.", "Prender ar.", "Forcar barriga."]
  }),
  p({
    slug: "alongamento-coluna-em-pe",
    title: "Alongamento de coluna em pe",
    yogaType: "FUNCTIONAL",
    area: "MOBILITY",
    level: 1,
    context: "WORK",
    shortDescription: "Movimento simples para alongar coluna sem sair do lugar.",
    objective: "Reduzir rigidez de postura sentada.",
    durationSeconds: 180,
    intensity: "VERY_LIGHT",
    imageKey: "alongamento-coluna-em-pe",
    frames: ["ficar em pe", "maos nos quadris", "alongar coluna", "inclinar pouco", "retornar neutro"],
    recommendedWhen: ["muito tempo sentado", "pausa no trabalho", "energia baixa leve"],
    avoidWhen: ["dor lombar forte"],
    howToSteps: ["Fique em pe com pes firmes.", "Apoie maos nos quadris.", "Alongue a coluna.", "Incline pouco para frente ou lados.", "Retorne ao centro."],
    postureTips: ["Movimento pequeno.", "Joelhos soltos.", "Pescoço relaxado."],
    breathingTips: ["Inspire crescendo.", "Expire no movimento."],
    commonMistakes: ["Curvar rapido.", "Forcar lombar.", "Olhar para baixo demais."]
  }),
  p({
    slug: "mobilidade-de-quadril-yoga",
    title: "Mobilidade de quadril",
    yogaType: "FUNCTIONAL",
    area: "MOBILITY",
    level: 2,
    context: "HOME",
    shortDescription: "Mobilidade leve com apoio para quadris.",
    objective: "Preparar o corpo para ficar menos rigido.",
    durationSeconds: 300,
    intensity: "LIGHT",
    imageKey: "mobilidade-de-quadril-yoga",
    frames: ["ficar com apoio", "dobrar joelho", "circulo pequeno", "trocar direcao", "trocar perna"],
    recommendedWhen: ["quadril rigido", "antes de caminhada", "longas horas sentado"],
    avoidWhen: ["dor no quadril", "falta de equilibrio"],
    howToSteps: ["Use parede ou cadeira como apoio.", "Eleve um joelho pouco.", "Faca circulos pequenos.", "Troque o sentido.", "Repita do outro lado."],
    postureTips: ["Apoio firme.", "Tronco estavel.", "Amplitude pequena."],
    breathingTips: ["Respire continuo.", "Expire quando reduzir tensao."],
    commonMistakes: ["Circulos grandes demais.", "Sem apoio.", "Compensar na lombar."]
  }),
  p({
    slug: "abertura-de-peito",
    title: "Abertura de peito",
    yogaType: "FUNCTIONAL",
    area: "MOOD",
    level: 2,
    context: "BOTH",
    shortDescription: "Abertura suave de peito e ombros, sem arco profundo.",
    objective: "Soltar postura fechada e respirar com mais espaco.",
    durationSeconds: 300,
    intensity: "LIGHT",
    imageKey: "abertura-de-peito",
    frames: ["sentar ou ficar em pe", "entrelacar maos atras", "abrir peito pouco", "respirar", "soltar bracos"],
    recommendedWhen: ["humor baixo", "postura fechada", "tela demais"],
    avoidWhen: ["dor no ombro", "formigamento"],
    howToSteps: ["Fique sentado ou em pe.", "Leve maos para tras com conforto.", "Abra o peito sem jogar a cabeca.", "Respire duas vezes.", "Solte os bracos."],
    postureTips: ["Costelas sem projetar.", "Queixo neutro.", "Ombros longe das orelhas."],
    breathingTips: ["Inspire com peito amplo.", "Expire relaxando ombros."],
    commonMistakes: ["Arquear lombar.", "Jogar cabeca para tras.", "Forcar bracos."]
  }),
  p({
    slug: "alongamento-lateral-em-pe",
    title: "Alongamento lateral em pe",
    yogaType: "FUNCTIONAL",
    area: "ENERGY",
    level: 3,
    context: "BOTH",
    shortDescription: "Inclinação lateral em pe para mobilidade e energia suave.",
    objective: "Ativar corpo sem treino intenso.",
    durationSeconds: 360,
    intensity: "LIGHT",
    imageKey: "alongamento-lateral-em-pe",
    frames: ["montanha", "braco sobe", "inclinar lateral", "permanecer", "retornar ao centro"],
    recommendedWhen: ["energia moderada", "pausa ativa", "manha"],
    avoidWhen: ["tontura", "dor lateral"],
    howToSteps: ["Comece em montanha.", "Eleve um braco.", "Incline suavemente para o lado.", "Respire uma ou duas vezes.", "Volte e troque."],
    postureTips: ["Quadril estavel.", "Joelhos soltos.", "Nao colapse o tronco."],
    breathingTips: ["Inspire ao subir.", "Expire ao inclinar."],
    commonMistakes: ["Forcar alcance.", "Girar tronco.", "Prender ar."]
  }),
  p({
    slug: "agachamento-apoio-consciencia",
    title: "Agachamento com apoio e consciencia corporal",
    yogaType: "FUNCTIONAL",
    area: "ENERGY",
    level: 3,
    context: "HOME",
    shortDescription: "Agachamento curto com apoio, foco em controle e seguranca.",
    objective: "Ativar pernas com baixa pressao de performance.",
    durationSeconds: 420,
    intensity: "LIGHT",
    imageKey: "agachamento-apoio-consciencia",
    frames: ["ficar atras da cadeira", "maos apoiam", "quadril vai para tras", "dobrar joelhos pouco", "subir com controle"],
    recommendedWhen: ["energia estavel", "necessidade de ativacao", "pratica em casa"],
    avoidWhen: ["dor no joelho", "tontura", "sono muito ruim"],
    howToSteps: ["Use cadeira ou parede.", "Afaste pes na largura do quadril.", "Leve quadril para tras.", "Dobre pouco os joelhos.", "Suba empurrando o chao."],
    postureTips: ["Joelhos acompanham os pes.", "Coluna neutra.", "Apoio sempre disponivel."],
    breathingTips: ["Inspire ao descer.", "Expire ao subir."],
    commonMistakes: ["Joelhos para dentro.", "Descer demais.", "Tirar calcanhares do chao."]
  }),
  p({
    slug: "torcao-em-cadeira",
    title: "Torcao em cadeira",
    yogaType: "FUNCTIONAL",
    area: "WORK_BREAK",
    level: 4,
    context: "WORK",
    shortDescription: "Torcao leve na cadeira para pausa funcional no trabalho.",
    objective: "Soltar coluna e reorganizar foco durante expediente.",
    durationSeconds: 420,
    intensity: "LIGHT",
    imageKey: "torcao-em-cadeira",
    frames: ["sentar na cadeira", "pes apoiados", "mao apoia na lateral", "girar pouco", "retornar e trocar lado"],
    recommendedWhen: ["longas horas sentado", "foco baixo", "pausa no trabalho"],
    avoidWhen: ["dor aguda na coluna"],
    howToSteps: ["Sente-se na frente da cadeira.", "Apoie os pes.", "Gire suavemente para um lado.", "Respire.", "Volte e troque o lado."],
    postureTips: ["Giro pequeno.", "Quadril permanece estavel.", "Pes no chao."],
    breathingTips: ["Inspire alongando.", "Expire girando pouco."],
    commonMistakes: ["Puxar com forca.", "Torcer pescoço.", "Segurar ar."]
  }),
  p({
    slug: "sequencia-longas-horas-sentado",
    title: "Sequencia curta para longas horas sentado",
    yogaType: "FUNCTIONAL",
    area: "WORK_BREAK",
    level: 4,
    context: "WORK",
    shortDescription: "Sequencia de cadeira e postura em pe para quebrar rigidez.",
    objective: "Transformar pausa de trabalho em cuidado corporal simples.",
    durationSeconds: 600,
    intensity: "LIGHT",
    imageKey: "sequencia-longas-horas-sentado",
    frames: ["sentar com pes apoiados", "mobilidade de ombros", "torcao cadeira", "levantar em montanha", "retornar ao trabalho"],
    recommendedWhen: ["tela por muitas horas", "foco baixo", "pescoço rigido"],
    avoidWhen: ["dor ao levantar", "tontura"],
    howToSteps: ["Sente-se e respire.", "Mobilize ombros.", "Faca torcao em cadeira.", "Levante e encontre montanha.", "Volte com uma proxima acao."],
    postureTips: ["Movimentos pequenos.", "Use cadeira como apoio.", "Nao apresse transicoes."],
    breathingTips: ["Respire entre etapas.", "Expire antes de voltar ao trabalho."],
    commonMistakes: ["Fazer escondido e tenso.", "Levantar rapido.", "Forcar torcao."]
  }),
  p({
    slug: "fluxo-funcional-energia-leve",
    title: "Fluxo funcional para energia leve",
    yogaType: "FUNCTIONAL",
    area: "ENERGY",
    level: 5,
    context: "HOME",
    shortDescription: "Fluxo acessivel com montanha, lateral e agachamento apoiado.",
    objective: "Criar ativacao leve em dias favoraveis.",
    durationSeconds: 900,
    intensity: "MODERATE_LIGHT",
    imageKey: "fluxo-funcional-energia-leve",
    frames: ["montanha", "bracos sobem", "alongamento lateral", "agachamento com apoio", "fechamento em respiracao"],
    recommendedWhen: ["energia boa", "estado equilibrado", "vontade de movimento"],
    avoidWhen: ["energia baixa", "sono ruim", "estresse muito alto"],
    howToSteps: ["Comece em montanha.", "Eleve os bracos.", "Incline para cada lado.", "Faca agachamento curto com apoio.", "Finalize respirando."],
    postureTips: ["Amplitude confortavel.", "Joelhos alinhados.", "Apoio perto do corpo."],
    breathingTips: ["Movimento acompanha respiracao.", "Nao prenda o ar no agachamento."],
    commonMistakes: ["Transformar em treino intenso.", "Descer demais.", "Acelerar."]
  }),
  p({
    slug: "yoga-funcional-foco-trabalho",
    title: "Yoga funcional para foco no trabalho",
    yogaType: "FUNCTIONAL",
    area: "FOCUS",
    level: 5,
    context: "WORK",
    shortDescription: "Sequencia discreta para corpo e atencao antes de tarefa importante.",
    objective: "Reduzir dispersao usando postura, respiracao e movimento leve.",
    durationSeconds: 720,
    intensity: "LIGHT",
    imageKey: "yoga-funcional-foco-trabalho",
    frames: ["sentar e respirar", "pes firmes", "abrir peito", "torcao em cadeira", "nomear proxima acao"],
    recommendedWhen: ["foco baixo", "antes de reuniao", "trabalho em tela"],
    avoidWhen: ["dor no ombro ou coluna", "urgencia externa real"],
    howToSteps: ["Sente-se com os pes firmes.", "Respire por alguns ciclos.", "Abra o peito suavemente.", "Faca torcao pequena.", "Escolha uma unica proxima acao."],
    postureTips: ["Pes apoiados.", "Ombros baixos.", "Giro pequeno."],
    breathingTips: ["Inspire abrindo espaco.", "Expire soltando tensao."],
    commonMistakes: ["Tentar resolver tudo.", "Fazer rapido demais.", "Forcar pescoço."]
  })
];

export const yogaSequenceSeeds: YogaSequenceSeed[] = [
  {
    slug: "yoga-leve-comecar-dia",
    title: "Yoga leve para comecar o dia",
    description: "Respiracao, montanha e alongamento lateral para iniciar com energia tranquila.",
    level: 2,
    context: "HOME",
    durationSeconds: 600,
    goals: ["ENERGY", "FOCUS"],
    practiceSlugs: ["respiracao-sentada-tranquila", "postura-da-montanha", "alongamento-lateral-em-pe"],
    imageKey: "yoga-leve-comecar-dia"
  },
  {
    slug: "yoga-restaurativa-desacelerar",
    title: "Yoga restaurativa para desacelerar",
    description: "Praticas restaurativas para baixar ritmo sem prometer tratamento.",
    level: 2,
    context: "HOME",
    durationSeconds: 720,
    goals: ["STRESS", "SLEEP"],
    practiceSlugs: ["respiracao-para-desacelerar-yoga", "postura-da-crianca", "pernas-na-parede-adaptada"],
    imageKey: "yoga-restaurativa-desacelerar"
  },
  {
    slug: "yoga-foco-trabalho",
    title: "Yoga para foco no trabalho",
    description: "Sequencia de cadeira e respiracao para reduzir dispersao no expediente.",
    level: 3,
    context: "WORK",
    durationSeconds: 600,
    goals: ["FOCUS", "WORK_BREAK"],
    practiceSlugs: ["postura-facil-atencao-corpo", "torcao-em-cadeira", "yoga-funcional-foco-trabalho"],
    imageKey: "yoga-foco-trabalho"
  },
  {
    slug: "yoga-depois-horas-sentado",
    title: "Yoga leve para depois de muitas horas sentado",
    description: "Mobilidade de ombros, torcao leve e abertura do corpo.",
    level: 3,
    context: "WORK",
    durationSeconds: 720,
    goals: ["MOBILITY", "WORK_BREAK"],
    practiceSlugs: ["mobilidade-de-ombros-yoga", "torcao-sentada-suave", "sequencia-longas-horas-sentado"],
    imageKey: "yoga-depois-horas-sentado"
  },
  {
    slug: "yoga-fim-de-noite",
    title: "Yoga para fim de noite",
    description: "Ritual leve com apoio, respiracao e transicao sem tela.",
    level: 4,
    context: "HOME",
    durationSeconds: 900,
    goals: ["SLEEP", "STRESS"],
    practiceSlugs: ["sequencia-fim-de-dia", "flexao-frente-restaurativa", "escaneamento-corporal-postura-confortavel"],
    imageKey: "yoga-fim-de-noite"
  },
  {
    slug: "yoga-energia-baixa",
    title: "Yoga leve para energia baixa",
    description: "Movimentos muito leves para dias de pouca disposicao.",
    level: 1,
    context: "BOTH",
    durationSeconds: 480,
    goals: ["ENERGY", "MOBILITY"],
    practiceSlugs: ["respiracao-sentada-tranquila", "montanha-com-respiracao", "alongamento-coluna-em-pe"],
    imageKey: "yoga-energia-baixa"
  }
];
