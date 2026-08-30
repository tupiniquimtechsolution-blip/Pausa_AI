import OpenAI from "openai";

export type WeeklyPlanItem = {
  day: string;
  exerciseSlug: string;
  practiceType: string;
  estimatedMinutes: number;
  reason: string;
};

const days = ["Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"];

export function isoWeekKey(date = new Date()) {
  const target = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNumber = target.getUTCDay() || 7;
  target.setUTCDate(target.getUTCDate() + 4 - dayNumber);
  const yearStart = new Date(Date.UTC(target.getUTCFullYear(), 0, 1));
  const week = Math.ceil((((target.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  return `${target.getUTCFullYear()}-${String(week).padStart(2, "0")}`;
}

export function fallbackWeeklyPlan(slugs: string[], preferredTime = "Manha"): WeeklyPlanItem[] {
  const defaults = slugs.length ? slugs : [
    "pausa-sem-tela",
    "pausa-de-energia",
    "ritual-sono-sem-tela",
    "gratidao-rapida",
    "respiracao-4-4-6",
    "caminhada-consciente-curta",
    "reset-de-foco"
  ];
  return days.map((day, index) => ({
    day,
    exerciseSlug: defaults[index % defaults.length],
    practiceType: index % 3 === 0 ? "FOCUS" : index % 3 === 1 ? "ENERGY" : "SLEEP",
    estimatedMinutes: index % 2 === 0 ? 5 : 3,
    reason: `Plano local para praticar no periodo de preferencia: ${preferredTime}.`
  }));
}

export async function generateWeeklyPlan(input: {
  preferredTime?: string | null;
  recentCheckins: Array<Record<string, number | string | Date | null>>;
  completedTitles: string[];
  availableSlugs: string[];
}) {
  const fallback = fallbackWeeklyPlan(input.availableSlugs, input.preferredTime || "Manha");
  if (!process.env.OPENAI_API_KEY) return { source: "LOCAL", items: fallback };

  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: "Monte um plano semanal de bem-estar preventivo. Responda JSON com chave items, array de 7 itens. Cada item tem day, exerciseSlug, practiceType, estimatedMinutes, reason. Use apenas slugs disponiveis."
        },
        {
          role: "user",
          content: JSON.stringify({
            preferredTime: input.preferredTime,
            recentCheckins: input.recentCheckins,
            completedTitles: input.completedTitles,
            availableSlugs: input.availableSlugs
          })
        }
      ]
    });
    const parsed = JSON.parse(completion.choices[0]?.message?.content || "{}") as { items?: WeeklyPlanItem[] };
    if (!Array.isArray(parsed.items) || parsed.items.length !== 7) return { source: "LOCAL", items: fallback };
    const allowed = new Set(input.availableSlugs);
    const items = parsed.items.map((item, index) => ({
      day: item.day || days[index],
      exerciseSlug: allowed.has(item.exerciseSlug) ? item.exerciseSlug : fallback[index].exerciseSlug,
      practiceType: item.practiceType || fallback[index].practiceType,
      estimatedMinutes: Number.isFinite(item.estimatedMinutes) ? Math.max(1, Math.min(30, Math.round(item.estimatedMinutes))) : fallback[index].estimatedMinutes,
      reason: item.reason || fallback[index].reason
    }));
    return { source: "OPENAI", items };
  } catch {
    return { source: "LOCAL", items: fallback };
  }
}
