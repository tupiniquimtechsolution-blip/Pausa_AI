"use client";

import { CalendarCheck, X } from "lucide-react";
import { Button, Card } from "@/components/ui";

export type EventPreview = {
  title: string;
  description?: string;
  startDateTime?: string;
  endDateTime?: string;
  category?: string;
  priority?: string;
  recurrenceRule?: string;
  type?: string;
  question?: string;
  missingFields?: string[];
};

export function EventPreviewCard({
  preview,
  onConfirm,
  onCancel,
  confirmLabel = "Confirmar"
}: {
  preview: EventPreview;
  onConfirm: () => void;
  onCancel: () => void;
  confirmLabel?: string;
}) {
  const start = preview.startDateTime ? new Date(preview.startDateTime) : null;
  const end = preview.endDateTime ? new Date(preview.endDateTime) : null;
  const missing = preview.missingFields?.length ? preview.missingFields.join(", ") : "";
  return (
    <Card className="border-positive/50 bg-mint/20">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase text-slate-500">Prévia antes de salvar</p>
          <h3 className="mt-1 text-xl font-black text-navy">{preview.title}</h3>
          {preview.description && <p className="mt-1 text-sm text-text">{preview.description}</p>}
        </div>
        <CalendarCheck className="h-6 w-6 text-positive" />
      </div>
      <dl className="mt-4 grid gap-2 text-sm md:grid-cols-2">
        <PreviewLine label="Tipo" value={preview.type || "event"} />
        <PreviewLine label="Categoria" value={preview.category || "ROTINA"} />
        <PreviewLine label="Prioridade" value={preview.priority || "MEDIUM"} />
        <PreviewLine label="Recorrência" value={preview.recurrenceRule || "Não"} />
        <PreviewLine label="Início" value={start ? start.toLocaleString("pt-BR") : "Pendente"} />
        <PreviewLine label="Fim" value={end ? end.toLocaleString("pt-BR") : "Pendente"} />
      </dl>
      {preview.question && <p className="mt-3 rounded-2xl bg-white p-3 text-sm font-bold text-navy dark:bg-slate-900">{preview.question}</p>}
      {missing && <p className="mt-2 text-xs font-bold uppercase text-amber-700">Campos pendentes: {missing}</p>}
      <div className="mt-4 flex flex-wrap gap-2">
        <Button type="button" onClick={() => { if (!missing) onConfirm(); }} className={`flex-1 ${missing ? "opacity-50" : ""}`}>{confirmLabel}</Button>
        <Button type="button" variant="secondary" onClick={onCancel}><X className="h-4 w-4" /> Cancelar</Button>
      </div>
    </Card>
  );
}

function PreviewLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white p-3 dark:bg-slate-900">
      <dt className="text-xs font-black uppercase text-slate-500">{label}</dt>
      <dd className="font-bold text-navy">{value}</dd>
    </div>
  );
}
