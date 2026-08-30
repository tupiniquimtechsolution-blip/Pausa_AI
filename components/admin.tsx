"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Button } from "@/components/ui";

export function LeadStatusForm({ id, status }: { id: string; status: string }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  return (
    <select
      className="min-w-44"
      defaultValue={status}
      disabled={pending}
      onChange={(event) => {
        const value = event.target.value;
        startTransition(async () => {
          await fetch("/api/admin/leads", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, status: value }) });
          router.refresh();
        });
      }}
    >
      {["NOVO", "EM_CONTATO", "DEMONSTRACAO_MARCADA", "PROPOSTA_ENVIADA", "FECHADO", "PERDIDO"].map((item) => <option key={item} value={item}>{item}</option>)}
    </select>
  );
}

export function LeadDetailForm({
  id,
  status,
  notes,
  nextContactAt
}: {
  id: string;
  status: string;
  notes?: string | null;
  nextContactAt?: string;
}) {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();

  function submit(formData: FormData) {
    setMessage("");
    const payload = {
      id,
      status: String(formData.get("status") || status),
      notes: String(formData.get("notes") || ""),
      nextContactAt: String(formData.get("nextContactAt") || "")
    };
    startTransition(async () => {
      const response = await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      setMessage(response.ok ? "Lead atualizado." : "Nao conseguimos salvar agora.");
      router.refresh();
    });
  }

  return (
    <form action={submit} className="grid gap-4">
      <div className="grid gap-2">
        <label htmlFor="status">Status</label>
        <select id="status" name="status" defaultValue={status}>
          {["NOVO", "EM_CONTATO", "DEMONSTRACAO_MARCADA", "PROPOSTA_ENVIADA", "FECHADO", "PERDIDO"].map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
      </div>
      <div className="grid gap-2">
        <label htmlFor="nextContactAt">Proximo contato</label>
        <input id="nextContactAt" name="nextContactAt" type="datetime-local" defaultValue={nextContactAt || ""} />
      </div>
      <div className="grid gap-2">
        <label htmlFor="notes">Observacoes internas</label>
        <textarea id="notes" name="notes" rows={7} defaultValue={notes || ""} placeholder="Contexto do contato, proximos passos e combinados." />
      </div>
      <Button type="submit">{pending ? "Salvando..." : "Salvar lead"}</Button>
      {message && <p className="text-sm font-bold text-positive">{message}</p>}
    </form>
  );
}

export function CopyLeadMessageButton({ label, text }: { label: string; text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <Button
      type="button"
      variant="secondary"
      className="w-full"
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      }}
    >
      {copied ? "Copiado" : label}
    </Button>
  );
}
