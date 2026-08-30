import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { Card } from "@/components/ui";
import { RoutinePlanner } from "@/components/routine-planner";
import { FocusTimer } from "@/components/focus-timer";
import { WeeklyPlanGenerator } from "@/components/weekly-plan-generator";

export default async function RoutinePage() {
  const user = await requireUser();
  if (!user.onboardingCompleted) redirect("/app/onboarding");

  const dbUser = await prisma.user.findUnique({
    where: { id: user.id },
    include: {
      profile: true,
      routineReminders: { orderBy: [{ enabled: "desc" }, { time: "asc" }] },
      routineTasks: { orderBy: [{ completedAt: "asc" }, { createdAt: "desc" }], take: 20 },
      socialDowntime: true
    }
  });

  const profile = {
    sleepAlarm: dbUser?.profile?.sleepAlarm || "22:30",
    wakeAlarm: dbUser?.profile?.wakeAlarm || "07:00",
    preferredTime: dbUser?.profile?.preferredTime || "Manha"
  };

  const reminders = (dbUser?.routineReminders || []).map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    category: item.category,
    time: item.time,
    enabled: item.enabled,
    note: item.note,
    reminderType: item.reminderType,
    repeatRule: item.repeatRule,
    snoozeEnabled: item.snoozeEnabled,
    snoozeMinutesOptions: item.snoozeMinutesOptions,
    status: item.status,
    nativeNotificationId: item.nativeNotificationId
  }));

  const tasks = (dbUser?.routineTasks || []).map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    notes: item.notes,
    dueDate: item.dueDate ? item.dueDate.toISOString().slice(0, 10) : null,
    dueTime: item.dueTime,
    dueAt: item.dueAt ? item.dueAt.toISOString() : null,
    calendarEventId: item.calendarEventId,
    notificationId: item.notificationId,
    status: item.status,
    priority: item.priority,
    completed: Boolean(item.completedAt)
  }));

  const downtime = dbUser?.socialDowntime ? {
    enabled: dbUser.socialDowntime.enabled,
    startTime: dbUser.socialDowntime.startTime,
    endTime: dbUser.socialDowntime.endTime,
    apps: dbUser.socialDowntime.apps.split(",").map((item) => item.trim()).filter(Boolean),
    note: dbUser.socialDowntime.note
  } : null;

  return (
    <div className="grid gap-6">
      <Card className="overflow-hidden border-blue-950 bg-navy text-white dark:border-slate-700 dark:bg-slate-950">
        <span className="inline-flex rounded-full bg-mint px-3 py-1 text-xs font-bold text-emerald-950">Rotina e alarmes</span>
        <h1 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl">Organize sono, pausas, tarefas e telas no seu ritmo</h1>
        <p className="mt-4 max-w-3xl text-sm font-semibold text-slate-200 md:text-base">
          Configure lembretes para dormir, acordar, fazer check-in e cuidar da atencao. O Pausa AI ajuda a preparar o momento; bloqueios de redes sociais dependem dos recursos nativos do celular.
        </p>
      </Card>

      <FocusTimer suggestedExerciseSlug="pausa-sem-tela" />

      <WeeklyPlanGenerator />

      <RoutinePlanner profile={profile} reminders={reminders} tasks={tasks} downtime={downtime} />
    </div>
  );
}
