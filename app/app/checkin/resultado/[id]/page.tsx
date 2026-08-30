import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { AlertBanner, Badge, Button, Card } from "@/components/ui";
import { ExerciseImage } from "@/components/exercise-image";
import { InstructionalVideoBlock } from "@/components/instructional-video-block";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { parseSteps } from "@/lib/utils";
import { getCheckinAreaLabel } from "@/lib/checkin-refinement";
import { recommendStretchExercises } from "@/lib/stretching-exercises";
import { getWalkingMode, walkingRecommendationFromCheckin } from "@/lib/walking";
import { slugifyVideo } from "@/lib/instructional-video-planning";
import { detectPhysicalAlertTerms, physicalAlertMessage } from "@/lib/physical-alerts";
import { isCatalogEntryActive } from "@/lib/catalog-reconciliation";
import { requiresCatalogVisualAsset } from "@/lib/catalog-policy";
import { AccessibleGuidance } from "@/components/accessible-guidance";

function parseJsonList(value?: string | null) {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.map(String).filter(Boolean) : [];
  } catch {
    return [];
  }
}

function parseRecommendationFactors(value?: string | null) {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    if (!Array.isArray(parsed)) return [];
    return parsed.map((factor) => {
      if (!factor || typeof factor !== "object") return String(factor);
      const record = factor as { field?: string; value?: string | number | boolean; effect?: string };
      return `${record.field || "fator"}: ${String(record.value ?? "")} — ${record.effect || "considerado na decisão"}`;
    });
  } catch {
    return [];
  }
}

function TagList({ title, tags }: { title: string; tags: string[] }) {
  return (
    <div>
      <p className="text-xs font-black uppercase text-slate-500">{title}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.length ? tags.map((tag) => <Badge key={tag} tone="mint">{tag}</Badge>) : <span className="text-sm font-semibold text-text">Nenhuma tag adicional.</span>}
      </div>
    </div>
  );
}

