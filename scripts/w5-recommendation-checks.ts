import { PrismaClient } from "@prisma/client";
import { buildRecommendation, RECOMMENDATION_ENGINE_VERSION } from "../lib/recommendations/engine";
import { createRecommendationForCheckin } from "../lib/recommendations/service";

const prisma = new PrismaClient();
const candidates = [
  { sourceKey: "breathing", circuitSlug: "mind-breathing", modality: "BREATHING", level: 1, difficulty: "LIGHT", durationSeconds: 180, title: "Respiração" },
  { sourceKey: "mobility", circuitSlug: "body-mobility", modality: "MOBILITY", level: 1, difficulty: "LIGHT", durationSeconds: 300, title: "Mobilidade" }
];

function assert(value: unknown, message: string): asserts value {
  if (!value) throw new Error(`W5 gate: ${message}`);
}

async function main() {
  const suggestion = buildRecommendation({
    checkin: {
      sleepScore: 3, energyScore: 3, dispositionScore: 3, tirednessScore: 3,
      stressScore: 5, anxietyScore: 4, moodScore: 3, focusScore: 3,
      painScore: 1, availableMinutes: 5, riskDetected: false
    },
    candidates
  });
  assert(suggestion.engineVersion === RECOMMENDATION_ENGINE_VERSION, "versão ausente");
  assert(suggestion.factors.length > 0, "fatores ausentes");
  assert(suggestion.justification, "justificativa ausente");
  assert(suggestion.alternativeReason, "alternativa ausente");
  assert(suggestion.canIgnore, "sugestão deveria ser ignorável");

  const blocked = buildRecommendation({
    checkin: {
      sleepScore: 3, energyScore: 3, dispositionScore: 3, tirednessScore: 3,
      stressScore: 3, anxietyScore: 3, moodScore: 3, focusScore: 3,
      painScore: 5, availableMinutes: 5, riskDetected: false
    },
    candidates
  });
  assert(blocked.outcomeType === "NO_ACTIVITY" && blocked.safetyBlock && !blocked.canIgnore, "bloqueio de segurança inválido");

  const userId = "w5-gate-user";
  await prisma.user.deleteMany({ where: { id: userId } });
  try {
    await prisma.user.create({
      data: { id: userId, name: "W5 Gate", email: "w5-gate@pausa.local", passwordHash: "not-a-login", onboardingCompleted: true }
    });
    const checkin = await prisma.checkin.create({
      data: {
        id: "w5-gate-checkin",
        userId,
        focusScore: 2,
        moodScore: 3,
        stressScore: 4,
        energyScore: 2,
        sleepScore: 2,
        dispositionScore: 2,
        tirednessScore: 4,
        anxietyScore: 4,
        painScore: 1,
        availableMinutes: 5,
        aiSummary: "Gate",
        aiRecommendation: "Gate",
        dailyMissionTitle: "Gate",
        dailyMissionDescription: "Gate",
        dailyMissionSteps: "[]",
        encouragement: "Gate"
      }
    });
    const persisted = await createRecommendationForCheckin(userId, checkin.id);
    assert(persisted.factorsJson !== "[]", "decisão persistida sem fatores");
    assert(persisted.engineVersion === RECOMMENDATION_ENGINE_VERSION, "decisão persistida sem versão");
    assert(persisted.justification && persisted.alternativeReason, "decisão persistida incompleta");
    const notification = await prisma.notificationPlan.findFirst({ where: { recommendationDecisionId: persisted.id } });
    assert(notification?.frequency === "ONCE", "notificação sem frequência");
    assert(notification?.privacy === "HIDE_SENSITIVE", "privacidade padrão incorreta");
    assert(notification?.deepLink === "/app/checkin", "deep link inseguro");
  } finally {
    await prisma.user.deleteMany({ where: { id: userId } });
  }
  console.log(JSON.stringify({ ok: true, engineVersion: RECOMMENDATION_ENGINE_VERSION, suggestion: suggestion.outcomeType, blocked: blocked.outcomeType }, null, 2));
}

main()
  .finally(async () => prisma.$disconnect())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
