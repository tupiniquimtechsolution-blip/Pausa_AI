export const defaultTimezone = "America/Sao_Paulo";

export function parseDateTime(value: string, fallback?: Date) {
  const date = new Date(value);
  if (!Number.isNaN(date.getTime())) return date;
  return fallback || new Date();
}

export function parseOptionalDateTime(value?: string | null) {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

export function addMinutes(date: Date, minutes: number) {
  return new Date(date.getTime() + minutes * 60 * 1000);
}

export function startOfLocalDay(input = new Date()) {
  const date = new Date(input);
  date.setHours(0, 0, 0, 0);
  return date;
}

export function endOfLocalDay(input = new Date()) {
  const date = new Date(input);
  date.setHours(23, 59, 59, 999);
  return date;
}

export function startOfLocalWeek(input = new Date()) {
  const date = startOfLocalDay(input);
  const day = date.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  date.setDate(date.getDate() + diff);
  return date;
}

export function endOfLocalWeek(input = new Date()) {
  const date = startOfLocalWeek(input);
  date.setDate(date.getDate() + 6);
  date.setHours(23, 59, 59, 999);
  return date;
}

export function htmlDateTimeValue(date: Date) {
  const pad = (value: number) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export function dateOnlyValue(date: Date) {
  return date.toISOString().slice(0, 10);
}

export function sameLocalDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export function parseDateWindow(searchParams: URLSearchParams) {
  const from = parseOptionalDateTime(searchParams.get("from")) || startOfLocalWeek();
  const to = parseOptionalDateTime(searchParams.get("to")) || endOfLocalWeek();
  return { from, to };
}
