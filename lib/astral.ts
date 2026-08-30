import { prisma } from "@/lib/prisma";
import { archivedCatalogIds, isCatalogEntryActive } from "@/lib/catalog-reconciliation";
import { completeActivity } from "@/lib/activity-completions";

export type ProfileState = "OVERLOADED" | "DISTRACTED" | "EXHAUSTED" | "AGITATED" | "LOW_MOOD" | "POOR_SLEEP" | "BALANCED" | "MIXED";
export type ExerciseArea = "FOCUS" | "STRESS" | "ENERGY" | "MOOD" | "SLEEP";

export type CheckinScores = {
  focusScore: number;
  stressScore: number;
  energyScore: number;
  moodScore: number;
  sleepScore: number;
};

export const stateCopy: Record<ProfileState, { name: string; explanation: string; area: ExerciseArea }> = {
  OVERLOADED: {
    name: "Astral Sobrecarregado",
    explanation: "Hoje seu corpo e sua mente parecem estar lidando com bastante carga. Vamos reduzir estimulos antes de exigir produtividade.",
    area: "STRESS"
  },
  DISTRACTED: {
    name: "Astral Disperso",
    explanation: "Hoje sua energia existe, mas sua atencao parece espalhada. Vamos criar clareza antes de tentar produzir mais.",
    area: "FOCUS"
  },
  EXHAUSTED: {
    name: "Astral Esgotado",
    explanation: "Hoje o sinal principal parece ser cansaco. O ideal e recuperar energia com acoes leves e descanso melhor.",
    area: "SLEEP"
  },
  AGITATED: {
    name: "Astral Agitado",
    explanation: "Sua mente parece acelerada. Antes de resolver tudo, vamos diminuir o ritmo do corpo e organizar pensamentos.",
    area: "STRESS"
  },
  LOW_MOOD: {
    name: "Astral Desanimado",
    explanation: "Hoje seu humor parece mais baixo. O foco nao e se forcar a ficar bem, mas dar um pequeno passo possivel.",
    area: "MOOD"
  },
  POOR_SLEEP: {
    name: "Astral Noturno Ruim",
    explanation: "Seu sono parece ter sido afetado. Hoje vale proteger sua energia e preparar melhor a proxima noite.",
    area: "SLEEP"
  },
  BALANCED: {
    name: "Astral Equilibrado",
    explanation: "Seu estado geral parece favoravel hoje. E um bom momento para avancar um pouco mais, sem perder equilibrio.",
    area: "FOCUS"
  },
  MIXED: {
    name: "Astral Misto",
    explanation: "Seu perfil do momento mistura sinais diferentes. Vamos escolher uma pratica segura e simples para o agora.",
    area: "STRESS"
  }
};

export function detectProfileState(input: CheckinScores): ProfileState {
  if (input.energyScore <= 2 && input.sleepScore <= 2) return "EXHAUSTED";
  if (input.stressScore >= 4 && input.focusScore <= 3 && input.sleepScore <= 3) return "AGITATED";
  if (input.stressScore >= 4 && input.energyScore <= 3) return "OVERLOADED";
  if (input.focusScore <= 2 && input.stressScore <= 3 && input.energyScore >= 3) return "DISTRACTED";
  if (input.moodScore <= 2 && input.energyScore <= 3) return "LOW_MOOD";
  if (input.sleepScore <= 2 && input.stressScore >= 3) return "POOR_SLEEP";
  if (input.focusScore >= 4 && input.stressScore <= 2 && input.energyScore >= 4 && input.moodScore >= 4 && input.sleepScore >= 4) return "BALANCED";
  return "MIXED";
}

export function areaForScores(input: CheckinScores, state: ProfileState): ExerciseArea {
  if (state !== "MIXED") return stateCopy[state].area;
  if (input.stressScore >= 4) return "STRESS";
  if (input.sleepScore <= 2) return "SLEEP";
  if (input.energyScore <= 2) return "ENERGY";
  if (input.moodScore <= 2) return "MOOD";
  if (input.focusScore <= 2) return "FOCUS";
  return "FOCUS";
}

export function safeRecommendedLevel(input: CheckinScores, areaLevel: number, state: ProfileState) {
  if (input.energyScore <= 2 || input.sleepScore <= 2 || input.stressScore >= 4) return Math.min(2, areaLevel);
  if (state === "BALANCED") return Math.min(5, areaLevel + 1);
  return Math.min(5, Math.max(1, areaLevel));
}

