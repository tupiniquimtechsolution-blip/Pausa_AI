import type { AgendaInterval } from "@/lib/agenda/conflict-detection-service";

export type FreeTimeSlot = {
  startDateTime: string;
  endDateTime: string;
  durationMinutes: number;
  score: number;
  reason: string;
};

export function findFreeTimeSlots(input: {
  items: AgendaInterval[];
  date: Date;
  durationMinutes: number;
  fromHour?: number;
  toHour?: number;
}) {
  const fromHour = input.fromHour ?? 7;
  const toHour = input.toHour ?? 22;
  const windowStart = new Date(input.date);
  windowStart.setHours(fromHour, 0, 0, 0);
  const windowEnd = new Date(input.date);
  windowEnd.setHours(toHour, 0, 0, 0);

  const busy = input.items
    .map((item) => ({ start: new Date(item.startDateTime), end: new Date(item.endDateTime) }))
    .filter((item) => item.end > windowStart && item.start < windowEnd)
    .map((item) => ({
      start: item.start < windowStart ? windowStart : item.start,
      end: item.end > windowEnd ? windowEnd : item.end
    }))
    .sort((a, b) => a.start.getTime() - b.start.getTime());

  const slots: FreeTimeSlot[] = [];
  let cursor = new Date(windowStart);
  for (const item of busy) {
    pushSlot(slots, cursor, item.start, input.durationMinutes);
    if (item.end > cursor) cursor = new Date(item.end);
  }
  pushSlot(slots, cursor, windowEnd, input.durationMinutes);
  return slots.sort((a, b) => b.score - a.score).slice(0, 5);
}

function pushSlot(slots: FreeTimeSlot[], start: Date, end: Date, requestedMinutes: number) {
  const durationMinutes = Math.floor((end.getTime() - start.getTime()) / 60000);
  if (durationMinutes < requestedMinutes) return;
  const hour = start.getHours();
  const score = hour >= 18 ? 90 : hour >= 9 && hour <= 11 ? 80 : 65;
  slots.push({
    startDateTime: start.toISOString(),
    endDateTime: end.toISOString(),
    durationMinutes,
    score,
    reason: hour >= 18 ? "Bom encaixe para bem-estar sem apertar o meio do dia." : "Janela livre sem conflito direto com compromissos."
  });
}
