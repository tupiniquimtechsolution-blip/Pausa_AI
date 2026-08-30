import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { activeCatalogIds } from "@/lib/catalog-reconciliation";

export async function GET() {
  await requireUser();
  const sequences = await prisma.yogaSequence.findMany({
    where: { slug: { in: activeCatalogIds("YOGA_SEQUENCE") } },
    orderBy: [{ level: "asc" }, { title: "asc" }]
  });
  return NextResponse.json({ sequences });
}
