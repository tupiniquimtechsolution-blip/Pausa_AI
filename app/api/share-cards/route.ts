import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  sourceType: z.enum(["SESSION", "ACHIEVEMENT", "LEVEL", "ACTIVITY", "ROUTE"]),
  sourceId: z.string().min(1).max(160),
  format: z.enum(["STORY", "FEED", "MESSAGE"]),
  title: z.string().min(1).max(160),
  summary: z.string().min(1).max(500),
  fullNameVisible: z.boolean().default(false),
  exactLocationVisible: z.boolean().default(false),
  sensitiveDataVisible: z.boolean().default(false)
});

export async function GET() {
  const user = await requireUser();
  return NextResponse.json({ ok: true, cards: await prisma.shareCard.findMany({ where: { userId: user.id }, orderBy: { createdAt: "desc" } }) });
}

export async function POST(request: Request) {
  const user = await requireUser();
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Card inválido." }, { status: 400 });
  const card = await prisma.shareCard.create({
    data: {
      userId: user.id,
      ...parsed.data,
      status: "DRAFT"
    }
  });
  return NextResponse.json({
    ok: true,
    card,
    previewOnly: true,
    published: false,
    privacyDefaultsApplied: !card.fullNameVisible && !card.exactLocationVisible && !card.sensitiveDataVisible
  }, { status: 201 });
}
