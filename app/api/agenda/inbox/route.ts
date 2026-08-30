import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { inboxItemSchema } from "@/lib/agenda/schemas";

function inboxPayload(data: ReturnType<typeof inboxItemSchema.parse>) {
  return {
    rawText: data.rawText || null,
    rawImage: data.rawImage || null,
    rawAudio: data.rawAudio || null,
    extractedText: data.extractedText || null,
    suggestedType: data.suggestedType,
    status: data.status
  };
}

export async function GET() {
  const user = await requireUser();
  const items = await prisma.inboxItem.findMany({
    where: { userId: user.id, status: { not: "ARCHIVED" } },
    orderBy: { createdAt: "desc" }
  });
  return NextResponse.json({ ok: true, items });
}

export async function POST(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = inboxItemSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Preencha a ideia antes de salvar." }, { status: 400 });
  const item = await prisma.inboxItem.create({ data: { userId: user.id, ...inboxPayload(parsed.data) } });
  return NextResponse.json({ ok: true, item });
}

export async function PATCH(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = inboxItemSchema.safeParse(body);
  if (!parsed.success || !parsed.data.id) return NextResponse.json({ error: "Item não encontrado." }, { status: 400 });
  const result = await prisma.inboxItem.updateMany({ where: { id: parsed.data.id, userId: user.id }, data: inboxPayload(parsed.data) });
  if (result.count === 0) return NextResponse.json({ error: "Item não encontrado." }, { status: 404 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(request: Request) {
  const user = await requireUser();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Item não encontrado." }, { status: 400 });
  const result = await prisma.inboxItem.updateMany({ where: { id, userId: user.id }, data: { status: "ARCHIVED" } });
  if (result.count === 0) return NextResponse.json({ error: "Item não encontrado." }, { status: 404 });
  return NextResponse.json({ ok: true });
}
