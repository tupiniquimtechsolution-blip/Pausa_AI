import Link from "next/link";
import { Lock, Sparkles } from "lucide-react";
import { Badge, Card } from "@/components/ui";

type UnlockItem = {
  id: string;
  slug: string;
  title: string;
  category: string;
  unlockLevel: number;
};

export function UserProgressBanner({
  level,
  xp,
  currentXp,
  nextXp,
  progressPercent,
  newlyUnlocked,
  nextUnlock
}: {
  level: number;
  xp: number;
  currentXp: number;
  nextXp?: number;
  progressPercent: number;
  newlyUnlocked: UnlockItem[];
  nextUnlock?: UnlockItem | null;
}) {
  return (
    <Card className="border-app-accent/45 bg-app-card">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <Badge tone="mint">Progresso gratuito</Badge>
          <h2 className="mt-3 text-2xl font-black text-app-text">Nivel {level}</h2>
          <p className="mt-1 text-sm font-semibold text-app-muted">{nextXp ? `${xp} / ${nextXp} XP` : `${xp} XP - nivel maximo atual`}</p>
        </div>
        <div className="rounded-2xl border border-app-border bg-app-surface px-4 py-3 text-sm font-black text-app-text">
          {nextXp ? `Faltam ${Math.max(0, nextXp - xp)} XP` : "Tudo liberado nesta fase"}
        </div>
      </div>
      <div className="mt-4 h-3 overflow-hidden rounded-full bg-app-selection">
        <div className="h-full rounded-full bg-app-accent" style={{ width: `${progressPercent}%` }} />
      </div>
      <p className="mt-2 text-xs font-bold text-app-muted">Nivel atual comecou em {currentXp} XP.</p>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_280px]">
        <div>
          <h3 className="text-sm font-black uppercase text-app-muted">Desbloqueado no seu nivel atual</h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {newlyUnlocked.length ? newlyUnlocked.slice(0, 4).map((item) => (
              <Link key={item.id} href={`/app/exercicios/${item.slug}`} className="rounded-2xl border border-app-border bg-app-surface p-4 shadow-soft transition hover:-translate-y-0.5">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-black text-app-text">{item.title}</p>
                  <span className="rounded-full border border-app-border bg-app-selection/45 px-2 py-1 text-[11px] font-black text-app-text">Novo</span>
                </div>
                <p className="mt-2 text-xs font-bold uppercase text-app-muted">{item.category}</p>
              </Link>
            )) : (
              <div className="rounded-2xl border border-app-border bg-app-surface p-4 text-sm font-semibold text-app-muted">
                Continue praticando para liberar novos conteudos por nivel.
              </div>
            )}
          </div>
        </div>
        <div className="rounded-2xl bg-app-accent p-4 text-app-accent-contrast">
          <div className="flex items-center gap-2">
            {nextUnlock ? <Lock className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
            <p className="text-xs font-black uppercase">{nextUnlock ? "Proximo desbloqueio" : "Nivel completo"}</p>
          </div>
          <h3 className="mt-3 text-xl font-black">{nextUnlock?.title || "Voce chegou ao topo atual"}</h3>
          {nextUnlock && <p className="mt-2 text-sm font-semibold opacity-90">{nextUnlock.category} - nivel {nextUnlock.unlockLevel}</p>}
        </div>
      </div>
    </Card>
  );
}
