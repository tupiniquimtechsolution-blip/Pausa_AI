import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, Clock, Home, Layers, Target } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { parseSteps } from "@/lib/utils";
import { Badge, Card } from "@/components/ui";
import { InstructionalVideoBlock } from "@/components/instructional-video-block";
import { YogaImageSequence } from "@/components/yoga-image-sequence";
import { YogaCompleteButton } from "@/components/yoga-complete-button";
import { isCatalogEntryActive } from "@/lib/catalog-reconciliation";

const typeLabel: Record<string, string> = {
  LIGHT: "Yoga leve",
  RESTORATIVE: "Yoga restaurativa",
  FUNCTIONAL: "Yoga funcional"
};

const areaLabel: Record<string, string> = {
  SLEEP: "Sono",
  STRESS: "Antiestresse",
  FOCUS: "Foco",
  ENERGY: "Energia",
  MOOD: "Humor",
  MOBILITY: "Mobilidade",
  WORK_BREAK: "Pausa no trabalho"
};

const contextLabel: Record<string, string> = {
  HOME: "Em casa",
  WORK: "No trabalho",
  BOTH: "Casa ou trabalho"
};

function list(value: string) {
  return parseSteps(value);
}

export default async function YogaPracticePage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ checkin?: string }> }) {
  const { slug } = await params;
  const query = await searchParams;
  const user = await requireUser();
  if (!user.onboardingCompleted) redirect("/app/onboarding");
  const practice = await prisma.yogaPractice.findUnique({ where: { slug } });
  if (!practice || !isCatalogEntryActive("YOGA_PRACTICE", practice.slug)) notFound();
  const video = await prisma.instructionalVideo.findFirst({
    where: { targetType: "YOGA_PRACTICE", targetSlug: practice.slug, status: "PUBLISHED" }
  });

  const frames = list(practice.imageFrameDescriptions);
  const imageKeys = list(practice.imageSequenceKeys);

  return (
    <div className="mx-auto grid max-w-5xl gap-5 pb-28 lg:pb-8">
      <Link href="/app/corpo?aba=yoga" className="inline-flex items-center gap-2 text-sm font-bold text-navy dark:text-slate-100">
        <ArrowLeft className="h-4 w-4" /> Voltar para Yoga
      </Link>

      <Card>
        <YogaImageSequence imageSequenceKeys={imageKeys} title={practice.title} frameDescriptions={frames} />
        <div className="mt-5 flex flex-wrap gap-2">
          <Badge tone="lavender">{typeLabel[practice.yogaType] || practice.yogaType}</Badge>
          <Badge tone="mint">{areaLabel[practice.area] || practice.area}</Badge>
          <Badge tone="amber">Nivel {practice.level}</Badge>
        </div>
        <h1 className="mt-4 text-4xl font-black text-navy dark:text-slate-50">{practice.title}</h1>
        <p className="mt-3 text-lg text-text dark:text-slate-300">{practice.shortDescription}</p>
        <div className="mt-5 grid gap-3 md:grid-cols-4">
          <Info icon={<Target className="h-4 w-4" />} label="Objetivo" value={practice.objective} />
          <Info icon={<Clock className="h-4 w-4" />} label="Duracao" value={`${Math.round(practice.durationSeconds / 60)} min`} />
          <Info icon={<Home className="h-4 w-4" />} label="Contexto" value={contextLabel[practice.context] || practice.context} />
          <Info icon={<Layers className="h-4 w-4" />} label="Intensidade" value={practice.intensity} />
        </div>
      </Card>

      <InstructionalVideoBlock video={video} />

      <section className="grid gap-5 lg:grid-cols-2">
        <InstructionCard title="Como fazer" items={list(practice.howToSteps)} />
        <InstructionCard title="Postura" items={list(practice.postureTips)} />
        <InstructionCard title="Respiracao" items={list(practice.breathingTips)} />
        <InstructionCard title="Erros comuns" items={list(practice.commonMistakes)} />
        <InstructionCard title="Quando fazer" items={list(practice.recommendedWhen)} />
        <InstructionCard title="Quando evitar" items={list(practice.avoidWhen)} />
      </section>

      <Card className="border-amber/30 bg-amber/10">
        <h2 className="text-xl font-black text-navy dark:text-slate-50">Cuidados</h2>
        <ul className="mt-3 grid gap-2 text-sm font-semibold text-text dark:text-slate-300">
          {list(practice.safetyNotes).map((item) => <li key={item}>- {item}</li>)}
        </ul>
      </Card>

      <YogaCompleteButton practiceId={practice.id} checkinId={query.checkin} title={practice.title} durationSeconds={practice.durationSeconds} />
    </div>
  );
}

function Info({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return <div className="rounded-2xl bg-ice p-4 dark:bg-slate-800"><p className="flex items-center gap-2 text-xs font-bold uppercase text-slate-500">{icon}{label}</p><p className="mt-1 font-bold text-navy dark:text-slate-50">{value}</p></div>;
}

function InstructionCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <h2 className="text-xl font-black text-navy dark:text-slate-50">{title}</h2>
      <ul className="mt-3 grid gap-2 text-sm font-semibold text-text dark:text-slate-300">
        {items.map((item) => <li key={item}>- {item}</li>)}
      </ul>
    </Card>
  );
}
