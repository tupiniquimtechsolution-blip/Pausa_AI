import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { getLevelProgress } from "@/lib/levels";
import { computeStreak } from "@/lib/metrics";
import { getCheckinAreaLabel } from "@/lib/checkin-refinement";
import { Button, Card } from "@/components/ui";
import { JsonForm } from "@/components/forms";
import { AlarmPanel } from "@/components/alarm-panel";
import { PreferencesControls } from "@/components/preferences";
import { AchievementGallery } from "@/components/achievement-gallery";
import { CommunicationPreferences } from "@/components/communication-preferences";
import { FoundationStatusPanel } from "@/components/foundation-status-panel";

const fields = [
  { name: "name", label: "Nome" },
  { name: "mainGoal", label: "Objetivo principal", options: ["Dormir melhor", "Reduzir estresse", "Melhorar foco", "Criar rotina saudável", "Ter mais energia", "Organizar melhor o dia"] },
  { name: "dailyTime", label: "Tempo disponível por dia", options: ["3 minutos", "5 minutos", "10 minutos", "15 minutos"] },
  { name: "preferredTime", label: "Horário preferido", options: ["Manhã", "Tarde", "Noite"] },
  { name: "stressLevel", label: "Nível de estresse", options: ["Baixo", "Médio", "Alto"] },
  { name: "difficultyArea", label: "Área de dificuldade", options: ["Sono", "Trabalho", "Estudos", "Ansiedade do dia a dia", "Cansaço", "Falta de rotina"] },
  { name: "workHours", label: "Horas de trabalho por dia", type: "number" },
  { name: "freeHours", label: "Horas livres por dia", type: "number" },
  { name: "sleepHours", label: "Horas de sono por dia", type: "number" },
  { name: "sleepAlarm", label: "Alarme para dormir", type: "time" },
  { name: "wakeAlarm", label: "Alarme para acordar", type: "time" },
  { name: "trainingIntensityPreference", label: "Intensidade dos treinos", options: ["diminuir", "manter", "aumentar"] }
];

export default async function ProfilePage() {
  const user = await requireUser();
  if (!user.onboardingCompleted) redirect("/app/onboarding");
  const dbUser = await prisma.user.findUnique({ where: { id: user.id }, include: { profile: true } });
  const checkins = await prisma.checkin.findMany({ where: { userId: user.id }, orderBy: { createdAt: "asc" } });
  const instructionSessions = await prisma.exerciseInstructionSession.findMany({ where: { userId: user.id, completedAt: { not: null } } });
  const achievements = await prisma.achievement.findMany({
    orderBy: { targetValue: "asc" },
    include: { userAchievements: { where: { userId: user.id }, take: 1 } }
  });
  const progress = getLevelProgress(dbUser?.xp || 0);
  const activeDays = new Set(checkins.map((item) => item.createdAt.toISOString().slice(0, 10))).size;
  const firstCheckin = checkins[0]?.createdAt;
  const areaCounts = checkins.reduce<Record<string, number>>((acc, item) => {
    if (item.primaryArea) acc[item.primaryArea] = (acc[item.primaryArea] || 0) + 1;
    return acc;
  }, {});
  const topArea = Object.entries(areaCounts).sort((a, b) => b[1] - a[1])[0];
  const defaults = {
    name: dbUser?.name || "",
    mainGoal: dbUser?.profile?.mainGoal || "",
    dailyTime: dbUser?.profile?.dailyTime || "",
    preferredTime: dbUser?.profile?.preferredTime || "",
    stressLevel: dbUser?.profile?.stressLevel || "",
    difficultyArea: dbUser?.profile?.difficultyArea || "",
    workHours: dbUser?.profile?.workHours || 8,
    freeHours: dbUser?.profile?.freeHours || 2,
    sleepHours: dbUser?.profile?.sleepHours || 7,
    sleepAlarm: dbUser?.profile?.sleepAlarm || "",
    wakeAlarm: dbUser?.profile?.wakeAlarm || "",
    trainingIntensityPreference: dbUser?.profile?.trainingIntensityPreference || "manter"
  };
  return (
    <div className="mx-auto grid max-w-3xl gap-5">
      <Card>
        <h1 className="text-3xl font-black text-navy">Perfil</h1>
        <p className="mt-2 text-text">Pausa AI é 100% gratuito. Seu progresso atual: <strong>Nível {progress.level}</strong> com <strong>{dbUser?.xp || 0} XP</strong>.</p>
        <p className="text-sm text-slate-500">Conta criada em {dbUser?.createdAt.toLocaleDateString("pt-BR")}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button href="/app/perfil/historico" variant="secondary">Histórico</Button>
          <Button href="/app/perfil/conquistas" variant="secondary">Conquistas</Button>
          <Button href="/app/perfil/configuracoes" variant="secondary">Configurações</Button>
          <Button href="/app/rotina" variant="secondary">Configurar rotina</Button>
        </div>
      </Card>
      <div className="grid gap-3 md:grid-cols-4">
        <Card className="p-4">
          <p className="text-xs font-bold uppercase text-slate-500">Dias ativos</p>
          <p className="mt-2 text-2xl font-black text-navy">{activeDays}</p>
        </Card>
        <Card className="p-4">
          <p className="text-xs font-bold uppercase text-slate-500">Streak</p>
          <p className="mt-2 text-2xl font-black text-navy">{computeStreak(checkins)}</p>
        </Card>
        <Card className="p-4">
          <p className="text-xs font-bold uppercase text-slate-500">Area mais praticada</p>
          <p className="mt-2 text-lg font-black text-navy">{topArea ? getCheckinAreaLabel(topArea[0]) : "-"}</p>
        </Card>
        <Card className="p-4">
          <p className="text-xs font-bold uppercase text-slate-500">Praticas concluidas</p>
          <p className="mt-2 text-2xl font-black text-navy">{instructionSessions.length}</p>
        </Card>
      </div>
      {firstCheckin && <p className="text-center text-sm font-semibold text-slate-500">Primeiro check-in em {firstCheckin.toLocaleDateString("pt-BR")}.</p>}
      <Card>
        <h2 className="mb-4 text-xl font-black text-navy">Aparencia e idioma</h2>
        <PreferencesControls />
      </Card>
      {user.roles.some((role) => role === "MASTER" || role === "ADMIN") ? <FoundationStatusPanel roles={user.roles} /> : null}
      <Card>
        <h2 className="mb-4 text-xl font-black text-navy">Comunicacao</h2>
        <CommunicationPreferences
          emailEnabled={Boolean(dbUser?.profile?.emailRecommendationsEnabled)}
          pushEnabled={Boolean(dbUser?.profile?.pushNotificationsEnabled)}
          dailyTime={dbUser?.profile?.dailyRecommendationTime}
        />
      </Card>
      <Card>
        <JsonForm fields={fields} endpoint="/api/profile" button="Salvar dados" defaults={defaults} successMessage="Dados do perfil salvos com sucesso." />
      </Card>
      <AchievementGallery achievements={achievements.map((achievement) => ({
        slug: achievement.slug,
        title: achievement.title,
        description: achievement.description,
        icon: achievement.icon,
        unlocked: achievement.userAchievements.length > 0,
        unlockedAt: achievement.userAchievements[0]?.unlockedAt || null
      }))} />
      <AlarmPanel sleepAlarm={defaults.sleepAlarm as string} wakeAlarm={defaults.wakeAlarm as string} />
      <form action="/api/auth/logout" method="post"><Button type="submit" variant="secondary" className="w-full">Logout</Button></form>
    </div>
  );
}
