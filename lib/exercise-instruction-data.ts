import { allFocusExercises, type FocusExercise } from "@/lib/focus-exercises";
import { energyMissions, type EnergyMission } from "@/lib/energy-missions";
import { happinessMissions, type HappinessMission } from "@/lib/happiness-missions";
import { sleepMissions, type SleepMission } from "@/lib/sleep-missions";
import { coreConditioningExerciseInstructionSeeds } from "@/lib/core-conditioning-reference";
import { plannedReferenceExerciseInstructionSeeds } from "@/lib/planned-reference-catalog";
import { sleepSupportExerciseInstructionSeeds } from "@/lib/sleep-support-reference";
import { stretchingExercises, type StretchExercise } from "@/lib/stretching-exercises";

export type InstructionType = "TIME_BASED" | "REPS_BASED" | "BREATHING" | "WRITING" | "MOBILITY" | "STRETCHING" | "WALKING" | "RELAXATION";

export type ExerciseInstructionSeed = {
  slug: string;
  title: string;
  area: string;
  category: string;
  level: number;
  instructionType: InstructionType;
  shortDescription: string;
  objective: string;
  durationSeconds?: number | null;
  sets?: number | null;
  reps?: string | null;
  restSeconds?: number | null;
  intensity: string;
  equipment: string;
  imageKey: string;
  animationPromptKey: string;
  recommendedWhen: string[];
  avoidWhen: string[];
  contraindications: string[];
  howToSteps: string[];
  postureTips: string[];
  breathingTips: string[];
  commonMistakes: string[];
  safetyNotes: string[];
};

const safety = [
  "Faca em ritmo confortavel.",
  "Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.",
  "Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."
];

const avoidImpact = ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."];

function slugify(text: string) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function base(input: Omit<ExerciseInstructionSeed, "animationPromptKey" | "contraindications" | "safetyNotes"> & { contraindications?: string[]; safetyNotes?: string[] }): ExerciseInstructionSeed {
  return {
    ...input,
    animationPromptKey: `${input.imageKey}-guided-animation`,
    contraindications: input.contraindications || avoidImpact,
    safetyNotes: input.safetyNotes || safety
  };
}

function time(title: string, imageKey: string, area: string, category: string, objective: string, durationSeconds: number, level = 1): ExerciseInstructionSeed {
  return base({
    slug: imageKey,
    title,
    area,
    category,
    level,
    instructionType: category === "WALKING" ? "WALKING" : category === "STRETCHING" ? "STRETCHING" : category === "MOBILITY" ? "MOBILITY" : "TIME_BASED",
    shortDescription: objective,
    objective,
    durationSeconds,
    sets: null,
    reps: null,
    restSeconds: null,
    intensity: durationSeconds > 600 ? "LIGHT" : "VERY_LIGHT",
    equipment: "Nenhum",
    imageKey,
    recommendedWhen: ["Quando voce quiser uma pausa guiada e segura.", "Quando a pratica combinar com seu check-in do dia."],
    avoidWhen: ["Evite se causar desconforto ou se voce precisar de atendimento profissional."],
    howToSteps: ["Prepare um espaco tranquilo.", `Pratique ${title.toLowerCase()} pelo tempo sugerido.`, "Mantenha o ritmo confortavel.", "Finalize percebendo como o corpo esta agora."],
    postureTips: ["Mantenha a coluna confortavel.", "Solte os ombros.", "Reduza amplitude se houver tensao."],
    breathingTips: ["Respire sem prender o ar.", "Prefira uma expiracao lenta.", "Volte ao ritmo natural se ficar desconfortavel."],
    commonMistakes: ["Forcar amplitude.", "Apressar a pratica.", "Ignorar sinais de desconforto."]
  });
}

function breathing(title: string, imageKey: string, objective: string, steps: string[]): ExerciseInstructionSeed {
  return base({
    slug: imageKey,
    title,
    area: "STRESS",
    category: "BREATHING",
    level: 1,
    instructionType: "BREATHING",
    shortDescription: objective,
    objective,
    durationSeconds: 180,
    sets: null,
    reps: null,
    restSeconds: null,
    intensity: "VERY_LIGHT",
    equipment: "Nenhum",
    imageKey,
    recommendedWhen: ["Quando o estresse estiver alto.", "Quando voce quiser desacelerar antes de continuar."],
    avoidWhen: ["Evite segurar o ar se isso causar desconforto."],
    contraindications: ["Tontura, falta de ar ou desconforto ao controlar a respiracao."],
    howToSteps: steps,
    postureTips: ["Sente-se ou fique em pe com apoio confortavel.", "Relaxe mandibula e ombros."],
    breathingTips: ["Nao force o ar.", "A expiracao deve ser tranquila.", "Respire naturalmente se o ciclo incomodar."],
    commonMistakes: ["Forcar a inspiracao.", "Segurar o ar com tensao.", "Continuar mesmo com tontura."]
  });
}

function writing(title: string, imageKey: string, objective: string, durationSeconds = 300): ExerciseInstructionSeed {
  return base({
    slug: imageKey,
    title,
    area: "MOOD",
    category: "WRITING",
    level: 1,
    instructionType: "WRITING",
    shortDescription: objective,
    objective,
    durationSeconds,
    sets: null,
    reps: null,
    restSeconds: null,
    intensity: "VERY_LIGHT",
    equipment: "Caderno, papel ou campo de anotacao",
    imageKey,
    recommendedWhen: ["Quando a mente estiver cheia.", "Quando voce quiser organizar pensamentos sem julgamento."],
    avoidWhen: ["Evite se escrever aumentar sofrimento intenso; procure apoio humano."],
    contraindications: ["Sofrimento intenso ou risco: busque ajuda imediata."],
    howToSteps: ["Pegue um caderno ou use o campo de anotacao.", "Escreva sem editar e sem julgar.", "Escolha uma coisa que pode ficar para depois.", "Finalize com uma frase de cuidado consigo."],
    postureTips: ["Sente-se de forma confortavel.", "Relaxe ombros e maos.", "Nao tente escrever bonito."],
    breathingTips: ["Respire naturalmente.", "Solte o ar antes de comecar.", "Faca pausas se ficar intenso."],
    commonMistakes: ["Tentar resolver tudo.", "Julgar o que escreveu.", "Transformar a pratica em cobranca."]
  });
}

