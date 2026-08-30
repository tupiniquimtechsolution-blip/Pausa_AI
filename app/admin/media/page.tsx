import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Badge, Card, EmptyState } from "@/components/ui";

export default async function AdminMediaPage() {
  await requireAdmin();
  const [assets, campaigns, providers] = await Promise.all([
    prisma.mediaAsset.findMany({ include: { approvals: true, publications: true }, orderBy: { updatedAt: "desc" }, take: 100 }),
    prisma.marketingCampaign.findMany({ include: { contents: true }, orderBy: { updatedAt: "desc" }, take: 50 }),
    prisma.audioProviderCapability.findMany({ orderBy: { providerKey: "asc" } })
  ]);
  return (
    <div className="grid gap-6">
      <div>
        <Badge tone="navy">Administração</Badge>
        <h1 className="mt-3 text-3xl font-black text-navy">Biblioteca Mestre de Mídia</h1>
        <p className="mt-2 text-text">Direitos, revisões, localização, publicação, retirada e uso rastreável.</p>
      </div>
      <Card>
        <h2 className="text-xl font-black text-navy">Provedores de áudio</h2>
        <div className="mt-4 grid gap-2">
          {providers.map((provider) => (
            <div key={provider.id} className="flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-ice p-3">
              <p className="font-black text-navy">{provider.providerKey} • {provider.capability}</p>
              <Badge tone={provider.enabled && provider.credentialsPresent && provider.testStatus === "ACTIVE" ? "mint" : "amber"}>
                {provider.enabled && provider.credentialsPresent && provider.testStatus === "ACTIVE" ? "Ativo" : "Inativo"}
              </Badge>
            </div>
          ))}
        </div>
      </Card>
      <section className="grid gap-3">
        <h2 className="text-2xl font-black text-navy">Ativos</h2>
        {!assets.length ? <EmptyState title="Nenhum ativo governado" description="A interface pública continuará oculta até aprovação e licença." /> : assets.map((asset) => (
          <Card key={asset.id}>
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="navy">{asset.assetType}</Badge>
              <Badge tone={asset.status === "PUBLISHED" ? "mint" : "amber"}>{asset.status}</Badge>
            </div>
            <h3 className="mt-3 text-lg font-black text-navy">{asset.title}</h3>
            <p className="mt-1 break-all text-xs text-slate-500">SHA-256: {asset.hash}</p>
            <p className="mt-2 text-sm text-text">{asset.approvals.filter((item) => item.decision === "APPROVED").length} revisões aprovadas • {asset.publications.length} publicações</p>
          </Card>
        ))}
      </section>
      <section className="grid gap-3">
        <h2 className="text-2xl font-black text-navy">Campanhas</h2>
        {!campaigns.length ? <EmptyState title="Nenhuma campanha" description="Campanhas começam como draft e nunca são publicadas automaticamente." /> : campaigns.map((campaign) => (
          <Card key={campaign.id}>
            <Badge tone="lavender">{campaign.channel} • {campaign.format}</Badge>
            <h3 className="mt-3 text-lg font-black text-navy">{campaign.title}</h3>
            <p className="mt-1 text-sm text-text">{campaign.objective}</p>
          </Card>
        ))}
      </section>
    </div>
  );
}
