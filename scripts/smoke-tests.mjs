import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const baseUrl = (process.env.SMOKE_BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const email = `smoke-${Date.now()}@pausaai.test`;
const password = "Smoke12345";
const jar = new Map();

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function cookieHeader() {
  return Array.from(jar.entries()).map(([key, value]) => `${key}=${value}`).join("; ");
}

function captureCookies(headers) {
  const raw = typeof headers.getSetCookie === "function" ? headers.getSetCookie() : [headers.get("set-cookie")].filter(Boolean);
  for (const cookie of raw) {
    const pair = cookie.split(";")[0];
    const index = pair.indexOf("=");
    if (index > 0) jar.set(pair.slice(0, index), pair.slice(index + 1));
  }
}

async function request(path, options = {}) {
  const headers = {
    ...(options.body ? { "Content-Type": "application/json" } : {}),
    ...(jar.size ? { Cookie: cookieHeader() } : {}),
    ...(options.headers || {})
  };
  const response = await fetch(`${baseUrl}${path}`, {
    redirect: "manual",
    ...options,
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined
  });
  captureCookies(response.headers);
  const text = await response.text();
  let data = {};
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { text };
  }
  return { response, data };
}

async function formRequest(path, body) {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    ...(jar.size ? { Cookie: cookieHeader() } : {})
  };
  const response = await fetch(`${baseUrl}${path}`, {
    method: "POST",
    redirect: "manual",
    headers,
    body: new URLSearchParams(body).toString()
  });
  captureCookies(response.headers);
  return { response, text: await response.text() };
}

