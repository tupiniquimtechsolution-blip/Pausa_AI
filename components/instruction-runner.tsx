"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { Pause, Play, RotateCcw, Trophy } from "lucide-react";
import { Button } from "@/components/ui";
import { BreathingVisual } from "@/components/breathing-visual";
import { exportNativeWorkout } from "@/lib/native-routine-bridge";
import { createCompletionToken } from "@/lib/completion-token";

type Instruction = {
  id: string;
  slug: string;
  title: string;
  instructionType: string;
  durationSeconds: number | null;
  sets: number | null;
  reps: string | null;
  restSeconds: number | null;
  category?: string;
  area?: string;
  checkinId?: string;
};

function notifyNativeFeedback(moment: "breathing-phase" | "practice-complete") {
  if (typeof window === "undefined") return;
  const bridge = (window as Window & { ReactNativeWebView?: { postMessage: (message: string) => void } }).ReactNativeWebView;
  bridge?.postMessage(JSON.stringify({ source: "pausa-ai", type: "native-feedback", moment }));
}

export function InstructionRunner({ instruction }: { instruction: Instruction }) {
  if (instruction.instructionType === "REPS_BASED") return <RepsRunner instruction={instruction} />;
  if (instruction.instructionType === "BREATHING") return <BreathingRunner instruction={instruction} />;
  if (instruction.instructionType === "WRITING") return <WritingRunner instruction={instruction} />;
  return <TimeRunner instruction={instruction} />;
}

function useComplete(instruction: Instruction) {
  const [message, setMessage] = useState("");
  const [nextSuggestion, setNextSuggestion] = useState("");
  const [pending, startTransition] = useTransition();
  const completionToken = useRef(createCompletionToken());
  function complete() {
    startTransition(async () => {
      const response = await fetch("/api/exercise-instructions/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ instructionId: instruction.id, checkinId: instruction.checkinId, completionToken: completionToken.current })
      });
      const data = await response.json().catch(() => ({}));
      if (response.ok) {
        notifyNativeFeedback("practice-complete");
        void exportNativeWorkout({
          title: instruction.title,
          durationMinutes: durationMinutesFor(instruction),
          category: nativeCategoryFor(instruction),
          completedAt: new Date().toISOString()
        });
      }
      setMessage(response.ok ? data.closingMessage || `Pausa concluida. +${data.xpAwarded || 10} XP.` : data.error || "Nao conseguimos concluir agora.");
      setNextSuggestion(response.ok ? data.nextSuggestion || "" : "");
    });
  }
  return {
    complete,
    message,
    nextSuggestion,
    pending,
    renewCompletionToken: () => { completionToken.current = createCompletionToken(); }
  };
}

