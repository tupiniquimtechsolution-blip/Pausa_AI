"use client";

import { useState, useTransition } from "react";
import { Archive, Inbox, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button, Card } from "@/components/ui";
import { CenteredToast } from "@/components/centered-toast";

export type InboxPanelItem = {
  id: string;
  rawText?: string | null;
  extractedText?: string | null;
  suggestedType?: string | null;
  status: string;
  createdAt: string;
};

export function InboxPanel({ items }: { items: InboxPanelItem[] }) {
  const router = useRouter();
  const [rawText, setRawText] = useState("");
  const [toast, setToast] = useState<{ message: string; type: "success" | "warning" | "error" | "info" }>({ message: "", type: "info" });
  const [pending, startTransition] = useTransition();

  function save() {
    if (!rawText.trim()) return;
    startTransition(async () => {
      const response = await fetch("/api/agenda/inbox", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rawText, suggestedType: "unknown", status: "OPEN" })
      });
      if (!response.ok) {
        setToast({ message: "Não conseguimos salvar a ideia agora.", type: "error" });
        return;
      }
      setRawText("");
      setToast({ message: "Ideia salva na caixa de entrada.", type: "success" });
      router.refresh();
    });
  }

  function archive(id: string) {
    if (!window.confirm("Arquivar esta ideia?")) return;
    startTransition(async () => {
      await fetch(`/api/agenda/inbox?id=${id}`, { method: "DELETE" });
      router.refresh();
    });
  }

  return (
    <Card>
      <CenteredToast message={toast.message} type={toast.type} onClose={() => setToast({ message: "", type: "info" })} />
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase text-slate-500">Seed</p>
          <h2 className="flex items-center gap-2 text-2xl font-black text-navy"><Inbox className="h-5 w-5" /> Caixa de entrada</h2>
        </div>
      </div>
      <div className="mt-4 grid gap-2">
        <textarea value={rawText} onChange={(event) => setRawText(event.target.value)} rows={3} placeholder="Ex: Quero começar a correr 3x por semana." />
        <Button type="button" onClick={save}><Plus className="h-4 w-4" /> {pending ? "Salvando..." : "Salvar para depois"}</Button>
      </div>
      <div className="mt-4 grid gap-2">
        {items.length ? items.map((item) => (
          <div key={item.id} className="flex items-start justify-between gap-3 rounded-2xl border border-line bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
            <div>
              <p className="font-bold text-navy">{item.rawText || item.extractedText || "Ideia sem texto"}</p>
              <p className="mt-1 text-xs font-bold uppercase text-slate-500">{item.suggestedType || "unknown"} - {new Date(item.createdAt).toLocaleDateString("pt-BR")}</p>
            </div>
            <button type="button" className="grid h-10 w-10 place-items-center rounded-2xl border border-line text-slate-500" onClick={() => archive(item.id)} aria-label="Arquivar ideia">
              <Archive className="h-4 w-4" />
            </button>
          </div>
        )) : <p className="rounded-2xl bg-ice p-3 text-sm font-semibold text-slate-500 dark:bg-slate-950">Nenhuma ideia salva por enquanto.</p>}
      </div>
    </Card>
  );
}
