const physicalInstructionCategories = new Set([
  "HOME_FUNCTIONAL",
  "JUMP_ROPE",
  "LOW_IMACT_CARDIO",
  "LOW_IMPACT_CARDIO",
  "MOBILITY",
  "SLEEP_SUPPORT",
  "SHADOW_BOXING",
  "STRETCHING",
  "WALKING",
  "YOGA"
]);

export function requiresCatalogVisualAsset(instruction: { area: string; category: string }) {
  return instruction.area === "BODY_MOVEMENT" || physicalInstructionCategories.has(instruction.category);
}

export function categoryGroupForInstruction(instruction: { area: string; category: string }) {
  return requiresCatalogVisualAsset(instruction) ? "PHYSICAL" : "MENTAL";
}
