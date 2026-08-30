import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { exerciseImages } from "../lib/exercise-images";
import { exerciseInstructionSeeds, type ExerciseInstructionSeed } from "../lib/exercise-instruction-data";
import { walkingModes } from "../lib/walking";
import { yogaPracticeSeeds } from "../lib/yoga-data";

const root = process.cwd();
const exerciseDir = path.join(root, "public", "exercises");
const walkingDir = path.join(root, "public", "walking");
const yogaDir = path.join(root, "public", "yoga");
const width = 1024;
const height = 768;
const force = process.argv.includes("--force");

type PoseContext = {
  slug: string;
  title: string;
  kind: string;
  frame: number;
  total: number;
  domain: "exercise" | "yoga";
};

const movementKeywords = [
  "agachamento",
  "alongamento",
  "ativacao",
  "caminhada",
  "coluna",
  "corda",
  "funcional",
  "jumping",
  "luta",
  "marcha",
  "mobilidade",
  "ombros",
  "pernas",
  "pescoco",
  "postural",
  "reset-corporal",
  "yoga"
];

function esc(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&apos;"
  })[char] || char);
}

function hash(value: string) {
  let output = 0;
  for (const char of value) output = (output * 31 + char.charCodeAt(0)) >>> 0;
  return output;
}

function palette(slug: string) {
  const palettes = [
    { accent: "#A7F3D0", second: "#DDD6FE", line: "#172554", skin: "#F4C7A1", clothes: "#5EEAD4" },
    { accent: "#BAE6FD", second: "#C4B5FD", line: "#172554", skin: "#E9B98F", clothes: "#93C5FD" },
    { accent: "#BBF7D0", second: "#FDE68A", line: "#172554", skin: "#F0BC93", clothes: "#A7F3D0" },
    { accent: "#DDD6FE", second: "#A7F3D0", line: "#172554", skin: "#EFC2A2", clothes: "#C4B5FD" }
  ];
  return palettes[hash(slug) % palettes.length];
}

function classify(slug: string, title = "") {
  const value = `${slug} ${title}`.toLowerCase();
  if (value.includes("crianca")) return "child";
  if (value.includes("gato") || value.includes("vaca")) return "catCow";
  if (value.includes("parede") || value.includes("pernas")) return "wall";
  if (value.includes("montanha")) return "mountain";
  if (value.includes("guerreiro")) return "warrior";
  if (value.includes("caminhada") && value.includes("cadeira")) return "chairWalk";
  if (value.includes("cadeira") || value.includes("torcao")) return "chairTwist";
  if (value.includes("agachamento")) return "squat";
  if (value.includes("cachorro")) return "wallDog";
  if (value.includes("lateral")) return "sideBend";
  if (value.includes("peito")) return "chestOpen";
  if (value.includes("quadril")) return "hip";
  if (value.includes("ombro") || value.includes("pescoco")) return "shoulders";
  if (value.includes("respir")) return "breathing";
  if (value.includes("escrita") || value.includes("diario") || value.includes("planejamento") || value.includes("gratidao")) return "writing";
  if (value.includes("tela") || value.includes("foco") || value.includes("notificacao")) return "screenFocus";
  if (value.includes("caminhada")) return "walking";
  if (value.includes("corda")) return "rope";
  if (value.includes("jumping") || value.includes("marcha") || value.includes("energia") || value.includes("ativacao")) return "activation";
  if (value.includes("luta")) return "shadowBoxing";
  if (value.includes("sono") || value.includes("dormir") || value.includes("noite")) return "sleep";
  return "standing";
}

function clampFrame(frame: number, total: number) {
  if (total <= 1) return 0;
  return frame / (total - 1);
}

