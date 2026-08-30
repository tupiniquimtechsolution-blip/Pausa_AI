import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { getPublishedContentLibrary } from "@/lib/content-library/service";

export async function GET(request: Request) {
  await requireUser();
  const pillar = new URL(request.url).searchParams.get("pillar")?.toUpperCase();
  if (pillar !== "BODY" && pillar !== "MIND") {
    return NextResponse.json({ ok: false, error: "pillar deve ser BODY ou MIND" }, { status: 400 });
  }
  const categories = await getPublishedContentLibrary(pillar);
  return NextResponse.json({ ok: true, version: 1, locale: "pt-BR", categories });
}
