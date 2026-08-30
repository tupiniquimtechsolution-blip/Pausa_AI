import {
  catalogVisualAssetImageDescriptions,
  catalogVisualAssetImagePath,
  catalogVisualAssetImageSequence
} from "@/lib/catalog-visual-assets";
import { coreConditioningMovementById, coreConditioningMovements } from "@/lib/core-conditioning-reference";
import { plannedReferenceMovementById, plannedReferenceMovements } from "@/lib/planned-reference-catalog";
import { sleepSupportMovementById, sleepSupportMovements } from "@/lib/sleep-support-reference";

const coreConditioningExerciseImages = Object.fromEntries(coreConditioningMovements.map((item) => [item.id, item.coverImage]));
const plannedReferenceExerciseImages = Object.fromEntries(plannedReferenceMovements.map((item) => [item.id, item.coverImage]));
const sleepSupportExerciseImages = Object.fromEntries(sleepSupportMovements.map((item) => [item.id, item.coverPath]));

export const exerciseImages: Record<string, string> = {
  "respiracao-4-4-6": "/exercises/respiracao-4-4-6.png",
  "diario-descarrego-mental": "/exercises/diario-descarrego-mental.png",
  "ritual-sono-sem-tela": "/exercises/ritual-sono-sem-tela.png",
  "alongamento-leve": "/exercises/alongamento-leve.png",
  "pausa-sem-tela": "/exercises/pausa-sem-tela.png",
  "caminhada-consciente": "/exercises/caminhada-consciente.png",
  "organizacao-5-minutos": "/exercises/organizacao-5-minutos.png",
  "gratidao-rapida": "/exercises/gratidao-rapida.png",
  "reset-de-foco": "/exercises/reset-de-foco.png",
  "fechamento-do-dia": "/exercises/fechamento-do-dia.png",
  "pausa-de-energia": "/exercises/pausa-de-energia.png",
  "respiracao-antes-de-dormir": "/exercises/respiracao-antes-de-dormir.png",
  "checkin-emocional-guiado": "/exercises/checkin-emocional-guiado.png",
  "escrita-preocupacao-controlada": "/exercises/escrita-preocupacao-controlada.png",
  "organizacao-do-ambiente": "/exercises/organizacao-do-ambiente.png",
  "mobilidade-pescoco-ombros": "/exercises/mobilidade-pescoco-ombros.png",
  "mobilidade-de-coluna": "/exercises/mobilidade-de-coluna.png",
  "alongamento-de-pernas": "/exercises/alongamento-de-pernas.png",
  "yoga-leve": "/exercises/yoga-leve.png",
  "pausa-consciente-trabalho": "/exercises/pausa-consciente-trabalho.png",
  "reflexao-fim-de-semana": "/exercises/reflexao-fim-de-semana.png",
  "planejamento-gentil-dia-seguinte": "/exercises/planejamento-gentil-dia-seguinte.png",
  "ativacao-leve-3-minutos": "/exercises/ativacao-leve-3-minutos.png",
  "pausa-foco-sem-impacto": "/exercises/pausa-foco-sem-impacto.png",
  "respiracao-de-chegada": "/exercises/respiracao-de-chegada.png",
  "uma-tarefa-apenas": "/exercises/uma-tarefa-apenas.png",
  "nomear-3-prioridades": "/exercises/nomear-3-prioridades.png",
  "mesa-limpa-mente-leve": "/exercises/mesa-limpa-mente-leve.png",
  "escrita-de-distracoes": "/exercises/escrita-de-distracoes.png",
  "levantar-e-respirar": "/exercises/levantar-e-respirar.png",
  "agua-com-presenca": "/exercises/agua-com-presenca.png",
  "reset-postural": "/exercises/reset-postural.png",
  "marcha-leve-parada": "/exercises/marcha-leve-parada.png",
  "luz-e-janela": "/exercises/luz-e-janela.png",
  "luz-baixa-transicao": "/exercises/luz-baixa-transicao.png",
  "celular-longe-da-cama": "/exercises/celular-longe-da-cama.png",
  "pendencia-para-amanha": "/exercises/pendencia-para-amanha.png",
  "relaxamento-pes-cabeca": "/exercises/relaxamento-pes-cabeca.png",
  "escaneamento-corporal": "/exercises/escaneamento-corporal.png",
  "nomear-humor-atual": "/exercises/nomear-humor-atual.png",
  "uma-coisa-boa-agora": "/exercises/uma-coisa-boa-agora.png",
  "musica-curta-positiva": "/exercises/musica-curta-positiva.png",
  "diario-3-linhas": "/exercises/diario-3-linhas.png",
  "mensagem-gentil-para-alguem": "/exercises/mensagem-gentil-para-alguem.png",
  "soltar-tensao-pescoco-ombros": "/exercises/soltar-tensao-pescoco-ombros.png",
  "mobilidade-rapida-coluna": "/exercises/mobilidade-rapida-coluna.png",
  "alongamento-leve-pernas": "/exercises/alongamento-leve-pernas.png",
  "reset-corporal-trabalho": "/exercises/reset-corporal-trabalho.png",
  "caminhada-consciente-curta": "/exercises/caminhada-consciente-curta.png",
  "agachamento-leve-guiado": "/exercises/agachamento-leve-guiado.png",
  "jumping-baixo-impacto": "/exercises/jumping-baixo-impacto.png",
  "respiracao-mobilidade": "/exercises/respiracao-mobilidade.png",
  "pular-corda-iniciante": "/exercises/pular-corda-iniciante.png",
  "luta-sombra-leve": "/exercises/luta-sombra-leve.png",
  "yoga-energia-leve": "/exercises/yoga-energia-leve.png",
  "yoga-bolso-coluna-leve": "/exercises/yoga-bolso-coluna-leve.png",
  "yoga-bolso-pausa-no-chao": "/exercises/yoga-bolso-pausa-no-chao.png",
  "funcional-em-casa-iniciante": "/exercises/funcional-em-casa-iniciante.png",
  "ref_002_mov_01": "/instructional-images/sleep/support/sleep_support_001_ombro_lateral_cover.png",
  "ref_002_mov_02": "/instructional-images/sleep/support/sleep_support_002_costas_superiores_cover.png",
  "ref_002_mov_03": "/instructional-images/sleep/support/sleep_support_003_dor_cabeca_tensional_cover.png",
  "ref_002_mov_04": "/instructional-images/sleep/support/sleep_support_004_lombar_joelhos_cover.png",
  "ref_002_mov_05": "/instructional-images/sleep/support/sleep_support_005_pescoco_apoio_cover.png",
  "ref_002_mov_06": "/instructional-images/sleep/support/sleep_support_006_sinusite_elevada_cover.png",
  "ref_002_mov_07": "/instructional-images/sleep/support/sleep_support_007_ciatica_quadril_cover.png",
  "ref_002_mov_08": "/instructional-images/sleep/support/sleep_support_008_joelhos_apoio_cover.png",
  ...plannedReferenceExerciseImages,
  ...coreConditioningExerciseImages,
  ...sleepSupportExerciseImages
};

