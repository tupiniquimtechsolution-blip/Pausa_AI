import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { routineTaskSchema } from "@/lib/validators";

function parseDueDate(value?: string) {
  if (!value) return null;
  const date = new Date(`${value}T12:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function parseDateTime(value?: string, dueDate?: string, dueTime?: string) {
  if (value) {
    const date = new Date(value);
    if (!Number.isNaN(date.getTime())) return date;
  }
  if (dueDate && dueTime) {
    const date = new Date(`${dueDate}T${dueTime}:00`);
    if (!Number.isNaN(date.getTime())) return date;
  }
  return null;
}

export async function POST(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = routineTaskSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Preencha os dados da tarefa." }, { status: 400 });
  const { id, completed, dueDate, dueAt, ...data } = parsed.data;
  const payload = {
    ...data,
    dueDate: parseDueDate(dueDate),
    dueAt: parseDateTime(dueAt, dueDate, data.dueTime),
    description: data.description || null,
    notes: data.notes || null,
    calendarEventId: data.calendarEventId || null,
    notificationId: data.notificationId || null,
    completedAt: typeof completed === "boolean" ? (completed ? new Date() : null) : undefined
  };

  if (id) {
    const result = await prisma.routineTask.updateMany({ where: { id, userId: user.id }, data: payload });
    if (result.count === 0) return NextResponse.json({ error: "Tarefa nao encontrada." }, { status: 404 });
    return NextResponse.json({ ok: true });
  }

  const task = await prisma.routineTask.create({ data: { userId: user.id, ...payload } });
  return NextResponse.json({ ok: true, task });
}

export async function PATCH(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const id = typeof body?.id === "string" ? body.id : "";
  if (!id) return NextResponse.json({ error: "Tarefa nao encontrada." }, { status: 400 });
  const completed = Boolean(body.completed);
  const status = typeof body.status === "string" ? body.status : completed ? "COMPLETED" : "PENDING";
  const result = await prisma.routineTask.updateMany({
    where: { id, userId: user.id },
    data: { completedAt: completed ? new Date() : null, status }
  });
  if (result.count === 0) return NextResponse.json({ error: "Tarefa nao encontrada." }, { status: 404 });
  return NextResponse.json({ ok: true });
}

export async function DELETE(request: Request) {
  const user = await requireUser();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Tarefa nao encontrada." }, { status: 400 });
  const result = await prisma.routineTask.deleteMany({ where: { id, userId: user.id } });
  if (result.count === 0) return NextResponse.json({ error: "Tarefa nao encontrada." }, { status: 404 });
  return NextResponse.json({ ok: true });
}
