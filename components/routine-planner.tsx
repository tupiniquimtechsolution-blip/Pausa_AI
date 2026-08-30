"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { AlarmClock, Bell, CalendarDays, CheckCircle2, Moon, Plus, Settings, Smartphone, Sunrise, Trash2 } from "lucide-react";
import { AlertBanner, Badge, Button, Card } from "@/components/ui";
import { CenteredToast } from "@/components/centered-toast";
import { createNativeCalendarEvent, openNativeClock, requestNotificationPermission, scheduleNativeReminders } from "@/lib/native-routine-bridge";
import { openAppSettings, openBedtimeModeSettings, openDigitalWellbeingSettings, openFocusModeSettings, openNotificationSettings, openScreenTimeSettings } from "@/lib/social-free-mode-integration";

type Reminder = {
  id: string;
  title: string;
  description: string | null;
  category: string;
  time: string;
  enabled: boolean;
  note: string | null;
  reminderType: string;
  repeatRule: string;
  snoozeEnabled: boolean;
  snoozeMinutesOptions: string;
  status: string;
  nativeNotificationId: string | null;
};

type Task = {
  id: string;
  title: string;
  category: string;
  notes: string | null;
  dueDate: string | null;
  dueTime: string | null;
  dueAt: string | null;
  calendarEventId: string | null;
  notificationId: string | null;
  status: string;
  priority: string;
  completed: boolean;
};

type Downtime = {
  enabled: boolean;
  startTime: string;
  endTime: string;
  apps: string[];
  note: string | null;
} | null;

type ProfileRoutine = {
  sleepAlarm: string;
  wakeAlarm: string;
  preferredTime: string;
};

type NativeReminderPayload = {
  id?: string;
  title: string;
  body: string;
  time: string;
  category: string;
  reminderType?: string;
  snoozeEnabled?: boolean;
  snoozeMinutesOptions?: number[];
};

const categories = [
  ["CHECKIN", "Check-in"],
  ["PAUSE", "Pausa"],
  ["SLEEP", "Dormir"],
  ["WAKE", "Acordar"],
  ["TASK", "Tarefa"],
  ["SOCIAL_DOWNTIME", "Sem redes"]
];

const taskCategories = ["ROTINA", "SONO", "FOCO", "PAUSA", "TELAS", "MOVIMENTO"];
const socialApps = ["Instagram", "TikTok", "YouTube", "X", "Facebook", "Threads", "WhatsApp", "Reddit"];
const routineSuccessMessage = "Rotina ativada com sucesso. Você receberá lembretes nos horários configurados.";
const notificationDeniedMessage = "Não conseguimos ativar os lembretes porque a permissão de notificação está desativada. Ative em Configurações > Notificações > Pausa AI.";

function labelFor(category: string) {
  return categories.find(([value]) => value === category)?.[1] || category;
}

function safeTime(value: string | null | undefined, fallback: string) {
  return value && /^\d{2}:\d{2}$/.test(value) ? value : fallback;
}

function minutesUntil(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  const now = new Date();
  const target = new Date();
  target.setHours(hours, minutes, 0, 0);
  if (target <= now) target.setDate(target.getDate() + 1);
  return target.getTime() - now.getTime();
}

