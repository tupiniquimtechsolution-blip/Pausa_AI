import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { parseSteps } from "@/lib/utils";
import { Badge, Card } from "@/components/ui";
import { ExerciseImage } from "@/components/exercise-image";
import { ExerciseImageSequence } from "@/components/exercise-image-sequence";
import { ExerciseDetailMode } from "@/components/exercise-detail-mode";
import { InstructionalVideoBlock } from "@/components/instructional-video-block";
import { FavoriteExerciseButton } from "@/components/favorite-exercise-button";
import { AddToRoutineButton } from "@/components/add-to-routine-button";
import {
  catalogVisualAssetImageSequence,
  getPrimaryCatalogVisualAsset
} from "@/lib/catalog-visual-assets";
import { coreConditioningMovementById, coreConditioningReference, type CoreConditioningMovement } from "@/lib/core-conditioning-reference";
import { plannedReferenceById, plannedReferenceMovementById, type PlannedReferenceMovement } from "@/lib/planned-reference-catalog";
import { isCatalogEntryActive } from "@/lib/catalog-reconciliation";
import { requiresCatalogVisualAsset } from "@/lib/catalog-policy";

function list(value: string) {
  return parseSteps(value);
}

function volumeText(item: { instructionType: string; durationSeconds: number | null; sets: number | null; reps: string | null; restSeconds: number | null }) {
  if (item.instructionType === "REPS_BASED") return `${item.sets || 2} series de ${item.reps || "8 a 12"} repeticoes${item.restSeconds ? `, descanso opcional de ${item.restSeconds}s` : ""}`;
  if (item.durationSeconds) return `${Math.round(item.durationSeconds / 60)} minutos sugeridos`;
  return "Volume livre e confortavel";
}

export default async function ExerciseInstructionPage({ params, searchParams }: { params: Promise<{ slug: string }>; searchParams: Promise<{ checkin?: string }> }) {
  const { slug } = await params;
  const query = await searchParams;
  const user = await requireUser();
  if (!user.onboardingCompleted) redirect("/app/onboarding");
  const instruction = await prisma.exerciseInstruction.findUnique({ where: { slug } });
  if (!instruction || (requiresCatalogVisualAsset(instruction) && !isCatalogEntryActive("EXERCISE_INSTRUCTION", instruction.slug))) notFound();
  const coreMovement = coreConditioningMovementById[instruction.slug];
  const plannedMovement = plannedReferenceMovementById[instruction.slug];
  const video = await prisma.instructionalVideo.findFirst({
    where: { targetType: "EXERCISE_INSTRUCTION", targetSlug: instruction.slug, status: "PUBLISHED" }
  });
  const movementSequenceCount = instruction.area === "BODY_MOVEMENT" || instruction.category === "YOGA" ? 5 : 3;
  const movementSequenceDescriptions = instruction.area === "BODY_MOVEMENT" || instruction.category === "YOGA"
    ? ["posicao inicial", "preparacao", "execucao", "permanencia segura", "retorno"]
    : ["inicio", "execucao", "fechamento"];

  return (
    <div className="mx-auto grid max-w-4xl gap-5">
      <Link href="/app/mente" className="inline-flex items-center gap-2 text-sm font-bold text-navy"><ArrowLeft className="h-4 w-4" /> Voltar para Mente</Link>
      <Card>
        <ExerciseImage imageKey={instruction.imageKey} title={instruction.title} priority />
        {!plannedMovement && (
          <div className="mt-4">
            <ExerciseImageSequence
              imageKey={instruction.imageKey}
              title={instruction.title}
              count={instruction.category === "SLEEP_SUPPORT" ? 6 : movementSequenceCount}
              frameDescriptions={instruction.category === "SLEEP_SUPPORT" || coreMovement ? [] : movementSequenceDescriptions}
            />
          </div>
        )}
        <div className="mt-5 flex flex-wrap gap-2">
          <Badge>{instruction.category}</Badge>
          {coreMovement && <Badge tone="mint">{coreMovement.collectionId}</Badge>}
          {plannedMovement && <Badge tone="mint">{plannedMovement.collectionId}</Badge>}
          <Badge tone="amber">{instruction.intensity}</Badge>
          <Badge tone="lavender">Nivel {instruction.level}</Badge>
        </div>
        <h1 className="mt-4 text-4xl font-black text-navy">{instruction.title}</h1>
        <p className="mt-3 text-lg text-text">{instruction.shortDescription}</p>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <Info label="Objetivo" value={instruction.objective} />
          <Info label="Volume" value={volumeText(instruction)} />
          <Info label="Equipamento" value={instruction.equipment} />
        </div>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          <AddToRoutineButton title={instruction.title} description={instruction.shortDescription} slug={instruction.slug} />
          <FavoriteExerciseButton id={instruction.slug} label="Favoritar" />
        </div>
      </Card>

      <InstructionalVideoBlock video={video} />

      {coreMovement && <CoreConditioningReferenceCard movement={coreMovement} />}
      {plannedMovement && <PlannedReferenceCard movement={plannedMovement} />}

      <ExerciseDetailMode
        checkinId={query.checkin}
        instruction={{
          id: instruction.id,
          slug: instruction.slug,
          title: instruction.title,
          instructionType: instruction.instructionType,
          durationSeconds: instruction.durationSeconds,
          sets: instruction.sets,
          reps: instruction.reps,
          restSeconds: instruction.restSeconds,
          category: instruction.category,
          area: instruction.area,
          objective: instruction.objective,
          howToSteps: list(instruction.howToSteps),
          postureTips: list(instruction.postureTips),
          breathingTips: list(instruction.breathingTips),
          commonMistakes: list(instruction.commonMistakes),
          recommendedWhen: list(instruction.recommendedWhen),
          avoidWhen: list(instruction.avoidWhen),
          safetyNotes: list(instruction.safetyNotes)
        }}
      />
    </div>
  );
}

