import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(2, "Informe seu nome."),
    email: z.string().email("Informe um e-mail válido."),
    password: z.string().min(8, "A senha precisa ter pelo menos 8 caracteres."),
    confirmPassword: z.string().min(8)
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas não conferem."
  });

export const loginSchema = z.object({
  email: z.string().email("Informe um e-mail válido."),
  password: z.string().min(8, "Informe sua senha.")
});

export const onboardingSchema = z.object({
  mainGoal: z.string().min(1),
  dailyTime: z.string().min(1),
  preferredTime: z.string().min(1),
  stressLevel: z.string().min(1),
  difficultyArea: z.string().min(1),
  workHours: z.coerce.number().int().min(0).max(24).default(8),
  freeHours: z.coerce.number().int().min(0).max(24).default(2),
  sleepHours: z.coerce.number().int().min(0).max(14).default(7),
  sleepAlarm: z.string().optional().default(""),
  wakeAlarm: z.string().optional().default(""),
  alarmsEnabled: z.coerce.boolean().optional().default(false),
  trainingIntensityPreference: z.enum(["diminuir", "manter", "aumentar", "Bem leve", "Moderado", "Desafiador, mas seguro"]).optional().default("manter"),
  movementPreferences: z.string().optional(),
  theme: z.enum(["light", "dark", "system"]).optional().default("system"),
  language: z.enum(["pt-BR", "es"]).optional().default("pt-BR")
});

const score = z.coerce.number().int().min(1).max(5);
export const completionTokenSchema = z.string().uuid();

export const checkinSchema = z.object({
  completionToken: completionTokenSchema,
  focusScore: score.default(3),
  moodScore: score,
  stressScore: score,
  energyScore: score,
  sleepScore: score,
  dispositionScore: score.optional().default(3),
  tirednessScore: score.optional().default(3),
  anxietyScore: score.optional().default(3),
  painScore: score.optional().default(1),
  painRegion: z.string().max(80).optional().default(""),
  availableMinutes: z.coerce.number().int().min(1).max(120).optional().default(5),
  journalText: z.string().max(1200).optional().default(""),
  manualTags: z.preprocess((value) => {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    if (typeof value === "string") return [value];
    return [];
  }, z.array(z.string().max(60)).max(20).optional().default([]))
});

export const exerciseSessionSchema = z.object({
  exerciseId: z.string().min(1),
  checkinId: z.string().optional().nullable(),
  completionToken: completionTokenSchema
});

export const partnerInterestSchema = z.object({
  partnerId: z.string().min(1),
  interestType: z.enum(["HAS_BENEFIT", "WANTS_INTEGRATION", "WANTS_PARTNER_CONTACT"])
});

export const partnerSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2),
  type: z.enum(["GYM", "STUDIO", "PERSONAL_TRAINER", "WELLNESS_APP", "CORPORATE_BENEFIT", "CLINIC"]),
  benefitProvider: z.enum(["WELLHUB", "TOTALPASS", "GYMPASS", "LOCAL_PARTNER", "CORPORATE", "NONE"]),
  websiteUrl: z.string().url().optional().or(z.literal("")),
  instagramUrl: z.string().url().optional().or(z.literal("")),
  bookingUrl: z.string().url().optional().or(z.literal("")),
  status: z.enum(["ACTIVE", "COMING_SOON", "FUTURE_INTEGRATION", "INACTIVE"]),
  description: z.string().min(5)
});

const timeString = z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, "Informe um horario valido.");
const routineDays = z.string().regex(/^[0-6](,[0-6])*$/, "Dias invalidos.").default("1,2,3,4,5,6,0");

export const routineReminderSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(2).max(80),
  description: z.string().max(300).optional().default(""),
  category: z.enum(["SLEEP", "WAKE", "CHECKIN", "PAUSE", "TASK", "SOCIAL_DOWNTIME"]),
  time: timeString,
  enabled: z.coerce.boolean().optional().default(true),
  days: routineDays,
  note: z.string().max(300).optional().default(""),
  reminderType: z.enum(["PAUSE", "CHECKIN", "SLEEP", "WAKE", "WATER", "EXERCISE", "SOCIAL_FREE", "CUSTOM"]).optional().default("PAUSE"),
  scheduledAt: z.string().optional().default(""),
  repeatRule: z.enum(["ONCE", "DAILY", "WEEKDAYS", "WEEKENDS", "CUSTOM"]).optional().default("DAILY"),
  snoozeEnabled: z.coerce.boolean().optional().default(false),
  snoozeMinutesOptions: z.preprocess((value) => {
    if (Array.isArray(value)) return value.map(Number);
    if (typeof value === "string" && value.trim()) return value.split(",").map((item) => Number(item.trim())).filter(Boolean);
    return [5, 10, 15];
  }, z.array(z.number().int().min(1).max(60)).max(4).default([5, 10, 15])),
  lastSnoozedAt: z.string().optional().default(""),
  status: z.enum(["ACTIVE", "SNOOZED", "COMPLETED", "CANCELLED"]).optional().default("ACTIVE"),
  nativeNotificationId: z.string().optional().default("")
});

