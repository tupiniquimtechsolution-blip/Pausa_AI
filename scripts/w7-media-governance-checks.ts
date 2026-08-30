import { PrismaClient } from "@prisma/client";
import {
  MEDIA_LIFECYCLE_STATUSES,
  REQUIRED_MEDIA_APPROVAL_STAGES,
  mediaPublicationReadiness,
  publishMediaAsset,
  withdrawMediaAsset
} from "../lib/media/governance";

const prisma = new PrismaClient();

function assert(value: unknown, message: string): asserts value {
  if (!value) throw new Error(`W7 gate: ${message}`);
}

async function main() {
  assert(MEDIA_LIFECYCLE_STATUSES.join(",") === "DRAFT,TECHNICAL_REVIEW,EDITORIAL_REVIEW,HEALTH_REVIEW,RIGHTS_REVIEW,LOCALIZATION_REVIEW,APPROVED,PUBLISHED,SUSPENDED,ARCHIVED,EXPIRED,REJECTED", "status canônico incompleto");
  const externalProviders = await prisma.audioProviderCapability.findMany({ where: { providerKey: { in: ["SPOTIFY", "YOUTUBE", "DEEZER"] } } });
  assert(externalProviders.length === 3, "provedores opcionais não registrados");
  assert(externalProviders.every((provider) => !provider.enabled && (!provider.credentialsPresent || provider.testStatus !== "ACTIVE")), "conector externo ativo sem credencial/teste");
  const ownAudio = await prisma.audioProviderCapability.findUnique({ where: { providerKey_capability: { providerKey: "PAUSA", capability: "OWN_AUDIO" } } });
  assert(ownAudio?.enabled && ownAudio.testStatus === "ACTIVE", "áudio próprio não sustenta o núcleo");

  const assetSlug = "w7-gate-owned-video";
  await prisma.mediaAsset.deleteMany({ where: { slug: assetSlug } });
  const userId = "w7-gate-user";
  await prisma.user.deleteMany({ where: { id: userId } });
  try {
    const asset = await prisma.mediaAsset.create({
      data: {
        slug: assetSlug,
        title: "Vídeo próprio do gate W7",
        assetType: "VIDEO",
        hash: "7".repeat(64),
        sourcePath: "/videos/alongamento-leve.mp4",
        mimeType: "video/mp4",
        format: "mp4",
        codec: "h264",
        language: "pt-BR",
        rightsHolder: "Pausa AI",
        proofPath: "/videos/alongamento-leve.mp4",
        commercialUseAllowed: true,
        transformationsAllowed: true,
        territoriesJson: "[\"BR\"]",
        channelsJson: "[\"APP\"]",
        localizations: {
          create: {
            language: "pt-BR",
            localizedTitle: "Vídeo próprio do gate W7",
            alternateText: "Demonstração de alongamento leve.",
            transcription: "Demonstração de alongamento leve.",
            captionsPath: "/videos/alongamento-leve.mp4",
            status: "PENDING"
          }
        },
        licenses: {
          create: {
            rightsHolder: "Pausa AI",
            proofPath: "/videos/alongamento-leve.mp4",
            commercialUseAllowed: true,
            transformationsAllowed: true,
            territoriesJson: "[\"BR\"]",
            channelsJson: "[\"APP\"]",
            validFrom: new Date("2026-07-25T00:00:00.000Z")
          }
        },
        outgoingRelations: {
          create: { targetType: "EXERCISE_INSTRUCTION", targetId: "alongamento-leve", relationType: "GUIDES" }
        }
      }
    });
    const blocked = await mediaPublicationReadiness(asset.id, "APP");
    assert(!blocked.ready && blocked.reasons.some((reason) => reason.startsWith("APPROVAL_MISSING")), "publicação sem revisão não foi bloqueada");
    let publishBlocked = false;
    try {
      await publishMediaAsset(asset.id, "APP");
    } catch {
      publishBlocked = true;
    }
    assert(publishBlocked, "serviço publicou mídia sem direitos/aprovação");
    for (const stage of REQUIRED_MEDIA_APPROVAL_STAGES) {
      await prisma.mediaApproval.create({ data: { assetId: asset.id, stage, decision: "APPROVED", decidedAt: new Date() } });
    }
    await prisma.mediaLocalization.updateMany({ where: { assetId: asset.id }, data: { status: "APPROVED" } });
    await prisma.mediaAsset.update({ where: { id: asset.id }, data: { status: "APPROVED" } });
    const publication = await publishMediaAsset(asset.id, "APP");
    assert(publication.status === "PUBLISHED", "publicação aprovada falhou");
    const withdrawal = await withdrawMediaAsset(asset.id, "Gate de retirada");
    assert(withdrawal.usageLocations.length === 1 && withdrawal.suspendedChannels.includes("APP"), "retirada não localizou usos");

    await prisma.user.create({ data: { id: userId, name: "W7 Gate", email: "w7-gate@pausa.local", passwordHash: "not-a-login" } });
    const share = await prisma.shareCard.create({
      data: { userId, sourceType: "ACTIVITY", sourceId: "gate", format: "STORY", title: "Gate", summary: "Resumo" }
    });
    assert(!share.fullNameVisible && !share.exactLocationVisible && !share.sensitiveDataVisible && share.status === "DRAFT", "card de compartilhamento expõe dados por padrão");

    const visibleVideoCount = await prisma.mediaAsset.count({
      where: {
        assetType: "VIDEO",
        status: "PUBLISHED",
        videoProductions: { some: { pipelineStatus: "APPROVED", ownershipConfirmed: true, biomechanicsApproved: true, legalApproved: true, editorialApproved: true, accessibilityApproved: true } }
      }
    });
    assert(visibleVideoCount === 0, "vídeo sem pipeline completo ficou visível");
  } finally {
    await prisma.mediaAsset.deleteMany({ where: { slug: assetSlug } });
    await prisma.user.deleteMany({ where: { id: userId } });
  }
  console.log(JSON.stringify({ ok: true, lifecycleStatuses: MEDIA_LIFECYCLE_STATUSES.length, externalConnectorsActive: 0, ownAudioCore: true, emptyVideoUiHidden: true }, null, 2));
}

main()
  .finally(async () => prisma.$disconnect())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
