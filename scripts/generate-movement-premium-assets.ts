import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { exerciseInstructionSeeds, type ExerciseInstructionSeed } from "../lib/exercise-instruction-data";
import { walkingModes, type WalkingModeConfig } from "../lib/walking";
import { yogaPracticeSeeds, yogaSequenceSeeds, type YogaPracticeSeed, type YogaSequenceSeed } from "../lib/yoga-data";

const root = process.cwd();
const width = 1024;
const height = 768;
const force = process.argv.includes("--force");

type AssetDir = "exercises" | "walking" | "yoga";
type Domain = "exercise" | "walking" | "yoga";
type PoseKind =
  | "ankleFoot"
  | "armReach"
  | "breathing"
  | "calfWall"
  | "catCow"
  | "chairMarch"
  | "chairTwist"
  | "chestDoor"
  | "childPose"
  | "floorBack"
  | "gluteSeated"
  | "hamstring"
  | "hip"
  | "lowImpactCardio"
  | "mountain"
  | "neckShoulder"
  | "quad"
  | "rope"
  | "shadowBoxing"
  | "sideBend"
  | "squat"
  | "standing"
  | "upperBack"
  | "walking"
  | "wallDog"
  | "warrior"
  | "wrist";

type RenderContext = {
  dir: AssetDir;
  domain: Domain;
  slug: string;
  title: string;
  details: string;
  pose: PoseKind;
  frame: number;
  total: number;
  card: boolean;
};

type Plan = {
  dir: AssetDir;
  domain: Domain;
  slug: string;
  title: string;
  details: string;
  pose: PoseKind;
  baseKey: string;
  frameKeys: string[];
};

type Palette = ReturnType<typeof palette>;

