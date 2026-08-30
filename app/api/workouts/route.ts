import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { workoutQuerySchema } from "@/lib/validators";

export async function GET(request: Request) {
  const user = await requireUser();
  const url = new URL(request.url);
  const parsed = workoutQuerySchema.safeParse(Object.fromEntries(url.searchParams.entries()));
  if (!parsed.success) return NextResponse.json({ error: "Filtros inválidos." }, { status: 400 });

  const routines = await prisma.workoutRoutine.findMany({
    orderBy: [{ minLevel: "asc" }, { modality: "asc" }, { rounds: "asc" }]
  });

  const filtered = routines.filter((routine) => {
    const modalityOk = !parsed.data.modalidade || routine.modality === parsed.data.modalidade;
    const intensityOk = !parsed.data.intensidade || routine.intensity === parsed.data.intensidade;
    const availabilityOk =
      parsed.data.disponibilidade === "todas"
        ? true
        : parsed.data.disponibilidade === "bloqueadas"
          ? routine.minLevel > user.level
          : routine.minLevel <= user.level;
    const paceOk =
      routine.modality !== "Pular corda" ||
      !parsed.data.pace ||
      ((routine.paceMin || 0) <= parsed.data.pace && (routine.paceMax || 999) >= parsed.data.pace);
    return modalityOk && intensityOk && availabilityOk && paceOk;
  });

  return NextResponse.json({ routines: filtered, userLevel: user.level });
}
