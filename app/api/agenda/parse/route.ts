import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { agendaParseSchema } from "@/lib/agenda/schemas";
import { parseScheduleCommand } from "@/lib/agenda/schedule-ai-service";

export async function POST(request: Request) {
  await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = agendaParseSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Digite um comando para a agenda." }, { status: 400 });
  const result = parseScheduleCommand({
    text: parsed.data.text,
    now: parsed.data.now ? new Date(parsed.data.now) : undefined,
    timezone: parsed.data.timezone
  });
  return NextResponse.json({ ok: true, result });
}
