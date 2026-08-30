import assert from "node:assert/strict";
import { randomUUID } from "node:crypto";
import { readFileSync } from "node:fs";
import { prisma } from "../lib/prisma";
import { consumeRateLimit } from "../lib/security/rate-limit";
import { validateCampaignPrivacy } from "../lib/privacy/public-content";
import { resolvePublicMediaSource } from "../lib/media/secure-source";
import { deleteDataSubject, exportDataSubject } from "../lib/privacy/data-subject";

function source(path: string) {
  return readFileSync(path, "utf8");
}

function luminance(rgb: number[]) {
  const [red, green, blue] = rgb.map((channel) => {
    const value = channel / 255;
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function contrast(first: number[], second: number[]) {
  const [lighter, darker] = [luminance(first), luminance(second)].sort((a, b) => b - a);
  return (lighter + 0.05) / (darker + 0.05);
}

function assertThemeContrast(css: string) {
  const blocks = [...css.matchAll(/(?:\:root,\s*)?\[data-theme="([^"]+)"\]\s*\{([^}]+)\}/gs)];
  assert.equal(blocks.length, 9, "All nine governed themes must be present.");
  for (const [, theme, body] of blocks) {
    const values = Object.fromEntries([...body.matchAll(/--([\w-]+):\s*(\d+)\s+(\d+)\s+(\d+)/g)]
      .map((match) => [match[1], [Number(match[2]), Number(match[3]), Number(match[4])]]));
    for (const background of ["ds-background", "ds-surface", "ds-card"]) {
      for (const foreground of ["ds-text", "ds-muted"]) {
        assert.ok(contrast(values[foreground], values[background]) >= 4.5, `${theme}:${foreground}/${background} contrast below WCAG AA.`);
      }
    }
    assert.ok(contrast(values["ds-accent"], values["ds-accent-contrast"]) >= 4.5, `${theme}:accent contrast below WCAG AA.`);
  }
}

async function main() {
  const scope = `w8.test.${randomUUID()}`;
  const now = new Date("2026-07-26T12:00:00.000Z");
  const first = await consumeRateLimit({ scope, key: "same-client", limit: 2, windowMs: 60_000, now });
  const second = await consumeRateLimit({ scope, key: "same-client", limit: 2, windowMs: 60_000, now });
  const blocked = await consumeRateLimit({ scope, key: "same-client", limit: 2, windowMs: 60_000, now });
  const reset = await consumeRateLimit({
    scope,
    key: "same-client",
    limit: 2,
    windowMs: 60_000,
    now: new Date(now.getTime() + 60_001)
  });
  assert.equal(first.allowed, true);
  assert.equal(second.remaining, 0);
  assert.equal(blocked.allowed, false);
  assert.equal(reset.allowed, true);

  assert.equal(validateCampaignPrivacy({ deepLink: "/app/corpo", copies: ["Pausa de mobilidade"] }).safe, true);
  assert.equal(validateCampaignPrivacy({ deepLink: "/app/corpo?checkinId=secret", copies: ["Pausa"] }).safe, false);
  assert.equal(validateCampaignPrivacy({ deepLink: "/app/corpo", copies: ["Olá {{user.email}}"] }).safe, false);
  assert.throws(() => resolvePublicMediaSource("/../.env"), /UNSAFE_MEDIA_PATH/);

  const email = `w8-${randomUUID()}@example.test`;
  const user = await prisma.user.create({
    data: { name: "W8 Privacy Test", email, passwordHash: "test-only", onboardingCompleted: true }
  });
  const correlationId = randomUUID();
  try {
    await prisma.dataConsent.create({
      data: { userId: user.id, scope: "WELLBEING_CHECKIN", sourceKind: "MANUAL", retentionDays: 30 }
    });
    const exported = await exportDataSubject(user.id, correlationId);
    const serialized = JSON.stringify(exported);
    assert.equal(exported.identity.email, email);
    assert.equal(serialized.includes("passwordHash"), false);
    assert.equal(serialized.includes("tokenHash"), false);
    assert.ok(exported.categories.profileAndWellbeing.DataConsent.length === 1);
    await deleteDataSubject(user.id, { correlationId, reason: "AUTOMATED_W8_TEST" });
    assert.equal(await prisma.user.findUnique({ where: { id: user.id } }), null);
    const deletionAudit = await prisma.auditLog.findFirst({
      where: { action: "privacy.account_deleted", correlationId }
    });
    assert.ok(deletionAudit);
    assert.equal(deletionAudit.actorId, null);
    assert.equal(deletionAudit.targetId, null);
  } finally {
    await prisma.user.deleteMany({ where: { email } });
    await prisma.rateLimitBucket.deleteMany({ where: { scope } });
    await prisma.auditLog.deleteMany({ where: { correlationId } });
  }

  const nextConfig = source("next.config.mjs");
  for (const header of [
    "Content-Security-Policy",
    "X-Content-Type-Options",
    "X-Frame-Options",
    "Referrer-Policy",
    "Permissions-Policy",
    "Strict-Transport-Security"
  ]) assert.ok(nextConfig.includes(header), `Missing security header: ${header}`);

  const css = source("app/globals.css");
  assert.ok(css.includes(":focus-visible"));
  assert.ok(css.includes("prefers-reduced-motion: reduce"));
  assertThemeContrast(css);
  assert.ok(source("components/ui.tsx").includes("min-h-11"));
  assert.ok(source("lib/observability.ts").includes("[REDACTED]"));
  assert.ok(source("app/api/system/health/route.ts").includes("Cache-Control"));
  assert.ok(source("app/api/auth/password/reset/route.ts").includes("sessionVersion"));
  assert.equal(source("app/api/auth/login/route.ts").includes("x-forwarded-host"), false);

  console.info(JSON.stringify({
    ok: true,
    persistentRateLimit: true,
    sessionRevocation: true,
    subjectExportAndDeletion: true,
    campaignPrivacyGuard: true,
    secureMediaRegistration: true,
    securityHeaders: true,
    accessibilityBaselines: true,
    healthMonitoring: true
  }));
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => prisma.$disconnect());
