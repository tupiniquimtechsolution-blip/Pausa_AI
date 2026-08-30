import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { activeCatalogIds } from "@/lib/catalog-reconciliation";

export async function GET(request: Request) {
  await requireUser();
  const { searchParams } = new URL(request.url);
  const yogaType = searchParams.get("tipo") || "";
  const context = searchParams.get("contexto") || "";
  const area = searchParams.get("objetivo") || "";
  const level = Number(searchParams.get("nivel") || 0);
  const practices = await prisma.yogaPractice.findMany({
    where: {
      ...(yogaType ? { yogaType } : {}),
      ...(context ? { OR: [{ context }, { context: "BOTH" }] } : {}),
      ...(area ? { area } : {}),
      ...(level ? { level: { lte: level } } : {}),
      slug: { in: activeCatalogIds("YOGA_PRACTICE") }
    },
    orderBy: [{ level: "asc" }, { yogaType: "asc" }, { title: "asc" }]
  });
  return NextResponse.json({ practices });
}