const movementCategories = new Set([
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
  let output = 0;
  for (const char of value) output = (output * 33 + char.charCodeAt(0)) >>> 0;
  return output;
}

function palette(slug: string) {
  const palettes = [
    { wall: "#F6F1EA", wall2: "#FFF7ED", mint: "#9FE6CF", lavender: "#C8B6FF", navy: "#0F274B", teal: "#7DB4A7", floor: "#C99C6C", skin: "#E9B58E", hair: "#2A1B22", pants: "#B7A0F3", shirt: "#12325F", accent: "#E9D8FD" },
    { wall: "#F7F9F8", wall2: "#EFF7F4", mint: "#A8E6CF", lavender: "#D7C5FF", navy: "#102A43", teal: "#80B9AE", floor: "#B88958", skin: "#D99A77", hair: "#271A16", pants: "#C4B5FD", shirt: "#153E75", accent: "#D9F99D" },
    { wall: "#FAF7F2", wall2: "#F1F8F5", mint: "#A7F3D0", lavender: "#DDD6FE", navy: "#172554", teal: "#8EBDB2", floor: "#C08A57", skin: "#F0BC93", hair: "#302018", pants: "#BFA6EF", shirt: "#0B315F", accent: "#BAE6FD" },
    { wall: "#F8FAFC", wall2: "#F5F1FF", mint: "#B7EAD8", lavender: "#C4B5FD", navy: "#132B4F", teal: "#78B7AD", floor: "#BE8D60", skin: "#E6AA82", hair: "#231916", pants: "#BCA7F2", shirt: "#102E5C", accent: "#FDE68A" }
  ];
  return palettes[hash(slug) % palettes.length];
}

function progress(frame: number, total: number) {
  if (total <= 1) return 0.5;
  return frame / (total - 1);
}

function wave(ctx: RenderContext, scale = 1) {
  const seed = hash(`${ctx.slug}-${ctx.frame}`);
  return ((seed % 100) / 100 - 0.5) * scale;
}

function isMovementSeed(seed: ExerciseInstructionSeed) {
  return seed.area === "BODY_MOVEMENT" ||
    movementCategories.has(seed.category) ||
    ["MOBILITY", "REPS_BASED", "STRETCHING", "WALKING"].includes(seed.instructionType);
}

function exerciseFrameCount(seed: ExerciseInstructionSeed) {
  if (["MOBILITY", "REPS_BASED", "STRETCHING", "WALKING"].includes(seed.instructionType)) return 5;
  if (seed.instructionType === "WALKING") return 5;
  if (seed.instructionType === "REPS_BASED") return 5;
  if (movementCategories.has(seed.category)) return 5;
  return 3;
}

function classify(slug: string, title: string, details = "", domain: Domain = "exercise"): PoseKind {
  const nameValue = slugText(`${slug} ${title}`);
  const value = slugText(`${slug} ${title} ${details}`);
  if (domain === "walking") {
    if (value.includes("cadeira") || value.includes("chair")) return "chairMarch";
    if (value.includes("subida") || value.includes("inclinacao") || value.includes("power") || value.includes("emagrecimento") || value.includes("condicionamento")) return "walking";
    return "walking";
  }
  if (value.includes("corda")) return "rope";
  if (value.includes("luta") || value.includes("sombra")) return "shadowBoxing";
  if (value.includes("jumping") || value.includes("polichinelo") || value.includes("marcha") || value.includes("ativacao") || value.includes("energia")) return "lowImpactCardio";
  if (value.includes("sono") || value.includes("noite") || value.includes("restaurativa") || value.includes("desacelerar")) return "childPose";
  if (value.includes("foco") || value.includes("trabalho")) return "chairTwist";
  if (value.includes("agachamento") || value.includes("funcional")) return "squat";
  if (value.includes("guerreiro")) return "warrior";
  if (value.includes("cachorro") || value.includes("parede adaptado")) return "wallDog";
  if (value.includes("gato") || value.includes("vaca")) return "catCow";
  if (value.includes("crianca")) return "childPose";
  if (value.includes("montanha")) return "mountain";
  if (value.includes("torcao") && (value.includes("cadeira") || value.includes("sentad"))) return "chairTwist";
  if (value.includes("torcao") || value.includes("livro aberto") || value.includes("rotacao toracica")) return "chairTwist";
  if (value.includes("pescoco") || value.includes("cervical") || value.includes("elevador da escapula")) return "neckShoulder";
  if (value.includes("ombro") || value.includes("escapula") || value.includes("deltoide") || value.includes("trapezio")) return "upperBack";
  if (value.includes("peito") || value.includes("peitoral") || value.includes("porta")) return "chestDoor";
  if (value.includes("punho") || value.includes("dedo") || value.includes("polegar") || value.includes("mao")) return "wrist";
  if (value.includes("antebraco") || value.includes("cotovelo") || value.includes("biceps") || value.includes("triceps") || value.includes("braco")) return "armReach";
  if (value.includes("lombar") || value.includes("joelho ao peito") || value.includes("bascula") || value.includes("deitado")) return "floorBack";
  if (value.includes("quadril") || value.includes("borboleta") || value.includes("90/90") || value.includes("noventa") || value.includes("pombo")) return "hip";
  if (value.includes("gluteo") || value.includes("piriforme") || value.includes("figura quatro")) return "gluteSeated";
  if (value.includes("posterior") || value.includes("isquiot") || value.includes("toalha") || value.includes("bom dia")) return "hamstring";
  if (value.includes("quadriceps") || value.includes("anterior de coxa")) return "quad";
  if (value.includes("panturrilha") || value.includes("soleo")) return "calfWall";
  if (value.includes("tornozelo") || value.includes("fascia") || value.includes("pe ") || value.includes("pes")) return "ankleFoot";
  if (nameValue.includes("respir")) return "breathing";
  if (value.includes("caminhada")) return "walking";
  if (value.includes("sentado")) return "chairTwist";
  if (value.includes("lateral") || value.includes("coluna")) return "sideBend";
  if (value.includes("alongamento")) return "sideBend";
  return "standing";
}

function exercisePlans() {
  return exerciseInstructionSeeds.filter(isMovementSeed).map((seed): Plan => {
    const frameCount = exerciseFrameCount(seed);
    const details = [
      seed.category,
      seed.shortDescription,
      seed.objective,
      seed.howToSteps.join(" "),
      seed.postureTips.join(" ")
    ].join(" ");
    return {
      dir: "exercises",
      domain: "exercise",
      slug: seed.imageKey,
      title: seed.title,
      details,
      pose: classify(seed.imageKey, seed.title, details),
      baseKey: seed.imageKey,
      frameKeys: Array.from({ length: frameCount }, (_, index) => `${seed.imageKey}-${index + 1}`)
    };
  });
}

function walkingPlans() {
  return walkingModes.map((mode: WalkingModeConfig): Plan => {
    const details = [mode.intensity, mode.audience, mode.objectives.join(" "), mode.primaryMuscles.join(" "), mode.guide.join(" ")].join(" ");
    return {
      dir: "walking",
      domain: "walking",
      slug: mode.id,
      title: mode.title,
      details,
      pose: classify(mode.id, mode.title, details, "walking"),
      baseKey: mode.id,
      frameKeys: Array.from({ length: 3 }, (_, index) => `${mode.id}-${index + 1}`)
    };
  });
}

function yogaPlans() {
  const practicePlans = yogaPracticeSeeds.map((practice: YogaPracticeSeed): Plan => {
    const details = [
      practice.area,
      practice.yogaType,
      practice.shortDescription,
      practice.imageFrameDescriptions.join(" "),
      practice.howToSteps.join(" ")
    ].join(" ");
    return {
      dir: "yoga",
      domain: "yoga",
      slug: practice.slug,
      title: practice.title,
      details,
      pose: classify(practice.slug, practice.title, details, "yoga"),
      baseKey: practice.imageKey,
      frameKeys: practice.imageSequenceKeys
    };
  });

  const sequencePlans = yogaSequenceSeeds.map((sequence: YogaSequenceSeed): Plan => {
    const details = [
      sequence.context,
      sequence.description,
      sequence.goals.join(" "),
      sequence.practiceSlugs.join(" ")
    ].join(" ");
    return {
      dir: "yoga",
      domain: "yoga",
      slug: sequence.slug,
      title: sequence.title,
      details,
      pose: classify(sequence.slug, sequence.title, details, "yoga"),
      baseKey: sequence.imageKey,
      frameKeys: Array.from({ length: 5 }, (_, index) => `${sequence.imageKey}-${index + 1}`)
    };
  });

  return [...practicePlans, ...sequencePlans];
}

function pathD(points: Array<[number, number]>) {
  return points.map(([x, y], index) => `${index ? "L" : "M"}${Math.round(x)} ${Math.round(y)}`).join(" ");
}

function line(points: Array<[number, number]>, color: string, size: number, opacity = 1) {
  return `<path d="${pathD(points)}" fill="none" stroke="${color}" stroke-width="${size}" stroke-linecap="round" stroke-linejoin="round" opacity="${opacity}"/>`;
}

function ellipse(cx: number, cy: number, rx: number, ry: number, fill: string, opacity = 1) {
  return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}" opacity="${opacity}"/>`;
}

