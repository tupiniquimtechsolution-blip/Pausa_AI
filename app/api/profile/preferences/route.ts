import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { THEME_PREFERENCES } from "@/lib/design-system/themes";
import { LOCALES, isLocaleEnabled } from "@/lib/i18n/catalogs";

const schema = z.object({
  theme: z.enum(THEME_PREFERENCES).optional(),
  language: z.enum(LOCALES).refine(isLocaleEnabled, "Locale aguardando QA.").optional(),
  emailRecommendationsEnabled: z.coerce.boolean().optional(),
  pushNotificationsEnabled: z.coerce.boolean().optional(),
  dailyRecommendationTime: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/).optional()
});

export async function PATCH(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Preferencia invalida." }, { status: 400 });
  await prisma.profile.update({ where: { userId: user.id }, data: { ...parsed.data, lastPreferenceUpdate: new Date() } });
  return NextResponse.json({ ok: true });
}