export default async function CheckinResultPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const user = await requireUser();
  if (!user.onboardingCompleted) redirect("/app/onboarding");
  const checkin = await prisma.checkin.findFirst({
    where: { id, userId: user.id },
    include: { recommendationDecision: true }
  });
  if (!checkin) notFound();

  const recommendationSlug = checkin.recommendationDecision?.movementSourceKey || checkin.recommendedInstructionSlug;
  const instructionCandidate = recommendationSlug
    ? await prisma.exerciseInstruction.findUnique({ where: { slug: recommendationSlug } })
    : null;
  const instruction = instructionCandidate && (
    !requiresCatalogVisualAsset(instructionCandidate) ||
    isCatalogEntryActive("EXERCISE_INSTRUCTION", instructionCandidate.slug)
  )
    ? instructionCandidate
    : null;
  const instructionalVideo = !checkin.riskDetected
    ? await prisma.instructionalVideo.findFirst({
        where: instruction
          ? { targetType: "EXERCISE_INSTRUCTION", targetSlug: instruction.slug, status: "PUBLISHED" }
          : { targetType: "MISSION", targetSlug: slugifyVideo(checkin.dailyMissionTitle), status: "PUBLISHED" }
      })
    : null;
  const manualTags = parseJsonList(checkin.manualTags);
  const detectedTags = parseJsonList(checkin.detectedTags);
  const physicalAlertTerms = !checkin.riskDetected ? detectPhysicalAlertTerms(checkin.journalText, [...manualTags, ...detectedTags]) : [];
  const hasPhysicalAlert = physicalAlertTerms.length > 0;
  const hasActivityRestriction = hasPhysicalAlert || Boolean(checkin.recommendationDecision?.safetyBlock);
  const recommendationFactors = parseRecommendationFactors(checkin.recommendationDecision?.factorsJson);
  const stretchRecommendations = recommendStretchExercises([...manualTags, ...detectedTags])
    .filter((exercise) => isCatalogEntryActive("STRETCHING_EXERCISE", exercise.id));
  const walkingSuggestion = walkingRecommendationFromCheckin({
    stressScore: checkin.stressScore,
    energyScore: checkin.energyScore,
    moodScore: checkin.moodScore,
    sleepScore: checkin.sleepScore,
    manualTags,
    detectedTags
  });
  const walkingMode = getWalkingMode(walkingSuggestion.mode);
  const showWalking = shouldShowWalking(checkin, [...manualTags, ...detectedTags]);
  const areaLabel = getCheckinAreaLabel(checkin.primaryArea);
  const secondaryArea = checkin.secondaryArea ? getCheckinAreaLabel(checkin.secondaryArea) : null;

  return (
    <div className="mx-auto grid max-w-3xl gap-5">
      {checkin.riskDetected && <AlertBanner type="risk">{checkin.aiSummary}</AlertBanner>}
      {hasPhysicalAlert && <AlertBanner type="risk">{physicalAlertMessage(physicalAlertTerms)}</AlertBanner>}
      {checkin.recommendationDecision?.safetyBlock && !checkin.riskDetected && !hasPhysicalAlert && (
        <AlertBanner type="risk">{checkin.recommendationDecision.justification}</AlertBanner>
      )}

      <Card>
        <p className="text-sm font-bold text-slate-500">Resumo do check-in</p>
        {!checkin.riskDetected && !hasPhysicalAlert && (
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge tone="lavender">Area principal: {areaLabel}</Badge>
            {secondaryArea && <Badge tone="amber">Sinal secundario: {secondaryArea}</Badge>}
          </div>
        )}
        <h1 className="mt-3 text-3xl font-black text-navy">{checkin.riskDetected ? "Apoio imediato" : checkin.dailyMissionTitle}</h1>
        <p className="mt-3 text-lg text-text">{checkin.aiSummary}</p>
        <p className="mt-4 text-text">{checkin.aiRecommendation}</p>
      </Card>

      {!checkin.riskDetected && !hasActivityRestriction && (
        <Card>
          <p className="text-sm font-bold text-slate-500">Por que sugerimos isso?</p>
          <p className="mt-3 text-text">{checkin.recommendationReason || "A recomendacao usa os scores do check-in, os contextos marcados e a observacao opcional."}</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <TagList title="Tags escolhidas" tags={manualTags} />
            <TagList title="Tags detectadas no texto" tags={detectedTags} />
          </div>
        </Card>
      )}

      {checkin.recommendationDecision && (
        <Card>
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone={checkin.recommendationDecision.safetyBlock ? "amber" : "mint"}>
              {checkin.recommendationDecision.outcomeType}
            </Badge>
            <Badge tone="navy">{checkin.recommendationDecision.engineVersion}</Badge>
          </div>
          <h2 className="mt-3 text-xl font-black text-navy">Decisão explicável</h2>
          <p className="mt-2 text-sm text-text">{checkin.recommendationDecision.justification}</p>
          <p className="mt-3 text-sm font-semibold text-navy">{checkin.recommendationDecision.alternativeReason}</p>
          {recommendationFactors.length > 0 && (
            <ul className="mt-4 grid gap-2 text-xs text-text">
              {recommendationFactors.map((factor) => <li key={factor}>{factor}</li>)}
            </ul>
          )}
          <p className="mt-4 text-xs font-bold text-slate-500">
            {checkin.recommendationDecision.canIgnore
              ? "Esta sugestão pode ser ignorada ou trocada."
              : "Este bloqueio existe por segurança e impede apenas a atividade guiada neste momento."}
          </p>
        </Card>
      )}

      {!checkin.riskDetected && !hasActivityRestriction && stretchRecommendations.length > 0 && (
        <Card>
          <h2 className="text-2xl font-black text-navy">Alongamentos relacionados</h2>
          <p className="mt-2 text-text">Com base nos sinais do check-in, estas fichas podem ajudar a cuidar da regiao corporal marcada.</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {stretchRecommendations.map((exercise) => (
              <Link key={exercise.id} href={`/app/exercicios/${exercise.id}?checkin=${checkin.id}`} className="rounded-2xl border border-line bg-ice p-4 transition hover:border-positive hover:bg-mint/20">
                <p className="text-xs font-black uppercase text-slate-500">{exercise.bodyRegion}</p>
                <p className="mt-1 font-black text-navy">{exercise.title}</p>
                <p className="mt-2 text-sm text-text">{exercise.objective}</p>
              </Link>
            ))}
          </div>
        </Card>
      )}

      {!checkin.riskDetected && !hasActivityRestriction && showWalking && (
        <Card className="border-mint/70 bg-mint/20">
          <Badge tone="mint">Caminhada Inteligente</Badge>
          <h2 className="mt-3 text-2xl font-black text-navy">{walkingMode.title}</h2>
          <p className="mt-2 text-text">{walkingSuggestion.reason}</p>
          <p className="mt-3 rounded-2xl bg-white/80 p-4 text-sm font-bold text-navy dark:bg-slate-900/70">
            Complementos sugeridos: {walkingMode.complements.slice(0, 4).join(", ")}.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Button href={`/app/corpo/caminhada/configurar?tipo=${walkingSuggestion.mode}`}>Iniciar caminhada sugerida</Button>
            <Button href="/app/corpo/caminhada" variant="secondary">Ver Caminhada Inteligente</Button>
          </div>
        </Card>
      )}

      {!checkin.riskDetected && !hasActivityRestriction && (
        <Card>
          <h2 className="text-2xl font-black text-navy">Exercicio recomendado</h2>
          {instruction && (
            <div className="mt-4">
              <ExerciseImage imageKey={instruction.imageKey} title={instruction.title} />
            </div>
          )}
          <h3 className="mt-4 text-xl font-black text-navy">{instruction?.title || checkin.dailyMissionTitle}</h3>
          <p className="mt-2 text-text">{instruction?.shortDescription || checkin.dailyMissionDescription}</p>
          <AccessibleGuidance text={instruction?.shortDescription || checkin.dailyMissionDescription} />
          <InstructionalVideoBlock video={instructionalVideo} compact className="mt-5 shadow-none" />
          <ul className="mt-4 grid gap-2 text-sm text-text">
            {parseSteps(instruction?.howToSteps || checkin.dailyMissionSteps).slice(0, 5).map((step) => <li key={step}>{step}</li>)}
          </ul>
          <p className="mt-5 rounded-2xl bg-mint/40 p-4 font-semibold text-emerald-950">{checkin.encouragement}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {instruction ? <Button href={`/app/exercicios/${instruction.slug}?checkin=${checkin.id}`}>Iniciar exercicio</Button> : <Button href="/app/mente">Ver exercicios</Button>}
            <Button href="/app/perfil/historico" variant="secondary">Ver historico</Button>
            <Button href="/app/checkin" variant="secondary">Novo check-in</Button>
          </div>
        </Card>
      )}

      {hasPhysicalAlert && (
        <Card>
          <h2 className="text-2xl font-black text-navy">Proximo passo seguro</h2>
          <p className="mt-2 text-text">{checkin.dailyMissionDescription}</p>
          <ul className="mt-4 grid gap-2 text-sm text-text">{parseSteps(checkin.dailyMissionSteps).map((step) => <li key={step}>{step}</li>)}</ul>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Button href="/app/perfil/historico" variant="secondary">Ver historico</Button>
            <Button href="/app/checkin" variant="secondary">Novo check-in</Button>
          </div>
        </Card>
      )}

      {checkin.riskDetected && (
        <Card>
          <h2 className="text-2xl font-black text-navy">Proximo passo seguro</h2>
          <p className="mt-2 text-text">{checkin.dailyMissionDescription}</p>
          <ul className="mt-4 grid gap-2 text-sm text-text">{parseSteps(checkin.dailyMissionSteps).map((step) => <li key={step}>{step}</li>)}</ul>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Button href="/app/perfil/historico" variant="secondary">Ver historico</Button>
            <Button href="/app/checkin" variant="secondary">Novo check-in</Button>
          </div>
        </Card>
      )}
    </div>
  );
}

function shouldShowWalking(checkin: { stressScore: number; energyScore: number; moodScore: number; sleepScore: number }, tags: string[]) {
  const normalized = tags.map((tag) => tag.toLowerCase());
  return (
    checkin.stressScore >= 4 ||
    checkin.energyScore <= 2 ||
    normalized.some((tag) =>
      ["ansiedade", "agitacao", "lombar", "dor lombar", "pernas pesadas", "baixa mobilidade", "muito tempo sentado", "corpo tenso", "cansaco"].some((term) => tag.includes(term))
    )
  );
}
