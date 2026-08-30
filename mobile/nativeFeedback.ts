import { Linking, Platform } from "react-native";
import Constants from "expo-constants";
import * as Calendar from "expo-calendar";
import * as Haptics from "expo-haptics";
import * as IntentLauncher from "expo-intent-launcher";
import * as Notifications from "expo-notifications";

export type FeedbackMoment = "breathing-phase" | "practice-complete" | "daily-reminder";
export type NativeRoutineReminder = {
  id?: string;
  title: string;
  body: string;
  time: string;
  category?: string;
  reminderType?: string;
  snoozeEnabled?: boolean;
  snoozeMinutesOptions?: number[];
};

export type NativeBridgeResult = {
  success: boolean;
  status: "granted" | "denied" | "unsupported" | "needsManualSettings" | "scheduled" | "opened" | "created" | "synced" | "error";
  platform: "android" | "ios" | "web" | "unknown";
  nativeId?: string;
  nativeIds?: string[];
  payload?: unknown;
  message: string;
  needsManualSettings?: boolean;
};

export type NativeHealthSnapshotPayload = {
  date: string;
  steps: number | null;
  sleepMinutes: number | null;
  heartRateAvg: number | null;
  source: "HEALTH_CONNECT";
};

export type NativeWorkoutExportPayload = {
  title?: string;
  notes?: string;
  startedAt?: string;
  completedAt?: string;
  durationMinutes?: number;
  category?: "YOGA" | "STRETCHING" | "BREATHING" | "MOVEMENT" | "FOCUS";
};

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true
  })
});

export async function triggerNativeFeedback(moment: FeedbackMoment) {
  try {
    if (moment === "breathing-phase") {
      await Haptics.selectionAsync();
      return true;
    }
    if (moment === "practice-complete") {
      await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      return true;
    }
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    return true;
  } catch {
    return false;
  }
}

async function ensureNotificationPermission() {
  const current = await Notifications.getPermissionsAsync();
  if (current.granted) return true;
  const requested = await Notifications.requestPermissionsAsync();
  return requested.granted;
}

export async function requestNativeNotificationPermission(): Promise<NativeBridgeResult> {
  const current = await Notifications.getPermissionsAsync();
  if (current.granted) {
    await ensureAndroidChannel();
    return { success: true, status: "granted", platform: platformName(), message: "Rotina ativada com sucesso. Você receberá lembretes nos horários configurados." };
  }
  const requested = await Notifications.requestPermissionsAsync();
  if (requested.granted) {
    await ensureAndroidChannel();
    return { success: true, status: "granted", platform: platformName(), message: "Rotina ativada com sucesso. Você receberá lembretes nos horários configurados." };
  }
  return { success: false, status: "denied", platform: platformName(), message: "Não conseguimos ativar os lembretes porque a permissão de notificação está desativada. Ative em Configurações > Notificações > Pausa AI.", needsManualSettings: true };
}

async function ensureAndroidChannel() {
  if (Platform.OS !== "android") return;
  await Notifications.setNotificationChannelAsync("pausa-ai-reminders", {
    name: "Pausa AI",
    importance: Notifications.AndroidImportance.DEFAULT,
    vibrationPattern: [0, 180, 120, 180],
    lightColor: "#A7F3D0"
  });
}

export async function scheduleDailyPauseReminder(hour = 20, minute = 0) {
  const granted = await ensureNotificationPermission();
  if (!granted) return { ok: false, message: "Não conseguimos ativar os lembretes porque a permissão de notificação está desativada. Ative em Configurações > Notificações > Pausa AI." };
  await ensureAndroidChannel();
  const id = await Notifications.scheduleNotificationAsync({
    content: {
      title: "Pausa AI",
      body: "Hora de uma pequena pausa guiada.",
      sound: false
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour,
      minute,
      channelId: "pausa-ai-reminders"
    }
  });
  return { ok: true, id, message: `Lembrete diario configurado para ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}.` };
}

export async function scheduleShortTestReminder() {
  const granted = await ensureNotificationPermission();
  if (!granted) return { ok: false, message: "Não conseguimos ativar os lembretes porque a permissão de notificação está desativada. Ative em Configurações > Notificações > Pausa AI." };
  await ensureAndroidChannel();
  const id = await Notifications.scheduleNotificationAsync({
    content: {
      title: "Pausa AI",
      body: "Teste de lembrete: uma pausa curta ja conta.",
      sound: false
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: 60,
      channelId: "pausa-ai-reminders"
    }
  });
  return { ok: true, id, message: "Lembrete de teste agendado para daqui a 1 minuto." };
}