export const routineTaskSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(2).max(120),
  description: z.string().max(500).optional().default(""),
  category: z.enum(["ROTINA", "SONO", "FOCO", "PAUSA", "TELAS", "MOVIMENTO"]).optional().default("ROTINA"),
  notes: z.string().max(500).optional().default(""),
  dueDate: z.string().optional().default(""),
  dueTime: z.string().optional().default(""),
  dueAt: z.string().optional().default(""),
  calendarEventId: z.string().optional().default(""),
  notificationId: z.string().optional().default(""),
  status: z.enum(["PENDING", "COMPLETED", "CANCELLED"]).optional().default("PENDING"),
  priority: z.enum(["LOW", "MEDIUM", "HIGH"]).optional().default("MEDIUM"),
  completed: z.coerce.boolean().optional()
});

export const socialDowntimeSchema = z.object({
  enabled: z.coerce.boolean().optional().default(false),
  startTime: timeString,
  endTime: timeString,
  apps: z.preprocess((value) => {
    if (Array.isArray(value)) return value;
    if (typeof value === "string") return value.split(",").map((item) => item.trim()).filter(Boolean);
    return [];
  }, z.array(z.string().min(1).max(40)).max(12).default(["Instagram", "TikTok", "YouTube", "X"])),
  days: routineDays,
  note: z.string().max(500).optional().default(""),
  objective: z.enum(["PROTECT_FOCUS", "REDUCE_SCROLLING", "PREPARE_SLEEP", "STUDY", "FAMILY_TIME"]).optional().default("PROTECT_FOCUS"),
  categories: z.preprocess((value) => {
    if (Array.isArray(value)) return value;
    if (typeof value === "string") return value.split(",").map((item) => item.trim()).filter(Boolean);
    return [];
  }, z.array(z.enum(["SOCIAL", "VIDEO", "MESSAGING", "GAMES", "NEWS", "SHOPPING"])).max(6).default([])),
  exceptions: z.preprocess((value) => {
    if (Array.isArray(value)) return value;
    if (typeof value === "string") return value.split(",").map((item) => item.trim()).filter(Boolean);
    return [];
  }, z.array(z.string().min(1).max(60)).max(20).default([]))
});

export const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  company: z.string().min(2),
  role: z.string().min(2),
  employeeCount: z.coerce.number().int().min(1),
  interest: z.string().min(1),
  message: z.string().max(1200).optional().default("")
});

export const leadStatusSchema = z.object({
  id: z.string().min(1),
  status: z.enum(["NOVO", "EM_CONTATO", "DEMONSTRACAO_MARCADA", "PROPOSTA_ENVIADA", "FECHADO", "PERDIDO"]),
  notes: z.string().max(3000).optional(),
  nextContactAt: z.string().optional().nullable()
});

export const workoutQuerySchema = z.object({
  modalidade: z.string().optional().default(""),
  disponibilidade: z.enum(["disponiveis", "bloqueadas", "todas"]).optional().default("disponiveis"),
  intensidade: z.string().optional().default(""),
  pace: z.coerce.number().int().min(30).max(180).optional()
});

export const workoutSessionSchema = z.object({
  routineId: z.string().min(1),
  roundsCompleted: z.coerce.number().int().min(1).max(20),
  durationSeconds: z.coerce.number().int().min(10).max(60 * 60),
  paceUsed: z.coerce.number().int().min(30).max(180).optional(),
  completionToken: completionTokenSchema
});

export const walkingModeSchema = z.enum(["light", "power", "incline", "chair", "stress_relief", "anxiety", "weight_loss", "conditioning", "free"]);
export const walkingGoalValueSchema = z.enum(["stress", "anxiety", "weight_loss", "conditioning", "recovery", "sleep", "energy", "free"]);
export const walkingPrivacySchema = z.enum(["private", "friends", "public"]);