function background(ctx: PoseContext) {
  const p = palette(ctx.slug);
  const shift = (hash(ctx.slug) % 120) - 60;
  const homeWork = ctx.slug.includes("trabalho") || ctx.slug.includes("cadeira") ? "work" : "home";
  return `
    <rect width="${width}" height="${height}" fill="#F8FAFC"/>
    <circle cx="${170 + shift}" cy="130" r="120" fill="${p.accent}" opacity="0.42"/>
    <circle cx="${845 - shift}" cy="160" r="150" fill="${p.second}" opacity="0.34"/>
    <path d="M0 650 C200 575 390 710 590 630 C760 560 910 585 1024 520 L1024 768 L0 768 Z" fill="#E2E8F0" opacity="0.42"/>
    <rect x="92" y="604" width="840" height="74" rx="37" fill="${p.accent}" opacity="0.55"/>
    ${homeWork === "work" ? workProps(p) : homeProps(p)}
  `;
}

function homeProps(p: ReturnType<typeof palette>) {
  return `
    <rect x="86" y="92" width="170" height="120" rx="26" fill="#FFFFFF" opacity="0.75"/>
    <path d="M124 164 C148 124 182 124 214 164" fill="none" stroke="${p.second}" stroke-width="10" stroke-linecap="round"/>
    <rect x="804" y="438" width="56" height="130" rx="28" fill="${p.second}" opacity="0.48"/>
    <path d="M832 438 C786 392 800 342 860 320 C910 370 884 420 832 438Z" fill="${p.accent}" opacity="0.72"/>
  `;
}

function workProps(p: ReturnType<typeof palette>) {
  return `
    <rect x="760" y="180" width="126" height="88" rx="16" fill="#FFFFFF" opacity="0.8"/>
    <rect x="786" y="262" width="74" height="14" rx="7" fill="${p.line}" opacity="0.2"/>
    <rect x="110" y="520" width="210" height="22" rx="11" fill="${p.line}" opacity="0.14"/>
    <rect x="158" y="542" width="20" height="78" rx="10" fill="${p.line}" opacity="0.12"/>
    <rect x="250" y="542" width="20" height="78" rx="10" fill="${p.line}" opacity="0.12"/>
  `;
}

function line(x1: number, y1: number, x2: number, y2: number, color: string, size = 24) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${size}" stroke-linecap="round"/>`;
}

function circle(cx: number, cy: number, r: number, fill: string) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"/>`;
}

function body(ctx: PoseContext) {
  const p = palette(ctx.slug);
  const progress = clampFrame(ctx.frame, ctx.total);
  const cx = 512;
  const cy = 380;
  const skin = p.skin;
  const lineColor = p.line;
  const clothes = p.clothes;

  switch (ctx.kind) {
    case "child":
      return poseChild(cx, cy, progress, lineColor, skin, clothes);
    case "catCow":
      return poseCatCow(cx, cy, progress, lineColor, skin, clothes);
    case "wall":
      return poseWall(cx, cy, progress, lineColor, skin, clothes);
    case "mountain":
      return poseMountain(cx, cy, progress, lineColor, skin, clothes);
    case "warrior":
      return poseWarrior(cx, cy, progress, lineColor, skin, clothes);
    case "chairTwist":
      return poseChairTwist(cx, cy, progress, lineColor, skin, clothes);
    case "chairWalk":
      return poseChairWalk(cx, cy, progress, lineColor, skin, clothes);
    case "squat":
      return poseSquat(cx, cy, progress, lineColor, skin, clothes);
    case "wallDog":
      return poseWallDog(cx, cy, progress, lineColor, skin, clothes);
    case "sideBend":
      return poseSideBend(cx, cy, progress, lineColor, skin, clothes);
    case "chestOpen":
      return poseChestOpen(cx, cy, progress, lineColor, skin, clothes);
    case "hip":
      return poseHip(cx, cy, progress, lineColor, skin, clothes);
    case "shoulders":
      return poseShoulders(cx, cy, progress, lineColor, skin, clothes);
    case "writing":
      return poseWriting(cx, cy, progress, lineColor, skin, clothes);
    case "screenFocus":
      return poseScreenFocus(cx, cy, progress, lineColor, skin, clothes);
    case "walking":
      return poseWalking(cx, cy, progress, lineColor, skin, clothes);
    case "rope":
      return poseRope(cx, cy, progress, lineColor, skin, clothes);
    case "activation":
      return poseActivation(cx, cy, progress, lineColor, skin, clothes);
    case "shadowBoxing":
      return poseShadowBoxing(cx, cy, progress, lineColor, skin, clothes);
    case "sleep":
      return poseSleep(cx, cy, progress, lineColor, skin, clothes);
    case "breathing":
      return poseBreathing(cx, cy, progress, lineColor, skin, clothes);
    default:
      return poseStanding(cx, cy, progress, lineColor, skin, clothes);
  }
}

