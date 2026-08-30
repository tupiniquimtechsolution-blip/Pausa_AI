import assert from "node:assert/strict";

const baseUrl = process.env.TEST_BASE_URL || "http://127.0.0.1:3103";
const masterPassword = process.env.MASTER_SEED_PASSWORD || "W1-Gate-Only-Password-2026!";

function cookieFrom(response: Response) {
  const value = response.headers.get("set-cookie");
  assert.ok(value, "Login W3 sem cookie de sessão.");
  return value.split(";")[0];
}

async function login() {
  const response = await fetch(`${baseUrl}/api/auth/login`, {
    method: "POST",
    redirect: "manual",
    headers: { "Content-Type": "application/json", "x-correlation-id": `w3-${crypto.randomUUID()}` },
    body: JSON.stringify({ email: "rmedrado15@gmail.com", password: masterPassword })
  });
  assert.equal(response.status, 200);
  return cookieFrom(response);
}

async function page(path: string, cookie: string, platform: "desktop-web" | "mobile-web" | "android-webview") {
  const userAgent = platform === "android-webview"
    ? "PausaAI/2026 Android WebView"
    : platform === "mobile-web"
      ? "Mozilla/5.0 Mobile Safari/605.1.15"
      : "Mozilla/5.0 Desktop Chrome/126";
  const response = await fetch(`${baseUrl}${path}`, {
    redirect: "manual",
    headers: {
      Cookie: cookie,
      "User-Agent": userAgent,
      "x-pausa-platform": platform,
      "x-correlation-id": `w3-${crypto.randomUUID()}`
    }
  });
  assert.equal(response.status, 200, `${platform} recebeu ${response.status} em ${path}`);
  return response.text();
}

async function main() {
  const cookie = await login();
  const canonicalRoutes = [
    "/app/progresso",
    "/app/corpo",
    "/app/corpo/caminhada",
    "/app/mente",
    "/app/mente/foco",
    "/app/rotina",
    "/app/rotina/hoje",
    "/app/perfil",
    "/app/perfil/historico",
    "/app/perfil/conquistas",
    "/app/perfil/configuracoes"
  ];
  const legacyRoutes = ["/app", "/app/movimento", "/app/missoes", "/app/historico"];
  const platforms = ["desktop-web", "mobile-web", "android-webview"] as const;

  for (const platform of platforms) {
    const shell = await page("/app/progresso", cookie, platform);
    for (const label of ["Progresso", "Corpo", "Mente", "Rotina", "Perfil"]) {
      assert.ok(shell.includes(label), `${platform}: pilar ${label} não renderizado`);
    }
    for (const route of canonicalRoutes.slice(1)) await page(route, cookie, platform);
  }
  for (const route of legacyRoutes) await page(route, cookie, "desktop-web");

  console.info(JSON.stringify({
    event: "w3_authenticated_gate_passed",
    platforms,
    canonicalRoutes: canonicalRoutes.length,
    legacyRoutes: legacyRoutes.length,
    brokenRoutes: 0
  }));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
