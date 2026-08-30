import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { APP_PILLARS, LEGACY_ROUTE_ALIASES, normalizedPathname, pillarForPathname } from "../lib/navigation/pillars";

const expectedPillars = ["Progresso", "Corpo", "Mente", "Rotina", "Perfil"];
assert.deepEqual(APP_PILLARS.map((pillar) => pillar.label), expectedPillars);
assert.equal(new Set(APP_PILLARS.map((pillar) => pillar.id)).size, 5);
assert.equal(new Set(APP_PILLARS.map((pillar) => pillar.href)).size, 5);

const fixedLabels = new Set(APP_PILLARS.map((pillar) => pillar.label));
assert.equal(fixedLabels.has("Yoga"), false);
assert.equal(fixedLabels.has("Modo Foco"), false);
assert.ok(APP_PILLARS.find((pillar) => pillar.id === "body")?.items.some((item) => item.label === "Yoga"));
assert.ok(APP_PILLARS.find((pillar) => pillar.id === "body")?.items.some((item) => item.label === "Pausa Activity"));
assert.ok(APP_PILLARS.find((pillar) => pillar.id === "mind")?.items.some((item) => item.label === "Modo Foco"));
assert.ok(APP_PILLARS.find((pillar) => pillar.id === "routine")?.items.some((item) => item.label === "Hoje"));
assert.ok(APP_PILLARS.find((pillar) => pillar.id === "profile")?.items.some((item) => item.label === "Histórico"));
assert.ok(APP_PILLARS.find((pillar) => pillar.id === "profile")?.items.some((item) => item.label === "Conquistas"));
assert.ok(APP_PILLARS.find((pillar) => pillar.id === "profile")?.items.some((item) => item.label === "Configurações"));

for (const pillar of APP_PILLARS) {
  const maximumPriorityItems = pillar.id === "body" ? 5 : 4;
  assert.ok(
    pillar.items.length >= 3 && pillar.items.length <= maximumPriorityItems,
    `${pillar.label} deve manter apenas acessos prioritários`
  );
  assert.equal(new Set(pillar.items.map((item) => item.href)).size, pillar.items.length);
}

const expectedAliases = {
  "/app": "/app/progresso",
  "/app/movimento": "/app/corpo",
  "/app/movimento/caminhada": "/app/corpo/caminhada",
  "/app/missoes": "/app/mente",
  "/app/historico": "/app/perfil/historico",
  "/app/yoga": "/app/corpo/yoga"
};
assert.deepEqual(LEGACY_ROUTE_ALIASES, expectedAliases);
assert.equal(normalizedPathname("/app/movimento/caminhada/configurar"), "/app/corpo/caminhada/configurar");
assert.equal(normalizedPathname("/app/missoes"), "/app/mente");
assert.equal(normalizedPathname("/app/corpo"), "/app/corpo");
assert.equal(pillarForPathname("/app/historico")?.id, "profile");
assert.equal(pillarForPathname("/app/agenda")?.id, "routine");

const routeFiles = [
  "app/app/progresso/page.tsx",
  "app/app/corpo/page.tsx",
  "app/app/corpo/caminhada/page.tsx",
  "app/app/corpo/caminhada/configurar/page.tsx",
  "app/app/corpo/caminhada/andamento/page.tsx",
  "app/app/corpo/caminhada/historico/page.tsx",
  "app/app/corpo/caminhada/resumo/page.tsx",
  "app/app/corpo/yoga/[slug]/page.tsx",
  "app/app/mente/page.tsx",
  "app/app/mente/foco/page.tsx",
  "app/app/rotina/hoje/page.tsx",
  "app/app/perfil/historico/page.tsx",
  "app/app/perfil/conquistas/page.tsx",
  "app/app/perfil/configuracoes/page.tsx",
  "app/app/movimento/page.tsx",
  "app/app/missoes/page.tsx",
  "app/app/historico/page.tsx"
];
for (const route of routeFiles) assert.ok(existsSync(resolve(route)), `Rota ausente: ${route}`);

const navigationSource = readFileSync(resolve("components/pillar-navigation.tsx"), "utf8");
for (const contract of ["pointerdown", "Escape", "aria-expanded", "aria-controls", "firstLinkRef"]) {
  assert.ok(navigationSource.includes(contract), `Contrato acessível ausente: ${contract}`);
}
assert.equal((navigationSource.match(/APP_PILLARS\.map/g) || []).length, 2);

console.info(JSON.stringify({
  event: "w3_navigation_checks_passed",
  pillars: APP_PILLARS.length,
  canonicalRoutes: routeFiles.filter((route) => !route.includes("/movimento/") && !route.includes("/missoes/") && !route.includes("/historico/page")).length,
  legacyAliases: Object.keys(LEGACY_ROUTE_ALIASES).length,
  keyboardAndOutsideDismiss: true
}));
