import { prisma } from "../lib/prisma";

const apply = process.argv.includes("--apply");
const now = new Date();
const auditRetentionDays = Math.max(30, Number(process.env.AUDIT_LOG_RETENTION_DAYS || 180));
const auditCutoff = new Date(now.getTime() - auditRetentionDays * 24 * 60 * 60 * 1000);

async function main() {
  const consents = await prisma.dataConsent.findMany({
    select: { userId: true, sourceKind: true, retentionDays: true, status: true }
  });
  const healthPlans = await Promise.all(consents.map(async (consent) => {
    const cutoff = new Date(now.getTime() - consent.retentionDays * 24 * 60 * 60 * 1000);
    const where = {
      userId: consent.userId,
      sourceKind: consent.sourceKind,
      recordedAt: { lt: cutoff }
    };
    const count = await prisma.healthProfileEntry.count({ where });
    if (apply && count) await prisma.healthProfileEntry.deleteMany({ where });
    return { sourceKind: consent.sourceKind, status: consent.status, retentionDays: consent.retentionDays, count };
  }));

  const [expiredResetTokens, expiredRateBuckets, expiredAuditLogs] = await Promise.all([
    prisma.passwordResetToken.count({ where: { expiresAt: { lt: now } } }),
    prisma.rateLimitBucket.count({ where: { windowEnd: { lt: now } } }),
    prisma.auditLog.count({ where: { createdAt: { lt: auditCutoff } } })
  ]);

  if (apply) {
    await prisma.$transaction([
      prisma.passwordResetToken.deleteMany({ where: { expiresAt: { lt: now } } }),
      prisma.rateLimitBucket.deleteMany({ where: { windowEnd: { lt: now } } }),
      prisma.auditLog.deleteMany({ where: { createdAt: { lt: auditCutoff } } })
    ]);
  }

  console.info(JSON.stringify({
    event: "retention_maintenance",
    mode: apply ? "APPLY" : "DRY_RUN",
    auditRetentionDays,
    candidates: {
      expiredResetTokens,
      expiredRateBuckets,
      expiredAuditLogs,
      healthProfileEntries: healthPlans.reduce((total, item) => total + item.count, 0)
    },
    consentPoliciesEvaluated: healthPlans.length
  }));
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => prisma.$disconnect());