async function main() {
  await prisma.user.deleteMany({ where: { email } });

  const register = await request("/api/auth/register", {
    method: "POST",
    body: { name: "Smoke Test", email, password, confirmPassword: password }
  });
  assert(register.response.status === 200, `Cadastro falhou: ${register.response.status}`);
  assert(register.data.redirectTo === "/app/onboarding", "Cadastro nao redirecionou para onboarding.");

  const onboarding = await request("/api/onboarding", {
    method: "POST",
    body: {
      mainGoal: "Melhorar foco",
      dailyTime: "5 minutos",
      preferredTime: "Manha",
      stressLevel: "Medio",
      difficultyArea: "Telas",
      workHours: 8,
      freeHours: 2,
      sleepHours: 7,
      movementPreferences: "Bem leve,Yoga"
    }
  });
  assert(onboarding.response.status === 200, `Onboarding falhou: ${onboarding.response.status}`);
  assert(onboarding.data.redirectTo === "/app/checkin?primeiro=1", "Onboarding nao redirecionou para o primeiro check-in.");

  const login = await request("/api/auth/login", {
    method: "POST",
    body: { email, password }
  });
  assert(login.response.status === 200, `Login falhou: ${login.response.status}`);
  assert(login.data.redirectTo === "/app", "Login nao redirecionou para /app depois do onboarding.");

  jar.clear();
  const formLogin = await formRequest("/api/auth/login?redirect=1", { email, password });
  assert(formLogin.response.status === 303, `Login por formulario deveria redirecionar com 303, recebeu ${formLogin.response.status}.`);
  assert(formLogin.response.headers.get("location") === "/app", `Login por formulario apontou para ${formLogin.response.headers.get("location")}.`);
  assert(jar.has("pausa_session"), "Login por formulario nao gravou cookie de sessao.");
  const appAfterFormLogin = await request("/app");
  assert(appAfterFormLogin.response.status === 200, "Login por formulario nao abriu /app com sessao.");

  const checkinToken = crypto.randomUUID();
  const checkinPayload = {
    focusScore: 1,
    moodScore: 4,
    stressScore: 3,
    energyScore: 4,
    sleepScore: 4,
    journalText: "Passei muito tempo no celular e fiquei sem foco.",
    manualTags: ["Telas", "Sem foco"],
    completionToken: checkinToken
  };
  const checkin = await request("/api/checkins", {
    method: "POST",
    body: checkinPayload
  });
  assert(checkin.response.status === 200, `Check-in falhou: ${checkin.response.status}`);
  const checkinId = String(checkin.data.redirectTo || "").split("/").pop();
  assert(checkinId, "Check-in nao retornou ID no redirect.");
  const checkinRetry = await request("/api/checkins", { method: "POST", body: checkinPayload });
  assert(checkinRetry.data.alreadyCompleted === true && checkinRetry.data.xpAwarded === 0, "Retry de check-in deveria reutilizar o registro sem XP adicional.");
  assert(checkinRetry.data.redirectTo === checkin.data.redirectTo, "Retry de check-in deveria apontar para o registro original.");

  const savedCheckin = await prisma.checkin.findUnique({ where: { id: checkinId } });
  assert(savedCheckin?.primaryArea === "FOCUS", `Check-in deveria priorizar FOCUS, recebeu ${savedCheckin?.primaryArea}.`);
  assert(savedCheckin?.recommendedInstructionSlug === "pausa-sem-tela", `Check-in deveria sugerir pausa-sem-tela, recebeu ${savedCheckin?.recommendedInstructionSlug}.`);

  const activeInstructionSlugs = (await prisma.catalogReconciliation.findMany({
    where: { catalogArea: "EXERCISE_INSTRUCTION", reconciliationStatus: "ACTIVE" },
    select: { catalogIdOrSlug: true }
  })).map((entry) => entry.catalogIdOrSlug);
  const instruction = await prisma.exerciseInstruction.findFirst({ where: { slug: { in: activeInstructionSlugs } } });
  assert(instruction, "Instrucao ativa para smoke nao encontrada.");
  const instructionToken = crypto.randomUUID();
  const completion = await request("/api/exercise-instructions/session", {
    method: "POST",
    body: { instructionId: instruction.id, checkinId, completionToken: instructionToken }
  });
  assert(completion.response.status === 200, `Conclusao de exercicio falhou: ${completion.response.status}`);
  assert(completion.data.xpAwarded > 0, "Conclusao de exercicio nao concedeu XP.");
  const instructionDuplicate = await request("/api/exercise-instructions/session", {
    method: "POST",
    body: { instructionId: instruction.id, checkinId, completionToken: crypto.randomUUID() }
  });
  assert(instructionDuplicate.data.alreadyCompleted === true && instructionDuplicate.data.xpAwarded === 0, "Instrucao repetida no mesmo check-in nao deve conceder XP.");

  const activeExerciseIds = (await prisma.catalogReconciliation.findMany({
    where: { catalogArea: "EXERCISE", reconciliationStatus: "ACTIVE" },
    select: { catalogIdOrSlug: true }
  })).map((entry) => entry.catalogIdOrSlug);
  const exercise = await prisma.exercise.findFirst({ where: { id: { in: activeExerciseIds } } });
  assert(exercise, "Exercicio ativo para smoke nao encontrado.");
  const exerciseCompletion = await request("/api/exercises/session", {
    method: "POST",
    body: { exerciseId: exercise.id, checkinId, completionToken: crypto.randomUUID() }
  });
  assert(exerciseCompletion.response.status === 200 && exerciseCompletion.data.xpAwarded > 0, "Exercicio do catalogo deveria conceder XP.");
  const exerciseDuplicate = await request("/api/exercises/session", {
    method: "POST",
    body: { exerciseId: exercise.id, checkinId, completionToken: crypto.randomUUID() }
  });
  assert(exerciseDuplicate.data.alreadyCompleted === true && exerciseDuplicate.data.xpAwarded === 0, "Exercicio repetido no check-in deveria ser idempotente.");

  const mission = await prisma.mission.findFirst({ orderBy: { unlockLevel: "asc" } });
  assert(mission, "Missao para smoke nao encontrada.");
  const missionCompletion = await request("/api/missions", {
    method: "POST",
    body: { missionId: mission.id, checkinId, completionToken: crypto.randomUUID() }
  });
  assert(missionCompletion.response.status === 200 && missionCompletion.data.xpAwarded > 0, "Missao deveria conceder XP.");
  const missionDuplicate = await request("/api/missions", {
    method: "POST",
    body: { missionId: mission.id, checkinId, completionToken: crypto.randomUUID() }
  });
  assert(missionDuplicate.data.alreadyCompleted === true && missionDuplicate.data.xpAwarded === 0, "Missao repetida no check-in deveria ser idempotente.");

  const activeYogaSlugs = (await prisma.catalogReconciliation.findMany({
    where: { catalogArea: "YOGA_PRACTICE", reconciliationStatus: "ACTIVE" },
    select: { catalogIdOrSlug: true }
  })).map((entry) => entry.catalogIdOrSlug);
  const yoga = await prisma.yogaPractice.findFirst({ where: { slug: { in: activeYogaSlugs } } });
  assert(yoga, "Yoga ativa para smoke nao encontrada.");
  const yogaCompletion = await request("/api/yoga/session", {
    method: "POST",
    body: { practiceId: yoga.id, checkinId, completed: true, completionToken: crypto.randomUUID() }
  });
  assert(yogaCompletion.response.status === 200 && yogaCompletion.data.xpAwarded > 0, "Yoga deveria conceder XP.");
  const yogaDuplicate = await request("/api/yoga/session", {
    method: "POST",
    body: { practiceId: yoga.id, checkinId, completed: true, completionToken: crypto.randomUUID() }
  });
  assert(yogaDuplicate.data.alreadyCompleted === true && yogaDuplicate.data.xpAwarded === 0, "Yoga repetida no check-in deveria ser idempotente.");

  const workout = await prisma.workoutRoutine.findFirst({ where: { minLevel: { lte: 1 } }, orderBy: { minLevel: "asc" } });
  assert(workout, "Treino para smoke nao encontrado.");
  const workoutToken = crypto.randomUUID();
  const workoutPayload = {
    routineId: workout.id,
    roundsCompleted: 1,
    durationSeconds: Math.max(10, workout.roundSeconds),
    completionToken: workoutToken
  };
  const workoutCompletion = await request("/api/workouts/session", { method: "POST", body: workoutPayload });
  const workoutRetry = await request("/api/workouts/session", { method: "POST", body: workoutPayload });
  const workoutNewSession = await request("/api/workouts/session", {
    method: "POST",
    body: { ...workoutPayload, completionToken: crypto.randomUUID() }
  });
  assert(workoutCompletion.data.xpAwarded > 0 && workoutRetry.data.alreadyCompleted === true, "Retry de treino com o mesmo token deveria pontuar uma vez.");
  assert(workoutNewSession.data.xpAwarded > 0 && workoutNewSession.data.sessionId !== workoutCompletion.data.sessionId, "Novo token de treino deveria criar nova sessao intencional.");

  const walkingToken = crypto.randomUUID();
  const walkingEnd = new Date();
  const walkingPayload = {
    walkingMode: "light",
    goal: "free",
    startedAt: new Date(walkingEnd.getTime() - 60000).toISOString(),
    endedAt: walkingEnd.toISOString(),
    durationSeconds: 60,
    movingTimeSeconds: 60,
    distanceMeters: 100,
    gpsEnabled: false,
    timerOnly: true,
    routePoints: [],
    privacy: "private",
    hideRouteEdges: true,
    completed: true,
    completionToken: walkingToken
  };
  const walkingCompletion = await request("/api/walking/sessions", { method: "POST", body: walkingPayload });
  const walkingRetry = await request("/api/walking/sessions", { method: "POST", body: walkingPayload });
  assert(walkingCompletion.data.xpAwarded > 0 && walkingRetry.data.alreadyCompleted === true && walkingRetry.data.xpAwarded === 0, "Retry de caminhada deveria pontuar uma vez.");

  const parsedAgenda = await request("/api/agenda/parse", {
    method: "POST",
    body: { text: "Treino amanha as 7h por 40 minutos" }
  });
  assert(parsedAgenda.response.status === 200, `Parser de agenda falhou: ${parsedAgenda.response.status}`);
  assert(parsedAgenda.data.result?.title === "Treino", `Parser deveria reconhecer Treino, recebeu ${parsedAgenda.data.result?.title}.`);
  assert(parsedAgenda.data.result?.startDateTime, "Parser deveria retornar inicio do evento.");

  const agendaStart = new Date(Date.now() + 24 * 60 * 60 * 1000);
  agendaStart.setHours(7, 0, 0, 0);
  const agendaEnd = new Date(agendaStart.getTime() + 40 * 60 * 1000);
  const agendaEvent = await request("/api/agenda/events", {
    method: "POST",
    body: {
      title: "Treino smoke",
      startDateTime: agendaStart.toISOString(),
      endDateTime: agendaEnd.toISOString(),
      category: "EXERCICIO",
      priority: "MEDIUM",
      reminderMinutes: [30]
    }
  });
  assert(agendaEvent.response.status === 200, `Criacao de evento de agenda falhou: ${agendaEvent.response.status}`);
  assert(agendaEvent.data.event?.id, "Evento de agenda deveria retornar id.");

  const overlap = await request("/api/agenda/events", {
    method: "POST",
    body: {
      title: "Consulta smoke",
      startDateTime: new Date(agendaStart.getTime() + 20 * 60 * 1000).toISOString(),
      endDateTime: new Date(agendaStart.getTime() + 50 * 60 * 1000).toISOString(),
      category: "COMPROMISSO",
      priority: "HIGH",
      reminderMinutes: [30]
    }
  });
  assert(overlap.response.status === 409, `Agenda deveria bloquear conflito com 409, recebeu: ${overlap.response.status}`);
  assert(overlap.data.code === "SCHEDULE_CONFLICT" && overlap.data.conflict?.title, "Conflito deveria identificar o item ocupado.");

  const conflicts = await request(`/api/agenda/conflicts?from=${encodeURIComponent(agendaStart.toISOString())}&to=${encodeURIComponent(new Date(agendaStart.getTime() + 2 * 60 * 60 * 1000).toISOString())}`);
  assert(conflicts.response.status === 200, `Consulta de conflitos falhou: ${conflicts.response.status}`);
  assert(Array.isArray(conflicts.data.conflicts) && conflicts.data.conflicts.length === 0, "Agenda não deveria persistir o conflito rejeitado.");

  const inbox = await request("/api/agenda/inbox", {
    method: "POST",
    body: { rawText: "Salvar para depois: comprar tenis de corrida", suggestedType: "unknown" }
  });
  assert(inbox.response.status === 200, `Caixa de entrada falhou: ${inbox.response.status}`);
  assert(inbox.data.item?.id, "Item da caixa de entrada deveria retornar id.");

  const risk = await request("/api/checkins", {
    method: "POST",
    body: {
      focusScore: 3,
      moodScore: 1,
      stressScore: 5,
      energyScore: 1,
      sleepScore: 1,
      journalText: "quero morrer",
      manualTags: ["Sem vontade"],
      completionToken: crypto.randomUUID()
    }
  });
  assert(risk.response.status === 200, `Check-in de risco falhou: ${risk.response.status}`);
  const riskId = String(risk.data.redirectTo || "").split("/").pop();
  const riskCheckin = await prisma.checkin.findUnique({ where: { id: riskId } });
  assert(riskCheckin?.riskDetected === true, "Risco textual deveria ser detectado.");
  assert(!riskCheckin?.recommendedInstructionSlug, "Risco textual nao deve gerar exercicio comum.");

  const forgot = await request("/api/auth/password/forgot", {
    method: "POST",
    body: { email }
  });
  assert(forgot.response.status === 200, `Esqueci senha falhou: ${forgot.response.status}`);
  assert(forgot.data.resetUrl, "Reset local deveria retornar resetUrl em localhost.");
  const token = String(forgot.data.resetUrl).split("/").pop();
  const newPassword = "Smoke54321";
  const reset = await request("/api/auth/password/reset", {
    method: "POST",
    body: { token, password: newPassword, confirmPassword: newPassword }
  });
  assert(reset.response.status === 200, `Reset de senha falhou: ${reset.response.status}`);
  const reused = await request("/api/auth/password/reset", {
    method: "POST",
    body: { token, password: password, confirmPassword: password }
  });
  assert(reused.response.status === 400, "Token de reset usado nao deve ser reutilizavel.");

  const relogin = await request("/api/auth/login", {
    method: "POST",
    body: { email, password: newPassword }
  });
  assert(relogin.response.status === 200, "Login com nova senha deveria funcionar.");

  console.log("Smoke tests passaram: cadastro, login, onboarding, XP idempotente nos sete fluxos, agenda, risco e recuperacao de senha.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.user.deleteMany({ where: { email } }).catch(() => {});
    await prisma.$disconnect();
  });
