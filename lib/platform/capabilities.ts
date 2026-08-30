export const PLATFORM_TYPES = ["desktop-web", "mobile-web", "webview", "android", "ios", "pwa"] as const;
export type PlatformType = (typeof PLATFORM_TYPES)[number];

export const CAPABILITY_STATES = [
  "SUPPORTED",
  "REQUIRES_PERMISSION",
  "PARTIAL",
  "MANUAL_CONFIGURATION",
  "REQUIRES_NATIVE_APP",
  "UNSUPPORTED"
] as const;
export type CapabilityState = (typeof CAPABILITY_STATES)[number];

export const PLATFORM_CAPABILITIES = [
  "microphone",
  "camera",
  "gallery",
  "notifications",
  "location",
  "background_location",
  "bluetooth",
  "open_app_settings",
  "background_audio",
  "app_blocking"
] as const;
export type PlatformCapability = (typeof PLATFORM_CAPABILITIES)[number];

export type CapabilityResult = {
  capability: PlatformCapability;
  state: CapabilityState;
  platform: PlatformType;
  message: string;
};

const messages: Record<CapabilityState, string> = {
  SUPPORTED: "Disponível neste ambiente.",
  REQUIRES_PERMISSION: "Disponível após sua permissão.",
  PARTIAL: "Disponível com limitações nesta plataforma.",
  MANUAL_CONFIGURATION: "Requer configuração manual no sistema.",
  REQUIRES_NATIVE_APP: "Requer o aplicativo nativo do Pausa AI.",
  UNSUPPORTED: "Não disponível nesta plataforma."
};

export function capabilityFor(platform: PlatformType, capability: PlatformCapability): CapabilityResult {
  let state: CapabilityState = "UNSUPPORTED";

  if (platform === "android" || platform === "ios") {
    if (["microphone", "camera", "gallery", "notifications", "location", "bluetooth"].includes(capability)) state = "REQUIRES_PERMISSION";
    if (["background_location", "background_audio"].includes(capability)) state = "PARTIAL";
    if (capability === "open_app_settings") state = "SUPPORTED";
    if (capability === "app_blocking") state = "PARTIAL";
  } else if (platform === "webview") {
    if (["microphone", "camera", "gallery", "notifications", "location", "open_app_settings"].includes(capability)) state = "PARTIAL";
    if (["background_location", "background_audio", "bluetooth"].includes(capability)) state = "REQUIRES_NATIVE_APP";
  } else {
    if (["microphone", "camera", "gallery", "notifications", "location"].includes(capability)) state = "REQUIRES_PERMISSION";
    if (capability === "bluetooth") state = "PARTIAL";
    if (capability === "background_audio") state = "PARTIAL";
    if (capability === "open_app_settings") state = "MANUAL_CONFIGURATION";
    if (capability === "background_location" || capability === "app_blocking") state = "UNSUPPORTED";
  }

  return { capability, state, platform, message: messages[state] };
}

export function capabilityMatrix(platform: PlatformType) {
  return Object.fromEntries(
    PLATFORM_CAPABILITIES.map((capability) => [capability, capabilityFor(platform, capability)])
  ) as Record<PlatformCapability, CapabilityResult>;
}

export function detectPlatform(input: {
  userAgent?: string;
  isStandalone?: boolean;
  hasNativeBridge?: boolean;
}): PlatformType {
  const userAgent = input.userAgent || "";
  if (input.hasNativeBridge) {
    if (/android/i.test(userAgent)) return "android";
    if (/iphone|ipad|ipod/i.test(userAgent)) return "ios";
    return "webview";
  }
  if (input.isStandalone) return "pwa";
  return /android|iphone|ipad|ipod|mobile/i.test(userAgent) ? "mobile-web" : "desktop-web";
}
