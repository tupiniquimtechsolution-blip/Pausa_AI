import { format } from "date-fns";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { average, last7 } from "@/lib/metrics";
import { Card, EmptyState, MetricCard } from "@/components/ui";

export default async function InsightsPage() {
  const user = await requireUser();
  if (!user.onboardingCompleted) redirect("/app/onboarding");
  const all = await prisma.checkin.findMany({ where: { userId: user.id }, orderBy: { createdAt: "desc" } });
  const checkins = last7(all);
  const bestDay = checkins.slice().sort((a, b) => b.moodScore + b.energyScore - (a.moodScore + a.energyScore))[0];
  const stressDay = checkins.slice().sort((a, b) => b.stressScore - a.stressScore)[0];
  const avgMood = average(checkins.map((c) => c.moodScore));
  const avgSleep = average(checkins.map((c) => c.sleepScore));
  const avgEnergy = average(checkins.map((c) => c.energyScore));
  const avgStress = average(checkins.map((c) => c.stressScore));
  const pattern = avgStress >= 4 ? "Parece que o estresse apareceu com mais força nesta semana." : avgSleep <= 2.5 ? "Pode ser útil observar como o sono está influenciando sua energia." : "Parece que houve uma base relativamente estável, com espaço para manter hábitos leves.";
  const suggestion = avgStress >= 4 ? "Uma possibilidade é reservar pausas curtas antes de blocos mais exigentes." : avgSleep <= 2.5 ? "Experimente um ritual sem tela em duas noites desta semana." : "Continue com missões curtas e observe quais horários funcionam melhor.";

  return (
    <div className="grid gap-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-black text-navy">Insights semanais</h1>
          <p className="mt-1 text-text">Uma leitura preventiva, sem diagnóstico e com linguagem cuidadosa.</p>
        </div>
        <span className="rounded-full bg-mint px-4 py-2 text-sm font-bold text-emerald-950">Insights gratuitos</span>
      </div>
      {!checkins.length ? <EmptyState title="Ainda não há dados suficientes." description="Faça alguns check-ins para gerar seus primeiros insights." /> : (
        <>
          <div className="grid gap-4 md:grid-cols-4">
            <MetricCard label="Média de humor" value={avgMood} />
            <MetricCard label="Média de sono" value={avgSleep} />
            <MetricCard label="Média de energia" value={avgEnergy} />
            <MetricCard label="Média de estresse" value={avgStress} />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <Card><h2 className="text-xl font-black text-navy">Melhor dia da semana</h2><p className="mt-2 text-text">{bestDay ? format(bestDay.createdAt, "dd/MM") : "-"}</p></Card>
            <Card><h2 className="text-xl font-black text-navy">Dia de maior estresse</h2><p className="mt-2 text-text">{stressDay ? format(stressDay.createdAt, "dd/MM") : "-"}</p></Card>
          </div>
          <Card>
            <h2 className="text-xl font-black text-navy">Padrão percebido</h2>
            <p className="mt-2 text-text">{pattern}</p>
            <h3 className="mt-5 font-black text-navy">Sugestão para próxima semana</h3>
            <p className="mt-2 text-text">{suggestion}</p>
          </Card>
        </>
      )}
    </div>
  );
}
