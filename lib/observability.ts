import { createHash, randomUUID } from "node:crypto";
import { prisma } from "@/lib/prisma";

type LogLevel = "debug" | "info" | "warn" | "error";

const blockedKey = /(password|secret|token|authorization|cookie|journal|health|routepoints|latitude|longitude)/i;

function sanitizeValue(value: unknown, depth = 0): unknown {
  if (depth > 3) return "[MAX_DEPTH]";
  if (Array.isArray(value)) return value.slice(0, 20).map((item) => sanitizeValue(item, depth + 1));
  if (!value || typeof value !== "object") {
    if (typeof value === "string" && value.length > 500) return `${value.slice(0, 500)}…`;
    return value;
  }
  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>).map(([key, item]) => [
      key,
      blockedKey.test(key) ? "[REDACTED]" : sanitizeValue(item, depth + 1)
    ])
  );
}

export function correlationIdFrom(request?: Request) {
  const provided = request?.headers.get("x-correlation-id")?.trim();
  return provided && /^[a-zA-Z0-9._:-]{8,128}$/.test(provided) ? provided : randomUUID();
}

export function hashAuditValue(value: unknown) {
  return createHash("sha256").update(JSON.stringify(sanitizeValue(value))).digest("hex");
}

export function structuredLog(
  level: LogLevel,
  module: string,
  message: string,
  context: Record<string, unknown> = {}
) {
  const entry = {
    timestamp: new Date().toISOString(),
    level,
    module,
    message,
    environment: process.env.APP_ENV || process.env.NODE_ENV || "local",
    ...sanitizeValue(context) as Record<string, unknown>
  };
  const output = JSON.stringify(entry);
  if (level === "error") console.error(output);
  else if (level === "warn") console.warn(output);
  else if (level === "debug") console.debug(output);
  else console.info(output);
}

export async function writeAuditLog(input: {
  actorId?: string | null;
  action: string;
  targetType: string;
  targetId?: string | null;
  correlationId: string;
  metadata?: Record<string, unknown>;
  before?: unknown;
  after?: unknown;
  userAgent?: string | null;
}) {
  try {
    return await prisma.auditLog.create({
      data: {
        actorId: input.actorId || null,
        action: input.action,
        targetType: input.targetType,
        targetId: input.targetId || null,
        correlationId: input.correlationId,
        environment: process.env.APP_ENV || process.env.NODE_ENV || "local",
        metadataJson: JSON.stringify(sanitizeValue(input.metadata || {})),
        beforeHash: input.before === undefined ? null : hashAuditValue(input.before),
        afterHash: input.after === undefined ? null : hashAuditValue(input.after),
        userAgent: input.userAgent?.slice(0, 500) || null
      }
    });
  } catch (error) {
    structuredLog("error", "audit", "audit_log_write_failed", {
      correlationId: input.correlationId,
      action: input.action,
      targetType: input.targetType,
      error: error instanceof Error ? error.message : "unknown"
    });
    return null;
  }
}
