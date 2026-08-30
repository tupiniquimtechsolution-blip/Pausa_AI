import fs from "node:fs/promises";
import path from "node:path";

type VideoRecord = {
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
  approval_status: string;
  approval_checklist: Record<string, string>;
  notes: string[];
};

type FramePlan = {
  slug: string;
  title: string;
  video_url: string;
  duration_seconds: number;
  required_frame_count: number;
  existing_premium_frame_urls: string[];
  existing_generated_frame_urls: string[];
  missing_frame_count: number;
  frame_targets: Array<{
    frame: number;
    target_url: string;
    target_path: string;
    role: string;
    visual_prompt: string;
  }>;
};

const root = process.cwd();
const publicDir = path.join(root, "public");
const videosDir = path.join(publicDir, "videos");
const framesDir = path.join(videosDir, "frames");
const docsDir = path.join(root, "docs", "video-production");

function requiredFrameCount(record: Pick<VideoRecord, "title" | "duration_seconds" | "category" | "content_type">) {
  const movementMission = /yoga|mobilidade|caminhada|treino|alongamento|respiracao|respiração/i.test(record.title);
  if (record.content_type === "classic_mission") return movementMission ? 8 : 6;
  if (record.category === "YOGA") return 12;
  if (["WALKING", "LOW_IMPACT_CARDIO", "HOME_FUNCTIONAL", "SHADOW_BOXING", "JUMP_ROPE"].includes(record.category)) return 12;
  if (["STRETCHING", "MOBILITY", "WORK_BREAK"].includes(record.category)) return 8;
  return 6;
}

function frameRole(frame: number, total: number) {
  if (frame === 1) return "abertura/preparacao";
  if (frame === total) return "encerramento/reconhecimento";
  if (frame === 2) return "execucao principal";
  if (frame === 3 && total >= 4) return "detalhe de alinhamento";
  return "variacao de execucao";
}

