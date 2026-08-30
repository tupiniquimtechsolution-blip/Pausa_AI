import { redirect } from "next/navigation";
import { Card } from "@/components/ui";
import { OnboardingFlow } from "@/components/onboarding-flow";
import { requireUser } from "@/lib/auth";

export default async function OnboardingPage() {
  const user = await requireUser();
  if (user.onboardingCompleted) redirect("/app");
  return (
    <div className="mx-auto max-w-2xl">
      <Card>
        <h1 className="text-3xl font-black text-navy">Vamos personalizar sua pausa</h1>
        <p className="mt-2 text-text">Responda em poucos passos para o Pausa AI sugerir missoes e movimentos possiveis para sua rotina.</p>
        <div className="mt-6">
          <OnboardingFlow />
        </div>
      </Card>
    </div>
  );
}
