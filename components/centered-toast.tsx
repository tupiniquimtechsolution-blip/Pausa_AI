"use client";

import { AlertCircle, CheckCircle2, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export function CenteredToast({
  message,
  type = "info",
  onClose
}: {
  message: string;
  type?: "success" | "warning" | "error" | "info";
  onClose?: () => void;
}) {
  if (!message) return null;
  const Icon = type === "success" ? CheckCircle2 : type === "error" || type === "warning" ? AlertCircle : Info;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/55 px-4 backdrop-blur-sm" role="status" aria-live="polite" onClick={onClose}>
      <div
        className={cn(
          "max-w-sm rounded-3xl border bg-app-surface p-5 text-center text-app-text shadow-soft",
          type === "success" && "border-app-success",
          type === "warning" && "border-app-warning",
          type === "error" && "border-app-error",
          type === "info" && "border-app-border"
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <Icon className={cn("mx-auto h-8 w-8", type === "success" ? "text-app-success" : type === "error" ? "text-app-error" : type === "warning" ? "text-app-warning" : "text-app-accent")} />
        <p className="mt-3 text-sm font-black text-app-text">{message}</p>
        <button type="button" className="mt-4 rounded-full bg-app-accent px-4 py-2 text-xs font-black text-app-accent-contrast" onClick={onClose}>
          Entendi
        </button>
      </div>
    </div>
  );
}
