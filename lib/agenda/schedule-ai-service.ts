import { addMinutes, defaultTimezone } from "@/lib/agenda/date-utils";

export type ParsedScheduleCommand = {
  action: "create" | "edit" | "delete" | "query" | "plan";
  type: "event" | "task" | "reminder" | "habit" | "focus_block" | "social_downtime" | "unknown";
  title: string;
  description?: string;
  startDateTime?: string;
  endDateTime?: string;
  dueDate?: string;
  recurrenceRule?: string;
  category: string;
  priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  energyLevel: "LIGHT" | "MODERATE" | "INTENSE" | "MENTAL" | "PHYSICAL" | "EMOTIONAL";
  reminders: Array<{ offsetMinutes: number }>;
  timezone: string;
  needsConfirmation: boolean;
  missingFields: string[];
  question?: string;
  confidence: number;
  source: "LOCAL";
};

const weekdays = [
  ["domingo", 0],
  ["segunda", 1],
  ["segunda-feira", 1],
  ["terca", 2],
  ["terça", 2],
  ["terca-feira", 2],
  ["terça-feira", 2],
  ["quarta", 3],
  ["quarta-feira", 3],
  ["quinta", 4],
  ["quinta-feira", 4],
  ["sexta", 5],
  ["sexta-feira", 5],
  ["sabado", 6],
  ["sábado", 6]
] as const;

export function parseScheduleCommand(input: { text: string; now?: Date; timezone?: string }): ParsedScheduleCommand {
  const now = input.now || new Date();
  const timezone = input.timezone || defaultTimezone;
  const raw = input.text.trim();
  const normalized = normalize(raw);
  const action = actionFor(normalized);
  const type = typeFor(normalized);
  const category = categoryFor(normalized, type);
  const timeRange = parseTimeRange(normalized);
  const time = timeRange?.start || parseSingleTime(normalized);
  const duration = parseDurationMinutes(normalized, type);
  const date = parseRelativeDate(normalized, now);
  const start = time ? dateWithTime(date, time.hour, time.minute) : undefined;
  const end = start ? timeRange?.end ? dateWithTime(date, timeRange.end.hour, timeRange.end.minute) : addMinutes(start, duration) : undefined;
  if (start && end && end <= start) end.setDate(end.getDate() + 1);
  const recurrenceRule = recurrenceFor(normalized);
  const title = titleFor(raw, normalized, type, category);
  const missingFields = action === "create" && ["event", "reminder", "habit", "focus_block", "social_downtime"].includes(type) && !time ? ["time"] : [];

  return {
    action,
    type,
    title,
    description: raw,
    startDateTime: start?.toISOString(),
    endDateTime: end?.toISOString(),
    dueDate: type === "task" && start ? start.toISOString() : undefined,
    recurrenceRule,
    category,
    priority: priorityFor(normalized),
    energyLevel: energyFor(normalized, category),
    reminders: [{ offsetMinutes: category === "SONO" ? 15 : 30 }],
    timezone,
    needsConfirmation: true,
    missingFields,
    question: missingFields.includes("time") ? "Qual horário deseja marcar?" : undefined,
    confidence: time || type === "task" ? 0.72 : 0.48,
    source: "LOCAL"
  };
}

