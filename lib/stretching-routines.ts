import { stretchById } from "@/lib/stretching-exercises";

export type StretchRoutine = {
  id: string;
  title: string;
  duration: string;
  objective: string;
  bestFor: string[];
  exerciseIds: string[];
  steps: string[];
  safetyNotes: string[];
};

export const stretchingRoutines: StretchRoutine[] = [
  {
    id: "rotina-rapida-trabalho",
    title: "Rotina rapida para trabalho",
    duration: "5 minutos",
    objective: "Soltar pescoco, punhos, peitoral e costas superiores durante o expediente.",
    bestFor: ["foco no trabalho", "muito tempo sentado", "maos e punhos cansados"],
    exerciseIds: ["inclinacao-lateral-pescoco", "extensao-flexores-punho", "abertura-peito-porta", "abraco-escapulas", "respiracao-costelas"],
    steps: ["Passe por cada exercicio por 30 a 45 segundos.", "Mantenha respiracao lenta.", "Retorne ao trabalho escolhendo uma unica proxima acao."],
    safetyNotes: ["Nao force pescoco ou punhos.", "Interrompa se houver formigamento, tontura ou dor irradiada."]
  },
  {
    id: "rotina-matinal",
    title: "Rotina matinal",
    duration: "8 a 10 minutos",
    objective: "Despertar o corpo com mobilidade cervical, coluna, peito, quadril, panturrilha e respiracao.",
    bestFor: ["rigidez matinal", "dar energia", "mobilidade geral"],
    exerciseIds: ["rotacao-cervical-controlada", "gato-vaca-toracico", "abertura-peito-porta", "circulos-quadril", "panturrilha-parede", "respiracao-costelas"],
    steps: ["Comece com movimentos pequenos.", "Progrida para quadril e panturrilha.", "Finalize com 5 respiracoes lentas."],
    safetyNotes: ["Ao acordar, use amplitude menor.", "Evite movimentos bruscos."]
  },
  {
    id: "rotina-pos-treino",
    title: "Rotina pos-treino",
    duration: "10 a 15 minutos",
    objective: "Relaxar a regiao treinada e incluir posterior de coxa, quadriceps, gluteos, peitoral e dorsal.",
    bestFor: ["depois do treino", "caminhada ou corrida"],
    exerciseIds: ["posterior-sentado", "quadriceps-em-pe-apoio", "figura-quatro-sentado", "peitoral-parede-um-braco", "alongamento-dorsal-cadeira", "panturrilha-parede"],
    steps: ["Escolha primeiro a regiao mais treinada.", "Sustente cada alongamento sem quicar.", "Respire lentamente entre lados."],
    safetyNotes: ["Nao busque dor para validar o treino.", "Use tensao moderada e controlada."]
  },
  {
    id: "rotina-para-dormir",
    title: "Rotina para dormir",
    duration: "10 minutos",
    objective: "Desacelerar com respiracao lenta, postura da crianca, torcao lombar leve, pescoco e relaxamento muscular.",
    bestFor: ["antes de dormir", "relaxamento", "ansiedade corporal"],
    exerciseIds: ["respiracao-costelas", "postura-crianca", "torcao-lombar-leve", "inclinacao-lateral-pescoco", "gluteo-parede"],
    steps: ["Reduza luzes antes de comecar.", "Faca cada exercicio devagar.", "Finalize percebendo o peso do corpo apoiado."],
    safetyNotes: ["Evite exercicios intensos antes de dormir.", "Se ficar alerta demais, volte para respiracao natural."]
  },
  {
    id: "rotina-quem-fica-sentado",
    title: "Rotina para quem fica sentado",
    duration: "7 minutos",
    objective: "Soltar flexores do quadril, peitoral, coluna toracica, lombar e pescoco.",
    bestFor: ["muito tempo sentado", "lombar rigida", "foco no trabalho"],
    exerciseIds: ["flexor-quadril-ajoelhado", "abertura-peito-porta", "extensao-toracica-cadeira", "bascula-pelvica", "inclinacao-lateral-pescoco"],
    steps: ["Comece pelo quadril.", "Abra peito e toracica.", "Finalize com lombar e pescoco em amplitude pequena."],
    safetyNotes: ["Use cadeira ou parede como apoio.", "Interrompa se houver dor aguda, formigamento ou tontura."]
  }
];

export function getRoutineExercises(routine: StretchRoutine) {
  return routine.exerciseIds.map((id) => stretchById[id]).filter(Boolean);
}
