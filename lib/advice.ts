import OpenAI from "openai";
import { emergencyMessage } from "@/lib/risk";
import { refineCheckin } from "@/lib/checkin-refinement";
import { detectPhysicalAlertTerms, physicalAlertMessage } from "@/lib/physical-alerts";

export type AdviceInput = {
  moodScore: number;
  focusScore?: number;
  stressScore: number;
  energyScore: number;
  sleepScore: number;
  journalText?: string | null;
  manualTags?: string[];
  recentCheckins?: Array<{
    primaryArea?: string | null;
    focusScore: number;
    moodScore: number;
    stressScore: number;
    energyScore: number;
    sleepScore: number;
  }>;
  riskDetected: boolean;
  profile?: {
    mainGoal: string;
    dailyTime: string;
    preferredTime: string;
    stressLevel: string;
  } | null;
};

export type WellnessAdvice = {
  summary: string;
  recommendation: string;
  mission: {
    title: string;
    duration_minutes: number;
    description: string;
    steps: string[];
  };
  encouragement: string;
};

function localAdvice(input: AdviceInput): WellnessAdvice {
  if (input.riskDetected) {
    return {
      summary: emergencyMessage,
      recommendation: "Busque apoio humano imediato. Este aplicativo nao deve ser usado para lidar com uma emergencia.",
      mission: {
        title: "Pedir ajuda agora",
        duration_minutes: 1,
        description: "Entre em contato com alguem de confianca ou servico local de emergencia.",
        steps: ["Afaste-se de meios de risco.", "Ligue para alguem de confianca.", "No Brasil, considere ligar 188 para o CVV."]
      },
      encouragement: "Voce nao precisa atravessar esse momento sozinho."
    };
  }

  const physicalAlertTerms = detectPhysicalAlertTerms(input.journalText, input.manualTags);
  if (physicalAlertTerms.length) {
    return {
      summary: physicalAlertMessage(physicalAlertTerms),
      recommendation: "Priorize seguranca agora. Evite testar uma posicao nova ate entender melhor o sintoma com apoio profissional, principalmente se for intenso, recente ou estiver piorando.",
      mission: {
        title: "Pausar e avaliar com seguranca",
        duration_minutes: 1,
        description: "Use este momento para interromper a tentativa de autocuidado guiado e decidir um proximo passo seguro.",
        steps: [
          "Pare a pratica e fique em uma posicao confortavel.",
          "Observe se ha dor forte, falta de ar, dor no peito, febre, formigamento, perda de forca ou piora rapida.",
          "Procure avaliacao profissional ou atendimento local se algum sinal estiver presente.",
          "Retorne ao app apenas para pausas leves quando estiver seguro."
        ]
      },
      encouragement: "Cuidar do alerta agora tambem e autocuidado."
    };
  }

  const refined = refineCheckin({
    focusScore: input.focusScore || 3,
    moodScore: input.moodScore,
    stressScore: input.stressScore,
    energyScore: input.energyScore,
    sleepScore: input.sleepScore,
    journalText: input.journalText,
    manualTags: input.manualTags,
    recentCheckins: input.recentCheckins
  });

  return {
    summary: refined.summary,
    recommendation: refined.recommendation,
    mission: {
      title: refined.missionTitle,
      duration_minutes: 5,
      description: refined.missionDescription,
      steps: refined.missionSteps
    },
    encouragement: refined.encouragement
  };
}

export async function generateWellnessAdvice(input: AdviceInput): Promise<WellnessAdvice> {
  const fallback = localAdvice(input);
  if (!process.env.OPENAI_API_KEY || input.riskDetected) return fallback;

  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "Voce e um assistente de bem-estar preventivo. Nao e terapeuta, medico, psicologo ou psiquiatra. Reescreva apenas summary, recommendation e encouragement em linguagem curta, segura e acolhedora. Nao altere a missao, a area, tags, risco ou exercicio escolhido pelo motor local. Nao diagnostique, nao prometa cura e nao use termos clinicos. Responda exclusivamente em JSON valido com as chaves summary, recommendation e encouragement."
        },
        { role: "user", content: JSON.stringify({ input, localDecision: fallback }) }
      ]
    });
    const parsed = JSON.parse(response.choices[0]?.message.content || "{}") as Partial<WellnessAdvice>;
    if (!parsed.summary || !parsed.recommendation || !parsed.encouragement) return fallback;
    return {
      ...fallback,
      summary: parsed.summary,
      recommendation: parsed.recommendation,
      encouragement: parsed.encouragement
    };
  } catch {
    return fallback;
  }
}
