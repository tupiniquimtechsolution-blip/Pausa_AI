import { differenceInCalendarDays, startOfDay, subDays } from "date-fns";

export type WalkingMode =
  | "light"
  | "power"
  | "incline"
  | "chair"
  | "stress_relief"
  | "anxiety"
  | "weight_loss"
  | "conditioning"
  | "free";

export type WalkingGoal = "stress" | "anxiety" | "weight_loss" | "conditioning" | "recovery" | "sleep" | "energy" | "free";
export type WalkingPrivacy = "private" | "friends" | "public";

export type RoutePoint = {
  lat: number;
  lng: number;
  timestamp: string;
  speedKmh?: number | null;
  accuracy?: number | null;
};

export type WalkingModeConfig = {
  id: WalkingMode;
  title: string;
  shortDescription: string;
  intensity: string;
  suggestedDurationMinutes: number;
  audience: string;
  defaultGoal: WalkingGoal;
  objectives: string[];
  complements: string[];
  complementSlugs: string[];
  primaryMuscles: string[];
  guide: string[];
  supportiveCopy: string;
};

export const medicalWalkingNotice =
  "Este app nao substitui avaliacao medica, fisioterapeutica ou de profissional de educacao fisica. Pessoas com dor, doenca cardiaca, falta de ar, tontura, problemas articulares ou limitacoes importantes devem procurar orientacao profissional antes de iniciar.";

