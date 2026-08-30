export type ExerciseArea = "FOCUS" | "STRESS" | "ENERGY" | "MOOD" | "SLEEP";

export type ExerciseSeed = {
  id: string;
  area: ExerciseArea;
  level: number;
  title: string;
  shortDescription: string;
  durationMinutes: number;
  difficultyLabel: string;
  objective: string;
  steps: string[];
  contraindications: string[];
  recommendedWhen: string[];
  avoidWhen: string[];
  xpReward: number;
  imageKey: string;
  animationPromptKey: string;
};

const levelNames: Record<number, string> = {
  1: "Primeira pausa",
  2: "Consistencia leve",
  3: "Regulacao guiada",
  4: "Autonomia",
  5: "Pratica avancada"
};

const raw: Record<ExerciseArea, Array<[string, number, string]>> = {
  FOCUS: [
    ["Respiracao de chegada", 1, "Sair do automatico"], ["Olhar fixo em um ponto", 1, "Reduzir dispersao"], ["Uma tarefa apenas", 2, "Iniciar foco monotarefa"], ["Nomear 3 prioridades", 2, "Organizar atencao"], ["Pausa sem notificacao", 3, "Cortar interrupcoes"], ["Checklist minimo", 3, "Comecar com clareza"],
    ["Bloco de foco de 5 minutos", 5, "Treinar inicio rapido"], ["Tecnica 3-2-1 comecar", 3, "Vencer inercia"], ["Mesa limpa, mente limpa", 5, "Reduzir estimulos"], ["Foco com respiracao nasal", 4, "Estabilizar atencao"], ["Meta de uma linha", 3, "Clarificar intencao"], ["Fechar abas mentais", 5, "Diminuir carga cognitiva"],
    ["Pomodoro curto 10/2", 12, "Sustentar atencao"], ["Atencao plena no som", 5, "Treinar foco auditivo"], ["Escrita de distracoes", 5, "Esvaziar interrupcoes"], ["Reset visual 20-20-20", 3, "Descansar olhos"], ["Respiracao quadrada para foco", 4, "Regular ritmo mental"], ["Ritual de inicio", 5, "Criar gatilho de foco"],
    ["Bloco de foco 15 minutos", 15, "Aumentar resistencia"], ["Planejamento por energia", 7, "Usar melhor horario"], ["Matriz urgente/importante simples", 8, "Decidir melhor"], ["Revisao de distracoes", 8, "Identificar sabotadores"], ["Foco com ruido neutro", 10, "Treinar estabilidade"], ["Tecnica proxima acao", 5, "Reduzir procrastinacao"],
    ["Deep work iniciante", 25, "Foco prolongado"], ["Manha sem distracao", 20, "Proteger inicio do dia"], ["Revisao semanal de foco", 15, "Mapear padroes"], ["Sessao monotarefa profunda", 30, "Imersao total"], ["Planejamento de foco por blocos", 20, "Organizar semana"], ["Foco + respiracao + revisao", 20, "Combinar tecnicas"]
  ],
  STRESS: [
    ["Respiracao 4-4-6", 3, "Reduzir ativacao"], ["Soltar mandibula", 1, "Relaxar tensao"], ["Ombros para baixo", 1, "Aliviar corpo"], ["Maos quentes", 2, "Aterramento corporal"], ["Nomear o que sente", 2, "Regular emocao"], ["Pausa de agua", 2, "Interromper ciclo de estresse"],
    ["Respiracao diafragmatica", 4, "Ativar calma"], ["Relaxamento de maos e bracos", 5, "Reduzir tensao muscular"], ["Tecnica 5-4-3-2-1", 5, "Grounding sensorial"], ["Caminhada lenta", 5, "Descarregar tensao"], ["Escrita o que esta pesando", 5, "Organizar preocupacao"], ["Pausa sem tela", 5, "Reduzir estimulo"],
    ["Relaxamento muscular progressivo curto", 7, "Tensao e relaxamento"], ["Respiracao alongada", 6, "Prolongar exalacao"], ["Imaginacao guiada segura", 8, "Criar sensacao de protecao"], ["Alongamento de pescoco e ombros", 6, "Soltar carga fisica"], ["Diario de preocupacao controlada", 8, "Separar problema de ruminacao"], ["Pausa de autocompaixao", 5, "Reduzir autocobranca"],
    ["Relaxamento muscular progressivo completo", 12, "Relaxamento profundo"], ["Plano o que esta sob meu controle", 10, "Reduzir impotencia"], ["Caminhada consciente", 10, "Regular corpo e mente"], ["Reset de ambiente", 10, "Reduzir caos externo"], ["Tecnica de aceitacao breve", 8, "Diminuir resistencia"], ["Descompressao pos-trabalho", 12, "Separar trabalho e descanso"],
    ["Sessao completa de respiracao + PMR", 20, "Relaxamento estruturado"], ["Rotina antiestresse de fim de dia", 20, "Desligamento gradual"], ["Mapa de gatilhos de estresse", 20, "Identificar padroes"], ["Plano preventivo da semana", 20, "Evitar sobrecarga"], ["Caminhada + escrita reflexiva", 25, "Processar tensao"], ["Ritual completo de regulacao", 30, "Combinar corpo, respiracao e escrita"]
  ],
  ENERGY: [
    ["Levantar e respirar", 1, "Sair da inercia"], ["Alongar bracos acima da cabeca", 1, "Ativar corpo"], ["Beber agua conscientemente", 2, "Reidratar"], ["Marcha leve parada", 2, "Aumentar circulacao"], ["Abrir janela ou buscar luz", 2, "Estimulo ambiental"], ["Reset postural", 2, "Reduzir fadiga corporal"],
    ["Mobilidade de coluna", 4, "Destravar corpo"], ["Caminhada curta", 5, "Ativar energia"], ["Agachamento leve", 3, "Ativacao muscular"], ["Alongamento dinamico", 5, "Acordar corpo"], ["Respiracao energizante suave", 3, "Aumentar alerta"], ["Organizacao rapida do espaco", 5, "Reduzir sensacao de peso"],
    ["Ativacao de 7 minutos", 7, "Elevar disposicao"], ["Caminhada consciente com ritmo", 8, "Energia sem excesso"], ["Jumping baixo impacto", 5, "Cardio leve"], ["Mobilidade funcional", 8, "Corpo inteiro"], ["Escada ou subida leve", 5, "Ativacao rapida"], ["Pausa solar segura", 5, "Luz e presenca"],
    ["Funcional em casa iniciante", 10, "Energia e forca"], ["Pular corda iniciante", 5, "Cardio curto"], ["Circuito leve 3 exercicios", 12, "Resistencia inicial"], ["Luta sombra leve", 8, "Ativar disposicao"], ["Yoga de energia", 10, "Energia com controle"], ["Caminhada de 15 minutos", 15, "Regular vigor"],
    ["Circuito funcional 15 minutos", 15, "Energia sustentada"], ["Pular corda por etapas", 12, "Cardio progressivo"], ["Caminhada rapida", 20, "Resistencia"], ["Treino corpo inteiro leve", 20, "Ativacao global"], ["Yoga flow energetico", 20, "Mobilidade e vigor"], ["Rotina semanal de energia", 25, "Planejar energia por dia"]
  ],
  MOOD: [
    ["Nomear o humor atual", 1, "Consciencia emocional"], ["Uma coisa boa agora", 2, "Redirecionar atencao"], ["Mao no coracao", 2, "Autocompaixao"], ["Respiracao suave", 2, "Regular emocao"], ["Musica curta positiva", 3, "Alterar estado"], ["Mini gratidao", 3, "Aumentar afeto positivo"],
    ["Diario de 3 linhas", 5, "Expressar emocao"], ["Lista do que nao foi tao ruim", 5, "Reequilibrar percepcao"], ["Mensagem para alguem", 5, "Conexao social"], ["Caminhada leve", 5, "Humor via movimento"], ["Foto de algo bonito", 3, "Atencao positiva"], ["Playlist de regulacao", 5, "Apoio emocional"],
    ["Ativacao comportamental simples", 10, "Fazer algo com valor"], ["Diario de descarrego mental", 8, "Tirar peso da mente"], ["Reestruturacao leve", 8, "Questionar pensamento"], ["Gratidao detalhada", 8, "Ampliar perspectiva"], ["Pequeno prazer planejado", 10, "Reforco positivo"], ["Caminhada com observacao", 10, "Contato com ambiente"],
    ["Plano de atividade prazerosa", 15, "Aumentar reforco"], ["Carta de autocompaixao", 15, "Reduzir autocritica"], ["Registro pensamento/evidencia", 15, "Flexibilizar mente"], ["Acao de conexao social", 10, "Reduzir isolamento"], ["Atividade com dominio", 15, "Sentir competencia"], ["Organizacao de ambiente emocional", 15, "Melhorar contexto"],
    ["Plano semanal de ativacao comportamental", 20, "Humor via rotina"], ["Projeto pequeno com sentido", 30, "Engajamento"], ["Revisao de padroes de humor", 20, "Autoconhecimento"], ["Gratidao para outra pessoa", 15, "Fortalecer vinculo"], ["Exposicao leve a algo evitado", 20, "Retomar confianca"], ["Ritual de cuidado emocional", 30, "Combinar escrita, acao e descanso"]
  ],
  SLEEP: [
    ["Respiracao antes de dormir", 3, "Desacelerar"], ["Luz baixa", 2, "Preparar ambiente"], ["Celular longe da cama", 1, "Reduzir estimulo"], ["Anotar pendencia de amanha", 3, "Esvaziar preocupacao"], ["Alongar pescoco e ombros", 3, "Soltar tensao"], ["Ritual de fechamento", 3, "Sinalizar descanso"],
    ["Diario de desligamento", 5, "Fechar o dia"], ["Respiracao 4-7-8 suave", 4, "Relaxar"], ["Relaxamento dos pes a cabeca", 5, "Corpo pronto"], ["Preparar quarto", 5, "Higiene do sono"], ["Leitura leve sem tela", 10, "Transicao"], ["Banho morno planejado", 10, "Relaxamento"],
    ["Relaxamento muscular progressivo curto para sono", 8, "Reduzir tensao"], ["Imaginacao guiada para descanso", 8, "Acalmar mente"], ["Escrita de preocupacoes", 8, "Reduzir ruminacao"], ["Alongamento restaurativo", 8, "Preparar sono"], ["Escaneamento corporal", 10, "Desligar corpo"], ["Rotina sem tela 30 min", 30, "Higiene do sono"],
    ["Horario fixo de desaceleracao", 15, "Regular rotina"], ["Plano de cafeina", 5, "Melhorar sono"], ["Revisao de habitos noturnos", 10, "Identificar gatilhos"], ["Ritual completo de sono", 20, "Consistencia"], ["Tecnica deixar para amanha", 10, "Reduzir mente acelerada"], ["Rotina de quarto minimalista", 15, "Ambiente favoravel"],
    ["Programa de 7 noites", 7, "Criar consistencia"], ["Diario de sono", 5, "Identificar padroes"], ["Janela de desaceleracao de 60 min", 60, "Sono profundo"], ["Protocolo noite dificil", 20, "Evitar frustracao"], ["Rotina semanal de sono", 20, "Ajustar agenda"], ["Sono + respiracao + ambiente", 30, "Combinar fatores"]
  ]
};

