import { format, startOfDay, subDays } from "date-fns";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, Flame, Trophy } from "lucide-react";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Badge, Card, EmptyState } from "@/components/ui";
import { WalkingProgressChart } from "@/components/charts";
import { WalkingDeleteButton, WalkingGoalForm } from "@/components/walking-actions";
import { formatDistance, formatDuration, formatSpeed, getWalkingMode, summarizeWalkingSessions } from "@/lib/walking";

export default async function WalkingHistoryPage() {
  const user = await requireUser();
  if (!user.onboardingCompleted) redirect("/app/onboarding");

  const [sessions, goals, achievements] = await Promise.all([
    prisma.walkingSession.findMany({ where: { userId: user.id, completed: true }, orderBy: { startedAt: "desc" }, take: 180 }),
    prisma.walkingGoal.findMany({ where: { userId: user.id }, orderBy: { period: "asc" } }),
    prisma.userAchievement.findMany({
      where: { userId: user.id, achievement: { triggerType: { startsWith: "WALKING" } } },
      include: { achievement: true },
      orderBy: { unlockedAt: "desc" }
    })
  ]);
  const summary = summarizeWalkingSessions(sessions);
  const chartData = walkingChartData(sessions);
  const weeklyGoal = goals.find((goal) => goal.period === "weekly");
  const monthlyGoal = goals.find((goal) => goal.period === "monthly");

  return (
    <div className="grid gap-6">
      <Link href="/app/corpo/caminhada" className="inline-flex items-center gap-2 text-sm font-bold text-navy">
        <ArrowLeft className="h-4 w-4" /> Voltar para Caminhada
      </Link>
      <div>
        <Badge tone="mint">Historico e progresso</Badge>
        <h1 className="mt-3 text-3xl font-black text-navy">Sua evolucao, sem comparacao</h1>
        <p className="mt-2 text-text">Acompanhe frequencia, tempo e distancia com metas acolhedoras.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <p className="text-sm font-bold text-slate-500">Streak ativo</p>
          <h2 className="mt-2 text-2xl font-black text-navy">{summary.streak} dia{summary.streak === 1 ? "" : "s"}</h2>
        </Card>
        <Card>
          <p className="text-sm font-bold text-slate-500">30 dias</p>
          <h2 className="mt-2 text-2xl font-black text-navy">{formatDistance(summary.monthly.distanceMeters)}</h2>
          <p className="mt-1 text-sm text-text">{summary.monthly.sessions} sessoes</p>
        </Card>
        <Card>
          <p className="text-sm font-bold text-slate-500">Tempo acumulado</p>
          <h2 className="mt-2 text-2xl font-black text-navy">{formatDuration(summary.monthly.durationSeconds)}</h2>
        </Card>
        <Card>
          <p className="text-sm font-bold text-slate-500">Conquistas</p>
          <h2 className="mt-2 text-2xl font-black text-navy">{achievements.length}</h2>
        </Card>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_360px]">
        <WalkingProgressChart data={chartData} />
        <Card>
          <h2 className="text-xl font-black text-navy">Calendario visual</h2>
          <div className="mt-4 grid grid-cols-7 gap-2">
            {heatmapDays(sessions).map((day) => (
              <div
                key={day.iso}
                title={`${day.label}: ${day.count} caminhada${day.count === 1 ? "" : "s"}`}
                className={`aspect-square rounded-xl border text-center text-[10px] font-black ${day.count ? "border-positive bg-navy text-white" : "border-line bg-ice text-slate-500"}`}
                style={day.count ? { backgroundColor: "#172554", color: "#fff" } : undefined}
              >
                <span className="grid h-full place-items-center">{day.day}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <section id="metas" className="grid gap-5 lg:grid-cols-2">
        <Card>
          <h2 className="text-xl font-black text-navy">Metas</h2>
          <p className="mt-2 text-sm text-text">Use metas como orientacao, nao como cobranca. Ajuste sempre que precisar.</p>
          <div className="mt-4 grid gap-3">
            <WalkingGoalForm period="weekly" targetDistanceMeters={weeklyGoal?.targetDistanceMeters} targetDurationSeconds={weeklyGoal?.targetDurationSeconds} targetSessions={weeklyGoal?.targetSessions} />
            <WalkingGoalForm period="monthly" targetDistanceMeters={monthlyGoal?.targetDistanceMeters} targetDurationSeconds={monthlyGoal?.targetDurationSeconds} targetSessions={monthlyGoal?.targetSessions} />
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-black text-navy">Recordes pessoais</h2>
          <div className="mt-4 grid gap-3">
            {summary.records.length ? summary.records.map((record) => (
              <div key={record.mode} className="rounded-2xl bg-ice p-3 dark:bg-slate-950">
                <p className="font-black text-navy">{getWalkingMode(record.mode).title}</p>
                <p className="text-sm font-semibold text-text">{formatDistance(record.distanceMeters)}</p>
              </div>
            )) : <p className="text-sm text-text">Seus recordes aparecem depois das primeiras caminhadas.</p>}
          </div>
        </Card>
      </section>

      <Card>
        <h2 className="text-xl font-black text-navy">Conquistas de caminhada</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {achievements.length ? achievements.map((item) => (
            <div key={item.id} className="rounded-2xl bg-mint/30 p-4">
              <Trophy className="h-5 w-5 text-positive" />
              <p className="mt-2 font-black text-navy">{item.achievement.title}</p>
              <p className="mt-1 text-sm text-text">{item.achievement.description}</p>
            </div>
          )) : (
            <p className="text-sm text-text">As conquistas aparecem conforme voce salva caminhadas. Cada passo e progresso.</p>
          )}
        </div>
      </Card>

      <div className="grid gap-4">
        <h2 className="text-2xl font-black text-navy">Caminhadas registradas</h2>
        {!sessions.length && <EmptyState title="Sua primeira caminhada ainda vem ai." description="Inicie pelo modo livre ou pela recomendacao do check-in." actionHref="/app/corpo/caminhada" actionLabel="Abrir Caminhada" />}
        {sessions.map((session) => {
          const mode = getWalkingMode(session.walkingMode);
          return (
            <Card key={session.id}>
              <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <Badge tone="mint">{mode.title}</Badge>
                    {session.walkingMode === "stress_relief" && <Badge tone="lavender">Antiestresse</Badge>}
                    {session.walkingMode === "chair" && <Badge tone="amber">Adaptada</Badge>}
                  </div>
                  <h3 className="mt-3 text-xl font-black text-navy">{format(session.startedAt, "dd/MM/yyyy HH:mm")}</h3>
                  <p className="mt-2 text-sm text-text">{formatDistance(session.distanceMeters)} - {formatDuration(session.durationSeconds)} - {formatSpeed(session.averageSpeedKmh)} - {session.averagePace}</p>
                  <p className="mt-2 text-sm font-semibold text-positive"><Flame className="mr-1 inline h-4 w-4" />+{session.xpAwarded} XP - Voce voltou. Isso e o que mais importa.</p>
                </div>
                <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-1">
                  <Link className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-navy px-5 py-3 text-sm font-bold text-white" href={`/app/corpo/caminhada/resumo?session=${session.id}`}>
                    Ver resumo
                  </Link>
                  <WalkingDeleteButton id={session.id} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function walkingChartData(sessions: Array<{ startedAt: Date; distanceMeters: number; durationSeconds: number }>) {
  return heatmapDays(sessions).slice(-14).map((day) => {
    const daySessions = sessions.filter((session) => startOfDay(session.startedAt).toISOString() === day.iso);
    return {
      date: day.day,
      km: Number((daySessions.reduce((sum, session) => sum + session.distanceMeters, 0) / 1000).toFixed(1)),
      minutos: Math.round(daySessions.reduce((sum, session) => sum + session.durationSeconds, 0) / 60)
    };
  });
}

function heatmapDays(sessions: Array<{ startedAt: Date }>) {
  const now = startOfDay(new Date());
  return Array.from({ length: 28 }).map((_, index) => {
    const date = subDays(now, 27 - index);
    const iso = date.toISOString();
    const count = sessions.filter((session) => startOfDay(session.startedAt).toISOString() === iso).length;
    return { iso, count, day: format(date, "dd"), label: format(date, "dd/MM") };
  });
}
