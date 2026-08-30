"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button, Card } from "@/components/ui";

type ActivityType = "WALK" | "RUN" | "FREE_EXERCISE" | "PAUSA_SESSION";
type RunnerStatus = "IDLE" | "ACTIVE" | "PAUSED" | "COMPLETED" | "OFFLINE";
type OfflinePoint = {
  latitude: number;
  longitude: number;
  capturedAt: string;
  accuracyMeters: number | null;
  altitudeMeters: number | null;
};

const offlineKey = "pausa_activity_offline_v1";

export function PausaActivityRunner() {
  const router = useRouter();
  const [activityType, setActivityType] = useState<ActivityType>("WALK");
  const [status, setStatus] = useState<RunnerStatus>("IDLE");
  const [activityId, setActivityId] = useState<string | null>(null);
  const [clientActivityId, setClientActivityId] = useState<string | null>(null);
  const [startedAt, setStartedAt] = useState<string | null>(null);
  const [elapsed, setElapsed] = useState(0);
  const [pointCount, setPointCount] = useState(0);
  const [message, setMessage] = useState("O GPS é opcional. A atividade funciona só com o cronômetro.");
  const [pending, startTransition] = useTransition();
  const watchId = useRef<number | null>(null);
  const offlinePoints = useRef<OfflinePoint[]>([]);

  useEffect(() => {
    if (!startedAt || (status !== "ACTIVE" && status !== "OFFLINE")) return;
    const interval = window.setInterval(() => setElapsed(Math.max(0, Math.floor((Date.now() - new Date(startedAt).getTime()) / 1000))), 1000);
    return () => window.clearInterval(interval);
  }, [startedAt, status]);

  useEffect(() => {
    if ((status !== "ACTIVE" && status !== "OFFLINE") || !navigator.geolocation) return;
    watchId.current = navigator.geolocation.watchPosition(
      (position) => {
        const point: OfflinePoint = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          capturedAt: new Date(position.timestamp).toISOString(),
          accuracyMeters: position.coords.accuracy,
          altitudeMeters: position.coords.altitude
        };
        offlinePoints.current.push(point);
        setPointCount((current) => current + 1);
        if (activityId && status === "ACTIVE") {
          void fetch(`/api/activities/${activityId}/points`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ points: [point] })
          }).catch(() => setMessage("Sem rede: os pontos continuarão guardados temporariamente."));
        }
      },
      () => setMessage("GPS indisponível. O cronômetro continua funcionando normalmente."),
      { enableHighAccuracy: true, maximumAge: 5_000, timeout: 15_000 }
    );
    return () => {
      if (watchId.current !== null) navigator.geolocation.clearWatch(watchId.current);
      watchId.current = null;
    };
  }, [activityId, status]);

  function start() {
    startTransition(async () => {
      const clientId = crypto.randomUUID();
      const timestamp = new Date().toISOString();
      setClientActivityId(clientId);
      setStartedAt(timestamp);
      offlinePoints.current = [];
      setPointCount(0);
      try {
        const response = await fetch("/api/activities", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ activityType, clientActivityId: clientId, privacy: "PRIVATE", hideRouteEdges: true })
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error);
        setActivityId(data.activity.id);
        setStatus("ACTIVE");
        setMessage("Atividade iniciada. Início e fim da rota ficam ocultos por padrão.");
      } catch {
        setStatus("OFFLINE");
        setMessage("Atividade iniciada offline. Ela será sincronizada quando houver conexão.");
      }
    });
  }

  function transition(action: "PAUSE" | "RESUME") {
    if (status === "OFFLINE") {
      setMessage("No modo offline, finalize a atividade para sincronizar o registro completo.");
      return;
    }
    if (!activityId) return;
    startTransition(async () => {
      const response = await fetch(`/api/activities/${activityId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action })
      });
      if (!response.ok) return setMessage("Não foi possível alterar a atividade.");
      setStatus(action === "PAUSE" ? "PAUSED" : "ACTIVE");
      setMessage(action === "PAUSE" ? "Atividade pausada." : "Atividade retomada.");
    });
  }

  function finish() {
    if (!startedAt || !clientActivityId) return;
    startTransition(async () => {
      const endedAt = new Date().toISOString();
      if (status === "OFFLINE" || !activityId) {
        const record = {
          clientActivityId,
          activityType,
          startedAt,
          endedAt,
          privacy: "PRIVATE",
          hideRouteEdges: true,
          points: offlinePoints.current
        };
        const current = JSON.parse(localStorage.getItem(offlineKey) || "[]") as unknown[];
        localStorage.setItem(offlineKey, JSON.stringify([...current, record]));
        try {
          const response = await fetch("/api/activities/sync", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ activities: [record] })
          });
          if (response.ok) localStorage.setItem(offlineKey, "[]");
        } catch {
          // O lote permanece no armazenamento local para uma tentativa futura.
        }
      } else {
        await fetch(`/api/activities/${activityId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "FINISH", occurredAt: endedAt })
        });
      }
      setStatus("COMPLETED");
      setMessage("Atividade finalizada e adicionada ao seu histórico.");
      router.refresh();
    });
  }

  return (
    <Card className="grid gap-4">
      <div>
        <p className="text-xs font-black uppercase tracking-wide text-positive">Pausa Activity</p>
        <h2 className="mt-1 text-2xl font-black text-navy">Registrar atividade</h2>
        <p className="mt-2 text-sm text-text">{message}</p>
      </div>
      {status === "IDLE" || status === "COMPLETED" ? (
        <>
          <label className="grid gap-2 text-sm font-bold text-navy">
            Tipo
            <select value={activityType} onChange={(event) => setActivityType(event.target.value as ActivityType)}>
              <option value="WALK">Caminhada</option>
              <option value="RUN">Corrida</option>
              <option value="FREE_EXERCISE">Exercício livre</option>
              <option value="PAUSA_SESSION">Sessão Pausa AI</option>
            </select>
          </label>
          <Button onClick={start} loading={pending} loadingLabel="Iniciando...">Iniciar</Button>
        </>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-ice p-4">
              <p className="text-xs font-black uppercase text-slate-500">Tempo total</p>
              <p className="mt-1 text-2xl font-black text-navy">{Math.floor(elapsed / 60)}:{String(elapsed % 60).padStart(2, "0")}</p>
            </div>
            <div className="rounded-2xl bg-ice p-4">
              <p className="text-xs font-black uppercase text-slate-500">Pontos GPS</p>
              <p className="mt-1 text-2xl font-black text-navy">{pointCount}</p>
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {status === "ACTIVE" && <Button variant="secondary" onClick={() => transition("PAUSE")} disabled={pending}>Pausar</Button>}
            {status === "PAUSED" && <Button variant="secondary" onClick={() => transition("RESUME")} disabled={pending}>Retomar</Button>}
            <Button onClick={finish} disabled={pending}>Finalizar</Button>
          </div>
        </>
      )}
    </Card>
  );
}
