import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { exerciseInstructionSeeds, type ExerciseInstructionSeed } from "../lib/exercise-instruction-data";
import { walkingModes } from "../lib/walking";
import { yogaPracticeSeeds, yogaSequenceSeeds, type YogaPracticeSeed, type YogaSequenceSeed } from "../lib/yoga-data";

type MasterKey = "breathing" | "focus" | "functional" | "sleep" | "stretch" | "walking" | "yogaEnergy" | "yogaLight";
type AssetKind = "exercise" | "walking" | "yoga" | "video-frame";

type RenderJob = {
  kind: AssetKind;
  slug: string;
  title: string;
  master: MasterKey;
  target: string;
  index: number;
  width: number;
  height: number;
  format: "png" | "jpg";
};

type VideoPlan = {
  slug: string;
  title: string;
  required_frame_count: number;
};

type VideoRecord = {
  slug: string;
  title: string;
  category: string;
  category_label: string;
  content_type: string;
  tags: string[];
  scene: string;
  benefit_primary: string;
};

const root = process.cwd();
const publicDir = path.join(root, "public");
const masterDir = path.join(publicDir, "art-masters");
const docsDir = path.join(root, "docs", "art-production");
const includeVideoFrames = !process.argv.includes("--skip-video-frames");
const force = process.argv.includes("--force");

const masters: Record<MasterKey, string> = {
  breathing: path.join(masterDir, "human-breathing.png"),
  focus: path.join(masterDir, "human-focus.png"),
  functional: path.join(masterDir, "human-functional.png"),
  sleep: path.join(masterDir, "human-sleep.png"),
  stretch: path.join(masterDir, "human-stretch.png"),
  walking: path.join(masterDir, "human-walking.png"),
  yogaEnergy: path.join(masterDir, "human-yoga-energy.png"),
  yogaLight: path.join(masterDir, "human-yoga-light.png")
};

const exerciseImageSize = { width: 1280, height: 800 };
const videoFrameSize = { width: 1080, height: 1920 };
const cropPositions = ["attention", "centre", "entropy", "left", "right", "top", "bottom"] as const;

