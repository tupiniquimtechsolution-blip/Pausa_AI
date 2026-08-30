import Link from "next/link";
import { PublicHeader } from "@/components/navigation";
import { LoginForm } from "@/components/login-form";
import { AlertBanner, Card } from "@/components/ui";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ session?: string; error?: string }> }) {
  const params = await searchParams;
  const initialError = params.error === "credentials"
    ? "Nao foi possivel entrar. Confira seu e-mail e senha."
    : params.error === "rate-limit"
      ? "Muitas tentativas. Aguarde alguns minutos antes de tentar novamente."
      : "";
  return (
    <>
      <PublicHeader />
      <main className="mx-auto max-w-md px-4 py-12">
        <Card>
          <h1 className="text-3xl font-black text-navy">Entrar</h1>
          <p className="mt-2 text-sm text-text">Verifique seu e-mail e senha para continuar.</p>
          {params.session === "expired" && (
            <div className="mt-4">
              <AlertBanner type="info">Sua sessao expirou. Faca login novamente para continuar com seguranca.</AlertBanner>
            </div>
          )}
          <div className="mt-6">
            <LoginForm initialError={initialError} />
          </div>
          <p className="mt-4 text-center text-sm text-text"><Link className="font-bold text-navy" href="/esqueci-senha">Esqueci minha senha</Link></p>
          <p className="mt-3 text-center text-sm text-text">Ainda nao tem conta? <Link className="font-bold text-navy" href="/cadastro">Cadastre-se</Link></p>
        </Card>
      </main>
    </>
  );
}
