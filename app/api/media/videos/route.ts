import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  await requireUser();
  const videos = await prisma.mediaAsset.findMany({
    where: {
      assetType: "VIDEO",
      status: "PUBLISHED",
      withdrawnAt: null,
      publications: { some: { channel: "APP", status: "PUBLISHED" } },
      videoProductions: {
        some: {
          pipelineStatus: "APPROVED",
          ownershipConfirmed: true,
          biomechanicsApproved: true,
          legalApproved: true,
          editorialApproved: true,
          accessibilityApproved: true
        }
      }
    },
    include: { localizations: { where: { status: "APPROVED" } } }
  });
  return NextResponse.json({ ok: true, visible: videos.length > 0, videos });
}
