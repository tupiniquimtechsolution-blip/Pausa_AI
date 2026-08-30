import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { leadSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Preencha os campos obrigatórios." }, { status: 400 });
  await prisma.b2BLead.create({ data: parsed.data });
  return NextResponse.json({ ok: true, message: "Recebemos seu interesse. Em breve entraremos em contato para apresentar o Pausa AI Empresas." });
}
