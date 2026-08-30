import { redirect } from "next/navigation";
import { AlertBanner, Card } from "@/components/ui";
import { CheckinForm } from "@/components/forms";
import { requireUser } from "@/lib/auth";

export default async function CheckinPage({ searchParams }: { searchParams: Promise<{ primeiro?: string }> }) {
  const user = await requireUser();
  const params = await searchParams;
  if (!user.onboardingCompleted) redirect("/app/onboarding");
  return (
    <div className="mx-auto max-w-3xl">
      {params.primeiro && (
        <AlertBanner type="success">
          Primeiro passo pronto. Este check-in leva menos de 1 minuto e ja mostra uma pausa possivel para o seu dia.
        </AlertBanner>
      )}
      <Card>
        <h1 className="text-3xl font-black text-navy">Como você está hoje?</h1>
        <p className="mt-2 text-text">Vamos cuidar do agora, sem tentar resolver tudo de uma vez.</p>
        <div className="mt-6">
          <CheckinForm />
        </div>
      </Card>
    </div>
  );
}
