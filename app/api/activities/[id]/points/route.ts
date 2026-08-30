import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/auth";
import { appendActivityPoints } from "@/lib/activity/service";

const pointSchema = z.object({
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  capturedAt: z.coerce.date(),
  accuracyMeters: z.number().nonnegative().optional().nullable(),
  altitudeMeters: z.number().optional().nullable()
});

export async function POST(request: Request, context: { params: Promise<{ id: string }> }) {
  const user = await requireUser();
  const { id } = await context.params;
  const parsed = z.object({ points: z.array(pointSchema).min(1).max(500) }).safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Pontos GPS inválidos." }, { status: 400 });
  try {
    const points = await appendActivityPoints(user.id, id, parsed.data.points);
    return NextResponse.json({
      ok: true,
      received: points.length,
      accepted: points.filter((point) => point.accepted).length,
      rejected: points.filter((point) => !point.accepted).length
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Atividade não encontrada." }, { status: 404 });
  }
}
