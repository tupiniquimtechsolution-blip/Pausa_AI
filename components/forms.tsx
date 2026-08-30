"use client";

import { FormEvent, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Button, AlertBanner } from "@/components/ui";
import { checkinTagOptions } from "@/lib/checkin-refinement";
import { cn } from "@/lib/utils";
import { createCompletionToken } from "@/lib/completion-token";

type Field = { name: string; label: string; type?: string; options?: string[]; textarea?: boolean };

export function JsonForm({
  fields,
  endpoint,
  button,
  defaults = {},
  successMessage,
  method
}: {
  fields: Field[];
  endpoint: string;
  button: string;
  defaults?: Record<string, string | number>;
  successMessage?: string;
  method?: "POST" | "PATCH";
}) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [pending, setPending] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    setError("");
    setSuccess("");
    setPending(true);
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    try {
      const response = await fetch(endpoint, {
        method: method || (endpoint.includes("/admin/") ? "PATCH" : "POST"),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload)
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(data.error || "Nao conseguimos salvar agora. Tente novamente.");
        return;
      }
      if (data.redirectTo) {
        window.location.assign(data.redirectTo);
        return;
      }
      else {
        setSuccess(successMessage || data.message || "Salvo com sucesso.");
        router.refresh();
      }
    } catch {
      setError("Nao conseguimos conectar agora. Verifique sua rede e tente novamente.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-4">
      {error && <AlertBanner type="risk">{error}</AlertBanner>}
      {success && <AlertBanner type="success">{success}</AlertBanner>}
      {fields.map((field) => (
        field.type === "hidden" ? (
          <input key={field.name} type="hidden" name={field.name} value={defaults[field.name] || ""} />
        ) : <div className="grid gap-2" key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          {field.options ? (
            <select id={field.name} name={field.name} defaultValue={defaults[field.name] || ""} required>
              <option value="" disabled>Selecione</option>
              {field.options.map((option) => <option key={option}>{option}</option>)}
            </select>
          ) : field.textarea ? (
            <textarea id={field.name} name={field.name} defaultValue={defaults[field.name] || ""} rows={4} />
          ) : (
            <input id={field.name} name={field.name} type={field.type || "text"} defaultValue={defaults[field.name] || ""} required={field.type !== "optional"} />
          )}
        </div>
      ))}
      <Button type="submit" className="w-full" disabled={pending}>{pending ? "Salvando..." : button}</Button>
    </form>
  );
}

