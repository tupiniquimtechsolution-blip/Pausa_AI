import { createHash } from "node:crypto";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export type RateLimitResult = {
  allowed: boolean;
  limit: number;
  remaining: number;
  retryAfterSeconds: number;
};

function hashKey(scope: string, key: string) {
  const pepper = process.env.RATE_LIMIT_PEPPER || process.env.JWT_SECRET || "local-rate-limit-pepper";
  return createHash("sha256").update(`${pepper}:${scope}:${key}`).digest("hex");
}

export function clientAddress(request: Request) {
  // Cloudflare replaces this header at the edge; forwarded headers may be
  // supplied by the caller and must not take precedence on Workers.
  return request.headers.get("cf-connecting-ip")?.trim()
    || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip")?.trim()
    || "local";
}

export async function consumeRateLimit(input: {
  scope: string;
  key: string;
  limit: number;
  windowMs: number;
  now?: Date;
}): Promise<RateLimitResult> {
  const now = input.now || new Date();
  const keyHash = hashKey(input.scope, input.key);

  const newWindowEnd = new Date(now.getTime() + input.windowMs);
  // One atomic statement serializes contenders on the same key, including the
  // first hit and window rollover. No read/compute/write race between isolates.
  const [bucket] = await prisma.$queryRaw<{ count: number; windowEnd: Date }[]>(Prisma.sql`
    INSERT INTO "RateLimitBucket"
      ("keyHash", "scope", "count", "windowEnd", "lastSeenAt", "createdAt", "updatedAt")
    VALUES (${keyHash}, ${input.scope}, 1, ${newWindowEnd}, ${now}, ${now}, ${now})
    ON CONFLICT ("keyHash") DO UPDATE SET
      "count" = CASE WHEN "RateLimitBucket"."windowEnd" <= ${now}
        THEN 1 ELSE "RateLimitBucket"."count" + 1 END,
      "windowEnd" = CASE WHEN "RateLimitBucket"."windowEnd" <= ${now}
        THEN ${newWindowEnd} ELSE "RateLimitBucket"."windowEnd" END,
      "lastSeenAt" = ${now}, "updatedAt" = ${now}
    RETURNING "count", "windowEnd"
  `);
  if (!bucket) throw new Error("RATE_LIMIT_UNAVAILABLE");
  const allowed = bucket.count <= input.limit;
  return {
    allowed,
    limit: input.limit,
    remaining: Math.max(0, input.limit - bucket.count),
    retryAfterSeconds: allowed ? 0 : Math.max(1, Math.ceil((bucket.windowEnd.getTime() - now.getTime()) / 1000))
  };
}

export function rateLimitHeaders(result: RateLimitResult) {
  return {
    "X-RateLimit-Limit": String(result.limit),
    "X-RateLimit-Remaining": String(result.remaining),
    ...(result.retryAfterSeconds ? { "Retry-After": String(result.retryAfterSeconds) } : {})
  };
}
