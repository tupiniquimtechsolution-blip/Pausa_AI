import Link from "next/link";
import { AlertCircle, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  disabled = false,
  loading = false,
  loadingLabel = "Processando...",
  disabledReason
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  className?: string;
  type?: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  loading?: boolean;
  loadingLabel?: string;
  disabledReason?: string;
}) {
  const unavailable = disabled || loading;
  const styles = cn(
    "inline-flex min-h-11 min-w-11 touch-manipulation items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/30",
    variant === "primary" && "bg-app-accent text-app-accent-contrast shadow-soft hover:brightness-110",
    variant === "secondary" && "bg-app-surface text-app-text ring-1 ring-app-border hover:bg-app-selection/45",
    variant === "ghost" && "text-app-text hover:bg-app-selection/35",
    variant === "danger" && "bg-red-700 text-white hover:bg-red-800 dark:bg-red-800 dark:hover:bg-red-700",
    unavailable && "cursor-not-allowed opacity-60",
    className
  );
  if (href && !unavailable) return <Link className={styles} href={href}>{children}</Link>;
  return (
    <button
      className={styles}
      type={type}
      onClick={onClick}
      disabled={unavailable}
      aria-busy={loading || undefined}
      title={unavailable ? disabledReason : undefined}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
      {loading ? loadingLabel : children}
    </button>
  );
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("rounded-3xl border border-app-border bg-app-card/90 p-5 text-app-text shadow-soft", className)}>{children}</div>;
}

type SelectableVariant = "default" | "number" | "social" | "level" | "filter";

function selectableClasses(selected: boolean, disabled?: boolean, variant: SelectableVariant = "default") {
  return cn(
    "inline-flex min-h-11 items-center justify-center gap-2 border text-sm font-black transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/20",
    variant === "number" ? "rounded-2xl px-3 py-3" : "rounded-full px-4 py-2",
    selected
      ? "border-app-accent bg-app-accent text-app-accent-contrast shadow-soft ring-2 ring-focus/35"
      : "border-app-border bg-app-surface text-app-text hover:border-app-accent hover:bg-app-selection/35",
    disabled && "cursor-not-allowed opacity-45 hover:border-app-border hover:bg-app-surface"
  );
}

export function SelectableButton({
  label,
  selected,
  onClick,
  icon,
  disabled = false,
  variant = "default",
  className = ""
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
  disabled?: boolean;
  variant?: SelectableVariant;
  className?: string;
}) {
  return (
    <button
      type="button"
      role="button"
      aria-label={label}
      aria-pressed={selected}
      disabled={disabled}
      onClick={onClick}
      className={cn(selectableClasses(selected, disabled, variant), className)}
    >
      {selected ? <CheckCircle2 className="h-4 w-4" /> : icon}
      <span>{label}</span>
    </button>
  );
}

export function SelectableLink({
  label,
  href,
  selected,
  icon,
  className = "",
  scroll
}: {
  label: string;
  href: string;
  selected: boolean;
  icon?: React.ReactNode;
  className?: string;
  scroll?: boolean;
}) {
  return (
    <Link
      href={href}
      scroll={scroll}
      role="button"
      aria-pressed={selected}
      className={cn(selectableClasses(selected, false, "filter"), className)}
    >
      {selected ? <CheckCircle2 className="h-4 w-4" /> : icon}
      <span>{label}</span>
    </Link>
  );
}

export function Badge({ children, tone = "mint" }: { children: React.ReactNode; tone?: "mint" | "lavender" | "amber" | "navy" }) {
  return <span className={cn(
    "inline-flex rounded-full border px-3 py-1 text-xs font-bold",
    tone === "mint" && "border-app-success/40 bg-app-success/15 text-app-text",
    tone === "lavender" && "border-app-border bg-app-selection/40 text-app-text",
    tone === "amber" && "border-app-warning/45 bg-app-warning/15 text-app-text",
    tone === "navy" && "border-app-accent bg-app-accent text-app-accent-contrast"
  )}>{children}</span>;
}

export function AlertBanner({ children, type = "info", className = "" }: { children: React.ReactNode; type?: "info" | "risk" | "success"; className?: string }) {
  const Icon = type === "success" ? CheckCircle2 : AlertCircle;
  return (
    <div className={cn(
      "flex gap-3 rounded-2xl border p-4 text-sm text-app-text",
      type === "risk" && "border-app-warning/60 bg-app-warning/15",
      type === "success" && "border-app-success/50 bg-app-success/15",
      type === "info" && "border-app-border bg-app-surface",
      className
    )}>
      <Icon className={cn(
        "mt-0.5 h-5 w-5 shrink-0",
        type === "risk" ? "text-app-warning" : type === "success" ? "text-app-success" : "text-app-accent"
      )} />
      <div>{children}</div>
    </div>
  );
}

export function EmptyState({ title, description, actionHref, actionLabel }: { title: string; description: string; actionHref?: string; actionLabel?: string }) {
  return (
    <Card className="text-center">
      <Sparkles className="mx-auto mb-3 h-7 w-7 text-positive" />
      <p className="text-lg font-bold text-app-text">{title}</p>
      <p className="mt-2 text-sm text-app-muted">{description}</p>
      {actionHref && actionLabel && <Button href={actionHref} className="mt-4">{actionLabel}</Button>}
    </Card>
  );
}

export function LoadingState() {
  return <div className="flex items-center gap-2 text-sm text-app-muted"><Loader2 className="h-4 w-4 animate-spin" /> Carregando...</div>;
}

export function MetricCard({ label, value }: { label: string; value: string | number }) {
  return (
    <Card className="p-4">
      <p className="text-xs font-bold uppercase tracking-wide text-app-muted">{label}</p>
      <p className="mt-2 text-2xl font-black text-app-text">{value}</p>
    </Card>
  );
}
