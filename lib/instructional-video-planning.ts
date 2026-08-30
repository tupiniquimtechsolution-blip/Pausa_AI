export type InstructionalVideoTargetType =
  | "EXERCISE_INSTRUCTION"
  | "MISSION"
  | "YOGA_PRACTICE"
  | "YOGA_SEQUENCE";

export type InstructionalVideoSource = {
  targetType: InstructionalVideoTargetType;
  targetSlug: string;
  title: string;
  category: string;
  shortDescription?: string | null;
  objective?: string | null;
  durationSeconds?: number | null;
  durationMinutes?: number | null;
  intensity?: string | null;
  equipment?: string | null;
  instructionType?: string | null;
};

export type InstructionalVideoPlan = {
  slug: string;
  targetType: InstructionalVideoTargetType;
  targetSlug: string;
  title: string;
  category: string;
  durationSeconds: number;
  videoUrl: string;
  thumbnailUrl: string;
  tags: string[];
  intensity: string;
  equipment: string;
  position: string[];
  benefitPrimary: string;
  narrationScript: string;
  batchWave: number;
  formatPrimary: string;
  formatSecondary: string;
  status: "PLANNED" | "IN_PRODUCTION" | "READY" | "NEEDS_REVIEW";
  approvalChecklist: string[];
};

export const VIDEO_APPROVAL_CHECKLIST = [
  "Duracao dentro do range da categoria",
  "Abertura com nome do exercicio em audio e texto",
  "Beneficio claro em ate 10 segundos",
  "Narracao gentil, sem jargao e sem imperativo agressivo",
  "Legendas presentes e legiveis",
  "Qualidade de imagem maior ou igual a 1080p",
  "Audio limpo, sem eco ou ruido de fundo",
  "Musica de fundo sem sobrepor narracao",
  "Encerramento com frase de reconhecimento",
  "Fade de saida suave",
  "Metadados JSON gerados e salvos",
  "Thumbnail gerada entre segundo 10 e 20",
  "Arquivo exportado em H.264 MP4"
];

const categoryLabels: Record<string, string> = {
  HOME_FUNCTIONAL: "Funcional em casa",
  JUMP_ROPE: "Pular corda",
  LOW_IMPACT_CARDIO: "Cardio leve",
  MOBILITY: "Mobilidade",
  SHADOW_BOXING: "Luta sombra",
  STRETCHING: "Alongamento regional",
  WALKING: "Caminhada",
  WORK_BREAK: "Pausa no trabalho",
  YOGA: "Yoga",
  BREATHING: "Respiracao",
  WRITING: "Escrita guiada",
  RELAXATION: "Relaxamento",
  ORGANIZATION: "Organizacao",
  FOCUS_TRAINING: "Foco"
};

