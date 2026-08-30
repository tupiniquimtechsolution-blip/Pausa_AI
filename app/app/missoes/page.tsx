import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowRight, BatteryCharging, Brain, Clock, Moon, ShieldCheck, Smile, Zap } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { parseSteps } from "@/lib/utils";
import { allFocusExercises } from "@/lib/focus-exercises";
import { energyMissions } from "@/lib/energy-missions";
import { sleepMissions } from "@/lib/sleep-missions";
import { happinessMissions, happinessThemeLabels } from "@/lib/happiness-missions";
import { Badge, Card, SelectableLink } from "@/components/ui";
import { ExerciseCardCarousel } from "@/components/exercise-card-carousel";
import { CompleteExerciseButton, FavoriteExerciseButton } from "@/components/favorite-exercise-button";
import { ContentLibraryBrowser } from "@/components/content-library-browser";

const tabs = [
  {
    id: "foco",
    label: "Foco",
    icon: Brain,
    title: "Foco com progressao",
    description: "Treinos de atencao sustentada, visualizacao, respiracao, Pomodoro e registros de progresso.",
    slugs: allFocusExercises.map((item) => item.slug)
  },
  {
    id: "dar-energia",
    label: "Dar energia",
    icon: BatteryCharging,
    title: "Dar energia",
    description: "Para sono, fadiga, baixa disposicao, corpo parado e falta de clareza mental.",
    slugs: energyMissions.filter((item) => item.direction === "dar-energia").map((item) => item.slug)
  },
  {
    id: "gastar-energia",
    label: "Gastar energia",
    icon: Zap,
    title: "Gastar energia",
    description: "Para agitacao, inquietacao, irritacao e necessidade de descarregar tensao com seguranca.",
    slugs: energyMissions.filter((item) => item.direction === "gastar-energia").map((item) => item.slug)
  },
  {
    id: "dar-sono",
    label: "Dar sono",
    icon: Moon,
    title: "Dar sono",
    description: "Para dificuldade para dormir, mente acelerada, tensao corporal e ansiedade noturna.",
    slugs: sleepMissions.filter((item) => item.direction === "dar-sono").map((item) => item.slug)
  },
  {
    id: "tirar-sono",
    label: "Tirar sono",
    icon: BatteryCharging,
    title: "Tirar sono",
    description: "Para sonolencia durante o dia, queda de energia e necessidade de alerta temporario.",
    slugs: sleepMissions.filter((item) => item.direction === "tirar-sono").map((item) => item.slug)
  },
  {
    id: "felicidade",
    label: "Felicidade",
    icon: Smile,
    title: "Felicidade treinavel",
    description: "Habitos de prazer simples, conexao, movimento, gratidao, presenca e proposito.",
    slugs: happinessMissions.map((item) => item.slug)
  }
];

type CatalogEntry = {
  slug: string;
  title: string;
  presentation: string;
  purpose: string;
  level: string;
  duration: string;
  steps: string[];
  progression: string[];
  observations: string[];
  cautions: string[];
  meta?: string;
};

const catalog: CatalogEntry[] = [
  ...allFocusExercises.map((item) => ({
    slug: item.slug,
    title: item.title,
    presentation: item.presentation,
    purpose: item.purpose,
    level: item.level,
    duration: item.duration,
    steps: item.instructions,
    progression: item.progression,
    observations: item.observations,
    cautions: item.cautions,
    meta: "Foco"
  })),
  ...energyMissions.map((item) => ({
    slug: item.slug,
    title: item.title,
    presentation: item.presentation,
    purpose: item.purpose,
    level: item.level,
    duration: item.duration,
    steps: item.steps,
    progression: item.progression,
    observations: item.observations,
    cautions: item.cautions,
    meta: item.direction === "dar-energia" ? "Dar energia" : "Gastar energia"
  })),
  ...sleepMissions.map((item) => ({
    slug: item.slug,
    title: item.title,
    presentation: item.presentation,
    purpose: item.purpose,
    level: item.level,
    duration: item.duration,
    steps: item.steps,
    progression: item.progression,
    observations: item.observations,
    cautions: item.cautions,
    meta: item.direction === "dar-sono" ? "Dar sono" : "Tirar sono"
  })),
  ...happinessMissions.map((item) => ({
    slug: item.slug,
    title: item.title,
    presentation: item.presentation,
    purpose: item.purpose,
    level: item.level,
    duration: item.duration,
    steps: item.steps,
    progression: item.progression,
    observations: item.observations,
    cautions: item.cautions,
    meta: happinessThemeLabels[item.theme]
  }))
];

const catalogBySlug = new Map(catalog.map((item) => [item.slug, item]));

