import { statSync } from "node:fs";
import { join } from "node:path";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type ReconciledVideo = {
  slug: string;
  targetType: string;
  videoUrl: string;
  previousStatus: string;
  nextStatus: "READY" | "PLANNED";
};

function publicFileExists(url: string) {
  if (!url.startsWith("/")) return false;
  if (!url.toLowerCase().endsWith(".mp4")) return false;
  try {
    return statSync(join(process.cwd(), "public", url.replace(/^\//, ""))).isFile();
  } catch {
    return false;
  }
}

function countByTarget(videos: ReconciledVideo[]) {
  return videos.reduce<Record<string, number>>((acc, video) => {
    acc[video.targetType] = (acc[video.targetType] || 0) + 1;
    return acc;
  }, {});
}

async function main() {
  const videos = await prisma.instructionalVideo.findMany({
    orderBy: [{ targetType: "asc" }, { slug: "asc" }]
  });

  const ready: ReconciledVideo[] = [];
  const planned: ReconciledVideo[] = [];
  const changed: ReconciledVideo[] = [];

  for (const video of videos) {
    const nextStatus = publicFileExists(video.videoUrl) ? "READY" : "PLANNED";
    const reconciled: ReconciledVideo = {
      slug: video.slug,
      targetType: video.targetType,
      videoUrl: video.videoUrl,
      previousStatus: video.status,
      nextStatus
    };

    if (nextStatus === "READY") ready.push(reconciled);
    else planned.push(reconciled);

    if (video.status !== nextStatus) {
      await prisma.instructionalVideo.update({
        where: { id: video.id },
        data: { status: nextStatus }
      });
      changed.push(reconciled);
    }
  }

  console.log(JSON.stringify({
    totalRecords: videos.length,
    ready: ready.length,
    planned: planned.length,
    changed: changed.length,
    readyByTarget: countByTarget(ready),
    plannedByTarget: countByTarget(planned),
    changedSample: changed.slice(0, 12),
    missingSample: planned.slice(0, 12)
  }, null, 2));
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
