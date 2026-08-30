import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { getProgressSummary } from "@/lib/progress/summary";

export async function GET() {
  const user = await requireUser();
  return NextResponse.json({ ok: true, ...(await getProgressSummary(user.id, user.xp)) });
}
