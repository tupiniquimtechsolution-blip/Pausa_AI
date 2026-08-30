import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdmin } from "@/lib/auth";
import { publishMediaAsset } from "@/lib/media/governance";

export async function POST(request: Request, context: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await context.params;
  const parsed = z.object({ channel: z.string().min(1).max(80) }).safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Canal inválido." }, { status: 400 });
  try {
    const publication = await publishMediaAsset(id, parsed.data.channel);
    return NextResponse.json({ ok: true, publication });
  } catch (error) {
    return NextResponse.json({ ok: false, error: error instanceof Error ? error.message : "Mídia não pronta." }, { status: 409 });
  }
}
