export type SpeechToTextResult = {
  text: string;
  source: "mock" | "native" | "external";
  available: boolean;
  message: string;
};

export async function transcribeAudioMock(): Promise<SpeechToTextResult> {
  return {
    text: "",
    source: "mock",
    available: false,
    message: "Entrada por voz preparada. A transcrição real entra quando o app tiver microfone nativo ou serviço externo configurado."
  };
}
