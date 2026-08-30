const RISK_TERMS = [
  "suicídio",
  "suicidio",
  "me matar",
  "quero morrer",
  "não quero viver",
  "nao quero viver",
  "autoagressão",
  "autoagressao",
  "me machucar",
  "acabar com tudo",
  "sumir para sempre",
  "tirar minha vida"
];

export function detectRiskText(text?: string | null) {
  const normalized = (text || "").toLowerCase();
  return RISK_TERMS.some((term) => normalized.includes(term));
}

export const emergencyMessage =
  "Sinto muito que você esteja passando por isso. O Pausa AI não é adequado para situações de emergência. Procure ajuda imediata com alguém de confiança ou com um serviço de emergência da sua região. Se você estiver em perigo imediato, ligue para o serviço de emergência local agora. No Brasil, você também pode buscar o CVV pelo número 188.";
