"use client";

import { useState, useTransition } from "react";
import { Button, Card } from "@/components/ui";

const goals = ["Dormir melhor", "Ter mais energia", "Reduzir estresse", "Melhorar foco", "Criar rotina", "Se movimentar mais"];
const energy = ["Baixa", "Media", "Boa"];
const times = ["Manha", "Tarde", "Noite"];

export function ReOnboardingPrompt({ mainGoal, preferredTime }: { mainGoal: string; preferredTime: string }) {
  const [open, setOpen] = useState(false);
  const [goal, setGoal] = useState(mainGoal || goals[0]);
  const [weeklyEnergy, setWeeklyEnergy] = useState("Media");
  const [time, setTime] = useState(preferredTime || times[0]);
  const [saved, setSaved] = useState(false);
  const [pending, startTransition] = useTransition();

  function save() {
    startTransition(async () => {
      const response = await fetch("/api/onboarding/refresh", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mainGoal: goal, weeklyEnergy, preferredTime: time })
      });
      if (response.ok) {
        setSaved(true);
        setOpen(false);
      }
    });
  }

  if (saved) return null;

  return (
    <>
      <Card className="border-amber/50 bg-amber/10">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-black text-navy">Suas preferencias podem estar desatualizadas</h2>
            <p className="mt-1 text-sm text-text">Atualize 3 pontos para deixar as recomendacoes mais proximas da sua fase atual.</p>
          </div>
          <Button type="button" onClick={() => setOpen(true)}>Atualizar agora</Button>
        </div>
      </Card>
      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-navy/50 p-4 backdrop-blur-sm">
          <div className="max-w-lg rounded-3xl bg-white p-6 shadow-soft dark:bg-slate-950">
            <h3 className="text-2xl font-black text-navy">Atualizacao rapida</h3>
            <div className="mt-5 grid gap-4">
              <label className="grid gap-2">Objetivo atual<select value={goal} onChange={(event) => setGoal(event.target.value)}>{goals.map((item) => <option key={item}>{item}</option>)}</select></label>
              <label className="grid gap-2">Energia geral da semana<select value={weeklyEnergy} onChange={(event) => setWeeklyEnergy(event.target.value)}>{energy.map((item) => <option key={item}>{item}</option>)}</select></label>
              <label className="grid gap-2">Horario preferido<select value={time} onChange={(event) => setTime(event.target.value)}>{times.map((item) => <option key={item}>{item}</option>)}</select></label>
            </div>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              <Button type="button" variant="secondary" onClick={() => setOpen(false)}>Agora nao</Button>
              <Button type="button" onClick={save}>{pending ? "Salvando..." : "Salvar preferencias"}</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
