import { requireUser } from "@/lib/auth";
import { getProgressSummary } from "@/lib/progress/summary";
import { Badge, Card, MetricCard } from "@/components/ui";

export default async function ProgressPage() {
  const user = await requireUser();
  const summary = await getProgressSummary(user.id, user.xp);
  return (
    <div className="grid gap-6">
      <div>
        <Badge tone="mint">Progresso sem punição</Badge>
        <h1 className="mt-3 text-3xl font-black text-navy md:text-5xl">Sua evolução nos últimos 30 dias</h1>
        <p className="mt-2 text-text">Regularidade, segurança e resposta ao check-in contam mais do que performance.</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        <MetricCard label="Nível" value={summary.level.level} />
        <MetricCard label="Sequência" value={`${summary.streak} dias`} />
        <MetricCard label="Minutos" value={summary.minutes} />
        <MetricCard label="Sessões" value={summary.sessions} />
        <MetricCard label="Check-ins" value={summary.checkins} />
      </div>
      <Card>
        <h2 className="text-xl font-black text-navy">Tendências percebidas</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-4">
          {Object.entries(summary.trends).map(([key, value]) => (
            <div key={key} className="rounded-2xl bg-ice p-4">
              <p className="text-xs font-black uppercase text-slate-500">{key}</p>
              <p className="mt-1 text-2xl font-black text-navy">{value || "—"}</p>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <h2 className="text-xl font-black text-navy">Categorias disponíveis</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {summary.unlocks.map((item) => <Badge key={item.slug} tone={item.pillar === "BODY" ? "mint" : "lavender"}>{item.title}</Badge>)}
        </div>
        <p className="mt-4 text-xs font-semibold text-slate-500">Nenhum acesso depende de pagamento nesta versão.</p>
      </Card>
    </div>
  );
}
