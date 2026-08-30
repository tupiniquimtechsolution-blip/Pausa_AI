export type PermissionKind = "notifications" | "calendar" | "microphone" | "photos" | "camera" | "background" | "exact_alarm";

export type PermissionStatus = {
  kind: PermissionKind;
  granted: boolean;
  status: "granted" | "denied" | "prompt" | "unsupported" | "needsManualSettings";
  message: string;
};

export async function checkWebNotificationPermission(): Promise<PermissionStatus> {
  if (typeof window === "undefined" || !("Notification" in window)) {
    return { kind: "notifications", granted: false, status: "unsupported", message: "Este ambiente não permite notificações diretas." };
  }
  return {
    kind: "notifications",
    granted: Notification.permission === "granted",
    status: Notification.permission === "granted" ? "granted" : Notification.permission === "denied" ? "denied" : "prompt",
    message: Notification.permission === "granted"
      ? "Notificações ativadas."
      : "Ative as notificações para receber lembretes no aparelho."
  };
}
