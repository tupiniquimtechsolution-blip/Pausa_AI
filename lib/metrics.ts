import { differenceInCalendarDays, startOfDay, subDays } from "date-fns";

export type CheckinMetric = {
  createdAt: Date;
  moodScore: number;
  stressScore: number;
  energyScore: number;
  sleepScore: number;
};

export function average(values: number[]) {
  if (!values.length) return 0;
  return Number((values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(1));
}

export function last7(checkins: CheckinMetric[]) {
  const since = startOfDay(subDays(new Date(), 6));
  return checkins.filter((checkin) => checkin.createdAt >= since);
}

export function computeStreak(checkins: CheckinMetric[]) {
  const days = Array.from(new Set(checkins.map((item) => startOfDay(item.createdAt).toISOString()))).sort().reverse();
  if (!days.length) return 0;
  let streak = 0;
  let expected = startOfDay(new Date());
  for (const iso of days) {
    const date = new Date(iso);
    const diff = differenceInCalendarDays(expected, date);
    if (diff === 0) {
      streak += 1;
      expected = subDays(expected, 1);
    } else if (streak === 0 && diff === 1) {
      streak += 1;
      expected = subDays(date, 1);
    } else {
      break;
    }
  }
  return streak;
}
