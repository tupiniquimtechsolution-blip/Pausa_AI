import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { randomUUID } from "node:crypto";
import { statSync } from "node:fs";
import { join } from "node:path";
import { catalogVisualAssetMappings } from "../lib/catalog-visual-assets";
import { catalogReconciliationEntries } from "../lib/catalog-reconciliation";
import { exerciseSeeds, partnerSeeds } from "../lib/exercise-data";
import { exerciseInstructionSeeds } from "../lib/exercise-instruction-data";
import { buildInstructionalVideoPlan, slugifyVideo, type InstructionalVideoPlan } from "../lib/instructional-video-planning";
import { yogaPracticeSeeds, yogaSequenceSeeds } from "../lib/yoga-data";
import { categoryGroupForInstruction } from "../lib/catalog-policy";
import { FEATURE_FLAG_DEFINITIONS, FEATURE_FLAG_KEYS } from "../lib/feature-flags/registry";
import {
  APP_ROLES,
  PERMISSIONS,
  ROLE_DEFINITIONS,
  ROLE_PERMISSION_MATRIX,
  normalizeLegacyRole
} from "../lib/rbac/roles";
import { seedW4ContentLibrary } from "../scripts/seed-w4-content-library";
import { seedW7MediaGovernance } from "../scripts/seed-w7-media-governance";

const prisma = new PrismaClient();

async function seedFoundationRegistry() {
  for (const key of APP_ROLES) {
    const definition = ROLE_DEFINITIONS[key];
    await prisma.role.upsert({
      where: { key },
      update: { name: definition.name, description: definition.description, isSystem: true },
      create: { key, name: definition.name, description: definition.description, isSystem: true }
    });
  }

  for (const key of PERMISSIONS) {
    await prisma.permission.upsert({
      where: { key },
      update: { name: key, description: `Permissão controlada: ${key}` },
      create: { key, name: key, description: `Permissão controlada: ${key}` }
    });
  }

  const [roles, permissions] = await Promise.all([
    prisma.role.findMany({ where: { key: { in: [...APP_ROLES] } } }),
    prisma.permission.findMany({ where: { key: { in: [...PERMISSIONS] } } })
  ]);
  const rolesByKey = new Map(roles.map((role) => [role.key, role]));
  const permissionsByKey = new Map(permissions.map((permission) => [permission.key, permission]));
  for (const roleKey of APP_ROLES) {
    const role = rolesByKey.get(roleKey);
    if (!role) continue;
    for (const permissionKey of ROLE_PERMISSION_MATRIX[roleKey]) {
      const permission = permissionsByKey.get(permissionKey);
      if (!permission) continue;
      await prisma.rolePermission.upsert({
        where: { roleId_permissionId: { roleId: role.id, permissionId: permission.id } },
        update: { granted: true },
        create: { roleId: role.id, permissionId: permission.id, granted: true }
      });
    }
  }

  for (const key of FEATURE_FLAG_KEYS) {
    const definition = FEATURE_FLAG_DEFINITIONS[key];
    await prisma.featureFlag.upsert({
      where: { key },
      update: {
        description: definition.description,
        owner: definition.owner,
        defaultValue: definition.defaultValue
      },
      create: {
        key,
        description: definition.description,
        owner: definition.owner,
        defaultValue: definition.defaultValue
      }
    });
  }
}

async function seedPersistedUserRoles() {
  const roles = await prisma.role.findMany({ where: { key: { in: [...APP_ROLES] } } });
  const rolesByKey = new Map(roles.map((role) => [role.key, role]));
  const users = await prisma.user.findMany({ select: { id: true, role: true } });
  for (const user of users) {
    const roleKey = normalizeLegacyRole(user.role);
    const role = rolesByKey.get(roleKey);
    if (!role) continue;
    await prisma.userRole.upsert({
      where: { userId_roleId: { userId: user.id, roleId: role.id } },
      update: { reason: "LEGACY_ROLE_MIGRATION" },
      create: { userId: user.id, roleId: role.id, reason: "LEGACY_ROLE_MIGRATION" }
    });
  }
}

async function ensureSeededRole(userId: string, roleKey: (typeof APP_ROLES)[number], reason: string) {
  const role = await prisma.role.findUniqueOrThrow({ where: { key: roleKey } });
  await prisma.userRole.upsert({
    where: { userId_roleId: { userId, roleId: role.id } },
    update: { reason, expiresAt: null },
    create: { userId, roleId: role.id, reason }
  });
}

const safetyMove =
  "Faça no seu ritmo. Pare se sentir dor, tontura ou desconforto e adapte os movimentos ao seu corpo.";

