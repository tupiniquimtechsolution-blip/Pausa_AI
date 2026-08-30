"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Activity, ChevronLeft, ChevronRight } from "lucide-react";
import { exerciseImagePath, exerciseImageSequence } from "@/lib/exercise-images";
import { cn } from "@/lib/utils";

export function ExerciseCardCarousel({
  imageKey,
  title,
  slug,
  count = 3,
  className = ""
}: {
  imageKey: string;
  title: string;
  slug: string;
  count?: number;
  className?: string;
}) {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const images = useMemo(() => {
    return Array.from(new Set([exerciseImagePath(imageKey), ...exerciseImageSequence(imageKey, count)]));
  }, [count, imageKey]);
  const visibleImages = images.length ? images : [""];
  const hasMany = visibleImages.length > 1;
  const src = visibleImages[current];

  function open() {
    router.push(`/app/exercicios/${slug}`);
  }

  function move(delta: number) {
    setCurrent((value) => Math.min(visibleImages.length - 1, Math.max(0, value + delta)));
  }

  function finishSwipe(x: number) {
    if (touchStart === null) return;
    const delta = touchStart - x;
    if (Math.abs(delta) >= 50) move(delta > 0 ? 1 : -1);
    setTouchStart(null);
  }

  if (!src || failed[current]) {
    return (
      <button type="button" onClick={open} className={cn("grid aspect-[16/10] w-full place-items-center rounded-3xl border border-line bg-mint/30 text-center text-navy", className)}>
        <div className="grid gap-2 px-5">
          <Activity className="mx-auto h-10 w-10 text-positive" />
          <p className="text-sm font-black">{title}</p>
          <p className="text-xs font-semibold text-slate-600">Abrir ficha detalhada</p>
        </div>
      </button>
    );
  }

  return (
    <div
      className={cn("relative overflow-hidden rounded-3xl", className)}
      onTouchStart={(event) => setTouchStart(event.changedTouches[0]?.clientX ?? null)}
      onTouchEnd={(event) => finishSwipe(event.changedTouches[0]?.clientX ?? 0)}
    >
      <button type="button" onClick={open} className="block w-full cursor-pointer" aria-label={`Abrir ficha de ${title}`}>
        <Image
          src={src}
          alt={title}
          width={1280}
          height={800}
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized
          className="aspect-[16/10] w-full object-cover"
          onError={() => setFailed((value) => ({ ...value, [current]: true }))}
        />
      </button>
      {hasMany && (
        <>
          <button type="button" onClick={() => move(-1)} disabled={current === 0} className="absolute left-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy shadow-soft disabled:opacity-35" aria-label="Imagem anterior">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => move(1)} disabled={current === visibleImages.length - 1} className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy shadow-soft disabled:opacity-35" aria-label="Proxima imagem">
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1">
            {visibleImages.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setCurrent(index)}
                className={cn("h-2 w-2 rounded-full bg-white/70 ring-1 ring-navy/10", index === current && "w-5 bg-mint")}
                aria-label={`Ir para imagem ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
