import { prisma } from "@/lib/prisma";
import type { ActivityPoint } from "@prisma/client";
import {
  ACTIVITY_METRICS_VERSION,
  assessPoint,
  calculateActivityMetrics,
  isValidActivityTransition,
  type ActivityGpsPoint
} from "@/lib/activity/metrics";

export type StartActivityInput = {
  activityType: "WALK" | "RUN" | "FREE_EXERCISE" | "PAUSA_SESSION";
  clientActivityId?: string;
  perceivedEffortBefore?: number;
  responseBefore?: number;
  privacy?: "PRIVATE" | "FRIENDS" | "PUBLIC";
  hideRouteEdges?: boolean;
  startedAt?: Date;
  syncStatus?: "SYNCED" | "PENDING";
};

export async function startPausaActivity(userId: string, input: StartActivityInput) {
  if (input.clientActivityId) {
    const existing = await prisma.pausaActivity.findFirst({ where: { userId, clientActivityId: input.clientActivityId } });
    if (existing) return existing;
  }
  const activity = await prisma.pausaActivity.create({
    data: {
      userId,
      activityType: input.activityType,
      clientActivityId: input.clientActivityId,
      perceivedEffortBefore: input.perceivedEffortBefore,
      responseBefore: input.responseBefore,
      privacy: input.privacy || "PRIVATE",
      hideRouteEdges: input.hideRouteEdges ?? true,
      startedAt: input.startedAt || new Date(),
      syncStatus: input.syncStatus || "SYNCED",
      metricsVersion: ACTIVITY_METRICS_VERSION
    }
  });
  await prisma.dataVaultEvent.create({
    data: {
      userId,
      recordType: "PausaActivity",
      recordId: activity.id,
      action: "CREATED",
      sourceKind: "PAUSA_SESSION",
      quality: "MEASURED",
      metadataJson: JSON.stringify({ activityType: activity.activityType })
    }
  });
  return activity;
}

export async function appendActivityPoints(userId: string, activityId: string, incoming: ActivityGpsPoint[]) {
  const activity = await prisma.pausaActivity.findFirst({ where: { id: activityId, userId } });
  if (!activity) throw new Error("ACTIVITY_NOT_FOUND");
  const current = await prisma.activityPoint.findMany({ where: { activityId }, orderBy: { sequence: "asc" } });
  let previous = [...current].reverse().find((point) => point.accepted) || null;
  const created = [];
  for (const point of incoming.slice(0, 500)) {
    const assessment = activity.status === "ACTIVE"
      ? assessPoint(point, previous ? {
          latitude: previous.latitude,
          longitude: previous.longitude,
          capturedAt: previous.capturedAt,
          accuracyMeters: previous.accuracyMeters,
          altitudeMeters: previous.altitudeMeters
        } : null)
      : { accepted: false, rejectionReason: "ACTIVITY_NOT_ACTIVE" };
    const saved: ActivityPoint = await prisma.activityPoint.create({
      data: {
        activityId,
        capturedAt: point.capturedAt,
        latitude: point.latitude,
        longitude: point.longitude,
        accuracyMeters: point.accuracyMeters,
        altitudeMeters: point.altitudeMeters,
        sequence: current.length + created.length,
        accepted: assessment.accepted,
        rejectionReason: assessment.rejectionReason
      }
    });
    created.push(saved);
    if (saved.accepted) previous = saved;
  }
  return created;
}