export function exerciseImageSequence(imageKey: string, count = 3): string[] {
  const mappedSequence = catalogVisualAssetImageSequence(imageKey);
  if (mappedSequence.length) return mappedSequence;
  const plannedReferenceMovement = plannedReferenceMovementById[imageKey];
  if (plannedReferenceMovement) return plannedReferenceMovement.imagePaths;
  const coreConditioningMovement = coreConditioningMovementById[imageKey];
  if (coreConditioningMovement) {
    return coreConditioningMovement.images.filter((image) => image.status === "READY").map((image) => image.src);
  }
  const sleepSupportMovement = sleepSupportMovementById[imageKey];
  if (sleepSupportMovement) {
    return sleepSupportMovement.images.filter((image) => image.role !== "COVER").map((image) => image.src);
  }
  return Array.from({ length: count }, (_, index) => `/exercises/${imageKey}-${index + 1}.png`);
}

export function exerciseImageSequenceDescriptions(imageKey: string): string[] {
  const mappedDescriptions = catalogVisualAssetImageDescriptions(imageKey);
  if (mappedDescriptions.length) return mappedDescriptions;
  const plannedReferenceMovement = plannedReferenceMovementById[imageKey];
  if (plannedReferenceMovement) {
    return plannedReferenceMovement.images
      .filter((image) => image.status === "READY" || image.status === "GENERATED_PENDING_REVIEW")
      .map((image) => image.alt);
  }
  const coreConditioningMovement = coreConditioningMovementById[imageKey];
  if (coreConditioningMovement) return coreConditioningMovement.images.filter((image) => image.status === "READY").map((image) => image.alt);
  const sleepSupportMovement = sleepSupportMovementById[imageKey];
  if (!sleepSupportMovement) return [];
  return sleepSupportMovement.images.filter((image) => image.role !== "COVER").map((image) => image.alt);
}

export function exerciseImagePath(imageKey: string) {
  const mappedImagePath = catalogVisualAssetImagePath(imageKey);
  if (mappedImagePath) return mappedImagePath;
  if (Object.prototype.hasOwnProperty.call(exerciseImages, imageKey)) return exerciseImages[imageKey];
  return `/exercises/${imageKey}.png`;
}
