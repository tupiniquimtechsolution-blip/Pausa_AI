"use client";

import { useState } from "react";
import { Badge, Card } from "@/components/ui";
import { InstructionRunner } from "@/components/instruction-runner";
import { stretchById } from "@/lib/stretching-exercises";

type Instruction = {
  id: string;
  slug: string;
  title: string;
  instructionType: string;
  durationSeconds: number | null;
  sets: number | null;
  reps: string | null;
  restSeconds: number | null;
  category: string;
  area: string;
  objective: string;
  howToSteps: string[];
  postureTips: string[];
  breathingTips: string[];
  commonMistakes: string[];
  recommendedWhen: string[];
  avoidWhen: string[];
  safetyNotes: string[];
};

export function ExerciseDetailMode({ instruction, checkinId }: { instruction: Instruction; checkinId?: string }) {
  const [mode, setMode] = useState<"quick" | "complete">("quick");
  const stretch = stretchById[instruction.slug];
  const quickSteps = instruction.howToSteps.slice(0, 4);

  return (
    <div className="grid gap-5">
      <div className="grid grid-cols-2 gap-2 rounded-2xl bg-ice p-1 dark:bg-slate-950">
        <button
          type="button"
          onClick={() => setMode("quick")}
          className={`rounded-xl px-4 py-3 text-sm font-black transition ${mode === "quick" ? "bg-navy text-white shadow-soft" : "text-navy hover:bg-white/70 dark:hover:bg-slate-900"}`}
        >
          Modo rapido
        </button>
        <button
          type="button"
          onClick={() => setMode("complete")}
          className={`rounded-xl px-4 py-3 text-sm font-black transition ${mode === "complete" ? "bg-navy text-white shadow-soft" : "text-navy hover:bg-white/70 dark:hover:bg-slate-900"}`}
        >
          Modo completo
        </button>
      </div>

      {mode === "quick" ? (
        <Card>
          <div className="flex flex-wrap gap-2">
            <Badge tone="mint">Essencial para comecar</Badge>
            {instruction.durationSeconds && <Badge tone="lavender">{Math.round(instruction.durationSeconds / 60)} min</Badge>}
          </div>
          <h2 className="mt-4 text-2xl font-black text-navy">Comece por aqui</h2>
          <p className="mt-2 text-text">{stretch?.objective || instruction.objective}</p>
          {stretch && (
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl bg-ice p-3">
                <p className="text-xs font-black uppercase text-slate-500">Sensacao correta</p>
                <p className="mt-1 text-sm font-semibold text-navy">{stretch.correctFeeling}</p>
              </div>
              <div className="rounded-2xl bg-amber/10 p-3">
                <p className="text-xs font-black uppercase text-amber-700">Alerta</p>
                <p className="mt-1 text-sm font-semibold text-amber-800">{stretch.warningSigns.slice(0, 3).join(", ")}</p>
              </div>
            </div>
          )}
          <ul className="mt-4 grid gap-2 text-sm font-semibold text-text">
            {quickSteps.map((step) => <li key={step}>{step}</li>)}
          </ul>
        </Card>
      ) : stretch ? (
        <div className="grid gap-5 md:grid-cols-2">
          <Card className="md:col-span-2">
            <div className="flex flex-wrap gap-2">
              <Badge tone="lavender">{stretch.bodyRegion}</Badge>
              <Badge tone="mint">{stretch.duration}</Badge>
              <Badge tone="amber">{stretch.type}</Badge>
            </div>
            <h2 className="mt-4 text-2xl font-black text-navy">Ficha anatomica</h2>
            <p className="mt-2 text-text">{stretch.anatomicalNote}</p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <MiniInfo title="Musculos principais" value={stretch.primaryMuscles.join(", ")} />
              <MiniInfo title="Musculos secundarios" value={stretch.secondaryMuscles.length ? stretch.secondaryMuscles.join(", ") : "Sem secundarios principais."} />
              <MiniInfo title="Articulacoes" value={stretch.joints.join(", ")} />
            </div>
          </Card>
          <ListCard title="Como fazer" items={stretch.instructions} />
          <ListCard title="Indicado para" items={stretch.indicatedFor} />
          <ListCard title="Evitar ou adaptar se" items={stretch.avoidIf} />
          <ListCard title="Erros comuns" items={stretch.commonMistakes} />
          <Card>
            <h2 className="text-xl font-black text-navy">Respiracao e tempo</h2>
            <div className="mt-3 grid gap-3 text-sm text-text">
              <p><strong>Tempo:</strong> {stretch.duration}</p>
              <p><strong>Series:</strong> {stretch.sets}</p>
              <p><strong>Respiracao:</strong> {stretch.breathing}</p>
              <p><strong>Melhor momento:</strong> {stretch.bestMoment}</p>
            </div>
          </Card>
          <Card>
            <h2 className="text-xl font-black text-navy">Variacoes</h2>
            <div className="mt-3 grid gap-3 text-sm text-text">
              <p><strong>Facil:</strong> {stretch.easyVariation}</p>
              <p><strong>Avancada:</strong> {stretch.advancedVariation}</p>
              <p><strong>Sensacao correta:</strong> {stretch.correctFeeling}</p>
            </div>
          </Card>
          <Card className="md:col-span-2">
            <h2 className="text-xl font-black text-navy">Sinais de alerta</h2>
            <ul className="mt-3 grid gap-2 text-sm text-text">{stretch.warningSigns.map((item) => <li key={item}>{item}</li>)}</ul>
          </Card>
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          <ListCard title="Como fazer" items={instruction.howToSteps} />
          <ListCard title="Postura" items={instruction.postureTips} />
          <ListCard title="Respiracao" items={instruction.breathingTips} />
          <ListCard title="Erros comuns" items={instruction.commonMistakes} />
          <ListCard title="Quando fazer" items={instruction.recommendedWhen} />
          <ListCard title="Quando evitar" items={instruction.avoidWhen} />
          <Card className="md:col-span-2">
            <h2 className="text-xl font-black text-navy">Cuidados</h2>
            <ul className="mt-3 grid gap-2 text-sm text-text">{instruction.safetyNotes.map((item) => <li key={item}>{item}</li>)}</ul>
          </Card>
        </div>
      )}

      <InstructionRunner instruction={{
        id: instruction.id,
        slug: instruction.slug,
        title: instruction.title,
        instructionType: instruction.instructionType,
        durationSeconds: instruction.durationSeconds,
        sets: instruction.sets,
        reps: instruction.reps,
        restSeconds: instruction.restSeconds,
        category: instruction.category,
        area: instruction.area,
        checkinId
      }} />
    </div>
  );
}

function MiniInfo({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl bg-ice p-3">
      <p className="text-xs font-black uppercase text-slate-500">{title}</p>
      <p className="mt-1 text-sm font-semibold text-navy">{value}</p>
    </div>
  );
}

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <h2 className="text-xl font-black text-navy">{title}</h2>
      <ul className="mt-3 grid gap-2 text-sm text-text">{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </Card>
  );
}