export const walkingModes: WalkingModeConfig[] = [
  {
    id: "light",
    title: "Caminhada Leve / Recuperacao",
    shortDescription: "Ritmo confortavel para criar constancia, reduzir rigidez e voltar ao movimento sem pressa.",
    intensity: "Muito leve",
    suggestedDurationMinutes: 10,
    audience: "Iniciantes, idosos, pessoas sedentarias ou dias de descanso ativo.",
    defaultGoal: "recovery",
    objectives: ["Ativar circulacao", "Reduzir rigidez", "Criar constancia", "Reduzir estresse leve"],
    complements: ["Panturrilha", "Quadriceps", "Rotacao de tornozelos", "Mobilidade de quadril"],
    complementSlugs: ["panturrilha-na-parede", "quadriceps-em-pe-com-apoio", "rotacao-tornozelos", "flexor-quadril-ajoelhado"],
    primaryMuscles: ["Panturrilhas", "Quadriceps", "Flexores do quadril"],
    guide: ["Comece em ritmo facil.", "Mantenha ombros soltos.", "Respire sem forcar.", "Finalize desacelerando por 2 minutos."],
    supportiveCopy: "Otimo comeco. Cada passo e progresso."
  },
  {
    id: "power",
    title: "Caminhada Rapida / Power Walking",
    shortDescription: "Ritmo acelerado com bracos ativos para disposicao, resistencia e gasto calorico moderado.",
    intensity: "Moderada",
    suggestedDurationMinutes: 20,
    audience: "Quem ja tolera caminhar em ritmo continuo e quer um pouco mais de energia.",
    defaultGoal: "conditioning",
    objectives: ["Aumentar gasto calorico", "Desenvolver resistencia", "Melhorar disposicao"],
    complements: ["Polichinelos leves", "Elevacao de joelhos", "Mobilidade de ombros", "Agachamento livre leve"],
    complementSlugs: ["polichinelos-pausa-ativa", "marcha-joelhos-altos", "mobilidade-ombros-circulos", "agachamento-com-apoio"],
    primaryMuscles: ["Quadriceps", "Gluteos", "Ombros", "Panturrilhas"],
    guide: ["Aqueça por 3 minutos.", "Acelere sem perder controle da respiracao.", "Use os bracos com suavidade.", "Desacelere antes de terminar."],
    supportiveCopy: "Vamos evoluir no seu ritmo."
  },
  {
    id: "incline",
    title: "Caminhada em Subida / com Inclinacao",
    shortDescription: "Ladeiras, escadas ou esteira inclinada para fortalecer pernas com controle.",
    intensity: "Moderada+",
    suggestedDurationMinutes: 15,
    audience: "Quem quer fortalecimento leve e consegue caminhar sem dor articular.",
    defaultGoal: "conditioning",
    objectives: ["Fortalecer gluteos", "Trabalhar panturrilhas", "Ativar posteriores de coxa", "Aumentar gasto energetico"],
    complements: ["Agachamento livre", "Ponte de gluteo", "Panturrilha", "Posterior de coxa"],
    complementSlugs: ["agachamento-com-apoio", "ponte-gluteo-leve", "panturrilha-na-parede", "posterior-coxa-sentado"],
    primaryMuscles: ["Gluteos", "Panturrilhas", "Posteriores de coxa"],
    guide: ["Comece em subida leve.", "Diminua a passada.", "Use corrimao se houver.", "Pare antes de perder o controle da respiracao."],
    supportiveCopy: "Seu corpo agradece a constancia."
  },
  {
    id: "chair",
    title: "Caminhada Adaptada na Cadeira",
    shortDescription: "Marcha sentada para baixa mobilidade, dores articulares ou retorno muito gradual.",
    intensity: "Muito leve",
    suggestedDurationMinutes: 8,
    audience: "Pessoas com limitacao fisica, baixa mobilidade ou necessidade de movimento sentado.",
    defaultGoal: "recovery",
    objectives: ["Manter movimento", "Ativar circulacao", "Reduzir sedentarismo", "Fortalecer levemente membros inferiores"],
    complements: ["Mobilidade de tornozelos", "Mobilidade de joelhos", "Respiracao guiada", "Relaxamento pos-exercicio"],
    complementSlugs: ["rotacao-tornozelos", "extensao-joelho-sentado", "respiracao-4-4-6", "relaxamento-muscular-progressivo"],
    primaryMuscles: ["Flexores do quadril", "Quadriceps", "Panturrilhas"],
    guide: ["Sente com apoio.", "Alterne os pes como uma marcha.", "Mantenha a respiracao tranquila.", "Pare se houver dor, tontura ou desconforto."],
    supportiveCopy: "Voce se movimentou hoje. Isso ja conta."
  },
  {
    id: "stress_relief",
    title: "Caminhada Antiestresse",
    shortDescription: "Ritmo leve a moderado, respiracao nasal e observacao do ambiente, com baixa cobranca.",
    intensity: "Leve",
    suggestedDurationMinutes: 15,
    audience: "Dias de estresse alto, irritacao, sobrecarga de trabalho ou mente acelerada.",
    defaultGoal: "stress",
    objectives: ["Diminuir urgencia", "Organizar atencao", "Soltar ombros", "Criar pausa mental ativa"],
    complements: ["Respiracao nasal", "Alongamento de ombros", "Panturrilha", "Pescoco lateral"],
    complementSlugs: ["respiracao-consciente-foco", "deltoide-posterior-cruzado", "panturrilha-na-parede", "inclinacao-lateral-pescoco"],
    primaryMuscles: ["Panturrilhas", "Ombros", "Cervical"],
    guide: ["0-3 min: ritmo leve.", "3-10 min: ritmo confortavel.", "10-13 min: desacelere.", "13-15 min: respire e alongue com suavidade."],
    supportiveCopy: "Hoje foi um passo importante."
  },
  {
    id: "anxiety",
    title: "Caminhada para Ansiedade",
    shortDescription: "Comeco lento com aterramento, respiracao 4-4-6, contagem de passos e percepcao corporal.",
    intensity: "Leve",
    suggestedDurationMinutes: 12,
    audience: "Momentos de ansiedade, preocupacao, inquietacao ou sensacao de corpo em alerta.",
    defaultGoal: "anxiety",
    objectives: ["Aterrar a atencao", "Relaxar ombros", "Regular respiracao", "Retomar sensacao de presenca"],
    complements: ["Respiracao 4-4-6", "Relaxamento de ombros", "Pescoco", "Mobilidade toracica"],
    complementSlugs: ["respiracao-4-4-6", "mobilidade-ombros-circulos", "inclinacao-lateral-pescoco", "extensao-toracica-na-cadeira"],
    primaryMuscles: ["Ombros", "Pescoco", "Torax"],
    guide: ["Observe 5 coisas ao redor.", "Respire pelo nariz.", "Relaxe os ombros.", "Sinta os pes no chao."],
    supportiveCopy: "Voce voltou. Isso e o que mais importa."
  },
  {
    id: "weight_loss",
    title: "Caminhada para Emagrecimento",
    shortDescription: "Intervalada, com 1 minuto rapido e 2 minutos moderados, sempre com aquecimento e desaceleracao.",
    intensity: "Moderada",
    suggestedDurationMinutes: 25,
    audience: "Quem busca gasto calorico com seguranca e sem competicao.",
    defaultGoal: "weight_loss",
    objectives: ["Aumentar gasto calorico", "Criar regularidade", "Melhorar folego", "Evitar excesso"],
    complements: ["Aquecimento suave", "Panturrilha", "Quadriceps", "Posterior de coxa"],
    complementSlugs: ["marcha-joelhos-altos", "panturrilha-na-parede", "quadriceps-em-pe-com-apoio", "posterior-coxa-sentado"],
    primaryMuscles: ["Quadriceps", "Gluteos", "Panturrilhas"],
    guide: ["Aqueça por 4 minutos.", "Alterne 1 min rapido e 2 min moderado.", "Mantenha controle da respiracao.", "Finalize com 3 min leves."],
    supportiveCopy: "Vamos evoluir no seu ritmo."
  },
  {
    id: "conditioning",
    title: "Caminhada para Condicionamento",
    shortDescription: "Progressao de ritmo e distancia ao longo das semanas, sem pressa e sem comparacao.",
    intensity: "Moderada",
    suggestedDurationMinutes: 30,
    audience: "Quem quer ganhar resistencia com metas graduais.",
    defaultGoal: "conditioning",
    objectives: ["Melhorar resistencia", "Aumentar tempo em movimento", "Construir rotina", "Acompanhar evolucao pessoal"],
    complements: ["Mobilidade de quadril", "Panturrilha", "Agachamento leve", "Respiracao final"],
    complementSlugs: ["flexor-quadril-ajoelhado", "panturrilha-na-parede", "agachamento-com-apoio", "respiracao-consciente-foco"],
    primaryMuscles: ["Gluteos", "Quadriceps", "Panturrilhas"],
    guide: ["Comece abaixo do seu limite.", "Mantenha ritmo constante.", "Aumente poucos minutos por semana.", "Registre como o corpo respondeu."],
    supportiveCopy: "Seu corpo agradece a constancia."
  },
  {
    id: "free",
    title: "Caminhada Livre",
    shortDescription: "Sem objetivo definido: registro simples de tempo, distancia e sensacao.",
    intensity: "Livre",
    suggestedDurationMinutes: 10,
    audience: "Qualquer pessoa que queira apenas caminhar e registrar o momento.",
    defaultGoal: "free",
    objectives: ["Registrar tempo", "Registrar distancia se houver GPS", "Perceber o corpo", "Manter continuidade"],
    complements: ["Alongamento leve", "Respiracao", "Mobilidade de tornozelos", "Desaceleracao"],
    complementSlugs: ["alongamento-matinal", "respiracao-4-4-6", "rotacao-tornozelos", "relaxamento-muscular-progressivo"],
    primaryMuscles: ["Corpo inteiro"],
    guide: ["Caminhe no ritmo possivel.", "Observe o ambiente.", "Pausas contam.", "Finalize com uma respiracao tranquila."],
    supportiveCopy: "Voce se movimentou hoje. Isso ja conta."
  }
];