async function existsPublicUrl(url: string) {
  try {
    await fs.access(path.join(publicDir, url.replace(/^\//, "")));
    return true;
  } catch {
    return false;
  }
}

async function publicFileSize(url: string) {
  try {
    return (await fs.stat(path.join(publicDir, url.replace(/^\//, "")))).size;
  } catch {
    return 0;
  }
}

async function existingPremiumFrames(record: VideoRecord) {
  if (record.source_image_role !== "character_reference") return [];
  const candidates = record.source_frame_urls.length ? record.source_frame_urls : record.source_image_url ? [record.source_image_url] : [];
  const existing: string[] = [];
  for (const url of candidates) {
    if ((await existsPublicUrl(url)) && (await publicFileSize(url)) > 500_000) {
      existing.push(url);
    }
  }
  return existing;
}

function generatedFrame(record: VideoRecord, frame: number) {
  const fileName = `${record.slug}-${String(frame).padStart(2, "0")}.jpg`;
  return {
    fileName,
    targetPath: path.join("public", "videos", "frames", record.slug, fileName),
    targetUrl: `/videos/frames/${record.slug}/${fileName}`
  };
}

function visualPrompt(record: VideoRecord, frame: number, total: number) {
  const role = frameRole(frame, total);
  const poseReference = record.source_image_role === "pose_reference" && record.source_image_url
    ? `Use ${record.source_image_url} only as pose/composition guidance; do not copy its simplified placeholder style.`
    : "No simplified placeholder should appear in the final image.";
  const refs = record.character_reference_urls.join(", ");
  return [
    `Create frame ${frame} of ${total} for the Pausa AI vertical instructional video "${record.title}".`,
    `Frame role: ${role}.`,
    `Use the recurring approved Pausa AI character from these references: ${refs}.`,
    `Character continuity: adult woman, dark hair in a loose bun, calm expression, navy-blue top or equivalent Pausa AI wardrobe, warm approachable presence.`,
    poseReference,
    `Scene: ${record.scene}`,
    `Action/benefit: ${record.benefit_primary}`,
    `Position: ${record.position.join(", ")}. Equipment: ${record.equipment}. Intensity: ${record.intensity}.`,
    `Style: premium semi-realistic editorial wellness image, clean natural lighting, off-white/sage/eucalyptus palette, no gym-aggressive look.`,
    "Composition: vertical 9:16 safe crop, full body when movement/posture matters, medium shot for behavioral missions, leave clean space for captions.",
    "Avoid: text, logo, watermark, extra characters, distorted hands, impossible anatomy, medical/clinical look, fitness hype, neon colors."
  ].join(" ");
}

async function buildPlan(records: VideoRecord[]) {
  const plans: FramePlan[] = [];
  for (const record of records) {
    const required = requiredFrameCount(record);
    const premiumCandidates = (await existingPremiumFrames(record)).slice(0, required);
    const premiumFrames: string[] = [];
    const generatedFrames: string[] = [];
    const targets: FramePlan["frame_targets"] = [];

    for (let frame = 1; frame <= required; frame += 1) {
      const { targetPath, targetUrl } = generatedFrame(record, frame);
      if (await existsPublicUrl(targetUrl)) {
        generatedFrames.push(targetUrl);
        continue;
      }
      const premiumFrame = premiumCandidates[frame - 1];
      if (premiumFrame) {
        premiumFrames.push(premiumFrame);
        continue;
      }
      targets.push({
        frame,
        target_url: targetUrl,
        target_path: targetPath,
        role: frameRole(frame, required),
        visual_prompt: visualPrompt(record, frame, required)
      });
    }
    plans.push({
      slug: record.slug,
      title: record.title,
      video_url: record.video_url,
      duration_seconds: record.duration_seconds,
      required_frame_count: required,
      existing_premium_frame_urls: premiumFrames,
      existing_generated_frame_urls: generatedFrames,
      missing_frame_count: targets.length,
      frame_targets: targets
    });
  }
  return plans;
}

function csvEscape(value: unknown) {
  const text = Array.isArray(value) ? value.join("|") : String(value ?? "");
  return `"${text.replace(/"/g, '""')}"`;
}

async function main() {
  await fs.mkdir(framesDir, { recursive: true });
  await fs.mkdir(docsDir, { recursive: true });

  const manifestPath = path.join(videosDir, "video-manifest.json");
  const records = JSON.parse(await fs.readFile(manifestPath, "utf8")) as VideoRecord[];
  const plans = await buildPlan(records);
  const totalRequired = plans.reduce((sum, item) => sum + item.required_frame_count, 0);
  const totalExisting = plans.reduce((sum, item) => sum + item.existing_premium_frame_urls.length + item.existing_generated_frame_urls.length, 0);
  const totalMissing = plans.reduce((sum, item) => sum + item.missing_frame_count, 0);

  for (const plan of plans) {
    await fs.mkdir(path.join(framesDir, plan.slug), { recursive: true });
  }

  const summary = {
    generated_at: new Date().toISOString(),
    total_videos: plans.length,
    total_required_frames: totalRequired,
    existing_premium_frames: totalExisting,
    missing_premium_frames: totalMissing,
    frame_count_distribution: plans.reduce<Record<string, number>>((acc, item) => {
      acc[String(item.required_frame_count)] = (acc[String(item.required_frame_count)] || 0) + 1;
      return acc;
    }, {}),
    ready_without_generation: plans.filter((item) => item.missing_frame_count === 0).length,
    needs_generation: plans.filter((item) => item.missing_frame_count > 0).length
  };

  await fs.writeFile(path.join(videosDir, "frame-production-plan.json"), `${JSON.stringify({ summary, videos: plans }, null, 2)}\n`, "utf8");

  const missingFrames = plans.flatMap((plan) =>
    plan.frame_targets.map((frame) => ({
      slug: plan.slug,
      title: plan.title,
      duration_seconds: plan.duration_seconds,
      required_frame_count: plan.required_frame_count,
      ...frame
    }))
  );
  await fs.writeFile(path.join(docsDir, "missing-frame-prompts.jsonl"), missingFrames.map((item) => JSON.stringify(item)).join("\n") + "\n", "utf8");

  const csvRows = [
    ["slug", "title", "duration_seconds", "required_frame_count", "missing_frame_count", "existing_premium_frame_urls", "existing_generated_frame_urls", "video_url"].map(csvEscape).join(","),
    ...plans.map((plan) => [
      plan.slug,
      plan.title,
      plan.duration_seconds,
      plan.required_frame_count,
      plan.missing_frame_count,
      plan.existing_premium_frame_urls,
      plan.existing_generated_frame_urls,
      plan.video_url
    ].map(csvEscape).join(","))
  ].join("\n");
  await fs.writeFile(path.join(docsDir, "frame-production-plan.csv"), `${csvRows}\n`, "utf8");

  const md = [
    "# Plano de frames para videos",
    "",
    `Total de videos: ${summary.total_videos}`,
    `Total de frames/fotos necessarios: ${summary.total_required_frames}`,
    `Frames premium existentes: ${summary.existing_premium_frames}`,
    `Frames premium faltantes: ${summary.missing_premium_frames}`,
    `Videos prontos sem gerar imagens: ${summary.ready_without_generation}`,
    `Videos que precisam de geracao: ${summary.needs_generation}`,
    "",
    "## Regra de contagem",
    "",
    "- Videos estaticos/rituais comportamentais: 6 fotos.",
    "- Alongamentos, mobilidade e pausas de trabalho: 8 fotos para continuidade de movimento.",
    "- Yoga: 12 fotos.",
    "- Caminhada, cardio, funcional, corda e luta sombra: 12 fotos.",
    "- Missoes classicas com movimento corporal/respiracao: 8 fotos.",
    "",
    "## Saidas",
    "",
    "- Plano JSON: `public/videos/frame-production-plan.json`",
    "- Prompts JSONL: `docs/video-production/missing-frame-prompts.jsonl`",
    "- CSV de acompanhamento: `docs/video-production/frame-production-plan.csv`",
    "- Pastas de destino: `public/videos/frames/<slug>/`",
    "",
    "## Observacao operacional",
    "",
    "As imagens faltantes devem ser geradas usando a personagem premium recorrente. A imagem simplificada de cada ficha pode orientar pose, mas nao deve aparecer como visual final."
  ].join("\n");
  await fs.writeFile(path.join(docsDir, "frame-production-plan.md"), `${md}\n`, "utf8");

  console.log(JSON.stringify(summary, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