const areaLabels: Record<ExerciseArea, string> = {
  FOCUS: "Foco",
  STRESS: "Antiestresse",
  ENERGY: "Energia",
  MOOD: "Humor",
  SLEEP: "Sono"
};

function slug(input: string) {
  return input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function stepsFor(title: string, objective: string, duration: number) {
  return [
    "Prepare um espaco seguro e reduza distracoes.",
    `Pratique ${title.toLowerCase()} por ${duration} minuto${duration === 1 ? "" : "s"}, em ritmo confortavel.`,
    `Observe o objetivo: ${objective.toLowerCase()}.`,
    "Finalize respirando devagar e escolha uma proxima acao simples."
  ];
}

export const exerciseSeeds: ExerciseSeed[] = Object.entries(raw).flatMap(([areaKey, items]) =>
  items.map(([title, durationMinutes, objective], index) => {
    const area = areaKey as ExerciseArea;
    const level = Math.floor(index / 6) + 1;
    return {
      id: `${area.toLowerCase()}-${String(index + 1).padStart(2, "0")}-${slug(title)}`,
      area,
      level,
      title,
      shortDescription: `${areaLabels[area]} - ${objective}.`,
      durationMinutes,
      difficultyLabel: levelNames[level],
      objective,
      steps: stepsFor(title, objective, durationMinutes),
      contraindications: ["Dor, tontura, falta de ar intensa ou desconforto incomum.", "Limite fisico, lesao recente ou orientacao profissional para evitar a pratica."],
      recommendedWhen: [`Quando ${areaLabels[area].toLowerCase()} for prioridade do dia.`, "Quando voce quiser uma pausa preventiva e segura."],
      avoidWhen: level >= 4 ? ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.", "Reduza para nivel 1 ou 2 se o corpo pedir descanso."] : ["Evite se houver desconforto fisico ou emocional intenso."],
      xpReward: level <= 2 ? 10 : level === 3 ? 15 : level === 4 ? 20 : 25,
      imageKey: `${area.toLowerCase()}_${level}_${slug(title)}`,
      animationPromptKey: `${area.toLowerCase()}_${level}_calm_guided_motion`
    };
  })
);

export const partnerSeeds = [
  {
    name: "Wellhub",
    type: "CORPORATE_BENEFIT",
    benefitProvider: "WELLHUB",
    websiteUrl: "https://wellhub.com/",
    status: "FUTURE_INTEGRATION",
    description: "Conecte sua rotina de bem-estar com academias, estudios e apps parceiros."
  },
  {
    name: "TotalPass",
    type: "CORPORATE_BENEFIT",
    benefitProvider: "TOTALPASS",
    websiteUrl: "https://www.totalpass.com/",
    status: "FUTURE_INTEGRATION",
    description: "Acesse academias, estudios e experiencias de saude integrada quando disponivel pela sua empresa."
  },
  {
    name: "Academia local",
    type: "GYM",
    benefitProvider: "LOCAL_PARTNER",
    status: "COMING_SOON",
    description: "Encontre ou cadastre uma academia parceira para complementar sua rotina."
  },
  {
    name: "Personal trainer",
    type: "PERSONAL_TRAINER",
    benefitProvider: "LOCAL_PARTNER",
    status: "COMING_SOON",
    description: "Conecte treinos em casa com orientacao profissional quando disponivel."
  }
];
