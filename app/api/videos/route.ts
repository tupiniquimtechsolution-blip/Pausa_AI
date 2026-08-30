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

function serializeVideo(video: Awaited<ReturnType<typeof prisma.instructionalVideo.findFirst>>) {
  if (!video) return null;
  return {
    ...video,
    tags: parseJsonList(video.tags),
    position: parseJsonList(video.position),
    approvalChecklist: parseJsonList(video.approvalChecklist)
  };
}

export async function GET(request: Request) {
  await requireUser();
  const { searchParams } = new URL(request.url);
  const targetType = searchParams.get("targetType") || undefined;
  const targetSlug = searchParams.get("targetSlug") || undefined;
  const videos = await prisma.instructionalVideo.findMany({
    where: {
      ...(targetType ? { targetType } : {}),
      ...(targetSlug ? { targetSlug } : {}),
      status: "PUBLISHED"
    },
    orderBy: [{ batchWave: "asc" }, { category: "asc" }, { title: "asc" }]
  });

  return NextResponse.json({ videos: videos.map(serializeVideo), visible: videos.length > 0 });
}
