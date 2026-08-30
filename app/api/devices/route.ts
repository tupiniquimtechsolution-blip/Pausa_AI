import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  manufacturer: z.string().min(1).max(100),
  model: z.string().min(1).max(100),
  deviceType: z.string().min(1).max(80),
  appName: z.string().max(100).optional(),
  connectionType: z.enum(["PHONE_SENSOR", "BLUETOOTH", "FILE_IMPORT", "MANUFACTURER_ADAPTER"]),
  capabilities: z.array(z.string().max(80)).max(30).default([])
});

export async function GET() {
  const user = await requireUser();
  const devices = await prisma.connectedDevice.findMany({ where: { userId: user.id }, orderBy: { updatedAt: "desc" } });
  return NextResponse.json({
    ok: true,
    devices,
    notice: "Capacidades declaradas não significam que sensores inacessíveis estejam disponíveis."
  });
}

export async function POST(request: Request) {
  const user = await requireUser();
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Dispositivo inválido." }, { status: 400 });
  const device = await prisma.connectedDevice.create({
    data: {
      userId: user.id,
      ...parsed.data,
      capabilitiesJson: JSON.stringify(parsed.data.capabilities),
      status: "DECLARED"
    }
  });
  return NextResponse.json({
    ok: true,
    device,
    connected: false,
    reason: "O dispositivo foi declarado; conexão só será marcada após teste real."
  }, { status: 201 });
}
