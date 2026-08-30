import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { socialDowntimeSchema } from "@/lib/validators";
import { socialDowntimeCapability } from "@/lib/social-downtime/policy";

export async function POST(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = socialDowntimeSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Preencha os dados do modo sem redes." }, { status: 400 });
  const capability = socialDowntimeCapability({
    userAgent: request.headers.get("user-agent") || "",
    requestedPlatform: request.headers.get("x-pausa-platform"),
    nativeBridge: request.headers.get("x-pausa-native-bridge") === "true"
  });
  const { categories, exceptions, ...settings } = parsed.data;
  const data = {
    ...settings,
    apps: parsed.data.apps.join(","),
    categoriesJson: JSON.stringify(categories),
    exceptionsJson: JSON.stringify(exceptions),
    platformState: capability.state
  };
  const downtime = await prisma.socialDowntime.upsert({
    where: { userId: user.id },
    update: data,
    create: { userId: user.id, ...data }
  });
  return NextResponse.json({ ok: true, downtime, capability });
}