function circle(cx: number, cy: number, r: number, fill: string, opacity = 1) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" opacity="${opacity}"/>`;
}

function room(ctx: RenderContext, p: Palette) {
  const shift = wave(ctx, 44);
  const outdoor = ctx.domain === "walking" && ctx.pose !== "chairMarch";
  return `
    <rect width="${width}" height="${height}" fill="url(#wall)"/>
    <rect x="0" y="560" width="${width}" height="208" fill="url(#floor)"/>
    <path d="M0 602 C188 542 330 608 510 578 C730 540 836 588 1024 520 L1024 768 L0 768 Z" fill="${p.mint}" opacity="0.16"/>
    <rect x="74" y="96" width="246" height="282" rx="30" fill="#FFFFFF" opacity="0.9"/>
    <rect x="96" y="120" width="202" height="236" rx="22" fill="${outdoor ? "#DFF5EE" : "#F8FBFF"}"/>
    <circle cx="${168 + shift}" cy="184" r="54" fill="#FDE68A" opacity="0.54"/>
    <path d="M94 314 C142 260 212 268 298 218 L298 356 L94 356 Z" fill="${p.mint}" opacity="0.44"/>
    <path d="M96 344 C164 304 236 326 298 288" fill="none" stroke="#8FB8A7" stroke-width="9" stroke-linecap="round" opacity="0.42"/>
    <rect x="98" y="594" width="604" height="82" rx="41" fill="${p.lavender}" opacity="0.32"/>
    <rect x="188" y="632" width="640" height="46" rx="23" fill="${p.mint}" opacity="0.28"/>
    ${roomDesk(ctx, p)}
    ${roomPlant(820 + shift * 0.35, 430, p)}
    ${roomShelf(p)}
  `;
}

function roomDesk(ctx: RenderContext, p: Palette) {
  const office = /trabalho|cadeira|sentad|punho|mao|ombro|pescoco|toracica|respir/i.test(ctx.details) || ctx.pose === "chairTwist" || ctx.pose === "chairMarch";
  if (!office) {
    return `
      <rect x="678" y="520" width="178" height="24" rx="12" fill="${p.floor}" opacity="0.56"/>
      <rect x="708" y="542" width="18" height="82" rx="9" fill="${p.navy}" opacity="0.12"/>
      <rect x="810" y="542" width="18" height="82" rx="9" fill="${p.navy}" opacity="0.12"/>
    `;
  }
  return `
    <rect x="672" y="438" width="260" height="28" rx="14" fill="${p.floor}" opacity="0.82"/>
    <rect x="704" y="466" width="18" height="112" rx="9" fill="${p.navy}" opacity="0.16"/>
    <rect x="890" y="466" width="18" height="112" rx="9" fill="${p.navy}" opacity="0.16"/>
    <rect x="726" y="394" width="112" height="30" rx="8" fill="#E2E8F0"/>
    <rect x="838" y="408" width="44" height="44" rx="22" fill="${p.lavender}" opacity="0.76"/>
    <rect x="612" y="485" width="116" height="28" rx="14" fill="${p.teal}" opacity="0.62"/>
    <rect x="642" y="510" width="18" height="96" rx="9" fill="${p.navy}" opacity="0.12"/>
    <rect x="710" y="510" width="18" height="96" rx="9" fill="${p.navy}" opacity="0.12"/>
  `;
}

function roomPlant(cx: number, cy: number, p: Palette) {
  return `
    <rect x="${cx - 28}" y="${cy + 86}" width="58" height="62" rx="18" fill="${p.teal}" opacity="0.84"/>
    <path d="M${cx} ${cy + 94} C${cx - 70} ${cy + 22} ${cx - 42} ${cy - 34} ${cx + 8} ${cy + 18}" fill="${p.mint}" opacity="0.76"/>
    <path d="M${cx + 2} ${cy + 96} C${cx + 76} ${cy + 28} ${cx + 54} ${cy - 28} ${cx + 8} ${cy + 22}" fill="${p.mint}" opacity="0.68"/>
    <path d="M${cx - 2} ${cy + 98} C${cx - 18} ${cy + 30} ${cx + 38} ${cy - 10} ${cx + 48} ${cy + 46}" fill="#6AAE8D" opacity="0.56"/>
  `;
}

function roomShelf(p: Palette) {
  return `
    <rect x="742" y="122" width="190" height="16" rx="8" fill="${p.floor}" opacity="0.7"/>
    <rect x="770" y="82" width="70" height="40" rx="10" fill="#FFFFFF" opacity="0.82"/>
    <rect x="856" y="88" width="44" height="34" rx="17" fill="${p.lavender}" opacity="0.76"/>
    <path d="M820 122 C790 84 818 54 852 80 C858 108 844 120 820 122Z" fill="${p.mint}" opacity="0.72"/>
  `;
}

function frameDots(ctx: RenderContext, p: Palette) {
  if (ctx.card) return "";
  const gap = 30;
  const start = width / 2 - ((ctx.total - 1) * gap) / 2;
  return Array.from({ length: ctx.total }, (_, index) =>
    circle(start + index * gap, 714, index === ctx.frame ? 8 : 5, index === ctx.frame ? p.navy : p.mint, index === ctx.frame ? 0.72 : 0.46)
  ).join("");
}

