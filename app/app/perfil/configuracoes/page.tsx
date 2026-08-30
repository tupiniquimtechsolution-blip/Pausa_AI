import { redirect } from "next/navigation";
import { CommunicationPreferences } from "@/components/communication-preferences";
import { PermissionBanner } from "@/components/permission-banner";
import { PreferencesControls } from "@/components/preferences";
import { Button, Card } from "@/components/ui";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function SettingsPage() {
  const user = await requireUser();
  if (!user.onboardingCompleted) redirect("/app/onboarding");
  const [profile, audioProviders] = await Promise.all([
    prisma.profile.findUnique({ where: { userId: user.id } }),
    prisma.audioProviderCapability.findMany({ orderBy: { providerKey: "asc" } })
  ]);

  return (
    <div className="mx-auto grid max-w-3xl gap-5">
      <Card>
        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Perfil</p>
        <h1 className="mt-1 text-3xl font-black text-navy">Configurações</h1>
        <p className="mt-2 text-text">Controle aparência, idioma, comunicação e permissões.</p>
        <Button href="/app/perfil" variant="secondary" className="mt-4">Dados da conta</Button>
      </Card>
      <Card>
        <h2 className="mb-4 text-xl font-black text-navy">Aparência e idioma</h2>
        <PreferencesControls />
      </Card>
      <Card>
        <h2 className="mb-4 text-xl font-black text-navy">Comunicação</h2>
        <CommunicationPreferences
          emailEnabled={Boolean(profile?.emailRecommendationsEnabled)}
          pushEnabled={Boolean(profile?.pushNotificationsEnabled)}
          dailyTime={profile?.dailyRecommendationTime}
        />
      </Card>
      <PermissionBanner />
      <Card>
        <h2 className="text-xl font-black text-navy">Áudio e streaming</h2>
        <p className="mt-2 text-sm text-text">O áudio próprio sustenta o núcleo. Serviços externos são opcionais e só aparecem ativos após credenciais e teste real.</p>
        <div className="mt-4 grid gap-2">
          {audioProviders.map((provider) => {
            const available = provider.enabled && provider.credentialsPresent && provider.testStatus === "ACTIVE";
            return (
              <div key={provider.id} className="flex items-center justify-between gap-3 rounded-2xl bg-ice p-3 text-sm">
                <span className="font-black text-navy">{provider.providerKey} • {provider.capability}</span>
                <span className={`font-bold ${available ? "text-positive" : "text-slate-500"}`}>{available ? "Ativo" : "Inativo"}</span>
              </div>
            );
          })}
        </div>
      </Card>
      <Card>
        <h2 className="text-xl font-black text-navy">Dados e dispositivos</h2>
        <p className="mt-2 text-sm text-text">Exporte seus dados pelo Data Vault. Correção, exclusão e revogação de consentimento estão disponíveis pela API autenticada.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button href="/api/data-vault" variant="secondary">Exportar meus dados</Button>
          <Button href="/app/corpo/atividade" variant="secondary">Pausa Activity</Button>
        </div>
      </Card>
    </div>
  );
}
