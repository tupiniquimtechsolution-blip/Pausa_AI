import { ExerciseArea, safeRecommendedLevel, detectProfileState } from "@/lib/astral";

export function getRecommendedHomeWorkout(input: {
  focusScore: number;
  stressScore: number;
  energyScore: number;
  moodScore: number;
  sleepScore: number;
  userLevel: number;
}) {
  const profileState = detectProfileState(input);
  const suggestedLevel = safeRecommendedLevel(input, Math.min(5, Math.max(1, input.userLevel)), profileState);
  let modality = "Funcional em casa";
  let reason = "Seu estado atual permite uma rotina curta de movimento em casa.";
  let area: ExerciseArea = "ENERGY";

  if (input.stressScore >= 4) {
    modality = "Mobilidade funcional";
    area = "STRESS";
    reason = "Como o estresse parece alto, a recomendacao prioriza mobilidade, respiracao e baixo impacto.";
  } else if (input.energyScore <= 2) {
    modality = "Energia";
    reason = "Como sua energia parece baixa, a recomendacao reduz intensidade e duracao.";
  } else if (input.sleepScore <= 2) {
    modality = "Yoga";
    area = "SLEEP";
    reason = "Como o sono parece ruim, a recomendacao evita cardio intenso e prioriza desaceleracao.";
  } else if (input.focusScore <= 2) {
    modality = "Foco";
    area = "FOCUS";
    reason = "Como o foco parece baixo, a recomendacao usa pausa ativa curta para organizar atencao.";
  } else if (input.moodScore <= 2) {
    modality = "Funcional em casa";
    area = "MOOD";
    reason = "Como o humor parece baixo, a recomendacao busca uma ativacao leve e possivel.";
  }

  return {
    profileState,
    modality,
    area,
    suggestedLevel,
    reason,
    safetyNote: "Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum."
  };
}
