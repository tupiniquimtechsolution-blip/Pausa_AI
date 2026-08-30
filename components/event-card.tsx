"use client";

import { CalendarClock, CheckCircle2, Clock, Trash2 } from "lucide-react";
import { Button } from "@/components/ui";

export type AgendaCardItem = {
  id: string;
  type: string;
  title: string;
  description?: string | null;
  startDateTime: string;
  endDateTime: string;
  category?: string | null;
  priority?: string | null;
  source?: string | null;
  status?: string | null;
};

export function EventCard({ item, onDelete }: { item: AgendaCardItem; onDelete?: (item: AgendaCardItem) => void }) {
  const start = new Date(item.startDateTime);
  const end = new Date(item.endDateTime);
  const canDelete = item.type === "event";
  return (
    <article className="grid gap-3 rounded-2xl border border-line bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-xs font-black uppercase text-slate-500">
            <CalendarClock className="h-4 w-4" /> {item.category || item.type}
          </p>
          <h3 className="mt-1 text-lg font-black text-navy">{item.title}</h3>
          {item.description && <p className="mt-1 text-sm text-text">{item.description}</p>}
        </div>
        <span className="rounded-full bg-ice px-3 py-1 text-xs font-black text-slate-600 dark:bg-slate-950">{item.priority || "MEDIUM"}</span>
      </div>
      <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-slate-500">
        <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {formatDate(start)} {formatTime(start)} - {formatTime(end)}</span>
        <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-4 w-4" /> {item.status || "ACTIVE"}</span>
        <span>{item.source || "LOCAL"}</span>
      </div>
      {canDelete && onDelete && (
        <div className="flex justify-end">
          <Button type="button" variant="ghost" onClick={() => onDelete(item)}><Trash2 className="h-4 w-4" /> Excluir</Button>
        </div>
      )}
    </article>
  );
}

function formatDate(date: Date) {
  return date.toLocaleDateString("pt-BR", { weekday: "short", day: "2-digit", month: "2-digit" });
}

function formatTime(date: Date) {
  return date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}
