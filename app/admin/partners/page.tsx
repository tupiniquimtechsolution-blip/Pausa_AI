import { prisma } from "@/lib/prisma";
import { Badge, Card } from "@/components/ui";
import { JsonForm } from "@/components/forms";

const fields = [
  { name: "name", label: "Nome" },
  { name: "type", label: "Tipo", options: ["GYM", "STUDIO", "PERSONAL_TRAINER", "WELLNESS_APP", "CORPORATE_BENEFIT", "CLINIC"] },
  { name: "benefitProvider", label: "Provedor", options: ["WELLHUB", "TOTALPASS", "GYMPASS", "LOCAL_PARTNER", "CORPORATE", "NONE"] },
  { name: "websiteUrl", label: "Site", type: "optional" },
  { name: "instagramUrl", label: "Instagram", type: "optional" },
  { name: "bookingUrl", label: "Reserva", type: "optional" },
  { name: "status", label: "Status", options: ["ACTIVE", "COMING_SOON", "FUTURE_INTEGRATION", "INACTIVE"] },
  { name: "description", label: "Descricao", textarea: true }
];
const editFields = [{ name: "id", label: "ID", type: "hidden" }, ...fields];

export default async function AdminPartnersPage() {
  const partners = await prisma.partner.findMany({ include: { interests: true }, orderBy: { name: "asc" } });
  return (
    <div className="grid gap-6">
      <div>
        <h1 className="text-3xl font-black text-navy">Parceiros</h1>
        <p className="mt-2 text-text">Gerencie parceiros e acompanhe interesses dos usuarios.</p>
      </div>
      <Card>
        <h2 className="text-xl font-black text-navy">Novo parceiro</h2>
        <div className="mt-4">
          <JsonForm fields={fields} endpoint="/api/admin/partners" button="Criar parceiro" method="POST" />
        </div>
      </Card>
      <div className="grid gap-4">
        {partners.map((partner) => (
          <Card key={partner.id}>
            <div className="flex flex-col justify-between gap-3 md:flex-row">
              <div>
                <Badge>{partner.status}</Badge>
                <h2 className="mt-2 text-xl font-black text-navy">{partner.name}</h2>
                <p className="mt-1 text-sm text-text">{partner.description}</p>
              </div>
              <p className="text-sm font-bold text-slate-500">{partner.interests.length} interesses</p>
            </div>
            <div className="mt-4">
              <JsonForm fields={editFields} endpoint="/api/admin/partners" button="Salvar parceiro" method="PATCH" defaults={{
                id: partner.id,
                name: partner.name,
                type: partner.type,
                benefitProvider: partner.benefitProvider,
                websiteUrl: partner.websiteUrl || "",
                instagramUrl: partner.instagramUrl || "",
                bookingUrl: partner.bookingUrl || "",
                status: partner.status,
                description: partner.description
              } as Record<string, string>} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
