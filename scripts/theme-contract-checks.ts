import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { THEME_DEFINITIONS } from "../lib/design-system/themes";

type Rgb = [number, number, number];

function source(path: string) {
  return readFileSync(path, "utf8");
}

function luminance(rgb: Rgb) {
  const [red, green, blue] = rgb.map((channel) => {
    const value = channel / 255;
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function contrast(first: Rgb, second: Rgb) {
  const [lighter, darker] = [luminance(first), luminance(second)].sort((a, b) => b - a);
  return (lighter + 0.05) / (darker + 0.05);
}

function themeTokens(css: string) {
  const blocks = [...css.matchAll(/(?:\:root,\s*)?\[data-theme="([^"]+)"\]\s*\{([^}]+)\}/gs)];
  return new Map(blocks.map(([, theme, body]) => {
    const tokens = Object.fromEntries(
      [...body.matchAll(/--([\w-]+):\s*(\d+)\s+(\d+)\s+(\d+)/g)]
        .map((match) => [match[1], [Number(match[2]), Number(match[3]), Number(match[4])] as Rgb])
    );
    return [theme, tokens];
  }));
}

function assertPair(theme: string, tokens: Record<string, Rgb>, foreground: string, background: string) {
  assert.ok(tokens[foreground], `${theme}:${foreground} ausente.`);
  assert.ok(tokens[background], `${theme}:${background} ausente.`);
  const ratio = contrast(tokens[foreground], tokens[background]);
  assert.ok(ratio >= 4.5, `${theme}:${foreground}/${background} = ${ratio.toFixed(2)}, abaixo de WCAG AA.`);
}

function main() {
  const css = source("app/globals.css");
  const themes = themeTokens(css);
  assert.equal(themes.size, THEME_DEFINITIONS.length, "A matriz deve conter os nove temas governados.");

  for (const definition of THEME_DEFINITIONS) {
    const tokens = themes.get(definition.id);
    assert.ok(tokens, `Tema ${definition.id} ausente do CSS.`);
    for (const surface of ["ds-background", "ds-surface", "ds-card"]) {
      assertPair(definition.id, tokens, "ds-text", surface);
      assertPair(definition.id, tokens, "ds-muted", surface);
    }
    assertPair(definition.id, tokens, "ds-accent-contrast", "ds-accent");

    if (definition.darkSurface) {
      for (const surface of ["ds-background", "ds-surface", "ds-card"]) {
        assert.ok(luminance(tokens[surface]) < 0.05, `${definition.id}:${surface} nao pode ser claro.`);
      }
      assert.ok(luminance(tokens["ds-text"]) > 0.85, `${definition.id}: o texto principal deve permanecer claro.`);
      assert.ok(luminance(tokens["ds-accent"]) < 0.20, `${definition.id}: a acao nao pode virar uma caixa clara.`);
    }
  }

  for (const guard of [
    ".dark .bg-white",
    ".dark .bg-navy",
    ".dark .text-navy",
    ".dark .text-emerald-950",
    ".dark .text-violet-950"
  ]) {
    assert.ok(css.includes(guard), `Protecao de compatibilidade ausente: ${guard}`);
  }

  const tailwind = source("tailwind.config.ts");
  for (const token of ["muted", "\"accent-contrast\"", "selection"]) {
    assert.ok(tailwind.includes(token), `Token semantico Tailwind ausente: ${token}`);
  }

  const ui = source("components/ui.tsx");
  for (const contract of [
    "bg-app-accent text-app-accent-contrast",
    "bg-app-surface text-app-text",
    "bg-app-card/90",
    "border-app-warning/60 bg-app-warning/15",
    "border-app-success/50 bg-app-success/15"
  ]) {
    assert.ok(ui.includes(contract), `Componente-base fora do contrato semantico: ${contract}`);
  }
  assert.equal(ui.includes("bg-navy text-white"), false, "Button/Card base nao pode voltar ao par ambiguo navy/white.");

  const hudSources = [
    source("components/navigation.tsx"),
    source("components/pillar-navigation.tsx"),
    source("components/notification-center.tsx"),
    source("components/user-progress-banner.tsx"),
    source("components/centered-toast.tsx"),
    source("components/preferences.tsx")
  ].join("\n");
  for (const semanticClass of ["bg-app-surface", "text-app-text", "text-app-muted", "border-app-border"]) {
    assert.ok(hudSources.includes(semanticClass), `HUD sem cobertura do token ${semanticClass}.`);
  }

  console.info(JSON.stringify({
    event: "theme_contract_checks_passed",
    themes: themes.size,
    darkSurfaceThemes: THEME_DEFINITIONS.filter((theme) => theme.darkSurface).map((theme) => theme.id),
    checkedPairsPerTheme: 7,
    hudSemanticContract: true,
    legacyCompatibilityGuards: true
  }));
}

main();
