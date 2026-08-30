"use client";

import { useState } from "react";
import Image from "next/image";
import { Activity, Maximize2 } from "lucide-react";
import type { ExerciseImagePresentation } from "@/lib/exercise-image-presentation";
import { cn } from "@/lib/utils";

function SequenceFrame({
  src,
  title,
  description,
  index,
  presentation,
  className = ""
}: {
  src: string;
  title: string;
  description?: string;
  index: number;
  presentation?: ExerciseImagePresentation;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={cn("grid aspect-[4/3] min-w-[220px] place-items-center rounded-3xl border border-line bg-mint/25 p-4 text-center text-navy dark:border-slate-800 dark:bg-slate-800", className)}>
        <div className="grid gap-2">
          <Activity className="mx-auto h-8 w-8 text-positive" />
          <p className="text-xs font-black uppercase text-slate-500">Imagem {index + 1}</p>
          <p className="text-sm font-black">{description || title}</p>
          <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">Placeholder: adicione o PNG neste caminho para substituir.</p>
        </div>
      </div>
    );
  }
  return (
    <figure className={cn("min-w-[220px]", className)}>
      <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl">
        <Image
          src={src}
          alt={`${title} - passo ${index + 1}${description ? `: ${description}` : ""}`}
          width={1024}
          height={768}
          sizes="(max-width: 640px) 80vw, 33vw"
          unoptimized
          priority={index === 0}
          className="h-full w-full object-cover"
          style={{
            objectPosition: presentation?.focus || "50% 50%",
            transform: `scale(${presentation?.zoom || 1})`,
            transformOrigin: presentation?.focus || "50% 50%"
          }}
          onError={() => setFailed(true)}
        />
      </div>
      {description && <figcaption className="mt-2 text-xs font-bold text-slate-500">Passo {index + 1}: {description}</figcaption>}
    </figure>
  );
}

export function ImageSequence({
  sources,
  title,
  descriptions = [],
  presentations = [],
  className = ""
}: {
  sources: string[];
  title: string;
  descriptions?: string[];
  presentations?: ExerciseImagePresentation[];
  className?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const visibleSources = sources.length ? sources : [];
  return (
    <div className={cn("grid gap-3", className)}>
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-black uppercase text-slate-500">Sequencia visual</p>
        <button type="button" className="inline-flex items-center gap-1 rounded-full bg-ice px-3 py-1 text-xs font-black text-navy dark:bg-slate-800 dark:text-slate-100" onClick={() => setExpanded((value) => !value)}>
          <Maximize2 className="h-3 w-3" /> {expanded ? "Compactar" : "Ampliar"}
        </button>
      </div>
      <div className={cn("flex gap-3 overflow-x-auto pb-2", expanded && "grid overflow-visible sm:grid-cols-2 lg:grid-cols-3")}>
        {visibleSources.map((src, index) => (
          <SequenceFrame
            key={`${src}-${index}`}
            src={src}
            title={title}
            description={descriptions[index]}
            index={index}
            presentation={presentations[index]}
            className={expanded ? "min-w-0" : ""}
          />
        ))}
      </div>
    </div>
  );
}
