import { format } from "date-fns";
import { ArrowRight, Footprints, History, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Badge, Button, Card } from "@/components/ui";
import { formatDistance, getWalkingMode, summarizeWalkingSessions, walkingModes, walkingRecommendationFromCheckin } from "@/lib/walking";

function parseJsonList(value?: string | null) {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.map(String).filter(Boolean) : [];
  } catch {
    return [];
  }
}

function walkingImagePath(mode: string) {
  return `/walking/${mode}.png`;
}

export default async function WalkingHomePage() {
  const user = await requireUser();
  if (!user.onboardingCompleted) redirect("/app/onboarding");

  const [sessions, goals, recentCheckin] = await Promise.all([
    prisma.walkingSession.findMany({ where: { userId: user.id, completed: true }, orderBy: { startedAt: "desc" }, take: 60 }),
    prisma.walkingGoal.findMany({ where: { userId: user.id, active: true } }),
    prisma.checkin.findFirst({ where: { userId: user.id, riskDetected: false }, orderBy: { createdAt: "desc" } })
  ]);
  const summary = summarizeWalkingSessions(sessions);
  const recommendation = walkingRecommendationFromCheckin({
    stressScore: recentCheckin?.stressScore,
    energyScore: recentCheckin?.energyScore,
    moodScore: recentCheckin?.moodScore,
    sleepScore: recentCheckin?.sleepScore,
    manualTags: parseJsonList(recentCheckin?.manualTags),
    detectedTags: parseJsonList(recentCheckin?.detectedTags),
    recentSessions: sessions
  });
  const weeklyGoal = goals.find((goal) => goal.period === "weekly");
  const weeklyProgress = weeklyGoal ? progressText(summary.weekly, weeklyGoal) : "Defina uma meta pequena para esta semana.";
  const lastMode = summary.last ? getWalkingMode(summary.last.walkingMode) : null;

  return (
    <div className="grid gap-6">
      <div className="max-w-4xl">
        <Badge tone="mint">Caminhada Inteligente</Badge>
        <h1 className="mt-3 text-3xl font-black leading-tight text-navy md:text-5xl">Movimento leve com GPS opcional, timer e cuidado emocional</h1>
        <p className="mt-3 text-text">Escolha o tipo certo para o seu estado, caminhe com ou sem GPS e registre progresso sem competicao.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <p className="text-sm font-bold text-slate-500">Semana</p>
          <h2 className="mt-2 text-2xl font-black text-navy">{formatDistance(summary.weekly.distanceMeters)}</h2>
          <p className="mt-1 text-sm font-semibold text-text">{Math.round(summary.weekly.durationSeconds / 60)} min - {summary.weekly.sessions} sessoes</p>
        </Card>
        <Card>
          <p className="text-sm font-bold text-slate-500">Meta atual</p>
          <h2 className="mt-2 text-xl font-black text-navy">{weeklyProgress}</h2>
          <Link className="mt-3 inline-flex text-sm font-black text-positive" href="/app/corpo/caminhada/historico">Ajustar metas</Link>
        </Card>
        <Card>
          <p className="text-sm font-bold text-slate-500">Ultima caminhada</p>
          {summary.last && lastMode ? (
            <>
              <h2 className="mt-2 text-xl font-black text-navy">{lastMode.title}</h2>
              <p className="mt-1 text-sm font-semibold text-text">{format(summary.last.startedAt, "dd/MM HH:mm")} - {formatDistance(summary.last.distanceMeters)}</p>
            </>
          ) : (
            <p className="mt-2 text-sm font-semibold text-text">Seu historico de caminhada comeca quando voce salvar a primeira sessao.</p>
          )}
        </Card>
      </div>

      <Card className="border-mint/70 bg-mint/20">
        <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <Badge tone="lavender">Recomendacao do dia</Badge>
            <h2 className="mt-3 text-2xl font-black text-navy">{recommendation.title}</h2>
            <p className="mt-2 text-sm font-semibold text-text">{recommendation.reason}</p>
          </div>
          <Button href={`/app/corpo/caminhada/configurar?tipo=${recommendation.mode}`}>Usar sugestao <ArrowRight className="h-4 w-4" /></Button>
        </div>
      </Card>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <Button href="/app/corpo/caminhada/configurar?tipo=free"><Footprints className="h-4 w-4" />Iniciar caminhada livre</Button>
        <Button href="/app/corpo/caminhada/historico" variant="secondary"><History className="h-4 w-4" />Historico e progresso</Button>
        <Button href="/app/corpo/caminhada/historico#metas" variant="secondary"><Target className="h-4 w-4" />Metas</Button>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {walkingModes.map((mode) => (
          <Card key={mode.id} className="flex flex-col overflow-hidden">
            <Image
              src={walkingImagePath(mode.id)}
              alt={mode.title}
              width={960}
              height={600}
              sizes="(max-width: 768px) 100vw, 33vw"
              unoptimized
              className="aspect-[16/10] w-full rounded-2xl object-cover"
            />
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge tone="mint">{mode.intensity}</Badge>
              <Badge tone="lavender">{mode.suggestedDurationMinutes} min</Badge>
            </div>
            <h2 className="mt-4 text-xl font-black text-navy">{mode.title}</h2>
            <p className="mt-2 text-sm text-text">{mode.shortDescription}</p>
            <p className="mt-3 text-xs font-black uppercase text-slate-500">Indicado para</p>
            <p className="mt-1 text-sm font-semibold text-text">{mode.audience}</p>
            <div className="mt-4 rounded-2xl bg-ice p-3">
              <p className="text-xs font-black uppercase text-slate-500">Complementos</p>
              <p className="mt-1 text-sm font-semibold text-navy">{mode.complements.slice(0, 4).join(", ")}</p>
            </div>
            <Link className="mt-5 inline-flex min-h-11 items-center justify-center rounded-2xl bg-navy px-5 py-3 text-sm font-bold text-white" href={`/app/corpo/caminhada/configurar?tipo=${mode.id}`}>
              Selecionar
            </Link>
          </Card>
        ))}
      </section>
    </div>
  );
}

function progressText(summary: { sessions: number; distanceMeters: number; durationSeconds: number }, goal: { targetDistanceMeters: number; targetDurationSeconds: number; targetSessions: number }) {
  const parts = [];
  if (goal.targetDistanceMeters) parts.push(`${Math.min(100, Math.round((summary.distanceMeters / goal.targetDistanceMeters) * 100))}% km`);
  if (goal.targetDurationSeconds) parts.push(`${Math.min(100, Math.round((summary.durationSeconds / goal.targetDurationSeconds) * 100))}% tempo`);
  if (goal.targetSessions) parts.push(`${Math.min(100, Math.round((summary.sessions / goal.targetSessions) * 100))}% sessoes`);
  return parts.length ? parts.join(" - ") : "Meta aberta, sem pressa.";
}
