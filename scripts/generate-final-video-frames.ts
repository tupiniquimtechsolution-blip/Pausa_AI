import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

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
  source_image_role: "character_reference" | "pose_reference" | "missing";
  tags: string[];
  intensity: string;
  equipment: string;
  position: string[];
  benefit_primary: string;
  batch_wave: number;
  scene: string;
};

type FramePlan = {
  slug: string;
  title: string;
  video_url: string;
  duration_seconds: number;
  required_frame_count: number;
  frame_targets: Array<{
    frame: number;
    target_path: string;
    role: string;
  }>;
};

type Job = {
  record: VideoRecord;
  plan: FramePlan;
  frame: number;
  total: number;
  targetPath: string;
  role: string;
};

type Palette = ReturnType<typeof paletteFor>;
type PoseKind =
  | "breathing"
  | "cardio"
  | "chair"
  | "child"
  | "floor"
  | "functional"
  | "phone"
  | "reaching"
  | "sideBend"
  | "standing"
  | "walking"
  | "writing"
  | "yoga";

const root = process.cwd();
const publicDir = path.join(root, "public");
const videosDir = path.join(publicDir, "videos");
const framesDir = path.join(videosDir, "frames");
const docsDir = path.join(root, "docs", "video-production");
const width = 1080;
const height = 1920;
const args = new Set(process.argv.slice(2));
const force = args.has("--force");
const allFrames = args.has("--all");
const slugArg = process.argv.find((arg) => arg.startsWith("--slug="))?.split("=")[1];
const limitArg = process.argv.find((arg) => arg.startsWith("--limit="))?.split("=")[1];
const limit = limitArg ? Number(limitArg) : null;

function esc(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&apos;"
  })[char] || char);
}

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

function t(frame: number, total: number) {
  if (total <= 1) return 0.5;
  return (frame - 1) / (total - 1);
}

function softWave(seed: string, scale: number) {
  return ((hash(seed) % 1000) / 1000 - 0.5) * scale;
}

function areaFor(record: VideoRecord) {
  const value = slugText(`${record.title} ${record.tags.join(" ")} ${record.category_label} ${record.scene}`);
  if (value.includes("sono") || value.includes("dormir") || value.includes("cama") || value.includes("noturno")) return "sleep";
  if (value.includes("foco") || value.includes("trabalho") || value.includes("organizacao") || value.includes("tela")) return "focus";
  if (value.includes("gratidao") || value.includes("diario") || value.includes("humor") || value.includes("mapa pessoal")) return "mood";
  if (value.includes("energia") || value.includes("caminhada") || value.includes("janela")) return "energy";
  if (value.includes("respir")) return "stress";
  return record.content_type === "classic_mission" ? "mission" : "movement";
}

