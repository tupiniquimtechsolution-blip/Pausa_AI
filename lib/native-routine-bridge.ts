"use client";

export type NativeBridgeResult = {
  success: boolean;
  status: "granted" | "denied" | "unsupported" | "needsManualSettings" | "scheduled" | "opened" | "created" | "synced" | "error";
  platform: "web" | "android" | "ios" | "unknown";
  nativeId?: string;
  nativeIds?: string[];
  payload?: unknown;
  message: string;
  needsManualSettings?: boolean;
};

export type NativeHealthSnapshotPayload = {
  date?: string;
  steps?: number | null;
  sleepMinutes?: number | null;
  heartRateAvg?: number | null;
  source?: string;
};

export type NativeWorkoutExportPayload = {
  title?: string;
  notes?: string;
  startedAt?: string;
  completedAt?: string;
  durationMinutes?: number;
  category?: "YOGA" | "STRETCHING" | "BREATHING" | "MOVEMENT" | "FOCUS";
};

type NativeMessage = {
  type: string;
  payload?: unknown;
};

declare global {
  interface Window {
    ReactNativeWebView?: { postMessage: (message: string) => void };
  }
}

function requestId() {
  return `pausa-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function isNativeBridge() {
  return typeof window !== "undefined" && Boolean(window.ReactNativeWebView);
}

export async function requestNotificationPermission(): Promise<NativeBridgeResult> {
  if (isNativeBridge()) return postNativeMessage({ type: "request-notification-permission" });
  if (typeof window === "undefined" || !("Notification" in window)) {
    return { success: false, status: "unsupported", platform: "web", message: "Este ambiente nao permite ativar notificacoes diretamente. Use os lembretes dentro do app ou abra as configuracoes do aparelho.", needsManualSettings: true };
  }
  const permission = await Notification.requestPermission();
  if (permission === "granted") return { success: true, status: "granted", platform: "web", message: "Rotina ativada com sucesso. Você receberá lembretes nos horários configurados." };
  return { success: false, status: "denied", platform: "web", message: "Não conseguimos ativar os lembretes porque a permissão de notificação está desativada. Ative em Configurações > Notificações > Pausa AI.", needsManualSettings: true };
}

export async function scheduleNativeReminders(reminders: unknown[]): Promise<NativeBridgeResult> {
  if (isNativeBridge()) return postNativeMessage({ type: "schedule-routine-reminders", payload: { reminders } });
  const permission = await requestNotificationPermission();
  if (!permission.success) return permission;
  return { success: true, status: "scheduled", platform: "web", message: "Rotina ativada com sucesso. Você receberá lembretes nos horários configurados." };
}

export async function openNativeSettings(target: string): Promise<NativeBridgeResult> {
  if (isNativeBridge()) return postNativeMessage({ type: "open-system-settings", payload: { target } });
  return { success: false, status: "needsManualSettings", platform: "web", message: instructionFor(target), needsManualSettings: true };
}

export async function createNativeCalendarEvent(payload: unknown): Promise<NativeBridgeResult> {
  if (isNativeBridge()) return postNativeMessage({ type: "create-calendar-event", payload });
  return { success: false, status: "unsupported", platform: "web", message: "Tarefa salva no Pausa AI. Para adicionar ao calendario do aparelho, use a opcao de Google Calendar, Apple Calendar ou arquivo .ics.", needsManualSettings: true };
}

export async function openNativeClock(payload: unknown): Promise<NativeBridgeResult> {
  if (isNativeBridge()) return postNativeMessage({ type: "open-clock-alarm", payload });
  return { success: false, status: "needsManualSettings", platform: "web", message: "Seu sistema nao permite criar alarme nativo pelo navegador. Criamos o lembrete no app e voce pode configurar o alarme manualmente no Relogio.", needsManualSettings: true };
}

export async function readNativeHealthSnapshot(): Promise<NativeBridgeResult> {
  if (isNativeBridge()) return postNativeMessage({ type: "read-health-snapshot" });
  return { success: false, status: "unsupported", platform: "web", message: "Leitura automatica de passos, sono e frequencia cardiaca requer o APK Android com Health Connect. No navegador, voce pode manter o historico interno do Pausa AI.", needsManualSettings: true };
}

export async function exportNativeWorkout(payload: NativeWorkoutExportPayload): Promise<NativeBridgeResult> {
  if (isNativeBridge()) return postNativeMessage({ type: "export-health-workout", payload });
  return { success: false, status: "unsupported", platform: "web", message: "Exportacao para Health Connect fica disponivel no APK Android. A sessao segue registrada no Pausa AI.", needsManualSettings: true };
}

function postNativeMessage(message: NativeMessage): Promise<NativeBridgeResult> {
  const id = requestId();
  return new Promise((resolve) => {
    const timeout = window.setTimeout(() => {
      window.removeEventListener("pausa-ai-native-result", onResult as EventListener);
      resolve({ success: false, status: "needsManualSettings", platform: "unknown", message: "Pedido enviado ao aparelho. Se nada abrir, use as configuracoes do sistema manualmente.", needsManualSettings: true });
    }, 6000);

    function onResult(event: CustomEvent<NativeBridgeResult & { requestId?: string }>) {
      if (event.detail?.requestId !== id) return;
      window.clearTimeout(timeout);
      window.removeEventListener("pausa-ai-native-result", onResult as EventListener);
      resolve(event.detail);
    }

    window.addEventListener("pausa-ai-native-result", onResult as EventListener);
    window.ReactNativeWebView?.postMessage(JSON.stringify({ source: "pausa-ai", requestId: id, ...message }));
  });
}

function instructionFor(target: string) {
  const map: Record<string, string> = {
    app: "Abra as configuracoes do app no aparelho e revise permissoes e notificacoes.",
    notifications: "Abra as configuracoes de notificacao do app e permita alertas do Pausa AI.",
    digitalWellbeing: "Abra Configuracoes > Bem-estar Digital e controle dos pais > Temporizadores de apps.",
    focus: "Abra Configuracoes > Bem-estar Digital ou Foco e configure os apps que deseja reduzir.",
    bedtime: "Abra Configuracoes > Bem-estar Digital > Modo Hora de Dormir.",
    screenTime: "No iPhone, abra Ajustes > Tempo de Uso > Limites de Apps ou Repouso."
  };
  return map[target] || map.app;
}
