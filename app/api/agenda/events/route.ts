import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { addMinutes, parseDateTime, parseDateWindow } from "@/lib/agenda/date-utils";
import { agendaEventSchema } from "@/lib/agenda/schemas";
import {
  ScheduleConflictError,
  ScheduleValidationError,
  cancelAgendaEventWithReservation,
  saveAgendaEventWithReservation
} from "@/lib/scheduling/reservation-service";

function eventPayload(data: ReturnType<typeof agendaEventSchema.parse>) {
  const startDateTime = parseDateTime(data.startDateTime);
  const endDateTime = data.endDateTime ? parseDateTime(data.endDateTime, addMinutes(startDateTime, 30)) : addMinutes(startDateTime, 30);
  return {
    title: data.title,
    description: data.description || null,
    startDateTime,
    endDateTime: endDateTime <= startDateTime ? addMinutes(startDateTime, 30) : endDateTime,
    allDay: data.allDay,
    timezone: data.timezone,
    category: data.category,
    priority: data.priority,
    energyLevel: data.energyLevel,
    source: data.source,
    externalCalendarId: data.externalCalendarId || null,
    externalEventId: data.externalEventId || null,
    recurrenceRule: data.recurrenceRule || null,
    reminderMinutes: JSON.stringify(data.reminderMinutes),
    status: data.status
  };
}

export async function GET(request: Request) {
  const user = await requireUser();
  const { searchParams } = new URL(request.url);
  const { from, to } = parseDateWindow(searchParams);
  const events = await prisma.agendaEvent.findMany({
    where: { userId: user.id, deletedAt: null, startDateTime: { lte: to }, endDateTime: { gte: from } },
    orderBy: { startDateTime: "asc" }
  });
  return NextResponse.json({ ok: true, events });
}

export async function POST(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = agendaEventSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Preencha os dados do evento." }, { status: 400 });
  try {
    const event = await saveAgendaEventWithReservation({
      userId: user.id,
      data: eventPayload(parsed.data)
    });
    return NextResponse.json({ ok: true, event });
  } catch (error) {
    return scheduleErrorResponse(error);
  }
}

export async function PATCH(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = agendaEventSchema.safeParse(body);
  if (!parsed.success || !parsed.data.id) return NextResponse.json({ error: "Evento não encontrado." }, { status: 400 });
  try {
    const event = await saveAgendaEventWithReservation({
      userId: user.id,
      eventId: parsed.data.id,
      data: eventPayload(parsed.data)
    });
    return NextResponse.json({ ok: true, event });
  } catch (error) {
    if (error instanceof Error && error.message.includes("Record to update not found")) {
      return NextResponse.json({ error: "Evento não encontrado." }, { status: 404 });
    }
    return scheduleErrorResponse(error);
  }
}

export async function DELETE(request: Request) {
  const user = await requireUser();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Evento não encontrado." }, { status: 400 });
  const cancelled = await cancelAgendaEventWithReservation(user.id, id);
  if (!cancelled) return NextResponse.json({ error: "Evento não encontrado." }, { status: 404 });
  return NextResponse.json({ ok: true });
}

function scheduleErrorResponse(error: unknown) {
  if (error instanceof ScheduleConflictError) {
    return NextResponse.json({
      error: error.message,
      code: "SCHEDULE_CONFLICT",
      conflict: error.conflict
    }, { status: 409 });
  }
  if (error instanceof ScheduleValidationError) {
    return NextResponse.json({ error: error.message, code: "INVALID_INTERVAL" }, { status: 400 });
  }
  throw error;
}