function paletteFor(record: VideoRecord) {
  const area = areaFor(record);
  const variants = {
    movement: { bg1: "#F8FAF7", bg2: "#EEF8F4", floor: "#C79A69", floor2: "#93673D", mint: "#A7F3D0", lavender: "#C4B5FD", yellow: "#FDE68A", navy: "#102A43", shirt: "#102E5C", pants: "#BCA7F2", skin: "#E7B18A", hair: "#2A1B22", accent: "#7DB4A7" },
    energy: { bg1: "#FCFAF2", bg2: "#F2FBF6", floor: "#C7925E", floor2: "#8F6137", mint: "#9FE6CF", lavender: "#C8B6FF", yellow: "#FDE68A", navy: "#12325F", shirt: "#10345F", pants: "#B8A1EF", skin: "#E9B58E", hair: "#241916", accent: "#EBCB72" },
    focus: { bg1: "#F7F9F8", bg2: "#EFF7F4", floor: "#B88958", floor2: "#875C34", mint: "#A8E6CF", lavender: "#D7C5FF", yellow: "#F8E8A0", navy: "#102A43", shirt: "#153E75", pants: "#C4B5FD", skin: "#D99A77", hair: "#271A16", accent: "#80B9AE" },
    sleep: { bg1: "#F5F1FF", bg2: "#EEF0FA", floor: "#9C7657", floor2: "#745239", mint: "#A7D8C9", lavender: "#BBA7F2", yellow: "#F9D78B", navy: "#172554", shirt: "#102A43", pants: "#A99BE8", skin: "#E6AA82", hair: "#231916", accent: "#D8B97D" },
    mood: { bg1: "#FFF8F1", bg2: "#F5FBF7", floor: "#C08A57", floor2: "#8B5E34", mint: "#A7F3D0", lavender: "#DDD6FE", yellow: "#FDE68A", navy: "#172554", shirt: "#0B315F", pants: "#BFA6EF", skin: "#F0BC93", hair: "#302018", accent: "#EAAE8A" },
    stress: { bg1: "#F8FAFC", bg2: "#F0F9F6", floor: "#BD8D61", floor2: "#8D6541", mint: "#B7EAD8", lavender: "#C4B5FD", yellow: "#FDE68A", navy: "#132B4F", shirt: "#102E5C", pants: "#BCA7F2", skin: "#E6AA82", hair: "#231916", accent: "#78B7AD" },
    mission: { bg1: "#FAF7F2", bg2: "#F1F8F5", floor: "#C08A57", floor2: "#8B5E34", mint: "#A7F3D0", lavender: "#DDD6FE", yellow: "#FDE68A", navy: "#172554", shirt: "#0B315F", pants: "#BFA6EF", skin: "#F0BC93", hair: "#302018", accent: "#8EBDB2" }
  };
  return variants[area as keyof typeof variants] || variants.mission;
}

function classify(record: VideoRecord): PoseKind {
  const value = slugText(`${record.slug} ${record.title} ${record.category} ${record.category_label} ${record.scene} ${record.benefit_primary}`);
  if (value.includes("respir")) return "breathing";
  if (value.includes("diario") || value.includes("gratidao") || value.includes("planejamento") || value.includes("organizacao") || value.includes("mapa") || value.includes("pendencia") || value.includes("escrita")) return "writing";
  if (value.includes("celular") || value.includes("tela")) return "phone";
  if (value.includes("sono") || value.includes("dormir") || value.includes("noturno") || value.includes("relaxamento") || value.includes("escaneamento")) return "floor";
  if (value.includes("caminhada")) return "walking";
  if (value.includes("agachamento") || value.includes("funcional") || value.includes("treino")) return "functional";
  if (value.includes("jumping") || value.includes("marcha") || value.includes("corda") || value.includes("luta") || value.includes("ativacao")) return "cardio";
  if (value.includes("yoga") || value.includes("crianca") || value.includes("chao")) return "yoga";
  if (value.includes("coluna") || value.includes("lateral") || value.includes("alongamento")) return "sideBend";
  if (value.includes("trabalho") || value.includes("cadeira") || value.includes("reuniao")) return "chair";
  if (value.includes("mobilidade") || value.includes("ombro") || value.includes("pescoco")) return "reaching";
  return "standing";
}

function line(points: Array<[number, number]>, color: string, size: number, opacity = 1) {
  const d = points.map(([x, y], index) => `${index ? "L" : "M"}${Math.round(x)} ${Math.round(y)}`).join(" ");
  return `<path d="${d}" fill="none" stroke="${color}" stroke-width="${size}" stroke-linecap="round" stroke-linejoin="round" opacity="${opacity}"/>`;
}

function circle(cx: number, cy: number, r: number, fill: string, opacity = 1) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" opacity="${opacity}"/>`;
}

function ellipse(cx: number, cy: number, rx: number, ry: number, fill: string, opacity = 1) {
  return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}" opacity="${opacity}"/>`;
}

function rect(x: number, y: number, w: number, h: number, rx: number, fill: string, opacity = 1) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" opacity="${opacity}"/>`;
}

