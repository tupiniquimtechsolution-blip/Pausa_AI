const sensitiveParameterPattern = /(^|[?&#/_-])(user|userid|email|cpf|checkin|journal|diagnosis|diagnostico|latitude|longitude|routepoints|health)(id|data|text)?([=&#/_-]|$)/i;
const sensitiveTemplatePattern = /\{\{\s*(user|profile|email|cpf|checkin|journal|diagnosis|diagnostico|latitude|longitude|route|health)\b[^}]*\}\}/i;

export function validateCampaignPrivacy(input: {
  deepLink: string;
  copies: string[];
}) {
  const link = new URL(input.deepLink, "https://pausa.invalid");
  if (link.origin !== "https://pausa.invalid" || !link.pathname.startsWith("/app/")) {
    return { safe: false as const, reason: "INVALID_INTERNAL_DEEP_LINK" };
  }
  if (link.search || link.hash || sensitiveParameterPattern.test(input.deepLink)) {
    return { safe: false as const, reason: "SENSITIVE_DEEP_LINK_PARAMETER" };
  }
  if (input.copies.some((copy) => sensitiveTemplatePattern.test(copy))) {
    return { safe: false as const, reason: "SENSITIVE_PERSONALIZATION_TEMPLATE" };
  }
  return { safe: true as const };
}
