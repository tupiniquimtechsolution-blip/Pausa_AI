export type CalendarProviderName = "LOCAL" | "GOOGLE" | "APPLE" | "OUTLOOK";

export type CalendarProviderCapability = {
  provider: CalendarProviderName;
  available: boolean;
  message: string;
};

export const calendarProviderCapabilities: CalendarProviderCapability[] = [
  { provider: "LOCAL", available: true, message: "Agenda local pronta para uso offline." },
  { provider: "GOOGLE", available: false, message: "Google Calendar exige OAuth e entra na fase de sincronização externa." },
  { provider: "APPLE", available: false, message: "Apple Calendar usa integração nativa quando houver build iOS." },
  { provider: "OUTLOOK", available: false, message: "Outlook está preparado como provider futuro." }
];
