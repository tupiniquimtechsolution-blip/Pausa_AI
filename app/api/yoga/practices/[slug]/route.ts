import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { isCatalogEntryActive } from "@/lib/catalog-reconciliation";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  await requireUser();
  const { slug } = await params;
  const practice = await prisma.yogaPractice.findUnique({ where: { slug } });
  if (!practice || !isCatalogEntryActive("YOGA_PRACTICE", practice.slug)) {
    return NextResponse.json({ error: "Pratica de yoga nao encontrada." }, { status: 404 });
  }
  return NextResponse.json({ practice });
}
