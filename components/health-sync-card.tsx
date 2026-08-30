"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { Activity, HeartPulse, Loader2, Moon, RefreshCw, Smartphone } from "lucide-react";
import { Button, Card } from "@/components/ui";
import { readNativeHealthSnapshot, type NativeHealthSnapshotPayload } from "@/lib/native-routine-bridge";

type Snapshot = {
  id?: string;
  date?: Date | string;
  steps?: number | null;
  sleepMinutes?: number | null;
  heartRateAvg?: number | null;
  source?: string | null;
};

export function HealthSyncCard({ initialSnapshot }: { initialSnapshot?: Snapshot | null }) {
  const [snapshot, setSnapshot] = useState<Snapshot | null>(initialSnapshot || null);
  const [message, setMessage] = useState(initialSnapshot ? "Ultima sincronizacao carregada." : "Conecte o APK Android ao Health Connect para importar dados reais.");
  const [pending, setPending] = useState(false);

  async function sync() {
    setPending(true);
    setMessage("Solicitando Health Connect no aparelho...");
    const nativeResult = await readNativeHealthSnapshot();
    if (!nativeResult.success || !isHealthPayload(nativeResult.payload)) {
      setPending(false);
      setMessage(nativeResult.message);
      return;
    }

    const payload = cleanSnapshotPayload(nativeResult.payload);
    const response = await fetch("/api/health/snapshot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await response.json().catch(() => ({}));
    setPending(false);
    if (!response.ok) {
      setMessage(data.error || "Nao conseguimos salvar a sincronizacao agora.");
      return;
    }
    setSnapshot(data.snapshot || payload);
    setMessage("Dados sincronizados e salvos no seu historico.");
  }

  return (
    <Card>
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div>
          <p className="flex items-center gap-2 text-sm font-bold text-slate-500">
            <Smartphone className="h-4 w-4" /> Health Connect
          </p>
          <h2 className="mt-2 text-xl font-black text-navy">Saude fisica integrada</h2>
          <p className="mt-2 text-sm text-text">{message}</p>
        </div>
        <Button type="button" onClick={sync} variant="secondary" className="shrink-0">
          {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <RefreshCw className="h-4 w-4" />}
          Sincronizar
        </Button>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <HealthMiniMetric icon={<Activity className="h-4 w-4" />} label="Passos" value={formatNumber(snapshot?.steps)} />
        <HealthMiniMetric icon={<Moon className="h-4 w-4" />} label="Sono" value={formatSleep(snapshot?.sleepMinutes)} />
        <HealthMiniMetric icon={<HeartPulse className="h-4 w-4" />} label="FC media" value={snapshot?.heartRateAvg ? `${snapshot.heartRateAvg} bpm` : "-"} />
      </div>
    </Card>
  );
}

function HealthMiniMetric({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-ice p-3">
      <p className="flex items-center gap-2 text-xs font-bold uppercase text-slate-500">{icon}{label}</p>
      <p className="mt-1 text-lg font-black text-navy">{value}</p>
    </div>
  );
}

function isHealthPayload(value: unknown): value is NativeHealthSnapshotPayload {
  if (!value || typeof value !== "object") return false;
  return "source" in value || "steps" in value || "sleepMinutes" in value || "heartRateAvg" in value;
}

function cleanSnapshotPayload(payload: NativeHealthSnapshotPayload) {
  return {
    date: payload.date,
    steps: payload.steps ?? undefined,
    sleepMinutes: payload.sleepMinutes ?? undefined,
    heartRateAvg: payload.heartRateAvg ?? undefined,
    source: payload.source || "HEALTH_CONNECT"
  };
}

function formatNumber(value?: number | null) {
  return typeof value === "number" ? value.toLocaleString("pt-BR") : "-";
}

function formatSleep(value?: number | null) {
  if (!value) return "-";
  const hours = Math.floor(value / 60);
  const minutes = value % 60;
  return `${hours}h${minutes.toString().padStart(2, "0")}`;
}
