import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendDailyRecommendationEmail } from "@/lib/email";

function appBaseUrl() {
  return (process.env.APP_BASE_URL || "http://localhost:3000").replace(/\/$/, "");
}

export async function POST(request: Request) {
  const expected = process.env.CRON_SECRET;
  const provided = request.headers.get("x-cron-secret") || "";
  if (!expected || provided !== expected) return NextResponse.json({ error: "Nao autorizado." }, { status: 401 });

  const users = await prisma.user.findMany({
    where: { profile: { is: { emailRecommendationsEnabled: true } } },
    include: {
      profile: true,
      checkins: { orderBy: { createdAt: "desc" }, take: 1 }
    }
  });

  const sent = [];
  for (const user of users) {
    const checkin = user.checkins[0];
    const instruction = await prisma.exerciseInstruction.findFirst({
      where: {
        categoryGroup: "MENTAL",
        unlockLevel: { lte: user.level },
        ...(checkin?.recommendedInstructionSlug ? { slug: checkin.recommendedInstructionSlug } : {})
      },
      orderBy: [{ unlockLevel: "desc" }, { title: "asc" }]
    }) || await prisma.exerciseInstruction.findFirst({
      where: { categoryGroup: "MENTAL", unlockLevel: { lte: user.level } },
      orderBy: [{ unlockLevel: "asc" }, { title: "asc" }]
    });
    if (!instruction) continue;
    const result = await sendDailyRecommendationEmail({
      to: user.email,
      name: user.name,
      title: instruction.title,
      description: instruction.shortDescription,
      url: `${appBaseUrl()}/app/exercicios/${instruction.slug}`
    });
    sent.push({ userId: user.id, sent: result.sent, reason: result.reason });
  }

  return NextResponse.json({ ok: true, processed: users.length, sent });
}
