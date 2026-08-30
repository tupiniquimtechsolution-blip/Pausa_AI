export type ExerciseImagePresentation = {
  focus: string;
  zoom: number;
};

const defaultPresentation: ExerciseImagePresentation = {
  focus: "50% 50%",
  zoom: 1
};

const exactPresentations: Record<string, ExerciseImagePresentation> = {
  "foot_plantar_003_massagem_bola_step_03_other_foot.png": {
    focus: "68% 82%",
    zoom: 2.35
  }
};

const plantarCareCaptions: Record<string, string> = {
  "foot_plantar_001_toalha_step_01_start.png": "Sente-se com as pernas estendidas e mantenha a coluna alta.",
  "foot_plantar_001_toalha_step_02_towel_loop.png": "Passe a toalha ao redor da parte anterior do pé.",
  "foot_plantar_001_toalha_step_03_gentle_pull.png": "Puxe suavemente a toalha, mantendo o joelho estendido.",
  "foot_plantar_001_toalha_step_04_common_mistake.png": "Erro: evite puxar com força excessiva ou arredondar as costas.",
  "foot_plantar_001_toalha_step_05_correction.png": "Correção: mantenha a tração leve e o tronco alinhado.",
  "foot_plantar_002_panturrilha_parede_step_01_wall_setup.png": "Posicione as mãos na parede e alinhe os pés.",
  "foot_plantar_002_panturrilha_parede_step_02_step_back.png": "Leve uma perna para trás com o calcanhar apoiado.",
  "foot_plantar_002_panturrilha_parede_step_03_final_stretch.png": "Incline o corpo à frente e alongue a panturrilha.",
  "foot_plantar_002_panturrilha_parede_step_04_common_mistake.png": "Erro: evite levantar o calcanhar ou girar o pé para fora.",
  "foot_plantar_002_panturrilha_parede_step_05_correction.png": "Correção: mantenha o calcanhar no chão e o pé apontado à frente.",
  "foot_plantar_003_massagem_bola_step_01_ball_setup.png": "Coloque a bola sob a sola do pé.",
  "foot_plantar_003_massagem_bola_step_02_roll_forward_back.png": "Role a bola lentamente do calcanhar aos dedos.",
  "foot_plantar_003_massagem_bola_step_03_other_foot.png": "Repita o movimento no outro pé.",
  "foot_plantar_003_massagem_bola_step_04_common_mistake.png": "Erro: evite aplicar pressão excessiva sobre a sola.",
  "foot_plantar_003_massagem_bola_step_05_correction.png": "Correção: use pressão confortável e movimento controlado.",
  "foot_plantar_004_enrolar_dedos_step_01_towel_floor.png": "Posicione uma toalha aberta sob os pés.",
  "foot_plantar_004_enrolar_dedos_step_02_toes_grip.png": "Agarre a toalha usando os dedos do pé.",
  "foot_plantar_004_enrolar_dedos_step_03_towel_pull.png": "Puxe a toalha em sua direção com os dedos.",
  "foot_plantar_004_enrolar_dedos_step_04_common_mistake.png": "Erro: evite compensar o movimento levantando o calcanhar.",
  "foot_plantar_004_enrolar_dedos_step_05_correction.png": "Correção: mantenha o calcanhar apoiado e mova apenas os dedos.",
  "foot_plantar_005_fascia_plantar_step_01_seated_foot_access.png": "Sente-se e apoie o pé sobre a perna oposta.",
  "foot_plantar_005_fascia_plantar_step_02_toes_pull_back.png": "Segure os dedos e puxe-os suavemente para trás.",
  "foot_plantar_005_fascia_plantar_step_03_final_stretch.png": "Mantenha o alongamento confortável na sola do pé.",
  "foot_plantar_005_fascia_plantar_step_04_common_mistake.png": "Erro: evite torcer o tornozelo ou forçar os dedos.",
  "foot_plantar_005_fascia_plantar_step_05_correction.png": "Correção: estabilize o tornozelo e alongue sem dor.",
  "foot_plantar_006_elevacao_calcanhares_step_01_standing.png": "Fique em pé com um apoio estável ao lado.",
  "foot_plantar_006_elevacao_calcanhares_step_02_heels_up.png": "Eleve os calcanhares e suba na ponta dos pés.",
  "foot_plantar_006_elevacao_calcanhares_step_03_slow_lower.png": "Desça os calcanhares devagar e com controle.",
  "foot_plantar_006_elevacao_calcanhares_step_04_common_mistake.png": "Erro: evite deixar os tornozelos abrirem para os lados.",
  "foot_plantar_006_elevacao_calcanhares_step_05_correction.png": "Correção: mantenha tornozelos e pés alinhados."
};

const plantarCarePresentations: Array<{
  filenamePrefix: string;
  presentation: ExerciseImagePresentation;
}> = [
  {
    filenamePrefix: "foot_plantar_001_toalha_",
    presentation: { focus: "42% 78%", zoom: 2 }
  },
  {
    filenamePrefix: "foot_plantar_002_panturrilha_parede_",
    presentation: { focus: "59% 78%", zoom: 1.7 }
  },
  {
    filenamePrefix: "foot_plantar_003_massagem_bola_",
    presentation: { focus: "35% 82%", zoom: 2.35 }
  },
  {
    filenamePrefix: "foot_plantar_004_enrolar_dedos_",
    presentation: { focus: "34% 82%", zoom: 2.3 }
  },
  {
    filenamePrefix: "foot_plantar_005_fascia_plantar_",
    presentation: { focus: "53% 57%", zoom: 2.15 }
  },
  {
    filenamePrefix: "foot_plantar_006_elevacao_calcanhares_",
    presentation: { focus: "45% 82%", zoom: 2.1 }
  }
];

export function exerciseImagePresentation(src: string): ExerciseImagePresentation {
  const filename = src.split("/").pop() || "";
  if (exactPresentations[filename]) return exactPresentations[filename];
  return plantarCarePresentations.find(({ filenamePrefix }) => filename.startsWith(filenamePrefix))?.presentation || defaultPresentation;
}

export function exerciseImageCaption(src: string): string | undefined {
  const filename = src.split("/").pop() || "";
  return plantarCareCaptions[filename];
}