function defs(p: Palette) {
  return `
    <defs>
      <linearGradient id="wall" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${p.bg1}"/>
        <stop offset="100%" stop-color="${p.bg2}"/>
      </linearGradient>
      <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${p.floor}" stop-opacity="0.54"/>
        <stop offset="100%" stop-color="${p.floor2}" stop-opacity="0.32"/>
      </linearGradient>
      <linearGradient id="shirt" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${p.shirt}"/>
        <stop offset="100%" stop-color="#071A3A"/>
      </linearGradient>
      <linearGradient id="pants" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${p.pants}"/>
        <stop offset="100%" stop-color="#9078D6"/>
      </linearGradient>
      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="150%">
        <feDropShadow dx="0" dy="22" stdDeviation="18" flood-color="#0F172A" flood-opacity="0.16"/>
      </filter>
    </defs>
  `;
}

function background(job: Job, p: Palette) {
  const area = areaFor(job.record);
  const shift = softWave(`${job.record.slug}-${job.frame}`, 80);
  const bedroom = area === "sleep";
  const office = area === "focus" || /trabalho|reuniao|mesa|organizacao/i.test(job.record.scene);
  const outdoor = /caminhada|externo|parque|jardim|calcada/i.test(job.record.scene);
  return `
    <rect width="${width}" height="${height}" fill="url(#wall)"/>
    <rect x="0" y="1260" width="${width}" height="660" fill="url(#floor)"/>
    <path d="M0 1326 C210 1200 388 1358 560 1270 C736 1180 900 1254 1080 1148 L1080 1920 L0 1920 Z" fill="${p.mint}" opacity="0.15"/>
    ${windowView(90 + shift, 138, p, outdoor, bedroom)}
    ${office ? desk(622, 1032, p) : ""}
    ${bedroom ? bed(450, 1128, p) : ""}
    ${!office && !bedroom ? mat(254, 1244, p) : ""}
    ${plant(818 + shift * 0.25, 954, p)}
    ${shelf(684, 224, p)}
    ${ambientCues(job, p)}
  `;
}

function windowView(x: number, y: number, p: Palette, outdoor: boolean, bedroom: boolean) {
  return `
    ${rect(x, y, 286, 420, 34, "#FFFFFF", 0.86)}
    ${rect(x + 22, y + 28, 242, 348, 24, outdoor ? "#DFF5EE" : bedroom ? "#EEF0FA" : "#F8FBFF", 1)}
    ${circle(x + 86, y + 92, 48, bedroom ? p.yellow : "#FDE68A", bedroom ? 0.42 : 0.62)}
    <path d="M${x + 22} ${y + 328} C${x + 82} ${y + 250} ${x + 164} ${y + 286} ${x + 264} ${y + 208} L${x + 264} ${y + 376} L${x + 22} ${y + 376} Z" fill="${p.mint}" opacity="${outdoor ? 0.54 : 0.34}"/>
    <path d="M${x + 28} ${y + 372} C${x + 104} ${y + 326} ${x + 178} ${y + 352} ${x + 260} ${y + 304}" fill="none" stroke="${p.accent}" stroke-width="10" stroke-linecap="round" opacity="0.38"/>
  `;
}

function shelf(x: number, y: number, p: Palette) {
  return `
    ${rect(x, y + 86, 246, 18, 9, p.floor, 0.7)}
    ${rect(x + 34, y + 28, 72, 58, 12, "#FFFFFF", 0.78)}
    ${rect(x + 126, y + 44, 52, 42, 21, p.lavender, 0.72)}
    <path d="M${x + 94} ${y + 86} C${x + 62} ${y + 44} ${x + 94} ${y + 6} ${x + 132} ${y + 38} C${x + 138} ${y + 68} ${x + 122} ${y + 84} ${x + 94} ${y + 86}Z" fill="${p.mint}" opacity="0.72"/>
  `;
}

