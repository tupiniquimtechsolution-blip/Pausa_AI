"use client";

import { useState, useTransition } from "react";
import { CalendarPlus } from "lucide-react";
import { Button, Card } from "@/components/ui";

type PlanItem = {
  day: string;
  exerciseSlug: string;
  practiceType: string;
  estimatedMinutes: number;
  reason: string;
};

export function WeeklyPlanGenerator() {
  const [items, setItems] = useState<PlanItem[]>([]);
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();

  function generate() {
    startTransition(async () => {
      const response = await fetch("/api/plan/weekly", { method: "POST" });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setMessage(data.error || "Nao conseguimos gerar o plano agora.");
        return;
      }
      setItems(data.plan?.items || []);
      setMessage(`Plano gerado por ${data.plan?.source === "OPENAI" ? "IA" : "regras locais"}.`);
    });
  }

  async function addTask(item: PlanItem) {
    await fetch("/api/routine/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: `${item.day}: ${item.practiceType}`,
        category: "PAUSA",
        notes: `${item.reason} Abrir: /app/exercicios/${item.exerciseSlug}`,
        priority: "MEDIUM"
      })
    });
    setMessage("Item adicionado a Rotina.");
  }

  return (
    <Card>
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-black text-navy">Plano semanal</h2>
          <p className="mt-2 text-sm text-text">Gere 7 sugestoes editaveis com base nos seus check-ins e preferencias.</p>
        </div>
        <Button type="button" onClick={generate}><CalendarPlus className="h-4 w-4" />{pending ? "Gerando..." : "Gerar meu plano"}</Button>
      </div>
      {message && <p className="mt-3 text-sm font-bold text-positive">{message}</p>}
      {items.length > 0 && (
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {items.map((item) => (
            <div key={`${item.day}-${item.exerciseSlug}`} className="rounded-2xl bg-ice p-4 dark:bg-slate-900">
              <p className="text-xs font-black uppercase text-slate-500">{item.day} - {item.estimatedMinutes} min</p>
              <h3 className="mt-1 font-black text-navy">{item.practiceType}</h3>
              <p className="mt-2 text-sm text-text">{item.reason}</p>
              <Button type="button" variant="secondary" className="mt-3 w-full" onClick={() => addTask(item)}>Adicionar a Rotina</Button>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
