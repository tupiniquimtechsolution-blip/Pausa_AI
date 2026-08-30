import { redirect } from "next/navigation";
import { FocusTimer } from "@/components/focus-timer";
import { Card } from "@/components/ui";
import { requireUser } from "@/lib/auth";

export default async function FocusPage() {
  const user = await requireUser();
  if (!user.onboardingCompleted) redirect("/app/onboarding");

  return (
    <div className="mx-auto grid max-w-3xl gap-5">
      <Card>
        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Mente</p>
        <h1 className="mt-1 text-3xl font-black text-navy">Modo Foco</h1>
        <p className="mt-2 text-text">
          Organize um ciclo de concentração e faça uma pausa consciente quando ele terminar.
        </p>
      </Card>
      <FocusTimer suggestedExerciseSlug="pausa-sem-tela" />
    </div>
  );
}
