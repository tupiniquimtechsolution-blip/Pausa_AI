import { NextResponse } from "next/server";
import { subDays } from "date-fns";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { walkingHistoryQuerySchema, walkingSessionSchema } from "@/lib/validators";
import {
  averageSpeedKmh,
  calculateRouteDistanceMeters,
  cleanRoutePoints,
  estimateWalkingCalories,
  getWalkingMode,
  maskRouteEdges,
  nextWalkingSuggestion,
  paceString,
  summarizeWalkingSessions,
  xpForWalkingSession
} from "@/lib/walking";
import { evaluateAchievements } from "@/lib/achievements";
import { completeActivity } from "@/lib/activity-completions";

export async function GET(request: Request) {
  const user = await requireUser();
  const url = new URL(request.url);
  const parsed = walkingHistoryQuerySchema.safeParse(Object.fromEntries(url.searchParams.entries()));
  if (!parsed.success) return NextResponse.json({ error: "Filtros invalidos." }, { status: 400 });

  const since =
    parsed.data.periodo === "7"
      ? subDays(new Date(), 7)
      : parsed.data.periodo === "30"
        ? subDays(new Date(), 30)
        : undefined;

  const sessions = await prisma.walkingSession.findMany({
    where: {
      userId: user.id,
      ...(since ? { startedAt: { gte: since } } : {}),
      ...(parsed.data.modo ? { walkingMode: parsed.data.modo } : {}),
      ...(parsed.data.privacidade ? { privacy: parsed.data.privacidade } : {})
    },
    orderBy: { startedAt: "desc" }
  });

  return NextResponse.json({
    sessions: sessions.map((session) => ({
      ...session,
      routePoints: maskRouteEdges(parseRoutePoints(session.routePoints), session.hideRouteEdges)
    })),
    summary: summarizeWalkingSessions(sessions)
  });
}

export async function POST(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = walkingSessionSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Dados da caminhada invalidos." }, { status: 400 });

  const routePoints = cleanRoutePoints(parsed.data.routePoints);
  const routeDistance = routePoints.length > 1 ? calculateRouteDistanceMeters(routePoints) : 0;
  const distanceMeters = parsed.data.gpsEnabled && routeDistance > 0 ? routeDistance : parsed.data.distanceMeters;
  const movingTimeSeconds = Math.min(parsed.data.movingTimeSeconds || parsed.data.durationSeconds, parsed.data.durationSeconds);
  const speed = averageSpeedKmh(distanceMeters, Math.max(1, movingTimeSeconds));
  const pace = paceString(Math.max(1, movingTimeSeconds), distanceMeters);
  const mode = getWalkingMode(parsed.data.walkingMode);
  const calories = estimateWalkingCalories({ durationSeconds: movingTimeSeconds, speedKmh: speed, intensity: mode.intensity });
  const xpAwarded = xpForWalkingSession({ durationSeconds: parsed.data.durationSeconds, distanceMeters, completed: parsed.data.completed });

  const result = await completeActivity({
    userId: user.id,
    activityType: "WALKING",
    source: "/api/walking/sessions",
    targetId: parsed.data.walkingMode,
    completionToken: parsed.data.completionToken,
    domainRecordType: "WalkingSession",
    xpAwarded,
    createDomain: (tx) => tx.walkingSession.create({
      data: {
        userId: user.id,
        walkingMode: parsed.data.walkingMode,
        goal: parsed.data.goal,
        startedAt: parsed.data.startedAt,
        endedAt: parsed.data.endedAt,
        durationSeconds: parsed.data.durationSeconds,
        movingTimeSeconds,
        distanceMeters,
        averagePace: pace,
        averageSpeedKmh: speed,
        caloriesEstimated: calories,
        gpsEnabled: parsed.data.gpsEnabled,
        timerOnly: parsed.data.timerOnly || !parsed.data.gpsEnabled,
        routePoints: JSON.stringify(routePoints),
        privacy: parsed.data.privacy,
        hideRouteEdges: parsed.data.hideRouteEdges,
        moodBefore: parsed.data.moodBefore || null,
        moodAfter: parsed.data.moodAfter || null,
        stressBefore: parsed.data.stressBefore || null,
        stressAfter: parsed.data.stressAfter || null,
        anxietyBefore: parsed.data.anxietyBefore || null,
        anxietyAfter: parsed.data.anxietyAfter || null,
        notes: parsed.data.notes,
        completed: parsed.data.completed,
        xpAwarded
      }
    })
  });

  const session = result.domain || (result.sessionId
    ? await prisma.walkingSession.findUnique({ where: { id: result.sessionId } })
    : null);
  if (!session) throw new Error("Sessao de caminhada nao encontrada apos a conclusao.");
  const newlyUnlocked = !result.alreadyCompleted && result.xpAwarded > 0 ? await evaluateAchievements(user.id) : [];
  const nextSuggestion = nextWalkingSuggestion(session);

  return NextResponse.json({
    ok: true,
    alreadyCompleted: result.alreadyCompleted,
    sessionId: result.sessionId,
    xpAwarded: result.xpAwarded,
    originalXpAwarded: result.originalXpAwarded,
    level: result.level,
    newlyUnlocked,
    nextSuggestion,
    message: result.alreadyCompleted
      ? "Caminhada ja registrada; nenhum XP adicional foi concedido."
      : `Voce se movimentou hoje. Isso ja conta. +${result.xpAwarded} XP.`,
    session: {
      ...session,
      routePoints: maskRouteEdges(routePoints, session.hideRouteEdges)
    }
  });
}

function parseRoutePoints(value: string) {
  try {
    const parsed = JSON.parse(value || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