function plant(cx: number, cy: number, p: Palette) {
  return `
    ${rect(cx - 38, cy + 160, 82, 92, 24, p.accent, 0.84)}
    <path d="M${cx} ${cy + 168} C${cx - 92} ${cy + 78} ${cx - 54} ${cy - 14} ${cx + 14} ${cy + 54}" fill="${p.mint}" opacity="0.76"/>
    <path d="M${cx + 2} ${cy + 170} C${cx + 102} ${cy + 74} ${cx + 72} ${cy - 10} ${cx + 10} ${cy + 62}" fill="${p.mint}" opacity="0.68"/>
    <path d="M${cx - 4} ${cy + 174} C${cx - 26} ${cy + 82} ${cx + 54} ${cy + 18} ${cx + 66} ${cy + 94}" fill="#6AAE8D" opacity="0.56"/>
  `;
}

function mat(x: number, y: number, p: Palette) {
  return `
    ${rect(x, y, 602, 130, 65, p.lavender, 0.28)}
    ${rect(x + 112, y + 66, 612, 70, 35, p.mint, 0.28)}
  `;
}

function desk(x: number, y: number, p: Palette) {
  return `
    ${rect(x, y, 334, 38, 19, p.floor, 0.82)}
    ${rect(x + 44, y + 38, 22, 190, 11, p.navy, 0.14)}
    ${rect(x + 260, y + 38, 22, 190, 11, p.navy, 0.14)}
    ${rect(x + 68, y - 70, 150, 44, 12, "#E2E8F0", 0.92)}
    ${rect(x + 218, y - 54, 58, 58, 29, p.lavender, 0.68)}
    ${rect(x - 128, y + 70, 150, 38, 19, p.accent, 0.58)}
    ${rect(x - 92, y + 106, 20, 146, 10, p.navy, 0.12)}
    ${rect(x - 10, y + 106, 20, 146, 10, p.navy, 0.12)}
  `;
}

function bed(x: number, y: number, p: Palette) {
  return `
    ${rect(x - 252, y + 120, 620, 150, 60, p.lavender, 0.34)}
    ${rect(x - 220, y + 152, 560, 72, 36, "#FFFFFF", 0.78)}
    ${rect(x - 214, y + 42, 174, 86, 28, "#FFFFFF", 0.78)}
    ${circle(x + 350, y - 96, 46, p.yellow, 0.58)}
    ${rect(x + 318, y - 44, 64, 112, 28, p.floor, 0.44)}
  `;
}

function ambientCues(job: Job, p: Palette) {
  const seed = hash(`${job.record.slug}-${job.frame}-cue`);
  const cx = 248 + (seed % 516);
  const cy = 522 + ((seed >>> 4) % 360);
  const progress = t(job.frame, job.total);
  return `
    <g opacity="0.5">
      ${circle(cx, cy, 42 + (seed % 34), p.yellow, 0.18)}
      ${circle(cx + 98, cy - 54, 26 + ((seed >>> 8) % 22), p.mint, 0.24)}
      <path d="M${cx - 80} ${cy + 28} C${cx + 4} ${cy - 62} ${cx + 126} ${cy + 110} ${cx + 214} ${cy + 12}" fill="none" stroke="${p.mint}" stroke-width="10" stroke-linecap="round" opacity="0.46"/>
      <path d="M${cx - 34} ${cy + 112} C${cx + 76} ${cy + 168} ${cx + 124} ${cy - 22} ${cx + 234} ${cy + 58}" fill="none" stroke="${p.lavender}" stroke-width="8" stroke-linecap="round" opacity="0.44"/>
      ${circle(168 + progress * 90, 1086 - progress * 70, 12, p.accent, 0.34)}
      ${circle(890 - progress * 70, 718 + progress * 80, 10, p.mint, 0.38)}
    </g>
  `;
}

