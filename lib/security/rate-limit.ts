import { createHash } from "node:crypto";
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
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
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

  return prisma.$transaction(async (tx) => {
    const current = await tx.rateLimitBucket.findUnique({ where: { keyHash } });
    const expired = !current || current.windowEnd <= now;
    const nextCount = expired ? 1 : current.count + 1;
    const windowEnd = expired ? new Date(now.getTime() + input.windowMs) : current.windowEnd;

    await tx.rateLimitBucket.upsert({
      where: { keyHash },
      update: { count: nextCount, windowEnd, lastSeenAt: now, scope: input.scope },
      create: { keyHash, scope: input.scope, count: nextCount, windowEnd, lastSeenAt: now }
    });

    const allowed = nextCount <= input.limit;
    return {
      allowed,
      limit: input.limit,
      remaining: Math.max(0, input.limit - nextCount),
      retryAfterSeconds: allowed ? 0 : Math.max(1, Math.ceil((windowEnd.getTime() - now.getTime()) / 1000))
    };
  });
}

export function rateLimitHeaders(result: RateLimitResult) {
  return {
    "X-RateLimit-Limit": String(result.limit),
    "X-RateLimit-Remaining": String(result.remaining),
    ...(result.retryAfterSeconds ? { "Retry-After": String(result.retryAfterSeconds) } : {})
  };
}
