import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";

function parseJsonList(value: string) {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function GET(_: Request, { params }: { params: Promise<{ slug: string }> }) {
  await requireUser();
  const { slug } = await params;
  const video = await prisma.instructionalVideo.findFirst({ where: { slug, status: "PUBLISHED" } });

  if (!video) {
    return NextResponse.json({ error: "Video nao encontrado." }, { status: 404 });
  }

  return NextResponse.json({
    video: {
      ...video,
      tags: parseJsonList(video.tags),
      position: parseJsonList(video.position),
      approvalChecklist: parseJsonList(video.approvalChecklist)
    }
  });
}
