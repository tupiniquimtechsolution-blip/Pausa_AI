export type FocusExercise = {
  slug: string;
  title: string;
  presentation: string;
  purpose: string;
  level: "Iniciante" | "Intermediario" | "Avancado";
  duration: string;
  instructions: string[];
  progression: string[];
  observations: string[];
  cautions: string[];
  tags: string[];
};

export const focusExercises: FocusExercise[] = [
  {
    slug: "contagem-palavras-texto",
    title: "Contagem de palavras em texto",
    presentation: "Treina atencao sustentada, precisao mental e resistencia contra distracoes usando um texto fisico.",
    purpose: "Ajuda a manter foco em uma tarefa simples por mais tempo, reduzindo impulsividade e dispersao.",
    level: "Iniciante",
    duration: "3 a 8 minutos",
    instructions: [
      "Escolha um livro, revista ou texto fisico.",
      "Conte mentalmente as palavras de um paragrafo.",
      "Repita a contagem para confirmar se esta correta.",
      "Aguarde um minuto.",
      "Conte as palavras de dois paragrafos.",
      "Quando ficar facil, avance para uma pagina inteira.",
      "Faca a contagem mentalmente, sem usar os dedos para apontar."
    ],
    progression: ["Iniciante: 1 paragrafo.", "Intermediario: 2 paragrafos.", "Avancado: pagina inteira."],
    observations: ["Use textos curtos no inicio.", "O objetivo e estabilidade, nao velocidade."],
    cautions: ["Pare se houver frustracao intensa ou dor de cabeca; retome com um trecho menor."],
    tags: ["foco", "leitura", "atencao sustentada"]
  },
  {
    slug: "contagem-mental-direta-reversa",
    title: "Contagem mental direta e reversa",
    presentation: "Exercicio simples para treinar concentracao, continuidade mental e controle da atencao.",
    purpose: "Ajuda a mente a permanecer em uma sequencia logica sem se perder.",
    level: "Iniciante",
    duration: "2 a 5 minutos",
    instructions: ["Conte mentalmente de 1 ate 100.", "Ao terminar, conte de 100 ate 1.", "Repita o exercicio pelo menos 3 vezes ao dia.", "Se se perder, volte alguns numeros sem se julgar."],
    progression: ["Iniciante: 1 ciclo.", "Intermediario: 3 ciclos.", "Avancado: conte sem acelerar."],
    observations: ["Pode ser feito sentado, em pe ou em uma pausa curta."],
    cautions: ["Evite usar como cobranca; a pratica deve ficar simples e repetivel."],
    tags: ["foco", "sequencia", "memoria operacional"]
  },
  {
    slug: "contagem-mental-3-em-3",
    title: "Contagem mental de 3 em 3",
    presentation: "Exercicio de foco com raciocinio logico leve.",
    purpose: "Estimula atencao, memoria operacional e controle mental.",
    level: "Intermediario",
    duration: "3 a 6 minutos",
    instructions: ["Conte de 1 a 100 de 3 em 3: 1, 4, 7, 10.", "Depois conte de 100 ate 1 da mesma forma: 100, 97, 94.", "Faca lentamente e sem pressa.", "Se errar, recomece de um ponto confortavel."],
    progression: ["Iniciante: ate 40.", "Intermediario: ate 100.", "Avancado: ida e volta sem consultar anotacoes."],
    observations: ["O erro faz parte do treino de retomada de foco."],
    cautions: ["Reduza a meta se a pratica aumentar irritacao."],
    tags: ["foco", "calculo mental", "controle atencional"]
  },
  {
    slug: "repeticao-mental-frase-inspiradora",
    title: "Repeticao mental de frase inspiradora",
    presentation: "Exercicio de foco verbal e estabilidade mental.",
    purpose: "Ajuda a reduzir pensamentos dispersos e manter a mente em um unico conteudo.",
    level: "Iniciante",
    duration: "5 a 10 minutos",
    instructions: ["Escolha uma palavra ou frase inspiradora.", "Repita mentalmente por 5 minutos.", "Quando ficar facil, aumente para 10 minutos.", "Sempre que a mente divagar, volte para a frase sem se julgar."],
    progression: ["Iniciante: 5 minutos.", "Intermediario: 7 minutos.", "Avancado: 10 minutos com retornos suaves."],
    observations: ["Escolha uma frase neutra e segura para voce."],
    cautions: ["Evite frases que tragam pressao, culpa ou comparacao."],
    tags: ["foco", "verbal", "presenca"]
  },
  {
    slug: "observacao-consciente-fruta",
    title: "Observacao consciente de uma fruta",
    presentation: "Exercicio de atencao plena usando percepcao sensorial.",
    purpose: "Fortalece presenca, observacao e conexao com o momento atual.",
    level: "Iniciante",
    duration: "3 a 5 minutos",
    instructions: ["Pegue uma fruta: banana, maca, laranja, pera ou similar.", "Segure-a nas maos.", "Observe superficie, forma, textura, cheiro e peso.", "Nao pense sobre origem, valor nutricional ou historias relacionadas.", "Apenas observe a fruta como ela e."],
    progression: ["Iniciante: 3 sentidos.", "Intermediario: 5 sentidos.", "Avancado: observacao silenciosa sem narrar mentalmente."],
    observations: ["A pratica pode ser feita com qualquer objeto seguro se nao houver fruta."],
    cautions: ["Evite se o alimento for gatilho emocional; use outro objeto."],
    tags: ["mindfulness", "sensorial", "presenca"]
  },
  {
    slug: "visualizacao-mental-fruta",
    title: "Visualizacao mental da fruta",
    presentation: "Continua o exercicio anterior com foco em memoria visual.",
    purpose: "Treina concentracao, imaginacao visual e memoria sensorial.",
    level: "Intermediario",
    duration: "4 a 8 minutos",
    instructions: ["Observe uma fruta por 2 minutos.", "Feche os olhos.", "Tente visualizar a fruta em sua mente.", "Lembre textura, cor, deformacoes, cheiro e sensacao ao toque.", "Se a imagem desaparecer, abra os olhos e observe novamente.", "Repita o processo."],
    progression: ["Iniciante: 30 segundos de visualizacao.", "Intermediario: 2 minutos.", "Avancado: manter detalhes sem abrir os olhos rapidamente."],
    observations: ["Visualizacao fraca tambem treina atencao; nao precisa parecer uma foto."],
    cautions: ["Abra os olhos se surgir desconforto ou tontura."],
    tags: ["visualizacao", "memoria visual", "foco"]
  },
  {
    slug: "contemplacao-objeto-cotidiano",
    title: "Contemplacao de objeto cotidiano",
    presentation: "Exercicio de foco visual e reducao de pensamento automatico.",
    purpose: "Ajuda a contemplar um objeto sem julgamento ou associacao mental.",
    level: "Iniciante",
    duration: "3 a 6 minutos",
    instructions: ["Escolha um objeto cotidiano: copo, colher, caderno ou caneta.", "Observe o objeto em silencio.", "Evite pensamentos sobre uso, nome, valor ou lembrancas.", "Apenas contemple forma, cor e presenca do objeto."],
    progression: ["Iniciante: 2 minutos.", "Intermediario: 5 minutos.", "Avancado: manter foco mesmo com distracoes leves ao redor."],
    observations: ["Se a mente comentar, perceba e volte para a forma do objeto."],
    cautions: ["Escolha um objeto emocionalmente neutro."],
    tags: ["contemplacao", "foco visual", "mindfulness"]
  },
  {
    slug: "observacao-triangulo-desenhado",
    title: "Observacao de triangulo desenhado",
    presentation: "Exercicio de concentracao visual com estimulo geometrico simples.",
    purpose: "Treina foco fixo e resistencia a distracoes.",
    level: "Iniciante",
    duration: "3 a 7 minutos",
    instructions: ["Desenhe um triangulo em uma folha.", "Pinte com a cor que preferir.", "Coloque a folha a sua frente.", "Observe apenas o triangulo.", "Evite qualquer pensamento ou distracao.", "Mantenha a atencao no desenho."],
    progression: ["Iniciante: 2 minutos.", "Intermediario: 5 minutos.", "Avancado: 7 minutos com pausas minimas."],
    observations: ["Use uma cor confortavel para os olhos."],
    cautions: ["Interrompa se houver desconforto visual."],
    tags: ["geometria", "foco visual", "atencao sustentada"]
  },
  {
    slug: "visualizacao-triangulo-olhos-fechados",
    title: "Visualizacao do triangulo com olhos fechados",
    presentation: "Exercicio de foco visual interno.",
    purpose: "Treina memoria visual, concentracao e imaginacao controlada.",
    level: "Intermediario",
    duration: "4 a 8 minutos",
    instructions: ["Observe o triangulo desenhado.", "Quando estiver concentrado, feche os olhos.", "Visualize o triangulo mentalmente.", "Se a imagem sumir, abra os olhos, observe novamente e repita."],
    progression: ["Iniciante: 15 segundos.", "Intermediario: 1 minuto.", "Avancado: varios ciclos sem pressa."],
    observations: ["A imagem pode oscilar; voltar faz parte do treino."],
    cautions: ["Abra os olhos se ficar desconfortavel."],
    tags: ["visualizacao", "triangulo", "memoria visual"]
  },
  {
    slug: "visualizacao-triangulo-olhos-abertos",
    title: "Visualizacao do triangulo com olhos abertos",
    presentation: "Exercicio avancado de visualizacao e foco mental.",
    purpose: "Ajuda a manter uma imagem mental mesmo sem olhar diretamente para ela.",
    level: "Avancado",
    duration: "3 a 6 minutos",
    instructions: ["Observe o triangulo.", "Tire o desenho do seu campo de visao.", "Com os olhos abertos, tente visualizar o triangulo mentalmente.", "Mantenha a imagem pelo maior tempo possivel.", "Volte ao desenho se precisar reiniciar."],
    progression: ["Intermediario: 15 segundos.", "Avancado: 1 a 3 minutos.", "Avancado+: manter forma e cor."],
    observations: ["Pratique depois dos exercicios anteriores."],
    cautions: ["Nao force se houver fadiga visual ou dor de cabeca."],
    tags: ["avancado", "visualizacao", "foco mental"]
  },
  {
    slug: "silencio-mental",
    title: "Silencio mental",
    presentation: "Exercicio avancado para reduzir fluxo excessivo de pensamentos.",
    purpose: "Ajuda a experimentar momentos de silencio mental, presenca e autorregulacao.",
    level: "Avancado",
    duration: "5 a 10 minutos",
    instructions: ["Pratique por pelo menos 5 minutos ao dia.", "De preferencia ao periodo da manha.", "Sente-se confortavelmente.", "Tente parar ou reduzir os pensamentos.", "Apenas aprecie o silencio mental.", "Caso pensamentos aparecam, perceba e volte ao silencio."],
    progression: ["Intermediario: 3 minutos.", "Avancado: 5 minutos.", "Avancado+: 10 minutos sem se cobrar."],
    observations: ["Nao e necessario zerar pensamentos; notar e voltar ja e pratica."],
    cautions: ["Evite transformar em luta mental. Se ficar angustiante, use respiracao simples ou procure apoio profissional."],
    tags: ["silencio", "autorregulacao", "avancado"]
  }
];

