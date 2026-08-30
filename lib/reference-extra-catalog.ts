import type { MovementInput, PlannedReference } from "@/lib/planned-reference-catalog";

export const extraPlannedReferences = [
  {
    id: "ref_001",
    originalTitle: "7 Yoga Poses to Build Spine Strength and Flexibility",
    adaptedTitle: "7 posturas de yoga para forca e flexibilidade da coluna",
    collectionId: "yoga_coluna_forca_flexibilidade",
    collectionTitle: "7 posturas de yoga para forca e flexibilidade da coluna",
    category: "Yoga / Coluna",
    appCategory: "YOGA",
    subcategory: "Forca, flexibilidade e mobilidade",
    originalLanguage: "Ingles",
    appLanguage: "Portugues",
    assetBasePath: "/instructional-images/yoga/spine-strength-flexibility",
    objective: "Sequencia de yoga para mobilidade, forca leve e flexibilidade da coluna.",
    benefits: [
      "pode apoiar mobilidade suave da coluna",
      "pode contribuir para flexibilidade e consciencia postural",
      "pode favorecer fortalecimento leve de musculatura postural",
      "pode ajudar em rotina curta de yoga para costas rigidas"
    ],
    safetyAlert: "Nao apresentar como tratamento de dor ou correcao de coluna.",
    safeObservation: "Nao apresentar como tratamento de dor ou correcao de coluna. Ainda filtrada; reaproveitar REF_004/REF_005 quando equivalente.",
    globalTags: [
      "yoga",
      "coluna",
      "forca leve",
      "flexibilidade",
      "mobilidade",
      "costas",
      "postura",
      "ref_001",
      "yoga_coluna_forca_flexibilidade"
    ],
    globalRecommendWhen: [
      "rigidez leve nas costas",
      "fortalecimento postural leve",
      "alongamento de coluna",
      "rotina de yoga"
    ],
    globalAvoidWhen: [
      "dor forte/aguda",
      "lesao recente",
      "pos-operatorio sem liberacao",
      "formigamento",
      "dormencia",
      "perda de forca",
      "tontura forte",
      "falta de ar",
      "dor no peito",
      "dor irradiada",
      "crise de hernia"
    ]
  },
  {
    id: "ref_007",
    originalTitle: "Exercises for Spine Health",
    adaptedTitle: "Exercicios para saude da coluna - rotina diaria de mobilidade e fortalecimento leve",
    collectionId: "mobilidade_coluna_saude_postural",
    collectionTitle: "Exercicios para saude da coluna - rotina diaria de mobilidade e fortalecimento leve",
    category: "Mobilidade / Coluna",
    appCategory: "MOBILITY",
    subcategory: "Mobilidade de coluna, estabilidade e postura",
    originalLanguage: "Ingles",
    appLanguage: "Portugues",
    assetBasePath: "/instructional-images/mobility/spine-health",
    objective: "Mobilidade e estabilidade leve da coluna, sem promessa de cura/correcao.",
    benefits: [
      "pode apoiar mobilidade diaria da coluna",
      "pode contribuir para estabilidade postural leve",
      "pode favorecer consciencia de alinhamento",
      "pode ajudar em pausas seguras para costas rigidas"
    ],
    safetyAlert: "Nao prometer tratar hernia ou corrigir coluna.",
    safeObservation: "Nao prometer tratar hernia ou corrigir coluna. FILTRADA; reaproveitar REF_004 e gerar apenas o novo necessario.",
    globalTags: [
      "mobilidade",
      "coluna",
      "postura",
      "estabilidade",
      "costas rigidas",
      "rotina diaria",
      "ref_007",
      "mobilidade_coluna_saude_postural"
    ],
    globalRecommendWhen: [
      "costas rigidas",
      "postura",
      "mobilidade de coluna",
      "rotina diaria leve"
    ],
    globalAvoidWhen: [
      "dor forte/aguda",
      "dor irradiada",
      "formigamento",
      "perda de forca",
      "trauma/queda",
      "pos-operatorio"
    ]
  },
  {
    id: "ref_008",
    originalTitle: "Morning Workout Routine for Fat Loss",
    adaptedTitle: "Rotina matinal de treino funcional para energia e condicionamento",
    collectionId: "rotina_matinal_funcional_corpo_inteiro",
    collectionTitle: "Rotina matinal de treino funcional para energia e condicionamento",
    category: "Fitness / Treino funcional",
    appCategory: "HOME_FUNCTIONAL",
    subcategory: "Corpo inteiro, core, pernas, gluteos e cardio",
    originalLanguage: "Ingles",
    appLanguage: "Portugues",
    assetBasePath: "/instructional-images/fitness/morning-routine",
    objective: "Rotina matinal de corpo inteiro, condicionamento e energia, sem promessa de emagrecimento.",
    benefits: [
      "pode apoiar energia matinal e condicionamento",
      "pode contribuir para ativacao de corpo inteiro",
      "pode favorecer consistencia em treino em casa",
      "pode melhorar disposicao sem promessa estetica"
    ],
    safetyAlert: "Remover linguagem de fat loss/transformacao corporal.",
    safeObservation: "Remover linguagem de fat loss/transformacao corporal. FILTRADA; reaproveitar REF_006 e REF_003/004 onde possivel.",
    globalTags: [
      "fitness",
      "treino funcional",
      "rotina matinal",
      "energia",
      "condicionamento",
      "corpo inteiro",
      "sem equipamentos",
      "ref_008",
      "rotina_matinal_funcional_corpo_inteiro"
    ],
    globalRecommendWhen: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro"
    ],
    globalAvoidWhen: [
      "dor no peito",
      "falta de ar",
      "tontura",
      "pressao descontrolada",
      "lesao recente",
      "gravidez/pos-parto sem liberacao"
    ]
  },
  {
    id: "ref_009",
    originalTitle: "Exercicios em Casa para Fascite Plantar",
    adaptedTitle: "Rotina de autocuidado para fascia plantar e conforto dos pes",
    collectionId: "cuidados_fascia_plantar_pes",
    collectionTitle: "Rotina de autocuidado para fascia plantar e conforto dos pes",
    category: "Mobilidade / Pe e tornozelo",
    appCategory: "MOBILITY",
    subcategory: "Fascia plantar, panturrilha e fortalecimento dos pes",
    originalLanguage: "Portugues",
    appLanguage: "Portugues",
    assetBasePath: "/instructional-images/mobility/foot-plantar-care",
    objective: "Autocuidado leve dos pes, fascia plantar e panturrilha.",
    benefits: [
      "pode apoiar conforto dos pes e panturrilhas",
      "pode contribuir para autocuidado leve da fascia plantar",
      "pode favorecer mobilidade de tornozelo e sola do pe",
      "pode ajudar em rotina gentil para pes cansados"
    ],
    safetyAlert: "Nao prometer cura/tratamento de fascite plantar.",
    safeObservation: "Nao prometer cura/tratamento de fascite plantar. FILTRADA; gerar novo para todos.",
    globalTags: [
      "pe",
      "tornozelo",
      "fascia plantar",
      "panturrilha",
      "autocuidado",
      "pes cansados",
      "ref_009",
      "cuidados_fascia_plantar_pes"
    ],
    globalRecommendWhen: [
      "pes cansados",
      "tensao na sola",
      "rigidez ao acordar",
      "panturrilha rigida"
    ],
    globalAvoidWhen: [
      "dor forte/aguda",
      "feridas",
      "diabetes com perda de sensibilidade",
      "inchaco/vermelhidao/calor",
      "nao consegue apoiar o pe"
    ]
  },
  {
    id: "ref_010",
    originalTitle: "Alongamento: Dor nas Costas",
    adaptedTitle: "Rotina leve para conforto das costas e mobilidade da coluna",
    collectionId: "rotina_conforto_costas_mobilidade_coluna",
    collectionTitle: "Rotina leve para conforto das costas e mobilidade da coluna",
    category: "Mobilidade / Coluna",
    appCategory: "MOBILITY",
    subcategory: "Dor leve nas costas, lombar e relaxamento",
    originalLanguage: "Portugues",
    appLanguage: "Portugues",
    assetBasePath: "/instructional-images/mobility/back-pain-relief",
    objective: "Rotina leve para conforto das costas, mobilidade e estabilidade.",
    benefits: [
      "pode apoiar conforto leve das costas",
      "pode contribuir para mobilidade lombar e de coluna",
      "pode favorecer relaxamento corporal",
      "pode ajudar apos longos periodos sentado"
    ],
    safetyAlert: "Nao prometer cura ou tratamento de dor lombar.",
    safeObservation: "Nao prometer cura ou tratamento de dor lombar. FILTRADA; altamente reaproveitavel.",
    globalTags: [
      "costas",
      "lombar",
      "coluna",
      "mobilidade",
      "relaxamento",
      "muito tempo sentado",
      "ref_010",
      "rotina_conforto_costas_mobilidade_coluna"
    ],
    globalRecommendWhen: [
      "costas rigidas",
      "dor leve nas costas",
      "lombar cansada",
      "postura"
    ],
    globalAvoidWhen: [
      "dor forte/aguda",
      "dor irradiando",
      "perda de forca",
      "perda controle urinario/intestino",
      "febre",
      "trauma"
    ]
  },
  {
    id: "ref_011",
    originalTitle: "7 Chakras & Yoga Flow",
    adaptedTitle: "Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal",
    collectionId: "yoga_flow_7_chakras_consciencia_corporal",
    collectionTitle: "Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal",
    category: "Yoga / Bem-estar",
    appCategory: "YOGA",
    subcategory: "Yoga energetico, chakras e relaxamento",
    originalLanguage: "Ingles",
    appLanguage: "Portugues",
    assetBasePath: "/instructional-images/yoga/chakra-flow",
    objective: "Pratica simbolica inspirada nos chakras para foco, presenca, respiracao e autocuidado.",
    benefits: [
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    safetyAlert: "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.",
    safeObservation: "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue. FILTRADA; reaproveitar muitas poses da REF_003/004/005/006.",
    globalTags: [
      "yoga",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    globalRecommendWhen: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    globalAvoidWhen: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ]
  }
] satisfies PlannedReference[];

