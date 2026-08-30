import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { partnerInterestSchema } from "@/lib/validators";

export async function POST(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = partnerInterestSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Interesse invalido." }, { status: 400 });
  await prisma.partnerInterest.create({ data: { userId: user.id, ...parsed.data } });
  return NextResponse.json({ ok: true, message: "Interesse registrado." });
}
