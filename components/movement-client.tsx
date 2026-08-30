"use client";

import Link from "next/link";
import { Instagram, Music2 } from "lucide-react";
import { useMemo, useState } from "react";
import { Badge, Button, Card, SelectableButton } from "@/components/ui";
import { ExerciseImage } from "@/components/exercise-image";

type Instruction = {
  id: string;
  slug: string;
  title: string;
  area: string;
  category: string;
  level: number;
  instructionType: string;
  shortDescription: string;
  objective: string;
  durationSeconds: number | null;
  sets: number | null;
  reps: string | null;
  restSeconds: number | null;
  intensity: string;
  equipment: string;
  imageKey: string;
};

const tabs = [
  { id: "", label: "Todas", categories: [] },
  { id: "quick", label: "Pausas rapidas", categories: ["BREATHING", "WORK_BREAK", "MOBILITY"] },
  { id: "stretch", label: "Alongamentos", categories: ["STRETCHING", "MOBILITY"] },
  { id: "home", label: "Funcional em casa", categories: ["HOME_FUNCTIONAL"] },
  { id: "yoga", label: "Yoga", categories: ["YOGA"] },
  { id: "cardio", label: "Cardio leve", categories: ["LOW_IMPACT_CARDIO", "WALKING"] },
  { id: "rope", label: "Pular corda", categories: ["JUMP_ROPE"] },
  { id: "fight", label: "Luta", categories: ["SHADOW_BOXING"] }
];

function volumeText(item: Instruction) {
  if (item.instructionType === "REPS_BASED") return `${item.sets || 2} series de ${item.reps || "8 a 12"} repeticoes`;
  if (item.durationSeconds) return `${Math.round(item.durationSeconds / 60)} min`;
  return "Pratica guiada";
}

export function MovementClient({
  instructions,
  userLevel,
  allowSocialButtons,
  socialReason,
  instagramUrl,
  spotifyUrl,
  recommendedInstructionSlug,
  recommendationReason
}: {
  instructions: Instruction[];
  userLevel: number;
  allowSocialButtons: boolean;
  socialReason: string;
  instagramUrl: string;
  spotifyUrl: string;
  recommendedInstructionSlug: string;
  recommendationReason: string;
}) {
  const [tab, setTab] = useState("");
  const [availability, setAvailability] = useState("disponiveis");
  const [intensity, setIntensity] = useState("");
  const activeTab = tabs.find((item) => item.id === tab) || tabs[0];

  const filtered = useMemo(() => instructions.filter((item) => {
    const tabOk = !activeTab.categories.length || activeTab.categories.includes(item.category);
    const availabilityOk = availability === "todas" ? true : availability === "bloqueadas" ? item.level > userLevel : item.level <= userLevel;
    const intensityOk = !intensity || item.intensity === intensity;
    return tabOk && availabilityOk && intensityOk;
  }), [activeTab.categories, availability, instructions, intensity, userLevel]);

  return (
    <div className="grid gap-6">
      <Card>
        <h2 className="text-xl font-black text-navy">Pratica recomendada para hoje</h2>
        <p className="mt-2 text-sm text-text">{recommendationReason}</p>
        {recommendedInstructionSlug && <Button href={`/app/exercicios/${recommendedInstructionSlug}`} className="mt-4">Abrir ficha recomendada</Button>}
      </Card>

      <Card>
        <div className="flex flex-wrap gap-2">
          {tabs.map((item) => (
            <SelectableButton key={item.id || "all"} label={item.label} selected={tab === item.id} onClick={() => setTab(item.id)} variant="filter" className="text-xs" />
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            Intensidade
            <select value={intensity} onChange={(event) => setIntensity(event.target.value)}>
              <option value="">Todas</option>
              <option value="VERY_LIGHT">Muito leve</option>
              <option value="LIGHT">Leve</option>
              <option value="MODERATE">Moderada</option>
              <option value="MODERATE_PLUS">Moderada plus</option>
            </select>
          </label>
          <label className="grid gap-2">
            Disponibilidade
            <select value={availability} onChange={(event) => setAvailability(event.target.value)}>
              <option value="disponiveis">Disponiveis</option>
              <option value="bloqueadas">Bloqueadas</option>
              <option value="todas">Todas</option>
            </select>
          </label>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-black text-navy">{allowSocialButtons ? "Som e compartilhamento" : "Modo sem distracao"}</h2>
        <p className="mt-2 text-sm text-text">{socialReason}</p>
        {!allowSocialButtons && <p className="mt-3 rounded-2xl bg-amber/10 p-3 text-sm font-bold text-amber-700">Nao recomendado agora. Use somente se isso ajudar sua pratica sem virar distracao.</p>}
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {spotifyUrl ? <a className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-positive px-5 py-3 text-sm font-bold text-white" href={spotifyUrl} target="_blank" rel="noopener noreferrer"><Music2 className="h-4 w-4" /> Abrir Spotify</a> : <span className="rounded-2xl bg-ice px-5 py-3 text-center text-sm font-bold text-navy">Spotify em breve</span>}
          {instagramUrl ? <a className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-navy px-5 py-3 text-sm font-bold text-white" href={instagramUrl} target="_blank" rel="noopener noreferrer"><Instagram className="h-4 w-4" /> Abrir Instagram</a> : <span className="rounded-2xl bg-ice px-5 py-3 text-center text-sm font-bold text-navy">Instagram em breve</span>}
        </div>
      </Card>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => {
          const locked = item.level > userLevel;
          return (
            <Card key={item.id} className={`${item.slug === recommendedInstructionSlug ? "ring-2 ring-positive" : ""} ${locked ? "opacity-75" : ""}`}>
              <ExerciseImage imageKey={item.imageKey} title={item.title} />
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge tone={locked ? "lavender" : "mint"}>{item.category}</Badge>
                <Badge tone="amber">{item.intensity}</Badge>
                <span className="text-xs font-bold text-slate-500">Nivel {item.level}</span>
              </div>
              <h2 className="mt-3 text-xl font-black text-navy">{item.title}</h2>
              <p className="mt-2 text-sm text-text">{item.shortDescription}</p>
              <p className="mt-3 rounded-2xl bg-ice p-3 text-sm font-bold text-navy">{volumeText(item)}</p>
              {locked ? <p className="mt-4 rounded-2xl bg-ice p-3 text-center text-sm font-bold text-navy">Desbloqueia no nivel {item.level}</p> : <Link className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-2xl bg-navy px-5 py-3 text-sm font-bold text-white" href={`/app/exercicios/${item.slug}`}>Abrir ficha</Link>}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
