import { PublicHeader } from "@/components/navigation";
import { Card } from "@/components/ui";

export default function PrivacyPage() {
  return (
    <>
      <PublicHeader />
      <main className="mx-auto max-w-3xl px-4 py-12">
        <Card>
          <h1 className="text-3xl font-black text-navy">Politica de Privacidade</h1>
          <p className="mt-4 text-text">
            O Pausa AI coleta dados de check-in, como foco, humor, sono, energia, estresse, tags escolhidas e texto opcional. Esses dados sao usados para gerar recomendacoes de bem-estar, historico pessoal e evolucao de uso.
          </p>
          <p className="mt-3 text-text">
            A observacao de texto pode ser analisada para identificar temas gerais, como telas, cansaco, sono, preocupacao ou tensao corporal. Essa leitura nao e diagnostico clinico.
          </p>
          <p className="mt-3 text-text">
            Empresas nao acessam respostas individuais. Painéis empresariais mostram apenas medias, tendencias e dados anonimos e consolidados.
          </p>
          <p className="mt-3 text-text">
            O app nao substitui psicoterapia, atendimento medico, psiquiatrico, plano de saude ou servicos de emergencia.
          </p>
          <p className="mt-3 text-text">
            Usuarios podem solicitar exclusao de dados pelos canais de suporte. A exclusao automatica de conta e dados esta documentada como requisito operacional para a etapa de publicacao.
          </p>
        </Card>
      </main>
    </>
  );
}