export const extraPlannedReferenceMovementInputs = [
  {
    referenceId: "ref_001",
    id: "ref_001_mov_01",
    nome_pt: "Torcao sentada",
    nome_original: "Seated Twist",
    tipo: "yoga/mobilidade / coluna/rotacao",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar a mobilizar a coluna em rotacao e reduzir rigidez leve.",
    objetivos_secundarios: [
      "rigidez leve nas costas",
      "fortalecimento postural leve",
      "alongamento de coluna",
      "rotina de yoga",
      "coluna toracica",
      "lombar",
      "quadril",
      "mobilidade, forca leve e flexibilidade da coluna"
    ],
    descricao: "Pode ajudar a mobilizar a coluna em rotacao e reduzir rigidez leve.",
    beneficios: [
      "Pode ajudar a mobilizar a coluna em rotacao e reduzir rigidez leve.",
      "pode apoiar mobilidade suave da coluna",
      "pode contribuir para flexibilidade e consciencia postural",
      "pode favorecer fortalecimento leve de musculatura postural",
      "pode ajudar em rotina curta de yoga para costas rigidas"
    ],
    como_fazer: "Sentar com coluna longa, cruzar/organizar as pernas e girar o tronco suavemente para um lado, repetindo do outro.",
    passo_a_passo: [
      "Sentar com coluna longa, cruzar/organizar as pernas e girar o tronco suavemente para um lado, repetindo do outro.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Crescer a coluna antes de girar e manter a torcao confortavel.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Arredondar a coluna e puxar a torcao com forca.",
    correcao_postural: "Crescer a coluna antes de girar e manter a torcao confortavel.",
    indicacoes: [
      "rigidez leve nas costas",
      "fortalecimento postural leve",
      "alongamento de coluna",
      "rotina de yoga"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Crescer a coluna antes de girar e manter a torcao confortavel.",
      "Nao apresentar como tratamento de dor ou correcao de coluna."
    ],
    regioes_corporais: [
      "coluna toracica",
      "lombar",
      "quadril"
    ],
    grupos_musculares: [
      "coluna toracica",
      "lombar",
      "quadril"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "iniciante",
    levelNumber: 1,
    intensidade: "LIGHT",
    duracao: "8 respiracoes por lado",
    durationSeconds: 64,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta, expirar na torcao",
    palavras_chave: [
      "coluna",
      "torcao",
      "mobilidade",
      "yoga",
      "forca leve",
      "flexibilidade",
      "costas",
      "postura",
      "Torcao sentada",
      "Seated Twist"
    ],
    sinonimos: [
      "Seated Twist",
      "coluna",
      "torcao",
      "mobilidade",
      "yoga"
    ],
    tags: [
      "coluna",
      "torcao",
      "mobilidade",
      "yoga",
      "forca leve",
      "flexibilidade",
      "costas",
      "postura",
      "ref_001",
      "yoga_coluna_forca_flexibilidade"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "rigidez leve nas costas",
      "fortalecimento postural leve",
      "alongamento de coluna",
      "rotina de yoga",
      "coluna",
      "torcao",
      "mobilidade",
      "yoga",
      "mobilidade, forca leve e flexibilidade da coluna",
      "seguranca, presenca e confianca corporal"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "lesao recente",
      "pos-operatorio sem liberacao",
      "formigamento",
      "dormencia",
      "perda de forca",
      "tontura forte",
      "falta de ar",
      "dor no peito",
      "dor irradiada",
      "crise de hernia"
    ],
    objetivo_fisico: "mobilidade, forca leve e flexibilidade da coluna",
    objetivo_emocional: "seguranca, presenca e confianca corporal",
    imageFiles: [
      "yoga_spine_001_seated_twist_step_01_start.png",
      "yoga_spine_001_seated_twist_step_02_rotate_right.png",
      "yoga_spine_001_seated_twist_step_03_rotate_left.png",
      "yoga_spine_001_seated_twist_step_04_common_mistake.png",
      "yoga_spine_001_seated_twist_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO salvo se houver twist sentado ja cadastrado.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_001",
    id: "ref_001_mov_02",
    nome_pt: "Flexao sentada a frente",
    nome_original: "Seated Forward Fold",
    tipo: "yoga/alongamento / posterior de coxa/coluna",
    appCategory: "YOGA",
    instructionType: "STRETCHING",
    objetivo_principal: "Pode ajudar a alongar cadeia posterior e mobilizar a coluna com controle.",
    objetivos_secundarios: [
      "rigidez leve nas costas",
      "fortalecimento postural leve",
      "alongamento de coluna",
      "rotina de yoga",
      "posteriores de coxa",
      "lombar",
      "coluna",
      "mobilidade, forca leve e flexibilidade da coluna"
    ],
    descricao: "Pode ajudar a alongar cadeia posterior e mobilizar a coluna com controle.",
    beneficios: [
      "Pode ajudar a alongar cadeia posterior e mobilizar a coluna com controle.",
      "pode apoiar mobilidade suave da coluna",
      "pode contribuir para flexibilidade e consciencia postural",
      "pode favorecer fortalecimento leve de musculatura postural",
      "pode ajudar em rotina curta de yoga para costas rigidas"
    ],
    como_fazer: "Sentar com pernas a frente e inclinar a partir do quadril, alcancando pernas/pes sem forcar.",
    passo_a_passo: [
      "Sentar com pernas a frente e inclinar a partir do quadril, alcancando pernas/pes sem forcar.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Manter joelhos suaves se necessario e coluna longa.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Colapsar a coluna e puxar os pes com forca.",
    correcao_postural: "Manter joelhos suaves se necessario e coluna longa.",
    indicacoes: [
      "rigidez leve nas costas",
      "fortalecimento postural leve",
      "alongamento de coluna",
      "rotina de yoga"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Manter joelhos suaves se necessario e coluna longa.",
      "Nao apresentar como tratamento de dor ou correcao de coluna."
    ],
    regioes_corporais: [
      "posteriores de coxa",
      "lombar",
      "coluna"
    ],
    grupos_musculares: [
      "posteriores de coxa",
      "lombar",
      "coluna"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "iniciante a intermediario",
    levelNumber: 3,
    intensidade: "MODERATE",
    duracao: "8 respiracoes",
    durationSeconds: 64,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "expirar ao inclinar, inspirar para alongar a coluna",
    palavras_chave: [
      "posterior",
      "flexao sentada",
      "paschimottanasana",
      "coluna",
      "yoga",
      "forca leve",
      "flexibilidade",
      "mobilidade",
      "costas",
      "postura",
      "Flexao sentada a frente",
      "Seated Forward Fold"
    ],
    sinonimos: [
      "Seated Forward Fold",
      "posterior",
      "flexao sentada",
      "paschimottanasana",
      "coluna"
    ],
    tags: [
      "posterior",
      "flexao sentada",
      "paschimottanasana",
      "coluna",
      "yoga",
      "forca leve",
      "flexibilidade",
      "mobilidade",
      "costas",
      "postura",
      "ref_001",
      "yoga_coluna_forca_flexibilidade"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "rigidez leve nas costas",
      "fortalecimento postural leve",
      "alongamento de coluna",
      "rotina de yoga",
      "posterior",
      "flexao sentada",
      "paschimottanasana",
      "coluna",
      "mobilidade, forca leve e flexibilidade da coluna",
      "seguranca, presenca e confianca corporal"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "lesao recente",
      "pos-operatorio sem liberacao",
      "formigamento",
      "dormencia",
      "perda de forca",
      "tontura forte",
      "falta de ar",
      "dor no peito",
      "dor irradiada",
      "crise de hernia"
    ],
    objetivo_fisico: "mobilidade, forca leve e flexibilidade da coluna",
    objetivo_emocional: "seguranca, presenca e confianca corporal",
    imageFiles: [
      "yoga_spine_002_seated_forward_fold_step_01_start.png",
      "yoga_spine_002_seated_forward_fold_step_02_hip_hinge.png",
      "yoga_spine_002_seated_forward_fold_step_03_final.png",
      "yoga_spine_002_seated_forward_fold_step_04_common_mistake.png",
      "yoga_spine_002_seated_forward_fold_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_004_mov_13 Paschimottanasana se asset existir.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_001",
    id: "ref_001_mov_03",
    nome_pt: "Postura do gafanhoto",
    nome_original: "Locust Pose",
    tipo: "yoga/fortalecimento / costas/gluteos",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar a fortalecer cadeia posterior e consciencia postural.",
    objetivos_secundarios: [
      "rigidez leve nas costas",
      "fortalecimento postural leve",
      "alongamento de coluna",
      "rotina de yoga",
      "costas",
      "gluteos",
      "posteriores",
      "ombros"
    ],
    descricao: "Pode ajudar a fortalecer cadeia posterior e consciencia postural.",
    beneficios: [
      "Pode ajudar a fortalecer cadeia posterior e consciencia postural.",
      "pode apoiar mobilidade suave da coluna",
      "pode contribuir para flexibilidade e consciencia postural",
      "pode favorecer fortalecimento leve de musculatura postural",
      "pode ajudar em rotina curta de yoga para costas rigidas"
    ],
    como_fazer: "Deitar de barriga para baixo e elevar peito/pernas suavemente conforme conforto.",
    passo_a_passo: [
      "Deitar de barriga para baixo e elevar peito/pernas suavemente conforme conforto.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Baixa amplitude, pescoco neutro e gluteos/core ativos.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Elevar demais e comprimir lombar/pescoco.",
    correcao_postural: "Baixa amplitude, pescoco neutro e gluteos/core ativos.",
    indicacoes: [
      "rigidez leve nas costas",
      "fortalecimento postural leve",
      "alongamento de coluna",
      "rotina de yoga"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Baixa amplitude, pescoco neutro e gluteos/core ativos.",
      "Nao apresentar como tratamento de dor ou correcao de coluna."
    ],
    regioes_corporais: [
      "costas",
      "gluteos",
      "posteriores",
      "ombros"
    ],
    grupos_musculares: [
      "costas",
      "gluteos",
      "posteriores",
      "ombros"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "iniciante a intermediario",
    levelNumber: 3,
    intensidade: "MODERATE",
    duracao: "8 respiracoes",
    durationSeconds: 64,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "respiracao continua, sem prender o ar",
    palavras_chave: [
      "gafanhoto",
      "costas",
      "fortalecimento",
      "cadeia posterior",
      "yoga",
      "coluna",
      "forca leve",
      "flexibilidade",
      "mobilidade",
      "postura",
      "Postura do gafanhoto",
      "Locust Pose"
    ],
    sinonimos: [
      "Locust Pose",
      "gafanhoto",
      "costas",
      "fortalecimento",
      "cadeia posterior"
    ],
    tags: [
      "gafanhoto",
      "costas",
      "fortalecimento",
      "cadeia posterior",
      "yoga",
      "coluna",
      "forca leve",
      "flexibilidade",
      "mobilidade",
      "postura",
      "ref_001",
      "yoga_coluna_forca_flexibilidade"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "rigidez leve nas costas",
      "fortalecimento postural leve",
      "alongamento de coluna",
      "rotina de yoga",
      "gafanhoto",
      "costas",
      "fortalecimento",
      "cadeia posterior",
      "mobilidade, forca leve e flexibilidade da coluna",
      "seguranca, presenca e confianca corporal"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "lesao recente",
      "pos-operatorio sem liberacao",
      "formigamento",
      "dormencia",
      "perda de forca",
      "tontura forte",
      "falta de ar",
      "dor no peito",
      "dor irradiada",
      "crise de hernia"
    ],
    objetivo_fisico: "mobilidade, forca leve e flexibilidade da coluna",
    objetivo_emocional: "seguranca, presenca e confianca corporal",
    imageFiles: [
      "yoga_spine_003_locust_pose_step_01_prone.png",
      "yoga_spine_003_locust_pose_step_02_lift.png",
      "yoga_spine_003_locust_pose_step_03_final.png",
      "yoga_spine_003_locust_pose_step_04_common_mistake.png",
      "yoga_spine_003_locust_pose_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_001",
    id: "ref_001_mov_04",
    nome_pt: "Postura do gato",
    nome_original: "Cat Pose",
    tipo: "yoga/mobilidade / coluna",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar a mobilizar a coluna em flexao.",
    objetivos_secundarios: [
      "rigidez leve nas costas",
      "fortalecimento postural leve",
      "alongamento de coluna",
      "rotina de yoga",
      "coluna",
      "ombros",
      "quadril",
      "mobilidade, forca leve e flexibilidade da coluna"
    ],
    descricao: "Pode ajudar a mobilizar a coluna em flexao.",
    beneficios: [
      "Pode ajudar a mobilizar a coluna em flexao.",
      "pode apoiar mobilidade suave da coluna",
      "pode contribuir para flexibilidade e consciencia postural",
      "pode favorecer fortalecimento leve de musculatura postural",
      "pode ajudar em rotina curta de yoga para costas rigidas"
    ],
    como_fazer: "Em quatro apoios, arredondar a coluna para cima com controle.",
    passo_a_passo: [
      "Em quatro apoios, arredondar a coluna para cima com controle.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Empurrar o chao e distribuir a curva pela coluna.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Mover so o pescoco ou colapsar ombros.",
    correcao_postural: "Empurrar o chao e distribuir a curva pela coluna.",
    indicacoes: [
      "rigidez leve nas costas",
      "fortalecimento postural leve",
      "alongamento de coluna",
      "rotina de yoga"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Empurrar o chao e distribuir a curva pela coluna.",
      "Nao apresentar como tratamento de dor ou correcao de coluna."
    ],
    regioes_corporais: [
      "coluna",
      "ombros",
      "quadril"
    ],
    grupos_musculares: [
      "coluna",
      "ombros",
      "quadril"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "iniciante",
    levelNumber: 1,
    intensidade: "LIGHT",
    duracao: "5 respiracoes",
    durationSeconds: 60,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "expirar ao arredondar",
    palavras_chave: [
      "gato",
      "coluna",
      "mobilidade",
      "yoga",
      "forca leve",
      "flexibilidade",
      "costas",
      "postura",
      "Postura do gato",
      "Cat Pose"
    ],
    sinonimos: [
      "Cat Pose",
      "gato",
      "coluna",
      "mobilidade"
    ],
    tags: [
      "gato",
      "coluna",
      "mobilidade",
      "yoga",
      "forca leve",
      "flexibilidade",
      "costas",
      "postura",
      "ref_001",
      "yoga_coluna_forca_flexibilidade"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "rigidez leve nas costas",
      "fortalecimento postural leve",
      "alongamento de coluna",
      "rotina de yoga",
      "gato",
      "coluna",
      "mobilidade",
      "mobilidade, forca leve e flexibilidade da coluna",
      "seguranca, presenca e confianca corporal"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "lesao recente",
      "pos-operatorio sem liberacao",
      "formigamento",
      "dormencia",
      "perda de forca",
      "tontura forte",
      "falta de ar",
      "dor no peito",
      "dor irradiada",
      "crise de hernia"
    ],
    objetivo_fisico: "mobilidade, forca leve e flexibilidade da coluna",
    objetivo_emocional: "seguranca, presenca e confianca corporal",
    imageFiles: [
      "yoga_spine_004_cat_pose_step_01_tabletop.png",
      "yoga_spine_004_cat_pose_step_02_rounding.png",
      "yoga_spine_004_cat_pose_step_03_final.png",
      "yoga_spine_004_cat_pose_step_04_common_mistake.png",
      "yoga_spine_004_cat_pose_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_004_mov_05.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_001",
    id: "ref_001_mov_05",
    nome_pt: "Postura da vaca",
    nome_original: "Cow Pose",
    tipo: "yoga/mobilidade / coluna",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar a mobilizar a coluna em extensao suave.",
    objetivos_secundarios: [
      "rigidez leve nas costas",
      "fortalecimento postural leve",
      "alongamento de coluna",
      "rotina de yoga",
      "coluna",
      "peito",
      "ombros",
      "mobilidade, forca leve e flexibilidade da coluna"
    ],
    descricao: "Pode ajudar a mobilizar a coluna em extensao suave.",
    beneficios: [
      "Pode ajudar a mobilizar a coluna em extensao suave.",
      "pode apoiar mobilidade suave da coluna",
      "pode contribuir para flexibilidade e consciencia postural",
      "pode favorecer fortalecimento leve de musculatura postural",
      "pode ajudar em rotina curta de yoga para costas rigidas"
    ],
    como_fazer: "Em quatro apoios, levar peito a frente e criar extensao confortavel.",
    passo_a_passo: [
      "Em quatro apoios, levar peito a frente e criar extensao confortavel.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Distribuir a extensao e manter pescoco confortavel.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Jogar a cabeca para tras e comprimir lombar.",
    correcao_postural: "Distribuir a extensao e manter pescoco confortavel.",
    indicacoes: [
      "rigidez leve nas costas",
      "fortalecimento postural leve",
      "alongamento de coluna",
      "rotina de yoga"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Distribuir a extensao e manter pescoco confortavel.",
      "Nao apresentar como tratamento de dor ou correcao de coluna."
    ],
    regioes_corporais: [
      "coluna",
      "peito",
      "ombros"
    ],
    grupos_musculares: [
      "coluna",
      "peito",
      "ombros"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "iniciante",
    levelNumber: 1,
    intensidade: "LIGHT",
    duracao: "5 respiracoes",
    durationSeconds: 60,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "inspirar ao abrir o peito",
    palavras_chave: [
      "vaca",
      "coluna",
      "extensao",
      "yoga",
      "forca leve",
      "flexibilidade",
      "mobilidade",
      "costas",
      "postura",
      "Postura da vaca",
      "Cow Pose"
    ],
    sinonimos: [
      "Cow Pose",
      "vaca",
      "coluna",
      "extensao"
    ],
    tags: [
      "vaca",
      "coluna",
      "extensao",
      "yoga",
      "forca leve",
      "flexibilidade",
      "mobilidade",
      "costas",
      "postura",
      "ref_001",
      "yoga_coluna_forca_flexibilidade"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "rigidez leve nas costas",
      "fortalecimento postural leve",
      "alongamento de coluna",
      "rotina de yoga",
      "vaca",
      "coluna",
      "extensao",
      "mobilidade, forca leve e flexibilidade da coluna",
      "seguranca, presenca e confianca corporal"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "lesao recente",
      "pos-operatorio sem liberacao",
      "formigamento",
      "dormencia",
      "perda de forca",
      "tontura forte",
      "falta de ar",
      "dor no peito",
      "dor irradiada",
      "crise de hernia"
    ],
    objetivo_fisico: "mobilidade, forca leve e flexibilidade da coluna",
    objetivo_emocional: "seguranca, presenca e confianca corporal",
    imageFiles: [
      "yoga_spine_005_cow_pose_step_01_tabletop.png",
      "yoga_spine_005_cow_pose_step_02_chest_forward.png",
      "yoga_spine_005_cow_pose_step_03_final.png",
      "yoga_spine_005_cow_pose_step_04_common_mistake.png",
      "yoga_spine_005_cow_pose_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_004_mov_06.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_001",
    id: "ref_001_mov_06",
    nome_pt: "Alongamento lateral sentado",
    nome_original: "Seated Side Stretch",
    tipo: "yoga/alongamento / lateral do tronco",
    appCategory: "YOGA",
    instructionType: "STRETCHING",
    objetivo_principal: "Pode ajudar a alongar a lateral do tronco e mobilizar coluna.",
    objetivos_secundarios: [
      "rigidez leve nas costas",
      "fortalecimento postural leve",
      "alongamento de coluna",
      "rotina de yoga",
      "lateral do tronco",
      "ombros",
      "quadril",
      "mobilidade, forca leve e flexibilidade da coluna"
    ],
    descricao: "Pode ajudar a alongar a lateral do tronco e mobilizar coluna.",
    beneficios: [
      "Pode ajudar a alongar a lateral do tronco e mobilizar coluna.",
      "pode apoiar mobilidade suave da coluna",
      "pode contribuir para flexibilidade e consciencia postural",
      "pode favorecer fortalecimento leve de musculatura postural",
      "pode ajudar em rotina curta de yoga para costas rigidas"
    ],
    como_fazer: "Sentar, apoiar uma mao e levar o braco oposto por cima da cabeca.",
    passo_a_passo: [
      "Sentar, apoiar uma mao e levar o braco oposto por cima da cabeca.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Peito aberto, apoio estavel e amplitude confortavel.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Colapsar o peito e forcar o ombro.",
    correcao_postural: "Peito aberto, apoio estavel e amplitude confortavel.",
    indicacoes: [
      "rigidez leve nas costas",
      "fortalecimento postural leve",
      "alongamento de coluna",
      "rotina de yoga"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Peito aberto, apoio estavel e amplitude confortavel.",
      "Nao apresentar como tratamento de dor ou correcao de coluna."
    ],
    regioes_corporais: [
      "lateral do tronco",
      "ombros",
      "quadril"
    ],
    grupos_musculares: [
      "lateral do tronco",
      "ombros",
      "quadril"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "iniciante",
    levelNumber: 1,
    intensidade: "LIGHT",
    duracao: "8 respiracoes por lado",
    durationSeconds: 64,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "inspirar expandindo costelas, expirar relaxando",
    palavras_chave: [
      "lateral",
      "tronco",
      "costelas",
      "sentado",
      "yoga",
      "coluna",
      "forca leve",
      "flexibilidade",
      "mobilidade",
      "costas",
      "postura",
      "Alongamento lateral sentado",
      "Seated Side Stretch"
    ],
    sinonimos: [
      "Seated Side Stretch",
      "lateral",
      "tronco",
      "costelas",
      "sentado"
    ],
    tags: [
      "lateral",
      "tronco",
      "costelas",
      "sentado",
      "yoga",
      "coluna",
      "forca leve",
      "flexibilidade",
      "mobilidade",
      "costas",
      "postura",
      "ref_001",
      "yoga_coluna_forca_flexibilidade"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "rigidez leve nas costas",
      "fortalecimento postural leve",
      "alongamento de coluna",
      "rotina de yoga",
      "lateral",
      "tronco",
      "costelas",
      "sentado",
      "mobilidade, forca leve e flexibilidade da coluna",
      "seguranca, presenca e confianca corporal"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "lesao recente",
      "pos-operatorio sem liberacao",
      "formigamento",
      "dormencia",
      "perda de forca",
      "tontura forte",
      "falta de ar",
      "dor no peito",
      "dor irradiada",
      "crise de hernia"
    ],
    objetivo_fisico: "mobilidade, forca leve e flexibilidade da coluna",
    objetivo_emocional: "seguranca, presenca e confianca corporal",
    imageFiles: [
      "yoga_spine_006_seated_side_stretch_step_01_start.png",
      "yoga_spine_006_seated_side_stretch_step_02_arm_lift.png",
      "yoga_spine_006_seated_side_stretch_step_03_final_right.png",
      "yoga_spine_006_seated_side_stretch_step_04_final_left.png",
      "yoga_spine_006_seated_side_stretch_step_05_common_mistake.png",
      "yoga_spine_006_seated_side_stretch_step_06_correction.png"
    ],
    visual_reuse: "CONFERIR com ref_005_mov_02 se REF_005 existir; senao GERAR_NOVO_CANONICO.",
    assetReuseStatus: "CHECK_BEFORE_GENERATE"
  },
  {
    referenceId: "ref_001",
    id: "ref_001_mov_07",
    nome_pt: "Angulo lateral estendido",
    nome_original: "Extended Side Angle",
    tipo: "yoga/forca e alongamento / quadril/lateral",
    appCategory: "YOGA",
    instructionType: "STRETCHING",
    objetivo_principal: "Pode ajudar a fortalecer pernas e alongar a lateral do corpo.",
    objetivos_secundarios: [
      "rigidez leve nas costas",
      "fortalecimento postural leve",
      "alongamento de coluna",
      "rotina de yoga",
      "quadril",
      "pernas",
      "lateral do tronco",
      "ombros"
    ],
    descricao: "Pode ajudar a fortalecer pernas e alongar a lateral do corpo.",
    beneficios: [
      "Pode ajudar a fortalecer pernas e alongar a lateral do corpo.",
      "pode apoiar mobilidade suave da coluna",
      "pode contribuir para flexibilidade e consciencia postural",
      "pode favorecer fortalecimento leve de musculatura postural",
      "pode ajudar em rotina curta de yoga para costas rigidas"
    ],
    como_fazer: "Base ampla, joelho da frente flexionado, braco superior alongado na diagonal.",
    passo_a_passo: [
      "Base ampla, joelho da frente flexionado, braco superior alongado na diagonal.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Joelho alinhado, peito aberto e apoio estavel.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Joelho desalinhado e tronco colapsado.",
    correcao_postural: "Joelho alinhado, peito aberto e apoio estavel.",
    indicacoes: [
      "rigidez leve nas costas",
      "fortalecimento postural leve",
      "alongamento de coluna",
      "rotina de yoga"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Joelho alinhado, peito aberto e apoio estavel.",
      "Nao apresentar como tratamento de dor ou correcao de coluna."
    ],
    regioes_corporais: [
      "quadril",
      "pernas",
      "lateral do tronco",
      "ombros"
    ],
    grupos_musculares: [
      "quadril",
      "pernas",
      "lateral do tronco",
      "ombros"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "iniciante a intermediario",
    levelNumber: 3,
    intensidade: "MODERATE",
    duracao: "5 respiracoes por lado",
    durationSeconds: 60,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "respiracao lateral ampla",
    palavras_chave: [
      "parsvakonasana",
      "angulo lateral",
      "quadril",
      "lateral",
      "yoga",
      "coluna",
      "forca leve",
      "flexibilidade",
      "mobilidade",
      "costas",
      "postura",
      "Angulo lateral estendido",
      "Extended Side Angle"
    ],
    sinonimos: [
      "Extended Side Angle",
      "parsvakonasana",
      "angulo lateral",
      "quadril",
      "lateral"
    ],
    tags: [
      "parsvakonasana",
      "angulo lateral",
      "quadril",
      "lateral",
      "yoga",
      "coluna",
      "forca leve",
      "flexibilidade",
      "mobilidade",
      "costas",
      "postura",
      "ref_001",
      "yoga_coluna_forca_flexibilidade"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "rigidez leve nas costas",
      "fortalecimento postural leve",
      "alongamento de coluna",
      "rotina de yoga",
      "parsvakonasana",
      "angulo lateral",
      "quadril",
      "lateral",
      "mobilidade, forca leve e flexibilidade da coluna",
      "seguranca, presenca e confianca corporal"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "lesao recente",
      "pos-operatorio sem liberacao",
      "formigamento",
      "dormencia",
      "perda de forca",
      "tontura forte",
      "falta de ar",
      "dor no peito",
      "dor irradiada",
      "crise de hernia"
    ],
    objetivo_fisico: "mobilidade, forca leve e flexibilidade da coluna",
    objetivo_emocional: "seguranca, presenca e confianca corporal",
    imageFiles: [
      "yoga_spine_007_extended_side_angle_step_01_wide_stance.png",
      "yoga_spine_007_extended_side_angle_step_02_knee_bend.png",
      "yoga_spine_007_extended_side_angle_step_03_final.png",
      "yoga_spine_007_extended_side_angle_step_04_common_mistake.png",
      "yoga_spine_007_extended_side_angle_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_004_mov_12 se asset existir.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_007",
    id: "ref_007_mov_01",
    nome_pt: "Gato-vaca",
    nome_original: "Cat-Cow",
    tipo: "mobilidade/fortalecimento leve / mobilidade/coluna",
    appCategory: "MOBILITY",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em mobilidade de coluna, rigidez leve.",
    objetivos_secundarios: [
      "costas rigidas",
      "postura",
      "mobilidade de coluna",
      "rotina diaria leve",
      "coluna",
      "lombar",
      "toracica",
      "core"
    ],
    descricao: "Pode ajudar em mobilidade de coluna, rigidez leve.",
    beneficios: [
      "Pode ajudar em mobilidade de coluna, rigidez leve.",
      "pode apoiar mobilidade diaria da coluna",
      "pode contribuir para estabilidade postural leve",
      "pode favorecer consciencia de alinhamento",
      "pode ajudar em pausas seguras para costas rigidas"
    ],
    como_fazer: "Executar Gato-vaca com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Gato-vaca com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "costas rigidas",
      "postura",
      "mobilidade de coluna",
      "rotina diaria leve"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer tratar hernia ou corrigir coluna."
    ],
    regioes_corporais: [
      "coluna",
      "lombar",
      "toracica",
      "core",
      "quadril"
    ],
    grupos_musculares: [
      "coluna",
      "lombar",
      "toracica",
      "core",
      "quadril"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "iniciante",
    levelNumber: 1,
    intensidade: "LIGHT",
    duracao: "10 repeticoes, 3 rounds",
    durationSeconds: 120,
    sets: 3,
    repeticoes: "10 repeticoes",
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "gato-vaca",
      "mobilidade",
      "coluna",
      "pausa ai",
      "postura",
      "estabilidade",
      "costas rigidas",
      "rotina diaria",
      "Gato-vaca",
      "Cat-Cow"
    ],
    sinonimos: [
      "Cat-Cow",
      "gato-vaca",
      "mobilidade",
      "coluna",
      "pausa ai"
    ],
    tags: [
      "gato-vaca",
      "mobilidade",
      "coluna",
      "pausa ai",
      "postura",
      "estabilidade",
      "costas rigidas",
      "rotina diaria",
      "ref_007",
      "mobilidade_coluna_saude_postural"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "costas rigidas",
      "postura",
      "mobilidade de coluna",
      "rotina diaria leve",
      "gato-vaca",
      "mobilidade",
      "coluna",
      "pausa ai",
      "mobilidade e estabilidade postural da coluna",
      "calma, autocuidado e continuidade diaria"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "dor irradiada",
      "formigamento",
      "perda de forca",
      "trauma/queda",
      "pos-operatorio"
    ],
    objetivo_fisico: "mobilidade e estabilidade postural da coluna",
    objetivo_emocional: "calma, autocuidado e continuidade diaria",
    imageFiles: [
      "spine_health_001_cat_cow_step_01_tabletop.png",
      "spine_health_001_cat_cow_step_02_cow_pose.png",
      "spine_health_001_cat_cow_step_03_cat_pose.png",
      "spine_health_001_cat_cow_step_04_common_mistake.png",
      "spine_health_001_cat_cow_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_004_mov_05/ref_004_mov_06.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_007",
    id: "ref_007_mov_02",
    nome_pt: "Postura da crianca",
    nome_original: "Child's Pose",
    tipo: "mobilidade/fortalecimento leve / mobilidade/coluna",
    appCategory: "MOBILITY",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em mobilidade de coluna, rigidez leve.",
    objetivos_secundarios: [
      "costas rigidas",
      "postura",
      "mobilidade de coluna",
      "rotina diaria leve",
      "coluna",
      "lombar",
      "toracica",
      "core"
    ],
    descricao: "Pode ajudar em mobilidade de coluna, rigidez leve.",
    beneficios: [
      "Pode ajudar em mobilidade de coluna, rigidez leve.",
      "pode apoiar mobilidade diaria da coluna",
      "pode contribuir para estabilidade postural leve",
      "pode favorecer consciencia de alinhamento",
      "pode ajudar em pausas seguras para costas rigidas"
    ],
    como_fazer: "Executar Postura da crianca com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Postura da crianca com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "costas rigidas",
      "postura",
      "mobilidade de coluna",
      "rotina diaria leve"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer tratar hernia ou corrigir coluna."
    ],
    regioes_corporais: [
      "coluna",
      "lombar",
      "toracica",
      "core",
      "quadril"
    ],
    grupos_musculares: [
      "coluna",
      "lombar",
      "toracica",
      "core",
      "quadril"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "iniciante",
    levelNumber: 1,
    intensidade: "LIGHT",
    duracao: "90 segundos, 3 vezes",
    durationSeconds: 270,
    sets: 3,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "postura da crianca",
      "mobilidade",
      "coluna",
      "pausa ai",
      "postura",
      "estabilidade",
      "costas rigidas",
      "rotina diaria",
      "Postura da crianca",
      "Child's Pose"
    ],
    sinonimos: [
      "Child's Pose",
      "postura da crianca",
      "mobilidade",
      "coluna",
      "pausa ai"
    ],
    tags: [
      "postura da crianca",
      "mobilidade",
      "coluna",
      "pausa ai",
      "postura",
      "estabilidade",
      "costas rigidas",
      "rotina diaria",
      "ref_007",
      "mobilidade_coluna_saude_postural"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "costas rigidas",
      "postura",
      "mobilidade de coluna",
      "rotina diaria leve",
      "postura da crianca",
      "mobilidade",
      "coluna",
      "pausa ai",
      "mobilidade e estabilidade postural da coluna",
      "calma, autocuidado e continuidade diaria"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "dor irradiada",
      "formigamento",
      "perda de forca",
      "trauma/queda",
      "pos-operatorio"
    ],
    objetivo_fisico: "mobilidade e estabilidade postural da coluna",
    objetivo_emocional: "calma, autocuidado e continuidade diaria",
    imageFiles: [
      "spine_health_002_child_pose_step_01_kneeling.png",
      "spine_health_002_child_pose_step_02_sit_back.png",
      "spine_health_002_child_pose_step_03_final.png",
      "spine_health_002_child_pose_step_04_common_mistake.png",
      "spine_health_002_child_pose_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_004_mov_04.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_007",
    id: "ref_007_mov_03",
    nome_pt: "Passar a linha na agulha",
    nome_original: "Thread the Needle",
    tipo: "mobilidade/fortalecimento leve / mobilidade/coluna",
    appCategory: "MOBILITY",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em mobilidade de coluna, rigidez leve.",
    objetivos_secundarios: [
      "costas rigidas",
      "postura",
      "mobilidade de coluna",
      "rotina diaria leve",
      "coluna",
      "lombar",
      "toracica",
      "core"
    ],
    descricao: "Pode ajudar em mobilidade de coluna, rigidez leve.",
    beneficios: [
      "Pode ajudar em mobilidade de coluna, rigidez leve.",
      "pode apoiar mobilidade diaria da coluna",
      "pode contribuir para estabilidade postural leve",
      "pode favorecer consciencia de alinhamento",
      "pode ajudar em pausas seguras para costas rigidas"
    ],
    como_fazer: "Executar Passar a linha na agulha com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Passar a linha na agulha com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "costas rigidas",
      "postura",
      "mobilidade de coluna",
      "rotina diaria leve"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer tratar hernia ou corrigir coluna."
    ],
    regioes_corporais: [
      "coluna",
      "lombar",
      "toracica",
      "core",
      "quadril"
    ],
    grupos_musculares: [
      "coluna",
      "lombar",
      "toracica",
      "core",
      "quadril"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "iniciante",
    levelNumber: 1,
    intensidade: "LIGHT",
    duracao: "30 segundos cada lado",
    durationSeconds: 90,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "passar a linha na agulha",
      "mobilidade",
      "coluna",
      "pausa ai",
      "postura",
      "estabilidade",
      "costas rigidas",
      "rotina diaria",
      "Passar a linha na agulha",
      "Thread the Needle"
    ],
    sinonimos: [
      "Thread the Needle",
      "passar a linha na agulha",
      "mobilidade",
      "coluna",
      "pausa ai"
    ],
    tags: [
      "passar a linha na agulha",
      "mobilidade",
      "coluna",
      "pausa ai",
      "postura",
      "estabilidade",
      "costas rigidas",
      "rotina diaria",
      "ref_007",
      "mobilidade_coluna_saude_postural"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "costas rigidas",
      "postura",
      "mobilidade de coluna",
      "rotina diaria leve",
      "passar a linha na agulha",
      "mobilidade",
      "coluna",
      "pausa ai",
      "mobilidade e estabilidade postural da coluna",
      "calma, autocuidado e continuidade diaria"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "dor irradiada",
      "formigamento",
      "perda de forca",
      "trauma/queda",
      "pos-operatorio"
    ],
    objetivo_fisico: "mobilidade e estabilidade postural da coluna",
    objetivo_emocional: "calma, autocuidado e continuidade diaria",
    imageFiles: [
      "spine_health_003_thread_the_needle_step_01_tabletop.png",
      "spine_health_003_thread_the_needle_step_02_arm_thread.png",
      "spine_health_003_thread_the_needle_step_03_final.png",
      "spine_health_003_thread_the_needle_step_04_common_mistake.png",
      "spine_health_003_thread_the_needle_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO_CANONICO.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_007",
    id: "ref_007_mov_04",
    nome_pt: "Cao-passaro",
    nome_original: "Bird Dog",
    tipo: "mobilidade/fortalecimento leve / mobilidade/coluna",
    appCategory: "MOBILITY",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em mobilidade de coluna, rigidez leve.",
    objetivos_secundarios: [
      "costas rigidas",
      "postura",
      "mobilidade de coluna",
      "rotina diaria leve",
      "coluna",
      "lombar",
      "toracica",
      "core"
    ],
    descricao: "Pode ajudar em mobilidade de coluna, rigidez leve.",
    beneficios: [
      "Pode ajudar em mobilidade de coluna, rigidez leve.",
      "pode apoiar mobilidade diaria da coluna",
      "pode contribuir para estabilidade postural leve",
      "pode favorecer consciencia de alinhamento",
      "pode ajudar em pausas seguras para costas rigidas"
    ],
    como_fazer: "Executar Cao-passaro com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Cao-passaro com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "costas rigidas",
      "postura",
      "mobilidade de coluna",
      "rotina diaria leve"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer tratar hernia ou corrigir coluna."
    ],
    regioes_corporais: [
      "coluna",
      "lombar",
      "toracica",
      "core",
      "quadril"
    ],
    grupos_musculares: [
      "coluna",
      "lombar",
      "toracica",
      "core",
      "quadril"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "iniciante",
    levelNumber: 1,
    intensidade: "LIGHT",
    duracao: "10 repeticoes lentas, 3 vezes por lado",
    durationSeconds: 120,
    sets: 3,
    repeticoes: "10 repeticoes",
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "cao-passaro",
      "mobilidade",
      "coluna",
      "pausa ai",
      "postura",
      "estabilidade",
      "costas rigidas",
      "rotina diaria",
      "Cao-passaro",
      "Bird Dog"
    ],
    sinonimos: [
      "Bird Dog",
      "cao-passaro",
      "mobilidade",
      "coluna",
      "pausa ai"
    ],
    tags: [
      "cao-passaro",
      "mobilidade",
      "coluna",
      "pausa ai",
      "postura",
      "estabilidade",
      "costas rigidas",
      "rotina diaria",
      "ref_007",
      "mobilidade_coluna_saude_postural"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "costas rigidas",
      "postura",
      "mobilidade de coluna",
      "rotina diaria leve",
      "cao-passaro",
      "mobilidade",
      "coluna",
      "pausa ai",
      "mobilidade e estabilidade postural da coluna",
      "calma, autocuidado e continuidade diaria"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "dor irradiada",
      "formigamento",
      "perda de forca",
      "trauma/queda",
      "pos-operatorio"
    ],
    objetivo_fisico: "mobilidade e estabilidade postural da coluna",
    objetivo_emocional: "calma, autocuidado e continuidade diaria",
    imageFiles: [
      "spine_health_004_bird_dog_step_01_tabletop.png",
      "spine_health_004_bird_dog_step_02_extend_right_left.png",
      "spine_health_004_bird_dog_step_03_extend_left_right.png",
      "spine_health_004_bird_dog_step_04_common_mistake.png",
      "spine_health_004_bird_dog_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO_CANONICO; reutilizar em REF_010.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_007",
    id: "ref_007_mov_05",
    nome_pt: "Ponte articulada",
    nome_original: "Bridge Articulated",
    tipo: "mobilidade/fortalecimento leve / mobilidade/coluna",
    appCategory: "MOBILITY",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em mobilidade de coluna, rigidez leve.",
    objetivos_secundarios: [
      "costas rigidas",
      "postura",
      "mobilidade de coluna",
      "rotina diaria leve",
      "coluna",
      "lombar",
      "toracica",
      "core"
    ],
    descricao: "Pode ajudar em mobilidade de coluna, rigidez leve.",
    beneficios: [
      "Pode ajudar em mobilidade de coluna, rigidez leve.",
      "pode apoiar mobilidade diaria da coluna",
      "pode contribuir para estabilidade postural leve",
      "pode favorecer consciencia de alinhamento",
      "pode ajudar em pausas seguras para costas rigidas"
    ],
    como_fazer: "Executar Ponte articulada com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Ponte articulada com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "costas rigidas",
      "postura",
      "mobilidade de coluna",
      "rotina diaria leve"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer tratar hernia ou corrigir coluna."
    ],
    regioes_corporais: [
      "coluna",
      "lombar",
      "toracica",
      "core",
      "quadril"
    ],
    grupos_musculares: [
      "coluna",
      "lombar",
      "toracica",
      "core",
      "quadril"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "iniciante",
    levelNumber: 1,
    intensidade: "LIGHT",
    duracao: "30 segundos, 5 vezes",
    durationSeconds: 90,
    sets: 5,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "ponte articulada",
      "mobilidade",
      "coluna",
      "pausa ai",
      "postura",
      "estabilidade",
      "costas rigidas",
      "rotina diaria",
      "Ponte articulada",
      "Bridge Articulated"
    ],
    sinonimos: [
      "Bridge Articulated",
      "ponte articulada",
      "mobilidade",
      "coluna",
      "pausa ai"
    ],
    tags: [
      "ponte articulada",
      "mobilidade",
      "coluna",
      "pausa ai",
      "postura",
      "estabilidade",
      "costas rigidas",
      "rotina diaria",
      "ref_007",
      "mobilidade_coluna_saude_postural"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "costas rigidas",
      "postura",
      "mobilidade de coluna",
      "rotina diaria leve",
      "ponte articulada",
      "mobilidade",
      "coluna",
      "pausa ai",
      "mobilidade e estabilidade postural da coluna",
      "calma, autocuidado e continuidade diaria"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "dor irradiada",
      "formigamento",
      "perda de forca",
      "trauma/queda",
      "pos-operatorio"
    ],
    objetivo_fisico: "mobilidade e estabilidade postural da coluna",
    objetivo_emocional: "calma, autocuidado e continuidade diaria",
    imageFiles: [
      "spine_health_005_bridge_articulated_step_01_lie_down.png",
      "spine_health_005_bridge_articulated_step_02_pelvis_tilt.png",
      "spine_health_005_bridge_articulated_step_03_hips_lift.png",
      "spine_health_005_bridge_articulated_step_04_final.png",
      "spine_health_005_bridge_articulated_step_05_common_mistake.png",
      "spine_health_005_bridge_articulated_step_06_correction.png"
    ],
    visual_reuse: "REUTILIZAR parcialmente ref_004_mov_08 para final se equivalente.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_007",
    id: "ref_007_mov_06",
    nome_pt: "Cobra baixa",
    nome_original: "Cobra Low",
    tipo: "mobilidade/fortalecimento leve / mobilidade/coluna",
    appCategory: "MOBILITY",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em mobilidade de coluna, rigidez leve.",
    objetivos_secundarios: [
      "costas rigidas",
      "postura",
      "mobilidade de coluna",
      "rotina diaria leve",
      "coluna",
      "lombar",
      "toracica",
      "core"
    ],
    descricao: "Pode ajudar em mobilidade de coluna, rigidez leve.",
    beneficios: [
      "Pode ajudar em mobilidade de coluna, rigidez leve.",
      "pode apoiar mobilidade diaria da coluna",
      "pode contribuir para estabilidade postural leve",
      "pode favorecer consciencia de alinhamento",
      "pode ajudar em pausas seguras para costas rigidas"
    ],
    como_fazer: "Executar Cobra baixa com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Cobra baixa com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "costas rigidas",
      "postura",
      "mobilidade de coluna",
      "rotina diaria leve"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer tratar hernia ou corrigir coluna."
    ],
    regioes_corporais: [
      "coluna",
      "lombar",
      "toracica",
      "core",
      "quadril"
    ],
    grupos_musculares: [
      "coluna",
      "lombar",
      "toracica",
      "core",
      "quadril"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "iniciante",
    levelNumber: 1,
    intensidade: "LIGHT",
    duracao: "30 segundos, 4 vezes",
    durationSeconds: 90,
    sets: 4,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "cobra baixa",
      "mobilidade",
      "coluna",
      "pausa ai",
      "postura",
      "estabilidade",
      "costas rigidas",
      "rotina diaria",
      "Cobra baixa",
      "Cobra Low"
    ],
    sinonimos: [
      "Cobra Low",
      "cobra baixa",
      "mobilidade",
      "coluna",
      "pausa ai"
    ],
    tags: [
      "cobra baixa",
      "mobilidade",
      "coluna",
      "pausa ai",
      "postura",
      "estabilidade",
      "costas rigidas",
      "rotina diaria",
      "ref_007",
      "mobilidade_coluna_saude_postural"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "costas rigidas",
      "postura",
      "mobilidade de coluna",
      "rotina diaria leve",
      "cobra baixa",
      "mobilidade",
      "coluna",
      "pausa ai",
      "mobilidade e estabilidade postural da coluna",
      "calma, autocuidado e continuidade diaria"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "dor irradiada",
      "formigamento",
      "perda de forca",
      "trauma/queda",
      "pos-operatorio"
    ],
    objetivo_fisico: "mobilidade e estabilidade postural da coluna",
    objetivo_emocional: "calma, autocuidado e continuidade diaria",
    imageFiles: [
      "spine_health_006_cobra_low_step_01_prone.png",
      "spine_health_006_cobra_low_step_02_hands_under_shoulders.png",
      "spine_health_006_cobra_low_step_03_low_lift.png",
      "spine_health_006_cobra_low_step_04_final.png",
      "spine_health_006_cobra_low_step_05_common_mistake.png",
      "spine_health_006_cobra_low_step_06_correction.png"
    ],
    visual_reuse: "CONFERIR ref_003/ref_004 cobra; gerar se cobra existente for alta.",
    assetReuseStatus: "CHECK_BEFORE_GENERATE"
  },
  {
    referenceId: "ref_008",
    id: "ref_008_mov_01",
    nome_pt: "Polichinelos",
    nome_original: "Jumping Jacks",
    tipo: "exercicio funcional / fitness/rotina matinal",
    appCategory: "HOME_FUNCTIONAL",
    instructionType: "REPS_BASED",
    objetivo_principal: "Pode ajudar em treino matinal, condicionamento.",
    objetivos_secundarios: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro",
      "core",
      "pernas conforme exercicio",
      "condicionamento funcional de corpo inteiro em casa"
    ],
    descricao: "Pode ajudar em treino matinal, condicionamento.",
    beneficios: [
      "Pode ajudar em treino matinal, condicionamento.",
      "pode apoiar energia matinal e condicionamento",
      "pode contribuir para ativacao de corpo inteiro",
      "pode favorecer consistencia em treino em casa",
      "pode melhorar disposicao sem promessa estetica"
    ],
    como_fazer: "Executar Polichinelos com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Polichinelos com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Remover linguagem de fat loss/transformacao corporal."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "core",
      "pernas conforme exercicio"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "core",
      "pernas conforme exercicio"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "nenhum",
      "colchonete"
    ],
    nivel: "iniciante a intermediario",
    levelNumber: 3,
    intensidade: "MODERATE_PLUS",
    duracao: "30s + 10s descanso",
    durationSeconds: 90,
    sets: null,
    repeticoes: null,
    restSeconds: 10,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "polichinelos",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "treino funcional",
      "energia",
      "condicionamento",
      "corpo inteiro",
      "sem equipamentos",
      "Polichinelos",
      "Jumping Jacks"
    ],
    sinonimos: [
      "Jumping Jacks",
      "polichinelos",
      "fitness",
      "rotina matinal",
      "pausa ai"
    ],
    tags: [
      "polichinelos",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "treino funcional",
      "energia",
      "condicionamento",
      "corpo inteiro",
      "sem equipamentos",
      "ref_008",
      "rotina_matinal_funcional_corpo_inteiro"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro",
      "polichinelos",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "condicionamento funcional de corpo inteiro em casa",
      "energia, disposicao e inicio ativo do dia"
    ],
    quando_evitar: [
      "dor no peito",
      "falta de ar",
      "tontura",
      "pressao descontrolada",
      "lesao recente",
      "gravidez/pos-parto sem liberacao"
    ],
    objetivo_fisico: "condicionamento funcional de corpo inteiro em casa",
    objetivo_emocional: "energia, disposicao e inicio ativo do dia",
    imageFiles: [
      "fitness_morning_001_jumping_jacks_step_01_start.png",
      "fitness_morning_001_jumping_jacks_step_02_open_jump.png",
      "fitness_morning_001_jumping_jacks_step_03_return.png",
      "fitness_morning_001_jumping_jacks_step_04_common_mistake.png",
      "fitness_morning_001_jumping_jacks_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_008",
    id: "ref_008_mov_02",
    nome_pt: "Agachamentos com peso corporal",
    nome_original: "Bodyweight Squats",
    tipo: "exercicio funcional / fitness/rotina matinal",
    appCategory: "HOME_FUNCTIONAL",
    instructionType: "REPS_BASED",
    objetivo_principal: "Pode ajudar em treino matinal, condicionamento.",
    objetivos_secundarios: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro",
      "core",
      "pernas conforme exercicio",
      "condicionamento funcional de corpo inteiro em casa"
    ],
    descricao: "Pode ajudar em treino matinal, condicionamento.",
    beneficios: [
      "Pode ajudar em treino matinal, condicionamento.",
      "pode apoiar energia matinal e condicionamento",
      "pode contribuir para ativacao de corpo inteiro",
      "pode favorecer consistencia em treino em casa",
      "pode melhorar disposicao sem promessa estetica"
    ],
    como_fazer: "Executar Agachamentos com peso corporal com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Agachamentos com peso corporal com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Remover linguagem de fat loss/transformacao corporal."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "core",
      "pernas conforme exercicio"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "core",
      "pernas conforme exercicio"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "nenhum",
      "colchonete"
    ],
    nivel: "iniciante a intermediario",
    levelNumber: 3,
    intensidade: "MODERATE_PLUS",
    duracao: "30s + 10s descanso",
    durationSeconds: 90,
    sets: null,
    repeticoes: null,
    restSeconds: 10,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "agachamentos com peso corporal",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "treino funcional",
      "energia",
      "condicionamento",
      "corpo inteiro",
      "sem equipamentos",
      "Agachamentos com peso corporal",
      "Bodyweight Squats"
    ],
    sinonimos: [
      "Bodyweight Squats",
      "agachamentos com peso corporal",
      "fitness",
      "rotina matinal",
      "pausa ai"
    ],
    tags: [
      "agachamentos com peso corporal",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "treino funcional",
      "energia",
      "condicionamento",
      "corpo inteiro",
      "sem equipamentos",
      "ref_008",
      "rotina_matinal_funcional_corpo_inteiro"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro",
      "agachamentos com peso corporal",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "condicionamento funcional de corpo inteiro em casa",
      "energia, disposicao e inicio ativo do dia"
    ],
    quando_evitar: [
      "dor no peito",
      "falta de ar",
      "tontura",
      "pressao descontrolada",
      "lesao recente",
      "gravidez/pos-parto sem liberacao"
    ],
    objetivo_fisico: "condicionamento funcional de corpo inteiro em casa",
    objetivo_emocional: "energia, disposicao e inicio ativo do dia",
    imageFiles: [
      "fitness_morning_002_bodyweight_squats_step_01_standing.png",
      "fitness_morning_002_bodyweight_squats_step_02_descend.png",
      "fitness_morning_002_bodyweight_squats_step_03_squat_position.png",
      "fitness_morning_002_bodyweight_squats_step_04_common_mistake.png",
      "fitness_morning_002_bodyweight_squats_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_006_mov_05 se equivalente.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_008",
    id: "ref_008_mov_03",
    nome_pt: "Flexoes de braco",
    nome_original: "Push-ups",
    tipo: "exercicio funcional / fitness/rotina matinal",
    appCategory: "HOME_FUNCTIONAL",
    instructionType: "REPS_BASED",
    objetivo_principal: "Pode ajudar em treino matinal, condicionamento.",
    objetivos_secundarios: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro",
      "core",
      "pernas conforme exercicio",
      "condicionamento funcional de corpo inteiro em casa"
    ],
    descricao: "Pode ajudar em treino matinal, condicionamento.",
    beneficios: [
      "Pode ajudar em treino matinal, condicionamento.",
      "pode apoiar energia matinal e condicionamento",
      "pode contribuir para ativacao de corpo inteiro",
      "pode favorecer consistencia em treino em casa",
      "pode melhorar disposicao sem promessa estetica"
    ],
    como_fazer: "Executar Flexoes de braco com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Flexoes de braco com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Remover linguagem de fat loss/transformacao corporal."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "core",
      "pernas conforme exercicio"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "core",
      "pernas conforme exercicio"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "nenhum",
      "colchonete"
    ],
    nivel: "iniciante a intermediario",
    levelNumber: 3,
    intensidade: "MODERATE_PLUS",
    duracao: "30s + 10s descanso",
    durationSeconds: 90,
    sets: null,
    repeticoes: null,
    restSeconds: 10,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "flexoes de braco",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "treino funcional",
      "energia",
      "condicionamento",
      "corpo inteiro",
      "sem equipamentos",
      "Flexoes de braco",
      "Push-ups"
    ],
    sinonimos: [
      "Push-ups",
      "flexoes de braco",
      "fitness",
      "rotina matinal",
      "pausa ai"
    ],
    tags: [
      "flexoes de braco",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "treino funcional",
      "energia",
      "condicionamento",
      "corpo inteiro",
      "sem equipamentos",
      "ref_008",
      "rotina_matinal_funcional_corpo_inteiro"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro",
      "flexoes de braco",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "condicionamento funcional de corpo inteiro em casa",
      "energia, disposicao e inicio ativo do dia"
    ],
    quando_evitar: [
      "dor no peito",
      "falta de ar",
      "tontura",
      "pressao descontrolada",
      "lesao recente",
      "gravidez/pos-parto sem liberacao"
    ],
    objetivo_fisico: "condicionamento funcional de corpo inteiro em casa",
    objetivo_emocional: "energia, disposicao e inicio ativo do dia",
    imageFiles: [
      "fitness_morning_003_push_ups_step_01_high_plank.png",
      "fitness_morning_003_push_ups_step_02_lowering.png",
      "fitness_morning_003_push_ups_step_03_push_up.png",
      "fitness_morning_003_push_ups_step_04_common_mistake.png",
      "fitness_morning_003_push_ups_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_008",
    id: "ref_008_mov_04",
    nome_pt: "Pontes de gluteo",
    nome_original: "Glute Bridges",
    tipo: "exercicio funcional / fitness/rotina matinal",
    appCategory: "HOME_FUNCTIONAL",
    instructionType: "REPS_BASED",
    objetivo_principal: "Pode ajudar em treino matinal, condicionamento.",
    objetivos_secundarios: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro",
      "core",
      "pernas conforme exercicio",
      "condicionamento funcional de corpo inteiro em casa"
    ],
    descricao: "Pode ajudar em treino matinal, condicionamento.",
    beneficios: [
      "Pode ajudar em treino matinal, condicionamento.",
      "pode apoiar energia matinal e condicionamento",
      "pode contribuir para ativacao de corpo inteiro",
      "pode favorecer consistencia em treino em casa",
      "pode melhorar disposicao sem promessa estetica"
    ],
    como_fazer: "Executar Pontes de gluteo com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Pontes de gluteo com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Remover linguagem de fat loss/transformacao corporal."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "core",
      "pernas conforme exercicio"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "core",
      "pernas conforme exercicio"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "nenhum",
      "colchonete"
    ],
    nivel: "iniciante a intermediario",
    levelNumber: 3,
    intensidade: "MODERATE_PLUS",
    duracao: "30s + 10s descanso",
    durationSeconds: 90,
    sets: null,
    repeticoes: null,
    restSeconds: 10,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "pontes de gluteo",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "treino funcional",
      "energia",
      "condicionamento",
      "corpo inteiro",
      "sem equipamentos",
      "Pontes de gluteo",
      "Glute Bridges"
    ],
    sinonimos: [
      "Glute Bridges",
      "pontes de gluteo",
      "fitness",
      "rotina matinal",
      "pausa ai"
    ],
    tags: [
      "pontes de gluteo",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "treino funcional",
      "energia",
      "condicionamento",
      "corpo inteiro",
      "sem equipamentos",
      "ref_008",
      "rotina_matinal_funcional_corpo_inteiro"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro",
      "pontes de gluteo",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "condicionamento funcional de corpo inteiro em casa",
      "energia, disposicao e inicio ativo do dia"
    ],
    quando_evitar: [
      "dor no peito",
      "falta de ar",
      "tontura",
      "pressao descontrolada",
      "lesao recente",
      "gravidez/pos-parto sem liberacao"
    ],
    objetivo_fisico: "condicionamento funcional de corpo inteiro em casa",
    objetivo_emocional: "energia, disposicao e inicio ativo do dia",
    imageFiles: [
      "fitness_morning_004_glute_bridges_step_01_lie_down.png",
      "fitness_morning_004_glute_bridges_step_02_hips_lift.png",
      "fitness_morning_004_glute_bridges_step_03_final_bridge.png",
      "fitness_morning_004_glute_bridges_step_04_common_mistake.png",
      "fitness_morning_004_glute_bridges_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_004_mov_08 se ponte equivalente.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_008",
    id: "ref_008_mov_05",
    nome_pt: "Prancha",
    nome_original: "Plank",
    tipo: "exercicio funcional / fitness/rotina matinal",
    appCategory: "HOME_FUNCTIONAL",
    instructionType: "REPS_BASED",
    objetivo_principal: "Pode ajudar em treino matinal, condicionamento.",
    objetivos_secundarios: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro",
      "core",
      "pernas conforme exercicio",
      "condicionamento funcional de corpo inteiro em casa"
    ],
    descricao: "Pode ajudar em treino matinal, condicionamento.",
    beneficios: [
      "Pode ajudar em treino matinal, condicionamento.",
      "pode apoiar energia matinal e condicionamento",
      "pode contribuir para ativacao de corpo inteiro",
      "pode favorecer consistencia em treino em casa",
      "pode melhorar disposicao sem promessa estetica"
    ],
    como_fazer: "Executar Prancha com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Prancha com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Remover linguagem de fat loss/transformacao corporal."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "core",
      "pernas conforme exercicio"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "core",
      "pernas conforme exercicio"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "nenhum",
      "colchonete"
    ],
    nivel: "iniciante a intermediario",
    levelNumber: 3,
    intensidade: "MODERATE_PLUS",
    duracao: "30 segundos",
    durationSeconds: 90,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "prancha",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "treino funcional",
      "energia",
      "condicionamento",
      "corpo inteiro",
      "sem equipamentos",
      "Prancha",
      "Plank"
    ],
    sinonimos: [
      "Plank",
      "prancha",
      "fitness",
      "rotina matinal",
      "pausa ai"
    ],
    tags: [
      "prancha",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "treino funcional",
      "energia",
      "condicionamento",
      "corpo inteiro",
      "sem equipamentos",
      "ref_008",
      "rotina_matinal_funcional_corpo_inteiro"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro",
      "prancha",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "condicionamento funcional de corpo inteiro em casa",
      "energia, disposicao e inicio ativo do dia"
    ],
    quando_evitar: [
      "dor no peito",
      "falta de ar",
      "tontura",
      "pressao descontrolada",
      "lesao recente",
      "gravidez/pos-parto sem liberacao"
    ],
    objetivo_fisico: "condicionamento funcional de corpo inteiro em casa",
    objetivo_emocional: "energia, disposicao e inicio ativo do dia",
    imageFiles: [
      "fitness_morning_005_plank_step_01_setup.png",
      "fitness_morning_005_plank_step_02_legs_back.png",
      "fitness_morning_005_plank_step_03_final_hold.png",
      "fitness_morning_005_plank_step_04_common_mistake.png",
      "fitness_morning_005_plank_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_003_mov_05 se alta ou ref_006_mov_08 se antebraco.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_008",
    id: "ref_008_mov_06",
    nome_pt: "Escaladores",
    nome_original: "Mountain Climbers",
    tipo: "exercicio funcional / fitness/rotina matinal",
    appCategory: "HOME_FUNCTIONAL",
    instructionType: "REPS_BASED",
    objetivo_principal: "Pode ajudar em treino matinal, condicionamento.",
    objetivos_secundarios: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro",
      "core",
      "pernas conforme exercicio",
      "condicionamento funcional de corpo inteiro em casa"
    ],
    descricao: "Pode ajudar em treino matinal, condicionamento.",
    beneficios: [
      "Pode ajudar em treino matinal, condicionamento.",
      "pode apoiar energia matinal e condicionamento",
      "pode contribuir para ativacao de corpo inteiro",
      "pode favorecer consistencia em treino em casa",
      "pode melhorar disposicao sem promessa estetica"
    ],
    como_fazer: "Executar Escaladores com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Escaladores com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Remover linguagem de fat loss/transformacao corporal."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "core",
      "pernas conforme exercicio"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "core",
      "pernas conforme exercicio"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "nenhum",
      "colchonete"
    ],
    nivel: "iniciante a intermediario",
    levelNumber: 3,
    intensidade: "MODERATE_PLUS",
    duracao: "30s + 10s descanso",
    durationSeconds: 90,
    sets: null,
    repeticoes: null,
    restSeconds: 10,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "escaladores",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "treino funcional",
      "energia",
      "condicionamento",
      "corpo inteiro",
      "sem equipamentos",
      "Escaladores",
      "Mountain Climbers"
    ],
    sinonimos: [
      "Mountain Climbers",
      "escaladores",
      "fitness",
      "rotina matinal",
      "pausa ai"
    ],
    tags: [
      "escaladores",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "treino funcional",
      "energia",
      "condicionamento",
      "corpo inteiro",
      "sem equipamentos",
      "ref_008",
      "rotina_matinal_funcional_corpo_inteiro"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro",
      "escaladores",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "condicionamento funcional de corpo inteiro em casa",
      "energia, disposicao e inicio ativo do dia"
    ],
    quando_evitar: [
      "dor no peito",
      "falta de ar",
      "tontura",
      "pressao descontrolada",
      "lesao recente",
      "gravidez/pos-parto sem liberacao"
    ],
    objetivo_fisico: "condicionamento funcional de corpo inteiro em casa",
    objetivo_emocional: "energia, disposicao e inicio ativo do dia",
    imageFiles: [
      "fitness_morning_006_mountain_climbers_step_01_high_plank.png",
      "fitness_morning_006_mountain_climbers_step_02_knee_drive_right.png",
      "fitness_morning_006_mountain_climbers_step_03_knee_drive_left.png",
      "fitness_morning_006_mountain_climbers_step_04_common_mistake.png",
      "fitness_morning_006_mountain_climbers_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_008",
    id: "ref_008_mov_07",
    nome_pt: "Corrida parada com joelhos altos",
    nome_original: "High Knees",
    tipo: "exercicio funcional / fitness/rotina matinal",
    appCategory: "HOME_FUNCTIONAL",
    instructionType: "REPS_BASED",
    objetivo_principal: "Pode ajudar em treino matinal, condicionamento.",
    objetivos_secundarios: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro",
      "core",
      "pernas conforme exercicio",
      "condicionamento funcional de corpo inteiro em casa"
    ],
    descricao: "Pode ajudar em treino matinal, condicionamento.",
    beneficios: [
      "Pode ajudar em treino matinal, condicionamento.",
      "pode apoiar energia matinal e condicionamento",
      "pode contribuir para ativacao de corpo inteiro",
      "pode favorecer consistencia em treino em casa",
      "pode melhorar disposicao sem promessa estetica"
    ],
    como_fazer: "Executar Corrida parada com joelhos altos com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Corrida parada com joelhos altos com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Remover linguagem de fat loss/transformacao corporal."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "core",
      "pernas conforme exercicio"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "core",
      "pernas conforme exercicio"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "nenhum",
      "colchonete"
    ],
    nivel: "iniciante a intermediario",
    levelNumber: 3,
    intensidade: "MODERATE_PLUS",
    duracao: "30s + 10s descanso",
    durationSeconds: 90,
    sets: null,
    repeticoes: null,
    restSeconds: 10,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "corrida parada com joelhos altos",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "treino funcional",
      "energia",
      "condicionamento",
      "corpo inteiro",
      "sem equipamentos",
      "Corrida parada com joelhos altos",
      "High Knees"
    ],
    sinonimos: [
      "High Knees",
      "corrida parada com joelhos altos",
      "fitness",
      "rotina matinal",
      "pausa ai"
    ],
    tags: [
      "corrida parada com joelhos altos",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "treino funcional",
      "energia",
      "condicionamento",
      "corpo inteiro",
      "sem equipamentos",
      "ref_008",
      "rotina_matinal_funcional_corpo_inteiro"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro",
      "corrida parada com joelhos altos",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "condicionamento funcional de corpo inteiro em casa",
      "energia, disposicao e inicio ativo do dia"
    ],
    quando_evitar: [
      "dor no peito",
      "falta de ar",
      "tontura",
      "pressao descontrolada",
      "lesao recente",
      "gravidez/pos-parto sem liberacao"
    ],
    objetivo_fisico: "condicionamento funcional de corpo inteiro em casa",
    objetivo_emocional: "energia, disposicao e inicio ativo do dia",
    imageFiles: [
      "fitness_morning_007_high_knees_step_01_standing.png",
      "fitness_morning_007_high_knees_step_02_right_knee_up.png",
      "fitness_morning_007_high_knees_step_03_left_knee_up.png",
      "fitness_morning_007_high_knees_step_04_common_mistake.png",
      "fitness_morning_007_high_knees_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_008",
    id: "ref_008_mov_08",
    nome_pt: "Elevacao de pernas",
    nome_original: "Leg Raises",
    tipo: "exercicio funcional / fitness/rotina matinal",
    appCategory: "HOME_FUNCTIONAL",
    instructionType: "REPS_BASED",
    objetivo_principal: "Pode ajudar em treino matinal, condicionamento.",
    objetivos_secundarios: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro",
      "core",
      "pernas conforme exercicio",
      "condicionamento funcional de corpo inteiro em casa"
    ],
    descricao: "Pode ajudar em treino matinal, condicionamento.",
    beneficios: [
      "Pode ajudar em treino matinal, condicionamento.",
      "pode apoiar energia matinal e condicionamento",
      "pode contribuir para ativacao de corpo inteiro",
      "pode favorecer consistencia em treino em casa",
      "pode melhorar disposicao sem promessa estetica"
    ],
    como_fazer: "Executar Elevacao de pernas com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Elevacao de pernas com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Remover linguagem de fat loss/transformacao corporal."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "core",
      "pernas conforme exercicio"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "core",
      "pernas conforme exercicio"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "nenhum",
      "colchonete"
    ],
    nivel: "iniciante a intermediario",
    levelNumber: 3,
    intensidade: "MODERATE_PLUS",
    duracao: "30s + 10s descanso",
    durationSeconds: 90,
    sets: null,
    repeticoes: null,
    restSeconds: 10,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "elevacao de pernas",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "treino funcional",
      "energia",
      "condicionamento",
      "corpo inteiro",
      "sem equipamentos",
      "Elevacao de pernas",
      "Leg Raises"
    ],
    sinonimos: [
      "Leg Raises",
      "elevacao de pernas",
      "fitness",
      "rotina matinal",
      "pausa ai"
    ],
    tags: [
      "elevacao de pernas",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "treino funcional",
      "energia",
      "condicionamento",
      "corpo inteiro",
      "sem equipamentos",
      "ref_008",
      "rotina_matinal_funcional_corpo_inteiro"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro",
      "elevacao de pernas",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "condicionamento funcional de corpo inteiro em casa",
      "energia, disposicao e inicio ativo do dia"
    ],
    quando_evitar: [
      "dor no peito",
      "falta de ar",
      "tontura",
      "pressao descontrolada",
      "lesao recente",
      "gravidez/pos-parto sem liberacao"
    ],
    objetivo_fisico: "condicionamento funcional de corpo inteiro em casa",
    objetivo_emocional: "energia, disposicao e inicio ativo do dia",
    imageFiles: [
      "fitness_morning_008_leg_raises_step_01_lie_down.png",
      "fitness_morning_008_leg_raises_step_02_legs_raise.png",
      "fitness_morning_008_leg_raises_step_03_lower_control.png",
      "fitness_morning_008_leg_raises_step_04_common_mistake.png",
      "fitness_morning_008_leg_raises_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_008",
    id: "ref_008_mov_09",
    nome_pt: "Abdominal bicicleta",
    nome_original: "Bicycle Crunches",
    tipo: "exercicio funcional / fitness/rotina matinal",
    appCategory: "HOME_FUNCTIONAL",
    instructionType: "REPS_BASED",
    objetivo_principal: "Pode ajudar em treino matinal, condicionamento.",
    objetivos_secundarios: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro",
      "core",
      "pernas conforme exercicio",
      "condicionamento funcional de corpo inteiro em casa"
    ],
    descricao: "Pode ajudar em treino matinal, condicionamento.",
    beneficios: [
      "Pode ajudar em treino matinal, condicionamento.",
      "pode apoiar energia matinal e condicionamento",
      "pode contribuir para ativacao de corpo inteiro",
      "pode favorecer consistencia em treino em casa",
      "pode melhorar disposicao sem promessa estetica"
    ],
    como_fazer: "Executar Abdominal bicicleta com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Abdominal bicicleta com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Remover linguagem de fat loss/transformacao corporal."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "core",
      "pernas conforme exercicio"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "core",
      "pernas conforme exercicio"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "nenhum",
      "colchonete"
    ],
    nivel: "iniciante a intermediario",
    levelNumber: 3,
    intensidade: "MODERATE_PLUS",
    duracao: "30s + 10s descanso",
    durationSeconds: 90,
    sets: null,
    repeticoes: null,
    restSeconds: 10,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "abdominal bicicleta",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "treino funcional",
      "energia",
      "condicionamento",
      "corpo inteiro",
      "sem equipamentos",
      "Abdominal bicicleta",
      "Bicycle Crunches"
    ],
    sinonimos: [
      "Bicycle Crunches",
      "abdominal bicicleta",
      "fitness",
      "rotina matinal",
      "pausa ai"
    ],
    tags: [
      "abdominal bicicleta",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "treino funcional",
      "energia",
      "condicionamento",
      "corpo inteiro",
      "sem equipamentos",
      "ref_008",
      "rotina_matinal_funcional_corpo_inteiro"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro",
      "abdominal bicicleta",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "condicionamento funcional de corpo inteiro em casa",
      "energia, disposicao e inicio ativo do dia"
    ],
    quando_evitar: [
      "dor no peito",
      "falta de ar",
      "tontura",
      "pressao descontrolada",
      "lesao recente",
      "gravidez/pos-parto sem liberacao"
    ],
    objetivo_fisico: "condicionamento funcional de corpo inteiro em casa",
    objetivo_emocional: "energia, disposicao e inicio ativo do dia",
    imageFiles: [
      "fitness_morning_009_bicycle_crunches_step_01_start.png",
      "fitness_morning_009_bicycle_crunches_step_02_right_cross.png",
      "fitness_morning_009_bicycle_crunches_step_03_left_cross.png",
      "fitness_morning_009_bicycle_crunches_step_04_common_mistake.png",
      "fitness_morning_009_bicycle_crunches_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_006_mov_02; nao gerar.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_008",
    id: "ref_008_mov_10",
    nome_pt: "Burpees",
    nome_original: "Burpees",
    tipo: "exercicio funcional / fitness/rotina matinal",
    appCategory: "HOME_FUNCTIONAL",
    instructionType: "REPS_BASED",
    objetivo_principal: "Pode ajudar em treino matinal, condicionamento.",
    objetivos_secundarios: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro",
      "core",
      "pernas conforme exercicio",
      "condicionamento funcional de corpo inteiro em casa"
    ],
    descricao: "Pode ajudar em treino matinal, condicionamento.",
    beneficios: [
      "Pode ajudar em treino matinal, condicionamento.",
      "pode apoiar energia matinal e condicionamento",
      "pode contribuir para ativacao de corpo inteiro",
      "pode favorecer consistencia em treino em casa",
      "pode melhorar disposicao sem promessa estetica"
    ],
    como_fazer: "Executar Burpees com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Burpees com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Remover linguagem de fat loss/transformacao corporal."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "core",
      "pernas conforme exercicio"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "core",
      "pernas conforme exercicio"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "nenhum",
      "colchonete"
    ],
    nivel: "iniciante a intermediario",
    levelNumber: 3,
    intensidade: "MODERATE_PLUS",
    duracao: "30s + 10s descanso",
    durationSeconds: 90,
    sets: null,
    repeticoes: null,
    restSeconds: 10,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "burpees",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "treino funcional",
      "energia",
      "condicionamento",
      "corpo inteiro",
      "sem equipamentos",
      "Burpees"
    ],
    sinonimos: [
      "Burpees",
      "burpees",
      "fitness",
      "rotina matinal",
      "pausa ai"
    ],
    tags: [
      "burpees",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "treino funcional",
      "energia",
      "condicionamento",
      "corpo inteiro",
      "sem equipamentos",
      "ref_008",
      "rotina_matinal_funcional_corpo_inteiro"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "treino de manha",
      "cardio em casa",
      "condicionamento",
      "corpo inteiro",
      "burpees",
      "fitness",
      "rotina matinal",
      "pausa ai",
      "condicionamento funcional de corpo inteiro em casa",
      "energia, disposicao e inicio ativo do dia"
    ],
    quando_evitar: [
      "dor no peito",
      "falta de ar",
      "tontura",
      "pressao descontrolada",
      "lesao recente",
      "gravidez/pos-parto sem liberacao"
    ],
    objetivo_fisico: "condicionamento funcional de corpo inteiro em casa",
    objetivo_emocional: "energia, disposicao e inicio ativo do dia",
    imageFiles: [
      "fitness_morning_010_burpees_step_01_standing.png",
      "fitness_morning_010_burpees_step_02_squat_hands_down.png",
      "fitness_morning_010_burpees_step_03_plank.png",
      "fitness_morning_010_burpees_step_04_return_stand.png",
      "fitness_morning_010_burpees_step_05_common_mistake.png",
      "fitness_morning_010_burpees_step_06_correction.png"
    ],
    visual_reuse: "GERAR_NOVO.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_009",
    id: "ref_009_mov_01",
    nome_pt: "Alongamento com toalha",
    nome_original: "Alongamento com Toalha",
    tipo: "mobilidade/alongamento/automassagem / pe/tornozelo/autocuidado",
    appCategory: "MOBILITY",
    instructionType: "STRETCHING",
    objetivo_principal: "Pode ajudar em pes cansados, tensao na sola do pe.",
    objetivos_secundarios: [
      "pes cansados",
      "tensao na sola",
      "rigidez ao acordar",
      "panturrilha rigida",
      "pe",
      "tornozelo",
      "panturrilha",
      "fascia plantar"
    ],
    descricao: "Pode ajudar em pes cansados, tensao na sola do pe.",
    beneficios: [
      "Pode ajudar em pes cansados, tensao na sola do pe.",
      "pode apoiar conforto dos pes e panturrilhas",
      "pode contribuir para autocuidado leve da fascia plantar",
      "pode favorecer mobilidade de tornozelo e sola do pe",
      "pode ajudar em rotina gentil para pes cansados"
    ],
    como_fazer: "Executar Alongamento com toalha com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Alongamento com toalha com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "pes cansados",
      "tensao na sola",
      "rigidez ao acordar",
      "panturrilha rigida"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura/tratamento de fascite plantar."
    ],
    regioes_corporais: [
      "pe",
      "tornozelo",
      "panturrilha",
      "fascia plantar"
    ],
    grupos_musculares: [
      "pe",
      "tornozelo",
      "panturrilha",
      "fascia plantar"
    ],
    articulacoes: [
      "pes",
      "tornozelos",
      "joelhos"
    ],
    equipamentos: [
      "toalha",
      "bola",
      "parede conforme exercicio"
    ],
    nivel: "iniciante",
    levelNumber: 1,
    intensidade: "LIGHT",
    duracao: "30s, repetir 3 vezes",
    durationSeconds: 90,
    sets: 3,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e relaxada",
    palavras_chave: [
      "alongamento com toalha",
      "pe",
      "tornozelo",
      "autocuidado",
      "pausa ai",
      "fascia plantar",
      "panturrilha",
      "pes cansados",
      "Alongamento com toalha",
      "Alongamento com Toalha"
    ],
    sinonimos: [
      "Alongamento com Toalha",
      "alongamento com toalha",
      "pe",
      "tornozelo",
      "autocuidado",
      "pausa ai"
    ],
    tags: [
      "alongamento com toalha",
      "pe",
      "tornozelo",
      "autocuidado",
      "pausa ai",
      "fascia plantar",
      "panturrilha",
      "pes cansados",
      "ref_009",
      "cuidados_fascia_plantar_pes"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "pes cansados",
      "tensao na sola",
      "rigidez ao acordar",
      "panturrilha rigida",
      "alongamento com toalha",
      "pe",
      "tornozelo",
      "autocuidado",
      "pausa ai",
      "autocuidado dos pes, tornozelos e panturrilhas",
      "cuidado gentil, alivio subjetivo e atencao aos pes"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "feridas",
      "diabetes com perda de sensibilidade",
      "inchaco/vermelhidao/calor",
      "nao consegue apoiar o pe"
    ],
    objetivo_fisico: "autocuidado dos pes, tornozelos e panturrilhas",
    objetivo_emocional: "cuidado gentil, alivio subjetivo e atencao aos pes",
    imageFiles: [
      "foot_plantar_001_toalha_step_01_start.png",
      "foot_plantar_001_toalha_step_02_towel_loop.png",
      "foot_plantar_001_toalha_step_03_gentle_pull.png",
      "foot_plantar_001_toalha_step_04_common_mistake.png",
      "foot_plantar_001_toalha_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO_CANONICO; colecao especifica de pes.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_009",
    id: "ref_009_mov_02",
    nome_pt: "Alongamento da panturrilha",
    nome_original: "Alongamento da Panturrilha",
    tipo: "mobilidade/alongamento/automassagem / pe/tornozelo/autocuidado",
    appCategory: "MOBILITY",
    instructionType: "STRETCHING",
    objetivo_principal: "Pode ajudar em pes cansados, tensao na sola do pe.",
    objetivos_secundarios: [
      "pes cansados",
      "tensao na sola",
      "rigidez ao acordar",
      "panturrilha rigida",
      "pe",
      "tornozelo",
      "panturrilha",
      "fascia plantar"
    ],
    descricao: "Pode ajudar em pes cansados, tensao na sola do pe.",
    beneficios: [
      "Pode ajudar em pes cansados, tensao na sola do pe.",
      "pode apoiar conforto dos pes e panturrilhas",
      "pode contribuir para autocuidado leve da fascia plantar",
      "pode favorecer mobilidade de tornozelo e sola do pe",
      "pode ajudar em rotina gentil para pes cansados"
    ],
    como_fazer: "Executar Alongamento da panturrilha com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Alongamento da panturrilha com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "pes cansados",
      "tensao na sola",
      "rigidez ao acordar",
      "panturrilha rigida"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura/tratamento de fascite plantar."
    ],
    regioes_corporais: [
      "pe",
      "tornozelo",
      "panturrilha",
      "fascia plantar"
    ],
    grupos_musculares: [
      "pe",
      "tornozelo",
      "panturrilha",
      "fascia plantar"
    ],
    articulacoes: [
      "pes",
      "tornozelos",
      "joelhos"
    ],
    equipamentos: [
      "toalha",
      "bola",
      "parede conforme exercicio"
    ],
    nivel: "iniciante",
    levelNumber: 1,
    intensidade: "LIGHT",
    duracao: "30s, repetir 3 vezes",
    durationSeconds: 90,
    sets: 3,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e relaxada",
    palavras_chave: [
      "alongamento da panturrilha",
      "pe",
      "tornozelo",
      "autocuidado",
      "pausa ai",
      "fascia plantar",
      "panturrilha",
      "pes cansados",
      "Alongamento da panturrilha",
      "Alongamento da Panturrilha"
    ],
    sinonimos: [
      "Alongamento da Panturrilha",
      "alongamento da panturrilha",
      "pe",
      "tornozelo",
      "autocuidado",
      "pausa ai"
    ],
    tags: [
      "alongamento da panturrilha",
      "pe",
      "tornozelo",
      "autocuidado",
      "pausa ai",
      "fascia plantar",
      "panturrilha",
      "pes cansados",
      "ref_009",
      "cuidados_fascia_plantar_pes"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "pes cansados",
      "tensao na sola",
      "rigidez ao acordar",
      "panturrilha rigida",
      "alongamento da panturrilha",
      "pe",
      "tornozelo",
      "autocuidado",
      "pausa ai",
      "autocuidado dos pes, tornozelos e panturrilhas",
      "cuidado gentil, alivio subjetivo e atencao aos pes"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "feridas",
      "diabetes com perda de sensibilidade",
      "inchaco/vermelhidao/calor",
      "nao consegue apoiar o pe"
    ],
    objetivo_fisico: "autocuidado dos pes, tornozelos e panturrilhas",
    objetivo_emocional: "cuidado gentil, alivio subjetivo e atencao aos pes",
    imageFiles: [
      "foot_plantar_002_panturrilha_parede_step_01_wall_setup.png",
      "foot_plantar_002_panturrilha_parede_step_02_step_back.png",
      "foot_plantar_002_panturrilha_parede_step_03_final_stretch.png",
      "foot_plantar_002_panturrilha_parede_step_04_common_mistake.png",
      "foot_plantar_002_panturrilha_parede_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO_CANONICO; colecao especifica de pes.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_009",
    id: "ref_009_mov_03",
    nome_pt: "Massagem com bola",
    nome_original: "Massagem com Bola",
    tipo: "mobilidade/alongamento/automassagem / pe/tornozelo/autocuidado",
    appCategory: "MOBILITY",
    instructionType: "STRETCHING",
    objetivo_principal: "Pode ajudar em pes cansados, tensao na sola do pe.",
    objetivos_secundarios: [
      "pes cansados",
      "tensao na sola",
      "rigidez ao acordar",
      "panturrilha rigida",
      "pe",
      "tornozelo",
      "panturrilha",
      "fascia plantar"
    ],
    descricao: "Pode ajudar em pes cansados, tensao na sola do pe.",
    beneficios: [
      "Pode ajudar em pes cansados, tensao na sola do pe.",
      "pode apoiar conforto dos pes e panturrilhas",
      "pode contribuir para autocuidado leve da fascia plantar",
      "pode favorecer mobilidade de tornozelo e sola do pe",
      "pode ajudar em rotina gentil para pes cansados"
    ],
    como_fazer: "Executar Massagem com bola com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Massagem com bola com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "pes cansados",
      "tensao na sola",
      "rigidez ao acordar",
      "panturrilha rigida"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura/tratamento de fascite plantar."
    ],
    regioes_corporais: [
      "pe",
      "tornozelo",
      "panturrilha",
      "fascia plantar"
    ],
    grupos_musculares: [
      "pe",
      "tornozelo",
      "panturrilha",
      "fascia plantar"
    ],
    articulacoes: [
      "pes",
      "tornozelos",
      "joelhos"
    ],
    equipamentos: [
      "toalha",
      "bola",
      "parede conforme exercicio"
    ],
    nivel: "iniciante",
    levelNumber: 1,
    intensidade: "LIGHT",
    duracao: "1 a 2 minutos, ambos os pes",
    durationSeconds: 120,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e relaxada",
    palavras_chave: [
      "massagem com bola",
      "pe",
      "tornozelo",
      "autocuidado",
      "pausa ai",
      "fascia plantar",
      "panturrilha",
      "pes cansados",
      "Massagem com bola",
      "Massagem com Bola"
    ],
    sinonimos: [
      "Massagem com Bola",
      "massagem com bola",
      "pe",
      "tornozelo",
      "autocuidado",
      "pausa ai"
    ],
    tags: [
      "massagem com bola",
      "pe",
      "tornozelo",
      "autocuidado",
      "pausa ai",
      "fascia plantar",
      "panturrilha",
      "pes cansados",
      "ref_009",
      "cuidados_fascia_plantar_pes"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "pes cansados",
      "tensao na sola",
      "rigidez ao acordar",
      "panturrilha rigida",
      "massagem com bola",
      "pe",
      "tornozelo",
      "autocuidado",
      "pausa ai",
      "autocuidado dos pes, tornozelos e panturrilhas",
      "cuidado gentil, alivio subjetivo e atencao aos pes"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "feridas",
      "diabetes com perda de sensibilidade",
      "inchaco/vermelhidao/calor",
      "nao consegue apoiar o pe"
    ],
    objetivo_fisico: "autocuidado dos pes, tornozelos e panturrilhas",
    objetivo_emocional: "cuidado gentil, alivio subjetivo e atencao aos pes",
    imageFiles: [
      "foot_plantar_003_massagem_bola_step_01_ball_setup.png",
      "foot_plantar_003_massagem_bola_step_02_roll_forward_back.png",
      "foot_plantar_003_massagem_bola_step_03_other_foot.png",
      "foot_plantar_003_massagem_bola_step_04_common_mistake.png",
      "foot_plantar_003_massagem_bola_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO_CANONICO; colecao especifica de pes.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_009",
    id: "ref_009_mov_04",
    nome_pt: "Enrolar os dedos",
    nome_original: "Enrolar os Dedos",
    tipo: "mobilidade/alongamento/automassagem / pe/tornozelo/autocuidado",
    appCategory: "MOBILITY",
    instructionType: "STRETCHING",
    objetivo_principal: "Pode ajudar em pes cansados, tensao na sola do pe.",
    objetivos_secundarios: [
      "pes cansados",
      "tensao na sola",
      "rigidez ao acordar",
      "panturrilha rigida",
      "pe",
      "tornozelo",
      "panturrilha",
      "fascia plantar"
    ],
    descricao: "Pode ajudar em pes cansados, tensao na sola do pe.",
    beneficios: [
      "Pode ajudar em pes cansados, tensao na sola do pe.",
      "pode apoiar conforto dos pes e panturrilhas",
      "pode contribuir para autocuidado leve da fascia plantar",
      "pode favorecer mobilidade de tornozelo e sola do pe",
      "pode ajudar em rotina gentil para pes cansados"
    ],
    como_fazer: "Executar Enrolar os dedos com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Enrolar os dedos com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "pes cansados",
      "tensao na sola",
      "rigidez ao acordar",
      "panturrilha rigida"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura/tratamento de fascite plantar."
    ],
    regioes_corporais: [
      "pe",
      "tornozelo",
      "panturrilha",
      "fascia plantar"
    ],
    grupos_musculares: [
      "pe",
      "tornozelo",
      "panturrilha",
      "fascia plantar"
    ],
    articulacoes: [
      "pes",
      "tornozelos",
      "joelhos"
    ],
    equipamentos: [
      "toalha",
      "bola",
      "parede conforme exercicio"
    ],
    nivel: "iniciante",
    levelNumber: 1,
    intensidade: "LIGHT",
    duracao: "10 repeticoes por pe",
    durationSeconds: 120,
    sets: null,
    repeticoes: "10 repeticoes",
    restSeconds: null,
    respiracao: "lenta e relaxada",
    palavras_chave: [
      "enrolar os dedos",
      "pe",
      "tornozelo",
      "autocuidado",
      "pausa ai",
      "fascia plantar",
      "panturrilha",
      "pes cansados",
      "Enrolar os dedos",
      "Enrolar os Dedos"
    ],
    sinonimos: [
      "Enrolar os Dedos",
      "enrolar os dedos",
      "pe",
      "tornozelo",
      "autocuidado",
      "pausa ai"
    ],
    tags: [
      "enrolar os dedos",
      "pe",
      "tornozelo",
      "autocuidado",
      "pausa ai",
      "fascia plantar",
      "panturrilha",
      "pes cansados",
      "ref_009",
      "cuidados_fascia_plantar_pes"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "pes cansados",
      "tensao na sola",
      "rigidez ao acordar",
      "panturrilha rigida",
      "enrolar os dedos",
      "pe",
      "tornozelo",
      "autocuidado",
      "pausa ai",
      "autocuidado dos pes, tornozelos e panturrilhas",
      "cuidado gentil, alivio subjetivo e atencao aos pes"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "feridas",
      "diabetes com perda de sensibilidade",
      "inchaco/vermelhidao/calor",
      "nao consegue apoiar o pe"
    ],
    objetivo_fisico: "autocuidado dos pes, tornozelos e panturrilhas",
    objetivo_emocional: "cuidado gentil, alivio subjetivo e atencao aos pes",
    imageFiles: [
      "foot_plantar_004_enrolar_dedos_step_01_towel_floor.png",
      "foot_plantar_004_enrolar_dedos_step_02_toes_grip.png",
      "foot_plantar_004_enrolar_dedos_step_03_towel_pull.png",
      "foot_plantar_004_enrolar_dedos_step_04_common_mistake.png",
      "foot_plantar_004_enrolar_dedos_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO_CANONICO; colecao especifica de pes.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_009",
    id: "ref_009_mov_05",
    nome_pt: "Alongamento da fascia plantar",
    nome_original: "Alongamento da Fascia Plantar",
    tipo: "mobilidade/alongamento/automassagem / pe/tornozelo/autocuidado",
    appCategory: "MOBILITY",
    instructionType: "STRETCHING",
    objetivo_principal: "Pode ajudar em pes cansados, tensao na sola do pe.",
    objetivos_secundarios: [
      "pes cansados",
      "tensao na sola",
      "rigidez ao acordar",
      "panturrilha rigida",
      "pe",
      "tornozelo",
      "panturrilha",
      "fascia plantar"
    ],
    descricao: "Pode ajudar em pes cansados, tensao na sola do pe.",
    beneficios: [
      "Pode ajudar em pes cansados, tensao na sola do pe.",
      "pode apoiar conforto dos pes e panturrilhas",
      "pode contribuir para autocuidado leve da fascia plantar",
      "pode favorecer mobilidade de tornozelo e sola do pe",
      "pode ajudar em rotina gentil para pes cansados"
    ],
    como_fazer: "Executar Alongamento da fascia plantar com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Alongamento da fascia plantar com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "pes cansados",
      "tensao na sola",
      "rigidez ao acordar",
      "panturrilha rigida"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura/tratamento de fascite plantar."
    ],
    regioes_corporais: [
      "pe",
      "tornozelo",
      "panturrilha",
      "fascia plantar"
    ],
    grupos_musculares: [
      "pe",
      "tornozelo",
      "panturrilha",
      "fascia plantar"
    ],
    articulacoes: [
      "pes",
      "tornozelos",
      "joelhos"
    ],
    equipamentos: [
      "toalha",
      "bola",
      "parede conforme exercicio"
    ],
    nivel: "iniciante",
    levelNumber: 1,
    intensidade: "LIGHT",
    duracao: "30s, repetir 3 vezes por pe",
    durationSeconds: 90,
    sets: 3,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e relaxada",
    palavras_chave: [
      "alongamento da fascia plantar",
      "pe",
      "tornozelo",
      "autocuidado",
      "pausa ai",
      "fascia plantar",
      "panturrilha",
      "pes cansados",
      "Alongamento da fascia plantar",
      "Alongamento da Fascia Plantar"
    ],
    sinonimos: [
      "Alongamento da Fascia Plantar",
      "alongamento da fascia plantar",
      "pe",
      "tornozelo",
      "autocuidado",
      "pausa ai"
    ],
    tags: [
      "alongamento da fascia plantar",
      "pe",
      "tornozelo",
      "autocuidado",
      "pausa ai",
      "fascia plantar",
      "panturrilha",
      "pes cansados",
      "ref_009",
      "cuidados_fascia_plantar_pes"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "pes cansados",
      "tensao na sola",
      "rigidez ao acordar",
      "panturrilha rigida",
      "alongamento da fascia plantar",
      "pe",
      "tornozelo",
      "autocuidado",
      "pausa ai",
      "autocuidado dos pes, tornozelos e panturrilhas",
      "cuidado gentil, alivio subjetivo e atencao aos pes"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "feridas",
      "diabetes com perda de sensibilidade",
      "inchaco/vermelhidao/calor",
      "nao consegue apoiar o pe"
    ],
    objetivo_fisico: "autocuidado dos pes, tornozelos e panturrilhas",
    objetivo_emocional: "cuidado gentil, alivio subjetivo e atencao aos pes",
    imageFiles: [
      "foot_plantar_005_fascia_plantar_step_01_seated_foot_access.png",
      "foot_plantar_005_fascia_plantar_step_02_toes_pull_back.png",
      "foot_plantar_005_fascia_plantar_step_03_final_stretch.png",
      "foot_plantar_005_fascia_plantar_step_04_common_mistake.png",
      "foot_plantar_005_fascia_plantar_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO_CANONICO; colecao especifica de pes.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_009",
    id: "ref_009_mov_06",
    nome_pt: "Elevacao de calcanhares",
    nome_original: "Elevacao de Calcanhares",
    tipo: "mobilidade/alongamento/automassagem / pe/tornozelo/autocuidado",
    appCategory: "MOBILITY",
    instructionType: "STRETCHING",
    objetivo_principal: "Pode ajudar em pes cansados, tensao na sola do pe.",
    objetivos_secundarios: [
      "pes cansados",
      "tensao na sola",
      "rigidez ao acordar",
      "panturrilha rigida",
      "pe",
      "tornozelo",
      "panturrilha",
      "fascia plantar"
    ],
    descricao: "Pode ajudar em pes cansados, tensao na sola do pe.",
    beneficios: [
      "Pode ajudar em pes cansados, tensao na sola do pe.",
      "pode apoiar conforto dos pes e panturrilhas",
      "pode contribuir para autocuidado leve da fascia plantar",
      "pode favorecer mobilidade de tornozelo e sola do pe",
      "pode ajudar em rotina gentil para pes cansados"
    ],
    como_fazer: "Executar Elevacao de calcanhares com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Elevacao de calcanhares com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "pes cansados",
      "tensao na sola",
      "rigidez ao acordar",
      "panturrilha rigida"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura/tratamento de fascite plantar."
    ],
    regioes_corporais: [
      "pe",
      "tornozelo",
      "panturrilha",
      "fascia plantar"
    ],
    grupos_musculares: [
      "pe",
      "tornozelo",
      "panturrilha",
      "fascia plantar"
    ],
    articulacoes: [
      "pes",
      "tornozelos",
      "joelhos"
    ],
    equipamentos: [
      "toalha",
      "bola",
      "parede conforme exercicio"
    ],
    nivel: "iniciante",
    levelNumber: 1,
    intensidade: "LIGHT",
    duracao: "3 series de 10 repeticoes",
    durationSeconds: 60,
    sets: 3,
    repeticoes: "10 repeticoes",
    restSeconds: null,
    respiracao: "lenta e relaxada",
    palavras_chave: [
      "elevacao de calcanhares",
      "pe",
      "tornozelo",
      "autocuidado",
      "pausa ai",
      "fascia plantar",
      "panturrilha",
      "pes cansados",
      "Elevacao de calcanhares",
      "Elevacao de Calcanhares"
    ],
    sinonimos: [
      "Elevacao de Calcanhares",
      "elevacao de calcanhares",
      "pe",
      "tornozelo",
      "autocuidado",
      "pausa ai"
    ],
    tags: [
      "elevacao de calcanhares",
      "pe",
      "tornozelo",
      "autocuidado",
      "pausa ai",
      "fascia plantar",
      "panturrilha",
      "pes cansados",
      "ref_009",
      "cuidados_fascia_plantar_pes"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "pes cansados",
      "tensao na sola",
      "rigidez ao acordar",
      "panturrilha rigida",
      "elevacao de calcanhares",
      "pe",
      "tornozelo",
      "autocuidado",
      "pausa ai",
      "autocuidado dos pes, tornozelos e panturrilhas",
      "cuidado gentil, alivio subjetivo e atencao aos pes"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "feridas",
      "diabetes com perda de sensibilidade",
      "inchaco/vermelhidao/calor",
      "nao consegue apoiar o pe"
    ],
    objetivo_fisico: "autocuidado dos pes, tornozelos e panturrilhas",
    objetivo_emocional: "cuidado gentil, alivio subjetivo e atencao aos pes",
    imageFiles: [
      "foot_plantar_006_elevacao_calcanhares_step_01_standing.png",
      "foot_plantar_006_elevacao_calcanhares_step_02_heels_up.png",
      "foot_plantar_006_elevacao_calcanhares_step_03_slow_lower.png",
      "foot_plantar_006_elevacao_calcanhares_step_04_common_mistake.png",
      "foot_plantar_006_elevacao_calcanhares_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO_CANONICO; colecao especifica de pes.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_010",
    id: "ref_010_mov_01",
    nome_pt: "Gato-vaca",
    nome_original: "Cat-Cow",
    tipo: "mobilidade/alongamento/fortalecimento leve / mobilidade/costas",
    appCategory: "MOBILITY",
    instructionType: "STRETCHING",
    objetivo_principal: "Pode ajudar em dor leve/desconforto nas costas, rigidez lombar.",
    objetivos_secundarios: [
      "costas rigidas",
      "dor leve nas costas",
      "lombar cansada",
      "postura",
      "coluna",
      "lombar",
      "quadril",
      "core"
    ],
    descricao: "Pode ajudar em dor leve/desconforto nas costas, rigidez lombar.",
    beneficios: [
      "Pode ajudar em dor leve/desconforto nas costas, rigidez lombar.",
      "pode apoiar conforto leve das costas",
      "pode contribuir para mobilidade lombar e de coluna",
      "pode favorecer relaxamento corporal",
      "pode ajudar apos longos periodos sentado"
    ],
    como_fazer: "Executar Gato-vaca com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Gato-vaca com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "costas rigidas",
      "dor leve nas costas",
      "lombar cansada",
      "postura"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura ou tratamento de dor lombar."
    ],
    regioes_corporais: [
      "coluna",
      "lombar",
      "quadril",
      "core"
    ],
    grupos_musculares: [
      "coluna",
      "lombar",
      "quadril",
      "core"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "iniciante",
    levelNumber: 1,
    intensidade: "LIGHT",
    duracao: "8 a 10 repeticoes lentas",
    durationSeconds: 120,
    sets: null,
    repeticoes: "8 a 10 repeticoes",
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "gato-vaca",
      "mobilidade",
      "costas",
      "pausa ai",
      "lombar",
      "coluna",
      "relaxamento",
      "muito tempo sentado",
      "Gato-vaca",
      "Cat-Cow"
    ],
    sinonimos: [
      "Cat-Cow",
      "gato-vaca",
      "mobilidade",
      "costas",
      "pausa ai"
    ],
    tags: [
      "gato-vaca",
      "mobilidade",
      "costas",
      "pausa ai",
      "lombar",
      "coluna",
      "relaxamento",
      "muito tempo sentado",
      "ref_010",
      "rotina_conforto_costas_mobilidade_coluna"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "costas rigidas",
      "dor leve nas costas",
      "lombar cansada",
      "postura",
      "gato-vaca",
      "mobilidade",
      "costas",
      "pausa ai",
      "conforto leve das costas e mobilidade lombar",
      "relaxamento, tranquilidade e reconexao com o corpo"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "dor irradiando",
      "perda de forca",
      "perda controle urinario/intestino",
      "febre",
      "trauma"
    ],
    objetivo_fisico: "conforto leve das costas e mobilidade lombar",
    objetivo_emocional: "relaxamento, tranquilidade e reconexao com o corpo",
    imageFiles: [
      "spine_backpain_001_cat_cow_step_01_tabletop.png",
      "spine_backpain_001_cat_cow_step_02_cow_pose.png",
      "spine_backpain_001_cat_cow_step_03_cat_pose.png",
      "spine_backpain_001_cat_cow_step_04_common_mistake.png",
      "spine_backpain_001_cat_cow_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_004_mov_05/ref_004_mov_06 ou ref_007_mov_01.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_010",
    id: "ref_010_mov_02",
    nome_pt: "Postura da crianca",
    nome_original: "Child's Pose",
    tipo: "mobilidade/alongamento/fortalecimento leve / mobilidade/costas",
    appCategory: "MOBILITY",
    instructionType: "STRETCHING",
    objetivo_principal: "Pode ajudar em dor leve/desconforto nas costas, rigidez lombar.",
    objetivos_secundarios: [
      "costas rigidas",
      "dor leve nas costas",
      "lombar cansada",
      "postura",
      "coluna",
      "lombar",
      "quadril",
      "core"
    ],
    descricao: "Pode ajudar em dor leve/desconforto nas costas, rigidez lombar.",
    beneficios: [
      "Pode ajudar em dor leve/desconforto nas costas, rigidez lombar.",
      "pode apoiar conforto leve das costas",
      "pode contribuir para mobilidade lombar e de coluna",
      "pode favorecer relaxamento corporal",
      "pode ajudar apos longos periodos sentado"
    ],
    como_fazer: "Executar Postura da crianca com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Postura da crianca com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "costas rigidas",
      "dor leve nas costas",
      "lombar cansada",
      "postura"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura ou tratamento de dor lombar."
    ],
    regioes_corporais: [
      "coluna",
      "lombar",
      "quadril",
      "core"
    ],
    grupos_musculares: [
      "coluna",
      "lombar",
      "quadril",
      "core"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "iniciante",
    levelNumber: 1,
    intensidade: "LIGHT",
    duracao: "30 a 90 segundos",
    durationSeconds: 270,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "postura da crianca",
      "mobilidade",
      "costas",
      "pausa ai",
      "lombar",
      "coluna",
      "relaxamento",
      "muito tempo sentado",
      "Postura da crianca",
      "Child's Pose"
    ],
    sinonimos: [
      "Child's Pose",
      "postura da crianca",
      "mobilidade",
      "costas",
      "pausa ai"
    ],
    tags: [
      "postura da crianca",
      "mobilidade",
      "costas",
      "pausa ai",
      "lombar",
      "coluna",
      "relaxamento",
      "muito tempo sentado",
      "ref_010",
      "rotina_conforto_costas_mobilidade_coluna"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "costas rigidas",
      "dor leve nas costas",
      "lombar cansada",
      "postura",
      "postura da crianca",
      "mobilidade",
      "costas",
      "pausa ai",
      "conforto leve das costas e mobilidade lombar",
      "relaxamento, tranquilidade e reconexao com o corpo"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "dor irradiando",
      "perda de forca",
      "perda controle urinario/intestino",
      "febre",
      "trauma"
    ],
    objetivo_fisico: "conforto leve das costas e mobilidade lombar",
    objetivo_emocional: "relaxamento, tranquilidade e reconexao com o corpo",
    imageFiles: [
      "spine_backpain_002_child_pose_step_01_kneeling.png",
      "spine_backpain_002_child_pose_step_02_sit_back.png",
      "spine_backpain_002_child_pose_step_03_final.png",
      "spine_backpain_002_child_pose_step_04_common_mistake.png",
      "spine_backpain_002_child_pose_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_004_mov_04.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_010",
    id: "ref_010_mov_03",
    nome_pt: "Cao-passaro",
    nome_original: "Bird Dog",
    tipo: "mobilidade/alongamento/fortalecimento leve / mobilidade/costas",
    appCategory: "MOBILITY",
    instructionType: "STRETCHING",
    objetivo_principal: "Pode ajudar em dor leve/desconforto nas costas, rigidez lombar.",
    objetivos_secundarios: [
      "costas rigidas",
      "dor leve nas costas",
      "lombar cansada",
      "postura",
      "coluna",
      "lombar",
      "quadril",
      "core"
    ],
    descricao: "Pode ajudar em dor leve/desconforto nas costas, rigidez lombar.",
    beneficios: [
      "Pode ajudar em dor leve/desconforto nas costas, rigidez lombar.",
      "pode apoiar conforto leve das costas",
      "pode contribuir para mobilidade lombar e de coluna",
      "pode favorecer relaxamento corporal",
      "pode ajudar apos longos periodos sentado"
    ],
    como_fazer: "Executar Cao-passaro com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Cao-passaro com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "costas rigidas",
      "dor leve nas costas",
      "lombar cansada",
      "postura"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura ou tratamento de dor lombar."
    ],
    regioes_corporais: [
      "coluna",
      "lombar",
      "quadril",
      "core"
    ],
    grupos_musculares: [
      "coluna",
      "lombar",
      "quadril",
      "core"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "iniciante",
    levelNumber: 1,
    intensidade: "LIGHT",
    duracao: "8 a 10 repeticoes lentas por lado",
    durationSeconds: 120,
    sets: null,
    repeticoes: "8 a 10 repeticoes",
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "cao-passaro",
      "mobilidade",
      "costas",
      "pausa ai",
      "lombar",
      "coluna",
      "relaxamento",
      "muito tempo sentado",
      "Cao-passaro",
      "Bird Dog"
    ],
    sinonimos: [
      "Bird Dog",
      "cao-passaro",
      "mobilidade",
      "costas",
      "pausa ai"
    ],
    tags: [
      "cao-passaro",
      "mobilidade",
      "costas",
      "pausa ai",
      "lombar",
      "coluna",
      "relaxamento",
      "muito tempo sentado",
      "ref_010",
      "rotina_conforto_costas_mobilidade_coluna"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "costas rigidas",
      "dor leve nas costas",
      "lombar cansada",
      "postura",
      "cao-passaro",
      "mobilidade",
      "costas",
      "pausa ai",
      "conforto leve das costas e mobilidade lombar",
      "relaxamento, tranquilidade e reconexao com o corpo"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "dor irradiando",
      "perda de forca",
      "perda controle urinario/intestino",
      "febre",
      "trauma"
    ],
    objetivo_fisico: "conforto leve das costas e mobilidade lombar",
    objetivo_emocional: "relaxamento, tranquilidade e reconexao com o corpo",
    imageFiles: [
      "spine_backpain_003_bird_dog_step_01_tabletop.png",
      "spine_backpain_003_bird_dog_step_02_extend_right_left.png",
      "spine_backpain_003_bird_dog_step_03_extend_left_right.png",
      "spine_backpain_003_bird_dog_step_04_common_mistake.png",
      "spine_backpain_003_bird_dog_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_007_mov_04 se criado; senao gerar uma vez.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_010",
    id: "ref_010_mov_04",
    nome_pt: "Inclinacao pelvica",
    nome_original: "Pelvic Tilt",
    tipo: "mobilidade/alongamento/fortalecimento leve / mobilidade/costas",
    appCategory: "MOBILITY",
    instructionType: "STRETCHING",
    objetivo_principal: "Pode ajudar em dor leve/desconforto nas costas, rigidez lombar.",
    objetivos_secundarios: [
      "costas rigidas",
      "dor leve nas costas",
      "lombar cansada",
      "postura",
      "coluna",
      "lombar",
      "quadril",
      "core"
    ],
    descricao: "Pode ajudar em dor leve/desconforto nas costas, rigidez lombar.",
    beneficios: [
      "Pode ajudar em dor leve/desconforto nas costas, rigidez lombar.",
      "pode apoiar conforto leve das costas",
      "pode contribuir para mobilidade lombar e de coluna",
      "pode favorecer relaxamento corporal",
      "pode ajudar apos longos periodos sentado"
    ],
    como_fazer: "Executar Inclinacao pelvica com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Inclinacao pelvica com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "costas rigidas",
      "dor leve nas costas",
      "lombar cansada",
      "postura"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura ou tratamento de dor lombar."
    ],
    regioes_corporais: [
      "coluna",
      "lombar",
      "quadril",
      "core"
    ],
    grupos_musculares: [
      "coluna",
      "lombar",
      "quadril",
      "core"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "iniciante",
    levelNumber: 1,
    intensidade: "LIGHT",
    duracao: "8 a 12 repeticoes lentas",
    durationSeconds: 144,
    sets: null,
    repeticoes: "8 a 12 repeticoes",
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "inclinacao pelvica",
      "mobilidade",
      "costas",
      "pausa ai",
      "lombar",
      "coluna",
      "relaxamento",
      "muito tempo sentado",
      "Inclinacao pelvica",
      "Pelvic Tilt"
    ],
    sinonimos: [
      "Pelvic Tilt",
      "inclinacao pelvica",
      "mobilidade",
      "costas",
      "pausa ai"
    ],
    tags: [
      "inclinacao pelvica",
      "mobilidade",
      "costas",
      "pausa ai",
      "lombar",
      "coluna",
      "relaxamento",
      "muito tempo sentado",
      "ref_010",
      "rotina_conforto_costas_mobilidade_coluna"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "costas rigidas",
      "dor leve nas costas",
      "lombar cansada",
      "postura",
      "inclinacao pelvica",
      "mobilidade",
      "costas",
      "pausa ai",
      "conforto leve das costas e mobilidade lombar",
      "relaxamento, tranquilidade e reconexao com o corpo"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "dor irradiando",
      "perda de forca",
      "perda controle urinario/intestino",
      "febre",
      "trauma"
    ],
    objetivo_fisico: "conforto leve das costas e mobilidade lombar",
    objetivo_emocional: "relaxamento, tranquilidade e reconexao com o corpo",
    imageFiles: [
      "spine_backpain_004_pelvic_tilt_step_01_lie_down.png",
      "spine_backpain_004_pelvic_tilt_step_02_pelvis_tilt.png",
      "spine_backpain_004_pelvic_tilt_step_03_release.png",
      "spine_backpain_004_pelvic_tilt_step_04_common_mistake.png",
      "spine_backpain_004_pelvic_tilt_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO_CANONICO; pode compartilhar com ponte articulada step pelvis_tilt.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_010",
    id: "ref_010_mov_05",
    nome_pt: "Joelho ao peito",
    nome_original: "Knee to Chest",
    tipo: "mobilidade/alongamento/fortalecimento leve / mobilidade/costas",
    appCategory: "MOBILITY",
    instructionType: "STRETCHING",
    objetivo_principal: "Pode ajudar em dor leve/desconforto nas costas, rigidez lombar.",
    objetivos_secundarios: [
      "costas rigidas",
      "dor leve nas costas",
      "lombar cansada",
      "postura",
      "coluna",
      "lombar",
      "quadril",
      "core"
    ],
    descricao: "Pode ajudar em dor leve/desconforto nas costas, rigidez lombar.",
    beneficios: [
      "Pode ajudar em dor leve/desconforto nas costas, rigidez lombar.",
      "pode apoiar conforto leve das costas",
      "pode contribuir para mobilidade lombar e de coluna",
      "pode favorecer relaxamento corporal",
      "pode ajudar apos longos periodos sentado"
    ],
    como_fazer: "Executar Joelho ao peito com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Joelho ao peito com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "costas rigidas",
      "dor leve nas costas",
      "lombar cansada",
      "postura"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura ou tratamento de dor lombar."
    ],
    regioes_corporais: [
      "coluna",
      "lombar",
      "quadril",
      "core"
    ],
    grupos_musculares: [
      "coluna",
      "lombar",
      "quadril",
      "core"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "iniciante",
    levelNumber: 1,
    intensidade: "LIGHT",
    duracao: "20 a 30 segundos por lado",
    durationSeconds: 90,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "joelho ao peito",
      "mobilidade",
      "costas",
      "pausa ai",
      "lombar",
      "coluna",
      "relaxamento",
      "muito tempo sentado",
      "Joelho ao peito",
      "Knee to Chest"
    ],
    sinonimos: [
      "Knee to Chest",
      "joelho ao peito",
      "mobilidade",
      "costas",
      "pausa ai"
    ],
    tags: [
      "joelho ao peito",
      "mobilidade",
      "costas",
      "pausa ai",
      "lombar",
      "coluna",
      "relaxamento",
      "muito tempo sentado",
      "ref_010",
      "rotina_conforto_costas_mobilidade_coluna"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "costas rigidas",
      "dor leve nas costas",
      "lombar cansada",
      "postura",
      "joelho ao peito",
      "mobilidade",
      "costas",
      "pausa ai",
      "conforto leve das costas e mobilidade lombar",
      "relaxamento, tranquilidade e reconexao com o corpo"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "dor irradiando",
      "perda de forca",
      "perda controle urinario/intestino",
      "febre",
      "trauma"
    ],
    objetivo_fisico: "conforto leve das costas e mobilidade lombar",
    objetivo_emocional: "relaxamento, tranquilidade e reconexao com o corpo",
    imageFiles: [
      "spine_backpain_005_knee_to_chest_step_01_lie_down.png",
      "spine_backpain_005_knee_to_chest_step_02_one_knee_to_chest.png",
      "spine_backpain_005_knee_to_chest_step_03_final_hold.png",
      "spine_backpain_005_knee_to_chest_step_04_common_mistake.png",
      "spine_backpain_005_knee_to_chest_step_05_correction.png"
    ],
    visual_reuse: "CONFERIR ref_004_mov_15; gerar se for um joelho e REF_004 for dois joelhos.",
    assetReuseStatus: "CHECK_BEFORE_GENERATE"
  },
  {
    referenceId: "ref_010",
    id: "ref_010_mov_06",
    nome_pt: "Alongamento cobra",
    nome_original: "Cobra Stretch",
    tipo: "mobilidade/alongamento/fortalecimento leve / mobilidade/costas",
    appCategory: "MOBILITY",
    instructionType: "STRETCHING",
    objetivo_principal: "Pode ajudar em dor leve/desconforto nas costas, rigidez lombar.",
    objetivos_secundarios: [
      "costas rigidas",
      "dor leve nas costas",
      "lombar cansada",
      "postura",
      "coluna",
      "lombar",
      "quadril",
      "core"
    ],
    descricao: "Pode ajudar em dor leve/desconforto nas costas, rigidez lombar.",
    beneficios: [
      "Pode ajudar em dor leve/desconforto nas costas, rigidez lombar.",
      "pode apoiar conforto leve das costas",
      "pode contribuir para mobilidade lombar e de coluna",
      "pode favorecer relaxamento corporal",
      "pode ajudar apos longos periodos sentado"
    ],
    como_fazer: "Executar Alongamento cobra com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Alongamento cobra com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "costas rigidas",
      "dor leve nas costas",
      "lombar cansada",
      "postura"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura ou tratamento de dor lombar."
    ],
    regioes_corporais: [
      "coluna",
      "lombar",
      "quadril",
      "core"
    ],
    grupos_musculares: [
      "coluna",
      "lombar",
      "quadril",
      "core"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "iniciante",
    levelNumber: 1,
    intensidade: "LIGHT",
    duracao: "15 a 30 segundos",
    durationSeconds: 90,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "alongamento cobra",
      "mobilidade",
      "costas",
      "pausa ai",
      "lombar",
      "coluna",
      "relaxamento",
      "muito tempo sentado",
      "Alongamento cobra",
      "Cobra Stretch"
    ],
    sinonimos: [
      "Cobra Stretch",
      "alongamento cobra",
      "mobilidade",
      "costas",
      "pausa ai"
    ],
    tags: [
      "alongamento cobra",
      "mobilidade",
      "costas",
      "pausa ai",
      "lombar",
      "coluna",
      "relaxamento",
      "muito tempo sentado",
      "ref_010",
      "rotina_conforto_costas_mobilidade_coluna"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "costas rigidas",
      "dor leve nas costas",
      "lombar cansada",
      "postura",
      "alongamento cobra",
      "mobilidade",
      "costas",
      "pausa ai",
      "conforto leve das costas e mobilidade lombar",
      "relaxamento, tranquilidade e reconexao com o corpo"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "dor irradiando",
      "perda de forca",
      "perda controle urinario/intestino",
      "febre",
      "trauma"
    ],
    objetivo_fisico: "conforto leve das costas e mobilidade lombar",
    objetivo_emocional: "relaxamento, tranquilidade e reconexao com o corpo",
    imageFiles: [
      "spine_backpain_006_cobra_stretch_step_01_prone.png",
      "spine_backpain_006_cobra_stretch_step_02_hands_under_shoulders.png",
      "spine_backpain_006_cobra_stretch_step_03_chest_lift.png",
      "spine_backpain_006_cobra_stretch_step_04_final.png",
      "spine_backpain_006_cobra_stretch_step_05_common_mistake.png",
      "spine_backpain_006_cobra_stretch_step_06_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_003/ref_004/ref_007 cobra se equivalente.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_010",
    id: "ref_010_mov_07",
    nome_pt: "Ponte de gluteos",
    nome_original: "Glute Bridge",
    tipo: "mobilidade/alongamento/fortalecimento leve / mobilidade/costas",
    appCategory: "MOBILITY",
    instructionType: "STRETCHING",
    objetivo_principal: "Pode ajudar em dor leve/desconforto nas costas, rigidez lombar.",
    objetivos_secundarios: [
      "costas rigidas",
      "dor leve nas costas",
      "lombar cansada",
      "postura",
      "coluna",
      "lombar",
      "quadril",
      "core"
    ],
    descricao: "Pode ajudar em dor leve/desconforto nas costas, rigidez lombar.",
    beneficios: [
      "Pode ajudar em dor leve/desconforto nas costas, rigidez lombar.",
      "pode apoiar conforto leve das costas",
      "pode contribuir para mobilidade lombar e de coluna",
      "pode favorecer relaxamento corporal",
      "pode ajudar apos longos periodos sentado"
    ],
    como_fazer: "Executar Ponte de gluteos com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Ponte de gluteos com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "costas rigidas",
      "dor leve nas costas",
      "lombar cansada",
      "postura"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura ou tratamento de dor lombar."
    ],
    regioes_corporais: [
      "coluna",
      "lombar",
      "quadril",
      "core"
    ],
    grupos_musculares: [
      "coluna",
      "lombar",
      "quadril",
      "core"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "iniciante",
    levelNumber: 1,
    intensidade: "LIGHT",
    duracao: "8 a 12 repeticoes ou 20-30s",
    durationSeconds: 90,
    sets: null,
    repeticoes: "8 a 12 repeticoes",
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "ponte de gluteos",
      "mobilidade",
      "costas",
      "pausa ai",
      "lombar",
      "coluna",
      "relaxamento",
      "muito tempo sentado",
      "Ponte de gluteos",
      "Glute Bridge"
    ],
    sinonimos: [
      "Glute Bridge",
      "ponte de gluteos",
      "mobilidade",
      "costas",
      "pausa ai"
    ],
    tags: [
      "ponte de gluteos",
      "mobilidade",
      "costas",
      "pausa ai",
      "lombar",
      "coluna",
      "relaxamento",
      "muito tempo sentado",
      "ref_010",
      "rotina_conforto_costas_mobilidade_coluna"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "costas rigidas",
      "dor leve nas costas",
      "lombar cansada",
      "postura",
      "ponte de gluteos",
      "mobilidade",
      "costas",
      "pausa ai",
      "conforto leve das costas e mobilidade lombar",
      "relaxamento, tranquilidade e reconexao com o corpo"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "dor irradiando",
      "perda de forca",
      "perda controle urinario/intestino",
      "febre",
      "trauma"
    ],
    objetivo_fisico: "conforto leve das costas e mobilidade lombar",
    objetivo_emocional: "relaxamento, tranquilidade e reconexao com o corpo",
    imageFiles: [
      "spine_backpain_007_glute_bridge_step_01_lie_down.png",
      "spine_backpain_007_glute_bridge_step_02_hips_lift.png",
      "spine_backpain_007_glute_bridge_step_03_final_bridge.png",
      "spine_backpain_007_glute_bridge_step_04_common_mistake.png",
      "spine_backpain_007_glute_bridge_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_004_mov_08 ou ref_007_mov_05.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_01",
    nome_pt: "Tadasana",
    nome_original: "Tadasana",
    tipo: "yoga/bem-estar / yoga/chakra/root",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Tadasana com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Tadasana com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "3 a 5 respiracoes",
    durationSeconds: 60,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "tadasana",
      "yoga",
      "chakra",
      "root",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Tadasana"
    ],
    sinonimos: [
      "Tadasana",
      "tadasana",
      "yoga",
      "chakra",
      "root",
      "pausa ai"
    ],
    tags: [
      "tadasana",
      "yoga",
      "chakra",
      "root",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "tadasana",
      "yoga",
      "chakra",
      "root",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_root_01_tadasana_step_01_start.png",
      "chakra_root_01_tadasana_step_02_entry.png",
      "chakra_root_01_tadasana_step_03_final.png",
      "chakra_root_01_tadasana_step_04_common_mistake.png",
      "chakra_root_01_tadasana_step_05_correction.png"
    ],
    visual_reuse: "CONFERIR ref_003 postura em pe neutra; gerar se nao houver.",
    assetReuseStatus: "CHECK_BEFORE_GENERATE"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_02",
    nome_pt: "Malasana",
    nome_original: "Malasana",
    tipo: "yoga/bem-estar / yoga/chakra/root",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Malasana com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Malasana com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "3 a 5 respiracoes",
    durationSeconds: 60,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "malasana",
      "yoga",
      "chakra",
      "root",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Malasana"
    ],
    sinonimos: [
      "Malasana",
      "malasana",
      "yoga",
      "chakra",
      "root",
      "pausa ai"
    ],
    tags: [
      "malasana",
      "yoga",
      "chakra",
      "root",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "malasana",
      "yoga",
      "chakra",
      "root",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_root_02_malasana_step_01_start.png",
      "chakra_root_02_malasana_step_02_entry.png",
      "chakra_root_02_malasana_step_03_final.png",
      "chakra_root_02_malasana_step_04_common_mistake.png",
      "chakra_root_02_malasana_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_004_mov_03 ou ref_005_mov_01.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_03",
    nome_pt: "Guerreiro II",
    nome_original: "Virabhadrasana II",
    tipo: "yoga/bem-estar / yoga/chakra/root",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Guerreiro II com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Guerreiro II com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "3 a 5 respiracoes por lado",
    durationSeconds: 60,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "guerreiro ii",
      "yoga",
      "chakra",
      "root",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Guerreiro II",
      "Virabhadrasana II"
    ],
    sinonimos: [
      "Virabhadrasana II",
      "guerreiro ii",
      "yoga",
      "chakra",
      "root",
      "pausa ai"
    ],
    tags: [
      "guerreiro ii",
      "yoga",
      "chakra",
      "root",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "guerreiro ii",
      "yoga",
      "chakra",
      "root",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_root_03_virabhadrasana_ii_step_01_start.png",
      "chakra_root_03_virabhadrasana_ii_step_02_entry.png",
      "chakra_root_03_virabhadrasana_ii_step_03_final.png",
      "chakra_root_03_virabhadrasana_ii_step_04_common_mistake.png",
      "chakra_root_03_virabhadrasana_ii_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO_CANONICO.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_04",
    nome_pt: "Postura da crianca",
    nome_original: "Balasana",
    tipo: "yoga/bem-estar / yoga/chakra/root",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Postura da crianca com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Postura da crianca com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "30 a 60s",
    durationSeconds: 180,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "postura da crianca",
      "yoga",
      "chakra",
      "root",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Postura da crianca",
      "Balasana"
    ],
    sinonimos: [
      "Balasana",
      "postura da crianca",
      "yoga",
      "chakra",
      "root",
      "pausa ai"
    ],
    tags: [
      "postura da crianca",
      "yoga",
      "chakra",
      "root",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "postura da crianca",
      "yoga",
      "chakra",
      "root",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_root_04_balasana_step_01_start.png",
      "chakra_root_04_balasana_step_02_entry.png",
      "chakra_root_04_balasana_step_03_final.png",
      "chakra_root_04_balasana_step_04_common_mistake.png",
      "chakra_root_04_balasana_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_004_mov_04.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_05",
    nome_pt: "Postura da borboleta",
    nome_original: "Baddha Konasana",
    tipo: "yoga/bem-estar / yoga/chakra/sacral",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Postura da borboleta com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Postura da borboleta com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "5 a 10 respiracoes",
    durationSeconds: 80,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "postura da borboleta",
      "yoga",
      "chakra",
      "sacral",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Postura da borboleta",
      "Baddha Konasana"
    ],
    sinonimos: [
      "Baddha Konasana",
      "postura da borboleta",
      "yoga",
      "chakra",
      "sacral",
      "pausa ai"
    ],
    tags: [
      "postura da borboleta",
      "yoga",
      "chakra",
      "sacral",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "postura da borboleta",
      "yoga",
      "chakra",
      "sacral",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_sacral_05_baddha_konasana_step_01_start.png",
      "chakra_sacral_05_baddha_konasana_step_02_entry.png",
      "chakra_sacral_05_baddha_konasana_step_03_final.png",
      "chakra_sacral_05_baddha_konasana_step_04_common_mistake.png",
      "chakra_sacral_05_baddha_konasana_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_004_mov_01.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_06",
    nome_pt: "Postura da deusa",
    nome_original: "Goddess Pose",
    tipo: "yoga/bem-estar / yoga/chakra/sacral",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Postura da deusa com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Postura da deusa com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "5 a 10 respiracoes",
    durationSeconds: 80,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "postura da deusa",
      "yoga",
      "chakra",
      "sacral",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Postura da deusa",
      "Goddess Pose"
    ],
    sinonimos: [
      "Goddess Pose",
      "postura da deusa",
      "yoga",
      "chakra",
      "sacral",
      "pausa ai"
    ],
    tags: [
      "postura da deusa",
      "yoga",
      "chakra",
      "sacral",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "postura da deusa",
      "yoga",
      "chakra",
      "sacral",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_sacral_06_goddess_pose_step_01_start.png",
      "chakra_sacral_06_goddess_pose_step_02_entry.png",
      "chakra_sacral_06_goddess_pose_step_03_final.png",
      "chakra_sacral_06_goddess_pose_step_04_common_mistake.png",
      "chakra_sacral_06_goddess_pose_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_005_mov_08 se criado; senao gerar.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_07",
    nome_pt: "Afundo baixo",
    nome_original: "Low Lunge",
    tipo: "yoga/bem-estar / yoga/chakra/sacral",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Afundo baixo com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Afundo baixo com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "3 a 5 respiracoes por lado",
    durationSeconds: 60,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "afundo baixo",
      "yoga",
      "chakra",
      "sacral",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Afundo baixo",
      "Low Lunge"
    ],
    sinonimos: [
      "Low Lunge",
      "afundo baixo",
      "yoga",
      "chakra",
      "sacral",
      "pausa ai"
    ],
    tags: [
      "afundo baixo",
      "yoga",
      "chakra",
      "sacral",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "afundo baixo",
      "yoga",
      "chakra",
      "sacral",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_sacral_07_low_lunge_step_01_start.png",
      "chakra_sacral_07_low_lunge_step_02_entry.png",
      "chakra_sacral_07_low_lunge_step_03_final.png",
      "chakra_sacral_07_low_lunge_step_04_common_mistake.png",
      "chakra_sacral_07_low_lunge_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_003_mov_04/ref_003_mov_09 se equivalente.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_08",
    nome_pt: "Postura do pombo",
    nome_original: "Pigeon Pose",
    tipo: "yoga/bem-estar / yoga/chakra/sacral",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Postura do pombo com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Postura do pombo com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "30 a 60s por lado",
    durationSeconds: 180,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "postura do pombo",
      "yoga",
      "chakra",
      "sacral",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Postura do pombo",
      "Pigeon Pose"
    ],
    sinonimos: [
      "Pigeon Pose",
      "postura do pombo",
      "yoga",
      "chakra",
      "sacral",
      "pausa ai"
    ],
    tags: [
      "postura do pombo",
      "yoga",
      "chakra",
      "sacral",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "postura do pombo",
      "yoga",
      "chakra",
      "sacral",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_sacral_08_pigeon_pose_step_01_start.png",
      "chakra_sacral_08_pigeon_pose_step_02_entry.png",
      "chakra_sacral_08_pigeon_pose_step_03_final.png",
      "chakra_sacral_08_pigeon_pose_step_04_common_mistake.png",
      "chakra_sacral_08_pigeon_pose_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO_CANONICO.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_09",
    nome_pt: "Postura do barco",
    nome_original: "Navasana",
    tipo: "yoga/bem-estar / yoga/chakra/solar",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Postura do barco com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Postura do barco com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "3 a 5 respiracoes",
    durationSeconds: 60,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "postura do barco",
      "yoga",
      "chakra",
      "solar",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Postura do barco",
      "Navasana"
    ],
    sinonimos: [
      "Navasana",
      "postura do barco",
      "yoga",
      "chakra",
      "solar",
      "pausa ai"
    ],
    tags: [
      "postura do barco",
      "yoga",
      "chakra",
      "solar",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "postura do barco",
      "yoga",
      "chakra",
      "solar",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_solar_09_navasana_step_01_start.png",
      "chakra_solar_09_navasana_step_02_entry.png",
      "chakra_solar_09_navasana_step_03_final.png",
      "chakra_solar_09_navasana_step_04_common_mistake.png",
      "chakra_solar_09_navasana_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO_CANONICO.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_10",
    nome_pt: "Prancha",
    nome_original: "Plank",
    tipo: "yoga/bem-estar / yoga/chakra/solar",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Prancha com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Prancha com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "20 a 30s",
    durationSeconds: 90,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "prancha",
      "yoga",
      "chakra",
      "solar",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Prancha",
      "Plank"
    ],
    sinonimos: [
      "Plank",
      "prancha",
      "yoga",
      "chakra",
      "solar",
      "pausa ai"
    ],
    tags: [
      "prancha",
      "yoga",
      "chakra",
      "solar",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "prancha",
      "yoga",
      "chakra",
      "solar",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_solar_10_plank_step_01_start.png",
      "chakra_solar_10_plank_step_02_entry.png",
      "chakra_solar_10_plank_step_03_final.png",
      "chakra_solar_10_plank_step_04_common_mistake.png",
      "chakra_solar_10_plank_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_003_mov_05 ou ref_006_mov_08 conforme variacao.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_11",
    nome_pt: "Postura do arco",
    nome_original: "Dhanurasana",
    tipo: "yoga/bem-estar / yoga/chakra/solar",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Postura do arco com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Postura do arco com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "15 a 30s",
    durationSeconds: 90,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "postura do arco",
      "yoga",
      "chakra",
      "solar",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Postura do arco",
      "Dhanurasana"
    ],
    sinonimos: [
      "Dhanurasana",
      "postura do arco",
      "yoga",
      "chakra",
      "solar",
      "pausa ai"
    ],
    tags: [
      "postura do arco",
      "yoga",
      "chakra",
      "solar",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "postura do arco",
      "yoga",
      "chakra",
      "solar",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_solar_11_dhanurasana_step_01_start.png",
      "chakra_solar_11_dhanurasana_step_02_entry.png",
      "chakra_solar_11_dhanurasana_step_03_final.png",
      "chakra_solar_11_dhanurasana_step_04_common_mistake.png",
      "chakra_solar_11_dhanurasana_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO_CANONICO.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_12",
    nome_pt: "Guerreiro III",
    nome_original: "Warrior III",
    tipo: "yoga/bem-estar / yoga/chakra/solar",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Guerreiro III com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Guerreiro III com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "3 a 5 respiracoes por lado",
    durationSeconds: 60,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "guerreiro iii",
      "yoga",
      "chakra",
      "solar",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Guerreiro III",
      "Warrior III"
    ],
    sinonimos: [
      "Warrior III",
      "guerreiro iii",
      "yoga",
      "chakra",
      "solar",
      "pausa ai"
    ],
    tags: [
      "guerreiro iii",
      "yoga",
      "chakra",
      "solar",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "guerreiro iii",
      "yoga",
      "chakra",
      "solar",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_solar_12_warrior_iii_step_01_start.png",
      "chakra_solar_12_warrior_iii_step_02_entry.png",
      "chakra_solar_12_warrior_iii_step_03_final.png",
      "chakra_solar_12_warrior_iii_step_04_common_mistake.png",
      "chakra_solar_12_warrior_iii_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO_CANONICO.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_13",
    nome_pt: "Postura da cobra",
    nome_original: "Bhujangasana",
    tipo: "yoga/bem-estar / yoga/chakra/heart",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Postura da cobra com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Postura da cobra com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "15 a 30s",
    durationSeconds: 90,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "postura da cobra",
      "yoga",
      "chakra",
      "heart",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Postura da cobra",
      "Bhujangasana"
    ],
    sinonimos: [
      "Bhujangasana",
      "postura da cobra",
      "yoga",
      "chakra",
      "heart",
      "pausa ai"
    ],
    tags: [
      "postura da cobra",
      "yoga",
      "chakra",
      "heart",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "postura da cobra",
      "yoga",
      "chakra",
      "heart",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_heart_13_bhujangasana_step_01_start.png",
      "chakra_heart_13_bhujangasana_step_02_entry.png",
      "chakra_heart_13_bhujangasana_step_03_final.png",
      "chakra_heart_13_bhujangasana_step_04_common_mistake.png",
      "chakra_heart_13_bhujangasana_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_003_mov_07 ou ref_004_mov_07.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_14",
    nome_pt: "Postura do camelo",
    nome_original: "Ustrasana",
    tipo: "yoga/bem-estar / yoga/chakra/heart",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Postura do camelo com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Postura do camelo com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "15 a 30s",
    durationSeconds: 90,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "postura do camelo",
      "yoga",
      "chakra",
      "heart",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Postura do camelo",
      "Ustrasana"
    ],
    sinonimos: [
      "Ustrasana",
      "postura do camelo",
      "yoga",
      "chakra",
      "heart",
      "pausa ai"
    ],
    tags: [
      "postura do camelo",
      "yoga",
      "chakra",
      "heart",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "postura do camelo",
      "yoga",
      "chakra",
      "heart",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_heart_14_ustrasana_step_01_start.png",
      "chakra_heart_14_ustrasana_step_02_entry.png",
      "chakra_heart_14_ustrasana_step_03_final.png",
      "chakra_heart_14_ustrasana_step_04_common_mistake.png",
      "chakra_heart_14_ustrasana_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_004_mov_09.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_15",
    nome_pt: "Postura da ponte",
    nome_original: "Setu Bandhasana",
    tipo: "yoga/bem-estar / yoga/chakra/heart",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Postura da ponte com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Postura da ponte com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "20 a 30s",
    durationSeconds: 90,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "postura da ponte",
      "yoga",
      "chakra",
      "heart",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Postura da ponte",
      "Setu Bandhasana"
    ],
    sinonimos: [
      "Setu Bandhasana",
      "postura da ponte",
      "yoga",
      "chakra",
      "heart",
      "pausa ai"
    ],
    tags: [
      "postura da ponte",
      "yoga",
      "chakra",
      "heart",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "postura da ponte",
      "yoga",
      "chakra",
      "heart",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_heart_15_setu_bandhasana_step_01_start.png",
      "chakra_heart_15_setu_bandhasana_step_02_entry.png",
      "chakra_heart_15_setu_bandhasana_step_03_final.png",
      "chakra_heart_15_setu_bandhasana_step_04_common_mistake.png",
      "chakra_heart_15_setu_bandhasana_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_004_mov_08.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_16",
    nome_pt: "Cao olhando para cima",
    nome_original: "Upward Dog",
    tipo: "yoga/bem-estar / yoga/chakra/heart",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Cao olhando para cima com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Cao olhando para cima com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "1 a 3 respiracoes",
    durationSeconds: 60,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "cao olhando para cima",
      "yoga",
      "chakra",
      "heart",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Cao olhando para cima",
      "Upward Dog"
    ],
    sinonimos: [
      "Upward Dog",
      "cao olhando para cima",
      "yoga",
      "chakra",
      "heart",
      "pausa ai"
    ],
    tags: [
      "cao olhando para cima",
      "yoga",
      "chakra",
      "heart",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "cao olhando para cima",
      "yoga",
      "chakra",
      "heart",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_heart_16_upward_dog_step_01_start.png",
      "chakra_heart_16_upward_dog_step_02_entry.png",
      "chakra_heart_16_upward_dog_step_03_final.png",
      "chakra_heart_16_upward_dog_step_04_common_mistake.png",
      "chakra_heart_16_upward_dog_step_05_correction.png"
    ],
    visual_reuse: "CONFERIR cobra; preferir GERAR_NOVO para diferenciar.",
    assetReuseStatus: "CHECK_BEFORE_GENERATE"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_17",
    nome_pt: "Postura do peixe",
    nome_original: "Matsyasana",
    tipo: "yoga/bem-estar / yoga/chakra/throat",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Postura do peixe com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Postura do peixe com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "15 a 30s",
    durationSeconds: 90,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "postura do peixe",
      "yoga",
      "chakra",
      "throat",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Postura do peixe",
      "Matsyasana"
    ],
    sinonimos: [
      "Matsyasana",
      "postura do peixe",
      "yoga",
      "chakra",
      "throat",
      "pausa ai"
    ],
    tags: [
      "postura do peixe",
      "yoga",
      "chakra",
      "throat",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "postura do peixe",
      "yoga",
      "chakra",
      "throat",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_throat_17_matsyasana_step_01_start.png",
      "chakra_throat_17_matsyasana_step_02_entry.png",
      "chakra_throat_17_matsyasana_step_03_final.png",
      "chakra_throat_17_matsyasana_step_04_common_mistake.png",
      "chakra_throat_17_matsyasana_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_004_mov_18.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_18",
    nome_pt: "Postura da vela",
    nome_original: "Sarvangasana",
    tipo: "yoga/bem-estar / yoga/chakra/throat",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Postura da vela com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Postura da vela com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "somente avancado, 10 a 20s inicial",
    durationSeconds: 60,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "postura da vela",
      "yoga",
      "chakra",
      "throat",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Postura da vela",
      "Sarvangasana"
    ],
    sinonimos: [
      "Sarvangasana",
      "postura da vela",
      "yoga",
      "chakra",
      "throat",
      "pausa ai"
    ],
    tags: [
      "postura da vela",
      "yoga",
      "chakra",
      "throat",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "postura da vela",
      "yoga",
      "chakra",
      "throat",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_throat_18_sarvangasana_step_01_start.png",
      "chakra_throat_18_sarvangasana_step_02_entry.png",
      "chakra_throat_18_sarvangasana_step_03_final.png",
      "chakra_throat_18_sarvangasana_step_04_common_mistake.png",
      "chakra_throat_18_sarvangasana_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO_CANONICO_AVANCADO; bloquear iniciantes.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_19",
    nome_pt: "Postura do arado",
    nome_original: "Halasana",
    tipo: "yoga/bem-estar / yoga/chakra/throat",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Postura do arado com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Postura do arado com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "somente avancado, 10 a 20s inicial",
    durationSeconds: 60,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "postura do arado",
      "yoga",
      "chakra",
      "throat",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Postura do arado",
      "Halasana"
    ],
    sinonimos: [
      "Halasana",
      "postura do arado",
      "yoga",
      "chakra",
      "throat",
      "pausa ai"
    ],
    tags: [
      "postura do arado",
      "yoga",
      "chakra",
      "throat",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "postura do arado",
      "yoga",
      "chakra",
      "throat",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_throat_19_halasana_step_01_start.png",
      "chakra_throat_19_halasana_step_02_entry.png",
      "chakra_throat_19_halasana_step_03_final.png",
      "chakra_throat_19_halasana_step_04_common_mistake.png",
      "chakra_throat_19_halasana_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO_CANONICO_AVANCADO; bloquear iniciantes.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_20",
    nome_pt: "Respiracao do leao",
    nome_original: "Lion's Breath",
    tipo: "yoga/bem-estar / yoga/chakra/throat",
    appCategory: "YOGA",
    instructionType: "BREATHING",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Respiracao do leao com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Respiracao do leao com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "3 a 5 ciclos",
    durationSeconds: 180,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "respiracao do leao",
      "yoga",
      "chakra",
      "throat",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Respiracao do leao",
      "Lion's Breath"
    ],
    sinonimos: [
      "Lion's Breath",
      "respiracao do leao",
      "yoga",
      "chakra",
      "throat",
      "pausa ai"
    ],
    tags: [
      "respiracao do leao",
      "yoga",
      "chakra",
      "throat",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "respiracao do leao",
      "yoga",
      "chakra",
      "throat",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_throat_20_lions_breath_step_01_start.png",
      "chakra_throat_20_lions_breath_step_02_entry.png",
      "chakra_throat_20_lions_breath_step_03_final.png",
      "chakra_throat_20_lions_breath_step_04_common_mistake.png",
      "chakra_throat_20_lions_breath_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO_CANONICO.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_21",
    nome_pt: "Flexao a frente",
    nome_original: "Forward Fold",
    tipo: "yoga/bem-estar / yoga/chakra/third_eye",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Flexao a frente com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Flexao a frente com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "3 a 5 respiracoes",
    durationSeconds: 60,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "flexao a frente",
      "yoga",
      "chakra",
      "third_eye",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Flexao a frente",
      "Forward Fold"
    ],
    sinonimos: [
      "Forward Fold",
      "flexao a frente",
      "yoga",
      "chakra",
      "third_eye",
      "pausa ai"
    ],
    tags: [
      "flexao a frente",
      "yoga",
      "chakra",
      "third_eye",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "flexao a frente",
      "yoga",
      "chakra",
      "third_eye",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_third_eye_21_forward_fold_step_01_start.png",
      "chakra_third_eye_21_forward_fold_step_02_entry.png",
      "chakra_third_eye_21_forward_fold_step_03_final.png",
      "chakra_third_eye_21_forward_fold_step_04_common_mistake.png",
      "chakra_third_eye_21_forward_fold_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_003_mov_03/ref_003_mov_10 se em pe; ref_004_mov_13 se sentada.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_22",
    nome_pt: "Postura do golfinho",
    nome_original: "Dolphin Pose",
    tipo: "yoga/bem-estar / yoga/chakra/third_eye",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Postura do golfinho com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Postura do golfinho com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "3 a 5 respiracoes",
    durationSeconds: 60,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "postura do golfinho",
      "yoga",
      "chakra",
      "third_eye",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Postura do golfinho",
      "Dolphin Pose"
    ],
    sinonimos: [
      "Dolphin Pose",
      "postura do golfinho",
      "yoga",
      "chakra",
      "third_eye",
      "pausa ai"
    ],
    tags: [
      "postura do golfinho",
      "yoga",
      "chakra",
      "third_eye",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "postura do golfinho",
      "yoga",
      "chakra",
      "third_eye",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_third_eye_22_dolphin_pose_step_01_start.png",
      "chakra_third_eye_22_dolphin_pose_step_02_entry.png",
      "chakra_third_eye_22_dolphin_pose_step_03_final.png",
      "chakra_third_eye_22_dolphin_pose_step_04_common_mistake.png",
      "chakra_third_eye_22_dolphin_pose_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO_CANONICO.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_23",
    nome_pt: "Postura da aguia",
    nome_original: "Eagle Pose",
    tipo: "yoga/bem-estar / yoga/chakra/third_eye",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Postura da aguia com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Postura da aguia com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "3 a 5 respiracoes por lado",
    durationSeconds: 60,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "postura da aguia",
      "yoga",
      "chakra",
      "third_eye",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Postura da aguia",
      "Eagle Pose"
    ],
    sinonimos: [
      "Eagle Pose",
      "postura da aguia",
      "yoga",
      "chakra",
      "third_eye",
      "pausa ai"
    ],
    tags: [
      "postura da aguia",
      "yoga",
      "chakra",
      "third_eye",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "postura da aguia",
      "yoga",
      "chakra",
      "third_eye",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_third_eye_23_eagle_pose_step_01_start.png",
      "chakra_third_eye_23_eagle_pose_step_02_entry.png",
      "chakra_third_eye_23_eagle_pose_step_03_final.png",
      "chakra_third_eye_23_eagle_pose_step_04_common_mistake.png",
      "chakra_third_eye_23_eagle_pose_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO_CANONICO.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_24",
    nome_pt: "Pernas na parede",
    nome_original: "Viparita Karani",
    tipo: "yoga/bem-estar / yoga/chakra/third_eye",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Pernas na parede com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Pernas na parede com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "2 a 5 min",
    durationSeconds: 300,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "pernas na parede",
      "yoga",
      "chakra",
      "third_eye",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Pernas na parede",
      "Viparita Karani"
    ],
    sinonimos: [
      "Viparita Karani",
      "pernas na parede",
      "yoga",
      "chakra",
      "third_eye",
      "pausa ai"
    ],
    tags: [
      "pernas na parede",
      "yoga",
      "chakra",
      "third_eye",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "pernas na parede",
      "yoga",
      "chakra",
      "third_eye",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_third_eye_24_viparita_karani_step_01_start.png",
      "chakra_third_eye_24_viparita_karani_step_02_entry.png",
      "chakra_third_eye_24_viparita_karani_step_03_final.png",
      "chakra_third_eye_24_viparita_karani_step_04_common_mistake.png",
      "chakra_third_eye_24_viparita_karani_step_05_correction.png"
    ],
    visual_reuse: "REUTILIZAR ref_004_mov_16.",
    assetReuseStatus: "REUSED"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_25",
    nome_pt: "Postura de lotus",
    nome_original: "Padmasana",
    tipo: "yoga/bem-estar / yoga/chakra/crown",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Postura de lotus com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Postura de lotus com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "1 a 3 min ou 5 respiracoes",
    durationSeconds: 180,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "postura de lotus",
      "yoga",
      "chakra",
      "crown",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Postura de lotus",
      "Padmasana"
    ],
    sinonimos: [
      "Padmasana",
      "postura de lotus",
      "yoga",
      "chakra",
      "crown",
      "pausa ai"
    ],
    tags: [
      "postura de lotus",
      "yoga",
      "chakra",
      "crown",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "postura de lotus",
      "yoga",
      "chakra",
      "crown",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_crown_25_padmasana_step_01_start.png",
      "chakra_crown_25_padmasana_step_02_entry.png",
      "chakra_crown_25_padmasana_step_03_final.png",
      "chakra_crown_25_padmasana_step_04_common_mistake.png",
      "chakra_crown_25_padmasana_step_05_correction.png"
    ],
    visual_reuse: "CONFERIR pranayamas sentados da REF_004; gerar se nao for lotus real.",
    assetReuseStatus: "CHECK_BEFORE_GENERATE"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_26",
    nome_pt: "Parada sobre a cabeca",
    nome_original: "Headstand",
    tipo: "yoga/bem-estar / yoga/chakra/crown",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Parada sobre a cabeca com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Parada sobre a cabeca com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "somente avancado; nao recomendar automaticamente",
    durationSeconds: 180,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "parada sobre a cabeca",
      "yoga",
      "chakra",
      "crown",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Parada sobre a cabeca",
      "Headstand"
    ],
    sinonimos: [
      "Headstand",
      "parada sobre a cabeca",
      "yoga",
      "chakra",
      "crown",
      "pausa ai"
    ],
    tags: [
      "parada sobre a cabeca",
      "yoga",
      "chakra",
      "crown",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "nao recomendar automaticamente; manter apenas como ficha avancada e bloqueada por seguranca",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "parada sobre a cabeca",
      "yoga",
      "chakra",
      "crown",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_crown_26_headstand_step_01_start.png",
      "chakra_crown_26_headstand_step_02_entry.png",
      "chakra_crown_26_headstand_step_03_final.png",
      "chakra_crown_26_headstand_step_04_common_mistake.png",
      "chakra_crown_26_headstand_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO_CANONICO_AVANCADO; bloquear recomendacao automatica.",
    assetReuseStatus: "NEW_REQUIRED"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_27",
    nome_pt: "Relaxamento final",
    nome_original: "Savasana",
    tipo: "yoga/bem-estar / yoga/chakra/crown",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Relaxamento final com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Relaxamento final com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "2 a 5 min",
    durationSeconds: 300,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "relaxamento final",
      "yoga",
      "chakra",
      "crown",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Relaxamento final",
      "Savasana"
    ],
    sinonimos: [
      "Savasana",
      "relaxamento final",
      "yoga",
      "chakra",
      "crown",
      "pausa ai"
    ],
    tags: [
      "relaxamento final",
      "yoga",
      "chakra",
      "crown",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "relaxamento final",
      "yoga",
      "chakra",
      "crown",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_crown_27_savasana_step_01_start.png",
      "chakra_crown_27_savasana_step_02_entry.png",
      "chakra_crown_27_savasana_step_03_final.png",
      "chakra_crown_27_savasana_step_04_common_mistake.png",
      "chakra_crown_27_savasana_step_05_correction.png"
    ],
    visual_reuse: "CONFERIR REF_002; gerar novo se nao houver supino neutro sem travesseiros.",
    assetReuseStatus: "CHECK_BEFORE_GENERATE"
  },
  {
    referenceId: "ref_011",
    id: "ref_011_mov_28",
    nome_pt: "Postura do coelho",
    nome_original: "Rabbit Pose",
    tipo: "yoga/bem-estar / yoga/chakra/crown",
    appCategory: "YOGA",
    instructionType: "MOBILITY",
    objetivo_principal: "Pode ajudar em yoga simbolica, respiracao.",
    objetivos_secundarios: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "corpo inteiro",
      "chakra simbolico correspondente",
      "fluxo de yoga com respiracao e consciencia corporal"
    ],
    descricao: "Pode ajudar em yoga simbolica, respiracao.",
    beneficios: [
      "Pode ajudar em yoga simbolica, respiracao.",
      "pode apoiar respiracao e consciencia corporal",
      "pode favorecer relaxamento e presenca",
      "pode contribuir para pratica simbolica de yoga",
      "pode ajudar em fluxo gradual com posturas de diferentes niveis"
    ],
    como_fazer: "Executar Postura do coelho com controle, respeitando limites e respiracao.",
    passo_a_passo: [
      "Executar Postura do coelho com controle, respeitando limites e respiracao.",
      "Organize a postura inicial com respiracao tranquila.",
      "Execute somente dentro de uma amplitude confortavel.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Retorne devagar e observe como o corpo responde."
    ],
    erro_comum: "Forcar amplitude, desalinhamento ou prender a respiracao.",
    correcao_postural: "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
    indicacoes: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica"
    ],
    contraindicacoes: [],
    cuidados: [
      "Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.",
      "Reduzir amplitude, alinhar articulacoes e respirar com calma.",
      "Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue."
    ],
    regioes_corporais: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    grupos_musculares: [
      "corpo inteiro",
      "chakra simbolico correspondente"
    ],
    articulacoes: [
      "coluna",
      "quadril",
      "ombros"
    ],
    equipamentos: [
      "colchonete"
    ],
    nivel: "avancado",
    levelNumber: 5,
    intensidade: "MODERATE",
    duracao: "15 a 30s",
    durationSeconds: 90,
    sets: null,
    repeticoes: null,
    restSeconds: null,
    respiracao: "lenta e controlada",
    palavras_chave: [
      "postura do coelho",
      "yoga",
      "chakra",
      "crown",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "Postura do coelho",
      "Rabbit Pose"
    ],
    sinonimos: [
      "Rabbit Pose",
      "postura do coelho",
      "yoga",
      "chakra",
      "crown",
      "pausa ai"
    ],
    tags: [
      "postura do coelho",
      "yoga",
      "chakra",
      "crown",
      "pausa ai",
      "chakras",
      "respiracao",
      "consciencia corporal",
      "relaxamento",
      "equilibrio simbolico",
      "ref_011",
      "yoga_flow_7_chakras_consciencia_corporal"
    ],
    prioridade: "media para check-ins compativeis com a colecao e baixa quando houver qualquer contraindicacao",
    quando_recomendar: [
      "yoga para chakras",
      "respiracao",
      "relaxamento",
      "sequencia guiada",
      "pratica espiritual/simbolica",
      "postura do coelho",
      "yoga",
      "chakra",
      "crown",
      "pausa ai",
      "fluxo de yoga com respiracao e consciencia corporal",
      "presenca, simbolismo pessoal e respiracao consciente"
    ],
    quando_evitar: [
      "dor forte/aguda",
      "tontura",
      "pressao descontrolada",
      "glaucoma/inversoes",
      "dor cervical",
      "crise intensa"
    ],
    objetivo_fisico: "fluxo de yoga com respiracao e consciencia corporal",
    objetivo_emocional: "presenca, simbolismo pessoal e respiracao consciente",
    imageFiles: [
      "chakra_crown_28_rabbit_pose_step_01_start.png",
      "chakra_crown_28_rabbit_pose_step_02_entry.png",
      "chakra_crown_28_rabbit_pose_step_03_final.png",
      "chakra_crown_28_rabbit_pose_step_04_common_mistake.png",
      "chakra_crown_28_rabbit_pose_step_05_correction.png"
    ],
    visual_reuse: "GERAR_NOVO_CANONICO.",
    assetReuseStatus: "NEW_REQUIRED"
  }
] satisfies MovementInput[];
