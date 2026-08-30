import Link from "next/link";
import { PublicHeader } from "@/components/navigation";
import { Card } from "@/components/ui";
import { ResetPasswordForm } from "@/components/password-reset-forms";

export default async function ResetPasswordPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  return (
    <>
      <PublicHeader />
      <main className="mx-auto max-w-md px-4 py-12">
        <Card>
          <h1 className="text-3xl font-black text-navy">Criar nova senha</h1>
          <p className="mt-2 text-sm text-text">Use uma senha com pelo menos 8 caracteres.</p>
          <div className="mt-6">
            <ResetPasswordForm token={token} />
          </div>
          <p className="mt-5 text-center text-sm text-text"><Link className="font-bold text-navy" href="/login">Ir para login</Link></p>
        </Card>
      </main>
    </>
  );
}