const walkingEmotionScore = z.coerce.number().int().min(1).max(5).optional().nullable();

export const walkingRoutePointSchema = z.object({
  lat: z.coerce.number().min(-90).max(90),
  lng: z.coerce.number().min(-180).max(180),
  timestamp: z.string().min(1).max(80),
  speedKmh: z.coerce.number().min(0).max(60).optional().nullable(),
  accuracy: z.coerce.number().min(0).max(5000).optional().nullable()
});

export const walkingStartSchema = z.object({
  walkingMode: walkingModeSchema.default("light"),
  goal: walkingGoalValueSchema.default("free"),
  durationMinutes: z.coerce.number().int().min(1).max(180).default(10),
  targetDistanceMeters: z.coerce.number().min(0).max(100000).optional().default(0),
  gpsEnabled: z.coerce.boolean().optional().default(false),
  timerOnly: z.coerce.boolean().optional().default(true),
  hydrationReminder: z.coerce.boolean().optional().default(false),
  audioAlerts: z.coerce.boolean().optional().default(false),
  autoPauseEnabled: z.coerce.boolean().optional().default(true),
  privacy: walkingPrivacySchema.default("private"),
  hideRouteEdges: z.coerce.boolean().optional().default(false),
  moodBefore: walkingEmotionScore,
  stressBefore: walkingEmotionScore,
  anxietyBefore: walkingEmotionScore
});

export const walkingSessionSchema = z.object({
  completionToken: completionTokenSchema,
  walkingMode: walkingModeSchema,
  goal: walkingGoalValueSchema.default("free"),
  startedAt: z.coerce.date(),
  endedAt: z.coerce.date(),
  durationSeconds: z.coerce.number().int().min(1).max(60 * 60 * 6),
  movingTimeSeconds: z.coerce.number().int().min(0).max(60 * 60 * 6),
  distanceMeters: z.coerce.number().min(0).max(250000).default(0),
  averagePace: z.string().max(30).optional().default("--"),
  averageSpeedKmh: z.coerce.number().min(0).max(60).default(0),
  caloriesEstimated: z.coerce.number().min(0).max(5000).default(0),
  gpsEnabled: z.coerce.boolean().optional().default(false),
  timerOnly: z.coerce.boolean().optional().default(true),
  routePoints: z.array(walkingRoutePointSchema).max(3000).optional().default([]),
  privacy: walkingPrivacySchema.default("private"),
  hideRouteEdges: z.coerce.boolean().optional().default(false),
  moodBefore: walkingEmotionScore,
  moodAfter: walkingEmotionScore,
  stressBefore: walkingEmotionScore,
  stressAfter: walkingEmotionScore,
  anxietyBefore: walkingEmotionScore,
  anxietyAfter: walkingEmotionScore,
  notes: z.string().max(1000).optional().default(""),
  completed: z.coerce.boolean().optional().default(true)
}).refine((data) => data.endedAt >= data.startedAt, {
  message: "A caminhada precisa terminar depois do inicio.",
  path: ["endedAt"]
}).refine((data) => data.movingTimeSeconds <= data.durationSeconds, {
  message: "Tempo em movimento nao pode ser maior que o tempo total.",
  path: ["movingTimeSeconds"]
});

export const walkingGoalSchema = z.object({
  period: z.enum(["weekly", "monthly"]),
  targetDistanceMeters: z.coerce.number().min(0).max(500000).default(0),
  targetDurationSeconds: z.coerce.number().int().min(0).max(60 * 60 * 200).default(0),
  targetSessions: z.coerce.number().int().min(0).max(200).default(0),
  active: z.coerce.boolean().optional().default(true)
});

export const walkingHistoryQuerySchema = z.object({
  periodo: z.enum(["7", "30", "todos"]).optional().default("30"),
  modo: walkingModeSchema.optional(),
  privacidade: walkingPrivacySchema.optional()
});

export const walkingFavoriteRouteSchema = z.object({
  title: z.string().min(2).max(80),
  walkingMode: walkingModeSchema.default("free"),
  distanceMeters: z.coerce.number().min(0).max(250000).default(0),
  routePoints: z.array(walkingRoutePointSchema).min(2).max(3000),
  privacy: walkingPrivacySchema.default("private"),
  hideRouteEdges: z.coerce.boolean().optional().default(true)
});
