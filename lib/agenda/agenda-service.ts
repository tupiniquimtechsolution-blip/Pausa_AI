import { prisma } from "@/lib/prisma";
import { addMinutes } from "@/lib/agenda/date-utils";
import type { AgendaInterval } from "@/lib/agenda/conflict-detection-service";

export type UnifiedAgendaItem = AgendaInterval & {
  type: "event" | "task" | "reminder" | "habit" | "routine_reminder" | "routine_task" | "social_downtime";
  status?: string;
  description?: string | null;
};

export async function getAgendaSnapshot(userId: string, from: Date, to: Date) {
  const [events, tasks, reminders, habits, routineReminders, routineTasks, socialDowntime] = await Promise.all([
    prisma.agendaEvent.findMany({
      where: { userId, deletedAt: null, startDateTime: { lte: to }, endDateTime: { gte: from } },
      orderBy: { startDateTime: "asc" }
    }),
    prisma.agendaTask.findMany({
      where: { userId, dueDate: { gte: from, lte: to } },
      orderBy: [{ status: "asc" }, { dueDate: "asc" }]
    }),
    prisma.agendaReminder.findMany({
      where: { userId, dateTime: { gte: from, lte: to }, status: { not: "CANCELLED" } },
      orderBy: { dateTime: "asc" }
    }),
    prisma.agendaHabit.findMany({
      where: { userId, status: "ACTIVE" },
      orderBy: { title: "asc" }
    }),
    prisma.routineReminder.findMany({
      where: { userId, enabled: true },
      orderBy: { time: "asc" }
    }),
    prisma.routineTask.findMany({
      where: { userId, OR: [{ dueAt: { gte: from, lte: to } }, { dueDate: { gte: from, lte: to } }] },
      orderBy: [{ completedAt: "asc" }, { dueAt: "asc" }]
    }),
    prisma.socialDowntime.findUnique({ where: { userId } })
  ]);

  const items: UnifiedAgendaItem[] = [
    ...events.map((item) => ({
      id: item.id,
      type: "event" as const,
      title: item.title,
      description: item.description,
      startDateTime: item.startDateTime,
      endDateTime: item.endDateTime,
      category: item.category,
      priority: item.priority,
      source: item.source,
      status: item.status
    })),
    ...tasks.flatMap((item) => item.dueDate ? [{
      id: item.id,
      type: "task" as const,
      title: item.title,
      description: item.description,
      startDateTime: item.dueDate,
      endDateTime: addMinutes(item.dueDate, item.estimatedDuration || 30),
      category: item.category,
      priority: item.priority,
      source: "AGENDA_TASK",
      status: item.status
    }] : []),
    ...reminders.map((item) => ({
      id: item.id,
      type: "reminder" as const,
      title: item.title,
      description: item.message,
      startDateTime: item.dateTime,
      endDateTime: addMinutes(item.dateTime, 10),
      category: "LEMBRETE",
      priority: item.priority,
      source: "AGENDA_REMINDER",
      status: item.status
    })),
    ...routineReminders.flatMap((item) => expandRoutineReminder(item, from, to)),
    ...routineTasks.flatMap((item) => {
      const start = item.dueAt || item.dueDate;
      if (!start) return [];
      return [{
        id: item.id,
        type: "routine_task" as const,
        title: item.title,
        description: item.notes,
        startDateTime: start,
        endDateTime: addMinutes(start, 30),
        category: item.category,
        priority: item.priority,
        source: "ROUTINE_TASK",
        status: item.status
      }];
    }),
    ...(socialDowntime?.enabled ? expandSocialDowntime(socialDowntime, from, to) : [])
  ].sort((a, b) => new Date(a.startDateTime).getTime() - new Date(b.startDateTime).getTime());

  return { events, tasks, reminders, habits, items };
}

function expandRoutineReminder(item: {
  id: string;
  title: string;
  note: string | null;
  description: string | null;
  category: string;
  time: string;
  days: string;
  status: string;
}, from: Date, to: Date): UnifiedAgendaItem[] {
  return datesInRange(from, to).filter((date) => item.days.split(",").includes(String(date.getDay()))).map((date) => {
    const start = applyTime(date, item.time);
    return {
      id: `${item.id}-${date.toISOString().slice(0, 10)}`,
      type: "routine_reminder",
      title: item.title,
      description: item.note || item.description,
      startDateTime: start,
      endDateTime: addMinutes(start, 10),
      category: item.category,
      priority: "MEDIUM",
      source: "ROUTINE_REMINDER",
      status: item.status
    };
  });
}

function expandSocialDowntime(item: {
  id: string;
  startTime: string;
  endTime: string;
  apps: string;
  days: string;
  note: string | null;
}, from: Date, to: Date): UnifiedAgendaItem[] {
  return datesInRange(from, to).filter((date) => item.days.split(",").includes(String(date.getDay()))).map((date) => {
    const start = applyTime(date, item.startTime);
    const end = applyTime(date, item.endTime);
    if (end <= start) end.setDate(end.getDate() + 1);
    return {
      id: `${item.id}-${date.toISOString().slice(0, 10)}`,
      type: "social_downtime",
      title: "Modo sem redes",
      description: item.note || `Reduzir ${item.apps}.`,
      startDateTime: start,
      endDateTime: end,
      category: "MODO_SEM_REDES",
      priority: "MEDIUM",
      source: "SOCIAL_DOWNTIME",
      status: "ACTIVE"
    };
  });
}

function datesInRange(from: Date, to: Date) {
  const dates: Date[] = [];
  const cursor = new Date(from);
  cursor.setHours(0, 0, 0, 0);
  while (cursor <= to && dates.length < 45) {
    dates.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
  return dates;
}

function applyTime(date: Date, time: string) {
  const [hour, minute] = time.split(":").map(Number);
  const result = new Date(date);
  result.setHours(Number.isFinite(hour) ? hour : 9, Number.isFinite(minute) ? minute : 0, 0, 0);
  return result;
}
