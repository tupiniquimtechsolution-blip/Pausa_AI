type CheckinLike = {
  focusScore: number;
  stressScore: number;
  energyScore: number;
  sleepScore: number;
  moodScore: number;
};

type YogaPracticeLike = {
  slug: string;
  yogaType: string;
  area: string;
  level: number;
  context: string;
};

function safeLevel(checkin: CheckinLike, userLevel: number) {
  if (checkin.energyScore <= 2 || checkin.sleepScore <= 2 || checkin.stressScore >= 4) return Math.min(2, Math.max(1, userLevel));
  return Math.min(5, Math.max(1, userLevel));
}

export function yogaPriority(checkin: CheckinLike) {
  if (checkin.stressScore >= 4) return { area: "STRESS", yogaType: "RESTORATIVE", reason: "Seu check-in sugere bastante carga hoje; uma pratica restaurativa e mais adequada que intensidade." };
  if (checkin.sleepScore <= 2) return { area: "SLEEP", yogaType: "RESTORATIVE", reason: "O sono parece sensivel, entao a prioridade e desacelerar e proteger energia." };
  if (checkin.focusScore <= 2) return { area: "FOCUS", yogaType: "FUNCTIONAL", reason: "O foco parece disperso; uma pausa funcional curta pode reorganizar corpo e atencao." };
  if (checkin.energyScore <= 2) return { area: "ENERGY", yogaType: "LIGHT", reason: "A energia esta baixa; vamos usar movimento muito leve, sem transformar cuidado em cobranca." };
  if (checkin.moodScore <= 2) return { area: "MOOD", yogaType: "LIGHT", reason: "O humor pede cuidado gentil; abertura leve, respiracao e presenca sao suficientes por agora." };
  return { area: "ENERGY", yogaType: "LIGHT", reason: "Seu estado parece mais estavel; uma pratica leve pode apoiar energia sem excesso." };
}

export function getRecommendedYogaPractice<T extends YogaPracticeLike>(checkin: CheckinLike, practices: T[], userLevel = 1) {
  const priority = yogaPriority(checkin);
  const level = safeLevel(checkin, userLevel);
  const sorted = [...practices].sort((a, b) => a.level - b.level || a.slug.localeCompare(b.slug));
  const exact = sorted.find((item) => item.area === priority.area && item.yogaType === priority.yogaType && item.level <= level);
  const byArea = sorted.find((item) => item.area === priority.area && item.level <= level);
  const restorativeFallback = sorted.find((item) => item.yogaType === "RESTORATIVE" && item.level <= Math.min(level, 2));
  const fallback = sorted.find((item) => item.level <= level) || sorted[0];
  return {
    practice: exact || byArea || restorativeFallback || fallback,
    reason: priority.reason,
    recommendedArea: priority.area,
    recommendedYogaType: priority.yogaType,
    suggestedLevel: level,
    safetyNote: "Faca em ritmo confortavel. Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum."
  };
}

export function getRecommendedYogaSequence<T extends { level: number; goals: string; context: string }>(checkin: CheckinLike, sequences: T[], userLevel = 1) {
  const priority = yogaPriority(checkin);
  const level = safeLevel(checkin, userLevel);
  return [...sequences]
    .sort((a, b) => a.level - b.level)
    .find((sequence) => sequence.level <= level && sequence.goals.includes(priority.area)) || sequences.find((sequence) => sequence.level <= level) || sequences[0];
}
