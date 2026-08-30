"use client";

import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import { Bell, Pause, Play, RotateCcw, Trophy } from "lucide-react";
import { AlertBanner, Button } from "@/components/ui";
import { exportNativeWorkout } from "@/lib/native-routine-bridge";
import { parseSteps } from "@/lib/utils";
import { createCompletionToken } from "@/lib/completion-token";

type Routine = {
  id: string;
  title: string;
  modality: string;
  rounds: number;
  roundSeconds: number;
  restSeconds: number;
  warmupSteps: string;
  cooldownSteps: string;
  safetyNotes: string;
  alternative?: string | null;
  xpReward: number;
};

function playBell() {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const context = new AudioContextClass();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(880, context.currentTime);
    gain.gain.setValueAtTime(0.001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.25, context.currentTime + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.55);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.6);
  } catch {
    // Audio feedback is best effort; browser policies can block it.
  }
}

export function WorkoutTimer({ routine, pace, timerDefault = false }: { routine: Routine; pace?: number; timerDefault?: boolean }) {
  const [useTimer, setUseTimer] = useState(timerDefault);
  const [phase, setPhase] = useState<"idle" | "round" | "rest" | "done">("idle");
  const [currentRound, setCurrentRound] = useState(1);
  const [secondsLeft, setSecondsLeft] = useState(routine.roundSeconds);
  const [running, setRunning] = useState(false);
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();
  const completionToken = useRef(createCompletionToken());

  const totalWorkoutSeconds = useMemo(
    () => routine.rounds * routine.roundSeconds + Math.max(0, routine.rounds - 1) * routine.restSeconds,
    [routine.restSeconds, routine.roundSeconds, routine.rounds]
  );
  const elapsedSeconds = useMemo(() => {
    const completedRounds = currentRound - 1;
    const completedBlocks = completedRounds * (routine.roundSeconds + routine.restSeconds);
    const currentBlock = phase === "round" ? routine.roundSeconds - secondsLeft : phase === "rest" ? routine.roundSeconds + routine.restSeconds - secondsLeft : 0;
    return Math.min(totalWorkoutSeconds, completedBlocks + currentBlock);
  }, [currentRound, phase, routine.restSeconds, routine.roundSeconds, secondsLeft, totalWorkoutSeconds]);
  const progress = totalWorkoutSeconds ? Math.round((elapsedSeconds / totalWorkoutSeconds) * 100) : 0;

  useEffect(() => {
    if (!running || phase === "idle" || phase === "done") return;
    const timer = window.setInterval(() => {
      setSecondsLeft((value) => {
        if (value > 1) return value - 1;
        if (phase === "round") {
          playBell();
          if (currentRound >= routine.rounds || routine.restSeconds === 0) {
            if (currentRound >= routine.rounds) {
              setPhase("done");
              setRunning(false);
              return 0;
            }
            setCurrentRound((round) => round + 1);
            return routine.roundSeconds;
          }
          setPhase("rest");
          return routine.restSeconds;
        }
        if (phase === "rest") {
          playBell();
          setCurrentRound((round) => round + 1);
          setPhase("round");
          return routine.roundSeconds;
        }
        return value;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [currentRound, phase, routine.restSeconds, routine.roundSeconds, routine.rounds, running]);

  function start() {
    if (phase === "idle") {
      setCurrentRound(1);
      setSecondsLeft(routine.roundSeconds);
      setPhase("round");
    }
    setRunning(true);
  }

  function reset() {
    setPhase("idle");
    setCurrentRound(1);
    setSecondsLeft(routine.roundSeconds);
    setRunning(false);
    setMessage("");
    completionToken.current = createCompletionToken();
  }

  function finish() {
    startTransition(async () => {
      const response = await fetch("/api/workouts/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          routineId: routine.id,
          roundsCompleted: currentRound,
          durationSeconds: elapsedSeconds || totalWorkoutSeconds,
          paceUsed: routine.modality === "Pular corda" ? pace : undefined,
          completionToken: completionToken.current
        })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setMessage(data.error || "Não conseguimos registrar o treino agora.");
        return;
      }
      void exportNativeWorkout({
        title: routine.title,
        durationMinutes: Math.max(1, Math.round((elapsedSeconds || totalWorkoutSeconds) / 60)),
        category: routine.modality.toLowerCase().includes("along") ? "STRETCHING" : "MOVEMENT",
        completedAt: new Date().toISOString()
      });
      setMessage(data.alreadyCompleted
        ? "Treino ja registrado; nenhum XP adicional foi concedido."
        : data.leveledUp
          ? `Treino concluído. +${data.xpAwarded} XP e novo nível ${data.level}!`
          : `Treino concluído. +${data.xpAwarded} XP.`);
    });
  }

  const phaseLabel = phase === "idle" ? "Pronto para comecar" : phase === "round" ? `Etapa ${currentRound}` : phase === "rest" ? "Pausa" : "Finalizado";

  return (
    <div className="mt-5 grid gap-4 rounded-3xl border border-line bg-ice p-4">
      <label className="flex items-center gap-3 rounded-2xl bg-white p-3 text-sm font-black text-navy">
        <input className="h-5 w-5 accent-emerald-500" type="checkbox" checked={useTimer} onChange={(event) => setUseTimer(event.target.checked)} />
        Cronometro
        <span className="ml-auto flex items-center gap-1 text-xs text-slate-500"><Bell className="h-3 w-3" /> sineta ao trocar tempo</span>
      </label>
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase text-slate-500">Aquecimento</p>
          <ul className="mt-2 grid gap-1 text-sm text-text">{parseSteps(routine.warmupSteps).map((step) => <li key={step}>• {step}</li>)}</ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase text-slate-500">Desaquecimento</p>
          <ul className="mt-2 grid gap-1 text-sm text-text">{parseSteps(routine.cooldownSteps).map((step) => <li key={step}>• {step}</li>)}</ul>
        </div>
      </div>

      {routine.safetyNotes && <AlertBanner type={routine.modality === "Pular corda" ? "risk" : "info"}>{routine.safetyNotes} {routine.alternative}</AlertBanner>}

      {useTimer ? (
        <>
          <div className="rounded-3xl bg-white p-5 text-center">
            <p className="text-sm font-black uppercase text-slate-500">{phaseLabel}</p>
            <p className="mt-2 text-6xl font-black text-navy">{Math.floor(secondsLeft / 60).toString().padStart(2, "0")}:{(secondsLeft % 60).toString().padStart(2, "0")}</p>
            <p className="mt-2 text-sm font-bold text-text">{routine.rounds} etapas | {routine.roundSeconds}s acao | {routine.restSeconds}s pausa</p>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-line">
              <div className="h-full rounded-full bg-positive" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-4">
            <Button type="button" className="w-full" onClick={start}><Play className="h-4 w-4" />Iniciar</Button>
            <Button type="button" variant="secondary" className="w-full" onClick={() => setRunning(false)}><Pause className="h-4 w-4" />Pausar</Button>
            <Button type="button" variant="secondary" className="w-full" onClick={reset}><RotateCcw className="h-4 w-4" />Reiniciar</Button>
            <Button type="button" variant={phase === "done" ? "primary" : "secondary"} className="w-full" onClick={finish}><Trophy className="h-4 w-4" />{pending ? "Salvando..." : "Concluir"}</Button>
          </div>
        </>
      ) : (
        <div className="rounded-3xl bg-white p-5">
          <p className="text-sm font-black uppercase text-slate-500">Sem cronometro</p>
          <p className="mt-2 text-sm text-text">Use os passos no seu ritmo. Quando terminar, registre o treino para ganhar XP.</p>
          <Button type="button" className="mt-4 w-full" onClick={finish}><Trophy className="h-4 w-4" />{pending ? "Salvando..." : "Concluir treino"}</Button>
        </div>
      )}
      {message && <p className="text-center text-sm font-bold text-positive">{message}</p>}
    </div>
  );
}
