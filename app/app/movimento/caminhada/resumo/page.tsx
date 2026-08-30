import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Badge, Button, Card } from "@/components/ui";
import { WalkingRouteMap } from "@/components/walking-route-map";
import { WalkingFavoriteRouteButton, WalkingShareButton } from "@/components/walking-actions";
import { formatDistance, formatDuration, formatSpeed, getWalkingMode, nextWalkingSuggestion, type RoutePoint, type WalkingMode } from "@/lib/walking";

export default async function WalkingSummaryPage({ searchParams }: { searchParams: Promise<{ session?: string }> }) {
  const user = await requireUser();
  if (!user.onboardingCompleted) redirect("/app/onboarding");
  const params = await searchParams;
  if (!params.session) notFound();

  const session = await prisma.walkingSession.findFirst({ where: { id: params.session, userId: user.id } });
  if (!session) notFound();
  const mode = getWalkingMode(session.walkingMode);
  const routePoints = parseRoute(session.routePoints);
  const suggestion = nextWalkingSuggestion(session);

  return (
    <div className="mx-auto grid max-w-5xl gap-5">
      <Link href="/app/corpo/caminhada" className="inline-flex items-center gap-2 text-sm font-bold text-navy">
        <ArrowLeft className="h-4 w-4" /> Voltar para Caminhada
      </Link>

      <Card className="border-mint/70 bg-mint/20">
        <div className="flex gap-3">
          <CheckCircle2 className="h-7 w-7 shrink-0 text-positive" />
          <div>
            <Badge tone="mint">Caminhada salva</Badge>
            <h1 className="mt-3 text-3xl font-black text-navy">Voce se movimentou hoje. Isso ja conta.</h1>
            <p className="mt-2 text-sm font-semibold text-text">{mode.supportiveCopy}</p>
          </div>
        </div>
      </Card>

      <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
        <div className="grid gap-5">
          <WalkingRouteMap points={routePoints} hideRouteEdges={session.hideRouteEdges} className="min-h-[300px]" />
          <Card>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <Metric label="Distancia" value={formatDistance(session.distanceMeters)} />
              <Metric label="Tempo total" value={formatDuration(session.durationSeconds)} />
              <Metric label="Ritmo medio" value={session.averagePace} />
              <Metric label="Velocidade media" value={formatSpeed(session.averageSpeedKmh)} />
              <Metric label="Tempo em movimento" value={formatDuration(session.movingTimeSeconds)} />
              <Metric label="Calorias estimadas" value={`${Math.round(session.caloriesEstimated)} kcal`} />
              <Metric label="Tipo" value={mode.title} />
              <Metric label="Privacidade" value={session.privacy === "private" ? "Privada" : "Salva no perfil"} />
            </div>
            <p className="mt-4 rounded-2xl bg-amber/10 p-3 text-xs font-bold text-amber-800">Calorias sao uma estimativa aproximada baseada em 70 kg quando nao ha peso cadastrado.</p>
          </Card>

          <Card>
            <h2 className="text-xl font-black text-navy">Sensacao antes e depois</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <Metric label="Humor" value={`${session.moodBefore || "-"} -> ${session.moodAfter || "-"}`} />
              <Metric label="Estresse" value={`${session.stressBefore || "-"} -> ${session.stressAfter || "-"}`} />
              <Metric label="Ansiedade" value={`${session.anxietyBefore || "-"} -> ${session.anxietyAfter || "-"}`} />
            </div>
            {session.notes && <p className="mt-4 rounded-2xl bg-ice p-4 text-sm text-text">{session.notes}</p>}
          </Card>
        </div>

        <aside className="grid content-start gap-5">
          <Card>
            <h2 className="text-xl font-black text-navy">Proxima sugestao</h2>
            <p className="mt-2 text-sm text-text">{suggestion}</p>
          </Card>
          <Card>
            <h2 className="text-xl font-black text-navy">Acoes</h2>
            <div className="mt-4 grid gap-2">
              <WalkingFavoriteRouteButton
                title={`${mode.title} - ${formatDistance(session.distanceMeters)}`}
                walkingMode={session.walkingMode as WalkingMode}
                distanceMeters={session.distanceMeters}
                routePoints={routePoints}
                privacy={session.privacy}
                hideRouteEdges={session.hideRouteEdges}
              />
              <WalkingShareButton mode={session.walkingMode} distanceMeters={session.distanceMeters} durationSeconds={session.durationSeconds} />
              <Button href="/app/corpo/caminhada/historico" variant="secondary">Ver historico</Button>
              <Button href={`/app/corpo/caminhada/configurar?tipo=${session.walkingMode}`}>Repetir tipo</Button>
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-ice p-3 dark:bg-slate-950">
      <p className="text-xs font-black uppercase text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-black text-navy">{value}</p>
    </div>
  );
}

function parseRoute(value: string): RoutePoint[] {
  try {
    const parsed = JSON.parse(value || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
