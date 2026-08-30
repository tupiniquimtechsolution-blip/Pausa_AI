import type { Metadata } from "next";
import { Building2, CheckCircle2, Gift, Sparkles } from "lucide-react";
import { PublicHeader } from "@/components/navigation";
import { Badge, Button, Card } from "@/components/ui";

export const metadata: Metadata = {
  title: "Precos Pausa AI - Gratuito para pessoas, planos para empresas",
  description: "Use o Pausa AI gratuitamente como pessoa fisica ou leve a plataforma para sua empresa com piloto e planos corporativos."
};

const plans = [
  {
    name: "Individual Gratuito",
    price: "R$ 0",
    description: "Para cuidar da mente, do corpo e da rotina no seu ritmo.",
    features: ["Check-in diario", "Missoes por nivel", "Corpo & Movimento", "Historico", "Insights semanais", "Sistema de XP e niveis"],
    cta: "Criar conta gratuita",
    href: "/cadastro",
    icon: Gift,
    featured: false
  },
  {
    name: "Piloto Empresas",
    price: "R$ 97 por 7 dias",
    description: "Para testar com uma equipe pequena antes de contratar.",
    features: ["Ate 25 colaboradores", "Check-ins diarios", "Missoes de bem-estar", "Movimento guiado", "Dashboard demonstrativo", "Relatorio anonimo final", "Reuniao de apresentacao"],
    cta: "Solicitar piloto",
    href: "/empresas/piloto",
    icon: Sparkles,
    featured: false
  },
  {
    name: "Empresa Start",
    price: "R$ 199/mes",
    description: "Para empresas que querem iniciar com acompanhamento simples.",
    features: ["Ate 25 colaboradores", "Dashboard anonimo", "Relatorio mensal", "Campanhas simples", "Pagina da empresa"],
    cta: "Falar com consultor",
    href: "/empresas#lead",
    icon: Building2,
    featured: false
  },
  {
    name: "Empresa Growth",
    price: "R$ 399/mes",
    description: "Para RHs que precisam acompanhar tendencias com mais frequencia.",
    features: ["Ate 75 colaboradores", "Relatorios semanais", "Segmentacao por setores", "Acoes sugeridas para RH", "Exportacao futura de relatorios"],
    cta: "Agendar demonstracao",
    href: "/empresas#lead",
    icon: Building2,
    featured: true
  },
  {
    name: "Empresa Pro",
    price: "R$ 799/mes",
    description: "Para operacoes maiores com apoio mais proximo.",
    features: ["Ate 200 colaboradores", "Relatorio executivo", "Onboarding assistido", "Suporte prioritario", "Campanhas internas avancadas"],
    cta: "Solicitar proposta",
    href: "/empresas#lead",
    icon: Building2,
    featured: false
  }
] as const;

export default function PricingPage() {
  return (
    <>
      <PublicHeader />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <Badge>Gratuito para pessoas, empresas quando fizer sentido</Badge>
        <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-navy">Comece gratis. Leve o Pausa AI para sua equipe quando fizer sentido.</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-text">
          Pessoas usam gratuitamente. Empresas podem contratar pilotos, dashboards e relatorios anonimos de bem-estar.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-5">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <Card key={plan.name} className={plan.featured ? "ring-2 ring-positive" : ""}>
                {plan.featured && <Badge>Recomendado</Badge>}
                <Icon className="mt-3 h-8 w-8 text-positive" />
                <h2 className="mt-4 text-xl font-black text-navy">{plan.name}</h2>
                <p className="mt-2 text-2xl font-black text-positive">{plan.price}</p>
                <p className="mt-2 text-sm text-text">{plan.description}</p>
                <ul className="mt-5 grid gap-2 text-sm text-text">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-positive" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button href={plan.href} className="mt-6 w-full" variant={plan.featured ? "primary" : "secondary"}>{plan.cta}</Button>
              </Card>
            );
          })}
        </div>
      </main>
    </>
  );
}