function PlannedReferenceCard({ movement }: { movement: PlannedReferenceMovement }) {
  const reference = plannedReferenceById[movement.referenceId];
  const mappedAsset = getPrimaryCatalogVisualAsset(movement.id);
  const mappedImages = catalogVisualAssetImageSequence(movement.id);
  const linkedImageCount = mappedImages.length || movement.imagePaths.length;
  const missingImageCount = mappedAsset?.physicalFilesMissing.length ?? movement.missingImages.length;
  const assetStatus = mappedAsset?.assetStatus || movement.status_asset;
  const visualMode = mappedAsset?.visualAssetMode || movement.assetReuseStatus;
  const visualReuse = mappedAsset
    ? `Fonte: ${mappedAsset.pullFromReferenceMovement}. Padrao: ${mappedAsset.reusedFromAssetPattern}.`
    : movement.visual_reuse;

  return (
    <div className="grid gap-5">
      <Card>
        <div className="flex flex-wrap gap-2">
          <Badge tone="mint">{movement.categoria}</Badge>
          <Badge tone="lavender">{movement.subcategoria}</Badge>
          <Badge tone="amber">{assetStatus}</Badge>
          <Badge>{movement.status_video}</Badge>
        </div>
        <h2 className="mt-4 text-2xl font-black text-navy">Ficha oficial da referencia</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <Info label="ID" value={movement.id} />
          <Info label="Referencia" value={movement.referenceId} />
          <Info label="Colecao" value={movement.collectionTitle} />
          <Info label="Titulo original" value={reference.originalTitle} />
          <Info label="Titulo adaptado" value={reference.adaptedTitle} />
          <Info label="Nome original" value={movement.nome_original} />
          <Info label="Tipo" value={movement.tipo} />
          <Info label="Prioridade" value={movement.prioridade} />
          <Info label="Assets" value={`${linkedImageCount} vinculadas / ${missingImageCount} pendentes`} />
          <Info label="Reaproveitamento" value={visualMode} />
        </div>
        <p className="mt-4 rounded-2xl bg-amber/10 p-4 text-sm font-bold text-amber-800 dark:text-amber-200">{reference.safetyAlert}</p>
        <p className="mt-3 rounded-2xl bg-mint/30 p-4 text-sm font-bold text-emerald-950">{reference.safeObservation}</p>
        <p className="mt-3 rounded-2xl bg-ice p-4 text-sm font-bold text-navy">
          Reaproveitamento visual: {visualReuse}
        </p>
        {linkedImageCount > 0 && (
          <div className="mt-4">
            <ExerciseImageSequence imageKey={movement.id} title={movement.nome_pt} count={linkedImageCount} />
          </div>
        )}
        {missingImageCount > 0 && (
          <p className="mt-3 rounded-2xl bg-ice p-4 text-sm font-bold text-navy">
            Imagens planejadas aguardando asset fisico: {(mappedAsset?.physicalFilesMissing || movement.missingImages).join(", ")}.
          </p>
        )}
      </Card>

      <div className="grid gap-5 md:grid-cols-2">
        <ListCard title="Beneficios" items={movement.beneficios} />
        <ListCard title="Indicacoes" items={movement.indicacoes} />
        <Card>
          <h2 className="text-xl font-black text-navy">Como executar</h2>
          <p className="mt-3 text-sm text-text">{movement.como_fazer}</p>
          <ul className="mt-4 grid gap-2 text-sm text-text">{movement.passo_a_passo.map((item) => <li key={item}>{item}</li>)}</ul>
        </Card>
        <Card>
          <h2 className="text-xl font-black text-navy">Erro e correcao</h2>
          <p className="mt-3 text-sm text-text"><strong>Erro comum:</strong> {movement.erro_comum}</p>
          <p className="mt-3 text-sm text-text"><strong>Correcao postural:</strong> {movement.correcao_postural}</p>
        </Card>
        <ListCard title="Cuidados" items={movement.cuidados} />
        <ListCard title="Contraindicacoes" items={movement.contraindicacoes} />
        <ListCard title="Status das imagens" items={movement.images.map((image) => `${image.filename || "sem arquivo"} - ${image.status}`)} />
        <Card>
          <h2 className="text-xl font-black text-navy">Corpo, dose e material</h2>
          <div className="mt-3 grid gap-3 text-sm text-text">
            <p><strong>Tempo:</strong> {movement.duracao}</p>
            <p><strong>Repeticoes:</strong> {movement.repeticoes || "Pratica por respiracao ou tempo"}</p>
            <p><strong>Dificuldade:</strong> {movement.nivel}</p>
            <p><strong>Intensidade:</strong> {movement.intensidade}</p>
            <p><strong>Equipamentos:</strong> {movement.equipamentos.join(", ")}</p>
            <p><strong>Respiracao:</strong> {movement.respiracao}</p>
            <p><strong>Regioes:</strong> {movement.regioes_corporais.join(", ")}</p>
            <p><strong>Grupos musculares:</strong> {movement.grupos_musculares.join(", ")}</p>
            <p><strong>Articulacoes:</strong> {movement.articulacoes.join(", ")}</p>
          </div>
        </Card>
        <Card>
          <h2 className="text-xl font-black text-navy">Busca e recomendacao</h2>
          <div className="mt-3 grid gap-3 text-sm text-text">
            <p><strong>Quando recomendar:</strong> {movement.quando_recomendar.join(", ")}</p>
            <p><strong>Quando evitar:</strong> {movement.quando_evitar.join(", ")}</p>
            <p><strong>Palavras-chave:</strong> {movement.palavras_chave.join(", ")}</p>
            <p><strong>Sinonimos:</strong> {movement.sinonimos.join(", ") || "Sem sinonimos especificos cadastrados."}</p>
            <p><strong>Tags:</strong> {movement.tags.join(", ")}</p>
            <p><strong>Objetivo fisico:</strong> {movement.objetivo_fisico}</p>
            <p><strong>Objetivo emocional:</strong> {movement.objetivo_emocional}</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl bg-ice p-4"><p className="text-xs font-bold uppercase text-slate-500">{label}</p><p className="mt-1 font-bold text-navy">{value}</p></div>;
}

function CoreConditioningReferenceCard({ movement }: { movement: CoreConditioningMovement }) {
  return (
    <div className="grid gap-5">
      <Card>
        <div className="flex flex-wrap gap-2">
          <Badge tone="mint">{movement.categoria}</Badge>
          <Badge tone="lavender">{movement.subcategoria}</Badge>
          <Badge tone="amber">{movement.status_asset}</Badge>
          <Badge>{movement.status_video}</Badge>
        </div>
        <h2 className="mt-4 text-2xl font-black text-navy">Ficha oficial da referencia</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <Info label="ID" value={movement.id} />
          <Info label="Referencia" value={movement.referenceId} />
          <Info label="Colecao" value={movement.collectionTitle} />
          <Info label="Titulo original" value={coreConditioningReference.originalTitle} />
          <Info label="Nome original" value={movement.nome_original} />
          <Info label="Volume original" value={movement.volume_original} />
          <Info label="Tipo" value={movement.tipo} />
          <Info label="Prioridade" value={movement.prioridade} />
        </div>
        <p className="mt-4 rounded-2xl bg-amber/10 p-4 text-sm font-bold text-amber-800 dark:text-amber-200">{coreConditioningReference.safetyAlert}</p>
        <p className="mt-3 rounded-2xl bg-mint/30 p-4 text-sm font-bold text-emerald-950">{coreConditioningReference.safeObservation}</p>
        {movement.missingImages.length > 0 && (
          <p className="mt-3 rounded-2xl bg-ice p-4 text-sm font-bold text-navy">
            Imagens planejadas ainda ausentes na pasta: {movement.missingImages.join(", ")}.
          </p>
        )}
      </Card>

      <div className="grid gap-5 md:grid-cols-2">
        <ListCard title="Beneficios" items={movement.beneficios} />
        <ListCard title="Indicacoes" items={movement.indicacoes} />
        <Card>
          <h2 className="text-xl font-black text-navy">Como executar</h2>
          <p className="mt-3 text-sm text-text">{movement.como_fazer}</p>
          <ul className="mt-4 grid gap-2 text-sm text-text">{movement.passo_a_passo.map((item) => <li key={item}>{item}</li>)}</ul>
        </Card>
        <Card>
          <h2 className="text-xl font-black text-navy">Erro e correcao</h2>
          <p className="mt-3 text-sm text-text"><strong>Erro comum:</strong> {movement.erro_comum}</p>
          <p className="mt-3 text-sm text-text"><strong>Correcao postural:</strong> {movement.correcao_postural}</p>
        </Card>
        <ListCard title="Cuidados" items={movement.cuidados} />
        <ListCard title="Contraindicacoes" items={movement.contraindicacoes} />
        <Card>
          <h2 className="text-xl font-black text-navy">Corpo, dose e material</h2>
          <div className="mt-3 grid gap-3 text-sm text-text">
            <p><strong>Tempo:</strong> {movement.duracao}</p>
            <p><strong>Repeticoes:</strong> {movement.repeticoes || "Tempo sustentado"}</p>
            <p><strong>Dificuldade:</strong> {movement.nivel}</p>
            <p><strong>Intensidade:</strong> {movement.intensidade}</p>
            <p><strong>Equipamentos:</strong> {movement.equipamentos.join(", ")}</p>
            <p><strong>Respiracao:</strong> {movement.respiracao}</p>
            <p><strong>Regioes:</strong> {movement.regioes_corporais.join(", ")}</p>
            <p><strong>Grupos musculares:</strong> {movement.grupos_musculares.join(", ")}</p>
            <p><strong>Articulacoes:</strong> {movement.articulacoes.join(", ")}</p>
          </div>
        </Card>
        <Card>
          <h2 className="text-xl font-black text-navy">Busca e recomendacao</h2>
          <div className="mt-3 grid gap-3 text-sm text-text">
            <p><strong>Quando recomendar:</strong> {movement.quando_recomendar.join(", ")}</p>
            <p><strong>Quando evitar:</strong> {movement.quando_evitar.join(", ")}</p>
            <p><strong>Palavras-chave:</strong> {movement.palavras_chave.join(", ")}</p>
            <p><strong>Sinonimos:</strong> {movement.sinonimos.join(", ")}</p>
            <p><strong>Tags:</strong> {movement.tags.join(", ")}</p>
            <p><strong>Objetivo fisico:</strong> {movement.objetivo_fisico}</p>
            <p><strong>Objetivo emocional:</strong> {movement.objetivo_emocional}</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <h2 className="text-xl font-black text-navy">{title}</h2>
      <ul className="mt-3 grid gap-2 text-sm text-text">{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </Card>
  );
}