export const walkingGoalLabels: Record<WalkingGoal, string> = {
  stress: "Estresse",
  anxiety: "Ansiedade",
  weight_loss: "Emagrecimento",
  conditioning: "Condicionamento",
  recovery: "Recuperacao",
  sleep: "Sono",
  energy: "Energia",
  free: "Livre"
};

export const walkingPrivacyLabels: Record<WalkingPrivacy, string> = {
  private: "Privado",
  friends: "Amigos",
  public: "Publico"
};

export function getWalkingMode(mode?: string | null) {
  return walkingModes.find((item) => item.id === mode) || walkingModes[0];
}

export function haversineDistanceMeters(a: RoutePoint, b: RoutePoint) {
  if (!isValidPoint(a) || !isValidPoint(b)) return 0;
  const earthRadiusMeters = 6371000;
  const lat1 = degreesToRadians(a.lat);
  const lat2 = degreesToRadians(b.lat);
  const deltaLat = degreesToRadians(b.lat - a.lat);
  const deltaLng = degreesToRadians(b.lng - a.lng);
  const value =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
  return earthRadiusMeters * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
}

export function calculateRouteDistanceMeters(points: RoutePoint[]) {
  return cleanRoutePoints(points).reduce((sum, point, index, clean) => {
    if (index === 0) return sum;
    const distance = haversineDistanceMeters(clean[index - 1], point);
    return distance > 120 ? sum : sum + distance;
  }, 0);
}

