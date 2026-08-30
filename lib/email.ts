import { Resend } from "resend";

type MailResult = { sent: boolean; id?: string; reason?: string };

function client() {
  return process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
}

function fromAddress() {
  return process.env.RESEND_FROM_EMAIL || "Pausa AI <onboarding@resend.dev>";
}

export async function sendPasswordResetEmail(input: { to: string; resetUrl: string; name?: string | null }): Promise<MailResult> {
  const resend = client();
  if (!resend) return { sent: false, reason: "RESEND_API_KEY ausente." };

  const { data, error } = await resend.emails.send({
    from: fromAddress(),
    to: input.to,
    subject: "Redefina sua senha no Pausa AI",
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.5;color:#172554">
        <h1>Pausa AI</h1>
        <p>Ola${input.name ? `, ${input.name}` : ""}.</p>
        <p>Recebemos uma solicitacao para redefinir sua senha. O link abaixo expira em 30 minutos.</p>
        <p><a href="${input.resetUrl}" style="display:inline-block;background:#172554;color:#fff;padding:12px 18px;border-radius:12px;text-decoration:none">Redefinir senha</a></p>
        <p>Se voce nao pediu isso, ignore este e-mail.</p>
      </div>
    `
  });

  if (error) return { sent: false, reason: error.message };
  return { sent: true, id: data?.id };
}

export async function sendDailyRecommendationEmail(input: { to: string; name: string; title: string; description: string; url: string }): Promise<MailResult> {
  const resend = client();
  if (!resend) return { sent: false, reason: "RESEND_API_KEY ausente." };

  const { data, error } = await resend.emails.send({
    from: fromAddress(),
    to: input.to,
    subject: `Sua pausa de hoje: ${input.title}`,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.5;color:#172554">
        <h1>Bom dia, ${input.name}</h1>
        <p>Com base nos seus ultimos check-ins, hoje sugerimos:</p>
        <div style="border:1px solid #E2E8F0;border-radius:16px;padding:16px;background:#F8FAFC">
          <h2>${input.title}</h2>
          <p>${input.description}</p>
        </div>
        <p><a href="${input.url}" style="display:inline-block;background:#10B981;color:#052E2B;padding:12px 18px;border-radius:12px;text-decoration:none;font-weight:bold">Abrir pratica</a></p>
        <p style="font-size:12px;color:#64748B">Voce pode desativar recomendacoes por e-mail no seu perfil.</p>
      </div>
    `
  });

  if (error) return { sent: false, reason: error.message };
  return { sent: true, id: data?.id };
}
