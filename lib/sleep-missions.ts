export type SleepDirection = "dar-sono" | "tirar-sono";

export type SleepMission = {
  slug: string;
  title: string;
  direction: SleepDirection;
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

export const sleepMissionSections = [
  {
    id: "dar-sono" as const,
    label: "Dar sono",
    title: "Dar sono",
    description: "Para dificuldade para dormir, mente acelerada, tensao corporal, ansiedade noturna e necessidade de relaxamento."
  },
  {
    id: "tirar-sono" as const,
    label: "Tirar sono",
    title: "Tirar sono",
    description: "Para sonolencia durante o dia, queda de energia, cansaco leve e necessidade de alerta temporario."
  }
];

export const sleepMissions: SleepMission[] = [
  {
    slug: "tecnica-4-7-8",
    title: "Tecnica 4-7-8",
    direction: "dar-sono",
    presentation: "Respiracao ritmada para ajudar a desacelerar o ritmo corporal antes de dormir.",
    purpose: "Reduzir ativacao e criar uma transicao de descanso.",
    level: "Iniciante",
    duration: "2 a 4 minutos",
    steps: ["Inspire pelo nariz contando ate 4.", "Segure o ar por 7 segundos.", "Expire lentamente pela boca contando ate 8.", "Repita 4 ciclos.", "Volte a respiracao natural."],
    progression: ["Comece com 2 ciclos.", "Avance para 4 ciclos.", "Use antes de deitar."],
    observations: ["A contagem deve ser confortavel; adapte se necessario."],
    cautions: ["Nao prenda o ar se houver tontura, falta de ar ou desconforto."],
    tags: ["sono", "respiracao", "mente acelerada"]
  },
  {
    slug: "relaxamento-muscular-progressivo",
    title: "Relaxamento muscular progressivo",
    direction: "dar-sono",
    presentation: "Tensionar e relaxar grupos musculares ajuda a perceber e soltar tensao acumulada.",
    purpose: "Reduzir tensao corporal antes do sono.",
    level: "Intermediario",
    duration: "8 a 15 minutos",
    steps: ["Deite-se confortavelmente.", "Tensione cada grupo muscular por 5 segundos.", "Relaxe em seguida.", "Comece pelo rosto e desca ate os pes.", "Respire de forma lenta entre grupos."],
    progression: ["Versao curta: rosto, ombros, maos e pes.", "Versao completa: corpo inteiro.", "Use 3 a 5 noites por semana."],
    observations: ["A tensao deve ser leve a moderada, nunca dolorosa."],
    cautions: ["Evite tensionar regioes com dor, lesao ou cirurgia recente."],
    tags: ["sono", "tensao corporal", "relaxamento"]
  },
  {
    slug: "tecnica-militar-sono",
    title: "Tecnica militar",
    direction: "dar-sono",
    presentation: "Sequencia de relaxamento por regioes do corpo com imagem mental calma.",
    purpose: "Ajudar corpo e mente a soltar esforco mental.",
    level: "Intermediario",
    duration: "5 a 10 minutos",
    steps: ["Relaxe rosto, lingua, mandibula e regiao dos olhos.", "Solte ombros e bracos.", "Relaxe peito, pernas e pes.", "Imagine um cenario calmo.", "Evite esforco mental; volte ao relaxamento quando distrair."],
    progression: ["Comece sentado.", "Depois pratique deitado.", "Repita por algumas noites para ganhar familiaridade."],
    observations: ["Nao precisa dormir imediatamente para a tecnica ser util."],
    cautions: ["Se imagens mentais aumentarem ansiedade, volte para respiracao natural."],
    tags: ["sono", "relaxamento", "mente acelerada"]
  },
  {
    slug: "yoga-noturna-alongamento-suave",
    title: "Yoga noturna ou alongamento suave",
    direction: "dar-sono",
    presentation: "Sequencia leve de 10 a 15 minutos para reduzir tensao sem elevar demais a ativacao.",
    purpose: "Preparar corpo e mente para descanso.",
    level: "Iniciante",
    duration: "10 a 15 minutos",
    steps: ["Escolha movimentos lentos.", "Alongue pescoco e ombros.", "Inclua torcao lombar leve.", "Fique em posicoes confortaveis.", "Finalize com respiracao lenta."],
    progression: ["5 minutos.", "10 minutos.", "15 minutos quando o corpo pedir."],
    observations: ["Use luz baixa e evite telas durante a pratica."],
    cautions: ["Evite exercicios intensos antes de dormir e pare se houver dor."],
    tags: ["sono", "alongamento", "yoga"]
  },
  {
    slug: "banho-morno-relaxamento",
    title: "Banho morno",
    direction: "dar-sono",
    presentation: "Banho morno cerca de 1 hora antes de dormir pode ajudar o corpo a entrar em estado de relaxamento.",
    purpose: "Criar um ritual ambiental de desaceleracao.",
    level: "Iniciante",
    duration: "5 a 15 minutos",
    steps: ["Planeje o banho com antecedencia.", "Use temperatura morna, nao muito quente.", "Evite celular durante o ritual.", "Depois reduza luzes.", "Faca uma atividade calma."],
    progression: ["Use em noites agitadas.", "Transforme em rotina de 2 a 3 noites.", "Combine com luz baixa."],
    observations: ["O horario importa: muito perto da cama pode nao ser confortavel para todos."],
    cautions: ["Evite agua muito quente, tontura ou ambientes inseguros."],
    tags: ["sono", "banho", "relaxamento"]
  },
  {
    slug: "higiene-do-sono",
    title: "Higiene do sono",
    direction: "dar-sono",
    presentation: "Conjunto de ajustes de ambiente e rotina para favorecer uma transicao noturna mais consistente.",
    purpose: "Reduzir estimulos e proteger regularidade do sono.",
    level: "Iniciante",
    duration: "30 a 60 minutos de preparacao",
    steps: ["Evite telas 30 a 60 minutos antes de dormir.", "Reduza luz forte.", "Deixe o quarto escuro e fresco.", "Evite cafeina a noite.", "Crie rotina regular de deitar e levantar."],
    progression: ["Escolha 1 ajuste.", "Depois 2 ajustes.", "Revise a rotina semanalmente."],
    observations: ["Mudancas pequenas e repetidas tendem a funcionar melhor que regras rigidas."],
    cautions: ["Se a insonia persistir, procure orientacao profissional."],
    tags: ["sono", "telas", "rotina"]
  },
  {
    slug: "agua-gelada-alerta",
    title: "Agua gelada",
    direction: "tirar-sono",
    presentation: "Lavar o rosto com agua fria pode gerar estimulo sensorial e sensacao rapida de alerta.",
    purpose: "Ajudar a acordar temporariamente em momentos de sonolencia leve.",
    level: "Iniciante",
    duration: "1 minuto",
    steps: ["Va ate uma pia segura.", "Lave o rosto com agua fria.", "Respire naturalmente.", "Seque o rosto.", "Volte com uma tarefa pequena."],
    progression: ["Use como pausa isolada.", "Combine com luz clara.", "Combine com caminhada curta."],
    observations: ["E um recurso paliativo, nao substitui sono adequado."],
    cautions: ["Evite se houver desconforto intenso, sensibilidade ou orientacao medica contraria."],
    tags: ["sonolencia", "alerta", "sensorial"]
  },
  {
    slug: "movimento-alongamento-tirar-sono",
    title: "Movimento e alongamento",
    direction: "tirar-sono",
    presentation: "Levantar a cada 30 minutos e movimentar bracos, pernas e pescoco pode reduzir sonolencia leve.",
    purpose: "Reativar circulacao e postura durante o dia.",
    level: "Iniciante",
    duration: "2 a 5 minutos",
    steps: ["Levante com calma.", "Movimente ombros e bracos.", "Mexa pernas e tornozelos.", "Alongue pescoco com amplitude pequena.", "Respire e retome."],
    progression: ["2 minutos.", "5 minutos.", "Pausa a cada 30 a 60 minutos."],
    observations: ["Use principalmente quando estiver muito tempo sentado."],
    cautions: ["Pare se houver dor, tontura ou falta de ar incomum."],
    tags: ["sonolencia", "movimento", "muito tempo sentado"]
  },
  {
    slug: "caminhada-curta-luz-solar",
    title: "Caminhada curta com luz solar",
    direction: "tirar-sono",
    presentation: "5 a 10 minutos ao ar livre, quando possivel, podem ajudar no estado de alerta.",
    purpose: "Usar movimento e luz natural para reduzir queda de energia.",
    level: "Iniciante",
    duration: "5 a 10 minutos",
    steps: ["Escolha local seguro.", "Caminhe em ritmo leve.", "Olhe para o ambiente sem encarar sol forte.", "Respire de forma natural.", "Volte antes de cansar demais."],
    progression: ["5 minutos.", "10 minutos.", "Inclua em pausa do trabalho."],
    observations: ["Luz natural ajuda o corpo a perceber o periodo do dia."],
    cautions: ["Use protecao adequada e evite horarios de sol forte."],
    tags: ["sonolencia", "luz natural", "caminhada"]
  },
  {
    slug: "respiracao-energizante",
    title: "Respiracao energizante",
    direction: "tirar-sono",
    presentation: "Respiracao curta e ativa para aumentar alerta sem exagero.",
    purpose: "Apoiar energia temporaria durante queda de atencao.",
    level: "Iniciante",
    duration: "1 a 2 minutos",
    steps: ["Inspire profundamente pelo nariz.", "Conte ate 2.", "Solte o ar pela boca.", "Repita 10 a 15 vezes.", "Volte ao ritmo natural."],
    progression: ["5 repeticoes.", "10 repeticoes.", "15 repeticoes se estiver confortavel."],
    observations: ["Faca sentado se estiver cansado."],
    cautions: ["Pare se houver tontura, formigamento ou desconforto respiratorio."],
    tags: ["sonolencia", "respiracao", "alerta"]
  },
  {
    slug: "respiracao-alternada",
    title: "Respiracao alternada",
    direction: "tirar-sono",
    presentation: "Respiracao nasal alternada feita de forma calma, sem prender o ar por muito tempo.",
    purpose: "Organizar atencao e recuperar presenca.",
    level: "Intermediario",
    duration: "2 a 4 minutos",
    steps: ["Tampe a narina direita e inspire pela esquerda.", "Tampe a esquerda e expire pela direita.", "Inspire pela direita.", "Alterne o ciclo.", "Faca de forma calma."],
    progression: ["3 ciclos.", "6 ciclos.", "2 a 4 minutos."],
    observations: ["A intencao e foco calmo, nao hiperventilar."],
    cautions: ["Evite se houver congestao, tontura ou desconforto respiratorio."],
    tags: ["respiracao", "foco", "alerta"]
  },
  {
    slug: "iluminacao-clara",
    title: "Iluminacao clara",
    direction: "tirar-sono",
    presentation: "Abrir janelas ou acender luzes pode ajudar a sinalizar alerta ao corpo.",
    purpose: "Reduzir sonolencia ambiental.",
    level: "Iniciante",
    duration: "1 minuto",
    steps: ["Abra cortinas ou janela quando seguro.", "Acenda uma luz clara se necessario.", "Ajuste brilho de tela sem excesso.", "Respire e retome a tarefa."],
    progression: ["Ajuste uma fonte de luz.", "Combine com agua.", "Combine com movimento curto."],
    observations: ["Evite luz forte perto da hora de dormir."],
    cautions: ["Nao use luz desconfortavel para os olhos."],
    tags: ["sonolencia", "ambiente", "luz"]
  },
  {
    slug: "estimulacao-mental-alerta",
    title: "Estimulacao mental",
    direction: "tirar-sono",
    presentation: "Mudar brevemente de atividade ou conversar sobre algo animado pode gerar alerta temporario.",
    purpose: "Interromper monotonia sem cair em rolagem infinita.",
    level: "Iniciante",
    duration: "2 a 5 minutos",
    steps: ["Mude de atividade por poucos minutos.", "Resolva uma conta simples ou leia um trecho curto.", "Converse brevemente com alguem se for adequado.", "Volte para a tarefa principal."],
    progression: ["2 minutos.", "5 minutos.", "Use antes de uma tarefa exigente."],
    observations: ["Escolha estimulo que nao roube o resto do dia."],
    cautions: ["Evite redes sociais se elas aumentam dispersao ou comparacao."],
    tags: ["sonolencia", "foco", "estimulacao"]
  },
  {
    slug: "cafeina-com-cuidado",
    title: "Cafeina com cuidado",
    direction: "tirar-sono",
    presentation: "Cafeina pode ser uma dica opcional para alerta temporario, quando faz sentido para a pessoa.",
    purpose: "Apoiar vigilia sem substituir sono adequado.",
    level: "Iniciante",
    duration: "Uso pontual",
    steps: ["Avalie se cafeina costuma funcionar bem para voce.", "Use quantidade moderada.", "Evite no fim do dia.", "Nao use como substituto de sono.", "Observe efeitos no corpo."],
    progression: ["Use apenas quando necessario.", "Reduza se afetar sono.", "Revise padrao semanal."],
    observations: ["Sensibilidade varia muito entre pessoas."],
    cautions: ["Evite exagero, especialmente com ansiedade, palpitação, insonia ou orientacao profissional contraria."],
    tags: ["cafeina", "alerta", "sonolencia"]
  },
  {
    slug: "hidratacao-alerta",
    title: "Hidratacao",
    direction: "tirar-sono",
    presentation: "Desidratacao pode contribuir para fadiga; beber agua pode apoiar energia basica.",
    purpose: "Corrigir uma causa simples de cansaco leve.",
    level: "Iniciante",
    duration: "1 a 2 minutos",
    steps: ["Pegue agua.", "Beba em pequenos goles.", "Observe temperatura e corpo.", "Espere alguns minutos antes de avaliar energia.", "Combine com movimento curto se necessario."],
    progression: ["Um copo.", "Lembrete em pausas.", "Associar ao check-in."],
    observations: ["Hidratacao e suporte basico, nao solucao unica."],
    cautions: ["Respeite restricoes medicas de liquidos quando existirem."],
    tags: ["hidratacao", "fadiga", "sonolencia"]
  },
  {
    slug: "chiclete-menta-alerta",
    title: "Mascar chiclete de menta",
    direction: "tirar-sono",
    presentation: "Estimulo sensorial e mastigatorio que pode ajudar em alerta temporario.",
    purpose: "Dar um pequeno estimulo quando a sonolencia e leve.",
    level: "Iniciante",
    duration: "Uso pontual",
    steps: ["Escolha um chiclete de menta se for seguro para voce.", "Mastigue por alguns minutos.", "Evite usar junto com multitarefas em excesso.", "Descarte corretamente.", "Observe se ajudou."],
    progression: ["Uso pontual.", "Combine com luz clara.", "Combine com pausa em pe."],
    observations: ["E paliativo e nao resolve privacao de sono."],
    cautions: ["Evite se houver dor mandibular, restricao odontologica ou desconforto."],
    tags: ["menta", "sensorial", "alerta"]
  },
  {
    slug: "automassagem-pontos-alerta",
    title: "Automassagem em pontos de pressao",
    direction: "tirar-sono",
    presentation: "Automassagem leve em bordas das orelhas, nuca e ponto entre polegar e indicador pode gerar estimulo sensorial.",
    purpose: "Criar alerta corporal temporario.",
    level: "Iniciante",
    duration: "1 a 3 minutos",
    steps: ["Massageie bordas das orelhas com delicadeza.", "Solte a nuca com pressao leve.", "Massageie o ponto entre polegar e indicador sem dor.", "Respire e observe o alerta.", "Pare se incomodar."],
    progression: ["30 segundos.", "1 minuto.", "3 minutos com pausas."],
    observations: ["Tecnica paliativa; priorize rotina de sono se a sonolencia for persistente."],
    cautions: ["Nao pressione com forca. Se a sonolencia for persistente, procure orientacao profissional."],
    tags: ["automassagem", "sensorial", "alerta"]
  }
];