function normalize(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function actionFor(value: string): ParsedScheduleCommand["action"] {
  if (/\b(cancelar|apagar|excluir|remover)\b/.test(value)) return "delete";
  if (/\b(mudar|adiar|trocar|aumentar|editar|alterar)\b/.test(value)) return "edit";
  if (/\b(quando tenho|horario livre|tempo livre|o que tenho|quais tarefas)\b/.test(value)) return "query";
  if (/\b(planejar|organizar|monte minha agenda|distribua)\b/.test(value)) return "plan";
  return "create";
}

function typeFor(value: string): ParsedScheduleCommand["type"] {
  if (/\b(modo sem redes|sem redes|bloqueio de foco|foco)\b/.test(value)) return value.includes("sem redes") ? "social_downtime" : "focus_block";
  if (/\b(me lembre|lembrar|lembrete)\b/.test(value)) return "reminder";
  if (/\b(tarefa|pendencia|comprar|estudar|resolver)\b/.test(value)) return "task";
  if (/\b(todo dia|toda semana|toda segunda|habito|habito)\b/.test(value)) return "habit";
  return "event";
}

function parseRelativeDate(value: string, now: Date) {
  const date = new Date(now);
  date.setSeconds(0, 0);
  if (value.includes("depois de amanha")) date.setDate(date.getDate() + 2);
  else if (value.includes("amanha")) date.setDate(date.getDate() + 1);
  else {
    const weekday = weekdays.find(([label]) => value.includes(label));
    if (weekday) {
      const target = weekday[1];
      const diff = (target - date.getDay() + 7) % 7 || 7;
      date.setDate(date.getDate() + diff);
    }
  }
  return date;
}

function parseSingleTime(value: string) {
  const match = value.match(/\b(?:as|às|a)?\s*(\d{1,2})(?::|h)?(\d{2})?\s*(da manha|da tarde|da noite)?\b/);
  if (!match) return null;
  let hour = Number(match[1]);
  const minute = Number(match[2] || 0);
  const period = match[3] || "";
  if (period.includes("tarde") && hour < 12) hour += 12;
  if (period.includes("noite") && hour < 12) hour += 12;
  if (hour < 0 || hour > 23 || minute < 0 || minute > 59) return null;
  return { hour, minute };
}

function parseTimeRange(value: string) {
  const match = value.match(/\b(?:das|de)\s*(\d{1,2})(?::|h)?(\d{2})?\s*(?:as|às|ate|até)\s*(\d{1,2})(?::|h)?(\d{2})?\b/);
  if (!match) return null;
  return {
    start: { hour: Number(match[1]), minute: Number(match[2] || 0) },
    end: { hour: Number(match[3]), minute: Number(match[4] || 0) }
  };
}

function parseDurationMinutes(value: string, type: ParsedScheduleCommand["type"]) {
  const match = value.match(/\bpor\s*(\d{1,3})\s*(min|minutos|hora|horas)\b/);
  if (!match) return type === "social_downtime" || type === "focus_block" ? 60 : 40;
  const amount = Number(match[1]);
  return match[2].startsWith("hora") ? amount * 60 : amount;
}

function dateWithTime(date: Date, hour: number, minute: number) {
  const result = new Date(date);
  result.setHours(hour, minute, 0, 0);
  return result;
}

function recurrenceFor(value: string) {
  if (value.includes("todo dia") || value.includes("todos os dias")) return "FREQ=DAILY";
  const weekday = weekdays.find(([label]) => value.includes(`toda ${label}`) || value.includes(`todo ${label}`));
  if (weekday) return `FREQ=WEEKLY;BYDAY=${["SU", "MO", "TU", "WE", "TH", "FR", "SA"][weekday[1]]}`;
  const eachHours = value.match(/a cada\s*(\d{1,2})\s*horas?/);
  if (eachHours) return `FREQ=HOURLY;INTERVAL=${eachHours[1]}`;
  return "";
}

function categoryFor(value: string, type: ParsedScheduleCommand["type"]) {
  if (type === "social_downtime") return "MODO_SEM_REDES";
  if (type === "focus_block") return "FOCO";
  if (/\b(treino|correr|corrida|exercicio)\b/.test(value)) return "EXERCICIO";
  if (/\b(alongamento|mobilidade)\b/.test(value)) return value.includes("mobilidade") ? "MOBILIDADE" : "ALONGAMENTO";
  if (/\b(agua|hidrata)\b/.test(value)) return "HIDRATACAO";
  if (/\b(dormir|sono|acordar)\b/.test(value)) return "SONO";
  if (/\b(reuniao|consulta|medica|medico|trabalho)\b/.test(value)) return "COMPROMISSO";
  if (type === "task") return "TAREFA";
  if (type === "habit") return "HABITO";
  return "ROTINA";
}

function priorityFor(value: string): ParsedScheduleCommand["priority"] {
  if (/\b(critico|critica|urgente|muito importante)\b/.test(value)) return "CRITICAL";
  if (/\b(importante|alta)\b/.test(value)) return "HIGH";
  if (/\b(baixa|leve)\b/.test(value)) return "LOW";
  return "MEDIUM";
}

function energyFor(value: string, category: string): ParsedScheduleCommand["energyLevel"] {
  if (/\b(intenso|pesado)\b/.test(value)) return "INTENSE";
  if (category === "EXERCICIO" || category === "ALONGAMENTO" || category === "MOBILIDADE") return "PHYSICAL";
  if (category === "FOCO" || category === "COMPROMISSO") return "MENTAL";
  if (category === "SONO" || category === "HIDRATACAO") return "LIGHT";
  return "MODERATE";
}

function titleFor(raw: string, normalized: string, type: ParsedScheduleCommand["type"], category: string) {
  if (category === "EXERCICIO" && /\b(correr|corrida)\b/.test(normalized)) return "Corrida";
  if (category === "EXERCICIO" && normalized.includes("treino")) return "Treino";
  if (category === "HIDRATACAO") return "Beber água";
  if (category === "MODO_SEM_REDES") return "Modo sem redes";
  if (category === "SONO" && normalized.includes("acordar")) return "Acordar";
  if (category === "SONO") return "Sono";
  const cleaned = raw
    .replace(/^(me lembre de|me lembrar de|lembrar de|marcar|criar|agendar|cancelar|apagar|excluir|remover)\s+/i, "")
    .replace(/\b(hoje|amanh[ãa]|depois de amanh[ãa]|segunda-feira|terça-feira|terca-feira|quarta-feira|quinta-feira|sexta-feira|sábado|sabado|domingo)\b/gi, "")
    .replace(/\b(às|as|das|de)\s*\d{1,2}(:|h)?\d{0,2}.*$/i, "")
    .trim();
  if (cleaned.length >= 2) return cleaned[0].toUpperCase() + cleaned.slice(1);
  if (type === "task") return "Nova tarefa";
  return "Novo evento";
}
