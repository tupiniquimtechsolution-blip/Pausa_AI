import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { getPublishedEditorialCards } from "@/lib/content-library/service";

export async function GET(request: Request) {
  await requireUser();
  const rawCategory = new URL(request.url).searchParams.get("category")?.toUpperCase();
  if (rawCategory && rawCategory !== "HEALTH" && rawCategory !== "NUTRITION") {
    return NextResponse.json({ ok: false, error: "category deve ser HEALTH ou NUTRITION" }, { status: 400 });
  }
  const cards = await getPublishedEditorialCards(rawCategory as "HEALTH" | "NUTRITION" | undefined);
  return NextResponse.json({
    ok: true,
    cards,
    hiddenWhenEmpty: true,
    disclaimer: "Conteúdo editorial de bem-estar; não constitui prescrição, diagnóstico ou promessa clínica."
  });
}