function slugText(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function hash(value: string) {
  let output = 2166136261;
  for (const char of value) {
    output ^= char.charCodeAt(0);
    output = Math.imul(output, 16777619) >>> 0;
  }
  return output;
}

function classifyFromText(text: string): MasterKey {
  const value = slugText(text);
  if (value.includes("respir") || value.includes("pranayama")) return "breathing";
  if (value.includes("sono") || value.includes("dormir") || value.includes("cama") || value.includes("noite") || value.includes("relaxamento") || value.includes("escaneamento")) return "sleep";
  if (value.includes("caminhada") || value.includes("andar")) return "walking";
  if (value.includes("agachamento") || value.includes("funcional") || value.includes("cardio") || value.includes("marcha") || value.includes("corda") || value.includes("luta") || value.includes("ativacao") || value.includes("energia")) return "functional";
  if (value.includes("foco") || value.includes("trabalho") || value.includes("organiza") || value.includes("diario") || value.includes("gratidao") || value.includes("humor") || value.includes("prioridade") || value.includes("tarefa") || value.includes("mesa") || value.includes("escrita")) return "focus";
  if (value.includes("yoga")) return value.includes("energia") || value.includes("funcional") || value.includes("montanha") || value.includes("guerreiro") ? "yogaEnergy" : "yogaLight";
  if (value.includes("alongamento") || value.includes("mobilidade") || value.includes("pescoco") || value.includes("ombro") || value.includes("coluna") || value.includes("quadril") || value.includes("tornozelo") || value.includes("panturrilha") || value.includes("peitoral") || value.includes("posterior")) return "stretch";
  return "focus";
}

function masterForExercise(seed: ExerciseInstructionSeed): MasterKey {
  if (seed.category === "YOGA" || slugText(`${seed.title} ${seed.imageKey}`).includes("yoga")) {
    return slugText(`${seed.title} ${seed.objective}`).includes("energia") ? "yogaEnergy" : "yogaLight";
  }
  return classifyFromText([
    seed.slug,
    seed.title,
    seed.area,
    seed.category,
    seed.instructionType,
    seed.shortDescription,
    seed.objective,
    seed.howToSteps.join(" ")
  ].join(" "));
}

function masterForYoga(item: YogaPracticeSeed | YogaSequenceSeed): MasterKey {
  return classifyFromText(JSON.stringify(item));
}

function frameCountForExisting(dir: string, slug: string, fallback: number) {
  return fs.readdir(dir)
    .then((files) => files.filter((file) => new RegExp(`^${slug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}-\\d+\\.png$`).test(file)).length || fallback)
    .catch(() => fallback);
}

function outputName(slug: string, index: number) {
  return index === 0 ? `${slug}.png` : `${slug}-${index}.png`;
}

async function exerciseJobs() {
  const dir = path.join(publicDir, "exercises");
  const jobs: RenderJob[] = [];
  const seen = new Set<string>();
  for (const seed of exerciseInstructionSeeds) {
    if (seen.has(seed.imageKey)) continue;
    seen.add(seed.imageKey);
    const count = await frameCountForExisting(dir, seed.imageKey, seed.category === "YOGA" || seed.area === "BODY_MOVEMENT" ? 5 : 3);
    for (let index = 0; index <= count; index += 1) {
      jobs.push({
        kind: "exercise",
        slug: seed.imageKey,
        title: seed.title,
        master: masterForExercise(seed),
        target: path.join(dir, outputName(seed.imageKey, index)),
        index,
        ...exerciseImageSize,
        format: "png"
      });
    }
  }
  return jobs;
}

async function walkingJobs() {
  const dir = path.join(publicDir, "walking");
  const jobs: RenderJob[] = [];
  for (const mode of walkingModes) {
    const count = await frameCountForExisting(dir, mode.id, 3);
    for (let index = 0; index <= count; index += 1) {
      jobs.push({
        kind: "walking",
        slug: mode.id,
        title: mode.title,
        master: "walking",
        target: path.join(dir, outputName(mode.id, index)),
        index,
        ...exerciseImageSize,
        format: "png"
      });
    }
  }
  return jobs;
}

async function yogaJobs() {
  const dir = path.join(publicDir, "yoga");
  const jobs: RenderJob[] = [];

  for (const practice of yogaPracticeSeeds) {
    jobs.push({
      kind: "yoga",
      slug: practice.imageKey,
      title: practice.title,
      master: masterForYoga(practice),
      target: path.join(dir, `${practice.imageKey}.png`),
      index: 0,
      ...exerciseImageSize,
      format: "png"
    });
    practice.imageSequenceKeys.forEach((key, frameIndex) => {
      jobs.push({
        kind: "yoga",
        slug: key,
        title: practice.title,
        master: masterForYoga(practice),
        target: path.join(dir, `${key}.png`),
        index: frameIndex + 1,
        ...exerciseImageSize,
        format: "png"
      });
    });
  }

  for (const sequence of yogaSequenceSeeds) {
    const master = masterForYoga(sequence);
    jobs.push({
      kind: "yoga",
      slug: sequence.imageKey,
      title: sequence.title,
      master,
      target: path.join(dir, `${sequence.imageKey}.png`),
      index: 0,
      ...exerciseImageSize,
      format: "png"
    });
    for (let index = 1; index <= 5; index += 1) {
      jobs.push({
        kind: "yoga",
        slug: `${sequence.imageKey}-${index}`,
        title: sequence.title,
        master,
        target: path.join(dir, `${sequence.imageKey}-${index}.png`),
        index,
        ...exerciseImageSize,
        format: "png"
      });
    }
  }

  return jobs;
}

async function videoFrameJobs() {
  if (!includeVideoFrames) return [];
  const planPath = path.join(publicDir, "videos", "frame-production-plan.json");
  const manifestPath = path.join(publicDir, "videos", "video-manifest.json");
  const plan = JSON.parse(await fs.readFile(planPath, "utf8")) as { videos: VideoPlan[] };
  const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8")) as VideoRecord[];
  const recordBySlug = new Map(manifest.map((record) => [record.slug, record]));
  const jobs: RenderJob[] = [];

  for (const item of plan.videos) {
    const record = recordBySlug.get(item.slug);
    const master = classifyFromText([
      item.slug,
      item.title,
      record?.category,
      record?.category_label,
      record?.content_type,
      record?.tags?.join(" "),
      record?.scene,
      record?.benefit_primary
    ].join(" "));
    for (let index = 1; index <= item.required_frame_count; index += 1) {
      const fileName = `${item.slug}-${String(index).padStart(2, "0")}.jpg`;
      jobs.push({
        kind: "video-frame",
        slug: item.slug,
        title: item.title,
        master,
        target: path.join(publicDir, "videos", "frames", item.slug, fileName),
        index,
        ...videoFrameSize,
        format: "jpg"
      });
    }
  }

  return jobs;
}

async function writeAsset(job: RenderJob) {
  if (!force && await isAlreadyHumanPhoto(job)) return false;
  const master = masters[job.master];
  await fs.access(master);
  await fs.mkdir(path.dirname(job.target), { recursive: true });
  const position = cropPositions[Math.abs(hash(`${job.slug}-${job.index}`)) % cropPositions.length];
  const zoom = 1 + (job.index % 5) * 0.018;
  const resizeWidth = Math.round(job.width * zoom);
  const resizeHeight = Math.round(job.height * zoom);
  const pipeline = sharp(master)
    .resize(resizeWidth, resizeHeight, { fit: "cover", position })
    .resize(job.width, job.height, { fit: "cover", position })
    .modulate({
      brightness: 1 + ((job.index % 3) - 1) * 0.012,
      saturation: 1 + ((job.index % 4) - 1.5) * 0.018
    });

  const tempPath = `${job.target}.${process.pid}.${Date.now()}.tmp`;
  if (job.format === "jpg") {
    await pipeline.jpeg({ quality: 92, mozjpeg: true }).toFile(tempPath);
  } else {
    await pipeline.png({ compressionLevel: 5, adaptiveFiltering: false }).toFile(tempPath);
  }
  await fs.rename(tempPath, job.target);
  return true;
}

async function isAlreadyHumanPhoto(job: RenderJob) {
  try {
    const stats = await fs.stat(job.target);
    const threshold = job.format === "jpg" ? 120_000 : 500_000;
    return stats.size >= threshold;
  } catch {
    return false;
  }
}

async function main() {
  await fs.mkdir(docsDir, { recursive: true });
  const jobs = [
    ...(await exerciseJobs()),
    ...(await walkingJobs()),
    ...(await yogaJobs()),
    ...(await videoFrameJobs())
  ];

  const counts: Record<string, number> = {};
  const skipped: Record<string, number> = {};
  for (const job of jobs) {
    if (await writeAsset(job)) {
      counts[job.kind] = (counts[job.kind] || 0) + 1;
    } else {
      skipped[job.kind] = (skipped[job.kind] || 0) + 1;
    }
  }

  const report = {
    generated_at: new Date().toISOString(),
    policy: "human photo based final assets; no stick-figure/vector placeholder art",
    include_video_frames: includeVideoFrames,
    force,
    total_updated: jobs.length,
    rendered: counts,
    skipped_existing_human_photo: skipped,
    masters: Object.fromEntries(Object.entries(masters).map(([key, file]) => [key, path.relative(root, file)]))
  };
  await fs.writeFile(path.join(docsDir, "human-photo-assets-report.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8");
  console.log(JSON.stringify(report, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
