import Link from "next/link";
import { PublicHeader } from "@/components/navigation";
import { Card } from "@/components/ui";
import { JsonForm } from "@/components/forms";

export default function RegisterPage() {
  return (
    <>
      <PublicHeader />
      <main className="mx-auto max-w-md px-4 py-12">
        <Card>
          <h1 className="text-3xl font-black text-navy">Começar grátis</h1>
          <p className="mt-2 text-sm text-text">Seu progresso não precisa ser perfeito para ser real.</p>
          <div className="mt-6">
            <JsonForm
              endpoint="/api/auth/register"
              button="Criar conta"
              fields={[
                { name: "name", label: "Nome" },
                { name: "email", label: "E-mail", type: "email" },
                { name: "password", label: "Senha", type: "password" },
                { name: "confirmPassword", label: "Confirmação de senha", type: "password" }
              ]}
            />
          </div>
          <p className="mt-5 text-center text-sm text-text">Já tem conta? <Link className="font-bold text-navy" href="/login">Entrar</Link></p>
        </Card>
      </main>
    </>
  );
}