function head(cx: number, cy: number, skin: string) {
  return `${circle(cx, cy, 34, skin)}<path d="M${cx - 24} ${cy - 19} C${cx - 8} ${cy - 52} ${cx + 34} ${cy - 34} ${cx + 31} ${cy - 4} C${cx + 8} ${cy - 20} ${cx - 3} ${cy - 20} ${cx - 24} ${cy - 19}Z" fill="#334155" opacity="0.95"/>`;
}

function torso(cx: number, y1: number, y2: number, clothes: string, tilt = 0) {
  return `<path d="M${cx} ${y1} C${cx + tilt} ${(y1 + y2) / 2} ${cx + tilt} ${(y1 + y2) / 2} ${cx} ${y2}" fill="none" stroke="${clothes}" stroke-width="42" stroke-linecap="round"/>`;
}

function poseBreathing(cx: number, cy: number, progress: number, lineColor: string, skin: string, clothes: string) {
  const hand = progress < 0.35 ? 40 : progress < 0.7 ? 68 : 88;
  const ring = 88 + progress * 42;
  return `
    <ellipse cx="${cx}" cy="585" rx="165" ry="28" fill="#172554" opacity="0.08"/>
    ${head(cx, 250, skin)}
    ${torso(cx, 300, 430, clothes)}
    ${line(cx - 20, 328, cx - hand, 385, lineColor)}
    ${line(cx + 20, 328, cx + hand, 385, lineColor)}
    ${line(cx - 18, 430, cx - 92, 535, lineColor)}
    ${line(cx + 18, 430, cx + 92, 535, lineColor)}
    <circle cx="${cx}" cy="388" r="${ring}" fill="none" stroke="#A7F3D0" stroke-width="10" opacity="0.55"/>
    <circle cx="${cx}" cy="388" r="${ring + 28}" fill="none" stroke="#DDD6FE" stroke-width="8" opacity="0.42"/>
  `;
}

function poseWriting(cx: number, cy: number, progress: number, lineColor: string, skin: string, clothes: string) {
  const lean = 20 + progress * 20;
  return `
    <rect x="${cx - 180}" y="475" width="360" height="34" rx="17" fill="#172554" opacity="0.12"/>
    <rect x="${cx - 72}" y="428" width="168" height="92" rx="18" fill="#FFFFFF" opacity="0.95"/>
    <path d="M${cx - 44} 456 H${cx + 62} M${cx - 44} 484 H${cx + 42}" stroke="#CBD5E1" stroke-width="8" stroke-linecap="round"/>
    ${head(cx - 24, 272 + lean * 0.2, skin)}
    ${torso(cx - 10, 326, 442, clothes, -lean)}
    ${line(cx - 32, 354, cx - 105, 438, lineColor)}
    ${line(cx + 14, 354, cx + 70, 462, lineColor)}
    ${line(cx - 20, 442, cx - 94, 552, lineColor)}
    ${line(cx + 20, 442, cx + 104, 552, lineColor)}
  `;
}

