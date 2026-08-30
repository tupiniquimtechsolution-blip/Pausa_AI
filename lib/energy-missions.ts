export type EnergyDirection = "dar-energia" | "gastar-energia";

export type EnergyMission = {
  slug: string;
  title: string;
  direction: EnergyDirection;
  presentation: string;
  purpose: string;
  level: "Iniciante" | "Intermediario" | "Avancado";
  duration: string;
  steps: string[];
  progression: string[];
  observations: string[];
  cautions: string[];
  tags: string[];
};

export const energyMissionSections = [
  {
    id: "dar-energia" as const,
    label: "Dar energia",
    title: "Dar energia",
    description: "Para sono, preguica, fadiga, baixa disposicao, corpo parado e falta de clareza mental."
  },
  {
    id: "gastar-energia" as const,
    label: "Gastar energia",
    title: "Gastar energia",
    description: "Para ansiedade, agitacao, excesso de energia, inquietacao, irritacao e necessidade de descarregar tensao."
  }
];

export const energyMissions: EnergyMission[] = [
  {
    slug: "alongamento-matinal",
    title: "Alongamento matinal",
    direction: "dar-energia",
    presentation: "Espreguicar e esticar o corpo ao acordar pode ajudar a lubrificar articulacoes, despertar musculos e iniciar o dia com consciencia corporal.",
    purpose: "Acordar corpo e mente sem intensidade alta.",
    level: "Iniciante",
    duration: "3 a 6 minutos",
    steps: ["Sente-se ou fique em pe com apoio.", "Eleve os bracos sem forcar.", "Incline o tronco suavemente para os lados.", "Movimente pescoço e ombros com amplitude pequena.", "Finalize com respiracao lenta."],
    progression: ["Comece com 3 minutos.", "Aumente para 6 minutos.", "Inclua mobilidade de quadril quando estiver confortavel."],
    observations: ["Funciona melhor com movimentos lentos e respiração natural."],
    cautions: ["Nao force articulacoes ao acordar; pare se houver dor aguda ou tontura."],
    tags: ["energia baixa", "rigidez matinal", "corpo parado"]
  },
  {
    slug: "caminhada-leve-moderada",
    title: "Caminhada leve a moderada",
    direction: "dar-energia",
    presentation: "Caminhada de 20 a 30 minutos, preferencialmente ao ar livre, pode ajudar no estado de alerta e na circulacao.",
    purpose: "Aumentar disposicao com movimento ritmado e luz natural quando possivel.",
    level: "Iniciante",
    duration: "20 a 30 minutos",
    steps: ["Escolha um trajeto seguro.", "Comece em ritmo leve por 3 minutos.", "Caminhe em ritmo confortavel.", "Observe luz, ar e postura.", "Termine reduzindo o ritmo."],
    progression: ["5 a 10 minutos em dias cansados.", "20 minutos em ritmo leve.", "30 minutos em ritmo moderado."],
    observations: ["A luz natural pode ajudar o corpo a perceber o periodo do dia."],
    cautions: ["Evite sol forte, calor excessivo ou locais inseguros. Pare se houver falta de ar intensa."],
    tags: ["luz natural", "caminhada", "alerta"]
  },
  {
    slug: "polichinelos-pausa-ativa",
    title: "Polichinelos",
    direction: "dar-energia",
    presentation: "Pausa ativa curta que eleva a frequencia cardiaca rapidamente e estimula circulacao.",
    purpose: "Quebrar sonolencia e corpo parado em poucos minutos.",
    level: "Intermediario",
    duration: "1 a 3 minutos",
    steps: ["Aqueça tornozelos e ombros.", "Faca 20 a 30 segundos de polichinelos.", "Descanse respirando.", "Repita de 2 a 4 vezes.", "Use versao sem salto se preferir."],
    progression: ["Baixo impacto: passo lateral abrindo bracos.", "Intermediario: blocos de 20 segundos.", "Avancado: blocos de 40 segundos com descanso."],
    observations: ["Serve como pausa curta, nao como obrigacao de treino."],
    cautions: ["Adapte em caso de dor em joelhos, tornozelos, coluna, gestacao ou lesao recente."],
    tags: ["pausa ativa", "cardio leve", "sonolencia"]
  },
  {
    slug: "respiracao-profunda-pranayama-energia",
    title: "Respiracao profunda / Pranayama",
    direction: "dar-energia",
    presentation: "Exercicios respiratorios podem aumentar percepcao corporal, clareza mental e sensacao de energia.",
    purpose: "Criar alerta suave quando a mente esta lenta.",
    level: "Iniciante",
    duration: "2 a 5 minutos",
    steps: ["Sente-se com a coluna confortavel.", "Inspire pelo nariz em 4 segundos.", "Segure por 1 a 2 segundos se for confortavel.", "Expire por 4 a 6 segundos.", "Repita sem forcar."],
    progression: ["2 minutos.", "5 minutos.", "Combine com alongamento leve."],
    observations: ["Respire de forma confortavel; pranayama deve ser adaptado ao corpo."],
    cautions: ["Pare se houver tontura, formigamento, desconforto ou falta de ar."],
    tags: ["respiracao", "clareza mental", "energia baixa"]
  },
  {
    slug: "fortalecimento-pilates-disposicao",
    title: "Musculacao ou Pilates",
    direction: "dar-energia",
    presentation: "Fortalecimento e resistencia fisica podem contribuir para mais disposicao ao longo da rotina.",
    purpose: "Construir energia de base com pratica progressiva.",
    level: "Intermediario",
    duration: "10 a 30 minutos",
    steps: ["Escolha exercicios simples e conhecidos.", "Comece com aquecimento leve.", "Faca movimentos controlados.", "Descanse entre series.", "Finalize com respiracao e alongamento leve."],
    progression: ["10 minutos de base.", "2 a 3 series leves.", "Aumente volume apenas se recuperar bem."],
    observations: ["Consistencia importa mais do que intensidade alta."],
    cautions: ["Procure orientacao se houver lesao, dor persistente ou condicao medica."],
    tags: ["forca", "pilates", "disposicao"]
  },
  {
    slug: "corrida-descarga",
    title: "Corrida",
    direction: "gastar-energia",
    presentation: "Atividade de alto gasto energetico e forte estimulo cardiovascular, util quando ha excesso de energia.",
    purpose: "Descarregar agitacao de forma estruturada.",
    level: "Avancado",
    duration: "10 a 30 minutos",
    steps: ["Aqueça caminhando.", "Alterne corrida leve e caminhada.", "Mantenha ritmo em que ainda consiga falar frases curtas.", "Reduza o ritmo antes de parar.", "Hidrate-se e observe o corpo."],
    progression: ["1 minuto correndo + 2 caminhando.", "Blocos de 3 minutos.", "Corrida continua apenas se o corpo estiver adaptado."],
    observations: ["Gasto calorico varia conforme peso, ritmo, idade e condicionamento; nao use numero fixo como regra."],
    cautions: ["Evite com dor, tontura, falta de ar intensa, lesao recente ou orientacao para evitar impacto."],
    tags: ["ansiedade", "energia acumulada", "cardio"]
  },
  {
    slug: "pular-corda-descarga",
    title: "Pular corda",
    direction: "gastar-energia",
    presentation: "Exercicio cardiovascular intenso e de alto impacto.",
    purpose: "Gastar energia rapidamente com blocos curtos.",
    level: "Avancado",
    duration: "3 a 10 minutos",
    steps: ["Aqueça tornozelos e panturrilhas.", "Comece com saltos simulados sem corda.", "Faca blocos de 15 a 30 segundos.", "Descanse por tempo igual ou maior.", "Finalize caminhando devagar."],
    progression: ["Saltos simulados.", "Blocos de 15 segundos.", "Blocos de 30 segundos com pausa."],
    observations: ["Pode ser trocado por marcha rapida ou step touch sem impacto."],
    cautions: ["Inclua alerta para joelhos, tornozelos, coluna e iniciantes. Pare se houver dor."],
    tags: ["cardio intenso", "impacto", "descarga"]
  },
  {
    slug: "treino-funcional-hiit",
    title: "Treino funcional / HIIT",
    direction: "gastar-energia",
    presentation: "Alterna esforco intenso e recuperacao com burpees, agachamentos, polichinelos e movimentos combinados.",
    purpose: "Descarregar tensao e excesso de energia com controle.",
    level: "Avancado",
    duration: "6 a 15 minutos",
    steps: ["Aqueça por 3 minutos.", "Escolha 3 movimentos.", "Faca 20 segundos de esforco e 40 de descanso.", "Repita 3 a 6 ciclos.", "Finalize com caminhada e respiracao."],
    progression: ["Baixo impacto.", "20/40.", "30/30 apenas se estiver bem condicionado."],
    observations: ["Intenso nao precisa ser extremo; qualidade vem antes de exaustao."],
    cautions: ["Evite se houver dor, pressao no peito, tontura, lesao recente ou condicao sem liberacao profissional."],
    tags: ["hiit", "funcional", "energia acumulada"]
  },
  {
    slug: "lutas-sombra-descarga",
    title: "Lutas e treino de sombra",
    direction: "gastar-energia",
    presentation: "Boxe, muay thai, treino de sombra e movimentos sem contato trabalham explosao, coordenacao e gasto energetico.",
    purpose: "Descarregar inquietacao com movimento coordenado sem contato.",
    level: "Intermediario",
    duration: "5 a 12 minutos",
    steps: ["Abra espaco ao redor.", "Faca guarda leve.", "Solte jabs e diretos no ar, sem travar cotovelos.", "Inclua deslocamentos pequenos.", "Respire e reduza ritmo para finalizar."],
    progression: ["Movimentos lentos.", "Rounds de 30 segundos.", "Rounds de 1 minuto com pausa."],
    observations: ["Nao precisa bater em objeto; o foco e coordenacao e descarga segura."],
    cautions: ["Evite movimentos explosivos se houver dor em ombros, punhos, cotovelos ou coluna."],
    tags: ["luta", "sombra", "irritacao"]
  },
  {
    slug: "subir-escadas-descarga",
    title: "Subir escadas",
    direction: "gastar-energia",
    presentation: "Opcao pratica do dia a dia com ativacao de pernas e gluteos.",
    purpose: "Gastar energia em poucos minutos sem equipamento.",
    level: "Intermediario",
    duration: "2 a 8 minutos",
    steps: ["Use corrimao se houver.", "Suba em ritmo controlado.", "Desca devagar ou use elevador se precisar.", "Faca pausas curtas.", "Pare antes de perder o controle da respiracao."],
    progression: ["1 lance.", "2 a 3 lances.", "Blocos com descanso entre subidas."],
    observations: ["Boa opcao quando nao ha tempo para treino completo."],
    cautions: ["Inclua alerta para joelhos, tontura e falta de ar excessiva."],
    tags: ["escadas", "pernas", "descarga"]
  }
];
