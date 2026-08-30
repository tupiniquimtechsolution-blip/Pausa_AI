export const RECOMMENDATION_ENGINE_VERSION = "pausa-rules-2026.07.25-v1";

export type RecommendationFactor = {
  field: string;
  value: string | number | boolean;
  effect: string;
};

export type RecommendationCandidate = {
  sourceKey: string;
  circuitSlug: string;
  modality: string;
  level: number;
  difficulty: string;
  durationSeconds: number | null;
  title: string;
};

export type RecommendationInput = {
  checkin: {
    sleepScore: number;
    energyScore: number;
    dispositionScore: number;
    tirednessScore: number;
    stressScore: number;
    anxietyScore: number;
    moodScore: number;
    focusScore: number;
    painScore: number;
    painRegion?: string | null;
    availableMinutes: number;
    riskDetected: boolean;
  };
  candidates: RecommendationCandidate[];
  recentlyCompletedSourceKeys?: string[];
  recentlyAbandonedSourceKeys?: string[];
};

export type RecommendationResult = {
  engineVersion: string;
  outcomeType: "SUGGESTION" | "ALERT" | "RESTRICTION" | "NO_ACTIVITY";
  intensity: "VERY_LIGHT" | "LIGHT" | "MODERATE";
  difficulty: "BEGINNER" | "ADAPTIVE";
  durationMinutes: number;
  modality: string;
  circuitSlug: string | null;
  movementSourceKey: string | null;
  movementCount: number;
  pauseSeconds: number;
  alternativeSourceKey: string | null;
  avoidedContent: string[];
  factors: RecommendationFactor[];
  justification: string;
  alternativeReason: string;
  canIgnore: boolean;
  safetyBlock: boolean;
};

function chooseCandidate(
  candidates: RecommendationCandidate[],
  preferredModalities: string[],
  excluded: Set<string>,
  availableMinutes: number
) {
  const eligible = candidates
    .filter((candidate) => !excluded.has(candidate.sourceKey))
    .filter((candidate) => !candidate.durationSeconds || candidate.durationSeconds <= Math.max(availableMinutes, 3) * 60)
    .sort((a, b) => a.level - b.level || a.title.localeCompare(b.title));
  return preferredModalities
    .map((modality) => eligible.find((candidate) => candidate.modality === modality))
    .find(Boolean) || eligible[0] || null;
}

