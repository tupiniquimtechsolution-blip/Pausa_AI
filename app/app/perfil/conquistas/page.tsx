import { redirect } from "next/navigation";
import { AchievementGallery } from "@/components/achievement-gallery";
import { Button, Card } from "@/components/ui";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function AchievementsPage() {
  const user = await requireUser();
  if (!user.onboardingCompleted) redirect("/app/onboarding");
  const achievements = await prisma.achievement.findMany({
    orderBy: { targetValue: "asc" },
    include: { userAchievements: { where: { userId: user.id }, take: 1 } }
  });

  return (
    <div className="mx-auto grid max-w-3xl gap-5">
      <Card>
        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Perfil</p>
        <h1 className="mt-1 text-3xl font-black text-navy">Conquistas</h1>
        <p className="mt-2 text-text">Veja seus marcos desbloqueados e os próximos objetivos.</p>
        <Button href="/app/perfil" variant="secondary" className="mt-4">Voltar ao perfil</Button>
      </Card>
      <AchievementGallery achievements={achievements.map((achievement) => ({
        slug: achievement.slug,
        title: achievement.title,
        description: achievement.description,
        icon: achievement.icon,
        unlocked: achievement.userAchievements.length > 0,
        unlockedAt: achievement.userAchievements[0]?.unlockedAt || null
      }))} />
    </div>
  );
}