export async function scheduleRoutineReminders(reminders: NativeRoutineReminder[]): Promise<NativeBridgeResult> {
  const permission = await requestNativeNotificationPermission();
  if (!permission.success) return permission;
  await ensureAndroidChannel();

  const valid = reminders.filter((item) => /^([01]\d|2[0-3]):[0-5]\d$/.test(item.time));
  const ids: string[] = [];
  for (const item of valid) {
    const [hour, minute] = item.time.split(":").map(Number);
    const id = await Notifications.scheduleNotificationAsync({
      content: {
        title: item.title || "Pausa AI",
        body: item.body || "Uma pequena pausa ja conta.",
        sound: false,
        data: { category: item.category || "ROUTINE" }
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DAILY,
        hour,
        minute,
        channelId: "pausa-ai-reminders"
      }
    });
    ids.push(id);
  }

  return {
    success: true,
    status: "scheduled",
    platform: platformName(),
    nativeIds: ids,
    message: "Rotina ativada com sucesso. Você receberá lembretes nos horários configurados."
  };
}

export async function openFocusSettings() {
  return openSystemSettings("focus");
}

export async function openSystemSettings(target: string): Promise<NativeBridgeResult> {
  try {
    if (Platform.OS === "android") {
      if (target === "notifications") {
        await IntentLauncher.startActivityAsync(IntentLauncher.ActivityAction.APP_NOTIFICATION_SETTINGS, {
          extra: { "android.provider.extra.APP_PACKAGE": androidPackageName() }
        });
        return opened("Configuracoes de notificacao abertas.");
      }
      if (target === "digitalWellbeing") {
        await IntentLauncher.startActivityAsync(IntentLauncher.ActivityAction.USAGE_ACCESS_SETTINGS);
        return opened("Configuracoes de uso/Bem-estar Digital abertas. Configure temporizadores de apps manualmente.");
      }
      if (target === "focus") {
        await IntentLauncher.startActivityAsync(IntentLauncher.ActivityAction.ZEN_MODE_SETTINGS);
        return opened("Configuracoes de foco/nao perturbe abertas. Se precisar bloquear apps, use Bem-estar Digital.");
      }
      if (target === "bedtime") {
        await IntentLauncher.startActivityAsync(IntentLauncher.ActivityAction.SETTINGS);
        return opened("Configuracoes abertas. Procure Bem-estar Digital > Modo Hora de Dormir.");
      }
    }
    await Linking.openSettings();
    return {
      success: true,
      status: "opened",
      platform: platformName(),
      message: target === "screenTime"
        ? "Configuracoes do app abertas. No iPhone, abra Ajustes > Tempo de Uso > Limites de Apps ou Repouso."
        : "Configuracoes do app abertas."
    };
  } catch {
    return { success: false, status: "needsManualSettings", platform: platformName(), message: manualSettingsMessage(target), needsManualSettings: true };
  }
}

export async function createCalendarEvent(payload: { title?: string; notes?: string; dueAt?: string }): Promise<NativeBridgeResult> {
  try {
    const permission = await Calendar.requestCalendarPermissions();
    if (!permission.granted) {
      return { success: false, status: "denied", platform: platformName(), message: "Permissao de calendario bloqueada. A tarefa foi salva no Pausa AI; use a opcao .ics ou Google Calendar.", needsManualSettings: true };
    }
    const startDate = payload.dueAt ? new Date(payload.dueAt) : new Date(Date.now() + 60 * 60 * 1000);
    const endDate = new Date(startDate.getTime() + 30 * 60 * 1000);
    const calendar = Calendar.getDefaultCalendarSync();
    const event = await calendar.createEvent({
      title: payload.title || "Pausa AI",
      notes: payload.notes || "",
      startDate,
      endDate,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });
    return { success: true, status: "created", platform: platformName(), nativeId: event.id, message: "Tarefa criada e sincronizada com o calendario com sucesso." };
  } catch {
    return { success: false, status: "needsManualSettings", platform: platformName(), message: "Tarefa salva no Pausa AI. Para adicionar ao calendario do aparelho, use .ics, Google Calendar ou Apple Calendar.", needsManualSettings: true };
  }
}

