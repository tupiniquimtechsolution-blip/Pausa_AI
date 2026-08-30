"use client";

import { useEffect, useMemo, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Footprints, Pause, Play, RotateCcw, Save, ShieldCheck, Square } from "lucide-react";
import { Button, Card } from "@/components/ui";
import { WalkingRouteMap } from "@/components/walking-route-map";
import { exportNativeWorkout } from "@/lib/native-routine-bridge";
import {
  averageSpeedKmh,
  calculateRouteDistanceMeters,
  estimateWalkingCalories,
  formatDistance,
  formatDuration,
  formatSpeed,
  getWalkingMode,
  paceString,
  shouldAutoPause,
  type RoutePoint,
  type WalkingGoal,
  type WalkingMode,
  type WalkingPrivacy
} from "@/lib/walking";
import { createCompletionToken } from "@/lib/completion-token";

export type WalkingStartConfig = {
  walkingMode: WalkingMode;
  goal: WalkingGoal;
  durationMinutes: number;
  targetDistanceMeters: number;
  gpsEnabled: boolean;
  timerOnly: boolean;
  audioAlerts: boolean;
  hydrationReminder: boolean;
  autoPauseEnabled: boolean;
  privacy: WalkingPrivacy;
  hideRouteEdges: boolean;
  moodBefore?: number | null;
  stressBefore?: number | null;
  anxietyBefore?: number | null;
};

