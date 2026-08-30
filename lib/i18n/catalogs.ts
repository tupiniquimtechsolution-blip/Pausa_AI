export const LOCALES = ["pt-BR", "en", "es", "de", "fr", "it", "ja"] as const;
export type AppLocale = (typeof LOCALES)[number];

export const LOCALE_DEFINITIONS: Record<AppLocale, {
  label: string;
  nativeLabel: string;
  enabled: boolean;
  status: "ACTIVE" | "PENDING_QA";
}> = {
  "pt-BR": { label: "Português (Brasil)", nativeLabel: "Português (Brasil)", enabled: true, status: "ACTIVE" },
  en: { label: "Inglês", nativeLabel: "English", enabled: false, status: "PENDING_QA" },
  es: { label: "Espanhol", nativeLabel: "Español", enabled: false, status: "PENDING_QA" },
  de: { label: "Alemão", nativeLabel: "Deutsch", enabled: false, status: "PENDING_QA" },
  fr: { label: "Francês", nativeLabel: "Français", enabled: false, status: "PENDING_QA" },
  it: { label: "Italiano", nativeLabel: "Italiano", enabled: false, status: "PENDING_QA" },
  ja: { label: "Japonês", nativeLabel: "日本語", enabled: false, status: "PENDING_QA" }
};

const ptBR = {
  dailyCheckin: "Check-in diário",
  missions: "Missões",
  movement: "Corpo e Movimento",
  homeFunctional: "Funcional em Casa",
  benefits: "Benefícios e Parceiros",
  todayState: "Estado do dia",
  focus: "Foco",
  stress: "Antiestresse",
  energy: "Energia",
  mood: "Humor",
  sleep: "Sono",
  start: "Começar",
  complete: "Concluir",
  history: "Histórico",
  profile: "Perfil",
  appearance: "Aparência",
  language: "Idioma",
  followSystem: "Seguir o sistema",
  pendingQa: "Em revisão",
  saveError: "Não foi possível salvar agora."
} as const;

export type TranslationKey = keyof typeof ptBR;
export type TranslationCatalog = Record<TranslationKey, string>;

const en: TranslationCatalog = {
  dailyCheckin: "Daily check-in", missions: "Missions", movement: "Body and Movement",
  homeFunctional: "Home Workout", benefits: "Benefits and Partners", todayState: "Today's state",
  focus: "Focus", stress: "Stress relief", energy: "Energy", mood: "Mood", sleep: "Sleep",
  start: "Start", complete: "Complete", history: "History", profile: "Profile",
  appearance: "Appearance", language: "Language", followSystem: "Follow system",
  pendingQa: "Under review", saveError: "Unable to save right now."
};

const es: TranslationCatalog = {
  dailyCheckin: "Registro diario", missions: "Misiones", movement: "Cuerpo y Movimiento",
  homeFunctional: "Ejercicio en Casa", benefits: "Beneficios y Socios", todayState: "Estado del día",
  focus: "Enfoque", stress: "Antiestrés", energy: "Energía", mood: "Estado de ánimo", sleep: "Sueño",
  start: "Empezar", complete: "Completar", history: "Historial", profile: "Perfil",
  appearance: "Apariencia", language: "Idioma", followSystem: "Seguir el sistema",
  pendingQa: "En revisión", saveError: "No se pudo guardar ahora."
};

const de: TranslationCatalog = {
  dailyCheckin: "Täglicher Check-in", missions: "Missionen", movement: "Körper und Bewegung",
  homeFunctional: "Training zu Hause", benefits: "Vorteile und Partner", todayState: "Heutiger Zustand",
  focus: "Fokus", stress: "Stressabbau", energy: "Energie", mood: "Stimmung", sleep: "Schlaf",
  start: "Starten", complete: "Abschließen", history: "Verlauf", profile: "Profil",
  appearance: "Darstellung", language: "Sprache", followSystem: "Systemeinstellung verwenden",
  pendingQa: "In Prüfung", saveError: "Speichern ist derzeit nicht möglich."
};

const fr: TranslationCatalog = {
  dailyCheckin: "Bilan quotidien", missions: "Missions", movement: "Corps et Mouvement",
  homeFunctional: "Exercice à domicile", benefits: "Avantages et Partenaires", todayState: "État du jour",
  focus: "Concentration", stress: "Antistress", energy: "Énergie", mood: "Humeur", sleep: "Sommeil",
  start: "Commencer", complete: "Terminer", history: "Historique", profile: "Profil",
  appearance: "Apparence", language: "Langue", followSystem: "Suivre le système",
  pendingQa: "En révision", saveError: "Impossible d'enregistrer pour le moment."
};

const it: TranslationCatalog = {
  dailyCheckin: "Check-in giornaliero", missions: "Missioni", movement: "Corpo e Movimento",
  homeFunctional: "Allenamento a casa", benefits: "Vantaggi e Partner", todayState: "Stato di oggi",
  focus: "Concentrazione", stress: "Antistress", energy: "Energia", mood: "Umore", sleep: "Sonno",
  start: "Inizia", complete: "Completa", history: "Cronologia", profile: "Profilo",
  appearance: "Aspetto", language: "Lingua", followSystem: "Segui il sistema",
  pendingQa: "In revisione", saveError: "Impossibile salvare in questo momento."
};

const ja: TranslationCatalog = {
  dailyCheckin: "毎日のチェックイン", missions: "ミッション", movement: "身体と運動",
  homeFunctional: "自宅トレーニング", benefits: "特典とパートナー", todayState: "今日の状態",
  focus: "集中", stress: "ストレスケア", energy: "エネルギー", mood: "気分", sleep: "睡眠",
  start: "開始", complete: "完了", history: "履歴", profile: "プロフィール",
  appearance: "外観", language: "言語", followSystem: "システム設定に従う",
  pendingQa: "確認中", saveError: "現在保存できません。"
};

export const TRANSLATION_CATALOGS: Record<AppLocale, TranslationCatalog> = {
  "pt-BR": ptBR,
  en,
  es,
  de,
  fr,
  it,
  ja
};

export function isAppLocale(value: string): value is AppLocale {
  return LOCALES.includes(value as AppLocale);
}

export function isLocaleEnabled(locale: AppLocale) {
  return LOCALE_DEFINITIONS[locale].enabled;
}

export function translate(locale: AppLocale, key: TranslationKey) {
  return TRANSLATION_CATALOGS[locale]?.[key]
    || TRANSLATION_CATALOGS["pt-BR"][key]
    || TRANSLATION_CATALOGS["pt-BR"].saveError;
}

export function formatLocaleDate(locale: AppLocale, value: Date | number) {
  return new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(value);
}

export function formatLocaleNumber(locale: AppLocale, value: number) {
  return new Intl.NumberFormat(locale).format(value);
}
