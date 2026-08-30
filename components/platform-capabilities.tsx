"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  capabilityMatrix,
  detectPlatform,
  type CapabilityResult,
  type PlatformCapability,
  type PlatformType
} from "@/lib/platform/capabilities";

type PermissionStatus = "granted" | "denied" | "prompt" | "unsupported" | "unknown";

type PlatformContextValue = {
  platform: PlatformType;
  capabilities: Record<PlatformCapability, CapabilityResult>;
  permissions: Partial<Record<PlatformCapability, PermissionStatus>>;
  refreshPermissions: () => Promise<void>;
  requestPermission: (capability: PlatformCapability) => Promise<PermissionStatus>;
  openAppSettings: (target?: PlatformCapability) => Promise<boolean>;
};

const PlatformContext = createContext<PlatformContextValue | null>(null);

type NativeWindow = Window & {
  ReactNativeWebView?: { postMessage: (message: string) => void };
};

function browserPlatform(): PlatformType {
  if (typeof window === "undefined") return "desktop-web";
  return detectPlatform({
    userAgent: navigator.userAgent,
    isStandalone: window.matchMedia("(display-mode: standalone)").matches,
    hasNativeBridge: Boolean((window as NativeWindow).ReactNativeWebView)
  });
}

async function queryPermission(name: PermissionName): Promise<PermissionStatus> {
  if (!navigator.permissions?.query) return "unknown";
  try {
    const result = await navigator.permissions.query({ name });
    return result.state;
  } catch {
    return "unknown";
  }
}

async function readBrowserPermissions() {
  const permissions: Partial<Record<PlatformCapability, PermissionStatus>> = {};
  permissions.notifications = "Notification" in window
    ? Notification.permission === "default" ? "prompt" : Notification.permission
    : "unsupported";
  permissions.location = await queryPermission("geolocation");
  permissions.camera = await queryPermission("camera" as PermissionName);
  permissions.microphone = await queryPermission("microphone" as PermissionName);
  permissions.gallery = "showOpenFilePicker" in window ? "prompt" : "unknown";
  permissions.bluetooth = "bluetooth" in navigator ? "prompt" : "unsupported";
  return permissions;
}

export function PlatformCapabilityProvider({ children }: { children: React.ReactNode }) {
  const [platform, setPlatform] = useState<PlatformType>("desktop-web");
  const [permissions, setPermissions] = useState<Partial<Record<PlatformCapability, PermissionStatus>>>({});

  const refreshPermissions = useCallback(async () => {
    if (typeof window === "undefined") return;
    const [nextPermissions] = await Promise.all([readBrowserPermissions()]);
    setPlatform(browserPlatform());
    setPermissions(nextPermissions);
  }, []);

  useEffect(() => {
    const initialRefresh = window.setTimeout(() => void refreshPermissions(), 0);
    const handleVisibility = () => {
      if (document.visibilityState === "visible") void refreshPermissions();
    };
    window.addEventListener("pageshow", refreshPermissions);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      window.clearTimeout(initialRefresh);
      window.removeEventListener("pageshow", refreshPermissions);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [refreshPermissions]);

  const requestPermission = useCallback(async (capability: PlatformCapability): Promise<PermissionStatus> => {
    if (typeof window === "undefined") return "unsupported";
    try {
      if (capability === "notifications") {
        if (!("Notification" in window)) return "unsupported";
        const result = await Notification.requestPermission();
        await refreshPermissions();
        return result === "default" ? "prompt" : result;
      }
      if (capability === "location") {
        if (!navigator.geolocation) return "unsupported";
        const status = await new Promise<PermissionStatus>((resolve) => {
          navigator.geolocation.getCurrentPosition(
            () => resolve("granted"),
            (error) => resolve(error.code === error.PERMISSION_DENIED ? "denied" : "unknown"),
            { timeout: 10000, maximumAge: 0 }
          );
        });
        await refreshPermissions();
        return status;
      }
      if (capability === "microphone" || capability === "camera") {
        if (!navigator.mediaDevices?.getUserMedia) return "unsupported";
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: capability === "microphone",
          video: capability === "camera"
        });
        stream.getTracks().forEach((track) => track.stop());
        await refreshPermissions();
        return "granted";
      }
      return "unsupported";
    } catch (error) {
      if (error instanceof DOMException && ["NotAllowedError", "SecurityError"].includes(error.name)) return "denied";
      return "unknown";
    }
  }, [refreshPermissions]);

  const openAppSettings = useCallback(async (target: PlatformCapability = "notifications") => {
    if (typeof window === "undefined") return false;
    const bridge = (window as NativeWindow).ReactNativeWebView;
    if (!bridge) return false;
    bridge.postMessage(JSON.stringify({
      source: "pausa-ai",
      version: 1,
      requestId: crypto.randomUUID(),
      type: "open-app-settings",
      target
    }));
    return true;
  }, []);

  const value = useMemo<PlatformContextValue>(() => ({
    platform,
    capabilities: capabilityMatrix(platform),
    permissions,
    refreshPermissions,
    requestPermission,
    openAppSettings
  }), [openAppSettings, permissions, platform, refreshPermissions, requestPermission]);

  return <PlatformContext.Provider value={value}>{children}</PlatformContext.Provider>;
}

export function usePlatformCapabilities() {
  const value = useContext(PlatformContext);
  if (!value) throw new Error("usePlatformCapabilities must be used inside PlatformCapabilityProvider");
  return value;
}

export function PermissionGate({
  capability,
  children,
  fallback
}: {
  capability: PlatformCapability;
  children: React.ReactNode;
  fallback: (result: CapabilityResult) => React.ReactNode;
}) {
  const { capabilities } = usePlatformCapabilities();
  const result = capabilities[capability];
  return ["SUPPORTED", "REQUIRES_PERMISSION", "PARTIAL"].includes(result.state)
    ? children
    : fallback(result);
}
