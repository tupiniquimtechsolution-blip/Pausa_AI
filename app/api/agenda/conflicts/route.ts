import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { parseDateWindow } from "@/lib/agenda/date-utils";
import { getAgendaSnapshot } from "@/lib/agenda/agenda-service";
import { detectAgendaConflicts } from "@/lib/agenda/conflict-detection-service";

export async function GET(request: Request) {
  const user = await requireUser();
  const { searchParams } = new URL(request.url);
  const { from, to } = parseDateWindow(searchParams);
  const snapshot = await getAgendaSnapshot(user.id, from, to);
  const conflicts = detectAgendaConflicts(snapshot.items);
  return NextResponse.json({ ok: true, conflicts });
}
