import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { endOfLocalDay, parseOptionalDateTime, startOfLocalDay } from "@/lib/agenda/date-utils";
import { freeTimeQuerySchema } from "@/lib/agenda/schemas";
import { getAgendaSnapshot } from "@/lib/agenda/agenda-service";
import { findFreeTimeSlots } from "@/lib/agenda/free-time-service";

export async function GET(request: Request) {
  const user = await requireUser();
  const { searchParams } = new URL(request.url);
  const parsed = freeTimeQuerySchema.safeParse(Object.fromEntries(searchParams.entries()));
  if (!parsed.success) return NextResponse.json({ error: "Consulta de horário livre inválida." }, { status: 400 });
  const date = parseOptionalDateTime(parsed.data.date) || new Date();
  const snapshot = await getAgendaSnapshot(user.id, startOfLocalDay(date), endOfLocalDay(date));
  const slots = findFreeTimeSlots({
    items: snapshot.items,
    date,
    durationMinutes: parsed.data.durationMinutes,
    fromHour: parsed.data.fromHour,
    toHour: parsed.data.toHour
  });
  return NextResponse.json({ ok: true, slots });
}
