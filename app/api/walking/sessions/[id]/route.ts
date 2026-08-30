import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await requireUser();
  const { id } = await params;
  const session = await prisma.walkingSession.findFirst({ where: { id, userId: user.id } });
  if (!session) return NextResponse.json({ error: "Caminhada nao encontrada." }, { status: 404 });
  await prisma.walkingSession.delete({ where: { id } });
  return NextResponse.json({ ok: true, message: "Atividade excluida do historico." });
}
