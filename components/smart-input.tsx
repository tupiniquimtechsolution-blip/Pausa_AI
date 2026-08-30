"use client";

import { useRef, useState, useTransition } from "react";
import { Camera, ImagePlus, Mic, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button, Card } from "@/components/ui";
import { CenteredToast } from "@/components/centered-toast";
import { EventPreviewCard, type EventPreview } from "@/components/event-preview-card";
import { usePlatformCapabilities } from "@/components/platform-capabilities";

type ParsedResult = EventPreview & {
  action: string;
  type: string;
  dueDate?: string;
  energyLevel?: string;
  timezone?: string;
  reminders?: Array<{ offsetMinutes: number }>;
};

export function SmartInput() {
  const router = useRouter();
  const { requestPermission, capabilities } = usePlatformCapabilities();
  const cameraInput = useRef<HTMLInputElement>(null);
  const galleryInput = useRef<HTMLInputElement>(null);
  const [text, setText] = useState("");
  const [preview, setPreview] = useState<ParsedResult | null>(null);
  const [toast, setToast] = useState<{ message: string; type: "success" | "warning" | "error" | "info" }>({ message: "", type: "info" });
  const [pending, startTransition] = useTransition();

  async function interpretByVoice() {
    const permission = await requestPermission("microphone");
    if (permission !== "granted") {
      setToast({
        message: permission === "denied"
          ? "Microfone negado. Revise a permissão nas configurações do app."
          : capabilities.microphone.message,
        type: "warning"
      });
      return;
    }
    const SpeechRecognition = speechRecognitionConstructor();
    if (!SpeechRecognition) {
      setToast({
        message: "Microfone autorizado. A transcrição por voz não está disponível neste navegador; use o campo de texto.",
        type: "info"
      });
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = document.documentElement.lang || "pt-BR";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event) => {
      const transcript = event.results[0]?.[0]?.transcript || "";
      setText(transcript);
      setToast({ message: "Voz transcrita. Revise antes de interpretar.", type: "success" });
    };
    recognition.onerror = () => setToast({ message: "Não foi possível transcrever. Você pode digitar o comando.", type: "error" });
    recognition.start();
  }

  async function openCamera() {
    const permission = await requestPermission("camera");
    if (permission === "granted") cameraInput.current?.click();
    else setToast({
      message: permission === "denied" ? "Câmera negada. Revise a permissão nas configurações do app." : capabilities.camera.message,
      type: "warning"
    });
  }

  function handleImage(file?: File) {
    if (!file) return;
    setToast({
      message: `Imagem "${file.name}" selecionada. O OCR permanece indisponível até um provedor aprovado ser configurado.`,
      type: "info"
    });
  }

  function parse() {
    if (!text.trim()) return;
    startTransition(async () => {
      const response = await fetch("/api/agenda/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setToast({ message: data.error || "Não conseguimos interpretar agora.", type: "error" });
        return;
      }
      setPreview(data.result);
    });
  }

  function confirm() {
    if (!preview) return;
    if (preview.action !== "create") {
      setToast({ message: "Comando identificado. Edição e exclusão por comando exigem seleção do item antes de aplicar.", type: "warning" });
      return;
    }
    startTransition(async () => {
      const response = await createFromPreview(preview);
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        setToast({ message: data.error || "Não conseguimos salvar agora.", type: "error" });
        return;
      }
      setToast({ message: "Item criado na agenda com sucesso.", type: "success" });
      setText("");
      setPreview(null);
      router.refresh();
    });
  }

  return (
    <Card>
      <CenteredToast message={toast.message} type={toast.type} onClose={() => setToast({ message: "", type: "info" })} />
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-xs font-black uppercase text-slate-500">Assistente de agenda</p>
          <h2 className="mt-1 text-2xl font-black text-navy">Criação rápida por texto</h2>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          <input
            value={text}
            onChange={(event) => setText(event.target.value)}
            onKeyDown={(event) => { if (event.key === "Enter") parse(); }}
            placeholder="Ex: Treino amanhã às 7h por 40 minutos"
          />
          <Button type="button" onClick={parse}><Send className="h-4 w-4" /> {pending ? "Lendo..." : "Interpretar"}</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="secondary" onClick={interpretByVoice}><Mic className="h-4 w-4" /> Interpretar por voz</Button>
          <Button type="button" variant="secondary" onClick={openCamera}><Camera className="h-4 w-4" /> Usar câmera</Button>
          <Button type="button" variant="secondary" onClick={() => galleryInput.current?.click()}><ImagePlus className="h-4 w-4" /> Abrir galeria</Button>
          <input
            ref={cameraInput}
            className="sr-only"
            type="file"
            accept="image/*"
            capture="environment"
            onChange={(event) => handleImage(event.target.files?.[0])}
            aria-label="Capturar imagem com a câmera"
          />
          <input
            ref={galleryInput}
            className="sr-only"
            type="file"
            accept="image/*"
            onChange={(event) => handleImage(event.target.files?.[0])}
            aria-label="Selecionar imagem da galeria"
          />
        </div>
        {preview && <EventPreviewCard preview={preview} onConfirm={confirm} onCancel={() => setPreview(null)} confirmLabel={preview.action === "create" ? "Confirmar e salvar" : "Revisar comando"} />}
      </div>
    </Card>
  );
}

type SpeechRecognitionResultEvent = {
  results: ArrayLike<{ [index: number]: { transcript: string } }>;
};

type SpeechRecognitionInstance = {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((event: SpeechRecognitionResultEvent) => void) | null;
  onerror: (() => void) | null;
  start: () => void;
};

type SpeechRecognitionConstructor = new () => SpeechRecognitionInstance;

function speechRecognitionConstructor(): SpeechRecognitionConstructor | null {
  const target = window as typeof window & {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  };
  return target.SpeechRecognition || target.webkitSpeechRecognition || null;
}

async function createFromPreview(preview: ParsedResult) {
  if (preview.type === "task") {
    return fetch("/api/agenda/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: preview.title,
        description: preview.description || "",
        dueDate: preview.dueDate || preview.startDateTime || "",
        category: preview.category || "TAREFA",
        priority: preview.priority || "MEDIUM",
        energyLevel: preview.energyLevel || "MODERATE",
        estimatedDuration: 30
      })
    });
  }
  if (preview.type === "reminder") {
    return fetch("/api/agenda/reminders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: preview.title,
        message: preview.description || "",
        dateTime: preview.startDateTime,
        recurrenceRule: preview.recurrenceRule || "",
        priority: preview.priority || "MEDIUM"
      })
    });
  }
  return fetch("/api/agenda/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: preview.title,
      description: preview.description || "",
      startDateTime: preview.startDateTime,
      endDateTime: preview.endDateTime,
      category: preview.category || "ROTINA",
      priority: preview.priority || "MEDIUM",
      energyLevel: preview.energyLevel || "MODERATE",
      recurrenceRule: preview.recurrenceRule || "",
      reminderMinutes: preview.reminders?.map((item) => item.offsetMinutes) || [30]
    })
  });
}