export function averageSpeedKmh(distanceMeters: number, seconds: number) {
  if (distanceMeters <= 0 || seconds <= 0) return 0;
  return round((distanceMeters / 1000) / (seconds / 3600), 2);
}

export function paceString(seconds: number, distanceMeters: number) {
  if (seconds <= 0 || distanceMeters < 1) return "--";
  const minutesPerKm = seconds / 60 / (distanceMeters / 1000);
  if (!Number.isFinite(minutesPerKm) || minutesPerKm <= 0) return "--";
  const minutes = Math.floor(minutesPerKm);
  const sec = Math.round((minutesPerKm - minutes) * 60);
  return `${minutes}:${String(sec).padStart(2, "0")}/km`;
}

export function estimateWalkingCalories(input: { durationSeconds: number; speedKmh: number; intensity: string; weightKg?: number }) {
  const weight = input.weightKg && input.weightKg > 30 ? input.weightKg : 70;
  const met = metFor(input.speedKmh, input.intensity);
  return Math.max(0, Math.round(met * 3.5 * weight / 200 * (input.durationSeconds / 60)));
}

export function shouldAutoPause(input: { speedKmh: number; lowSpeedSeconds: number; thresholdKmh?: number; requiredSeconds?: number }) {
  const threshold = input.thresholdKmh ?? 0.5;
  const required = input.requiredSeconds ?? 20;
  return input.speedKmh < threshold && input.lowSpeedSeconds >= required;
}

export function cleanRoutePoints(points: RoutePoint[]) {
  return points.filter(isValidPoint).slice(0, 3000);
}

export function maskRouteEdges(points: RoutePoint[], hideRouteEdges: boolean) {
  const clean = cleanRoutePoints(points);
  if (!hideRouteEdges || clean.length < 8) return clean;
  const trim = Math.max(2, Math.floor(clean.length * 0.08));
  return clean.slice(trim, clean.length - trim);
}

export function formatDistance(meters: number) {
  if (meters < 1000) return `${Math.round(meters)} m`;
  return `${(meters / 1000).toFixed(2)} km`;
}

