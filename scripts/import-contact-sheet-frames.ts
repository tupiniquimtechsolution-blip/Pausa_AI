import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

type Args = {
  source: string;
  slug: string;
  cols: number;
  rows: number;
  count: number;
  start: number;
};

function readArgs(): Args {
  const values = new Map<string, string>();
  for (const arg of process.argv.slice(2)) {
    const [key, ...rest] = arg.replace(/^--/, "").split("=");
    values.set(key, rest.join("="));
  }
  const source = values.get("source");
  const slug = values.get("slug");
  if (!source || !slug) {
    throw new Error("Uso: tsx scripts/import-contact-sheet-frames.ts --source=<arquivo> --slug=<slug> --cols=4 --rows=2 --count=8");
  }
  return {
    source,
    slug,
    cols: Number(values.get("cols") || 4),
    rows: Number(values.get("rows") || 2),
    count: Number(values.get("count") || 8),
    start: Number(values.get("start") || 1)
  };
}

async function main() {
  const args = readArgs();
  const root = process.cwd();
  const sourcePath = path.resolve(root, args.source);
  const sheetDir = path.join(root, "public", "videos", "generated-sheets");
  const frameDir = path.join(root, "public", "videos", "frames", args.slug);
  await fs.mkdir(sheetDir, { recursive: true });
  await fs.mkdir(frameDir, { recursive: true });

  const sheetCopy = path.join(sheetDir, args.start === 1 ? `${args.slug}-sheet.png` : `${args.slug}-sheet-${String(args.start).padStart(2, "0")}.png`);
  await fs.copyFile(sourcePath, sheetCopy);

  const metadata = await sharp(sheetCopy).metadata();
  if (!metadata.width || !metadata.height) throw new Error(`Nao foi possivel ler dimensoes de ${sheetCopy}`);

  const cellWidth = Math.floor(metadata.width / args.cols);
  const cellHeight = Math.floor(metadata.height / args.rows);
  const outputs: string[] = [];

  for (let index = 0; index < args.count; index += 1) {
    const col = index % args.cols;
    const row = Math.floor(index / args.cols);
    const left = col * cellWidth;
    const top = row * cellHeight;
    const width = col === args.cols - 1 ? metadata.width - left : cellWidth;
    const height = row === args.rows - 1 ? metadata.height - top : cellHeight;
    const frameNumber = args.start + index;
    const outPath = path.join(frameDir, `${args.slug}-${String(frameNumber).padStart(2, "0")}.jpg`);
    await sharp(sheetCopy)
      .extract({ left, top, width, height })
      .resize(1080, 1920, { fit: "cover", position: "center" })
      .jpeg({ quality: 90, mozjpeg: true })
      .toFile(outPath);
    outputs.push(path.relative(root, outPath));
  }

  console.log(JSON.stringify({
    slug: args.slug,
    source: path.relative(root, sourcePath),
    sheet: path.relative(root, sheetCopy),
    source_dimensions: { width: metadata.width, height: metadata.height },
    grid: { cols: args.cols, rows: args.rows, count: args.count },
    start_frame: args.start,
    outputs
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
