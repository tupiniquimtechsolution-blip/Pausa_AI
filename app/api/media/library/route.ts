import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  await requireUser();
  const url = new URL(request.url);
  const assetType = url.searchParams.get("type")?.toUpperCase();
  const channel = url.searchParams.get("channel") || "APP";
  const assets = await prisma.mediaAsset.findMany({
    where: {
      status: "PUBLISHED",
      withdrawnAt: null,
      ...(assetType ? { assetType } : {}),
      publications: { some: { channel, status: "PUBLISHED" } }
    },
    include: {
      localizations: { where: { status: "APPROVED" } },
      publications: { where: { channel, status: "PUBLISHED" } }
    },
    orderBy: { updatedAt: "desc" }
  });
  return NextResponse.json({ ok: true, assets });
}
