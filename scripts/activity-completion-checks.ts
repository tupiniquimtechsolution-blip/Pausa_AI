import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { completeActivity, type ActivityType } from "../lib/activity-completions";
import { prisma } from "../lib/prisma";

const email = `activity-completion-${Date.now()}@pausaai.test`;

async function focusCompletion(input: {
  userId: string;
  type: ActivityType;
  targetId: string;
  token: string;
  checkinId?: string;
  xp?: number;
}) {
  return completeActivity({
    userId: input.userId,
    activityType: input.type,
    source: "activity-completion-checks",
    targetId: input.targetId,
    checkinId: input.checkinId,
    completionToken: input.token,
    domainRecordType: "FocusSession",
    xpAwarded: input.xp ?? 3,
    createDomain: (tx) => tx.focusSession.create({
      data: { userId: input.userId, durationMinutes: 1, completedSeconds: 60, completedAt: new Date() }
    })
  });
}

async function main() {
  const user = await prisma.user.create({
    data: { name: "Activity Completion Test", email, passwordHash: "test-only" }
  });
  const checkin = await prisma.checkin.create({
    data: {
      userId: user.id,
      moodScore: 3,
      focusScore: 3,
      stressScore: 3,
      energyScore: 3,
      sleepScore: 3,
      riskDetected: false,
      aiSummary: "Teste",
      aiRecommendation: "Teste",
      dailyMissionTitle: "Teste",
      dailyMissionDescription: "Teste",
      dailyMissionSteps: "[]",
      encouragement: "Teste"
    }
  });

  const checkinFirst = await focusCompletion({
    userId: user.id,
    type: "EXERCISE",
    targetId: "same-target",
    checkinId: checkin.id,
    token: randomUUID(),
    xp: 10
  });
  const checkinRetryDifferentToken = await focusCompletion({
    userId: user.id,
    type: "EXERCISE",
    targetId: "same-target",
    checkinId: checkin.id,
    token: randomUUID(),
    xp: 10
  });
  assert.equal(checkinFirst.xpAwarded, 10);
  assert.equal(checkinRetryDifferentToken.alreadyCompleted, true);
  assert.equal(checkinRetryDifferentToken.xpAwarded, 0);
  assert.equal(checkinRetryDifferentToken.originalXpAwarded, 10);

  const retryToken = randomUUID();
  const tokenFirst = await focusCompletion({ userId: user.id, type: "YOGA", targetId: "free-session", token: retryToken });
  const tokenRetry = await focusCompletion({ userId: user.id, type: "YOGA", targetId: "free-session", token: retryToken });
  const newToken = await focusCompletion({ userId: user.id, type: "YOGA", targetId: "free-session", token: randomUUID() });
  assert.equal(tokenFirst.alreadyCompleted, false);
  assert.equal(tokenRetry.alreadyCompleted, true);
  assert.equal(newToken.alreadyCompleted, false);

  const concurrentToken = randomUUID();
  const concurrent = await Promise.all([
    focusCompletion({ userId: user.id, type: "WORKOUT", targetId: "concurrent", token: concurrentToken, xp: 7 }),
    focusCompletion({ userId: user.id, type: "WORKOUT", targetId: "concurrent", token: concurrentToken, xp: 7 })
  ]);
  assert.equal(concurrent.filter((result) => !result.alreadyCompleted).length, 1);
  assert.equal(concurrent.reduce((sum, result) => sum + result.xpAwarded, 0), 7);

  const failedToken = randomUUID();
  await assert.rejects(() => completeActivity({
    userId: user.id,
    activityType: "WALKING",
    source: "activity-completion-checks",
    targetId: "rollback",
    completionToken: failedToken,
    domainRecordType: "FocusSession",
    xpAwarded: 99,
    createDomain: async (tx) => {
      const session = await tx.focusSession.create({
        data: { userId: user.id, durationMinutes: 1, completedSeconds: 60, completedAt: new Date() }
      });
      throw Object.assign(new Error("Falha intermediaria intencional"), { session });
    }
  }));
  const failedReceipt = await prisma.activityCompletion.findFirst({
    where: { userId: user.id, completionToken: failedToken }
  });
  assert.equal(failedReceipt, null);

  const allTypes: ActivityType[] = ["CHECKIN", "MISSION", "EXERCISE", "EXERCISE_INSTRUCTION", "YOGA", "WORKOUT", "WALKING"];
  for (const type of allTypes) {
    const result = await focusCompletion({ userId: user.id, type, targetId: `coverage-${type}`, token: randomUUID(), xp: 1 });
    assert.equal(result.xpAwarded, 1, `${type} deve passar pelo ledger comum.`);
  }

  const receipts = await prisma.activityCompletion.findMany({ where: { userId: user.id } });
  assert(receipts.every((receipt) => receipt.domainRecordId), "Todo recibo confirmado precisa apontar para o registro criado.");
  console.log("Activity completion checks passaram: check-in, token, concorrencia, rollback e sete fluxos.");
}

main()
  .finally(async () => {
    await prisma.user.deleteMany({ where: { email } }).catch(() => {});
    await prisma.$disconnect();
  });
