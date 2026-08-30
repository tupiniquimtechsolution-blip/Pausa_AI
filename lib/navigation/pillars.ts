export type PillarId = "progress" | "body" | "mind" | "routine" | "profile";

export type PillarNavigationItem = {
  label: string;
  href: string;
  description: string;
};

export type PillarDefinition = {
  id: PillarId;
  label: string;
  href: string;
  responsibility: string;
  items: readonly PillarNavigationItem[];
};

export const APP_PILLARS: readonly PillarDefinition[] = [
  {
    id: "progress",
    label: "Progresso",
    href: "/app/progresso",
    responsibility: "Resumo e orientação do momento.",
    items: [
      { label: "Visão geral", href: "/app/progresso", description: "Nível, sequência e recomendação atual." },
      { label: "Check-in", href: "/app/checkin", description: "Registre como você está agora." },
      { label: "Tendências", href: "/app/insights", description: "Acompanhe padrões e evolução." }
    ]
  },
  {
    id: "body",
    label: "Corpo",
    href: "/app/corpo",
    responsibility: "Movimento e exercício.",
    items: [
      { label: "Visão geral", href: "/app/corpo", description: "Práticas e circuitos para o corpo." },
      { label: "Yoga", href: "/app/corpo?aba=yoga", description: "Práticas leves, funcionais e restaurativas." },
      { label: "Caminhada", href: "/app/corpo/caminhada", description: "Caminhada inteligente e progresso." },
      { label: "Pausa Activity", href: "/app/corpo/atividade", description: "Atividade própria, GPS opcional e histórico." },
      { label: "Mobilidade", href: "/app/corpo?trilha=alongamentos", description: "Alongamento e mobilidade por região." }
    ]
  },
  {
    id: "mind",
    label: "Mente",
    href: "/app/mente",
    responsibility: "Regulação, foco e recuperação mental.",
    items: [
      { label: "Visão geral", href: "/app/mente", description: "Práticas guiadas para o momento." },
      { label: "Modo Foco", href: "/app/mente/foco", description: "Ciclos de concentração com pausa segura." },
      { label: "Respiração", href: "/app/respiracao", description: "Respiração guiada para regular o ritmo." }
    ]
  },
  {
    id: "routine",
    label: "Rotina",
    href: "/app/rotina",
    responsibility: "Tempo, agenda e automações.",
    items: [
      { label: "Hoje", href: "/app/rotina/hoje", description: "Visão operacional do seu dia." },
      { label: "Agenda", href: "/app/agenda", description: "Compromissos e atividades em um só lugar." },
      { label: "Rotinas", href: "/app/rotina", description: "Alarmes, tarefas e automações." }
    ]
  },
  {
    id: "profile",
    label: "Perfil",
    href: "/app/perfil",
    responsibility: "Identidade, histórico e controle.",
    items: [
      { label: "Conta", href: "/app/perfil", description: "Seus dados e preferências pessoais." },
      { label: "Histórico", href: "/app/perfil/historico", description: "Sessões, check-ins e evolução." },
      { label: "Conquistas", href: "/app/perfil/conquistas", description: "Marcos desbloqueados e próximos objetivos." },
      { label: "Configurações", href: "/app/perfil/configuracoes", description: "Aparência, comunicação e permissões." }
    ]
  }
] as const;

export const LEGACY_ROUTE_ALIASES = {
  "/app": "/app/progresso",
  "/app/movimento": "/app/corpo",
  "/app/movimento/caminhada": "/app/corpo/caminhada",
  "/app/missoes": "/app/mente",
  "/app/historico": "/app/perfil/historico",
  "/app/yoga": "/app/corpo/yoga"
} as const;

export function normalizedPathname(pathname: string) {
  const withoutQuery = pathname.split(/[?#]/, 1)[0] || "/app/progresso";
  const match = Object.entries(LEGACY_ROUTE_ALIASES)
    .sort(([left], [right]) => right.length - left.length)
    .find(([legacy]) =>
      withoutQuery === legacy || (legacy !== "/app" && withoutQuery.startsWith(`${legacy}/`))
    );
  if (!match) return withoutQuery;
  const [legacy, canonical] = match;
  return `${canonical}${withoutQuery.slice(legacy.length)}`;
}

export function pillarForPathname(pathname: string) {
  const canonical = normalizedPathname(pathname);
  return APP_PILLARS.find((pillar) =>
    canonical === pillar.href || canonical.startsWith(`${pillar.href}/`)
  ) || (
    canonical === "/app/checkin" || canonical.startsWith("/app/insights")
      ? APP_PILLARS[0]
      : canonical.startsWith("/app/agenda")
        ? APP_PILLARS[3]
        : canonical.startsWith("/app/respiracao")
          ? APP_PILLARS[2]
          : undefined
  );
}
