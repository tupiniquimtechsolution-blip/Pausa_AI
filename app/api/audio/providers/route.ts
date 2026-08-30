import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  await requireUser();
  const providers = await prisma.audioProviderCapability.findMany({ orderBy: [{ providerKey: "asc" }, { capability: "asc" }] });
  return NextResponse.json({
    ok: true,
    providers: providers.map((provider) => ({
      providerKey: provider.providerKey,
      capability: provider.capability,
      available: provider.enabled && provider.credentialsPresent && provider.testStatus === "ACTIVE",
      testStatus: provider.testStatus
    })),
    coreProvider: "PAUSA",
    externalProvidersOptional: true
  });
}
