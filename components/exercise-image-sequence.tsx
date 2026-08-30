"use client";

import { ImageSequence } from "@/components/image-sequence";
import { exerciseImageCaption, exerciseImagePresentation } from "@/lib/exercise-image-presentation";
import { exerciseImageSequence, exerciseImageSequenceDescriptions } from "@/lib/exercise-images";

export function ExerciseImageSequence({
  imageKey,
  title,
  count = 3,
  frameDescriptions = [],
  className = ""
}: {
  imageKey: string;
  title: string;
  count?: number;
  frameDescriptions?: string[];
  className?: string;
}) {
  const sources = exerciseImageSequence(imageKey, count);
  const mappedDescriptions = exerciseImageSequenceDescriptions(imageKey);
  const descriptions = frameDescriptions.length
    ? frameDescriptions
    : sources.map((src, index) => exerciseImageCaption(src) || mappedDescriptions[index] || "");
  return (
    <ImageSequence
      sources={sources}
      title={title}
      descriptions={descriptions}
      presentations={sources.map(exerciseImagePresentation)}
      className={className}
    />
  );
}
