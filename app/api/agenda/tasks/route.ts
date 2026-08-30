import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { parseOptionalDateTime } from "@/lib/agenda/date-utils";
import { agendaTaskSchema } from "@/lib/agenda/schemas";

function taskPayload(data: ReturnType<typeof agendaTaskSchema.parse>) {
  return {
    title: data.title,
    description: data.description || null,
    dueDate: parseOptionalDateTime(data.dueDate),
    estimatedDuration: data.estimatedDuration || null,
    category: data.category,
    priority: data.priority,
    energyLevel: data.energyLevel,
    status: data.status,
    scheduledEventId: data.scheduledEventId || null,
    reminders: JSON.stringify(data.reminders),
    tags: data.tags || null
  };
}

export async function GET() {
  const user = await requireUser();
  const tasks = await prisma.agendaTask.findMany({
    where: { userId: user.id },
    orderBy: [{ status: "asc" }, { dueDate: "asc" }, { createdAt: "desc" }]
  });
  return NextResponse.json({ ok: true, tasks });
}

export async function POST(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = agendaTaskSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Preencha os dados da tarefa." }, { status: 400 });
  const task = await prisma.agendaTask.create({ data: { userId: user.id, ...taskPayload(parsed.data) } });
  await prisma.syncQueue.create({ data: { userId: user.id, action: "CREATE", entityType: "AgendaTask", entityId: task.id, provider: "LOCAL" } });
  return NextResponse.json({ ok: true, task });
}

export async function PATCH(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = agendaTaskSchema.safeParse(body);
  if (!parsed.success || !parsed.data.id) return NextResponse.json({ error: "Tarefa não encontrada." }, { status: 400 });
  const result = await prisma.agendaTask.updateMany({ where: { id: parsed.data.id, userId: user.id }, data: taskPayload(parsed.data) });
  if (result.count === 0) return NextResponse.json({ error: "Tarefa não encontrada." }, { status: 404 });
  await prisma.syncQueue.create({ data: { userId: user.id, action: "UPDATE", entityType: "AgendaTask", entityId: parsed.data.id, provider: "LOCAL" } });
  return NextResponse.json({ ok: true });
}

export async function DELETE(request: Request) {
  const user = await requireUser();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Tarefa não encontrada." }, { status: 400 });
  const result = await prisma.agendaTask.updateMany({ where: { id, userId: user.id }, data: { status: "CANCELLED" } });
  if (result.count === 0) return NextResponse.json({ error: "Tarefa não encontrada." }, { status: 404 });
  await prisma.syncQueue.create({ data: { userId: user.id, action: "DELETE", entityType: "AgendaTask", entityId: id, provider: "LOCAL" } });
  return NextResponse.json({ ok: true });
}