export function slugifyVideo(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function buildInstructionalVideoPlan(source: InstructionalVideoSource): InstructionalVideoPlan {
  const baseSlug = source.targetSlug || slugifyVideo(source.title);
  const slug = source.targetType === "MISSION" ? `missao-${baseSlug}` : baseSlug;
  const category = normalizeCategory(source.category);
  const durationSeconds = resolveDuration(source);
  const tags = buildTags(source, category);
  const wave = resolveBatchWave(source, baseSlug);
  const benefit = source.objective || source.shortDescription || buildBenefit(source.title, category);

  return {
    slug,
    targetType: source.targetType,
    targetSlug: baseSlug,
    title: source.title,
    category,
    durationSeconds,
    videoUrl: `/videos/${slug}.mp4`,
    thumbnailUrl: `/videos/thumbs/${slug}.jpg`,
    tags,
    intensity: normalizeIntensity(source.intensity),
    equipment: source.equipment || "Nenhum",
    position: resolvePositions(source),
    benefitPrimary: benefit,
    narrationScript: buildNarrationScript(source.title, category, benefit, durationSeconds),
    batchWave: wave,
    formatPrimary: "9:16",
    formatSecondary: "1:1",
    status: "PLANNED",
    approvalChecklist: VIDEO_APPROVAL_CHECKLIST
  };
}

function normalizeCategory(category: string) {
  return categoryLabels[category] || category;
}

function normalizeIntensity(intensity?: string | null) {
  if (!intensity) return "muito_leve";
  return intensity.toLowerCase().replace(/_/g, "_").replace(/\s+/g, "_");
}

function resolveDuration(source: InstructionalVideoSource) {
  if (source.targetType === "YOGA_SEQUENCE") return clamp(source.durationSeconds || 600, 300, 900);
  if (source.targetType === "YOGA_PRACTICE") return clamp(source.durationSeconds || 240, 180, 900);
  if (source.category === "STRETCHING") return clamp(source.durationSeconds || 75, 60, 90);
  if (source.category === "MOBILITY") return clamp(source.durationSeconds || 150, 120, 180);
  if (source.category === "YOGA") return clamp(source.durationSeconds || 240, 180, 300);
  if (source.category === "WALKING") return clamp(source.durationSeconds || 180, 120, 240);
  if (["HOME_FUNCTIONAL", "LOW_IMPACT_CARDIO", "SHADOW_BOXING", "JUMP_ROPE"].includes(source.category)) {
    return clamp(source.durationSeconds || 150, 120, 180);
  }
  if (source.instructionType === "BREATHING") return clamp(source.durationSeconds || 180, 180, 300);
  if (source.targetType === "MISSION" && (source.durationMinutes || 0) > 0) {
    const seconds = (source.durationMinutes || 2) * 60;
    return source.category === "Energia" ? clamp(seconds, 120, 240) : clamp(seconds, 60, 120);
  }
  if (source.targetType === "MISSION") return 90;
  return clamp(source.durationSeconds || 90, 60, 180);
}

function resolveBatchWave(source: InstructionalVideoSource, slug: string) {
  const core = new Set([
    "respiracao-4-4-6",
    "mobilidade-de-coluna",
    "caminhada-consciente",
    "reset-postural",
    "pausa-sem-tela",
    "yoga-bolso-coluna-leve",
    "alongamento-leve"
  ]);
  if (core.has(slug)) return 1;
  if (source.targetType === "YOGA_PRACTICE" || source.targetType === "YOGA_SEQUENCE") return 2;
  if (source.targetType === "MISSION") return 4;
  if (source.category === "STRETCHING") return 3;
  return 2;
}

function buildTags(source: InstructionalVideoSource, category: string) {
  const values = [
    category,
    source.instructionType || "",
    source.intensity || "",
    source.equipment || "",
    source.title
  ]
    .join(" ")
    .toLowerCase();

  const tags = new Set<string>();
  tags.add(slugifyVideo(category));
  if (values.includes("sono")) tags.add("sono");
  if (values.includes("foco")) tags.add("foco");
  if (values.includes("energia")) tags.add("energia");
  if (values.includes("respira")) tags.add("respiracao");
  if (values.includes("caminh")) tags.add("caminhada");
  if (values.includes("trabalho")) tags.add("trabalho");
  if (values.includes("tela") || values.includes("celular")) tags.add("telas");
  if (values.includes("yoga")) tags.add("yoga");
  if (source.targetType === "YOGA_PRACTICE") tags.add("pratica-yoga");
  if (source.targetType === "YOGA_SEQUENCE") tags.add("sequencia-yoga");
  if (values.includes("coluna")) tags.add("coluna");
  if (values.includes("ombro")) tags.add("ombros");
  if (values.includes("quadril")) tags.add("quadril");
  if (values.includes("punho") || values.includes("mao")) tags.add("maos-punhos");
  if (source.targetSlug.startsWith("ref_006")) {
    tags.add("ref-006");
    tags.add("core");
    tags.add("fitness");
    tags.add("sem-equipamento");
  }
  if (source.targetSlug.startsWith("ref_003")) {
    tags.add("ref-003");
    tags.add("surya-namaskar");
    tags.add("sequencia-yoga");
  }
  if (source.targetSlug.startsWith("ref_004")) {
    tags.add("ref-004");
    tags.add("yoga-hormonal");
    tags.add("sop");
  }
  if (source.targetSlug.startsWith("ref_005")) {
    tags.add("ref-005");
    tags.add("abertura-quadril");
    tags.add("flexibilidade");
  }
  if (source.targetSlug.startsWith("ref_001")) {
    tags.add("ref-001");
    tags.add("yoga-coluna");
    tags.add("flexibilidade");
  }
  if (source.targetSlug.startsWith("ref_007")) {
    tags.add("ref-007");
    tags.add("mobilidade-coluna");
    tags.add("postura");
  }
  if (source.targetSlug.startsWith("ref_008")) {
    tags.add("ref-008");
    tags.add("funcional-manha");
    tags.add("condicionamento");
  }
  if (source.targetSlug.startsWith("ref_009")) {
    tags.add("ref-009");
    tags.add("fascia-plantar");
    tags.add("pes");
  }
  if (source.targetSlug.startsWith("ref_010")) {
    tags.add("ref-010");
    tags.add("costas");
    tags.add("mobilidade-coluna");
  }
  if (source.targetSlug.startsWith("ref_011")) {
    tags.add("ref-011");
    tags.add("chakra-flow");
    tags.add("respiracao");
  }
  if (source.targetType === "MISSION") tags.add("missao-classica");
  return Array.from(tags).slice(0, 8);
}

function resolvePositions(source: InstructionalVideoSource) {
  const text = `${source.title} ${source.category}`.toLowerCase();
  if (text.includes("caminhada")) return ["em pe", "caminhando"];
  if (text.includes("cadeira") || text.includes("sentado") || text.includes("trabalho")) return ["sentado", "em pe"];
  if (text.includes("yoga") || text.includes("chao")) return ["no chao", "sentado", "em pe"];
  if (source.category === "STRETCHING") return ["em pe", "sentado"];
  if (source.category === "WRITING") return ["sentado"];
  return ["em pe", "sentado"];
}

function buildBenefit(title: string, category: string) {
  if (category.includes("Alongamento")) return `Alivia tensao corporal com uma pratica simples de ${title.toLowerCase()}.`;
  if (category.includes("Mobilidade")) return `Ajuda o corpo a sair da rigidez com ${title.toLowerCase()}.`;
  if (category.includes("Caminhada")) return "Cria uma pausa ativa, leve e consciente.";
  if (category.includes("Respiracao")) return "Ajuda o corpo a desacelerar com respiracao guiada.";
  if (category.includes("Pausa")) return "Reduz estimulos e ajuda a recuperar clareza.";
  return `Transforma ${title.toLowerCase()} em uma pausa possivel e segura.`;
}

function buildNarrationScript(title: string, category: string, benefit: string, durationSeconds: number) {
  const durationLabel = durationSeconds >= 120 ? `${Math.round(durationSeconds / 60)} minutos` : `${durationSeconds} segundos`;
  return [
    `[00:00 - 00:05] Abertura suave: "Vamos fazer ${title}. Pode ser agora mesmo, do jeito que voce esta."`,
    `[00:06 - 00:15] Beneficio imediato: "${benefit}"`,
    `[00:16 - 00:25] Preparacao: "Voce precisa de pouco espaco e nao precisa fazer perfeito. Use so o que for confortavel."`,
    `[00:26 - ${durationLabel}] Execucao guiada: "Siga no seu ritmo. Respire sem prender o ar. Se algo incomodar, reduza a amplitude ou pause."`,
    `[Ultimos 10s] Encerramento: "Isso. Voce acabou de fazer algo por voce." Pausa de 2 segundos e fade suave.`
  ].join("\n");
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}
