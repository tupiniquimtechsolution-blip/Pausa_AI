import { Button, Card, MetricCard } from "@/components/ui";
import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const leads = await prisma.b2BLead.count();
  const newLeads = await prisma.b2BLead.count({ where: { status: "NOVO" } });
  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-black text-navy">Admin Pausa AI</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard label="Leads B2B" value={leads} />
        <MetricCard label="Novos leads" value={newLeads} />
        <MetricCard label="Dashboard demo" value="Anônimo" />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Card><h2 className="text-xl font-black text-navy">Leads B2B</h2><p className="mt-2 text-text">Acompanhe status comercial e busque empresas.</p><Button href="/admin/leads" className="mt-5">Abrir leads</Button></Card>
        <Card><h2 className="text-xl font-black text-navy">Dashboard empresarial</h2><p className="mt-2 text-text">Veja dados mockados, sempre consolidados e sem respostas individuais.</p><Button href="/admin/dashboard-empresas" className="mt-5" variant="secondary">Ver demo</Button></Card>
      </div>
    </div>
  );
}