function movementCue(ctx: RenderContext, p: Palette) {
  const seed = hash(`${ctx.slug}-${ctx.pose}`);
  const x = 352 + (seed % 190);
  const y = 236 + ((seed >>> 4) % 110);
  const radius = 42 + ((seed >>> 9) % 32);
  const sweep = 70 + ((seed >>> 13) % 70);
  const cueByPose: Record<PoseKind, [number, number]> = {
    ankleFoot: [622, 566],
    armReach: [650, 318],
    breathing: [512, 386],
    calfWall: [612, 548],
    catCow: [512, 382],
    chairMarch: [580, 506],
    chairTwist: [596, 362],
    chestDoor: [512, 330],
    childPose: [650, 468],
    floorBack: [600, 492],
    gluteSeated: [610, 480],
    hamstring: [650, 526],
    hip: [512, 488],
    lowImpactCardio: [512, 330],
    mountain: [512, 250],
    neckShoulder: [550, 270],
    quad: [608, 482],
    rope: [512, 420],
    shadowBoxing: [676, 314],
    sideBend: [610, 292],
    squat: [512, 488],
    standing: [512, 360],
    upperBack: [512, 338],
    walking: [560, 532],
    wallDog: [660, 370],
    warrior: [646, 332],
    wrist: [378, 374]
  };
  const [cx, cy] = cueByPose[ctx.pose];
  return `
    <g opacity="0.48">
      <circle cx="${cx}" cy="${cy}" r="${radius}" fill="${p.accent}" opacity="0.22"/>
      <path d="M${x} ${y} C${x + sweep} ${y - 46} ${x + sweep * 1.36} ${y + 54} ${x + sweep * 2.02} ${y + 8}" fill="none" stroke="${p.mint}" stroke-width="8" stroke-linecap="round" opacity="0.58"/>
      <path d="M${x + 18} ${y + 34} C${x + sweep * 0.76} ${y + 76} ${x + sweep * 1.22} ${y - 20} ${x + sweep * 1.78} ${y + 22}" fill="none" stroke="${p.lavender}" stroke-width="7" stroke-linecap="round" opacity="0.52"/>
      ${circle(188 + (seed % 88), 468 + ((seed >>> 6) % 92), 10 + ((seed >>> 11) % 10), p.accent, 0.38)}
      ${circle(724 + ((seed >>> 3) % 92), 270 + ((seed >>> 8) % 88), 8 + ((seed >>> 12) % 8), p.mint, 0.42)}
    </g>
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
  seated?: boolean;
  floor?: boolean;
}) {
  const scale = parts.scale || 1;
  const [hx, hy] = parts.head;
  const p = parts.p;
  const limb = 32 * scale;
  const leg = 36 * scale;
  const shirt = 50 * scale;
  return `
    <g filter="url(#softShadow)">
      ${ellipse(512, parts.floor ? 625 : parts.seated ? 594 : 610, parts.floor ? 250 : 172, parts.floor ? 30 : 26, "#0F172A", 0.12)}
      ${line(parts.leftLeg, "url(#pants)", leg)}
      ${line(parts.rightLeg, "url(#pants)", leg)}
      ${line(parts.leftArm, "url(#shirt)", limb)}
      ${line(parts.rightArm, "url(#shirt)", limb)}
      ${line(parts.torso, "url(#shirt)", shirt)}
      ${handsAndFeet(parts)}
      ${head(hx, hy, p, scale)}
    </g>
  `;
}

function handsAndFeet(parts: Parameters<typeof human>[0]) {
  const p = parts.p;
  const scale = parts.scale || 1;
  const handSize = 17 * scale;
  const footSize = 20 * scale;
  const armEnds = [parts.leftArm[parts.leftArm.length - 1], parts.rightArm[parts.rightArm.length - 1]];
  const legEnds = [parts.leftLeg[parts.leftLeg.length - 1], parts.rightLeg[parts.rightLeg.length - 1]];
  return `
    ${armEnds.map(([x, y]) => circle(x, y, handSize, p.skin, 0.98)).join("")}
    ${legEnds.map(([x, y]) => ellipse(x, y + 4, footSize * 1.4, footSize * 0.58, "#F8FAFC", 0.98)).join("")}
  `;
}

function head(cx: number, cy: number, p: Palette, scale = 1) {
  const r = 32 * scale;
  return `
    ${circle(cx, cy, r, p.skin, 0.98)}
    <path d="M${cx - r * 0.86} ${cy - r * 0.18} C${cx - r * 0.42} ${cy - r * 1.32} ${cx + r * 1.06} ${cy - r * 1.06} ${cx + r * 0.96} ${cy + r * 0.2} C${cx + r * 0.34} ${cy - r * 0.34} ${cx - r * 0.1} ${cy - r * 0.34} ${cx - r * 0.86} ${cy - r * 0.18}Z" fill="${p.hair}"/>
    <circle cx="${cx + r * 0.84}" cy="${cy - r * 0.68}" r="${r * 0.42}" fill="${p.hair}"/>
    <path d="M${cx - r * 0.28} ${cy + r * 0.3} C${cx - r * 0.02} ${cy + r * 0.46} ${cx + r * 0.22} ${cy + r * 0.42} ${cx + r * 0.42} ${cy + r * 0.22}" fill="none" stroke="#8B5E4B" stroke-width="${3 * scale}" stroke-linecap="round" opacity="0.48"/>
  `;
}

function pose(ctx: RenderContext, p: Palette) {
  switch (ctx.pose) {
    case "ankleFoot": return poseAnkleFoot(ctx, p);
    case "armReach": return poseArmReach(ctx, p);
    case "breathing": return poseBreathing(ctx, p);
    case "calfWall": return poseCalfWall(ctx, p);
    case "catCow": return poseCatCow(ctx, p);
    case "chairMarch": return poseChairMarch(ctx, p);
    case "chairTwist": return poseChairTwist(ctx, p);
    case "chestDoor": return poseChestDoor(ctx, p);
    case "childPose": return poseChild(ctx, p);
    case "floorBack": return poseFloorBack(ctx, p);
    case "gluteSeated": return poseGluteSeated(ctx, p);
    case "hamstring": return poseHamstring(ctx, p);
    case "hip": return poseHip(ctx, p);
    case "lowImpactCardio": return poseLowImpact(ctx, p);
    case "mountain": return poseMountain(ctx, p);
    case "neckShoulder": return poseNeck(ctx, p);
    case "quad": return poseQuad(ctx, p);
    case "rope": return poseRope(ctx, p);
    case "shadowBoxing": return poseShadowBoxing(ctx, p);
    case "sideBend": return poseSideBend(ctx, p);
    case "squat": return poseSquat(ctx, p);
    case "upperBack": return poseUpperBack(ctx, p);
    case "walking": return poseWalking(ctx, p);
    case "wallDog": return poseWallDog(ctx, p);
    case "warrior": return poseWarrior(ctx, p);
    case "wrist": return poseWrist(ctx, p);
    default: return poseStanding(ctx, p);
  }
}

function poseStanding(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  return human({
    p,
    head: [512, 222],
    torso: [[512, 284], [512 + 10 * t, 430]],
    leftArm: [[486, 320], [420 - 28 * t, 398]],
    rightArm: [[538, 320], [604 + 28 * t, 398]],
    leftLeg: [[496, 430], [456, 586]],
    rightLeg: [[528, 430], [570, 586]]
  });
}

function poseBreathing(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const open = 54 + Math.sin(t * Math.PI) * 38;
  return `
    <circle cx="512" cy="386" r="${102 + t * 48}" fill="none" stroke="${p.mint}" stroke-width="12" opacity="0.45"/>
    <circle cx="512" cy="386" r="${142 + t * 60}" fill="none" stroke="${p.lavender}" stroke-width="10" opacity="0.36"/>
    ${human({
      p,
      head: [512, 230],
      torso: [[512, 292], [512, 432]],
      leftArm: [[486, 330], [512 - open, 392]],
      rightArm: [[538, 330], [512 + open, 392]],
      leftLeg: [[494, 432], [438, 570]],
      rightLeg: [[530, 432], [588, 570]]
    })}
  `;
}

function poseSideBend(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const bend = Math.sin(t * Math.PI) * 90;
  return human({
    p,
    head: [512 + bend * 0.36, 226],
    torso: [[512, 286], [528 + bend * 0.36, 430]],
    leftArm: [[488, 318], [438, 412]],
    rightArm: [[540, 316], [628 + bend, 238]],
    leftLeg: [[506, 430], [470, 588]],
    rightLeg: [[536, 430], [588, 586]]
  });
}

function poseNeck(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const side = t < 0.5 ? -1 : 1;
  const lean = Math.sin(t * Math.PI) * 34;
  return `
    <path d="M650 262 C708 282 734 342 724 404" fill="none" stroke="${p.mint}" stroke-width="9" stroke-linecap="round" opacity="0.52"/>
    ${human({
      p,
      head: [512 + side * lean, 228 + lean * 0.12],
      torso: [[512, 292], [512, 432]],
      leftArm: [[486, 326], [430, 408]],
      rightArm: [[538, 326], [600 + side * 34, 358]],
      leftLeg: [[496, 432], [454, 590]],
      rightLeg: [[528, 432], [570, 590]]
    })}
  `;
}

function poseUpperBack(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const hug = Math.sin(t * Math.PI) * 74;
  return human({
    p,
    head: [512, 230],
    torso: [[512, 292], [512, 432]],
    leftArm: [[486, 326], [560 + hug * 0.2, 372]],
    rightArm: [[538, 326], [464 - hug * 0.2, 374]],
    leftLeg: [[496, 432], [454, 590]],
    rightLeg: [[528, 432], [570, 590]]
  });
}

function poseChestDoor(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const open = 96 + Math.sin(t * Math.PI) * 86;
  return `
    <rect x="264" y="116" width="26" height="512" rx="13" fill="${p.navy}" opacity="0.18"/>
    <rect x="736" y="116" width="26" height="512" rx="13" fill="${p.navy}" opacity="0.18"/>
    ${human({
      p,
      head: [512, 228],
      torso: [[512, 288], [512, 432]],
      leftArm: [[486, 320], [512 - open, 380 - t * 44]],
      rightArm: [[538, 320], [512 + open, 380 - t * 44]],
      leftLeg: [[496, 432], [454, 588]],
      rightLeg: [[528, 432], [570, 588]]
    })}
  `;
}

function poseWrist(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const pull = Math.sin(t * Math.PI) * 62;
  return `
    <rect x="286" y="500" width="452" height="30" rx="15" fill="${p.floor}" opacity="0.45"/>
    ${human({
      p,
      head: [512, 228],
      torso: [[512, 292], [512, 432]],
      leftArm: [[486, 324], [396, 364], [340, 364 + pull * 0.25]],
      rightArm: [[538, 324], [430 + pull, 382]],
      leftLeg: [[496, 432], [452, 588]],
      rightLeg: [[528, 432], [574, 588]]
    })}
  `;
}

function poseArmReach(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const reach = 90 + Math.sin(t * Math.PI) * 58;
  return human({
    p,
    head: [512, 226],
    torso: [[512, 288], [512, 430]],
    leftArm: [[486, 320], [420 - reach * 0.35, 300]],
    rightArm: [[538, 320], [612 + reach * 0.34, 288]],
    leftLeg: [[496, 430], [454, 588]],
    rightLeg: [[528, 430], [572, 588]]
  });
}

function poseChairTwist(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const twist = Math.sin(t * Math.PI) * 72;
  return `
    <rect x="392" y="474" width="240" height="36" rx="18" fill="${p.teal}" opacity="0.62"/>
    <rect x="566" y="504" width="18" height="104" rx="9" fill="${p.navy}" opacity="0.15"/>
    <rect x="430" y="504" width="18" height="104" rx="9" fill="${p.navy}" opacity="0.12"/>
    ${human({
      p,
      head: [512 + twist * 0.32, 250],
      torso: [[512, 310], [512 + twist * 0.22, 430]],
      leftArm: [[488, 344], [410, 420]],
      rightArm: [[536, 344], [622 + twist * 0.35, 394]],
      leftLeg: [[494, 430], [430, 548]],
      rightLeg: [[532, 430], [600, 548]],
      seated: true
    })}
  `;
}

function poseChairMarch(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const step = Math.sin(t * Math.PI) * 56;
  return `
    <rect x="392" y="480" width="250" height="38" rx="19" fill="${p.teal}" opacity="0.62"/>
    <rect x="574" y="512" width="18" height="104" rx="9" fill="${p.navy}" opacity="0.15"/>
    <rect x="430" y="512" width="18" height="104" rx="9" fill="${p.navy}" opacity="0.12"/>
    ${human({
      p,
      head: [512, 250],
      torso: [[512, 310], [512, 430]],
      leftArm: [[488, 344], [410, 396 - step * 0.18]],
      rightArm: [[536, 344], [622, 396 + step * 0.18]],
      leftLeg: [[494, 430], [428 - step, 552 - step * 0.3]],
      rightLeg: [[532, 430], [604 + step, 552 + step * 0.2]],
      seated: true
    })}
  `;
}

function poseWalking(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const step = Math.sin(t * Math.PI) * 88;
  const incline = /subida|inclinacao/i.test(ctx.details) ? -34 : 0;
  return `
    <path d="M90 626 C270 552 430 630 594 556 C738 492 858 500 964 458" fill="none" stroke="${p.mint}" stroke-width="28" stroke-linecap="round" opacity="0.34"/>
    ${human({
      p,
      head: [512, 224 + incline * 0.08],
      torso: [[512, 286], [524, 430 + incline * 0.08]],
      leftArm: [[488, 320], [420 - step * 0.26, 394]],
      rightArm: [[540, 320], [610 + step * 0.26, 382]],
      leftLeg: [[506, 430], [452 - step, 586]],
      rightLeg: [[532, 430], [590 + step, 586 + incline]],
    })}
  `;
}

function poseLowImpact(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const lift = Math.sin(t * Math.PI) * 78;
  return `
    ${circle(384, 310 - lift, 18, p.accent, 0.48)}
    ${circle(660, 294 - lift * 0.5, 14, p.mint, 0.56)}
    ${human({
      p,
      head: [512, 224 - lift * 0.08],
      torso: [[512, 286 - lift * 0.06], [512, 430]],
      leftArm: [[486, 320], [418, 294 - lift]],
      rightArm: [[538, 320], [606, 294 - lift]],
      leftLeg: [[496, 430], [448, 586]],
      rightLeg: [[528, 430], [590, 570 - lift * 0.25]]
    })}
  `;
}

function poseRope(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const jump = Math.sin(t * Math.PI) * 42;
  return `
    <path d="M346 ${424 - jump} C286 ${646 - jump} 738 ${646 - jump} 678 ${424 - jump}" fill="none" stroke="${p.lavender}" stroke-width="10" stroke-linecap="round" opacity="0.78"/>
    ${human({
      p,
      head: [512, 224 - jump],
      torso: [[512, 286 - jump], [512, 424 - jump]],
      leftArm: [[486, 318 - jump], [346, 424 - jump]],
      rightArm: [[538, 318 - jump], [678, 424 - jump]],
      leftLeg: [[496, 424 - jump], [464, 584 - jump]],
      rightLeg: [[528, 424 - jump], [562, 584 - jump]]
    })}
  `;
}

function poseShadowBoxing(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const punch = 66 + t * 110;
  return `
    ${human({
      p,
      head: [494, 228],
      torso: [[498, 288], [512, 430]],
      leftArm: [[474, 320], [398, 382]],
      rightArm: [[526, 318], [624 + punch, 300]],
      leftLeg: [[492, 430], [424, 588]],
      rightLeg: [[526, 430], [604, 570]]
    })}
    <path d="M738 300 C772 284 802 288 826 304" fill="none" stroke="${p.accent}" stroke-width="10" stroke-linecap="round" opacity="0.52"/>
  `;
}

function poseSquat(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const down = Math.sin(t * Math.PI) * 108;
  return `
    <rect x="642" y="482" width="142" height="32" rx="16" fill="${p.teal}" opacity="0.48"/>
    ${human({
      p,
      head: [512, 224 + down],
      torso: [[512, 286 + down], [512, 424 + down * 0.28]],
      leftArm: [[486, 322 + down], [400, 380 + down]],
      rightArm: [[538, 322 + down], [624, 380 + down]],
      leftLeg: [[496, 424 + down * 0.28], [408, 578]],
      rightLeg: [[528, 424 + down * 0.28], [620, 578]]
    })}
  `;
}

function poseMountain(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const raise = Math.sin(t * Math.PI) * 146;
  return human({
    p,
    head: [512, 226],
    torso: [[512, 288], [512, 432]],
    leftArm: [[486, 320], [458, 402 - raise]],
    rightArm: [[538, 320], [566, 402 - raise]],
    leftLeg: [[496, 432], [468, 590]],
    rightLeg: [[528, 432], [558, 590]]
  });
}

function poseWarrior(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const open = 132 + Math.sin(t * Math.PI) * 54;
  return human({
    p,
    head: [512, 226],
    torso: [[512, 288], [512, 430]],
    leftArm: [[486, 320], [512 - open, 320]],
    rightArm: [[538, 320], [512 + open, 320]],
    leftLeg: [[496, 430], [360, 588]],
    rightLeg: [[528, 430], [676, 558]]
  });
}

function poseWallDog(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const lean = Math.sin(t * Math.PI) * 90;
  return `
    <rect x="740" y="130" width="26" height="506" rx="13" fill="${p.navy}" opacity="0.16"/>
    ${human({
      p,
      head: [596 + lean * 0.35, 334 + lean * 0.12],
      torso: [[536, 380], [648 + lean * 0.42, 378 + lean * 0.14]],
      leftArm: [[638 + lean * 0.3, 380], [746, 338]],
      rightArm: [[646 + lean * 0.3, 410], [746, 424]],
      leftLeg: [[520, 404], [452, 590]],
      rightLeg: [[558, 408], [564, 590]]
    })}
  `;
}

function poseCatCow(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const arch = Math.sin(t * Math.PI * 2) * 54;
  return `
    ${ellipse(512, 624, 260, 32, p.lavender, 0.22)}
    ${human({
      p,
      head: [666, 350 - arch * 0.18],
      torso: [[374, 390], [512, 346 - arch], [652, 392]],
      leftArm: [[426, 396], [396, 574]],
      rightArm: [[608, 398], [634, 574]],
      leftLeg: [[386, 410], [336, 572]],
      rightLeg: [[520, 410], [508, 574]],
      floor: true,
      scale: 0.94
    })}
  `;
}

function poseChild(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const lower = Math.sin(t * Math.PI) * 58;
  return `
    ${ellipse(512, 624, 272, 34, p.lavender, 0.23)}
    ${human({
      p,
      head: [620, 406 + lower],
      torso: [[424, 422], [520, 430 + lower * 0.46], [628, 460 + lower]],
      leftArm: [[560, 458 + lower], [724, 500 + lower]],
      rightArm: [[548, 484 + lower], [710, 546 + lower]],
      leftLeg: [[408, 454], [320, 560]],
      rightLeg: [[452, 470], [388, 582]],
      floor: true,
      scale: 0.94
    })}
  `;
}

function poseFloorBack(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const tuck = Math.sin(t * Math.PI) * 88;
  return `
    ${ellipse(512, 628, 286, 36, p.lavender, 0.22)}
    ${human({
      p,
      head: [342, 458],
      torso: [[386, 482], [540, 510]],
      leftArm: [[430, 488], [488, 586 - tuck * 0.2]],
      rightArm: [[484, 500], [590, 574 - tuck * 0.2]],
      leftLeg: [[538, 510], [624 - tuck, 440 + tuck * 0.3]],
      rightLeg: [[552, 528], [684 - tuck, 478 + tuck * 0.2]],
      floor: true,
      scale: 0.9
    })}
  `;
}

function poseHip(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const open = Math.sin(t * Math.PI) * 70;
  return `
    ${ellipse(512, 626, 260, 34, p.lavender, 0.22)}
    ${human({
      p,
      head: [512, 270],
      torso: [[512, 330], [512, 454]],
      leftArm: [[488, 360], [422, 456]],
      rightArm: [[536, 360], [602, 456]],
      leftLeg: [[496, 454], [408 - open, 584]],
      rightLeg: [[528, 454], [620 + open, 584]],
      seated: true
    })}
  `;
}

function poseGluteSeated(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const pull = Math.sin(t * Math.PI) * 54;
  return `
    <rect x="390" y="500" width="256" height="34" rx="17" fill="${p.teal}" opacity="0.46"/>
    ${human({
      p,
      head: [512, 260],
      torso: [[512, 322], [512, 442]],
      leftArm: [[488, 354], [424, 486]],
      rightArm: [[536, 354], [606, 486]],
      leftLeg: [[496, 442], [438, 552]],
      rightLeg: [[528, 442], [612 + pull, 504 - pull * 0.22], [636, 552]],
      seated: true
    })}
  `;
}

function poseHamstring(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const reach = Math.sin(t * Math.PI) * 88;
  const hasTowel = slugText(`${ctx.slug} ${ctx.title}`).includes("toalha");
  return `
    ${ellipse(512, 626, 260, 34, p.lavender, 0.22)}
    ${human({
      p,
      head: [478 + reach * 0.15, 288 + reach * 0.22],
      torso: [[500, 346], [548 + reach * 0.35, 452]],
      leftArm: [[516, 372], [620 + reach, 548]],
      rightArm: [[540, 386], [664 + reach, 552]],
      leftLeg: [[548, 452], [364, 586]],
      rightLeg: [[568, 462], [726, 586]],
      seated: true
    })}
    ${hasTowel ? `<path d="M${620 + reach} 548 C${666 + reach * 0.35} 500 ${704 + reach * 0.12} 520 726 586" fill="none" stroke="#F8FAFC" stroke-width="18" stroke-linecap="round" opacity="0.92"/>
    <path d="M${620 + reach} 548 C${666 + reach * 0.35} 500 ${704 + reach * 0.12} 520 726 586" fill="none" stroke="${p.teal}" stroke-width="4" stroke-linecap="round" opacity="0.64"/>` : ""}
  `;
}

function poseQuad(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const pull = Math.sin(t * Math.PI) * 62;
  return `
    <rect x="680" y="338" width="22" height="252" rx="11" fill="${p.navy}" opacity="0.12"/>
    ${human({
      p,
      head: [512, 226],
      torso: [[512, 288], [512, 430]],
      leftArm: [[486, 320], [430, 404]],
      rightArm: [[538, 320], [626, 386]],
      leftLeg: [[496, 430], [454, 590]],
      rightLeg: [[528, 430], [618 + pull, 482], [594, 588]],
    })}
  `;
}

function poseCalfWall(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const lean = Math.sin(t * Math.PI) * 52;
  return `
    <rect x="720" y="120" width="28" height="514" rx="14" fill="${p.navy}" opacity="0.16"/>
    ${human({
      p,
      head: [482 + lean, 226 + lean * 0.1],
      torso: [[492 + lean * 0.8, 288], [528 + lean * 0.4, 430]],
      leftArm: [[512, 320], [722, 340]],
      rightArm: [[538, 334], [722, 418]],
      leftLeg: [[510, 430], [398, 588]],
      rightLeg: [[540, 430], [648, 588]],
    })}
  `;
}

function poseAnkleFoot(ctx: RenderContext, p: Palette) {
  const t = progress(ctx.frame, ctx.total);
  const circleOffset = Math.sin(t * Math.PI * 2) * 26;
  return `
    ${ellipse(512, 626, 260, 34, p.lavender, 0.22)}
    <path d="M650 ${558 + circleOffset} a42 30 0 1 0 1 0" fill="none" stroke="${p.mint}" stroke-width="9" opacity="0.62"/>
    ${human({
      p,
      head: [490, 282],
      torso: [[504, 342], [532, 456]],
      leftArm: [[488, 372], [420, 470]],
      rightArm: [[536, 374], [610, 468]],
      leftLeg: [[522, 456], [390, 586]],
      rightLeg: [[548, 464], [662, 558 + circleOffset]],
      seated: true
    })}
  `;
}

function svg(ctx: RenderContext) {
  const p = palette(ctx.slug);
  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(ctx.title)}">
    <defs>
      <linearGradient id="wall" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${p.wall}"/>
        <stop offset="100%" stop-color="${p.wall2}"/>
      </linearGradient>
      <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${p.floor}" stop-opacity="0.52"/>
        <stop offset="100%" stop-color="#8B5E34" stop-opacity="0.24"/>
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
        <feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#0F172A" flood-opacity="0.16"/>
      </filter>
    </defs>
    ${room(ctx, p)}
    ${movementCue(ctx, p)}
    ${pose(ctx, p)}
    ${frameDots(ctx, p)}
  </svg>`;
}

