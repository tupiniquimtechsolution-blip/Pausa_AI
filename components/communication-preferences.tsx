"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui";

export function CommunicationPreferences({
  emailEnabled,
  pushEnabled,
  dailyTime
}: {
  emailEnabled: boolean;
  pushEnabled: boolean;
  dailyTime?: string | null;
}) {
  const [emailRecommendationsEnabled, setEmailRecommendationsEnabled] = useState(emailEnabled);
  const [pushNotificationsEnabled, setPushNotificationsEnabled] = useState(pushEnabled);
  const [dailyRecommendationTime, setDailyRecommendationTime] = useState(dailyTime || "08:00");
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();

  function save() {
    setMessage("");
    startTransition(async () => {
      const response = await fetch("/api/profile/preferences", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emailRecommendationsEnabled, pushNotificationsEnabled, dailyRecommendationTime })
      });
      setMessage(response.ok ? "Preferências de comunicação salvas com sucesso." : "Não conseguimos salvar suas preferências agora.");
    });
  }

  return (
    <div className="grid gap-4">
      <label className="flex items-center gap-3">
        <input type="checkbox" checked={emailRecommendationsEnabled} onChange={(event) => setEmailRecommendationsEnabled(event.target.checked)} />
        Receber recomendacao diaria por e-mail
      </label>
      <label className="flex items-center gap-3">
        <input type="checkbox" checked={pushNotificationsEnabled} onChange={(event) => setPushNotificationsEnabled(event.target.checked)} />
        Ativar lembretes e conquistas no app
      </label>
      <label className="grid gap-2">
        Horario preferido
        <input type="time" value={dailyRecommendationTime} onChange={(event) => setDailyRecommendationTime(event.target.value)} />
      </label>
      <Button type="button" onClick={save}>{pending ? "Salvando..." : "Salvar comunicação"}</Button>
      {message && <p className="text-sm font-bold text-positive">{message}</p>}
    </div>
  );
}