function poseScreenFocus(cx: number, cy: number, progress: number, lineColor: string, skin: string, clothes: string) {
  const phoneOpacity = progress < 0.45 ? 0.95 : 0.2;
  return `
    <rect x="${cx + 120}" y="334" width="74" height="118" rx="18" fill="#172554" opacity="${phoneOpacity}"/>
    <circle cx="${cx + 157}" cy="430" r="7" fill="#A7F3D0" opacity="${phoneOpacity}"/>
    <circle cx="${cx - 142}" cy="300" r="16" fill="#DDD6FE" opacity="${1 - phoneOpacity + 0.25}"/>
    <circle cx="${cx - 198}" cy="374" r="13" fill="#A7F3D0" opacity="${1 - phoneOpacity + 0.25}"/>
    ${head(cx, 258, skin)}
    ${torso(cx, 312, 438, clothes)}
    ${line(cx - 24, 340, cx - 94, 410, lineColor)}
    ${line(cx + 24, 340, cx + (progress < 0.45 ? 140 : 84), progress < 0.45 ? 390 : 322, lineColor)}
    ${line(cx - 18, 438, cx - 84, 552, lineColor)}
    ${line(cx + 18, 438, cx + 84, 552, lineColor)}
  `;
}

function poseStanding(cx: number, cy: number, progress: number, lineColor: string, skin: string, clothes: string) {
  return `
    ${head(cx, 228, skin)}
    ${torso(cx, 282, 430, clothes)}
    ${line(cx - 28, 320, cx - 100 - progress * 20, 394, lineColor)}
    ${line(cx + 28, 320, cx + 100 + progress * 20, 394, lineColor)}
    ${line(cx - 18, 430, cx - 70, 575, lineColor)}
    ${line(cx + 18, 430, cx + 70, 575, lineColor)}
  `;
}

function poseMountain(cx: number, cy: number, progress: number, lineColor: string, skin: string, clothes: string) {
  const armY = 388 - progress * 130;
  return `
    ${head(cx, 224, skin)}
    ${torso(cx, 280, 426, clothes)}
    ${line(cx - 28, 318, cx - 68, armY, lineColor)}
    ${line(cx + 28, 318, cx + 68, armY, lineColor)}
    ${line(cx - 18, 426, cx - 52, 584, lineColor)}
    ${line(cx + 18, 426, cx + 52, 584, lineColor)}
  `;
}

function poseSideBend(cx: number, cy: number, progress: number, lineColor: string, skin: string, clothes: string) {
  const bend = 78 * progress;
  return `
    ${head(cx + bend * 0.35, 224, skin)}
    ${torso(cx + bend * 0.15, 280, 430, clothes, bend * 0.45)}
    ${line(cx - 26, 318, cx - 68, 410, lineColor)}
    ${line(cx + 26, 318, cx + 100 + bend, 245, lineColor)}
    ${line(cx - 16, 430, cx - 48, 585, lineColor)}
    ${line(cx + 20, 430, cx + 82, 580, lineColor)}
  `;
}

function poseShoulders(cx: number, cy: number, progress: number, lineColor: string, skin: string, clothes: string) {
  const side = progress < 0.5 ? -1 : 1;
  return `
    ${head(cx + side * 20 * progress, 232, skin)}
    ${torso(cx, 288, 432, clothes)}
    ${line(cx - 28, 322, cx - 98, 370 - progress * 28, lineColor)}
    ${line(cx + 28, 322, cx + 98, 370 + progress * 22, lineColor)}
    ${line(cx - 18, 432, cx - 70, 578, lineColor)}
    ${line(cx + 18, 432, cx + 70, 578, lineColor)}
  `;
}

function poseWalking(cx: number, cy: number, progress: number, lineColor: string, skin: string, clothes: string) {
  const step = Math.sin(progress * Math.PI) * 74;
  return `
    ${head(cx, 232, skin)}
    ${torso(cx, 288, 430, clothes, 8)}
    ${line(cx - 28, 320, cx - 92, 398 - step * 0.2, lineColor)}
    ${line(cx + 28, 320, cx + 92, 398 + step * 0.2, lineColor)}
    ${line(cx - 18, 430, cx - 74 - step, 575, lineColor)}
    ${line(cx + 18, 430, cx + 74 + step, 575, lineColor)}
  `;
}

