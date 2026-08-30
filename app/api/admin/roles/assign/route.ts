import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/auth";
import { APP_ROLES } from "@/lib/rbac/roles";
import { assignRole, rolesHavePermission } from "@/lib/rbac/server";

const schema = z.object({
  userId: z.string().min(1),
  role: z.enum(APP_ROLES),
  reason: z.string().min(5).max(500)
});

export async function POST(request: Request) {
  const actor = await requireUser();
  if (!rolesHavePermission(actor.roles, "roles.manage")) {
    return NextResponse.json({ error: "Acesso negado." }, { status: 403 });
  }
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Atribuição de papel inválida." }, { status: 400 });
  try {
    const result = await assignRole({
      actorId: actor.id,
      targetUserId: parsed.data.userId,
      role: parsed.data.role,
      reason: parsed.data.reason,
      request
    });
    return NextResponse.json({ ok: true, assignmentId: result.assignment.id, correlationId: result.correlationId });
  } catch (error) {
    const message = error instanceof Error ? error.message : "RBAC_ERROR";
    const status = message === "RBAC_FORBIDDEN" ? 403 : message === "RBAC_ROLE_NOT_FOUND" ? 404 : 400;
    return NextResponse.json({ error: message }, { status });
  }
}
