export const APP_ROLES = ["MASTER", "ADMIN", "EDITOR", "REVIEWER", "SUPPORT", "USER"] as const;

export type AppRole = (typeof APP_ROLES)[number];

export const PERMISSIONS = [
  "app.access",
  "own_data.manage",
  "admin.access",
  "roles.manage",
  "feature_flags.manage",
  "audit.read",
  "content.create",
  "content.edit",
  "content.review",
  "content.publish",
  "support.access"
] as const;

export type AppPermission = (typeof PERMISSIONS)[number];

export const ROLE_DEFINITIONS: Record<AppRole, { name: string; description: string }> = {
  MASTER: {
    name: "Master",
    description: "Governança total, papéis, flags, auditoria e controles reservados."
  },
  ADMIN: {
    name: "Administrador",
    description: "Operação administrativa delegada sem poderes reservados ao MASTER."
  },
  EDITOR: {
    name: "Editor",
    description: "Criação e edição de conteúdo, mídia e campanhas."
  },
  REVIEWER: {
    name: "Revisor",
    description: "Revisão técnica, editorial, linguística, de segurança e de direitos."
  },
  SUPPORT: {
    name: "Suporte",
    description: "Atendimento e diagnóstico delimitado com dados minimizados."
  },
  USER: {
    name: "Usuário",
    description: "Uso pessoal e gestão dos próprios dados."
  }
};

export const ROLE_PERMISSION_MATRIX: Record<AppRole, readonly AppPermission[]> = {
  MASTER: PERMISSIONS,
  ADMIN: [
    "app.access",
    "own_data.manage",
    "admin.access",
    "feature_flags.manage",
    "audit.read",
    "content.create",
    "content.edit",
    "content.review",
    "support.access"
  ],
  EDITOR: ["app.access", "own_data.manage", "content.create", "content.edit"],
  REVIEWER: ["app.access", "own_data.manage", "content.review"],
  SUPPORT: ["app.access", "own_data.manage", "support.access"],
  USER: ["app.access", "own_data.manage"]
};

export function isAppRole(value: string): value is AppRole {
  return APP_ROLES.includes(value as AppRole);
}

export function normalizeLegacyRole(value: string): AppRole {
  return isAppRole(value) ? value : "USER";
}

export function roleHasPermission(role: AppRole, permission: AppPermission) {
  return ROLE_PERMISSION_MATRIX[role].includes(permission);
}
