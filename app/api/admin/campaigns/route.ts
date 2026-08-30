import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { validateCampaignPrivacy } from "@/lib/privacy/public-content";

const schema = z.object({
  slug: z.string().min(2).max(160).regex(/^[a-z0-9-]+$/),
  title: z.string().min(2).max(180),
  objective: z.string().min(2).max(500),
  audience: z.string().min(2).max(300),
  channel: z.enum(["INSTAGRAM", "EXPORT", "IN_APP"]),
  format: z.enum(["CARD", "CAROUSEL", "STORY", "REEL", "AD"]),
  callToAction: z.string().min(1).max(120),
  deepLink: z.string().startsWith("/app/"),
  scheduledFor: z.coerce.date().optional(),
  contents: z.array(z.object({
    pillar: z.enum(["BODY", "MIND", "HEALTH", "NUTRITION", "TECH", "PROGRESS", "BRAND"]),
    format: z.string().min(1).max(80),
    assetId: z.string().optional(),
    copyText: z.string().min(1).max(2200)
  })).min(1).max(20)
});

export async function GET() {
  await requireAdmin();
  return NextResponse.json({ ok: true, campaigns: await prisma.marketingCampaign.findMany({ include: { contents: true }, orderBy: { updatedAt: "desc" } }) });
}

export async function POST(request: Request) {
  await requireAdmin();
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Campanha inválida." }, { status: 400 });
  const { contents, ...campaignData } = parsed.data;
  const privacy = validateCampaignPrivacy({
    deepLink: campaignData.deepLink,
    copies: contents.map((content) => content.copyText)
  });
  if (!privacy.safe) {
    return NextResponse.json(
      { ok: false, error: "Campanha contém personalização ou parâmetro sensível.", reason: privacy.reason },
      { status: 400 }
    );
  }
  const campaign = await prisma.marketingCampaign.create({
    data: {
      ...campaignData,
      status: "DRAFT",
      contents: {
        create: contents.map((content, sortOrder) => ({ ...content, sortOrder }))
      }
    },
    include: { contents: true }
  });
  return NextResponse.json({ ok: true, campaign, autoPublished: false }, { status: 201 });
}
