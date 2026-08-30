"use client";

import { EmptyState } from "@/components/ui";
import { EventCard, type AgendaCardItem } from "@/components/event-card";

export function DayTimeline({ items, onDelete }: { items: AgendaCardItem[]; onDelete?: (item: AgendaCardItem) => void }) {
  const today = new Date();
  const todayItems = items.filter((item) => sameDay(new Date(item.startDateTime), today));
  if (!todayItems.length) {
    return <EmptyState title="Hoje está livre" description="Crie um evento, salve uma ideia ou use o assistente para planejar um cuidado curto." />;
  }
  return (
    <div className="grid gap-3">
      {todayItems.map((item) => <EventCard key={`${item.type}-${item.id}`} item={item} onDelete={onDelete} />)}
    </div>
  );
}

function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
