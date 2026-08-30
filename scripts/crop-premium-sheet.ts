import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

type Direction = "vertical" | "horizontal";

const [, , source, targetPrefix, countArg, directionArg = "vertical"] = process.argv;

if (!source || !targetPrefix || !countArg) {
  console.error("Usage: tsx scripts/crop-premium-sheet.ts <source.png> <target-prefix> <count> [vertical|horizontal]");
  process.exit(1);
}

const count = Number(countArg);
const direction = directionArg as Direction;
const gutter = 10;

type CropBox = { left: number; top: number; width: number; height: number };

async function getVerticalAutoCrops(sourcePath: string, width: number, height: number, panelCount: number): Promise<CropBox[] | null> {
  const { data, info } = await sharp(sourcePath)
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const candidates: number[] = [];
  const channels = info.channels;
  for (let y = 0; y < info.height; y++) {
    let lightPixels = 0;
    for (let x = 0; x < info.width; x++) {
      const offset = (y * info.width + x) * channels;
      const r = data[offset] ?? 0;
      const g = data[offset + 1] ?? 0;
      const b = data[offset + 2] ?? 0;
      if (r > 238 && g > 238 && b > 238) lightPixels++;
    }
    if (lightPixels / info.width > 0.86) candidates.push(y);
  }

  const groups: Array<{ start: number; end: number; center: number }> = [];
  for (const row of candidates) {
    const last = groups.at(-1);
    if (last && row <= last.end + 1) {
      last.end = row;
      last.center = Math.round((last.start + last.end) / 2);
    } else {
      groups.push({ start: row, end: row, center: row });
    }
  }

  const dividerGroups = groups.filter((group) => {
    const size = group.end - group.start + 1;
    return size >= 2 && size <= 30;
  });

  const separators = Array.from({ length: panelCount - 1 }, (_, index) => {
    const expected = Math.round((height / panelCount) * (index + 1));
    return dividerGroups
      .sort((a, b) => Math.abs(a.center - expected) - Math.abs(b.center - expected))[0];
  });

  if (separators.some((separator) => !separator)) return null;

  const boxes: CropBox[] = [];
  let top = 0;
  for (const separator of separators) {
    boxes.push({ left: 0, top, width, height: Math.max(1, separator.start - top) });
    top = Math.min(height - 1, separator.end + 1);
  }
  boxes.push({ left: 0, top, width, height: Math.max(1, height - top) });

  return boxes.length === panelCount ? boxes : null;
}

async function main() {
  const metadata = await sharp(source).metadata();
  if (!metadata.width || !metadata.height) throw new Error("Invalid source metadata");
  await fs.mkdir(path.dirname(targetPrefix), { recursive: true });

  const autoCrops = direction === "vertical"
    ? await getVerticalAutoCrops(source, metadata.width, metadata.height, count)
    : null;

  for (let index = 0; index < count; index++) {
    const rawLeft = direction === "horizontal" ? Math.floor((metadata.width / count) * index) : 0;
    const rawTop = direction === "horizontal" ? 0 : Math.floor((metadata.height / count) * index);
    const rawWidth = direction === "horizontal"
      ? index === count - 1 ? metadata.width - rawLeft : Math.floor(metadata.width / count)
      : metadata.width;
    const rawHeight = direction === "horizontal"
      ? metadata.height
      : index === count - 1 ? metadata.height - rawTop : Math.floor(metadata.height / count);
    const left = rawLeft + (direction === "horizontal" && index > 0 ? gutter : 0);
    const top = rawTop + (direction === "vertical" && index > 0 ? gutter : 0);
    const width = rawWidth - (direction === "horizontal" ? gutter * (index > 0 ? 1 : 0) + gutter * (index < count - 1 ? 1 : 0) : 0);
    const height = rawHeight - (direction === "vertical" ? gutter * (index > 0 ? 1 : 0) + gutter * (index < count - 1 ? 1 : 0) : 0);
    const extract = autoCrops?.[index] ?? { left, top, width, height };

    await sharp(source)
      .extract(extract)
      .resize(1280, 720, { fit: "cover" })
      .png({ compressionLevel: 9 })
      .toFile(`${targetPrefix}-${index + 1}.png`);
  }

  await sharp(`${targetPrefix}-${Math.min(2, count)}.png`).toFile(`${targetPrefix}.png`);
  console.log(JSON.stringify({ source, targetPrefix, count, direction }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
