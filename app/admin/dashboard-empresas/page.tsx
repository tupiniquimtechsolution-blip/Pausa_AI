import { format } from "date-fns";
import { prisma } from "@/lib/prisma";
import { CompanyChart } from "@/components/charts";
import { Card, MetricCard } from "@/components/ui";

const sectors = [
  ["Atendimento", 3.4, 3.8],
  ["Administrativo", 3.8, 3.1],
  ["Comercial", 3.2, 4.0],
  ["Operações", 3.6, 3.5]
] as const;

export default async function CompanyDashboardPage() {
  const company = await prisma.company.findFirst({ include: { metrics: { orderBy: { date: "asc" } } } });
  const metrics = company?.metrics || [];
  const latest = metrics[metrics.length - 1];
  const chart = metrics.map((item) => ({ date: format(item.date, "dd/MM"), humor: Number(item.avgMood.toFixed(1)), estresse: Number(item.avgStress.toFixed(1)) }));
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-3xl font-black text-navy">Dashboard empresarial demonstrativo</h1>
        <p className="mt-2 text-text">Dados mockados, anônimos e consolidados. Nenhuma resposta individual é exibida.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-5">
        <MetricCard label="Humor médio" value={latest?.avgMood.toFixed(1) || "-"} />
        <MetricCard label="Estresse médio" value={latest?.avgStress.toFixed(1) || "-"} />
        <MetricCard label="Sono médio" value={latest?.avgSleep.toFixed(1) || "-"} />
        <MetricCard label="Energia média" value={latest?.avgEnergy.toFixed(1) || "-"} />
        <MetricCard label="Adesão semanal" value={`${latest?.engagementRate.toFixed(0) || 0}%`} />
      </div>
      <CompanyChart data={chart} />
      <div className="grid gap-5 md:grid-cols-2">
        <Card>
          <h2 className="text-xl font-black text-navy">Distribuição por setores</h2>
          <div className="mt-4 grid gap-3">
            {sectors.map(([name, mood, stress]) => <div key={name} className="rounded-2xl bg-ice p-4"><p className="font-bold text-navy">{name}</p><p className="text-sm text-text">Humor {mood} • Estresse {stress}</p></div>)}
          </div>
        </Card>
        <Card>
          <h2 className="text-xl font-black text-navy">Sugestões para RH</h2>
          <ul className="mt-4 grid gap-3 text-sm text-text">
            <li>• Criar campanha de pausas curtas</li>
            <li>• Estimular rotina de fechamento do dia</li>
            <li>• Promover semana sem reuniões após determinado horário</li>
            <li>• Incentivar check-ins no início do expediente</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
