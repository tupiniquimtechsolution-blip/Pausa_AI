export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function parseSteps(steps?: string | null): string[] {
  if (!steps) return [];
  try {
    const parsed = JSON.parse(steps);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return steps.split("\n").filter(Boolean);
  }
}
