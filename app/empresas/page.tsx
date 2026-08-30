import type { Metadata } from "next";
import { BarChart3, Building2, CheckCircle2, ShieldCheck, Users } from "lucide-react";
import { PublicHeader } from "@/components/navigation";
import { Badge, Button, Card } from "@/components/ui";
import { JsonForm } from "@/components/forms";

export const metadata: Metadata = {
  title: "Pausa AI Empresas - Bem-estar corporativo anonimo e preventivo",
  description: "Ajude sua equipe a criar pausas saudaveis e acompanhe sinais de bem-estar com dados anonimos, dashboards e relatorios preventivos."
};

const leadFields = [
  { name: "name", label: "Nome" },
  { name: "email", label: "E-mail", type: "email" },
  { name: "phone", label: "Telefone/WhatsApp" },
  { name: "company", label: "Empresa" },
  { name: "role", label: "Cargo" },
  { name: "employeeCount", label: "Numero de colaboradores", type: "number" },
  { name: "interest", label: "Interesse", options: ["Piloto 7 dias", "Plano Start", "Plano Growth", "Plano Pro", "Enterprise"] },
  { name: "message", label: "Mensagem", textarea: true }
];

export default function CompaniesPage() {
  return (
    <>
      <PublicHeader />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <section className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <Badge>Dados anonimos e acoes preventivas</Badge>
            <h1 className="mt-5 text-4xl font-black leading-tight text-navy md:text-5xl">Bem-estar corporativo simples, anonimo e orientado por acoes</h1>
            <p className="mt-5 text-lg leading-8 text-text">
              Ajude sua equipe a criar pausas saudaveis, acompanhar sinais de sobrecarga e receber missoes simples de bem-estar, sem expor dados individuais.
            </p>
            <p className="mt-3 text-base font-semibold leading-7 text-slate-600">
              Empresas podem oferecer pausas ativas, exercicios funcionais em casa e bem-estar fisico integrado ao acompanhamento emocional anonimo.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/empresas/piloto">Solicitar piloto de 7 dias</Button>
              <Button href="/empresas/demo" variant="secondary">Ver dashboard demo</Button>
            </div>
          </div>
          <Card>
            <Building2 className="h-8 w-8 text-positive" />
            <h2 className="mt-4 text-2xl font-black text-navy">Piloto de 7 dias</h2>
            <p className="mt-2 text-text">Durante 7 dias, sua equipe testa o Pausa AI. Ao final, entregamos um relatorio anonimo com padroes gerais de bem-estar e sugestoes de acoes.</p>
            <p className="mt-4 text-3xl font-black text-positive">R$ 97</p>
            <p className="text-sm text-slate-500">para ate 25 colaboradores</p>
          </Card>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-black text-navy">O problema que aparece tarde demais</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {["Equipes cansadas", "Sobrecarga silenciosa", "Sono ruim", "Baixa energia", "Falta de dados preventivos", "Acoes de bem-estar dificeis de medir"].map((item) => (
              <Card key={item}><h3 className="font-black text-navy">{item}</h3></Card>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-black text-navy">Como o Pausa AI ajuda</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-5">
            {[
              "Colaborador faz check-in diario",
              "Recebe missao leve e pratica",
              "Pode realizar movimento guiado",
              "Empresa acompanha dados anonimos",
              "RH recebe sugestoes preventivas"
            ].map((item, index) => (
              <Card key={item}>
                <span className="text-3xl font-black text-positive">0{index + 1}</span>
                <h3 className="mt-3 font-black text-navy">{item}</h3>
              </Card>
            ))}
          </div>
        </section>

        <Card className="mt-12">
          <ShieldCheck className="h-8 w-8 text-positive" />
          <h2 className="mt-3 text-2xl font-black text-navy">Privacidade por desenho</h2>
          <p className="mt-2 text-text">A empresa nao ve respostas individuais. O painel empresarial mostra apenas medias, tendencias e dados consolidados.</p>
        </Card>

        <section className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Card>
            <Users className="h-8 w-8 text-positive" />
            <h2 className="mt-4 text-2xl font-black text-navy">Piloto de 7 dias</h2>
            <p className="mt-3 text-text">Ideal para validar adesao, linguagem e sinais gerais da equipe antes de contratar um plano mensal.</p>
            <Button href="/empresas/piloto" className="mt-5">Quero testar com minha equipe</Button>
          </Card>
          <Card>
            <BarChart3 className="h-8 w-8 text-positive" />
            <h2 className="mt-4 text-2xl font-black text-navy">Dashboard demonstrativo</h2>
            <p className="mt-3 text-text">Veja como medias, tendencias por setor e sugestoes para RH aparecem sem expor colaboradores.</p>
            <Button href="/empresas/demo" variant="secondary" className="mt-5">Ver dashboard demo</Button>
          </Card>
        </section>

        <section id="planos" className="mt-12">
          <h2 className="text-3xl font-black text-navy">Planos empresariais</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-4">
            {[
              ["Start", "R$ 199/mes", "Ate 25 colaboradores", "Dashboard anonimo, relatorio mensal, campanhas simples e pagina da empresa."],
              ["Growth", "R$ 399/mes", "Ate 75 colaboradores", "Relatorios semanais, segmentacao por setores e acoes sugeridas para RH."],
              ["Pro", "R$ 799/mes", "Ate 200 colaboradores", "Relatorio executivo, onboarding assistido, suporte prioritario e campanhas avancadas."],
              ["Enterprise", "Sob consulta", "Acima de 200 colaboradores", "Modelo ajustado para empresas maiores, com setup e acompanhamento sob demanda."]
            ].map(([name, price, limit, desc]) => (
              <Card key={name} className={name === "Growth" ? "ring-2 ring-positive" : ""}>
                {name === "Growth" && <Badge>Recomendado</Badge>}
                <h3 className="mt-3 text-xl font-black text-navy">{name}</h3>
                <p className="mt-2 text-2xl font-black text-positive">{price}</p>
                <p className="text-sm font-bold text-slate-500">{limit}</p>
                <p className="mt-3 text-sm text-text">{desc}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="lead" className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <h2 className="text-3xl font-black text-navy">Solicitar contato</h2>
            <p className="mt-3 text-text">Recebemos seu interesse. Em breve entraremos em contato para apresentar o Pausa AI Empresas e orientar o piloto.</p>
            <div className="mt-5 grid gap-2 text-sm text-text">
              {["Sem acesso a respostas individuais", "Relatorio anonimo ao final do piloto", "Sugestoes praticas para RH"].map((item) => (
                <p key={item} className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-positive" /> {item}</p>
              ))}
            </div>
          </div>
          <Card><JsonForm fields={leadFields} endpoint="/api/leads" button="Solicitar piloto" successMessage="Recebemos seu interesse. Em breve entraremos em contato para apresentar o Pausa AI Empresas e orientar o piloto." /></Card>
        </section>
      </main>
    </>
  );
}