function poseActivation(cx: number, cy: number, progress: number, lineColor: string, skin: string, clothes: string) {
  const up = Math.sin(progress * Math.PI) * 84;
  return `
    ${head(cx, 230 - up * 0.05, skin)}
    ${torso(cx, 286 - up * 0.05, 430, clothes)}
    ${line(cx - 28, 322, cx - 96, 286 - up, lineColor)}
    ${line(cx + 28, 322, cx + 96, 286 - up, lineColor)}
    ${line(cx - 18, 430, cx - 82, 574, lineColor)}
    ${line(cx + 18, 430, cx + 82, 574, lineColor)}
  `;
}

function poseRope(cx: number, cy: number, progress: number, lineColor: string, skin: string, clothes: string) {
  const jump = Math.sin(progress * Math.PI) * 46;
  return `
    <path d="M${cx - 170} ${430 - jump} C${cx - 210} ${620 - jump} ${cx + 210} ${620 - jump} ${cx + 170} ${430 - jump}" fill="none" stroke="#C4B5FD" stroke-width="10" opacity="0.75"/>
    ${head(cx, 226 - jump, skin)}
    ${torso(cx, 284 - jump, 420 - jump, clothes)}
    ${line(cx - 28, 316 - jump, cx - 146, 418 - jump, lineColor)}
    ${line(cx + 28, 316 - jump, cx + 146, 418 - jump, lineColor)}
    ${line(cx - 18, 420 - jump, cx - 62, 572 - jump, lineColor)}
    ${line(cx + 18, 420 - jump, cx + 62, 572 - jump, lineColor)}
  `;
}

function poseShadowBoxing(cx: number, cy: number, progress: number, lineColor: string, skin: string, clothes: string) {
  const punch = progress * 110;
  return `
    ${head(cx - 24, 232, skin)}
    ${torso(cx - 22, 286, 430, clothes, 18)}
    ${line(cx - 50, 320, cx - 120, 382, lineColor)}
    ${line(cx + 0, 320, cx + 88 + punch, 306, lineColor)}
    ${line(cx - 42, 430, cx - 118, 578, lineColor)}
    ${line(cx + 4, 430, cx + 80, 570, lineColor)}
  `;
}

function poseSleep(cx: number, cy: number, progress: number, lineColor: string, skin: string, clothes: string) {
  return `
    <rect x="${cx - 235}" y="420" width="470" height="112" rx="56" fill="#DDD6FE" opacity="0.48"/>
    <rect x="${cx - 220}" y="452" width="440" height="48" rx="24" fill="#FFFFFF" opacity="0.82"/>
    ${head(cx - 132 + progress * 30, 392, skin)}
    ${line(cx - 92, 420, cx + 92, 470, clothes, 42)}
    ${line(cx - 84, 456, cx - 172, 504, lineColor)}
    ${line(cx + 72, 468, cx + 172, 508, lineColor)}
    <circle cx="812" cy="190" r="42" fill="#FDE68A" opacity="0.72"/>
  `;
}

function poseChild(cx: number, cy: number, progress: number, lineColor: string, skin: string, clothes: string) {
  const lower = progress * 92;
  return `
    ${head(cx + 92, 360 + lower, skin)}
    <path d="M${cx - 82} ${398} C${cx - 20} ${390 + lower * 0.4} ${cx + 70} ${420 + lower} ${cx + 120} ${462 + lower}" fill="none" stroke="${clothes}" stroke-width="44" stroke-linecap="round"/>
    ${line(cx - 126, 504, cx - 24, 545, lineColor)}
    ${line(cx + 36, 496 + lower, cx + 172, 505 + lower, lineColor)}
    ${line(cx - 22, 404, cx - 124, 500, lineColor)}
    ${line(cx + 90, 462 + lower, cx + 206, 500 + lower, lineColor)}
  `;
}

