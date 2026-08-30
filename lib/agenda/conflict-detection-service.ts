export type AgendaInterval = {
  id: string;
  title: string;
  startDateTime: Date | string;
  endDateTime: Date | string;
  category?: string;
  priority?: string;
  source?: string;
};

export type AgendaConflict = {
  id: string;
  first: AgendaInterval;
  second: AgendaInterval;
  startDateTime: string;
  endDateTime: string;
  severity: "LOW" | "MEDIUM" | "HIGH";
  suggestion: string;
};

export function detectAgendaConflicts(items: AgendaInterval[]): AgendaConflict[] {
  const sorted = items
    .map((item) => ({ ...item, start: new Date(item.startDateTime), end: new Date(item.endDateTime) }))
    .filter((item) => !Number.isNaN(item.start.getTime()) && !Number.isNaN(item.end.getTime()) && item.end > item.start)
    .sort((a, b) => a.start.getTime() - b.start.getTime());

  const conflicts: AgendaConflict[] = [];
  for (let index = 0; index < sorted.length; index += 1) {
    for (let next = index + 1; next < sorted.length; next += 1) {
      const first = sorted[index];
      const second = sorted[next];
      if (second.start >= first.end) break;
      const start = new Date(Math.max(first.start.getTime(), second.start.getTime()));
      const end = new Date(Math.min(first.end.getTime(), second.end.getTime()));
      conflicts.push({
        id: `${first.id}-${second.id}`,
        first,
        second,
        startDateTime: start.toISOString(),
        endDateTime: end.toISOString(),
        severity: severityFor(first.priority, second.priority),
        suggestion: `Revise ${first.title} e ${second.title}. O próximo horário livre após ${formatTime(first.end)} pode ser uma alternativa.`
      });
    }
  }
  return conflicts;
}

function severityFor(first?: string, second?: string): AgendaConflict["severity"] {
  if (first === "CRITICAL" || second === "CRITICAL" || first === "HIGH" || second === "HIGH") return "HIGH";
  if (first === "MEDIUM" || second === "MEDIUM") return "MEDIUM";
  return "LOW";
}

function formatTime(date: Date) {
  return date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}
