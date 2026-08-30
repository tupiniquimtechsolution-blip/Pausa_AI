import { PublicHeader } from "@/components/navigation";
import { Card } from "@/components/ui";

export default function TermsPage() {
  return (
    <>
      <PublicHeader />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <Card>
          <h1 className="text-3xl font-black text-navy">Termos de Uso</h1>
          <p className="mt-4 text-text">
            O Pausa AI oferece apoio informativo e preventivo para autocuidado, pausas guiadas, organizacao da rotina e bem-estar. Nao realiza diagnostico e nao substitui atendimento profissional.
          </p>
          <p className="mt-3 text-text">
            As recomendacoes sao sugestoes gerais de bem-estar e devem ser usadas com bom senso, respeitando seus limites, contexto e seguranca.
          </p>
          <p className="mt-3 text-text">
            Em emergencias, risco imediato ou sofrimento intenso, procure servicos adequados da sua regiao ou uma pessoa de confianca. No Brasil, voce tambem pode buscar o CVV pelo numero 188.
          </p>
          <p className="mt-3 text-text">
            Ao fazer check-ins, voce concorda que as informacoes fornecidas sejam usadas para gerar seu historico e recomendacoes dentro do app.
          </p>
        </Card>
      </main>
    </>
  );
}