export async function openClockAlarm(payload: { type?: "SLEEP" | "WAKE"; time?: string; title?: string }): Promise<NativeBridgeResult> {
  try {
    if (Platform.OS === "android") {
      const [hour, minute] = (payload.time || "07:00").split(":").map(Number);
      await IntentLauncher.startActivityAsync("android.intent.action.SET_ALARM", {
        extra: {
          "android.intent.extra.alarm.HOUR": hour,
          "android.intent.extra.alarm.MINUTES": minute,
          "android.intent.extra.alarm.MESSAGE": payload.title || "Pausa AI",
          "android.intent.extra.alarm.SKIP_UI": false
        }
      });
      return {
        success: true,
        status: "opened",
        platform: "android",
        message: payload.type === "SLEEP" ? "Relogio aberto para configurar o alarme/lembrete de dormir." : "Alarme de acordar aberto no aparelho."
      };
    }
    await Linking.openURL("clock://").catch(() => Linking.openSettings());
    return { success: false, status: "needsManualSettings", platform: platformName(), message: "No iPhone, configure o alarme manualmente no Relogio. O Pausa AI pode manter lembretes internos.", needsManualSettings: true };
  } catch {
    return { success: false, status: "needsManualSettings", platform: platformName(), message: "Seu sistema nao permite criar alarme nativo automaticamente. Criamos um lembrete no app e voce pode configurar o alarme manualmente no Relogio.", needsManualSettings: true };
  }
}

export async function readHealthMetricSnapshot(): Promise<NativeBridgeResult> {
  if (Platform.OS !== "android") {
    return {
      success: false,
      status: "unsupported",
      platform: platformName(),
      message: "Adapter iOS preparado. A leitura real de saude entra quando houver build iOS com HealthKit.",
      needsManualSettings: true
    };
  }

  try {
    const health = await import("react-native-health-connect");
    const initialized = await health.initialize();
    if (!initialized) {
      return {
        success: false,
        status: "unsupported",
        platform: "android",
        message: "Health Connect nao inicializou neste aparelho. Instale/atualize o Health Connect e tente novamente.",
        needsManualSettings: true
      };
    }

    const requested = await health.requestPermission([
      { accessType: "read" as const, recordType: "Steps" as const },
      { accessType: "read" as const, recordType: "SleepSession" as const },
      { accessType: "read" as const, recordType: "HeartRate" as const }
    ]);
    const granted = new Set(requested.map((permission) => `${permission.accessType}:${permission.recordType}`));
    if (!granted.has("read:Steps") && !granted.has("read:SleepSession") && !granted.has("read:HeartRate")) {
      return {
        success: false,
        status: "denied",
        platform: "android",
        message: "Permissoes de Health Connect nao concedidas. Autorize passos, sono ou frequencia cardiaca para sincronizar.",
        needsManualSettings: true
      };
    }

    const now = new Date();
    const dayStart = new Date(now);
    dayStart.setHours(0, 0, 0, 0);
    const sleepStart = new Date(now.getTime() - 36 * 60 * 60 * 1000);
    const timeRangeFilter = { operator: "between" as const, startTime: dayStart.toISOString(), endTime: now.toISOString() };

    const [stepsResult, sleepResult, heartResult] = await Promise.all([
      granted.has("read:Steps") ? health.readRecords("Steps", { timeRangeFilter }) : Promise.resolve({ records: [] }),
      granted.has("read:SleepSession")
        ? health.readRecords("SleepSession", { timeRangeFilter: { operator: "between" as const, startTime: sleepStart.toISOString(), endTime: now.toISOString() } })
        : Promise.resolve({ records: [] }),
      granted.has("read:HeartRate") ? health.readRecords("HeartRate", { timeRangeFilter }) : Promise.resolve({ records: [] })
    ]);

    const steps = sumSteps(recordsFrom(stepsResult));
    const sleepMinutes = sumSleepMinutes(recordsFrom(sleepResult));
    const heartRateAvg = averageHeartRate(recordsFrom(heartResult));
    const payload: NativeHealthSnapshotPayload = {
      date: now.toISOString(),
      steps,
      sleepMinutes,
      heartRateAvg,
      source: "HEALTH_CONNECT"
    };

    return {
      success: true,
      status: "synced",
      platform: "android",
      payload,
      message: "Dados de passos, sono e frequencia cardiaca sincronizados pelo Health Connect."
    };
  } catch {
    return {
      success: false,
      status: "error",
      platform: "android",
      message: "Nao foi possivel ler o Health Connect agora. Confirme permissoes e use um APK/dev build, pois Expo Go nao carrega modulos nativos novos.",
      needsManualSettings: true
    };
  }
}

