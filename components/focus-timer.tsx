"use client";

import { useCallback, useEffect, useMemo, useReducer, useState, useTransition } from "react";
import { Pause, Play, RotateCcw, Square } from "lucide-react";
import { Button, Card, SelectableButton } from "@/components/ui";
import {
  FOCUS_DURATIONS,
  completedSeconds,
  createFocusTimerState,
  focusTimerReducer,
  hydrateFocusTimer,
  type FocusTimerState
} from "@/lib/focus/session-machine";

const storageKey = "pausa_focus_session_v1";

export function FocusTimer({ suggestedExerciseSlug = "pausa-sem-tela" }: { suggestedExerciseSlug?: string }) {
  const [state, dispatch] = useReducer(focusTimerReducer, undefined, () => createFocusTimerState());
  const [customDuration, setCustomDuration] = useState(30);
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();
  const total = state.durationMinutes * 60;
  const progress = Math.min(100, Math.round((completedSeconds(state) / total) * 100));

  useEffect(() => {
    const hydrate = window.setTimeout(() => {
      try {
        const value = JSON.parse(window.localStorage.getItem(storageKey) || "null");
        const restored = hydrateFocusTimer(value);
        if (restored) dispatch({ type: "HYDRATE", state: restored });
      } catch {
        window.localStorage.removeItem(storageKey);
      }
    }, 0);
    return () => window.clearTimeout(hydrate);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    if (state.status !== "RUNNING") return;
    const timer = window.setInterval(() => {
      dispatch({ type: "TICK", now: new Date().toISOString() });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [state.status]);

  const sync = useCallback((nextState: FocusTimerState, action: "START" | "PAUSE" | "RESUME" | "RESTART" | "CANCEL" | "COMPLETE") => {
    startTransition(async () => {
      const response = await fetch("/api/focus/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          completionToken: nextState.completionToken,
          durationMinutes: nextState.durationMinutes,
          completedSeconds: completedSeconds(nextState),
          suggestedExerciseSlug,
          action
        })
      });
      const data = await response.json().catch(() => ({}));
      setMessage(response.ok
        ? statusMessage(action)
        : data.error || "Não conseguimos atualizar a sessão agora.");
    });
  }, [startTransition, suggestedExerciseSlug]);

  useEffect(() => {
    if (state.status !== "COMPLETED") return;
    const finish = window.setTimeout(() => {
      sync(state, "COMPLETE");
      try {
        const audio = new Audio("data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQoGAACA");
        audio.play().catch(() => undefined);
      } catch {
        // Audio is optional; the visual state remains authoritative.
      }
    }, 0);
    return () => window.clearTimeout(finish);
  }, [state, sync]);

  const timeLabel = useMemo(() => {
    const minutes = Math.floor(state.secondsLeft / 60).toString().padStart(2, "0");
    const seconds = (state.secondsLeft % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  }, [state.secondsLeft]);

  function selectDuration(duration: number) {
    if (state.status === "RUNNING") return;
    dispatch({ type: "SELECT_DURATION", durationMinutes: duration });
    setMessage("");
  }

  function startOrResume() {
    const now = new Date().toISOString();
    const action = state.status === "PAUSED" ? "RESUME" : "START";
    const next = focusTimerReducer(state, { type: action === "RESUME" ? "RESUME" : "START", now });
    dispatch({ type: action === "RESUME" ? "RESUME" : "START", now });
    sync(next, action);
  }

  function pause() {
    const now = new Date().toISOString();
    const next = focusTimerReducer(state, { type: "PAUSE", now });
    dispatch({ type: "PAUSE", now });
    sync(next, "PAUSE");
  }

  function restart() {
    const now = new Date().toISOString();
    const next = focusTimerReducer(state, { type: "RESTART", now });
    dispatch({ type: "RESTART", now });
    sync(next, "RESTART");
  }

  function cancel() {
    const now = new Date().toISOString();
    const next = focusTimerReducer(state, { type: "CANCEL", now });
    dispatch({ type: "CANCEL", now });
    sync(next, "CANCEL");
  }

  const running = state.status === "RUNNING";
  const closed = state.status === "COMPLETED" || state.status === "CANCELLED";

  return (
    <Card className="border-mint/60 bg-mint/15">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-black text-navy">Modo Foco</h2>
          <p className="mt-2 text-sm text-text">Uma sessão por vez, persistida mesmo ao fechar ou recarregar a tela.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {FOCUS_DURATIONS.map((duration) => (
            <SelectableButton
              key={duration}
              label={`${duration} min`}
              selected={state.durationMinutes === duration}
              onClick={() => selectDuration(duration)}
              disabled={running}
              variant="filter"
              className="text-xs"
            />
          ))}
          <label className="flex min-h-11 items-center gap-2 rounded-2xl border border-line bg-white px-3 text-xs font-bold text-navy">
            Personalizado
            <input
              className="h-9 w-16 px-2"
              type="number"
              min={1}
              max={120}
              value={customDuration}
              disabled={running}
              onChange={(event) => setCustomDuration(Number(event.target.value))}
              onBlur={() => selectDuration(customDuration)}
              aria-label="Duração personalizada em minutos"
            />
          </label>
        </div>
      </div>
      <div className="mt-5 grid place-items-center">
        <div
          className="grid h-52 w-52 place-items-center rounded-full bg-white shadow-soft dark:bg-slate-900"
          style={{ background: `conic-gradient(rgb(var(--ds-success)) ${progress * 3.6}deg, rgb(var(--ds-border)) 0deg)` }}
        >
          <div className="grid h-40 w-40 place-items-center rounded-full bg-white text-center dark:bg-slate-950">
            <div>
              <p className="text-5xl font-black text-navy" aria-live="off">{timeLabel}</p>
              <p className="text-xs font-bold uppercase text-slate-500">{state.status} · {progress}%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 grid gap-2 sm:grid-cols-4">
        <Button type="button" onClick={startOrResume} disabled={running || closed}>
          <Play className="h-4 w-4" />{state.status === "PAUSED" ? "Retomar" : "Iniciar"}
        </Button>
        <Button type="button" variant="secondary" onClick={pause} disabled={!running}>
          <Pause className="h-4 w-4" />Pausar
        </Button>
        <Button type="button" variant="secondary" onClick={restart} disabled={pending}>
          <RotateCcw className="h-4 w-4" />Reiniciar
        </Button>
        <Button type="button" variant="danger" onClick={cancel} disabled={closed || pending}>
          <Square className="h-4 w-4" />Cancelar
        </Button>
      </div>
      {message && (
        <p className="mt-3 rounded-2xl bg-white p-3 text-sm font-bold text-positive dark:bg-slate-900" role="status">
          {message}{" "}
          {state.status === "COMPLETED" && <a className="underline" href={`/app/exercicios/${suggestedExerciseSlug}`}>Abrir pausa</a>}
        </p>
      )}
    </Card>
  );
}

function statusMessage(action: string) {
  if (action === "COMPLETE") return "Sessão concluída. Agora escolha uma pausa ativa curta.";
  if (action === "CANCEL") return "Sessão cancelada sem penalidade.";
  if (action === "PAUSE") return "Sessão pausada e salva.";
  if (action === "RESUME") return "Sessão retomada.";
  if (action === "RESTART") return "Sessão reiniciada.";
  return "Sessão iniciada.";
}