function reps(title: string, imageKey: string, category: string, objective: string, sets: number, repsValue: string, level = 2): ExerciseInstructionSeed {
  return base({
    slug: imageKey,
    title,
    area: "BODY_MOVEMENT",
    category,
    level,
    instructionType: "REPS_BASED",
    shortDescription: objective,
    objective,
    durationSeconds: null,
    sets,
    reps: repsValue,
    restSeconds: 45,
    intensity: level >= 4 ? "MODERATE" : "LIGHT",
    equipment: "Nenhum",
    imageKey,
    recommendedWhen: ["Quando sua energia estiver estavel.", "Quando voce quiser ativar o corpo em casa."],
    avoidWhen: ["Evite em dias de energia muito baixa, sono ruim ou estresse alto."],
    howToSteps: ["Prepare espaco livre ao redor.", "Faca o movimento de forma controlada.", "Descanse confortavelmente entre as series.", "Pare antes de perder a postura."],
    postureTips: ["Mantenha coluna neutra.", "Controle a velocidade.", "Use amplitude confortavel."],
    breathingTips: ["Inspire na fase mais facil.", "Expire no esforco.", "Nao prenda a respiracao."],
    commonMistakes: ["Apressar repeticoes.", "Perder alinhamento.", "Forcar alem do confortavel."]
  });
}

function guided(input: {
  title: string;
  imageKey: string;
  area: string;
  category: string;
  level?: number;
  instructionType: InstructionType;
  shortDescription: string;
  objective: string;
  durationSeconds?: number | null;
  sets?: number | null;
  reps?: string | null;
  restSeconds?: number | null;
  intensity?: string;
  equipment?: string;
  recommendedWhen: string[];
  avoidWhen: string[];
  howToSteps: string[];
  postureTips: string[];
  breathingTips: string[];
  commonMistakes: string[];
  safetyNotes?: string[];
  contraindications?: string[];
}) {
  return base({
    slug: input.imageKey,
    title: input.title,
    area: input.area,
    category: input.category,
    level: input.level || 1,
    instructionType: input.instructionType,
    shortDescription: input.shortDescription,
    objective: input.objective,
    durationSeconds: input.durationSeconds ?? null,
    sets: input.sets ?? null,
    reps: input.reps ?? null,
    restSeconds: input.restSeconds ?? null,
    intensity: input.intensity || "VERY_LIGHT",
    equipment: input.equipment || "Nenhum",
    imageKey: input.imageKey,
    recommendedWhen: input.recommendedWhen,
    avoidWhen: input.avoidWhen,
    contraindications: input.contraindications,
    howToSteps: input.howToSteps,
    postureTips: input.postureTips,
    breathingTips: input.breathingTips,
    commonMistakes: input.commonMistakes,
    safetyNotes: input.safetyNotes
  });
}

function secondsFromDuration(duration: string, fallback = 300) {
  const match = duration.match(/(\d+)/);
  const value = match ? Number(match[1]) : 0;
  if (!value) return fallback;
  if (duration.includes("segundo")) return value;
  return value * 60;
}

function levelFromLabel(level: string) {
  if (level === "Avancado") return 5;
  if (level === "Intermediario") return 3;
  return 1;
}

function instructionTypeFromTitle(title: string, fallback: InstructionType = "TIME_BASED"): InstructionType {
  const normalized = title.toLowerCase();
  if (normalized.includes("respiracao") || normalized.includes("pranayama")) return "BREATHING";
  if (normalized.includes("diario") || normalized.includes("roda da vida") || normalized.includes("gratidao")) return "WRITING";
  if (normalized.includes("caminhada")) return "WALKING";
  return fallback;
}

function focusSeed(item: FocusExercise): ExerciseInstructionSeed {
  return guided({
    title: item.title,
    imageKey: item.slug,
    area: "FOCUS",
    category: "FOCUS_TRAINING",
    level: levelFromLabel(item.level),
    instructionType: instructionTypeFromTitle(item.title),
    shortDescription: item.presentation,
    objective: item.purpose,
    durationSeconds: secondsFromDuration(item.duration),
    equipment: item.title.toLowerCase().includes("texto") ? "Livro, revista ou texto fisico" : item.title.toLowerCase().includes("triangulo") ? "Papel e caneta" : "Nenhum",
    recommendedWhen: ["Quando o check-in indicar falta de foco.", "Antes de estudar, trabalhar ou voltar para uma tarefa."],
    avoidWhen: item.cautions.length ? item.cautions : ["Evite se a pratica aumentar desconforto."],
    contraindications: item.cautions,
    howToSteps: item.instructions,
    postureTips: ["Use uma postura confortavel.", "Reduza estimulos ao redor.", ...item.observations.slice(0, 1)],
    breathingTips: ["Respire sem prender o ar.", "Volte com calma quando a mente divagar.", "Finalize percebendo seu estado atual."],
    commonMistakes: ["Fazer com pressa.", "Transformar erro em julgamento.", "Aumentar dificuldade antes da base ficar confortavel."],
    safetyNotes: [...item.cautions, "Esta pratica treina atencao e nao promete resultado garantido."]
  });
}

function energySeed(item: EnergyMission): ExerciseInstructionSeed {
  const spend = item.direction === "gastar-energia";
  return guided({
    title: item.title,
    imageKey: item.slug,
    area: "ENERGY",
    category: spend ? "ENERGY_SPEND" : "ENERGY_GIVE",
    level: levelFromLabel(item.level),
    instructionType: instructionTypeFromTitle(item.title, item.title.includes("Polichinelos") || item.title.includes("Corrida") || item.title.includes("escadas") ? "TIME_BASED" : "MOBILITY"),
    shortDescription: item.presentation,
    objective: item.purpose,
    durationSeconds: secondsFromDuration(item.duration, spend ? 480 : 300),
    intensity: spend ? "MODERATE" : "LIGHT",
    equipment: item.title.includes("corda") ? "Corda opcional" : "Nenhum",
    recommendedWhen: item.tags,
    avoidWhen: item.cautions,
    contraindications: item.cautions,
    howToSteps: item.steps,
    postureTips: ["Mantenha movimentos controlados.", "Use amplitude confortavel.", "Adapte intensidade ao check-in do dia."],
    breathingTips: ["Nao prenda a respiracao.", "Reduza ritmo se a respiracao sair do controle.", "Finalize voltando ao ritmo natural."],
    commonMistakes: ["Buscar intensidade maior que o necessario.", "Ignorar dor ou tontura.", "Pular aquecimento em praticas mais ativas."],
    safetyNotes: item.cautions
  });
}

