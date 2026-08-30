import { NextResponse } from "next/server";
import { z } from "zod";
import { clearSession, requireUser } from "@/lib/auth";
import { correlationIdFrom } from "@/lib/observability";
import { deleteDataSubject, exportDataSubject } from "@/lib/privacy/data-subject";
import { consumeRateLimit, rateLimitHeaders } from "@/lib/security/rate-limit";

const deleteSchema = z.object({
  confirmation: z.literal("EXCLUIR MINHA CONTA"),
  reason: z.string().max(300).optional()
});

export async function GET(request: Request) {
  const user = await requireUser();
  const correlationId = correlationIdFrom(request);
  const payload = await exportDataSubject(user.id, correlationId);
  return NextResponse.json(payload, {
    headers: {
      "Content-Disposition": `attachment; filename="pausa-ai-dados-${user.id}.json"`,
      "Cache-Control": "no-store",
      "X-Correlation-Id": correlationId
    }
  });
}

export async function DELETE(request: Request) {
  const user = await requireUser();
  const parsed = deleteSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Confirmação de exclusão inválida." }, { status: 400 });
  }
  const rateLimit = await consumeRateLimit({
    scope: "privacy.account.delete",
    key: user.id,
    limit: 3,
    windowMs: 60 * 60 * 1000
  });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { ok: false, error: "Muitas tentativas de exclusão." },
      { status: 429, headers: rateLimitHeaders(rateLimit) }
    );
  }
  const result = await deleteDataSubject(user.id, {
    reason: parsed.data.reason,
    correlationId: correlationIdFrom(request)
  });
  await clearSession();
  return NextResponse.json({ ok: true, ...result }, { headers: { "Cache-Control": "no-store" } });
}
