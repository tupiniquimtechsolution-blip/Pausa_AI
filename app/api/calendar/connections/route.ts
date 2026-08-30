import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { calendarProviderCapabilities } from "@/lib/agenda/calendar-providers";
import { calendarConnectionSchema } from "@/lib/agenda/schemas";

export async function GET() {
  const user = await requireUser();
  const connections = await prisma.calendarConnection.findMany({
    where: { userId: user.id },
    orderBy: { provider: "asc" }
  });
  return NextResponse.json({ ok: true, connections, capabilities: calendarProviderCapabilities });
}

export async function POST(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = calendarConnectionSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Configuração de calendário inválida." }, { status: 400 });
  const connection = await prisma.calendarConnection.create({
    data: {
      userId: user.id,
      provider: parsed.data.provider,
      externalAccountId: parsed.data.externalAccountId || null,
      selectedCalendarIds: JSON.stringify(parsed.data.selectedCalendarIds),
      syncEnabled: parsed.data.provider === "LOCAL" ? parsed.data.syncEnabled : false
    }
  });
  return NextResponse.json({ ok: true, connection });
}

export async function PATCH(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const id = typeof body?.id === "string" ? body.id : "";
  const parsed = calendarConnectionSchema.safeParse(body);
  if (!id || !parsed.success) return NextResponse.json({ error: "Conexão não encontrada." }, { status: 400 });
  const result = await prisma.calendarConnection.updateMany({
    where: { id, userId: user.id },
    data: {
      provider: parsed.data.provider,
      externalAccountId: parsed.data.externalAccountId || null,
      selectedCalendarIds: JSON.stringify(parsed.data.selectedCalendarIds),
      syncEnabled: parsed.data.provider === "LOCAL" ? parsed.data.syncEnabled : false
    }
  });
  if (result.count === 0) return NextResponse.json({ error: "Conexão não encontrada." }, { status: 404 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(request: Request) {
  const user = await requireUser();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Conexão não encontrada." }, { status: 400 });
  const result = await prisma.calendarConnection.deleteMany({ where: { id, userId: user.id } });
  if (result.count === 0) return NextResponse.json({ error: "Conexão não encontrada." }, { status: 404 });
  return NextResponse.json({ ok: true });
}
