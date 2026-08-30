"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Bookmark, CheckCircle2, Share2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui";
import { formatDistance, formatDuration, getWalkingMode, type RoutePoint, type WalkingMode } from "@/lib/walking";

export function WalkingGoalForm({
  period,
  targetDistanceMeters = 0,
  targetDurationSeconds = 0,
  targetSessions = 0
}: {
  period: "weekly" | "monthly";
  targetDistanceMeters?: number;
  targetDurationSeconds?: number;
  targetSessions?: number;
}) {
  const router = useRouter();
  const [distanceKm, setDistanceKm] = useState(String(targetDistanceMeters ? targetDistanceMeters / 1000 : period === "weekly" ? 3 : 12));
  const [minutes, setMinutes] = useState(String(targetDurationSeconds ? Math.round(targetDurationSeconds / 60) : period === "weekly" ? 60 : 240));
  const [sessions, setSessions] = useState(String(targetSessions || (period === "weekly" ? 3 : 10)));
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();

  function save() {
    setMessage("");
    startTransition(async () => {
      const response = await fetch("/api/walking/goals", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          period,
          targetDistanceMeters: Math.max(0, Number(distanceKm.replace(",", ".")) || 0) * 1000,
          targetDurationSeconds: Math.max(0, Number(minutes) || 0) * 60,
          targetSessions: Math.max(0, Number(sessions) || 0),
          active: true
        })
      });
      const data = await response.json().catch(() => ({}));
      setMessage(response.ok ? data.message || "Meta salva." : data.error || "Nao conseguimos salvar a meta.");
      if (response.ok) router.refresh();
    });
  }

  return (
    <div className="grid gap-3 rounded-2xl bg-ice p-4 dark:bg-slate-950">
      <p className="font-black text-navy">{period === "weekly" ? "Meta semanal" : "Meta mensal"}</p>
      <div className="grid gap-2 sm:grid-cols-3">
        <label className="grid gap-1 text-xs">
          Km
          <input value={distanceKm} onChange={(event) => setDistanceKm(event.target.value)} inputMode="decimal" />
        </label>
        <label className="grid gap-1 text-xs">
          Minutos
          <input value={minutes} onChange={(event) => setMinutes(event.target.value)} inputMode="numeric" />
        </label>
        <label className="grid gap-1 text-xs">
          Sessoes
          <input value={sessions} onChange={(event) => setSessions(event.target.value)} inputMode="numeric" />
        </label>
      </div>
      <Button type="button" onClick={save} variant="secondary">{pending ? "Salvando..." : "Salvar meta"}</Button>
      {message && <p className="text-center text-xs font-bold text-positive">{message}</p>}
    </div>
  );
}

export function WalkingDeleteButton({ id }: { id: string }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState("");

  function remove() {
    startTransition(async () => {
      const response = await fetch(`/api/walking/sessions/${id}`, { method: "DELETE" });
      const data = await response.json().catch(() => ({}));
      if (response.ok) router.refresh();
      else setMessage(data.error || "Nao conseguimos excluir agora.");
    });
  }

  return (
    <div className="grid gap-1">
      <Button type="button" variant="secondary" onClick={remove}><Trash2 className="h-4 w-4" />{pending ? "Excluindo..." : "Excluir"}</Button>
      {message && <p className="text-xs font-bold text-amber-700">{message}</p>}
    </div>
  );
}

export function WalkingFavoriteRouteButton({ title, walkingMode, distanceMeters, routePoints, privacy, hideRouteEdges }: { title: string; walkingMode: WalkingMode; distanceMeters: number; routePoints: RoutePoint[]; privacy: string; hideRouteEdges: boolean }) {
  const [saved, setSaved] = useState(false);
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();

  function save() {
    startTransition(async () => {
      const response = await fetch("/api/walking/favorite-routes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, walkingMode, distanceMeters, routePoints, privacy, hideRouteEdges })
      });
      const data = await response.json().catch(() => ({}));
      setSaved(response.ok);
      setMessage(response.ok ? data.message || "Rota favorita salva." : data.error || "Nao conseguimos salvar a rota.");
    });
  }

  if (routePoints.length < 2) return null;
  return (
    <div className="grid gap-1">
      <Button type="button" variant={saved ? "secondary" : "primary"} onClick={save}>
        {saved ? <CheckCircle2 className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
        {pending ? "Salvando..." : saved ? "Rota salva" : "Salvar rota"}
      </Button>
      {message && <p className="text-center text-xs font-bold text-positive">{message}</p>}
    </div>
  );
}

export function WalkingShareButton({ mode, distanceMeters, durationSeconds }: { mode: string; distanceMeters: number; durationSeconds: number }) {
  const [message, setMessage] = useState("");
  const text = `Caminhada no Pausa AI: ${getWalkingMode(mode).title}, ${formatDistance(distanceMeters)}, ${formatDuration(durationSeconds)}. Voce se movimentou hoje. Isso ja conta.`;

  async function share() {
    const nav = typeof window !== "undefined"
      ? window.navigator as Navigator & { share?: (data: { title: string; text: string }) => Promise<void>; clipboard?: { writeText: (value: string) => Promise<void> } }
      : null;
    if (nav?.share) {
      await nav.share({ title: "Pausa AI", text }).catch(() => undefined);
      return;
    }
    await nav?.clipboard?.writeText(text).catch(() => undefined);
    setMessage("Resumo copiado sem localizacao.");
  }

  return (
    <div className="grid gap-1">
      <Button type="button" variant="secondary" onClick={share}><Share2 className="h-4 w-4" />Compartilhar resumo</Button>
      {message && <p className="text-center text-xs font-bold text-positive">{message}</p>}
    </div>
  );
}
