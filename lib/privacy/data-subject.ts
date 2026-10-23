import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { correlationIdFrom } from "@/lib/observability";

const SUBJECT_TABLES = {
  accessAndPermissions: ["UserRole", "PlatformPermissionRecord", "AuditLog"],
  profileAndWellbeing: ["Profile", "Checkin", "HealthMetricSnapshot", "HealthProfileEntry", "DataConsent"],
  progressAndSessions: [
    "MissionCompletion",
    "WorkoutSession",
    "ExerciseProgress",
    "ExerciseSession",
    "ExerciseInstructionSession",
    "YogaPracticeSession",
    "UserAchievement",
    "FocusSession",
    "WeeklyPlan",
    "ActivityCompletion",
    "RecommendationDecision",
    "SessionFeedback"
  ],
  routineAndAgenda: [
    "RoutineReminder",
    "RoutineTask",
    "SocialDowntime",
    "AgendaEvent",
    "AgendaTask",
    "AgendaReminder",
    "AgendaHabit",
    "CalendarConnection",
    "SyncQueue",
    "InboxItem",
    "ScheduleMutex",
    "ScheduleReservation",
    "NotificationPolicy",
    "NotificationPlan"
  ],
  activitiesAndLocation: [
    "WalkingSession",
    "WalkingGoal",
    "WalkingFavoriteRoute",
    "PausaActivity",
    "ActivityRoute"
  ],
  vaultAndDevices: ["ConnectedDevice", "DataVaultEvent"],
  sharingAndPartners: ["ShareCard", "PartnerInterest"]
} as const;

function quoteIdentifier(value: string) {
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(value)) throw new Error("Unsafe table identifier.");
  return `"${value}"`;
}

async function rowsForUser(table: string, userId: string) {
  const column = table === "AuditLog" ? "actorId" : "userId";
  // Identifiers come only from SUBJECT_TABLES; Prisma binds the subject value
  // using the active provider's placeholder format (SQLite or PostgreSQL).
  const rows = await prisma.$queryRaw<Record<string, unknown>[]>(Prisma.sql`
    SELECT * FROM ${Prisma.raw(quoteIdentifier(table))}
    WHERE ${Prisma.raw(quoteIdentifier(column))} = ${userId}
    ORDER BY ${Prisma.raw(quoteIdentifier(table === "ScheduleMutex" ? "bucketKey" : "id"))}
  `);
  // Connection credentials are internal authentication material, not portable
  // profile data, even when encrypted at rest.
  return rows.map(row => Object.fromEntries(Object.entries(row)
    .filter(([key]) => !/(password|token|secret)/i.test(key))));
}

export async function exportDataSubject(userId: string, correlationId = correlationIdFrom()) {
  const identity = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      plan: true,
      companyId: true,
      department: true,
      companyRole: true,
      level: true,
      xp: true,
      lastLevelUpAt: true,
      onboardingCompleted: true,
      createdAt: true,
      updatedAt: true
    }
  });
  if (!identity) throw new Error("DATA_SUBJECT_NOT_FOUND");

  const categories: Record<string, Record<string, Record<string, unknown>[]>> = {};
  for (const [category, tables] of Object.entries(SUBJECT_TABLES)) {
    const entries = await Promise.all(tables.map(async (table) => [table, await rowsForUser(table, userId)] as const));
    categories[category] = Object.fromEntries(entries);
  }

  await prisma.auditLog.create({
    data: {
      actorId: userId,
      action: "privacy.data_exported",
      targetType: "DataSubject",
      targetId: userId,
      correlationId,
      metadataJson: JSON.stringify({ categories: Object.keys(categories), format: "JSON" })
    }
  });

  return {
    schemaVersion: "pausa-data-export-2026.07.25-v1",
    generatedAt: new Date().toISOString(),
    purpose: "Portabilidade e acesso aos dados do titular",
    identity,
    categories
  };
}

export async function deleteDataSubject(
  userId: string,
  input: { reason?: string; correlationId?: string } = {}
) {
  const correlationId = input.correlationId || correlationIdFrom();
  await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    const user = await tx.user.findUnique({ where: { id: userId }, select: { id: true } });
    if (!user) throw new Error("DATA_SUBJECT_NOT_FOUND");
    await tx.auditLog.updateMany({
      where: { OR: [{ actorId: userId }, { targetId: userId }] },
      data: { targetId: null, metadataJson: "{}" }
    });
    await tx.auditLog.create({
      data: {
        actorId: userId,
        action: "privacy.account_deleted",
        targetType: "DataSubject",
        targetId: null,
        correlationId,
        metadataJson: JSON.stringify({ reason: input.reason?.slice(0, 300) || "USER_REQUEST" })
      }
    });
    await tx.outboxEvent.deleteMany({
      where: { aggregateType: "User", aggregateId: userId }
    });
    await tx.user.delete({ where: { id: userId } });
  });
  return { deleted: true as const, correlationId };
}
