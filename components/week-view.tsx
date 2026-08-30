"use client";

import { EventCard, type AgendaCardItem } from "@/components/event-card";

const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

export function WeekView({ items, onDelete }: { items: AgendaCardItem[]; onDelete?: (item: AgendaCardItem) => void }) {
  const groups = groupByDay(items);
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {groups.map((group) => (
        <section key={group.key} className="rounded-2xl border border-line bg-white/80 p-3 dark:border-slate-800 dark:bg-slate-900/80">
          <p className="mb-3 text-sm font-black text-navy">{group.label}</p>
          <div className="grid gap-2">
            {group.items.length ? group.items.map((item) => (
              <EventCard key={`${item.type}-${item.id}`} item={item} onDelete={onDelete} />
            )) : <p className="rounded-2xl bg-ice p-3 text-sm font-semibold text-slate-500 dark:bg-slate-950">Sem itens.</p>}
          </div>
        </section>
      ))}
    </div>
  );
}

function groupByDay(items: AgendaCardItem[]) {
  const today = new Date();
  const start = new Date(today);
  const diff = today.getDay() === 0 ? -6 : 1 - today.getDay();
  start.setDate(today.getDate() + diff);
  start.setHours(0, 0, 0, 0);

  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const key = date.toISOString().slice(0, 10);
    return {
      key,
      label: `${days[date.getDay()]} ${date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" })}`,
      items: items.filter((item) => sameDay(new Date(item.startDateTime), date))
    };
  });
}

function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
