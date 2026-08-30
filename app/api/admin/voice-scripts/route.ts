import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  slug: z.string().min(2).max(160).regex(/^[a-z0-9-]+$/),
  title: z.string().min(2).max(180),
  language: z.string().default("pt-BR"),
  templateKey: z.string().min(1).max(120),
  scriptText: z.string().min(1).max(30_000),
  variables: z.record(z.string(), z.string()).default({}),
  version: z.number().int().positive().default(1),
  voiceLicenseNote: z.string().min(3).max(1000),
  transcription: z.string().min(1).max(30_000),
  captionsText: z.string().min(1).max(30_000)
});

export async function GET() {
  await requireAdmin();
  return NextResponse.json({ ok: true, scripts: await prisma.voiceScript.findMany({ orderBy: { updatedAt: "desc" } }) });
}

export async function POST(request: Request) {
  await requireAdmin();
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Roteiro inválido." }, { status: 400 });
  const script = await prisma.voiceScript.upsert({
    where: { slug: parsed.data.slug },
    update: {
      ...parsed.data,
      variablesJson: JSON.stringify(parsed.data.variables),
      status: "DRAFT"
    },
    create: {
      ...parsed.data,
      variablesJson: JSON.stringify(parsed.data.variables),
      status: "DRAFT"
    }
  });
  return NextResponse.json({
    ok: true,
    script,
    voiceCloningAuthorized: false,
    policy: "Somente vozes próprias ou sintetizadas com licença explícita."
  }, { status: 201 });
}
