import type { Metadata } from "next";
import { CheckCircle2, HelpCircle, ShieldCheck, Sparkles } from "lucide-react";
import { PublicHeader } from "@/components/navigation";
import { Badge, Button, Card } from "@/components/ui";
import { JsonForm } from "@/components/forms";

export const metadata: Metadata = {
  title: "Piloto Pausa AI - Teste bem-estar corporativo por 7 dias",
  description: "Teste o Pausa AI com ate 25 colaboradores por 7 dias e receba relatorio anonimo de bem-estar da equipe."
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

export default function PilotPage() {
  return (
    <>
      <PublicHeader />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <section className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <Badge>Piloto pago e simples de validar</Badge>
            <h1 className="mt-5 text-4xl font-black leading-tight text-navy md:text-5xl">Teste o Pausa AI com sua equipe por 7 dias</h1>
            <p className="mt-5 text-lg leading-8 text-text">Uma forma simples de entender sinais de bem-estar da equipe sem expor dados individuais.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#solicitar">Solicitar piloto agora</Button>
              <Button href="/empresas/demo" variant="secondary">Ver dashboard demo</Button>
            </div>
          </div>
          <Card>
            <Sparkles className="h-8 w-8 text-positive" />
            <h2 className="mt-4 text-2xl font-black text-navy">R$ 97 para ate 25 colaboradores</h2>
            <p className="mt-2 text-text">O valor pode ser abatido na primeira mensalidade se a empresa contratar um plano em ate 7 dias apos o fim do piloto.</p>
          </Card>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["O que esta incluso", ["Check-ins diarios", "Missoes de bem-estar", "Corpo & Movimento", "Dashboard demonstrativo"]],
            ["Como funciona", ["Convite para ate 25 pessoas", "Uso por 7 dias", "Acompanhamento anonimo", "Reuniao rapida de fechamento"]],
            ["O que a empresa recebe", ["Relatorio anonimo final", "Padroes gerais de bem-estar", "Sugestoes de acoes para RH", "Proximo passo comercial"]]
          ].map(([title, items]) => (
            <Card key={title as string}>
              <h2 className="text-xl font-black text-navy">{title as string}</h2>
              <ul className="mt-4 grid gap-2 text-sm text-text">
                {(items as string[]).map((item) => <li key={item} className="flex gap-2"><CheckCircle2 className="h-5 w-5 shrink-0 text-positive" /> {item}</li>)}
              </ul>
            </Card>
          ))}
        </section>

        <Card className="mt-12">
          <ShieldCheck className="h-8 w-8 text-positive" />
          <h2 className="mt-3 text-2xl font-black text-navy">Privacidade</h2>
          <p className="mt-2 text-text">A empresa nao ve respostas individuais. O painel empresarial mostra apenas medias, tendencias e dados consolidados.</p>
        </Card>

        <section className="mt-12">
          <h2 className="text-3xl font-black text-navy">FAQ do piloto</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["A empresa ve respostas individuais?", "Nao. O piloto trabalha somente com dados anonimos e consolidados."],
              ["O Pausa AI substitui psicologo?", "Nao. E uma ferramenta de bem-estar e autocuidado preventivo, sem diagnostico."],
              ["Precisa instalar aplicativo?", "Pode ser usado pelo navegador e tambem via app companion."],
              ["O piloto e pago?", "Sim, R$ 97 para ate 25 colaboradores."],
              ["O valor pode ser abatido?", "Sim, se a empresa contratar um plano em ate 7 dias apos o fim do piloto."]
            ].map(([question, answer]) => (
              <Card key={question}>
                <HelpCircle className="h-6 w-6 text-positive" />
                <h3 className="mt-3 font-black text-navy">{question}</h3>
                <p className="mt-2 text-sm text-text">{answer}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="solicitar" className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <h2 className="text-3xl font-black text-navy">Solicitar piloto agora</h2>
            <p className="mt-3 text-text">Informe os dados da empresa para apresentarmos o fluxo de piloto e os proximos passos.</p>
          </div>
          <Card><JsonForm fields={leadFields} endpoint="/api/leads" button="Solicitar piloto agora" defaults={{ interest: "Piloto 7 dias" }} successMessage="Recebemos seu interesse. Em breve entraremos em contato para apresentar o Pausa AI Empresas e orientar o piloto." /></Card>
        </section>
      </main>
    </>
  );
}
