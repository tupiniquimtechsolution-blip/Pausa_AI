import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { archivedCatalogIds } from "@/lib/catalog-reconciliation";

export async function GET(request: Request) {
  await requireUser();
  const url = new URL(request.url);
  const area = url.searchParams.get("area") || "";
  const level = Number(url.searchParams.get("level") || 0);
  const duration = Number(url.searchParams.get("duration") || 0);
  const objective = url.searchParams.get("objective") || "";

  const exercises = await prisma.exercise.findMany({
    where: {
      ...(area ? { area } : {}),
      ...(level ? { level } : {}),
      ...(duration ? { durationMinutes: { lte: duration } } : {}),
      ...(objective ? { objective: { contains: objective } } : {}),
      id: { notIn: archivedCatalogIds("EXERCISE") }
    },
    orderBy: [{ area: "asc" }, { level: "asc" }, { durationMinutes: "asc" }]
  });
  return NextResponse.json({ exercises });
}
