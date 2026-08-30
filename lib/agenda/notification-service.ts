import { addMinutes } from "@/lib/agenda/date-utils";

export type LocalNotificationRequest = {
  title: string;
  body?: string;
  dateTime: Date;
};

export function buildReminderNotifications(event: {
  id: string;
  title: string;
  description?: string | null;
  startDateTime: Date;
  reminderMinutes: string;
}) {
  const offsets = parseOffsets(event.reminderMinutes);
  return offsets.map((offset) => ({
    title: event.title,
    body: event.description || "Você tem um compromisso no Pausa AI.",
    dateTime: addMinutes(event.startDateTime, -offset)
  }));
}

function parseOffsets(value: string) {
  try {
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) return parsed.map(Number).filter((item) => Number.isFinite(item) && item >= 0);
  } catch {
    // Fallback below.
  }
  return [30];
}
