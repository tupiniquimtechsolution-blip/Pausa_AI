import Link from "next/link";
import { PublicHeader } from "@/components/navigation";
import { Card } from "@/components/ui";
import { ForgotPasswordForm } from "@/components/password-reset-forms";

export default function ForgotPasswordPage() {
  return (
    <>
      <PublicHeader />
      <main className="mx-auto max-w-md px-4 py-12">
        <Card>
          <h1 className="text-3xl font-black text-navy">Recuperar senha</h1>
          <p className="mt-2 text-sm text-text">Informe seu e-mail. No ambiente local, o link de teste aparece na tela. Em producao, esta estrutura fica pronta para envio por e-mail.</p>
          <div className="mt-6">
            <ForgotPasswordForm />
          </div>
          <p className="mt-5 text-center text-sm text-text"><Link className="font-bold text-navy" href="/login">Voltar para login</Link></p>
        </Card>
      </main>
    </>
  );
}