function publicFileExists(url: string) {
  if (!url.startsWith("/")) return false;
  if (!url.toLowerCase().endsWith(".mp4")) return false;
  try {
    return statSync(join(process.cwd(), "public", url.replace(/^\//, ""))).isFile();
  } catch {
    return false;
  }
}

function withResolvedVideoStatus(plan: InstructionalVideoPlan): InstructionalVideoPlan {
  return {
    ...plan,
    status: publicFileExists(plan.videoUrl) ? "READY" : "PLANNED"
  };
}

async function seedInstructionalVideos() {
  const [physicalInstructions, missionRecords, yogaPractices, yogaSequences] = await Promise.all([
    prisma.exerciseInstruction.findMany({
      where: { categoryGroup: "PHYSICAL" },
      orderBy: [{ category: "asc" }, { title: "asc" }]
    }),
    prisma.mission.findMany({ orderBy: [{ unlockLevel: "asc" }, { title: "asc" }] }),
    prisma.yogaPractice.findMany({ orderBy: [{ level: "asc" }, { yogaType: "asc" }, { title: "asc" }] }),
    prisma.yogaSequence.findMany({ orderBy: [{ level: "asc" }, { title: "asc" }] })
  ]);

  const plans = [
    ...physicalInstructions.map((instruction) =>
      buildInstructionalVideoPlan({
        targetType: "EXERCISE_INSTRUCTION",
        targetSlug: instruction.slug,
        title: instruction.title,
        category: instruction.category,
        shortDescription: instruction.shortDescription,
        objective: instruction.objective,
        durationSeconds: instruction.durationSeconds,
        intensity: instruction.intensity,
        equipment: instruction.equipment,
        instructionType: instruction.instructionType
      })
    ),
    ...missionRecords.map((mission) =>
      buildInstructionalVideoPlan({
        targetType: "MISSION",
        targetSlug: slugifyVideo(mission.title),
        title: mission.title,
        category: mission.category,
        shortDescription: mission.description,
        objective: mission.description,
        durationMinutes: mission.durationMinutes,
        intensity: mission.intensity,
        equipment: mission.activityType,
        instructionType: mission.activityType
      })
    ),
    ...yogaPractices.map((practice) =>
      buildInstructionalVideoPlan({
        targetType: "YOGA_PRACTICE",
        targetSlug: practice.slug,
        title: practice.title,
        category: "YOGA",
        shortDescription: practice.shortDescription,
        objective: practice.objective,
        durationSeconds: practice.durationSeconds,
        intensity: practice.intensity,
        equipment: practice.context === "WORK" ? "Cadeira ou apoio opcional" : "Tapete ou apoio opcional",
        instructionType: practice.yogaType
      })
    ),
    ...yogaSequences.map((sequence) =>
      buildInstructionalVideoPlan({
        targetType: "YOGA_SEQUENCE",
        targetSlug: sequence.slug,
        title: sequence.title,
        category: "YOGA",
        shortDescription: sequence.description,
        objective: sequence.description,
        durationSeconds: sequence.durationSeconds,
        intensity: sequence.level >= 4 ? "LIGHT" : "VERY_LIGHT",
        equipment: sequence.context === "WORK" ? "Cadeira ou apoio opcional" : "Tapete ou apoio opcional",
        instructionType: "SEQUENCE"
      })
    )
  ].map(withResolvedVideoStatus);

  await prisma.instructionalVideo.deleteMany({
    where: { slug: { notIn: plans.map((plan) => plan.slug) } }
  });

  for (const plan of plans) {
    await prisma.instructionalVideo.upsert({
      where: { slug: plan.slug },
      update: {
        ...plan,
        tags: JSON.stringify(plan.tags),
        position: JSON.stringify(plan.position),
        approvalChecklist: JSON.stringify(plan.approvalChecklist)
      },
      create: {
        ...plan,
        tags: JSON.stringify(plan.tags),
        position: JSON.stringify(plan.position),
        approvalChecklist: JSON.stringify(plan.approvalChecklist)
      }
    });
  }

  return plans.length;
}

async function seedCatalogVisualAssets() {
  const identityKeys = catalogVisualAssetMappings.map((item) => item.identityKey);

  await prisma.catalogVisualAsset.deleteMany({
    where: { identityKey: { notIn: identityKeys } }
  });

  for (const item of catalogVisualAssetMappings) {
    await prisma.catalogVisualAsset.upsert({
      where: { identityKey: item.identityKey },
      update: {
        catalogSection: item.catalogSection,
        catalogArea: item.catalogArea,
        catalogIdOrSlug: item.catalogIdOrSlug,
        catalogTitle: item.catalogTitle,
        matchType: item.matchType,
        matchedReferenceMovement: item.matchedReferenceMovement,
        imageAction: item.imageAction,
        visualAssetMode: item.visualAssetMode,
        pullFromReferenceMovement: item.pullFromReferenceMovement,
        reusedFromReferenceId: item.reusedFromReferenceId,
        reusedFromReferenceIds: JSON.stringify(item.reusedFromReferenceIds),
        reusedFromMovementId: item.reusedFromMovementId,
        reusedFromMovementIds: JSON.stringify(item.reusedFromMovementIds),
        reusedFromAssetPattern: item.reusedFromAssetPattern,
        reusedFromAssetPatterns: JSON.stringify(item.reusedFromAssetPatterns),
        canonicalPoseId: item.canonicalPoseId,
        imageSourcePath: item.imageSourcePath,
        resolvedImagePaths: JSON.stringify(item.resolvedImagePaths),
        physicalFilesFound: JSON.stringify(item.physicalFilesFound),
        physicalFilesMissing: JSON.stringify(item.physicalFilesMissing),
        assetStatus: item.assetStatus,
        videoStatus: item.videoStatus,
        needsReview: item.needsReview,
        notes: item.notes
      },
      create: {
        identityKey: item.identityKey,
        catalogSection: item.catalogSection,
        catalogArea: item.catalogArea,
        catalogIdOrSlug: item.catalogIdOrSlug,
        catalogTitle: item.catalogTitle,
        matchType: item.matchType,
        matchedReferenceMovement: item.matchedReferenceMovement,
        imageAction: item.imageAction,
        visualAssetMode: item.visualAssetMode,
        pullFromReferenceMovement: item.pullFromReferenceMovement,
        reusedFromReferenceId: item.reusedFromReferenceId,
        reusedFromReferenceIds: JSON.stringify(item.reusedFromReferenceIds),
        reusedFromMovementId: item.reusedFromMovementId,
        reusedFromMovementIds: JSON.stringify(item.reusedFromMovementIds),
        reusedFromAssetPattern: item.reusedFromAssetPattern,
        reusedFromAssetPatterns: JSON.stringify(item.reusedFromAssetPatterns),
        canonicalPoseId: item.canonicalPoseId,
        imageSourcePath: item.imageSourcePath,
        resolvedImagePaths: JSON.stringify(item.resolvedImagePaths),
        physicalFilesFound: JSON.stringify(item.physicalFilesFound),
        physicalFilesMissing: JSON.stringify(item.physicalFilesMissing),
        assetStatus: item.assetStatus,
        videoStatus: item.videoStatus,
        needsReview: item.needsReview,
        notes: item.notes
      }
    });
  }

  return catalogVisualAssetMappings.length;
}

async function seedCatalogReconciliation() {
  const identityKeys = catalogReconciliationEntries.map((item) => item.identityKey);

  await prisma.catalogReconciliation.deleteMany({
    where: { identityKey: { notIn: identityKeys } }
  });

  for (const item of catalogReconciliationEntries) {
    const data = {
      catalogArea: item.catalogArea,
      catalogIdOrSlug: item.catalogIdOrSlug,
      catalogTitle: item.catalogTitle,
      sourceCatalog: item.sourceCatalog,
      reconciliationStatus: item.reconciliationStatus,
      imageStatus: item.imageStatus,
      archiveReason: item.archiveReason,
      mappingCount: item.mappingCount,
      matchedReferenceMovementIds: JSON.stringify(item.matchedReferenceMovementIds),
      resolvedImagePaths: JSON.stringify(item.resolvedImagePaths),
      needsReview: item.needsReview
    };
    await prisma.catalogReconciliation.upsert({
      where: { identityKey: item.identityKey },
      update: data,
      create: { identityKey: item.identityKey, ...data }
    });
  }

  return catalogReconciliationEntries.length;
}

const achievementSeeds = [
  ["first-checkin", "Primeira pausa", "Fez o primeiro check-in no Pausa AI.", "Sparkles", "FIRST_CHECKIN", 1],
  ["streak-7", "Sete dias de cuidado", "Manteve uma sequencia de 7 dias de check-in.", "CalendarCheck", "STREAK_DAYS", 7],
  ["streak-30", "Ritual consistente", "Manteve uma sequencia de 30 dias de check-in.", "Flame", "STREAK_DAYS", 30],
  ["ten-missions", "Dez missoes", "Concluiu 10 missoes de bem-estar.", "Trophy", "MISSION_COUNT", 10],
  ["five-yoga", "Yoga de bolso", "Concluiu 5 praticas de yoga.", "HeartPulse", "YOGA_COUNT", 5],
  ["level-5", "Nivel 5", "Chegou ao nivel 5.", "BadgeCheck", "LEVEL_REACHED", 5],
  ["level-10", "Nivel 10", "Chegou ao nivel 10.", "Crown", "LEVEL_REACHED", 10],
  ["all-types", "Mapa completo", "Experimentou todos os tipos principais de exercicio.", "Map", "ALL_EXERCISE_TYPES", 1],
  ["first-walk", "Primeira caminhada", "Concluiu a primeira Caminhada Inteligente.", "Footprints", "WALKING_COUNT", 1],
  ["walks-week-3", "Tres caminhadas na semana", "Fez 3 caminhadas em uma janela de 7 dias.", "CalendarCheck", "WALKING_WEEK_COUNT", 3],
  ["walking-streak-7", "Sete dias de movimento", "Criou 7 dias consecutivos com caminhada.", "Flame", "WALKING_STREAK_DAYS", 7],
  ["walking-30-min", "30 minutos acumulados", "Acumulou 30 minutos de caminhada.", "Clock", "WALKING_MINUTES", 30],
  ["walking-1km", "Primeiro quilometro", "Percorreu 1 km em caminhadas.", "Route", "WALKING_DISTANCE_KM", 1],
  ["walking-5km-month", "5 km no mes", "Somou 5 km de caminhada em 30 dias.", "Map", "WALKING_MONTH_DISTANCE_KM", 5],
  ["walking-stress-relief", "Antiestresse concluida", "Concluiu uma caminhada antiestresse.", "HeartPulse", "WALKING_MODE_STRESS_RELIEF", 1],
  ["walking-comeback", "Voltou para o movimento", "Registrou uma caminhada apos mais de 7 dias de pausa.", "RotateCcw", "WALKING_COMEBACK", 1],
  ["walking-mood-up", "Humor melhorou", "Registrou melhora de humor apos caminhar.", "Smile", "WALKING_MOOD_IMPROVED", 1],
  ["walking-chair", "Treino adaptado concluido", "Concluiu uma caminhada adaptada na cadeira.", "Accessibility", "WALKING_MODE_CHAIR", 1]
] as const;

const missions = [
  {
    title: "Respiração 4-4-6",
    category: "Estresse",
    durationMinutes: 3,
    description: "Uma pausa respiratória curta para desacelerar.",
    steps: ["Inspire por 4 segundos", "Segure por 4 segundos", "Solte o ar por 6 segundos", "Repita por 3 minutos"],
    unlockLevel: 1,
    complexity: "Simples",
    activityType: "Respiração",
    intensity: "Leve"
  },
  {
    title: "Diário de descarrego mental",
    category: "Humor",
    durationMinutes: 5,
    description: "Escreva sem filtro para aliviar a carga mental.",
    steps: ["Escreva tudo que está ocupando sua mente", "Não organize, apenas despeje", "Escolha uma coisa que pode esperar", "Feche com uma frase de cuidado"],
    unlockLevel: 1,
    complexity: "Simples",
    activityType: "Escrita",
    intensity: "Leve"
  },
  {
    title: "Ritual de sono sem tela",
    category: "Sono",
    durationMinutes: 10,
    description: "Prepare o corpo para encerrar o dia com menos estímulo.",
    steps: ["Afaste telas", "Reduza luzes", "Anote uma pendência para amanhã", "Faça respiração lenta"],
    unlockLevel: 1,
    complexity: "Simples",
    activityType: "Sono",
    intensity: "Leve"
  },
  {
    title: "Alongamento leve",
    category: "Energia",
    durationMinutes: 5,
    description: "Solte tensão do corpo com movimentos simples.",
    steps: ["Gire ombros", "Alongue pescoço", "Estique braços", "Respire com calma"],
    unlockLevel: 1,
    complexity: "Simples",
    activityType: "Mobilidade",
    intensity: "Leve",
    safetyNote: safetyMove
  },
  {
    title: "Pausa sem tela",
    category: "Foco",
    durationMinutes: 5,
    description: "Descanse a atenção sem notificações.",
    steps: ["Afaste o celular", "Olhe para longe", "Respire devagar", "Volte com uma próxima ação"],
    unlockLevel: 1,
    complexity: "Simples",
    activityType: "Ambiente",
    intensity: "Leve"
  },
  {
    title: "Organização de 5 minutos",
    category: "Rotina",
    durationMinutes: 5,
    description: "Escolha uma pequena área para organizar sem tentar arrumar tudo.",
    steps: ["Defina um espaço pequeno", "Remova o que não pertence", "Separe uma próxima tarefa", "Pare ao fim de 5 minutos"],
    unlockLevel: 2,
    complexity: "Simples",
    activityType: "Rotina",
    intensity: "Leve"
  },
  {
    title: "Gratidão rápida",
    category: "Humor",
    durationMinutes: 3,
    description: "Registre algo simples que ajudou hoje.",
    steps: ["Pense em um ponto positivo", "Escreva uma frase", "Agradeça mentalmente", "Siga com gentileza"],
    unlockLevel: 2,
    complexity: "Simples",
    activityType: "Escrita",
    intensity: "Leve"
  },
  {
    title: "Caminhada consciente indoor",
    category: "Energia",
    durationMinutes: 8,
    description: "Caminhe devagar em casa ou no corredor, observando corpo e respiração.",
    steps: ["Caminhe sem pressa", "Observe três sons", "Sinta os pés no chão", "Retorne devagar"],
    unlockLevel: 3,
    complexity: "Intermediária",
    activityType: "Movimento",
    intensity: "Leve",
    safetyNote: safetyMove
  },
  {
    title: "Yoga de bolso: coluna leve",
    category: "Energia",
    durationMinutes: 6,
    description: "Sequência curta de mobilidade inspirada em yoga para soltar coluna e ombros.",
    steps: ["Sente-se ou fique em pé com conforto", "Faça círculos lentos com ombros", "Incline o tronco suavemente para os lados", "Finalize com 3 respirações longas"],
    unlockLevel: 3,
    complexity: "Intermediária",
    activityType: "Yoga",
    intensity: "Leve",
    safetyNote: safetyMove
  },
  {
    title: "Reset de foco",
    category: "Foco",
    durationMinutes: 7,
    description: "Recomece com uma intenção clara.",
    steps: ["Feche abas extras", "Respire por 1 minuto", "Escolha uma prioridade", "Trabalhe por 5 minutos"],
    unlockLevel: 3,
    complexity: "Intermediária",
    activityType: "Foco",
    intensity: "Leve"
  },
  {
    title: "Fechamento do dia",
    category: "Sono",
    durationMinutes: 8,
    description: "Finalize o dia sem tentar resolver tudo.",
    steps: ["Liste pendências", "Escolha o que fica para amanhã", "Reduza luzes", "Faça uma respiração lenta"],
    unlockLevel: 4,
    complexity: "Intermediária",
    activityType: "Sono",
    intensity: "Leve"
  },
  {
    title: "Treino casa-calma",
    category: "Energia",
    durationMinutes: 8,
    description: "Movimento de baixo impacto para acordar o corpo sem pressão de performance.",
    steps: ["Marcha leve no lugar por 1 minuto", "Agachamento curto com apoio por 2 minutos", "Alongue panturrilhas na parede", "Respire e beba água"],
    unlockLevel: 4,
    complexity: "Intermediária",
    activityType: "Treino em casa",
    intensity: "Moderada",
    safetyNote: safetyMove
  },
  {
    title: "Modo reunião difícil",
    category: "Estresse",
    durationMinutes: 6,
    description: "Uma pausa antes ou depois de uma conversa exigente.",
    steps: ["Solte os ombros", "Nomeie o que você precisa levar para a reunião", "Respire 4 vezes com calma", "Depois, escreva uma coisa que ficou resolvida"],
    unlockLevel: 5,
    complexity: "Intermediária",
    activityType: "Trabalho",
    intensity: "Leve"
  },
  {
    title: "Pausa de ambiente",
    category: "Rotina",
    durationMinutes: 7,
    description: "Use luz, água e organização visual para reduzir estímulos ao redor.",
    steps: ["Beba água", "Ajuste a luz ou a tela", "Retire um item visual que distraia", "Escolha a próxima ação pequena"],
    unlockLevel: 5,
    complexity: "Intermediária",
    activityType: "Ambiente",
    intensity: "Leve"
  },
  {
    title: "Yoga de bolso: desacelerar",
    category: "Sono",
    durationMinutes: 8,
    description: "Uma sequência tranquila para sair do modo alerta.",
    steps: ["Sente-se com apoio", "Faça torções suaves para cada lado", "Alongue braços acima da cabeça", "Expire mais longo que inspira por 2 minutos"],
    unlockLevel: 6,
    complexity: "Avançada",
    activityType: "Yoga",
    intensity: "Leve",
    safetyNote: safetyMove
  },
  {
    title: "Trilha voltar ao foco",
    category: "Foco",
    durationMinutes: 10,
    description: "Combine respiração, ambiente e uma ação mínima para retomar clareza.",
    steps: ["Afaste notificações", "Respire por 2 minutos", "Organize o campo de visão", "Faça uma tarefa pequena por 5 minutos"],
    unlockLevel: 7,
    complexity: "Avançada",
    activityType: "Trilha",
    intensity: "Leve"
  },
  {
    title: "Mobilidade corpo inteiro",
    category: "Energia",
    durationMinutes: 10,
    description: "Sequência leve para soltar pescoço, ombros, quadril e pernas.",
    steps: ["Gire pescoço sem forçar", "Faça círculos com ombros", "Mobilize quadril com apoio", "Alongue pernas com respiração lenta"],
    unlockLevel: 8,
    complexity: "Avançada",
    activityType: "Mobilidade",
    intensity: "Moderada",
    safetyNote: safetyMove
  },
  {
    title: "Desafio gentil de sono",
    category: "Sono",
    durationMinutes: 12,
    description: "Uma rotina combinada para preparar a noite com mais intenção.",
    steps: ["Defina horário de encerramento de tela", "Anote pendências", "Reduza luzes", "Faça respiração 4-4-6", "Escolha uma frase de fechamento"],
    unlockLevel: 9,
    complexity: "Avançada",
    activityType: "Trilha",
    intensity: "Leve"
  },
  {
    title: "Mapa pessoal do agora",
    category: "Humor",
    durationMinutes: 12,
    description: "Observe padrões do dia sem julgamento e escolha um cuidado possível.",
    steps: ["Liste energia, humor e tensão", "Note um padrão do dia", "Escolha uma coisa que pode esperar", "Escolha uma pequena ação de cuidado"],
    unlockLevel: 10,
    complexity: "Avançada",
    activityType: "Reflexão",
    intensity: "Leve"
  }
];

const ropeSafety =
  "Evite se houver dor, tontura, lesão recente, desconforto em joelho/tornozelo/coluna ou recomendação médica para evitar impacto.";

const lowImpactAlternative =
  "Alternativa sem impacto: marcha no lugar, step touch, polichinelo sem salto ou mobilidade leve.";

const workoutRoutines = [
  {
    title: "Energia leve",
    category: "Plano 0",
    modality: "Energia",
    minLevel: 1,
    description: "Uma rotina curta para ativar o corpo sem entrar em modo treino.",
    intensity: "Leve",
    paceMin: null,
    paceMax: null,
    rounds: 4,
    roundSeconds: 25,
    restSeconds: 15,
    warmupSteps: ["Respire fundo por 30 segundos", "Gire ombros lentamente", "Mexa mãos e tornozelos"],
    cooldownSteps: ["Caminhe devagar", "Solte braços", "Beba água"],
    safetyNotes: safetyMove,
    alternative: "Faça todos os movimentos sentado se preferir.",
    xpReward: 15
  },
  {
    title: "Foco antes da tarefa",
    category: "Plano 0",
    modality: "Foco",
    minLevel: 1,
    description: "Uma sequência de respiração, postura e intenção para começar uma tarefa.",
    intensity: "Leve",
    paceMin: null,
    paceMax: null,
    rounds: 3,
    roundSeconds: 45,
    restSeconds: 10,
    warmupSteps: ["Afaste notificações", "Respire sem pressa", "Escolha uma tarefa pequena"],
    cooldownSteps: ["Nomeie a próxima ação", "Organize o campo de visão", "Comece por 2 minutos"],
    safetyNotes: safetyMove,
    alternative: "Se estiver cansado, faça apenas a respiração e a escolha da próxima ação.",
    xpReward: 15
  },
  {
    title: "Reset de estresse",
    category: "Plano 0",
    modality: "Estresse",
    minLevel: 2,
    description: "Uma pausa guiada para baixar urgência antes de continuar o dia.",
    intensity: "Leve",
    paceMin: null,
    paceMax: null,
    rounds: 4,
    roundSeconds: 40,
    restSeconds: 20,
    warmupSteps: ["Apoie os pés no chão", "Solte ombros", "Respire por 3 ciclos"],
    cooldownSteps: ["Anote uma coisa que pode esperar", "Beba água", "Retome devagar"],
    safetyNotes: safetyMove,
    alternative: "Mantenha tudo sentado e reduza qualquer movimento que incomode.",
    xpReward: 15
  },
  {
    title: "Alongamento de foco",
    category: "Plano 0",
    modality: "Foco",
    minLevel: 3,
    description: "Alongamento simples para pescoço e ombros depois de muito tempo parado.",
    intensity: "Leve",
    paceMin: null,
    paceMax: null,
    rounds: 5,
    roundSeconds: 30,
    restSeconds: 15,
    warmupSteps: ["Sente-se com apoio", "Relaxe mandíbula", "Respire sem pressa"],
    cooldownSteps: ["Observe o corpo", "Retome devagar", "Escolha uma próxima ação pequena"],
    safetyNotes: safetyMove,
    alternative: "Reduza amplitude e mantenha movimentos confortáveis.",
    xpReward: 15
  },
  {
    title: "Energia e rotina",
    category: "Plano 0",
    modality: "Energia",
    minLevel: 4,
    description: "Movimento leve de baixo impacto para acordar o corpo sem pressão de performance.",
    intensity: "Moderada",
    paceMin: null,
    paceMax: null,
    rounds: 5,
    roundSeconds: 35,
    restSeconds: 25,
    warmupSteps: ["Marcha leve", "Mobilize quadril com apoio", "Respire antes de começar"],
    cooldownSteps: ["Alongue panturrilhas", "Solte ombros", "Beba água"],
    safetyNotes: safetyMove,
    alternative: "Troque agachamentos por sentar e levantar de uma cadeira com apoio.",
    xpReward: 25
  },
  {
    title: "Yoga: base leve",
    category: "Modalidades",
    modality: "Yoga",
    minLevel: 5,
    description: "Sequência curta de yoga leve para coluna, ombros e respiração.",
    intensity: "Leve",
    paceMin: null,
    paceMax: null,
    rounds: 5,
    roundSeconds: 45,
    restSeconds: 15,
    warmupSteps: ["Respire de pé ou sentado", "Gire ombros", "Alongue braços sem forçar"],
    cooldownSteps: ["Expire longo", "Observe a postura", "Volte com calma"],
    safetyNotes: safetyMove,
    alternative: "Faça a sequência sentado se estiver cansado.",
    xpReward: 15
  },
  {
    title: "Luta: sombra leve",
    category: "Modalidades",
    modality: "Luta",
    minLevel: 5,
    description: "Rounds de sombra sem contato para coordenação, energia e foco.",
    intensity: "Moderada",
    paceMin: null,
    paceMax: null,
    rounds: 6,
    roundSeconds: 45,
    restSeconds: 30,
    warmupSteps: ["Mobilize ombros", "Faça base leve sem saltar", "Respire antes do primeiro round"],
    cooldownSteps: ["Solte braços", "Alongue ombros", "Respire até reduzir o ritmo"],
    safetyNotes: "Sem contato e sem golpes explosivos. Pare se sentir dor, tontura ou desconforto.",
    alternative: "Faça movimentos lentos de braço sentado ou troque por mobilidade de ombros.",
    xpReward: 25
  },
  {
    title: "Jumping: baixo impacto",
    category: "Modalidades",
    modality: "Jumping",
    minLevel: 5,
    description: "Sequência opcional com passos de baixo impacto para simular jumping sem excesso.",
    intensity: "Moderada",
    paceMin: null,
    paceMax: null,
    rounds: 6,
    roundSeconds: 30,
    restSeconds: 30,
    warmupSteps: ["Aqueça tornozelos", "Faça marcha no lugar", "Teste step touch sem salto"],
    cooldownSteps: ["Caminhe devagar", "Alongue panturrilhas", "Beba água"],
    safetyNotes: "Evite se houver dor, tontura, lesão recente ou desconforto em joelhos, tornozelos ou coluna.",
    alternative: "Alternativa sem impacto: step touch, marcha no lugar ou mobilidade leve.",
    xpReward: 25
  },
  {
    title: "Funcional em casa: base",
    category: "Modalidades",
    modality: "Funcional em casa",
    minLevel: 5,
    description: "Rotina funcional sem equipamento, com movimentos controlados.",
    intensity: "Moderada",
    paceMin: null,
    paceMax: null,
    rounds: 6,
    roundSeconds: 35,
    restSeconds: 25,
    warmupSteps: ["Marcha leve", "Mobilize quadril", "Faça agachamento curto com apoio"],
    cooldownSteps: ["Alongue pernas", "Solte ombros", "Respire devagar"],
    safetyNotes: safetyMove,
    alternative: "Use cadeira como apoio e reduza amplitude.",
    xpReward: 25
  },
  {
    title: "Mobilidade funcional",
    category: "Modalidades",
    modality: "Mobilidade funcional",
    minLevel: 5,
    description: "Mobilidade de corpo inteiro para preparar treinos ou recuperar energia.",
    intensity: "Leve",
    paceMin: null,
    paceMax: null,
    rounds: 5,
    roundSeconds: 45,
    restSeconds: 15,
    warmupSteps: ["Respire em pé", "Mobilize pescoço sem forçar", "Solte quadril com apoio"],
    cooldownSteps: ["Alongue panturrilhas", "Solte mãos", "Observe o corpo"],
    safetyNotes: safetyMove,
    alternative: "Faça tudo sentado se estiver com baixa energia.",
    xpReward: 15
  },
  {
    title: "Corda iniciante opcional",
    category: "Modalidades",
    modality: "Pular corda",
    minLevel: 5,
    description: "Primeira rotina opcional de corda com ritmo leve e pausas longas.",
    intensity: "Moderada",
    paceMin: 40,
    paceMax: 70,
    rounds: 6,
    roundSeconds: 20,
    restSeconds: 40,
    warmupSteps: ["Aqueça tornozelos", "Faça marcha no lugar", "Teste a corda sem pressa"],
    cooldownSteps: ["Caminhe devagar", "Alongue panturrilhas", "Respire e hidrate"],
    safetyNotes: ropeSafety,
    alternative: lowImpactAlternative,
    xpReward: 30
  },
  {
    title: "Corda base",
    category: "Modalidades",
    modality: "Pular corda",
    minLevel: 6,
    description: "Rotina base para manter ritmo confortável, sem buscar intensidade alta.",
    intensity: "Moderada",
    paceMin: 70,
    paceMax: 100,
    rounds: 8,
    roundSeconds: 30,
    restSeconds: 30,
    warmupSteps: ["Mobilize tornozelos e joelhos", "Faça 1 minuto de marcha", "Comece com saltos baixos"],
    cooldownSteps: ["Caminhe devagar", "Alongue panturrilhas", "Faça respiração lenta"],
    safetyNotes: ropeSafety,
    alternative: lowImpactAlternative,
    xpReward: 30
  },
  {
    title: "Corda ritmo estável",
    category: "Modalidades",
    modality: "Pular corda",
    minLevel: 7,
    description: "Rotina moderada para sustentar ritmo sem competir com o corpo.",
    intensity: "Moderada",
    paceMin: 90,
    paceMax: 120,
    rounds: 10,
    roundSeconds: 40,
    restSeconds: 25,
    warmupSteps: ["Aqueça tornozelos", "Faça saltos simulados sem corda", "Comece abaixo do seu pace"],
    cooldownSteps: ["Reduza ritmo por 1 minuto", "Alongue panturrilhas e quadris", "Hidrate"],
    safetyNotes: ropeSafety,
    alternative: lowImpactAlternative,
    xpReward: 30
  },
  {
    title: "Corda progressiva moderada",
    category: "Modalidades",
    modality: "Pular corda",
    minLevel: 8,
    description: "Sequência progressiva moderada para usuários acostumados com corda.",
    intensity: "Moderada",
    paceMin: 110,
    paceMax: 140,
    rounds: 12,
    roundSeconds: 45,
    restSeconds: 20,
    warmupSteps: ["Aqueça tornozelos e panturrilhas", "Faça 2 rounds muito leves", "Mantenha saltos baixos"],
    cooldownSteps: ["Caminhe até normalizar respiração", "Alongue panturrilhas", "Faça mobilidade de tornozelos"],
    safetyNotes: ropeSafety,
    alternative: lowImpactAlternative,
    xpReward: 30
  }
];

const homeFunctionalRoutines = [
  ["Reset corporal de 3 minutos", "Pausas rapidas", 1, 3, "Respiracao em pe; Ombros para tras; Marcha parada leve; Alongamento lateral"],
  ["Destravar pescoco e ombros", "Alongamentos", 1, 4, "Inclinacao lateral do pescoco; Circulos de ombro; Bracos para tras; Respiracao lenta"],
  ["Energia minima", "Pausas rapidas", 1, 4, "Levantar e sentar devagar; Marcha parada; Alongamento de bracos; Agua e respiracao"],
  ["Funcional iniciante 8 minutos", "Funcional em casa", 2, 8, "Agachamento curto; Ponte de gluteos; Prancha na parede; Marcha parada"],
  ["Cardio sem impacto", "Cardio leve", 2, 8, "Passo lateral; Polichinelo sem salto; Marcha com bracos; Elevacao de joelhos baixa"],
  ["Core iniciante", "Funcional em casa", 2, 6, "Respiracao abdominal; Dead bug simplificado; Ponte de gluteos; Prancha inclinada"],
  ["Ativacao total 12 minutos", "Funcional em casa", 3, 12, "Agachamento; Avanco reverso leve; Flexao inclinada; Mountain climber lento"],
  ["Luta sombra leve funcional", "Luta", 3, 10, "Guarda e deslocamento; Jab leve; Direto leve; Esquiva suave; Respiracao"],
  ["Mobilidade funcional em casa", "Alongamentos", 3, 10, "Mobilidade de coluna; Mobilidade de quadril; Agachamento com pausa; Alongamento posterior"],
  ["Corpo inteiro 18 minutos", "Funcional em casa", 4, 18, "Agachamento; Flexao inclinada; Avanco reverso; Prancha; Polichinelo sem salto"],
  ["Energia e forca", "Funcional em casa", 4, 18, "Agachamento com braco acima; Ponte alternada; Remada com toalha; Prancha lateral; Marcha rapida"],
  ["Cardio funcional baixo impacto", "Cardio leve", 4, 18, "Step touch lateral; Joelho alto baixo impacto; Luta sombra; Agachamento curto"],
  ["Circuito funcional 25 minutos", "Funcional em casa", 5, 25, "Agachamento; Flexao inclinada ou joelho; Avanco reverso; Mountain climber lento; Prancha"],
  ["Pular corda iniciante progressivo", "Pular corda", 5, 12, "Giro de punho sem pular; Saltos baixos; Descanso; Saltos alternados"],
  ["Flow forca + mobilidade", "Yoga", 5, 20, "Agachamento; Alongamento lateral; Avanco reverso; Mobilidade de coluna; Prancha; Respiracao final"]
].map(([title, category, level, duration, steps]) => ({
  title: title as string,
  category: category as string,
  modality: category as string,
  minLevel: level as number,
  description: "Treino funcional simples para fazer em casa, sem equipamento e com ritmo seguro.",
  intensity: (level as number) >= 4 ? "Moderada" : "Leve",
  paceMin: (category as string) === "Pular corda" ? 40 : null,
  paceMax: (category as string) === "Pular corda" ? 80 : null,
  rounds: Math.max(3, Math.min(6, Math.round((duration as number) / 3))),
  roundSeconds: (level as number) >= 4 ? 45 : 40,
  restSeconds: (level as number) >= 4 ? 30 : 20,
  warmupSteps: ["Respire em ritmo confortavel", "Mobilize ombros e quadril", "Comece abaixo do seu limite"],
  cooldownSteps: ["Caminhe devagar", "Alongue sem forcar", "Hidrate-se e observe o corpo"],
  safetyNotes: "Consulte um profissional de saude antes de iniciar exercicios se tiver limitacoes, dores, lesoes ou condicoes pre-existentes. Pare imediatamente se sentir dor, tontura, falta de ar intensa ou desconforto incomum.",
  alternative: "Alternativa: reduza amplitude, faca sentado ou troque por mobilidade leve.",
  xpReward: (level as number) >= 5 ? 30 : (level as number) >= 3 ? 25 : 15,
  _stepsText: steps as string
}));

async function main() {
  await seedFoundationRegistry();
  for (const exercise of exerciseSeeds) {
    await prisma.exercise.upsert({
      where: { id: exercise.id },
      update: {
        ...exercise,
        steps: JSON.stringify(exercise.steps),
        contraindications: JSON.stringify(exercise.contraindications),
        recommendedWhen: JSON.stringify(exercise.recommendedWhen),
        avoidWhen: JSON.stringify(exercise.avoidWhen)
      },
      create: {
        ...exercise,
        steps: JSON.stringify(exercise.steps),
        contraindications: JSON.stringify(exercise.contraindications),
        recommendedWhen: JSON.stringify(exercise.recommendedWhen),
        avoidWhen: JSON.stringify(exercise.avoidWhen)
      }
    });
  }

  for (const instruction of exerciseInstructionSeeds) {
    const categoryGroup = categoryGroupForInstruction(instruction);
    const unlockLevel = instruction.level || 1;
    await prisma.exerciseInstruction.upsert({
      where: { slug: instruction.slug },
      update: {
        ...instruction,
        categoryGroup,
        unlockLevel,
        recommendedWhen: JSON.stringify(instruction.recommendedWhen),
        avoidWhen: JSON.stringify(instruction.avoidWhen),
        contraindications: JSON.stringify(instruction.contraindications),
        howToSteps: JSON.stringify(instruction.howToSteps),
        postureTips: JSON.stringify(instruction.postureTips),
        breathingTips: JSON.stringify(instruction.breathingTips),
        commonMistakes: JSON.stringify(instruction.commonMistakes),
        safetyNotes: JSON.stringify(instruction.safetyNotes)
      },
      create: {
        ...instruction,
        categoryGroup,
        unlockLevel,
        recommendedWhen: JSON.stringify(instruction.recommendedWhen),
        avoidWhen: JSON.stringify(instruction.avoidWhen),
        contraindications: JSON.stringify(instruction.contraindications),
        howToSteps: JSON.stringify(instruction.howToSteps),
        postureTips: JSON.stringify(instruction.postureTips),
        breathingTips: JSON.stringify(instruction.breathingTips),
        commonMistakes: JSON.stringify(instruction.commonMistakes),
        safetyNotes: JSON.stringify(instruction.safetyNotes)
      }
    });
  }

  for (const partner of partnerSeeds) {
    await prisma.partner.upsert({
      where: { id: partner.name.toLowerCase().replace(/\s+/g, "-") },
      update: partner,
      create: { id: partner.name.toLowerCase().replace(/\s+/g, "-"), ...partner }
    });
  }

  for (const practice of yogaPracticeSeeds) {
    const unlockLevel = practice.level || 1;
    await prisma.yogaPractice.upsert({
      where: { slug: practice.slug },
      update: {
        ...practice,
        unlockLevel,
        imageSequenceKeys: JSON.stringify(practice.imageSequenceKeys),
        imageFrameDescriptions: JSON.stringify(practice.imageFrameDescriptions),
        recommendedWhen: JSON.stringify(practice.recommendedWhen),
        avoidWhen: JSON.stringify(practice.avoidWhen),
        contraindications: JSON.stringify(practice.contraindications),
        howToSteps: JSON.stringify(practice.howToSteps),
        postureTips: JSON.stringify(practice.postureTips),
        breathingTips: JSON.stringify(practice.breathingTips),
        commonMistakes: JSON.stringify(practice.commonMistakes),
        safetyNotes: JSON.stringify(practice.safetyNotes),
        progressionTips: JSON.stringify(practice.progressionTips)
      },
      create: {
        ...practice,
        unlockLevel,
        imageSequenceKeys: JSON.stringify(practice.imageSequenceKeys),
        imageFrameDescriptions: JSON.stringify(practice.imageFrameDescriptions),
        recommendedWhen: JSON.stringify(practice.recommendedWhen),
        avoidWhen: JSON.stringify(practice.avoidWhen),
        contraindications: JSON.stringify(practice.contraindications),
        howToSteps: JSON.stringify(practice.howToSteps),
        postureTips: JSON.stringify(practice.postureTips),
        breathingTips: JSON.stringify(practice.breathingTips),
        commonMistakes: JSON.stringify(practice.commonMistakes),
        safetyNotes: JSON.stringify(practice.safetyNotes),
        progressionTips: JSON.stringify(practice.progressionTips)
      }
    });
  }

  for (const sequence of yogaSequenceSeeds) {
    await prisma.yogaSequence.upsert({
      where: { slug: sequence.slug },
      update: {
        ...sequence,
        goals: JSON.stringify(sequence.goals),
        practiceSlugs: JSON.stringify(sequence.practiceSlugs)
      },
      create: {
        ...sequence,
        goals: JSON.stringify(sequence.goals),
        practiceSlugs: JSON.stringify(sequence.practiceSlugs)
      }
    });
  }

  for (const [slug, title, description, icon, triggerType, targetValue] of achievementSeeds) {
    await prisma.achievement.upsert({
      where: { slug },
      update: { title, description, icon, triggerType, targetValue },
      create: { slug, title, description, icon, triggerType, targetValue }
    });
  }

  for (const mission of missions) {
    await prisma.mission.upsert({
      where: { title: mission.title },
      update: { ...mission, steps: JSON.stringify(mission.steps) },
      create: { ...mission, steps: JSON.stringify(mission.steps) }
    });
  }

  await seedCatalogVisualAssets();
  await seedCatalogReconciliation();
  await seedInstructionalVideos();
  await seedW4ContentLibrary(prisma);
  await seedW7MediaGovernance(prisma);

  const allWorkoutRoutines = [...workoutRoutines, ...homeFunctionalRoutines];

  await prisma.workoutRoutine.deleteMany({
    where: { title: { notIn: allWorkoutRoutines.map((routine) => routine.title) } }
  });

  for (const routine of allWorkoutRoutines) {
    const cleanRoutine = { ...routine };
    delete (cleanRoutine as { _stepsText?: string })._stepsText;
    await prisma.workoutRoutine.upsert({
      where: { title: routine.title },
      update: {
        ...cleanRoutine,
        warmupSteps: JSON.stringify(routine.warmupSteps),
        cooldownSteps: JSON.stringify(routine.cooldownSteps)
      },
      create: {
        ...cleanRoutine,
        warmupSteps: JSON.stringify(routine.warmupSteps),
        cooldownSteps: JSON.stringify(routine.cooldownSteps)
      }
    });
  }

  const adminEmail = (process.env.ADMIN_EMAIL || "admin@pausaai.com").toLowerCase();
  const adminPassword = process.env.ADMIN_SEED_PASSWORD || randomUUID();
  const passwordHash = await bcrypt.hash(adminPassword, 12);
  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: { role: "ADMIN" },
    create: {
      name: "Admin Pausa AI",
      email: adminEmail,
      passwordHash,
      role: "ADMIN",
      onboardingCompleted: true,
      profile: {
        create: {
          mainGoal: "Criar rotina saudável",
          dailyTime: "5 minutos",
          preferredTime: "Manhã",
          stressLevel: "Médio",
          difficultyArea: "Trabalho",
          workHours: 8,
          freeHours: 2,
          sleepHours: 7,
          trainingIntensityPreference: "manter"
        }
      }
    }
  });
  await ensureSeededRole(admin.id, "ADMIN", "CONTROLLED_ADMIN_SEED");

  const masterEmail = "rmedrado15@gmail.com";
  const masterPassword = process.env.MASTER_SEED_PASSWORD || randomUUID();
  const master = await prisma.user.upsert({
    where: { email: masterEmail },
    update: { role: "MASTER" },
    create: {
      name: "Master Pausa AI",
      email: masterEmail,
      passwordHash: await bcrypt.hash(masterPassword, 12),
      role: "MASTER",
      onboardingCompleted: true,
      profile: {
        create: {
          mainGoal: "Criar rotina saudável",
          dailyTime: "5 minutos",
          preferredTime: "Manhã",
          stressLevel: "Médio",
          difficultyArea: "Trabalho",
          workHours: 8,
          freeHours: 2,
          sleepHours: 7,
          trainingIntensityPreference: "manter"
        }
      }
    }
  });
  await ensureSeededRole(master.id, "MASTER", "CONTROLLED_MASTER_SEED");
  await seedPersistedUserRoles();

  const company = await prisma.company.upsert({
    where: { id: "demo-company" },
    update: {},
    create: { id: "demo-company", name: "Empresa Demo", plan: "Growth", employeeLimit: 75 }
  });

  await prisma.companyMetricMock.deleteMany({ where: { companyId: company.id } });
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    await prisma.companyMetricMock.create({
      data: {
        companyId: company.id,
        date,
        avgMood: 3.2 + Math.random() * 0.8,
        avgStress: 2.8 + Math.random() * 0.9,
        avgSleep: 3 + Math.random() * 0.7,
        avgEnergy: 3.1 + Math.random() * 0.8,
        engagementRate: 62 + Math.random() * 24
      }
    });
  }
}

main().finally(async () => prisma.$disconnect());
