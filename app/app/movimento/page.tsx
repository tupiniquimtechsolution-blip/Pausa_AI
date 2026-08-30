import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowRight, BedDouble, CheckCircle2, Clock, Dumbbell, Footprints, HeartPulse, Search, ShieldCheck, Sparkles, Wind } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { parseSteps } from "@/lib/utils";
import { Badge, Card } from "@/components/ui";
import { ExerciseCardCarousel } from "@/components/exercise-card-carousel";
import { YogaImageSequence } from "@/components/yoga-image-sequence";
import { getRecommendedYogaPractice } from "@/lib/yoga-recommendation";
import { getLevelProgress } from "@/lib/levels";
import { UserProgressBanner } from "@/components/user-progress-banner";
import { CompleteExerciseButton, FavoriteExerciseButton } from "@/components/favorite-exercise-button";
import { exerciseImagePath } from "@/lib/exercise-images";
import { coreConditioningMovementById } from "@/lib/core-conditioning-reference";
import { plannedReferenceMovementById } from "@/lib/planned-reference-catalog";
import { activeCatalogIds, isCatalogEntryActive } from "@/lib/catalog-reconciliation";
import {
  recommendStretchExercises,
  stretchingCheckinFilters,
  stretchingExercises,
  stretchingLevelRules,
  stretchingPrinciples,
  stretchingRegions,
  stretchingTypeCards,
  type StretchLevel
} from "@/lib/stretching-exercises";
import { getRoutineExercises, stretchingRoutines } from "@/lib/stretching-routines";
import { ContentLibraryBrowser } from "@/components/content-library-browser";