export function RoutinePlanner({
  profile,
  reminders,
  tasks,
  downtime
}: {
  profile: ProfileRoutine;
  reminders: Reminder[];
  tasks: Task[];
  downtime: Downtime;
}) {
  const router = useRouter();
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [toast, setToast] = useState<{ message: string; type: "success" | "warning" | "error" | "info" }>({ message: "", type: "info" });
  const [showNotificationHelp, setShowNotificationHelp] = useState(false);
  const [pending, startTransition] = useTransition();
  const [selectedApps, setSelectedApps] = useState<string[]>(downtime?.apps?.length ? downtime.apps : ["Instagram", "TikTok", "YouTube", "X"]);
  const [downtimeEnabled, setDowntimeEnabled] = useState(Boolean(downtime?.enabled));

  const routinePayload = useMemo(() => {
    const activeReminders: NativeReminderPayload[] = reminders.filter((item) => item.enabled).map((item) => ({
      id: item.id,
      title: item.title,
      body: item.note || item.description || bodyForReminder(item.category),
      time: item.time,
      category: item.category,
      reminderType: item.reminderType,
      snoozeEnabled: item.snoozeEnabled,
      snoozeMinutesOptions: parseSnooze(item.snoozeMinutesOptions)
    }));
    if (profile.sleepAlarm) activeReminders.push({ title: "Hora de desacelerar", body: "Prepare sua transicao para dormir com menos tela.", time: profile.sleepAlarm, category: "SLEEP" });
    if (profile.wakeAlarm) activeReminders.push({ title: "Bom dia", body: "Comece com uma pausa curta e um check-in leve.", time: profile.wakeAlarm, category: "WAKE" });
    if (downtimeEnabled && downtime) {
      activeReminders.push({ title: "Modo sem redes", body: `Hora de reduzir ${selectedApps.slice(0, 3).join(", ")} e proteger sua atencao.`, time: downtime.startTime, category: "SOCIAL_DOWNTIME" });
      activeReminders.push({ title: "Fim do modo sem redes", body: "Voce pode retomar o uso com intencao, se fizer sentido.", time: downtime.endTime, category: "SOCIAL_DOWNTIME" });
    }
    return activeReminders;
  }, [reminders, profile.sleepAlarm, profile.wakeAlarm, downtime, downtimeEnabled, selectedApps]);

  function runMutation(action: () => Promise<Response>, success: string) {
    setError("");
    setStatus("");
    startTransition(async () => {
      const response = await action();
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(data.error || "Nao conseguimos salvar agora.");
        setToast({ message: data.error || "Nao conseguimos salvar agora.", type: "error" });
        return;
      }
      setStatus(success);
      setToast({ message: success, type: "success" });
      router.refresh();
    });
  }

  function addReminder(formData: FormData) {
    const payload = Object.fromEntries(formData.entries());
    runMutation(() => fetch("/api/routine/reminders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, days: "1,2,3,4,5,6,0", enabled: true })
    }), "Lembrete criado com sucesso.");
  }

  function addTask(formData: FormData) {
    const payload = Object.fromEntries(formData.entries());
    runMutation(() => fetch("/api/routine/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    }), "Tarefa criada com sucesso.");
  }

  function saveDowntime(formData: FormData) {
    const payload = Object.fromEntries(formData.entries());
    const apps = formData.getAll("apps").map(String);
    runMutation(() => fetch("/api/routine/social-downtime", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, enabled: downtimeEnabled, apps, days: "1,2,3,4,5,6,0" })
    }), "Modo Sem Redes salvo com sucesso. Para concluir, ative os limites nas configurações do aparelho quando necessário.");
  }

  async function toggleReminder(id: string, enabled: boolean) {
    await fetch("/api/routine/reminders", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, enabled })
    });
    setToast({ message: enabled ? "Lembrete ativado com sucesso." : "Lembrete pausado.", type: "success" });
    router.refresh();
  }

  async function deleteReminder(id: string) {
    if (!window.confirm("Deseja realmente excluir este lembrete?")) return;
    await fetch(`/api/routine/reminders?id=${id}`, { method: "DELETE" });
    setToast({ message: "Lembrete apagado.", type: "success" });
    router.refresh();
  }

  async function toggleTask(id: string, completed: boolean) {
    await fetch("/api/routine/tasks", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, completed })
    });
    setToast({ message: completed ? "Tarefa concluida." : "Tarefa reaberta.", type: "success" });
    router.refresh();
  }

  async function deleteTask(id: string) {
    if (!window.confirm("Deseja realmente excluir esta tarefa?")) return;
    await fetch(`/api/routine/tasks?id=${id}`, { method: "DELETE" });
    setToast({ message: "Tarefa apagada.", type: "success" });
    router.refresh();
  }

  async function activateOnThisDevice() {
    setError("");
    setStatus("");
    setShowNotificationHelp(false);
    const result = await scheduleNativeReminders(routinePayload);
    if (result.success && result.platform === "web") {
      routinePayload.forEach((item) => {
        window.setTimeout(() => {
          new Notification(item.title, { body: item.body });
        }, minutesUntil(item.time));
      });
    }
    if (result.success) {
      await persistNativeNotificationIds(result.nativeIds || []);
      setStatus(routineSuccessMessage);
      setToast({ message: routineSuccessMessage, type: "success" });
      return;
    }
    const message = result.status === "denied" ? notificationDeniedMessage : result.message;
    setError(message);
    setShowNotificationHelp(Boolean(result.needsManualSettings));
    setToast({ message, type: result.needsManualSettings ? "warning" : "error" });
  }

  async function askNotificationPermission() {
    setError("");
    setStatus("");
    setShowNotificationHelp(false);
    const result = await requestNotificationPermission();
    const message = result.success ? routineSuccessMessage : result.status === "denied" ? notificationDeniedMessage : result.message;
    setToast({ message, type: result.success ? "success" : result.needsManualSettings ? "warning" : "error" });
    if (result.success) setStatus(message);
    else {
      setError(message);
      setShowNotificationHelp(Boolean(result.needsManualSettings));
    }
  }

  async function openSettings(action: () => Promise<{ message: string; success: boolean; needsManualSettings?: boolean }>) {
    const result = await action();
    setToast({ message: result.message, type: result.success ? "success" : result.needsManualSettings ? "warning" : "info" });
  }

  async function configureClock(type: "SLEEP" | "WAKE", time: string) {
    const result = await openNativeClock({ type, time, title: type === "SLEEP" ? "Hora de dormir" : "Hora de acordar" });
    setToast({ message: result.message, type: result.success ? "success" : "warning" });
  }

  async function syncTaskCalendar(task: Task) {
    const result = await createNativeCalendarEvent({
      title: task.title,
      notes: task.notes || "",
      dueAt: task.dueAt || (task.dueDate && task.dueTime ? `${task.dueDate}T${task.dueTime}:00` : undefined)
    });
    if (result.success && result.nativeId) {
      await fetch("/api/routine/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: task.id,
          title: task.title,
          category: task.category,
          notes: task.notes || "",
          dueDate: task.dueDate || "",
          dueTime: task.dueTime || "",
          dueAt: task.dueAt || "",
          priority: task.priority,
          status: task.status,
          calendarEventId: result.nativeId
        })
      });
    }
    if (!result.success) window.open(googleCalendarUrl(task), "_blank", "noopener,noreferrer");
    setToast({ message: result.message, type: result.success ? "success" : "warning" });
  }

  async function persistNativeNotificationIds(nativeIds: string[]) {
    if (!nativeIds.length) return;
    await Promise.all(routinePayload.map((item, index) => {
      if (!item.id || !nativeIds[index]) return Promise.resolve();
      return fetch("/api/routine/reminders", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: item.id, nativeNotificationId: nativeIds[index] })
      }).catch(() => undefined);
    }));
  }

  function downloadIcs(task: Task) {
    const date = task.dueDate?.replace(/-/g, "") || new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const time = (task.dueTime || "09:00").replace(":", "");
    const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "BEGIN:VEVENT", `SUMMARY:${task.title}`, `DESCRIPTION:${task.notes || ""}`, `DTSTART:${date}T${time}00`, `DTEND:${date}T${time}00`, "END:VEVENT", "END:VCALENDAR"].join("\r\n");
    const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `${task.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "tarefa"}.ics`;
    link.click();
    URL.revokeObjectURL(url);
    setToast({ message: "Arquivo .ics criado para adicionar ao calendario.", type: "success" });
  }

  return (
    <div className="grid gap-5">
      <CenteredToast message={toast.message} type={toast.type} onClose={() => setToast({ message: "", type: "info" })} />
      {error && <AlertBanner type="risk">{error}</AlertBanner>}
      {status && <AlertBanner type="success">{status}</AlertBanner>}
      {showNotificationHelp && (
        <AlertBanner type="info">
          <div className="grid gap-3">
            <p>Revise a permissão de notificação do Pausa AI e tente ativar a rotina novamente.</p>
            <div className="flex flex-wrap gap-2">
              <Button type="button" variant="secondary" onClick={() => openSettings(openNotificationSettings)}>Abrir configurações do app</Button>
              <Button type="button" onClick={activateOnThisDevice}>Tentar novamente</Button>
              <Button type="button" variant="ghost" onClick={() => { setShowNotificationHelp(false); setError(""); }}>Agora não</Button>
            </div>
          </div>
        </AlertBanner>
      )}

      <section className="grid gap-4 md:grid-cols-3">
        <Card className="bg-lavender/30">
          <Moon className="h-6 w-6 text-navy" />
          <p className="mt-3 text-xs font-black uppercase text-slate-500">Dormir</p>
          <p className="text-3xl font-black text-navy">{profile.sleepAlarm || "--:--"}</p>
          <p className="mt-2 text-sm text-text">Use como inicio do ritual sem tela.</p>
          <Button type="button" variant="secondary" className="mt-4 w-full" onClick={() => configureClock("SLEEP", profile.sleepAlarm || "22:30")}>Configurar dormir</Button>
        </Card>
        <Card className="bg-mint/30">
          <Sunrise className="h-6 w-6 text-navy" />
          <p className="mt-3 text-xs font-black uppercase text-slate-500">Acordar</p>
          <p className="text-3xl font-black text-navy">{profile.wakeAlarm || "--:--"}</p>
          <p className="mt-2 text-sm text-text">Comece com check-in curto, sem pressa.</p>
          <Button type="button" variant="secondary" className="mt-4 w-full" onClick={() => configureClock("WAKE", profile.wakeAlarm || "07:00")}>Configurar acordar</Button>
        </Card>
        <Card>
          <Bell className="h-6 w-6 text-positive" />
          <p className="mt-3 text-xs font-black uppercase text-slate-500">Ativacao no aparelho</p>
          <p className="text-3xl font-black text-navy">{routinePayload.length}</p>
          <p className="mt-2 text-sm text-text">Lembretes prontos para este dispositivo.</p>
        </Card>
      </section>

      <Card>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Badge tone="mint">Rotina no celular</Badge>
            <h2 className="mt-3 text-2xl font-black text-navy">Ativar lembretes neste aparelho</h2>
            <p className="mt-2 text-sm text-text">
              Agenda notificacoes para dormir, acordar, check-in, pausas e modo sem redes. No navegador elas dependem da aba aberta; no app mobile/APK usam notificacoes locais quando o sistema permitir.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button type="button" onClick={activateOnThisDevice}>Ativar no aparelho</Button>
            <Button type="button" variant="secondary" onClick={askNotificationPermission}>Testar permissao</Button>
          </div>
        </div>
      </Card>

      <section className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <Card className="scroll-mt-24" >
          <div id="lembretes" className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h2 className="flex items-center gap-2 text-xl font-black text-navy"><AlarmClock className="h-5 w-5 text-positive" /> Lembretes</h2>
            <a className="text-sm font-black text-navy underline" href="#lembretes">Ver todos os lembretes</a>
          </div>
          <form action={addReminder} className="mt-4 grid gap-3 rounded-3xl bg-ice p-4 dark:bg-slate-800 md:grid-cols-[1fr_150px_140px_auto]">
            <input name="title" placeholder="Ex: Pausa de foco" required />
            <input name="time" type="time" defaultValue={safeTime(profile.sleepAlarm, "20:00")} required />
            <select name="category" defaultValue="PAUSE">
              {categories.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
            <input type="hidden" name="reminderType" value="PAUSE" />
            <input type="hidden" name="repeatRule" value="DAILY" />
            <input type="hidden" name="snoozeEnabled" value="true" />
            <input type="hidden" name="snoozeMinutesOptions" value="5,10,15" />
            <Button type="submit"><Plus className="h-4 w-4" /> Salvar</Button>
          </form>
          <div className="mt-4 grid gap-3">
            {reminders.length === 0 && <EmptyLine text="Crie seu primeiro lembrete de pausa, check-in ou rotina." />}
            {reminders.map((item) => (
              <div key={item.id} className="flex flex-col gap-3 rounded-3xl border border-line bg-white p-4 md:flex-row md:items-center md:justify-between dark:border-slate-800 dark:bg-slate-900">
                <div>
                  <p className="font-black text-navy">{item.title}</p>
                  <p className="text-sm font-semibold text-slate-500">{labelFor(item.category)} as {item.time} - {item.status}</p>
                  {item.snoozeEnabled && <p className="text-xs font-bold text-slate-500">Soneca: {parseSnooze(item.snoozeMinutesOptions).join(", ")} min</p>}
                </div>
                <div className="flex gap-2">
                  <Button type="button" variant={item.enabled ? "secondary" : "primary"} onClick={() => toggleReminder(item.id, !item.enabled)}>
                    {item.enabled ? "Pausar" : "Ativar"}
                  </Button>
                  <Button type="button" variant="secondary" onClick={() => setToast({ message: "Pausa adiada por 5 minutos. No APK, a proxima versao pode reagendar a notificacao nativa.", type: "success" })}>Adiar 5</Button>
                  <button className="grid h-11 w-11 place-items-center rounded-2xl border border-line text-slate-500" type="button" onClick={() => deleteReminder(item.id)} aria-label="Excluir lembrete">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="scroll-mt-24">
          <div id="tarefas" className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h2 className="flex items-center gap-2 text-xl font-black text-navy"><CheckCircle2 className="h-5 w-5 text-positive" /> Lista de tarefas</h2>
            <a className="text-sm font-black text-navy underline" href="#tarefas">Ver todas as tarefas</a>
          </div>
          <form action={addTask} className="mt-4 grid gap-3 rounded-3xl bg-ice p-4 dark:bg-slate-800">
            <input name="title" placeholder="Ex: separar roupa para dormir melhor" required />
            <div className="grid gap-3 sm:grid-cols-3">
              <select name="category" defaultValue="ROTINA">
                {taskCategories.map((item) => <option key={item}>{item}</option>)}
              </select>
              <input name="dueDate" type="date" />
              <input name="dueTime" type="time" />
            </div>
            <select name="priority" defaultValue="MEDIUM">
              <option value="LOW">Baixa prioridade</option>
              <option value="MEDIUM">Media prioridade</option>
              <option value="HIGH">Alta prioridade</option>
            </select>
            <textarea name="notes" rows={2} placeholder="Observacao opcional" />
            <Button type="submit" className="w-full"><Plus className="h-4 w-4" /> Adicionar tarefa</Button>
          </form>
          <div className="mt-4 grid gap-3">
            {tasks.length === 0 && <EmptyLine text="Adicione uma tarefa pequena para transformar cuidado em rotina." />}
            {tasks.map((task) => (
              <div key={task.id} className="flex items-start gap-3 rounded-3xl border border-line bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                <input className="mt-1 h-5 w-5" type="checkbox" checked={task.completed} onChange={(event) => toggleTask(task.id, event.target.checked)} />
                <div className="min-w-0 flex-1">
                  <p className={`font-black ${task.completed ? "text-slate-400 line-through" : "text-navy"}`}>{task.title}</p>
                  <p className="text-xs font-bold uppercase text-slate-500">{task.category}{task.dueTime ? ` · ${task.dueTime}` : ""}</p>
                  {task.notes && <p className="mt-1 text-sm text-text">{task.notes}</p>}
                  <p className="mt-1 text-xs font-bold uppercase text-slate-500">Prioridade {task.priority}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button type="button" variant="secondary" onClick={() => syncTaskCalendar(task)}><CalendarDays className="h-4 w-4" /> Calendario</Button>
                    <Button type="button" variant="ghost" onClick={() => downloadIcs(task)}>Baixar .ics</Button>
                  </div>
                </div>
                <button className="grid h-10 w-10 place-items-center rounded-2xl border border-line text-slate-500" type="button" onClick={() => deleteTask(task.id)} aria-label="Excluir tarefa">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <Card className="border-lavender/80 bg-lavender/20">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="flex items-center gap-2 text-2xl font-black text-navy"><Smartphone className="h-6 w-6" /> Modo sem redes</h2>
            <p className="mt-2 text-sm text-text">
              O Pausa AI pode lembrar voce de entrar em foco e abrir as configuracoes do sistema. Bloquear ou suspender outros apps automaticamente depende do Bem-estar Digital/Tempo de Uso/Foco do proprio celular.
            </p>
            <AlertBanner type="info" className="mt-4">
              Integramos de forma assistida: lembrete, ritual de desligamento e atalho para configuracoes. O app nao promete bloquear redes sociais por conta propria.
            </AlertBanner>
          </div>
          <form action={saveDowntime} className="grid gap-3 rounded-3xl bg-white/75 p-4 dark:bg-slate-900/70">
            <label className="flex items-center gap-3 text-sm font-black text-navy">
              <input type="checkbox" checked={downtimeEnabled} onChange={(event) => setDowntimeEnabled(event.target.checked)} />
              Ativar modo sem redes
            </label>
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-navy">Inicio<input name="startTime" type="time" defaultValue={downtime?.startTime || "21:30"} required /></label>
              <label className="grid gap-2 text-sm font-bold text-navy">Fim<input name="endTime" type="time" defaultValue={downtime?.endTime || "07:00"} required /></label>
            </div>
            <div className="flex flex-wrap gap-2">
              {socialApps.map((app) => (
                <label key={app} className="cursor-pointer">
                  <input className="peer sr-only" type="checkbox" name="apps" value={app} checked={selectedApps.includes(app)} onChange={() => setSelectedApps((current) => current.includes(app) ? current.filter((item) => item !== app) : [...current, app])} />
                  <span
                    role="button"
                    aria-pressed={selectedApps.includes(app)}
                    className={`inline-flex items-center gap-1 rounded-full border px-3 py-2 text-xs font-black transition ${selectedApps.includes(app) ? "border-positive bg-navy text-white shadow-soft ring-2 ring-positive/30" : "border-line bg-ice text-slate-600 hover:border-positive hover:bg-mint/30"}`}
                    style={selectedApps.includes(app) ? { backgroundColor: "#172554", color: "#fff" } : undefined}
                  >
                    {selectedApps.includes(app) && <CheckCircle2 className="h-3.5 w-3.5 text-mint" />}
                    {app}
                  </span>
                </label>
              ))}
            </div>
            <textarea name="note" rows={2} placeholder="Mensagem para voce mesmo nesse horario" defaultValue={downtime?.note || ""} />
            <div className="grid gap-2 sm:grid-cols-2">
              <Button type="submit">{pending ? "Salvando..." : "Salvar modo"}</Button>
              <Button type="button" variant="secondary" onClick={() => openSettings(openAppSettings)}>Abrir configuracoes</Button>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <Button type="button" variant="secondary" onClick={() => openSettings(openNotificationSettings)}><Settings className="h-4 w-4" /> Notificacoes</Button>
              <Button type="button" variant="secondary" onClick={() => openSettings(openDigitalWellbeingSettings)}>Bem-estar Digital</Button>
              <Button type="button" variant="secondary" onClick={() => openSettings(openFocusModeSettings)}>Modo Foco</Button>
              <Button type="button" variant="secondary" onClick={() => openSettings(openBedtimeModeSettings)}>Hora de Dormir</Button>
              <Button type="button" variant="secondary" onClick={() => openSettings(openScreenTimeSettings)}>Tempo de Uso iOS</Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}

function bodyForReminder(category: string) {
  const map: Record<string, string> = {
    SLEEP: "Hora de desacelerar e reduzir telas.",
    WAKE: "Comece com um check-in curto.",
    CHECKIN: "Seu check-in leva menos de 1 minuto.",
    PAUSE: "Uma pequena pausa ja conta.",
    TASK: "Uma tarefa pequena por vez.",
    SOCIAL_DOWNTIME: "Hora de reduzir redes sociais e proteger sua atencao."
  };
  return map[category] || "Uma pequena pausa ja conta.";
}

function parseSnooze(value: string | null | undefined) {
  if (!value) return [5, 10, 15];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.map(Number).filter(Boolean) : [5, 10, 15];
  } catch {
    return value.split(",").map((item) => Number(item.trim())).filter(Boolean);
  }
}

function googleCalendarUrl(task: Task) {
  const dueDate = task.dueDate || new Date().toISOString().slice(0, 10);
  const dueTime = task.dueTime || "09:00";
  const start = `${dueDate.replace(/-/g, "")}T${dueTime.replace(":", "")}00`;
  const query = new URLSearchParams({
    action: "TEMPLATE",
    text: task.title,
    details: task.notes || "",
    dates: `${start}/${start}`
  });
  return `https://calendar.google.com/calendar/render?${query.toString()}`;
}

function EmptyLine({ text }: { text: string }) {
  return <div className="rounded-3xl border border-dashed border-line bg-white p-5 text-sm font-semibold text-slate-500 dark:border-slate-800 dark:bg-slate-900">{text}</div>;
}

declare global {
  interface Window {
    ReactNativeWebView?: { postMessage: (message: string) => void };
  }
}
