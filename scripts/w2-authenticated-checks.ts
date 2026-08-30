import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { PrismaClient } from "@prisma/client";

const baseUrl = process.env.TEST_BASE_URL || "http://127.0.0.1:3102";
const masterPassword = process.env.MASTER_SEED_PASSWORD || "W1-Gate-Only-Password-2026!";

function cookieFrom(response: Response) {
  const value = response.headers.get("set-cookie");
  assert.ok(value);
  return value.split(";")[0];
}

async function request(path: string, init: RequestInit = {}, cookie?: string) {
  const response = await fetch(`${baseUrl}${path}`, {
    ...init,
    redirect: "manual",
    headers: {
      "Content-Type": "application/json",
      "x-correlation-id": `w2-gate-${randomUUID()}`,
      ...(cookie ? { Cookie: cookie } : {}),
      ...(init.headers || {})
    }
  });
  return { response, body: await response.json().catch(() => null) };
}

async function main() {
  const prisma = new PrismaClient();
  const marker = `W2_GATE_${Date.now()}`;
  const focusTokens = [randomUUID(), randomUUID(), randomUUID()];
  try {
    const staleGateEvents = await prisma.agendaEvent.findMany({
      where: { source: "W2_GATE" },
      select: { id: true }
    });
    await prisma.$transaction([
      prisma.scheduleReservation.deleteMany({
        where: {
          entityType: "AGENDA_EVENT",
          OR: [
            { entityId: { in: staleGateEvents.map((event) => event.id) } },
            { title: { startsWith: "W2_GATE_" } }
          ]
        }
      }),
      prisma.agendaEvent.deleteMany({ where: { source: "W2_GATE" } })
    ]);
    const login = await request("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email: "rmedrado15@gmail.com", password: masterPassword })
    });
    assert.equal(login.response.status, 200);
    const cookie = cookieFrom(login.response);

    const gateStart = new Date(Date.UTC(2099, 0, 1) + (Date.now() % (365 * 24 * 60 * 60 * 1000)));
    const gateEnd = new Date(gateStart.getTime() + 60 * 60 * 1000);
    const eventBody = {
      description: marker,
      startDateTime: gateStart.toISOString(),
      endDateTime: gateEnd.toISOString(),
      category: "ROTINA",
      priority: "MEDIUM",
      source: "W2_GATE",
      reminderMinutes: [30]
    };
    const simultaneous = await Promise.all([
      request("/api/agenda/events", {
        method: "POST",
        body: JSON.stringify({ ...eventBody, title: `${marker} A` })
      }, cookie),
      request("/api/agenda/events", {
        method: "POST",
        body: JSON.stringify({ ...eventBody, title: `${marker} B` })
      }, cookie)
    ]);
    const statuses = simultaneous.map((item) => item.response.status).sort();
    assert.deepEqual(statuses, [200, 409]);
    const conflict = simultaneous.find((item) => item.response.status === 409);
    assert.equal(conflict?.body.code, "SCHEDULE_CONFLICT");
    assert.ok(conflict?.body.conflict.title.includes(marker));

    const focusPayload = (completionToken: string, action: string, completedSeconds = 0) => ({
      completionToken,
      durationMinutes: 25,
      completedSeconds,
      suggestedExerciseSlug: "pausa-sem-tela",
      action
    });
    assert.equal((await request("/api/focus/sessions", {
      method: "POST",
      body: JSON.stringify(focusPayload(focusTokens[0], "START"))
    }, cookie)).response.status, 200);
    assert.equal((await request("/api/focus/sessions", {
      method: "POST",
      body: JSON.stringify(focusPayload(focusTokens[0], "PAUSE", 10))
    }, cookie)).response.status, 200);
    assert.equal((await request("/api/focus/sessions", {
      method: "POST",
      body: JSON.stringify(focusPayload(focusTokens[0], "RESUME", 10))
    }, cookie)).response.status, 200);
    assert.equal((await request("/api/focus/sessions", {
      method: "POST",
      body: JSON.stringify(focusPayload(focusTokens[1], "START"))
    }, cookie)).response.status, 409);
    assert.equal((await request("/api/focus/sessions", {
      method: "POST",
      body: JSON.stringify(focusPayload(focusTokens[0], "CANCEL", 12))
    }, cookie)).response.status, 200);
    assert.equal((await request("/api/focus/sessions", {
      method: "POST",
      body: JSON.stringify(focusPayload(focusTokens[1], "START"))
    }, cookie)).response.status, 200);

    const notificationPolicy = await request("/api/notifications/policy", {
      method: "PATCH",
      body: JSON.stringify({
        maxPerDay: 3,
        minimumIntervalMinutes: 180,
        quietHoursStart: "22:30",
        quietHoursEnd: "07:00",
        ignoredReductionAfter: 2,
        lockScreenPrivacy: "HIDE_SENSITIVE"
      })
    }, cookie);
    assert.equal(notificationPolicy.response.status, 200);
    assert.equal(notificationPolicy.body.policy.maxPerDay, 3);

    const downtime = await request("/api/routine/social-downtime", {
      method: "POST",
      headers: { "x-pausa-platform": "desktop-web" },
      body: JSON.stringify({
        enabled: true,
        startTime: "21:30",
        endTime: "07:00",
        apps: ["Instagram", "YouTube"],
        days: "1,2,3,4,5",
        objective: "PREPARE_SLEEP",
        categories: ["SOCIAL", "VIDEO"],
        exceptions: ["Contatos de emergência"],
        note: "Gate W2"
      })
    }, cookie);
    assert.equal(downtime.response.status, 200);
    assert.equal(downtime.body.capability.state, "UNSUPPORTED");
    assert.equal(downtime.body.capability.canBlockDirectly, false);

    console.info(JSON.stringify({
      event: "w2_authenticated_gate_passed",
      concurrentSchedule: true,
      focusLifecycle: true,
      duplicateFocusBlocked: true,
      notificationFatiguePolicy: true,
      socialDowntimeCapability: true
    }));
  } finally {
    await prisma.$transaction([
      prisma.scheduleReservation.deleteMany({
        where: { entityType: "AGENDA_EVENT", title: { startsWith: marker } }
      }),
      prisma.agendaEvent.deleteMany({ where: { description: marker } })
    ]).catch(() => undefined);
    await prisma.focusSession.deleteMany({ where: { completionToken: { in: focusTokens } } }).catch(() => undefined);
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
