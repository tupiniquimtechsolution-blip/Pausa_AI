import { redirect } from "next/navigation";
import { Card } from "@/components/ui";
import { requireUser } from "@/lib/auth";
import { BreathingVisual } from "@/components/breathing-visual";

export default async function BreathingPage() {
  const user = await requireUser();
  if (!user.onboardingCompleted) redirect("/app/onboarding");
  return (
    <div className="mx-auto grid max-w-3xl gap-5">
      <Card>
        <h1 className="text-3xl font-black text-navy">Respiracao 4-4-6</h1>
        <p className="mt-2 text-text">Use alguns ciclos para reduzir urgencia e voltar ao corpo com mais calma.</p>
      </Card>
      <Card>
        <BreathingVisual enableSound />
      </Card>
    </div>
  );
}
