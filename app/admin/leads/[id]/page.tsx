import Link from "next/link";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Badge, Card } from "@/components/ui";
import { CopyLeadMessageButton, LeadDetailForm } from "@/components/admin";

function toLocalDatetime(date?: Date | null) {
  if (!date) return "";
  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 16);
}

function messages(name: string) {
  return {
    initial: `Ola, ${name}. Tudo bem?

Vi seu interesse no Pausa AI Empresas.

A proposta e simples: sua equipe faz check-ins rapidos de bem-estar, recebe pequenas missoes diarias e a empresa acompanha apenas dados anonimos e consolidados.

Estamos oferecendo um piloto de 7 dias para empresas que querem testar antes de contratar.

Posso te enviar os detalhes?`,
    followUp: `Ola, ${name}. Passando para saber se voce conseguiu ver a proposta do Pausa AI Empresas.

O piloto e uma forma simples de testar com ate 25 colaboradores por 7 dias, com relatorio anonimo ao final.

Faz sentido marcarmos uma demonstracao rapida?`,
    closing: `Perfeito, ${name}.

Para iniciar o piloto, preciso apenas confirmar:
- nome da empresa;
- quantidade de colaboradores;
- melhor data para inicio;
- responsavel pelo acompanhamento.

Depois disso, envio o link de acesso e as orientacoes para a equipe.`
  };
}

export default async function LeadDetailPage({ params }: { params: { id: string } }) {
  const lead = await prisma.b2BLead.findUnique({ where: { id: params.id } });
  if (!lead) notFound();
  const leadMessages = messages(lead.name);

  return (
    <div className="grid gap-6">
      <Link href="/admin/leads" className="inline-flex items-center gap-2 text-sm font-bold text-navy">
        <ArrowLeft className="h-4 w-4" /> Voltar para leads
      </Link>
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
        <div>
          <Badge>{lead.status}</Badge>
          <h1 className="mt-3 text-3xl font-black text-navy">{lead.company}</h1>
          <p className="mt-1 text-text">{lead.name} - {lead.role}</p>
        </div>
        <div className="grid gap-2 text-sm text-text">
          <a className="flex items-center gap-2 font-bold text-navy" href={`mailto:${lead.email}`}><Mail className="h-4 w-4" /> {lead.email}</a>
          <a className="flex items-center gap-2 font-bold text-navy" href={`https://wa.me/${lead.phone.replace(/\D/g, "")}`}><Phone className="h-4 w-4" /> {lead.phone}</a>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <h2 className="text-xl font-black text-navy">Dados do lead</h2>
          <dl className="mt-4 grid gap-3 text-sm">
            <Row label="Nome" value={lead.name} />
            <Row label="Empresa" value={lead.company} />
            <Row label="E-mail" value={lead.email} />
            <Row label="WhatsApp" value={lead.phone} />
            <Row label="Cargo" value={lead.role} />
            <Row label="Colaboradores" value={String(lead.employeeCount)} />
            <Row label="Interesse" value={lead.interest} />
            <Row label="Data de envio" value={format(lead.createdAt, "dd/MM/yyyy HH:mm")} />
          </dl>
          {lead.message && (
            <div className="mt-5 rounded-2xl bg-ice p-4">
              <p className="text-xs font-bold uppercase text-slate-500">Mensagem</p>
              <p className="mt-2 text-sm text-text">{lead.message}</p>
            </div>
          )}
        </Card>

        <Card>
          <h2 className="text-xl font-black text-navy">Acompanhamento comercial</h2>
          <div className="mt-4">
            <LeadDetailForm id={lead.id} status={lead.status} notes={lead.notes} nextContactAt={toLocalDatetime(lead.nextContactAt)} />
          </div>
        </Card>
      </div>

      <Card>
        <h2 className="text-xl font-black text-navy">Mensagens prontas</h2>
        <p className="mt-1 text-sm text-text">Copie e personalize antes de enviar pelo canal combinado com o lead.</p>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <CopyLeadMessageButton label="Copiar mensagem inicial" text={leadMessages.initial} />
          <CopyLeadMessageButton label="Copiar follow-up" text={leadMessages.followUp} />
          <CopyLeadMessageButton label="Copiar fechamento" text={leadMessages.closing} />
        </div>
      </Card>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 border-b border-line pb-2 last:border-0">
      <dt className="text-xs font-bold uppercase text-slate-500">{label}</dt>
      <dd className="font-semibold text-navy">{value}</dd>
    </div>
  );
}
