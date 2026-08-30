import { prisma } from "@/lib/prisma";
import { buildRecommendation, type RecommendationCandidate } from "@/lib/recommendations/engine";

function parseClock(value: string) {
  const [hours, minutes] = value.split(":").map(Number);
  return { hours: hours || 0, minutes: minutes || 0 };
}

function insideQuietHours(date: Date, start: string, end: string) {
  const minutes = date.getHours() * 60 + date.getMinutes();
  const startValue = parseClock(start);
  const endValue = parseClock(end);
  const startMinutes = startValue.hours * 60 + startValue.minutes;
  const endMinutes = endValue.hours * 60 + endValue.minutes;
  return startMinutes > endMinutes
    ? minutes >= startMinutes || minutes < endMinutes
    : minutes >= startMinutes && minutes < endMinutes;
}

function afterQuietHours(date: Date, end: string) {
  const next = new Date(date);
  const { hours, minutes } = parseClock(end);
  next.setHours(hours, minutes, 0, 0);
  if (next <= date) next.setDate(next.getDate() + 1);
  return next;
}

export async function createRecommendationForCheckin(userId: string, checkinId: string) {
  const [checkin, movements, recentFeedback] = await Promise.all([
    prisma.checkin.findFirst({ where: { id: checkinId, userId } }),
    prisma.contentMovement.findMany({
      where: { status: "APPROVED", approvedAt: { not: null } },
      include: { circuit: { include: { category: true } } }
    }),
    prisma.sessionFeedback.findMany({ where: { userId }, orderBy: { createdAt: "desc" }, take: 20 })
  ]);
  if (!checkin) throw new Error("Check-in não encontrado para recomendação.");

  const candidates: RecommendationCandidate[] = movements.map((movement) => ({
    sourceKey: movement.sourceKey,
    circuitSlug: movement.circuit.slug,
    modality: movement.circuit.category.modality,
    level: movement.level,
    difficulty: movement.difficulty,
    durationSeconds: movement.durationSeconds,
    title: movement.title
  }));
  const result = buildRecommendation({
    checkin,
    candidates,
    recentlyCompletedSourceKeys: recentFeedback.filter((item) => item.completed).map((item) => item.sourceId),
    recentlyAbandonedSourceKeys: recentFeedback.filter((item) => item.abandoned).map((item) => item.sourceId)
  });
  const decision = await prisma.recommendationDecision.upsert({
    where: { checkinId },
    update: {
      engineVersion: result.engineVersion,
      outcomeType: result.outcomeType,
      intensity: result.intensity,
      difficulty: result.difficulty,
      durationMinutes: result.durationMinutes,
      modality: result.modality,
      circuitSlug: result.circuitSlug,
      movementSourceKey: result.movementSourceKey,
      movementCount: result.movementCount,
      pauseSeconds: result.pauseSeconds,
      alternativeSourceKey: result.alternativeSourceKey,
      avoidedContentJson: JSON.stringify(result.avoidedContent),
      factorsJson: JSON.stringify(result.factors),
      justification: result.justification,
      alternativeReason: result.alternativeReason,
      canIgnore: result.canIgnore,
      safetyBlock: result.safetyBlock
    },
    create: {
      userId,
      checkinId,
      engineVersion: result.engineVersion,
      outcomeType: result.outcomeType,
      intensity: result.intensity,
      difficulty: result.difficulty,
      durationMinutes: result.durationMinutes,
      modality: result.modality,
      circuitSlug: result.circuitSlug,
      movementSourceKey: result.movementSourceKey,
      movementCount: result.movementCount,
      pauseSeconds: result.pauseSeconds,
      alternativeSourceKey: result.alternativeSourceKey,
      avoidedContentJson: JSON.stringify(result.avoidedContent),
      factorsJson: JSON.stringify(result.factors),
      justification: result.justification,
      alternativeReason: result.alternativeReason,
      canIgnore: result.canIgnore,
      safetyBlock: result.safetyBlock
    }
  });
  await planRecommendationNotification(userId, decision.id, checkin);
  return decision;
}

async function planRecommendationNotification(
  userId: string,
  recommendationDecisionId: string,
  checkin: { tirednessScore: number; stressScore: number; anxietyScore: number }
) {
  const policy = await prisma.notificationPolicy.upsert({
    where: { userId },
    update: {},
    create: { userId }
  });
  const dayStart = new Date();
  dayStart.setHours(0, 0, 0, 0);
  const plannedToday = await prisma.notificationPlan.count({
    where: { userId, status: "PLANNED", scheduledFor: { gte: dayStart } }
  });
  if (plannedToday >= policy.maxPerDay) return null;

  const delayHours = checkin.tirednessScore >= 4 ? 6 : checkin.stressScore >= 4 || checkin.anxietyScore >= 4 ? 3 : 4;
  let scheduledFor = new Date(Date.now() + delayHours * 60 * 60 * 1000);
  if (insideQuietHours(scheduledFor, policy.quietHoursStart, policy.quietHoursEnd)) {
    scheduledFor = afterQuietHours(scheduledFor, policy.quietHoursEnd);
  }
  return prisma.notificationPlan.upsert({
    where: { id: `recommendation-${recommendationDecisionId}` },
    update: {
      scheduledFor,
      privacy: policy.lockScreenPrivacy,
      reason: `Follow-up adaptado ao check-in; limite diário ${plannedToday + 1}/${policy.maxPerDay}.`
    },
    create: {
      id: `recommendation-${recommendationDecisionId}`,
      userId,
      recommendationDecisionId,
      subject: "Como você está depois da pausa?",
      scheduledFor,
      frequency: "ONCE",
      privacy: policy.lockScreenPrivacy,
      deepLink: "/app/checkin",
      reason: `Follow-up adaptado ao check-in; limite diário ${plannedToday + 1}/${policy.maxPerDay}.`
    }
  });
}

export async function recommendationForUser(userId: string, checkinId?: string) {
  return prisma.recommendationDecision.findFirst({
    where: { userId, ...(checkinId ? { checkinId } : {}) },
    orderBy: { createdAt: "desc" },
    include: { checkin: true, notificationPlans: true }
  });
}
