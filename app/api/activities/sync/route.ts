import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/auth";
import { appendActivityPoints, startPausaActivity, transitionPausaActivity } from "@/lib/activity/service";

const offlineActivitySchema = z.object({
  clientActivityId: z.string().min(8).max(160),
  activityType: z.enum(["WALK", "RUN", "FREE_EXERCISE", "PAUSA_SESSION"]),
  startedAt: z.coerce.date(),
  endedAt: z.coerce.date(),
  privacy: z.enum(["PRIVATE", "FRIENDS", "PUBLIC"]).default("PRIVATE"),
  hideRouteEdges: z.boolean().default(true),
  perceivedEffortBefore: z.number().int().min(1).max(5).optional(),
  perceivedEffortAfter: z.number().int().min(1).max(5).optional(),
  responseBefore: z.number().int().min(1).max(5).optional(),
  responseAfter: z.number().int().min(1).max(5).optional(),
  points: z.array(z.object({
    latitude: z.number(),
    longitude: z.number(),
    capturedAt: z.coerce.date(),
    accuracyMeters: z.number().optional().nullable(),
    altitudeMeters: z.number().optional().nullable()
  })).max(5000).default([])
});

export async function POST(request: Request) {
  const user = await requireUser();
  const parsed = z.object({ activities: z.array(offlineActivitySchema).min(1).max(20) }).safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Lote offline inválido." }, { status: 400 });
  const synced = [];
  for (const item of parsed.data.activities) {
    const activity = await startPausaActivity(user.id, { ...item, syncStatus: "PENDING" });
    if (activity.status !== "COMPLETED") {
      await appendActivityPoints(user.id, activity.id, item.points);
      await transitionPausaActivity(user.id, activity.id, "FINISH", {
        occurredAt: item.endedAt,
        perceivedEffortAfter: item.perceivedEffortAfter,
        responseAfter: item.responseAfter
      });
    }
    synced.push(activity.id);
  }
  return NextResponse.json({ ok: true, synced, idempotentByClientActivityId: true });
}
