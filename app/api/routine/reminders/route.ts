import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { routineReminderSchema } from "@/lib/validators";

function parseDate(value?: string) {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function reminderPayload(data: ReturnType<typeof routineReminderSchema.parse>) {
  return {
    ...data,
    scheduledAt: parseDate(data.scheduledAt),
    lastSnoozedAt: parseDate(data.lastSnoozedAt),
    snoozeMinutesOptions: JSON.stringify(data.snoozeMinutesOptions),
    nativeNotificationId: data.nativeNotificationId || null,
    description: data.description || null,
    note: data.note || null
  };
}

export async function POST(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = routineReminderSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Preencha os dados do lembrete." }, { status: 400 });
  const { id, ...data } = parsed.data;
  const payload = reminderPayload(data);

  if (id) {
    const result = await prisma.routineReminder.updateMany({ where: { id, userId: user.id }, data: payload });
    if (result.count === 0) return NextResponse.json({ error: "Lembrete nao encontrado." }, { status: 404 });
    return NextResponse.json({ ok: true });
  }

  const reminder = await prisma.routineReminder.create({ data: { userId: user.id, ...payload } });
  return NextResponse.json({ ok: true, reminder });
}

export async function PATCH(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const id = typeof body?.id === "string" ? body.id : "";
  if (!id) return NextResponse.json({ error: "Lembrete nao encontrado." }, { status: 400 });
  const data: { enabled?: boolean; status?: string; nativeNotificationId?: string | null; lastSnoozedAt?: Date | null } = {};
  if (typeof body.enabled !== "undefined") data.enabled = Boolean(body.enabled);
  if (typeof body.status === "string") data.status = body.status;
  if (typeof body.nativeNotificationId === "string") data.nativeNotificationId = body.nativeNotificationId;
  if (typeof body.lastSnoozedAt === "string") data.lastSnoozedAt = parseDate(body.lastSnoozedAt);
  const result = await prisma.routineReminder.updateMany({ where: { id, userId: user.id }, data });
  if (result.count === 0) return NextResponse.json({ error: "Lembrete nao encontrado." }, { status: 404 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(request: Request) {
  const user = await requireUser();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Lembrete nao encontrado." }, { status: 400 });
  const result = await prisma.routineReminder.deleteMany({ where: { id, userId: user.id } });
  if (result.count === 0) return NextResponse.json({ error: "Lembrete nao encontrado." }, { status: 404 });
  return NextResponse.json({ ok: true });
}
