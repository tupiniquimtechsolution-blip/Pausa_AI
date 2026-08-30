import { createHash } from "node:crypto";
import { createReadStream, existsSync, realpathSync, statSync } from "node:fs";
import { extname, resolve, sep } from "node:path";

const MAX_MEDIA_BYTES = 100 * 1024 * 1024;
const EXTENSIONS_BY_MIME: Record<string, string[]> = {
  "image/png": [".png"],
  "image/jpeg": [".jpg", ".jpeg"],
  "image/webp": [".webp"],
  "image/svg+xml": [".svg"],
  "audio/mpeg": [".mp3"],
  "audio/ogg": [".ogg"],
  "audio/wav": [".wav"],
  "video/mp4": [".mp4"],
  "video/webm": [".webm"],
  "text/vtt": [".vtt"],
  "application/pdf": [".pdf"]
};

function insidePublicRoot(path: string) {
  const root = realpathSync(resolve(process.cwd(), "public"));
  const candidate = realpathSync(path);
  return candidate === root || candidate.startsWith(`${root}${sep}`);
}

export function resolvePublicMediaSource(sourcePath: string) {
  if (!sourcePath.startsWith("/") || sourcePath.includes("\\") || sourcePath.includes("\0") || sourcePath.split("/").includes("..")) {
    throw new Error("UNSAFE_MEDIA_PATH");
  }
  const candidate = resolve(process.cwd(), "public", sourcePath.replace(/^\/+/, ""));
  if (!existsSync(candidate) || !insidePublicRoot(candidate)) throw new Error("MEDIA_SOURCE_NOT_FOUND");
  const stat = statSync(candidate);
  if (!stat.isFile()) throw new Error("MEDIA_SOURCE_NOT_FILE");
  if (stat.size <= 0 || stat.size > MAX_MEDIA_BYTES) throw new Error("MEDIA_SOURCE_SIZE_INVALID");
  return { absolutePath: candidate, size: stat.size };
}

async function sha256File(path: string) {
  const hash = createHash("sha256");
  for await (const chunk of createReadStream(path)) hash.update(chunk);
  return hash.digest("hex");
}

export async function verifyRegisteredMediaSource(input: {
  sourcePath: string;
  mimeType: string;
  declaredHash: string;
}) {
  const source = resolvePublicMediaSource(input.sourcePath);
  const extension = extname(source.absolutePath).toLowerCase();
  const allowedExtensions = EXTENSIONS_BY_MIME[input.mimeType.toLowerCase()];
  if (!allowedExtensions?.includes(extension)) throw new Error("MEDIA_MIME_EXTENSION_MISMATCH");
  const actualHash = await sha256File(source.absolutePath);
  if (actualHash !== input.declaredHash.toLowerCase()) throw new Error("MEDIA_HASH_MISMATCH");
  return { ...source, actualHash };
}
