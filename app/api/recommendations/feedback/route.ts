import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  sourceType: z.enum(["EXERCISE_INSTRUCTION", "CIRCUIT", "PAUSA_SESSION"]),
  sourceId: z.string().min(1).max(160),
  completed: z.boolean().default(false),
  abandoned: z.boolean().default(false),
  responseScore: z.number().int().min(1).max(5).optional(),
  perceivedEffort: z.number().int().min(1).max(5).optional(),
  notes: z.string().max(500).optional()
}).refine((value) => !(value.completed && value.abandoned), "A sessão não pode ser concluída e abandonada ao mesmo tempo.");

export async function POST(request: Request) {
  const user = await requireUser();
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Feedback inválido." }, { status: 400 });
  const feedback = await prisma.sessionFeedback.create({ data: { userId: user.id, ...parsed.data } });
  return NextResponse.json({ ok: true, feedback }, { status: 201 });
}
