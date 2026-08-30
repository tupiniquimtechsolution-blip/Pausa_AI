"use client";

import { useEffect, useMemo, useState } from "react";
import { Button, SelectableButton } from "@/components/ui";

const phases = [
  { label: "Inspirar", seconds: 4, scale: 1.18, color: "#10B981" },
  { label: "Segurar", seconds: 4, scale: 1.18, color: "#8B5CF6" },
  { label: "Expirar", seconds: 6, scale: 0.72, color: "#38BDF8" }
];

function playTone() {
  if (typeof window === "undefined") return;
  const AudioContextClass = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return;
  const context = new AudioContextClass();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.frequency.value = 432;
  gain.gain.value = 0.04;
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.12);
}

export function BreathingVisual({
  onComplete,
  enableSound = false
}: {
  onComplete?: () => void;
  enableSound?: boolean;
}) {
  const [cycles, setCycles] = useState(3);
  const [stepIndex, setStepIndex] = useState(0);
  const [seconds, setSeconds] = useState(phases[0].seconds);
  const [running, setRunning] = useState(false);
  const phase = phases[stepIndex % phases.length];
  const cycle = Math.min(cycles, Math.floor(stepIndex / phases.length) + 1);
  const reducedMotion = useMemo(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, []);

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => {
      setSeconds((value) => {
        if (value > 1) return value - 1;
        const next = stepIndex + 1;
        if (enableSound) playTone();
        if (next >= cycles * phases.length) {
          setRunning(false);
          onComplete?.();
          return 0;
        }
        setStepIndex(next);
        return phases[next % phases.length].seconds;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [cycles, enableSound, onComplete, running, stepIndex]);

  function selectCycles(nextCycles: number) {
    setCycles(nextCycles);
    setStepIndex(0);
    setSeconds(phases[0].seconds);
    setRunning(false);
  }

  return (
    <div className="grid place-items-center gap-4">
      <div className="flex flex-wrap justify-center gap-2">
        {[3, 5, 8].map((item) => (
          <SelectableButton key={item} label={`${item} ciclos`} selected={cycles === item} onClick={() => selectCycles(item)} variant="filter" className="text-xs" />
        ))}
      </div>
      <div className="relative grid h-64 w-64 place-items-center">
        <div
          className="absolute h-44 w-44 rounded-full opacity-25 blur-xl"
          style={{ backgroundColor: phase.color, transform: reducedMotion ? undefined : `scale(${phase.scale})`, transition: reducedMotion ? "none" : `transform ${phase.seconds}s ease-in-out, background-color 450ms ease` }}
        />
        <div
          className="relative grid h-44 w-44 place-items-center rounded-full border-8 bg-white text-center shadow-soft dark:bg-slate-950"
          style={{ borderColor: phase.color, transform: reducedMotion ? undefined : `scale(${phase.scale})`, transition: reducedMotion ? "none" : `transform ${phase.seconds}s ease-in-out, border-color 450ms ease` }}
        >
          <div>
            <p className="text-sm font-black uppercase text-slate-500">{phase.label}</p>
            <p className="mt-1 text-6xl font-black" style={{ color: phase.color }}>{seconds}</p>
            <p className="mt-1 text-xs font-bold text-slate-500">Ciclo {cycle} de {cycles}</p>
          </div>
        </div>
      </div>
      <div className="grid w-full gap-2 sm:grid-cols-3">
        {phases.map((item, index) => (
          <div key={item.label} className={`rounded-2xl border p-3 text-center text-sm ${stepIndex % phases.length === index ? "border-transparent text-white shadow-soft" : "border-line bg-white text-navy dark:bg-slate-900 dark:text-slate-50"}`} style={stepIndex % phases.length === index ? { backgroundColor: item.color } : undefined}>
            <p className="font-black">{item.label}</p>
            <p className="text-xs font-bold opacity-80">{item.seconds}s</p>
          </div>
        ))}
      </div>
      <div className="grid w-full gap-2 sm:grid-cols-3">
        <Button type="button" onClick={() => setRunning(true)}>Iniciar</Button>
        <Button type="button" variant="secondary" onClick={() => setRunning(false)}>Pausar</Button>
        <Button type="button" variant="secondary" onClick={() => { setRunning(false); setStepIndex(0); setSeconds(phases[0].seconds); }}>Reiniciar</Button>
      </div>
    </div>
  );
}