export function areaLevelFromCompleted(completed: number) {
  if (completed >= 21) return 5;
  if (completed >= 14) return 4;
  if (completed >= 7) return 3;
  if (completed >= 3) return 2;
  return 1;
}

export async function getAreaProgress(userId: string, area: ExerciseArea) {
  const progress = await prisma.exerciseProgress.findUnique({ where: { userId_area: { userId, area } } });
  return progress || { completedCount: 0, currentAreaLevel: 1 };
}

export async function getRecommendedExercise(userId: string, input: CheckinScores) {
  const profileState = detectProfileState(input);
  const recommendedArea = areaForScores(input, profileState);
  const progress = await getAreaProgress(userId, recommendedArea);
  const recommendedLevel = safeRecommendedLevel(input, progress.currentAreaLevel, profileState);
  const recommendedExercise =
    (await prisma.exercise.findFirst({
      where: { area: recommendedArea, level: recommendedLevel, id: { notIn: archivedCatalogIds("EXERCISE") } },
      orderBy: [{ durationMinutes: "asc" }, { title: "asc" }]
    })) ||
    (await prisma.exercise.findFirst({
      where: { area: recommendedArea, id: { notIn: archivedCatalogIds("EXERCISE") } },
      orderBy: [{ level: "asc" }, { durationMinutes: "asc" }]
    }));
  const alternativeArea: ExerciseArea = recommendedArea === "STRESS" ? "SLEEP" : "STRESS";
  const alternativeExercise = await prisma.exercise.findFirst({
    where: { area: alternativeArea, level: 1, id: { notIn: archivedCatalogIds("EXERCISE") } },
    orderBy: [{ durationMinutes: "asc" }, { title: "asc" }]
  });
  const copy = stateCopy[profileState];

  return {
    profileState,
    publicStateName: copy.name,
    explanation: copy.explanation,
    recommendedArea,
    recommendedLevel,
    recommendedExercise,
    alternativeExercise,
    safetyNote: "Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional. Pare se sentir dor, tontura ou desconforto incomum."
  };
}

export async function completeExerciseSession(input: { userId: string; exerciseId: string; checkinId?: string | null; completionToken: string }) {
  const exercise = await prisma.exercise.findUnique({ where: { id: input.exerciseId } });
  if (!exercise || !isCatalogEntryActive("EXERCISE", exercise.id)) throw new Error("Exercise not found");
  if (input.checkinId) {
    const checkin = await prisma.checkin.findFirst({ where: { id: input.checkinId, userId: input.userId } });
    if (!checkin) throw new Error("Check-in not found");
  }
  const result = await completeActivity({
    userId: input.userId,
    activityType: "EXERCISE",
    source: "/api/exercises/session",
    targetId: exercise.id,
    checkinId: input.checkinId,
    completionToken: input.completionToken,
    domainRecordType: "ExerciseSession",
    xpAwarded: exercise.xpReward,
    createDomain: async (tx) => {
      const session = await tx.exerciseSession.create({
        data: {
          userId: input.userId,
          exerciseId: input.exerciseId,
          checkinId: input.checkinId || null,
          completedAt: new Date(),
          xpAwarded: exercise.xpReward
        }
      });
      const current = await tx.exerciseProgress.findUnique({
        where: { userId_area: { userId: input.userId, area: exercise.area } }
      });
      const completedCount = (current?.completedCount || 0) + 1;
      const areaLevel = areaLevelFromCompleted(completedCount);
      await tx.exerciseProgress.upsert({
        where: { userId_area: { userId: input.userId, area: exercise.area } },
        update: { completedCount, currentAreaLevel: areaLevel },
        create: { userId: input.userId, area: exercise.area, completedCount, currentAreaLevel: areaLevel }
      });
      return { id: session.id, session, areaLevel, completedCount };
    }
  });
  const persistedProgress = result.domain ? null : await prisma.exerciseProgress.findUnique({
    where: { userId_area: { userId: input.userId, area: exercise.area } }
  });
  return {
    session: result.domain?.session || (result.sessionId ? await prisma.exerciseSession.findUnique({ where: { id: result.sessionId } }) : null),
    exercise,
    areaLevel: result.domain?.areaLevel || persistedProgress?.currentAreaLevel || 1,
    completedCount: result.domain?.completedCount || persistedProgress?.completedCount || 0,
    alreadyCompleted: result.alreadyCompleted,
    xpAwarded: result.xpAwarded,
    originalXpAwarded: result.originalXpAwarded,
    sessionId: result.sessionId,
    leveledUp: result.leveledUp,
    level: result.level
  };
}
