"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { AlertBanner, Button } from "@/components/ui";

const goals = ["Dormir melhor", "Ter mais energia", "Reduzir estresse", "Melhorar foco", "Criar rotina", "Se movimentar mais"];
const times = ["Manha", "Tarde", "Noite"];
const movements = ["Bem leve", "Sem impacto", "Energia rapida", "Mobilidade", "Pular corda", "Yoga", "Luta sombra leve", "Funcional em casa"];
const intensities = ["Bem leve", "Moderado", "Desafiador, mas seguro"];

type FormState = {
  mainGoal: string;
  workHours: string;
  freeHours: string;
  sleepHours: string;
  preferredTime: string;
  movementPreferences: string[];
  trainingIntensityPreference: string;
};

export function OnboardingFlow() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [pending, startTransition] = useTransition();
  const [form, setForm] = useState<FormState>({
    mainGoal: "",
    workHours: "8",
    freeHours: "2",
    sleepHours: "7",
    preferredTime: "",
    movementPreferences: [],
    trainingIntensityPreference: ""
  });

  const progress = useMemo(() => Math.round(((step + 1) / 5) * 100), [step]);

  function update(key: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function toggleMovement(value: string) {
    setForm((current) => ({
      ...current,
      movementPreferences: current.movementPreferences.includes(value)
        ? current.movementPreferences.filter((item) => item !== value)
        : [...current.movementPreferences, value]
    }));
  }

  function next() {
    setError("");
    if (step === 0 && !form.mainGoal) return setError("Escolha um objetivo para comecar.");
    if (step === 1 && (!form.workHours || !form.freeHours || !form.sleepHours || !form.preferredTime)) return setError("Preencha sua rotina para personalizar o plano.");
    if (step === 2 && form.movementPreferences.length === 0) return setError("Escolha pelo menos uma forma de movimento.");
    if (step === 3 && !form.trainingIntensityPreference) return setError("Escolha como prefere comecar.");
    setStep((current) => Math.min(4, current + 1));
  }

  function finish() {
    setError("");
    const payload = {
      mainGoal: form.mainGoal,
      dailyTime: Number(form.freeHours) <= 1 ? "3 minutos" : Number(form.freeHours) <= 2 ? "5 minutos" : "10 minutos",
      preferredTime: form.preferredTime,
      stressLevel: "Medio",
      difficultyArea: form.mainGoal,
      workHours: Number(form.workHours),
      freeHours: Number(form.freeHours),
      sleepHours: Number(form.sleepHours),
      movementPreferences: JSON.stringify(form.movementPreferences),
      trainingIntensityPreference: form.trainingIntensityPreference
    };

    startTransition(async () => {
      const response = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setError(data.error || "Nao conseguimos salvar agora. Tente novamente.");
        return;
      }
      router.push(data.redirectTo || "/app");
    });
  }

  return (
    <div className="grid gap-6">
      <div>
        <div className="h-2 overflow-hidden rounded-full bg-line">
          <div className="h-full rounded-full bg-positive transition-all" style={{ width: `${progress}%` }} />
        </div>
        <p className="mt-2 text-xs font-bold uppercase text-slate-500">Etapa {step + 1} de 5</p>
      </div>
      {error && <AlertBanner type="risk">{error}</AlertBanner>}

      {step === 0 && (
        <Step title="O que voce quer melhorar primeiro?" description="Escolha um foco principal. Ele ajuda a sugerir pausas mais possiveis para sua rotina.">
          <OptionGrid options={goals} selected={[form.mainGoal]} onSelect={(value) => update("mainGoal", value)} />
        </Step>
      )}

      {step === 1 && (
        <Step title="Como esta sua rotina hoje?" description="Nao precisa ser exato. Uma estimativa ja ajuda a montar um comeco mais realista.">
          <div className="grid gap-4 md:grid-cols-3">
            <NumberField label="Trabalho/estudo por dia" value={form.workHours} onChange={(value) => update("workHours", value)} />
            <NumberField label="Horas livres por dia" value={form.freeHours} onChange={(value) => update("freeHours", value)} />
            <NumberField label="Sono medio por dia" value={form.sleepHours} onChange={(value) => update("sleepHours", value)} />
          </div>
          <div className="mt-4">
            <p className="mb-3 text-sm font-bold text-navy">Melhor horario para pausas</p>
            <OptionGrid options={times} selected={[form.preferredTime]} onSelect={(value) => update("preferredTime", value)} />
          </div>
        </Step>
      )}

      {step === 2 && (
        <Step title="Que tipo de movimento combina com voce?" description="Voce pode escolher mais de uma opcao. As praticas intensas entram como escolha, nunca como obrigacao.">
          <OptionGrid options={movements} selected={form.movementPreferences} onSelect={toggleMovement} multi />
        </Step>
      )}

      {step === 3 && (
        <Step title="Como voce prefere comecar?" description="A intensidade pode ser ajustada depois. O objetivo e criar consistencia sem excesso.">
          <OptionGrid options={intensities} selected={[form.trainingIntensityPreference]} onSelect={(value) => update("trainingIntensityPreference", value)} />
        </Step>
      )}

      {step === 4 && (
        <Step title="Pronto. Vamos com pequenas pausas possiveis." description="Seu plano inicial vai combinar check-ins, missoes leves e movimento guiado conforme seu ritmo.">
          <div className="rounded-3xl bg-mint/50 p-5 text-sm font-semibold text-emerald-950">
            <CheckCircle2 className="mb-3 h-6 w-6" />
            Voce comeca com o foco em {form.mainGoal.toLowerCase()} e pode ajustar intensidade, alarmes e preferencias no perfil.
          </div>
        </Step>
      )}

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <Button variant="secondary" type="button" className={step === 0 ? "invisible" : ""} onClick={() => setStep((current) => Math.max(0, current - 1))}>
          <ArrowLeft className="h-4 w-4" /> Voltar
        </Button>
        {step < 4 ? (
          <Button type="button" onClick={next}>Continuar <ArrowRight className="h-4 w-4" /></Button>
        ) : (
          <Button type="button" onClick={finish}>{pending ? "Salvando..." : "Comecar agora"}</Button>
        )}
      </div>
    </div>
  );
}

function Step({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-black text-navy">{title}</h2>
      <p className="mt-2 text-text">{description}</p>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function OptionGrid({ options, selected, onSelect, multi = false }: { options: string[]; selected: string[]; onSelect: (value: string) => void; multi?: boolean }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2" data-multi-select={multi ? "true" : "false"}>
      {options.map((option) => {
        const active = selected.includes(option);
        return (
          <button
            type="button"
            key={option}
            onClick={() => onSelect(option)}
            aria-pressed={active}
            className={`flex min-h-16 items-center justify-between gap-3 rounded-2xl border px-4 py-4 text-left text-sm font-bold transition ${active ? "border-positive bg-navy text-white shadow-soft ring-2 ring-positive/30" : "border-line bg-ice text-slate-700 hover:border-positive hover:bg-mint/30"}`}
            style={active ? { backgroundColor: "#172554", color: "#fff" } : undefined}
          >
            <span>{option}</span>
            {active && <CheckCircle2 className="h-5 w-5 shrink-0 text-mint" />}
          </button>
        );
      })}
    </div>
  );
}

function NumberField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-navy">
      {label}
      <input min={0} max={24} type="number" value={value} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}