export function buildRecommendation(input: RecommendationInput): RecommendationResult {
  const { checkin } = input;
  const factors: RecommendationFactor[] = [];
  const avoidedContent: string[] = [];
  const excluded = new Set([...(input.recentlyCompletedSourceKeys || []), ...(input.recentlyAbandonedSourceKeys || [])]);

  factors.push({ field: "availableMinutes", value: checkin.availableMinutes, effect: "limita a duração sugerida" });
  if (checkin.sleepScore <= 2) factors.push({ field: "sleepScore", value: checkin.sleepScore, effect: "reduz intensidade" });
  if (checkin.tirednessScore >= 4) factors.push({ field: "tirednessScore", value: checkin.tirednessScore, effect: "prioriza recuperação" });
  if (checkin.stressScore >= 4) factors.push({ field: "stressScore", value: checkin.stressScore, effect: "prioriza regulação" });
  if (checkin.anxietyScore >= 4) factors.push({ field: "anxietyScore", value: checkin.anxietyScore, effect: "prioriza respiração ou relaxamento" });
  if (checkin.focusScore <= 2) factors.push({ field: "focusScore", value: checkin.focusScore, effect: "prioriza Modo Foco" });
  if (checkin.painScore >= 3) {
    factors.push({ field: "painScore", value: checkin.painScore, effect: "restringe impacto e esforço" });
    avoidedContent.push("HIGH_IMPACT", "MAX_EFFORT", "PAIN_REGION_LOAD");
  }

  const safetyBlock = checkin.riskDetected || checkin.painScore >= 5;
  if (safetyBlock) {
    factors.push({
      field: checkin.riskDetected ? "riskDetected" : "painScore",
      value: checkin.riskDetected || checkin.painScore,
      effect: "bloqueio de segurança documentado"
    });
    return {
      engineVersion: RECOMMENDATION_ENGINE_VERSION,
      outcomeType: "NO_ACTIVITY",
      intensity: "VERY_LIGHT",
      difficulty: "BEGINNER",
      durationMinutes: 0,
      modality: "NONE",
      circuitSlug: null,
      movementSourceKey: null,
      movementCount: 0,
      pauseSeconds: 0,
      alternativeSourceKey: null,
      avoidedContent: [...avoidedContent, "GUIDED_ACTIVITY"],
      factors,
      justification: checkin.riskDetected
        ? "O check-in contém um sinal de segurança que pede apoio humano em vez de atividade guiada."
        : "A intensidade de dor informada exige interromper sugestões de atividade e buscar avaliação adequada.",
      alternativeReason: "Nenhuma atividade é sugerida enquanto o sinal de segurança estiver presente.",
      canIgnore: false,
      safetyBlock: true
    };
  }

  let preferredModalities = ["MOBILITY", "STRETCHING", "BREATHING", "RELAXATION"];
  let intensity: RecommendationResult["intensity"] = "LIGHT";
  const outcomeType: RecommendationResult["outcomeType"] = checkin.painScore >= 3 ? "RESTRICTION" : "SUGGESTION";

  if (checkin.anxietyScore >= 4 || checkin.stressScore >= 4) {
    preferredModalities = ["BREATHING", "RELAXATION", "MEDITATION", "WALKING"];
  } else if (checkin.sleepScore <= 2 || checkin.tirednessScore >= 4 || checkin.dispositionScore <= 2) {
    preferredModalities = ["RELAXATION", "SLEEP", "MOBILITY", "STRETCHING"];
  } else if (checkin.focusScore <= 2) {
    preferredModalities = ["FOCUS_MODE", "BREATHING", "MEDITATION"];
  } else if (checkin.energyScore >= 4 && checkin.painScore <= 2) {
    preferredModalities = ["FITNESS", "AEROBICS", "MOBILITY"];
    intensity = "MODERATE";
  }

  const selected = chooseCandidate(input.candidates, preferredModalities, excluded, checkin.availableMinutes);
  const alternative = chooseCandidate(
    input.candidates,
    [...preferredModalities].reverse(),
    new Set([...excluded, ...(selected ? [selected.sourceKey] : [])]),
    checkin.availableMinutes
  );
  if (!selected) {
    return {
      engineVersion: RECOMMENDATION_ENGINE_VERSION,
      outcomeType: "ALERT",
      intensity: "VERY_LIGHT",
      difficulty: "BEGINNER",
      durationMinutes: Math.min(checkin.availableMinutes, 3),
      modality: "PAUSE",
      circuitSlug: null,
      movementSourceKey: null,
      movementCount: 0,
      pauseSeconds: 60,
      alternativeSourceKey: null,
      avoidedContent,
      factors,
      justification: "Nenhum conteúdo aprovado combinou com o contexto e o tempo disponíveis.",
      alternativeReason: "Faça uma pausa sem atividade e tente novamente mais tarde.",
      canIgnore: true,
      safetyBlock: false
    };
  }

  const durationMinutes = Math.max(1, Math.min(checkin.availableMinutes, Math.ceil((selected.durationSeconds || 300) / 60)));
  return {
    engineVersion: RECOMMENDATION_ENGINE_VERSION,
    outcomeType,
    intensity,
    difficulty: selected.level <= 1 ? "BEGINNER" : "ADAPTIVE",
    durationMinutes,
    modality: selected.modality,
    circuitSlug: selected.circuitSlug,
    movementSourceKey: selected.sourceKey,
    movementCount: durationMinutes >= 10 ? 3 : durationMinutes >= 5 ? 2 : 1,
    pauseSeconds: intensity === "MODERATE" ? 45 : 60,
    alternativeSourceKey: alternative?.sourceKey || null,
    avoidedContent,
    factors,
    justification: `${selected.title} foi selecionado por compatibilidade com o contexto, o tempo disponível e os conteúdos aprovados.`,
    alternativeReason: alternative
      ? `${alternative.title} mantém uma opção diferente no mesmo limite de tempo.`
      : "Se a sugestão não servir, faça uma pausa sem atividade e refaça o check-in mais tarde.",
    canIgnore: true,
    safetyBlock: false
  };
}
