import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getSessionUser, requireUser } from "@/lib/auth";
import { correlationIdFrom, writeAuditLog } from "@/lib/observability";
import {
  APP_ROLES,
  ROLE_PERMISSION_MATRIX,
  type AppPermission,
  type AppRole,
  normalizeLegacyRole
} from "@/lib/rbac/roles";

export async function getUserRoles(userId: string, legacyRole = "USER"): Promise<AppRole[]> {
  const now = new Date();
  const assignments = await prisma.userRole.findMany({
    where: {
      userId,
      OR: [{ expiresAt: null }, { expiresAt: { gt: now } }]
    },
    select: { role: { select: { key: true } } }
  });
  const roles = assignments
    .map((assignment) => assignment.role.key)
    .filter((key): key is AppRole => APP_ROLES.includes(key as AppRole));
  return roles.length ? Array.from(new Set(roles)) : [normalizeLegacyRole(legacyRole)];
}

export function rolesHavePermission(roles: readonly AppRole[], permission: AppPermission) {
  return roles.some((role) => ROLE_PERMISSION_MATRIX[role].includes(permission));
}

export async function userHasPermission(userId: string, legacyRole: string, permission: AppPermission) {
  return rolesHavePermission(await getUserRoles(userId, legacyRole), permission);
}

export async function requirePermission(permission: AppPermission) {
  const user = await requireUser();
  const roles = await getUserRoles(user.id, user.role);
  if (!rolesHavePermission(roles, permission)) redirect("/app?erro=sem-permissao");
  return { ...user, roles };
}

export async function requireAnyRole(allowed: readonly AppRole[]) {
  const user = await requireUser();
  const roles = await getUserRoles(user.id, user.role);
  if (!roles.some((role) => allowed.includes(role))) redirect("/app?erro=sem-permissao");
  return { ...user, roles };
}

export async function currentAuthorizationSnapshot() {
  const user = await getSessionUser();
  if (!user) return null;
  const roles = await getUserRoles(user.id, user.role);
  const permissions = Array.from(
    new Set(roles.flatMap((role) => ROLE_PERMISSION_MATRIX[role]))
  );
  return { user, roles, permissions };
}

export async function assignRole(input: {
  actorId: string;
  targetUserId: string;
  role: AppRole;
  reason: string;
  request?: Request;
}) {
  const actor = await prisma.user.findUnique({ where: { id: input.actorId }, select: { role: true } });
  if (!actor || !(await userHasPermission(input.actorId, actor.role, "roles.manage"))) {
    throw new Error("RBAC_FORBIDDEN");
  }
  const role = await prisma.role.findUnique({ where: { key: input.role } });
  if (!role) throw new Error("RBAC_ROLE_NOT_FOUND");
  const correlationId = correlationIdFrom(input.request);
  const assignment = await prisma.userRole.upsert({
    where: { userId_roleId: { userId: input.targetUserId, roleId: role.id } },
    update: { assignedById: input.actorId, reason: input.reason, expiresAt: null },
    create: {
      userId: input.targetUserId,
      roleId: role.id,
      assignedById: input.actorId,
      reason: input.reason
    }
  });
  await writeAuditLog({
    actorId: input.actorId,
    action: "RBAC_ROLE_ASSIGNED",
    targetType: "User",
    targetId: input.targetUserId,
    correlationId,
    metadata: { role: input.role, reason: input.reason },
    after: { assignmentId: assignment.id, role: input.role },
    userAgent: input.request?.headers.get("user-agent")
  });
  return { assignment, correlationId };
}
