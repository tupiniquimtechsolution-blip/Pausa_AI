import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { exerciseInstructionSeeds, type ExerciseInstructionSeed } from "../lib/exercise-instruction-data";

type ClassicMission = {
  number: number;
  title: string;
  videoType: string;
  mappedInstructionSlug?: string;
};

type VideoSprintRecord = {
  slug: string;
  title: string;
  content_type: "body_movement" | "classic_mission";
  app_instruction_slug: string | null;
  category: string;
  category_label: string;
  duration_seconds: number;
  video_url: string;
  thumbnail_url: string;
  visual_reference_url: string | null;
  source_image_url: string | null;
  source_image_role: "character_reference" | "pose_reference" | "missing";
  source_frame_urls: string[];
  character_reference_urls: string[];
  tags: string[];
  intensity: string;
  equipment: string;
  position: string[];
  benefit_primary: string;
  batch_wave: number;
  scene: string;
  camera_style: string[];
  narration_script: string;
  shot_plan: string[];
  subtitle_cues: Array<{ start: string; end: string; text: string }>;
  production_prompt: string;
  approval_status: "script_ready_needs_final_video" | "metadata_ready_needs_app_catalog_entry";
  approval_checklist: Record<string, "done" | "pending" | "blocked">;
  notes: string[];
};

const root = process.cwd();
const publicDir = path.join(root, "public");
const videoDir = path.join(publicDir, "videos");
const metadataDir = path.join(videoDir, "metadata");
const thumbsDir = path.join(videoDir, "thumbs");
const docsDir = path.join(root, "docs", "video-production");

const physicalCategories = new Set([
  "HOME_FUNCTIONAL",
  "JUMP_ROPE",
  "LOW_IMPACT_CARDIO",
  "MOBILITY",
  "SHADOW_BOXING",
  "STRETCHING",
  "WALKING",
  "WORK_BREAK",
  "YOGA"
]);

const priorityTitles = new Set([
  "Respiracao 4-4-6",
  "Mobilidade de coluna",
  "Caminhada consciente",
  "Reset postural",
  "Pausa sem tela",
  "Yoga de bolso: coluna leve",
  "Alongamento leve"
]);

const classicMissions: ClassicMission[] = [
  { number: 1, title: "Alongamento leve", videoType: "Demonstracao fisica (serie suave)", mappedInstructionSlug: "alongamento-leve" },
  { number: 2, title: "Caminhada consciente", videoType: "Externo + narracao introspectiva", mappedInstructionSlug: "caminhada-consciente" },
  { number: 3, title: "Respiracao 4-4-6", videoType: "Animacao sincronizada + demonstracao", mappedInstructionSlug: "respiracao-4-4-6" },
  { number: 4, title: "Pausa de foco", videoType: "Ambiente de trabalho + narracao", mappedInstructionSlug: "pausa-foco-sem-impacto" },
  { number: 5, title: "Pausa sem tela", videoType: "Comportamental / storytelling", mappedInstructionSlug: "pausa-sem-tela" },
  { number: 6, title: "Diario de descarrego mental", videoType: "Narracao + close de caderno/escrita", mappedInstructionSlug: "diario-descarrego-mental" },
  { number: 7, title: "Planejamento gentil do dia", videoType: "Mesa organizada + narracao matinal", mappedInstructionSlug: "planejamento-gentil-dia-seguinte" },
  { number: 8, title: "Ritual de sono sem tela", videoType: "Ambiente noturno, iluminacao quente", mappedInstructionSlug: "ritual-sono-sem-tela" },
  { number: 9, title: "Gratidao rapida", videoType: "Interno / reflexivo, voz suave", mappedInstructionSlug: "gratidao-rapida" },
  { number: 10, title: "Organizacao de 5 minutos", videoType: "Ambiente de trabalho, acao rapida", mappedInstructionSlug: "organizacao-5-minutos" },
  { number: 11, title: "Caminhada consciente indoor", videoType: "Interno, corredor, narracao" },
  { number: 12, title: "Yoga de bolso: coluna leve", videoType: "Demonstracao postural suave", mappedInstructionSlug: "yoga-bolso-coluna-leve" },
  { number: 13, title: "Reset de foco", videoType: "Demonstracao rapida + narracao", mappedInstructionSlug: "reset-de-foco" },
  { number: 14, title: "Treino casa-calma", videoType: "Serie funcional suave em casa", mappedInstructionSlug: "funcional-em-casa-iniciante" },
  { number: 15, title: "Fechamento do dia", videoType: "Ambiente noturno, ritual de encerramento", mappedInstructionSlug: "fechamento-do-dia" },
  { number: 16, title: "Modo reuniao dificil", videoType: "Narrativo / preparacao mental" },
  { number: 17, title: "Pausa de ambiente", videoType: "Saida breve, janela, ar livre", mappedInstructionSlug: "luz-e-janela" },
  { number: 18, title: "Yoga de bolso: desacelerar", videoType: "Demonstracao postural restaurativa" },
  { number: 19, title: "Trilha voltar ao foco", videoType: "Tecnica + narracao de retorno", mappedInstructionSlug: "reset-de-foco" },
  { number: 20, title: "Mobilidade corpo inteiro", videoType: "Serie completa, multiplas regioes", mappedInstructionSlug: "ativacao-leve-3-minutos" },
  { number: 21, title: "Desafio gentil de sono", videoType: "Rotina noturna ilustrada", mappedInstructionSlug: "ritual-sono-sem-tela" },
  { number: 22, title: "Mapa pessoal do agora", videoType: "Narracao guiada / check-in interno", mappedInstructionSlug: "checkin-emocional-guiado" }
];

