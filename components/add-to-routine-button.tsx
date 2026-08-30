"use client";

import { useState, useTransition } from "react";
import { CalendarPlus, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function AddToRoutineButton({
  title,
  description,
  slug,
  label = "Adicionar a rotina"
}: {
  title: string;
  description: string;
  slug: string;
  label?: string;
}) {
  const [saved, setSaved] = useState(false);
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();

  function addToRoutine() {
    if (pending || saved) return;
    startTransition(async () => {
      const response = await fetch("/api/routine/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          category: "MOVIMENTO",
          notes: `/app/exercicios/${slug}`,
          priority: "MEDIUM"
        })
      });
      const data = await response.json().catch(() => ({}));
      if (response.ok) {
        setSaved(true);
        setMessage("Adicionado a rotina.");
      } else {
        setMessage(data.error || "Nao conseguimos adicionar agora.");
      }
    });
  }

  return (
    <span className="grid gap-1">
      <button
        type="button"
        disabled={pending || saved}
        aria-pressed={saved}
        aria-label={pending ? "Salvando na rotina" : saved ? "Já adicionado à rotina" : label}
        onClick={addToRoutine}
        className={cn(
          "inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-bold transition disabled:cursor-not-allowed",
          saved
            ? "border-positive bg-navy text-white shadow-soft ring-2 ring-positive/30"
            : "border-line bg-white text-navy hover:border-positive hover:bg-mint/30 disabled:opacity-70 dark:bg-slate-900"
        )}
      >
        {saved ? <CheckCircle2 className="h-4 w-4 text-mint" /> : <CalendarPlus className="h-4 w-4" />}
        {pending ? "Salvando..." : saved ? "Na rotina" : label}
      </button>
      {message && <span className="text-center text-[11px] font-bold text-positive">{message}</span>}
    </span>
  );
}