function head(cx: number, cy: number, p: Palette, scale = 1) {
  const r = 44 * scale;
  return `
    ${circle(cx, cy, r, p.skin, 0.98)}
    <path d="M${cx - r * 0.9} ${cy - r * 0.18} C${cx - r * 0.44} ${cy - r * 1.32} ${cx + r * 1.08} ${cy - r * 1.08} ${cx + r * 0.98} ${cy + r * 0.2} C${cx + r * 0.34} ${cy - r * 0.34} ${cx - r * 0.1} ${cy - r * 0.34} ${cx - r * 0.9} ${cy - r * 0.18}Z" fill="${p.hair}"/>
    ${circle(cx + r * 0.86, cy - r * 0.7, r * 0.42, p.hair, 1)}
    <path d="M${cx - r * 0.26} ${cy + r * 0.28} C${cx - r * 0.02} ${cy + r * 0.48} ${cx + r * 0.24} ${cy + r * 0.42} ${cx + r * 0.44} ${cy + r * 0.2}" fill="none" stroke="#8B5E4B" stroke-width="${4 * scale}" stroke-linecap="round" opacity="0.5"/>
  `;
}

function human(parts: {
  p: Palette;
  head: [number, number];
  torso: Array<[number, number]>;
  leftArm: Array<[number, number]>;
  rightArm: Array<[number, number]>;
  leftLeg: Array<[number, number]>;
  rightLeg: Array<[number, number]>;
  scale?: number;
  floor?: boolean;
  seated?: boolean;
}) {
  const scale = parts.scale || 1;
  const [hx, hy] = parts.head;
  const limb = 42 * scale;
  const leg = 46 * scale;
  const shirt = 66 * scale;
  const groundY = parts.floor ? 1438 : parts.seated ? 1370 : 1424;
  return `
    <g filter="url(#softShadow)">
      ${ellipse(540, groundY, parts.floor ? 312 : 212, parts.floor ? 40 : 34, "#0F172A", 0.12)}
      ${line(parts.leftLeg, "url(#pants)", leg)}
      ${line(parts.rightLeg, "url(#pants)", leg)}
      ${line(parts.leftArm, "url(#shirt)", limb)}
      ${line(parts.rightArm, "url(#shirt)", limb)}
      ${line(parts.torso, "url(#shirt)", shirt)}
      ${handsAndFeet(parts)}
      ${head(hx, hy, parts.p, scale)}
    </g>
  `;
}

function handsAndFeet(parts: Parameters<typeof human>[0]) {
  const p = parts.p;
  const scale = parts.scale || 1;
  const hands = [parts.leftArm[parts.leftArm.length - 1], parts.rightArm[parts.rightArm.length - 1]];
  const feet = [parts.leftLeg[parts.leftLeg.length - 1], parts.rightLeg[parts.rightLeg.length - 1]];
  return `
    ${hands.map(([x, y]) => circle(x, y, 22 * scale, p.skin, 0.98)).join("")}
    ${feet.map(([x, y]) => ellipse(x, y + 8, 34 * scale, 15 * scale, "#F8FAFC", 0.98)).join("")}
  `;
}

function pose(job: Job, p: Palette) {
  const kind = classify(job.record);
  switch (kind) {
    case "breathing": return poseBreathing(job, p);
    case "cardio": return poseCardio(job, p);
    case "chair": return poseChair(job, p);
    case "child": return poseYoga(job, p);
    case "floor": return poseFloor(job, p);
    case "functional": return poseFunctional(job, p);
    case "phone": return posePhone(job, p);
    case "reaching": return poseReaching(job, p);
    case "sideBend": return poseSideBend(job, p);
    case "walking": return poseWalking(job, p);
    case "writing": return poseWriting(job, p);
    case "yoga": return poseYoga(job, p);
    default: return poseStanding(job, p);
  }
}

function poseStanding(job: Job, p: Palette) {
  const progress = t(job.frame, job.total);
  return human({
    p,
    head: [540, 690],
    torso: [[540, 780], [540 + 18 * progress, 1082]],
    leftArm: [[500, 850], [410 - 36 * progress, 1004]],
    rightArm: [[580, 850], [674 + 36 * progress, 1004]],
    leftLeg: [[516, 1082], [456, 1396]],
    rightLeg: [[566, 1082], [632, 1396]]
  });
}

