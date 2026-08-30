"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Moon, Sun } from "lucide-react";
import {
  THEME_DEFINITIONS,
  isThemePreference,
  resolveTheme,
  themeUsesDarkSurface,
  type ThemeId,
  type ThemePreference
} from "@/lib/design-system/themes";
import {
  LOCALES,
  LOCALE_DEFINITIONS,
  isAppLocale,
  translate,
  type AppLocale,
  type TranslationKey
} from "@/lib/i18n/catalogs";

const PreferencesContext = createContext<{
  theme: ThemePreference;
  resolvedTheme: ThemeId;
  language: AppLocale;
  setTheme: (theme: ThemePreference) => void;
  setLanguage: (language: AppLocale) => void;
  t: (key: TranslationKey) => string;
} | null>(null);

function prefersDark() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyTheme(preference: ThemePreference) {
  const resolved = resolveTheme(preference, prefersDark());
  document.documentElement.dataset.theme = resolved;
  document.documentElement.dataset.themePreference = preference;
  document.documentElement.classList.toggle("dark", themeUsesDarkSurface(resolved));
  return resolved;
}

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemePreference>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ThemeId>("light");
  const [language, setLanguageState] = useState<AppLocale>("pt-BR");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const savedTheme = window.localStorage.getItem("pausa_theme");
      const savedLanguage = window.localStorage.getItem("pausa_language");
      const nextTheme = savedTheme && isThemePreference(savedTheme) ? savedTheme : "system";
      const nextLanguage = savedLanguage && isAppLocale(savedLanguage) && LOCALE_DEFINITIONS[savedLanguage].enabled
        ? savedLanguage
        : "pt-BR";
      setThemeState(nextTheme);
      setLanguageState(nextLanguage);
      setResolvedTheme(applyTheme(nextTheme));
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemTheme = () => {
      if (theme === "system") setResolvedTheme(applyTheme("system"));
    };
    media.addEventListener("change", handleSystemTheme);
    return () => media.removeEventListener("change", handleSystemTheme);
  }, [theme]);

  function setTheme(nextTheme: ThemePreference) {
    setThemeState(nextTheme);
    setResolvedTheme(applyTheme(nextTheme));
    window.localStorage.setItem("pausa_theme", nextTheme);
    void persistPreferences({ theme: nextTheme });
  }

  function setLanguage(nextLanguage: AppLocale) {
    if (!LOCALE_DEFINITIONS[nextLanguage].enabled) return;
    setLanguageState(nextLanguage);
    document.documentElement.lang = nextLanguage;
    window.localStorage.setItem("pausa_language", nextLanguage);
    void persistPreferences({ language: nextLanguage });
  }

  const value = useMemo(() => ({
    theme,
    resolvedTheme,
    language,
    setTheme,
    setLanguage,
    t: (key: TranslationKey) => translate(language, key)
  }), [language, resolvedTheme, theme]);

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

async function persistPreferences(data: { theme?: ThemePreference; language?: AppLocale }) {
  try {
    await fetch("/api/profile/preferences", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  } catch {
    // The local preference remains usable while offline and will be retried on the next change.
  }
}

export function usePreferences() {
  const context = useContext(PreferencesContext);
  if (!context) throw new Error("usePreferences must be used inside PreferencesProvider");
  return context;
}

export function PreferencesControls() {
  const { theme, language, setTheme, setLanguage, t } = usePreferences();
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <label className="grid gap-2">
        {t("appearance")}
        <select value={theme} onChange={(event) => setTheme(event.target.value as ThemePreference)}>
          <option value="system">{t("followSystem")}</option>
          {THEME_DEFINITIONS.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
        </select>
      </label>
      <label className="grid gap-2">
        {t("language")}
        <select value={language} onChange={(event) => setLanguage(event.target.value as AppLocale)}>
          {LOCALES.map((locale) => (
            <option key={locale} value={locale} disabled={!LOCALE_DEFINITIONS[locale].enabled}>
              {LOCALE_DEFINITIONS[locale].nativeLabel}
              {!LOCALE_DEFINITIONS[locale].enabled ? ` — ${t("pendingQa")}` : ""}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export function I18nText({ k, fallback }: { k: TranslationKey; fallback: string }) {
  const { t } = usePreferences();
  return <>{t(k) || fallback}</>;
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = usePreferences();
  const isDark = themeUsesDarkSurface(resolvedTheme);
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-app-border bg-app-surface text-app-text shadow-soft transition hover:bg-app-selection/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/30"
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      title={isDark ? "Tema claro" : "Tema escuro"}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