const movementTracks = [
  {
    id: "todos",
    label: "Tudo gratis",
    title: "Todas as praticas",
    description: "Um mapa completo para voltar ao movimento no seu ritmo.",
    categories: [] as string[],
    icon: Sparkles,
    tone: "bg-mint/50"
  },
  {
    id: "yoga",
    label: "Yoga de bolso",
    title: "Yoga de bolso",
    description: "Sequencias curtas, leves e sem linguagem fitness agressiva.",
    categories: ["YOGA"],
    icon: HeartPulse,
    tone: "bg-lavender/70"
  },
  {
    id: "surya-12",
    label: "Saudacao ao Sol",
    title: "Saudacao ao Sol - 12 passos",
    description: "Sequencia guiada da REF_003 para manha, energia, postura e respiracao.",
    categories: ["YOGA"],
    collectionId: "surya_namaskar_12_passos",
    icon: Sparkles,
    tone: "bg-orange-100"
  },
  {
    id: "yoga-coluna",
    label: "Yoga coluna",
    title: "Yoga para coluna, forca leve e flexibilidade",
    description: "Sete movimentos da REF_001 para mobilidade, alongamento e consciencia postural.",
    categories: ["YOGA", "MOBILITY", "STRETCHING"],
    collectionId: "yoga_coluna_forca_flexibilidade",
    icon: HeartPulse,
    tone: "bg-indigo-100"
  },
  {
    id: "yoga-hormonal",
    label: "Yoga hormonal",
    title: "Yoga para SOP e equilibrio hormonal",
    description: "Posturas e respiracoes da REF_004 para autocuidado, pelve, estresse e relaxamento.",
    categories: ["YOGA"],
    collectionId: "yoga_hormonal_sop_equilibrio",
    icon: HeartPulse,
    tone: "bg-rose-100"
  },
  {
    id: "chakra-flow",
    label: "Chakras",
    title: "Fluxo de yoga dos 7 chakras",
    description: "Fluxo simbolico da REF_011 com respiracao, presenca e posturas por nivel.",
    categories: ["YOGA"],
    collectionId: "yoga_flow_7_chakras_consciencia_corporal",
    icon: Sparkles,
    tone: "bg-violet-100"
  },
  {
    id: "mobilidade",
    label: "Mobilidade",
    title: "Mobilidade e destravar",
    description: "Coluna, ombros, pescoco e pausas corporais para o trabalho.",
    categories: ["MOBILITY", "WORK_BREAK"],
    icon: Activity,
    tone: "bg-mint/60"
  },
  {
    id: "coluna-postural",
    label: "Coluna diaria",
    title: "Mobilidade diaria da coluna",
    description: "Rotina da REF_007 para mobilidade, estabilidade postural e pausas leves.",
    categories: ["MOBILITY"],
    collectionId: "mobilidade_coluna_saude_postural",
    icon: ShieldCheck,
    tone: "bg-lime-100"
  },
  {
    id: "costas-conforto",
    label: "Costas",
    title: "Conforto das costas e mobilidade",
    description: "Rotina leve da REF_010 para costas rigidas, lombar cansada e muito tempo sentado.",
    categories: ["MOBILITY", "STRETCHING"],
    collectionId: "rotina_conforto_costas_mobilidade_coluna",
    icon: ShieldCheck,
    tone: "bg-cyan-100"
  },
  {
    id: "pes-fascia",
    label: "Pes",
    title: "Autocuidado para pes e fascia plantar",
    description: "Rotina da REF_009 para pes cansados, panturrilha e conforto da sola do pe.",
    categories: ["MOBILITY", "STRETCHING"],
    collectionId: "cuidados_fascia_plantar_pes",
    icon: Footprints,
    tone: "bg-stone-100"
  },
  {
    id: "abertura-quadril",
    label: "Abertura quadril",
    title: "Abertura de quadril e flexibilidade lateral",
    description: "Sequencia planejada da REF_005 para mobilidade, adutores e alongamento progressivo.",
    categories: ["MOBILITY", "STRETCHING"],
    collectionId: "abertura_quadril_flexibilidade_lateral",
    icon: Activity,
    tone: "bg-teal-100"
  },
  {
    id: "alongamentos",
    label: "Alongamentos",
    title: "Alongamentos leves",
    description: "Praticas de permanencia confortavel para soltar tensao.",
    categories: ["STRETCHING"],
    icon: Wind,
    tone: "bg-blue-100"
  },
  {
    id: "sono-apoio",
    label: "Sono com apoio",
    title: "Posicoes de descanso",
    description: "Apoios com travesseiro para favorecer conforto no repouso.",
    categories: ["SLEEP_SUPPORT"],
    icon: BedDouble,
    tone: "bg-sky-100"
  },
  {
    id: "caminhada",
    label: "Caminhada",
    title: "Caminhada consciente",
    description: "Ativacao leve, sem performance e com foco no ambiente.",
    categories: ["WALKING"],
    icon: Footprints,
    tone: "bg-emerald-100"
  },
  {
    id: "casa",
    label: "Casa leve",
    title: "Funcional em casa",
    description: "Forca leve, baixo impacto e progresso gratuito por nivel.",
    categories: ["HOME_FUNCTIONAL", "LOW_IMPACT_CARDIO"],
    icon: Dumbbell,
    tone: "bg-amber/20"
  },
  {
    id: "core-7-dias",
    label: "Core 7 dias",
    title: "Desafio core e corpo inteiro",
    description: "Oito movimentos da REF_006 com core, pernas, gluteos e estabilidade.",
    categories: ["HOME_FUNCTIONAL"],
    collectionId: "desafio_core_corpo_inteiro_7_dias",
    icon: Activity,
    tone: "bg-emerald-100"
  },
  {
    id: "funcional-manha",
    label: "Manha ativa",
    title: "Treino funcional matinal",
    description: "Rotina da REF_008 para energia, condicionamento e corpo inteiro sem promessa estetica.",
    categories: ["HOME_FUNCTIONAL"],
    collectionId: "rotina_matinal_funcional_corpo_inteiro",
    icon: Dumbbell,
    tone: "bg-yellow-100"
  }
];

const futureTracks = [
  "Pular corda iniciante com alternativa sem impacto",
  "Luta sombra leve para foco e energia",
  "Jumping baixo impacto sem incentivo a excesso"
];

function categoryLabel(category: string) {
  const labels: Record<string, string> = {
    HOME_FUNCTIONAL: "Casa leve",
    JUMP_ROPE: "Corda",
    LOW_IMPACT_CARDIO: "Cardio leve",
    MOBILITY: "Mobilidade",
    SLEEP_SUPPORT: "Sono com apoio",
    SHADOW_BOXING: "Luta sombra",
    STRETCHING: "Alongamento",
    WALKING: "Caminhada",
    WORK_BREAK: "Pausa ativa",
    YOGA: "Yoga"
  };
  return labels[category] || category;
}

