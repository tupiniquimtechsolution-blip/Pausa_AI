"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  BarChart3,
  Brain,
  ChevronDown,
  CircleUserRound,
  Clock3,
  LogOut,
  type LucideIcon
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useFeatureFlag } from "@/components/feature-flags";
import { APP_PILLARS, pillarForPathname, type PillarDefinition, type PillarId } from "@/lib/navigation/pillars";

const PILLAR_ICONS: Record<PillarId, LucideIcon> = {
  progress: BarChart3,
  body: Activity,
  mind: Brain,
  routine: Clock3,
  profile: CircleUserRound
};

function PillarButton({
  pillar,
  active,
  expanded,
  onToggle,
  buttonRef,
  compact = false
}: {
  pillar: PillarDefinition;
  active: boolean;
  expanded: boolean;
  onToggle: () => void;
  buttonRef?: (node: HTMLButtonElement | null) => void;
  compact?: boolean;
}) {
  const Icon = PILLAR_ICONS[pillar.id];
  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onToggle}
      aria-label={pillar.label}
      aria-expanded={expanded}
      aria-controls={`pillar-menu-${pillar.id}`}
      aria-haspopup="menu"
      aria-current={active ? "page" : undefined}
      className={[
        "group flex min-h-12 items-center justify-center rounded-2xl font-bold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-positive/30",
        compact ? "min-w-0 flex-1 flex-col gap-1 px-1 py-2 text-[11px]" : "w-full gap-3 px-4 py-3 text-sm",
        active || expanded
          ? "bg-app-accent text-app-accent-contrast"
          : "text-app-muted hover:bg-app-selection/35 hover:text-app-text"
      ].join(" ")}
    >
      <Icon className={compact ? "h-5 w-5" : "h-4 w-4"} aria-hidden="true" />
      <span className={compact ? "truncate" : "flex-1 text-left"}>{pillar.label}</span>
      {!compact && <ChevronDown className={`h-4 w-4 transition ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />}
    </button>
  );
}

function PillarMenu({
  pillar,
  mobile,
  firstLinkRef,
  onNavigate
}: {
  pillar: PillarDefinition;
  mobile?: boolean;
  firstLinkRef?: React.RefObject<HTMLAnchorElement | null>;
  onNavigate: () => void;
}) {
  return (
    <div
      id={`pillar-menu-${pillar.id}`}
      role="menu"
      aria-label={`Acessos prioritários de ${pillar.label}`}
      className={mobile
        ? "grid max-h-[55vh] gap-2 overflow-y-auto p-3 sm:flex sm:max-h-none sm:items-stretch sm:overflow-x-auto"
        : "mt-2 grid gap-1 rounded-2xl border border-app-border bg-app-background/55 p-2"}
    >
      {pillar.items.map((item, index) => (
        <Link
          key={item.href}
          ref={index === 0 ? firstLinkRef : undefined}
          role="menuitem"
          href={item.href}
          onClick={onNavigate}
          className={[
            "rounded-xl px-3 py-2 text-left transition hover:bg-app-selection/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/30",
            mobile ? "min-h-14 border border-app-border bg-app-surface sm:min-w-44 sm:flex-1" : ""
          ].join(" ")}
        >
          <span className="block text-sm font-black text-app-text">{item.label}</span>
          <span className="mt-0.5 block text-xs leading-4 text-app-muted">{item.description}</span>
        </Link>
      ))}
    </div>
  );
}

function useExpandablePillars() {
  const pathname = usePathname();
  const [openPillar, setOpenPillar] = useState<PillarId | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const triggerRefs = useRef<Partial<Record<PillarId, HTMLButtonElement | null>>>({});

  const close = useCallback((restoreFocus = false) => {
    const previous = openPillar;
    setOpenPillar(null);
    if (restoreFocus && previous) {
      window.setTimeout(() => triggerRefs.current[previous]?.focus(), 0);
    }
  }, [openPillar]);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (openPillar && !wrapperRef.current?.contains(event.target as Node)) close();
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && openPillar) {
        event.preventDefault();
        close(true);
      }
    }
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [close, openPillar]);

  function toggle(id: PillarId) {
    setOpenPillar((current) => {
      const next = current === id ? null : id;
      if (next) window.setTimeout(() => firstLinkRef.current?.focus(), 0);
      return next;
    });
  }

  const registerTrigger = useCallback((id: PillarId, node: HTMLButtonElement | null) => {
    triggerRefs.current[id] = node;
  }, []);

  return {
    pathname,
    openPillar,
    wrapperRef,
    firstLinkRef,
    registerTrigger,
    close,
    toggle
  };
}

export function PillarSidebar() {
  const navigationV2 = useFeatureFlag("NAV_V2");
  const {
    pathname,
    openPillar,
    wrapperRef,
    firstLinkRef,
    registerTrigger,
    close,
    toggle
  } = useExpandablePillars();
  const activePillar = pillarForPathname(pathname);

  return (
    <aside className="hidden min-h-screen w-64 border-r border-app-border bg-app-surface/85 p-5 text-app-text lg:block">
      <Link href="/app/progresso" className="flex items-center gap-2 font-black text-app-text">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-mint"><Brain className="h-5 w-5" /></span>
        Pausa AI
      </Link>
      <div ref={wrapperRef} className="mt-8">
        <nav className="grid gap-2" aria-label="Cinco pilares do Pausa AI">
          {APP_PILLARS.map((pillar) => {
            const Icon = PILLAR_ICONS[pillar.id];
            if (!navigationV2) {
              return (
                <Link
                  key={pillar.id}
                  href={pillar.href}
                  aria-current={activePillar?.id === pillar.id ? "page" : undefined}
                  className="flex min-h-12 items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-app-muted hover:bg-app-selection/35 hover:text-app-text"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" /> {pillar.label}
                </Link>
              );
            }
            const expanded = openPillar === pillar.id;
            return (
              <div key={pillar.id}>
                <PillarButton
                  pillar={pillar}
                  active={activePillar?.id === pillar.id}
                  expanded={expanded}
                  onToggle={() => toggle(pillar.id)}
                  buttonRef={(node) => registerTrigger(pillar.id, node)}
                />
                {expanded && (
                  <PillarMenu
                    pillar={pillar}
                    firstLinkRef={firstLinkRef}
                    onNavigate={() => close()}
                  />
                )}
              </div>
            );
          })}
        </nav>
      </div>
      <form action="/api/auth/logout" method="post" className="mt-8">
        <button className="flex min-h-12 items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-app-muted hover:bg-app-selection/35 hover:text-app-text" type="submit">
          <LogOut className="h-4 w-4" /> Sair
        </button>
      </form>
    </aside>
  );
}

export function PillarMobileNavigation() {
  const navigationV2 = useFeatureFlag("NAV_V2");
  const {
    pathname,
    openPillar,
    wrapperRef,
    firstLinkRef,
    registerTrigger,
    close,
    toggle
  } = useExpandablePillars();
  const activePillar = pillarForPathname(pathname);
  const expandedPillar = APP_PILLARS.find((pillar) => pillar.id === openPillar);

  return (
    <div ref={wrapperRef} className="lg:hidden">
      {navigationV2 && expandedPillar && (
        <div className="fixed bottom-[73px] left-2 right-2 z-40 rounded-2xl border border-app-border bg-app-background/98 text-app-text shadow-soft backdrop-blur" aria-live="polite">
          <div className="flex items-center justify-between border-b border-app-border px-4 py-2">
            <div>
              <p className="text-sm font-black text-app-text">{expandedPillar.label}</p>
              <p className="text-xs text-app-muted">{expandedPillar.responsibility}</p>
            </div>
            <button type="button" onClick={() => close(true)} className="min-h-11 rounded-xl px-3 text-xs font-bold text-app-text hover:bg-app-selection/35">
              Fechar
            </button>
          </div>
          <PillarMenu
            pillar={expandedPillar}
            mobile
            firstLinkRef={firstLinkRef}
            onNavigate={() => close()}
          />
        </div>
      )}
      <nav className="fixed bottom-0 left-0 right-0 z-40 flex border-t border-app-border bg-app-surface/95 px-1 py-1 text-app-text shadow-soft backdrop-blur" aria-label="Cinco pilares do Pausa AI">
        {APP_PILLARS.map((pillar) => {
          const Icon = PILLAR_ICONS[pillar.id];
          if (!navigationV2) {
            return (
              <Link
                key={pillar.id}
                href={pillar.href}
                aria-current={activePillar?.id === pillar.id ? "page" : undefined}
                className="grid min-h-16 min-w-0 flex-1 place-items-center gap-1 rounded-xl px-1 py-2 text-[11px] font-bold text-app-muted"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                <span className="truncate">{pillar.label}</span>
              </Link>
            );
          }
          return (
            <PillarButton
              key={pillar.id}
              pillar={pillar}
              active={activePillar?.id === pillar.id}
              expanded={openPillar === pillar.id}
              onToggle={() => toggle(pillar.id)}
              buttonRef={(node) => registerTrigger(pillar.id, node)}
              compact
            />
          );
        })}
      </nav>
    </div>
  );
}
