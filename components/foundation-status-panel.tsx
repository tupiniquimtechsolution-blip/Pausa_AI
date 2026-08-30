"use client";

import { CheckCircle2, CircleAlert, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui";
import { useFeatureFlag } from "@/components/feature-flags";
import { usePlatformCapabilities } from "@/components/platform-capabilities";
import { usePreferences } from "@/components/preferences";

export function FoundationStatusPanel({ roles }: { roles: string[] }) {
  const navV2 = useFeatureFlag("NAV_V2");
  const { platform, capabilities, permissions } = usePlatformCapabilities();
  const { theme, resolvedTheme, language } = usePreferences();
  const notification = capabilities.notifications;
  const healthy = roles.length > 0 && Boolean(theme) && Boolean(language);

  return (
    <Card className="border-positive/40 bg-mint/20">
      <div className="flex items-start gap-3">
        {healthy ? <ShieldCheck className="mt-1 h-6 w-6 text-positive" /> : <CircleAlert className="mt-1 h-6 w-6 text-amber" />}
        <div className="min-w-0">
          <h2 className="text-xl font-black text-navy">Diagnóstico das fundações</h2>
          <p className="mt-1 text-sm text-text">Estado real do fluxo piloto de autenticação, autorização, preferência, plataforma e flag.</p>
          <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
            <Status label="RBAC persistido" value={roles.join(", ")} />
            <Status label="Tema" value={`${theme} → ${resolvedTheme}`} />
            <Status label="Idioma ativo" value={language} />
            <Status label="Plataforma" value={platform} />
            <Status label="Notificações" value={`${notification.state} / ${permissions.notifications || "unknown"}`} />
            <Status label="NAV_V2" value={navV2 ? "Ativa" : "Desativada com fallback"} />
          </dl>
        </div>
      </div>
    </Card>
  );
}

function Status({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-line bg-white/90 p-3">
      <dt className="flex items-center gap-2 font-black text-navy"><CheckCircle2 className="h-4 w-4 text-positive" />{label}</dt>
      <dd className="mt-1 break-words font-semibold text-text">{value}</dd>
    </div>
  );
}
