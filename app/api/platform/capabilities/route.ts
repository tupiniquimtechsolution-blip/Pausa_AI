import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import {
  PLATFORM_TYPES,
  capabilityMatrix,
  detectPlatform,
  type PlatformType
} from "@/lib/platform/capabilities";

export async function GET(request: Request) {
  await requireUser();
  const url = new URL(request.url);
  const requested = url.searchParams.get("platform");
  const platform: PlatformType = requested && PLATFORM_TYPES.includes(requested as PlatformType)
    ? requested as PlatformType
    : detectPlatform({ userAgent: request.headers.get("user-agent") || "" });
  return NextResponse.json({ platform, capabilities: capabilityMatrix(platform) });
}
