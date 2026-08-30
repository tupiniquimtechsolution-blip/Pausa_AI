export const THEME_DEFINITIONS = [
  { id: "light", label: "Claro", darkSurface: false },
  { id: "dark", label: "Escuro", darkSurface: true },
  { id: "gray", label: "Cinza", darkSurface: false },
  { id: "monochrome", label: "Monocromático", darkSurface: false },
  { id: "black-green", label: "Preto e Verde", darkSurface: true },
  { id: "black-yellow", label: "Preto e Amarelo", darkSurface: true },
  { id: "green-black", label: "Verde e Preto", darkSurface: false },
  { id: "yellow-black", label: "Amarelo e Preto", darkSurface: false },
  { id: "blue-gray", label: "Azul e Cinza", darkSurface: false }
] as const;

export type ThemeId = (typeof THEME_DEFINITIONS)[number]["id"];
export type ThemePreference = ThemeId | "system";

export const THEME_IDS = THEME_DEFINITIONS.map((theme) => theme.id) as ThemeId[];
export const THEME_PREFERENCES = ["system", ...THEME_IDS] as const;

export function isThemeId(value: string): value is ThemeId {
  return THEME_IDS.includes(value as ThemeId);
}

export function isThemePreference(value: string): value is ThemePreference {
  return value === "system" || isThemeId(value);
}

export function resolveTheme(preference: ThemePreference, prefersDark: boolean): ThemeId {
  return preference === "system" ? (prefersDark ? "dark" : "light") : preference;
}

export function themeUsesDarkSurface(theme: ThemeId) {
  return THEME_DEFINITIONS.find((item) => item.id === theme)?.darkSurface || false;
}
