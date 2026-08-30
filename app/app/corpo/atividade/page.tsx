import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getMapProvider } from "@/lib/maps/provider";
import { PausaActivityRunner } from "@/components/pausa-activity-runner";
import { Badge, Card, EmptyState, MetricCard } from "@/components/ui";

function duration(seconds: number) {
  return `${Math.floor(seconds / 60)} min`;
}

export default async function PausaActivityPage() {
  const user = await requireUser();
  const activities = await prisma.pausaActivity.findMany({
    where: { userId: user.id, status: "COMPLETED" },
    include: { route: true },
    orderBy: { startedAt: "desc" },
    take: 30
  });
  const provider = getMapProvider();
  const totalMinutes = Math.round(activities.reduce((sum, item) => sum + item.movingTimeSeconds, 0) / 60);
  const totalDistance = activities.reduce((sum, item) => sum + item.distanceMeters, 0);
  return (
    <div className="grid gap-6">
      <div>
        <Badge tone="mint">Funciona sem conta externa</Badge>
        <h1 className="mt-3 text-3xl font-black text-navy md:text-5xl">Pausa Activity</h1>
        <p className="mt-2 text-text">Caminhada, corrida, exercício livre ou sessão Pausa AI com histórico e métricas próprias.</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <MetricCard label="Atividades" value={activities.length} />
        <MetricCard label="Minutos em movimento" value={totalMinutes} />
        <MetricCard label="Distância" value={`${(totalDistance / 1000).toFixed(2)} km`} />
      </div>
      <PausaActivityRunner />
      <Card>
        <h2 className="text-xl font-black text-navy">Privacidade e mapa</h2>
        <p className="mt-2 text-sm text-text">
          Provedor: {provider.id}. O início e o fim da rota são ocultados por padrão. Compartilhamento exige ação explícita.
        </p>
      </Card>
      <section className="grid gap-3">
        <h2 className="text-2xl font-black text-navy">Histórico próprio</h2>
        {!activities.length ? (
          <EmptyState title="Nenhuma atividade concluída" description="Inicie acima; GPS é opcional e conectores não são necessários." />
        ) : activities.map((activity) => (
          <Card key={activity.id} className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge tone="navy">{activity.activityType}</Badge>
                <Badge tone="mint">{activity.metricsVersion}</Badge>
              </div>
              <p className="mt-2 font-black text-navy">{activity.startedAt.toLocaleString("pt-BR")}</p>
              <p className="mt-1 text-sm text-text">
                {duration(activity.movingTimeSeconds)} em movimento • {(activity.distanceMeters / 1000).toFixed(2)} km • {activity.pauseCount} pausa(s)
              </p>
            </div>
            <p className="text-xs font-bold text-slate-500">{activity.route?.privacy || activity.privacy}</p>
          </Card>
        ))}
      </section>
    </div>
  );
}
