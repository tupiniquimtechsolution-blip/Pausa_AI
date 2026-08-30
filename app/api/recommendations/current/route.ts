import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { createRecommendationForCheckin, recommendationForUser } from "@/lib/recommendations/service";

export async function GET(request: Request) {
  const user = await requireUser();
  const checkinId = new URL(request.url).searchParams.get("checkin") || undefined;
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
