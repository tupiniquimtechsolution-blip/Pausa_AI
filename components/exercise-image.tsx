"use client";

import { useState } from "react";
import Image from "next/image";
import { Activity } from "lucide-react";
import { exerciseImagePath } from "@/lib/exercise-images";
import { exerciseImagePresentation } from "@/lib/exercise-image-presentation";
import { cn } from "@/lib/utils";

export function ExerciseImage({ imageKey, title, className = "", priority = false }: { imageKey: string; title: string; className?: string; priority?: boolean }) {
  const [failed, setFailed] = useState(false);
  const src = exerciseImagePath(imageKey);
  if (!src || failed) {
    return (
      <div className={cn("grid aspect-[16/10] place-items-center rounded-3xl border border-line bg-mint/30 text-center text-navy", className)}>
        <div className="grid gap-2 px-5">
          <Activity className="mx-auto h-10 w-10 text-positive" />
          <p className="text-sm font-black">{title}</p>
          <p className="text-xs font-semibold text-slate-600">Imagem sera exibida quando o arquivo for adicionado.</p>
        </div>
      </div>
    );
  }
  const presentation = exerciseImagePresentation(src);
  return (
    <div className={cn("aspect-[16/10] w-full overflow-hidden rounded-3xl", className)}>
      <Image
        src={src}
        alt={title}
        width={1280}
        height={800}
        sizes="(max-width: 768px) 100vw, 66vw"
        unoptimized
        priority={priority}
        className="h-full w-full object-cover"
        style={{
          objectPosition: presentation.focus,
          transform: `scale(${presentation.zoom})`,
          transformOrigin: presentation.focus
        }}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
