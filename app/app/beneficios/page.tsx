import { redirect } from "next/navigation";
import { ExternalLink, Handshake } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { Badge, Button, Card } from "@/components/ui";
import { PartnerInterestButtons } from "@/components/partners-client";

export default async function BenefitsPage() {
  const user = await requireUser();
  if (!user.onboardingCompleted) redirect("/app/onboarding");
  const partners = await prisma.partner.findMany({ orderBy: [{ status: "asc" }, { name: "asc" }] });
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-3xl font-black text-navy">Beneficios e Parceiros</h1>
        <p className="mt-2 text-text">O Pausa AI esta preparado para conectar usuarios a beneficios corporativos, academias, estudios e parceiros de bem-estar. Nesta fase, as integracoes sao futuras e os links sao externos.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {partners.map((partner) => (
          <Card key={partner.id}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <Badge tone={partner.status === "ACTIVE" ? "mint" : "lavender"}>{partner.status === "FUTURE_INTEGRATION" ? "Integracao futura" : partner.status}</Badge>
                <h2 className="mt-3 text-2xl font-black text-navy">{partner.name}</h2>
              </div>
              <Handshake className="h-7 w-7 text-positive" />
            </div>
            <p className="mt-3 text-text">{partner.description}</p>
            <p className="mt-2 text-sm font-bold text-slate-500">{partner.type} - {partner.benefitProvider}</p>
            <div className="mt-5 grid gap-3">
              {partner.websiteUrl && <Button href={partner.websiteUrl} variant="secondary">Abrir site <ExternalLink className="h-4 w-4" /></Button>}
              <PartnerInterestButtons partnerId={partner.id} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
