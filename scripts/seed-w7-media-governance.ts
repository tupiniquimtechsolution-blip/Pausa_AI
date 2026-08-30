import { PrismaClient } from "@prisma/client";

export async function seedW7MediaGovernance(prisma: PrismaClient) {
  const capabilities = [
    { providerKey: "PAUSA", capability: "OWN_AUDIO", enabled: true, credentialsPresent: true, testStatus: "ACTIVE" },
    { providerKey: "SPOTIFY", capability: "EMBEDDED_PROVIDER", enabled: false, credentialsPresent: false, testStatus: "NOT_TESTED" },
    { providerKey: "YOUTUBE", capability: "DEEP_LINK_REDIRECT", enabled: false, credentialsPresent: false, testStatus: "NOT_TESTED" },
    { providerKey: "DEEZER", capability: "REMOTE_CONTROL", enabled: false, credentialsPresent: false, testStatus: "NOT_TESTED" },
    { providerKey: "DEVICE", capability: "USER_LIBRARY", enabled: false, credentialsPresent: false, testStatus: "NOT_TESTED" }
  ];
  for (const capability of capabilities) {
    await prisma.audioProviderCapability.upsert({
      where: { providerKey_capability: { providerKey: capability.providerKey, capability: capability.capability } },
      update: capability,
      create: capability
    });
  }
}

async function main() {
  const prisma = new PrismaClient();
  try {
    await seedW7MediaGovernance(prisma);
  } finally {
    await prisma.$disconnect();
  }
}

if (process.argv[1]?.includes("seed-w7-media-governance")) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
