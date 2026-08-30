"use client";

import { ImageSequence } from "@/components/image-sequence";
import { yogaImageSequence } from "@/lib/yoga-images";

export function YogaImageSequence({
  imageSequenceKeys,
  title,
  frameDescriptions = [],
  className = ""
}: {
  imageSequenceKeys: string[];
  title: string;
  frameDescriptions?: string[];
  className?: string;
}) {
  return <ImageSequence sources={yogaImageSequence(imageSequenceKeys)} title={title} descriptions={frameDescriptions} className={className} />;
}