function poseBreathing(job: Job, p: Palette) {
  const progress = t(job.frame, job.total);
  const open = 86 + Math.sin(progress * Math.PI) * 70;
  return `
    <circle cx="540" cy="920" r="${150 + progress * 120}" fill="none" stroke="${p.mint}" stroke-width="16" opacity="0.42"/>
    <circle cx="540" cy="920" r="${208 + progress * 148}" fill="none" stroke="${p.lavender}" stroke-width="12" opacity="0.34"/>
    ${human({
      p,
      head: [540, 708],
      torso: [[540, 800], [540, 1088]],
      leftArm: [[500, 870], [540 - open, 1006]],
      rightArm: [[580, 870], [540 + open, 1006]],
      leftLeg: [[512, 1088], [430, 1386]],
      rightLeg: [[570, 1088], [652, 1386]]
    })}
  `;
}

function poseSideBend(job: Job, p: Palette) {
  const progress = t(job.frame, job.total);
  const bend = Math.sin(progress * Math.PI) * 138;
  return human({
    p,
    head: [540 + bend * 0.36, 684],
    torso: [[540, 780], [560 + bend * 0.36, 1086]],
    leftArm: [[500, 846], [420, 1038]],
    rightArm: [[580, 842], [696 + bend, 632]],
    leftLeg: [[526, 1086], [474, 1402]],
    rightLeg: [[576, 1086], [650, 1398]]
  });
}

function poseReaching(job: Job, p: Palette) {
  const progress = t(job.frame, job.total);
  const reach = 130 + Math.sin(progress * Math.PI) * 92;
  return human({
    p,
    head: [540, 684],
    torso: [[540, 780], [540, 1082]],
    leftArm: [[500, 846], [390 - reach * 0.28, 828]],
    rightArm: [[580, 846], [690 + reach * 0.28, 748]],
    leftLeg: [[516, 1082], [458, 1400]],
    rightLeg: [[566, 1082], [632, 1400]]
  });
}

function poseChair(job: Job, p: Palette) {
  const progress = t(job.frame, job.total);
  const twist = Math.sin(progress * Math.PI) * 104;
  return `
    ${rect(386, 1118, 310, 46, 23, p.accent, 0.6)}
    ${rect(610, 1156, 24, 206, 12, p.navy, 0.14)}
    ${rect(440, 1156, 24, 206, 12, p.navy, 0.12)}
    ${human({
      p,
      head: [540 + twist * 0.32, 722],
      torso: [[540, 822], [540 + twist * 0.22, 1088]],
      leftArm: [[500, 894], [398, 1042]],
      rightArm: [[580, 894], [700 + twist * 0.34, 1010]],
      leftLeg: [[516, 1088], [420, 1312]],
      rightLeg: [[570, 1088], [682, 1312]],
      seated: true
    })}
  `;
}

function poseWriting(job: Job, p: Palette) {
  const progress = t(job.frame, job.total);
  const lean = 36 + progress * 42;
  return `
    ${rect(324, 1128, 432, 44, 22, p.floor, 0.62)}
    ${rect(440, 1030, 230, 130, 24, "#FFFFFF", 0.94)}
    <path d="M476 1076 H620 M476 1116 H592" stroke="#CBD5E1" stroke-width="10" stroke-linecap="round"/>
    ${human({
      p,
      head: [510, 718 + lean * 0.12],
      torso: [[524, 810], [574 + lean * 0.42, 1082]],
      leftArm: [[500, 880], [408, 1038]],
      rightArm: [[580, 886], [666, 1104]],
      leftLeg: [[540, 1082], [444, 1328]],
      rightLeg: [[590, 1082], [704, 1322]],
      seated: true
    })}
  `;
}

function posePhone(job: Job, p: Palette) {
  const progress = t(job.frame, job.total);
  const phoneOpacity = progress < 0.45 ? 0.9 : 0.28;
  return `
    ${rect(724, 848, 92, 158, 24, p.navy, phoneOpacity)}
    ${circle(770, 970, 8, p.mint, phoneOpacity)}
    ${human({
      p,
      head: [536, 694],
      torso: [[536, 790], [536, 1086]],
      leftArm: [[496, 862], [404, 1014]],
      rightArm: [[576, 862], [progress < 0.45 ? 770 : 676, progress < 0.45 ? 936 : 790]],
      leftLeg: [[514, 1086], [450, 1398]],
      rightLeg: [[568, 1086], [636, 1398]]
    })}
  `;
}

