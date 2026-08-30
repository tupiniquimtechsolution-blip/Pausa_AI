"use client";

import { createContext, useContext } from "react";
import type { FeatureFlagKey } from "@/lib/feature-flags/registry";

type FeatureFlagSnapshot = Record<FeatureFlagKey, boolean>;

const FeatureFlagContext = createContext<FeatureFlagSnapshot | null>(null);

export function FeatureFlagProvider({
  flags,
  children
}: {
  flags: FeatureFlagSnapshot;
  children: React.ReactNode;
}) {
  return <FeatureFlagContext.Provider value={flags}>{children}</FeatureFlagContext.Provider>;
}

export function useFeatureFlag(key: FeatureFlagKey) {
  const snapshot = useContext(FeatureFlagContext);
  if (!snapshot) throw new Error("useFeatureFlag must be used inside FeatureFlagProvider");
  return snapshot[key];
}

export function FeatureFlag({
  name,
  children,
  fallback = null
}: {
  name: FeatureFlagKey;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  return useFeatureFlag(name) ? children : fallback;
}
