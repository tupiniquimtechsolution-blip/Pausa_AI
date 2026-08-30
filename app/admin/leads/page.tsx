import { format } from "date-fns";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Card } from "@/components/ui";
import { LeadStatusForm } from "@/components/admin";

export default async function LeadsPage({ searchParams }: { searchParams: { q?: string; status?: string } }) {
  const q = searchParams.q || "";
  const status = searchParams.status || "";
  const leads = await prisma.b2BLead.findMany({
    where: {
      AND: [
        q ? { OR: [{ name: { contains: q } }, { company: { contains: q } }, { email: { contains: q } }] } : {},
        status ? { status: status as never } : {}
      ]
    },
    orderBy: { createdAt: "desc" }
  });
  return (
    <div>
      <h1 className="text-3xl font-black text-navy">Leads B2B</h1>
      <form className="mt-5 grid gap-3 md:grid-cols-[1fr_240px_auto]">
        <input name="q" placeholder="Buscar por nome, empresa ou e-mail" defaultValue={q} />
        <select name="status" defaultValue={status}>
          <option value="">Todos os status</option>
          {["NOVO", "EM_CONTATO", "DEMONSTRACAO_MARCADA", "PROPOSTA_ENVIADA", "FECHADO", "PERDIDO"].map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        <button type="submit" className="min-h-11 rounded-2xl bg-navy px-5 py-3 font-bold text-white">Filtrar</button>
      </form>
      <Card className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead className="text-slate-500">
            <tr>
              <th className="p-3">Nome</th><th>Empresa</th><th>E-mail</th><th>WhatsApp</th><th>Cargo</th><th>Colabs</th><th>Interesse</th><th>Status</th><th>Data</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-t border-line">
                <td className="p-3 font-bold text-navy"><Link href={`/admin/leads/${lead.id}`} className="hover:underline">{lead.name}</Link></td>
                <td>{lead.company}</td>
                <td>{lead.email}</td>
                <td>{lead.phone}</td>
                <td>{lead.role}</td>
                <td>{lead.employeeCount}</td>
                <td>{lead.interest}</td>
                <td><LeadStatusForm id={lead.id} status={lead.status} /></td>
                <td>{format(lead.createdAt, "dd/MM/yyyy")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
