import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdmin } from "@/lib/auth";
import { withdrawMediaAsset } from "@/lib/media/governance";

export async function POST(request: Request, context: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await context.params;
  const parsed = z.object({ reason: z.string().min(3).max(500) }).safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Motivo obrigatório." }, { status: 400 });
  try {
    return NextResponse.json({ ok: true, withdrawal: await withdrawMediaAsset(id, parsed.data.reason) });
  } catch {
    return NextResponse.json({ ok: false, error: "Ativo não encontrado." }, { status: 404 });
  }
}
