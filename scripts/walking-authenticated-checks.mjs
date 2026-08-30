import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const baseUrl = (process.env.WALKING_BASE_URL || process.env.SMOKE_BASE_URL || "http://127.0.0.1:3000").replace(/\/$/, "");
const email = `walking-${Date.now()}@pausaai.test`;
const password = "Walking12345";
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
  let response;
  try {
    response = await fetch(`${baseUrl}${path}`, {
      redirect: "manual",
      ...options,
      headers: {
        ...(options.body ? { "Content-Type": "application/json" } : {}),
        ...(jar.size ? { Cookie: cookieHeader() } : {}),
        ...(options.headers || {})
      },
      body: options.body ? JSON.stringify(options.body) : undefined
    });
  } catch (error) {
    throw new Error(`Servidor local indisponivel em ${baseUrl}. Inicie com npm.cmd run dev -- --hostname 127.0.0.1. ${error.message}`);
  }

  captureCookies(response.headers);
  const text = await response.text();
  let data = {};
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = { text };
  }
  return { response, data, text };
}

function routePoints(count = 12) {
  const start = Date.now() - count * 10_000;
  return Array.from({ length: count }, (_, index) => ({
    lat: -23.5614 + index * 0.00008,
    lng: -46.6559 + index * 0.00005,
    timestamp: new Date(start + index * 10_000).toISOString(),
    speedKmh: 3.5,
    accuracy: 12
  }));
}

async function assertPage(path, marker) {
  const page = await request(path);
  assert(page.response.status === 200, `${path} retornou ${page.response.status}.`);
  assert(page.text.includes(marker), `${path} nao contem marcador esperado: ${marker}.`);
}

