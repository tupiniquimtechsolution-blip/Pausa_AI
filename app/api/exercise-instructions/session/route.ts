import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { completeActivity } from "@/lib/activity-completions";
import { evaluateAchievements } from "@/lib/achievements";
import { isCatalogEntryActive } from "@/lib/catalog-reconciliation";
import { requiresCatalogVisualAsset } from "@/lib/catalog-policy";

const schema = z.object({
  instructionId: z.string().min(1),
  checkinId: z.string().optional().nullable(),
  completionToken: z.string().uuid()
});

export async function POST(request: Request) {
  const user = await requireUser();
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Exercicio invalido." }, { status: 400 });

  const instruction = await prisma.exerciseInstruction.findUnique({ where: { id: parsed.data.instructionId } });
  if (!instruction || (requiresCatalogVisualAsset(instruction) && !isCatalogEntryActive("EXERCISE_INSTRUCTION", instruction.slug))) {
    return NextResponse.json({ error: "Exercicio nao encontrado." }, { status: 404 });
  }
  const checkin = parsed.data.checkinId
    ? await prisma.checkin.findFirst({ where: { id: parsed.data.checkinId, userId: user.id } })
    : null;
  if (parsed.data.checkinId && !checkin) return NextResponse.json({ error: "Check-in nao encontrado para vincular a pratica." }, { status: 404 });

  const xpAwarded = instruction.level >= 4 ? 20 : instruction.level >= 2 ? 15 : 10;
  const closingMessage = `Pratica concluida. Voce criou uma pausa possivel hoje. +${xpAwarded} XP.`;
  const nextSuggestion = nextSuggestionFor(instruction.area, instruction.category);
  const result = await completeActivity({
    userId: user.id,
    activityType: "EXERCISE_INSTRUCTION",
    source: "/api/exercise-instructions/session",
    targetId: instruction.id,
    checkinId: checkin?.id,
    completionToken: parsed.data.completionToken,
    domainRecordType: "ExerciseInstructionSession",
    xpAwarded,
    createDomain: (tx) => tx.exerciseInstructionSession.create({
      data: {
        userId: user.id,
        instructionId: instruction.id,
        checkinId: checkin?.id,
        completedAt: new Date(),
        xpAwarded,
        closingMessage,
        nextSuggestion
      }
    })
  });
  const newlyUnlocked = !result.alreadyCompleted && result.xpAwarded > 0 ? await evaluateAchievements(user.id) : [];
  return NextResponse.json({
    ok: true,
    alreadyCompleted: result.alreadyCompleted,
    sessionId: result.sessionId,
    xpAwarded: result.xpAwarded,
    originalXpAwarded: result.originalXpAwarded,
    leveledUp: result.leveledUp,
    level: result.level,
    closingMessage: result.alreadyCompleted ? "Pratica ja registrada; nenhum XP adicional foi concedido." : closingMessage,
    nextSuggestion,
    newlyUnlocked
  });
}

function nextSuggestionFor(area: string, category: string) {
  if (area === "SLEEP") return "Amanha, observe se reduzir telas perto da noite deixa o descanso um pouco mais leve.";
  if (area === "FOCUS" || category === "WORK_BREAK") return "Amanha, tente repetir uma pausa curta antes da primeira tarefa mais exigente.";
  if (area === "ENERGY") return "Amanha, comece pequeno: agua, postura e um movimento leve ja contam.";
  if (area === "MOOD") return "Amanha, procure um sinal pequeno de cuidado antes de cobrar desempenho.";
  return "Amanha, uma pausa curta ja e suficiente para manter o ritual vivo.";
}
