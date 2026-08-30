"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui";

export function PartnerInterestButtons({ partnerId }: { partnerId: string }) {
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();
  function send(interestType: string) {
    startTransition(async () => {
      const response = await fetch("/api/partners/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ partnerId, interestType })
      });
      const data = await response.json().catch(() => ({}));
      setMessage(response.ok ? data.message || "Interesse registrado." : data.error || "Nao conseguimos registrar agora.");
    });
  }
  return (
    <div className="grid gap-2">
      <div className="grid gap-2 sm:grid-cols-3">
        <Button type="button" variant="secondary" onClick={() => send("HAS_BENEFIT")}>{pending ? "..." : "Tenho esse beneficio"}</Button>
        <Button type="button" variant="secondary" onClick={() => send("WANTS_INTEGRATION")}>Quero integracao</Button>
        <Button type="button" variant="secondary" onClick={() => send("WANTS_PARTNER_CONTACT")}>Quero contato</Button>
      </div>
      {message && <p className="text-xs font-bold text-positive">{message}</p>}
    </div>
  );
}