function poseWalking(job: Job, p: Palette) {
  const progress = t(job.frame, job.total);
  const step = Math.sin(progress * Math.PI) * 150;
  return `
    <path d="M96 1452 C284 1280 438 1474 636 1312 C790 1190 932 1216 1036 1126" fill="none" stroke="${p.mint}" stroke-width="34" stroke-linecap="round" opacity="0.34"/>
    ${human({
      p,
      head: [540, 682],
      torso: [[540, 780], [560, 1084]],
      leftArm: [[500, 850], [404 - step * 0.22, 1004]],
      rightArm: [[582, 850], [674 + step * 0.22, 980]],
      leftLeg: [[530, 1084], [456 - step, 1400]],
      rightLeg: [[578, 1084], [650 + step, 1400]]
    })}
  `;
}

function poseCardio(job: Job, p: Palette) {
  const progress = t(job.frame, job.total);
  const lift = Math.sin(progress * Math.PI) * 128;
  return `
    ${circle(388, 782 - lift, 24, p.yellow, 0.48)}
    ${circle(704, 736 - lift * 0.5, 18, p.mint, 0.56)}
    ${human({
      p,
      head: [540, 678 - lift * 0.1],
      torso: [[540, 776 - lift * 0.06], [540, 1082]],
      leftArm: [[500, 846], [400, 742 - lift]],
      rightArm: [[580, 846], [686, 742 - lift]],
      leftLeg: [[516, 1082], [454, 1400]],
      rightLeg: [[566, 1082], [660, 1368 - lift * 0.28]]
    })}
  `;
}

function poseFunctional(job: Job, p: Palette) {
  const progress = t(job.frame, job.total);
  const down = Math.sin(progress * Math.PI) * 210;
  return `
    ${rect(692, 1110, 190, 42, 21, p.accent, 0.48)}
    ${human({
      p,
      head: [540, 674 + down],
      torso: [[540, 776 + down], [540, 1080 + down * 0.28]],
      leftArm: [[500, 850 + down], [390, 986 + down]],
      rightArm: [[580, 850 + down], [700, 986 + down]],
      leftLeg: [[516, 1080 + down * 0.28], [384, 1390]],
      rightLeg: [[566, 1080 + down * 0.28], [720, 1390]]
    })}
  `;
}

function poseYoga(job: Job, p: Palette) {
  const progress = t(job.frame, job.total);
  const lower = Math.sin(progress * Math.PI) * 88;
  return `
    ${ellipse(540, 1430, 340, 42, p.lavender, 0.22)}
    ${human({
      p,
      head: [634, 980 + lower],
      torso: [[430, 1012], [542, 1052 + lower * 0.46], [660, 1104 + lower]],
      leftArm: [[590, 1100 + lower], [786, 1160 + lower]],
      rightArm: [[576, 1140 + lower], [770, 1222 + lower]],
      leftLeg: [[420, 1088], [306, 1324]],
      rightLeg: [[470, 1104], [390, 1368]],
      floor: true,
      scale: 0.92
    })}
  `;
}

function poseFloor(job: Job, p: Palette) {
  const progress = t(job.frame, job.total);
  const tuck = Math.sin(progress * Math.PI) * 118;
  return `
    ${ellipse(540, 1436, 360, 46, p.lavender, 0.24)}
    ${human({
      p,
      head: [354, 1058],
      torso: [[414, 1108], [598, 1156]],
      leftArm: [[462, 1118], [536, 1310 - tuck * 0.18]],
      rightArm: [[526, 1140], [650, 1284 - tuck * 0.18]],
      leftLeg: [[598, 1156], [716 - tuck, 1032 + tuck * 0.32]],
      rightLeg: [[626, 1182], [790 - tuck, 1094 + tuck * 0.22]],
      floor: true,
      scale: 0.88
    })}
  `;
}

