"use client";

import { openNativeSettings } from "@/lib/native-routine-bridge";

export function detectPlatform() {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("android")) return "android";
  if (ua.includes("iphone") || ua.includes("ipad")) return "ios";
  return "web";
}

export function canOpenSystemSettings() {
  return typeof window !== "undefined";
}

export function openAppSettings() {
  return openNativeSettings("app");
}

export function openNotificationSettings() {
  return openNativeSettings("notifications");
}

export function openDigitalWellbeingSettings() {
  return openNativeSettings("digitalWellbeing");
}

export function openFocusModeSettings() {
  return openNativeSettings("focus");
}

export function openBedtimeModeSettings() {
  return openNativeSettings("bedtime");
}

export function openScreenTimeSettings() {
  return openNativeSettings("screenTime");
}