export function WalkingSessionRunner({ config }: { config: WalkingStartConfig }) {
  const router = useRouter();
  const mode = getWalkingMode(config.walkingMode);
  const targetSeconds = Math.max(60, config.durationMinutes * 60);
  const [startedAt, setStartedAt] = useState<Date | null>(null);
  const [seconds, setSeconds] = useState(0);
  const [movingSeconds, setMovingSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);
  const [finished, setFinished] = useState(false);
  const [gpsActive, setGpsActive] = useState(config.gpsEnabled && !config.timerOnly);
  const [timerOnly, setTimerOnly] = useState(config.timerOnly || !config.gpsEnabled);
  const [routePoints, setRoutePoints] = useState<RoutePoint[]>([]);
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const [, setLowSpeedSeconds] = useState(0);
  const [status, setStatus] = useState(config.gpsEnabled ? "GPS sera solicitado ao iniciar." : "Modo temporizador pronto.");
  const [manualDistanceKm, setManualDistanceKm] = useState("");
  const [moodAfter, setMoodAfter] = useState(config.moodBefore || 3);
  const [stressAfter, setStressAfter] = useState(config.stressBefore || 3);
  const [anxietyAfter, setAnxietyAfter] = useState(config.anxietyBefore || 3);
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();
  const completionToken = useRef(createCompletionToken());

  const routeDistance = useMemo(() => calculateRouteDistanceMeters(routePoints), [routePoints]);
  const manualDistanceMeters = Math.max(0, Number(manualDistanceKm.replace(",", ".")) || 0) * 1000;
  const displayDistance = gpsActive && routeDistance > 0 ? routeDistance : manualDistanceMeters;
  const speed = gpsActive ? currentSpeed : averageSpeedKmh(displayDistance, Math.max(1, movingSeconds));
  const averageSpeed = averageSpeedKmh(displayDistance, Math.max(1, movingSeconds));
  const pace = paceString(Math.max(1, movingSeconds), displayDistance);
  const calories = estimateWalkingCalories({ durationSeconds: Math.max(1, movingSeconds), speedKmh: averageSpeed, intensity: mode.intensity });
  const cue = mode.guide[Math.min(mode.guide.length - 1, Math.floor((movingSeconds / Math.max(1, targetSeconds)) * mode.guide.length))] || mode.guide[0];

  useEffect(() => {
    if (!running || finished) return;
    const timer = window.setInterval(() => {
      setSeconds((value) => value + 1);
      if (!paused) {
        setMovingSeconds((value) => value + 1);
        if (gpsActive) {
          setLowSpeedSeconds((value) => {
            const next = currentSpeed < 0.5 ? value + 1 : 0;
            if (config.autoPauseEnabled && shouldAutoPause({ speedKmh: currentSpeed, lowSpeedSeconds: next })) {
              setPaused(true);
              setStatus("Pausa automatica ativada por baixa velocidade. Retome quando estiver pronto.");
            }
            return next;
          });
        }
      }
    }, 1000);
    return () => window.clearInterval(timer);
  }, [config.autoPauseEnabled, currentSpeed, finished, gpsActive, paused, running]);

  useEffect(() => {
    if (!running || paused || !gpsActive || finished) return;
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      const timer = window.setTimeout(() => {
        setGpsActive(false);
        setTimerOnly(true);
        setStatus("GPS indisponivel neste ambiente. O modo temporizador continua funcionando.");
      }, 0);
      return () => window.clearTimeout(timer);
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const timestamp = new Date(position.timestamp || Date.now()).toISOString();
        setStatus("GPS ativo. Sua rota fica privada conforme a configuracao escolhida.");
        setRoutePoints((current) => {
          const last = current[current.length - 1];
          let pointSpeed = position.coords.speed && position.coords.speed > 0 ? position.coords.speed * 3.6 : 0;
          if (!pointSpeed && last) {
            const previousTime = new Date(last.timestamp).getTime();
            const deltaSeconds = Math.max(1, (new Date(timestamp).getTime() - previousTime) / 1000);
            pointSpeed = averageSpeedKmh(calculateRouteDistanceMeters([last, { lat: position.coords.latitude, lng: position.coords.longitude, timestamp }]), deltaSeconds);
          }
          const nextPoint: RoutePoint = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            timestamp,
            speedKmh: pointSpeed,
            accuracy: position.coords.accuracy
          };
          setCurrentSpeed(pointSpeed);
          return [...current, nextPoint].slice(-3000);
        });
      },
      (gpsError) => {
        setGpsActive(false);
        setTimerOnly(true);
        setStatus(gpsError.code === gpsError.PERMISSION_DENIED ? "Localizacao negada. Oferecemos o modo temporizador para continuar." : "GPS instavel agora. O modo temporizador continua funcionando.");
      },
      { enableHighAccuracy: true, maximumAge: 5000, timeout: 10000 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [finished, gpsActive, paused, running]);

  function reset() {
    setStartedAt(null);
    setSeconds(0);
    setMovingSeconds(0);
    setRunning(false);
    setPaused(false);
    setFinished(false);
    setRoutePoints([]);
    setCurrentSpeed(0);
    setLowSpeedSeconds(0);
    setManualDistanceKm("");
    setStatus(config.gpsEnabled ? "GPS sera solicitado ao iniciar." : "Modo temporizador pronto.");
    completionToken.current = createCompletionToken();
  }

  function save() {
    setError("");
    const endedAt = new Date();
    const startTime = startedAt || new Date(endedAt.getTime() - Math.max(1, seconds) * 1000);
    const distanceMeters = gpsActive && routeDistance > 0 ? routeDistance : manualDistanceMeters;
    startTransition(async () => {
      const response = await fetch("/api/walking/sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          walkingMode: config.walkingMode,
          goal: config.goal,
          startedAt: startTime.toISOString(),
          endedAt: endedAt.toISOString(),
          durationSeconds: Math.max(1, seconds),
          movingTimeSeconds: Math.max(0, movingSeconds),
          distanceMeters,
          averagePace: pace,
          averageSpeedKmh: averageSpeed,
          caloriesEstimated: calories,
          gpsEnabled: gpsActive,
          timerOnly,
          routePoints: gpsActive ? routePoints : [],
          privacy: config.privacy,
          hideRouteEdges: config.hideRouteEdges,
          moodBefore: config.moodBefore,
          moodAfter,
          stressBefore: config.stressBefore,
          stressAfter,
          anxietyBefore: config.anxietyBefore,
          anxietyAfter,
          notes,
          completed: true,
          completionToken: completionToken.current
        })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(data.error || "Nao conseguimos salvar a caminhada agora.");
        return;
      }
      void exportNativeWorkout({
        title: mode.title,
        notes: notes || "Caminhada concluida no Pausa AI.",
        startedAt: startTime.toISOString(),
        completedAt: endedAt.toISOString(),
        durationMinutes: Math.max(1, Math.round(seconds / 60)),
        category: "MOVEMENT"
      });
      router.push(`/app/corpo/caminhada/resumo?session=${data.sessionId}`);
    });
  }

  return (
    <div className="grid gap-5">
      <Card className="border-mint/60 bg-mint/20">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-black uppercase text-slate-500">Caminhada em andamento</p>
            <h1 className="mt-2 text-3xl font-black text-navy">{mode.title}</h1>
            <p className="mt-2 text-sm font-semibold text-text">{cue}</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-navy dark:bg-slate-900">
            <ShieldCheck className="h-4 w-4 text-positive" /> {config.privacy === "private" ? "Privada" : "Visibilidade salva"}
          </span>
        </div>
      </Card>

      <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
        <div className="grid gap-5">
          <WalkingRouteMap points={routePoints} hideRouteEdges={config.hideRouteEdges} className="min-h-[280px]" />
          <Card>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              <Metric label="Distancia" value={formatDistance(displayDistance)} />
              <Metric label="Tempo total" value={formatDuration(seconds)} />
              <Metric label="Em movimento" value={formatDuration(movingSeconds)} />
              <Metric label="Ritmo medio" value={pace} />
              <Metric label="Velocidade" value={formatSpeed(speed)} />
            </div>
            <p className="mt-4 rounded-2xl bg-ice p-3 text-sm font-bold text-text">{status}</p>
            {config.hydrationReminder && movingSeconds > 0 && movingSeconds % 600 === 0 && (
              <p className="mt-3 rounded-2xl bg-mint/40 p-3 text-sm font-bold text-emerald-950">Pausa breve para agua, se fizer sentido para voce.</p>
            )}
          </Card>
        </div>

        <aside className="grid content-start gap-5">
          <Card>
            <p className="text-sm font-black uppercase text-slate-500">Controles</p>
            <div className="mt-4 grid gap-2">
              <Button type="button" onClick={() => { setStartedAt((value) => value || new Date()); setRunning(true); setPaused(false); }}><Play className="h-4 w-4" />Iniciar / Retomar</Button>
              <Button type="button" variant="secondary" onClick={() => setPaused(true)}><Pause className="h-4 w-4" />Pausar</Button>
              <Button type="button" variant="secondary" onClick={reset}><RotateCcw className="h-4 w-4" />Reiniciar</Button>
              <Button type="button" variant="danger" onClick={() => { setRunning(false); setPaused(true); setFinished(true); }}><Square className="h-4 w-4" />Finalizar</Button>
            </div>
          </Card>

          <Card>
            <p className="text-sm font-black uppercase text-slate-500">Resumo ao vivo</p>
            <div className="mt-3 grid gap-2 text-sm font-semibold text-text">
              <p>Meta: {config.durationMinutes} min {config.targetDistanceMeters ? `- ${formatDistance(config.targetDistanceMeters)}` : ""}</p>
              <p>Calorias estimadas: {calories} kcal</p>
              <p>Velocidade media: {formatSpeed(averageSpeed)}</p>
              <p>Status: {paused ? "Pausada" : running ? "Em movimento" : "Pronta"}</p>
            </div>
          </Card>
        </aside>
      </div>

      {finished && (
        <Card className="border-positive/50">
          <div className="flex items-start gap-3">
            <Footprints className="h-6 w-6 shrink-0 text-positive" />
            <div>
              <h2 className="text-2xl font-black text-navy">Salvar caminhada</h2>
              <p className="mt-1 text-sm text-text">Voce se movimentou hoje. Isso ja conta.</p>
            </div>
          </div>
          {!gpsActive && (
            <div className="mt-4 grid gap-2">
              <label htmlFor="manualDistance">Distancia manual em km (opcional)</label>
              <input id="manualDistance" inputMode="decimal" value={manualDistanceKm} onChange={(event) => setManualDistanceKm(event.target.value)} placeholder="Ex.: 0,8" />
            </div>
          )}
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <Scale label="Humor depois" value={moodAfter} onChange={setMoodAfter} />
            <Scale label="Estresse depois" value={stressAfter} onChange={setStressAfter} />
            <Scale label="Ansiedade depois" value={anxietyAfter} onChange={setAnxietyAfter} />
          </div>
          <div className="mt-4 grid gap-2">
            <label htmlFor="notes">Observacoes</label>
            <textarea id="notes" rows={4} value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Opcional. Como seu corpo respondeu?" />
          </div>
          {error && <p className="mt-3 rounded-2xl bg-amber/10 p-3 text-sm font-bold text-amber-800">{error}</p>}
          <Button type="button" onClick={save} className="mt-4 w-full"><Save className="h-4 w-4" />{pending ? "Salvando..." : "Salvar caminhada"}</Button>
        </Card>
      )}
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-ice p-3 text-center dark:bg-slate-950">
      <p className="text-xs font-black uppercase text-slate-500">{label}</p>
      <p className="mt-1 text-lg font-black text-navy">{value}</p>
    </div>
  );
}

function Scale({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) {
  return (
    <div className="grid gap-2">
      <label>{label}</label>
      <div className="grid grid-cols-5 gap-1">
        {[1, 2, 3, 4, 5].map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={value === item}
            onClick={() => onChange(item)}
            className={`min-h-11 rounded-xl text-sm font-black transition ${value === item ? "bg-navy text-white ring-2 ring-positive/30" : "bg-ice text-navy ring-1 ring-line hover:bg-mint/30"}`}
            style={value === item ? { backgroundColor: "#172554", color: "#fff" } : undefined}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
