"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { Bookmark, CheckCircle2, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { createCompletionToken } from "@/lib/completion-token";

const key = "pausa-ai:favoritos";

function readFavorites() {
  if (typeof window === "undefined") return [];
  try {
    const parsed = JSON.parse(window.localStorage.getItem(key) || "[]");
    return Array.isArray(parsed) ? parsed.map(String) : [];
  } catch {
    return [];
  }
}

export function FavoriteExerciseButton({ id, label = "Salvar" }: { id: string; label?: string }) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setSaved(readFavorites().includes(id)), 0);
    return () => window.clearTimeout(timer);
  }, [id]);

  function toggle() {
    const favorites = readFavorites();
    const next = favorites.includes(id) ? favorites.filter((item) => item !== id) : [...favorites, id];
    window.localStorage.setItem(key, JSON.stringify(next));
    setSaved(next.includes(id));
  }

  return (
    <button
      type="button"
      aria-pressed={saved}
      aria-label={saved ? "Remover dos salvos" : label}
      onClick={toggle}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-bold transition",
        saved ? "border-positive bg-navy text-white shadow-soft ring-2 ring-positive/30" : "border-line bg-white text-navy hover:border-positive hover:bg-mint/30 dark:bg-slate-900"
      )}
    >
      {saved ? <CheckCircle2 className="h-4 w-4 text-mint" /> : <Bookmark className="h-4 w-4" />}
      {saved ? "Salvo" : label}
    </button>
  );
}

export function CompleteExerciseButton({ instructionId, label = "Concluir" }: { instructionId: string; label?: string }) {
  const [completed, setCompleted] = useState(false);
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();
  const completionToken = useRef(createCompletionToken());

  function complete() {
    if (completed || pending) return;
    startTransition(async () => {
      const response = await fetch("/api/exercise-instructions/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ instructionId, completionToken: completionToken.current })
      });
      const data = await response.json().catch(() => ({}));
      if (response.ok) {
        setCompleted(true);
        setMessage(data.closingMessage || "Pratica concluida.");
      } else {
        setMessage(data.error || "Nao conseguimos concluir agora.");
      }
    });
  }

  return (
    <span className="grid gap-1">
      <button
        type="button"
        aria-pressed={completed}
        aria-label={pending ? "Salvando conclusão" : completed ? "Exercício concluído" : label}
        disabled={pending || completed}
        onClick={complete}
        className={cn(
          "inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-bold transition disabled:cursor-not-allowed",
          completed
            ? "border-positive bg-navy text-white shadow-soft ring-2 ring-positive/30"
            : "border-line bg-white text-navy hover:border-positive hover:bg-mint/30 disabled:opacity-70 dark:bg-slate-900"
        )}
      >
        {completed ? <CheckCircle2 className="h-4 w-4 text-mint" /> : <Trophy className="h-4 w-4" />}
        {pending ? "Salvando..." : completed ? "Concluido" : label}
      </button>
      {message && <span className="text-center text-[11px] font-bold text-positive">{message}</span>}
    </span>
  );
}
