"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Bell, Droplets, Lock, MapPin, ShieldCheck, Volume2 } from "lucide-react";
import { Button, Card, SelectableButton } from "@/components/ui";
import { getWalkingMode, medicalWalkingNotice, walkingGoalLabels, walkingModes, walkingPrivacyLabels, type WalkingGoal, type WalkingMode, type WalkingPrivacy } from "@/lib/walking";

const goals = Object.keys(walkingGoalLabels) as WalkingGoal[];
const privacies = Object.keys(walkingPrivacyLabels) as WalkingPrivacy[];

export function WalkingConfigForm({ initialMode }: { initialMode?: string }) {
  const router = useRouter();
  const startMode = getWalkingMode(initialMode).id;
  const [mode, setMode] = useState<WalkingMode>(startMode);
  const selected = useMemo(() => getWalkingMode(mode), [mode]);
  const [goal, setGoal] = useState<WalkingGoal>(selected.defaultGoal);
  const [duration, setDuration] = useState(selected.suggestedDurationMinutes);
  const [distanceKm, setDistanceKm] = useState("");
  const [gpsEnabled, setGpsEnabled] = useState(true);
  const [timerOnly, setTimerOnly] = useState(false);
  const [audioAlerts, setAudioAlerts] = useState(false);
  const [hydrationReminder, setHydrationReminder] = useState(true);
  const [autoPauseEnabled, setAutoPauseEnabled] = useState(true);
  const [privacy, setPrivacy] = useState<WalkingPrivacy>("private");
  const [hideRouteEdges, setHideRouteEdges] = useState(true);
  const [moodBefore, setMoodBefore] = useState(3);
  const [stressBefore, setStressBefore] = useState(3);
  const [anxietyBefore, setAnxietyBefore] = useState(3);

  function selectMode(next: WalkingMode) {
    const config = getWalkingMode(next);
    setMode(next);
    setGoal(config.defaultGoal);
    setDuration(config.suggestedDurationMinutes);
  }

  function start() {
    const params = new URLSearchParams({
      walkingMode: mode,
      goal,
      durationMinutes: String(duration),
      targetDistanceMeters: String(Math.round((Number(distanceKm.replace(",", ".")) || 0) * 1000)),
      gpsEnabled: String(gpsEnabled && !timerOnly),
      timerOnly: String(timerOnly || !gpsEnabled),
      audioAlerts: String(audioAlerts),
      hydrationReminder: String(hydrationReminder),
      autoPauseEnabled: String(autoPauseEnabled),
      privacy,
      hideRouteEdges: String(hideRouteEdges),
      moodBefore: String(moodBefore),
      stressBefore: String(stressBefore),
      anxietyBefore: String(anxietyBefore)
    });
    router.push(`/app/corpo/caminhada/andamento?${params.toString()}`);
  }

  return (
    <div className="grid gap-5">
      <Card className="border-mint/60 bg-mint/20">
        <div className="flex gap-3">
          <ShieldCheck className="h-6 w-6 shrink-0 text-positive" />
          <p className="text-sm font-bold text-emerald-950">{medicalWalkingNotice}</p>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-black text-navy">Tipo de caminhada</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {walkingModes.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={mode === item.id}
              onClick={() => selectMode(item.id)}
              className={`rounded-3xl border p-4 text-left transition ${mode === item.id ? "border-positive bg-navy text-white shadow-soft ring-2 ring-positive/30" : "border-line bg-white hover:border-positive hover:bg-mint/20 dark:bg-slate-900"}`}
              style={mode === item.id ? { backgroundColor: "#172554", color: "#fff" } : undefined}
            >
              <p className={`text-lg font-black ${mode === item.id ? "text-white" : "text-navy"}`}>{item.title}</p>
              <p className={`mt-2 text-sm font-semibold ${mode === item.id ? "text-slate-200" : "text-text"}`}>{item.shortDescription}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-black">
                <span className={mode === item.id ? "rounded-full bg-white/15 px-3 py-1 text-white" : "rounded-full bg-ice px-3 py-1 text-navy"}>{item.intensity}</span>
                <span className={mode === item.id ? "rounded-full bg-white/15 px-3 py-1 text-white" : "rounded-full bg-mint/40 px-3 py-1 text-emerald-950"}>{item.suggestedDurationMinutes} min</span>
              </div>
            </button>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-black text-navy">Configurar treino</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="goal">Objetivo principal</label>
            <select id="goal" value={goal} onChange={(event) => setGoal(event.target.value as WalkingGoal)}>
              {goals.map((item) => <option key={item} value={item}>{walkingGoalLabels[item]}</option>)}
            </select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="duration">Duracao desejada (min)</label>
            <input id="duration" type="number" min={1} max={180} value={duration} onChange={(event) => setDuration(Number(event.target.value) || 1)} />
          </div>
          <div className="grid gap-2">
            <label htmlFor="distance">Distancia desejada (km, opcional)</label>
            <input id="distance" inputMode="decimal" value={distanceKm} onChange={(event) => setDistanceKm(event.target.value)} placeholder="Ex.: 1,5" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="privacy">Privacidade</label>
            <select id="privacy" value={privacy} onChange={(event) => setPrivacy(event.target.value as WalkingPrivacy)}>
              {privacies.map((item) => <option key={item} value={item}>{walkingPrivacyLabels[item]}</option>)}
            </select>
          </div>
        </div>

        <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <SelectableButton label="GPS ligado" selected={gpsEnabled && !timerOnly} onClick={() => { setGpsEnabled(true); setTimerOnly(false); }} icon={<MapPin className="h-4 w-4" />} />
          <SelectableButton label="Temporizador" selected={timerOnly || !gpsEnabled} onClick={() => { setTimerOnly(true); setGpsEnabled(false); }} icon={<Bell className="h-4 w-4" />} />
          <SelectableButton label="Pausa automatica" selected={autoPauseEnabled} onClick={() => setAutoPauseEnabled((value) => !value)} icon={<ShieldCheck className="h-4 w-4" />} />
          <SelectableButton label="Audio" selected={audioAlerts} onClick={() => setAudioAlerts((value) => !value)} icon={<Volume2 className="h-4 w-4" />} />
          <SelectableButton label="Hidratacao" selected={hydrationReminder} onClick={() => setHydrationReminder((value) => !value)} icon={<Droplets className="h-4 w-4" />} />
          <SelectableButton label="Ocultar bordas" selected={hideRouteEdges} onClick={() => setHideRouteEdges((value) => !value)} icon={<Lock className="h-4 w-4" />} />
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-black text-navy">Como voce esta antes?</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Scale label="Humor" value={moodBefore} onChange={setMoodBefore} />
          <Scale label="Estresse" value={stressBefore} onChange={setStressBefore} />
          <Scale label="Ansiedade" value={anxietyBefore} onChange={setAnxietyBefore} />
        </div>
      </Card>

      <Button type="button" onClick={start} className="w-full">Iniciar caminhada</Button>
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