export function formatDuration(seconds: number) {
  const safe = Math.max(0, Math.round(seconds));
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const sec = safe % 60;
  if (hours > 0) return `${hours}h ${String(minutes).padStart(2, "0")}m`;
  return `${String(minutes).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

export function formatSpeed(speedKmh: number) {
  return `${round(speedKmh, 1).toFixed(1)} km/h`;
}

export function xpForWalkingSession(input: { durationSeconds: number; distanceMeters: number; completed: boolean }) {
  if (!input.completed) return 0;
  const minutes = Math.floor(input.durationSeconds / 60);
  const distanceBonus = Math.floor(input.distanceMeters / 1000) * 3;
  return Math.min(35, Math.max(10, 10 + Math.floor(minutes / 10) * 5 + distanceBonus));
}

export function walkingRecommendationFromCheckin(input: {
  stressScore?: number;
  energyScore?: number;
  moodScore?: number;
  sleepScore?: number;
  manualTags?: string[];
  detectedTags?: string[];
  recentSessions?: Array<{ startedAt: Date; walkingMode: string }>;
}) {
  const tags = [...(input.manualTags || []), ...(input.detectedTags || [])].map(normalize);
  const has = (terms: string[]) => tags.some((tag) => terms.some((term) => tag.includes(normalize(term))));
  let mode: WalkingMode = "light";
  let reason = "Uma caminhada leve e uma forma segura de voltar ao movimento no seu ritmo.";

  if ((input.stressScore || 0) >= 4 || has(["muito estresse", "corpo tenso", "trabalho", "preocupacao"])) {
    mode = "stress_relief";
    reason = "O check-in trouxe estresse ou tensao. A caminhada antiestresse usa ritmo leve, respiracao e baixa cobranca.";
  }
  if (has(["ansiedade", "agitacao"]) || ((input.stressScore || 0) >= 4 && (input.energyScore || 0) >= 4)) {
    mode = "anxiety";
    reason = "O check-in trouxe ansiedade ou agitacao. A caminhada para ansiedade usa aterramento, passos e respiracao 4-4-6.";
  }
  if (has(["lombar", "muito tempo sentado", "dor lombar"])) {
    mode = "light";
    reason = "Como apareceu lombar ou muito tempo sentado, a sugestao e caminhada leve com mobilidade de quadril e psoas.";
  }
  if (has(["pernas pesadas", "panturrilha", "baixa mobilidade"])) {
    mode = "chair";
    reason = "Como apareceu pernas pesadas ou baixa mobilidade, a sugestao e caminhar leve ou adaptar na cadeira.";
  }
  if ((input.energyScore || 5) <= 2 || has(["pouca energia", "cansaco", "sonolencia"])) {
    mode = "light";
    reason = "Com pouca energia, a meta fica reduzida: caminhada leve de 10 minutos ja conta.";
  }

  const recentDays = activeDayStreak(input.recentSessions || []);
  if (recentDays >= 3 && mode === "light") {
    mode = "conditioning";
    reason = "Voce ja tem alguns dias ativos. Uma progressao leve de condicionamento pode ser uma boa continuidade.";
  }

  const config = getWalkingMode(mode);
  return {
    mode,
    title: config.title,
    reason,
    durationMinutes: config.suggestedDurationMinutes,
    complements: config.complementSlugs
  };
}

export function activeDayStreak(items: Array<{ startedAt: Date }>) {
  const days = Array.from(new Set(items.map((item) => startOfDay(item.startedAt).toISOString()))).sort().reverse();
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

export function summarizeWalkingSessions(sessions: Array<{ startedAt: Date; durationSeconds: number; movingTimeSeconds: number; distanceMeters: number; walkingMode: string }>) {
  const now = new Date();
  const weekStart = startOfDay(subDays(now, 6));
  const monthStart = startOfDay(subDays(now, 29));
  const weekly = sessions.filter((session) => session.startedAt >= weekStart);
  const monthly = sessions.filter((session) => session.startedAt >= monthStart);
  const total = (items: typeof sessions) => ({
    sessions: items.length,
    distanceMeters: Math.round(items.reduce((sum, session) => sum + session.distanceMeters, 0)),
    durationSeconds: items.reduce((sum, session) => sum + session.durationSeconds, 0),
    movingTimeSeconds: items.reduce((sum, session) => sum + session.movingTimeSeconds, 0)
  });

  const records = new Map<WalkingMode, number>();
  for (const session of sessions) {
    const mode = session.walkingMode as WalkingMode;
    const current = records.get(mode) || 0;
    records.set(mode, Math.max(current, session.distanceMeters));
  }

  return {
    weekly: total(weekly),
    monthly: total(monthly),
    streak: activeDayStreak(sessions),
    last: sessions[0] || null,
    records: Array.from(records.entries()).map(([mode, distanceMeters]) => ({ mode, distanceMeters }))
  };
}

export function nextWalkingSuggestion(session: { walkingMode: string; moodBefore?: number | null; moodAfter?: number | null; stressBefore?: number | null; stressAfter?: number | null; anxietyBefore?: number | null; anxietyAfter?: number | null }) {
  const mode = getWalkingMode(session.walkingMode);
  if ((session.anxietyAfter || 0) > (session.anxietyBefore || 0)) {
    return "Na proxima, reduza a meta e use a Caminhada para Ansiedade com respiracao mais lenta.";
  }
  if ((session.stressAfter || 0) < (session.stressBefore || 0)) {
    return "Seu estresse pareceu aliviar um pouco. Repetir uma versao curta pode ajudar a manter constancia.";
  }
  if ((session.moodAfter || 0) > (session.moodBefore || 0)) {
    return "Seu humor melhorou apos caminhar. Guarde esse tipo como uma opcao gentil para dias parecidos.";
  }
  return `${mode.supportiveCopy} Na proxima, mantenha um volume parecido ou diminua se o corpo pedir.`;
}

function isValidPoint(point: RoutePoint) {
  return Number.isFinite(point.lat) && Number.isFinite(point.lng) && Math.abs(point.lat) <= 90 && Math.abs(point.lng) <= 180 && Boolean(point.timestamp);
}

function degreesToRadians(value: number) {
  return value * Math.PI / 180;
}

function round(value: number, digits = 2) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function metFor(speedKmh: number, intensity: string) {
  if (speedKmh >= 6.5 || intensity.includes("Moderada+")) return 5.3;
  if (speedKmh >= 5.0 || intensity.includes("Moderada")) return 4.3;
  if (speedKmh >= 3.0 || intensity.includes("Leve")) return 3.3;
  return 2.3;
}
