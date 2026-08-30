import assert from "node:assert/strict";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import {
  completedSeconds,
  createFocusTimerState,
  focusTimerReducer,
  hydrateFocusTimer
} from "../lib/focus/session-machine";
import { evaluateNotification } from "../lib/notifications/policy";
import { capabilityFor } from "../lib/platform/capabilities";
import { socialDowntimeCapability } from "../lib/social-downtime/policy";
import {
  ScheduleConflictError,
  saveAgendaEventWithReservation
} from "../lib/scheduling/reservation-service";

function checkFocusMachine() {
  const initial = createFocusTimerState(25, "00000000-0000-4000-8000-000000000001");
  const started = focusTimerReducer(initial, { type: "START", now: "2026-07-25T12:00:00.000Z" });
  const ticked = focusTimerReducer(started, { type: "TICK", now: "2026-07-25T12:00:10.000Z" });
  assert.equal(ticked.secondsLeft, 1490);
  assert.equal(completedSeconds(ticked), 10);
  const paused = focusTimerReducer(ticked, { type: "PAUSE", now: "2026-07-25T12:00:10.000Z" });
  assert.equal(paused.status, "PAUSED");
  const hydrated = hydrateFocusTimer(paused, "2026-07-25T13:00:00.000Z");
  assert.equal(hydrated?.secondsLeft, 1490, "Sessão pausada não pode perder tempo em background.");
  const resumed = focusTimerReducer(paused, { type: "RESUME", now: "2026-07-25T13:00:00.000Z" });
  assert.equal(resumed.status, "RUNNING");
  const cancelled = focusTimerReducer(resumed, { type: "CANCEL", now: "2026-07-25T13:00:01.000Z" });
  assert.equal(cancelled.status, "CANCELLED");
}

function checkNotificationPolicy() {
  const policy = {
    maxPerDay: 4,
    minimumIntervalMinutes: 120,
    quietHoursStart: "22:00",
    quietHoursEnd: "07:00",
    ignoredReductionAfter: 3,
    lockScreenPrivacy: "HIDE_SENSITIVE" as const
  };
  const quiet = evaluateNotification(policy, {
    title: "Check-in de ansiedade",
    body: "Como você está?",
    sensitive: true,
    now: new Date("2026-07-25T23:00:00"),
    sentAt: [],
    ignoredConsecutive: 0
  });
  assert.equal(quiet.allowed, false);
  assert.equal(quiet.reason, "QUIET_HOURS");
  assert.equal(quiet.title, "Pausa AI");
  const fatigue = evaluateNotification(policy, {
    title: "Uma pausa",
    body: "Faça uma pausa.",
    now: new Date("2026-07-25T12:00:00"),
    sentAt: [
      new Date("2026-07-25T08:00:00"),
      new Date("2026-07-25T09:00:00"),
      new Date("2026-07-25T10:00:00")
    ],
    ignoredConsecutive: 4
  });
  assert.equal(fatigue.allowed, false);
  assert.equal(fatigue.effectiveDailyLimit, 3);
}

function checkPlatformTruthfulness() {
  assert.equal(capabilityFor("desktop-web", "app_blocking").state, "UNSUPPORTED");
  assert.equal(socialDowntimeCapability({ requestedPlatform: "desktop-web" }).canBlockDirectly, false);
  assert.equal(socialDowntimeCapability({ requestedPlatform: "android" }).state, "PARTIAL");
}

async function checkConcurrentAgenda() {
  if (process.env.W2_DB_CHECK !== "true") return;
  const prisma = new PrismaClient();
  const email = `w2-concurrency-${Date.now()}@example.test`;
  const user = await prisma.user.create({
    data: {
      name: "Gate W2",
      email,
      passwordHash: await bcrypt.hash("W2-Gate-Password-2026!", 4),
      onboardingCompleted: true
    }
  });
  const startDateTime = new Date("2026-08-01T13:00:00.000Z");
  const endDateTime = new Date("2026-08-01T14:00:00.000Z");
  try {
    const create = (title: string) => saveAgendaEventWithReservation({
      userId: user.id,
      data: {
        title,
        description: "Teste simultâneo W2",
        startDateTime,
        endDateTime,
        allDay: false,
        timezone: "America/Sao_Paulo",
        category: "ROTINA",
        priority: "MEDIUM",
        energyLevel: "MODERATE",
        source: "W2_GATE",
        externalCalendarId: null,
        externalEventId: null,
        recurrenceRule: null,
        reminderMinutes: "[30]",
        status: "CONFIRMED"
      }
    });
    const results = await Promise.allSettled([create("Reserva A"), create("Reserva B")]);
    const fulfilled = results.filter((result) => result.status === "fulfilled");
    const rejected = results.filter((result) => result.status === "rejected");
    assert.equal(fulfilled.length, 1, JSON.stringify(results));
    assert.equal(rejected.length, 1, JSON.stringify(results));
    assert.ok(
      rejected[0].status === "rejected" && rejected[0].reason instanceof ScheduleConflictError,
      `A segunda reserva deve retornar conflito identificado: ${String(rejected[0].status === "rejected" ? rejected[0].reason : "")}`
    );
    assert.equal(await prisma.agendaEvent.count({ where: { userId: user.id } }), 1);
    assert.equal(await prisma.scheduleReservation.count({ where: { userId: user.id, status: "ACTIVE" } }), 1);
  } finally {
    await prisma.user.delete({ where: { id: user.id } }).catch(() => undefined);
    await prisma.$disconnect();
  }
}

async function main() {
  checkFocusMachine();
  checkNotificationPolicy();
  checkPlatformTruthfulness();
  await checkConcurrentAgenda();
  console.info("W2 critical stabilization checks passed.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
