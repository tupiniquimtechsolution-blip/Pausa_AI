"use client";

import { useEffect, useState } from "react";
import { Bell, Check, X } from "lucide-react";

type Notice = {
  id: string;
  title: string;
  body: string;
  read: boolean;
  createdAt: string;
};

const storageKey = "pausa_notifications";

function readQueue(): Notice[] {
  if (typeof window === "undefined") return [];
  try {
    const parsed = JSON.parse(window.localStorage.getItem(storageKey) || "[]") as Notice[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeQueue(items: Notice[]) {
  window.localStorage.setItem(storageKey, JSON.stringify(items.slice(0, 30)));
}

export function NotificationCenter({ enabled }: { enabled: boolean }) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<Notice[]>([]);
  const unread = items.filter((item) => !item.read).length;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const current = readQueue();
      if (!current.length) {
        const welcome = [{ id: "welcome", title: "Pausa AI", body: "Seus lembretes e conquistas aparecem aqui.", read: false, createdAt: new Date().toISOString() }];
        writeQueue(welcome);
        setItems(welcome);
        return;
      }
      setItems(current);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  function markAllRead() {
    const next = items.map((item) => ({ ...item, read: true }));
    setItems(next);
    writeQueue(next);
  }

  function clear() {
    setItems([]);
    writeQueue([]);
  }

  return (
    <div className="relative">
      <button type="button" onClick={() => setOpen((value) => !value)} disabled={!enabled} title={!enabled ? "Notificações desativadas nas preferências." : undefined} className="relative grid h-11 w-11 place-items-center rounded-2xl border border-app-border bg-app-surface text-app-text shadow-soft disabled:cursor-not-allowed disabled:opacity-50" aria-label="Abrir notificacoes">
        <Bell className="h-5 w-5" />
        {unread > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-positive px-1 text-[10px] font-black text-white">{unread}</span>}
      </button>
      {open && (
        <div className="absolute right-0 z-50 mt-2 w-80 rounded-3xl border border-app-border bg-app-surface p-3 text-app-text shadow-soft">
          <div className="flex items-center justify-between gap-2">
            <p className="font-black text-app-text">Notificacoes</p>
            <div className="flex gap-1">
              <button type="button" onClick={markAllRead} className="grid h-8 w-8 place-items-center rounded-xl bg-app-background text-app-text" aria-label="Marcar como lidas"><Check className="h-4 w-4" /></button>
              <button type="button" onClick={clear} className="grid h-8 w-8 place-items-center rounded-xl bg-app-background text-app-text" aria-label="Limpar notificacoes"><X className="h-4 w-4" /></button>
            </div>
          </div>
          <div className="mt-3 grid max-h-80 gap-2 overflow-y-auto">
            {items.length ? items.map((item) => (
              <div key={item.id} className={`rounded-2xl p-3 text-sm ${item.read ? "bg-app-background text-app-muted" : "border border-app-accent/35 bg-app-selection/35 text-app-text"}`}>
                <p className="font-black">{item.title}</p>
                <p className="mt-1 font-semibold">{item.body}</p>
              </div>
            )) : <p className="rounded-2xl bg-app-background p-3 text-sm font-semibold text-app-muted">Nenhuma notificacao por enquanto.</p>}
          </div>
        </div>
      )}
    </div>
  );
}