const premiumCharacterReferences = {
  default: [
    "/exercises/gratidao-rapida.png",
    "/exercises/checkin-emocional-guiado.png",
    "/exercises/diario-descarrego-mental.png"
  ],
  work: [
    "/exercises/organizacao-5-minutos.png",
    "/exercises/diario-descarrego-mental.png",
    "/exercises/gratidao-rapida.png"
  ],
  sleep: [
    "/exercises/ritual-sono-sem-tela.png",
    "/exercises/respiracao-antes-de-dormir.png",
    "/exercises/celular-longe-da-cama.png"
  ],
  emotion: [
    "/exercises/gratidao-rapida.png",
    "/exercises/checkin-emocional-guiado.png",
    "/exercises/diario-3-linhas.png"
  ],
  movement: [
    "/exercises/gratidao-rapida.png",
    "/exercises/ritual-sono-sem-tela.png",
    "/exercises/checkin-emocional-guiado.png"
  ]
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function titleCaseCategory(category: string) {
  const labels: Record<string, string> = {
    HOME_FUNCTIONAL: "Funcional em Casa",
    JUMP_ROPE: "Pular Corda",
    LOW_IMPACT_CARDIO: "Cardio Leve",
    MOBILITY: "Mobilidade",
    SHADOW_BOXING: "Luta Sombra",
    STRETCHING: "Alongamentos Regionais",
    WALKING: "Caminhada",
    WORK_BREAK: "Pausas de Trabalho / Telas",
    YOGA: "Yoga Fisico / Instrucional",
    CLASSIC_MISSION: "Missoes Classicas"
  };
  return labels[category] || category;
}

function intensityLabel(value: string) {
  const labels: Record<string, string> = {
    VERY_LIGHT: "muito_leve",
    LIGHT: "leve",
    MODERATE: "moderada",
    MODERATE_PLUS: "moderada_plus"
  };
  return labels[value] || value.toLowerCase();
}

function durationFor(seed: ExerciseInstructionSeed) {
  if (seed.category === "STRETCHING") return 75;
  if (seed.category === "MOBILITY") return 150;
  if (seed.category === "YOGA") return 240;
  if (seed.category === "WALKING") return seed.title.includes("curta") ? 150 : 210;
  if (seed.category === "WORK_BREAK") return seed.durationSeconds && seed.durationSeconds <= 120 ? seed.durationSeconds : 90;
  if (["HOME_FUNCTIONAL", "LOW_IMPACT_CARDIO", "SHADOW_BOXING", "JUMP_ROPE"].includes(seed.category)) return 150;
  return seed.durationSeconds || 90;
}

function missionDuration(mission: ClassicMission) {
  const value = `${mission.title} ${mission.videoType}`.toLowerCase();
  if (value.includes("respiracao")) return 240;
  if (value.includes("yoga") || value.includes("mobilidade")) return 240;
  if (value.includes("caminhada") || value.includes("treino") || value.includes("fisica")) return 180;
  if (value.includes("sono") || value.includes("fechamento")) return 120;
  return 90;
}

function sceneFor(category: string, title: string, contentType: VideoSprintRecord["content_type"]) {
  const text = `${category} ${title}`.toLowerCase();
  if (contentType === "classic_mission" && (text.includes("sono") || text.includes("fechamento"))) return "Ambiente noturno calmo, luz quente, celular fora do alcance, composicao intima.";
  if (contentType === "classic_mission" && (text.includes("diario") || text.includes("gratidao") || text.includes("mapa"))) return "Ambiente intimo, close de rosto, maos e caderno, fundo suave e sem distracoes.";
  if (category === "WALKING" || text.includes("caminhada")) return "Externo leve: calcada tranquila, parque ou jardim simples com luz natural.";
  if (category === "WORK_BREAK" || text.includes("trabalho") || text.includes("foco") || text.includes("tarefa")) return "Mesa de trabalho organizada, luz de janela, objetos minimos e cadeira estavel.";
  if (category === "YOGA" || text.includes("yoga")) return "Espaco aberto e claro, tapete discreto, planta ao fundo e luz difusa.";
  if (["HOME_FUNCTIONAL", "LOW_IMPACT_CARDIO", "SHADOW_BOXING", "JUMP_ROPE"].includes(category)) return "Sala ampla, roupa casual, paredes claras, tapete ou chao liso, sem estetica de academia.";
  return "Sala clara, tapete claro, luz natural suave, fundo off-white ou verde-musgo muito suave.";
}

function positionFor(title: string, category: string) {
  const text = `${title} ${category}`.toLowerCase();
  if (text.includes("caminhada")) return ["em pe", "caminhando"];
  if (text.includes("deitado")) return ["deitado"];
  if (text.includes("chao") || text.includes("crianca") || text.includes("pombo")) return ["no chao"];
  if (text.includes("cadeira") || text.includes("sentado") || text.includes("mesa") || text.includes("diario")) return ["sentado"];
  if (text.includes("parede") || text.includes("porta") || text.includes("em pe")) return ["em pe"];
  if (category === "WORK_BREAK") return ["sentado", "em pe"];
  return ["em pe", "sentado"];
}

function tagsFor(title: string, category: string, extra: string[] = []) {
  const stopwords = new Set(["com", "dos", "das", "para", "leve", "quando", "voce", "quiser", "uma", "seu", "sua", "que", "por"]);
  const base = [category.toLowerCase(), ...extra, ...slugify(title).split("-")];
  const useful = base.filter((tag) => tag.length > 2 && !stopwords.has(tag));
  return Array.from(new Set(["pausa", ...useful])).slice(0, 12);
}

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = Math.floor(totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function gentleStep(step: string) {
  const clean = step.replace(/\.$/, "");
  if (/^Faca /i.test(clean)) return clean.replace(/^Faca /i, "No seu ritmo, faca ") + ".";
  if (/^Prepare /i.test(clean)) return clean.replace(/^Prepare /i, "Se quiser, prepare ") + ".";
  if (/^Pare /i.test(clean)) return clean.replace(/^Pare /i, "Voce pode parar ") + ".";
  if (/^Mantenha /i.test(clean)) return `Se for confortavel, ${clean.charAt(0).toLowerCase()}${clean.slice(1)}.`;
  if (/^Respire /i.test(clean)) return clean + ", sem pressa.";
  return `${clean}.`;
}

function narrationFor(input: {
  title: string;
  benefit: string;
  equipment: string;
  steps: string[];
  duration: number;
}) {
  const executionEnd = Math.max(input.duration - 11, 40);
  const executionLines = input.steps.slice(0, 5).map(gentleStep);
  const executionText = executionLines.join(" ");
  return [
    `[00:00 - 00:05] Que bom que voce parou um momento para ${input.title}. Pode ser agora, do jeito que voce esta.`,
    `[00:06 - 00:15] ${input.benefit}`,
    `[00:16 - 00:25] Voce precisa de ${input.equipment.toLowerCase()}. Nao precisa ser perfeito; so o que for confortavel hoje.`,
    `[00:26 - ${formatTime(executionEnd)}] ${executionText} Se precisar, diminua a amplitude ou pause por alguns segundos.`,
    `[${formatTime(Math.max(input.duration - 10, 30))} - ${formatTime(input.duration)}] Isso. Voce acabou de fazer algo por voce. Fica dois segundos em silencio e deixa a tela clarear devagar.`
  ].join("\n");
}

function subtitleCues(title: string, benefit: string, duration: number) {
  return [
    { start: "00:00", end: "00:05", text: title },
    { start: "00:06", end: "00:15", text: benefit },
    { start: "00:16", end: "00:25", text: "Nao precisa ser perfeito. So o que for confortavel." },
    { start: "00:26", end: formatTime(Math.max(duration - 11, 40)), text: "No seu ritmo, com respiracao tranquila." },
    { start: formatTime(Math.max(duration - 10, 30)), end: formatTime(duration), text: "Voce se cuidou hoje." }
  ];
}

function shotPlanFor(category: string, title: string, duration: number) {
  const executionEnd = formatTime(Math.max(duration - 11, 40));
  return [
    "00:00-00:05: plano medio, titulo em tela e movimento minimo de chegada.",
    "00:06-00:15: texto curto de beneficio com demonstracao suave ou gesto preparatorio.",
    "00:16-00:25: close em apoio, cadeira, tapete ou objeto necessario; validacao emocional em voz.",
    `00:26-${executionEnd}: execucao guiada com camera estatica, cortes suaves e close lateral quando houver alinhamento postural.`,
    `${formatTime(Math.max(duration - 10, 30))}-${formatTime(duration)}: encerramento com frase de reconhecimento, 2s de silencio e fade para off-white.`
  ];
}

function approvalChecklist(status: VideoSprintRecord["approval_status"]) {
  const needsCatalog = status === "metadata_ready_needs_app_catalog_entry";
  return {
    duracao_dentro_do_range: "done",
    abertura_com_nome_em_audio_e_texto: "pending",
    beneficio_claro_ate_10s: "done",
    narracao_gentil_sem_jargao: "done",
    legendas_presentes: "pending",
    imagem_1080p: "pending",
    audio_limpo: "pending",
    musica_sem_sobrepor_narracao: "pending",
    encerramento_com_reconhecimento: "done",
    fade_suave: "pending",
    metadados_json_salvos: "done",
    thumbnail_gerada: "done",
    mp4_h264_exportado: "blocked",
    catalogo_do_app_mapeado: needsCatalog ? "pending" : "done"
  } satisfies Record<string, "done" | "pending" | "blocked">;
}

async function exists(filePath: string) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function publicFileSize(url: string | null) {
  if (!url) return 0;
  try {
    const stats = await fs.stat(path.join(publicDir, url.replace(/^\//, "")));
    return stats.size;
  } catch {
    return 0;
  }
}

async function isPremiumCharacterAsset(url: string | null) {
  return (await publicFileSize(url)) > 500_000;
}

async function characterReferencesFor(category: string, title: string, contentType: VideoSprintRecord["content_type"]) {
  const text = `${category} ${title}`.toLowerCase();
  let candidates = premiumCharacterReferences.default;
  if (text.includes("sono") || text.includes("dormir") || text.includes("noite") || text.includes("cama")) {
    candidates = premiumCharacterReferences.sleep;
  } else if (text.includes("trabalho") || text.includes("foco") || text.includes("mesa") || text.includes("tarefa") || text.includes("organizacao")) {
    candidates = premiumCharacterReferences.work;
  } else if (text.includes("diario") || text.includes("gratidao") || text.includes("humor") || text.includes("mapa") || contentType === "classic_mission") {
    candidates = premiumCharacterReferences.emotion;
  } else if (physicalCategories.has(category)) {
    candidates = premiumCharacterReferences.movement;
  }

  const existing: string[] = [];
  for (const url of candidates) {
    if (await exists(path.join(publicDir, url.replace(/^\//, "")))) existing.push(url);
  }
  return existing;
}

async function imageUrlsFor(imageKey: string | null) {
  if (!imageKey) return { sourceImageUrl: null, frameUrls: [] as string[], sourceImagePath: null as string | null };
  const sourceImagePath = path.join(publicDir, "exercises", `${imageKey}.png`);
  const sourceImageUrl = await exists(sourceImagePath) ? `/exercises/${imageKey}.png` : null;
  const frameUrls: string[] = [];
  for (let index = 1; index <= 5; index += 1) {
    const framePath = path.join(publicDir, "exercises", `${imageKey}-${index}.png`);
    if (await exists(framePath)) frameUrls.push(`/exercises/${imageKey}-${index}.png`);
  }
  return { sourceImageUrl, frameUrls, sourceImagePath: sourceImageUrl ? sourceImagePath : null };
}

function productionPromptFor(record: Omit<VideoSprintRecord, "production_prompt">) {
  return [
    `Crie um video vertical 9:16 em 1080x1920 para "${record.title}".`,
    `Use obrigatoriamente a mesma personagem recorrente das referencias aprovadas: ${record.character_reference_urls.join(", ")}.`,
    record.source_image_role === "pose_reference"
      ? `A imagem da ficha (${record.source_image_url || "sem imagem"}) e apenas referencia tecnica de pose/composicao; nao reproduza o visual simplificado como personagem final.`
      : record.source_image_role === "character_reference"
        ? `A imagem da ficha tambem pode ser usada como referencia de personagem: ${record.source_image_url}.`
        : "Nao use placeholder visual; quando faltar imagem da ficha, use as referencias premium da personagem como base.",
    `Cenario: ${record.scene}`,
    `Tom: humano, acolhedor, sem julgamento, sem performance e sem estetica fitness agressiva.`,
    `Personagem: mulher adulta com cabelo escuro preso em coque, expressao calma, blusa azul-marinho, estilo premium semi-realista/fotografico consistente com as referencias anteriores.`,
    `Camera: ${record.camera_style.join("; ")}.`,
    `Duracao alvo: ${record.duration_seconds}s. Conteudo: ${record.content_type === "classic_mission" ? "missao classica narrativa" : "corpo e movimento instrucional"}.`,
    `Narracao: use exatamente a estrutura com abertura, beneficio, preparacao, execucao guiada e encerramento presentes no campo narration_script.`,
    `Legendas: sempre presentes, fonte limpa e contraste acessivel.`,
    `Nao usar: "Vamos la!", "Arrasa!", "Forca!", "Sente a queimacao", "Doi pra crescer".`
  ].join(" ");
}

function sourceRoleNote(role: VideoSprintRecord["source_image_role"]) {
  if (role === "character_reference") return "Imagem da ficha pode servir como referencia visual da personagem.";
  if (role === "pose_reference") return "Imagem simplificada da ficha deve servir apenas como referencia tecnica de pose; a personagem final deve vir das referencias premium.";
  return "Sem imagem de ficha equivalente; a personagem final deve vir das referencias premium.";
}

async function physicalRecord(seed: ExerciseInstructionSeed): Promise<VideoSprintRecord> {
  const duration = durationFor(seed);
  const slug = seed.slug;
  const images = await imageUrlsFor(seed.imageKey);
  const characterReferenceUrls = await characterReferencesFor(seed.category, seed.title, "body_movement");
  const sourceImageIsCharacter = await isPremiumCharacterAsset(images.sourceImageUrl);
  const sourceImageRole: VideoSprintRecord["source_image_role"] = images.sourceImageUrl
    ? sourceImageIsCharacter ? "character_reference" : "pose_reference"
    : "missing";
  const visualReferenceUrl = sourceImageIsCharacter ? images.sourceImageUrl : characterReferenceUrls[0] || images.sourceImageUrl;
  const benefit = seed.objective.replace(/\.$/, ".");
  const status: VideoSprintRecord["approval_status"] = "script_ready_needs_final_video";
  const partial = {
    slug,
    title: seed.title,
    content_type: "body_movement" as const,
    app_instruction_slug: seed.slug,
    category: seed.category,
    category_label: titleCaseCategory(seed.category),
    duration_seconds: duration,
    video_url: `/videos/${slug}.mp4`,
    thumbnail_url: `/videos/thumbs/${slug}.jpg`,
    visual_reference_url: visualReferenceUrl,
    source_image_url: images.sourceImageUrl,
    source_image_role: sourceImageRole,
    source_frame_urls: images.frameUrls,
    character_reference_urls: characterReferenceUrls,
    tags: tagsFor(seed.title, seed.category, seed.recommendedWhen.map(slugify).flatMap((tag) => tag.split("-")).slice(0, 4)),
    intensity: intensityLabel(seed.intensity),
    equipment: seed.equipment,
    position: positionFor(seed.title, seed.category),
    benefit_primary: benefit,
    batch_wave: priorityTitles.has(seed.title) ? 1 : seed.category === "STRETCHING" ? 3 : 2,
    scene: sceneFor(seed.category, seed.title, "body_movement" as const),
    camera_style: ["plano medio ou plano americano", "vista lateral para alinhamento", "close em maos, pes ou coluna quando necessario", "cortes suaves sem pressa"],
    narration_script: narrationFor({
      title: seed.title,
      benefit,
      equipment: seed.equipment || "nenhum equipamento",
      steps: seed.howToSteps,
      duration
    }),
    shot_plan: shotPlanFor(seed.category, seed.title, duration),
    subtitle_cues: subtitleCues(seed.title, benefit, duration),
    approval_status: status,
    approval_checklist: approvalChecklist(status),
    notes: [
      "Criado a partir da ficha oficial do app.",
      sourceRoleNote(sourceImageRole),
      "MP4 final exige filmagem, animacao ou renderizador externo antes de publicacao."
    ]
  };
  return {
    ...partial,
    production_prompt: productionPromptFor(partial)
  };
}

async function missionRecord(mission: ClassicMission, seedBySlug: Map<string, ExerciseInstructionSeed>): Promise<VideoSprintRecord> {
  const mapped = mission.mappedInstructionSlug ? seedBySlug.get(mission.mappedInstructionSlug) : undefined;
  const duration = missionDuration(mission);
  const slug = `missao-${slugify(mission.title)}`;
  const images = await imageUrlsFor(mapped?.imageKey || null);
  const characterReferenceUrls = await characterReferencesFor("CLASSIC_MISSION", `${mission.title} ${mission.videoType}`, "classic_mission");
  const sourceImageIsCharacter = await isPremiumCharacterAsset(images.sourceImageUrl);
  const sourceImageRole: VideoSprintRecord["source_image_role"] = images.sourceImageUrl
    ? sourceImageIsCharacter ? "character_reference" : "pose_reference"
    : "missing";
  const visualReferenceUrl = sourceImageIsCharacter ? images.sourceImageUrl : characterReferenceUrls[0] || images.sourceImageUrl;
  const benefit = mapped?.objective || `Guiar a pratica "${mission.title}" de forma simples, humana e segura.`;
  const category = "CLASSIC_MISSION";
  const status: VideoSprintRecord["approval_status"] = mapped ? "script_ready_needs_final_video" : "metadata_ready_needs_app_catalog_entry";
  const steps = mapped?.howToSteps || [
    "Chegue ao ambiente escolhido sem pressa",
    "Nomeie o que voce pretende cuidar nesta pausa",
    "Siga a pratica de forma pequena e possivel",
    "Perceba o corpo e o ambiente antes de terminar",
    "Finalize escolhendo uma proxima acao simples"
  ];
  const partial = {
    slug,
    title: mission.title,
    content_type: "classic_mission" as const,
    app_instruction_slug: mapped?.slug || null,
    category,
    category_label: titleCaseCategory(category),
    duration_seconds: duration,
    video_url: `/videos/${slug}.mp4`,
    thumbnail_url: `/videos/thumbs/${slug}.jpg`,
    visual_reference_url: visualReferenceUrl,
    source_image_url: images.sourceImageUrl,
    source_image_role: sourceImageRole,
    source_frame_urls: images.frameUrls,
    character_reference_urls: characterReferenceUrls,
    tags: tagsFor(mission.title, "classic_mission", [slugify(mission.videoType)]),
    intensity: mapped ? intensityLabel(mapped.intensity) : "muito_leve",
    equipment: mapped?.equipment || (mission.videoType.toLowerCase().includes("caderno") ? "Caderno ou papel" : "Nenhum"),
    position: positionFor(mission.title, category),
    benefit_primary: benefit,
    batch_wave: priorityTitles.has(mission.title) ? 1 : 4,
    scene: sceneFor(category, `${mission.title} ${mission.videoType}`, "classic_mission" as const),
    camera_style: ["plano medio com presenca humana", "close em gesto natural", "camera estatica ou pan suave", "fundo levemente fora de foco"],
    narration_script: narrationFor({
      title: mission.title,
      benefit,
      equipment: mapped?.equipment || "nenhum equipamento especial",
      steps,
      duration
    }),
    shot_plan: shotPlanFor(category, mission.title, duration),
    subtitle_cues: subtitleCues(mission.title, benefit, duration),
    approval_status: status,
    approval_checklist: approvalChecklist(status),
    notes: [
      `Missao classica #${mission.number}: ${mission.videoType}.`,
      mapped ? `Mapeada para ficha existente: ${mapped.slug}.` : "Sem ficha equivalente no catalogo atual; criar entrada ou manter como midia editorial.",
      sourceRoleNote(sourceImageRole),
      "MP4 final exige filmagem, animacao ou renderizador externo antes de publicacao."
    ]
  };
  return {
    ...partial,
    production_prompt: productionPromptFor(partial)
  };
}

function escapeXml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function wrapText(value: string, max = 24) {
  const words = value.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    if (`${current} ${word}`.trim().length > max && current) {
      lines.push(current);
      current = word;
    } else {
      current = `${current} ${word}`.trim();
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 4);
}

function thumbBaseSvg(record: VideoSprintRecord) {
  const titleLines = wrapText(record.title);
  const titleSvg = titleLines
    .map((line, index) => `<text x="90" y="${1180 + index * 82}" font-size="68" font-weight="800" fill="#14213d">${escapeXml(line)}</text>`)
    .join("");
  return `
  <svg width="1080" height="1920" xmlns="http://www.w3.org/2000/svg">
    <rect width="1080" height="1920" fill="#FAFAF8"/>
    <rect x="52" y="52" width="976" height="1816" rx="56" fill="#F2F6ED" stroke="#D7E5D0" stroke-width="4"/>
    <rect x="90" y="120" width="900" height="820" rx="42" fill="#FFFFFF" opacity="0.88"/>
    <text x="90" y="1040" font-size="34" font-weight="800" fill="#52796f">${escapeXml(record.category_label.toUpperCase())}</text>
    ${titleSvg}
    <text x="90" y="1560" font-size="34" font-weight="700" fill="#4a5568">Pausa AI | Onda ${record.batch_wave} | ${record.duration_seconds}s</text>
    <text x="90" y="1630" font-size="34" font-weight="700" fill="#4a5568">${escapeXml(record.intensity.replace(/_/g, " "))}</text>
    <circle cx="900" cy="1650" r="78" fill="#CAD2C5"/>
    <path d="M875 1610 L875 1690 L940 1650 Z" fill="#14213d"/>
  </svg>`;
}

async function generateThumbnail(record: VideoSprintRecord) {
  const outputPath = path.join(thumbsDir, `${record.slug}.jpg`);
  const base = sharp(Buffer.from(thumbBaseSvg(record)));
  const composites: sharp.OverlayOptions[] = [];
  if (record.visual_reference_url) {
    const sourcePath = path.join(publicDir, record.visual_reference_url.replace(/^\//, ""));
    if (await exists(sourcePath)) {
      const imageBuffer = await sharp(sourcePath)
        .resize(860, 720, { fit: "cover", position: "center" })
        .png()
        .toBuffer();
      composites.push({ input: imageBuffer, left: 110, top: 170 });
    }
  }
  await base
    .composite(composites)
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(outputPath);
}

function csvEscape(value: unknown) {
  const text = Array.isArray(value) ? value.join("|") : String(value ?? "");
  return `"${text.replace(/"/g, '""')}"`;
}

function waveSummary(records: VideoSprintRecord[]) {
  const waves = new Map<number, VideoSprintRecord[]>();
  for (const record of records) {
    const current = waves.get(record.batch_wave) || [];
    current.push(record);
    waves.set(record.batch_wave, current);
  }
  return Array.from(waves.entries())
    .sort(([a], [b]) => a - b)
    .map(([wave, items]) => ({ wave, count: items.length, titles: items.slice(0, 12).map((item) => item.title) }));
}

function categorySummary(records: VideoSprintRecord[]) {
  const categories = new Map<string, number>();
  for (const record of records) categories.set(record.category_label, (categories.get(record.category_label) || 0) + 1);
  return Array.from(categories.entries()).sort((a, b) => a[0].localeCompare(b[0])).map(([category, count]) => ({ category, count }));
}

async function writeOutputs(records: VideoSprintRecord[]) {
  await fs.rm(metadataDir, { recursive: true, force: true });
  await fs.mkdir(metadataDir, { recursive: true });
  await fs.mkdir(thumbsDir, { recursive: true });
  await fs.mkdir(docsDir, { recursive: true });

  for (const record of records) {
    await fs.writeFile(path.join(metadataDir, `${record.slug}.json`), `${JSON.stringify(record, null, 2)}\n`, "utf8");
    await generateThumbnail(record);
  }

  const index = {
    generated_at: new Date().toISOString(),
    project: "Pausa AI",
    total_videos: records.length,
    body_movement_count: records.filter((record) => record.content_type === "body_movement").length,
    classic_mission_count: records.filter((record) => record.content_type === "classic_mission").length,
    visual_policy: "usar_personagem_premium_recorrente__assets_simplificados_apenas_como_referencia_de_pose",
    source_image_roles: {
      character_reference: records.filter((record) => record.source_image_role === "character_reference").length,
      pose_reference: records.filter((record) => record.source_image_role === "pose_reference").length,
      missing: records.filter((record) => record.source_image_role === "missing").length
    },
    waves: waveSummary(records),
    categories: categorySummary(records),
    status: "roteiros_metadados_thumbnails_prontos__mp4_final_pendente"
  };

  await fs.writeFile(path.join(videoDir, "video-manifest.json"), `${JSON.stringify(records, null, 2)}\n`, "utf8");
  await fs.writeFile(path.join(videoDir, "video-production-index.json"), `${JSON.stringify(index, null, 2)}\n`, "utf8");

  const csvRows = [
    ["slug", "title", "content_type", "category", "batch_wave", "duration_seconds", "approval_status", "app_instruction_slug", "source_image_role", "visual_reference_url", "character_reference_urls", "video_url", "thumbnail_url"].map(csvEscape).join(","),
    ...records.map((record) => [
      record.slug,
      record.title,
      record.content_type,
      record.category_label,
      record.batch_wave,
      record.duration_seconds,
      record.approval_status,
      record.app_instruction_slug || "",
      record.source_image_role,
      record.visual_reference_url || "",
      record.character_reference_urls,
      record.video_url,
      record.thumbnail_url
    ].map(csvEscape).join(","))
  ].join("\n");
  await fs.writeFile(path.join(docsDir, "checklist-videos.csv"), `${csvRows}\n`, "utf8");

  const scriptsMd = [
    "# Roteiros do sprint de videos Pausa AI",
    "",
    `Total: ${records.length} videos. Status: roteiros, metadados e thumbnails prontos; MP4 final pendente de filmagem/render.`,
    "",
    ...records.flatMap((record) => [
      `## ${record.title}`,
      "",
      `- Slug: \`${record.slug}\``,
      `- Tipo: ${record.content_type}`,
      `- Categoria: ${record.category_label}`,
      `- Onda: ${record.batch_wave}`,
      `- Duracao alvo: ${record.duration_seconds}s`,
      `- Video URL alvo: \`${record.video_url}\``,
      `- Thumbnail: \`${record.thumbnail_url}\``,
      `- Referencia visual principal: \`${record.visual_reference_url || "pendente"}\``,
      `- Papel da imagem da ficha: ${record.source_image_role}`,
      `- Referencias da personagem: ${record.character_reference_urls.map((url) => `\`${url}\``).join(", ")}`,
      "",
      "### Narracao",
      "",
      "```text",
      record.narration_script,
      "```",
      "",
      "### Plano de tomada",
      "",
      ...record.shot_plan.map((shot) => `- ${shot}`),
      "",
      "### Prompt de producao",
      "",
      record.production_prompt,
      ""
    ])
  ].join("\n");
  await fs.writeFile(path.join(docsDir, "roteiros.md"), `${scriptsMd}\n`, "utf8");

  const summaryMd = [
    "# Sprint de videos Pausa AI",
    "",
    `Gerado em ${index.generated_at}.`,
    "",
    "## Entregas criadas",
    "",
    "- Manifesto mestre: `public/videos/video-manifest.json`",
    "- Indice do lote: `public/videos/video-production-index.json`",
    "- Metadados individuais: `public/videos/metadata/*.json`",
    "- Thumbnails verticais: `public/videos/thumbs/*.jpg`",
    "- Roteiros completos: `docs/video-production/roteiros.md`",
    "- Checklist CSV: `docs/video-production/checklist-videos.csv`",
    "",
    "## Regra visual",
    "",
    "Os videos devem usar a personagem premium recorrente das imagens geradas anteriormente. Assets simplificados das fichas continuam no manifesto apenas como referencia tecnica de pose/composicao, nunca como personagem final.",
    "",
    "## Contagem",
    "",
    `- Total: ${records.length}`,
    `- Corpo & Movimento: ${index.body_movement_count}`,
    `- Missoes Classicas: ${index.classic_mission_count}`,
    `- Imagem da ficha como personagem premium: ${index.source_image_roles.character_reference}`,
    `- Imagem da ficha apenas como pose: ${index.source_image_roles.pose_reference}`,
    `- Sem imagem de ficha, usando referencia premium: ${index.source_image_roles.missing}`,
    "",
    "## Ondas",
    "",
    ...index.waves.map((wave) => `- Onda ${wave.wave}: ${wave.count} videos`),
    "",
    "## Categorias",
    "",
    ...index.categories.map((item) => `- ${item.category}: ${item.count}`),
    "",
    "## Status editorial",
    "",
    "Este sprint deixa prontos roteiros, metadados, URLs publicas planejadas e thumbnails. O status de publicacao continua pendente para os arquivos MP4 finais, porque a filmagem humana/demonstracao real e a exportacao H.264 precisam ser feitas fora deste gerador ou por um renderizador de video conectado ao pipeline.",
    "",
    "## Regra de aprovacao",
    "",
    "Nenhum item deve ser marcado como `pronto para publicacao` ate que o MP4 final exista em `public/videos`, com narracao, legendas, audio limpo, fade e validacao do checklist."
  ].join("\n");
  await fs.writeFile(path.join(docsDir, "resumo-sprint.md"), `${summaryMd}\n`, "utf8");
}

async function main() {
  const seedBySlug = new Map(exerciseInstructionSeeds.map((seed) => [seed.slug, seed]));
  const physicalSeeds = exerciseInstructionSeeds.filter((seed) => physicalCategories.has(seed.category));
  const physicalRecords = await Promise.all(physicalSeeds.map(physicalRecord));
  const missionRecords = await Promise.all(classicMissions.map((mission) => missionRecord(mission, seedBySlug)));
  const records = [...physicalRecords, ...missionRecords].sort((a, b) => a.batch_wave - b.batch_wave || a.content_type.localeCompare(b.content_type) || a.title.localeCompare(b.title));

  if (physicalRecords.length !== 116) {
    throw new Error(`Expected 116 Corpo & Movimento videos, got ${physicalRecords.length}.`);
  }
  if (missionRecords.length !== 22) {
    throw new Error(`Expected 22 classic mission videos, got ${missionRecords.length}.`);
  }
  if (records.length !== 138) {
    throw new Error(`Expected 138 total videos, got ${records.length}.`);
  }

  await writeOutputs(records);
  console.log(JSON.stringify({
    total: records.length,
    bodyMovement: physicalRecords.length,
    classicMissions: missionRecords.length,
    manifest: "public/videos/video-manifest.json",
    index: "public/videos/video-production-index.json",
    thumbnails: "public/videos/thumbs",
    docs: "docs/video-production"
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
