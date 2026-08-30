import {
  capabilityFor,
  detectPlatform,
  type PlatformType
} from "@/lib/platform/capabilities";

export const SOCIAL_DOWNTIME_OBJECTIVES = [
  "PROTECT_FOCUS",
  "REDUCE_SCROLLING",
  "PREPARE_SLEEP",
  "STUDY",
  "FAMILY_TIME"
] as const;

export const SOCIAL_DOWNTIME_CATEGORIES = [
  "SOCIAL",
  "VIDEO",
  "MESSAGING",
  "GAMES",
  "NEWS",
  "SHOPPING"
] as const;

export function socialDowntimeCapability(input: {
  userAgent?: string;
  requestedPlatform?: string | null;
  nativeBridge?: boolean;
}) {
  const requested = input.requestedPlatform as PlatformType | undefined;
  const platform = requested || detectPlatform({
    userAgent: input.userAgent,
    hasNativeBridge: input.nativeBridge
  });
  const capability = capabilityFor(platform, "app_blocking");
  return {
    platform,
    state: capability.state,
    canRemind: true,
    canOpenSettings: platform === "android" || platform === "ios" || platform === "webview",
    canBlockDirectly: false,
    message: capability.state === "PARTIAL"
      ? "O Pausa AI orienta e abre os controles do sistema. O bloqueio depende do Bem-estar Digital, Foco ou Tempo de Uso."
      : "O Pausa AI cria lembretes e relatórios; o bloqueio direto de outros apps não está disponível neste ambiente."
  };
}