function sleepSeed(item: SleepMission): ExerciseInstructionSeed {
  return guided({
    title: item.title,
    imageKey: item.slug,
    area: "SLEEP",
    category: item.direction === "dar-sono" ? "SLEEP_DOWN" : "SLEEP_UP",
    level: levelFromLabel(item.level),
    instructionType: instructionTypeFromTitle(item.title, item.direction === "dar-sono" ? "RELAXATION" : "TIME_BASED"),
    shortDescription: item.presentation,
    objective: item.purpose,
    durationSeconds: secondsFromDuration(item.duration, item.direction === "dar-sono" ? 600 : 180),
    equipment: item.title.includes("Cafeina") ? "Opcional" : "Nenhum",
    recommendedWhen: item.tags,
    avoidWhen: item.cautions,
    contraindications: item.cautions,
    howToSteps: item.steps,
    postureTips: ["Use um ambiente seguro.", "Reduza estimulos quando for pratica de sono.", "Adapte a posicao ao corpo."],
    breathingTips: ["Respire de forma confortavel.", "Evite prender o ar se houver desconforto.", "Volte ao ritmo natural quando precisar."],
    commonMistakes: ["Usar como obrigacao rigida.", "Forcar sonolencia ou alerta.", "Ignorar sonolencia persistente."],
    safetyNotes: item.cautions
  });
}

function happinessSeed(item: HappinessMission): ExerciseInstructionSeed {
  return guided({
    title: item.title,
    imageKey: item.slug,
    area: "MOOD",
    category: `HAPPINESS_${item.theme.toUpperCase().replace(/-/g, "_")}`,
    level: levelFromLabel(item.level),
    instructionType: instructionTypeFromTitle(item.title),
    shortDescription: item.presentation,
    objective: item.purpose,
    durationSeconds: secondsFromDuration(item.duration),
    equipment: item.title.includes("Diario") || item.title.includes("Roda") || item.title.includes("Desenho") ? "Papel ou caderno" : "Nenhum",
    recommendedWhen: item.tags,
    avoidWhen: item.cautions,
    contraindications: item.cautions,
    howToSteps: item.steps,
    postureTips: ["Escolha um contexto seguro.", "Mantenha a pratica pequena o bastante para ser possivel.", "Respeite limites emocionais."],
    breathingTips: ["Respire naturalmente.", "Pause antes e depois para perceber seu estado.", "Solte o ar se surgir autocobranca."],
    commonMistakes: ["Forcar alegria.", "Comparar sua experiencia com outras pessoas.", "Transformar autocuidado em meta perfeita."],
    safetyNotes: item.cautions
  });
}

function stretchSeed(item: StretchExercise): ExerciseInstructionSeed {
  return guided({
    title: item.title,
    imageKey: item.id,
    area: "BODY_MOVEMENT",
    category: "STRETCHING",
    level: item.level === "advanced" ? 5 : item.level === "intermediate" ? 3 : 1,
    instructionType: item.type === "mobility" || item.type === "dynamic" || item.type === "active" ? "MOBILITY" : "STRETCHING",
    shortDescription: item.objective,
    objective: item.objective,
    durationSeconds: secondsFromDuration(item.duration, 180),
    sets: Number(item.sets.match(/\d+/)?.[0] || 2),
    reps: item.type === "mobility" ? item.duration : null,
    restSeconds: 20,
    intensity: "VERY_LIGHT",
    equipment: "Nenhum ou apoio confortavel",
    recommendedWhen: item.indicatedFor,
    avoidWhen: item.avoidIf,
    contraindications: item.avoidIf,
    howToSteps: item.instructions,
    postureTips: [item.easyVariation, item.advancedVariation, item.correctFeeling],
    breathingTips: [item.breathing],
    commonMistakes: item.commonMistakes,
    safetyNotes: [...item.warningSigns.map((signal) => `Interrompa se houver ${signal}.`), item.anatomicalNote]
  });
}

const expandedInstructionSeeds = [
  ...allFocusExercises.map(focusSeed),
  ...energyMissions.map(energySeed),
  ...sleepMissions.map(sleepSeed),
  ...happinessMissions.map(happinessSeed),
  ...stretchingExercises.map(stretchSeed)
];