function poseCatCow(cx: number, cy: number, progress: number, lineColor: string, skin: string, clothes: string) {
  const arch = Math.sin(progress * Math.PI * 2) * 54;
  return `
    ${head(cx + 170, 360 - arch * 0.25, skin)}
    <path d="M${cx - 145} ${390} C${cx - 70} ${330 - arch} ${cx + 80} ${330 + arch} ${cx + 152} ${392}" fill="none" stroke="${clothes}" stroke-width="44" stroke-linecap="round"/>
    ${line(cx - 118, 405, cx - 155, 560, lineColor)}
    ${line(cx - 20, 397, cx - 38, 560, lineColor)}
    ${line(cx + 82, 397, cx + 62, 560, lineColor)}
    ${line(cx + 150, 405, cx + 165, 560, lineColor)}
  `;
}

function poseWall(cx: number, cy: number, progress: number, lineColor: string, skin: string, clothes: string) {
  return `
    <rect x="${cx + 190}" y="130" width="22" height="510" rx="11" fill="#172554" opacity="0.12"/>
    ${head(cx - 70, 382 - progress * 40, skin)}
    <path d="M${cx - 36} ${420 - progress * 18} C${cx + 56} ${392} ${cx + 118} ${318} ${cx + 190} ${246 + progress * 84}" fill="none" stroke="${clothes}" stroke-width="44" stroke-linecap="round"/>
    ${line(cx + 24, 446, cx + 190, 218 + progress * 90, lineColor)}
    ${line(cx + 10, 468, cx + 190, 292 + progress * 84, lineColor)}
  `;
}

function poseWarrior(cx: number, cy: number, progress: number, lineColor: string, skin: string, clothes: string) {
  const open = 88 + progress * 72;
  return `
    ${head(cx, 228, skin)}
    ${torso(cx, 282, 424, clothes)}
    ${line(cx - 25, 320, cx - open, 320, lineColor)}
    ${line(cx + 25, 320, cx + open, 320, lineColor)}
    ${line(cx - 18, 424, cx - 146, 568, lineColor)}
    ${line(cx + 18, 424, cx + 146, 548, lineColor)}
  `;
}

function poseChairTwist(cx: number, cy: number, progress: number, lineColor: string, skin: string, clothes: string) {
  return `
    <rect x="${cx - 115}" y="468" width="230" height="34" rx="17" fill="#172554" opacity="0.14"/>
    <rect x="${cx + 72}" y="498" width="18" height="98" rx="9" fill="#172554" opacity="0.12"/>
    ${head(cx + progress * 46, 254, skin)}
    ${torso(cx, 308, 430, clothes, progress * 42)}
    ${line(cx - 24, 342, cx - 112, 418, lineColor)}
    ${line(cx + 26, 342, cx + 122, 410 - progress * 35, lineColor)}
    ${line(cx - 18, 430, cx - 96, 536, lineColor)}
    ${line(cx + 18, 430, cx + 96, 536, lineColor)}
  `;
}

function poseChairWalk(cx: number, cy: number, progress: number, lineColor: string, skin: string, clothes: string) {
  const step = Math.sin(progress * Math.PI) * 54;
  return `
    <rect x="${cx - 128}" y="470" width="256" height="34" rx="17" fill="#172554" opacity="0.14"/>
    <rect x="${cx + 78}" y="498" width="18" height="106" rx="9" fill="#172554" opacity="0.12"/>
    <rect x="${cx - 96}" y="498" width="18" height="106" rx="9" fill="#172554" opacity="0.1"/>
    ${head(cx, 252, skin)}
    ${torso(cx, 308, 430, clothes)}
    ${line(cx - 26, 342, cx - 112, 394 - step * 0.12, lineColor)}
    ${line(cx + 26, 342, cx + 112, 394 + step * 0.12, lineColor)}
    ${line(cx - 28, 430, cx - 110 - step, 548, lineColor)}
    ${line(cx + 28, 430, cx + 110 + step, 548, lineColor)}
    <path d="M${cx - 170} 610 C${cx - 80} 570 ${cx + 80} 570 ${cx + 170} 610" fill="none" stroke="#A7F3D0" stroke-width="10" opacity="0.65"/>
  `;
}

