import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { leadStatusSchema } from "@/lib/validators";

export async function PATCH(request: Request) {
  await requireAdmin();
  const body = await request.json().catch(() => null);
  const parsed = leadStatusSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Status invalido." }, { status: 400 });

  const data: { status: string; notes?: string; nextContactAt?: Date | null } = {
    status: parsed.data.status
  };
  if (Object.prototype.hasOwnProperty.call(parsed.data, "notes")) data.notes = parsed.data.notes;
  if (Object.prototype.hasOwnProperty.call(parsed.data, "nextContactAt")) {
    data.nextContactAt = parsed.data.nextContactAt ? new Date(parsed.data.nextContactAt) : null;
  }

  await prisma.b2BLead.update({
    where: { id: parsed.data.id },
    data
  });

  return NextResponse.json({ ok: true });
}
