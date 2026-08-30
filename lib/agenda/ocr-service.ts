export type OCRResult = {
  extractedText: string;
  source: "mock" | "native" | "external";
  available: boolean;
  message: string;
};

export async function extractTextFromImageMock(): Promise<OCRResult> {
  return {
    extractedText: "",
    source: "mock",
    available: false,
    message: "OCR preparado. A extração real entra quando houver provider de imagem configurado."
  };
}
