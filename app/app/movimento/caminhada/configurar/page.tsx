import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { redirect } from "next/navigation";
import { requireUser } from "@/lib/auth";
import { WalkingConfigForm } from "@/components/walking-config-form";

export default async function WalkingConfigPage({ searchParams }: { searchParams: Promise<{ tipo?: string }> }) {
  const user = await requireUser();
  if (!user.onboardingCompleted) redirect("/app/onboarding");
  const params = await searchParams;

  return (
    <div className="mx-auto grid max-w-5xl gap-5">
      <Link href="/app/corpo/caminhada" className="inline-flex items-center gap-2 text-sm font-bold text-navy">
        <ArrowLeft className="h-4 w-4" /> Voltar para Caminhada
      </Link>
      <div>
        <p className="text-sm font-black uppercase text-slate-500">Configurar Caminhada</p>
        <h1 className="mt-2 text-3xl font-black text-navy">Ajuste o treino antes de iniciar</h1>
        <p className="mt-2 text-text">GPS e temporizador sao opcionais. Se a localizacao for negada, o modo temporizador continua funcionando.</p>
      </div>
      <WalkingConfigForm initialMode={params.tipo} />
    </div>
  );
}