export async function transitionPausaActivity(
  userId: string,
  activityId: string,
  action: "PAUSE" | "RESUME" | "FINISH" | "CANCEL",
  input?: { occurredAt?: Date; perceivedEffortAfter?: number; responseAfter?: number; notes?: string }
) {
  const activity = await prisma.pausaActivity.findFirst({ where: { id: activityId, userId } });
  if (!activity) throw new Error("ACTIVITY_NOT_FOUND");
  if (!isValidActivityTransition(activity.status, action)) throw new Error("INVALID_ACTIVITY_TRANSITION");
  const occurredAt = input?.occurredAt || new Date();
  if (action === "PAUSE") {
    return prisma.pausaActivity.update({
      where: { id: activity.id },
      data: { status: "PAUSED", pausedAt: occurredAt, pauseCount: { increment: 1 } }
    });
  }
  if (action === "RESUME") {
    const pauseSeconds = activity.pausedAt
      ? Math.max(0, Math.round((occurredAt.getTime() - activity.pausedAt.getTime()) / 1000))
      : 0;
    return prisma.pausaActivity.update({
      where: { id: activity.id },
      data: {
        status: "ACTIVE",
        pausedAt: null,
        resumedAt: occurredAt,
        pausedTimeSeconds: { increment: pauseSeconds }
      }
    });
  }
  if (action === "CANCEL") {
    return prisma.pausaActivity.update({ where: { id: activity.id }, data: { status: "CANCELLED", endedAt: occurredAt } });
  }

  const pendingPause = activity.status === "PAUSED" && activity.pausedAt
    ? Math.max(0, Math.round((occurredAt.getTime() - activity.pausedAt.getTime()) / 1000))
    : 0;
  const pausedTimeSeconds = activity.pausedTimeSeconds + pendingPause;
  const totalTimeSeconds = Math.max(0, Math.round((occurredAt.getTime() - activity.startedAt.getTime()) / 1000));
  const movingTimeSeconds = Math.max(0, totalTimeSeconds - pausedTimeSeconds);
  const points = await prisma.activityPoint.findMany({ where: { activityId, accepted: true }, orderBy: { sequence: "asc" } });
  const metrics = calculateActivityMetrics(points.map((point) => ({
    latitude: point.latitude,
    longitude: point.longitude,
    capturedAt: point.capturedAt,
    accuracyMeters: point.accuracyMeters,
    altitudeMeters: point.altitudeMeters
  })), movingTimeSeconds);
  const routePoints = points.map((point) => ({
    lat: point.latitude,
    lng: point.longitude,
    timestamp: point.capturedAt.toISOString(),
    accuracy: point.accuracyMeters,
    altitude: point.altitudeMeters
  }));
  const trim = activity.hideRouteEdges && routePoints.length >= 10 ? Math.max(1, Math.floor(routePoints.length * 0.08)) : 0;

  return prisma.$transaction(async (tx) => {
    const completed = await tx.pausaActivity.update({
      where: { id: activity.id },
      data: {
        status: "COMPLETED",
        endedAt: occurredAt,
        pausedAt: null,
        totalTimeSeconds,
        movingTimeSeconds,
        pausedTimeSeconds,
        ...metrics,
        perceivedEffortAfter: input?.perceivedEffortAfter,
        responseAfter: input?.responseAfter,
        notes: input?.notes,
        syncStatus: "SYNCED"
      }
    });
    const metricRows = [
      ["DISTANCE", metrics.distanceMeters, "m", "MEASURED"],
      ["MOVING_TIME", movingTimeSeconds, "s", "MEASURED"],
      ["TOTAL_TIME", totalTimeSeconds, "s", "MEASURED"],
      ["AVERAGE_SPEED", metrics.averageSpeedKmh, "km/h", "ESTIMATED"],
      ["ELEVATION_GAIN", metrics.elevationGainMeters, "m", "MEASURED"]
    ] as const;
    for (const [metricType, numericValue, unit, sourceKind] of metricRows) {
      await tx.activityMetric.upsert({
        where: { activityId_metricType: { activityId, metricType } },
        update: { numericValue, unit, sourceKind, engineVersion: ACTIVITY_METRICS_VERSION },
        create: { activityId, metricType, numericValue, unit, sourceKind, engineVersion: ACTIVITY_METRICS_VERSION }
      });
    }
    await tx.activityRoute.upsert({
      where: { sourceActivityId: activityId },
      update: {
        title: `${activity.activityType} • ${activity.startedAt.toLocaleDateString("pt-BR")}`,
        privacy: activity.privacy,
        hideRouteEdges: activity.hideRouteEdges,
        trimStartPoints: trim,
        trimEndPoints: trim,
        routePointsJson: JSON.stringify(routePoints)
      },
      create: {
        userId,
        sourceActivityId: activityId,
        title: `${activity.activityType} • ${activity.startedAt.toLocaleDateString("pt-BR")}`,
        privacy: activity.privacy,
        hideRouteEdges: activity.hideRouteEdges,
        trimStartPoints: trim,
        trimEndPoints: trim,
        routePointsJson: JSON.stringify(routePoints)
      }
    });
    await tx.dataVaultEvent.create({
      data: {
        userId,
        recordType: "PausaActivity",
        recordId: activityId,
        action: "COMPLETED",
        sourceKind: "PAUSA_SESSION",
        quality: points.length ? "MEASURED" : "REPORTED",
        metadataJson: JSON.stringify({ metricsVersion: ACTIVITY_METRICS_VERSION, acceptedPoints: points.length })
      }
    });
    return completed;
  });
}
