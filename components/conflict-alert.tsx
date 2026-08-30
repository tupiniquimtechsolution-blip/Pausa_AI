"use client";

import { AlertTriangle } from "lucide-react";
import { AlertBanner } from "@/components/ui";

export type ConflictItem = {
  id: string;
  first: { title: string };
  second: { title: string };
  startDateTime: string;
  endDateTime: string;
  severity: string;
  suggestion: string;
};

export function ConflictAlert({ conflicts }: { conflicts: ConflictItem[] }) {
  if (!conflicts.length) return null;
  return (
    <AlertBanner type="risk">
      <div className="grid gap-2">
        <p className="flex items-center gap-2 font-black text-navy"><AlertTriangle className="h-4 w-4" /> Conflitos detectados</p>
        {conflicts.slice(0, 3).map((conflict) => (
          <p key={conflict.id} className="text-sm">
            {conflict.first.title} e {conflict.second.title} se sobrepõem às {new Date(conflict.startDateTime).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}. {conflict.suggestion}
          </p>
        ))}
      </div>
    </AlertBanner>
  );
}