export default async function MissionsPage({
  searchParams
}: {
  searchParams: Promise<{ aba?: string }> | { aba?: string };
}) {
  const user = await requireUser();
  if (!user.onboardingCompleted) redirect("/app/onboarding");

  const params = await searchParams;
  const activeTab = tabs.find((tab) => tab.id === params.aba) || tabs[0];
  const instructions = await prisma.exerciseInstruction.findMany({
    where: { slug: { in: activeTab.slugs }, categoryGroup: "MENTAL" }
  });
  const ordered = activeTab.slugs
    .map((slug) => instructions.find((item) => item.slug === slug))
    .filter(Boolean) as typeof instructions;
  const ActiveIcon = activeTab.icon;

  return (
    <div className="grid gap-6">
      <div className="max-w-3xl">
        <Badge tone="mint">Mente</Badge>
        <h1 className="mt-3 text-3xl font-black text-navy">Práticas guiadas para foco, regulação e recuperação</h1>
        <p className="mt-2 text-text">
          Escolha uma area e abra uma pratica curta. O foco e criar pausas possiveis para regular atencao, energia, sono e pequenos sinais de bem-estar.
        </p>
      </div>

      <ContentLibraryBrowser pillar="MIND" />

      <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-6">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = tab.id === activeTab.id;
          return (
            <SelectableLink
              key={tab.id}
              label={tab.label}
              href={`/app/mente?aba=${tab.id}`}
              selected={active}
              icon={<Icon className="h-5 w-5" />}
              className="min-h-14 rounded-2xl"
            />
          );
        })}
      </div>

      <Card className="border-mint/60 bg-mint/20">
        <div className="flex items-start gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-navy text-white">
            <ActiveIcon className="h-5 w-5" />
          </span>
          <div>
            <h2 className="text-xl font-black text-navy">{activeTab.title}</h2>
            <p className="mt-2 text-sm font-semibold text-emerald-950">{activeTab.description}</p>
          </div>
        </div>
      </Card>

      <Card className="border-mint/60 bg-mint/20">
        <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex gap-3">
            <ShieldCheck className="h-5 w-5 shrink-0 text-positive" />
            <div>
              <h2 className="font-black text-navy">Corpo tem uma área própria</h2>
              <p className="mt-1 text-sm font-semibold text-text">Yoga de bolso, mobilidade, alongamentos, caminhada e práticas leves ficam em Corpo para separar movimento das práticas da Mente.</p>
            </div>
          </div>
          <Link className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-navy px-5 py-3 text-sm font-bold text-white" href="/app/corpo">
            Ver Corpo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Card>

      <div className="grid gap-5 lg:grid-cols-2">
        {ordered.map((exercise) => {
          const copy = catalogBySlug.get(exercise.slug);
          return (
            <Card key={exercise.id} className="overflow-hidden">
              <ExerciseCardCarousel imageKey={exercise.imageKey} title={exercise.title} slug={exercise.slug} />
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <Badge tone="lavender">{copy?.meta || activeTab.label}</Badge>
                <span className="inline-flex items-center gap-1 rounded-full bg-ice px-3 py-1 text-xs font-bold text-navy">
                  <Clock className="h-3 w-3" /> {copy?.duration || (exercise.durationSeconds ? `${Math.round(exercise.durationSeconds / 60)} min` : "Pratica guiada")}
                </span>
                {copy?.level && <Badge tone="mint">{copy.level}</Badge>}
              </div>
              <h2 className="mt-4 text-2xl font-black text-navy">{exercise.title}</h2>
              <p className="mt-2 text-sm text-text">{copy?.presentation || exercise.shortDescription}</p>
              <div className="mt-4 rounded-2xl bg-ice p-4">
                <p className="text-xs font-black uppercase text-slate-500">Para que serve</p>
                <p className="mt-1 text-sm font-semibold text-navy">{copy?.purpose || exercise.objective}</p>
              </div>
              <div className="mt-4">
                <p className="text-xs font-black uppercase text-slate-500">Primeiros passos</p>
                <ul className="mt-2 grid gap-2 text-sm text-text">
                  {(copy?.steps || parseSteps(exercise.howToSteps)).slice(0, 4).map((step) => <li key={step}>{step}</li>)}
                </ul>
              </div>
              {copy?.progression.length ? (
                <div className="mt-4 rounded-2xl bg-lavender/40 p-4">
                  <p className="text-xs font-black uppercase text-slate-500">Progressao</p>
                  <p className="mt-1 text-sm font-semibold text-navy">{copy.progression.slice(0, 2).join(" ")}</p>
                </div>
              ) : null}
              {copy?.cautions.length ? (
                <p className="mt-4 rounded-2xl bg-amber/10 p-3 text-xs font-bold text-amber-800 dark:text-amber-200">{copy.cautions[0]}</p>
              ) : null}
              <div className="mt-5 grid gap-2 sm:grid-cols-3">
                <Link className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-navy px-5 py-3 text-sm font-bold text-white" href={`/app/exercicios/${exercise.slug}`}>
                  Iniciar
                </Link>
                <CompleteExerciseButton instructionId={exercise.id} />
                <FavoriteExerciseButton id={exercise.slug} />
              </div>
            </Card>
          );
        })}
      </div>

      <Card>
        <h2 className="text-xl font-black text-navy">Aviso de cuidado</h2>
        <p className="mt-2 text-sm text-text">
          O Pausa AI oferece praticas de bem-estar e autocuidado. Ele nao substitui psicoterapia, acompanhamento medico ou atendimento de emergencia. Se houver risco imediato ou sofrimento intenso, procure ajuda presencial e um servico de emergencia da sua regiao.
        </p>
      </Card>
    </div>
  );
}
