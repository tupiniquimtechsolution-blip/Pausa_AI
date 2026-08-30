import { catalogVisualAssetImagePath, catalogVisualAssetImageSequence } from "@/lib/catalog-visual-assets";

function baseYogaKey(imageKey: string) {
  return imageKey.replace(/-\d+$/, "");
}

export function yogaImagePath(imageKey: string) {
  const mappedImagePath = catalogVisualAssetImagePath(baseYogaKey(imageKey));
  if (mappedImagePath) return mappedImagePath;
  return `/yoga/${imageKey}.png`;
}

export function yogaImageSequence(keys: string[]): string[] {
  const mappedSequence = catalogVisualAssetImageSequence(baseYogaKey(keys[0] || ""));
  if (mappedSequence.length) return mappedSequence;
  return keys.map((key) => yogaImagePath(key));
}