function svg(job: Job) {
  const p = paletteFor(job.record);
  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(job.record.title)} frame ${job.frame}">
    ${defs(p)}
    ${background(job, p)}
    ${pose(job, p)}
  </svg>`;
}

async function exists(filePath: string) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function defaultTargetPath(slug: string, frame: number) {
  return path.join("public", "videos", "frames", slug, `${slug}-${String(frame).padStart(2, "0")}.jpg`);
}

async function render(job: Job) {
  await fs.mkdir(path.dirname(job.targetPath), { recursive: true });
  await sharp(Buffer.from(svg(job)))
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(job.targetPath);
}

function frameRole(frame: number, total: number) {
  if (frame === 1) return "abertura/preparacao";
  if (frame === total) return "encerramento/reconhecimento";
  if (frame === 2) return "execucao principal";
  if (frame === 3 && total >= 4) return "detalhe de alinhamento";
  return "variacao de execucao";
}

async function buildJobs() {
  const planData = JSON.parse(await fs.readFile(path.join(videosDir, "frame-production-plan.json"), "utf8")) as { videos: FramePlan[] };
  const records = JSON.parse(await fs.readFile(path.join(videosDir, "video-manifest.json"), "utf8")) as VideoRecord[];
  const recordBySlug = new Map(records.map((record) => [record.slug, record]));
  const jobs: Job[] = [];

  for (const plan of planData.videos) {
    if (slugArg && plan.slug !== slugArg) continue;
    const record = recordBySlug.get(plan.slug);
    if (!record) continue;

    const targets = allFrames
      ? Array.from({ length: plan.required_frame_count }, (_, index) => ({
          frame: index + 1,
          target_path: defaultTargetPath(plan.slug, index + 1),
          role: frameRole(index + 1, plan.required_frame_count)
        }))
      : plan.frame_targets;

    for (const target of targets) {
      const targetPath = path.resolve(root, target.target_path);
      jobs.push({
        record,
        plan,
        frame: target.frame,
        total: plan.required_frame_count,
        targetPath,
        role: target.role
      });
    }
  }

  return limit ? jobs.slice(0, limit) : jobs;
}

async function main() {
  await fs.mkdir(framesDir, { recursive: true });
  await fs.mkdir(docsDir, { recursive: true });
  const jobs = await buildJobs();
  const rendered: Array<{ slug: string; frame: number; path: string }> = [];
  const skipped: Array<{ slug: string; frame: number; path: string }> = [];

  for (const job of jobs) {
    if (!force && await exists(job.targetPath)) {
      skipped.push({ slug: job.record.slug, frame: job.frame, path: path.relative(root, job.targetPath) });
      continue;
    }
    await render(job);
    rendered.push({ slug: job.record.slug, frame: job.frame, path: path.relative(root, job.targetPath) });
  }

  const byWave = rendered.reduce<Record<string, number>>((acc, item) => {
    const wave = String(jobs.find((job) => job.record.slug === item.slug)?.record.batch_wave || "unknown");
    acc[wave] = (acc[wave] || 0) + 1;
    return acc;
  }, {});

  const report = {
    generated_at: new Date().toISOString(),
    mode: allFrames ? "all-final-frame-slots" : "missing-frame-targets",
    force,
    requested_jobs: jobs.length,
    rendered_count: rendered.length,
    skipped_count: skipped.length,
    rendered_by_wave: byWave,
    output: "public/videos/frames/<slug>/<slug>-NN.jpg",
    policy: "final editorial wellness art; no text, logo, watermark, clinical look, gym-aggressive styling, or placeholder source art"
  };

  await fs.writeFile(path.join(docsDir, "final-frame-art-report.json"), `${JSON.stringify({ ...report, rendered, skipped }, null, 2)}\n`, "utf8");
  console.log(JSON.stringify(report, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
