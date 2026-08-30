import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { parseDateTime } from "@/lib/agenda/date-utils";
import { agendaReminderSchema } from "@/lib/agenda/schemas";

function reminderPayload(data: ReturnType<typeof agendaReminderSchema.parse>) {
  return {
    title: data.title,
    message: data.message || null,
    dateTime: parseDateTime(data.dateTime),
    recurrenceRule: data.recurrenceRule || null,
    priority: data.priority,
    notificationId: data.notificationId || null,
    linkedEventId: data.linkedEventId || null,
    linkedTaskId: data.linkedTaskId || null,
    status: data.status,
    escalationLevel: data.escalationLevel
  };
}

export async function GET() {
  const user = await requireUser();
  const reminders = await prisma.agendaReminder.findMany({
    where: { userId: user.id, status: { not: "CANCELLED" } },
    orderBy: { dateTime: "asc" }
  });
  return NextResponse.json({ ok: true, reminders });
}

export async function POST(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = agendaReminderSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Preencha os dados do lembrete." }, { status: 400 });
  const reminder = await prisma.agendaReminder.create({ data: { userId: user.id, ...reminderPayload(parsed.data) } });
  await prisma.syncQueue.create({ data: { userId: user.id, action: "CREATE", entityType: "AgendaReminder", entityId: reminder.id, provider: "LOCAL" } });
  return NextResponse.json({ ok: true, reminder });
}

export async function PATCH(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = agendaReminderSchema.safeParse(body);
  if (!parsed.success || !parsed.data.id) return NextResponse.json({ error: "Lembrete não encontrado." }, { status: 400 });
  const result = await prisma.agendaReminder.updateMany({ where: { id: parsed.data.id, userId: user.id }, data: reminderPayload(parsed.data) });
  if (result.count === 0) return NextResponse.json({ error: "Lembrete não encontrado." }, { status: 404 });
  await prisma.syncQueue.create({ data: { userId: user.id, action: "UPDATE", entityType: "AgendaReminder", entityId: parsed.data.id, provider: "LOCAL" } });
  return NextResponse.json({ ok: true });
}

export async function DELETE(request: Request) {
  const user = await requireUser();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Lembrete não encontrado." }, { status: 400 });
  const result = await prisma.agendaReminder.updateMany({ where: { id, userId: user.id }, data: { status: "CANCELLED" } });
  if (result.count === 0) return NextResponse.json({ error: "Lembrete não encontrado." }, { status: 404 });
  await prisma.syncQueue.create({ data: { userId: user.id, action: "DELETE", entityType: "AgendaReminder", entityId: id, provider: "LOCAL" } });
  return NextResponse.json({ ok: true });
}
