"use client";

import { useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui";
import { exportNativeWorkout } from "@/lib/native-routine-bridge";
import { createCompletionToken } from "@/lib/completion-token";

export function YogaCompleteButton({ practiceId, checkinId, title, durationSeconds }: { practiceId: string; checkinId?: string | null; title: string; durationSeconds: number }) {
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  const completionToken = useRef(createCompletionToken());

  async function complete() {
    setPending(true);
    setMessage("");
    const response = await fetch("/api/yoga/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ practiceId, checkinId: checkinId || null, completed: true, completionToken: completionToken.current })
    });
    const data = await response.json().catch(() => ({}));
    setPending(false);
    if (response.ok) {
      void exportNativeWorkout({
        title,
        durationMinutes: Math.max(1, Math.round(durationSeconds / 60)),
        category: "YOGA",
        completedAt: new Date().toISOString()
      });
    }
    setMessage(response.ok ? data.message || "Pratica registrada." : data.error || "Nao conseguimos registrar agora.");
  }

  return (
    <div className="fixed inset-x-0 bottom-16 z-30 mx-auto max-w-4xl px-4 pb-3 lg:static lg:px-0 lg:pb-0">
      <div className="rounded-3xl border border-line bg-white/95 p-3 shadow-soft backdrop-blur dark:border-slate-800 dark:bg-slate-900/95">
        <Button type="button" className="w-full" onClick={complete}>
          <CheckCircle2 className="h-4 w-4" /> {pending ? "Registrando..." : "Concluir pratica"}
        </Button>
        {message && <p className="mt-2 text-center text-sm font-bold text-navy dark:text-slate-50">{message}</p>}
      </div>
    </div>
  );
}
