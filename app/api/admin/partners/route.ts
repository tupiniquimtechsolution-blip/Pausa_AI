import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { partnerSchema } from "@/lib/validators";

export async function GET() {
  await requireAdmin();
  const partners = await prisma.partner.findMany({ include: { interests: true }, orderBy: { name: "asc" } });
  return NextResponse.json({ partners });
}

export async function POST(request: Request) {
  await requireAdmin();
  const body = await request.json().catch(() => null);
  const parsed = partnerSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Dados invalidos." }, { status: 400 });
  const data = {
    name: parsed.data.name,
    type: parsed.data.type,
    benefitProvider: parsed.data.benefitProvider,
    websiteUrl: parsed.data.websiteUrl,
    instagramUrl: parsed.data.instagramUrl,
    bookingUrl: parsed.data.bookingUrl,
    status: parsed.data.status,
    description: parsed.data.description
  };
  const partner = await prisma.partner.create({ data });
  return NextResponse.json({ partner });
}

export async function PATCH(request: Request) {
  await requireAdmin();
  const body = await request.json().catch(() => null);
  const parsed = partnerSchema.safeParse(body);
  if (!parsed.success || !parsed.data.id) return NextResponse.json({ error: "Dados invalidos." }, { status: 400 });
  const { id, ...data } = parsed.data;
  const partner = await prisma.partner.update({ where: { id }, data });
  return NextResponse.json({ partner });
}