async function main() {
  await prisma.user.deleteMany({ where: { email } });

  const register = await request("/api/auth/register", {
    method: "POST",
    body: { name: "Walking QA", email, password, confirmPassword: password }
  });
  assert(register.response.status === 200, `Cadastro falhou: ${register.response.status}.`);

  const onboarding = await request("/api/onboarding", {
    method: "POST",
    body: {
      mainGoal: "Mover com constancia",
      dailyTime: "10 minutos",
      preferredTime: "Manha",
      stressLevel: "Medio",
      difficultyArea: "Ansiedade",
      workHours: 8,
      freeHours: 2,
      sleepHours: 7,
      movementPreferences: "Caminhada,Yoga"
    }
  });
  assert(onboarding.response.status === 200, `Onboarding falhou: ${onboarding.response.status}.`);

  const login = await request("/api/auth/login", { method: "POST", body: { email, password } });
  assert(login.response.status === 200, `Login falhou: ${login.response.status}.`);

  await assertPage("/app/movimento/caminhada", "Caminhada Inteligente");
  await assertPage("/app/movimento/caminhada/configurar?tipo=anxiety", "Configurar Caminhada");
  await assertPage(
    "/app/movimento/caminhada/andamento?walkingMode=anxiety&goal=anxiety&durationMinutes=12&gpsEnabled=false&timerOnly=true&privacy=private&hideRouteEdges=true&moodBefore=3&stressBefore=4&anxietyBefore=5",
    "Controles"
  );
  await assertPage("/app/movimento/caminhada/historico", "Historico e progresso");

  const now = new Date();
  const invalidRoute = await request("/api/walking/sessions", {
    method: "POST",
    body: {
      walkingMode: "light",
      goal: "recovery",
      startedAt: new Date(now.getTime() - 600000).toISOString(),
      endedAt: now.toISOString(),
      durationSeconds: 600,
      movingTimeSeconds: 600,
      distanceMeters: 0,
      averagePace: "--",
      averageSpeedKmh: 0,
      caloriesEstimated: 0,
      gpsEnabled: true,
      timerOnly: false,
      routePoints: [{ lat: 999, lng: -46.65, timestamp: now.toISOString() }],
      privacy: "private",
      hideRouteEdges: true,
      completed: true,
      completionToken: crypto.randomUUID()
    }
  });
  assert(invalidRoute.response.status === 400, `Rota GPS invalida deveria retornar 400, veio ${invalidRoute.response.status}.`);

  const gpsSession = await request("/api/walking/sessions", {
    method: "POST",
    body: {
      walkingMode: "anxiety",
      goal: "anxiety",
      startedAt: new Date(now.getTime() - 900000).toISOString(),
      endedAt: now.toISOString(),
      durationSeconds: 900,
      movingTimeSeconds: 850,
      distanceMeters: 99999,
      averagePace: "1:00/km",
      averageSpeedKmh: 60,
      caloriesEstimated: 4999,
      gpsEnabled: true,
      timerOnly: false,
      routePoints: routePoints(12),
      privacy: "public",
      hideRouteEdges: true,
      moodBefore: 2,
      moodAfter: 4,
      stressBefore: 5,
      stressAfter: 3,
      anxietyBefore: 5,
      anxietyAfter: 3,
      notes: "Teste autenticado: caminhada para ansiedade com rota mascarada.",
      completed: true,
      completionToken: crypto.randomUUID()
    }
  });
  assert(gpsSession.response.status === 200, `Sessao GPS falhou: ${gpsSession.response.status}.`);
  assert(gpsSession.data.xpAwarded > 0, "Sessao GPS deveria conceder XP.");
  assert(gpsSession.data.session.distanceMeters > 0 && gpsSession.data.session.distanceMeters < 2000, "Distancia GPS deveria ser recalculada pela rota.");
  assert(gpsSession.data.session.caloriesEstimated !== 4999, "Calorias do cliente nao devem ser persistidas literalmente.");
  assert(gpsSession.data.session.privacy === "public", "Privacidade public deveria ser salva como intencao visual.");
  assert(Array.isArray(gpsSession.data.session.routePoints) && gpsSession.data.session.routePoints.length < 12, "Rota exibida deveria ocultar bordas.");

  const timerNow = new Date(Date.now() + 1000);
  const timerSession = await request("/api/walking/sessions", {
    method: "POST",
    body: {
      walkingMode: "chair",
      goal: "recovery",
      startedAt: new Date(timerNow.getTime() - 480000).toISOString(),
      endedAt: timerNow.toISOString(),
      durationSeconds: 480,
      movingTimeSeconds: 480,
      distanceMeters: 0,
      averagePace: "--",
      averageSpeedKmh: 0,
      caloriesEstimated: 0,
      gpsEnabled: false,
      timerOnly: true,
      routePoints: [],
      privacy: "private",
      hideRouteEdges: true,
      moodBefore: 3,
      moodAfter: 3,
      stressBefore: 3,
      stressAfter: 2,
      anxietyBefore: 3,
      anxietyAfter: 2,
      notes: "Teste autenticado: fallback temporizador sem GPS.",
      completed: true,
      completionToken: crypto.randomUUID()
    }
  });
  assert(timerSession.response.status === 200, `Sessao timer falhou: ${timerSession.response.status}.`);
  assert(timerSession.data.session.timerOnly === true && timerSession.data.session.routePoints.length === 0, "Fallback temporizador deveria salvar sem rota.");

  const generalHistory = await request("/app/historico");
  assert(generalHistory.response.status === 200, `Historico geral retornou ${generalHistory.response.status}.`);
  assert(generalHistory.text.includes("Caminhadas concluidas"), "Historico geral deveria mostrar bloco compacto de caminhadas.");

  const goal = await request("/api/walking/goals", {
    method: "PATCH",
    body: { period: "weekly", targetDistanceMeters: 3000, targetDurationSeconds: 3600, targetSessions: 3, active: true }
  });
  assert(goal.response.status === 200, `Meta falhou: ${goal.response.status}.`);
  assert(goal.data.goal?.targetSessions === 3, "Meta semanal deveria persistir sessoes alvo.");

  const favorite = await request("/api/walking/favorite-routes", {
    method: "POST",
    body: { title: "Rota QA", walkingMode: "anxiety", distanceMeters: 0, routePoints: routePoints(10), privacy: "private", hideRouteEdges: true }
  });
  assert(favorite.response.status === 200, `Rota favorita falhou: ${favorite.response.status}.`);
  await prisma.walkingFavoriteRoute.update({ where: { id: favorite.data.favorite.id }, data: { routePoints: "{json-invalido" } });

  const favorites = await request("/api/walking/favorite-routes");
  assert(favorites.response.status === 200, `Listagem de favoritas falhou: ${favorites.response.status}.`);
  const corrupted = favorites.data.routes.find((item) => item.id === favorite.data.favorite.id);
  assert(corrupted && Array.isArray(corrupted.routePoints) && corrupted.routePoints.length === 0, "Favorita corrompida deveria retornar rota vazia sem derrubar API.");

  const history = await request("/api/walking/sessions?periodo=30&privacidade=public");
  assert(history.response.status === 200, `Historico API falhou: ${history.response.status}.`);
  assert(history.data.sessions.some((session) => session.id === gpsSession.data.sessionId), "Historico filtrado deveria listar sessao publica.");
  assert(history.data.summary.weekly.sessions >= 1, "Resumo semanal deveria contabilizar caminhadas.");

  const summary = await request(`/app/movimento/caminhada/resumo?session=${gpsSession.data.sessionId}`);
  assert(summary.response.status === 200, `Resumo retornou ${summary.response.status}.`);
  assert(summary.text.includes("Caminhada salva") && summary.text.includes("Calorias sao uma estimativa"), "Resumo deveria exibir sucesso e aviso de calorias.");

  const checkin = await request("/api/checkins", {
    method: "POST",
    body: {
      focusScore: 3,
      moodScore: 2,
      stressScore: 5,
      energyScore: 5,
      sleepScore: 3,
      journalText: "Ansiedade alta e agitacao hoje.",
      manualTags: ["Ansiedade", "Agitacao"],
      completionToken: crypto.randomUUID()
    }
  });
  assert(checkin.response.status === 200, `Check-in caminhada falhou: ${checkin.response.status}.`);
  const result = await request(checkin.data.redirectTo);
  assert(result.response.status === 200, `Resultado do check-in retornou ${result.response.status}.`);
  assert(result.text.includes("Caminhada") && result.text.toLowerCase().includes("ansiedade"), "Resultado do check-in deveria recomendar entrada de caminhada contextual.");

  const deletion = await request(`/api/walking/sessions/${timerSession.data.sessionId}`, { method: "DELETE" });
  assert(deletion.response.status === 200, `Exclusao retornou ${deletion.response.status}.`);
  const deleted = await prisma.walkingSession.findUnique({ where: { id: timerSession.data.sessionId } });
  assert(!deleted, "Exclusao de caminhada deveria remover sessao.");

  console.log("Walking authenticated checks passaram: paginas, GPS, fallback sem GPS, privacidade, metas, favoritas, historico, resumo, check-in e exclusao.");
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