export const complementaryFocusTechniques: FocusExercise[] = [
  {
    slug: "meditacao-mindfulness",
    title: "Meditacao mindfulness",
    presentation: "Pratica baseada em atencao plena para reduzir agitacao mental e melhorar presenca.",
    purpose: "Ensina a observar pensamentos sem se prender a eles.",
    level: "Iniciante",
    duration: "3 a 10 minutos",
    instructions: ["Sente-se com apoio.", "Foque na respiracao.", "Quando pensamentos surgirem, note e volte ao ar entrando e saindo.", "Se preferir, use audio guiado.", "Comece com 3 a 5 minutos e progrida para 10."],
    progression: ["3 minutos.", "5 minutos.", "10 minutos."],
    observations: ["A pratica e retorno gentil, nao mente vazia perfeita."],
    cautions: ["Se observar pensamentos aumentar angustia, abra os olhos e volte para o ambiente."],
    tags: ["mindfulness", "respiracao", "presenca"]
  },
  {
    slug: "respiracao-consciente-foco",
    title: "Respiracao consciente",
    presentation: "Respirar de forma profunda e ritmada pode ajudar a desacelerar o corpo e recuperar foco.",
    purpose: "Util antes dos estudos, durante distracoes ou ao perceber ansiedade leve.",
    level: "Iniciante",
    duration: "1 a 3 minutos",
    instructions: ["Inspire pelo nariz em ritmo confortavel.", "Solte o ar pela boca ou nariz mais devagar.", "Repita por 1 a 3 minutos.", "Volte a tarefa escolhendo uma unica acao."],
    progression: ["1 minuto.", "2 minutos.", "3 minutos antes de estudar."],
    observations: ["Nao precisa prender o ar."],
    cautions: ["Pare se houver tontura ou falta de ar."],
    tags: ["respiracao", "ansiedade", "estudo"]
  },
  {
    slug: "tecnica-pomodoro",
    title: "Tecnica Pomodoro",
    presentation: "Tecnica de foco estruturado com blocos curtos de trabalho e pausas previsiveis.",
    purpose: "Reduz sobrecarga mental e melhora constancia.",
    level: "Intermediario",
    duration: "25 minutos + 5 minutos de pausa",
    instructions: ["Escolha uma tarefa.", "Foque por 25 minutos.", "Faca 5 minutos de pausa.", "Depois de 4 ciclos, faca uma pausa maior.", "Use um timer integrado quando disponivel."],
    progression: ["1 ciclo.", "2 ciclos.", "4 ciclos com pausa maior."],
    observations: ["A pausa faz parte da tecnica; nao pule se estiver cansado."],
    cautions: ["Reduza para ciclos menores em dias de sono ruim ou estresse alto."],
    tags: ["pomodoro", "timer", "estudo"]
  },
  {
    slug: "visualizacao-tarefa-sucesso",
    title: "Visualizacao de tarefa realizada com sucesso",
    presentation: "Prepara a mente para iniciar estudo ou trabalho com menos resistencia.",
    purpose: "Ajuda a organizar ambiente, imaginar execucao e reduzir travamento inicial.",
    level: "Iniciante",
    duration: "1 a 3 minutos",
    instructions: ["Feche ou suavize os olhos.", "Imagine o ambiente organizado.", "Visualize voce iniciando a tarefa.", "Imagine o resultado positivo e realista.", "Abra os olhos e faca o primeiro passo."],
    progression: ["1 minuto antes de comecar.", "3 minutos antes de uma tarefa maior."],
    observations: ["Imagine um resultado possivel, nao perfeito."],
    cautions: ["Se a visualizacao virar preocupacao, volte para respiracao consciente."],
    tags: ["visualizacao", "preparacao mental", "tarefa"]
  },
  {
    slug: "calculos-mentais",
    title: "Calculos mentais",
    presentation: "Contas simples de cabeca para ativar atencao e raciocinio logico.",
    purpose: "Estimula foco, memoria operacional e flexibilidade mental.",
    level: "Intermediario",
    duration: "3 a 7 minutos",
    instructions: ["Comece com somas simples.", "Passe para subtracoes.", "Inclua multiplicacoes pequenas.", "Use divisoes simples.", "Aumente dificuldade aos poucos."],
    progression: ["Somas de 1 digito.", "Operacoes com 2 digitos.", "Sequencias misturadas."],
    observations: ["Velocidade nao e prioridade; estabilidade vem primeiro."],
    cautions: ["Reduza a dificuldade se surgir irritacao ou autocritica."],
    tags: ["calculo", "logica", "memoria operacional"]
  },
  {
    slug: "um-minuto-de-foco",
    title: "Um minuto de foco",
    presentation: "Exercicio rapido de 60 segundos para retomar presenca.",
    purpose: "Cria um pequeno ponto de controle antes de continuar o dia.",
    level: "Iniciante",
    duration: "60 segundos",
    instructions: ["Escolha um objeto.", "Olhe fixamente para ele por 60 segundos.", "Se a mente divagar, volte naturalmente.", "Marque como concluido."],
    progression: ["60 segundos.", "90 segundos.", "2 minutos."],
    observations: ["Funciona bem entre tarefas."],
    cautions: ["Desvie o olhar se houver desconforto visual."],
    tags: ["rapido", "objeto", "foco visual"]
  },
  {
    slug: "acompanhamento-progresso-foco",
    title: "Acompanhamento do progresso de foco",
    presentation: "Registro simples para acompanhar evolucao sem transformar cuidado em cobranca.",
    purpose: "Ajuda a enxergar metas diarias, sequencia de dias e sensacao antes/depois.",
    level: "Iniciante",
    duration: "2 minutos",
    instructions: ["Defina uma meta diaria pequena.", "Marque exercicios concluidos.", "Registre sensacao antes e depois.", "Observe a sequencia de dias.", "Revise progresso por categoria uma vez por semana."],
    progression: ["Checklist diario.", "Historico semanal.", "Meta por categoria."],
    observations: ["Progresso tambem inclui perceber quando descansar."],
    cautions: ["Evite usar historico como motivo de culpa."],
    tags: ["progresso", "checklist", "historico"]
  }
];

export const allFocusExercises = [...focusExercises, ...complementaryFocusTechniques];
