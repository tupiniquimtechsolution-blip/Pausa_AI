"use client";

import { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import { Button, Card } from "@/components/ui";

function minutesUntil(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  if (Number.isNaN(hours) || Number.isNaN(minutes)) return null;
  const now = new Date();
  const target = new Date();
  target.setHours(hours, minutes, 0, 0);
  if (target <= now) target.setDate(target.getDate() + 1);
  return target.getTime() - now.getTime();
}

export function AlarmPanel({ sleepAlarm, wakeAlarm }: { sleepAlarm?: string; wakeAlarm?: string }) {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!("Notification" in window) || Notification.permission !== "granted") return;
    const timer = window.setTimeout(() => setStatus("Notificacoes ativas neste navegador."), 0);
    return () => window.clearTimeout(timer);
  }, []);

  async function activate() {
    if (!("Notification" in window)) {
      setStatus("Este navegador nao suporta notificacoes.");
      return;
    }
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      setStatus("Não conseguimos ativar os lembretes porque a permissão de notificação está desativada. Ative em Configurações > Notificações > Pausa AI.");
      return;
    }

    const timers: Array<number> = [];
    [
      { time: sleepAlarm, title: "Hora de desacelerar", body: "Prepare seu ritual de sono sem tela." },
      { time: wakeAlarm, title: "Bom dia", body: "Comece com uma pausa leve e um check-in curto." }
    ].forEach((alarm) => {
      if (!alarm.time) return;
      const delay = minutesUntil(alarm.time);
      if (delay === null) return;
      const id = window.setTimeout(() => {
        new Notification(alarm.title, { body: alarm.body });
      }, delay);
      timers.push(id);
    });

    window.localStorage.setItem("pausa_alarm_timers", JSON.stringify(timers));
    setStatus("Alarmes configurados enquanto o app estiver aberto neste navegador.");
  }

  return (
    <Card>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="flex items-center gap-2 text-xl font-black text-navy"><Bell className="h-5 w-5 text-positive" /> Alarmes de rotina</h2>
          <p className="mt-2 text-sm text-text">Use notificacoes do navegador para lembrar de dormir e acordar. Para alarme garantido com o app fechado, use tambem o alarme nativo do celular.</p>
          <p className="mt-1 text-sm font-bold text-slate-500">Dormir: {sleepAlarm || "nao definido"} | Acordar: {wakeAlarm || "nao definido"}</p>
        </div>
        <Button type="button" onClick={activate}>Ativar neste navegador</Button>
      </div>
      {status && <p className="mt-3 text-sm font-bold text-positive">{status}</p>}
    </Card>
  );
}
