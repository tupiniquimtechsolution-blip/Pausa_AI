"use client";

import { BellRing } from "lucide-react";
import { Button, Card } from "@/components/ui";
import { openNotificationSettings } from "@/lib/social-free-mode-integration";

export function PermissionBanner() {
  async function openSettings() {
    await openNotificationSettings();
  }

  return (
    <Card className="border-lavender/70 bg-lavender/20">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="flex items-center gap-2 text-sm font-black text-navy"><BellRing className="h-4 w-4" /> Permissões e lembretes</p>
          <p className="mt-1 text-sm text-text">No navegador, lembretes dependem da aba aberta. No APK, o Pausa AI usa notificações locais quando o sistema permitir.</p>
        </div>
        <Button type="button" variant="secondary" onClick={openSettings}>Abrir configurações do app</Button>
      </div>
    </Card>
  );
}
