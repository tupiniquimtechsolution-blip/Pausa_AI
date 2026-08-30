import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  await requireUser();
  const [audio, capability] = await Promise.all([
    prisma.mediaAsset.findMany({
      where: {
        assetType: "AUDIO",
        status: "PUBLISHED",
        withdrawnAt: null,
        publications: { some: { channel: "APP", status: "PUBLISHED" } }
      },
      include: { localizations: { where: { status: "APPROVED" } } }
    }),
    prisma.audioProviderCapability.findUnique({ where: { providerKey_capability: { providerKey: "PAUSA", capability: "OWN_AUDIO" } } })
  ]);
  return NextResponse.json({ ok: true, ownAudioAvailable: Boolean(capability?.enabled && capability.testStatus === "ACTIVE"), audio });
}
