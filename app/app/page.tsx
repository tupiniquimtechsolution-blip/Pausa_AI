import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { average, computeStreak, last7 } from "@/lib/metrics";
import { parseSteps } from "@/lib/utils";
import { getLevelProgress } from "@/lib/levels";
import { stateCopy as astralCopy } from "@/lib/astral";
import { getCheckinAreaLabel } from "@/lib/checkin-refinement";
import { getRecommendedYogaPractice } from "@/lib/yoga-recommendation";
import { Button, Card, EmptyState, MetricCard } from "@/components/ui";
import { WellnessChart } from "@/components/charts";
import { ReOnboardingPrompt } from "@/components/re-onboarding-prompt";
import { HealthSyncCard } from "@/components/health-sync-card";
import { activeCatalogIds, isCatalogEntryActive } from "@/lib/catalog-reconciliation";
import { requiresCatalogVisualAsset } from "@/lib/catalog-policy";

export default async function DashboardPage() {
  const user = await requireUser();
  if (!user.onboardingCompleted) redirect("/app/onboarding");
  const dbUser = await prisma.user.findUnique({ where: { id: user.id }, include: { profile: true } });
  const checkins = await prisma.checkin.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    include: { recommendedExercise: true, alternativeExercise: true }
  });
  const recent = last7(checkins);
  const today = checkins.find((item) => format(item.createdAt, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd"));
  const todayInstructionCandidate = today?.recommendedInstructionSlug
    ? await prisma.exerciseInstruction.findUnique({ where: { slug: today.recommendedInstructionSlug } })
    : null;
  const todayInstruction = todayInstructionCandidate && (
    !requiresCatalogVisualAsset(todayInstructionCandidate) ||
    isCatalogEntryActive("EXERCISE_INSTRUCTION", todayInstructionCandidate.slug)
  )
    ? todayInstructionCandidate
    : null;
  const yogaPractices = today ? await prisma.yogaPractice.findMany({
    where: { slug: { in: activeCatalogIds("YOGA_PRACTICE") } },
    orderBy: [{ level: "asc" }, { title: "asc" }]
  }) : [];
  const healthSnapshot = await prisma.healthMetricSnapshot.findFirst({ where: { userId: user.id }, orderBy: { date: "desc" } });
  const yogaRecommendation = today && yogaPractices.length ? getRecommendedYogaPractice(today, yogaPractices, dbUser?.level || 1) : null;
  const moodAvg = average(recent.map((c) => c.moodScore));
  const sleepAvg = average(recent.map((c) => c.sleepScore));
  const stressAvg = average(recent.map((c) => c.stressScore));
  const energyAvg = average(recent.map((c) => c.energyScore));
  const levelProgress = getLevelProgress(dbUser?.xp || 0);
  const nextMission = await prisma.mission.findFirst({
    where: { unlockLevel: { gt: levelProgress.level } },
    orderBy: [{ unlockLevel: "asc" }, { durationMinutes: "asc" }]
  });
  const now = new Date().getTime();
  const recentLevelUp = dbUser?.lastLevelUpAt && now - dbUser.lastLevelUpAt.getTime() < 1000 * 60 * 60 * 24;
  const preferencesStale = dbUser?.profile?.lastPreferenceUpdate
    ? now - dbUser.profile.lastPreferenceUpdate.getTime() > 1000 * 60 * 60 * 24 * 30
    : false;
  const chart = recent.slice().reverse().map((item) => ({
    date: format(item.createdAt, "dd/MM", { locale: ptBR }),
    humor: item.moodScore,
    sono: item.sleepScore,
    estresse: item.stressScore,
    energia: item.energyScore
  }));
  const stateCopy = !recent.length
    ? "Seu estado da semana aparece depois dos primeiros check-ins."
    : stressAvg && stressAvg >= 4
      ? "Sua semana parece pedir pausas mais gentis e menos acumuladas."
      : energyAvg && energyAvg >= 4
        ? "Sua energia recente parece mais estavel. Vale proteger esse ritmo."
        : "Parece uma boa semana para observar pequenos padroes sem pressa.";
  const movementCopy = !recent.length
    ? "Comece com respiracao 4-4-6 ou uma pausa sem tela."
    : energyAvg && energyAvg <= 2
      ? "Pausa ideal para agora: respiracao curta, agua e menos tela."
      : stressAvg && stressAvg >= 4
        ? "Pausa ideal para agora: respiracao 4-4-6 antes de novas demandas."
        : "Pausa ideal para agora: alguns minutos longe de notificacoes.";

  return (
    <div className="grid gap-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Progresso</p>
          <h1 className="text-3xl font-black text-navy">Ola, {user.name}. Como voce esta hoje?</h1>
          <p className="mt-1 text-text">Seu check-in leva menos de 1 minuto.</p>
        </div>
        <Button href="/app/checkin">Iniciar check-in</Button>
      </div>

      {preferencesStale && dbUser?.profile && <ReOnboardingPrompt mainGoal={dbUser.profile.mainGoal} preferredTime={dbUser.profile.preferredTime} />}

      <div className="grid gap-4 md:grid-cols-6">
        <MetricCard label="Nivel atual" value={levelProgress.level} />
        <MetricCard label="Streak atual" value={`${computeStreak(checkins)} dias`} />
        <MetricCard label="Humor 7 dias" value={moodAvg || "-"} />
        <MetricCard label="Sono 7 dias" value={sleepAvg || "-"} />
        <MetricCard label="Passos" value={healthSnapshot?.steps || "-"} />
        <MetricCard label="Check-ins" value={checkins.length} />
      </div>

      <HealthSyncCard initialSnapshot={healthSnapshot} />

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <p className="text-sm font-bold text-slate-500">Seu astral de hoje</p>
          <h2 className="mt-2 text-xl font-black text-navy">
            {today?.primaryArea ? getCheckinAreaLabel(today.primaryArea) : today?.profileState ? astralCopy[today.profileState as keyof typeof astralCopy]?.name : "Leitura em aberto"}
          </h2>
          <p className="mt-2 text-sm text-text">
            {today?.aiSummary || (today?.profileState ? astralCopy[today.profileState as keyof typeof astralCopy]?.explanation : "Faca um check-in para receber uma leitura de bem-estar do dia.")}
          </p>
          {(todayInstruction || today?.recommendedExercise) && (
            <div className="mt-4 rounded-2xl bg-ice p-3 text-sm font-bold text-navy">
              Area recomendada: {today?.primaryArea ? getCheckinAreaLabel(today.primaryArea) : today?.recommendedExercise?.area} - {todayInstruction?.title || today?.recommendedExercise?.title}
            </div>
          )}
          {(todayInstruction || today?.recommendedExercise) && (
            <Button href={todayInstruction ? `/app/exercicios/${todayInstruction.slug}` : `/app/mente?exercicio=${today?.recommendedExercise?.id}`} className="mt-4">Iniciar agora</Button>
          )}
        </Card>
        <Card>
          <p className="text-sm font-bold text-slate-500">Seu estado da semana</p>
          <h2 className="mt-2 text-xl font-black text-navy">{stateCopy}</h2>
        </Card>
        <Card>
          <p className="text-sm font-bold text-slate-500">Pausa ideal para agora</p>
          <h2 className="mt-2 text-xl font-black text-navy">{movementCopy}</h2>
          <Button href={yogaRecommendation?.practice ? `/app/corpo/yoga/${yogaRecommendation.practice.slug}` : "/app/mente"} variant="secondary" className="mt-4">
            {yogaRecommendation?.practice ? "Abrir yoga sugerida" : "Ver exercicios"}
          </Button>
          <Button href="/app/respiracao" className="mt-3">Respiracao 4-4-6</Button>
        </Card>
        <Card>
          <p className="text-sm font-bold text-slate-500">Pequena vitoria da semana</p>
          <h2 className="mt-2 text-xl font-black text-navy">{checkins.length ? `Voce completou ${recent.length} pausa${recent.length === 1 ? "" : "s"} nos ultimos 7 dias.` : "Seu primeiro check-in ja inicia seu historico."}</h2>
          <p className="mt-2 text-sm text-text">Pequenas acoes repetidas criam estabilidade.</p>
        </Card>
      </div>

      <Card>
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold text-slate-500">Progressao gratuita</p>
            <h2 className="mt-1 text-2xl font-black text-navy">Nivel {levelProgress.level} - {dbUser?.xp || 0} XP</h2>
            <p className="mt-1 text-sm text-text">
              {levelProgress.nextXp ? `Faltam ${levelProgress.xpToNext} XP para o nivel ${levelProgress.level + 1}.` : "Voce alcancou o nivel maximo atual."}
            </p>
          </div>
          {nextMission && <p className="rounded-2xl bg-lavender px-4 py-3 text-sm font-bold text-violet-950">Proximo desbloqueio: {nextMission.title} no nivel {nextMission.unlockLevel}</p>}
        </div>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-line">
          <div className="h-full rounded-full bg-positive" style={{ width: `${levelProgress.progressPercent}%` }} />
        </div>
        {recentLevelUp && <p className="mt-3 rounded-2xl bg-mint/50 p-3 text-sm font-bold text-emerald-950">Novas missoes foram desbloqueadas. Uma pequena pausa ja conta.</p>}
      </Card>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <p className="text-sm font-bold text-slate-500">Missao recomendada de hoje</p>
          {today ? (
            <>
              <h2 className="mt-2 text-2xl font-black text-navy">{today.dailyMissionTitle}</h2>
              <p className="mt-2 text-text">{today.dailyMissionDescription}</p>
              <ul className="mt-4 grid gap-2 text-sm text-text">{parseSteps(today.dailyMissionSteps).map((step) => <li key={step}>{step}</li>)}</ul>
            </>
          ) : (
            <p className="mt-3 text-text">Sua missao aparecera apos o check-in.</p>
          )}
        </Card>
        {checkins.length ? <WellnessChart data={chart} /> : <EmptyState title="Seu historico comeca com o primeiro check-in." description="Faca seu primeiro check-in para ver metricas e tendencias." />}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <p className="text-sm font-bold text-slate-500">Seu padrao recente</p>
          <h2 className="mt-2 text-xl font-black text-navy">
            {!recent.length ? "Ainda estamos construindo seu mapa pessoal." : `Humor ${moodAvg || "-"} - Sono ${sleepAvg || "-"} - Estresse ${stressAvg || "-"} - Energia ${energyAvg || "-"}`}
          </h2>
          <p className="mt-2 text-sm text-text">Parece util observar como sono, energia e estresse se combinam ao longo da semana.</p>
        </Card>
        <Card>
          <p className="text-sm font-bold text-slate-500">Proximo desbloqueio</p>
          <h2 className="mt-2 text-xl font-black text-navy">{nextMission ? `${nextMission.title} no nivel ${nextMission.unlockLevel}` : "Voce chegou ao maior nivel disponivel."}</h2>
          <p className="mt-2 text-sm text-text">Continue com check-ins e missoes concluidas para liberar novas praticas.</p>
        </Card>
      </div>
    </div>
  );
}
