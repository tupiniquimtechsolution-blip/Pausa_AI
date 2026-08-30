"use client";

import { useMemo, useState } from "react";
import { Award, X } from "lucide-react";
import { Card } from "@/components/ui";

type AchievementItem = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt: string | Date | null;
};

export function AchievementGallery({ achievements }: { achievements: AchievementItem[] }) {
  const [now] = useState(() => new Date().getTime());
  const recent = useMemo(() => achievements.find((item) => {
    if (!item.unlockedAt) return false;
    return now - new Date(item.unlockedAt).getTime() < 2 * 60 * 1000;
  }), [achievements, now]);
  const [showRecent, setShowRecent] = useState(Boolean(recent));

  return (
    <>
      <Card>
        <h2 className="text-xl font-black text-navy">Conquistas</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {achievements.map((item) => (
            <div key={item.slug} className={`rounded-2xl border p-4 ${item.unlocked ? "border-mint bg-mint/25" : "border-line bg-ice opacity-70 dark:bg-slate-900"}`}>
              <div className="flex items-start gap-3">
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${item.unlocked ? "bg-navy text-mint" : "bg-slate-200 text-slate-500"}`}>
                  <Award className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-black text-navy">{item.title}</p>
                  <p className="mt-1 text-sm text-text">{item.description}</p>
                  <p className="mt-2 text-xs font-black uppercase text-slate-500">{item.unlocked ? "Desbloqueada" : "Bloqueada"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
      {recent && showRecent && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-navy/50 p-4 backdrop-blur-sm">
          <div className="relative max-w-sm rounded-3xl bg-white p-6 text-center shadow-soft dark:bg-slate-950">
            <button type="button" onClick={() => setShowRecent(false)} className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-ice text-navy" aria-label="Fechar conquista">
              <X className="h-4 w-4" />
            </button>
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-mint text-navy">
              <Award className="h-8 w-8" />
            </div>
            <p className="mt-4 text-sm font-black uppercase text-slate-500">Conquista desbloqueada</p>
            <h3 className="mt-2 text-2xl font-black text-navy">{recent.title}</h3>
            <p className="mt-2 text-sm text-text">{recent.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
