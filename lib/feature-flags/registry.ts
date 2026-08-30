export const FEATURE_FLAG_DEFINITIONS = {
  NAV_V2: {
    description: "Nova navegação de cinco pilares.",
    owner: "product-navigation",
    defaultValue: false
  },
  RECOMMENDATION_ENGINE_V1: {
    description: "Motor explicável e versionado de recomendações.",
    owner: "product-intelligence",
    defaultValue: false
  },
  SMART_NOTIFICATIONS: {
    description: "Acompanhamento contextual com privacidade e controle de fadiga.",
    owner: "product-notifications",
    defaultValue: false
  },
  PAUSA_ACTIVITY: {
    description: "Plataforma própria de atividades, GPS, rotas e métricas.",
    owner: "product-activity",
    defaultValue: false
  },
  DEVICE_CONNECT: {
    description: "Dispositivos, Bluetooth e adaptadores opcionais.",
    owner: "platform-devices",
    defaultValue: false
  },
  MEDIA_LIBRARY: {
    description: "Biblioteca mestre multimídia e governança de direitos.",
    owner: "content-media",
    defaultValue: false
  },
  VIDEO_LIBRARY: {
    description: "Biblioteca de vídeo aprovada; oculta por padrão.",
    owner: "content-media",
    defaultValue: false
  },
  EXTERNAL_MEDIA_PROVIDERS: {
    description: "Provedores externos de mídia opcionais.",
    owner: "platform-integrations",
    defaultValue: false
  },
  SOCIAL_PUBLISHING: {
    description: "Publicação social automática opcional.",
    owner: "marketing",
    defaultValue: false
  },
  MONETIZATION_PREP: {
    description: "Estrutura futura de monetização, sem cobrança ativa.",
    owner: "business",
    defaultValue: false
  },
  B2B_REAL_DASHBOARD_ENABLED: {
    description: "Dashboard B2B real preservado atrás de flag.",
    owner: "business-b2b",
    defaultValue: false
  }
} as const;

export type FeatureFlagKey = keyof typeof FEATURE_FLAG_DEFINITIONS;

export const FEATURE_FLAG_KEYS = Object.keys(FEATURE_FLAG_DEFINITIONS) as FeatureFlagKey[];

export function isFeatureFlagKey(value: string): value is FeatureFlagKey {
  return FEATURE_FLAG_KEYS.includes(value as FeatureFlagKey);
}
