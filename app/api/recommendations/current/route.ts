import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { createRecommendationForCheckin, recommendationForUser } from "@/lib/recommendations/service";

export async function GET(request: Request) {
  const user = await requireUser();
  const checkinId = new URL(request.url).searchParams.get("checkin") || undefined;
  // Use the same response for missing and foreign check-ins, before attempting
  // to generate a recommendation or loading the content catalog.
  if (checkinId && !await prisma.checkin.findFirst({
    where: { id: checkinId, userId: user.id },
    select: { id: true }
  })) {
    return NextResponse.json({ ok: false, error: "Check-in não encontrado." }, { status: 404 });
  }
  let decision = await recommendationForUser(user.id, checkinId);
  if (!decision && checkinId) {
    await createRecommendationForCheckin(user.id, checkinId);
    decision = await recommendationForUser(user.id, checkinId);
  }
  if (!decision) return NextResponse.json({ ok: true, decision: null });
  return NextResponse.json({
    ok: true,
    decision: {
      ...decision,
      factors: JSON.parse(decision.factorsJson),
      avoidedContent: JSON.parse(decision.avoidedContentJson)
    }
  });
}
