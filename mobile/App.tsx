import { useMemo, useRef, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Constants from "expo-constants";
import { WebView } from "react-native-webview";
import { createCalendarEvent, exportHealthWorkout, openClockAlarm, openFocusSettings, openSystemSettings, readHealthMetricSnapshot, requestNativeNotificationPermission, scheduleDailyPauseReminder, scheduleRoutineReminders, scheduleShortTestReminder, triggerNativeFeedback, type NativeBridgeResult } from "./nativeFeedback";

const routes = [
  { label: "Inicio", path: "/" },
  { label: "Cadastro", path: "/cadastro" },
  { label: "Login", path: "/login" },
  { label: "App", path: "/app" },
  { label: "Check-in", path: "/app/checkin" },
  { label: "Agenda", path: "/app/agenda" },
  { label: "Rotina", path: "/app/rotina" },
  { label: "Exercicios", path: "/app/missoes" },
  { label: "Movimento", path: "/app/movimento" },
  { label: "Caminhada", path: "/app/movimento/caminhada" },
  { label: "Yoga", path: "/app/movimento?aba=yoga" },
  { label: "Historico", path: "/app/historico" },
  { label: "Perfil", path: "/app/perfil" }
];

function normalizeBaseUrl(value: string) {
  const trimmed = value.trim().replace(/\/$/, "");
  if (!trimmed) return "http://localhost:3000";
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
  return `http://${trimmed}`;
}

function webBaseUrlFromExpoHost() {
  const hostUri = Constants.expoConfig?.hostUri;
  if (!hostUri) return "";
  const hostWithPort = hostUri.replace(/^[a-z]+:\/\//i, "").split("/")[0];
  const host = hostWithPort.split(":")[0];
  if (!host || host === "localhost" || host === "127.0.0.1") return "";
  return `http://${host}:3000`;
}

function appendMobileBuildQuery(url: string) {
  const version = Constants.expoConfig?.version || "dev";
  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}pausaMobile=${encodeURIComponent(version)}`;
}

export default function App() {
  const configuredBaseUrl = webBaseUrlFromExpoHost() || (typeof Constants.expoConfig?.extra?.defaultWebBaseUrl === "string" ? Constants.expoConfig.extra.defaultWebBaseUrl : "http://localhost:3000");
  const [baseUrl, setBaseUrl] = useState(configuredBaseUrl);
  const [activePath, setActivePath] = useState("/");
  const [refreshKey, setRefreshKey] = useState(0);
  const [nativeStatus, setNativeStatus] = useState("Haptics e lembretes ficam ativos quando suportados pelo aparelho.");
  const webViewRef = useRef<WebView>(null);

  const activeUrl = useMemo(() => appendMobileBuildQuery(`${normalizeBaseUrl(baseUrl)}${activePath}`), [baseUrl, activePath]);

  async function handleNativeMessage(raw: string) {
    try {
      const message = JSON.parse(raw);
      if (message?.source !== "pausa-ai") return;
      const requestId = typeof message.requestId === "string" ? message.requestId : undefined;
      const run = async (action: () => Promise<NativeBridgeResult>) => {
        const result = await action();
        setNativeStatus(result.message);
        if (requestId) sendResultToWeb({ ...result, requestId });
      };
      if (message.type === "native-feedback") {
        const ok = await triggerNativeFeedback(message.moment || "breathing-phase");
        setNativeStatus(ok ? "Feedback nativo executado." : "Feedback nativo indisponivel neste ambiente.");
      }
      if (message.type === "schedule-routine-reminders") {
        await run(() => scheduleRoutineReminders(Array.isArray(message.reminders) ? message.reminders : Array.isArray(message.payload?.reminders) ? message.payload.reminders : []));
      }
      if (message.type === "request-notification-permission") {
        await run(requestNativeNotificationPermission);
      }
      if (message.type === "open-system-settings") {
        await run(() => openSystemSettings(message.payload?.target || "app"));
      }
      if (message.type === "create-calendar-event") {
        await run(() => createCalendarEvent(message.payload || {}));
      }
      if (message.type === "open-clock-alarm") {
        await run(() => openClockAlarm(message.payload || {}));
      }
      if (message.type === "read-health-snapshot") {
        await run(readHealthMetricSnapshot);
      }
      if (message.type === "export-health-workout") {
        await run(() => exportHealthWorkout(message.payload || {}));
      }
      if (message.type === "open-focus-settings") {
        const result = await openFocusSettings();
        setNativeStatus(result.message);
      }
    } catch {
      // Ignore non-Pausa AI messages from the WebView.
    }
  }

  function sendResultToWeb(result: NativeBridgeResult & { requestId: string }) {
    const script = `window.dispatchEvent(new CustomEvent("pausa-ai-native-result", { detail: ${JSON.stringify(result)} })); true;`;
    webViewRef.current?.injectJavaScript(script);
  }

  async function configureDailyReminder() {
    const result = await scheduleDailyPauseReminder(20, 0);
    setNativeStatus(result.message);
  }

  async function configureTestReminder() {
    const result = await scheduleShortTestReminder();
    setNativeStatus(result.message);
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.brand}>Pausa AI</Text>
        <Text style={styles.subtitle}>Teste mobile focado em ansiedade, telas e pausas guiadas</Text>
        <TextInput
          value={baseUrl}
          onChangeText={setBaseUrl}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="url"
          placeholder="http://192.168.0.10:3000"
          placeholderTextColor="#94A3B8"
          style={styles.input}
        />
        <View style={styles.actions}>
          <TouchableOpacity style={styles.primaryButton} onPress={() => setRefreshKey((key) => key + 1)}>
            <Text style={styles.primaryButtonText}>Recarregar</Text>
          </TouchableOpacity>
          <Text style={styles.hint}>No celular fisico, use o IP da maquina, nao localhost.</Text>
        </View>
        <View style={styles.nativeActions}>
          <TouchableOpacity style={styles.secondaryButton} onPress={configureDailyReminder}>
            <Text style={styles.secondaryButtonText}>Lembrete 20h</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} onPress={configureTestReminder}>
            <Text style={styles.secondaryButtonText}>Teste 1 min</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.nativeStatus}>{nativeStatus}</Text>
      </View>

      <View style={styles.routeBar}>
        {routes.map((route) => (
          <TouchableOpacity
            key={route.path}
            onPress={() => setActivePath(route.path)}
            style={[styles.routeButton, activePath === route.path && styles.routeButtonActive]}
          >
            <Text style={[styles.routeButtonText, activePath === route.path && styles.routeButtonTextActive]}>
              {route.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.browser}>
        <WebView
          ref={webViewRef}
          key={`${activeUrl}-${refreshKey}`}
          source={{ uri: activeUrl }}
          startInLoadingState
          cacheEnabled={false}
          cacheMode="LOAD_NO_CACHE"
          sharedCookiesEnabled
          thirdPartyCookiesEnabled
          geolocationEnabled
          originWhitelist={["*"]}
          onMessage={(event) => handleNativeMessage(event.nativeEvent.data)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#0F172A"
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    paddingTop: 12,
    gap: 8
  },
  brand: {
    color: "#A7F3D0",
    fontSize: 24,
    fontWeight: "900"
  },
  subtitle: {
    color: "#CBD5E1",
    fontSize: 13,
    fontWeight: "700"
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    color: "#172554",
    fontSize: 14,
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  actions: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10
  },
  primaryButton: {
    backgroundColor: "#10B981",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10
  },
  primaryButtonText: {
    color: "#052E2B",
    fontSize: 13,
    fontWeight: "900"
  },
  hint: {
    color: "#CBD5E1",
    flex: 1,
    fontSize: 11,
    lineHeight: 15
  },
  nativeActions: {
    flexDirection: "row",
    gap: 8
  },
  secondaryButton: {
    backgroundColor: "#DDD6FE",
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 9
  },
  secondaryButtonText: {
    color: "#172554",
    fontSize: 12,
    fontWeight: "900"
  },
  nativeStatus: {
    color: "#CBD5E1",
    fontSize: 11,
    fontWeight: "700"
  },
  routeBar: {
    backgroundColor: "#111827",
    borderBottomColor: "#334155",
    borderBottomWidth: 1,
    borderTopColor: "#334155",
    borderTopWidth: 1,
    flexDirection: "row",
    gap: 8,
    padding: 10,
    flexWrap: "wrap"
  },
  routeButton: {
    backgroundColor: "#1E293B",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 7
  },
  routeButtonActive: {
    backgroundColor: "#DDD6FE"
  },
  routeButtonText: {
    color: "#E2E8F0",
    fontSize: 11,
    fontWeight: "800"
  },
  routeButtonTextActive: {
    color: "#172554"
  },
  browser: {
    backgroundColor: "#FFFFFF",
    flex: 1
  }
});
