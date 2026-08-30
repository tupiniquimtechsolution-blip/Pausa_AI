import { PrismaClient } from "@prisma/client";
import { DATA_SOURCE_KINDS, ACTIVITY_METRICS_VERSION, assessPoint, calculateActivityMetrics } from "../lib/activity/metrics";
import { appendActivityPoints, startPausaActivity, transitionPausaActivity } from "../lib/activity/service";

const prisma = new PrismaClient();

function assert(value: unknown, message: string): asserts value {
  if (!value) throw new Error(`W6 gate: ${message}`);
}

async function main() {
  assert(DATA_SOURCE_KINDS.join(",") === "MANUAL,PHONE_SENSOR,PAUSA_SESSION,BLUETOOTH_DEVICE,IMPORTED_FILE,EXTERNAL_CONNECTOR,ESTIMATED", "enum de fontes incompleto");
  const start = new Date("2026-07-26T10:00:00.000Z");
  const good = { latitude: -23.5505, longitude: -46.6333, capturedAt: start, accuracyMeters: 8, altitudeMeters: 760 };
  const next = { latitude: -23.55, longitude: -46.6333, capturedAt: new Date(start.getTime() + 10_000), accuracyMeters: 8, altitudeMeters: 762 };
  const bad = { ...next, capturedAt: new Date(start.getTime() + 20_000), accuracyMeters: 180 };
  assert(assessPoint(good).accepted, "primeiro ponto válido rejeitado");
  assert(assessPoint(next, good).accepted, "ponto válido rejeitado");
  assert(!assessPoint(bad, next).accepted, "ponto de baixa precisão aceito");
  const pureMetrics = calculateActivityMetrics([good, next], 20);
  assert(pureMetrics.distanceMeters > 0 && pureMetrics.averageSpeedKmh > 0, "motor próprio não calculou métricas");

  const userId = "w6-gate-user";
  await prisma.user.deleteMany({ where: { id: userId } });
  try {
    await prisma.user.create({ data: { id: userId, name: "W6 Gate", email: "w6-gate@pausa.local", passwordHash: "not-a-login", onboardingCompleted: true } });
    const activity = await startPausaActivity(userId, {
      activityType: "WALK",
      clientActivityId: "w6-gate-client-activity",
      startedAt: start,
      privacy: "PRIVATE",
      hideRouteEdges: true
    });
    const duplicate = await startPausaActivity(userId, {
      activityType: "WALK",
      clientActivityId: "w6-gate-client-activity",
      startedAt: start
    });
    assert(duplicate.id === activity.id, "sync offline não idempotente");
    const points = await appendActivityPoints(userId, activity.id, [good, next, bad]);
    assert(points.filter((point) => point.accepted).length === 2, "filtro GPS persistido inválido");
    await transitionPausaActivity(userId, activity.id, "PAUSE", { occurredAt: new Date(start.getTime() + 30_000) });
    await transitionPausaActivity(userId, activity.id, "RESUME", { occurredAt: new Date(start.getTime() + 40_000) });
    const completed = await transitionPausaActivity(userId, activity.id, "FINISH", {
      occurredAt: new Date(start.getTime() + 60_000),
      perceivedEffortAfter: 2,
      responseAfter: 4
    });
    assert(completed.status === "COMPLETED", "atividade não concluída");
    assert(completed.totalTimeSeconds === 60 && completed.movingTimeSeconds === 50, "tempos total/movimento incorretos");
    assert(completed.distanceMeters > 0 && completed.metricsVersion === ACTIVITY_METRICS_VERSION, "métricas persistidas inválidas");
    const [metrics, route, events] = await Promise.all([
      prisma.activityMetric.findMany({ where: { activityId: activity.id } }),
      prisma.activityRoute.findUnique({ where: { sourceActivityId: activity.id } }),
      prisma.dataVaultEvent.findMany({ where: { userId, recordId: activity.id } })
    ]);
    assert(metrics.length === 5, "métricas medidas/estimadas incompletas");
    assert(metrics.every((metric) => ["MEASURED", "ESTIMATED"].includes(metric.sourceKind)), "origem da métrica ausente");
    assert(route?.privacy === "PRIVATE" && route.hideRouteEdges && !route.shareAllowed, "privacidade de rota insegura");
    assert(events.some((event) => event.action === "CREATED") && events.some((event) => event.action === "COMPLETED"), "auditoria do cofre incompleta");
  } finally {
    await prisma.user.deleteMany({ where: { id: userId } });
  }
  console.log(JSON.stringify({ ok: true, metricsVersion: ACTIVITY_METRICS_VERSION, coreWithoutConnector: true, dataSources: DATA_SOURCE_KINDS.length }, null, 2));
}

main()
  .finally(async () => prisma.$disconnect())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
