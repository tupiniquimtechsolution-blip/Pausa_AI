import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import ffmpegPath from "ffmpeg-static";

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
const tmpDir = path.join(root, ".tmp-video-render");
const fps = 30;

function publicPathFromUrl(url: string) {
  return path.join(publicDir, url.replace(/^\//, ""));
}

async function fileExists(filePath: string) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function loadPlan() {
  const planPath = path.join(videosDir, "frame-production-plan.json");
  const data = JSON.parse(await fs.readFile(planPath, "utf8")) as { videos: FramePlan[] };
  return data.videos;
}

async function framePathsFor(plan: FramePlan) {
  const frames: string[] = [];
  for (const url of plan.existing_premium_frame_urls) {
    const filePath = publicPathFromUrl(url);
    if (await fileExists(filePath)) frames.push(filePath);
  }
  for (const url of plan.existing_generated_frame_urls || []) {
    const filePath = publicPathFromUrl(url);
    if (await fileExists(filePath)) frames.push(filePath);
  }
  for (const target of plan.frame_targets.sort((a, b) => a.frame - b.frame)) {
    const filePath = path.join(root, target.target_path);
    if (await fileExists(filePath)) frames.push(filePath);
  }
  return frames.slice(0, plan.required_frame_count);
}

function assertInside(parent: string, child: string) {
  const relative = path.relative(parent, child);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Caminho temporario fora da pasta esperada: ${child}`);
  }
}

function concatFilePath(filePath: string) {
  return filePath.replace(/\\/g, "/").replace(/'/g, "'\\''");
}

function segmentFrameCounts(durationSeconds: number, frameCount: number) {
  const totalVideoFrames = Math.max(frameCount, Math.round(durationSeconds * fps));
  const base = Math.floor(totalVideoFrames / frameCount);
  const remainder = totalVideoFrames % frameCount;
  return Array.from({ length: frameCount }, (_, index) => base + (index < remainder ? 1 : 0));
}

function panExpression(index: number, totalOutputFrames: number) {
  const progress = `on/${Math.max(totalOutputFrames - 1, 1)}`;
  const centerX = "(iw-iw/zoom)/2";
  const centerY = "(ih-ih/zoom)/2";

  switch (index % 4) {
    case 0:
      return { x: `(iw-iw/zoom)*${progress}`, y: centerY };
    case 1:
      return { x: `(iw-iw/zoom)*(1-${progress})`, y: centerY };
    case 2:
      return { x: centerX, y: `(ih-ih/zoom)*${progress}` };
    default:
      return { x: centerX, y: `(ih-ih/zoom)*(1-${progress})` };
  }
}

function runFfmpeg(args: string[], failureMessage: string) {
  if (!ffmpegPath) throw new Error("ffmpeg-static nao retornou um binario valido.");
  const result = spawnSync(ffmpegPath, args, { cwd: root, encoding: "utf8" });
  if (result.status !== 0) {
    const details = (result.stderr || result.stdout || "").slice(-4000);
    throw new Error(`${failureMessage}: ${details}`);
  }
}

async function renderMotionSegment(framePath: string, segmentPath: string, index: number, outputFrames: number) {
  const pan = panExpression(index, outputFrames);
  const zoompan = [
    `zoompan=z='min(zoom+0.00065,1.055)'`,
    `x='${pan.x}'`,
    `y='${pan.y}'`,
    `d=${outputFrames}`,
    "s=1080x1920",
    `fps=${fps}`
  ].join(":");
  const vf = [
    "scale=1440:2560:force_original_aspect_ratio=increase",
    "crop=1440:2560",
    zoompan,
    "format=yuv420p"
  ].join(",");

  runFfmpeg([
    "-y",
    "-loop", "1",
    "-i", framePath,
    "-vf", vf,
    "-frames:v", String(outputFrames),
    "-an",
    "-c:v", "libx264",
    "-preset", "veryfast",
    "-crf", "22",
    "-pix_fmt", "yuv420p",
    segmentPath
  ], `ffmpeg falhou ao criar trecho com movimento para ${path.basename(framePath)}`);
}

async function render(plan: FramePlan, frames: string[]) {
  const outPath = publicPathFromUrl(plan.video_url);
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.mkdir(tmpDir, { recursive: true });

  const safeSlug = plan.slug.replace(/[^a-z0-9_-]/gi, "_");
  const segmentDir = path.join(tmpDir, safeSlug);
  assertInside(tmpDir, segmentDir);
  await fs.rm(segmentDir, { recursive: true, force: true });
  await fs.mkdir(segmentDir, { recursive: true });

  const outputFrameCounts = segmentFrameCounts(plan.duration_seconds, frames.length);
  const segmentPaths: string[] = [];
  for (let index = 0; index < frames.length; index += 1) {
    const frame = frames[index];
    const segmentPath = path.join(segmentDir, `${String(index + 1).padStart(2, "0")}.mp4`);
    await renderMotionSegment(frame, segmentPath, index, outputFrameCounts[index]);
    segmentPaths.push(segmentPath);
  }

  const listPath = path.join(segmentDir, "segments.txt");
  const listContent = segmentPaths.map((segment) => `file '${concatFilePath(segment)}'`).join("\n");
  await fs.writeFile(listPath, `${listContent}\n`, "utf8");

  runFfmpeg([
    "-y",
    "-f", "concat",
    "-safe", "0",
    "-i", listPath,
    "-c", "copy",
    "-movflags", "+faststart",
    outPath
  ], `ffmpeg falhou ao concatenar ${plan.slug}`);

  await fs.rm(segmentDir, { recursive: true, force: true });
  return outPath;
}

async function renderPreviewThumbnail(plan: FramePlan, frames: string[]) {
  if (!frames.length) return null;
  const previewPath = path.join(videosDir, "render-previews", `${plan.slug}.jpg`);
  await fs.mkdir(path.dirname(previewPath), { recursive: true });
  runFfmpeg([
    "-y",
    "-i", frames[Math.min(1, frames.length - 1)],
    "-vf", "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920",
    "-frames:v", "1",
    previewPath
  ], `ffmpeg falhou ao criar preview de ${plan.slug}`);
  return previewPath;
}

async function main() {
  const onlySlugArg = process.argv.find((arg) => arg.startsWith("--slug="));
  const onlySlug = onlySlugArg?.split("=")[1];
  const plans = (await loadPlan()).filter((plan) => !onlySlug || plan.slug === onlySlug);

  const rendered: Array<{ slug: string; output: string; frames: number }> = [];
  const skipped: Array<{ slug: string; reason: string; available: number; required: number }> = [];

  for (const plan of plans) {
    const frames = await framePathsFor(plan);
    if (frames.length < plan.required_frame_count) {
      skipped.push({
        slug: plan.slug,
        reason: "frames_premium_incompletos",
        available: frames.length,
        required: plan.required_frame_count
      });
      continue;
    }
    const output = await render(plan, frames);
    await renderPreviewThumbnail(plan, frames);
    rendered.push({ slug: plan.slug, output: path.relative(root, output), frames: frames.length });
  }

  const report = {
    generated_at: new Date().toISOString(),
    requested_videos: plans.length,
    rendered_count: rendered.length,
    skipped_count: skipped.length,
    motion_style: "zoompan_por_frame_30fps",
    rendered,
    skipped
  };
  await fs.writeFile(path.join(videosDir, "render-report.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8");
  console.log(JSON.stringify(report, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
