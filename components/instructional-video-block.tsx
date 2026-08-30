import { ListChecks } from "lucide-react";
import { Badge } from "@/components/ui";
import { cn } from "@/lib/utils";

type InstructionalVideoLike = {
  title: string;
  category: string;
  durationSeconds: number;
  videoUrl: string;
  thumbnailUrl: string;
  tags: string;
  benefitPrimary: string;
  narrationScript: string;
  batchWave: number;
  status: string;
};

function parseList(value: string) {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.map(String).filter(Boolean) : [];
  } catch {
    return [];
  }
}

function durationLabel(seconds: number) {
  if (seconds < 120) return `${seconds}s`;
  return `${Math.round(seconds / 60)} min`;
}

export function InstructionalVideoBlock({
  video,
  compact = false,
  className = ""
}: {
  video?: InstructionalVideoLike | null;
  compact?: boolean;
  className?: string;
}) {
  if (!video || video.status !== "PUBLISHED" || !video.videoUrl) return null;

  const hasVideo = true;
  const hasThumbnail = hasVideo && Boolean(video.thumbnailUrl);
  const tags = parseList(video.tags);

  return (
    <section className={cn("rounded-3xl border border-line bg-white/90 p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900/90", className)}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase text-slate-500 dark:text-slate-400">Video guiado</p>
          <h2 className={cn("mt-1 font-black text-navy dark:text-slate-50", compact ? "text-xl" : "text-2xl")}>{video.title}</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge tone="lavender">Onda {video.batchWave}</Badge>
          <Badge tone="mint">Disponivel</Badge>
          <Badge tone="navy">{durationLabel(video.durationSeconds)}</Badge>
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-3xl border border-line bg-ice dark:border-slate-800 dark:bg-slate-950">
        <video
          className="aspect-[9/16] max-h-[560px] w-full bg-slate-950 object-cover md:aspect-video"
          controls
          preload="metadata"
          poster={hasThumbnail ? video.thumbnailUrl : undefined}
        >
          <source src={video.videoUrl} type="video/mp4" />
        </video>
      </div>

      {!compact && (
        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-2xl bg-ice p-4 dark:bg-slate-950">
            <p className="text-xs font-black uppercase text-slate-500 dark:text-slate-400">Beneficio principal</p>
            <p className="mt-2 text-sm font-semibold text-text dark:text-slate-300">{video.benefitPrimary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.slice(0, 6).map((tag) => <Badge key={tag} tone="mint">{tag}</Badge>)}
            </div>
          </div>
          <div className="rounded-2xl bg-ice p-4 dark:bg-slate-950">
            <p className="flex items-center gap-2 text-xs font-black uppercase text-slate-500 dark:text-slate-400">
              <ListChecks className="h-4 w-4" /> Roteiro base
            </p>
            <p className="mt-2 whitespace-pre-line text-sm font-semibold text-text dark:text-slate-300">{video.narrationScript}</p>
          </div>
        </div>
      )}
    </section>
  );
}