function poseSquat(cx: number, cy: number, progress: number, lineColor: string, skin: string, clothes: string) {
  const down = 120 * progress;
  return `
    ${head(cx, 228 + down, skin)}
    ${torso(cx, 284 + down, 420 + down * 0.35, clothes)}
    ${line(cx - 28, 320 + down, cx - 94, 382 + down, lineColor)}
    ${line(cx + 28, 320 + down, cx + 94, 382 + down, lineColor)}
    ${line(cx - 18, 420 + down * 0.35, cx - 126, 566, lineColor)}
    ${line(cx + 18, 420 + down * 0.35, cx + 126, 566, lineColor)}
  `;
}

function poseWallDog(cx: number, cy: number, progress: number, lineColor: string, skin: string, clothes: string) {
  const lean = 120 * progress;
  return `
    <rect x="${cx + 200}" y="138" width="24" height="510" rx="12" fill="#172554" opacity="0.12"/>
    ${head(cx + 88 + lean * 0.35, 308 + lean * 0.15, skin)}
    <path d="M${cx - 80} ${404} C${cx + 20} ${380} ${cx + 100 + lean} ${354 + lean * 0.2} ${cx + 184} ${360 + lean * 0.3}" fill="none" stroke="${clothes}" stroke-width="44" stroke-linecap="round"/>
    ${line(cx + 118 + lean * 0.4, 372 + lean * 0.2, cx + 208, 342, lineColor)}
    ${line(cx - 60, 416, cx - 96, 574, lineColor)}
    ${line(cx + 4, 412, cx + 20, 574, lineColor)}
  `;
}

function poseChestOpen(cx: number, cy: number, progress: number, lineColor: string, skin: string, clothes: string) {
  const open = 70 + progress * 86;
  return `
    ${head(cx, 228, skin)}
    ${torso(cx, 284, 430, clothes, -progress * 10)}
    ${line(cx - 24, 320, cx - open, 392 - progress * 50, lineColor)}
    ${line(cx + 24, 320, cx + open, 392 - progress * 50, lineColor)}
    ${line(cx - 18, 430, cx - 68, 575, lineColor)}
    ${line(cx + 18, 430, cx + 68, 575, lineColor)}
  `;
}

function poseHip(cx: number, cy: number, progress: number, lineColor: string, skin: string, clothes: string) {
  const side = 74 * progress;
  return `
    ${head(cx, 235, skin)}
    ${torso(cx, 292, 430, clothes)}
    ${line(cx - 26, 326, cx - 92, 400, lineColor)}
    ${line(cx + 26, 326, cx + 92, 400, lineColor)}
    ${line(cx - 18, 430, cx - 86 - side, 570, lineColor)}
    ${line(cx + 18, 430, cx + 86 + side, 570, lineColor)}
  `;
}

function frameDots(total: number, current: number, slug: string) {
  const p = palette(slug);
  const gap = 32;
  const start = width / 2 - ((total - 1) * gap) / 2;
  return Array.from({ length: total }, (_, index) => {
    const active = index === current;
    return `<circle cx="${start + index * gap}" cy="708" r="${active ? 9 : 6}" fill="${active ? p.line : p.second}" opacity="${active ? 0.7 : 0.45}"/>`;
  }).join("");
}

