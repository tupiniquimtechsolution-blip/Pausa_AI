import type { Metadata } from "next";
import { ArrowRight, BatteryCharging, Brain, CheckCircle2, HeartPulse, ShieldCheck, Sparkles } from "lucide-react";
import { PublicHeader } from "@/components/navigation";
import { AlertBanner, Badge, Button, Card } from "@/components/ui";

export const metadata: Metadata = {
  title: "Pausa AI - Pausas guiadas para ansiedade, telas, foco e sono",
  description: "Faça check-ins rápidos e pratique exercícios simples para foco, energia, sono e pequenos sinais de bem-estar."
};

const pillars = [
  ["Check-in diario", "Entenda como voce esta em menos de 1 minuto.", Sparkles],
  ["Foco", "Reduza ruido mental e descanse das telas.", Brain],
  ["Energia e sono", "Regule o ritmo do dia com pausas simples.", BatteryCharging],
  ["Felicidade possivel", "Note pequenos sinais bons sem forcar alegria.", HeartPulse]
] as const;

export default function HomePage() {
  return (
    <>
      <PublicHeader />
      <main>
        <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
          <div>
            <Badge>Bem-estar mental preventivo</Badge>
            <h1 className="mt-6 text-4xl font-black leading-tight text-navy md:text-6xl">Pequenas pausas para ansiedade, telas, foco e sono</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-text">
              O Pausa AI ajuda voce a fazer check-ins diarios e praticar exercicios simples para desacelerar, recuperar atencao e cuidar do agora sem pressa.
            </p>
            <p className="mt-3 max-w-2xl text-base font-semibold leading-7 text-slate-600">
              Comece por Foco, Energia, Sono ou Felicidade. Cada pratica e curta, guiada e pensada para caber em dias reais.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/cadastro">Comecar gratis <ArrowRight className="h-4 w-4" /></Button>
              <Button href="/login" variant="secondary">Entrar</Button>
            </div>
            <p className="mt-4 text-sm font-bold text-emerald-900">Uso individual gratuito. Sem diagnostico, sem promessa de cura, sem pressao de performance.</p>
          </div>
          <Card className="grid gap-4 self-center">
            <div className="rounded-3xl bg-navy p-5 text-white">
              <p className="text-sm font-bold text-mint">Como voce esta hoje?</p>
              <p className="mt-3 text-3xl font-black">Uma pausa pequena ja conta.</p>
            </div>
            {["Foco", "Energia", "Sono", "Felicidade"].map((item, index) => (
              <div key={item} className="flex items-center justify-between rounded-2xl bg-ice p-4">
                <span className="font-bold text-navy">{item}</span>
                <span className="h-3 w-32 rounded-full bg-line"><span className="block h-3 rounded-full bg-positive" style={{ width: `${58 + index * 7}%` }} /></span>
              </div>
            ))}
          </Card>
        </section>

        <section id="como-funciona" className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-3xl font-black text-navy">Como funciona</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              ["Faca um check-in de 1 minuto", "Observe foco, humor, sono, energia e estresse."],
              ["Escolha uma area", "Foco, Energia, Sono ou Felicidade, de acordo com seu momento."],
              ["Abra uma pratica guiada", "Siga passos simples, com tempo sugerido e cuidado."],
              ["Acompanhe com clareza", "Veja padroes sem pressa e sem julgamento."]
            ].map(([title, text], index) => (
              <Card key={title}>
                <span className="text-3xl font-black text-positive">0{index + 1}</span>
                <h3 className="mt-4 font-black text-navy">{title}</h3>
                <p className="mt-2 text-sm text-text">{text}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <h2 className="text-3xl font-black text-navy">Os 4 pilares desta fase</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {pillars.map(([title, text, Icon]) => (
              <Card key={title}>
                <Icon className="h-7 w-7 text-positive" />
                <h3 className="mt-4 font-black text-navy">{title}</h3>
                <p className="mt-2 text-sm text-text">{text}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-6 px-4 py-10 lg:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-black text-navy">Para quem e</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Pessoas com mente acelerada", "Rotina com muitas telas", "Estudantes", "Profissionais sobrecarregados", "Quem quer dormir melhor", "Quem precisa de pausas pequenas"].map((item) => (
                <span key={item} className="rounded-full bg-lavender px-3 py-2 text-sm font-bold text-violet-950">{item}</span>
              ))}
            </div>
          </Card>
          <Card>
            <CheckCircle2 className="h-8 w-8 text-positive" />
            <h2 className="mt-4 text-2xl font-black text-navy">Gratuito e direto</h2>
            <p className="mt-2 text-text">Nesta fase, o app prioriza o nucleo mental: check-in, recomendacao e exercicios simples para praticar no celular.</p>
          </Card>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10">
          <AlertBanner>O Pausa AI e uma ferramenta de bem-estar e autocuidado. Nao substitui psicoterapia, atendimento medico ou servicos de emergencia.</AlertBanner>
          <div className="mt-8 rounded-3xl bg-navy p-8 text-white">
            <ShieldCheck className="h-8 w-8 text-mint" />
            <h2 className="mt-4 text-3xl font-black">Comece com uma pausa de 1 minuto.</h2>
            <p className="mt-2 max-w-2xl text-white/80">Sem assinatura individual. Sem promessas exageradas. Apenas pequenas acoes para cuidar melhor do agora.</p>
            <Button href="/cadastro" className="mt-6 bg-mint text-navy hover:bg-emerald-200">Comecar gratis</Button>
          </div>
        </section>
      </main>
    </>
  );
}
