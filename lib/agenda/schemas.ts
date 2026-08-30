import { z } from "zod";

export const agendaCategoryValues = [
  "ROTINA",
  "ALARME",
  "TAREFA",
  "HABITO",
  "EXERCICIO",
  "ALONGAMENTO",
  "MOBILIDADE",
  "SONO",
  "FOCO",
  "ANTIESTRESSE",
  "ENERGIA",
  "HUMOR",
  "HIDRATACAO",
  "ALIMENTACAO",
  "MODO_SEM_REDES",
  "PLANEJAMENTO",
  "COMPROMISSO"
] as const;

export const priorityValues = ["LOW", "MEDIUM", "HIGH", "CRITICAL"] as const;
export const energyValues = ["LIGHT", "MODERATE", "INTENSE", "MENTAL", "PHYSICAL", "EMOTIONAL"] as const;

const maybeString = z.string().optional().default("");
const dateLike = z.string().min(1);
const reminderMinutes = z.preprocess((value) => {
  if (Array.isArray(value)) return value.map(Number).filter((item) => Number.isFinite(item));
  if (typeof value === "number") return [value];
  if (typeof value === "string" && value.trim()) {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) return parsed.map(Number).filter((item) => Number.isFinite(item));
    } catch {
      return value.split(",").map((item) => Number(item.trim())).filter((item) => Number.isFinite(item));
    }
  }
  return [30];
}, z.array(z.number().int().min(0).max(60 * 24)).max(6).default([30]));

export const agendaEventSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(2, "Informe um titulo.").max(160),
  description: maybeString,
  startDateTime: dateLike,
  endDateTime: dateLike.optional(),
  allDay: z.coerce.boolean().optional().default(false),
  timezone: z.string().min(1).optional().default("America/Sao_Paulo"),
  category: z.enum(agendaCategoryValues).optional().default("ROTINA"),
  priority: z.enum(priorityValues).optional().default("MEDIUM"),
  energyLevel: z.enum(energyValues).optional().default("MODERATE"),
  source: z.string().optional().default("LOCAL"),
  externalCalendarId: maybeString,
  externalEventId: maybeString,
  recurrenceRule: maybeString,
  reminderMinutes,
  status: z.enum(["DRAFT", "CONFIRMED", "CANCELLED", "DONE"]).optional().default("CONFIRMED")
});

export const agendaTaskSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(2, "Informe uma tarefa.").max(160),
  description: maybeString,
  dueDate: z.string().optional().default(""),
  estimatedDuration: z.coerce.number().int().min(1).max(60 * 12).optional(),
  category: z.enum(agendaCategoryValues).optional().default("TAREFA"),
  priority: z.enum(priorityValues).optional().default("MEDIUM"),
  energyLevel: z.enum(energyValues).optional().default("MODERATE"),
  status: z.enum(["PENDING", "PLANNED", "IN_PROGRESS", "COMPLETED", "POSTPONED", "CANCELLED"]).optional().default("PENDING"),
  scheduledEventId: maybeString,
  reminders: z.preprocess((value) => {
    if (Array.isArray(value)) return value.map(String);
    if (typeof value === "string" && value.trim()) return value.split(",").map((item) => item.trim()).filter(Boolean);
    return [];
  }, z.array(z.string()).max(8).default([])),
  tags: maybeString
});

export const agendaReminderSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(2).max(160),
  message: maybeString,
  dateTime: dateLike,
  recurrenceRule: maybeString,
  priority: z.enum(priorityValues).optional().default("MEDIUM"),
  notificationId: maybeString,
  linkedEventId: maybeString,
  linkedTaskId: maybeString,
  status: z.enum(["ACTIVE", "SNOOZED", "COMPLETED", "CANCELLED"]).optional().default("ACTIVE"),
  escalationLevel: z.coerce.number().int().min(0).max(5).optional().default(0)
});

export const inboxItemSchema = z.object({
  id: z.string().optional(),
  rawText: maybeString,
  rawImage: maybeString,
  rawAudio: maybeString,
  extractedText: maybeString,
  suggestedType: z.enum(["event", "task", "reminder", "habit", "unknown"]).optional().default("unknown"),
  status: z.enum(["OPEN", "CONVERTED", "ARCHIVED"]).optional().default("OPEN")
});

export const calendarConnectionSchema = z.object({
  provider: z.enum(["LOCAL", "GOOGLE", "APPLE", "OUTLOOK"]),
  externalAccountId: maybeString,
  selectedCalendarIds: z.preprocess((value) => {
    if (Array.isArray(value)) return value.map(String);
    if (typeof value === "string" && value.trim()) return value.split(",").map((item) => item.trim()).filter(Boolean);
    return [];
  }, z.array(z.string()).default([])),
  syncEnabled: z.coerce.boolean().optional().default(false)
});

export const agendaParseSchema = z.object({
  text: z.string().min(2).max(1200),
  now: z.string().optional(),
  timezone: z.string().optional().default("America/Sao_Paulo")
});

export const freeTimeQuerySchema = z.object({
  date: z.string().optional(),
  durationMinutes: z.coerce.number().int().min(5).max(8 * 60).optional().default(30),
  fromHour: z.coerce.number().int().min(0).max(23).optional().default(7),
  toHour: z.coerce.number().int().min(1).max(24).optional().default(22)
});

export type AgendaEventInput = z.infer<typeof agendaEventSchema>;