function svg(ctx: PoseContext) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(ctx.title)}">
    ${background(ctx)}
    ${body(ctx)}
    ${frameDots(ctx.total, ctx.frame, ctx.slug)}
  </svg>`;
}

async function render(target: string, ctx: PoseContext) {
  try {
    if (!force) {
      await fs.access(target);
      return false;
    }
  } catch {
    // File is missing and should be generated.
  }
  await sharp(Buffer.from(svg(ctx))).png({ compressionLevel: 9 }).toFile(target);
  return true;
}

function exerciseFrameCount(seed?: ExerciseInstructionSeed, slug = "") {
  const value = `${slug} ${seed?.category || ""} ${seed?.area || ""}`.toLowerCase();
  if (movementKeywords.some((keyword) => value.includes(keyword))) return 5;
  if (["MOBILITY", "STRETCHING", "WALKING", "LOW_IMPACT_CARDIO", "HOME_FUNCTIONAL", "YOGA"].some((item) => value.includes(item.toLowerCase()))) return 5;
  return 3;
}

async function generateExerciseAssets() {
  await fs.mkdir(exerciseDir, { recursive: true });
  const seedByKey = new Map(exerciseInstructionSeeds.map((seed) => [seed.imageKey, seed]));
  const allKeys = Array.from(new Set([...Object.keys(exerciseImages), ...exerciseInstructionSeeds.map((seed) => seed.imageKey)]));
  let generated = 0;
  let skipped = 0;

  for (const key of allKeys) {
    const seed = seedByKey.get(key);
    const title = seed?.title || key.replace(/-/g, " ");
    const kind = classify(key, title);
    const single = path.join(exerciseDir, `${key}.png`);
    if (await render(single, { slug: key, title, kind, frame: 1, total: 3, domain: "exercise" })) generated++;
    else skipped++;

    const count = exerciseFrameCount(seed, key);
    for (let index = 0; index < count; index++) {
      const target = path.join(exerciseDir, `${key}-${index + 1}.png`);
      if (await render(target, { slug: key, title, kind, frame: index, total: count, domain: "exercise" })) generated++;
      else skipped++;
    }
  }

  return { generated, skipped, totalKeys: allKeys.length };
}

async function generateWalkingAssets() {
  await fs.mkdir(walkingDir, { recursive: true });
  let generated = 0;
  let skipped = 0;

  for (const mode of walkingModes) {
    const key = mode.id;
    const title = mode.title;
    const kind = classify(key, title);
    const single = path.join(walkingDir, `${key}.png`);
    if (await render(single, { slug: key, title, kind, frame: 1, total: 3, domain: "exercise" })) generated++;
    else skipped++;

    for (let index = 0; index < 3; index++) {
      const target = path.join(walkingDir, `${key}-${index + 1}.png`);
      if (await render(target, { slug: key, title, kind, frame: index, total: 3, domain: "exercise" })) generated++;
      else skipped++;
    }
  }

  return { generated, skipped, totalKeys: walkingModes.length };
}

async function generateYogaAssets() {
  await fs.mkdir(yogaDir, { recursive: true });
  let generated = 0;
  let skipped = 0;

  for (const practice of yogaPracticeSeeds) {
    const kind = classify(practice.slug, practice.title);
    const single = path.join(yogaDir, `${practice.imageKey}.png`);
    if (await render(single, { slug: practice.slug, title: practice.title, kind, frame: 1, total: practice.imageSequenceKeys.length || 5, domain: "yoga" })) generated++;
    else skipped++;

    for (let index = 0; index < practice.imageSequenceKeys.length; index++) {
      const key = practice.imageSequenceKeys[index];
      const target = path.join(yogaDir, `${key}.png`);
      if (await render(target, { slug: practice.slug, title: practice.title, kind, frame: index, total: practice.imageSequenceKeys.length, domain: "yoga" })) generated++;
      else skipped++;
    }
  }

  return { generated, skipped, totalKeys: yogaPracticeSeeds.length };
}

async function main() {
  const exercise = await generateExerciseAssets();
  const walking = await generateWalkingAssets();
  const yoga = await generateYogaAssets();
  console.log(JSON.stringify({ exercise, walking, yoga, force }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
