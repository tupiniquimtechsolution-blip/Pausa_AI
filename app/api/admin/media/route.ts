import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { verifyRegisteredMediaSource } from "@/lib/media/secure-source";

const schema = z.object({
  slug: z.string().min(2).max(160).regex(/^[a-z0-9-]+$/),
  title: z.string().min(2).max(180),
  assetType: z.enum(["IMAGE", "AUDIO", "VIDEO", "DOCUMENT", "SHARE_TEMPLATE"]),
  hash: z.string().regex(/^[a-f0-9]{64}$/i),
  sourcePath: z.string().startsWith("/"),
  mimeType: z.string().min(3).max(100),
  format: z.string().min(1).max(30),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
  durationSeconds: z.number().positive().optional(),
  codec: z.string().max(50).optional(),
  language: z.string().default("pt-BR"),
  rightsHolder: z.string().min(2).max(180),
  proofPath: z.string().startsWith("/"),
  commercialUseAllowed: z.boolean(),
  transformationsAllowed: z.boolean(),
  territories: z.array(z.string().max(80)).min(1),
  channels: z.array(z.string().max(80)).min(1),
  requiredCredit: z.string().max(300).optional(),
  licenseExpiresAt: z.coerce.date().optional(),
  alternateText: z.string().min(3).max(500),
  transcription: z.string().max(20_000).optional(),
  captionsPath: z.string().startsWith("/").optional()
});

export async function GET() {
  await requireAdmin();
  const assets = await prisma.mediaAsset.findMany({
    include: { approvals: true, licenses: true, localizations: true, publications: true },
    orderBy: { updatedAt: "desc" }
  });
  return NextResponse.json({ ok: true, assets });
}

export async function POST(request: Request) {
  await requireAdmin();
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Metadados de mídia inválidos.", details: parsed.error.flatten() }, { status: 400 });
  try {
    await verifyRegisteredMediaSource({
      sourcePath: parsed.data.sourcePath,
      mimeType: parsed.data.mimeType,
      declaredHash: parsed.data.hash
    });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Arquivo de mídia rejeitado.", reason: error instanceof Error ? error.message : "MEDIA_VALIDATION_FAILED" },
      { status: 400 }
    );
  }
  const duplicate = await prisma.mediaAsset.findUnique({ where: { hash: parsed.data.hash.toLowerCase() } });
  if (duplicate) return NextResponse.json({ ok: true, deduplicated: true, asset: duplicate });
  const now = new Date();
  const asset = await prisma.mediaAsset.create({
    data: {
      slug: parsed.data.slug,
      title: parsed.data.title,
      assetType: parsed.data.assetType,
      hash: parsed.data.hash.toLowerCase(),
      sourcePath: parsed.data.sourcePath,
      mimeType: parsed.data.mimeType,
      format: parsed.data.format,
      width: parsed.data.width,
      height: parsed.data.height,
      durationSeconds: parsed.data.durationSeconds,
      codec: parsed.data.codec,
      language: parsed.data.language,
      rightsHolder: parsed.data.rightsHolder,
      proofPath: parsed.data.proofPath,
      commercialUseAllowed: parsed.data.commercialUseAllowed,
      transformationsAllowed: parsed.data.transformationsAllowed,
      territoriesJson: JSON.stringify(parsed.data.territories),
      channelsJson: JSON.stringify(parsed.data.channels),
      requiredCredit: parsed.data.requiredCredit,
      licenseExpiresAt: parsed.data.licenseExpiresAt,
      versions: {
        create: {
          version: 1,
          hash: parsed.data.hash.toLowerCase(),
          sourcePath: parsed.data.sourcePath,
          changeSummary: "Versão inicial"
        }
      },
      localizations: {
        create: {
          language: parsed.data.language,
          localizedTitle: parsed.data.title,
          alternateText: parsed.data.alternateText,
          transcription: parsed.data.transcription,
          captionsPath: parsed.data.captionsPath,
          status: "PENDING"
        }
      },
      licenses: {
        create: {
          rightsHolder: parsed.data.rightsHolder,
          proofPath: parsed.data.proofPath,
          commercialUseAllowed: parsed.data.commercialUseAllowed,
          transformationsAllowed: parsed.data.transformationsAllowed,
          territoriesJson: JSON.stringify(parsed.data.territories),
          channelsJson: JSON.stringify(parsed.data.channels),
          requiredCredit: parsed.data.requiredCredit,
          validFrom: now,
          expiresAt: parsed.data.licenseExpiresAt
        }
      }
    },
    include: { versions: true, localizations: true, licenses: true }
  });
  return NextResponse.json({ ok: true, deduplicated: false, asset }, { status: 201 });
}
