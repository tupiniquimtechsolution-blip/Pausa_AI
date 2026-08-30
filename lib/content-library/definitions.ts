export const CONTENT_LIBRARY_VERSION = 1;
export const CONTENT_LOCALE = "pt-BR";
export const CONTENT_APPROVED_STATUS = "APPROVED";

export const bodyCategoryDefinitions: Record<string, { slug: string; title: string; description: string; modality: string; sortOrder: number }> = {
  YOGA: { slug: "yoga", title: "Yoga", description: "Posturas e sequências guiadas por nível.", modality: "YOGA", sortOrder: 10 },
  MOBILITY: { slug: "mobilidade", title: "Mobilidade", description: "Movimentos para amplitude e conforto corporal.", modality: "MOBILITY", sortOrder: 20 },
  STRETCHING: { slug: "alongamento", title: "Alongamento", description: "Alongamentos progressivos por região.", modality: "STRETCHING", sortOrder: 30 },
  HOME_FUNCTIONAL: { slug: "fitness-em-casa", title: "Fitness em casa", description: "Força e condicionamento sem equipamento obrigatório.", modality: "FITNESS", sortOrder: 40 },
  LOW_IMPACT_CARDIO: { slug: "aerobico-leve", title: "Aeróbico leve", description: "Ativação cardiovascular com alternativas de baixo impacto.", modality: "AEROBICS", sortOrder: 50 },
  JUMP_ROPE: { slug: "corda", title: "Corda", description: "Progressões de corda com alternativa sem impacto.", modality: "AEROBICS", sortOrder: 60 },
  SHADOW_BOXING: { slug: "boxe", title: "Boxe", description: "Fundamentos de boxe sem contato.", modality: "BOXING", sortOrder: 70 },
  WALKING: { slug: "caminhada", title: "Caminhada", description: "Caminhadas guiadas sem cobrança de performance.", modality: "WALKING", sortOrder: 80 },
  WORK_BREAK: { slug: "pausa-ativa", title: "Pausa ativa", description: "Movimentos curtos para intervalos de trabalho.", modality: "MOBILITY", sortOrder: 90 },
  SLEEP_SUPPORT: { slug: "apoio-ao-sono", title: "Apoio ao sono", description: "Posições de descanso e conforto.", modality: "PILATES", sortOrder: 100 }
};

export const mindCategoryDefinitions: Record<string, { slug: string; title: string; description: string; modality: string; sortOrder: number }> = {
  FOCUS_TRAINING: { slug: "foco", title: "Foco", description: "Treinos de atenção e Modo Foco.", modality: "FOCUS_MODE", sortOrder: 10 },
  BREATHING: { slug: "respiracao", title: "Respiração", description: "Práticas respiratórias guiadas.", modality: "BREATHING", sortOrder: 20 },
  RELAXATION: { slug: "relaxamento", title: "Relaxamento", description: "Pausas para reduzir carga e recuperar.", modality: "RELAXATION", sortOrder: 30 },
  SLEEP_DOWN: { slug: "sono-desacelerar", title: "Sono", description: "Rotinas de desaceleração antes de dormir.", modality: "SLEEP", sortOrder: 40 },
  SLEEP_UP: { slug: "sono-despertar", title: "Despertar", description: "Ativações leves para sonolência diurna.", modality: "SLEEP", sortOrder: 50 },
  ENERGY_SPEND: { slug: "estresse-e-irritacao", title: "Estresse e irritação", description: "Descarga segura de tensão e irritação.", modality: "STRESS", sortOrder: 60 },
  ENERGY_GIVE: { slug: "energia", title: "Energia", description: "Ativações breves para baixa disposição.", modality: "ENERGY", sortOrder: 70 },
  WRITING: { slug: "ansiedade", title: "Ansiedade", description: "Escritas e pausas de aterramento.", modality: "ANXIETY", sortOrder: 80 },
  ORGANIZATION: { slug: "organizacao", title: "Organização", description: "Organização gentil e clareza mental.", modality: "FOCUS_MODE", sortOrder: 90 },
  WORK_BREAK: { slug: "pausa-mental", title: "Pausa mental", description: "Recuperação curta durante o trabalho.", modality: "MEDITATION", sortOrder: 100 },
  HAPPINESS_AUTOCONHECIMENTO: { slug: "autoconhecimento", title: "Autoconhecimento", description: "Práticas de percepção e registro.", modality: "MEDITATION", sortOrder: 110 },
  HAPPINESS_CONEXAO: { slug: "conexao", title: "Conexão", description: "Ações leves de vínculo e presença.", modality: "MEDITATION", sortOrder: 120 },
  HAPPINESS_CORPO_NATUREZA: { slug: "presenca", title: "Presença", description: "Contato com corpo e ambiente.", modality: "MEDITATION", sortOrder: 130 },
  HAPPINESS_CRIATIVIDADE: { slug: "criatividade", title: "Criatividade", description: "Pausas criativas sem cobrança.", modality: "MEDITATION", sortOrder: 140 },
  HAPPINESS_HORMONIOS: { slug: "bem-estar", title: "Bem-estar", description: "Hábitos simples de bem-estar.", modality: "MEDITATION", sortOrder: 150 },
  HAPPINESS_MENTALIDADE: { slug: "mentalidade", title: "Mentalidade", description: "Reflexões para uma rotina mais gentil.", modality: "MEDITATION", sortOrder: 160 }
};

export function contentCategoryDefinition(group: string, category: string) {
  return group === "PHYSICAL" ? bodyCategoryDefinitions[category] : mindCategoryDefinitions[category];
}