export const exerciseInstructionSeeds: ExerciseInstructionSeed[] = [
  breathing("Respiracao 4-4-6", "respiracao-4-4-6", "Ajudar o corpo a desacelerar em momentos de estresse ou agitacao.", ["Sente-se ou fique em pe em posicao confortavel.", "Inspire pelo nariz por 4 segundos.", "Segure o ar com suavidade por 4 segundos.", "Expire lentamente por 6 segundos.", "Repita o ciclo ate completar o tempo sugerido."]),
  writing("Diario de descarrego mental", "diario-descarrego-mental", "Tirar pensamentos da cabeca e coloca-los no papel de forma livre."),
  time("Ritual de sono sem tela", "ritual-sono-sem-tela", "SLEEP", "RELAXATION", "Preparar a transicao para dormir com menos estimulo.", 600),
  time("Alongamento leve", "alongamento-leve", "BODY_MOVEMENT", "STRETCHING", "Soltar tensao do corpo com seguranca.", 300),
  time("Pausa sem tela", "pausa-sem-tela", "FOCUS", "WORK_BREAK", "Reduzir estimulos e recuperar atencao.", 300),
  time("Caminhada consciente", "caminhada-consciente", "ENERGY", "WALKING", "Regular corpo e mente caminhando com presenca.", 600, 3),
  time("Organizacao de 5 minutos", "organizacao-5-minutos", "FOCUS", "ORGANIZATION", "Criar clareza organizando uma pequena area.", 300),
  writing("Gratidao rapida", "gratidao-rapida", "Registrar um ponto positivo concreto do dia.", 180),
  time("Reset de foco", "reset-de-foco", "FOCUS", "WORK_BREAK", "Retomar uma tarefa com menos dispersao.", 420, 3),
  time("Fechamento do dia", "fechamento-do-dia", "SLEEP", "RELAXATION", "Encerrar o dia sem tentar resolver tudo.", 480, 4),
  time("Pausa de energia", "pausa-de-energia", "ENERGY", "MOBILITY", "Ativar energia sem pressao de performance.", 300),
  breathing("Respiracao antes de dormir", "respiracao-antes-de-dormir", "Desacelerar antes do sono.", ["Deite ou sente-se com apoio.", "Inspire devagar.", "Expire mais longo que inspira.", "Repita por 3 minutos."]),
  time("Check-in emocional guiado", "checkin-emocional-guiado", "MOOD", "RELAXATION", "Nomear o estado emocional sem julgamento.", 180),
  writing("Escrita de preocupacao controlada", "escrita-preocupacao-controlada", "Separar preocupacao de acao possivel.", 480),
  time("Organizacao do ambiente", "organizacao-do-ambiente", "FOCUS", "ORGANIZATION", "Reduzir estimulos visuais no espaco.", 600),
  time("Mobilidade de pescoco e ombros", "mobilidade-pescoco-ombros", "BODY_MOVEMENT", "MOBILITY", "Soltar tensao de pescoco e ombros.", 360),
  time("Mobilidade de coluna", "mobilidade-de-coluna", "BODY_MOVEMENT", "MOBILITY", "Destravar a coluna com movimentos leves.", 240),
  time("Alongamento de pernas", "alongamento-de-pernas", "BODY_MOVEMENT", "STRETCHING", "Soltar pernas e reduzir rigidez.", 360),
  time("Yoga leve", "yoga-leve", "BODY_MOVEMENT", "YOGA", "Combinar mobilidade suave e respiracao.", 480, 3),
  time("Pausa consciente no trabalho", "pausa-consciente-trabalho", "FOCUS", "WORK_BREAK", "Interromper o automatico durante o expediente.", 180),
  writing("Reflexao de fim de semana", "reflexao-fim-de-semana", "Observar a semana com gentileza.", 900),
  writing("Planejamento gentil do dia seguinte", "planejamento-gentil-dia-seguinte", "Preparar o proximo dia sem excesso.", 600),
  time("Ativacao leve de 3 minutos", "ativacao-leve-3-minutos", "BODY_MOVEMENT", "MOBILITY", "Acordar o corpo com movimentos simples.", 180),
  time("Pausa de foco sem impacto", "pausa-foco-sem-impacto", "FOCUS", "WORK_BREAK", "Reorganizar atencao com movimento leve.", 300),
  time("Soltar tensao de pescoco e ombros", "soltar-tensao-pescoco-ombros", "BODY_MOVEMENT", "STRETCHING", "Reduzir tensao acumulada na parte superior do corpo.", 300),
  time("Mobilidade rapida para coluna", "mobilidade-rapida-coluna", "BODY_MOVEMENT", "MOBILITY", "Melhorar conforto da coluna em poucos minutos.", 240),
  time("Alongamento leve de pernas", "alongamento-leve-pernas", "BODY_MOVEMENT", "STRETCHING", "Soltar pernas com permanencia confortavel.", 360),
  time("Reset corporal no trabalho", "reset-corporal-trabalho", "BODY_MOVEMENT", "WORK_BREAK", "Fazer uma pausa corporal segura no expediente.", 240),
  time("Caminhada consciente curta", "caminhada-consciente-curta", "BODY_MOVEMENT", "WALKING", "Ativar circulacao com atencao no ambiente.", 300),
  reps("Agachamento leve guiado", "agachamento-leve-guiado", "HOME_FUNCTIONAL", "Ativar pernas e quadril de forma leve.", 2, "8 a 12", 2),
  time("Jumping baixo impacto", "jumping-baixo-impacto", "BODY_MOVEMENT", "LOW_IMPACT_CARDIO", "Ativar cardio leve sem saltos agressivos.", 300, 3),
  time("Respiracao + mobilidade", "respiracao-mobilidade", "BODY_MOVEMENT", "MOBILITY", "Combinar respiracao e movimento leve.", 300),
  time("Pular corda iniciante", "pular-corda-iniciante", "BODY_MOVEMENT", "JUMP_ROPE", "Aprender corda com baixo volume e alternativa sem impacto.", 300, 4),
  time("Luta sombra leve", "luta-sombra-leve", "BODY_MOVEMENT", "SHADOW_BOXING", "Ativar energia e coordenacao sem contato.", 480, 4),
  time("Yoga de energia leve", "yoga-energia-leve", "BODY_MOVEMENT", "YOGA", "Ganhar energia com mobilidade controlada.", 600, 4),
  reps("Funcional em casa iniciante", "funcional-em-casa-iniciante", "HOME_FUNCTIONAL", "Fortalecer o corpo sem equipamento.", 2, "6 a 10 por movimento", 3),
  guided({
    title: "Respiracao de chegada",
    imageKey: "respiracao-de-chegada",
    area: "FOCUS",
    category: "BREATHING",
    instructionType: "BREATHING",
    shortDescription: "Uma pausa de 1 minuto para sair do automatico antes de comecar.",
    objective: "Ajudar a mente a perceber o presente antes de exigir foco.",
    durationSeconds: 60,
    recommendedWhen: ["Antes de estudar ou trabalhar.", "Quando voce perceber que abriu muitas telas sem intencao."],
    avoidWhen: ["Evite controlar a respiracao se isso causar tontura ou desconforto."],
    howToSteps: ["Sente-se com os pes apoiados.", "Olhe para um ponto fixo a sua frente.", "Inspire de forma natural pelo nariz.", "Expire mais devagar do que inspirou.", "Repita por 1 minuto antes de escolher a proxima acao."],
    postureTips: ["Apoie os pes no chao.", "Deixe os ombros baixos.", "Solte a mandibula."],
    breathingTips: ["Nao force o ar.", "Deixe a expiracao ficar um pouco mais longa.", "Volte ao ritmo natural se ficar desconfortavel."],
    commonMistakes: ["Tentar esvaziar a mente.", "Prender a respiracao.", "Continuar olhando notificacoes durante a pausa."]
  }),
  guided({
    title: "Uma tarefa apenas",
    imageKey: "uma-tarefa-apenas",
    area: "FOCUS",
    category: "WORK_BREAK",
    instructionType: "TIME_BASED",
    shortDescription: "Escolha uma unica tarefa pequena e proteja 2 minutos de atencao.",
    objective: "Treinar monotarefa de forma curta e possivel.",
    durationSeconds: 120,
    recommendedWhen: ["Quando voce estiver pulando entre tarefas.", "Quando o foco estiver baixo, mas ainda existir energia."],
    avoidWhen: ["Evite transformar a pratica em uma meta longa demais."],
    howToSteps: ["Escreva a menor parte da tarefa.", "Feche ou minimize o que nao ajuda agora.", "Coloque um timer de 2 minutos.", "Faca somente essa parte ate o timer terminar."],
    postureTips: ["Mantenha o material essencial visivel.", "Deixe o celular fora do campo de visao.", "Sente-se de forma confortavel."],
    breathingTips: ["Respire uma vez antes de iniciar.", "Solte o ar quando perceber vontade de trocar de aba."],
    commonMistakes: ["Escolher uma tarefa grande.", "Tentar resolver mensagens junto.", "Reiniciar o timer varias vezes."]
  }),
  guided({
    title: "Nomear 3 prioridades",
    imageKey: "nomear-3-prioridades",
    area: "FOCUS",
    category: "ORGANIZATION",
    instructionType: "WRITING",
    shortDescription: "Organize a atencao escrevendo tres prioridades reais para agora.",
    objective: "Reduzir dispersao e criar uma ordem simples de acao.",
    durationSeconds: 180,
    equipment: "Papel, bloco de notas ou campo de anotacao",
    recommendedWhen: ["Quando a mente estiver cheia.", "Quando voce sentir que tudo parece urgente."],
    avoidWhen: ["Evite listar mais de tres itens nesta pratica."],
    howToSteps: ["Escreva tudo que esta competindo pela sua atencao.", "Circule apenas tres itens.", "Marque um deles como primeiro passo.", "Defina uma acao que caiba em 5 minutos."],
    postureTips: ["Escreva em uma posicao confortavel.", "Relaxe a mao e os ombros.", "Mantenha a lista simples."],
    breathingTips: ["Inspire antes de escolher.", "Expire ao cortar o excesso da lista."],
    commonMistakes: ["Chamar desejo de prioridade.", "Colocar tarefas demais.", "Escolher primeiro a tarefa mais pesada."]
  }),
  guided({
    title: "Mesa limpa, mente leve",
    imageKey: "mesa-limpa-mente-leve",
    area: "FOCUS",
    category: "ORGANIZATION",
    instructionType: "TIME_BASED",
    shortDescription: "Reduza estimulos visuais limpando apenas uma pequena area.",
    objective: "Diminuir ruido visual para facilitar o retorno ao foco.",
    durationSeconds: 300,
    recommendedWhen: ["Quando a mesa estiver concorrendo com sua atencao.", "Antes de iniciar um bloco curto de foco."],
    avoidWhen: ["Evite tentar arrumar o ambiente inteiro de uma vez."],
    howToSteps: ["Escolha uma area pequena da mesa.", "Remova itens que nao pertencem a tarefa atual.", "Separe papeis ou objetos em apenas dois grupos.", "Pare quando completar 5 minutos.", "Deixe visivel somente o que ajuda o proximo passo."],
    postureTips: ["Evite se curvar por muito tempo.", "Mantenha os ombros relaxados.", "Use movimentos lentos."],
    breathingTips: ["Respire naturalmente.", "Solte o ar ao finalizar cada pequena parte."],
    commonMistakes: ["Transformar a pausa em faxina.", "Abrir gavetas demais.", "Mexer no celular durante a organizacao."]
  }),
  guided({
    title: "Escrita de distracoes",
    imageKey: "escrita-de-distracoes",
    area: "FOCUS",
    category: "WRITING",
    instructionType: "WRITING",
    shortDescription: "Tire as interrupcoes da cabeca colocando-as em uma lista temporaria.",
    objective: "Liberar espaco mental sem precisar resolver tudo agora.",
    durationSeconds: 300,
    equipment: "Papel, bloco de notas ou campo de anotacao",
    recommendedWhen: ["Quando surgirem muitas lembrancas durante uma tarefa.", "Quando notificacoes mentais ficarem puxando sua atencao."],
    avoidWhen: ["Evite usar a lista como cobranca imediata."],
    howToSteps: ["Anote toda distracao que aparecer.", "Nao resolva nada durante a escrita.", "Marque com uma estrela o que realmente precisa voltar depois.", "Escolha uma unica acao para agora.", "Guarde a lista ate a proxima pausa."],
    postureTips: ["Escreva sem rigidez.", "Solte punhos e ombros.", "Mantenha a tela principal fora do foco."],
    breathingTips: ["Respire antes de voltar para a tarefa.", "Use uma expiracao longa se sentir pressa."],
    commonMistakes: ["Transformar a lista em agenda cheia.", "Julgar as distracoes.", "Voltar para varias tarefas ao mesmo tempo."]
  }),
  guided({
    title: "Levantar e respirar",
    imageKey: "levantar-e-respirar",
    area: "ENERGY",
    category: "MOBILITY",
    instructionType: "TIME_BASED",
    shortDescription: "Uma ativacao minima para sair da inercia sem pressa.",
    objective: "Acordar o corpo com postura e respiracao simples.",
    durationSeconds: 60,
    recommendedWhen: ["Quando voce estiver muito tempo sentado.", "Quando a energia parecer travada."],
    avoidWhen: ["Evite levantar rapido se estiver tonto ou fraco."],
    howToSteps: ["Levante devagar.", "Apoie bem os pes no chao.", "Alongue a coluna sem forcar.", "Respire naturalmente por 5 ciclos.", "Observe se a energia mudou um pouco."],
    postureTips: ["Mantenha joelhos destravados.", "Deixe o peito aberto sem endurecer.", "Solte os ombros."],
    breathingTips: ["Inspire pelo nariz se for confortavel.", "Expire de forma longa.", "Nao prenda o ar."],
    commonMistakes: ["Levantar rapido demais.", "Buscar energia alta imediatamente.", "Ignorar tontura."]
  }),
  guided({
    title: "Agua com presenca",
    imageKey: "agua-com-presenca",
    area: "ENERGY",
    category: "RELAXATION",
    instructionType: "TIME_BASED",
    shortDescription: "Uma pausa curta para beber agua e reconectar com o corpo.",
    objective: "Cuidar da energia basica antes de cobrar desempenho.",
    durationSeconds: 120,
    recommendedWhen: ["Quando voce estiver cansado ou com corpo pesado.", "Entre tarefas longas."],
    avoidWhen: ["Evite se houver restricao medica de ingestao de liquidos."],
    howToSteps: ["Pegue um copo de agua.", "Antes de beber, solte os ombros.", "Beba em pequenos goles.", "Perceba temperatura e ritmo.", "Escolha uma proxima acao simples."],
    postureTips: ["Sente-se ou fique em pe com conforto.", "Evite beber olhando notificacoes.", "Relaxe mandibula."],
    breathingTips: ["Respire entre os goles.", "Solte o ar devagar antes de voltar."],
    commonMistakes: ["Fazer a pausa no automatico.", "Usar a agua como desculpa para abrir redes.", "Voltar correndo para a tarefa."]
  }),
  guided({
    title: "Reset postural",
    imageKey: "reset-postural",
    area: "ENERGY",
    category: "MOBILITY",
    instructionType: "MOBILITY",
    shortDescription: "Ajuste corpo, ombros e coluna para reduzir fadiga acumulada.",
    objective: "Melhorar conforto corporal e liberar energia leve.",
    durationSeconds: 180,
    recommendedWhen: ["Depois de muito tempo sentado.", "Quando o corpo parecer pesado ou fechado."],
    avoidWhen: ["Evite movimentos que gerem dor ou formigamento."],
    howToSteps: ["Apoie os pes no chao.", "Cresca a coluna como se o topo da cabeca subisse.", "Gire os ombros para tras lentamente.", "Abra e feche as maos algumas vezes.", "Finalize com tres respiracoes lentas."],
    postureTips: ["Nao force a lombar.", "Deixe a cabeca alinhada com a coluna.", "Mantenha movimentos pequenos."],
    breathingTips: ["Inspire ao crescer a coluna.", "Expire ao soltar os ombros."],
    commonMistakes: ["Empinar o peito com tensao.", "Forcar o pescoco.", "Fazer movimentos rapidos demais."]
  }),
  guided({
    title: "Marcha leve parada",
    imageKey: "marcha-leve-parada",
    area: "ENERGY",
    category: "LOW_IMPACT_CARDIO",
    instructionType: "TIME_BASED",
    shortDescription: "Ative circulacao com passos leves no lugar.",
    objective: "Elevar energia com movimento seguro e baixo impacto.",
    durationSeconds: 120,
    intensity: "LIGHT",
    recommendedWhen: ["Quando houver lentidao fisica sem exaustao intensa.", "Antes de voltar para uma tarefa curta."],
    avoidWhen: ["Evite se houver dor, tontura ou falta de ar incomum."],
    howToSteps: ["Fique em pe com espaco ao redor.", "Marche no lugar sem saltar.", "Balance os bracos de forma leve.", "Reduza o ritmo se a respiracao acelerar demais.", "Finalize caminhando devagar por alguns segundos."],
    postureTips: ["Pise macio.", "Mantenha joelhos soltos.", "Olhe para frente."],
    breathingTips: ["Respire em ritmo confortavel.", "Fale uma frase curta para checar se o ritmo esta leve."],
    commonMistakes: ["Transformar em treino intenso.", "Prender a respiracao.", "Subir demais os joelhos."]
  }),
  guided({
    title: "Luz e janela",
    imageKey: "luz-e-janela",
    area: "ENERGY",
    category: "RELAXATION",
    instructionType: "TIME_BASED",
    shortDescription: "Use luz natural ou ambiente aberto para sinalizar reativacao suave.",
    objective: "Ajudar o corpo a sair do modo lento com um ajuste ambiental simples.",
    durationSeconds: 180,
    recommendedWhen: ["Quando a energia cair em ambiente fechado.", "Pela manha ou em pausas diurnas."],
    avoidWhen: ["Evite olhar diretamente para sol forte ou luz desconfortavel."],
    howToSteps: ["Aproxime-se de uma janela ou area iluminada.", "Relaxe os olhos olhando para longe.", "Respire sem pressa.", "Observe tres detalhes do ambiente.", "Volte com uma acao pequena."],
    postureTips: ["Mantenha o corpo apoiado.", "Solte os ombros.", "Piscar naturalmente ajuda os olhos."],
    breathingTips: ["Respire pelo nariz se for confortavel.", "Expire como se aliviasse peso dos ombros."],
    commonMistakes: ["Usar a pausa para abrir redes.", "Forcar a vista.", "Esperar energia imediata."]
  }),
  guided({
    title: "Luz baixa de transicao",
    imageKey: "luz-baixa-transicao",
    area: "SLEEP",
    category: "RELAXATION",
    instructionType: "TIME_BASED",
    shortDescription: "Prepare o ambiente com menos luz e menos estimulo visual.",
    objective: "Sinalizar ao corpo que o ritmo pode desacelerar.",
    durationSeconds: 180,
    recommendedWhen: ["No inicio da noite.", "Quando telas e luz forte estiverem mantendo voce alerta."],
    avoidWhen: ["Evite deixar o ambiente escuro se isso trouxer inseguranca."],
    howToSteps: ["Reduza uma luz forte.", "Diminua brilho da tela se ainda precisar usa-la.", "Afaste notificacoes.", "Respire por alguns ciclos.", "Escolha uma atividade calma para continuar."],
    postureTips: ["Mantenha uma postura confortavel.", "Evite deitar se ainda precisa finalizar algo importante.", "Solte a mandibula."],
    breathingTips: ["Alongue a expiracao.", "Nao force sonolencia."],
    commonMistakes: ["Apagar tudo de uma vez e voltar para o celular.", "Transformar a rotina em obrigacao rigida.", "Usar luz baixa enquanto consome conteudo acelerado."]
  }),
  guided({
    title: "Celular longe da cama",
    imageKey: "celular-longe-da-cama",
    area: "SLEEP",
    category: "WORK_BREAK",
    instructionType: "TIME_BASED",
    shortDescription: "Crie uma pequena distancia fisica entre voce e a tela.",
    objective: "Reduzir o impulso de checar notificacoes antes de dormir.",
    durationSeconds: 60,
    recommendedWhen: ["Quando o celular estiver puxando sua atencao na cama.", "Antes do ritual de sono."],
    avoidWhen: ["Evite se voce precisa do aparelho por seguranca; nesse caso, deixe em modo silencioso e fora da mao."],
    howToSteps: ["Escolha um local fora do alcance da cama.", "Ative modo silencioso ou foco, se possivel.", "Coloque o carregador nesse local.", "Volte para a cama sem abrir outro app.", "Respire por tres ciclos."],
    postureTips: ["Movimente-se devagar.", "Evite deitar segurando o celular.", "Mantenha o quarto seguro e acessivel."],
    breathingTips: ["Expire longo ao deixar o aparelho.", "Respire naturalmente depois."],
    commonMistakes: ["Deixar o celular virado para cima.", "Checar uma ultima coisa.", "Usar outro dispositivo no lugar."]
  }),
  guided({
    title: "Pendencia para amanha",
    imageKey: "pendencia-para-amanha",
    area: "SLEEP",
    category: "WRITING",
    instructionType: "WRITING",
    shortDescription: "Tire uma pendencia da cabeca e coloque em um lugar confiavel.",
    objective: "Reduzir preocupacao noturna sem tentar resolver tudo.",
    durationSeconds: 180,
    equipment: "Papel, bloco de notas ou campo de anotacao",
    recommendedWhen: ["Quando a mente listar tarefas na hora de dormir.", "Depois de um dia com muitas pendencias."],
    avoidWhen: ["Evite abrir uma lista longa de planejamento completo."],
    howToSteps: ["Escreva uma pendencia que esta voltando na mente.", "Defina apenas o primeiro passo de amanha.", "Anote um horario aproximado para olhar isso.", "Feche a nota.", "Respire e diga: isso ficou registrado."],
    postureTips: ["Escreva em postura relaxada.", "Evite usar luz forte.", "Solte maos e ombros."],
    breathingTips: ["Respire antes de escrever.", "Expire ao finalizar a anotacao."],
    commonMistakes: ["Planejar a semana toda.", "Abrir mensagens de trabalho.", "Cobrar uma solucao imediata."]
  }),
  guided({
    title: "Relaxamento dos pes a cabeca",
    imageKey: "relaxamento-pes-cabeca",
    area: "SLEEP",
    category: "RELAXATION",
    instructionType: "RELAXATION",
    shortDescription: "Percorra o corpo lentamente para soltar tensoes antes de dormir.",
    objective: "Ajudar o corpo a perceber seguranca e reduzir ativacao.",
    durationSeconds: 300,
    recommendedWhen: ["Antes de dormir.", "Quando o corpo estiver tenso no fim do dia."],
    avoidWhen: ["Evite se focar no corpo aumentar desconforto; volte para respiracao natural."],
    howToSteps: ["Deite ou sente-se com apoio.", "Leve atencao aos pes.", "Suba lentamente por pernas, quadril, tronco, ombros e rosto.", "Em cada parte, solte o peso que for possivel.", "Finalize respirando de forma natural."],
    postureTips: ["Use apoio para ficar confortavel.", "Nao force alongamento.", "Ajuste travesseiro ou cadeira se precisar."],
    breathingTips: ["Expire ao soltar cada regiao.", "Deixe a respiracao voltar ao natural."],
    commonMistakes: ["Tentar relaxar perfeitamente.", "Prender o ar.", "Ficar procurando sinais de problema."]
  }),
  guided({
    title: "Escaneamento corporal",
    imageKey: "escaneamento-corporal",
    area: "SLEEP",
    category: "RELAXATION",
    instructionType: "RELAXATION",
    shortDescription: "Observe o corpo sem tentar consertar tudo.",
    objective: "Criar uma transicao de presenca e descanso.",
    durationSeconds: 600,
    recommendedWhen: ["Quando a mente estiver acelerada na cama.", "Quando voce quiser uma pratica sem tela."],
    avoidWhen: ["Evite se a observacao corporal ficar angustiante; abra os olhos e procure apoio."],
    howToSteps: ["Feche ou suavize os olhos.", "Observe contato do corpo com a superficie.", "Passe atencao por partes do corpo.", "Nomeie sensacoes de forma neutra.", "Volte a respiracao natural quando a mente sair."],
    postureTips: ["Apoie a coluna.", "Solte mandibula e testa.", "Mantenha as maos confortaveis."],
    breathingTips: ["Respire sem controlar demais.", "Use a expiracao como sinal de descanso."],
    commonMistakes: ["Tentar dormir imediatamente.", "Julgar distrações.", "Fazer a pratica com tela ligada."]
  }),
  guided({
    title: "Nomear o humor atual",
    imageKey: "nomear-humor-atual",
    area: "MOOD",
    category: "RELAXATION",
    instructionType: "TIME_BASED",
    shortDescription: "Dê um nome simples ao que voce sente agora, sem se reduzir a isso.",
    objective: "Aumentar clareza emocional com gentileza.",
    durationSeconds: 60,
    recommendedWhen: ["Quando o humor parecer confuso.", "Antes de escolher uma acao de cuidado."],
    avoidWhen: ["Evite buscar uma palavra perfeita."],
    howToSteps: ["Pergunte: como esta meu humor agora?", "Escolha uma palavra simples.", "Perceba onde isso aparece no corpo.", "Diga: isso e um estado, nao tudo que eu sou.", "Escolha um cuidado pequeno."],
    postureTips: ["Sente-se com apoio.", "Relaxe ombros e rosto.", "Mantenha o olhar suave."],
    breathingTips: ["Respire naturalmente.", "Expire antes de escolher a palavra."],
    commonMistakes: ["Julgar o que apareceu.", "Forcar pensamento positivo.", "Tentar resolver tudo imediatamente."]
  }),
  guided({
    title: "Uma coisa boa agora",
    imageKey: "uma-coisa-boa-agora",
    area: "MOOD",
    category: "WRITING",
    instructionType: "WRITING",
    shortDescription: "Reconheca um ponto pequeno ou neutro que ainda existe no dia.",
    objective: "Treinar atencao para sinais positivos possiveis sem negar dificuldades.",
    durationSeconds: 120,
    equipment: "Papel, bloco de notas ou campo de anotacao",
    recommendedWhen: ["Quando o humor estiver baixo, mas voce conseguir escrever uma frase.", "No fim de uma pausa curta."],
    avoidWhen: ["Evite usar a pratica para invalidar tristeza ou cansaco."],
    howToSteps: ["Pense em algo pequeno que nao foi ruim.", "Escreva uma frase concreta.", "Nomeie por que isso importou um pouco.", "Respire antes de seguir.", "Guarde sem precisar transformar em gratidao grande."],
    postureTips: ["Escreva de forma relaxada.", "Deixe a frase ser simples.", "Evite editar demais."],
    breathingTips: ["Respire naturalmente.", "Solte o ar ao terminar a frase."],
    commonMistakes: ["Forcar alegria.", "Comparar seu dia com outros.", "Desqualificar coisas pequenas."]
  }),
  guided({
    title: "Musica curta positiva",
    imageKey: "musica-curta-positiva",
    area: "MOOD",
    category: "RELAXATION",
    instructionType: "TIME_BASED",
    shortDescription: "Use uma musica curta para mudar o ritmo interno com intencao.",
    objective: "Apoiar o humor por meio de um estimulo escolhido, sem excesso de tela.",
    durationSeconds: 180,
    recommendedWhen: ["Quando uma musica leve ajudar a regular o momento.", "Quando voce quiser uma pausa emocional breve."],
    avoidWhen: ["Evite se abrir apps de musica virar rolagem infinita ou gatilho de comparacao."],
    howToSteps: ["Escolha uma musica conhecida e segura para voce.", "Deixe a tela de lado enquanto toca.", "Observe uma parte do som com atencao.", "Respire durante o refrao ou trecho preferido.", "Ao terminar, escolha uma acao pequena."],
    postureTips: ["Fique em uma posicao confortavel.", "Relaxe rosto e ombros.", "Evite volume alto demais."],
    breathingTips: ["Respire junto com o ritmo, sem forcar.", "Use a expiracao para soltar tensao."],
    commonMistakes: ["Abrir redes junto.", "Usar musica para fugir de tudo por muito tempo.", "Aumentar volume para cobrir desconforto."]
  }),
  guided({
    title: "Diario de 3 linhas",
    imageKey: "diario-3-linhas",
    area: "MOOD",
    category: "WRITING",
    instructionType: "WRITING",
    shortDescription: "Escreva tres linhas para organizar o humor com simplicidade.",
    objective: "Expressar o estado atual sem transformar a escrita em analise longa.",
    durationSeconds: 300,
    equipment: "Papel, bloco de notas ou campo de anotacao",
    recommendedWhen: ["Quando o humor estiver pesado ou confuso.", "Quando voce quiser se escutar sem julgamento."],
    avoidWhen: ["Evite reler varias vezes se isso aumentar autocritica."],
    howToSteps: ["Linha 1: hoje eu estou sentindo...", "Linha 2: isso pode estar ligado a...", "Linha 3: agora eu posso fazer uma coisa pequena, que e...", "Leia apenas uma vez.", "Feche com uma respiracao tranquila."],
    postureTips: ["Sente-se com apoio.", "Relaxe a mao.", "Escreva sem buscar palavras bonitas."],
    breathingTips: ["Respire antes de cada linha.", "Solte o ar antes da linha final."],
    commonMistakes: ["Escrever um julgamento de si.", "Tentar encontrar causa perfeita.", "Transformar em lista de problemas."]
  }),
  guided({
    title: "Mensagem gentil para alguem",
    imageKey: "mensagem-gentil-para-alguem",
    area: "MOOD",
    category: "WRITING",
    instructionType: "WRITING",
    shortDescription: "Crie uma pequena acao de conexao social com baixo esforco.",
    objective: "Apoiar bem-estar por meio de contato simples e seguro.",
    durationSeconds: 300,
    equipment: "Celular ou papel",
    recommendedWhen: ["Quando voce sentir vontade de se conectar.", "Quando o humor estiver baixo e uma mensagem leve parecer possivel."],
    avoidWhen: ["Evite se o contato gerar conflito, cobranca ou risco para voce."],
    howToSteps: ["Pense em uma pessoa segura.", "Escreva uma mensagem curta e sem cobranca.", "Use algo simples, como: lembrei de voce hoje.", "Envie apenas se parecer confortavel.", "Se nao enviar, reconheca que pensar na conexao ja conta."],
    postureTips: ["Evite ficar rolando conversas antigas.", "Mantenha a mensagem curta.", "Use uma postura confortavel."],
    breathingTips: ["Respire antes de enviar.", "Solte o ar se vier ansiedade de resposta."],
    commonMistakes: ["Esperar resposta imediata.", "Mandar mensagem longa demais.", "Escolher alguem que aumenta tensao."]
  }),
  guided({
    title: "Yoga de bolso: coluna leve",
    imageKey: "yoga-bolso-coluna-leve",
    area: "BODY_MOVEMENT",
    category: "YOGA",
    level: 1,
    instructionType: "MOBILITY",
    shortDescription: "Uma pratica curta de yoga leve para soltar coluna, ombros e respiracao.",
    objective: "Trazer movimento suave ao corpo sem virar treino intenso.",
    durationSeconds: 360,
    intensity: "VERY_LIGHT",
    recommendedWhen: ["Quando o corpo estiver rigido.", "Quando voce quiser movimento leve sem sair do conceito de pausa."],
    avoidWhen: ["Evite se houver dor na coluna, tontura ou desconforto incomum."],
    howToSteps: ["Sente-se ou fique em pe com apoio.", "Cresca a coluna inspirando.", "Incline o tronco suavemente para um lado e depois para o outro.", "Gire ombros devagar.", "Finalize com tres respiracoes longas."],
    postureTips: ["Nao force amplitude.", "Mantenha o pescoco confortavel.", "Use cadeira como apoio se precisar."],
    breathingTips: ["Inspire ao alongar a coluna.", "Expire ao inclinar ou soltar ombros.", "Volte ao natural se ficar desconfortavel."],
    commonMistakes: ["Fazer rapido demais.", "Forcar torcao.", "Comparar sua mobilidade com imagens de yoga."]
  }),
  guided({
    title: "Yoga de bolso: pausa no chao",
    imageKey: "yoga-bolso-pausa-no-chao",
    area: "BODY_MOVEMENT",
    category: "YOGA",
    level: 1,
    instructionType: "STRETCHING",
    shortDescription: "Uma sequencia muito leve no chao para desacelerar corpo e mente.",
    objective: "Criar um fechamento corporal calmo com posturas simples e seguras.",
    durationSeconds: 420,
    intensity: "VERY_LIGHT",
    equipment: "Tapete, toalha ou superficie confortavel",
    recommendedWhen: ["No fim do dia.", "Quando voce quiser desacelerar sem tela."],
    avoidWhen: ["Evite se levantar ou deitar no chao for desconfortavel ou inseguro."],
    howToSteps: ["Sente-se em uma superficie confortavel.", "Apoie as maos nas pernas e respire.", "Leve o tronco levemente a frente sem forcar.", "Volte devagar e abrace os joelhos se for confortavel.", "Finalize sentado, percebendo o ritmo da respiracao."],
    postureTips: ["Use almofada se precisar.", "Mantenha joelhos relaxados.", "Nao force lombar ou quadril."],
    breathingTips: ["Inspire ao crescer a coluna.", "Expire ao aproximar o tronco.", "Respire naturalmente no final."],
    commonMistakes: ["Forcar flexibilidade.", "Prender o ar.", "Ficar em posicao que causa dor."]
  }),
  ...plannedReferenceExerciseInstructionSeeds,
  ...coreConditioningExerciseInstructionSeeds,
  ...sleepSupportExerciseInstructionSeeds,
  ...expandedInstructionSeeds
].map((item) => ({ ...item, slug: item.slug || slugify(item.title) }));
