import { redirect } from "next/navigation";
import { AgendaView } from "@/components/agenda-view";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { endOfLocalWeek, startOfLocalWeek } from "@/lib/agenda/date-utils";
import { getAgendaSnapshot } from "@/lib/agenda/agenda-service";
import { detectAgendaConflicts } from "@/lib/agenda/conflict-detection-service";

export default async function AgendaPage() {
  const user = await requireUser();
  if (!user.onboardingCompleted) redirect("/app/onboarding");

  const from = startOfLocalWeek();
  const to = endOfLocalWeek();
  const [snapshot, inboxItems] = await Promise.all([
    getAgendaSnapshot(user.id, from, to),
    prisma.inboxItem.findMany({
      where: { userId: user.id, status: { not: "ARCHIVED" } },
      orderBy: { createdAt: "desc" },
      take: 12
    })
  ]);
  const conflicts = detectAgendaConflicts(snapshot.items);

  return (
    <div className="grid gap-6">
      <section className="rounded-3xl border border-line bg-white/90 p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900/90">
        <span className="inline-flex rounded-full bg-mint px-3 py-1 text-xs font-bold text-emerald-950">Agenda inteligente</span>
        <h1 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-navy md:text-5xl">Planeje eventos, tarefas, lembretes e pausas sem complicar o dia</h1>
        <p className="mt-4 max-w-3xl text-sm font-semibold text-text md:text-base">
          Use a agenda local, a caixa de entrada e o assistente por texto. Sincronizações externas entram por providers preparados, sempre com confirmação antes de alterar calendários.
        </p>
      </section>
      <AgendaView
        items={snapshot.items.map((item) => ({
          ...item,
          startDateTime: new Date(item.startDateTime).toISOString(),
          endDateTime: new Date(item.endDateTime).toISOString()
        }))}
        conflicts={conflicts.map((conflict) => ({
          id: conflict.id,
          first: { title: conflict.first.title },
          second: { title: conflict.second.title },
          startDateTime: conflict.startDateTime,
          endDateTime: conflict.endDateTime,
          severity: conflict.severity,
          suggestion: conflict.suggestion
        }))}
        inboxItems={inboxItems.map((item) => ({
          id: item.id,
          rawText: item.rawText,
          extractedText: item.extractedText,
          suggestedType: item.suggestedType,
          status: item.status,
          createdAt: item.createdAt.toISOString()
        }))}
      />
    </div>
  );
}
