"use client";

import { FormEvent, useState, useTransition } from "react";
import { CalendarPlus, Clock3, ListTodo } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button, Card } from "@/components/ui";
import { CenteredToast } from "@/components/centered-toast";
import { ConflictAlert, type ConflictItem } from "@/components/conflict-alert";
import { DayTimeline } from "@/components/day-timeline";
import { EventCard, type AgendaCardItem } from "@/components/event-card";
import { EventPreviewCard, type EventPreview } from "@/components/event-preview-card";
import { InboxPanel, type InboxPanelItem } from "@/components/inbox-panel";
import { PermissionBanner } from "@/components/permission-banner";
import { SmartInput } from "@/components/smart-input";
import { WeekView } from "@/components/week-view";

const categories = ["ROTINA", "COMPROMISSO", "TAREFA", "EXERCICIO", "ALONGAMENTO", "SONO", "FOCO", "HIDRATACAO", "MODO_SEM_REDES", "PLANEJAMENTO"];
const priorities = ["LOW", "MEDIUM", "HIGH", "CRITICAL"];

type FreeSlot = {
  startDateTime: string;
  endDateTime: string;
  durationMinutes: number;
  reason: string;
};

export function AgendaView({
  items,
  conflicts,
  inboxItems
}: {
  items: AgendaCardItem[];
  conflicts: ConflictItem[];
  inboxItems: InboxPanelItem[];
}) {
  const router = useRouter();
  const [tab, setTab] = useState<"today" | "week" | "list">("today");
  const [preview, setPreview] = useState<EventPreview | null>(null);
  const [slots, setSlots] = useState<FreeSlot[]>([]);
  const [toast, setToast] = useState<{ message: string; type: "success" | "warning" | "error" | "info" }>({ message: "", type: "info" });
  const [pending, startTransition] = useTransition();

  function prepareManualEvent(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const start = String(data.get("startDateTime") || "");
    const end = String(data.get("endDateTime") || "");
    const nextPreview: EventPreview = {
      title: String(data.get("title") || ""),
      description: String(data.get("description") || ""),
      startDateTime: start ? new Date(start).toISOString() : undefined,
      endDateTime: end ? new Date(end).toISOString() : undefined,
      category: String(data.get("category") || "ROTINA"),
      priority: String(data.get("priority") || "MEDIUM"),
      type: "event",
      missingFields: !start ? ["startDateTime"] : []
    };
    if (nextPreview.startDateTime && nextPreview.endDateTime) {
      const nextStart = new Date(nextPreview.startDateTime).getTime();
      const nextEnd = new Date(nextPreview.endDateTime).getTime();
      const conflict = items.find((item) => {
        const itemStart = new Date(item.startDateTime).getTime();
        const itemEnd = new Date(item.endDateTime).getTime();
        return Number.isFinite(itemStart) && Number.isFinite(itemEnd) && itemStart < nextEnd && itemEnd > nextStart;
      });
      if (conflict) {
        setToast({
          message: `Este horário conflita com "${conflict.title}". Escolha outro período ou edite o item existente.`,
          type: "warning"
        });
        return;
      }
    }
    setPreview(nextPreview);
  }

  function confirmManualEvent() {
    if (!preview) return;
    startTransition(async () => {
      const response = await fetch("/api/agenda/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: preview.title,
          description: preview.description || "",
          startDateTime: preview.startDateTime,
          endDateTime: preview.endDateTime,
          category: preview.category || "ROTINA",
          priority: preview.priority || "MEDIUM",
          reminderMinutes: [30]
        })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setToast({ message: data.error || "Não conseguimos criar o evento.", type: "error" });
        return;
      }
      setPreview(null);
      setToast({ message: "Evento criado na agenda.", type: "success" });
      router.refresh();
    });
  }

  function deleteEvent(item: AgendaCardItem) {
    if (!window.confirm(`Deseja realmente cancelar "${item.title}"?`)) return;
    startTransition(async () => {
      const response = await fetch(`/api/agenda/events?id=${item.id}`, { method: "DELETE" });
      if (!response.ok) {
        setToast({ message: "Não conseguimos excluir o evento.", type: "error" });
        return;
      }
      setToast({ message: "Evento cancelado.", type: "success" });
      router.refresh();
    });
  }

  function findFreeSlots() {
    startTransition(async () => {
      const response = await fetch("/api/agenda/free-time?durationMinutes=30");
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setToast({ message: data.error || "Não conseguimos procurar horários livres.", type: "error" });
        return;
      }
      setSlots(data.slots || []);
    });
  }

  return (
    <div className="grid gap-5">
      <CenteredToast message={toast.message} type={toast.type} onClose={() => setToast({ message: "", type: "info" })} />
      <PermissionBanner />
      <ConflictAlert conflicts={conflicts} />
      <SmartInput />

      <section className="grid gap-5 xl:grid-cols-[1fr_0.85fr]">
        <Card>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-black uppercase text-slate-500">Agenda local</p>
              <h2 className="text-2xl font-black text-navy">Criar evento manual</h2>
            </div>
            <Button type="button" variant="secondary" onClick={findFreeSlots}><Clock3 className="h-4 w-4" /> Ver horários livres</Button>
          </div>
          <form onSubmit={prepareManualEvent} className="mt-4 grid gap-3">
            <input name="title" placeholder="Ex: Consulta médica" required />
            <textarea name="description" rows={2} placeholder="Descrição opcional" />
            <div className="grid gap-3 md:grid-cols-2">
              <label className="grid gap-2">Início<input name="startDateTime" type="datetime-local" defaultValue={defaultDateTime(1)} required /></label>
              <label className="grid gap-2">Fim<input name="endDateTime" type="datetime-local" defaultValue={defaultDateTime(2)} /></label>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <select name="category" defaultValue="ROTINA">{categories.map((item) => <option key={item}>{item}</option>)}</select>
              <select name="priority" defaultValue="MEDIUM">{priorities.map((item) => <option key={item}>{item}</option>)}</select>
            </div>
            <Button type="submit"><CalendarPlus className="h-4 w-4" /> Pré-visualizar evento</Button>
          </form>
          {preview && <div className="mt-4"><EventPreviewCard preview={preview} onConfirm={confirmManualEvent} onCancel={() => setPreview(null)} confirmLabel={pending ? "Salvando..." : "Confirmar e salvar"} /></div>}
          {slots.length > 0 && (
            <div className="mt-4 grid gap-2">
              <p className="text-sm font-black text-navy">Sugestões de horário livre</p>
              {slots.map((slot) => (
                <div key={slot.startDateTime} className="rounded-2xl bg-ice p-3 text-sm font-semibold text-text dark:bg-slate-950">
                  {new Date(slot.startDateTime).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })} - {new Date(slot.endDateTime).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}: {slot.reason}
                </div>
              ))}
            </div>
          )}
        </Card>
        <InboxPanel items={inboxItems} />
      </section>

      <Card>
        <div className="mb-4 flex flex-wrap gap-2">
          <TabButton active={tab === "today"} onClick={() => setTab("today")}>Hoje</TabButton>
          <TabButton active={tab === "week"} onClick={() => setTab("week")}>Semana</TabButton>
          <TabButton active={tab === "list"} onClick={() => setTab("list")}><ListTodo className="h-4 w-4" /> Lista</TabButton>
        </div>
        {tab === "today" && <DayTimeline items={items} onDelete={deleteEvent} />}
        {tab === "week" && <WeekView items={items} onDelete={deleteEvent} />}
        {tab === "list" && (
          <div className="grid gap-3">
            {items.length ? items.map((item) => <EventCard key={`${item.type}-${item.id}`} item={item} onDelete={deleteEvent} />) : <p className="rounded-2xl bg-ice p-4 text-sm font-semibold text-slate-500 dark:bg-slate-950">Nenhum item na agenda.</p>}
          </div>
        )}
      </Card>
    </div>
  );
}

function TabButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" onClick={onClick} aria-label={typeof children === "string" ? children : "Alternar visualização"} className={`inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-black ${active ? "bg-navy text-white" : "bg-ice text-navy ring-1 ring-line dark:bg-slate-950"}`}>
      {children}
    </button>
  );
}

function defaultDateTime(addHours: number) {
  const date = new Date();
  date.setHours(date.getHours() + addHours, 0, 0, 0);
  const pad = (value: number) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}