function intensityLabel(intensity: string) {
  const labels: Record<string, string> = {
    VERY_LIGHT: "Muito leve",
    LIGHT: "Leve",
    MODERATE: "Moderada",
    MODERATE_PLUS: "Moderada+"
  };
  return labels[intensity] || intensity;
}

function volumeText(item: { durationSeconds: number | null; sets: number | null; reps: string | null }) {
  if (item.sets && item.reps) return `${item.sets} series de ${item.reps}`;
  if (item.durationSeconds) return `${Math.round(item.durationSeconds / 60)} min`;
  return "Pratica guiada";
}

function instructionInTrack(item: { category: string; slug: string }, track: (typeof movementTracks)[number]) {
  const categoryOk = !track.categories.length || track.categories.includes(item.category);
  const collectionOk =
    !("collectionId" in track) ||
    coreConditioningMovementById[item.slug]?.collectionId === track.collectionId ||
    plannedReferenceMovementById[item.slug]?.collectionId === track.collectionId;
  return categoryOk && collectionOk;
}

function parseJsonList(value?: string | null) {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.map(String).filter(Boolean) : [];
  } catch {
    return [];
  }
}

function normalizeSearch(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function instructionMatchesSearch(item: { slug: string; title: string; category: string; shortDescription: string; objective: string; intensity: string; equipment: string }, query: string) {
  if (!query) return true;
  const coreMovement = coreConditioningMovementById[item.slug];
  const plannedMovement = plannedReferenceMovementById[item.slug];
  const text = normalizeSearch([
    item.slug,
    item.title,
    item.category,
    item.shortDescription,
    item.objective,
    item.intensity,
    item.equipment,
    coreMovement?.searchText || "",
    plannedMovement?.searchText || ""
  ].join(" "));
  return query.split(" ").every((term) => text.includes(term));
}

function stretchLevelLabel(level: StretchLevel) {
  const labels: Record<StretchLevel, string> = {
    beginner: "Iniciante",
    intermediate: "Intermediario",
    advanced: "Avancado"
  };
  return labels[level];
}

export default async function MovementPage({
  searchParams
}: {
  searchParams: Promise<{ trilha?: string; aba?: string; tipo?: string; contexto?: string; nivel?: string; objetivo?: string; regiao?: string; sinal?: string; busca?: string }> | { trilha?: string; aba?: string; tipo?: string; contexto?: string; nivel?: string; objetivo?: string; regiao?: string; sinal?: string; busca?: string };
}) {
  const user = await requireUser();
  if (!user.onboardingCompleted) redirect("/app/onboarding");

  const params = await searchParams;
  const yogaMode = params.aba === "yoga" || params.trilha === "yoga";
  const activeTrack = yogaMode ? movementTracks[1] : (movementTracks.find((track) => track.id === params.trilha) || movementTracks[0]);
  const stretchingMode = !yogaMode && activeTrack.id === "alongamentos";
  const walkingMode = !yogaMode && activeTrack.id === "caminhada";
  const instructions = await prisma.exerciseInstruction.findMany({
    where: { categoryGroup: "PHYSICAL", slug: { in: activeCatalogIds("EXERCISE_INSTRUCTION") } },
    orderBy: [{ unlockLevel: "asc" }, { category: "asc" }, { title: "asc" }]
  });
  const instructionBySlug = new Map(instructions.map((item) => [item.slug, item]));
  const safeToday = instructions.find((item) => item.slug === "yoga-bolso-coluna-leve") || instructions[0];
  const searchQuery = normalizeSearch(params.busca || "");
  const baseVisible = activeTrack.categories.length || "collectionId" in activeTrack
    ? instructions.filter((item) => instructionInTrack(item, activeTrack))
    : instructions.filter((item) => ["YOGA", "MOBILITY", "STRETCHING", "SLEEP_SUPPORT", "WALKING", "WORK_BREAK", "HOME_FUNCTIONAL", "LOW_IMPACT_CARDIO"].includes(item.category));
  const visible = baseVisible.filter((item) => instructionMatchesSearch(item, searchQuery));
  const yogaPractices = await prisma.yogaPractice.findMany({
    where: {
      ...(params.tipo ? { yogaType: params.tipo } : {}),
      ...(params.contexto ? { OR: [{ context: params.contexto }, { context: "BOTH" }] } : {}),
      ...(params.objetivo ? { area: params.objetivo } : {}),
      ...(params.nivel ? { level: { lte: Number(params.nivel) || 5 } } : {}),
      slug: { in: activeCatalogIds("YOGA_PRACTICE") }
    },
    orderBy: [{ level: "asc" }, { yogaType: "asc" }, { title: "asc" }]
  });
  const yogaSequences = await prisma.yogaSequence.findMany({
    where: { slug: { in: activeCatalogIds("YOGA_SEQUENCE") } },
    orderBy: [{ level: "asc" }, { title: "asc" }]
  });
  const recentCheckin = await prisma.checkin.findFirst({ where: { userId: user.id, riskDetected: false }, orderBy: { createdAt: "desc" } });
  const recommendedYoga = recentCheckin && yogaPractices.length ? getRecommendedYogaPractice(recentCheckin, yogaPractices, user.level) : null;
  const checkinTags = recentCheckin ? [...parseJsonList(recentCheckin.manualTags), ...parseJsonList(recentCheckin.detectedTags)] : [];
  const recommendedStretches = recommendStretchExercises(checkinTags)
    .filter((exercise) => isCatalogEntryActive("STRETCHING_EXERCISE", exercise.id));
  const activeRegion = stretchingRegions.find((region) => region.id === params.regiao);
  const activeStretchSignal = params.sinal ? decodeURIComponent(params.sinal) : "";
  const stretchLevel = ["beginner", "intermediate", "advanced"].includes(params.nivel || "") ? params.nivel as StretchLevel : undefined;
  const filteredStretches = stretchingExercises.filter((exercise) => {
    const active = isCatalogEntryActive("STRETCHING_EXERCISE", exercise.id);
    const regionOk = activeRegion ? exercise.bodyRegion === activeRegion.label : true;
    const signalOk = activeStretchSignal ? exercise.tags.includes(activeStretchSignal) || exercise.indicatedFor.includes(activeStretchSignal) : true;
    const levelOk = stretchLevel ? exercise.level === stretchLevel || exercise.level === "beginner" : true;
    return active && regionOk && signalOk && levelOk;
  });
  const levelProgress = getLevelProgress(user.xp);
  const currentUnlocks = visible.filter((item) => item.unlockLevel === levelProgress.level);
  const nextUnlock = instructions.find((item) => item.unlockLevel > levelProgress.level) || null;

  return (
    <div className="grid gap-6">
      <div className="max-w-3xl">
        <Badge tone="mint">Corpo</Badge>
        <h1 className="mt-3 text-3xl font-black leading-tight text-navy md:text-5xl">Trilhas leves, seguras e gratuitas por nivel</h1>
        <p className="mt-3 text-text">Movimente o corpo sem pressa, sem cobranca e sem assinatura. Seu progresso abaixo mostra o que acabou de liberar e o que vem depois.</p>
      </div>

      <ContentLibraryBrowser pillar="BODY" />

      <UserProgressBanner
        level={levelProgress.level}
        xp={user.xp}
        currentXp={levelProgress.currentXp}
        nextXp={levelProgress.nextXp}
        progressPercent={levelProgress.progressPercent}
        newlyUnlocked={currentUnlocks}
        nextUnlock={nextUnlock}
      />

      {safeToday && (
        <Card className="grid gap-5 md:grid-cols-[260px_1fr] md:items-center">
          <ExerciseCardCarousel imageKey={safeToday.imageKey} title={safeToday.title} slug={safeToday.slug} count={5} />
          <div>
            <p className="text-xs font-black uppercase text-slate-500">Comece por aqui</p>
            <h2 className="mt-1 text-2xl font-black text-navy">{safeToday.title}</h2>
            <p className="mt-2 text-sm font-semibold text-text">{safeToday.shortDescription}</p>
            <Link className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-navy px-5 py-3 text-sm font-bold text-white" href={`/app/exercicios/${safeToday.slug}`}>
              Abrir pratica segura <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Card>
      )}

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {movementTracks.map((track) => {
          const Icon = track.icon;
          const active = track.id === activeTrack.id;
          const count = track.categories.length || "collectionId" in track ? instructions.filter((item) => instructionInTrack(item, track)).length : visible.length;
          return (
            <Link
              key={track.id}
              href={track.id === "yoga" ? "/app/corpo?aba=yoga#movimento-resultados" : track.id === "caminhada" ? "/app/corpo/caminhada" : `/app/corpo${track.id === "todos" ? "#movimento-resultados" : `?trilha=${track.id}#movimento-resultados`}`}
              scroll={false}
              className={`rounded-3xl border p-4 shadow-soft transition ${active ? "border-navy bg-navy text-white" : "border-line bg-white hover:-translate-y-0.5 hover:bg-ice dark:border-slate-800 dark:bg-slate-900"}`}
            >
              <div className={`grid h-12 w-12 place-items-center rounded-2xl ${active ? "bg-white/15" : track.tone}`}>
                <Icon className={`h-6 w-6 ${active ? "text-mint" : "text-navy"}`} />
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <h2 className={`font-black ${active ? "text-white" : "text-navy"}`}>{track.label}</h2>
                <span className={`rounded-full px-3 py-1 text-xs font-black ${active ? "bg-white/15 text-white" : "bg-ice text-navy"}`}>{count}</span>
              </div>
              <p className={`mt-2 text-sm font-semibold ${active ? "text-slate-200" : "text-text"}`}>{track.description}</p>
            </Link>
          );
        })}
      </section>

      <section id="movimento-resultados" className="scroll-mt-24 grid gap-5 lg:grid-cols-[1fr_320px]">
        <div className="grid gap-5">
          {!yogaMode && !stretchingMode && !walkingMode && (
            <Card>
              <form action="/app/corpo" className="grid gap-3 md:grid-cols-[1fr_auto] md:items-end">
                {activeTrack.id !== "todos" && <input type="hidden" name="trilha" value={activeTrack.id} />}
                <label className="grid gap-2 text-sm font-bold text-navy">
                  Buscar pratica
                  <input name="busca" defaultValue={params.busca || ""} placeholder="Nome, objetivo, tag, regiao ou colecao" />
                </label>
                <button type="submit" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-navy px-5 py-3 text-sm font-bold text-white">
                  <Search className="h-4 w-4" /> Buscar
                </button>
              </form>
            </Card>
          )}
          <div>
            <p className="text-sm font-black uppercase text-slate-500">{activeTrack.title}</p>
            <h2 className="mt-1 text-2xl font-black text-navy">{searchQuery ? `${visible.length} praticas encontradas` : "Praticas liberadas gratuitamente"}</h2>
          </div>
          {yogaMode && (
            <div className="grid gap-5">
              {recommendedYoga?.practice && (
                <Card className="border-mint bg-mint/20">
                  <Badge tone="mint">Yoga recomendado hoje</Badge>
                  <h3 className="mt-3 text-2xl font-black text-navy">{recommendedYoga.practice.title}</h3>
                  <p className="mt-2 text-sm text-text">{recommendedYoga.reason}</p>
                  <a className="mt-4 inline-flex min-h-11 items-center justify-center rounded-2xl bg-navy px-5 py-3 text-sm font-bold text-white" href={`/app/yoga/${recommendedYoga.practice.slug}`}>
                    Abrir pratica de yoga
                  </a>
                </Card>
              )}
              <div className="flex flex-wrap gap-2">
                <FilterLink label="Todas" href="/app/corpo?aba=yoga#movimento-resultados" active={!params.tipo && !params.contexto && !params.nivel && !params.objetivo} />
                <FilterLink label="Yoga leve" href="/app/corpo?aba=yoga&tipo=LIGHT#movimento-resultados" active={params.tipo === "LIGHT"} />
                <FilterLink label="Restaurativa" href="/app/corpo?aba=yoga&tipo=RESTORATIVE#movimento-resultados" active={params.tipo === "RESTORATIVE"} />
                <FilterLink label="Funcional" href="/app/corpo?aba=yoga&tipo=FUNCTIONAL#movimento-resultados" active={params.tipo === "FUNCTIONAL"} />
                <FilterLink label="Em casa" href="/app/corpo?aba=yoga&contexto=HOME#movimento-resultados" active={params.contexto === "HOME"} />
                <FilterLink label="No trabalho" href="/app/corpo?aba=yoga&contexto=WORK#movimento-resultados" active={params.contexto === "WORK"} />
                <FilterLink label="Nivel 1-2" href="/app/corpo?aba=yoga&nivel=2#movimento-resultados" active={params.nivel === "2"} />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {yogaPractices.map((practice) => (
                  <Card key={practice.id} className="overflow-hidden p-4">
                    <YogaImageSequence imageSequenceKeys={parseSteps(practice.imageSequenceKeys)} title={practice.title} frameDescriptions={parseSteps(practice.imageFrameDescriptions)} />
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge tone="lavender">{practice.yogaType === "RESTORATIVE" ? "Restaurativa" : practice.yogaType === "FUNCTIONAL" ? "Funcional" : "Leve"}</Badge>
                      <Badge tone="mint">{practice.context === "WORK" ? "No trabalho" : practice.context === "HOME" ? "Em casa" : "Casa ou trabalho"}</Badge>
                      <span className="rounded-full bg-mint/40 px-3 py-1 text-xs font-black text-emerald-950">Nivel {practice.level}</span>
                    </div>
                    <h3 className="mt-3 text-xl font-black text-navy">{practice.title}</h3>
                    <p className="mt-2 text-sm text-text">{practice.shortDescription}</p>
                    <Link className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-2xl bg-navy px-5 py-3 text-sm font-bold text-white" href={`/app/yoga/${practice.slug}`}>
                      Abrir ficha de yoga
                    </Link>
                  </Card>
                ))}
              </div>
              <Card>
                <h3 className="text-xl font-black text-navy">Sequencias guiadas</h3>
                <div className="mt-4 grid gap-3">
                  {yogaSequences.map((sequence) => (
                    <div key={sequence.id} className="rounded-2xl bg-ice p-4 dark:bg-slate-800">
                      <p className="font-black text-navy dark:text-slate-50">{sequence.title}</p>
                      <p className="mt-1 text-sm text-text dark:text-slate-300">{sequence.description}</p>
                      <p className="mt-2 text-xs font-bold uppercase text-slate-500">Nivel {sequence.level} - {Math.round(sequence.durationSeconds / 60)} min</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}
          {stretchingMode && (
            <div className="grid gap-5">
              <Card className="border-mint/70 bg-mint/20">
                <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
                  <div>
                    <Badge tone="mint">Guia de alongamentos</Badge>
                    <h3 className="mt-3 text-2xl font-black text-navy">Base anatomica, filtros e rotinas prontas</h3>
                    <p className="mt-2 text-sm font-semibold text-text">{stretchingPrinciples.intro}</p>
                    <p className="mt-3 rounded-2xl bg-white/75 p-4 text-sm font-bold text-navy dark:bg-slate-900/70">{stretchingPrinciples.safety}</p>
                  </div>
                  <div className="grid gap-3">
                    <div className="rounded-2xl bg-white/75 p-4 dark:bg-slate-900/70">
                      <p className="text-xs font-black uppercase text-slate-500">Alongamento x mobilidade</p>
                      <p className="mt-2 text-sm font-semibold text-text">{stretchingPrinciples.difference}</p>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-3">
                      {stretchingLevelRules.map((rule) => (
                        <div key={rule.level} className="rounded-2xl bg-white/75 p-3 dark:bg-slate-900/70">
                          <p className="text-sm font-black text-navy">{rule.title}</p>
                          <p className="mt-1 text-xs font-bold text-slate-500">{rule.duration}</p>
                          <p className="text-xs font-semibold text-text">{rule.sets}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {stretchingTypeCards.map((card) => (
                  <Card key={card.type} className="p-4">
                    <p className="font-black text-navy">{card.title}</p>
                    <p className="mt-1 text-sm text-text">{card.description}</p>
                    <p className="mt-2 text-xs font-bold uppercase text-slate-500">{card.bestFor}</p>
                  </Card>
                ))}
              </div>

              {recommendedStretches.length > 0 && (
                <Card className="border-lavender/80 bg-lavender/20">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <Badge tone="lavender">Sugeridos pelo check-in</Badge>
                      <h3 className="mt-3 text-xl font-black text-navy">Alongamentos relacionados ao seu estado recente</h3>
                      <p className="mt-1 text-sm text-text">Usamos as tags escolhidas e detectadas no check-in para aproximar regioes corporais relevantes.</p>
                    </div>
                    <Link className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-navy px-5 py-3 text-sm font-bold text-white" href="/app/checkin">Atualizar check-in</Link>
                  </div>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {recommendedStretches.map((exercise) => (
                      <StretchMiniCard key={exercise.id} exercise={exercise} />
                    ))}
                  </div>
                </Card>
              )}

              <Card>
                <h3 className="text-xl font-black text-navy">Filtros por necessidade</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <FilterLink label="Todos" href="/app/corpo?trilha=alongamentos#movimento-resultados" active={!activeRegion && !activeStretchSignal && !stretchLevel} />
                  {stretchingCheckinFilters.slice(0, 12).map((filter) => (
                    <FilterLink key={filter} label={filter} href={`/app/corpo?trilha=alongamentos&sinal=${encodeURIComponent(filter)}#movimento-resultados`} active={activeStretchSignal === filter} />
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(["beginner", "intermediate", "advanced"] as StretchLevel[]).map((level) => (
                    <FilterLink key={level} label={stretchLevelLabel(level)} href={`/app/corpo?trilha=alongamentos&nivel=${level}#movimento-resultados`} active={stretchLevel === level} />
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-black text-navy">Regioes corporais</h3>
                <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                  {stretchingRegions.map((region) => (
                    <Link
                      key={region.id}
                      href={`/app/corpo?trilha=alongamentos&regiao=${region.id}#movimento-resultados`}
                      scroll={false}
                      className={`rounded-2xl border p-3 text-sm font-black transition ${activeRegion?.id === region.id ? "border-positive bg-navy text-white shadow-soft" : "border-line bg-ice text-navy hover:border-positive hover:bg-mint/30"}`}
                    >
                      <span>{region.label}</span>
                      <span className={`ml-2 rounded-full px-2 py-0.5 text-xs ${activeRegion?.id === region.id ? "bg-white/15 text-white" : "bg-white text-slate-500"}`}>{region.count}</span>
                    </Link>
                  ))}
                </div>
              </Card>

              <div>
                <p className="text-sm font-black uppercase text-slate-500">{activeRegion?.label || activeStretchSignal || "Todos os alongamentos"}</p>
                <h3 className="mt-1 text-2xl font-black text-navy">{filteredStretches.length} fichas estruturadas</h3>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {filteredStretches.map((exercise) => {
                  const dbExercise = instructionBySlug.get(exercise.id);
                  return (
                    <Card key={exercise.id} className="overflow-hidden p-4">
                      <Image
                        src={exerciseImagePath(dbExercise?.imageKey || exercise.id)}
                        alt={exercise.title}
                        width={960}
                        height={600}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        unoptimized
                        className="aspect-[16/10] w-full rounded-2xl object-cover"
                      />
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge tone="lavender">{exercise.bodyRegion}</Badge>
                        <Badge tone="mint">{stretchLevelLabel(exercise.level)}</Badge>
                        <span className="rounded-full bg-ice px-3 py-1 text-xs font-black text-navy">{exercise.duration}</span>
                      </div>
                      <h3 className="mt-3 text-xl font-black text-navy">{exercise.title}</h3>
                      <p className="mt-2 text-sm text-text">{exercise.objective}</p>
                      <div className="mt-3 rounded-2xl bg-ice p-3">
                        <p className="text-xs font-black uppercase text-slate-500">Musculos principais</p>
                        <p className="mt-1 text-sm font-semibold text-navy">{exercise.primaryMuscles.join(", ")}</p>
                      </div>
                      <div className="mt-4 grid gap-2 sm:grid-cols-3">
                        <Link className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-navy px-5 py-3 text-sm font-bold text-white" href={`/app/exercicios/${exercise.id}`}>
                          Iniciar
                        </Link>
                        {dbExercise ? <CompleteExerciseButton instructionId={dbExercise.id} /> : null}
                        <FavoriteExerciseButton id={exercise.id} />
                      </div>
                    </Card>
                  );
                })}
              </div>

              <Card>
                <h3 className="text-xl font-black text-navy">Rotinas prontas</h3>
                <div className="mt-4 grid gap-4 lg:grid-cols-2">
                  {stretchingRoutines.map((routine) => (
                    <div key={routine.id} className="rounded-2xl border border-line bg-ice p-4 dark:border-slate-800 dark:bg-slate-950">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge tone="mint">{routine.duration}</Badge>
                        {routine.bestFor.slice(0, 2).map((item) => <Badge key={item} tone="lavender">{item}</Badge>)}
                      </div>
                      <h4 className="mt-3 text-lg font-black text-navy">{routine.title}</h4>
                      <p className="mt-2 text-sm text-text">{routine.objective}</p>
                      <ul className="mt-3 grid gap-1 text-sm font-semibold text-text">
                        {getRoutineExercises(routine).slice(0, 5).map((exercise) => <li key={exercise.id}>{exercise.title}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}
          {walkingMode && (
            <Card className="border-mint/70 bg-mint/20">
              <Badge tone="mint">Caminhada Inteligente</Badge>
              <h3 className="mt-3 text-2xl font-black text-navy">A caminhada agora tem modulo proprio</h3>
              <p className="mt-2 text-sm font-semibold text-text">Escolha tipo de caminhada, use GPS ou temporizador, registre sensacao antes/depois e acompanhe progresso.</p>
              <Link className="mt-4 inline-flex min-h-11 items-center justify-center rounded-2xl bg-navy px-5 py-3 text-sm font-bold text-white" href="/app/corpo/caminhada">
                Abrir Caminhada Inteligente
              </Link>
            </Card>
          )}
          {!yogaMode && !stretchingMode && !walkingMode && <div className="grid gap-5 md:grid-cols-2">
            {visible.map((exercise) => (
              <Card key={exercise.id} className="overflow-hidden p-4">
                <ExerciseCardCarousel imageKey={exercise.imageKey} title={exercise.title} slug={exercise.slug} count={exercise.category === "YOGA" ? 5 : exercise.category === "SLEEP_SUPPORT" ? 0 : 3} />
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Badge tone="lavender">{categoryLabel(exercise.category)}</Badge>
                  <span className="inline-flex items-center gap-1 rounded-full bg-ice px-3 py-1 text-xs font-bold text-navy">
                    <Clock className="h-3 w-3" /> {volumeText(exercise)}
                  </span>
                  <span className="rounded-full bg-mint/40 px-3 py-1 text-xs font-black text-emerald-950">Nivel {exercise.level}</span>
                </div>
                <h3 className="mt-3 text-xl font-black text-navy">{exercise.title}</h3>
                <p className="mt-2 text-sm text-text">{exercise.shortDescription}</p>
                <p className="mt-3 text-xs font-bold uppercase text-slate-500">{intensityLabel(exercise.intensity)}</p>
                <div className="mt-4 grid gap-2 sm:grid-cols-3">
                  <Link className="inline-flex min-h-11 items-center justify-center rounded-2xl bg-navy px-5 py-3 text-sm font-bold text-white" href={`/app/exercicios/${exercise.slug}`}>
                    Iniciar
                  </Link>
                  <CompleteExerciseButton instructionId={exercise.id} />
                  <FavoriteExerciseButton id={exercise.slug} />
                </div>
              </Card>
            ))}
          </div>}
        </div>

        <aside className="grid content-start gap-5">
          <Card>
            <h2 className="text-xl font-black text-navy">Proximas trilhas gratuitas</h2>
            <div className="mt-4 grid gap-3">
              {futureTracks.map((item) => (
                <div key={item} className="rounded-2xl bg-ice p-3 text-sm font-bold text-navy">
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </aside>
      </section>
    </div>
  );
}

function StretchMiniCard({ exercise }: { exercise: (typeof stretchingExercises)[number] }) {
  return (
    <Link href={`/app/exercicios/${exercise.id}`} className="overflow-hidden rounded-2xl border border-line bg-white p-3 transition hover:border-positive hover:bg-mint/20 dark:border-slate-800 dark:bg-slate-900">
      <Image
        src={exerciseImagePath(exercise.id)}
        alt={exercise.title}
        width={960}
        height={600}
        sizes="(max-width: 768px) 100vw, 33vw"
        unoptimized
        className="aspect-[16/10] w-full rounded-xl object-cover"
      />
      <p className="mt-3 text-xs font-black uppercase text-slate-500">{exercise.bodyRegion}</p>
      <p className="mt-1 font-black text-navy">{exercise.title}</p>
      <p className="mt-2 text-sm text-text">{exercise.objective}</p>
    </Link>
  );
}

function FilterLink({ label, href, active }: { label: string; href: string; active: boolean }) {
  return (
    <Link
      href={href}
      scroll={false}
      role="button"
      aria-pressed={active}
      className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-black transition ${active ? "bg-navy text-white shadow-soft ring-2 ring-positive/30" : "bg-white text-navy ring-1 ring-line hover:bg-mint/30 dark:bg-slate-900 dark:text-slate-50 dark:ring-slate-700"}`}
    >
      {active && <CheckCircle2 className="h-4 w-4 text-mint" />}
      {label}
    </Link>
  );
}
