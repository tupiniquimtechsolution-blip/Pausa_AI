"use client";

import { useState } from "react";

type RouteOption = {
  label: string;
  path: string;
};

export function MobilePreviewControls({ routes }: { routes: RouteOption[] }) {
  const [active, setActive] = useState(routes[0]?.path || "/");

  function openRoute(path: string) {
    setActive(path);
    const frame = document.getElementById("mobile-preview-frame") as HTMLIFrameElement | null;
    if (frame) frame.src = path;
  }

  return (
    <div className="mt-6 grid gap-3">
      <label className="text-white" htmlFor="mobile-route">Rota para testar</label>
      <select
        id="mobile-route"
        value={active}
        onChange={(event) => openRoute(event.target.value)}
        className="border-slate-700 bg-slate-900 text-white"
      >
        {routes.map((route) => (
          <option key={route.path} value={route.path}>
            {route.label} - {route.path}
          </option>
        ))}
      </select>
      <div className="grid grid-cols-2 gap-2">
        {routes.map((route) => (
          <button
            key={route.path}
            type="button"
            onClick={() => openRoute(route.path)}
            className={`rounded-2xl px-3 py-2 text-sm font-bold transition ${
              active === route.path ? "bg-mint text-navy" : "bg-slate-800 text-slate-200 hover:bg-slate-700"
            }`}
          >
            {route.label}
          </button>
        ))}
      </div>
    </div>
  );
}