export function CheckinScale({
  name,
  label,
  captions,
  selected,
  onSelect
}: {
  name: string;
  label: string;
  captions: string[];
  selected?: number;
  onSelect?: (value: number) => void;
}) {
  return (
    <div className="grid gap-3 rounded-3xl border border-line bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
      <label>{label}</label>
      <div className="grid grid-cols-5 gap-2">
        {[1, 2, 3, 4, 5].map((value) => (
          <label key={value} className="cursor-pointer">
            <input
              className="peer sr-only"
              type="radio"
              name={name}
              value={value}
              required
              checked={selected === value}
              onChange={() => onSelect?.(value)}
            />
            <span
              role="button"
              aria-pressed={selected === value}
              className={cn(
                "relative grid min-h-20 place-items-center rounded-2xl border px-1 text-center text-xs font-bold transition",
                selected === value
                  ? "border-positive bg-navy text-white shadow-soft ring-2 ring-positive/30"
                  : "border-line bg-ice text-slate-600 hover:border-positive hover:bg-mint/30"
              )}
              style={selected === value ? { backgroundColor: "#172554", color: "#fff" } : undefined}
            >
              {selected === value && <CheckCircle2 className="absolute right-2 top-2 h-4 w-4 text-mint" />}
              <span className="text-xl">{value}</span>
              {captions[value - 1]}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export function CheckinForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [scores, setScores] = useState<Record<string, number | undefined>>({});
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [pending, startTransition] = useTransition();
  const completionToken = useRef(createCompletionToken());
  const preview = getCheckinPreview(scores, selectedTags);

  function setScore(name: string, value: number) {
    setScores((current) => ({ ...current, [name]: value }));
  }

  function toggleTag(tag: string) {
    setSelectedTags((current) => current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag]);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const formData = new FormData(event.currentTarget);
    const payload: Record<string, FormDataEntryValue | string[]> = Object.fromEntries(formData.entries());
    payload.manualTags = formData.getAll("manualTags").map(String);
    payload.completionToken = completionToken.current;
    startTransition(async () => {
      const response = await fetch("/api/checkins", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(data.error || "Nao conseguimos salvar agora. Tente novamente.");
        return;
      }
      router.push(data.redirectTo);
    });
  }

  return (
    <form onSubmit={submit} className="grid gap-4">
      {error && <AlertBanner type="risk">{error}</AlertBanner>}
      <div className={`rounded-3xl border p-4 transition ${preview.className}`}>
        <p className="text-sm font-black uppercase text-slate-500">Leitura em tempo real</p>
        <p className="mt-2 text-lg font-black text-navy">{preview.title}</p>
        <p className="mt-1 text-sm font-semibold text-text">{preview.description}</p>
      </div>
      <CheckinScale name="focusScore" label="Foco" captions={["Muito disperso", "Baixo", "Regular", "Bom", "Muito bom"]} selected={scores.focusScore} onSelect={(value) => setScore("focusScore", value)} />
      <CheckinScale name="moodScore" label="Humor" captions={["Muito ruim", "Baixo", "Neutro", "Bom", "Muito bom"]} selected={scores.moodScore} onSelect={(value) => setScore("moodScore", value)} />
      <CheckinScale name="stressScore" label="Estresse" captions={["Baixo", "Leve", "Medio", "Alto", "Muito alto"]} selected={scores.stressScore} onSelect={(value) => setScore("stressScore", value)} />
      <CheckinScale name="energyScore" label="Energia" captions={["Muito baixa", "Baixa", "Neutra", "Boa", "Alta"]} selected={scores.energyScore} onSelect={(value) => setScore("energyScore", value)} />
      <CheckinScale name="sleepScore" label="Sono" captions={["Muito ruim", "Ruim", "Regular", "Bom", "Muito bom"]} selected={scores.sleepScore} onSelect={(value) => setScore("sleepScore", value)} />
      <CheckinScale name="dispositionScore" label="Disposição" captions={["Muito baixa", "Baixa", "Regular", "Boa", "Muito boa"]} selected={scores.dispositionScore} onSelect={(value) => setScore("dispositionScore", value)} />
      <CheckinScale name="tirednessScore" label="Cansaço" captions={["Nenhum", "Leve", "Moderado", "Alto", "Muito alto"]} selected={scores.tirednessScore} onSelect={(value) => setScore("tirednessScore", value)} />
      <CheckinScale name="anxietyScore" label="Ansiedade percebida" captions={["Muito baixa", "Baixa", "Moderada", "Alta", "Muito alta"]} selected={scores.anxietyScore} onSelect={(value) => setScore("anxietyScore", value)} />
      <CheckinScale name="painScore" label="Dor percebida" captions={["Sem dor", "Leve", "Moderada", "Alta", "Muito alta"]} selected={scores.painScore} onSelect={(value) => setScore("painScore", value)} />
      <div className="grid gap-4 rounded-3xl border border-line bg-white p-4 sm:grid-cols-2 dark:border-slate-800 dark:bg-slate-900">
        <label className="grid gap-2 text-sm font-bold text-navy">
          Região de dor ou desconforto
          <input name="painRegion" maxLength={80} placeholder="Opcional: lombar, joelho..." />
        </label>
        <label className="grid gap-2 text-sm font-bold text-navy">
          Tempo disponível
          <select name="availableMinutes" defaultValue="5">
            <option value="3">3 minutos</option>
            <option value="5">5 minutos</option>
            <option value="10">10 minutos</option>
            <option value="15">15 minutos</option>
            <option value="30">30 minutos</option>
          </select>
        </label>
      </div>
      <div className="grid gap-3 rounded-3xl border border-line bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
        <div>
          <p className="font-bold text-navy">O que mais pesou hoje?</p>
          <p className="mt-1 text-sm text-text">Marque contextos que ajudam o Pausa AI a entender melhor sua pausa.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {checkinTagOptions.map((tag) => (
            <label key={tag} className="cursor-pointer">
              <input className="peer sr-only" type="checkbox" name="manualTags" value={tag} checked={selectedTags.includes(tag)} onChange={() => toggleTag(tag)} />
              <span
                role="button"
                aria-pressed={selectedTags.includes(tag)}
                className={cn(
                  "inline-flex min-h-10 items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition",
                  selectedTags.includes(tag)
                    ? "border-positive bg-navy text-white shadow-soft ring-2 ring-positive/30"
                    : "border-line bg-ice text-slate-600 hover:border-positive hover:bg-mint/30"
                )}
                style={selectedTags.includes(tag) ? { backgroundColor: "#172554", color: "#fff" } : undefined}
              >
                {selectedTags.includes(tag) && <CheckCircle2 className="h-4 w-4 text-mint" />}
                {tag}
              </span>
            </label>
          ))}
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="journalText">Quer escrever algo sobre seu dia?</label>
        <textarea id="journalText" name="journalText" rows={4} placeholder="Opcional. Exemplo: usei muita tela, estou sem foco, dormi mal ou estou sem energia." />
        <p className="text-xs font-semibold text-slate-500">A observacao ajuda a detectar temas como telas, preocupacao, cansaco, sono, trabalho, estudo e tensao corporal. Isso nao e diagnostico.</p>
      </div>
      <label className="flex items-start gap-3 rounded-3xl border border-line bg-white p-4 text-sm font-semibold text-text dark:border-slate-800 dark:bg-slate-900">
        <input className="mt-1 h-4 w-4" type="checkbox" required />
        <span>
          Entendo que meus dados de check-in serao usados para gerar historico e recomendacoes de bem-estar no Pausa AI. O app nao substitui atendimento medico, psicologico ou emergencia.
        </span>
      </label>
      <Button type="submit" className="w-full" disabled={pending}>{pending ? "Gerando..." : "Gerar minha orientacao"}</Button>
    </form>
  );
}

function getCheckinPreview(scores: Record<string, number | undefined>, tags: string[]) {
  if (!scores.focusScore && !scores.moodScore && !scores.stressScore && !scores.energyScore && !scores.sleepScore && !tags.length) {
    return {
      title: "Marque como voce esta agora",
      description: "A recomendacao vai se ajustar conforme seus scores e contextos.",
      className: "border-line bg-white dark:border-slate-800 dark:bg-slate-900"
    };
  }

  const focusSignal = (scores.focusScore || 5) <= 2 || tags.some((tag) => ["Telas", "Sem foco", "Trabalho", "Estudo"].includes(tag));
  const bodySupportTags = ["Dor no pescoco", "Dor no ombro", "Tensao nos ombros", "Costas superiores", "Dor de cabeca tensional", "Lombar rigida", "Dor lombar", "Quadril ou ciatica", "Dor no joelho", "Sinusite ou congestao"];
  const energySignal = (scores.energyScore || 5) <= 2 || tags.some((tag) => ["Cansaco", "Corpo tenso", "Agitacao", "Energia acumulada", "Pernas pesadas", "Baixa mobilidade", "Muito tempo sentado", "Maos e punhos cansados", ...bodySupportTags].includes(tag));
  const sleepSignal = (scores.sleepScore || 5) <= 2 || tags.some((tag) => ["Sono", "Dificuldade para dormir", "Sonolencia", "Relaxamento", ...bodySupportTags].includes(tag));
  const moodSignal = (scores.moodScore || 5) <= 2 || tags.some((tag) => ["Sem vontade", "Relacionamentos"].includes(tag));

  if (sleepSignal) {
    return {
      title: tags.includes("Sonolencia") ? "Alerta temporario pode ajudar" : "Sono pode ser a prioridade",
      description: tags.includes("Sonolencia") ? "Se isso se confirmar, vamos sugerir uma pratica de tirar sono sem substituir descanso adequado." : "Se isso se confirmar, vamos sugerir uma pausa de desaceleracao.",
      className: "border-lavender bg-lavender/30 dark:border-violet-500 dark:bg-violet-950/30"
    };
  }
  if (energySignal) {
    return {
      title: tags.some((tag) => ["Agitacao", "Energia acumulada"].includes(tag)) ? "Energia pode precisar descarregar" : "Energia pede cuidado leve",
      description: tags.some((tag) => bodySupportTags.includes(tag) || ["Pernas pesadas", "Baixa mobilidade", "Muito tempo sentado", "Maos e punhos cansados"].includes(tag)) ? "A recomendacao pode vir de alongamentos por regiao corporal, posicoes de descanso ou caminhada leve contextual." : "A ideia aqui e ativar ou descarregar o corpo sem transformar cuidado em cobranca.",
      className: "border-mint bg-mint/30 dark:border-emerald-500 dark:bg-emerald-950/30"
    };
  }
  if (focusSignal) {
    return {
      title: "Foco e telas apareceram como sinal",
      description: "Podemos reduzir estimulos antes de pedir produtividade.",
      className: "border-blue-200 bg-blue-50 dark:border-blue-700 dark:bg-blue-950/30"
    };
  }
  if (moodSignal) {
    return {
      title: "Humor pede gentileza",
      description: "A pausa deve ajudar a nomear o momento, sem forcar alegria.",
      className: "border-amber bg-amber/20 dark:border-amber dark:bg-amber/10"
    };
  }
  return {
    title: "Estado mais estavel",
    description: "Se mantiver assim, vamos sugerir uma pratica curta de manutencao.",
    className: "border-positive bg-mint/30 dark:border-emerald-500 dark:bg-emerald-950/30"
  };
}

export function ExerciseCompleteButton({ exerciseId, checkinId }: { exerciseId: string; checkinId?: string }) {
  const router = useRouter();
  const [done, setDone] = useState(false);
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();
  const completionToken = useRef(createCompletionToken());
  return (
    <div className="grid gap-2">
      <Button
        variant={done ? "secondary" : "primary"}
        className="w-full"
        type="button"
        onClick={() => {
          if (done) return;
          startTransition(async () => {
            const response = await fetch("/api/exercises/session", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ exerciseId, checkinId, completionToken: completionToken.current })
            });
            const data = await response.json().catch(() => ({}));
            if (!response.ok) {
              setMessage(data.error || "Nao conseguimos concluir agora.");
              return;
            }
            setDone(true);
            setMessage(`Exercicio concluido. +${data.xpAwarded} XP. Nivel da area: ${data.areaLevel}.`);
            router.refresh();
          });
        }}
      >
        {done ? "Exercicio concluido" : pending ? "Salvando..." : "Concluir exercicio"}
      </Button>
      {message && <p className="text-center text-xs font-bold text-positive">{message}</p>}
    </div>
  );
}

export function MissionCompleteButton({ missionId, checkinId }: { missionId?: string; checkinId?: string }) {
  const router = useRouter();
  const [done, setDone] = useState(false);
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();
  const completionToken = useRef(createCompletionToken());
  return (
    <div className="grid gap-2">
      <Button
        variant={done ? "secondary" : "primary"}
        className="w-full"
        type="button"
        onClick={() => {
          if (done) return;
          startTransition(async () => {
            const response = await fetch("/api/missions", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ missionId, checkinId, completionToken: completionToken.current })
            });
            const data = await response.json().catch(() => ({}));
            setDone(true);
            setMessage(data.leveledUp ? `Novo nivel alcancado: ${data.level}!` : data.alreadyCompleted ? "Essa missao ja foi concluida." : "+20 XP adicionados.");
            router.refresh();
          });
        }}
      >
        {done ? "Missao concluida" : pending ? "Marcando..." : "Marcar como concluida"}
      </Button>
      {message && <p className="text-center text-xs font-bold text-positive">{message}</p>}
    </div>
  );
}