async function render(target: string, ctx: RenderContext) {
  try {
    if (!force) {
      await fs.access(target);
      return false;
    }
  } catch {
    // Missing files are generated even without --force.
  }
  await fs.mkdir(path.dirname(target), { recursive: true });
  await writePng(target, Buffer.from(svg(ctx)));
  return true;
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function writePng(target: string, input: Buffer) {
  let lastError: unknown;
  for (let attempt = 1; attempt <= 4; attempt++) {
    const temp = `${target}.${process.pid}.${Date.now()}.${attempt}.tmp.png`;
    try {
      await sharp(input).png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(temp);
      await fs.rm(target, { force: true });
      await fs.rename(temp, target);
      return;
    } catch (error) {
      lastError = error;
      await fs.rm(temp, { force: true }).catch(() => undefined);
      await wait(200 * attempt);
    }
  }
  throw lastError;
}

async function renderPlan(plan: Plan) {
  const dir = path.join(root, "public", plan.dir);
  let generated = 0;
  let skipped = 0;
  const cardFrame = Math.min(plan.frameKeys.length - 1, Math.max(0, Math.floor(plan.frameKeys.length / 2)));
  const baseTarget = path.join(dir, `${plan.baseKey}.png`);
  if (await render(baseTarget, { ...plan, frame: cardFrame, total: plan.frameKeys.length, card: true })) generated++;
  else skipped++;

  for (let index = 0; index < plan.frameKeys.length; index++) {
    const target = path.join(dir, `${plan.frameKeys[index]}.png`);
    if (await render(target, { ...plan, frame: index, total: plan.frameKeys.length, card: false })) generated++;
    else skipped++;
  }

  return { generated, skipped };
}

async function main() {
  const plans = [...exercisePlans(), ...walkingPlans(), ...yogaPlans()];
  const seen = new Set<string>();
  let generated = 0;
  let skipped = 0;

  for (const plan of plans) {
    const key = `${plan.dir}/${plan.baseKey}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const result = await renderPlan(plan);
    generated += result.generated;
    skipped += result.skipped;
  }

  console.log(JSON.stringify({
    plans: plans.length,
    generated,
    skipped,
    force,
    output: ["public/exercises", "public/walking", "public/yoga"]
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
