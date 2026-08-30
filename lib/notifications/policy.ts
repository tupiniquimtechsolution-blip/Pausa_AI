export type NotificationPrivacy = "SHOW_ALL" | "HIDE_SENSITIVE" | "HIDE_CONTENT";

export type NotificationPolicyInput = {
  maxPerDay: number;
  minimumIntervalMinutes: number;
  quietHoursStart: string;
  quietHoursEnd: string;
  ignoredReductionAfter: number;
  lockScreenPrivacy: NotificationPrivacy;
};

export type NotificationCandidate = {
  title: string;
  body: string;
  sensitive?: boolean;
  now: Date;
  sentAt: Date[];
  ignoredConsecutive: number;
};

export type NotificationDecision = {
  allowed: boolean;
  reason: "ALLOWED" | "QUIET_HOURS" | "DAILY_LIMIT" | "MINIMUM_INTERVAL";
  effectiveDailyLimit: number;
  title: string;
  body: string;
};

function minutesOfDay(value: string) {
  const [hour, minute] = value.split(":").map(Number);
  return (Number.isFinite(hour) ? hour : 0) * 60 + (Number.isFinite(minute) ? minute : 0);
}

function inQuietHours(now: Date, start: string, end: string) {
  const current = now.getHours() * 60 + now.getMinutes();
  const startMinutes = minutesOfDay(start);
  const endMinutes = minutesOfDay(end);
  if (startMinutes === endMinutes) return false;
  return startMinutes < endMinutes
    ? current >= startMinutes && current < endMinutes
    : current >= startMinutes || current < endMinutes;
}

function sameLocalDay(first: Date, second: Date) {
  return first.getFullYear() === second.getFullYear()
    && first.getMonth() === second.getMonth()
    && first.getDate() === second.getDate();
}

function privateContent(candidate: NotificationCandidate, privacy: NotificationPrivacy) {
  if (privacy === "HIDE_CONTENT" || (privacy === "HIDE_SENSITIVE" && candidate.sensitive)) {
    return { title: "Pausa AI", body: "Você tem uma atualização no app." };
  }
  return { title: candidate.title, body: candidate.body };
}

export function evaluateNotification(
  policy: NotificationPolicyInput,
  candidate: NotificationCandidate
): NotificationDecision {
  const reduction = candidate.ignoredConsecutive >= policy.ignoredReductionAfter ? 1 : 0;
  const effectiveDailyLimit = Math.max(1, policy.maxPerDay - reduction);
  const content = privateContent(candidate, policy.lockScreenPrivacy);
  const base = { effectiveDailyLimit, ...content };

  if (inQuietHours(candidate.now, policy.quietHoursStart, policy.quietHoursEnd)) {
    return { allowed: false, reason: "QUIET_HOURS", ...base };
  }
  const today = candidate.sentAt.filter((date) => sameLocalDay(date, candidate.now));
  if (today.length >= effectiveDailyLimit) {
    return { allowed: false, reason: "DAILY_LIMIT", ...base };
  }
  const lastSentAt = candidate.sentAt
    .map((date) => date.getTime())
    .filter(Number.isFinite)
    .sort((a, b) => b - a)[0];
  const fatigueMultiplier = candidate.ignoredConsecutive >= policy.ignoredReductionAfter ? 2 : 1;
  const minimumInterval = policy.minimumIntervalMinutes * fatigueMultiplier * 60_000;
  if (lastSentAt && candidate.now.getTime() - lastSentAt < minimumInterval) {
    return { allowed: false, reason: "MINIMUM_INTERVAL", ...base };
  }
  return { allowed: true, reason: "ALLOWED", ...base };
}
