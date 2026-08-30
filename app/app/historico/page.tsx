import { format, subDays } from "date-fns";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { computeStreak } from "@/lib/metrics";
import { parseSteps } from "@/lib/utils";
import { getCheckinAreaLabel } from "@/lib/checkin-refinement";
import { Badge, Card, EmptyState } from "@/components/ui";
import { formatDistance, formatDuration, getWalkingMode } from "@/lib/walking";

export default async function HistoryPage({ searchParams }: { searchParams: Promise<{ periodo?: string }> }) {
  const user = await requireUser();
  if (!user.onboardingCompleted) redirect("/app/onboarding");
  const params = await searchParams;
  const period = params.periodo || "7";
  const where = period === "7" ? { userId: user.id, createdAt: { gte: subDays(new Date(), 7) } } : period === "30" ? { userId: user.id, createdAt: { gte: subDays(new Date(), 30) } } : { userId: user.id };
  const checkins = await prisma.checkin.findMany({
    where,
    orderBy: { createdAt: "desc" },
    include: {
      missionCompletions: true,
      recommendedExercise: true,
      exerciseSessions: { include: { exercise: true } },
      exerciseInstructionSessions: { include: { instruction: true } }
    }
  });
  const yogaSessions = await prisma.yogaPracticeSession.findMany({
    where: {
      userId: user.id,
      completedAt: { not: null },
      ...(period === "7" ? { startedAt: { gte: subDays(new Date(), 7) } } : period === "30" ? { startedAt: { gte: subDays(new Date(), 30) } } : {})
    },
    orderBy: { startedAt: "desc" },
    include: { practice: true }
  });
  const walkingSessions = await prisma.walkingSession.findMany({
    where: {
      userId: user.id,
      completed: true,
      ...(period === "7" ? { startedAt: { gte: subDays(new Date(), 7) } } : period === "30" ? { startedAt: { gte: subDays(new Date(), 30) } } : {})
    },
    orderBy: { startedAt: "desc" },
    take: 8
  });
  const instructionSlugs = checkins.map((item) => item.recommendedInstructionSlug).filter(Boolean) as string[];
  const instructions = instructionSlugs.length
    ? await prisma.exerciseInstruction.findMany({ where: { slug: { in: instructionSlugs } } })
    : [];
  const instructionMap = new Map(instructions.map((item) => [item.slug, item]));
  const streak = computeStreak(checkins);
  const weekly = checkins.filter((item) => item.createdAt >= subDays(new Date(), 7));
  const areaCounts = weekly.reduce<Record<string, number>>((acc, item) => {
    if (item.primaryArea) acc[item.primaryArea] = (acc[item.primaryArea] || 0) + 1;
    return acc;
  }, {});
  const topArea = Object.entries(areaCounts).sort((a, b) => b[1] - a[1])[0];
  const weeklyCopy = topArea
    ? `Essa semana voce priorizou ${getCheckinAreaLabel(topArea[0])} ${topArea[1]} vez${topArea[1] === 1 ? "" : "es"}.`
    : "Seu resumo semanal aparece quando houver check-ins suficientes.";
  return (
    <div>
      <h1 className="text-3xl font-black text-navy">Historico de check-ins</h1>
      <div className="mt-4 flex flex-wrap gap-2">
        {["7", "30", "todos"].map((value) => <a key={value} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-navy ring-1 ring-line" href={`/app/perfil/historico?periodo=${value}`}>{value === "todos" ? "Todos" : `Ultimos ${value} dias`}</a>)}
        <a className="rounded-full bg-navy px-4 py-2 text-sm font-bold text-white" href="/api/reports/weekly">Baixar meu relatorio</a>
      </div>
      <p className="mt-3 text-sm text-slate-500">Historico completo disponivel para todos. O Pausa AI e 100% gratuito.</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <Card>
          <p className="text-sm font-bold text-slate-500">Sequencia de dias</p>
          <h2 className="mt-2 text-2xl font-black text-navy">{streak} dia{streak === 1 ? "" : "s"}</h2>
          <p className="mt-2 text-sm text-text">Sequencia simples de check-ins, sem cobranca de perfeicao.</p>
        </Card>
        <Card>
          <p className="text-sm font-bold text-slate-500">Resumo semanal</p>
          <h2 className="mt-2 text-xl font-black text-navy">{weeklyCopy}</h2>
          <p className="mt-2 text-sm text-text">A narrativa ajuda a enxergar progresso sem transformar cuidado em meta rigida.</p>
        </Card>
      </div>
      <div className="mt-6 grid gap-4">
        {!checkins.length && <EmptyState title="Seu historico comeca com o primeiro check-in." description="Depois do check-in, suas orientacoes aparecem aqui." actionHref="/app/checkin" actionLabel="Fazer check-in" />}
        {yogaSessions.length > 0 && (
          <Card className="border-mint bg-mint/15">
            <p className="text-sm font-bold text-slate-500">Yoga concluido</p>
            <div className="mt-3 grid gap-2">
              {yogaSessions.slice(0, 6).map((session) => (
                <p key={session.id} className="text-sm font-semibold text-navy">
                  {format(session.startedAt, "dd/MM HH:mm")} - {session.practice.title} (+{session.xpAwarded} XP)
                </p>
              ))}
            </div>
          </Card>
        )}
        {walkingSessions.length > 0 && (
          <Card className="border-mint bg-mint/15">
            <p className="text-sm font-bold text-slate-500">Caminhadas concluidas</p>
            <div className="mt-3 grid gap-2">
              {walkingSessions.map((session) => (
                <p key={session.id} className="text-sm font-semibold text-navy">
                  {format(session.startedAt, "dd/MM HH:mm")} - {getWalkingMode(session.walkingMode).title} - {formatDistance(session.distanceMeters)} - {formatDuration(session.durationSeconds)}
                </p>
              ))}
            </div>
          </Card>
        )}
        {checkins.map((item) => (
          <Card key={item.id}>
            {(() => {
              const completedRecommended = item.exerciseInstructionSessions.some((session) => session.instruction.slug === item.recommendedInstructionSlug);
              return completedRecommended ? <Badge tone="mint">Check-in + exercicio recomendado concluidos</Badge> : null;
            })()}
            <div className="flex flex-col justify-between gap-3 md:flex-row">
              <div>
                <p className="text-sm font-bold text-slate-500">{format(item.createdAt, "dd/MM/yyyy HH:mm")}</p>
                <h2 className="mt-1 text-xl font-black text-navy">{item.dailyMissionTitle}</h2>
              </div>
              <Badge tone={item.missionCompletions.length || item.exerciseSessions.length ? "mint" : "amber"}>{item.missionCompletions.length || item.exerciseSessions.length ? "Concluido" : "Pendente"}</Badge>
            </div>
            <p className="mt-3 text-sm text-text">Foco {item.focusScore} - Humor {item.moodScore} - Estresse {item.stressScore} - Energia {item.energyScore} - Sono {item.sleepScore}</p>
            {item.primaryArea && <p className="mt-2 text-sm font-semibold text-navy">Area principal: {getCheckinAreaLabel(item.primaryArea)}</p>}
            {item.recommendedInstructionSlug && instructionMap.get(item.recommendedInstructionSlug) && (
              <p className="mt-2 text-sm font-semibold text-navy">Exercicio recomendado: {instructionMap.get(item.recommendedInstructionSlug)?.title}</p>
            )}
            {item.recommendedExercise && <p className="mt-2 text-sm font-semibold text-navy">Exercicio recomendado: {item.recommendedExercise.title}</p>}
            {item.exerciseSessions.length > 0 && <p className="mt-2 text-sm font-semibold text-positive">Exercicio concluido: {item.exerciseSessions.map((session) => session.exercise.title).join(", ")}</p>}
            {item.exerciseInstructionSessions.length > 0 && <p className="mt-2 text-sm font-semibold text-positive">Pratica concluida: {item.exerciseInstructionSessions.map((session) => session.instruction.title).join(", ")}</p>}
            {item.journalText && <p className="mt-3 rounded-2xl bg-ice p-3 text-sm text-text">{item.journalText}</p>}
            <p className="mt-3 text-sm text-text">{item.aiSummary}</p>
            <p className="mt-2 text-sm font-semibold text-navy">{item.aiRecommendation}</p>
            <ul className="mt-3 grid gap-1 text-sm text-text">{parseSteps(item.dailyMissionSteps).map((step) => <li key={step}>{step}</li>)}</ul>
          </Card>
        ))}
      </div>
    </div>
  );
}
