"use client";

import { useRef } from "react";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui";

export function AccessibleGuidance({ text, audioSrc }: { text: string; audioSrc?: string | null }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  return (
    <section className="grid gap-3 rounded-2xl border border-line bg-ice p-4" aria-labelledby="guidance-title">
      <div>
        <p id="guidance-title" className="text-xs font-black uppercase tracking-wide text-slate-500">Orientação em texto</p>
        <p className="mt-2 text-sm font-semibold text-navy">{text}</p>
      </div>
      {audioSrc ? (
        <div className="grid gap-2">
          <audio ref={audioRef} controls preload="none" src={audioSrc} className="w-full">
            Seu navegador não oferece reprodução de áudio. Use a orientação em texto acima.
          </audio>
          <Button
            variant="secondary"
            onClick={() => {
              if (!audioRef.current) return;
              audioRef.current.pause();
              audioRef.current.currentTime = 0;
              void audioRef.current.play();
            }}
          >
            <RotateCcw className="h-4 w-4" /> Repetir do início
          </Button>
        </div>
      ) : (
        <p className="text-xs font-semibold text-slate-500">Áudio opcional indisponível nesta prática. Nenhuma reprodução automática será iniciada.</p>
      )}
    </section>
  );
}