function TimeRunner({ instruction }: { instruction: Instruction }) {
  const total = instruction.durationSeconds || 180;
  const [seconds, setSeconds] = useState(total);
  const [running, setRunning] = useState(false);
  const { complete, message, nextSuggestion, pending, renewCompletionToken } = useComplete(instruction);
  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => setSeconds((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [running]);
  useEffect(() => {
    if (seconds !== 0) return;
    const timer = window.setTimeout(() => setRunning(false), 0);
    return () => window.clearTimeout(timer);
  }, [seconds]);
  return (
    <RunnerShell title="Duracao guiada" message={message} nextSuggestion={nextSuggestion}>
      <p className="text-center text-5xl font-black text-navy">{Math.floor(seconds / 60).toString().padStart(2, "0")}:{(seconds % 60).toString().padStart(2, "0")}</p>
      <RunnerButtons onStart={() => setRunning(true)} onPause={() => setRunning(false)} onReset={() => { setSeconds(total); setRunning(false); renewCompletionToken(); }} onComplete={complete} pending={pending} />
    </RunnerShell>
  );
}

function RepsRunner({ instruction }: { instruction: Instruction }) {
  const totalSets = instruction.sets || 2;
  const [setsDone, setSetsDone] = useState(0);
  const { complete, message, nextSuggestion, pending } = useComplete(instruction);
  return (
    <RunnerShell title="Series e repeticoes" message={message} nextSuggestion={nextSuggestion}>
      <p className="text-center text-2xl font-black text-navy">{setsDone}/{totalSets} series concluidas</p>
      <p className="text-center text-sm font-bold text-text">{instruction.reps || "8 a 12"} repeticoes por serie {instruction.restSeconds ? `- descanso sugerido ${instruction.restSeconds}s` : ""}</p>
      <div className="grid gap-2 sm:grid-cols-2">
        <Button type="button" variant="secondary" onClick={() => setSetsDone((value) => Math.min(totalSets, value + 1))}>Concluir serie</Button>
        <Button type="button" onClick={complete}>{pending ? "Salvando..." : "Finalizar exercicio"}</Button>
      </div>
    </RunnerShell>
  );
}

function BreathingRunner({ instruction }: { instruction: Instruction }) {
  const { complete, message, nextSuggestion, pending } = useComplete(instruction);

  return (
    <RunnerShell title="Ciclo de respiracao" message={message} nextSuggestion={nextSuggestion}>
      <BreathingVisual onComplete={() => notifyNativeFeedback("breathing-phase")} enableSound />
      <Button type="button" onClick={complete} className="w-full"><Trophy className="h-4 w-4" />{pending ? "Salvando..." : "Concluir pratica"}</Button>
    </RunnerShell>
  );
}

function WritingRunner({ instruction }: { instruction: Instruction }) {
  const { complete, message, nextSuggestion, pending } = useComplete(instruction);
  return (
    <RunnerShell title="Escrita guiada" message={message} nextSuggestion={nextSuggestion}>
      <p className="rounded-2xl bg-ice p-3 text-sm font-semibold text-text">Pergunta guia: o que esta ocupando sua mente agora, e o que pode esperar?</p>
      <textarea rows={5} placeholder="Anotacao opcional. Fica apenas nesta tela por enquanto." />
      <Button type="button" onClick={complete}>{pending ? "Salvando..." : "Concluir pratica"}</Button>
    </RunnerShell>
  );
}

function durationMinutesFor(instruction: Instruction) {
  if (instruction.durationSeconds) return Math.max(1, Math.round(instruction.durationSeconds / 60));
  if (instruction.sets) return Math.max(3, instruction.sets * 2);
  return instruction.instructionType === "BREATHING" ? 3 : 5;
}

function nativeCategoryFor(instruction: Instruction) {
  if (instruction.instructionType === "BREATHING") return "BREATHING";
  if (instruction.category === "YOGA") return "YOGA";
  if (instruction.area === "BODY_MOVEMENT") return "MOVEMENT";
  if (instruction.category === "MOBILITY" || instruction.category === "STRETCHING") return "STRETCHING";
  return "FOCUS";
}

function RunnerShell({ title, message, nextSuggestion, children }: { title: string; message: string; nextSuggestion?: string; children: React.ReactNode }) {
  return (
    <div className="mt-5 grid gap-4 rounded-3xl border border-line bg-ice p-4 dark:border-slate-800 dark:bg-slate-950">
      <p className="text-sm font-black uppercase text-slate-500">{title}</p>
      {children}
      {message && <p className="text-center text-sm font-bold text-positive">{message}</p>}
      {nextSuggestion && <p className="rounded-2xl bg-white p-3 text-center text-sm font-semibold text-text dark:bg-slate-900">{nextSuggestion}</p>}
    </div>
  );
}

function RunnerButtons({ onStart, onPause, onReset, onComplete, pending }: { onStart: () => void; onPause: () => void; onReset: () => void; onComplete: () => void; pending: boolean }) {
  return (
    <div className="sticky bottom-3 z-20 grid gap-2 rounded-2xl bg-ice/95 p-2 shadow-soft backdrop-blur dark:bg-slate-950/95 sm:static sm:grid-cols-4 sm:bg-transparent sm:p-0 sm:shadow-none">
      <Button type="button" onClick={onStart}><Play className="h-4 w-4" />Iniciar</Button>
      <Button type="button" variant="secondary" onClick={onPause}><Pause className="h-4 w-4" />Pausar</Button>
      <Button type="button" variant="secondary" onClick={onReset}><RotateCcw className="h-4 w-4" />Reiniciar</Button>
      <Button type="button" onClick={onComplete}><Trophy className="h-4 w-4" />{pending ? "Salvando..." : "Concluir"}</Button>
    </div>
  );
}