export async function exportHealthWorkout(payload: NativeWorkoutExportPayload): Promise<NativeBridgeResult> {
  if (Platform.OS !== "android") {
    return {
      success: false,
      status: "unsupported",
      platform: platformName(),
      message: "Adapter iOS preparado. A exportacao real entra quando houver build iOS com HealthKit.",
      needsManualSettings: true
    };
  }

  try {
    const health = await import("react-native-health-connect");
    const initialized = await health.initialize();
    if (!initialized) {
      return { success: false, status: "unsupported", platform: "android", message: "Health Connect nao inicializou neste aparelho.", needsManualSettings: true };
    }
    const granted = await health.requestPermission([{ accessType: "write" as const, recordType: "ExerciseSession" as const }]);
    if (!granted.some((permission) => permission.accessType === "write" && permission.recordType === "ExerciseSession")) {
      return { success: false, status: "denied", platform: "android", message: "Permissao para exportar sessoes ao Health Connect nao concedida.", needsManualSettings: true };
    }

    const now = new Date();
    const completedAt = payload.completedAt ? new Date(payload.completedAt) : now;
    const durationMinutes = clampDuration(payload.durationMinutes);
    const startedAt = payload.startedAt ? new Date(payload.startedAt) : new Date(completedAt.getTime() - durationMinutes * 60 * 1000);
    const ids = await health.insertRecords([
      {
        recordType: "ExerciseSession",
        exerciseType: exerciseTypeFor(payload.category),
        title: payload.title || "Pausa AI",
        notes: payload.notes || "Sessao concluida no Pausa AI.",
        startTime: startedAt.toISOString(),
        endTime: completedAt.toISOString()
      }
    ]);
    return {
      success: true,
      status: "synced",
      platform: "android",
      nativeIds: ids,
      message: "Sessao exportada para o Health Connect."
    };
  } catch {
    return {
      success: false,
      status: "error",
      platform: "android",
      message: "Nao foi possivel exportar a sessao para o Health Connect agora.",
      needsManualSettings: true
    };
  }
}

function opened(message: string): NativeBridgeResult {
  return { success: true, status: "opened", platform: platformName(), message };
}

function platformName(): "android" | "ios" | "unknown" {
  if (Platform.OS === "android") return "android";
  if (Platform.OS === "ios") return "ios";
  return "unknown";
}

function androidPackageName() {
  return Constants.expoConfig?.android?.package || "com.pausaai.mobile";
}

function manualSettingsMessage(target: string) {
  const map: Record<string, string> = {
    notifications: "Abra as configuracoes do app e permita notificacoes.",
    digitalWellbeing: "Abra Configuracoes > Bem-estar Digital e controle dos pais > Temporizadores de apps.",
    focus: "Abra Configuracoes > Bem-estar Digital ou Foco para configurar limites.",
    bedtime: "Abra Configuracoes > Bem-estar Digital > Modo Hora de Dormir.",
    screenTime: "No iPhone, abra Ajustes > Tempo de Uso > Limites de Apps ou Repouso."
  };
  return map[target] || "Abra as configuracoes do app para revisar permissoes.";
}

function recordsFrom(result: unknown): unknown[] {
  if (Array.isArray((result as { records?: unknown[] })?.records)) return (result as { records: unknown[] }).records;
  if (Array.isArray((result as { result?: unknown[] })?.result)) return (result as { result: unknown[] }).result;
  return [];
}

function sumSteps(records: unknown[]): number | null {
  const total = records.reduce<number>((sum, record) => {
    const count = Number((record as { count?: number }).count || 0);
    return Number.isFinite(count) ? sum + count : sum;
  }, 0);
  return total > 0 ? Math.round(total) : null;
}

function sumSleepMinutes(records: unknown[]): number | null {
  const total = records.reduce<number>((sum, record) => {
    const start = Date.parse(String((record as { startTime?: string }).startTime || ""));
    const end = Date.parse(String((record as { endTime?: string }).endTime || ""));
    if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) return sum;
    return sum + Math.round((end - start) / 60000);
  }, 0);
  return total > 0 ? total : null;
}

function averageHeartRate(records: unknown[]) {
  const samples = records.flatMap((record) => Array.isArray((record as { samples?: unknown[] }).samples) ? (record as { samples: unknown[] }).samples : []);
  const values = samples
    .map((sample) => Number((sample as { beatsPerMinute?: number }).beatsPerMinute))
    .filter((value) => Number.isFinite(value) && value > 0);
  if (!values.length) return null;
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function clampDuration(value?: number) {
  if (!value || !Number.isFinite(value)) return 10;
  return Math.min(240, Math.max(1, Math.round(value)));
}

function exerciseTypeFor(category?: NativeWorkoutExportPayload["category"]) {
  if (category === "YOGA") return 83;
  if (category === "STRETCHING") return 71;
  if (category === "BREATHING") return 33;
  if (category === "MOVEMENT") return 79;
  return 0;
}
