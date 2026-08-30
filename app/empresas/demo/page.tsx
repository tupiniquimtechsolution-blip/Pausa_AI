import { format, subDays } from "date-fns";
import { BarChart3, ShieldCheck } from "lucide-react";
import { PublicHeader } from "@/components/navigation";
import { AlertBanner, Button, Card, MetricCard } from "@/components/ui";
import { CompanyChart } from "@/components/charts";

const metrics = Array.from({ length: 7 }).map((_, index) => {
  const day = subDays(new Date(), 6 - index);
  return {
    date: format(day, "dd/MM"),
    humor: Number((3.3 + index * 0.08).toFixed(1)),
    estresse: Number((3.9 - index * 0.07).toFixed(1)),
    sono: Number((3.1 + index * 0.06).toFixed(1)),
    energia: Number((3.2 + index * 0.05).toFixed(1)),
    adesao: 68 + index * 3
  };
});

const latest = metrics[metrics.length - 1];
const sectors = [
  ["Atendimento", "Humor 3.4", "Estresse 3.8"],
  ["Administrativo", "Humor 3.8", "Estresse 3.1"],
  ["Comercial", "Humor 3.2", "Estresse 4.0"],
  ["Operacoes", "Humor 3.6", "Estresse 3.5"]
] as const;

export default function CompanyDemoPage() {
  return (
    <>
      <PublicHeader />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <section className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h1 className="text-4xl font-black leading-tight text-navy">Dashboard empresarial demo</h1>
            <p className="mt-3 max-w-3xl text-text">Visual demonstrativo do que uma empresa recebe no Pausa AI: medias, tendencias e sugestoes de acoes preventivas, sempre sem respostas individuais.</p>
          </div>
          <Button href="/empresas/piloto">Solicitar piloto de 7 dias</Button>
        </section>

        <div className="mt-8">
          <AlertBanner>Dados ficticios para demonstracao. Nenhum dado individual de colaborador e exibido no dashboard empresarial.</AlertBanner>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-5">
          <MetricCard label="Humor medio" value={latest.humor} />
          <MetricCard label="Estresse medio" value={latest.estresse} />
          <MetricCard label="Sono medio" value={latest.sono} />
          <MetricCard label="Energia media" value={latest.energia} />
          <MetricCard label="Adesao semanal" value={`${latest.adesao}%`} />
        </section>

        <section className="mt-6">
          <CompanyChart data={metrics.map((item) => ({ date: item.date, humor: item.humor, estresse: item.estresse }))} />
        </section>

        <section className="mt-6 grid gap-5 md:grid-cols-2">
          <Card>
            <BarChart3 className="h-8 w-8 text-positive" />
            <h2 className="mt-3 text-xl font-black text-navy">Distribuicao por setores ficticios</h2>
            <div className="mt-4 grid gap-3">
              {sectors.map(([name, mood, stress]) => (
                <div key={name} className="rounded-2xl bg-ice p-4">
                  <p className="font-bold text-navy">{name}</p>
                  <p className="text-sm text-text">{mood} - {stress}</p>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <ShieldCheck className="h-8 w-8 text-positive" />
            <h2 className="mt-3 text-xl font-black text-navy">Sugestoes para RH</h2>
            <ul className="mt-4 grid gap-3 text-sm text-text">
              <li>Criar campanha de pausas curtas no inicio do expediente.</li>
              <li>Estimular rotina de fechamento do dia para reduzir pendencias mentais.</li>
              <li>Promover uma semana sem reunioes apos determinado horario.</li>
              <li>Incentivar check-ins como habito anonimo e preventivo.</li>
            </ul>
          </Card>
        </section>

        <Card className="mt-6">
          <h2 className="text-xl font-black text-navy">Privacidade no modelo empresarial</h2>
          <p className="mt-2 text-text">A empresa nao ve respostas individuais. O painel empresarial mostra apenas medias, tendencias e dados consolidados para orientar acoes de bem-estar.</p>
        </Card>
      </main>
    </>
  );
}
