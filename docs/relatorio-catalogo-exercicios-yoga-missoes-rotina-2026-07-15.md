# Relatorio de Catalogo - Exercicios, Yoga, Missoes e Rotina

Gerado em: 15/07/2026, 13:11:05

Fonte: banco Prisma SQLite local, seeds/catalogos TypeScript e rotinas estaticas do app.
Observacao: o relatorio lista catalogo e estruturas cadastradas; nao altera assets, videos ou imagens.

## Resumo Geral
| Area | Total |
| --- | --- |
| Exercicios base (Exercise) | 151 |
| Exercicios guiados/instrucoes (ExerciseInstruction) | 328 |
| Yoga praticas (YogaPractice) | 30 |
| Yoga sequencias (YogaSequence) | 6 |
| Missoes tradicionais (Mission) | 22 |
| Rotinas de treino (WorkoutRoutine) | 29 |
| Rotinas de alongamento estaticas | 5 |
| Exercicios de alongamento estaticos | 85 |
| Modos de caminhada | 9 |
| Lembretes de rotina no banco (RoutineReminder) | 0 |
| Tarefas de rotina no banco (RoutineTask) | 0 |
| Bloqueios sociais/descanso digital no banco (SocialDowntime) | 1 |
| Videos instrucionais registrados | 295 |
| Conquistas | 18 |
## Distribuicoes
### ExerciseInstruction por grupo

| Grupo | Total |
| --- | --- |
| MENTAL | 91 |
| PHYSICAL | 237 |

### ExerciseInstruction por categoria

| Categoria | Total |
| --- | --- |
| BREATHING | 3 |
| ENERGY_GIVE | 5 |
| ENERGY_SPEND | 5 |
| FOCUS_TRAINING | 18 |
| HAPPINESS_AUTOCONHECIMENTO | 2 |
| HAPPINESS_CONEXAO | 3 |
| HAPPINESS_CORPO_NATUREZA | 3 |
| HAPPINESS_CRIATIVIDADE | 5 |
| HAPPINESS_HORMONIOS | 3 |
| HAPPINESS_MENTALIDADE | 3 |
| HOME_FUNCTIONAL | 20 |
| JUMP_ROPE | 1 |
| LOW_IMPACT_CARDIO | 2 |
| MOBILITY | 35 |
| ORGANIZATION | 4 |
| RELAXATION | 10 |
| SHADOW_BOXING | 1 |
| SLEEP_DOWN | 6 |
| SLEEP_SUPPORT | 8 |
| SLEEP_UP | 11 |
| STRETCHING | 90 |
| WALKING | 2 |
| WORK_BREAK | 7 |
| WRITING | 10 |
| YOGA | 71 |

### Yoga por tipo

| Tipo | Total |
| --- | --- |
| FUNCTIONAL | 10 |
| LIGHT | 10 |
| RESTORATIVE | 10 |

### Missoes por categoria

| Categoria | Total |
| --- | --- |
| Energia | 6 |
| Estresse | 2 |
| Foco | 4 |
| Humor | 3 |
| Rotina | 3 |
| Sono | 4 |

### Rotinas de treino por modalidade

| Modalidade | Total |
| --- | --- |
| Alongamentos | 2 |
| Cardio leve | 2 |
| Energia | 2 |
| Estresse | 1 |
| Foco | 2 |
| Funcional em casa | 7 |
| Jumping | 1 |
| Luta | 2 |
| Mobilidade funcional | 1 |
| Pausas rapidas | 2 |
| Pular corda | 5 |
| Yoga | 2 |

### Videos por status

| Status | Total |
| --- | --- |
| PLANNED | 273 |
| READY | 22 |

## Exercicios Base - Exercise
| ID | Area | Nivel | Titulo | Duracao min | Dificuldade | Objetivo | Quando recomendar | Evitar quando |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| energy-05-abrir-janela-ou-buscar-luz | ENERGY | 1 | Abrir janela ou buscar luz | 2 | Primeira pausa | Estimulo ambiental | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| energy-02-alongar-bracos-acima-da-cabeca | ENERGY | 1 | Alongar bracos acima da cabeca | 1 | Primeira pausa | Ativar corpo | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| energy-03-beber-agua-conscientemente | ENERGY | 1 | Beber agua conscientemente | 2 | Primeira pausa | Reidratar | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| energy-01-levantar-e-respirar | ENERGY | 1 | Levantar e respirar | 1 | Primeira pausa | Sair da inercia | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| energy-04-marcha-leve-parada | ENERGY | 1 | Marcha leve parada | 2 | Primeira pausa | Aumentar circulacao | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| energy-06-reset-postural | ENERGY | 1 | Reset postural | 2 | Primeira pausa | Reduzir fadiga corporal | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| energy-09-agachamento-leve | ENERGY | 2 | Agachamento leve | 3 | Consistencia leve | Ativacao muscular | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| energy-10-alongamento-dinamico | ENERGY | 2 | Alongamento dinamico | 5 | Consistencia leve | Acordar corpo | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| energy-08-caminhada-curta | ENERGY | 2 | Caminhada curta | 5 | Consistencia leve | Ativar energia | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| energy-07-mobilidade-de-coluna | ENERGY | 2 | Mobilidade de coluna | 4 | Consistencia leve | Destravar corpo | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| energy-12-organizacao-rapida-do-espaco | ENERGY | 2 | Organizacao rapida do espaco | 5 | Consistencia leve | Reduzir sensacao de peso | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| energy-11-respiracao-energizante-suave | ENERGY | 2 | Respiracao energizante suave | 3 | Consistencia leve | Aumentar alerta | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| energy-13-ativacao-de-7-minutos | ENERGY | 3 | Ativacao de 7 minutos | 7 | Regulacao guiada | Elevar disposicao | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| energy-14-caminhada-consciente-com-ritmo | ENERGY | 3 | Caminhada consciente com ritmo | 8 | Regulacao guiada | Energia sem excesso | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| energy-17-escada-ou-subida-leve | ENERGY | 3 | Escada ou subida leve | 5 | Regulacao guiada | Ativacao rapida | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| energy-15-jumping-baixo-impacto | ENERGY | 3 | Jumping baixo impacto | 5 | Regulacao guiada | Cardio leve | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| energy-16-mobilidade-funcional | ENERGY | 3 | Mobilidade funcional | 8 | Regulacao guiada | Corpo inteiro | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| energy-18-pausa-solar-segura | ENERGY | 3 | Pausa solar segura | 5 | Regulacao guiada | Luz e presenca | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| energy-24-caminhada-de-15-minutos | ENERGY | 4 | Caminhada de 15 minutos | 15 | Autonomia | Regular vigor | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| energy-21-circuito-leve-3-exercicios | ENERGY | 4 | Circuito leve 3 exercicios | 12 | Autonomia | Resistencia inicial | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| energy-19-funcional-em-casa-iniciante | ENERGY | 4 | Funcional em casa iniciante | 10 | Autonomia | Energia e forca | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| energy-22-luta-sombra-leve | ENERGY | 4 | Luta sombra leve | 8 | Autonomia | Ativar disposicao | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| energy-20-pular-corda-iniciante | ENERGY | 4 | Pular corda iniciante | 5 | Autonomia | Cardio curto | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| energy-23-yoga-de-energia | ENERGY | 4 | Yoga de energia | 10 | Autonomia | Energia com controle | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| energy-27-caminhada-rapida | ENERGY | 5 | Caminhada rapida | 20 | Pratica avancada | Resistencia | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| energy-25-circuito-funcional-15-minutos | ENERGY | 5 | Circuito funcional 15 minutos | 15 | Pratica avancada | Energia sustentada | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| energy-26-pular-corda-por-etapas | ENERGY | 5 | Pular corda por etapas | 12 | Pratica avancada | Cardio progressivo | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| energy-26-pular-corda-por-rounds | ENERGY | 5 | Pular corda por rounds | 12 | Pratica avancada | Cardio progressivo | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| energy-30-rotina-semanal-de-energia | ENERGY | 5 | Rotina semanal de energia | 25 | Pratica avancada | Planejar energia por dia | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| energy-28-treino-corpo-inteiro-leve | ENERGY | 5 | Treino corpo inteiro leve | 20 | Pratica avancada | Ativacao global | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| energy-29-yoga-flow-energetico | ENERGY | 5 | Yoga flow energetico | 20 | Pratica avancada | Mobilidade e vigor | ["Quando energia for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| focus-06-checklist-minimo | FOCUS | 1 | Checklist minimo | 3 | Primeira pausa | Comecar com clareza | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| focus-04-nomear-3-prioridades | FOCUS | 1 | Nomear 3 prioridades | 2 | Primeira pausa | Organizar atencao | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| focus-02-olhar-fixo-em-um-ponto | FOCUS | 1 | Olhar fixo em um ponto | 1 | Primeira pausa | Reduzir dispersao | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| focus-05-pausa-sem-notificacao | FOCUS | 1 | Pausa sem notificacao | 3 | Primeira pausa | Cortar interrupcoes | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| focus-01-respiracao-de-chegada | FOCUS | 1 | Respiracao de chegada | 1 | Primeira pausa | Sair do automatico | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| focus-03-uma-tarefa-apenas | FOCUS | 1 | Uma tarefa apenas | 2 | Primeira pausa | Iniciar foco monotarefa | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| focus-07-bloco-de-foco-de-5-minutos | FOCUS | 2 | Bloco de foco de 5 minutos | 5 | Consistencia leve | Treinar inicio rapido | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| focus-12-fechar-abas-mentais | FOCUS | 2 | Fechar abas mentais | 5 | Consistencia leve | Diminuir carga cognitiva | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| focus-10-foco-com-respiracao-nasal | FOCUS | 2 | Foco com respiracao nasal | 4 | Consistencia leve | Estabilizar atencao | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| focus-09-mesa-limpa-mente-limpa | FOCUS | 2 | Mesa limpa, mente limpa | 5 | Consistencia leve | Reduzir estimulos | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| focus-11-meta-de-uma-linha | FOCUS | 2 | Meta de uma linha | 3 | Consistencia leve | Clarificar intencao | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| focus-08-tecnica-3-2-1-comecar | FOCUS | 2 | Tecnica 3-2-1 comecar | 3 | Consistencia leve | Vencer inercia | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| focus-14-atencao-plena-no-som | FOCUS | 3 | Atencao plena no som | 5 | Regulacao guiada | Treinar foco auditivo | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| focus-15-escrita-de-distracoes | FOCUS | 3 | Escrita de distracoes | 5 | Regulacao guiada | Esvaziar interrupcoes | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| focus-13-pomodoro-curto-10-2 | FOCUS | 3 | Pomodoro curto 10/2 | 12 | Regulacao guiada | Sustentar atencao | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| focus-16-reset-visual-20-20-20 | FOCUS | 3 | Reset visual 20-20-20 | 3 | Regulacao guiada | Descansar olhos | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| focus-17-respiracao-quadrada-para-foco | FOCUS | 3 | Respiracao quadrada para foco | 4 | Regulacao guiada | Regular ritmo mental | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| focus-18-ritual-de-inicio | FOCUS | 3 | Ritual de inicio | 5 | Regulacao guiada | Criar gatilho de foco | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| focus-19-bloco-de-foco-15-minutos | FOCUS | 4 | Bloco de foco 15 minutos | 15 | Autonomia | Aumentar resistencia | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| focus-23-foco-com-ruido-neutro | FOCUS | 4 | Foco com ruido neutro | 10 | Autonomia | Treinar estabilidade | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| focus-21-matriz-urgente-importante-simples | FOCUS | 4 | Matriz urgente/importante simples | 8 | Autonomia | Decidir melhor | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| focus-20-planejamento-por-energia | FOCUS | 4 | Planejamento por energia | 7 | Autonomia | Usar melhor horario | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| focus-22-revisao-de-distracoes | FOCUS | 4 | Revisao de distracoes | 8 | Autonomia | Identificar sabotadores | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| focus-24-tecnica-proxima-acao | FOCUS | 4 | Tecnica proxima acao | 5 | Autonomia | Reduzir procrastinacao | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| focus-25-deep-work-iniciante | FOCUS | 5 | Deep work iniciante | 25 | Pratica avancada | Foco prolongado | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| focus-30-foco-respiracao-revisao | FOCUS | 5 | Foco + respiracao + revisao | 20 | Pratica avancada | Combinar tecnicas | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| focus-26-manha-sem-distracao | FOCUS | 5 | Manha sem distracao | 20 | Pratica avancada | Proteger inicio do dia | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| focus-29-planejamento-de-foco-por-blocos | FOCUS | 5 | Planejamento de foco por blocos | 20 | Pratica avancada | Organizar semana | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| focus-27-revisao-semanal-de-foco | FOCUS | 5 | Revisao semanal de foco | 15 | Pratica avancada | Mapear padroes | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| focus-28-sessao-monotarefa-profunda | FOCUS | 5 | Sessao monotarefa profunda | 30 | Pratica avancada | Imersao total | ["Quando foco for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| mood-03-mao-no-coracao | MOOD | 1 | Mao no coracao | 2 | Primeira pausa | Autocompaixao | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| mood-06-mini-gratidao | MOOD | 1 | Mini gratidao | 3 | Primeira pausa | Aumentar afeto positivo | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| mood-05-musica-curta-positiva | MOOD | 1 | Musica curta positiva | 3 | Primeira pausa | Alterar estado | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| mood-01-nomear-o-humor-atual | MOOD | 1 | Nomear o humor atual | 1 | Primeira pausa | Consciencia emocional | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| mood-04-respiracao-suave | MOOD | 1 | Respiracao suave | 2 | Primeira pausa | Regular emocao | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| mood-02-uma-coisa-boa-agora | MOOD | 1 | Uma coisa boa agora | 2 | Primeira pausa | Redirecionar atencao | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| mood-10-caminhada-leve | MOOD | 2 | Caminhada leve | 5 | Consistencia leve | Humor via movimento | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| mood-07-diario-de-3-linhas | MOOD | 2 | Diario de 3 linhas | 5 | Consistencia leve | Expressar emocao | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| mood-11-foto-de-algo-bonito | MOOD | 2 | Foto de algo bonito | 3 | Consistencia leve | Atencao positiva | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| mood-08-lista-do-que-nao-foi-tao-ruim | MOOD | 2 | Lista do que nao foi tao ruim | 5 | Consistencia leve | Reequilibrar percepcao | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| mood-09-mensagem-para-alguem | MOOD | 2 | Mensagem para alguem | 5 | Consistencia leve | Conexao social | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| mood-12-playlist-de-regulacao | MOOD | 2 | Playlist de regulacao | 5 | Consistencia leve | Apoio emocional | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| mood-13-ativacao-comportamental-simples | MOOD | 3 | Ativacao comportamental simples | 10 | Regulacao guiada | Fazer algo com valor | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| mood-18-caminhada-com-observacao | MOOD | 3 | Caminhada com observacao | 10 | Regulacao guiada | Contato com ambiente | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| mood-14-diario-de-descarrego-mental | MOOD | 3 | Diario de descarrego mental | 8 | Regulacao guiada | Tirar peso da mente | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| mood-16-gratidao-detalhada | MOOD | 3 | Gratidao detalhada | 8 | Regulacao guiada | Ampliar perspectiva | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| mood-17-pequeno-prazer-planejado | MOOD | 3 | Pequeno prazer planejado | 10 | Regulacao guiada | Reforco positivo | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| mood-15-reestruturacao-leve | MOOD | 3 | Reestruturacao leve | 8 | Regulacao guiada | Questionar pensamento | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| mood-22-acao-de-conexao-social | MOOD | 4 | Acao de conexao social | 10 | Autonomia | Reduzir isolamento | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| mood-23-atividade-com-dominio | MOOD | 4 | Atividade com dominio | 15 | Autonomia | Sentir competencia | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| mood-20-carta-de-autocompaixao | MOOD | 4 | Carta de autocompaixao | 15 | Autonomia | Reduzir autocritica | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| mood-24-organizacao-de-ambiente-emocional | MOOD | 4 | Organizacao de ambiente emocional | 15 | Autonomia | Melhorar contexto | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| mood-19-plano-de-atividade-prazerosa | MOOD | 4 | Plano de atividade prazerosa | 15 | Autonomia | Aumentar reforco | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| mood-21-registro-pensamento-evidencia | MOOD | 4 | Registro pensamento/evidencia | 15 | Autonomia | Flexibilizar mente | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| mood-29-exposicao-leve-a-algo-evitado | MOOD | 5 | Exposicao leve a algo evitado | 20 | Pratica avancada | Retomar confianca | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| mood-28-gratidao-para-outra-pessoa | MOOD | 5 | Gratidao para outra pessoa | 15 | Pratica avancada | Fortalecer vinculo | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| mood-25-plano-semanal-de-ativacao-comportamental | MOOD | 5 | Plano semanal de ativacao comportamental | 20 | Pratica avancada | Humor via rotina | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| mood-26-projeto-pequeno-com-sentido | MOOD | 5 | Projeto pequeno com sentido | 30 | Pratica avancada | Engajamento | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| mood-27-revisao-de-padroes-de-humor | MOOD | 5 | Revisao de padroes de humor | 20 | Pratica avancada | Autoconhecimento | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| mood-30-ritual-de-cuidado-emocional | MOOD | 5 | Ritual de cuidado emocional | 30 | Pratica avancada | Combinar escrita, acao e descanso | ["Quando humor for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| sleep-05-alongar-pescoco-e-ombros | SLEEP | 1 | Alongar pescoco e ombros | 3 | Primeira pausa | Soltar tensao | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| sleep-04-anotar-pendencia-de-amanha | SLEEP | 1 | Anotar pendencia de amanha | 3 | Primeira pausa | Esvaziar preocupacao | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| sleep-03-celular-longe-da-cama | SLEEP | 1 | Celular longe da cama | 1 | Primeira pausa | Reduzir estimulo | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| sleep-02-luz-baixa | SLEEP | 1 | Luz baixa | 2 | Primeira pausa | Preparar ambiente | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| sleep-01-respiracao-antes-de-dormir | SLEEP | 1 | Respiracao antes de dormir | 3 | Primeira pausa | Desacelerar | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| sleep-06-ritual-de-fechamento | SLEEP | 1 | Ritual de fechamento | 3 | Primeira pausa | Sinalizar descanso | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| sleep-12-banho-morno-planejado | SLEEP | 2 | Banho morno planejado | 10 | Consistencia leve | Relaxamento | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| sleep-07-diario-de-desligamento | SLEEP | 2 | Diario de desligamento | 5 | Consistencia leve | Fechar o dia | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| sleep-11-leitura-leve-sem-tela | SLEEP | 2 | Leitura leve sem tela | 10 | Consistencia leve | Transicao | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| sleep-10-preparar-quarto | SLEEP | 2 | Preparar quarto | 5 | Consistencia leve | Higiene do sono | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| sleep-09-relaxamento-dos-pes-a-cabeca | SLEEP | 2 | Relaxamento dos pes a cabeca | 5 | Consistencia leve | Corpo pronto | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| sleep-08-respiracao-4-7-8-suave | SLEEP | 2 | Respiracao 4-7-8 suave | 4 | Consistencia leve | Relaxar | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| sleep-16-alongamento-restaurativo | SLEEP | 3 | Alongamento restaurativo | 8 | Regulacao guiada | Preparar sono | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| sleep-17-escaneamento-corporal | SLEEP | 3 | Escaneamento corporal | 10 | Regulacao guiada | Desligar corpo | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| sleep-15-escrita-de-preocupacoes | SLEEP | 3 | Escrita de preocupacoes | 8 | Regulacao guiada | Reduzir ruminacao | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| sleep-14-imaginacao-guiada-para-descanso | SLEEP | 3 | Imaginacao guiada para descanso | 8 | Regulacao guiada | Acalmar mente | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| sleep-13-relaxamento-muscular-progressivo-curto-para-sono | SLEEP | 3 | Relaxamento muscular progressivo curto para sono | 8 | Regulacao guiada | Reduzir tensao | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| sleep-18-rotina-sem-tela-30-min | SLEEP | 3 | Rotina sem tela 30 min | 30 | Regulacao guiada | Higiene do sono | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| sleep-19-horario-fixo-de-desaceleracao | SLEEP | 4 | Horario fixo de desaceleracao | 15 | Autonomia | Regular rotina | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| sleep-20-plano-de-cafeina | SLEEP | 4 | Plano de cafeina | 5 | Autonomia | Melhorar sono | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| sleep-21-revisao-de-habitos-noturnos | SLEEP | 4 | Revisao de habitos noturnos | 10 | Autonomia | Identificar gatilhos | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| sleep-22-ritual-completo-de-sono | SLEEP | 4 | Ritual completo de sono | 20 | Autonomia | Consistencia | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| sleep-24-rotina-de-quarto-minimalista | SLEEP | 4 | Rotina de quarto minimalista | 15 | Autonomia | Ambiente favoravel | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| sleep-23-tecnica-deixar-para-amanha | SLEEP | 4 | Tecnica deixar para amanha | 10 | Autonomia | Reduzir mente acelerada | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| sleep-26-diario-de-sono | SLEEP | 5 | Diario de sono | 5 | Pratica avancada | Identificar padroes | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| sleep-27-janela-de-desaceleracao-de-60-min | SLEEP | 5 | Janela de desaceleracao de 60 min | 60 | Pratica avancada | Sono profundo | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| sleep-25-programa-de-7-noites | SLEEP | 5 | Programa de 7 noites | 7 | Pratica avancada | Criar consistencia | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| sleep-28-protocolo-noite-dificil | SLEEP | 5 | Protocolo noite dificil | 20 | Pratica avancada | Evitar frustracao | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| sleep-29-rotina-semanal-de-sono | SLEEP | 5 | Rotina semanal de sono | 20 | Pratica avancada | Ajustar agenda | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| sleep-30-sono-respiracao-ambiente | SLEEP | 5 | Sono + respiracao + ambiente | 30 | Pratica avancada | Combinar fatores | ["Quando sono for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| stress-04-maos-quentes | STRESS | 1 | Maos quentes | 2 | Primeira pausa | Aterramento corporal | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| stress-05-nomear-o-que-sente | STRESS | 1 | Nomear o que sente | 2 | Primeira pausa | Regular emocao | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| stress-03-ombros-para-baixo | STRESS | 1 | Ombros para baixo | 1 | Primeira pausa | Aliviar corpo | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| stress-06-pausa-de-agua | STRESS | 1 | Pausa de agua | 2 | Primeira pausa | Interromper ciclo de estresse | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| stress-01-respiracao-4-4-6 | STRESS | 1 | Respiracao 4-4-6 | 3 | Primeira pausa | Reduzir ativacao | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| stress-02-soltar-mandibula | STRESS | 1 | Soltar mandibula | 1 | Primeira pausa | Relaxar tensao | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| stress-10-caminhada-lenta | STRESS | 2 | Caminhada lenta | 5 | Consistencia leve | Descarregar tensao | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| stress-11-escrita-o-que-esta-pesando | STRESS | 2 | Escrita o que esta pesando | 5 | Consistencia leve | Organizar preocupacao | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| stress-12-pausa-sem-tela | STRESS | 2 | Pausa sem tela | 5 | Consistencia leve | Reduzir estimulo | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| stress-08-relaxamento-de-maos-e-bracos | STRESS | 2 | Relaxamento de maos e bracos | 5 | Consistencia leve | Reduzir tensao muscular | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| stress-07-respiracao-diafragmatica | STRESS | 2 | Respiracao diafragmatica | 4 | Consistencia leve | Ativar calma | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| stress-09-tecnica-5-4-3-2-1 | STRESS | 2 | Tecnica 5-4-3-2-1 | 5 | Consistencia leve | Grounding sensorial | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| stress-16-alongamento-de-pescoco-e-ombros | STRESS | 3 | Alongamento de pescoco e ombros | 6 | Regulacao guiada | Soltar carga fisica | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| stress-17-diario-de-preocupacao-controlada | STRESS | 3 | Diario de preocupacao controlada | 8 | Regulacao guiada | Separar problema de ruminacao | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| stress-15-imaginacao-guiada-segura | STRESS | 3 | Imaginacao guiada segura | 8 | Regulacao guiada | Criar sensacao de protecao | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| stress-18-pausa-de-autocompaixao | STRESS | 3 | Pausa de autocompaixao | 5 | Regulacao guiada | Reduzir autocobranca | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| stress-13-relaxamento-muscular-progressivo-curto | STRESS | 3 | Relaxamento muscular progressivo curto | 7 | Regulacao guiada | Tensao e relaxamento | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| stress-14-respiracao-alongada | STRESS | 3 | Respiracao alongada | 6 | Regulacao guiada | Prolongar exalacao | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite se houver desconforto fisico ou emocional intenso."] |
| stress-21-caminhada-consciente | STRESS | 4 | Caminhada consciente | 10 | Autonomia | Regular corpo e mente | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| stress-24-descompressao-pos-trabalho | STRESS | 4 | Descompressao pos-trabalho | 12 | Autonomia | Separar trabalho e descanso | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| stress-20-plano-o-que-esta-sob-meu-controle | STRESS | 4 | Plano o que esta sob meu controle | 10 | Autonomia | Reduzir impotencia | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| stress-19-relaxamento-muscular-progressivo-completo | STRESS | 4 | Relaxamento muscular progressivo completo | 12 | Autonomia | Relaxamento profundo | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| stress-22-reset-de-ambiente | STRESS | 4 | Reset de ambiente | 10 | Autonomia | Reduzir caos externo | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| stress-23-tecnica-de-aceitacao-breve | STRESS | 4 | Tecnica de aceitacao breve | 8 | Autonomia | Diminuir resistencia | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| stress-29-caminhada-escrita-reflexiva | STRESS | 5 | Caminhada + escrita reflexiva | 25 | Pratica avancada | Processar tensao | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| stress-27-mapa-de-gatilhos-de-estresse | STRESS | 5 | Mapa de gatilhos de estresse | 20 | Pratica avancada | Identificar padroes | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| stress-28-plano-preventivo-da-semana | STRESS | 5 | Plano preventivo da semana | 20 | Pratica avancada | Evitar sobrecarga | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| stress-30-ritual-completo-de-regulacao | STRESS | 5 | Ritual completo de regulacao | 30 | Pratica avancada | Combinar corpo, respiracao e escrita | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| stress-26-rotina-antiestresse-de-fim-de-dia | STRESS | 5 | Rotina antiestresse de fim de dia | 20 | Pratica avancada | Desligamento gradual | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
| stress-25-sessao-completa-de-respiracao-pmr | STRESS | 5 | Sessao completa de respiracao + PMR | 20 | Pratica avancada | Relaxamento estruturado | ["Quando antiestresse for prioridade do dia.","Quando voce quiser uma pausa preventiva e segura."] | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto.","Reduza para nivel 1 ou 2 se o corpo pedir descanso."] |
## Exercicios Guiados - ExerciseInstruction
| Slug | Titulo | Grupo | Categoria | Area | Tipo | Nivel | Unlock | Duracao s | Sets | Reps | Intensidade | Equipamento | Video |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| respiracao-4-4-6 | Respiracao 4-4-6 | MENTAL | BREATHING | STRESS | BREATHING | 1 | 1 | 180 |  |  | VERY_LIGHT | Nenhum | sem registro |
| respiracao-antes-de-dormir | Respiracao antes de dormir | MENTAL | BREATHING | STRESS | BREATHING | 1 | 1 | 180 |  |  | VERY_LIGHT | Nenhum | sem registro |
| respiracao-de-chegada | Respiracao de chegada | MENTAL | BREATHING | FOCUS | BREATHING | 1 | 1 | 60 |  |  | VERY_LIGHT | Nenhum | sem registro |
| alongamento-matinal | Alongamento matinal | MENTAL | ENERGY_GIVE | ENERGY | MOBILITY | 1 | 1 | 180 |  |  | LIGHT | Nenhum | sem registro |
| caminhada-leve-moderada | Caminhada leve a moderada | MENTAL | ENERGY_GIVE | ENERGY | WALKING | 1 | 1 | 1200 |  |  | LIGHT | Nenhum | sem registro |
| respiracao-profunda-pranayama-energia | Respiracao profunda / Pranayama | MENTAL | ENERGY_GIVE | ENERGY | BREATHING | 1 | 1 | 120 |  |  | LIGHT | Nenhum | sem registro |
| fortalecimento-pilates-disposicao | Musculacao ou Pilates | MENTAL | ENERGY_GIVE | ENERGY | MOBILITY | 3 | 3 | 600 |  |  | LIGHT | Nenhum | sem registro |
| polichinelos-pausa-ativa | Polichinelos | MENTAL | ENERGY_GIVE | ENERGY | TIME_BASED | 3 | 3 | 60 |  |  | LIGHT | Nenhum | sem registro |
| lutas-sombra-descarga | Lutas e treino de sombra | MENTAL | ENERGY_SPEND | ENERGY | MOBILITY | 3 | 3 | 300 |  |  | MODERATE | Nenhum | sem registro |
| subir-escadas-descarga | Subir escadas | MENTAL | ENERGY_SPEND | ENERGY | TIME_BASED | 3 | 3 | 120 |  |  | MODERATE | Nenhum | sem registro |
| corrida-descarga | Corrida | MENTAL | ENERGY_SPEND | ENERGY | TIME_BASED | 5 | 5 | 600 |  |  | MODERATE | Nenhum | sem registro |
| pular-corda-descarga | Pular corda | MENTAL | ENERGY_SPEND | ENERGY | MOBILITY | 5 | 5 | 180 |  |  | MODERATE | Corda opcional | sem registro |
| treino-funcional-hiit | Treino funcional / HIIT | MENTAL | ENERGY_SPEND | ENERGY | MOBILITY | 5 | 5 | 360 |  |  | MODERATE | Nenhum | sem registro |
| acompanhamento-progresso-foco | Acompanhamento do progresso de foco | MENTAL | FOCUS_TRAINING | FOCUS | TIME_BASED | 1 | 1 | 120 |  |  | VERY_LIGHT | Nenhum | sem registro |
| contagem-palavras-texto | Contagem de palavras em texto | MENTAL | FOCUS_TRAINING | FOCUS | TIME_BASED | 1 | 1 | 180 |  |  | VERY_LIGHT | Livro, revista ou texto fisico | sem registro |
| contagem-mental-direta-reversa | Contagem mental direta e reversa | MENTAL | FOCUS_TRAINING | FOCUS | TIME_BASED | 1 | 1 | 120 |  |  | VERY_LIGHT | Nenhum | sem registro |
| contemplacao-objeto-cotidiano | Contemplacao de objeto cotidiano | MENTAL | FOCUS_TRAINING | FOCUS | TIME_BASED | 1 | 1 | 180 |  |  | VERY_LIGHT | Nenhum | sem registro |
| meditacao-mindfulness | Meditacao mindfulness | MENTAL | FOCUS_TRAINING | FOCUS | TIME_BASED | 1 | 1 | 180 |  |  | VERY_LIGHT | Nenhum | sem registro |
| observacao-consciente-fruta | Observacao consciente de uma fruta | MENTAL | FOCUS_TRAINING | FOCUS | TIME_BASED | 1 | 1 | 180 |  |  | VERY_LIGHT | Nenhum | sem registro |
| observacao-triangulo-desenhado | Observacao de triangulo desenhado | MENTAL | FOCUS_TRAINING | FOCUS | TIME_BASED | 1 | 1 | 180 |  |  | VERY_LIGHT | Papel e caneta | sem registro |
| repeticao-mental-frase-inspiradora | Repeticao mental de frase inspiradora | MENTAL | FOCUS_TRAINING | FOCUS | TIME_BASED | 1 | 1 | 300 |  |  | VERY_LIGHT | Nenhum | sem registro |
| respiracao-consciente-foco | Respiracao consciente | MENTAL | FOCUS_TRAINING | FOCUS | BREATHING | 1 | 1 | 60 |  |  | VERY_LIGHT | Nenhum | sem registro |
| um-minuto-de-foco | Um minuto de foco | MENTAL | FOCUS_TRAINING | FOCUS | TIME_BASED | 1 | 1 | 60 |  |  | VERY_LIGHT | Nenhum | sem registro |
| visualizacao-tarefa-sucesso | Visualizacao de tarefa realizada com sucesso | MENTAL | FOCUS_TRAINING | FOCUS | TIME_BASED | 1 | 1 | 60 |  |  | VERY_LIGHT | Nenhum | sem registro |
| calculos-mentais | Calculos mentais | MENTAL | FOCUS_TRAINING | FOCUS | TIME_BASED | 3 | 3 | 180 |  |  | VERY_LIGHT | Nenhum | sem registro |
| contagem-mental-3-em-3 | Contagem mental de 3 em 3 | MENTAL | FOCUS_TRAINING | FOCUS | TIME_BASED | 3 | 3 | 180 |  |  | VERY_LIGHT | Nenhum | sem registro |
| tecnica-pomodoro | Tecnica Pomodoro | MENTAL | FOCUS_TRAINING | FOCUS | TIME_BASED | 3 | 3 | 1500 |  |  | VERY_LIGHT | Nenhum | sem registro |
| visualizacao-triangulo-olhos-fechados | Visualizacao do triangulo com olhos fechados | MENTAL | FOCUS_TRAINING | FOCUS | TIME_BASED | 3 | 3 | 240 |  |  | VERY_LIGHT | Papel e caneta | sem registro |
| visualizacao-mental-fruta | Visualizacao mental da fruta | MENTAL | FOCUS_TRAINING | FOCUS | TIME_BASED | 3 | 3 | 240 |  |  | VERY_LIGHT | Nenhum | sem registro |
| silencio-mental | Silencio mental | MENTAL | FOCUS_TRAINING | FOCUS | TIME_BASED | 5 | 5 | 300 |  |  | VERY_LIGHT | Nenhum | sem registro |
| visualizacao-triangulo-olhos-abertos | Visualizacao do triangulo com olhos abertos | MENTAL | FOCUS_TRAINING | FOCUS | TIME_BASED | 5 | 5 | 180 |  |  | VERY_LIGHT | Papel e caneta | sem registro |
| meditacao-silenciosa | Meditacao silenciosa | MENTAL | HAPPINESS_AUTOCONHECIMENTO | MOOD | TIME_BASED | 3 | 3 | 300 |  |  | VERY_LIGHT | Nenhum | sem registro |
| roda-da-vida | Roda da vida | MENTAL | HAPPINESS_AUTOCONHECIMENTO | MOOD | WRITING | 3 | 3 | 600 |  |  | VERY_LIGHT | Papel ou caderno | sem registro |
| atos-de-bondade | Atos de bondade | MENTAL | HAPPINESS_CONEXAO | MOOD | TIME_BASED | 1 | 1 | 120 |  |  | VERY_LIGHT | Nenhum | sem registro |
| equilibrio-digital | Equilibrio digital | MENTAL | HAPPINESS_CONEXAO | MOOD | TIME_BASED | 1 | 1 | 600 |  |  | VERY_LIGHT | Nenhum | sem registro |
| encontros-presenciais | Encontros presenciais | MENTAL | HAPPINESS_CONEXAO | MOOD | TIME_BASED | 3 | 3 | 1200 |  |  | VERY_LIGHT | Nenhum | sem registro |
| caminhada-atenta | Caminhada atenta | MENTAL | HAPPINESS_CORPO_NATUREZA | MOOD | WALKING | 1 | 1 | 300 |  |  | VERY_LIGHT | Nenhum | sem registro |
| grounding-natureza | Grounding | MENTAL | HAPPINESS_CORPO_NATUREZA | MOOD | TIME_BASED | 1 | 1 | 600 |  |  | VERY_LIGHT | Nenhum | sem registro |
| respiracao-pranayama-humor | Respiracao Pranayama | MENTAL | HAPPINESS_CORPO_NATUREZA | MOOD | BREATHING | 1 | 1 | 60 |  |  | VERY_LIGHT | Nenhum | sem registro |
| artesanato-criativo | Artesanato | MENTAL | HAPPINESS_CRIATIVIDADE | MOOD | TIME_BASED | 1 | 1 | 600 |  |  | VERY_LIGHT | Nenhum | sem registro |
| desenho-livre | Desenho | MENTAL | HAPPINESS_CRIATIVIDADE | MOOD | TIME_BASED | 1 | 1 | 300 |  |  | VERY_LIGHT | Papel ou caderno | sem registro |
| leitura-livro-fisico | Leitura em livro fisico | MENTAL | HAPPINESS_CRIATIVIDADE | MOOD | TIME_BASED | 1 | 1 | 300 |  |  | VERY_LIGHT | Nenhum | sem registro |
| culinaria-simples | Culinaria | MENTAL | HAPPINESS_CRIATIVIDADE | MOOD | TIME_BASED | 3 | 3 | 600 |  |  | VERY_LIGHT | Nenhum | sem registro |
| quebra-cabecas-presenca | Quebra-cabecas | MENTAL | HAPPINESS_CRIATIVIDADE | MOOD | TIME_BASED | 3 | 3 | 600 |  |  | VERY_LIGHT | Nenhum | sem registro |
| movimento-para-bem-estar | Exercicios fisicos para bem-estar | MENTAL | HAPPINESS_HORMONIOS | MOOD | TIME_BASED | 1 | 1 | 300 |  |  | VERY_LIGHT | Nenhum | sem registro |
| exposicao-solar-segura | Exposicao solar segura | MENTAL | HAPPINESS_HORMONIOS | MOOD | TIME_BASED | 1 | 1 | 600 |  |  | VERY_LIGHT | Nenhum | sem registro |
| rir-mais | Rir mais | MENTAL | HAPPINESS_HORMONIOS | MOOD | TIME_BASED | 1 | 1 | 300 |  |  | VERY_LIGHT | Nenhum | sem registro |
| apreciar-natureza | Apreciar a natureza | MENTAL | HAPPINESS_MENTALIDADE | MOOD | TIME_BASED | 1 | 1 | 300 |  |  | VERY_LIGHT | Nenhum | sem registro |
| diario-de-gratidao | Diario de gratidao | MENTAL | HAPPINESS_MENTALIDADE | MOOD | WRITING | 1 | 1 | 180 |  |  | VERY_LIGHT | Papel ou caderno | sem registro |
| saborear-momentos | Saborear momentos | MENTAL | HAPPINESS_MENTALIDADE | MOOD | TIME_BASED | 1 | 1 | 60 |  |  | VERY_LIGHT | Nenhum | sem registro |
| mesa-limpa-mente-leve | Mesa limpa, mente leve | MENTAL | ORGANIZATION | FOCUS | TIME_BASED | 1 | 1 | 300 |  |  | VERY_LIGHT | Nenhum | sem registro |
| nomear-3-prioridades | Nomear 3 prioridades | MENTAL | ORGANIZATION | FOCUS | WRITING | 1 | 1 | 180 |  |  | VERY_LIGHT | Papel, bloco de notas ou campo de anotacao | sem registro |
| organizacao-5-minutos | Organizacao de 5 minutos | MENTAL | ORGANIZATION | FOCUS | TIME_BASED | 1 | 1 | 300 |  |  | VERY_LIGHT | Nenhum | sem registro |
| organizacao-do-ambiente | Organizacao do ambiente | MENTAL | ORGANIZATION | FOCUS | TIME_BASED | 1 | 1 | 600 |  |  | VERY_LIGHT | Nenhum | sem registro |
| agua-com-presenca | Agua com presenca | MENTAL | RELAXATION | ENERGY | TIME_BASED | 1 | 1 | 120 |  |  | VERY_LIGHT | Nenhum | sem registro |
| checkin-emocional-guiado | Check-in emocional guiado | MENTAL | RELAXATION | MOOD | TIME_BASED | 1 | 1 | 180 |  |  | VERY_LIGHT | Nenhum | sem registro |
| escaneamento-corporal | Escaneamento corporal | MENTAL | RELAXATION | SLEEP | RELAXATION | 1 | 1 | 600 |  |  | VERY_LIGHT | Nenhum | sem registro |
| luz-baixa-transicao | Luz baixa de transicao | MENTAL | RELAXATION | SLEEP | TIME_BASED | 1 | 1 | 180 |  |  | VERY_LIGHT | Nenhum | sem registro |
| luz-e-janela | Luz e janela | MENTAL | RELAXATION | ENERGY | TIME_BASED | 1 | 1 | 180 |  |  | VERY_LIGHT | Nenhum | sem registro |
| musica-curta-positiva | Musica curta positiva | MENTAL | RELAXATION | MOOD | TIME_BASED | 1 | 1 | 180 |  |  | VERY_LIGHT | Nenhum | sem registro |
| nomear-humor-atual | Nomear o humor atual | MENTAL | RELAXATION | MOOD | TIME_BASED | 1 | 1 | 60 |  |  | VERY_LIGHT | Nenhum | sem registro |
| relaxamento-pes-cabeca | Relaxamento dos pes a cabeca | MENTAL | RELAXATION | SLEEP | RELAXATION | 1 | 1 | 300 |  |  | VERY_LIGHT | Nenhum | sem registro |
| ritual-sono-sem-tela | Ritual de sono sem tela | MENTAL | RELAXATION | SLEEP | TIME_BASED | 1 | 1 | 600 |  |  | VERY_LIGHT | Nenhum | sem registro |
| fechamento-do-dia | Fechamento do dia | MENTAL | RELAXATION | SLEEP | TIME_BASED | 4 | 4 | 480 |  |  | VERY_LIGHT | Nenhum | sem registro |
| banho-morno-relaxamento | Banho morno | MENTAL | SLEEP_DOWN | SLEEP | RELAXATION | 1 | 1 | 300 |  |  | VERY_LIGHT | Nenhum | sem registro |
| higiene-do-sono | Higiene do sono | MENTAL | SLEEP_DOWN | SLEEP | RELAXATION | 1 | 1 | 1800 |  |  | VERY_LIGHT | Nenhum | sem registro |
| tecnica-4-7-8 | Tecnica 4-7-8 | MENTAL | SLEEP_DOWN | SLEEP | RELAXATION | 1 | 1 | 120 |  |  | VERY_LIGHT | Nenhum | sem registro |
| yoga-noturna-alongamento-suave | Yoga noturna ou alongamento suave | MENTAL | SLEEP_DOWN | SLEEP | RELAXATION | 1 | 1 | 600 |  |  | VERY_LIGHT | Nenhum | sem registro |
| relaxamento-muscular-progressivo | Relaxamento muscular progressivo | MENTAL | SLEEP_DOWN | SLEEP | RELAXATION | 3 | 3 | 480 |  |  | VERY_LIGHT | Nenhum | sem registro |
| tecnica-militar-sono | Tecnica militar | MENTAL | SLEEP_DOWN | SLEEP | RELAXATION | 3 | 3 | 300 |  |  | VERY_LIGHT | Nenhum | sem registro |
| agua-gelada-alerta | Agua gelada | MENTAL | SLEEP_UP | SLEEP | TIME_BASED | 1 | 1 | 60 |  |  | VERY_LIGHT | Nenhum | sem registro |
| automassagem-pontos-alerta | Automassagem em pontos de pressao | MENTAL | SLEEP_UP | SLEEP | TIME_BASED | 1 | 1 | 60 |  |  | VERY_LIGHT | Nenhum | sem registro |
| cafeina-com-cuidado | Cafeina com cuidado | MENTAL | SLEEP_UP | SLEEP | TIME_BASED | 1 | 1 | 180 |  |  | VERY_LIGHT | Opcional | sem registro |
| caminhada-curta-luz-solar | Caminhada curta com luz solar | MENTAL | SLEEP_UP | SLEEP | WALKING | 1 | 1 | 300 |  |  | VERY_LIGHT | Nenhum | sem registro |
| estimulacao-mental-alerta | Estimulacao mental | MENTAL | SLEEP_UP | SLEEP | TIME_BASED | 1 | 1 | 120 |  |  | VERY_LIGHT | Nenhum | sem registro |
| hidratacao-alerta | Hidratacao | MENTAL | SLEEP_UP | SLEEP | TIME_BASED | 1 | 1 | 60 |  |  | VERY_LIGHT | Nenhum | sem registro |
| iluminacao-clara | Iluminacao clara | MENTAL | SLEEP_UP | SLEEP | TIME_BASED | 1 | 1 | 60 |  |  | VERY_LIGHT | Nenhum | sem registro |
| chiclete-menta-alerta | Mascar chiclete de menta | MENTAL | SLEEP_UP | SLEEP | TIME_BASED | 1 | 1 | 180 |  |  | VERY_LIGHT | Nenhum | sem registro |
| movimento-alongamento-tirar-sono | Movimento e alongamento | MENTAL | SLEEP_UP | SLEEP | TIME_BASED | 1 | 1 | 120 |  |  | VERY_LIGHT | Nenhum | sem registro |
| respiracao-energizante | Respiracao energizante | MENTAL | SLEEP_UP | SLEEP | BREATHING | 1 | 1 | 60 |  |  | VERY_LIGHT | Nenhum | sem registro |
| respiracao-alternada | Respiracao alternada | MENTAL | SLEEP_UP | SLEEP | BREATHING | 3 | 3 | 120 |  |  | VERY_LIGHT | Nenhum | sem registro |
| diario-3-linhas | Diario de 3 linhas | MENTAL | WRITING | MOOD | WRITING | 1 | 1 | 300 |  |  | VERY_LIGHT | Papel, bloco de notas ou campo de anotacao | sem registro |
| diario-descarrego-mental | Diario de descarrego mental | MENTAL | WRITING | MOOD | WRITING | 1 | 1 | 300 |  |  | VERY_LIGHT | Caderno, papel ou campo de anotacao | sem registro |
| escrita-de-distracoes | Escrita de distracoes | MENTAL | WRITING | FOCUS | WRITING | 1 | 1 | 300 |  |  | VERY_LIGHT | Papel, bloco de notas ou campo de anotacao | sem registro |
| escrita-preocupacao-controlada | Escrita de preocupacao controlada | MENTAL | WRITING | MOOD | WRITING | 1 | 1 | 480 |  |  | VERY_LIGHT | Caderno, papel ou campo de anotacao | sem registro |
| gratidao-rapida | Gratidao rapida | MENTAL | WRITING | MOOD | WRITING | 1 | 1 | 180 |  |  | VERY_LIGHT | Caderno, papel ou campo de anotacao | sem registro |
| mensagem-gentil-para-alguem | Mensagem gentil para alguem | MENTAL | WRITING | MOOD | WRITING | 1 | 1 | 300 |  |  | VERY_LIGHT | Celular ou papel | sem registro |
| pendencia-para-amanha | Pendencia para amanha | MENTAL | WRITING | SLEEP | WRITING | 1 | 1 | 180 |  |  | VERY_LIGHT | Papel, bloco de notas ou campo de anotacao | sem registro |
| planejamento-gentil-dia-seguinte | Planejamento gentil do dia seguinte | MENTAL | WRITING | MOOD | WRITING | 1 | 1 | 600 |  |  | VERY_LIGHT | Caderno, papel ou campo de anotacao | sem registro |
| reflexao-fim-de-semana | Reflexao de fim de semana | MENTAL | WRITING | MOOD | WRITING | 1 | 1 | 900 |  |  | VERY_LIGHT | Caderno, papel ou campo de anotacao | sem registro |
| uma-coisa-boa-agora | Uma coisa boa agora | MENTAL | WRITING | MOOD | WRITING | 1 | 1 | 120 |  |  | VERY_LIGHT | Papel, bloco de notas ou campo de anotacao | sem registro |
| ref_006_mov_05 | Agachamentos | PHYSICAL | HOME_FUNCTIONAL | BODY_MOVEMENT | REPS_BASED | 1 | 1 | 300 | 2 | 90 repeticoes | MODERATE | Nenhum ou colchonete | PLANNED (/videos/ref_006_mov_05.mp4) |
| ref_006_mov_07 | Coice de gluteo | PHYSICAL | HOME_FUNCTIONAL | BODY_MOVEMENT | REPS_BASED | 1 | 1 | 240 | 2 | 45 repeticoes cada perna | MODERATE | Colchonete | PLANNED (/videos/ref_006_mov_07.mp4) |
| ref_006_mov_01 | Toque nos calcanhares | PHYSICAL | HOME_FUNCTIONAL | BODY_MOVEMENT | REPS_BASED | 1 | 1 | 240 | 2 | 45 repeticoes | MODERATE | Colchonete | PLANNED (/videos/ref_006_mov_01.mp4) |
| agachamento-leve-guiado | Agachamento leve guiado | PHYSICAL | HOME_FUNCTIONAL | BODY_MOVEMENT | REPS_BASED | 2 | 2 |  | 2 | 8 a 12 | LIGHT | Nenhum | READY (/videos/agachamento-leve-guiado.mp4) |
| ref_006_mov_08 | Prancha de antebraco | PHYSICAL | HOME_FUNCTIONAL | BODY_MOVEMENT | TIME_BASED | 2 | 2 | 180 | 3 | 1 minuto | MODERATE | Colchonete | PLANNED (/videos/ref_006_mov_08.mp4) |
| ref_006_mov_03 | Torcao russa | PHYSICAL | HOME_FUNCTIONAL | BODY_MOVEMENT | REPS_BASED | 2 | 2 | 240 | 2 | 60 repeticoes | MODERATE | Colchonete | PLANNED (/videos/ref_006_mov_03.mp4) |
| ref_006_mov_02 | Abdominal bicicleta | PHYSICAL | HOME_FUNCTIONAL | BODY_MOVEMENT | REPS_BASED | 3 | 3 | 240 | 2 | 45 repeticoes | MODERATE | Colchonete | PLANNED (/videos/ref_006_mov_02.mp4) |
| ref_008_mov_09 | Abdominal bicicleta | PHYSICAL | HOME_FUNCTIONAL | BODY_MOVEMENT | REPS_BASED | 3 | 3 | 90 |  |  | MODERATE_PLUS | nenhum, colchonete | PLANNED (/videos/ref_008_mov_09.mp4) |
| ref_008_mov_02 | Agachamentos com peso corporal | PHYSICAL | HOME_FUNCTIONAL | BODY_MOVEMENT | REPS_BASED | 3 | 3 | 90 |  |  | MODERATE_PLUS | nenhum, colchonete | PLANNED (/videos/ref_008_mov_02.mp4) |
| ref_006_mov_06 | Avancos / passadas | PHYSICAL | HOME_FUNCTIONAL | BODY_MOVEMENT | REPS_BASED | 3 | 3 | 300 | 2 | 70 repeticoes cada perna | MODERATE | Nenhum ou colchonete | PLANNED (/videos/ref_006_mov_06.mp4) |
| ref_008_mov_10 | Burpees | PHYSICAL | HOME_FUNCTIONAL | BODY_MOVEMENT | REPS_BASED | 3 | 3 | 90 |  |  | MODERATE_PLUS | nenhum, colchonete | PLANNED (/videos/ref_008_mov_10.mp4) |
| ref_008_mov_07 | Corrida parada com joelhos altos | PHYSICAL | HOME_FUNCTIONAL | BODY_MOVEMENT | REPS_BASED | 3 | 3 | 90 |  |  | MODERATE_PLUS | nenhum, colchonete | PLANNED (/videos/ref_008_mov_07.mp4) |
| ref_008_mov_08 | Elevacao de pernas | PHYSICAL | HOME_FUNCTIONAL | BODY_MOVEMENT | REPS_BASED | 3 | 3 | 90 |  |  | MODERATE_PLUS | nenhum, colchonete | PLANNED (/videos/ref_008_mov_08.mp4) |
| ref_008_mov_06 | Escaladores | PHYSICAL | HOME_FUNCTIONAL | BODY_MOVEMENT | REPS_BASED | 3 | 3 | 90 |  |  | MODERATE_PLUS | nenhum, colchonete | PLANNED (/videos/ref_008_mov_06.mp4) |
| ref_008_mov_03 | Flexoes de braco | PHYSICAL | HOME_FUNCTIONAL | BODY_MOVEMENT | REPS_BASED | 3 | 3 | 90 |  |  | MODERATE_PLUS | nenhum, colchonete | PLANNED (/videos/ref_008_mov_03.mp4) |
| funcional-em-casa-iniciante | Funcional em casa iniciante | PHYSICAL | HOME_FUNCTIONAL | BODY_MOVEMENT | REPS_BASED | 3 | 3 |  | 2 | 6 a 10 por movimento | LIGHT | Nenhum | READY (/videos/funcional-em-casa-iniciante.mp4) |
| ref_008_mov_01 | Polichinelos | PHYSICAL | HOME_FUNCTIONAL | BODY_MOVEMENT | REPS_BASED | 3 | 3 | 90 |  |  | MODERATE_PLUS | nenhum, colchonete | PLANNED (/videos/ref_008_mov_01.mp4) |
| ref_008_mov_04 | Pontes de gluteo | PHYSICAL | HOME_FUNCTIONAL | BODY_MOVEMENT | REPS_BASED | 3 | 3 | 90 |  |  | MODERATE_PLUS | nenhum, colchonete | PLANNED (/videos/ref_008_mov_04.mp4) |
| ref_008_mov_05 | Prancha | PHYSICAL | HOME_FUNCTIONAL | BODY_MOVEMENT | REPS_BASED | 3 | 3 | 90 |  |  | MODERATE_PLUS | nenhum, colchonete | PLANNED (/videos/ref_008_mov_05.mp4) |
| ref_006_mov_04 | Toque no ombro em prancha | PHYSICAL | HOME_FUNCTIONAL | BODY_MOVEMENT | REPS_BASED | 3 | 3 | 240 | 2 | 60 repeticoes | MODERATE | Colchonete | PLANNED (/videos/ref_006_mov_04.mp4) |
| pular-corda-iniciante | Pular corda iniciante | PHYSICAL | JUMP_ROPE | BODY_MOVEMENT | TIME_BASED | 4 | 4 | 300 |  |  | VERY_LIGHT | Nenhum | PLANNED (/videos/pular-corda-iniciante.mp4) |
| marcha-leve-parada | Marcha leve parada | PHYSICAL | LOW_IMPACT_CARDIO | ENERGY | TIME_BASED | 1 | 1 | 120 |  |  | LIGHT | Nenhum | PLANNED (/videos/marcha-leve-parada.mp4) |
| jumping-baixo-impacto | Jumping baixo impacto | PHYSICAL | LOW_IMPACT_CARDIO | BODY_MOVEMENT | TIME_BASED | 3 | 3 | 300 |  |  | VERY_LIGHT | Nenhum | PLANNED (/videos/jumping-baixo-impacto.mp4) |
| ref_010_mov_06 | Alongamento cobra | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 90 |  |  | LIGHT | colchonete | PLANNED (/videos/ref_010_mov_06.mp4) |
| ref_009_mov_01 | Alongamento com toalha | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 90 | 3 |  | LIGHT | toalha, bola, parede conforme exercicio | PLANNED (/videos/ref_009_mov_01.mp4) |
| ref_009_mov_05 | Alongamento da fascia plantar | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 90 | 3 |  | LIGHT | toalha, bola, parede conforme exercicio | PLANNED (/videos/ref_009_mov_05.mp4) |
| ref_009_mov_02 | Alongamento da panturrilha | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 90 | 3 |  | LIGHT | toalha, bola, parede conforme exercicio | PLANNED (/videos/ref_009_mov_02.mp4) |
| ref_005_mov_03 | Arco-iris sentado | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 60 |  |  | LIGHT | Colchonete | PLANNED (/videos/ref_005_mov_03.mp4) |
| ativacao-leve-3-minutos | Ativacao leve de 3 minutos | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 180 |  |  | VERY_LIGHT | Nenhum | READY (/videos/ativacao-leve-3-minutos.mp4) |
| ref_007_mov_04 | Cao-passaro | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 120 | 3 | 10 repeticoes | LIGHT | colchonete | PLANNED (/videos/ref_007_mov_04.mp4) |
| ref_010_mov_03 | Cao-passaro | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 120 |  | 8 a 10 repeticoes | LIGHT | colchonete | PLANNED (/videos/ref_010_mov_03.mp4) |
| ref_007_mov_06 | Cobra baixa | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 90 | 4 |  | LIGHT | colchonete | PLANNED (/videos/ref_007_mov_06.mp4) |
| ref_009_mov_06 | Elevacao de calcanhares | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 60 | 3 | 10 repeticoes | LIGHT | toalha, bola, parede conforme exercicio | PLANNED (/videos/ref_009_mov_06.mp4) |
| ref_009_mov_04 | Enrolar os dedos | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 120 |  | 10 repeticoes | LIGHT | toalha, bola, parede conforme exercicio | PLANNED (/videos/ref_009_mov_04.mp4) |
| ref_007_mov_01 | Gato-vaca | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 120 | 3 | 10 repeticoes | LIGHT | colchonete | PLANNED (/videos/ref_007_mov_01.mp4) |
| ref_010_mov_01 | Gato-vaca | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 120 |  | 8 a 10 repeticoes | LIGHT | colchonete | PLANNED (/videos/ref_010_mov_01.mp4) |
| ref_010_mov_04 | Inclinacao pelvica | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 144 |  | 8 a 12 repeticoes | LIGHT | colchonete | PLANNED (/videos/ref_010_mov_04.mp4) |
| ref_010_mov_05 | Joelho ao peito | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 90 |  |  | LIGHT | colchonete | PLANNED (/videos/ref_010_mov_05.mp4) |
| levantar-e-respirar | Levantar e respirar | PHYSICAL | MOBILITY | ENERGY | TIME_BASED | 1 | 1 | 60 |  |  | VERY_LIGHT | Nenhum | PLANNED (/videos/levantar-e-respirar.mp4) |
| ref_009_mov_03 | Massagem com bola | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 120 |  |  | LIGHT | toalha, bola, parede conforme exercicio | PLANNED (/videos/ref_009_mov_03.mp4) |
| mobilidade-de-coluna | Mobilidade de coluna | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 240 |  |  | VERY_LIGHT | Nenhum | READY (/videos/mobilidade-de-coluna.mp4) |
| mobilidade-pescoco-ombros | Mobilidade de pescoco e ombros | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 |  |  | VERY_LIGHT | Nenhum | PLANNED (/videos/mobilidade-pescoco-ombros.mp4) |
| mobilidade-rapida-coluna | Mobilidade rapida para coluna | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 240 |  |  | VERY_LIGHT | Nenhum | PLANNED (/videos/mobilidade-rapida-coluna.mp4) |
| ref_007_mov_03 | Passar a linha na agulha | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 90 |  |  | LIGHT | colchonete | PLANNED (/videos/ref_007_mov_03.mp4) |
| pausa-de-energia | Pausa de energia | PHYSICAL | MOBILITY | ENERGY | MOBILITY | 1 | 1 | 300 |  |  | VERY_LIGHT | Nenhum | PLANNED (/videos/pausa-de-energia.mp4) |
| ref_007_mov_05 | Ponte articulada | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 90 | 5 |  | LIGHT | colchonete | PLANNED (/videos/ref_007_mov_05.mp4) |
| ref_010_mov_07 | Ponte de gluteos | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 90 |  | 8 a 12 repeticoes | LIGHT | colchonete | PLANNED (/videos/ref_010_mov_07.mp4) |
| ref_007_mov_02 | Postura da crianca | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 270 | 3 |  | LIGHT | colchonete | PLANNED (/videos/ref_007_mov_02.mp4) |
| ref_010_mov_02 | Postura da crianca | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 270 |  |  | LIGHT | colchonete | PLANNED (/videos/ref_010_mov_02.mp4) |
| reset-postural | Reset postural | PHYSICAL | MOBILITY | ENERGY | MOBILITY | 1 | 1 | 180 |  |  | VERY_LIGHT | Nenhum | READY (/videos/reset-postural.mp4) |
| respiracao-mobilidade | Respiracao + mobilidade | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 1 | 1 | 300 |  |  | VERY_LIGHT | Nenhum | PLANNED (/videos/respiracao-mobilidade.mp4) |
| ref_005_mov_01 | Agachamento yogue ativo | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 3 | 3 | 60 |  |  | MODERATE | Colchonete | PLANNED (/videos/ref_005_mov_01.mp4) |
| ref_005_mov_02 | Alongamento lateral | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 3 | 3 | 60 |  |  | LIGHT | Colchonete | PLANNED (/videos/ref_005_mov_02.mp4) |
| ref_005_mov_04 | Arco-iris com flexao a frente | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 3 | 3 | 60 |  |  | MODERATE | Colchonete | PLANNED (/videos/ref_005_mov_04.mp4) |
| ref_005_mov_05 | Cabeca ao joelho | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 3 | 3 | 60 |  |  | LIGHT | Colchonete | PLANNED (/videos/ref_005_mov_05.mp4) |
| ref_005_mov_07 | Piramide ativa | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 3 | 3 | 60 |  |  | MODERATE | Colchonete | PLANNED (/videos/ref_005_mov_07.mp4) |
| ref_005_mov_08 | Postura da deusa | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 3 | 3 | 60 |  |  | MODERATE | Colchonete | PLANNED (/videos/ref_005_mov_08.mp4) |
| ref_005_mov_06 | Postura do sapo | PHYSICAL | MOBILITY | BODY_MOVEMENT | MOBILITY | 3 | 3 | 60 |  |  | MODERATE | Colchonete | PLANNED (/videos/ref_005_mov_06.mp4) |
| luta-sombra-leve | Luta sombra leve | PHYSICAL | SHADOW_BOXING | BODY_MOVEMENT | TIME_BASED | 4 | 4 | 480 |  |  | VERY_LIGHT | Nenhum | PLANNED (/videos/luta-sombra-leve.mp4) |
| ref_002_mov_08 | Posicao com apoio para joelhos | PHYSICAL | SLEEP_SUPPORT | SLEEP | RELAXATION | 1 | 1 | 600 |  |  | VERY_LIGHT | travesseiro sob os joelhos | PLANNED (/videos/ref_002_mov_08.mp4) |
| ref_002_mov_04 | Posicao com apoio para lombar | PHYSICAL | SLEEP_SUPPORT | SLEEP | RELAXATION | 1 | 1 | 600 |  |  | VERY_LIGHT | travesseiro sob os joelhos, travesseiro de cabeca | PLANNED (/videos/ref_002_mov_04.mp4) |
| ref_002_mov_05 | Posicao de apoio para pescoco | PHYSICAL | SLEEP_SUPPORT | SLEEP | RELAXATION | 1 | 1 | 600 |  |  | VERY_LIGHT | travesseiro ou suporte de pescoco | PLANNED (/videos/ref_002_mov_05.mp4) |
| ref_002_mov_03 | Posicao de descanso para dor de cabeca tensional | PHYSICAL | SLEEP_SUPPORT | SLEEP | RELAXATION | 1 | 1 | 600 |  |  | VERY_LIGHT | travesseiro de cabeca, travesseiro sob os joelhos | PLANNED (/videos/ref_002_mov_03.mp4) |
| ref_002_mov_02 | Posicao elevada para parte superior das costas | PHYSICAL | SLEEP_SUPPORT | SLEEP | RELAXATION | 1 | 1 | 420 |  |  | LIGHT | travesseiro pequeno ou rolo sob a parte superior das costas, travesseiro para cabeca | PLANNED (/videos/ref_002_mov_02.mp4) |
| ref_002_mov_06 | Posicao elevada para sinusite ou congestao | PHYSICAL | SLEEP_SUPPORT | SLEEP | RELAXATION | 1 | 1 | 600 |  |  | VERY_LIGHT | travesseiros, apoio inclinado | PLANNED (/videos/ref_002_mov_06.mp4) |
| ref_002_mov_07 | Posicao lateral para ciatica ou quadril | PHYSICAL | SLEEP_SUPPORT | SLEEP | RELAXATION | 1 | 1 | 600 |  |  | VERY_LIGHT | travesseiro entre os joelhos, travesseiro de cabeca | PLANNED (/videos/ref_002_mov_07.mp4) |
| ref_002_mov_01 | Posicao lateral para ombro | PHYSICAL | SLEEP_SUPPORT | SLEEP | RELAXATION | 1 | 1 | 600 |  |  | VERY_LIGHT | travesseiro de cabeca, travesseiro para abracar | PLANNED (/videos/ref_002_mov_01.mp4) |
| noventa-noventa | 90/90 de quadril | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 | 6 a 10 repeticoes lentas | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/noventa-noventa.mp4) |
| abertura-dedos | Abertura dos dedos | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/abertura-dedos.mp4) |
| abertura-dedos-pe | Abertura dos dedos do pe | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/abertura-dedos-pe.mp4) |
| alfabeto-tornozelo | Alfabeto com tornozelo | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 | 6 a 10 repeticoes lentas | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/alfabeto-tornozelo.mp4) |
| alongamento-de-pernas | Alongamento de pernas | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 1 | 1 | 360 |  |  | VERY_LIGHT | Nenhum | PLANNED (/videos/alongamento-de-pernas.mp4) |
| alongamento-leve | Alongamento leve | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 1 | 1 | 300 |  |  | VERY_LIGHT | Nenhum | READY (/videos/alongamento-leve.mp4) |
| alongamento-leve-pernas | Alongamento leve de pernas | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 1 | 1 | 360 |  |  | VERY_LIGHT | Nenhum | PLANNED (/videos/alongamento-leve-pernas.mp4) |
| arco-plantar-bola | Arco plantar com bola | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 | 6 a 10 repeticoes lentas | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/arco-plantar-bola.mp4) |
| bascula-pelvica | Bascula pelvica | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 | 6 a 10 repeticoes lentas | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/bascula-pelvica.mp4) |
| bom-dia-mobilidade | Bom dia de mobilidade | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/bom-dia-mobilidade.mp4) |
| circulos-punho-mobilidade | Circulos de punho | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 | 6 a 10 repeticoes lentas | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/circulos-punho-mobilidade.mp4) |
| circulos-quadril | Circulos de quadril | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 | 6 a 10 repeticoes lentas | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/circulos-quadril.mp4) |
| circulos-tornozelo | Circulos de tornozelo | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 | 6 a 10 repeticoes lentas | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/circulos-tornozelo.mp4) |
| elevacao-ombros-circulos | Circulos lentos de ombros | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 | 6 a 10 repeticoes lentas | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/elevacao-ombros-circulos.mp4) |
| dorsiflexao-parede | Dorsiflexao na parede | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 | 6 a 10 repeticoes lentas | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/dorsiflexao-parede.mp4) |
| extensao-flexores-punho | Extensao dos flexores do punho | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 1 | 1 | 20 | 2 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/extensao-flexores-punho.mp4) |
| extensao-toracica-peito | Extensao toracica com abertura de peito | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 | 6 a 10 repeticoes lentas | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/extensao-toracica-peito.mp4) |
| extensao-toracica-cadeira | Extensao toracica na cadeira | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 | 6 a 10 repeticoes lentas | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/extensao-toracica-cadeira.mp4) |
| gato-vaca-escapular | Gato-vaca escapular | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 | 6 a 10 repeticoes lentas | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/gato-vaca-escapular.mp4) |
| gato-vaca-toracico | Gato-vaca toracico | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 | 6 a 10 repeticoes lentas | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/gato-vaca-toracico.mp4) |
| inversao-eversao-controlada | Inversao e eversao controlada | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/inversao-eversao-controlada.mp4) |
| livro-aberto | Livro aberto | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 | 6 a 10 repeticoes lentas | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/livro-aberto.mp4) |
| mobilidade-braco-cotovelo | Mobilidade de braco e cotovelo | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 | 6 a 10 repeticoes lentas | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/mobilidade-braco-cotovelo.mp4) |
| mobilidade-cotovelo | Mobilidade leve de cotovelo | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 | 6 a 10 repeticoes lentas | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/mobilidade-cotovelo.mp4) |
| mobilidade-tornozelo-panturrilha | Mobilidade tornozelo-panturrilha | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 | 6 a 10 repeticoes lentas | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/mobilidade-tornozelo-panturrilha.mp4) |
| pendulo-ombro | Pendulo de ombro | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 | 6 a 10 repeticoes lentas | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/pendulo-ombro.mp4) |
| ponte-suave-abertura | Ponte suave com abertura anterior | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/ponte-suave-abertura.mp4) |
| pronacao-supinacao-antebraco | Pronacao e supinacao do antebraco | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 | 6 a 10 repeticoes lentas | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/pronacao-supinacao-antebraco.mp4) |
| queixo-para-tras | Queixo para tras | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/queixo-para-tras.mp4) |
| respiracao-costelas | Respiracao nas costelas | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 | 6 a 10 repeticoes lentas | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/respiracao-costelas.mp4) |
| retracao-protracao-escapular | Retracao e protracao escapular | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 | 6 a 10 repeticoes lentas | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/retracao-protracao-escapular.mp4) |
| rotacao-cervical-controlada | Rotacao cervical controlada | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 | 6 a 10 repeticoes lentas | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/rotacao-cervical-controlada.mp4) |
| rotacao-externa-parede | Rotacao externa na parede | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/rotacao-externa-parede.mp4) |
| rotacao-toracica-sentada | Rotacao toracica sentada | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 | 1 | 6 a 10 repeticoes lentas | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/rotacao-toracica-sentada.mp4) |
| soltar-tensao-pescoco-ombros | Soltar tensao de pescoco e ombros | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 1 | 1 | 300 |  |  | VERY_LIGHT | Nenhum | PLANNED (/videos/soltar-tensao-pescoco-ombros.mp4) |
| abertura-peito-porta | Abertura de peito na porta | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/abertura-peito-porta.mp4) |
| ref_005_mov_09 | Abertura de pernas na parede | PHYSICAL | STRETCHING | BODY_MOVEMENT | MOBILITY | 3 | 3 | 60 |  |  | LIGHT | Parede, Colchonete | PLANNED (/videos/ref_005_mov_09.mp4) |
| abertura-quadril-sentado | Abertura de quadril sentado | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/abertura-quadril-sentado.mp4) |
| abraco-escapulas | Abraco das escapulas | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/abraco-escapulas.mp4) |
| alcance-lateral-toracico | Alcance lateral toracico | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/alcance-lateral-toracico.mp4) |
| alongamento-frente-tornozelo | Alongamento da frente do tornozelo | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/alongamento-frente-tornozelo.mp4) |
| alongamento-biceps-parede | Alongamento de biceps na parede | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/alongamento-biceps-parede.mp4) |
| alongamento-braquiorradial | Alongamento do braquiorradial | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/alongamento-braquiorradial.mp4) |
| elevador-escapula | Alongamento do elevador da escapula | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/elevador-escapula.mp4) |
| alongamento-polegar | Alongamento do polegar | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/alongamento-polegar.mp4) |
| alongamento-pronadores | Alongamento dos pronadores | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/alongamento-pronadores.mp4) |
| alongamento-supinadores | Alongamento dos supinadores | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/alongamento-supinadores.mp4) |
| alongamento-lateral-tronco | Alongamento lateral do tronco | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/alongamento-lateral-tronco.mp4) |
| capsula-posterior-ombro | Alongamento posterior do ombro | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/capsula-posterior-ombro.mp4) |
| joelho-no-chao-anterior | Anterior de coxa com joelho no chao | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/joelho-no-chao-anterior.mp4) |
| anterior-coxa-cadeira | Anterior de coxa na cadeira | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/anterior-coxa-cadeira.mp4) |
| borboleta | Borboleta | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/borboleta.mp4) |
| braco-cruzado-suave | Braco cruzado suave | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/braco-cruzado-suave.mp4) |
| cobra-suave | Cobra suave | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/cobra-suave.mp4) |
| deltoide-posterior-cruzado | Deltoide posterior cruzado | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/deltoide-posterior-cruzado.mp4) |
| alongamento-dorsal-cadeira | Dorsal com apoio na cadeira | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/alongamento-dorsal-cadeira.mp4) |
| extensao-abdominal-em-pe | Extensao abdominal em pe | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/extensao-abdominal-em-pe.mp4) |
| extensao-bracos-atras | Extensao dos bracos atras | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/extensao-bracos-atras.mp4) |
| extensao-dedos-pe | Extensao dos dedos do pe | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/extensao-dedos-pe.mp4) |
| fascia-plantar-toalha | Fascia plantar com toalha | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/fascia-plantar-toalha.mp4) |
| figura-quatro-sentado | Figura quatro sentado | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/figura-quatro-sentado.mp4) |
| flexao-cervical-suave | Flexao cervical suave | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/flexao-cervical-suave.mp4) |
| flexao-dedos-pe | Flexao dos dedos do pe | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/flexao-dedos-pe.mp4) |
| flexao-extensores-punho | Flexao dos extensores do punho | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/flexao-extensores-punho.mp4) |
| flexao-lombar-sentada | Flexao lombar sentada | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/flexao-lombar-sentada.mp4) |
| flexor-quadril-ajoelhado | Flexor do quadril ajoelhado | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/flexor-quadril-ajoelhado.mp4) |
| flexor-quadril-com-quadriceps | Flexor do quadril com quadriceps | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/flexor-quadril-com-quadriceps.mp4) |
| gluteo-parede | Gluteo na parede | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/gluteo-parede.mp4) |
| inclinacao-lateral-pescoco | Inclinacao lateral do pescoco | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/inclinacao-lateral-pescoco.mp4) |
| inclinacao-unilateral-cadeira | Inclinacao unilateral na cadeira | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/inclinacao-unilateral-cadeira.mp4) |
| joelho-ao-peito-cruzado | Joelho ao peito cruzado | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/joelho-ao-peito-cruzado.mp4) |
| joelhos-ao-peito | Joelhos ao peito | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/joelhos-ao-peito.mp4) |
| maos-atras-costas | Maos atras das costas | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/maos-atras-costas.mp4) |
| panturrilha-toalha | Panturrilha com toalha | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/panturrilha-toalha.mp4) |
| panturrilha-parede | Panturrilha na parede | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/panturrilha-parede.mp4) |
| degrau-panturrilha | Panturrilha no degrau | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/degrau-panturrilha.mp4) |
| peitoral-parede-um-braco | Peitoral na parede com um braco | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/peitoral-parede-um-braco.mp4) |
| peitoral-no-canto | Peitoral no canto da parede | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/peitoral-no-canto.mp4) |
| piriforme-deitado | Piriforme deitado | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/piriforme-deitado.mp4) |
| pombo-adaptado | Pombo adaptado | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/pombo-adaptado.mp4) |
| toalha-deitado | Posterior com toalha deitado | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/toalha-deitado.mp4) |
| posterior-em-pe-apoio | Posterior em pe com apoio | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/posterior-em-pe-apoio.mp4) |
| posterior-sentado | Posterior sentado | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/posterior-sentado.mp4) |
| postura-crianca | Postura da crianca | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/postura-crianca.mp4) |
| postura-crianca-lateral | Postura da crianca lateral | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/postura-crianca-lateral.mp4) |
| quadriceps-lateral-deitado | Quadriceps deitado de lado | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/quadriceps-lateral-deitado.mp4) |
| quadriceps-em-pe-apoio | Quadriceps em pe com apoio | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/quadriceps-em-pe-apoio.mp4) |
| soleo-joelho-flexionado | Soleo com joelho flexionado | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/soleo-joelho-flexionado.mp4) |
| torcao-lombar-leve | Torcao lombar leve | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/torcao-lombar-leve.mp4) |
| triceps-acima-cabeca | Triceps acima da cabeca | PHYSICAL | STRETCHING | BODY_MOVEMENT | STRETCHING | 3 | 3 | 20 | 1 |  | VERY_LIGHT | Nenhum ou apoio confortavel | PLANNED (/videos/triceps-acima-cabeca.mp4) |
| caminhada-consciente-curta | Caminhada consciente curta | PHYSICAL | WALKING | BODY_MOVEMENT | WALKING | 1 | 1 | 300 |  |  | VERY_LIGHT | Nenhum | READY (/videos/caminhada-consciente-curta.mp4) |
| caminhada-consciente | Caminhada consciente | PHYSICAL | WALKING | ENERGY | WALKING | 3 | 3 | 600 |  |  | VERY_LIGHT | Nenhum | READY (/videos/caminhada-consciente.mp4) |
| celular-longe-da-cama | Celular longe da cama | PHYSICAL | WORK_BREAK | SLEEP | TIME_BASED | 1 | 1 | 60 |  |  | VERY_LIGHT | Nenhum | READY (/videos/celular-longe-da-cama.mp4) |
| pausa-consciente-trabalho | Pausa consciente no trabalho | PHYSICAL | WORK_BREAK | FOCUS | TIME_BASED | 1 | 1 | 180 |  |  | VERY_LIGHT | Nenhum | PLANNED (/videos/pausa-consciente-trabalho.mp4) |
| pausa-foco-sem-impacto | Pausa de foco sem impacto | PHYSICAL | WORK_BREAK | FOCUS | TIME_BASED | 1 | 1 | 300 |  |  | VERY_LIGHT | Nenhum | PLANNED (/videos/pausa-foco-sem-impacto.mp4) |
| pausa-sem-tela | Pausa sem tela | PHYSICAL | WORK_BREAK | FOCUS | TIME_BASED | 1 | 1 | 300 |  |  | VERY_LIGHT | Nenhum | READY (/videos/pausa-sem-tela.mp4) |
| reset-corporal-trabalho | Reset corporal no trabalho | PHYSICAL | WORK_BREAK | BODY_MOVEMENT | TIME_BASED | 1 | 1 | 240 |  |  | VERY_LIGHT | Nenhum | PLANNED (/videos/reset-corporal-trabalho.mp4) |
| uma-tarefa-apenas | Uma tarefa apenas | PHYSICAL | WORK_BREAK | FOCUS | TIME_BASED | 1 | 1 | 120 |  |  | VERY_LIGHT | Nenhum | PLANNED (/videos/uma-tarefa-apenas.mp4) |
| reset-de-foco | Reset de foco | PHYSICAL | WORK_BREAK | FOCUS | TIME_BASED | 3 | 3 | 420 |  |  | VERY_LIGHT | Nenhum | PLANNED (/videos/reset-de-foco.mp4) |
| ref_001_mov_06 | Alongamento lateral sentado | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 1 | 1 | 64 |  |  | LIGHT | colchonete | PLANNED (/videos/ref_001_mov_06.mp4) |
| ref_004_mov_02 | Borboleta reclinada | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 1 | 1 | 180 |  |  | VERY_LIGHT | Colchonete | PLANNED (/videos/ref_004_mov_02.mp4) |
| ref_004_mov_01 | Postura da borboleta | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 1 | 1 | 60 |  |  | LIGHT | Colchonete | PLANNED (/videos/ref_004_mov_01.mp4) |
| ref_004_mov_04 | Postura da crianca | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 1 | 1 | 60 |  |  | VERY_LIGHT | Colchonete | PLANNED (/videos/ref_004_mov_04.mp4) |
| ref_003_mov_01 | Postura da oracao | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 1 | 1 | 60 |  |  | VERY_LIGHT | Nenhum ou colchonete | PLANNED (/videos/ref_003_mov_01.mp4) |
| ref_003_mov_12 | Postura da oracao final | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 1 | 1 | 60 |  |  | VERY_LIGHT | Nenhum ou colchonete | PLANNED (/videos/ref_003_mov_12.mp4) |
| ref_004_mov_06 | Postura da vaca | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 1 | 1 | 60 |  |  | VERY_LIGHT | Colchonete | PLANNED (/videos/ref_004_mov_06.mp4) |
| ref_001_mov_05 | Postura da vaca | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 1 | 1 | 60 |  |  | LIGHT | colchonete | PLANNED (/videos/ref_001_mov_05.mp4) |
| ref_004_mov_05 | Postura do gato | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 1 | 1 | 60 |  |  | VERY_LIGHT | Colchonete | PLANNED (/videos/ref_004_mov_05.mp4) |
| ref_001_mov_04 | Postura do gato | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 1 | 1 | 60 |  |  | LIGHT | colchonete | PLANNED (/videos/ref_001_mov_04.mp4) |
| ref_003_mov_02 | Postura dos bracos elevados | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 1 | 1 | 60 |  |  | LIGHT | Nenhum ou colchonete | PLANNED (/videos/ref_003_mov_02.mp4) |
| ref_003_mov_11 | Postura dos bracos elevados | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 1 | 1 | 60 |  |  | LIGHT | Nenhum ou colchonete | PLANNED (/videos/ref_003_mov_11.mp4) |
| ref_004_mov_19 | Respiracao alternada pelas narinas | PHYSICAL | YOGA | BODY_MOVEMENT | BREATHING | 1 | 1 | 180 |  |  | VERY_LIGHT | Colchonete | PLANNED (/videos/ref_004_mov_19.mp4) |
| ref_004_mov_20 | Respiracao da abelha | PHYSICAL | YOGA | BODY_MOVEMENT | BREATHING | 1 | 1 | 180 |  |  | VERY_LIGHT | Colchonete | PLANNED (/videos/ref_004_mov_20.mp4) |
| ref_001_mov_01 | Torcao sentada | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 1 | 1 | 64 |  |  | LIGHT | colchonete | PLANNED (/videos/ref_001_mov_01.mp4) |
| yoga-bolso-coluna-leve | Yoga de bolso: coluna leve | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 1 | 1 | 360 |  |  | VERY_LIGHT | Nenhum | READY (/videos/yoga-bolso-coluna-leve.mp4) |
| yoga-bolso-pausa-no-chao | Yoga de bolso: pausa no chao | PHYSICAL | YOGA | BODY_MOVEMENT | STRETCHING | 1 | 1 | 420 |  |  | VERY_LIGHT | Tapete, toalha ou superficie confortavel | PLANNED (/videos/yoga-bolso-pausa-no-chao.mp4) |
| ref_004_mov_12 | Angulo lateral estendido | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 3 | 3 | 90 |  |  | LIGHT | Colchonete | PLANNED (/videos/ref_004_mov_12.mp4) |
| ref_001_mov_07 | Angulo lateral estendido | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 3 | 3 | 60 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_001_mov_07.mp4) |
| ref_004_mov_14 | Cabeca ao joelho | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 3 | 3 | 90 |  |  | LIGHT | Colchonete | PLANNED (/videos/ref_004_mov_14.mp4) |
| ref_004_mov_10 | Cao olhando para baixo | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 3 | 3 | 90 |  |  | LIGHT | Colchonete | PLANNED (/videos/ref_004_mov_10.mp4) |
| ref_003_mov_03 | Flexao em pe com maos aos pes | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 3 | 3 | 60 |  |  | LIGHT | Nenhum ou colchonete | PLANNED (/videos/ref_003_mov_03.mp4) |
| ref_003_mov_10 | Flexao em pe com maos aos pes | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 3 | 3 | 60 |  |  | LIGHT | Nenhum ou colchonete | PLANNED (/videos/ref_003_mov_10.mp4) |
| ref_004_mov_13 | Flexao sentada a frente | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 3 | 3 | 90 |  |  | LIGHT | Colchonete | PLANNED (/videos/ref_004_mov_13.mp4) |
| ref_001_mov_02 | Flexao sentada a frente | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 3 | 3 | 64 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_001_mov_02.mp4) |
| ref_004_mov_15 | Joelhos ao peito | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 3 | 3 | 90 |  |  | LIGHT | Colchonete | PLANNED (/videos/ref_004_mov_15.mp4) |
| ref_004_mov_16 | Pernas na parede | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 3 | 3 | 90 |  |  | LIGHT | Colchonete | PLANNED (/videos/ref_004_mov_16.mp4) |
| ref_003_mov_07 | Postura da cobra | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 3 | 3 | 60 |  |  | LIGHT | Nenhum ou colchonete | PLANNED (/videos/ref_003_mov_07.mp4) |
| ref_004_mov_07 | Postura da cobra | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 3 | 3 | 60 |  |  | LIGHT | Colchonete | PLANNED (/videos/ref_004_mov_07.mp4) |
| ref_004_mov_03 | Postura da guirlanda / agachamento yogue | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 3 | 3 | 60 |  |  | MODERATE | Colchonete | PLANNED (/videos/ref_004_mov_03.mp4) |
| ref_003_mov_08 | Postura da montanha | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 3 | 3 | 60 |  |  | LIGHT | Nenhum ou colchonete | PLANNED (/videos/ref_003_mov_08.mp4) |
| ref_004_mov_08 | Postura da ponte | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 3 | 3 | 60 |  |  | LIGHT | Colchonete | PLANNED (/videos/ref_004_mov_08.mp4) |
| ref_004_mov_09 | Postura do camelo | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 3 | 3 | 90 |  |  | LIGHT | Colchonete | PLANNED (/videos/ref_004_mov_09.mp4) |
| ref_001_mov_03 | Postura do gafanhoto | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 3 | 3 | 64 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_001_mov_03.mp4) |
| ref_004_mov_18 | Postura do peixe | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 3 | 3 | 90 |  |  | LIGHT | Colchonete | PLANNED (/videos/ref_004_mov_18.mp4) |
| ref_004_mov_17 | Postura do sapo | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 3 | 3 | 90 |  |  | LIGHT | Colchonete | PLANNED (/videos/ref_004_mov_17.mp4) |
| ref_004_mov_11 | Postura do triangulo | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 3 | 3 | 90 |  |  | LIGHT | Colchonete | PLANNED (/videos/ref_004_mov_11.mp4) |
| ref_003_mov_04 | Postura equestre | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 3 | 3 | 60 |  |  | MODERATE | Nenhum ou colchonete | PLANNED (/videos/ref_003_mov_04.mp4) |
| ref_003_mov_09 | Postura equestre, lado oposto | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 3 | 3 | 60 |  |  | MODERATE | Nenhum ou colchonete | PLANNED (/videos/ref_003_mov_09.mp4) |
| ref_003_mov_05 | Prancha | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 3 | 3 | 60 |  |  | MODERATE | Nenhum ou colchonete | PLANNED (/videos/ref_003_mov_05.mp4) |
| ref_003_mov_06 | Saudacao com oito apoios | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 3 | 3 | 60 |  |  | MODERATE | Nenhum ou colchonete | PLANNED (/videos/ref_003_mov_06.mp4) |
| yoga-leve | Yoga leve | PHYSICAL | YOGA | BODY_MOVEMENT | TIME_BASED | 3 | 3 | 480 |  |  | VERY_LIGHT | Nenhum | PLANNED (/videos/yoga-leve.mp4) |
| yoga-energia-leve | Yoga de energia leve | PHYSICAL | YOGA | BODY_MOVEMENT | TIME_BASED | 4 | 4 | 600 |  |  | VERY_LIGHT | Nenhum | PLANNED (/videos/yoga-energia-leve.mp4) |
| ref_011_mov_07 | Afundo baixo | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 60 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_07.mp4) |
| ref_011_mov_16 | Cao olhando para cima | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 60 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_16.mp4) |
| ref_011_mov_21 | Flexao a frente | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 60 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_21.mp4) |
| ref_011_mov_03 | Guerreiro II | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 60 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_03.mp4) |
| ref_011_mov_12 | Guerreiro III | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 60 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_12.mp4) |
| ref_011_mov_02 | Malasana | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 60 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_02.mp4) |
| ref_011_mov_26 | Parada sobre a cabeca | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 180 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_26.mp4) |
| ref_011_mov_24 | Pernas na parede | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 300 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_24.mp4) |
| ref_011_mov_23 | Postura da aguia | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 60 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_23.mp4) |
| ref_011_mov_05 | Postura da borboleta | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 80 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_05.mp4) |
| ref_011_mov_13 | Postura da cobra | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 90 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_13.mp4) |
| ref_011_mov_04 | Postura da crianca | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 180 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_04.mp4) |
| ref_011_mov_06 | Postura da deusa | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 80 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_06.mp4) |
| ref_011_mov_15 | Postura da ponte | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 90 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_15.mp4) |
| ref_011_mov_18 | Postura da vela | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 60 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_18.mp4) |
| ref_011_mov_25 | Postura de lotus | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 180 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_25.mp4) |
| ref_011_mov_19 | Postura do arado | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 60 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_19.mp4) |
| ref_011_mov_11 | Postura do arco | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 90 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_11.mp4) |
| ref_011_mov_09 | Postura do barco | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 60 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_09.mp4) |
| ref_011_mov_14 | Postura do camelo | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 90 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_14.mp4) |
| ref_011_mov_28 | Postura do coelho | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 90 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_28.mp4) |
| ref_011_mov_22 | Postura do golfinho | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 60 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_22.mp4) |
| ref_011_mov_17 | Postura do peixe | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 90 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_17.mp4) |
| ref_011_mov_08 | Postura do pombo | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 180 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_08.mp4) |
| ref_011_mov_10 | Prancha | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 90 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_10.mp4) |
| ref_011_mov_27 | Relaxamento final | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 300 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_27.mp4) |
| ref_011_mov_20 | Respiracao do leao | PHYSICAL | YOGA | BODY_MOVEMENT | BREATHING | 5 | 5 | 180 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_20.mp4) |
| ref_011_mov_01 | Tadasana | PHYSICAL | YOGA | BODY_MOVEMENT | MOBILITY | 5 | 5 | 60 |  |  | MODERATE | colchonete | PLANNED (/videos/ref_011_mov_01.mp4) |
## Detalhes dos Exercicios Guiados

### Respiracao 4-4-6

| Campo | Valor |
| --- | --- |
| Slug | respiracao-4-4-6 |
| Area | STRESS |
| Categoria | MENTAL / BREATHING |
| Nivel | 1 |
| Objetivo | Ajudar o corpo a desacelerar em momentos de estresse ou agitacao. |
| Descricao curta | Ajudar o corpo a desacelerar em momentos de estresse ou agitacao. |
| Como fazer | ["Sente-se ou fique em pe em posicao confortavel.","Inspire pelo nariz por 4 segundos.","Segure o ar com suavidade por 4 segundos.","Expire lentamente por 6 segundos.","Repita o ciclo ate completar o tempo sugerido."] |
| Dicas de postura | ["Sente-se ou fique em pe com apoio confortavel.","Relaxe mandibula e ombros."] |
| Respiracao | ["Nao force o ar.","A expiracao deve ser tranquila.","Respire naturalmente se o ciclo incomodar."] |
| Erros comuns | ["Forcar a inspiracao.","Segurar o ar com tensao.","Continuar mesmo com tontura."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Tontura, falta de ar ou desconforto ao controlar a respiracao."] |
| Recomendado quando | ["Quando o estresse estiver alto.","Quando voce quiser desacelerar antes de continuar."] |
| Evitar quando | ["Evite segurar o ar se isso causar desconforto."] |
| Imagem/chave | respiracao-4-4-6 |

### Respiracao antes de dormir

| Campo | Valor |
| --- | --- |
| Slug | respiracao-antes-de-dormir |
| Area | STRESS |
| Categoria | MENTAL / BREATHING |
| Nivel | 1 |
| Objetivo | Desacelerar antes do sono. |
| Descricao curta | Desacelerar antes do sono. |
| Como fazer | ["Deite ou sente-se com apoio.","Inspire devagar.","Expire mais longo que inspira.","Repita por 3 minutos."] |
| Dicas de postura | ["Sente-se ou fique em pe com apoio confortavel.","Relaxe mandibula e ombros."] |
| Respiracao | ["Nao force o ar.","A expiracao deve ser tranquila.","Respire naturalmente se o ciclo incomodar."] |
| Erros comuns | ["Forcar a inspiracao.","Segurar o ar com tensao.","Continuar mesmo com tontura."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Tontura, falta de ar ou desconforto ao controlar a respiracao."] |
| Recomendado quando | ["Quando o estresse estiver alto.","Quando voce quiser desacelerar antes de continuar."] |
| Evitar quando | ["Evite segurar o ar se isso causar desconforto."] |
| Imagem/chave | respiracao-antes-de-dormir |

### Respiracao de chegada

| Campo | Valor |
| --- | --- |
| Slug | respiracao-de-chegada |
| Area | FOCUS |
| Categoria | MENTAL / BREATHING |
| Nivel | 1 |
| Objetivo | Ajudar a mente a perceber o presente antes de exigir foco. |
| Descricao curta | Uma pausa de 1 minuto para sair do automatico antes de comecar. |
| Como fazer | ["Sente-se com os pes apoiados.","Olhe para um ponto fixo a sua frente.","Inspire de forma natural pelo nariz.","Expire mais devagar do que inspirou.","Repita por 1 minuto antes de escolher a proxima acao."] |
| Dicas de postura | ["Apoie os pes no chao.","Deixe os ombros baixos.","Solte a mandibula."] |
| Respiracao | ["Nao force o ar.","Deixe a expiracao ficar um pouco mais longa.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Tentar esvaziar a mente.","Prender a respiracao.","Continuar olhando notificacoes durante a pausa."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Antes de estudar ou trabalhar.","Quando voce perceber que abriu muitas telas sem intencao."] |
| Evitar quando | ["Evite controlar a respiracao se isso causar tontura ou desconforto."] |
| Imagem/chave | respiracao-de-chegada |

### Alongamento matinal

| Campo | Valor |
| --- | --- |
| Slug | alongamento-matinal |
| Area | ENERGY |
| Categoria | MENTAL / ENERGY_GIVE |
| Nivel | 1 |
| Objetivo | Acordar corpo e mente sem intensidade alta. |
| Descricao curta | Espreguicar e esticar o corpo ao acordar pode ajudar a lubrificar articulacoes, despertar musculos e iniciar o dia com consciencia corporal. |
| Como fazer | ["Sente-se ou fique em pe com apoio.","Eleve os bracos sem forcar.","Incline o tronco suavemente para os lados.","Movimente pescoço e ombros com amplitude pequena.","Finalize com respiracao lenta."] |
| Dicas de postura | ["Mantenha movimentos controlados.","Use amplitude confortavel.","Adapte intensidade ao check-in do dia."] |
| Respiracao | ["Nao prenda a respiracao.","Reduza ritmo se a respiracao sair do controle.","Finalize voltando ao ritmo natural."] |
| Erros comuns | ["Buscar intensidade maior que o necessario.","Ignorar dor ou tontura.","Pular aquecimento em praticas mais ativas."] |
| Cuidados | ["Nao force articulacoes ao acordar; pare se houver dor aguda ou tontura."] |
| Contraindicacoes | ["Nao force articulacoes ao acordar; pare se houver dor aguda ou tontura."] |
| Recomendado quando | ["energia baixa","rigidez matinal","corpo parado"] |
| Evitar quando | ["Nao force articulacoes ao acordar; pare se houver dor aguda ou tontura."] |
| Imagem/chave | alongamento-matinal |

### Caminhada leve a moderada

| Campo | Valor |
| --- | --- |
| Slug | caminhada-leve-moderada |
| Area | ENERGY |
| Categoria | MENTAL / ENERGY_GIVE |
| Nivel | 1 |
| Objetivo | Aumentar disposicao com movimento ritmado e luz natural quando possivel. |
| Descricao curta | Caminhada de 20 a 30 minutos, preferencialmente ao ar livre, pode ajudar no estado de alerta e na circulacao. |
| Como fazer | ["Escolha um trajeto seguro.","Comece em ritmo leve por 3 minutos.","Caminhe em ritmo confortavel.","Observe luz, ar e postura.","Termine reduzindo o ritmo."] |
| Dicas de postura | ["Mantenha movimentos controlados.","Use amplitude confortavel.","Adapte intensidade ao check-in do dia."] |
| Respiracao | ["Nao prenda a respiracao.","Reduza ritmo se a respiracao sair do controle.","Finalize voltando ao ritmo natural."] |
| Erros comuns | ["Buscar intensidade maior que o necessario.","Ignorar dor ou tontura.","Pular aquecimento em praticas mais ativas."] |
| Cuidados | ["Evite sol forte, calor excessivo ou locais inseguros. Pare se houver falta de ar intensa."] |
| Contraindicacoes | ["Evite sol forte, calor excessivo ou locais inseguros. Pare se houver falta de ar intensa."] |
| Recomendado quando | ["luz natural","caminhada","alerta"] |
| Evitar quando | ["Evite sol forte, calor excessivo ou locais inseguros. Pare se houver falta de ar intensa."] |
| Imagem/chave | caminhada-leve-moderada |

### Respiracao profunda / Pranayama

| Campo | Valor |
| --- | --- |
| Slug | respiracao-profunda-pranayama-energia |
| Area | ENERGY |
| Categoria | MENTAL / ENERGY_GIVE |
| Nivel | 1 |
| Objetivo | Criar alerta suave quando a mente esta lenta. |
| Descricao curta | Exercicios respiratorios podem aumentar percepcao corporal, clareza mental e sensacao de energia. |
| Como fazer | ["Sente-se com a coluna confortavel.","Inspire pelo nariz em 4 segundos.","Segure por 1 a 2 segundos se for confortavel.","Expire por 4 a 6 segundos.","Repita sem forcar."] |
| Dicas de postura | ["Mantenha movimentos controlados.","Use amplitude confortavel.","Adapte intensidade ao check-in do dia."] |
| Respiracao | ["Nao prenda a respiracao.","Reduza ritmo se a respiracao sair do controle.","Finalize voltando ao ritmo natural."] |
| Erros comuns | ["Buscar intensidade maior que o necessario.","Ignorar dor ou tontura.","Pular aquecimento em praticas mais ativas."] |
| Cuidados | ["Pare se houver tontura, formigamento, desconforto ou falta de ar."] |
| Contraindicacoes | ["Pare se houver tontura, formigamento, desconforto ou falta de ar."] |
| Recomendado quando | ["respiracao","clareza mental","energia baixa"] |
| Evitar quando | ["Pare se houver tontura, formigamento, desconforto ou falta de ar."] |
| Imagem/chave | respiracao-profunda-pranayama-energia |

### Musculacao ou Pilates

| Campo | Valor |
| --- | --- |
| Slug | fortalecimento-pilates-disposicao |
| Area | ENERGY |
| Categoria | MENTAL / ENERGY_GIVE |
| Nivel | 3 |
| Objetivo | Construir energia de base com pratica progressiva. |
| Descricao curta | Fortalecimento e resistencia fisica podem contribuir para mais disposicao ao longo da rotina. |
| Como fazer | ["Escolha exercicios simples e conhecidos.","Comece com aquecimento leve.","Faca movimentos controlados.","Descanse entre series.","Finalize com respiracao e alongamento leve."] |
| Dicas de postura | ["Mantenha movimentos controlados.","Use amplitude confortavel.","Adapte intensidade ao check-in do dia."] |
| Respiracao | ["Nao prenda a respiracao.","Reduza ritmo se a respiracao sair do controle.","Finalize voltando ao ritmo natural."] |
| Erros comuns | ["Buscar intensidade maior que o necessario.","Ignorar dor ou tontura.","Pular aquecimento em praticas mais ativas."] |
| Cuidados | ["Procure orientacao se houver lesao, dor persistente ou condicao medica."] |
| Contraindicacoes | ["Procure orientacao se houver lesao, dor persistente ou condicao medica."] |
| Recomendado quando | ["forca","pilates","disposicao"] |
| Evitar quando | ["Procure orientacao se houver lesao, dor persistente ou condicao medica."] |
| Imagem/chave | fortalecimento-pilates-disposicao |

### Polichinelos

| Campo | Valor |
| --- | --- |
| Slug | polichinelos-pausa-ativa |
| Area | ENERGY |
| Categoria | MENTAL / ENERGY_GIVE |
| Nivel | 3 |
| Objetivo | Quebrar sonolencia e corpo parado em poucos minutos. |
| Descricao curta | Pausa ativa curta que eleva a frequencia cardiaca rapidamente e estimula circulacao. |
| Como fazer | ["Aqueça tornozelos e ombros.","Faca 20 a 30 segundos de polichinelos.","Descanse respirando.","Repita de 2 a 4 vezes.","Use versao sem salto se preferir."] |
| Dicas de postura | ["Mantenha movimentos controlados.","Use amplitude confortavel.","Adapte intensidade ao check-in do dia."] |
| Respiracao | ["Nao prenda a respiracao.","Reduza ritmo se a respiracao sair do controle.","Finalize voltando ao ritmo natural."] |
| Erros comuns | ["Buscar intensidade maior que o necessario.","Ignorar dor ou tontura.","Pular aquecimento em praticas mais ativas."] |
| Cuidados | ["Adapte em caso de dor em joelhos, tornozelos, coluna, gestacao ou lesao recente."] |
| Contraindicacoes | ["Adapte em caso de dor em joelhos, tornozelos, coluna, gestacao ou lesao recente."] |
| Recomendado quando | ["pausa ativa","cardio leve","sonolencia"] |
| Evitar quando | ["Adapte em caso de dor em joelhos, tornozelos, coluna, gestacao ou lesao recente."] |
| Imagem/chave | polichinelos-pausa-ativa |

### Lutas e treino de sombra

| Campo | Valor |
| --- | --- |
| Slug | lutas-sombra-descarga |
| Area | ENERGY |
| Categoria | MENTAL / ENERGY_SPEND |
| Nivel | 3 |
| Objetivo | Descarregar inquietacao com movimento coordenado sem contato. |
| Descricao curta | Boxe, muay thai, treino de sombra e movimentos sem contato trabalham explosao, coordenacao e gasto energetico. |
| Como fazer | ["Abra espaco ao redor.","Faca guarda leve.","Solte jabs e diretos no ar, sem travar cotovelos.","Inclua deslocamentos pequenos.","Respire e reduza ritmo para finalizar."] |
| Dicas de postura | ["Mantenha movimentos controlados.","Use amplitude confortavel.","Adapte intensidade ao check-in do dia."] |
| Respiracao | ["Nao prenda a respiracao.","Reduza ritmo se a respiracao sair do controle.","Finalize voltando ao ritmo natural."] |
| Erros comuns | ["Buscar intensidade maior que o necessario.","Ignorar dor ou tontura.","Pular aquecimento em praticas mais ativas."] |
| Cuidados | ["Evite movimentos explosivos se houver dor em ombros, punhos, cotovelos ou coluna."] |
| Contraindicacoes | ["Evite movimentos explosivos se houver dor em ombros, punhos, cotovelos ou coluna."] |
| Recomendado quando | ["luta","sombra","irritacao"] |
| Evitar quando | ["Evite movimentos explosivos se houver dor em ombros, punhos, cotovelos ou coluna."] |
| Imagem/chave | lutas-sombra-descarga |

### Subir escadas

| Campo | Valor |
| --- | --- |
| Slug | subir-escadas-descarga |
| Area | ENERGY |
| Categoria | MENTAL / ENERGY_SPEND |
| Nivel | 3 |
| Objetivo | Gastar energia em poucos minutos sem equipamento. |
| Descricao curta | Opcao pratica do dia a dia com ativacao de pernas e gluteos. |
| Como fazer | ["Use corrimao se houver.","Suba em ritmo controlado.","Desca devagar ou use elevador se precisar.","Faca pausas curtas.","Pare antes de perder o controle da respiracao."] |
| Dicas de postura | ["Mantenha movimentos controlados.","Use amplitude confortavel.","Adapte intensidade ao check-in do dia."] |
| Respiracao | ["Nao prenda a respiracao.","Reduza ritmo se a respiracao sair do controle.","Finalize voltando ao ritmo natural."] |
| Erros comuns | ["Buscar intensidade maior que o necessario.","Ignorar dor ou tontura.","Pular aquecimento em praticas mais ativas."] |
| Cuidados | ["Inclua alerta para joelhos, tontura e falta de ar excessiva."] |
| Contraindicacoes | ["Inclua alerta para joelhos, tontura e falta de ar excessiva."] |
| Recomendado quando | ["escadas","pernas","descarga"] |
| Evitar quando | ["Inclua alerta para joelhos, tontura e falta de ar excessiva."] |
| Imagem/chave | subir-escadas-descarga |

### Corrida

| Campo | Valor |
| --- | --- |
| Slug | corrida-descarga |
| Area | ENERGY |
| Categoria | MENTAL / ENERGY_SPEND |
| Nivel | 5 |
| Objetivo | Descarregar agitacao de forma estruturada. |
| Descricao curta | Atividade de alto gasto energetico e forte estimulo cardiovascular, util quando ha excesso de energia. |
| Como fazer | ["Aqueça caminhando.","Alterne corrida leve e caminhada.","Mantenha ritmo em que ainda consiga falar frases curtas.","Reduza o ritmo antes de parar.","Hidrate-se e observe o corpo."] |
| Dicas de postura | ["Mantenha movimentos controlados.","Use amplitude confortavel.","Adapte intensidade ao check-in do dia."] |
| Respiracao | ["Nao prenda a respiracao.","Reduza ritmo se a respiracao sair do controle.","Finalize voltando ao ritmo natural."] |
| Erros comuns | ["Buscar intensidade maior que o necessario.","Ignorar dor ou tontura.","Pular aquecimento em praticas mais ativas."] |
| Cuidados | ["Evite com dor, tontura, falta de ar intensa, lesao recente ou orientacao para evitar impacto."] |
| Contraindicacoes | ["Evite com dor, tontura, falta de ar intensa, lesao recente ou orientacao para evitar impacto."] |
| Recomendado quando | ["ansiedade","energia acumulada","cardio"] |
| Evitar quando | ["Evite com dor, tontura, falta de ar intensa, lesao recente ou orientacao para evitar impacto."] |
| Imagem/chave | corrida-descarga |

### Pular corda

| Campo | Valor |
| --- | --- |
| Slug | pular-corda-descarga |
| Area | ENERGY |
| Categoria | MENTAL / ENERGY_SPEND |
| Nivel | 5 |
| Objetivo | Gastar energia rapidamente com blocos curtos. |
| Descricao curta | Exercicio cardiovascular intenso e de alto impacto. |
| Como fazer | ["Aqueça tornozelos e panturrilhas.","Comece com saltos simulados sem corda.","Faca blocos de 15 a 30 segundos.","Descanse por tempo igual ou maior.","Finalize caminhando devagar."] |
| Dicas de postura | ["Mantenha movimentos controlados.","Use amplitude confortavel.","Adapte intensidade ao check-in do dia."] |
| Respiracao | ["Nao prenda a respiracao.","Reduza ritmo se a respiracao sair do controle.","Finalize voltando ao ritmo natural."] |
| Erros comuns | ["Buscar intensidade maior que o necessario.","Ignorar dor ou tontura.","Pular aquecimento em praticas mais ativas."] |
| Cuidados | ["Inclua alerta para joelhos, tornozelos, coluna e iniciantes. Pare se houver dor."] |
| Contraindicacoes | ["Inclua alerta para joelhos, tornozelos, coluna e iniciantes. Pare se houver dor."] |
| Recomendado quando | ["cardio intenso","impacto","descarga"] |
| Evitar quando | ["Inclua alerta para joelhos, tornozelos, coluna e iniciantes. Pare se houver dor."] |
| Imagem/chave | pular-corda-descarga |

### Treino funcional / HIIT

| Campo | Valor |
| --- | --- |
| Slug | treino-funcional-hiit |
| Area | ENERGY |
| Categoria | MENTAL / ENERGY_SPEND |
| Nivel | 5 |
| Objetivo | Descarregar tensao e excesso de energia com controle. |
| Descricao curta | Alterna esforco intenso e recuperacao com burpees, agachamentos, polichinelos e movimentos combinados. |
| Como fazer | ["Aqueça por 3 minutos.","Escolha 3 movimentos.","Faca 20 segundos de esforco e 40 de descanso.","Repita 3 a 6 ciclos.","Finalize com caminhada e respiracao."] |
| Dicas de postura | ["Mantenha movimentos controlados.","Use amplitude confortavel.","Adapte intensidade ao check-in do dia."] |
| Respiracao | ["Nao prenda a respiracao.","Reduza ritmo se a respiracao sair do controle.","Finalize voltando ao ritmo natural."] |
| Erros comuns | ["Buscar intensidade maior que o necessario.","Ignorar dor ou tontura.","Pular aquecimento em praticas mais ativas."] |
| Cuidados | ["Evite se houver dor, pressao no peito, tontura, lesao recente ou condicao sem liberacao profissional."] |
| Contraindicacoes | ["Evite se houver dor, pressao no peito, tontura, lesao recente ou condicao sem liberacao profissional."] |
| Recomendado quando | ["hiit","funcional","energia acumulada"] |
| Evitar quando | ["Evite se houver dor, pressao no peito, tontura, lesao recente ou condicao sem liberacao profissional."] |
| Imagem/chave | treino-funcional-hiit |

### Acompanhamento do progresso de foco

| Campo | Valor |
| --- | --- |
| Slug | acompanhamento-progresso-foco |
| Area | FOCUS |
| Categoria | MENTAL / FOCUS_TRAINING |
| Nivel | 1 |
| Objetivo | Ajuda a enxergar metas diarias, sequencia de dias e sensacao antes/depois. |
| Descricao curta | Registro simples para acompanhar evolucao sem transformar cuidado em cobranca. |
| Como fazer | ["Defina uma meta diaria pequena.","Marque exercicios concluidos.","Registre sensacao antes e depois.","Observe a sequencia de dias.","Revise progresso por categoria uma vez por semana."] |
| Dicas de postura | ["Use uma postura confortavel.","Reduza estimulos ao redor.","Progresso tambem inclui perceber quando descansar."] |
| Respiracao | ["Respire sem prender o ar.","Volte com calma quando a mente divagar.","Finalize percebendo seu estado atual."] |
| Erros comuns | ["Fazer com pressa.","Transformar erro em julgamento.","Aumentar dificuldade antes da base ficar confortavel."] |
| Cuidados | ["Evite usar historico como motivo de culpa.","Esta pratica treina atencao e nao promete resultado garantido."] |
| Contraindicacoes | ["Evite usar historico como motivo de culpa."] |
| Recomendado quando | ["Quando o check-in indicar falta de foco.","Antes de estudar, trabalhar ou voltar para uma tarefa."] |
| Evitar quando | ["Evite usar historico como motivo de culpa."] |
| Imagem/chave | acompanhamento-progresso-foco |

### Contagem de palavras em texto

| Campo | Valor |
| --- | --- |
| Slug | contagem-palavras-texto |
| Area | FOCUS |
| Categoria | MENTAL / FOCUS_TRAINING |
| Nivel | 1 |
| Objetivo | Ajuda a manter foco em uma tarefa simples por mais tempo, reduzindo impulsividade e dispersao. |
| Descricao curta | Treina atencao sustentada, precisao mental e resistencia contra distracoes usando um texto fisico. |
| Como fazer | ["Escolha um livro, revista ou texto fisico.","Conte mentalmente as palavras de um paragrafo.","Repita a contagem para confirmar se esta correta.","Aguarde um minuto.","Conte as palavras de dois paragrafos.","Quando ficar facil, avance para uma pagina inteira.","Faca a contagem mentalmente, sem usar os dedos para apontar."] |
| Dicas de postura | ["Use uma postura confortavel.","Reduza estimulos ao redor.","Use textos curtos no inicio."] |
| Respiracao | ["Respire sem prender o ar.","Volte com calma quando a mente divagar.","Finalize percebendo seu estado atual."] |
| Erros comuns | ["Fazer com pressa.","Transformar erro em julgamento.","Aumentar dificuldade antes da base ficar confortavel."] |
| Cuidados | ["Pare se houver frustracao intensa ou dor de cabeca; retome com um trecho menor.","Esta pratica treina atencao e nao promete resultado garantido."] |
| Contraindicacoes | ["Pare se houver frustracao intensa ou dor de cabeca; retome com um trecho menor."] |
| Recomendado quando | ["Quando o check-in indicar falta de foco.","Antes de estudar, trabalhar ou voltar para uma tarefa."] |
| Evitar quando | ["Pare se houver frustracao intensa ou dor de cabeca; retome com um trecho menor."] |
| Imagem/chave | contagem-palavras-texto |

### Contagem mental direta e reversa

| Campo | Valor |
| --- | --- |
| Slug | contagem-mental-direta-reversa |
| Area | FOCUS |
| Categoria | MENTAL / FOCUS_TRAINING |
| Nivel | 1 |
| Objetivo | Ajuda a mente a permanecer em uma sequencia logica sem se perder. |
| Descricao curta | Exercicio simples para treinar concentracao, continuidade mental e controle da atencao. |
| Como fazer | ["Conte mentalmente de 1 ate 100.","Ao terminar, conte de 100 ate 1.","Repita o exercicio pelo menos 3 vezes ao dia.","Se se perder, volte alguns numeros sem se julgar."] |
| Dicas de postura | ["Use uma postura confortavel.","Reduza estimulos ao redor.","Pode ser feito sentado, em pe ou em uma pausa curta."] |
| Respiracao | ["Respire sem prender o ar.","Volte com calma quando a mente divagar.","Finalize percebendo seu estado atual."] |
| Erros comuns | ["Fazer com pressa.","Transformar erro em julgamento.","Aumentar dificuldade antes da base ficar confortavel."] |
| Cuidados | ["Evite usar como cobranca; a pratica deve ficar simples e repetivel.","Esta pratica treina atencao e nao promete resultado garantido."] |
| Contraindicacoes | ["Evite usar como cobranca; a pratica deve ficar simples e repetivel."] |
| Recomendado quando | ["Quando o check-in indicar falta de foco.","Antes de estudar, trabalhar ou voltar para uma tarefa."] |
| Evitar quando | ["Evite usar como cobranca; a pratica deve ficar simples e repetivel."] |
| Imagem/chave | contagem-mental-direta-reversa |

### Contemplacao de objeto cotidiano

| Campo | Valor |
| --- | --- |
| Slug | contemplacao-objeto-cotidiano |
| Area | FOCUS |
| Categoria | MENTAL / FOCUS_TRAINING |
| Nivel | 1 |
| Objetivo | Ajuda a contemplar um objeto sem julgamento ou associacao mental. |
| Descricao curta | Exercicio de foco visual e reducao de pensamento automatico. |
| Como fazer | ["Escolha um objeto cotidiano: copo, colher, caderno ou caneta.","Observe o objeto em silencio.","Evite pensamentos sobre uso, nome, valor ou lembrancas.","Apenas contemple forma, cor e presenca do objeto."] |
| Dicas de postura | ["Use uma postura confortavel.","Reduza estimulos ao redor.","Se a mente comentar, perceba e volte para a forma do objeto."] |
| Respiracao | ["Respire sem prender o ar.","Volte com calma quando a mente divagar.","Finalize percebendo seu estado atual."] |
| Erros comuns | ["Fazer com pressa.","Transformar erro em julgamento.","Aumentar dificuldade antes da base ficar confortavel."] |
| Cuidados | ["Escolha um objeto emocionalmente neutro.","Esta pratica treina atencao e nao promete resultado garantido."] |
| Contraindicacoes | ["Escolha um objeto emocionalmente neutro."] |
| Recomendado quando | ["Quando o check-in indicar falta de foco.","Antes de estudar, trabalhar ou voltar para uma tarefa."] |
| Evitar quando | ["Escolha um objeto emocionalmente neutro."] |
| Imagem/chave | contemplacao-objeto-cotidiano |

### Meditacao mindfulness

| Campo | Valor |
| --- | --- |
| Slug | meditacao-mindfulness |
| Area | FOCUS |
| Categoria | MENTAL / FOCUS_TRAINING |
| Nivel | 1 |
| Objetivo | Ensina a observar pensamentos sem se prender a eles. |
| Descricao curta | Pratica baseada em atencao plena para reduzir agitacao mental e melhorar presenca. |
| Como fazer | ["Sente-se com apoio.","Foque na respiracao.","Quando pensamentos surgirem, note e volte ao ar entrando e saindo.","Se preferir, use audio guiado.","Comece com 3 a 5 minutos e progrida para 10."] |
| Dicas de postura | ["Use uma postura confortavel.","Reduza estimulos ao redor.","A pratica e retorno gentil, nao mente vazia perfeita."] |
| Respiracao | ["Respire sem prender o ar.","Volte com calma quando a mente divagar.","Finalize percebendo seu estado atual."] |
| Erros comuns | ["Fazer com pressa.","Transformar erro em julgamento.","Aumentar dificuldade antes da base ficar confortavel."] |
| Cuidados | ["Se observar pensamentos aumentar angustia, abra os olhos e volte para o ambiente.","Esta pratica treina atencao e nao promete resultado garantido."] |
| Contraindicacoes | ["Se observar pensamentos aumentar angustia, abra os olhos e volte para o ambiente."] |
| Recomendado quando | ["Quando o check-in indicar falta de foco.","Antes de estudar, trabalhar ou voltar para uma tarefa."] |
| Evitar quando | ["Se observar pensamentos aumentar angustia, abra os olhos e volte para o ambiente."] |
| Imagem/chave | meditacao-mindfulness |

### Observacao consciente de uma fruta

| Campo | Valor |
| --- | --- |
| Slug | observacao-consciente-fruta |
| Area | FOCUS |
| Categoria | MENTAL / FOCUS_TRAINING |
| Nivel | 1 |
| Objetivo | Fortalece presenca, observacao e conexao com o momento atual. |
| Descricao curta | Exercicio de atencao plena usando percepcao sensorial. |
| Como fazer | ["Pegue uma fruta: banana, maca, laranja, pera ou similar.","Segure-a nas maos.","Observe superficie, forma, textura, cheiro e peso.","Nao pense sobre origem, valor nutricional ou historias relacionadas.","Apenas observe a fruta como ela e."] |
| Dicas de postura | ["Use uma postura confortavel.","Reduza estimulos ao redor.","A pratica pode ser feita com qualquer objeto seguro se nao houver fruta."] |
| Respiracao | ["Respire sem prender o ar.","Volte com calma quando a mente divagar.","Finalize percebendo seu estado atual."] |
| Erros comuns | ["Fazer com pressa.","Transformar erro em julgamento.","Aumentar dificuldade antes da base ficar confortavel."] |
| Cuidados | ["Evite se o alimento for gatilho emocional; use outro objeto.","Esta pratica treina atencao e nao promete resultado garantido."] |
| Contraindicacoes | ["Evite se o alimento for gatilho emocional; use outro objeto."] |
| Recomendado quando | ["Quando o check-in indicar falta de foco.","Antes de estudar, trabalhar ou voltar para uma tarefa."] |
| Evitar quando | ["Evite se o alimento for gatilho emocional; use outro objeto."] |
| Imagem/chave | observacao-consciente-fruta |

### Observacao de triangulo desenhado

| Campo | Valor |
| --- | --- |
| Slug | observacao-triangulo-desenhado |
| Area | FOCUS |
| Categoria | MENTAL / FOCUS_TRAINING |
| Nivel | 1 |
| Objetivo | Treina foco fixo e resistencia a distracoes. |
| Descricao curta | Exercicio de concentracao visual com estimulo geometrico simples. |
| Como fazer | ["Desenhe um triangulo em uma folha.","Pinte com a cor que preferir.","Coloque a folha a sua frente.","Observe apenas o triangulo.","Evite qualquer pensamento ou distracao.","Mantenha a atencao no desenho."] |
| Dicas de postura | ["Use uma postura confortavel.","Reduza estimulos ao redor.","Use uma cor confortavel para os olhos."] |
| Respiracao | ["Respire sem prender o ar.","Volte com calma quando a mente divagar.","Finalize percebendo seu estado atual."] |
| Erros comuns | ["Fazer com pressa.","Transformar erro em julgamento.","Aumentar dificuldade antes da base ficar confortavel."] |
| Cuidados | ["Interrompa se houver desconforto visual.","Esta pratica treina atencao e nao promete resultado garantido."] |
| Contraindicacoes | ["Interrompa se houver desconforto visual."] |
| Recomendado quando | ["Quando o check-in indicar falta de foco.","Antes de estudar, trabalhar ou voltar para uma tarefa."] |
| Evitar quando | ["Interrompa se houver desconforto visual."] |
| Imagem/chave | observacao-triangulo-desenhado |

### Repeticao mental de frase inspiradora

| Campo | Valor |
| --- | --- |
| Slug | repeticao-mental-frase-inspiradora |
| Area | FOCUS |
| Categoria | MENTAL / FOCUS_TRAINING |
| Nivel | 1 |
| Objetivo | Ajuda a reduzir pensamentos dispersos e manter a mente em um unico conteudo. |
| Descricao curta | Exercicio de foco verbal e estabilidade mental. |
| Como fazer | ["Escolha uma palavra ou frase inspiradora.","Repita mentalmente por 5 minutos.","Quando ficar facil, aumente para 10 minutos.","Sempre que a mente divagar, volte para a frase sem se julgar."] |
| Dicas de postura | ["Use uma postura confortavel.","Reduza estimulos ao redor.","Escolha uma frase neutra e segura para voce."] |
| Respiracao | ["Respire sem prender o ar.","Volte com calma quando a mente divagar.","Finalize percebendo seu estado atual."] |
| Erros comuns | ["Fazer com pressa.","Transformar erro em julgamento.","Aumentar dificuldade antes da base ficar confortavel."] |
| Cuidados | ["Evite frases que tragam pressao, culpa ou comparacao.","Esta pratica treina atencao e nao promete resultado garantido."] |
| Contraindicacoes | ["Evite frases que tragam pressao, culpa ou comparacao."] |
| Recomendado quando | ["Quando o check-in indicar falta de foco.","Antes de estudar, trabalhar ou voltar para uma tarefa."] |
| Evitar quando | ["Evite frases que tragam pressao, culpa ou comparacao."] |
| Imagem/chave | repeticao-mental-frase-inspiradora |

### Respiracao consciente

| Campo | Valor |
| --- | --- |
| Slug | respiracao-consciente-foco |
| Area | FOCUS |
| Categoria | MENTAL / FOCUS_TRAINING |
| Nivel | 1 |
| Objetivo | Util antes dos estudos, durante distracoes ou ao perceber ansiedade leve. |
| Descricao curta | Respirar de forma profunda e ritmada pode ajudar a desacelerar o corpo e recuperar foco. |
| Como fazer | ["Inspire pelo nariz em ritmo confortavel.","Solte o ar pela boca ou nariz mais devagar.","Repita por 1 a 3 minutos.","Volte a tarefa escolhendo uma unica acao."] |
| Dicas de postura | ["Use uma postura confortavel.","Reduza estimulos ao redor.","Nao precisa prender o ar."] |
| Respiracao | ["Respire sem prender o ar.","Volte com calma quando a mente divagar.","Finalize percebendo seu estado atual."] |
| Erros comuns | ["Fazer com pressa.","Transformar erro em julgamento.","Aumentar dificuldade antes da base ficar confortavel."] |
| Cuidados | ["Pare se houver tontura ou falta de ar.","Esta pratica treina atencao e nao promete resultado garantido."] |
| Contraindicacoes | ["Pare se houver tontura ou falta de ar."] |
| Recomendado quando | ["Quando o check-in indicar falta de foco.","Antes de estudar, trabalhar ou voltar para uma tarefa."] |
| Evitar quando | ["Pare se houver tontura ou falta de ar."] |
| Imagem/chave | respiracao-consciente-foco |

### Um minuto de foco

| Campo | Valor |
| --- | --- |
| Slug | um-minuto-de-foco |
| Area | FOCUS |
| Categoria | MENTAL / FOCUS_TRAINING |
| Nivel | 1 |
| Objetivo | Cria um pequeno ponto de controle antes de continuar o dia. |
| Descricao curta | Exercicio rapido de 60 segundos para retomar presenca. |
| Como fazer | ["Escolha um objeto.","Olhe fixamente para ele por 60 segundos.","Se a mente divagar, volte naturalmente.","Marque como concluido."] |
| Dicas de postura | ["Use uma postura confortavel.","Reduza estimulos ao redor.","Funciona bem entre tarefas."] |
| Respiracao | ["Respire sem prender o ar.","Volte com calma quando a mente divagar.","Finalize percebendo seu estado atual."] |
| Erros comuns | ["Fazer com pressa.","Transformar erro em julgamento.","Aumentar dificuldade antes da base ficar confortavel."] |
| Cuidados | ["Desvie o olhar se houver desconforto visual.","Esta pratica treina atencao e nao promete resultado garantido."] |
| Contraindicacoes | ["Desvie o olhar se houver desconforto visual."] |
| Recomendado quando | ["Quando o check-in indicar falta de foco.","Antes de estudar, trabalhar ou voltar para uma tarefa."] |
| Evitar quando | ["Desvie o olhar se houver desconforto visual."] |
| Imagem/chave | um-minuto-de-foco |

### Visualizacao de tarefa realizada com sucesso

| Campo | Valor |
| --- | --- |
| Slug | visualizacao-tarefa-sucesso |
| Area | FOCUS |
| Categoria | MENTAL / FOCUS_TRAINING |
| Nivel | 1 |
| Objetivo | Ajuda a organizar ambiente, imaginar execucao e reduzir travamento inicial. |
| Descricao curta | Prepara a mente para iniciar estudo ou trabalho com menos resistencia. |
| Como fazer | ["Feche ou suavize os olhos.","Imagine o ambiente organizado.","Visualize voce iniciando a tarefa.","Imagine o resultado positivo e realista.","Abra os olhos e faca o primeiro passo."] |
| Dicas de postura | ["Use uma postura confortavel.","Reduza estimulos ao redor.","Imagine um resultado possivel, nao perfeito."] |
| Respiracao | ["Respire sem prender o ar.","Volte com calma quando a mente divagar.","Finalize percebendo seu estado atual."] |
| Erros comuns | ["Fazer com pressa.","Transformar erro em julgamento.","Aumentar dificuldade antes da base ficar confortavel."] |
| Cuidados | ["Se a visualizacao virar preocupacao, volte para respiracao consciente.","Esta pratica treina atencao e nao promete resultado garantido."] |
| Contraindicacoes | ["Se a visualizacao virar preocupacao, volte para respiracao consciente."] |
| Recomendado quando | ["Quando o check-in indicar falta de foco.","Antes de estudar, trabalhar ou voltar para uma tarefa."] |
| Evitar quando | ["Se a visualizacao virar preocupacao, volte para respiracao consciente."] |
| Imagem/chave | visualizacao-tarefa-sucesso |

### Calculos mentais

| Campo | Valor |
| --- | --- |
| Slug | calculos-mentais |
| Area | FOCUS |
| Categoria | MENTAL / FOCUS_TRAINING |
| Nivel | 3 |
| Objetivo | Estimula foco, memoria operacional e flexibilidade mental. |
| Descricao curta | Contas simples de cabeca para ativar atencao e raciocinio logico. |
| Como fazer | ["Comece com somas simples.","Passe para subtracoes.","Inclua multiplicacoes pequenas.","Use divisoes simples.","Aumente dificuldade aos poucos."] |
| Dicas de postura | ["Use uma postura confortavel.","Reduza estimulos ao redor.","Velocidade nao e prioridade; estabilidade vem primeiro."] |
| Respiracao | ["Respire sem prender o ar.","Volte com calma quando a mente divagar.","Finalize percebendo seu estado atual."] |
| Erros comuns | ["Fazer com pressa.","Transformar erro em julgamento.","Aumentar dificuldade antes da base ficar confortavel."] |
| Cuidados | ["Reduza a dificuldade se surgir irritacao ou autocritica.","Esta pratica treina atencao e nao promete resultado garantido."] |
| Contraindicacoes | ["Reduza a dificuldade se surgir irritacao ou autocritica."] |
| Recomendado quando | ["Quando o check-in indicar falta de foco.","Antes de estudar, trabalhar ou voltar para uma tarefa."] |
| Evitar quando | ["Reduza a dificuldade se surgir irritacao ou autocritica."] |
| Imagem/chave | calculos-mentais |

### Contagem mental de 3 em 3

| Campo | Valor |
| --- | --- |
| Slug | contagem-mental-3-em-3 |
| Area | FOCUS |
| Categoria | MENTAL / FOCUS_TRAINING |
| Nivel | 3 |
| Objetivo | Estimula atencao, memoria operacional e controle mental. |
| Descricao curta | Exercicio de foco com raciocinio logico leve. |
| Como fazer | ["Conte de 1 a 100 de 3 em 3: 1, 4, 7, 10.","Depois conte de 100 ate 1 da mesma forma: 100, 97, 94.","Faca lentamente e sem pressa.","Se errar, recomece de um ponto confortavel."] |
| Dicas de postura | ["Use uma postura confortavel.","Reduza estimulos ao redor.","O erro faz parte do treino de retomada de foco."] |
| Respiracao | ["Respire sem prender o ar.","Volte com calma quando a mente divagar.","Finalize percebendo seu estado atual."] |
| Erros comuns | ["Fazer com pressa.","Transformar erro em julgamento.","Aumentar dificuldade antes da base ficar confortavel."] |
| Cuidados | ["Reduza a meta se a pratica aumentar irritacao.","Esta pratica treina atencao e nao promete resultado garantido."] |
| Contraindicacoes | ["Reduza a meta se a pratica aumentar irritacao."] |
| Recomendado quando | ["Quando o check-in indicar falta de foco.","Antes de estudar, trabalhar ou voltar para uma tarefa."] |
| Evitar quando | ["Reduza a meta se a pratica aumentar irritacao."] |
| Imagem/chave | contagem-mental-3-em-3 |

### Tecnica Pomodoro

| Campo | Valor |
| --- | --- |
| Slug | tecnica-pomodoro |
| Area | FOCUS |
| Categoria | MENTAL / FOCUS_TRAINING |
| Nivel | 3 |
| Objetivo | Reduz sobrecarga mental e melhora constancia. |
| Descricao curta | Tecnica de foco estruturado com blocos curtos de trabalho e pausas previsiveis. |
| Como fazer | ["Escolha uma tarefa.","Foque por 25 minutos.","Faca 5 minutos de pausa.","Depois de 4 ciclos, faca uma pausa maior.","Use um timer integrado quando disponivel."] |
| Dicas de postura | ["Use uma postura confortavel.","Reduza estimulos ao redor.","A pausa faz parte da tecnica; nao pule se estiver cansado."] |
| Respiracao | ["Respire sem prender o ar.","Volte com calma quando a mente divagar.","Finalize percebendo seu estado atual."] |
| Erros comuns | ["Fazer com pressa.","Transformar erro em julgamento.","Aumentar dificuldade antes da base ficar confortavel."] |
| Cuidados | ["Reduza para ciclos menores em dias de sono ruim ou estresse alto.","Esta pratica treina atencao e nao promete resultado garantido."] |
| Contraindicacoes | ["Reduza para ciclos menores em dias de sono ruim ou estresse alto."] |
| Recomendado quando | ["Quando o check-in indicar falta de foco.","Antes de estudar, trabalhar ou voltar para uma tarefa."] |
| Evitar quando | ["Reduza para ciclos menores em dias de sono ruim ou estresse alto."] |
| Imagem/chave | tecnica-pomodoro |

### Visualizacao do triangulo com olhos fechados

| Campo | Valor |
| --- | --- |
| Slug | visualizacao-triangulo-olhos-fechados |
| Area | FOCUS |
| Categoria | MENTAL / FOCUS_TRAINING |
| Nivel | 3 |
| Objetivo | Treina memoria visual, concentracao e imaginacao controlada. |
| Descricao curta | Exercicio de foco visual interno. |
| Como fazer | ["Observe o triangulo desenhado.","Quando estiver concentrado, feche os olhos.","Visualize o triangulo mentalmente.","Se a imagem sumir, abra os olhos, observe novamente e repita."] |
| Dicas de postura | ["Use uma postura confortavel.","Reduza estimulos ao redor.","A imagem pode oscilar; voltar faz parte do treino."] |
| Respiracao | ["Respire sem prender o ar.","Volte com calma quando a mente divagar.","Finalize percebendo seu estado atual."] |
| Erros comuns | ["Fazer com pressa.","Transformar erro em julgamento.","Aumentar dificuldade antes da base ficar confortavel."] |
| Cuidados | ["Abra os olhos se ficar desconfortavel.","Esta pratica treina atencao e nao promete resultado garantido."] |
| Contraindicacoes | ["Abra os olhos se ficar desconfortavel."] |
| Recomendado quando | ["Quando o check-in indicar falta de foco.","Antes de estudar, trabalhar ou voltar para uma tarefa."] |
| Evitar quando | ["Abra os olhos se ficar desconfortavel."] |
| Imagem/chave | visualizacao-triangulo-olhos-fechados |

### Visualizacao mental da fruta

| Campo | Valor |
| --- | --- |
| Slug | visualizacao-mental-fruta |
| Area | FOCUS |
| Categoria | MENTAL / FOCUS_TRAINING |
| Nivel | 3 |
| Objetivo | Treina concentracao, imaginacao visual e memoria sensorial. |
| Descricao curta | Continua o exercicio anterior com foco em memoria visual. |
| Como fazer | ["Observe uma fruta por 2 minutos.","Feche os olhos.","Tente visualizar a fruta em sua mente.","Lembre textura, cor, deformacoes, cheiro e sensacao ao toque.","Se a imagem desaparecer, abra os olhos e observe novamente.","Repita o processo."] |
| Dicas de postura | ["Use uma postura confortavel.","Reduza estimulos ao redor.","Visualizacao fraca tambem treina atencao; nao precisa parecer uma foto."] |
| Respiracao | ["Respire sem prender o ar.","Volte com calma quando a mente divagar.","Finalize percebendo seu estado atual."] |
| Erros comuns | ["Fazer com pressa.","Transformar erro em julgamento.","Aumentar dificuldade antes da base ficar confortavel."] |
| Cuidados | ["Abra os olhos se surgir desconforto ou tontura.","Esta pratica treina atencao e nao promete resultado garantido."] |
| Contraindicacoes | ["Abra os olhos se surgir desconforto ou tontura."] |
| Recomendado quando | ["Quando o check-in indicar falta de foco.","Antes de estudar, trabalhar ou voltar para uma tarefa."] |
| Evitar quando | ["Abra os olhos se surgir desconforto ou tontura."] |
| Imagem/chave | visualizacao-mental-fruta |

### Silencio mental

| Campo | Valor |
| --- | --- |
| Slug | silencio-mental |
| Area | FOCUS |
| Categoria | MENTAL / FOCUS_TRAINING |
| Nivel | 5 |
| Objetivo | Ajuda a experimentar momentos de silencio mental, presenca e autorregulacao. |
| Descricao curta | Exercicio avancado para reduzir fluxo excessivo de pensamentos. |
| Como fazer | ["Pratique por pelo menos 5 minutos ao dia.","De preferencia ao periodo da manha.","Sente-se confortavelmente.","Tente parar ou reduzir os pensamentos.","Apenas aprecie o silencio mental.","Caso pensamentos aparecam, perceba e volte ao silencio."] |
| Dicas de postura | ["Use uma postura confortavel.","Reduza estimulos ao redor.","Nao e necessario zerar pensamentos; notar e voltar ja e pratica."] |
| Respiracao | ["Respire sem prender o ar.","Volte com calma quando a mente divagar.","Finalize percebendo seu estado atual."] |
| Erros comuns | ["Fazer com pressa.","Transformar erro em julgamento.","Aumentar dificuldade antes da base ficar confortavel."] |
| Cuidados | ["Evite transformar em luta mental. Se ficar angustiante, use respiracao simples ou procure apoio profissional.","Esta pratica treina atencao e nao promete resultado garantido."] |
| Contraindicacoes | ["Evite transformar em luta mental. Se ficar angustiante, use respiracao simples ou procure apoio profissional."] |
| Recomendado quando | ["Quando o check-in indicar falta de foco.","Antes de estudar, trabalhar ou voltar para uma tarefa."] |
| Evitar quando | ["Evite transformar em luta mental. Se ficar angustiante, use respiracao simples ou procure apoio profissional."] |
| Imagem/chave | silencio-mental |

### Visualizacao do triangulo com olhos abertos

| Campo | Valor |
| --- | --- |
| Slug | visualizacao-triangulo-olhos-abertos |
| Area | FOCUS |
| Categoria | MENTAL / FOCUS_TRAINING |
| Nivel | 5 |
| Objetivo | Ajuda a manter uma imagem mental mesmo sem olhar diretamente para ela. |
| Descricao curta | Exercicio avancado de visualizacao e foco mental. |
| Como fazer | ["Observe o triangulo.","Tire o desenho do seu campo de visao.","Com os olhos abertos, tente visualizar o triangulo mentalmente.","Mantenha a imagem pelo maior tempo possivel.","Volte ao desenho se precisar reiniciar."] |
| Dicas de postura | ["Use uma postura confortavel.","Reduza estimulos ao redor.","Pratique depois dos exercicios anteriores."] |
| Respiracao | ["Respire sem prender o ar.","Volte com calma quando a mente divagar.","Finalize percebendo seu estado atual."] |
| Erros comuns | ["Fazer com pressa.","Transformar erro em julgamento.","Aumentar dificuldade antes da base ficar confortavel."] |
| Cuidados | ["Nao force se houver fadiga visual ou dor de cabeca.","Esta pratica treina atencao e nao promete resultado garantido."] |
| Contraindicacoes | ["Nao force se houver fadiga visual ou dor de cabeca."] |
| Recomendado quando | ["Quando o check-in indicar falta de foco.","Antes de estudar, trabalhar ou voltar para uma tarefa."] |
| Evitar quando | ["Nao force se houver fadiga visual ou dor de cabeca."] |
| Imagem/chave | visualizacao-triangulo-olhos-abertos |

### Meditacao silenciosa

| Campo | Valor |
| --- | --- |
| Slug | meditacao-silenciosa |
| Area | MOOD |
| Categoria | MENTAL / HAPPINESS_AUTOCONHECIMENTO |
| Nivel | 3 |
| Objetivo | Aumentar presenca e autoconhecimento. |
| Descricao curta | 5 a 10 minutos diarios em silencio para observar a mente com gentileza. |
| Como fazer | ["Sente-se com apoio.","Silencie notificacoes.","Observe a respiracao.","Perceba pensamentos sem seguir todos eles.","Finalize com uma frase de cuidado."] |
| Dicas de postura | ["Escolha um contexto seguro.","Mantenha a pratica pequena o bastante para ser possivel.","Respeite limites emocionais."] |
| Respiracao | ["Respire naturalmente.","Pause antes e depois para perceber seu estado.","Solte o ar se surgir autocobranca."] |
| Erros comuns | ["Forcar alegria.","Comparar sua experiencia com outras pessoas.","Transformar autocuidado em meta perfeita."] |
| Cuidados | ["Se o silencio aumentar angustia, abra os olhos e procure apoio."] |
| Contraindicacoes | ["Se o silencio aumentar angustia, abra os olhos e procure apoio."] |
| Recomendado quando | ["meditacao","silencio","autoconhecimento"] |
| Evitar quando | ["Se o silencio aumentar angustia, abra os olhos e procure apoio."] |
| Imagem/chave | meditacao-silenciosa |

### Roda da vida

| Campo | Valor |
| --- | --- |
| Slug | roda-da-vida |
| Area | MOOD |
| Categoria | MENTAL / HAPPINESS_AUTOCONHECIMENTO |
| Nivel | 3 |
| Objetivo | Transformar reflexao em proximo passo possivel. |
| Descricao curta | Ferramenta visual para avaliar areas da vida e escolher uma acao simples. |
| Como fazer | ["Desenhe um circulo dividido em areas.","Avalie cada area de 0 a 10.","Observe a area mais baixa.","Escolha uma acao simples para melhorar essa area.","Revise no proximo mes."] |
| Dicas de postura | ["Escolha um contexto seguro.","Mantenha a pratica pequena o bastante para ser possivel.","Respeite limites emocionais."] |
| Respiracao | ["Respire naturalmente.","Pause antes e depois para perceber seu estado.","Solte o ar se surgir autocobranca."] |
| Erros comuns | ["Forcar alegria.","Comparar sua experiencia com outras pessoas.","Transformar autocuidado em meta perfeita."] |
| Cuidados | ["Evite usar a ferramenta para autocobranca excessiva."] |
| Contraindicacoes | ["Evite usar a ferramenta para autocobranca excessiva."] |
| Recomendado quando | ["reflexao","proposito","planejamento"] |
| Evitar quando | ["Evite usar a ferramenta para autocobranca excessiva."] |
| Imagem/chave | roda-da-vida |

### Atos de bondade

| Campo | Valor |
| --- | --- |
| Slug | atos-de-bondade |
| Area | MOOD |
| Categoria | MENTAL / HAPPINESS_CONEXAO |
| Nivel | 1 |
| Objetivo | Treinar bem-estar por meio de acao social simples. |
| Descricao curta | Ajudar alguem, enviar mensagem carinhosa, doar algo ou elogiar sinceramente cria conexao e proposito. |
| Como fazer | ["Escolha uma acao pequena.","Ajude sem se sobrecarregar.","Envie uma mensagem ou elogio sincero.","Perceba como foi agir com bondade.","Nao espere retorno imediato."] |
| Dicas de postura | ["Escolha um contexto seguro.","Mantenha a pratica pequena o bastante para ser possivel.","Respeite limites emocionais."] |
| Respiracao | ["Respire naturalmente.","Pause antes e depois para perceber seu estado.","Solte o ar se surgir autocobranca."] |
| Erros comuns | ["Forcar alegria.","Comparar sua experiencia com outras pessoas.","Transformar autocuidado em meta perfeita."] |
| Cuidados | ["Evite contatos ou contextos que gerem risco, cobranca ou conflito."] |
| Contraindicacoes | ["Evite contatos ou contextos que gerem risco, cobranca ou conflito."] |
| Recomendado quando | ["bondade","conexao","proposito"] |
| Evitar quando | ["Evite contatos ou contextos que gerem risco, cobranca ou conflito."] |
| Imagem/chave | atos-de-bondade |

### Equilibrio digital

| Campo | Valor |
| --- | --- |
| Slug | equilibrio-digital |
| Area | MOOD |
| Categoria | MENTAL / HAPPINESS_CONEXAO |
| Nivel | 1 |
| Objetivo | Proteger humor e foco de estimulos que drenam energia. |
| Descricao curta | Reduzir redes sociais pode diminuir comparacao excessiva e liberar tempo para experiencias reais. |
| Como fazer | ["Escolha uma janela sem redes.","Afaste notificacoes.","Preencha com algo simples: agua, leitura, caminhada ou conversa.","Observe vontade de checar.","Registre como se sentiu."] |
| Dicas de postura | ["Escolha um contexto seguro.","Mantenha a pratica pequena o bastante para ser possivel.","Respeite limites emocionais."] |
| Respiracao | ["Respire naturalmente.","Pause antes e depois para perceber seu estado.","Solte o ar se surgir autocobranca."] |
| Erros comuns | ["Forcar alegria.","Comparar sua experiencia com outras pessoas.","Transformar autocuidado em meta perfeita."] |
| Cuidados | ["Se o uso digital estiver associado a sofrimento intenso, procure apoio profissional."] |
| Contraindicacoes | ["Se o uso digital estiver associado a sofrimento intenso, procure apoio profissional."] |
| Recomendado quando | ["redes sociais","comparacao","foco"] |
| Evitar quando | ["Se o uso digital estiver associado a sofrimento intenso, procure apoio profissional."] |
| Imagem/chave | equilibrio-digital |

### Encontros presenciais

| Campo | Valor |
| --- | --- |
| Slug | encontros-presenciais |
| Area | MOOD |
| Categoria | MENTAL / HAPPINESS_CONEXAO |
| Nivel | 3 |
| Objetivo | Reduzir isolamento e aumentar presenca com pessoas seguras. |
| Descricao curta | Cafe, caminhada ou conversa sem celular podem fortalecer conexao social. |
| Como fazer | ["Escolha uma pessoa segura.","Combine algo simples.","Reduza uso de celular.","Converse sem meta de resolver tudo.","Observe como se sente depois."] |
| Dicas de postura | ["Escolha um contexto seguro.","Mantenha a pratica pequena o bastante para ser possivel.","Respeite limites emocionais."] |
| Respiracao | ["Respire naturalmente.","Pause antes e depois para perceber seu estado.","Solte o ar se surgir autocobranca."] |
| Erros comuns | ["Forcar alegria.","Comparar sua experiencia com outras pessoas.","Transformar autocuidado em meta perfeita."] |
| Cuidados | ["Respeite limites emocionais, financeiros e de seguranca."] |
| Contraindicacoes | ["Respeite limites emocionais, financeiros e de seguranca."] |
| Recomendado quando | ["conexao","presencial","sem celular"] |
| Evitar quando | ["Respeite limites emocionais, financeiros e de seguranca."] |
| Imagem/chave | encontros-presenciais |

### Caminhada atenta

| Campo | Valor |
| --- | --- |
| Slug | caminhada-atenta |
| Area | MOOD |
| Categoria | MENTAL / HAPPINESS_CORPO_NATUREZA |
| Nivel | 1 |
| Objetivo | Unir movimento, presenca e reducao de excesso digital. |
| Descricao curta | Caminhar sem celular observando pes, cores, temperatura do ar e sons ao redor. |
| Como fazer | ["Guarde o celular.","Sinta os pes tocando o chao.","Observe cores.","Perceba temperatura do ar.","Escute sons ao redor."] |
| Dicas de postura | ["Escolha um contexto seguro.","Mantenha a pratica pequena o bastante para ser possivel.","Respeite limites emocionais."] |
| Respiracao | ["Respire naturalmente.","Pause antes e depois para perceber seu estado.","Solte o ar se surgir autocobranca."] |
| Erros comuns | ["Forcar alegria.","Comparar sua experiencia com outras pessoas.","Transformar autocuidado em meta perfeita."] |
| Cuidados | ["Mantenha atencao a transito, obstaculos e seguranca."] |
| Contraindicacoes | ["Mantenha atencao a transito, obstaculos e seguranca."] |
| Recomendado quando | ["caminhada","presenca","sem celular"] |
| Evitar quando | ["Mantenha atencao a transito, obstaculos e seguranca."] |
| Imagem/chave | caminhada-atenta |

### Grounding

| Campo | Valor |
| --- | --- |
| Slug | grounding-natureza |
| Area | MOOD |
| Categoria | MENTAL / HAPPINESS_CORPO_NATUREZA |
| Nivel | 1 |
| Objetivo | Aumentar contato corporal com o ambiente. |
| Descricao curta | Passear descalco na grama ou terra por 10 a 15 minutos, quando seguro, pode criar presenca sensorial. |
| Como fazer | ["Escolha local limpo e seguro.","Tire os calcados se fizer sentido.","Caminhe devagar.","Perceba temperatura e textura.","Lave os pes depois se necessario."] |
| Dicas de postura | ["Escolha um contexto seguro.","Mantenha a pratica pequena o bastante para ser possivel.","Respeite limites emocionais."] |
| Respiracao | ["Respire naturalmente.","Pause antes e depois para perceber seu estado.","Solte o ar se surgir autocobranca."] |
| Erros comuns | ["Forcar alegria.","Comparar sua experiencia com outras pessoas.","Transformar autocuidado em meta perfeita."] |
| Cuidados | ["Evite locais com objetos cortantes, sujeira, risco biologico ou alergias."] |
| Contraindicacoes | ["Evite locais com objetos cortantes, sujeira, risco biologico ou alergias."] |
| Recomendado quando | ["grounding","natureza","sensorial"] |
| Evitar quando | ["Evite locais com objetos cortantes, sujeira, risco biologico ou alergias."] |
| Imagem/chave | grounding-natureza |

### Respiracao Pranayama

| Campo | Valor |
| --- | --- |
| Slug | respiracao-pranayama-humor |
| Area | MOOD |
| Categoria | MENTAL / HAPPINESS_CORPO_NATUREZA |
| Nivel | 1 |
| Objetivo | Criar pausa fisiologica e presenca. |
| Descricao curta | Respiracao simples para regular corpo e apoiar estabilidade emocional. |
| Como fazer | ["Inspire por 4 segundos.","Segure por 2 segundos.","Expire por 6 segundos.","Repita 5 vezes.","Volte ao ritmo natural."] |
| Dicas de postura | ["Escolha um contexto seguro.","Mantenha a pratica pequena o bastante para ser possivel.","Respeite limites emocionais."] |
| Respiracao | ["Respire naturalmente.","Pause antes e depois para perceber seu estado.","Solte o ar se surgir autocobranca."] |
| Erros comuns | ["Forcar alegria.","Comparar sua experiencia com outras pessoas.","Transformar autocuidado em meta perfeita."] |
| Cuidados | ["Pare se houver tontura, desconforto ou falta de ar."] |
| Contraindicacoes | ["Pare se houver tontura, desconforto ou falta de ar."] |
| Recomendado quando | ["respiracao","humor","presenca"] |
| Evitar quando | ["Pare se houver tontura, desconforto ou falta de ar."] |
| Imagem/chave | respiracao-pranayama-humor |

### Artesanato

| Campo | Valor |
| --- | --- |
| Slug | artesanato-criativo |
| Area | MOOD |
| Categoria | MENTAL / HAPPINESS_CRIATIVIDADE |
| Nivel | 1 |
| Objetivo | Gerar prazer ativo e descanso de telas. |
| Descricao curta | Atividade manual simples que envolve textura, repeticao e criacao. |
| Como fazer | ["Separe material simples.","Escolha uma parte pequena.","Trabalhe sem buscar perfeicao.","Observe textura e ritmo.","Guarde para continuar depois."] |
| Dicas de postura | ["Escolha um contexto seguro.","Mantenha a pratica pequena o bastante para ser possivel.","Respeite limites emocionais."] |
| Respiracao | ["Respire naturalmente.","Pause antes e depois para perceber seu estado.","Solte o ar se surgir autocobranca."] |
| Erros comuns | ["Forcar alegria.","Comparar sua experiencia com outras pessoas.","Transformar autocuidado em meta perfeita."] |
| Cuidados | ["Use ferramentas com seguranca."] |
| Contraindicacoes | ["Use ferramentas com seguranca."] |
| Recomendado quando | ["manual","criatividade","prazer"] |
| Evitar quando | ["Use ferramentas com seguranca."] |
| Imagem/chave | artesanato-criativo |

### Desenho

| Campo | Valor |
| --- | --- |
| Slug | desenho-livre |
| Area | MOOD |
| Categoria | MENTAL / HAPPINESS_CRIATIVIDADE |
| Nivel | 1 |
| Objetivo | Criar prazer manual e reduzir autocritica. |
| Descricao curta | Desenhar sem meta artistica ajuda a expressar e descansar a mente. |
| Como fazer | ["Pegue papel e lapis.","Desenhe formas simples.","Nao avalie beleza.","Preencha com linhas ou cores.","Observe como ficou sem julgar."] |
| Dicas de postura | ["Escolha um contexto seguro.","Mantenha a pratica pequena o bastante para ser possivel.","Respeite limites emocionais."] |
| Respiracao | ["Respire naturalmente.","Pause antes e depois para perceber seu estado.","Solte o ar se surgir autocobranca."] |
| Erros comuns | ["Forcar alegria.","Comparar sua experiencia com outras pessoas.","Transformar autocuidado em meta perfeita."] |
| Cuidados | ["Evite comparacao com artistas ou redes sociais."] |
| Contraindicacoes | ["Evite comparacao com artistas ou redes sociais."] |
| Recomendado quando | ["desenho","criatividade","presenca"] |
| Evitar quando | ["Evite comparacao com artistas ou redes sociais."] |
| Imagem/chave | desenho-livre |

### Leitura em livro fisico

| Campo | Valor |
| --- | --- |
| Slug | leitura-livro-fisico |
| Area | MOOD |
| Categoria | MENTAL / HAPPINESS_CRIATIVIDADE |
| Nivel | 1 |
| Objetivo | Treinar foco tranquilo e descanso digital. |
| Descricao curta | Ler em livro fisico reduz telas e cria prazer simples de atencao sustentada. |
| Como fazer | ["Escolha um livro leve.","Leia poucas paginas.","Deixe o celular longe.","Pare antes de cansar.","Marque uma frase que gostou."] |
| Dicas de postura | ["Escolha um contexto seguro.","Mantenha a pratica pequena o bastante para ser possivel.","Respeite limites emocionais."] |
| Respiracao | ["Respire naturalmente.","Pause antes e depois para perceber seu estado.","Solte o ar se surgir autocobranca."] |
| Erros comuns | ["Forcar alegria.","Comparar sua experiencia com outras pessoas.","Transformar autocuidado em meta perfeita."] |
| Cuidados | ["Evite conteudo que aumente ansiedade perto do sono."] |
| Contraindicacoes | ["Evite conteudo que aumente ansiedade perto do sono."] |
| Recomendado quando | ["leitura","sem tela","prazer"] |
| Evitar quando | ["Evite conteudo que aumente ansiedade perto do sono."] |
| Imagem/chave | leitura-livro-fisico |

### Culinaria

| Campo | Valor |
| --- | --- |
| Slug | culinaria-simples |
| Area | MOOD |
| Categoria | MENTAL / HAPPINESS_CRIATIVIDADE |
| Nivel | 3 |
| Objetivo | Transformar uma atividade comum em prazer manual. |
| Descricao curta | Preparar algo simples pode unir cuidado, sensorialidade e senso de competencia. |
| Como fazer | ["Escolha receita simples.","Separe ingredientes.","Cozinhe sem pressa.","Observe cheiros e texturas.","Saboreie por 1 minuto."] |
| Dicas de postura | ["Escolha um contexto seguro.","Mantenha a pratica pequena o bastante para ser possivel.","Respeite limites emocionais."] |
| Respiracao | ["Respire naturalmente.","Pause antes e depois para perceber seu estado.","Solte o ar se surgir autocobranca."] |
| Erros comuns | ["Forcar alegria.","Comparar sua experiencia com outras pessoas.","Transformar autocuidado em meta perfeita."] |
| Cuidados | ["Use utensilios e fogo com seguranca."] |
| Contraindicacoes | ["Use utensilios e fogo com seguranca."] |
| Recomendado quando | ["culinaria","sensorial","autocuidado"] |
| Evitar quando | ["Use utensilios e fogo com seguranca."] |
| Imagem/chave | culinaria-simples |

### Quebra-cabecas

| Campo | Valor |
| --- | --- |
| Slug | quebra-cabecas-presenca |
| Area | MOOD |
| Categoria | MENTAL / HAPPINESS_CRIATIVIDADE |
| Nivel | 3 |
| Objetivo | Dar uma pausa mental ativa sem tela. |
| Descricao curta | Atividade de encaixe e busca visual que treina foco leve e prazer de progresso. |
| Como fazer | ["Escolha um quebra-cabeca simples.","Separe bordas ou cores.","Foque em uma area pequena.","Pare no tempo combinado.","Observe o progresso sem pressa."] |
| Dicas de postura | ["Escolha um contexto seguro.","Mantenha a pratica pequena o bastante para ser possivel.","Respeite limites emocionais."] |
| Respiracao | ["Respire naturalmente.","Pause antes e depois para perceber seu estado.","Solte o ar se surgir autocobranca."] |
| Erros comuns | ["Forcar alegria.","Comparar sua experiencia com outras pessoas.","Transformar autocuidado em meta perfeita."] |
| Cuidados | ["Evite virar compulsao ou motivo de irritacao."] |
| Contraindicacoes | ["Evite virar compulsao ou motivo de irritacao."] |
| Recomendado quando | ["quebra-cabeca","foco","prazer"] |
| Evitar quando | ["Evite virar compulsao ou motivo de irritacao."] |
| Imagem/chave | quebra-cabecas-presenca |

### Exercicios fisicos para bem-estar

| Campo | Valor |
| --- | --- |
| Slug | movimento-para-bem-estar |
| Area | MOOD |
| Categoria | MENTAL / HAPPINESS_HORMONIOS |
| Nivel | 1 |
| Objetivo | Usar movimento como treino de humor e energia emocional. |
| Descricao curta | Caminhada, corrida leve, musculacao ou movimentos livres podem contribuir para bem-estar e reducao do estresse. |
| Como fazer | ["Escolha um movimento seguro.","Comece abaixo do seu limite.","Mantenha ritmo confortavel.","Observe o humor antes e depois.","Registre a pratica."] |
| Dicas de postura | ["Escolha um contexto seguro.","Mantenha a pratica pequena o bastante para ser possivel.","Respeite limites emocionais."] |
| Respiracao | ["Respire naturalmente.","Pause antes e depois para perceber seu estado.","Solte o ar se surgir autocobranca."] |
| Erros comuns | ["Forcar alegria.","Comparar sua experiencia com outras pessoas.","Transformar autocuidado em meta perfeita."] |
| Cuidados | ["Adapte em caso de dor, lesao, gestacao ou condicao medica."] |
| Contraindicacoes | ["Adapte em caso de dor, lesao, gestacao ou condicao medica."] |
| Recomendado quando | ["movimento","bem-estar","estresse"] |
| Evitar quando | ["Adapte em caso de dor, lesao, gestacao ou condicao medica."] |
| Imagem/chave | movimento-para-bem-estar |

### Exposicao solar segura

| Campo | Valor |
| --- | --- |
| Slug | exposicao-solar-segura |
| Area | MOOD |
| Categoria | MENTAL / HAPPINESS_HORMONIOS |
| Nivel | 1 |
| Objetivo | Ajudar corpo e mente a se conectarem ao periodo do dia. |
| Descricao curta | Alguns minutos de luz natural podem apoiar rotina, alerta e sensacao de vitalidade. |
| Como fazer | ["Escolha horario mais seguro.","Evite sol forte.","Use protecao quando necessario.","Observe luz e temperatura.","Volte antes de desconforto."] |
| Dicas de postura | ["Escolha um contexto seguro.","Mantenha a pratica pequena o bastante para ser possivel.","Respeite limites emocionais."] |
| Respiracao | ["Respire naturalmente.","Pause antes e depois para perceber seu estado.","Solte o ar se surgir autocobranca."] |
| Erros comuns | ["Forcar alegria.","Comparar sua experiencia com outras pessoas.","Transformar autocuidado em meta perfeita."] |
| Cuidados | ["Use protecao solar quando necessario e respeite orientacoes dermatologicas."] |
| Contraindicacoes | ["Use protecao solar quando necessario e respeite orientacoes dermatologicas."] |
| Recomendado quando | ["sol","luz natural","vitalidade"] |
| Evitar quando | ["Use protecao solar quando necessario e respeite orientacoes dermatologicas."] |
| Imagem/chave | exposicao-solar-segura |

### Rir mais

| Campo | Valor |
| --- | --- |
| Slug | rir-mais |
| Area | MOOD |
| Categoria | MENTAL / HAPPINESS_HORMONIOS |
| Nivel | 1 |
| Objetivo | Treinar abertura para prazer simples sem negar dificuldades. |
| Descricao curta | Comedia, conversa com alguem querido ou conteudo leve podem criar uma pausa emocional positiva. |
| Como fazer | ["Escolha uma fonte leve de humor.","Assista ou converse sem multitarefa.","Perceba se o corpo relaxa.","Evite rolagem infinita.","Feche com uma pequena acao de cuidado."] |
| Dicas de postura | ["Escolha um contexto seguro.","Mantenha a pratica pequena o bastante para ser possivel.","Respeite limites emocionais."] |
| Respiracao | ["Respire naturalmente.","Pause antes e depois para perceber seu estado.","Solte o ar se surgir autocobranca."] |
| Erros comuns | ["Forcar alegria.","Comparar sua experiencia com outras pessoas.","Transformar autocuidado em meta perfeita."] |
| Cuidados | ["Evite conteudos que aumentem comparacao, agressividade ou ansiedade."] |
| Contraindicacoes | ["Evite conteudos que aumentem comparacao, agressividade ou ansiedade."] |
| Recomendado quando | ["riso","leveza","prazer"] |
| Evitar quando | ["Evite conteudos que aumentem comparacao, agressividade ou ansiedade."] |
| Imagem/chave | rir-mais |

### Apreciar a natureza

| Campo | Valor |
| --- | --- |
| Slug | apreciar-natureza |
| Area | MOOD |
| Categoria | MENTAL / HAPPINESS_MENTALIDADE |
| Nivel | 1 |
| Objetivo | Regular atencao por contato com ambiente natural. |
| Descricao curta | Observar ceu, plantas, arvores ou sons naturais pode criar uma pausa de bem-estar. |
| Como fazer | ["Escolha um local seguro.","Observe cores e formas.","Escute sons ao redor.","Respire sem pressa.","Volte com uma pequena anotacao se quiser."] |
| Dicas de postura | ["Escolha um contexto seguro.","Mantenha a pratica pequena o bastante para ser possivel.","Respeite limites emocionais."] |
| Respiracao | ["Respire naturalmente.","Pause antes e depois para perceber seu estado.","Solte o ar se surgir autocobranca."] |
| Erros comuns | ["Forcar alegria.","Comparar sua experiencia com outras pessoas.","Transformar autocuidado em meta perfeita."] |
| Cuidados | ["Priorize seguranca, clima adequado e acessibilidade."] |
| Contraindicacoes | ["Priorize seguranca, clima adequado e acessibilidade."] |
| Recomendado quando | ["natureza","presenca","humor"] |
| Evitar quando | ["Priorize seguranca, clima adequado e acessibilidade."] |
| Imagem/chave | apreciar-natureza |

### Diario de gratidao

| Campo | Valor |
| --- | --- |
| Slug | diario-de-gratidao |
| Area | MOOD |
| Categoria | MENTAL / HAPPINESS_MENTALIDADE |
| Nivel | 1 |
| Objetivo | Aumentar atencao para pequenos sinais de apoio e valor. |
| Descricao curta | Escrever 3 coisas boas do dia treina percepcao positiva concreta. |
| Como fazer | ["Pegue um caderno.","Escreva 3 coisas boas do dia.","Inclua detalhes concretos.","Repita diariamente quando possivel.","Leia sem se cobrar."] |
| Dicas de postura | ["Escolha um contexto seguro.","Mantenha a pratica pequena o bastante para ser possivel.","Respeite limites emocionais."] |
| Respiracao | ["Respire naturalmente.","Pause antes e depois para perceber seu estado.","Solte o ar se surgir autocobranca."] |
| Erros comuns | ["Forcar alegria.","Comparar sua experiencia com outras pessoas.","Transformar autocuidado em meta perfeita."] |
| Cuidados | ["Nao use a pratica para negar tristeza ou problemas reais."] |
| Contraindicacoes | ["Nao use a pratica para negar tristeza ou problemas reais."] |
| Recomendado quando | ["gratidao","escrita","humor"] |
| Evitar quando | ["Nao use a pratica para negar tristeza ou problemas reais."] |
| Imagem/chave | diario-de-gratidao |

### Saborear momentos

| Campo | Valor |
| --- | --- |
| Slug | saborear-momentos |
| Area | MOOD |
| Categoria | MENTAL / HAPPINESS_MENTALIDADE |
| Nivel | 1 |
| Objetivo | Alongar a presenca em momentos bons sem tentar prende-los. |
| Descricao curta | Depois de uma experiencia boa, parar por 1 minuto ajuda a perceber a sensacao positiva. |
| Como fazer | ["Perceba uma experiencia boa.","Pare por 1 minuto.","Observe corpo, emocao e ambiente.","Nomeie o que foi bom.","Siga sem pressa."] |
| Dicas de postura | ["Escolha um contexto seguro.","Mantenha a pratica pequena o bastante para ser possivel.","Respeite limites emocionais."] |
| Respiracao | ["Respire naturalmente.","Pause antes e depois para perceber seu estado.","Solte o ar se surgir autocobranca."] |
| Erros comuns | ["Forcar alegria.","Comparar sua experiencia com outras pessoas.","Transformar autocuidado em meta perfeita."] |
| Cuidados | ["Evite transformar prazer simples em tarefa obrigatoria."] |
| Contraindicacoes | ["Evite transformar prazer simples em tarefa obrigatoria."] |
| Recomendado quando | ["savoring","presenca","prazer"] |
| Evitar quando | ["Evite transformar prazer simples em tarefa obrigatoria."] |
| Imagem/chave | saborear-momentos |

### Mesa limpa, mente leve

| Campo | Valor |
| --- | --- |
| Slug | mesa-limpa-mente-leve |
| Area | FOCUS |
| Categoria | MENTAL / ORGANIZATION |
| Nivel | 1 |
| Objetivo | Diminuir ruido visual para facilitar o retorno ao foco. |
| Descricao curta | Reduza estimulos visuais limpando apenas uma pequena area. |
| Como fazer | ["Escolha uma area pequena da mesa.","Remova itens que nao pertencem a tarefa atual.","Separe papeis ou objetos em apenas dois grupos.","Pare quando completar 5 minutos.","Deixe visivel somente o que ajuda o proximo passo."] |
| Dicas de postura | ["Evite se curvar por muito tempo.","Mantenha os ombros relaxados.","Use movimentos lentos."] |
| Respiracao | ["Respire naturalmente.","Solte o ar ao finalizar cada pequena parte."] |
| Erros comuns | ["Transformar a pausa em faxina.","Abrir gavetas demais.","Mexer no celular durante a organizacao."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando a mesa estiver concorrendo com sua atencao.","Antes de iniciar um bloco curto de foco."] |
| Evitar quando | ["Evite tentar arrumar o ambiente inteiro de uma vez."] |
| Imagem/chave | mesa-limpa-mente-leve |

### Nomear 3 prioridades

| Campo | Valor |
| --- | --- |
| Slug | nomear-3-prioridades |
| Area | FOCUS |
| Categoria | MENTAL / ORGANIZATION |
| Nivel | 1 |
| Objetivo | Reduzir dispersao e criar uma ordem simples de acao. |
| Descricao curta | Organize a atencao escrevendo tres prioridades reais para agora. |
| Como fazer | ["Escreva tudo que esta competindo pela sua atencao.","Circule apenas tres itens.","Marque um deles como primeiro passo.","Defina uma acao que caiba em 5 minutos."] |
| Dicas de postura | ["Escreva em uma posicao confortavel.","Relaxe a mao e os ombros.","Mantenha a lista simples."] |
| Respiracao | ["Inspire antes de escolher.","Expire ao cortar o excesso da lista."] |
| Erros comuns | ["Chamar desejo de prioridade.","Colocar tarefas demais.","Escolher primeiro a tarefa mais pesada."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando a mente estiver cheia.","Quando voce sentir que tudo parece urgente."] |
| Evitar quando | ["Evite listar mais de tres itens nesta pratica."] |
| Imagem/chave | nomear-3-prioridades |

### Organizacao de 5 minutos

| Campo | Valor |
| --- | --- |
| Slug | organizacao-5-minutos |
| Area | FOCUS |
| Categoria | MENTAL / ORGANIZATION |
| Nivel | 1 |
| Objetivo | Criar clareza organizando uma pequena area. |
| Descricao curta | Criar clareza organizando uma pequena area. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique organizacao de 5 minutos pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | organizacao-5-minutos |

### Organizacao do ambiente

| Campo | Valor |
| --- | --- |
| Slug | organizacao-do-ambiente |
| Area | FOCUS |
| Categoria | MENTAL / ORGANIZATION |
| Nivel | 1 |
| Objetivo | Reduzir estimulos visuais no espaco. |
| Descricao curta | Reduzir estimulos visuais no espaco. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique organizacao do ambiente pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | organizacao-do-ambiente |

### Agua com presenca

| Campo | Valor |
| --- | --- |
| Slug | agua-com-presenca |
| Area | ENERGY |
| Categoria | MENTAL / RELAXATION |
| Nivel | 1 |
| Objetivo | Cuidar da energia basica antes de cobrar desempenho. |
| Descricao curta | Uma pausa curta para beber agua e reconectar com o corpo. |
| Como fazer | ["Pegue um copo de agua.","Antes de beber, solte os ombros.","Beba em pequenos goles.","Perceba temperatura e ritmo.","Escolha uma proxima acao simples."] |
| Dicas de postura | ["Sente-se ou fique em pe com conforto.","Evite beber olhando notificacoes.","Relaxe mandibula."] |
| Respiracao | ["Respire entre os goles.","Solte o ar devagar antes de voltar."] |
| Erros comuns | ["Fazer a pausa no automatico.","Usar a agua como desculpa para abrir redes.","Voltar correndo para a tarefa."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce estiver cansado ou com corpo pesado.","Entre tarefas longas."] |
| Evitar quando | ["Evite se houver restricao medica de ingestao de liquidos."] |
| Imagem/chave | agua-com-presenca |

### Check-in emocional guiado

| Campo | Valor |
| --- | --- |
| Slug | checkin-emocional-guiado |
| Area | MOOD |
| Categoria | MENTAL / RELAXATION |
| Nivel | 1 |
| Objetivo | Nomear o estado emocional sem julgamento. |
| Descricao curta | Nomear o estado emocional sem julgamento. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique check-in emocional guiado pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | checkin-emocional-guiado |

### Escaneamento corporal

| Campo | Valor |
| --- | --- |
| Slug | escaneamento-corporal |
| Area | SLEEP |
| Categoria | MENTAL / RELAXATION |
| Nivel | 1 |
| Objetivo | Criar uma transicao de presenca e descanso. |
| Descricao curta | Observe o corpo sem tentar consertar tudo. |
| Como fazer | ["Feche ou suavize os olhos.","Observe contato do corpo com a superficie.","Passe atencao por partes do corpo.","Nomeie sensacoes de forma neutra.","Volte a respiracao natural quando a mente sair."] |
| Dicas de postura | ["Apoie a coluna.","Solte mandibula e testa.","Mantenha as maos confortaveis."] |
| Respiracao | ["Respire sem controlar demais.","Use a expiracao como sinal de descanso."] |
| Erros comuns | ["Tentar dormir imediatamente.","Julgar distrações.","Fazer a pratica com tela ligada."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando a mente estiver acelerada na cama.","Quando voce quiser uma pratica sem tela."] |
| Evitar quando | ["Evite se a observacao corporal ficar angustiante; abra os olhos e procure apoio."] |
| Imagem/chave | escaneamento-corporal |

### Luz baixa de transicao

| Campo | Valor |
| --- | --- |
| Slug | luz-baixa-transicao |
| Area | SLEEP |
| Categoria | MENTAL / RELAXATION |
| Nivel | 1 |
| Objetivo | Sinalizar ao corpo que o ritmo pode desacelerar. |
| Descricao curta | Prepare o ambiente com menos luz e menos estimulo visual. |
| Como fazer | ["Reduza uma luz forte.","Diminua brilho da tela se ainda precisar usa-la.","Afaste notificacoes.","Respire por alguns ciclos.","Escolha uma atividade calma para continuar."] |
| Dicas de postura | ["Mantenha uma postura confortavel.","Evite deitar se ainda precisa finalizar algo importante.","Solte a mandibula."] |
| Respiracao | ["Alongue a expiracao.","Nao force sonolencia."] |
| Erros comuns | ["Apagar tudo de uma vez e voltar para o celular.","Transformar a rotina em obrigacao rigida.","Usar luz baixa enquanto consome conteudo acelerado."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["No inicio da noite.","Quando telas e luz forte estiverem mantendo voce alerta."] |
| Evitar quando | ["Evite deixar o ambiente escuro se isso trouxer inseguranca."] |
| Imagem/chave | luz-baixa-transicao |

### Luz e janela

| Campo | Valor |
| --- | --- |
| Slug | luz-e-janela |
| Area | ENERGY |
| Categoria | MENTAL / RELAXATION |
| Nivel | 1 |
| Objetivo | Ajudar o corpo a sair do modo lento com um ajuste ambiental simples. |
| Descricao curta | Use luz natural ou ambiente aberto para sinalizar reativacao suave. |
| Como fazer | ["Aproxime-se de uma janela ou area iluminada.","Relaxe os olhos olhando para longe.","Respire sem pressa.","Observe tres detalhes do ambiente.","Volte com uma acao pequena."] |
| Dicas de postura | ["Mantenha o corpo apoiado.","Solte os ombros.","Piscar naturalmente ajuda os olhos."] |
| Respiracao | ["Respire pelo nariz se for confortavel.","Expire como se aliviasse peso dos ombros."] |
| Erros comuns | ["Usar a pausa para abrir redes.","Forcar a vista.","Esperar energia imediata."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando a energia cair em ambiente fechado.","Pela manha ou em pausas diurnas."] |
| Evitar quando | ["Evite olhar diretamente para sol forte ou luz desconfortavel."] |
| Imagem/chave | luz-e-janela |

### Musica curta positiva

| Campo | Valor |
| --- | --- |
| Slug | musica-curta-positiva |
| Area | MOOD |
| Categoria | MENTAL / RELAXATION |
| Nivel | 1 |
| Objetivo | Apoiar o humor por meio de um estimulo escolhido, sem excesso de tela. |
| Descricao curta | Use uma musica curta para mudar o ritmo interno com intencao. |
| Como fazer | ["Escolha uma musica conhecida e segura para voce.","Deixe a tela de lado enquanto toca.","Observe uma parte do som com atencao.","Respire durante o refrao ou trecho preferido.","Ao terminar, escolha uma acao pequena."] |
| Dicas de postura | ["Fique em uma posicao confortavel.","Relaxe rosto e ombros.","Evite volume alto demais."] |
| Respiracao | ["Respire junto com o ritmo, sem forcar.","Use a expiracao para soltar tensao."] |
| Erros comuns | ["Abrir redes junto.","Usar musica para fugir de tudo por muito tempo.","Aumentar volume para cobrir desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando uma musica leve ajudar a regular o momento.","Quando voce quiser uma pausa emocional breve."] |
| Evitar quando | ["Evite se abrir apps de musica virar rolagem infinita ou gatilho de comparacao."] |
| Imagem/chave | musica-curta-positiva |

### Nomear o humor atual

| Campo | Valor |
| --- | --- |
| Slug | nomear-humor-atual |
| Area | MOOD |
| Categoria | MENTAL / RELAXATION |
| Nivel | 1 |
| Objetivo | Aumentar clareza emocional com gentileza. |
| Descricao curta | Dê um nome simples ao que voce sente agora, sem se reduzir a isso. |
| Como fazer | ["Pergunte: como esta meu humor agora?","Escolha uma palavra simples.","Perceba onde isso aparece no corpo.","Diga: isso e um estado, nao tudo que eu sou.","Escolha um cuidado pequeno."] |
| Dicas de postura | ["Sente-se com apoio.","Relaxe ombros e rosto.","Mantenha o olhar suave."] |
| Respiracao | ["Respire naturalmente.","Expire antes de escolher a palavra."] |
| Erros comuns | ["Julgar o que apareceu.","Forcar pensamento positivo.","Tentar resolver tudo imediatamente."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando o humor parecer confuso.","Antes de escolher uma acao de cuidado."] |
| Evitar quando | ["Evite buscar uma palavra perfeita."] |
| Imagem/chave | nomear-humor-atual |

### Relaxamento dos pes a cabeca

| Campo | Valor |
| --- | --- |
| Slug | relaxamento-pes-cabeca |
| Area | SLEEP |
| Categoria | MENTAL / RELAXATION |
| Nivel | 1 |
| Objetivo | Ajudar o corpo a perceber seguranca e reduzir ativacao. |
| Descricao curta | Percorra o corpo lentamente para soltar tensoes antes de dormir. |
| Como fazer | ["Deite ou sente-se com apoio.","Leve atencao aos pes.","Suba lentamente por pernas, quadril, tronco, ombros e rosto.","Em cada parte, solte o peso que for possivel.","Finalize respirando de forma natural."] |
| Dicas de postura | ["Use apoio para ficar confortavel.","Nao force alongamento.","Ajuste travesseiro ou cadeira se precisar."] |
| Respiracao | ["Expire ao soltar cada regiao.","Deixe a respiracao voltar ao natural."] |
| Erros comuns | ["Tentar relaxar perfeitamente.","Prender o ar.","Ficar procurando sinais de problema."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Antes de dormir.","Quando o corpo estiver tenso no fim do dia."] |
| Evitar quando | ["Evite se focar no corpo aumentar desconforto; volte para respiracao natural."] |
| Imagem/chave | relaxamento-pes-cabeca |

### Ritual de sono sem tela

| Campo | Valor |
| --- | --- |
| Slug | ritual-sono-sem-tela |
| Area | SLEEP |
| Categoria | MENTAL / RELAXATION |
| Nivel | 1 |
| Objetivo | Preparar a transicao para dormir com menos estimulo. |
| Descricao curta | Preparar a transicao para dormir com menos estimulo. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique ritual de sono sem tela pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | ritual-sono-sem-tela |

### Fechamento do dia

| Campo | Valor |
| --- | --- |
| Slug | fechamento-do-dia |
| Area | SLEEP |
| Categoria | MENTAL / RELAXATION |
| Nivel | 4 |
| Objetivo | Encerrar o dia sem tentar resolver tudo. |
| Descricao curta | Encerrar o dia sem tentar resolver tudo. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique fechamento do dia pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | fechamento-do-dia |

### Banho morno

| Campo | Valor |
| --- | --- |
| Slug | banho-morno-relaxamento |
| Area | SLEEP |
| Categoria | MENTAL / SLEEP_DOWN |
| Nivel | 1 |
| Objetivo | Criar um ritual ambiental de desaceleracao. |
| Descricao curta | Banho morno cerca de 1 hora antes de dormir pode ajudar o corpo a entrar em estado de relaxamento. |
| Como fazer | ["Planeje o banho com antecedencia.","Use temperatura morna, nao muito quente.","Evite celular durante o ritual.","Depois reduza luzes.","Faca uma atividade calma."] |
| Dicas de postura | ["Use um ambiente seguro.","Reduza estimulos quando for pratica de sono.","Adapte a posicao ao corpo."] |
| Respiracao | ["Respire de forma confortavel.","Evite prender o ar se houver desconforto.","Volte ao ritmo natural quando precisar."] |
| Erros comuns | ["Usar como obrigacao rigida.","Forcar sonolencia ou alerta.","Ignorar sonolencia persistente."] |
| Cuidados | ["Evite agua muito quente, tontura ou ambientes inseguros."] |
| Contraindicacoes | ["Evite agua muito quente, tontura ou ambientes inseguros."] |
| Recomendado quando | ["sono","banho","relaxamento"] |
| Evitar quando | ["Evite agua muito quente, tontura ou ambientes inseguros."] |
| Imagem/chave | banho-morno-relaxamento |

### Higiene do sono

| Campo | Valor |
| --- | --- |
| Slug | higiene-do-sono |
| Area | SLEEP |
| Categoria | MENTAL / SLEEP_DOWN |
| Nivel | 1 |
| Objetivo | Reduzir estimulos e proteger regularidade do sono. |
| Descricao curta | Conjunto de ajustes de ambiente e rotina para favorecer uma transicao noturna mais consistente. |
| Como fazer | ["Evite telas 30 a 60 minutos antes de dormir.","Reduza luz forte.","Deixe o quarto escuro e fresco.","Evite cafeina a noite.","Crie rotina regular de deitar e levantar."] |
| Dicas de postura | ["Use um ambiente seguro.","Reduza estimulos quando for pratica de sono.","Adapte a posicao ao corpo."] |
| Respiracao | ["Respire de forma confortavel.","Evite prender o ar se houver desconforto.","Volte ao ritmo natural quando precisar."] |
| Erros comuns | ["Usar como obrigacao rigida.","Forcar sonolencia ou alerta.","Ignorar sonolencia persistente."] |
| Cuidados | ["Se a insonia persistir, procure orientacao profissional."] |
| Contraindicacoes | ["Se a insonia persistir, procure orientacao profissional."] |
| Recomendado quando | ["sono","telas","rotina"] |
| Evitar quando | ["Se a insonia persistir, procure orientacao profissional."] |
| Imagem/chave | higiene-do-sono |

### Tecnica 4-7-8

| Campo | Valor |
| --- | --- |
| Slug | tecnica-4-7-8 |
| Area | SLEEP |
| Categoria | MENTAL / SLEEP_DOWN |
| Nivel | 1 |
| Objetivo | Reduzir ativacao e criar uma transicao de descanso. |
| Descricao curta | Respiracao ritmada para ajudar a desacelerar o ritmo corporal antes de dormir. |
| Como fazer | ["Inspire pelo nariz contando ate 4.","Segure o ar por 7 segundos.","Expire lentamente pela boca contando ate 8.","Repita 4 ciclos.","Volte a respiracao natural."] |
| Dicas de postura | ["Use um ambiente seguro.","Reduza estimulos quando for pratica de sono.","Adapte a posicao ao corpo."] |
| Respiracao | ["Respire de forma confortavel.","Evite prender o ar se houver desconforto.","Volte ao ritmo natural quando precisar."] |
| Erros comuns | ["Usar como obrigacao rigida.","Forcar sonolencia ou alerta.","Ignorar sonolencia persistente."] |
| Cuidados | ["Nao prenda o ar se houver tontura, falta de ar ou desconforto."] |
| Contraindicacoes | ["Nao prenda o ar se houver tontura, falta de ar ou desconforto."] |
| Recomendado quando | ["sono","respiracao","mente acelerada"] |
| Evitar quando | ["Nao prenda o ar se houver tontura, falta de ar ou desconforto."] |
| Imagem/chave | tecnica-4-7-8 |

### Yoga noturna ou alongamento suave

| Campo | Valor |
| --- | --- |
| Slug | yoga-noturna-alongamento-suave |
| Area | SLEEP |
| Categoria | MENTAL / SLEEP_DOWN |
| Nivel | 1 |
| Objetivo | Preparar corpo e mente para descanso. |
| Descricao curta | Sequencia leve de 10 a 15 minutos para reduzir tensao sem elevar demais a ativacao. |
| Como fazer | ["Escolha movimentos lentos.","Alongue pescoco e ombros.","Inclua torcao lombar leve.","Fique em posicoes confortaveis.","Finalize com respiracao lenta."] |
| Dicas de postura | ["Use um ambiente seguro.","Reduza estimulos quando for pratica de sono.","Adapte a posicao ao corpo."] |
| Respiracao | ["Respire de forma confortavel.","Evite prender o ar se houver desconforto.","Volte ao ritmo natural quando precisar."] |
| Erros comuns | ["Usar como obrigacao rigida.","Forcar sonolencia ou alerta.","Ignorar sonolencia persistente."] |
| Cuidados | ["Evite exercicios intensos antes de dormir e pare se houver dor."] |
| Contraindicacoes | ["Evite exercicios intensos antes de dormir e pare se houver dor."] |
| Recomendado quando | ["sono","alongamento","yoga"] |
| Evitar quando | ["Evite exercicios intensos antes de dormir e pare se houver dor."] |
| Imagem/chave | yoga-noturna-alongamento-suave |

### Relaxamento muscular progressivo

| Campo | Valor |
| --- | --- |
| Slug | relaxamento-muscular-progressivo |
| Area | SLEEP |
| Categoria | MENTAL / SLEEP_DOWN |
| Nivel | 3 |
| Objetivo | Reduzir tensao corporal antes do sono. |
| Descricao curta | Tensionar e relaxar grupos musculares ajuda a perceber e soltar tensao acumulada. |
| Como fazer | ["Deite-se confortavelmente.","Tensione cada grupo muscular por 5 segundos.","Relaxe em seguida.","Comece pelo rosto e desca ate os pes.","Respire de forma lenta entre grupos."] |
| Dicas de postura | ["Use um ambiente seguro.","Reduza estimulos quando for pratica de sono.","Adapte a posicao ao corpo."] |
| Respiracao | ["Respire de forma confortavel.","Evite prender o ar se houver desconforto.","Volte ao ritmo natural quando precisar."] |
| Erros comuns | ["Usar como obrigacao rigida.","Forcar sonolencia ou alerta.","Ignorar sonolencia persistente."] |
| Cuidados | ["Evite tensionar regioes com dor, lesao ou cirurgia recente."] |
| Contraindicacoes | ["Evite tensionar regioes com dor, lesao ou cirurgia recente."] |
| Recomendado quando | ["sono","tensao corporal","relaxamento"] |
| Evitar quando | ["Evite tensionar regioes com dor, lesao ou cirurgia recente."] |
| Imagem/chave | relaxamento-muscular-progressivo |

### Tecnica militar

| Campo | Valor |
| --- | --- |
| Slug | tecnica-militar-sono |
| Area | SLEEP |
| Categoria | MENTAL / SLEEP_DOWN |
| Nivel | 3 |
| Objetivo | Ajudar corpo e mente a soltar esforco mental. |
| Descricao curta | Sequencia de relaxamento por regioes do corpo com imagem mental calma. |
| Como fazer | ["Relaxe rosto, lingua, mandibula e regiao dos olhos.","Solte ombros e bracos.","Relaxe peito, pernas e pes.","Imagine um cenario calmo.","Evite esforco mental; volte ao relaxamento quando distrair."] |
| Dicas de postura | ["Use um ambiente seguro.","Reduza estimulos quando for pratica de sono.","Adapte a posicao ao corpo."] |
| Respiracao | ["Respire de forma confortavel.","Evite prender o ar se houver desconforto.","Volte ao ritmo natural quando precisar."] |
| Erros comuns | ["Usar como obrigacao rigida.","Forcar sonolencia ou alerta.","Ignorar sonolencia persistente."] |
| Cuidados | ["Se imagens mentais aumentarem ansiedade, volte para respiracao natural."] |
| Contraindicacoes | ["Se imagens mentais aumentarem ansiedade, volte para respiracao natural."] |
| Recomendado quando | ["sono","relaxamento","mente acelerada"] |
| Evitar quando | ["Se imagens mentais aumentarem ansiedade, volte para respiracao natural."] |
| Imagem/chave | tecnica-militar-sono |

### Agua gelada

| Campo | Valor |
| --- | --- |
| Slug | agua-gelada-alerta |
| Area | SLEEP |
| Categoria | MENTAL / SLEEP_UP |
| Nivel | 1 |
| Objetivo | Ajudar a acordar temporariamente em momentos de sonolencia leve. |
| Descricao curta | Lavar o rosto com agua fria pode gerar estimulo sensorial e sensacao rapida de alerta. |
| Como fazer | ["Va ate uma pia segura.","Lave o rosto com agua fria.","Respire naturalmente.","Seque o rosto.","Volte com uma tarefa pequena."] |
| Dicas de postura | ["Use um ambiente seguro.","Reduza estimulos quando for pratica de sono.","Adapte a posicao ao corpo."] |
| Respiracao | ["Respire de forma confortavel.","Evite prender o ar se houver desconforto.","Volte ao ritmo natural quando precisar."] |
| Erros comuns | ["Usar como obrigacao rigida.","Forcar sonolencia ou alerta.","Ignorar sonolencia persistente."] |
| Cuidados | ["Evite se houver desconforto intenso, sensibilidade ou orientacao medica contraria."] |
| Contraindicacoes | ["Evite se houver desconforto intenso, sensibilidade ou orientacao medica contraria."] |
| Recomendado quando | ["sonolencia","alerta","sensorial"] |
| Evitar quando | ["Evite se houver desconforto intenso, sensibilidade ou orientacao medica contraria."] |
| Imagem/chave | agua-gelada-alerta |

### Automassagem em pontos de pressao

| Campo | Valor |
| --- | --- |
| Slug | automassagem-pontos-alerta |
| Area | SLEEP |
| Categoria | MENTAL / SLEEP_UP |
| Nivel | 1 |
| Objetivo | Criar alerta corporal temporario. |
| Descricao curta | Automassagem leve em bordas das orelhas, nuca e ponto entre polegar e indicador pode gerar estimulo sensorial. |
| Como fazer | ["Massageie bordas das orelhas com delicadeza.","Solte a nuca com pressao leve.","Massageie o ponto entre polegar e indicador sem dor.","Respire e observe o alerta.","Pare se incomodar."] |
| Dicas de postura | ["Use um ambiente seguro.","Reduza estimulos quando for pratica de sono.","Adapte a posicao ao corpo."] |
| Respiracao | ["Respire de forma confortavel.","Evite prender o ar se houver desconforto.","Volte ao ritmo natural quando precisar."] |
| Erros comuns | ["Usar como obrigacao rigida.","Forcar sonolencia ou alerta.","Ignorar sonolencia persistente."] |
| Cuidados | ["Nao pressione com forca. Se a sonolencia for persistente, procure orientacao profissional."] |
| Contraindicacoes | ["Nao pressione com forca. Se a sonolencia for persistente, procure orientacao profissional."] |
| Recomendado quando | ["automassagem","sensorial","alerta"] |
| Evitar quando | ["Nao pressione com forca. Se a sonolencia for persistente, procure orientacao profissional."] |
| Imagem/chave | automassagem-pontos-alerta |

### Cafeina com cuidado

| Campo | Valor |
| --- | --- |
| Slug | cafeina-com-cuidado |
| Area | SLEEP |
| Categoria | MENTAL / SLEEP_UP |
| Nivel | 1 |
| Objetivo | Apoiar vigilia sem substituir sono adequado. |
| Descricao curta | Cafeina pode ser uma dica opcional para alerta temporario, quando faz sentido para a pessoa. |
| Como fazer | ["Avalie se cafeina costuma funcionar bem para voce.","Use quantidade moderada.","Evite no fim do dia.","Nao use como substituto de sono.","Observe efeitos no corpo."] |
| Dicas de postura | ["Use um ambiente seguro.","Reduza estimulos quando for pratica de sono.","Adapte a posicao ao corpo."] |
| Respiracao | ["Respire de forma confortavel.","Evite prender o ar se houver desconforto.","Volte ao ritmo natural quando precisar."] |
| Erros comuns | ["Usar como obrigacao rigida.","Forcar sonolencia ou alerta.","Ignorar sonolencia persistente."] |
| Cuidados | ["Evite exagero, especialmente com ansiedade, palpitação, insonia ou orientacao profissional contraria."] |
| Contraindicacoes | ["Evite exagero, especialmente com ansiedade, palpitação, insonia ou orientacao profissional contraria."] |
| Recomendado quando | ["cafeina","alerta","sonolencia"] |
| Evitar quando | ["Evite exagero, especialmente com ansiedade, palpitação, insonia ou orientacao profissional contraria."] |
| Imagem/chave | cafeina-com-cuidado |

### Caminhada curta com luz solar

| Campo | Valor |
| --- | --- |
| Slug | caminhada-curta-luz-solar |
| Area | SLEEP |
| Categoria | MENTAL / SLEEP_UP |
| Nivel | 1 |
| Objetivo | Usar movimento e luz natural para reduzir queda de energia. |
| Descricao curta | 5 a 10 minutos ao ar livre, quando possivel, podem ajudar no estado de alerta. |
| Como fazer | ["Escolha local seguro.","Caminhe em ritmo leve.","Olhe para o ambiente sem encarar sol forte.","Respire de forma natural.","Volte antes de cansar demais."] |
| Dicas de postura | ["Use um ambiente seguro.","Reduza estimulos quando for pratica de sono.","Adapte a posicao ao corpo."] |
| Respiracao | ["Respire de forma confortavel.","Evite prender o ar se houver desconforto.","Volte ao ritmo natural quando precisar."] |
| Erros comuns | ["Usar como obrigacao rigida.","Forcar sonolencia ou alerta.","Ignorar sonolencia persistente."] |
| Cuidados | ["Use protecao adequada e evite horarios de sol forte."] |
| Contraindicacoes | ["Use protecao adequada e evite horarios de sol forte."] |
| Recomendado quando | ["sonolencia","luz natural","caminhada"] |
| Evitar quando | ["Use protecao adequada e evite horarios de sol forte."] |
| Imagem/chave | caminhada-curta-luz-solar |

### Estimulacao mental

| Campo | Valor |
| --- | --- |
| Slug | estimulacao-mental-alerta |
| Area | SLEEP |
| Categoria | MENTAL / SLEEP_UP |
| Nivel | 1 |
| Objetivo | Interromper monotonia sem cair em rolagem infinita. |
| Descricao curta | Mudar brevemente de atividade ou conversar sobre algo animado pode gerar alerta temporario. |
| Como fazer | ["Mude de atividade por poucos minutos.","Resolva uma conta simples ou leia um trecho curto.","Converse brevemente com alguem se for adequado.","Volte para a tarefa principal."] |
| Dicas de postura | ["Use um ambiente seguro.","Reduza estimulos quando for pratica de sono.","Adapte a posicao ao corpo."] |
| Respiracao | ["Respire de forma confortavel.","Evite prender o ar se houver desconforto.","Volte ao ritmo natural quando precisar."] |
| Erros comuns | ["Usar como obrigacao rigida.","Forcar sonolencia ou alerta.","Ignorar sonolencia persistente."] |
| Cuidados | ["Evite redes sociais se elas aumentam dispersao ou comparacao."] |
| Contraindicacoes | ["Evite redes sociais se elas aumentam dispersao ou comparacao."] |
| Recomendado quando | ["sonolencia","foco","estimulacao"] |
| Evitar quando | ["Evite redes sociais se elas aumentam dispersao ou comparacao."] |
| Imagem/chave | estimulacao-mental-alerta |

### Hidratacao

| Campo | Valor |
| --- | --- |
| Slug | hidratacao-alerta |
| Area | SLEEP |
| Categoria | MENTAL / SLEEP_UP |
| Nivel | 1 |
| Objetivo | Corrigir uma causa simples de cansaco leve. |
| Descricao curta | Desidratacao pode contribuir para fadiga; beber agua pode apoiar energia basica. |
| Como fazer | ["Pegue agua.","Beba em pequenos goles.","Observe temperatura e corpo.","Espere alguns minutos antes de avaliar energia.","Combine com movimento curto se necessario."] |
| Dicas de postura | ["Use um ambiente seguro.","Reduza estimulos quando for pratica de sono.","Adapte a posicao ao corpo."] |
| Respiracao | ["Respire de forma confortavel.","Evite prender o ar se houver desconforto.","Volte ao ritmo natural quando precisar."] |
| Erros comuns | ["Usar como obrigacao rigida.","Forcar sonolencia ou alerta.","Ignorar sonolencia persistente."] |
| Cuidados | ["Respeite restricoes medicas de liquidos quando existirem."] |
| Contraindicacoes | ["Respeite restricoes medicas de liquidos quando existirem."] |
| Recomendado quando | ["hidratacao","fadiga","sonolencia"] |
| Evitar quando | ["Respeite restricoes medicas de liquidos quando existirem."] |
| Imagem/chave | hidratacao-alerta |

### Iluminacao clara

| Campo | Valor |
| --- | --- |
| Slug | iluminacao-clara |
| Area | SLEEP |
| Categoria | MENTAL / SLEEP_UP |
| Nivel | 1 |
| Objetivo | Reduzir sonolencia ambiental. |
| Descricao curta | Abrir janelas ou acender luzes pode ajudar a sinalizar alerta ao corpo. |
| Como fazer | ["Abra cortinas ou janela quando seguro.","Acenda uma luz clara se necessario.","Ajuste brilho de tela sem excesso.","Respire e retome a tarefa."] |
| Dicas de postura | ["Use um ambiente seguro.","Reduza estimulos quando for pratica de sono.","Adapte a posicao ao corpo."] |
| Respiracao | ["Respire de forma confortavel.","Evite prender o ar se houver desconforto.","Volte ao ritmo natural quando precisar."] |
| Erros comuns | ["Usar como obrigacao rigida.","Forcar sonolencia ou alerta.","Ignorar sonolencia persistente."] |
| Cuidados | ["Nao use luz desconfortavel para os olhos."] |
| Contraindicacoes | ["Nao use luz desconfortavel para os olhos."] |
| Recomendado quando | ["sonolencia","ambiente","luz"] |
| Evitar quando | ["Nao use luz desconfortavel para os olhos."] |
| Imagem/chave | iluminacao-clara |

### Mascar chiclete de menta

| Campo | Valor |
| --- | --- |
| Slug | chiclete-menta-alerta |
| Area | SLEEP |
| Categoria | MENTAL / SLEEP_UP |
| Nivel | 1 |
| Objetivo | Dar um pequeno estimulo quando a sonolencia e leve. |
| Descricao curta | Estimulo sensorial e mastigatorio que pode ajudar em alerta temporario. |
| Como fazer | ["Escolha um chiclete de menta se for seguro para voce.","Mastigue por alguns minutos.","Evite usar junto com multitarefas em excesso.","Descarte corretamente.","Observe se ajudou."] |
| Dicas de postura | ["Use um ambiente seguro.","Reduza estimulos quando for pratica de sono.","Adapte a posicao ao corpo."] |
| Respiracao | ["Respire de forma confortavel.","Evite prender o ar se houver desconforto.","Volte ao ritmo natural quando precisar."] |
| Erros comuns | ["Usar como obrigacao rigida.","Forcar sonolencia ou alerta.","Ignorar sonolencia persistente."] |
| Cuidados | ["Evite se houver dor mandibular, restricao odontologica ou desconforto."] |
| Contraindicacoes | ["Evite se houver dor mandibular, restricao odontologica ou desconforto."] |
| Recomendado quando | ["menta","sensorial","alerta"] |
| Evitar quando | ["Evite se houver dor mandibular, restricao odontologica ou desconforto."] |
| Imagem/chave | chiclete-menta-alerta |

### Movimento e alongamento

| Campo | Valor |
| --- | --- |
| Slug | movimento-alongamento-tirar-sono |
| Area | SLEEP |
| Categoria | MENTAL / SLEEP_UP |
| Nivel | 1 |
| Objetivo | Reativar circulacao e postura durante o dia. |
| Descricao curta | Levantar a cada 30 minutos e movimentar bracos, pernas e pescoco pode reduzir sonolencia leve. |
| Como fazer | ["Levante com calma.","Movimente ombros e bracos.","Mexa pernas e tornozelos.","Alongue pescoco com amplitude pequena.","Respire e retome."] |
| Dicas de postura | ["Use um ambiente seguro.","Reduza estimulos quando for pratica de sono.","Adapte a posicao ao corpo."] |
| Respiracao | ["Respire de forma confortavel.","Evite prender o ar se houver desconforto.","Volte ao ritmo natural quando precisar."] |
| Erros comuns | ["Usar como obrigacao rigida.","Forcar sonolencia ou alerta.","Ignorar sonolencia persistente."] |
| Cuidados | ["Pare se houver dor, tontura ou falta de ar incomum."] |
| Contraindicacoes | ["Pare se houver dor, tontura ou falta de ar incomum."] |
| Recomendado quando | ["sonolencia","movimento","muito tempo sentado"] |
| Evitar quando | ["Pare se houver dor, tontura ou falta de ar incomum."] |
| Imagem/chave | movimento-alongamento-tirar-sono |

### Respiracao energizante

| Campo | Valor |
| --- | --- |
| Slug | respiracao-energizante |
| Area | SLEEP |
| Categoria | MENTAL / SLEEP_UP |
| Nivel | 1 |
| Objetivo | Apoiar energia temporaria durante queda de atencao. |
| Descricao curta | Respiracao curta e ativa para aumentar alerta sem exagero. |
| Como fazer | ["Inspire profundamente pelo nariz.","Conte ate 2.","Solte o ar pela boca.","Repita 10 a 15 vezes.","Volte ao ritmo natural."] |
| Dicas de postura | ["Use um ambiente seguro.","Reduza estimulos quando for pratica de sono.","Adapte a posicao ao corpo."] |
| Respiracao | ["Respire de forma confortavel.","Evite prender o ar se houver desconforto.","Volte ao ritmo natural quando precisar."] |
| Erros comuns | ["Usar como obrigacao rigida.","Forcar sonolencia ou alerta.","Ignorar sonolencia persistente."] |
| Cuidados | ["Pare se houver tontura, formigamento ou desconforto respiratorio."] |
| Contraindicacoes | ["Pare se houver tontura, formigamento ou desconforto respiratorio."] |
| Recomendado quando | ["sonolencia","respiracao","alerta"] |
| Evitar quando | ["Pare se houver tontura, formigamento ou desconforto respiratorio."] |
| Imagem/chave | respiracao-energizante |

### Respiracao alternada

| Campo | Valor |
| --- | --- |
| Slug | respiracao-alternada |
| Area | SLEEP |
| Categoria | MENTAL / SLEEP_UP |
| Nivel | 3 |
| Objetivo | Organizar atencao e recuperar presenca. |
| Descricao curta | Respiracao nasal alternada feita de forma calma, sem prender o ar por muito tempo. |
| Como fazer | ["Tampe a narina direita e inspire pela esquerda.","Tampe a esquerda e expire pela direita.","Inspire pela direita.","Alterne o ciclo.","Faca de forma calma."] |
| Dicas de postura | ["Use um ambiente seguro.","Reduza estimulos quando for pratica de sono.","Adapte a posicao ao corpo."] |
| Respiracao | ["Respire de forma confortavel.","Evite prender o ar se houver desconforto.","Volte ao ritmo natural quando precisar."] |
| Erros comuns | ["Usar como obrigacao rigida.","Forcar sonolencia ou alerta.","Ignorar sonolencia persistente."] |
| Cuidados | ["Evite se houver congestao, tontura ou desconforto respiratorio."] |
| Contraindicacoes | ["Evite se houver congestao, tontura ou desconforto respiratorio."] |
| Recomendado quando | ["respiracao","foco","alerta"] |
| Evitar quando | ["Evite se houver congestao, tontura ou desconforto respiratorio."] |
| Imagem/chave | respiracao-alternada |

### Diario de 3 linhas

| Campo | Valor |
| --- | --- |
| Slug | diario-3-linhas |
| Area | MOOD |
| Categoria | MENTAL / WRITING |
| Nivel | 1 |
| Objetivo | Expressar o estado atual sem transformar a escrita em analise longa. |
| Descricao curta | Escreva tres linhas para organizar o humor com simplicidade. |
| Como fazer | ["Linha 1: hoje eu estou sentindo...","Linha 2: isso pode estar ligado a...","Linha 3: agora eu posso fazer uma coisa pequena, que e...","Leia apenas uma vez.","Feche com uma respiracao tranquila."] |
| Dicas de postura | ["Sente-se com apoio.","Relaxe a mao.","Escreva sem buscar palavras bonitas."] |
| Respiracao | ["Respire antes de cada linha.","Solte o ar antes da linha final."] |
| Erros comuns | ["Escrever um julgamento de si.","Tentar encontrar causa perfeita.","Transformar em lista de problemas."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando o humor estiver pesado ou confuso.","Quando voce quiser se escutar sem julgamento."] |
| Evitar quando | ["Evite reler varias vezes se isso aumentar autocritica."] |
| Imagem/chave | diario-3-linhas |

### Diario de descarrego mental

| Campo | Valor |
| --- | --- |
| Slug | diario-descarrego-mental |
| Area | MOOD |
| Categoria | MENTAL / WRITING |
| Nivel | 1 |
| Objetivo | Tirar pensamentos da cabeca e coloca-los no papel de forma livre. |
| Descricao curta | Tirar pensamentos da cabeca e coloca-los no papel de forma livre. |
| Como fazer | ["Pegue um caderno ou use o campo de anotacao.","Escreva sem editar e sem julgar.","Escolha uma coisa que pode ficar para depois.","Finalize com uma frase de cuidado consigo."] |
| Dicas de postura | ["Sente-se de forma confortavel.","Relaxe ombros e maos.","Nao tente escrever bonito."] |
| Respiracao | ["Respire naturalmente.","Solte o ar antes de comecar.","Faca pausas se ficar intenso."] |
| Erros comuns | ["Tentar resolver tudo.","Julgar o que escreveu.","Transformar a pratica em cobranca."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Sofrimento intenso ou risco: busque ajuda imediata."] |
| Recomendado quando | ["Quando a mente estiver cheia.","Quando voce quiser organizar pensamentos sem julgamento."] |
| Evitar quando | ["Evite se escrever aumentar sofrimento intenso; procure apoio humano."] |
| Imagem/chave | diario-descarrego-mental |

### Escrita de distracoes

| Campo | Valor |
| --- | --- |
| Slug | escrita-de-distracoes |
| Area | FOCUS |
| Categoria | MENTAL / WRITING |
| Nivel | 1 |
| Objetivo | Liberar espaco mental sem precisar resolver tudo agora. |
| Descricao curta | Tire as interrupcoes da cabeca colocando-as em uma lista temporaria. |
| Como fazer | ["Anote toda distracao que aparecer.","Nao resolva nada durante a escrita.","Marque com uma estrela o que realmente precisa voltar depois.","Escolha uma unica acao para agora.","Guarde a lista ate a proxima pausa."] |
| Dicas de postura | ["Escreva sem rigidez.","Solte punhos e ombros.","Mantenha a tela principal fora do foco."] |
| Respiracao | ["Respire antes de voltar para a tarefa.","Use uma expiracao longa se sentir pressa."] |
| Erros comuns | ["Transformar a lista em agenda cheia.","Julgar as distracoes.","Voltar para varias tarefas ao mesmo tempo."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando surgirem muitas lembrancas durante uma tarefa.","Quando notificacoes mentais ficarem puxando sua atencao."] |
| Evitar quando | ["Evite usar a lista como cobranca imediata."] |
| Imagem/chave | escrita-de-distracoes |

### Escrita de preocupacao controlada

| Campo | Valor |
| --- | --- |
| Slug | escrita-preocupacao-controlada |
| Area | MOOD |
| Categoria | MENTAL / WRITING |
| Nivel | 1 |
| Objetivo | Separar preocupacao de acao possivel. |
| Descricao curta | Separar preocupacao de acao possivel. |
| Como fazer | ["Pegue um caderno ou use o campo de anotacao.","Escreva sem editar e sem julgar.","Escolha uma coisa que pode ficar para depois.","Finalize com uma frase de cuidado consigo."] |
| Dicas de postura | ["Sente-se de forma confortavel.","Relaxe ombros e maos.","Nao tente escrever bonito."] |
| Respiracao | ["Respire naturalmente.","Solte o ar antes de comecar.","Faca pausas se ficar intenso."] |
| Erros comuns | ["Tentar resolver tudo.","Julgar o que escreveu.","Transformar a pratica em cobranca."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Sofrimento intenso ou risco: busque ajuda imediata."] |
| Recomendado quando | ["Quando a mente estiver cheia.","Quando voce quiser organizar pensamentos sem julgamento."] |
| Evitar quando | ["Evite se escrever aumentar sofrimento intenso; procure apoio humano."] |
| Imagem/chave | escrita-preocupacao-controlada |

### Gratidao rapida

| Campo | Valor |
| --- | --- |
| Slug | gratidao-rapida |
| Area | MOOD |
| Categoria | MENTAL / WRITING |
| Nivel | 1 |
| Objetivo | Registrar um ponto positivo concreto do dia. |
| Descricao curta | Registrar um ponto positivo concreto do dia. |
| Como fazer | ["Pegue um caderno ou use o campo de anotacao.","Escreva sem editar e sem julgar.","Escolha uma coisa que pode ficar para depois.","Finalize com uma frase de cuidado consigo."] |
| Dicas de postura | ["Sente-se de forma confortavel.","Relaxe ombros e maos.","Nao tente escrever bonito."] |
| Respiracao | ["Respire naturalmente.","Solte o ar antes de comecar.","Faca pausas se ficar intenso."] |
| Erros comuns | ["Tentar resolver tudo.","Julgar o que escreveu.","Transformar a pratica em cobranca."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Sofrimento intenso ou risco: busque ajuda imediata."] |
| Recomendado quando | ["Quando a mente estiver cheia.","Quando voce quiser organizar pensamentos sem julgamento."] |
| Evitar quando | ["Evite se escrever aumentar sofrimento intenso; procure apoio humano."] |
| Imagem/chave | gratidao-rapida |

### Mensagem gentil para alguem

| Campo | Valor |
| --- | --- |
| Slug | mensagem-gentil-para-alguem |
| Area | MOOD |
| Categoria | MENTAL / WRITING |
| Nivel | 1 |
| Objetivo | Apoiar bem-estar por meio de contato simples e seguro. |
| Descricao curta | Crie uma pequena acao de conexao social com baixo esforco. |
| Como fazer | ["Pense em uma pessoa segura.","Escreva uma mensagem curta e sem cobranca.","Use algo simples, como: lembrei de voce hoje.","Envie apenas se parecer confortavel.","Se nao enviar, reconheca que pensar na conexao ja conta."] |
| Dicas de postura | ["Evite ficar rolando conversas antigas.","Mantenha a mensagem curta.","Use uma postura confortavel."] |
| Respiracao | ["Respire antes de enviar.","Solte o ar se vier ansiedade de resposta."] |
| Erros comuns | ["Esperar resposta imediata.","Mandar mensagem longa demais.","Escolher alguem que aumenta tensao."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce sentir vontade de se conectar.","Quando o humor estiver baixo e uma mensagem leve parecer possivel."] |
| Evitar quando | ["Evite se o contato gerar conflito, cobranca ou risco para voce."] |
| Imagem/chave | mensagem-gentil-para-alguem |

### Pendencia para amanha

| Campo | Valor |
| --- | --- |
| Slug | pendencia-para-amanha |
| Area | SLEEP |
| Categoria | MENTAL / WRITING |
| Nivel | 1 |
| Objetivo | Reduzir preocupacao noturna sem tentar resolver tudo. |
| Descricao curta | Tire uma pendencia da cabeca e coloque em um lugar confiavel. |
| Como fazer | ["Escreva uma pendencia que esta voltando na mente.","Defina apenas o primeiro passo de amanha.","Anote um horario aproximado para olhar isso.","Feche a nota.","Respire e diga: isso ficou registrado."] |
| Dicas de postura | ["Escreva em postura relaxada.","Evite usar luz forte.","Solte maos e ombros."] |
| Respiracao | ["Respire antes de escrever.","Expire ao finalizar a anotacao."] |
| Erros comuns | ["Planejar a semana toda.","Abrir mensagens de trabalho.","Cobrar uma solucao imediata."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando a mente listar tarefas na hora de dormir.","Depois de um dia com muitas pendencias."] |
| Evitar quando | ["Evite abrir uma lista longa de planejamento completo."] |
| Imagem/chave | pendencia-para-amanha |

### Planejamento gentil do dia seguinte

| Campo | Valor |
| --- | --- |
| Slug | planejamento-gentil-dia-seguinte |
| Area | MOOD |
| Categoria | MENTAL / WRITING |
| Nivel | 1 |
| Objetivo | Preparar o proximo dia sem excesso. |
| Descricao curta | Preparar o proximo dia sem excesso. |
| Como fazer | ["Pegue um caderno ou use o campo de anotacao.","Escreva sem editar e sem julgar.","Escolha uma coisa que pode ficar para depois.","Finalize com uma frase de cuidado consigo."] |
| Dicas de postura | ["Sente-se de forma confortavel.","Relaxe ombros e maos.","Nao tente escrever bonito."] |
| Respiracao | ["Respire naturalmente.","Solte o ar antes de comecar.","Faca pausas se ficar intenso."] |
| Erros comuns | ["Tentar resolver tudo.","Julgar o que escreveu.","Transformar a pratica em cobranca."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Sofrimento intenso ou risco: busque ajuda imediata."] |
| Recomendado quando | ["Quando a mente estiver cheia.","Quando voce quiser organizar pensamentos sem julgamento."] |
| Evitar quando | ["Evite se escrever aumentar sofrimento intenso; procure apoio humano."] |
| Imagem/chave | planejamento-gentil-dia-seguinte |

### Reflexao de fim de semana

| Campo | Valor |
| --- | --- |
| Slug | reflexao-fim-de-semana |
| Area | MOOD |
| Categoria | MENTAL / WRITING |
| Nivel | 1 |
| Objetivo | Observar a semana com gentileza. |
| Descricao curta | Observar a semana com gentileza. |
| Como fazer | ["Pegue um caderno ou use o campo de anotacao.","Escreva sem editar e sem julgar.","Escolha uma coisa que pode ficar para depois.","Finalize com uma frase de cuidado consigo."] |
| Dicas de postura | ["Sente-se de forma confortavel.","Relaxe ombros e maos.","Nao tente escrever bonito."] |
| Respiracao | ["Respire naturalmente.","Solte o ar antes de comecar.","Faca pausas se ficar intenso."] |
| Erros comuns | ["Tentar resolver tudo.","Julgar o que escreveu.","Transformar a pratica em cobranca."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Sofrimento intenso ou risco: busque ajuda imediata."] |
| Recomendado quando | ["Quando a mente estiver cheia.","Quando voce quiser organizar pensamentos sem julgamento."] |
| Evitar quando | ["Evite se escrever aumentar sofrimento intenso; procure apoio humano."] |
| Imagem/chave | reflexao-fim-de-semana |

### Uma coisa boa agora

| Campo | Valor |
| --- | --- |
| Slug | uma-coisa-boa-agora |
| Area | MOOD |
| Categoria | MENTAL / WRITING |
| Nivel | 1 |
| Objetivo | Treinar atencao para sinais positivos possiveis sem negar dificuldades. |
| Descricao curta | Reconheca um ponto pequeno ou neutro que ainda existe no dia. |
| Como fazer | ["Pense em algo pequeno que nao foi ruim.","Escreva uma frase concreta.","Nomeie por que isso importou um pouco.","Respire antes de seguir.","Guarde sem precisar transformar em gratidao grande."] |
| Dicas de postura | ["Escreva de forma relaxada.","Deixe a frase ser simples.","Evite editar demais."] |
| Respiracao | ["Respire naturalmente.","Solte o ar ao terminar a frase."] |
| Erros comuns | ["Forcar alegria.","Comparar seu dia com outros.","Desqualificar coisas pequenas."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando o humor estiver baixo, mas voce conseguir escrever uma frase.","No fim de uma pausa curta."] |
| Evitar quando | ["Evite usar a pratica para invalidar tristeza ou cansaco."] |
| Imagem/chave | uma-coisa-boa-agora |

### Agachamentos

| Campo | Valor |
| --- | --- |
| Slug | ref_006_mov_05 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / HOME_FUNCTIONAL |
| Nivel | 1 |
| Objetivo | Pode ajudar a fortalecer pernas e gluteos. |
| Descricao curta | Movimento de descida e subida usando peso corporal, com joelhos alinhados e quadril indo para tras. |
| Como fazer | ["Fique em pe com pes na largura do quadril ou um pouco mais abertos.","Mantenha peito aberto e abdomen ativo.","Leve o quadril para tras iniciando a descida.","Dobre joelhos mantendo alinhamento com os pes.","Pare em amplitude confortavel.","Suba empurrando o chao e contraindo gluteos sem travar joelhos."] |
| Dicas de postura | ["Reduza a profundidade, mantenha peso distribuido no pe inteiro e pense em abrir levemente os joelhos na linha dos pes.","comece com amplitude pequena","use cadeira como referencia se necessario"] |
| Respiracao | ["Inspire na descida e expire ao subir."] |
| Erros comuns | ["Deixar joelhos cairem para dentro, levantar calcanhares ou desabar o tronco."] |
| Cuidados | ["comece com amplitude pequena","use cadeira como referencia se necessario","nao prenda o ar","pare se joelho ou quadril doerem"] |
| Contraindicacoes | ["dor no joelho","dor no quadril","dor lombar","instabilidade","lesao recente"] |
| Recomendado quando | ["fortalecer pernas","fortalecer gluteos","fortalecimento geral","melhorar condicionamento","sedentarismo","rotina matinal"] |
| Evitar quando | ["dor no joelho","dor no quadril","dor lombar","instabilidade","lesao recente"] |
| Imagem/chave | ref_006_mov_05 |

### Coice de gluteo

| Campo | Valor |
| --- | --- |
| Slug | ref_006_mov_07 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / HOME_FUNCTIONAL |
| Nivel | 1 |
| Objetivo | Pode ajudar a fortalecer gluteos e estabilizar quadril. |
| Descricao curta | Em quatro apoios, eleva uma perna flexionada ativando gluteo sem arquear a lombar. |
| Como fazer | ["Entre em quatro apoios com maos abaixo dos ombros.","Mantenha joelhos abaixo dos quadris e abdomen ativo.","Flexione o joelho de uma perna a cerca de 90 graus.","Eleve o pe em direcao ao teto sem arquear a lombar.","Pause pouco no alto sentindo gluteo.","Desca com controle e repita antes de trocar o lado."] |
| Dicas de postura | ["Diminua a altura da perna, mantenha a pelve apontada para o chao e imagine o abdomen sustentando a lombar.","apoie antebracos ou use colchonete se punhos incomodarem","evite arquear a lombar"] |
| Respiracao | ["Expire ao elevar a perna e inspire ao voltar."] |
| Erros comuns | ["Subir a perna alem do controle e compensar com lombar ou giro do quadril."] |
| Cuidados | ["apoie antebracos ou use colchonete se punhos incomodarem","evite arquear a lombar","nao use impulso","pare se joelho ou quadril doerem"] |
| Contraindicacoes | ["dor lombar","dor no joelho","dor no quadril","lesao recente","desconforto em quatro apoios"] |
| Recomendado quando | ["fortalecer gluteos","fortalecer pernas","estabilidade corporal","treino em casa","sem equipamentos","sedentarismo"] |
| Evitar quando | ["dor lombar","dor no joelho","dor no quadril","lesao recente","desconforto em quatro apoios"] |
| Imagem/chave | ref_006_mov_07 |

### Toque nos calcanhares

| Campo | Valor |
| --- | --- |
| Slug | ref_006_mov_01 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / HOME_FUNCTIONAL |
| Nivel | 1 |
| Objetivo | Pode ajudar a ativar obliquos e musculatura abdominal lateral. |
| Descricao curta | Movimento de flexao lateral curta no chao, alternando o toque das maos nos calcanhares com o abdomen ativo. |
| Como fazer | ["Deite com joelhos flexionados e pes apoiados no chao.","Mantenha bracos ao lado do corpo e queixo relaxado.","Eleve levemente ombros e costelas, sem puxar o pescoco.","Toque ou aproxime a mao direita do calcanhar direito.","Volte ao centro e repita para o lado esquerdo.","Alterne os lados mantendo respiracao continua."] |
| Dicas de postura | ["Reduza a amplitude, mantenha o olhar diagonal para cima e pense em aproximar costelas do quadril sem tensionar o pescoco.","nao puxe a cabeca com as maos","pare se sentir dor lombar ou cervical"] |
| Respiracao | ["Expire ao tocar o calcanhar e inspire ao voltar ao centro."] |
| Erros comuns | ["Girar o tronco rapido, puxar a cabeca ou perder a lombar totalmente do controle."] |
| Cuidados | ["nao puxe a cabeca com as maos","pare se sentir dor lombar ou cervical","mantenha movimento curto e controlado","evite prender a respiracao"] |
| Contraindicacoes | ["dor lombar","dor cervical","hernia abdominal","diastase sem orientacao","dor abdominal forte"] |
| Recomendado quando | ["fortalecer abdomen","fortalecer core","treino em casa","sem equipamentos","estabilidade corporal","sedentarismo leve"] |
| Evitar quando | ["dor cervical","dor lombar forte","pos-operatorio abdominal","tontura ao deitar","gravidez sem orientacao"] |
| Imagem/chave | ref_006_mov_01 |

### Agachamento leve guiado

| Campo | Valor |
| --- | --- |
| Slug | agachamento-leve-guiado |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / HOME_FUNCTIONAL |
| Nivel | 2 |
| Objetivo | Ativar pernas e quadril de forma leve. |
| Descricao curta | Ativar pernas e quadril de forma leve. |
| Como fazer | ["Prepare espaco livre ao redor.","Faca o movimento de forma controlada.","Descanse confortavelmente entre as series.","Pare antes de perder a postura."] |
| Dicas de postura | ["Mantenha coluna neutra.","Controle a velocidade.","Use amplitude confortavel."] |
| Respiracao | ["Inspire na fase mais facil.","Expire no esforco.","Nao prenda a respiracao."] |
| Erros comuns | ["Apressar repeticoes.","Perder alinhamento.","Forcar alem do confortavel."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando sua energia estiver estavel.","Quando voce quiser ativar o corpo em casa."] |
| Evitar quando | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto."] |
| Imagem/chave | agachamento-leve-guiado |

### Prancha de antebraco

| Campo | Valor |
| --- | --- |
| Slug | ref_006_mov_08 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / HOME_FUNCTIONAL |
| Nivel | 2 |
| Objetivo | Pode ajudar a fortalecer core e melhorar estabilidade corporal. |
| Descricao curta | Posicao isometrica apoiada nos antebracos e pontas dos pes, mantendo corpo alinhado e respiracao continua. |
| Como fazer | ["Apoie antebracos no chao com cotovelos abaixo dos ombros.","Estenda uma perna e depois a outra para tras.","Mantenha pes afastados na largura do quadril.","Ative abdomen e gluteos levemente.","Segure a posicao respirando sem prender o ar.","Descanse antes de perder alinhamento."] |
| Dicas de postura | ["Imagine costelas e pelve se aproximando, empurre o chao com antebracos e reduza o tempo se a lombar ceder.","comece com poucos segundos","apoie joelhos para adaptar"] |
| Respiracao | ["Respire curto e continuo, soltando o ar lentamente enquanto mantem a postura."] |
| Erros comuns | ["Deixar quadril cair, levantar demais o quadril ou prender a respiracao."] |
| Cuidados | ["comece com poucos segundos","apoie joelhos para adaptar","nao prenda a respiracao","pare se lombar ou ombros doerem"] |
| Contraindicacoes | ["dor no ombro","dor lombar","dor no cotovelo","falta de ar","pressao descontrolada","lesao recente"] |
| Recomendado quando | ["fortalecer core","fortalecer abdomen","estabilidade corporal","fortalecimento geral","treino em casa","sem equipamentos"] |
| Evitar quando | ["dor no ombro","dor lombar","dor no cotovelo","falta de ar","pressao descontrolada","lesao recente"] |
| Imagem/chave | ref_006_mov_08 |

### Torcao russa

| Campo | Valor |
| --- | --- |
| Slug | ref_006_mov_03 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / HOME_FUNCTIONAL |
| Nivel | 2 |
| Objetivo | Pode ajudar a fortalecer obliquos e melhorar controle rotacional do tronco. |
| Descricao curta | Exercicio sentado com tronco inclinado, girando as maos de um lado ao outro sem colapsar a coluna. |
| Como fazer | ["Sente com joelhos flexionados e pes no chao.","Incline o tronco um pouco para tras sem arredondar a lombar.","Una as maos a frente do peito.","Gire o tronco para a direita com controle.","Volte ao centro e gire para a esquerda.","Mantenha o movimento pequeno se perder postura."] |
| Dicas de postura | ["Cresca a coluna, mantenha costelas organizadas e deixe o giro vir do tronco, nao dos ombros isolados.","mantenha pes apoiados se for iniciante","evite carga externa nesta versao"] |
| Respiracao | ["Expire durante o giro e inspire ao retornar ao centro."] |
| Erros comuns | ["Mover apenas os bracos, arredondar a lombar ou usar impulso."] |
| Cuidados | ["mantenha pes apoiados se for iniciante","evite carga externa nesta versao","nao force amplitude","pare se a lombar incomodar"] |
| Contraindicacoes | ["dor lombar","dor no quadril","tontura","dor ao rotacionar tronco","hernia abdominal sem orientacao"] |
| Recomendado quando | ["fortalecer core","estabilidade corporal","equilibrio","treino em casa","sedentarismo"] |
| Evitar quando | ["dor lombar","dor no quadril","tontura","dor ao rotacionar tronco","hernia abdominal sem orientacao"] |
| Imagem/chave | ref_006_mov_03 |

### Abdominal bicicleta

| Campo | Valor |
| --- | --- |
| Slug | ref_006_mov_02 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / HOME_FUNCTIONAL |
| Nivel | 3 |
| Objetivo | Pode ajudar a fortalecer abdomen e obliquos com movimento alternado de pernas e tronco. |
| Descricao curta | Abdominal alternado no chao, aproximando cotovelo e joelho opostos sem puxar o pescoco. |
| Como fazer | ["Deite com lombar confortavel e maos leves atras da cabeca.","Eleve pernas e mantenha joelhos flexionados.","Aproxime joelho direito e cotovelo esquerdo sem puxar o pescoco.","Volte pelo centro e alterne para o outro lado.","Mantenha ritmo moderado, com controle da lombar.","Descanse se a tecnica comecar a cair."] |
| Dicas de postura | ["Use as maos apenas como apoio, gire pelo tronco e reduza a extensao das pernas se a lombar perder estabilidade.","nao puxe o pescoco","mantenha lombar controlada"] |
| Respiracao | ["Expire ao cruzar cotovelo e joelho, inspire ao trocar."] |
| Erros comuns | ["Pedalar rapido demais, puxar a cabeca ou deixar a lombar arquear."] |
| Cuidados | ["nao puxe o pescoco","mantenha lombar controlada","reduza velocidade antes de aumentar repeticoes","pare se houver dor aguda"] |
| Contraindicacoes | ["dor lombar","dor cervical","hernia abdominal","diastase sem orientacao","desconforto ao flexionar tronco"] |
| Recomendado quando | ["fortalecer abdomen","fortalecer core","melhorar condicionamento","perder gordura corporal","treino em casa"] |
| Evitar quando | ["dor cervical","dor lombar","hernia abdominal","diastase sem orientacao","desconforto ao flexionar tronco"] |
| Imagem/chave | ref_006_mov_02 |

### Abdominal bicicleta

| Campo | Valor |
| --- | --- |
| Slug | ref_008_mov_09 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / HOME_FUNCTIONAL |
| Nivel | 3 |
| Objetivo | Pode ajudar em treino matinal, condicionamento. |
| Descricao curta | Pode ajudar em treino matinal, condicionamento. |
| Como fazer | ["Executar Abdominal bicicleta com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Remover linguagem de fat loss/transformacao corporal.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/fitness/morning-routine.","Reaproveitamento visual: REUSED. REUTILIZAR ref_006_mov_02; nao gerar.","Status do video: PLANNED.","Imagens planejadas pendentes: fitness_morning_009_bicycle_crunches_step_01_start.png, fitness_morning_009_bicycle_crunches_step_02_right_cross.png, fitness_morning_009_bicycle_crunches_step_03_left_cross.png, fitness_morning_009_bicycle_crunches_step_04_common_mistake.png, fitness_morning_009_bicycle_crunches_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","tontura","gravidez/pos-parto sem liberacao"] |
| Recomendado quando | ["treino de manha","cardio em casa","condicionamento","corpo inteiro","abdominal bicicleta","fitness","rotina matinal","pausa ai","condicionamento funcional de corpo inteiro em casa","energia, disposicao e inicio ativo do dia","treino funcional","energia","sem equipamentos","Abdominal bicicleta","Bicycle Crunches","Rotina matinal de treino funcional para energia e condicionamento","Morning Workout Routine for Fat Loss","rotina_matinal_funcional_corpo_inteiro","ref_008","core","pernas conforme exercicio","Referencia: ref_008","Colecao: rotina_matinal_funcional_corpo_inteiro"] |
| Evitar quando | ["dor no peito","falta de ar","tontura","pressao descontrolada","lesao recente","gravidez/pos-parto sem liberacao"] |
| Imagem/chave | ref_008_mov_09 |

### Agachamentos com peso corporal

| Campo | Valor |
| --- | --- |
| Slug | ref_008_mov_02 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / HOME_FUNCTIONAL |
| Nivel | 3 |
| Objetivo | Pode ajudar em treino matinal, condicionamento. |
| Descricao curta | Pode ajudar em treino matinal, condicionamento. |
| Como fazer | ["Executar Agachamentos com peso corporal com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Remover linguagem de fat loss/transformacao corporal.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/fitness/morning-routine.","Reaproveitamento visual: REUSED. REUTILIZAR ref_006_mov_05 se equivalente.","Status do video: PLANNED.","Imagens planejadas pendentes: fitness_morning_002_bodyweight_squats_step_01_standing.png, fitness_morning_002_bodyweight_squats_step_02_descend.png, fitness_morning_002_bodyweight_squats_step_03_squat_position.png, fitness_morning_002_bodyweight_squats_step_04_common_mistake.png, fitness_morning_002_bodyweight_squats_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","tontura","gravidez/pos-parto sem liberacao"] |
| Recomendado quando | ["treino de manha","cardio em casa","condicionamento","corpo inteiro","agachamentos com peso corporal","fitness","rotina matinal","pausa ai","condicionamento funcional de corpo inteiro em casa","energia, disposicao e inicio ativo do dia","treino funcional","energia","sem equipamentos","Agachamentos com peso corporal","Bodyweight Squats","Rotina matinal de treino funcional para energia e condicionamento","Morning Workout Routine for Fat Loss","rotina_matinal_funcional_corpo_inteiro","ref_008","core","pernas conforme exercicio","Referencia: ref_008","Colecao: rotina_matinal_funcional_corpo_inteiro"] |
| Evitar quando | ["dor no peito","falta de ar","tontura","pressao descontrolada","lesao recente","gravidez/pos-parto sem liberacao"] |
| Imagem/chave | ref_008_mov_02 |

### Avancos / passadas

| Campo | Valor |
| --- | --- |
| Slug | ref_006_mov_06 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / HOME_FUNCTIONAL |
| Nivel | 3 |
| Objetivo | Pode ajudar a fortalecer pernas, gluteos e estabilidade unilateral. |
| Descricao curta | Passada a frente com descida controlada, alternando pernas e mantendo joelho alinhado. |
| Como fazer | ["Fique em pe com postura alta.","De um passo a frente com distancia confortavel.","Desca dobrando os dois joelhos sem bater o joelho de tras no chao.","Mantenha o joelho da frente alinhado ao pe.","Empurre o chao para voltar.","Alterne as pernas mantendo ritmo controlado."] |
| Dicas de postura | ["Aumente um pouco a distancia da passada, desca verticalmente e mantenha o peso distribuido entre pe da frente e ponta do pe de tras.","use apoio lateral se necessario","comece sem profundidade"] |
| Respiracao | ["Inspire ao descer e expire ao voltar para cima."] |
| Erros comuns | ["Dar passada curta demais, deixar o joelho da frente cair para dentro ou inclinar o tronco em excesso."] |
| Cuidados | ["use apoio lateral se necessario","comece sem profundidade","nao force amplitude","interrompa se houver dor no joelho"] |
| Contraindicacoes | ["dor no joelho","dor no quadril","instabilidade","dor lombar","lesao recente"] |
| Recomendado quando | ["fortalecer pernas","fortalecer gluteos","equilibrio","fortalecimento geral","melhorar condicionamento"] |
| Evitar quando | ["dor no joelho","dor no quadril","instabilidade","dor lombar","lesao recente"] |
| Imagem/chave | ref_006_mov_06 |

### Burpees

| Campo | Valor |
| --- | --- |
| Slug | ref_008_mov_10 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / HOME_FUNCTIONAL |
| Nivel | 3 |
| Objetivo | Pode ajudar em treino matinal, condicionamento. |
| Descricao curta | Pode ajudar em treino matinal, condicionamento. |
| Como fazer | ["Executar Burpees com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Remover linguagem de fat loss/transformacao corporal.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/fitness/morning-routine.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO.","Status do video: PLANNED.","Imagens planejadas pendentes: fitness_morning_010_burpees_step_01_standing.png, fitness_morning_010_burpees_step_02_squat_hands_down.png, fitness_morning_010_burpees_step_03_plank.png, fitness_morning_010_burpees_step_04_return_stand.png, fitness_morning_010_burpees_step_05_common_mistake.png, fitness_morning_010_burpees_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","tontura","gravidez/pos-parto sem liberacao"] |
| Recomendado quando | ["treino de manha","cardio em casa","condicionamento","corpo inteiro","burpees","fitness","rotina matinal","pausa ai","condicionamento funcional de corpo inteiro em casa","energia, disposicao e inicio ativo do dia","treino funcional","energia","sem equipamentos","Burpees","Rotina matinal de treino funcional para energia e condicionamento","Morning Workout Routine for Fat Loss","rotina_matinal_funcional_corpo_inteiro","ref_008","core","pernas conforme exercicio","Referencia: ref_008","Colecao: rotina_matinal_funcional_corpo_inteiro"] |
| Evitar quando | ["dor no peito","falta de ar","tontura","pressao descontrolada","lesao recente","gravidez/pos-parto sem liberacao"] |
| Imagem/chave | ref_008_mov_10 |

### Corrida parada com joelhos altos

| Campo | Valor |
| --- | --- |
| Slug | ref_008_mov_07 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / HOME_FUNCTIONAL |
| Nivel | 3 |
| Objetivo | Pode ajudar em treino matinal, condicionamento. |
| Descricao curta | Pode ajudar em treino matinal, condicionamento. |
| Como fazer | ["Executar Corrida parada com joelhos altos com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Remover linguagem de fat loss/transformacao corporal.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/fitness/morning-routine.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO.","Status do video: PLANNED.","Imagens planejadas pendentes: fitness_morning_007_high_knees_step_01_standing.png, fitness_morning_007_high_knees_step_02_right_knee_up.png, fitness_morning_007_high_knees_step_03_left_knee_up.png, fitness_morning_007_high_knees_step_04_common_mistake.png, fitness_morning_007_high_knees_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","tontura","gravidez/pos-parto sem liberacao"] |
| Recomendado quando | ["treino de manha","cardio em casa","condicionamento","corpo inteiro","corrida parada com joelhos altos","fitness","rotina matinal","pausa ai","condicionamento funcional de corpo inteiro em casa","energia, disposicao e inicio ativo do dia","treino funcional","energia","sem equipamentos","Corrida parada com joelhos altos","High Knees","Rotina matinal de treino funcional para energia e condicionamento","Morning Workout Routine for Fat Loss","rotina_matinal_funcional_corpo_inteiro","ref_008","core","pernas conforme exercicio","Referencia: ref_008","Colecao: rotina_matinal_funcional_corpo_inteiro"] |
| Evitar quando | ["dor no peito","falta de ar","tontura","pressao descontrolada","lesao recente","gravidez/pos-parto sem liberacao"] |
| Imagem/chave | ref_008_mov_07 |

### Elevacao de pernas

| Campo | Valor |
| --- | --- |
| Slug | ref_008_mov_08 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / HOME_FUNCTIONAL |
| Nivel | 3 |
| Objetivo | Pode ajudar em treino matinal, condicionamento. |
| Descricao curta | Pode ajudar em treino matinal, condicionamento. |
| Como fazer | ["Executar Elevacao de pernas com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Remover linguagem de fat loss/transformacao corporal.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/fitness/morning-routine.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO.","Status do video: PLANNED.","Imagens planejadas pendentes: fitness_morning_008_leg_raises_step_01_lie_down.png, fitness_morning_008_leg_raises_step_02_legs_raise.png, fitness_morning_008_leg_raises_step_03_lower_control.png, fitness_morning_008_leg_raises_step_04_common_mistake.png, fitness_morning_008_leg_raises_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","tontura","gravidez/pos-parto sem liberacao"] |
| Recomendado quando | ["treino de manha","cardio em casa","condicionamento","corpo inteiro","elevacao de pernas","fitness","rotina matinal","pausa ai","condicionamento funcional de corpo inteiro em casa","energia, disposicao e inicio ativo do dia","treino funcional","energia","sem equipamentos","Elevacao de pernas","Leg Raises","Rotina matinal de treino funcional para energia e condicionamento","Morning Workout Routine for Fat Loss","rotina_matinal_funcional_corpo_inteiro","ref_008","core","pernas conforme exercicio","Referencia: ref_008","Colecao: rotina_matinal_funcional_corpo_inteiro"] |
| Evitar quando | ["dor no peito","falta de ar","tontura","pressao descontrolada","lesao recente","gravidez/pos-parto sem liberacao"] |
| Imagem/chave | ref_008_mov_08 |

### Escaladores

| Campo | Valor |
| --- | --- |
| Slug | ref_008_mov_06 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / HOME_FUNCTIONAL |
| Nivel | 3 |
| Objetivo | Pode ajudar em treino matinal, condicionamento. |
| Descricao curta | Pode ajudar em treino matinal, condicionamento. |
| Como fazer | ["Executar Escaladores com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Remover linguagem de fat loss/transformacao corporal.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/fitness/morning-routine.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO.","Status do video: PLANNED.","Imagens planejadas pendentes: fitness_morning_006_mountain_climbers_step_01_high_plank.png, fitness_morning_006_mountain_climbers_step_02_knee_drive_right.png, fitness_morning_006_mountain_climbers_step_03_knee_drive_left.png, fitness_morning_006_mountain_climbers_step_04_common_mistake.png, fitness_morning_006_mountain_climbers_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","tontura","gravidez/pos-parto sem liberacao"] |
| Recomendado quando | ["treino de manha","cardio em casa","condicionamento","corpo inteiro","escaladores","fitness","rotina matinal","pausa ai","condicionamento funcional de corpo inteiro em casa","energia, disposicao e inicio ativo do dia","treino funcional","energia","sem equipamentos","Escaladores","Mountain Climbers","Rotina matinal de treino funcional para energia e condicionamento","Morning Workout Routine for Fat Loss","rotina_matinal_funcional_corpo_inteiro","ref_008","core","pernas conforme exercicio","Referencia: ref_008","Colecao: rotina_matinal_funcional_corpo_inteiro"] |
| Evitar quando | ["dor no peito","falta de ar","tontura","pressao descontrolada","lesao recente","gravidez/pos-parto sem liberacao"] |
| Imagem/chave | ref_008_mov_06 |

### Flexoes de braco

| Campo | Valor |
| --- | --- |
| Slug | ref_008_mov_03 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / HOME_FUNCTIONAL |
| Nivel | 3 |
| Objetivo | Pode ajudar em treino matinal, condicionamento. |
| Descricao curta | Pode ajudar em treino matinal, condicionamento. |
| Como fazer | ["Executar Flexoes de braco com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Remover linguagem de fat loss/transformacao corporal.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/fitness/morning-routine.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO.","Status do video: PLANNED.","Imagens planejadas pendentes: fitness_morning_003_push_ups_step_01_high_plank.png, fitness_morning_003_push_ups_step_02_lowering.png, fitness_morning_003_push_ups_step_03_push_up.png, fitness_morning_003_push_ups_step_04_common_mistake.png, fitness_morning_003_push_ups_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","tontura","gravidez/pos-parto sem liberacao"] |
| Recomendado quando | ["treino de manha","cardio em casa","condicionamento","corpo inteiro","flexoes de braco","fitness","rotina matinal","pausa ai","condicionamento funcional de corpo inteiro em casa","energia, disposicao e inicio ativo do dia","treino funcional","energia","sem equipamentos","Flexoes de braco","Push-ups","Rotina matinal de treino funcional para energia e condicionamento","Morning Workout Routine for Fat Loss","rotina_matinal_funcional_corpo_inteiro","ref_008","core","pernas conforme exercicio","Referencia: ref_008","Colecao: rotina_matinal_funcional_corpo_inteiro"] |
| Evitar quando | ["dor no peito","falta de ar","tontura","pressao descontrolada","lesao recente","gravidez/pos-parto sem liberacao"] |
| Imagem/chave | ref_008_mov_03 |

### Funcional em casa iniciante

| Campo | Valor |
| --- | --- |
| Slug | funcional-em-casa-iniciante |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / HOME_FUNCTIONAL |
| Nivel | 3 |
| Objetivo | Fortalecer o corpo sem equipamento. |
| Descricao curta | Fortalecer o corpo sem equipamento. |
| Como fazer | ["Prepare espaco livre ao redor.","Faca o movimento de forma controlada.","Descanse confortavelmente entre as series.","Pare antes de perder a postura."] |
| Dicas de postura | ["Mantenha coluna neutra.","Controle a velocidade.","Use amplitude confortavel."] |
| Respiracao | ["Inspire na fase mais facil.","Expire no esforco.","Nao prenda a respiracao."] |
| Erros comuns | ["Apressar repeticoes.","Perder alinhamento.","Forcar alem do confortavel."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando sua energia estiver estavel.","Quando voce quiser ativar o corpo em casa."] |
| Evitar quando | ["Evite em dias de energia muito baixa, sono ruim ou estresse alto."] |
| Imagem/chave | funcional-em-casa-iniciante |

### Polichinelos

| Campo | Valor |
| --- | --- |
| Slug | ref_008_mov_01 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / HOME_FUNCTIONAL |
| Nivel | 3 |
| Objetivo | Pode ajudar em treino matinal, condicionamento. |
| Descricao curta | Pode ajudar em treino matinal, condicionamento. |
| Como fazer | ["Executar Polichinelos com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Remover linguagem de fat loss/transformacao corporal.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/fitness/morning-routine.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO.","Status do video: PLANNED.","Imagens planejadas pendentes: fitness_morning_001_jumping_jacks_step_01_start.png, fitness_morning_001_jumping_jacks_step_02_open_jump.png, fitness_morning_001_jumping_jacks_step_03_return.png, fitness_morning_001_jumping_jacks_step_04_common_mistake.png, fitness_morning_001_jumping_jacks_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","tontura","gravidez/pos-parto sem liberacao"] |
| Recomendado quando | ["treino de manha","cardio em casa","condicionamento","corpo inteiro","polichinelos","fitness","rotina matinal","pausa ai","condicionamento funcional de corpo inteiro em casa","energia, disposicao e inicio ativo do dia","treino funcional","energia","sem equipamentos","Polichinelos","Jumping Jacks","Rotina matinal de treino funcional para energia e condicionamento","Morning Workout Routine for Fat Loss","rotina_matinal_funcional_corpo_inteiro","ref_008","core","pernas conforme exercicio","Referencia: ref_008","Colecao: rotina_matinal_funcional_corpo_inteiro"] |
| Evitar quando | ["dor no peito","falta de ar","tontura","pressao descontrolada","lesao recente","gravidez/pos-parto sem liberacao"] |
| Imagem/chave | ref_008_mov_01 |

### Pontes de gluteo

| Campo | Valor |
| --- | --- |
| Slug | ref_008_mov_04 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / HOME_FUNCTIONAL |
| Nivel | 3 |
| Objetivo | Pode ajudar em treino matinal, condicionamento. |
| Descricao curta | Pode ajudar em treino matinal, condicionamento. |
| Como fazer | ["Executar Pontes de gluteo com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Remover linguagem de fat loss/transformacao corporal.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/fitness/morning-routine.","Reaproveitamento visual: REUSED. REUTILIZAR ref_004_mov_08 se ponte equivalente.","Status do video: PLANNED.","Imagens planejadas pendentes: fitness_morning_004_glute_bridges_step_01_lie_down.png, fitness_morning_004_glute_bridges_step_02_hips_lift.png, fitness_morning_004_glute_bridges_step_03_final_bridge.png, fitness_morning_004_glute_bridges_step_04_common_mistake.png, fitness_morning_004_glute_bridges_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","tontura","gravidez/pos-parto sem liberacao"] |
| Recomendado quando | ["treino de manha","cardio em casa","condicionamento","corpo inteiro","pontes de gluteo","fitness","rotina matinal","pausa ai","condicionamento funcional de corpo inteiro em casa","energia, disposicao e inicio ativo do dia","treino funcional","energia","sem equipamentos","Pontes de gluteo","Glute Bridges","Rotina matinal de treino funcional para energia e condicionamento","Morning Workout Routine for Fat Loss","rotina_matinal_funcional_corpo_inteiro","ref_008","core","pernas conforme exercicio","Referencia: ref_008","Colecao: rotina_matinal_funcional_corpo_inteiro"] |
| Evitar quando | ["dor no peito","falta de ar","tontura","pressao descontrolada","lesao recente","gravidez/pos-parto sem liberacao"] |
| Imagem/chave | ref_008_mov_04 |

### Prancha

| Campo | Valor |
| --- | --- |
| Slug | ref_008_mov_05 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / HOME_FUNCTIONAL |
| Nivel | 3 |
| Objetivo | Pode ajudar em treino matinal, condicionamento. |
| Descricao curta | Pode ajudar em treino matinal, condicionamento. |
| Como fazer | ["Executar Prancha com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Remover linguagem de fat loss/transformacao corporal.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/fitness/morning-routine.","Reaproveitamento visual: REUSED. REUTILIZAR ref_003_mov_05 se alta ou ref_006_mov_08 se antebraco.","Status do video: PLANNED.","Imagens planejadas pendentes: fitness_morning_005_plank_step_01_setup.png, fitness_morning_005_plank_step_02_legs_back.png, fitness_morning_005_plank_step_03_final_hold.png, fitness_morning_005_plank_step_04_common_mistake.png, fitness_morning_005_plank_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","tontura","gravidez/pos-parto sem liberacao"] |
| Recomendado quando | ["treino de manha","cardio em casa","condicionamento","corpo inteiro","prancha","fitness","rotina matinal","pausa ai","condicionamento funcional de corpo inteiro em casa","energia, disposicao e inicio ativo do dia","treino funcional","energia","sem equipamentos","Prancha","Plank","Rotina matinal de treino funcional para energia e condicionamento","Morning Workout Routine for Fat Loss","rotina_matinal_funcional_corpo_inteiro","ref_008","core","pernas conforme exercicio","Referencia: ref_008","Colecao: rotina_matinal_funcional_corpo_inteiro"] |
| Evitar quando | ["dor no peito","falta de ar","tontura","pressao descontrolada","lesao recente","gravidez/pos-parto sem liberacao"] |
| Imagem/chave | ref_008_mov_05 |

### Toque no ombro em prancha

| Campo | Valor |
| --- | --- |
| Slug | ref_006_mov_04 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / HOME_FUNCTIONAL |
| Nivel | 3 |
| Objetivo | Pode ajudar a fortalecer core, ombros e estabilidade corporal em prancha. |
| Descricao curta | Em prancha alta, alterna o toque das maos nos ombros mantendo quadris estaveis. |
| Como fazer | ["Apoie maos no chao abaixo dos ombros.","Estenda as pernas para tras e afaste os pes para ganhar estabilidade.","Empurre o chao, mantendo nuca longa e abdomen ativo.","Toque a mao direita no ombro esquerdo.","Volte ao apoio e toque a mao esquerda no ombro direito.","Alterne devagar sem deixar o quadril girar."] |
| Dicas de postura | ["Afaste mais os pes, contraia levemente gluteos e reduza a velocidade ate o tronco ficar estavel.","apoie joelhos no chao se precisar adaptar","nao deixe o quadril cair"] |
| Respiracao | ["Respire curto e continuo, expirando ao tocar o ombro."] |
| Erros comuns | ["Girar quadris, afundar a lombar ou apoiar maos muito a frente dos ombros."] |
| Cuidados | ["apoie joelhos no chao se precisar adaptar","nao deixe o quadril cair","pare se punhos ou ombros doerem","mantenha respiracao fluida"] |
| Contraindicacoes | ["dor no punho","dor no ombro","dor lombar","instabilidade de ombro","lesao recente em punhos ou ombros"] |
| Recomendado quando | ["fortalecer core","estabilidade corporal","equilibrio","fortalecimento geral","treino em casa"] |
| Evitar quando | ["dor no punho","dor no ombro","dor lombar","instabilidade de ombro","lesao recente em punhos ou ombros"] |
| Imagem/chave | ref_006_mov_04 |

### Pular corda iniciante

| Campo | Valor |
| --- | --- |
| Slug | pular-corda-iniciante |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / JUMP_ROPE |
| Nivel | 4 |
| Objetivo | Aprender corda com baixo volume e alternativa sem impacto. |
| Descricao curta | Aprender corda com baixo volume e alternativa sem impacto. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique pular corda iniciante pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | pular-corda-iniciante |

### Marcha leve parada

| Campo | Valor |
| --- | --- |
| Slug | marcha-leve-parada |
| Area | ENERGY |
| Categoria | PHYSICAL / LOW_IMPACT_CARDIO |
| Nivel | 1 |
| Objetivo | Elevar energia com movimento seguro e baixo impacto. |
| Descricao curta | Ative circulacao com passos leves no lugar. |
| Como fazer | ["Fique em pe com espaco ao redor.","Marche no lugar sem saltar.","Balance os bracos de forma leve.","Reduza o ritmo se a respiracao acelerar demais.","Finalize caminhando devagar por alguns segundos."] |
| Dicas de postura | ["Pise macio.","Mantenha joelhos soltos.","Olhe para frente."] |
| Respiracao | ["Respire em ritmo confortavel.","Fale uma frase curta para checar se o ritmo esta leve."] |
| Erros comuns | ["Transformar em treino intenso.","Prender a respiracao.","Subir demais os joelhos."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando houver lentidao fisica sem exaustao intensa.","Antes de voltar para uma tarefa curta."] |
| Evitar quando | ["Evite se houver dor, tontura ou falta de ar incomum."] |
| Imagem/chave | marcha-leve-parada |

### Jumping baixo impacto

| Campo | Valor |
| --- | --- |
| Slug | jumping-baixo-impacto |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / LOW_IMPACT_CARDIO |
| Nivel | 3 |
| Objetivo | Ativar cardio leve sem saltos agressivos. |
| Descricao curta | Ativar cardio leve sem saltos agressivos. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique jumping baixo impacto pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | jumping-baixo-impacto |

### Alongamento cobra

| Campo | Valor |
| --- | --- |
| Slug | ref_010_mov_06 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Pode ajudar em dor leve/desconforto nas costas, rigidez lombar. |
| Descricao curta | Pode ajudar em dor leve/desconforto nas costas, rigidez lombar. |
| Como fazer | ["Executar Alongamento cobra com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura ou tratamento de dor lombar.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/mobility/back-pain-relief.","Reaproveitamento visual: REUSED. REUTILIZAR ref_003/ref_004/ref_007 cobra se equivalente.","Status do video: PLANNED.","Imagens planejadas pendentes: spine_backpain_006_cobra_stretch_step_01_prone.png, spine_backpain_006_cobra_stretch_step_02_hands_under_shoulders.png, spine_backpain_006_cobra_stretch_step_03_chest_lift.png, spine_backpain_006_cobra_stretch_step_04_final.png, spine_backpain_006_cobra_stretch_step_05_common_mistake.png, spine_backpain_006_cobra_stretch_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","dor irradiando","perda controle urinario/intestino","trauma"] |
| Recomendado quando | ["costas rigidas","dor leve nas costas","lombar cansada","postura","alongamento cobra","mobilidade","costas","pausa ai","conforto leve das costas e mobilidade lombar","relaxamento, tranquilidade e reconexao com o corpo","lombar","coluna","relaxamento","muito tempo sentado","Alongamento cobra","Cobra Stretch","Rotina leve para conforto das costas e mobilidade da coluna","Alongamento: Dor nas Costas","rotina_conforto_costas_mobilidade_coluna","ref_010","quadril","core","Referencia: ref_010","Colecao: rotina_conforto_costas_mobilidade_coluna"] |
| Evitar quando | ["dor forte/aguda","dor irradiando","perda de forca","perda controle urinario/intestino","febre","trauma"] |
| Imagem/chave | ref_010_mov_06 |

### Alongamento com toalha

| Campo | Valor |
| --- | --- |
| Slug | ref_009_mov_01 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Pode ajudar em pes cansados, tensao na sola do pe. |
| Descricao curta | Pode ajudar em pes cansados, tensao na sola do pe. |
| Como fazer | ["Executar Alongamento com toalha com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e relaxada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura/tratamento de fascite plantar.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/mobility/foot-plantar-care.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO_CANONICO; colecao especifica de pes.","Status do video: PLANNED.","Imagens planejadas pendentes: foot_plantar_001_toalha_step_01_start.png, foot_plantar_001_toalha_step_02_towel_loop.png, foot_plantar_001_toalha_step_03_gentle_pull.png, foot_plantar_001_toalha_step_04_common_mistake.png, foot_plantar_001_toalha_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","feridas","diabetes com perda de sensibilidade","inchaco/vermelhidao/calor","nao consegue apoiar o pe"] |
| Recomendado quando | ["pes cansados","tensao na sola","rigidez ao acordar","panturrilha rigida","alongamento com toalha","pe","tornozelo","autocuidado","pausa ai","autocuidado dos pes, tornozelos e panturrilhas","cuidado gentil, alivio subjetivo e atencao aos pes","fascia plantar","panturrilha","Alongamento com toalha","Alongamento com Toalha","Rotina de autocuidado para fascia plantar e conforto dos pes","Exercicios em Casa para Fascite Plantar","cuidados_fascia_plantar_pes","ref_009","Referencia: ref_009","Colecao: cuidados_fascia_plantar_pes"] |
| Evitar quando | ["dor forte/aguda","feridas","diabetes com perda de sensibilidade","inchaco/vermelhidao/calor","nao consegue apoiar o pe"] |
| Imagem/chave | ref_009_mov_01 |

### Alongamento da fascia plantar

| Campo | Valor |
| --- | --- |
| Slug | ref_009_mov_05 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Pode ajudar em pes cansados, tensao na sola do pe. |
| Descricao curta | Pode ajudar em pes cansados, tensao na sola do pe. |
| Como fazer | ["Executar Alongamento da fascia plantar com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e relaxada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura/tratamento de fascite plantar.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/mobility/foot-plantar-care.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO_CANONICO; colecao especifica de pes.","Status do video: PLANNED.","Imagens planejadas pendentes: foot_plantar_005_fascia_plantar_step_01_seated_foot_access.png, foot_plantar_005_fascia_plantar_step_02_toes_pull_back.png, foot_plantar_005_fascia_plantar_step_03_final_stretch.png, foot_plantar_005_fascia_plantar_step_04_common_mistake.png, foot_plantar_005_fascia_plantar_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","feridas","diabetes com perda de sensibilidade","inchaco/vermelhidao/calor","nao consegue apoiar o pe"] |
| Recomendado quando | ["pes cansados","tensao na sola","rigidez ao acordar","panturrilha rigida","alongamento da fascia plantar","pe","tornozelo","autocuidado","pausa ai","autocuidado dos pes, tornozelos e panturrilhas","cuidado gentil, alivio subjetivo e atencao aos pes","fascia plantar","panturrilha","Alongamento da fascia plantar","Alongamento da Fascia Plantar","Rotina de autocuidado para fascia plantar e conforto dos pes","Exercicios em Casa para Fascite Plantar","cuidados_fascia_plantar_pes","ref_009","Referencia: ref_009","Colecao: cuidados_fascia_plantar_pes"] |
| Evitar quando | ["dor forte/aguda","feridas","diabetes com perda de sensibilidade","inchaco/vermelhidao/calor","nao consegue apoiar o pe"] |
| Imagem/chave | ref_009_mov_05 |

### Alongamento da panturrilha

| Campo | Valor |
| --- | --- |
| Slug | ref_009_mov_02 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Pode ajudar em pes cansados, tensao na sola do pe. |
| Descricao curta | Pode ajudar em pes cansados, tensao na sola do pe. |
| Como fazer | ["Executar Alongamento da panturrilha com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e relaxada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura/tratamento de fascite plantar.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/mobility/foot-plantar-care.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO_CANONICO; colecao especifica de pes.","Status do video: PLANNED.","Imagens planejadas pendentes: foot_plantar_002_panturrilha_parede_step_01_wall_setup.png, foot_plantar_002_panturrilha_parede_step_02_step_back.png, foot_plantar_002_panturrilha_parede_step_03_final_stretch.png, foot_plantar_002_panturrilha_parede_step_04_common_mistake.png, foot_plantar_002_panturrilha_parede_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","feridas","diabetes com perda de sensibilidade","inchaco/vermelhidao/calor","nao consegue apoiar o pe"] |
| Recomendado quando | ["pes cansados","tensao na sola","rigidez ao acordar","panturrilha rigida","alongamento da panturrilha","pe","tornozelo","autocuidado","pausa ai","autocuidado dos pes, tornozelos e panturrilhas","cuidado gentil, alivio subjetivo e atencao aos pes","fascia plantar","panturrilha","Alongamento da panturrilha","Alongamento da Panturrilha","Rotina de autocuidado para fascia plantar e conforto dos pes","Exercicios em Casa para Fascite Plantar","cuidados_fascia_plantar_pes","ref_009","Referencia: ref_009","Colecao: cuidados_fascia_plantar_pes"] |
| Evitar quando | ["dor forte/aguda","feridas","diabetes com perda de sensibilidade","inchaco/vermelhidao/calor","nao consegue apoiar o pe"] |
| Imagem/chave | ref_009_mov_02 |

### Arco-iris sentado

| Campo | Valor |
| --- | --- |
| Slug | ref_005_mov_03 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Pode ajudar na rotacao suave do tronco e mobilidade da coluna em posicao sentada. |
| Descricao curta | Pode ajudar na rotacao suave do tronco e mobilidade da coluna em posicao sentada. |
| Como fazer | ["Sente-se com uma perna estendida e a outra dobrada. Gire o tronco suavemente para um lado, mantendo a coluna alongada e as maos em posicao de apoio ou oracao."] |
| Dicas de postura | ["Alongar a coluna antes da rotacao e manter o peito aberto.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Respire de forma lenta e confortavel."] |
| Erros comuns | ["Torcer apenas o pescoco e arredondar a coluna."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Nao apresente como promessa de conseguir espacate. Respeite limites individuais e evite em caso de dor aguda, lesao recente, formigamento, dor irradiada ou instabilidade.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/mobility/split-prep.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: mobility_split_003_arco_iris_sentado_step_01_start.png, mobility_split_003_arco_iris_sentado_step_02_knee_bend.png, mobility_split_003_arco_iris_sentado_step_03_hands_prayer.png, mobility_split_003_arco_iris_sentado_step_04_final.png, mobility_split_003_arco_iris_sentado_step_05_common_mistake.png, mobility_split_003_arco_iris_sentado_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor aguda na coluna","torcao dolorosa","lesao recente no quadril","dor forte no quadril","dor no joelho","dor na virilha"] |
| Recomendado quando | ["quero abrir o quadril","quero melhorar flexibilidade","quero treinar espacate","minha virilha e muito encurtada","quero alongar pernas","quero melhorar mobilidade do quadril","quero uma rotina de alongamento para pernas","coluna rigida","quadril travado","mobilidade de tronco","alongamento sentado","torcao sentada","coluna travada","quadril","mobilidade","yoga sentado","Arco-iris sentado","Rainbow","Sequencia para abertura de quadril e flexibilidade lateral","From here / To here","abertura_quadril_flexibilidade_lateral","Abertura de quadril e flexibilidade lateral","coluna","rotacao","yoga","abertura de quadril","virilha","adutores","flexibilidade","espacate lateral","alongamento","pernas","parede","postura","mobilidade de quadril","ref_005","ombros","lombar leve","rotadores de tronco","paravertebrais","gluteos","Pode ajudar na rotacao suave do tronco e mobilidade da coluna em posicao sentada.","paciencia corporal, controle e seguranca no progresso","Referencia: ref_005","Colecao: abertura_quadril_flexibilidade_lateral"] |
| Evitar quando | ["dor aguda na coluna","torcao dolorosa","lesao recente no quadril","dor forte no quadril","dor no joelho","dor na virilha","lesao recente","formigamento","dor irradiada","cirurgia recente","instabilidade articular","gravidez de risco"] |
| Imagem/chave | ref_005_mov_03 |

### Ativacao leve de 3 minutos

| Campo | Valor |
| --- | --- |
| Slug | ativacao-leve-3-minutos |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Acordar o corpo com movimentos simples. |
| Descricao curta | Acordar o corpo com movimentos simples. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique ativacao leve de 3 minutos pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | ativacao-leve-3-minutos |

### Cao-passaro

| Campo | Valor |
| --- | --- |
| Slug | ref_007_mov_04 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Pode ajudar em mobilidade de coluna, rigidez leve. |
| Descricao curta | Pode ajudar em mobilidade de coluna, rigidez leve. |
| Como fazer | ["Executar Cao-passaro com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer tratar hernia ou corrigir coluna.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/mobility/spine-health.","Reaproveitamento visual: REUSED. GERAR_NOVO_CANONICO; reutilizar em REF_010.","Status do video: PLANNED.","Imagens planejadas pendentes: spine_health_004_bird_dog_step_01_tabletop.png, spine_health_004_bird_dog_step_02_extend_right_left.png, spine_health_004_bird_dog_step_03_extend_left_right.png, spine_health_004_bird_dog_step_04_common_mistake.png, spine_health_004_bird_dog_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","trauma/queda"] |
| Recomendado quando | ["costas rigidas","postura","mobilidade de coluna","rotina diaria leve","cao-passaro","mobilidade","coluna","pausa ai","mobilidade e estabilidade postural da coluna","calma, autocuidado e continuidade diaria","estabilidade","rotina diaria","Cao-passaro","Bird Dog","Exercicios para saude da coluna - rotina diaria de mobilidade e fortalecimento leve","Exercises for Spine Health","mobilidade_coluna_saude_postural","ref_007","lombar","toracica","core","quadril","Referencia: ref_007","Colecao: mobilidade_coluna_saude_postural"] |
| Evitar quando | ["dor forte/aguda","dor irradiada","formigamento","perda de forca","trauma/queda","pos-operatorio"] |
| Imagem/chave | ref_007_mov_04 |

### Cao-passaro

| Campo | Valor |
| --- | --- |
| Slug | ref_010_mov_03 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Pode ajudar em dor leve/desconforto nas costas, rigidez lombar. |
| Descricao curta | Pode ajudar em dor leve/desconforto nas costas, rigidez lombar. |
| Como fazer | ["Executar Cao-passaro com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura ou tratamento de dor lombar.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/mobility/back-pain-relief.","Reaproveitamento visual: REUSED. REUTILIZAR ref_007_mov_04 se criado; senao gerar uma vez.","Status do video: PLANNED.","Imagens planejadas pendentes: spine_backpain_003_bird_dog_step_01_tabletop.png, spine_backpain_003_bird_dog_step_02_extend_right_left.png, spine_backpain_003_bird_dog_step_03_extend_left_right.png, spine_backpain_003_bird_dog_step_04_common_mistake.png, spine_backpain_003_bird_dog_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","dor irradiando","perda controle urinario/intestino","trauma"] |
| Recomendado quando | ["costas rigidas","dor leve nas costas","lombar cansada","postura","cao-passaro","mobilidade","costas","pausa ai","conforto leve das costas e mobilidade lombar","relaxamento, tranquilidade e reconexao com o corpo","lombar","coluna","relaxamento","muito tempo sentado","Cao-passaro","Bird Dog","Rotina leve para conforto das costas e mobilidade da coluna","Alongamento: Dor nas Costas","rotina_conforto_costas_mobilidade_coluna","ref_010","quadril","core","Referencia: ref_010","Colecao: rotina_conforto_costas_mobilidade_coluna"] |
| Evitar quando | ["dor forte/aguda","dor irradiando","perda de forca","perda controle urinario/intestino","febre","trauma"] |
| Imagem/chave | ref_010_mov_03 |

### Cobra baixa

| Campo | Valor |
| --- | --- |
| Slug | ref_007_mov_06 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Pode ajudar em mobilidade de coluna, rigidez leve. |
| Descricao curta | Pode ajudar em mobilidade de coluna, rigidez leve. |
| Como fazer | ["Executar Cobra baixa com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer tratar hernia ou corrigir coluna.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/mobility/spine-health.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CONFERIR ref_003/ref_004 cobra; gerar se cobra existente for alta.","Status do video: PLANNED.","Imagens planejadas pendentes: spine_health_006_cobra_low_step_01_prone.png, spine_health_006_cobra_low_step_02_hands_under_shoulders.png, spine_health_006_cobra_low_step_03_low_lift.png, spine_health_006_cobra_low_step_04_final.png, spine_health_006_cobra_low_step_05_common_mistake.png, spine_health_006_cobra_low_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","trauma/queda"] |
| Recomendado quando | ["costas rigidas","postura","mobilidade de coluna","rotina diaria leve","cobra baixa","mobilidade","coluna","pausa ai","mobilidade e estabilidade postural da coluna","calma, autocuidado e continuidade diaria","estabilidade","rotina diaria","Cobra baixa","Cobra Low","Exercicios para saude da coluna - rotina diaria de mobilidade e fortalecimento leve","Exercises for Spine Health","mobilidade_coluna_saude_postural","ref_007","lombar","toracica","core","quadril","Referencia: ref_007","Colecao: mobilidade_coluna_saude_postural"] |
| Evitar quando | ["dor forte/aguda","dor irradiada","formigamento","perda de forca","trauma/queda","pos-operatorio"] |
| Imagem/chave | ref_007_mov_06 |

### Elevacao de calcanhares

| Campo | Valor |
| --- | --- |
| Slug | ref_009_mov_06 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Pode ajudar em pes cansados, tensao na sola do pe. |
| Descricao curta | Pode ajudar em pes cansados, tensao na sola do pe. |
| Como fazer | ["Executar Elevacao de calcanhares com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e relaxada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura/tratamento de fascite plantar.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/mobility/foot-plantar-care.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO_CANONICO; colecao especifica de pes.","Status do video: PLANNED.","Imagens planejadas pendentes: foot_plantar_006_elevacao_calcanhares_step_01_standing.png, foot_plantar_006_elevacao_calcanhares_step_02_heels_up.png, foot_plantar_006_elevacao_calcanhares_step_03_slow_lower.png, foot_plantar_006_elevacao_calcanhares_step_04_common_mistake.png, foot_plantar_006_elevacao_calcanhares_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","feridas","diabetes com perda de sensibilidade","inchaco/vermelhidao/calor","nao consegue apoiar o pe"] |
| Recomendado quando | ["pes cansados","tensao na sola","rigidez ao acordar","panturrilha rigida","elevacao de calcanhares","pe","tornozelo","autocuidado","pausa ai","autocuidado dos pes, tornozelos e panturrilhas","cuidado gentil, alivio subjetivo e atencao aos pes","fascia plantar","panturrilha","Elevacao de calcanhares","Elevacao de Calcanhares","Rotina de autocuidado para fascia plantar e conforto dos pes","Exercicios em Casa para Fascite Plantar","cuidados_fascia_plantar_pes","ref_009","Referencia: ref_009","Colecao: cuidados_fascia_plantar_pes"] |
| Evitar quando | ["dor forte/aguda","feridas","diabetes com perda de sensibilidade","inchaco/vermelhidao/calor","nao consegue apoiar o pe"] |
| Imagem/chave | ref_009_mov_06 |

### Enrolar os dedos

| Campo | Valor |
| --- | --- |
| Slug | ref_009_mov_04 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Pode ajudar em pes cansados, tensao na sola do pe. |
| Descricao curta | Pode ajudar em pes cansados, tensao na sola do pe. |
| Como fazer | ["Executar Enrolar os dedos com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e relaxada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura/tratamento de fascite plantar.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/mobility/foot-plantar-care.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO_CANONICO; colecao especifica de pes.","Status do video: PLANNED.","Imagens planejadas pendentes: foot_plantar_004_enrolar_dedos_step_01_towel_floor.png, foot_plantar_004_enrolar_dedos_step_02_toes_grip.png, foot_plantar_004_enrolar_dedos_step_03_towel_pull.png, foot_plantar_004_enrolar_dedos_step_04_common_mistake.png, foot_plantar_004_enrolar_dedos_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","feridas","diabetes com perda de sensibilidade","inchaco/vermelhidao/calor","nao consegue apoiar o pe"] |
| Recomendado quando | ["pes cansados","tensao na sola","rigidez ao acordar","panturrilha rigida","enrolar os dedos","pe","tornozelo","autocuidado","pausa ai","autocuidado dos pes, tornozelos e panturrilhas","cuidado gentil, alivio subjetivo e atencao aos pes","fascia plantar","panturrilha","Enrolar os dedos","Enrolar os Dedos","Rotina de autocuidado para fascia plantar e conforto dos pes","Exercicios em Casa para Fascite Plantar","cuidados_fascia_plantar_pes","ref_009","Referencia: ref_009","Colecao: cuidados_fascia_plantar_pes"] |
| Evitar quando | ["dor forte/aguda","feridas","diabetes com perda de sensibilidade","inchaco/vermelhidao/calor","nao consegue apoiar o pe"] |
| Imagem/chave | ref_009_mov_04 |

### Gato-vaca

| Campo | Valor |
| --- | --- |
| Slug | ref_007_mov_01 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Pode ajudar em mobilidade de coluna, rigidez leve. |
| Descricao curta | Pode ajudar em mobilidade de coluna, rigidez leve. |
| Como fazer | ["Executar Gato-vaca com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer tratar hernia ou corrigir coluna.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/mobility/spine-health.","Reaproveitamento visual: REUSED. REUTILIZAR ref_004_mov_05/ref_004_mov_06.","Status do video: PLANNED.","Imagens planejadas pendentes: spine_health_001_cat_cow_step_01_tabletop.png, spine_health_001_cat_cow_step_02_cow_pose.png, spine_health_001_cat_cow_step_03_cat_pose.png, spine_health_001_cat_cow_step_04_common_mistake.png, spine_health_001_cat_cow_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","trauma/queda"] |
| Recomendado quando | ["costas rigidas","postura","mobilidade de coluna","rotina diaria leve","gato-vaca","mobilidade","coluna","pausa ai","mobilidade e estabilidade postural da coluna","calma, autocuidado e continuidade diaria","estabilidade","rotina diaria","Gato-vaca","Cat-Cow","Exercicios para saude da coluna - rotina diaria de mobilidade e fortalecimento leve","Exercises for Spine Health","mobilidade_coluna_saude_postural","ref_007","lombar","toracica","core","quadril","Referencia: ref_007","Colecao: mobilidade_coluna_saude_postural"] |
| Evitar quando | ["dor forte/aguda","dor irradiada","formigamento","perda de forca","trauma/queda","pos-operatorio"] |
| Imagem/chave | ref_007_mov_01 |

### Gato-vaca

| Campo | Valor |
| --- | --- |
| Slug | ref_010_mov_01 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Pode ajudar em dor leve/desconforto nas costas, rigidez lombar. |
| Descricao curta | Pode ajudar em dor leve/desconforto nas costas, rigidez lombar. |
| Como fazer | ["Executar Gato-vaca com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura ou tratamento de dor lombar.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/mobility/back-pain-relief.","Reaproveitamento visual: REUSED. REUTILIZAR ref_004_mov_05/ref_004_mov_06 ou ref_007_mov_01.","Status do video: PLANNED.","Imagens planejadas pendentes: spine_backpain_001_cat_cow_step_01_tabletop.png, spine_backpain_001_cat_cow_step_02_cow_pose.png, spine_backpain_001_cat_cow_step_03_cat_pose.png, spine_backpain_001_cat_cow_step_04_common_mistake.png, spine_backpain_001_cat_cow_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","dor irradiando","perda controle urinario/intestino","trauma"] |
| Recomendado quando | ["costas rigidas","dor leve nas costas","lombar cansada","postura","gato-vaca","mobilidade","costas","pausa ai","conforto leve das costas e mobilidade lombar","relaxamento, tranquilidade e reconexao com o corpo","lombar","coluna","relaxamento","muito tempo sentado","Gato-vaca","Cat-Cow","Rotina leve para conforto das costas e mobilidade da coluna","Alongamento: Dor nas Costas","rotina_conforto_costas_mobilidade_coluna","ref_010","quadril","core","Referencia: ref_010","Colecao: rotina_conforto_costas_mobilidade_coluna"] |
| Evitar quando | ["dor forte/aguda","dor irradiando","perda de forca","perda controle urinario/intestino","febre","trauma"] |
| Imagem/chave | ref_010_mov_01 |

### Inclinacao pelvica

| Campo | Valor |
| --- | --- |
| Slug | ref_010_mov_04 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Pode ajudar em dor leve/desconforto nas costas, rigidez lombar. |
| Descricao curta | Pode ajudar em dor leve/desconforto nas costas, rigidez lombar. |
| Como fazer | ["Executar Inclinacao pelvica com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura ou tratamento de dor lombar.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/mobility/back-pain-relief.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO_CANONICO; pode compartilhar com ponte articulada step pelvis_tilt.","Status do video: PLANNED.","Imagens planejadas pendentes: spine_backpain_004_pelvic_tilt_step_01_lie_down.png, spine_backpain_004_pelvic_tilt_step_02_pelvis_tilt.png, spine_backpain_004_pelvic_tilt_step_03_release.png, spine_backpain_004_pelvic_tilt_step_04_common_mistake.png, spine_backpain_004_pelvic_tilt_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","dor irradiando","perda controle urinario/intestino","trauma"] |
| Recomendado quando | ["costas rigidas","dor leve nas costas","lombar cansada","postura","inclinacao pelvica","mobilidade","costas","pausa ai","conforto leve das costas e mobilidade lombar","relaxamento, tranquilidade e reconexao com o corpo","lombar","coluna","relaxamento","muito tempo sentado","Inclinacao pelvica","Pelvic Tilt","Rotina leve para conforto das costas e mobilidade da coluna","Alongamento: Dor nas Costas","rotina_conforto_costas_mobilidade_coluna","ref_010","quadril","core","Referencia: ref_010","Colecao: rotina_conforto_costas_mobilidade_coluna"] |
| Evitar quando | ["dor forte/aguda","dor irradiando","perda de forca","perda controle urinario/intestino","febre","trauma"] |
| Imagem/chave | ref_010_mov_04 |

### Joelho ao peito

| Campo | Valor |
| --- | --- |
| Slug | ref_010_mov_05 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Pode ajudar em dor leve/desconforto nas costas, rigidez lombar. |
| Descricao curta | Pode ajudar em dor leve/desconforto nas costas, rigidez lombar. |
| Como fazer | ["Executar Joelho ao peito com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura ou tratamento de dor lombar.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/mobility/back-pain-relief.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CONFERIR ref_004_mov_15; gerar se for um joelho e REF_004 for dois joelhos.","Status do video: PLANNED.","Imagens planejadas pendentes: spine_backpain_005_knee_to_chest_step_01_lie_down.png, spine_backpain_005_knee_to_chest_step_02_one_knee_to_chest.png, spine_backpain_005_knee_to_chest_step_03_final_hold.png, spine_backpain_005_knee_to_chest_step_04_common_mistake.png, spine_backpain_005_knee_to_chest_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","dor irradiando","perda controle urinario/intestino","trauma"] |
| Recomendado quando | ["costas rigidas","dor leve nas costas","lombar cansada","postura","joelho ao peito","mobilidade","costas","pausa ai","conforto leve das costas e mobilidade lombar","relaxamento, tranquilidade e reconexao com o corpo","lombar","coluna","relaxamento","muito tempo sentado","Joelho ao peito","Knee to Chest","Rotina leve para conforto das costas e mobilidade da coluna","Alongamento: Dor nas Costas","rotina_conforto_costas_mobilidade_coluna","ref_010","quadril","core","Referencia: ref_010","Colecao: rotina_conforto_costas_mobilidade_coluna"] |
| Evitar quando | ["dor forte/aguda","dor irradiando","perda de forca","perda controle urinario/intestino","febre","trauma"] |
| Imagem/chave | ref_010_mov_05 |

### Levantar e respirar

| Campo | Valor |
| --- | --- |
| Slug | levantar-e-respirar |
| Area | ENERGY |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Acordar o corpo com postura e respiracao simples. |
| Descricao curta | Uma ativacao minima para sair da inercia sem pressa. |
| Como fazer | ["Levante devagar.","Apoie bem os pes no chao.","Alongue a coluna sem forcar.","Respire naturalmente por 5 ciclos.","Observe se a energia mudou um pouco."] |
| Dicas de postura | ["Mantenha joelhos destravados.","Deixe o peito aberto sem endurecer.","Solte os ombros."] |
| Respiracao | ["Inspire pelo nariz se for confortavel.","Expire de forma longa.","Nao prenda o ar."] |
| Erros comuns | ["Levantar rapido demais.","Buscar energia alta imediatamente.","Ignorar tontura."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce estiver muito tempo sentado.","Quando a energia parecer travada."] |
| Evitar quando | ["Evite levantar rapido se estiver tonto ou fraco."] |
| Imagem/chave | levantar-e-respirar |

### Massagem com bola

| Campo | Valor |
| --- | --- |
| Slug | ref_009_mov_03 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Pode ajudar em pes cansados, tensao na sola do pe. |
| Descricao curta | Pode ajudar em pes cansados, tensao na sola do pe. |
| Como fazer | ["Executar Massagem com bola com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e relaxada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura/tratamento de fascite plantar.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/mobility/foot-plantar-care.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO_CANONICO; colecao especifica de pes.","Status do video: PLANNED.","Imagens planejadas pendentes: foot_plantar_003_massagem_bola_step_01_ball_setup.png, foot_plantar_003_massagem_bola_step_02_roll_forward_back.png, foot_plantar_003_massagem_bola_step_03_other_foot.png, foot_plantar_003_massagem_bola_step_04_common_mistake.png, foot_plantar_003_massagem_bola_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","feridas","diabetes com perda de sensibilidade","inchaco/vermelhidao/calor","nao consegue apoiar o pe"] |
| Recomendado quando | ["pes cansados","tensao na sola","rigidez ao acordar","panturrilha rigida","massagem com bola","pe","tornozelo","autocuidado","pausa ai","autocuidado dos pes, tornozelos e panturrilhas","cuidado gentil, alivio subjetivo e atencao aos pes","fascia plantar","panturrilha","Massagem com bola","Massagem com Bola","Rotina de autocuidado para fascia plantar e conforto dos pes","Exercicios em Casa para Fascite Plantar","cuidados_fascia_plantar_pes","ref_009","Referencia: ref_009","Colecao: cuidados_fascia_plantar_pes"] |
| Evitar quando | ["dor forte/aguda","feridas","diabetes com perda de sensibilidade","inchaco/vermelhidao/calor","nao consegue apoiar o pe"] |
| Imagem/chave | ref_009_mov_03 |

### Mobilidade de coluna

| Campo | Valor |
| --- | --- |
| Slug | mobilidade-de-coluna |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Destravar a coluna com movimentos leves. |
| Descricao curta | Destravar a coluna com movimentos leves. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique mobilidade de coluna pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | mobilidade-de-coluna |

### Mobilidade de pescoco e ombros

| Campo | Valor |
| --- | --- |
| Slug | mobilidade-pescoco-ombros |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Soltar tensao de pescoco e ombros. |
| Descricao curta | Soltar tensao de pescoco e ombros. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique mobilidade de pescoco e ombros pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | mobilidade-pescoco-ombros |

### Mobilidade rapida para coluna

| Campo | Valor |
| --- | --- |
| Slug | mobilidade-rapida-coluna |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Melhorar conforto da coluna em poucos minutos. |
| Descricao curta | Melhorar conforto da coluna em poucos minutos. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique mobilidade rapida para coluna pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | mobilidade-rapida-coluna |

### Passar a linha na agulha

| Campo | Valor |
| --- | --- |
| Slug | ref_007_mov_03 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Pode ajudar em mobilidade de coluna, rigidez leve. |
| Descricao curta | Pode ajudar em mobilidade de coluna, rigidez leve. |
| Como fazer | ["Executar Passar a linha na agulha com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer tratar hernia ou corrigir coluna.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/mobility/spine-health.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO_CANONICO.","Status do video: PLANNED.","Imagens planejadas pendentes: spine_health_003_thread_the_needle_step_01_tabletop.png, spine_health_003_thread_the_needle_step_02_arm_thread.png, spine_health_003_thread_the_needle_step_03_final.png, spine_health_003_thread_the_needle_step_04_common_mistake.png, spine_health_003_thread_the_needle_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","trauma/queda"] |
| Recomendado quando | ["costas rigidas","postura","mobilidade de coluna","rotina diaria leve","passar a linha na agulha","mobilidade","coluna","pausa ai","mobilidade e estabilidade postural da coluna","calma, autocuidado e continuidade diaria","estabilidade","rotina diaria","Passar a linha na agulha","Thread the Needle","Exercicios para saude da coluna - rotina diaria de mobilidade e fortalecimento leve","Exercises for Spine Health","mobilidade_coluna_saude_postural","ref_007","lombar","toracica","core","quadril","Referencia: ref_007","Colecao: mobilidade_coluna_saude_postural"] |
| Evitar quando | ["dor forte/aguda","dor irradiada","formigamento","perda de forca","trauma/queda","pos-operatorio"] |
| Imagem/chave | ref_007_mov_03 |

### Pausa de energia

| Campo | Valor |
| --- | --- |
| Slug | pausa-de-energia |
| Area | ENERGY |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Ativar energia sem pressao de performance. |
| Descricao curta | Ativar energia sem pressao de performance. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique pausa de energia pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | pausa-de-energia |

### Ponte articulada

| Campo | Valor |
| --- | --- |
| Slug | ref_007_mov_05 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Pode ajudar em mobilidade de coluna, rigidez leve. |
| Descricao curta | Pode ajudar em mobilidade de coluna, rigidez leve. |
| Como fazer | ["Executar Ponte articulada com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer tratar hernia ou corrigir coluna.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/mobility/spine-health.","Reaproveitamento visual: REUSED. REUTILIZAR parcialmente ref_004_mov_08 para final se equivalente.","Status do video: PLANNED.","Imagens planejadas pendentes: spine_health_005_bridge_articulated_step_01_lie_down.png, spine_health_005_bridge_articulated_step_02_pelvis_tilt.png, spine_health_005_bridge_articulated_step_03_hips_lift.png, spine_health_005_bridge_articulated_step_04_final.png, spine_health_005_bridge_articulated_step_05_common_mistake.png, spine_health_005_bridge_articulated_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","trauma/queda"] |
| Recomendado quando | ["costas rigidas","postura","mobilidade de coluna","rotina diaria leve","ponte articulada","mobilidade","coluna","pausa ai","mobilidade e estabilidade postural da coluna","calma, autocuidado e continuidade diaria","estabilidade","rotina diaria","Ponte articulada","Bridge Articulated","Exercicios para saude da coluna - rotina diaria de mobilidade e fortalecimento leve","Exercises for Spine Health","mobilidade_coluna_saude_postural","ref_007","lombar","toracica","core","quadril","Referencia: ref_007","Colecao: mobilidade_coluna_saude_postural"] |
| Evitar quando | ["dor forte/aguda","dor irradiada","formigamento","perda de forca","trauma/queda","pos-operatorio"] |
| Imagem/chave | ref_007_mov_05 |

### Ponte de gluteos

| Campo | Valor |
| --- | --- |
| Slug | ref_010_mov_07 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Pode ajudar em dor leve/desconforto nas costas, rigidez lombar. |
| Descricao curta | Pode ajudar em dor leve/desconforto nas costas, rigidez lombar. |
| Como fazer | ["Executar Ponte de gluteos com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura ou tratamento de dor lombar.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/mobility/back-pain-relief.","Reaproveitamento visual: REUSED. REUTILIZAR ref_004_mov_08 ou ref_007_mov_05.","Status do video: PLANNED.","Imagens planejadas pendentes: spine_backpain_007_glute_bridge_step_01_lie_down.png, spine_backpain_007_glute_bridge_step_02_hips_lift.png, spine_backpain_007_glute_bridge_step_03_final_bridge.png, spine_backpain_007_glute_bridge_step_04_common_mistake.png, spine_backpain_007_glute_bridge_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","dor irradiando","perda controle urinario/intestino","trauma"] |
| Recomendado quando | ["costas rigidas","dor leve nas costas","lombar cansada","postura","ponte de gluteos","mobilidade","costas","pausa ai","conforto leve das costas e mobilidade lombar","relaxamento, tranquilidade e reconexao com o corpo","lombar","coluna","relaxamento","muito tempo sentado","Ponte de gluteos","Glute Bridge","Rotina leve para conforto das costas e mobilidade da coluna","Alongamento: Dor nas Costas","rotina_conforto_costas_mobilidade_coluna","ref_010","quadril","core","Referencia: ref_010","Colecao: rotina_conforto_costas_mobilidade_coluna"] |
| Evitar quando | ["dor forte/aguda","dor irradiando","perda de forca","perda controle urinario/intestino","febre","trauma"] |
| Imagem/chave | ref_010_mov_07 |

### Postura da crianca

| Campo | Valor |
| --- | --- |
| Slug | ref_007_mov_02 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Pode ajudar em mobilidade de coluna, rigidez leve. |
| Descricao curta | Pode ajudar em mobilidade de coluna, rigidez leve. |
| Como fazer | ["Executar Postura da crianca com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer tratar hernia ou corrigir coluna.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/mobility/spine-health.","Reaproveitamento visual: REUSED. REUTILIZAR ref_004_mov_04.","Status do video: PLANNED.","Imagens planejadas pendentes: spine_health_002_child_pose_step_01_kneeling.png, spine_health_002_child_pose_step_02_sit_back.png, spine_health_002_child_pose_step_03_final.png, spine_health_002_child_pose_step_04_common_mistake.png, spine_health_002_child_pose_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","trauma/queda"] |
| Recomendado quando | ["costas rigidas","postura","mobilidade de coluna","rotina diaria leve","postura da crianca","mobilidade","coluna","pausa ai","mobilidade e estabilidade postural da coluna","calma, autocuidado e continuidade diaria","estabilidade","rotina diaria","Postura da crianca","Child's Pose","Exercicios para saude da coluna - rotina diaria de mobilidade e fortalecimento leve","Exercises for Spine Health","mobilidade_coluna_saude_postural","ref_007","lombar","toracica","core","quadril","Referencia: ref_007","Colecao: mobilidade_coluna_saude_postural"] |
| Evitar quando | ["dor forte/aguda","dor irradiada","formigamento","perda de forca","trauma/queda","pos-operatorio"] |
| Imagem/chave | ref_007_mov_02 |

### Postura da crianca

| Campo | Valor |
| --- | --- |
| Slug | ref_010_mov_02 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Pode ajudar em dor leve/desconforto nas costas, rigidez lombar. |
| Descricao curta | Pode ajudar em dor leve/desconforto nas costas, rigidez lombar. |
| Como fazer | ["Executar Postura da crianca com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura ou tratamento de dor lombar.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/mobility/back-pain-relief.","Reaproveitamento visual: REUSED. REUTILIZAR ref_004_mov_04.","Status do video: PLANNED.","Imagens planejadas pendentes: spine_backpain_002_child_pose_step_01_kneeling.png, spine_backpain_002_child_pose_step_02_sit_back.png, spine_backpain_002_child_pose_step_03_final.png, spine_backpain_002_child_pose_step_04_common_mistake.png, spine_backpain_002_child_pose_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","dor irradiando","perda controle urinario/intestino","trauma"] |
| Recomendado quando | ["costas rigidas","dor leve nas costas","lombar cansada","postura","postura da crianca","mobilidade","costas","pausa ai","conforto leve das costas e mobilidade lombar","relaxamento, tranquilidade e reconexao com o corpo","lombar","coluna","relaxamento","muito tempo sentado","Postura da crianca","Child's Pose","Rotina leve para conforto das costas e mobilidade da coluna","Alongamento: Dor nas Costas","rotina_conforto_costas_mobilidade_coluna","ref_010","quadril","core","Referencia: ref_010","Colecao: rotina_conforto_costas_mobilidade_coluna"] |
| Evitar quando | ["dor forte/aguda","dor irradiando","perda de forca","perda controle urinario/intestino","febre","trauma"] |
| Imagem/chave | ref_010_mov_02 |

### Reset postural

| Campo | Valor |
| --- | --- |
| Slug | reset-postural |
| Area | ENERGY |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Melhorar conforto corporal e liberar energia leve. |
| Descricao curta | Ajuste corpo, ombros e coluna para reduzir fadiga acumulada. |
| Como fazer | ["Apoie os pes no chao.","Cresca a coluna como se o topo da cabeca subisse.","Gire os ombros para tras lentamente.","Abra e feche as maos algumas vezes.","Finalize com tres respiracoes lentas."] |
| Dicas de postura | ["Nao force a lombar.","Deixe a cabeca alinhada com a coluna.","Mantenha movimentos pequenos."] |
| Respiracao | ["Inspire ao crescer a coluna.","Expire ao soltar os ombros."] |
| Erros comuns | ["Empinar o peito com tensao.","Forcar o pescoco.","Fazer movimentos rapidos demais."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Depois de muito tempo sentado.","Quando o corpo parecer pesado ou fechado."] |
| Evitar quando | ["Evite movimentos que gerem dor ou formigamento."] |
| Imagem/chave | reset-postural |

### Respiracao + mobilidade

| Campo | Valor |
| --- | --- |
| Slug | respiracao-mobilidade |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 1 |
| Objetivo | Combinar respiracao e movimento leve. |
| Descricao curta | Combinar respiracao e movimento leve. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique respiracao + mobilidade pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | respiracao-mobilidade |

### Agachamento yogue ativo

| Campo | Valor |
| --- | --- |
| Slug | ref_005_mov_01 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 3 |
| Objetivo | Pode ajudar a mobilizar quadris, tornozelos e regiao pelvica. |
| Descricao curta | Pode ajudar a mobilizar quadris, tornozelos e regiao pelvica. |
| Como fazer | ["Afaste os pes, agache lentamente e mantenha o tronco ereto. Apoie as maos no chao ou una as maos a frente do peito, usando os cotovelos para abrir os joelhos com suavidade."] |
| Dicas de postura | ["Manter a coluna longa, joelhos alinhados com os pes e usar apoio se os calcanhares nao alcancarem o chao.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Respire de forma lenta e confortavel."] |
| Erros comuns | ["Arredondar a coluna, levantar calcanhares sem controle ou colapsar os joelhos para dentro."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Nao apresente como promessa de conseguir espacate. Respeite limites individuais e evite em caso de dor aguda, lesao recente, formigamento, dor irradiada ou instabilidade.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/mobility/split-prep.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: mobility_split_001_agachamento_yogue_ativo_step_01_start.png, mobility_split_001_agachamento_yogue_ativo_step_02_descend.png, mobility_split_001_agachamento_yogue_ativo_step_03_low_squat.png, mobility_split_001_agachamento_yogue_ativo_step_04_final.png, mobility_split_001_agachamento_yogue_ativo_step_05_common_mistake.png, mobility_split_001_agachamento_yogue_ativo_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor no joelho","dor no quadril","dor na virilha","instabilidade no tornozelo","dor forte no quadril"] |
| Recomendado quando | ["quero abrir o quadril","quero melhorar flexibilidade","quero treinar espacate","minha virilha e muito encurtada","quero alongar pernas","quero melhorar mobilidade do quadril","quero uma rotina de alongamento para pernas","quadril rigido","virilha encurtada","mobilidade pelvica","preparacao para abertura lateral","alongamento ativo","quadril travado","abrir quadril","virilha","mobilidade","agachamento","espacate","flexibilidade","Agachamento yogue ativo","Active Yogi Squat","Sequencia para abertura de quadril e flexibilidade lateral","From here / To here","abertura_quadril_flexibilidade_lateral","Abertura de quadril e flexibilidade lateral","quadril","yoga","adutores","pernas","abertura lateral","abertura de quadril","espacate lateral","alongamento","parede","postura","mobilidade de quadril","ref_005","joelhos","tornozelos","coluna","gluteos","quadriceps","panturrilhas","Pode ajudar a mobilizar quadris, tornozelos e regiao pelvica.","paciencia corporal, controle e seguranca no progresso","Referencia: ref_005","Colecao: abertura_quadril_flexibilidade_lateral"] |
| Evitar quando | ["dor no joelho","dor no quadril","dor na virilha","instabilidade no tornozelo","lesao recente","dor forte no quadril","formigamento","dor irradiada","cirurgia recente","instabilidade articular","gravidez de risco"] |
| Imagem/chave | ref_005_mov_01 |

### Alongamento lateral

| Campo | Valor |
| --- | --- |
| Slug | ref_005_mov_02 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 3 |
| Objetivo | Alongar lateral do tronco e abrir quadril em base baixa. |
| Descricao curta | Alongar lateral do tronco e abrir quadril em base baixa. |
| Como fazer | ["A partir de uma base lateral baixa, apoie uma mao no chao ou na perna e leve o braco oposto por cima da cabeca, alongando a lateral do corpo."] |
| Dicas de postura | ["Manter peito aberto, coluna longa e distribuir o peso com controle.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Respire de forma lenta e confortavel."] |
| Erros comuns | ["Colapsar o peito e jogar peso demais no joelho."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Nao apresente como promessa de conseguir espacate. Respeite limites individuais e evite em caso de dor aguda, lesao recente, formigamento, dor irradiada ou instabilidade.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/mobility/split-prep.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: mobility_split_002_alongamento_lateral_step_01_start.png, mobility_split_002_alongamento_lateral_step_02_hand_support.png, mobility_split_002_alongamento_lateral_step_03_arm_lift.png, mobility_split_002_alongamento_lateral_step_04_final.png, mobility_split_002_alongamento_lateral_step_05_common_mistake.png, mobility_split_002_alongamento_lateral_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor no joelho","dor no quadril","tontura ao inclinar","dor lateral intensa","dor forte no quadril","dor na virilha"] |
| Recomendado quando | ["quero abrir o quadril","quero melhorar flexibilidade","quero treinar espacate","minha virilha e muito encurtada","quero alongar pernas","quero melhorar mobilidade do quadril","quero uma rotina de alongamento para pernas","tensao lateral do tronco","quadril rigido","mobilidade toracica","preparacao para abertura lateral","alongamento lateral","costelas","quadril","virilha","mobilidade lateral","tronco","Alongamento lateral","Side Stretch","Sequencia para abertura de quadril e flexibilidade lateral","From here / To here","abertura_quadril_flexibilidade_lateral","Abertura de quadril e flexibilidade lateral","lateral","mobilidade","alongamento","yoga","abertura de quadril","adutores","flexibilidade","espacate lateral","pernas","parede","postura","mobilidade de quadril","ref_005","lateral do tronco","ombro","coluna toracica","obliquos","dorsais","gluteos","Alongar lateral do tronco e abrir quadril em base baixa.","paciencia corporal, controle e seguranca no progresso","Referencia: ref_005","Colecao: abertura_quadril_flexibilidade_lateral"] |
| Evitar quando | ["dor no joelho","dor no quadril","tontura ao inclinar","dor lateral intensa","dor forte no quadril","dor na virilha","lesao recente","formigamento","dor irradiada","cirurgia recente","instabilidade articular","gravidez de risco"] |
| Imagem/chave | ref_005_mov_02 |

### Arco-iris com flexao a frente

| Campo | Valor |
| --- | --- |
| Slug | ref_005_mov_04 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 3 |
| Objetivo | Alongar quadril, coluna e posteriores em uma variacao de flexao lateral ou a frente. |
| Descricao curta | Alongar quadril, coluna e posteriores em uma variacao de flexao lateral ou a frente. |
| Como fazer | ["A partir da posicao sentada com uma perna dobrada e outra alongada, incline o tronco a frente ou na diagonal, aproximando o peito do chao com controle."] |
| Dicas de postura | ["Iniciar o movimento pelo quadril, manter respiracao e respeitar amplitude.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Respire de forma lenta e confortavel."] |
| Erros comuns | ["Forcar a cabeca para baixo e perder alinhamento da pelve."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Nao apresente como promessa de conseguir espacate. Respeite limites individuais e evite em caso de dor aguda, lesao recente, formigamento, dor irradiada ou instabilidade.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/mobility/split-prep.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: mobility_split_004_arco_iris_com_flexao_step_01_start.png, mobility_split_004_arco_iris_com_flexao_step_02_arms_forward.png, mobility_split_004_arco_iris_com_flexao_step_03_fold_progression.png, mobility_split_004_arco_iris_com_flexao_step_04_final.png, mobility_split_004_arco_iris_com_flexao_step_05_common_mistake.png, mobility_split_004_arco_iris_com_flexao_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor lombar aguda","ciatica intensa","dor na virilha","dor forte no quadril","dor no joelho"] |
| Recomendado quando | ["quero abrir o quadril","quero melhorar flexibilidade","quero treinar espacate","minha virilha e muito encurtada","quero alongar pernas","quero melhorar mobilidade do quadril","quero uma rotina de alongamento para pernas","rigidez posterior","quadril rigido","alongamento de coluna","preparacao para abertura lateral","flexao a frente","quadril","coluna","virilha","posteriores","mobilidade","Arco-iris com flexao a frente","Rainbow With Fold","Sequencia para abertura de quadril e flexibilidade lateral","From here / To here","abertura_quadril_flexibilidade_lateral","Abertura de quadril e flexibilidade lateral","alongamento","posterior","flexibilidade","abertura de quadril","adutores","espacate lateral","yoga","pernas","parede","postura","mobilidade de quadril","ref_005","lombar","posteriores de coxa","lateral do tronco","isquiotibiais","paravertebrais","obliquos","Alongar quadril, coluna e posteriores em uma variacao de flexao lateral ou a frente.","paciencia corporal, controle e seguranca no progresso","Referencia: ref_005","Colecao: abertura_quadril_flexibilidade_lateral"] |
| Evitar quando | ["dor lombar aguda","ciatica intensa","dor na virilha","dor forte no quadril","dor no joelho","lesao recente","formigamento","dor irradiada","cirurgia recente","instabilidade articular","gravidez de risco"] |
| Imagem/chave | ref_005_mov_04 |

### Cabeca ao joelho

| Campo | Valor |
| --- | --- |
| Slug | ref_005_mov_05 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 3 |
| Objetivo | Alongar posteriores de coxa, lombar e quadril, trabalhando um lado por vez. |
| Descricao curta | Alongar posteriores de coxa, lombar e quadril, trabalhando um lado por vez. |
| Como fazer | ["Sente-se com uma perna estendida e a outra dobrada. Incline o tronco em direcao a perna estendida, alcancando pe, tornozelo ou canela."] |
| Dicas de postura | ["Manter flexao suave no joelho se necessario e aproximar o tronco com controle.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Respire de forma lenta e confortavel."] |
| Erros comuns | ["Arredondar demais a coluna e puxar o corpo a forca."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Nao apresente como promessa de conseguir espacate. Respeite limites individuais e evite em caso de dor aguda, lesao recente, formigamento, dor irradiada ou instabilidade.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/mobility/split-prep.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: mobility_split_005_cabeca_ao_joelho_step_01_start.png, mobility_split_005_cabeca_ao_joelho_step_02_one_knee_bent.png, mobility_split_005_cabeca_ao_joelho_step_03_reach_forward.png, mobility_split_005_cabeca_ao_joelho_step_04_final.png, mobility_split_005_cabeca_ao_joelho_step_05_common_mistake.png, mobility_split_005_cabeca_ao_joelho_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor lombar aguda","dor no joelho","ciatica intensa","dor forte no quadril","dor na virilha"] |
| Recomendado quando | ["quero abrir o quadril","quero melhorar flexibilidade","quero treinar espacate","minha virilha e muito encurtada","quero alongar pernas","quero melhorar mobilidade do quadril","quero uma rotina de alongamento para pernas","rigidez posterior","assimetria entre lados","alongamento sentado","flexibilidade","posteriores","alongar pernas","cabeca ao joelho","lombar","Cabeca ao joelho","Head-to-Knee","Sequencia para abertura de quadril e flexibilidade lateral","From here / To here","abertura_quadril_flexibilidade_lateral","Abertura de quadril e flexibilidade lateral","posterior","coluna","quadril","alongamento","yoga","abertura de quadril","mobilidade","virilha","adutores","espacate lateral","pernas","parede","postura","mobilidade de quadril","ref_005","posteriores de coxa","panturrilha","isquiotibiais","panturrilhas","Alongar posteriores de coxa, lombar e quadril, trabalhando um lado por vez.","paciencia corporal, controle e seguranca no progresso","Referencia: ref_005","Colecao: abertura_quadril_flexibilidade_lateral"] |
| Evitar quando | ["dor lombar aguda","dor no joelho","ciatica intensa","dor forte no quadril","dor na virilha","lesao recente","formigamento","dor irradiada","cirurgia recente","instabilidade articular","gravidez de risco"] |
| Imagem/chave | ref_005_mov_05 |

### Piramide ativa

| Campo | Valor |
| --- | --- |
| Slug | ref_005_mov_07 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 3 |
| Objetivo | Alongar posteriores de coxa e panturrilha com controle ativo. |
| Descricao curta | Alongar posteriores de coxa e panturrilha com controle ativo. |
| Como fazer | ["Em base com uma perna a frente e outra atras, incline o tronco em direcao a perna da frente mantendo controle e alongamento ativo."] |
| Dicas de postura | ["Dobrar levemente o joelho se necessario e alongar coluna a frente.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Respire de forma lenta e confortavel."] |
| Erros comuns | ["Arredondar a lombar e travar joelho."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Nao apresente como promessa de conseguir espacate. Respeite limites individuais e evite em caso de dor aguda, lesao recente, formigamento, dor irradiada ou instabilidade.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/mobility/split-prep.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: mobility_split_007_piramide_ativa_step_01_standing.png, mobility_split_007_piramide_ativa_step_02_staggered_stance.png, mobility_split_007_piramide_ativa_step_03_hip_hinge.png, mobility_split_007_piramide_ativa_step_04_final.png, mobility_split_007_piramide_ativa_step_05_common_mistake.png, mobility_split_007_piramide_ativa_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor lombar aguda","ciatica intensa","dor no joelho","dor forte no quadril","dor na virilha"] |
| Recomendado quando | ["quero abrir o quadril","quero melhorar flexibilidade","quero treinar espacate","minha virilha e muito encurtada","quero alongar pernas","quero melhorar mobilidade do quadril","quero uma rotina de alongamento para pernas","rigidez nas pernas","flexibilidade","mobilidade posterior","preparacao para aberturas","piramide","posterior de coxa","panturrilha","alongamento ativo","Piramide ativa","Active Pyramid","Sequencia para abertura de quadril e flexibilidade lateral","From here / To here","abertura_quadril_flexibilidade_lateral","Abertura de quadril e flexibilidade lateral","posterior","pernas","coluna","yoga","abertura de quadril","mobilidade","virilha","adutores","espacate lateral","alongamento","quadril","parede","postura","mobilidade de quadril","ref_005","posteriores de coxa","panturrilhas","isquiotibiais","gluteos","lombar","Alongar posteriores de coxa e panturrilha com controle ativo.","paciencia corporal, controle e seguranca no progresso","Referencia: ref_005","Colecao: abertura_quadril_flexibilidade_lateral"] |
| Evitar quando | ["dor lombar aguda","ciatica intensa","dor no joelho","dor forte no quadril","dor na virilha","lesao recente","formigamento","dor irradiada","cirurgia recente","instabilidade articular","gravidez de risco"] |
| Imagem/chave | ref_005_mov_07 |

### Postura da deusa

| Campo | Valor |
| --- | --- |
| Slug | ref_005_mov_08 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 3 |
| Objetivo | Fortalecer pernas e abrir quadril em base ampla. |
| Descricao curta | Fortalecer pernas e abrir quadril em base ampla. |
| Como fazer | ["Afaste os pes, gire levemente os pes para fora e flexione os joelhos, mantendo o tronco ereto e joelhos alinhados com os pes."] |
| Dicas de postura | ["Alinhar joelhos com os pes, manter peito aberto e coluna longa.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Respire de forma lenta e confortavel."] |
| Erros comuns | ["Joelhos caindo para dentro e tronco inclinado demais."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Nao apresente como promessa de conseguir espacate. Respeite limites individuais e evite em caso de dor aguda, lesao recente, formigamento, dor irradiada ou instabilidade.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/mobility/split-prep.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: mobility_split_008_postura_deusa_step_01_wide_stance.png, mobility_split_008_postura_deusa_step_02_toes_out.png, mobility_split_008_postura_deusa_step_03_knees_bend.png, mobility_split_008_postura_deusa_step_04_final.png, mobility_split_008_postura_deusa_step_05_common_mistake.png, mobility_split_008_postura_deusa_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor no joelho","dor no quadril","instabilidade","tontura","dor forte no quadril","dor na virilha"] |
| Recomendado quando | ["quero abrir o quadril","quero melhorar flexibilidade","quero treinar espacate","minha virilha e muito encurtada","quero alongar pernas","quero melhorar mobilidade do quadril","quero uma rotina de alongamento para pernas","abertura de quadril","fortalecimento de pernas","mobilidade ativa","postura da deusa","fortalecer pernas","abrir quadril","gluteos","adutores","Postura da deusa","Goddess Pose","Sequencia para abertura de quadril e flexibilidade lateral","From here / To here","abertura_quadril_flexibilidade_lateral","Abertura de quadril e flexibilidade lateral","quadril","pernas","forca","yoga","estabilidade","mobilidade","virilha","flexibilidade","espacate lateral","alongamento","parede","postura","mobilidade de quadril","ref_005","coxas","joelhos","coluna","quadriceps","core","Fortalecer pernas e abrir quadril em base ampla.","paciencia corporal, controle e seguranca no progresso","Referencia: ref_005","Colecao: abertura_quadril_flexibilidade_lateral"] |
| Evitar quando | ["dor no joelho","dor no quadril","instabilidade","tontura","dor forte no quadril","dor na virilha","lesao recente","formigamento","dor irradiada","cirurgia recente","instabilidade articular","gravidez de risco"] |
| Imagem/chave | ref_005_mov_08 |

### Postura do sapo

| Campo | Valor |
| --- | --- |
| Slug | ref_005_mov_06 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / MOBILITY |
| Nivel | 3 |
| Objetivo | Alongar adutores e mobilizar quadril em abertura profunda. |
| Descricao curta | Alongar adutores e mobilizar quadril em abertura profunda. |
| Como fazer | ["Em quatro apoios, afaste os joelhos lateralmente com cuidado, mantendo pes alinhados e quadril recuando levemente ate sentir alongamento na virilha."] |
| Dicas de postura | ["Avancar gradualmente, manter apoio confortavel nos joelhos e controlar a pelve.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Respire de forma lenta e confortavel."] |
| Erros comuns | ["Abrir demais sem controle e deixar lombar colapsar."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Nao apresente como promessa de conseguir espacate. Respeite limites individuais e evite em caso de dor aguda, lesao recente, formigamento, dor irradiada ou instabilidade.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/mobility/split-prep.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: mobility_split_006_postura_sapo_step_01_tabletop.png, mobility_split_006_postura_sapo_step_02_knees_apart.png, mobility_split_006_postura_sapo_step_03_hips_back.png, mobility_split_006_postura_sapo_step_04_final.png, mobility_split_006_postura_sapo_step_05_common_mistake.png, mobility_split_006_postura_sapo_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor no joelho","dor na virilha","lesao no quadril","desconforto agudo","dor forte no quadril"] |
| Recomendado quando | ["quero abrir o quadril","quero melhorar flexibilidade","quero treinar espacate","minha virilha e muito encurtada","quero alongar pernas","quero melhorar mobilidade do quadril","quero uma rotina de alongamento para pernas","quadril rigido","virilha encurtada","preparacao para abertura lateral","sapo","virilha","adutores","abrir quadril","espacate","mobilidade","Postura do sapo","Frog","Sequencia para abertura de quadril e flexibilidade lateral","From here / To here","abertura_quadril_flexibilidade_lateral","Abertura de quadril e flexibilidade lateral","quadril","abertura lateral","abertura de quadril","flexibilidade","espacate lateral","alongamento","yoga","pernas","parede","postura","mobilidade de quadril","ref_005","joelhos","pelve","gluteos","assoalho pelvico indireto","Alongar adutores e mobilizar quadril em abertura profunda.","paciencia corporal, controle e seguranca no progresso","Referencia: ref_005","Colecao: abertura_quadril_flexibilidade_lateral"] |
| Evitar quando | ["dor no joelho","dor na virilha","lesao no quadril","desconforto agudo","dor forte no quadril","lesao recente","formigamento","dor irradiada","cirurgia recente","instabilidade articular","gravidez de risco"] |
| Imagem/chave | ref_005_mov_06 |

### Luta sombra leve

| Campo | Valor |
| --- | --- |
| Slug | luta-sombra-leve |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / SHADOW_BOXING |
| Nivel | 4 |
| Objetivo | Ativar energia e coordenacao sem contato. |
| Descricao curta | Ativar energia e coordenacao sem contato. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique luta sombra leve pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | luta-sombra-leve |

### Posicao com apoio para joelhos

| Campo | Valor |
| --- | --- |
| Slug | ref_002_mov_08 |
| Area | SLEEP |
| Categoria | PHYSICAL / SLEEP_SUPPORT |
| Nivel | 1 |
| Objetivo | Pode ajudar a reduzir desconforto nos joelhos ao apoiar as pernas durante o descanso. |
| Descricao curta | Essa posicao usa um apoio confortavel sob os joelhos e pode favorecer relaxamento das pernas durante o repouso. |
| Como fazer | ["Prepare o travesseiro.","Deite de barriga para cima.","Posicione o travesseiro sob os joelhos.","Relaxe as pernas.","Respire de forma natural."] |
| Dicas de postura | ["deitado de barriga para cima","Use apoio confortavel sob os joelhos, sem dobrar exageradamente as pernas.","Evite se houver inchaco importante, lesao recente, bloqueio articular ou dor apos queda."] |
| Respiracao | ["Natural, deixando as pernas pesarem no apoio."] |
| Erros comuns | ["Deixar os joelhos sem apoio quando ha desconforto ou colocar apoio alto demais."] |
| Cuidados | ["Evite se houver inchaco importante, lesao recente, bloqueio articular ou dor apos queda.","Nao substitui orientacao profissional. Pare e procure avaliacao se houver dor forte, dor aguda, formigamento, perda de forca, dor no peito, falta de ar, febre, trauma recente, dor irradiada intensa, inchaco importante ou sintomas neurologicos.","Asset principal: GENERATED_PENDING_REVIEW. Video: PLANNED.","Imagens instrucionais cadastradas para revisao."] |
| Contraindicacoes | ["dor intensa no joelho","inchaco importante","lesao recente","bloqueio articular","dor apos queda","dor forte","dor aguda","formigamento","perda de forca","dor no peito","falta de ar","febre","trauma recente","pos-operatorio","gravidez de risco","tontura intensa","dor irradiada intensa","sintomas neurologicos","dor intensa"] |
| Recomendado quando | ["estou com joelho dolorido","joelhos cansados para dormir","preciso apoiar as pernas","dor leve no joelho","joelhos cansados","desconforto ao dormir de barriga para cima","tensao nas pernas","necessidade de apoio sob joelhos","joelho","dor no joelho","pernas cansadas","apoio nos joelhos","relaxar pernas","dormir melhor","dor leve no joelho","pernas cansadas","tensao posterior das pernas","joelhos","pernas","lombar leve","sono","joelhos","pernas","travesseiro","relaxamento","conforto dos joelhos e relaxamento das pernas","repousar com apoio simples e seguro","Colecao: sono_inteligente_apoio_corporal"] |
| Evitar quando | ["dor intensa","inchaco importante","lesao recente","bloqueio articular","dor apos queda"] |
| Imagem/chave | ref_002_mov_08 |

### Posicao com apoio para lombar

| Campo | Valor |
| --- | --- |
| Slug | ref_002_mov_04 |
| Area | SLEEP |
| Categoria | PHYSICAL / SLEEP_SUPPORT |
| Nivel | 1 |
| Objetivo | Pode ajudar a reduzir tensao lombar ao apoiar os joelhos em posicao deitada. |
| Descricao curta | Essa posicao pode ajudar a reduzir tensao lombar com um apoio confortavel sob os joelhos, sem forcar alongamento ou amplitude. |
| Como fazer | ["Prepare um travesseiro sob os joelhos.","Deite de barriga para cima.","Ajuste o apoio sob os joelhos.","Deixe a lombar confortavel.","Respire de forma lenta."] |
| Dicas de postura | ["deitado de barriga para cima","Eleve levemente os joelhos com apoio confortavel.","Nao force a posicao se a dor irradiar para a perna ou aumentar."] |
| Respiracao | ["Abdominal lenta."] |
| Erros comuns | ["Deixar as pernas completamente estendidas quando isso aumenta a tensao lombar."] |
| Cuidados | ["Nao force a posicao se a dor irradiar para a perna ou aumentar.","Nao substitui orientacao profissional. Pare e procure avaliacao se houver dor forte, dor aguda, formigamento, perda de forca, dor no peito, falta de ar, febre, trauma recente, dor irradiada intensa, inchaco importante ou sintomas neurologicos.","Asset principal: GENERATED_PENDING_REVIEW. Video: PLANNED.","Imagens instrucionais cadastradas para revisao."] |
| Contraindicacoes | ["dor lombar aguda intensa","dor irradiando para perna","formigamento","perda de forca","lesao recente","dor forte","dor aguda","dor no peito","falta de ar","febre","trauma recente","pos-operatorio","gravidez de risco","tontura intensa","dor irradiada intensa","inchaco importante","sintomas neurologicos"] |
| Recomendado quando | ["estou com dor na lombar","costas travadas para dormir","tensao lombar no fim do dia","lombar cansada","costas travadas","tensao apos ficar sentado","relaxamento antes de dormir","rigidez leve","lombar","dor nas costas","costas travadas","tensao lombar","dormir melhor","relaxar antes de dormir","lombar cansada","rigidez leve","tensao apos ficar sentado","lombar","quadril","pelve","joelhos","sono","lombar","relaxamento","travesseiro","descanso","iniciante","conforto lombar e relaxamento da pelve","descansar com mais suporte corporal","Colecao: sono_inteligente_apoio_corporal"] |
| Evitar quando | ["dor forte","dor irradiada intensa","formigamento","perda de forca","trauma recente"] |
| Imagem/chave | ref_002_mov_04 |

### Posicao de apoio para pescoco

| Campo | Valor |
| --- | --- |
| Slug | ref_002_mov_05 |
| Area | SLEEP |
| Categoria | PHYSICAL / SLEEP_SUPPORT |
| Nivel | 1 |
| Objetivo | Pode ajudar a manter o pescoco mais neutro durante o descanso. |
| Descricao curta | Essa posicao usa apoio para preencher o espaco natural do pescoco e pode favorecer mais conforto durante o descanso. |
| Como fazer | ["Escolha um travesseiro ou suporte confortavel.","Deite e posicione a cabeca.","Ajuste a altura do apoio.","Mantenha pescoco e coluna alinhados.","Respire sem forcar."] |
| Dicas de postura | ["de lado ou de barriga para cima","Ajuste a altura para manter o pescoco alinhado com a coluna.","Evite manter a posicao se houver tontura, dormencia ou dor irradiada."] |
| Respiracao | ["Natural e sem esforco."] |
| Erros comuns | ["Usar travesseiro muito alto ou muito baixo."] |
| Cuidados | ["Evite manter a posicao se houver tontura, dormencia ou dor irradiada.","Nao substitui orientacao profissional. Pare e procure avaliacao se houver dor forte, dor aguda, formigamento, perda de forca, dor no peito, falta de ar, febre, trauma recente, dor irradiada intensa, inchaco importante ou sintomas neurologicos.","Asset principal: GENERATED_PENDING_REVIEW. Video: PLANNED.","Imagens instrucionais cadastradas para revisao."] |
| Contraindicacoes | ["torcicolo severo","dormencia nos bracos","dor irradiada","lesao cervical recente","tontura intensa","dor forte","dor aguda","formigamento","perda de forca","dor no peito","falta de ar","febre","trauma recente","pos-operatorio","gravidez de risco","dor irradiada intensa","inchaco importante","sintomas neurologicos","dormencia","lesao recente"] |
| Recomendado quando | ["meu pescoco esta travado","dor no pescoco para dormir","nuca cansada","dor leve no pescoco","tensao cervical","nuca cansada","dificuldade de achar posicao para dormir","relaxamento noturno","pescoco","cervical","nuca","dor no pescoco","torcicolo leve","tensao cervical","tensao cervical","nuca cansada","dificuldade para achar posicao","pescoco","cervical","nuca","ombros","sono","pescoco","cervical","travesseiro","relaxamento","alinhamento cervical confortavel","descansar com menos vigilancia corporal","Colecao: sono_inteligente_apoio_corporal"] |
| Evitar quando | ["dormencia","dor irradiada","tontura intensa","lesao recente","perda de forca"] |
| Imagem/chave | ref_002_mov_05 |

### Posicao de descanso para dor de cabeca tensional

| Campo | Valor |
| --- | --- |
| Slug | ref_002_mov_03 |
| Area | SLEEP |
| Categoria | PHYSICAL / SLEEP_SUPPORT |
| Nivel | 1 |
| Objetivo | Pode ajudar no relaxamento de pescoco e ombros em momentos de dor de cabeca associada a tensao. |
| Descricao curta | Essa posicao favorece o descanso com apoio para cabeca e joelhos, ajudando a relaxar pescoco, ombros e lombar em momentos de tensao leve. |
| Como fazer | ["Prepare os travesseiros.","Deite de barriga para cima.","Ajuste o travesseiro sob os joelhos.","Solte os ombros.","Respire com mandibula e testa relaxadas."] |
| Dicas de postura | ["deitado de barriga para cima","Ajuste a altura do travesseiro para manter o pescoco neutro.","Se a dor de cabeca for subita, muito forte ou vier com sintomas neurologicos, procure atendimento."] |
| Respiracao | ["Lenta, relaxando mandibula, ombros e testa."] |
| Erros comuns | ["Usar travesseiro alto demais, deixando o pescoco flexionado."] |
| Cuidados | ["Se a dor de cabeca for subita, muito forte ou vier com sintomas neurologicos, procure atendimento.","Nao substitui orientacao profissional. Pare e procure avaliacao se houver dor forte, dor aguda, formigamento, perda de forca, dor no peito, falta de ar, febre, trauma recente, dor irradiada intensa, inchaco importante ou sintomas neurologicos.","Asset principal: GENERATED_PENDING_REVIEW. Video: PLANNED.","Imagens instrucionais cadastradas para revisao."] |
| Contraindicacoes | ["dor de cabeca subita e intensa","visao turva","tontura forte","febre","confusao mental","trauma recente","dor forte","dor aguda","formigamento","perda de forca","dor no peito","falta de ar","pos-operatorio","gravidez de risco","tontura intensa","dor irradiada intensa","inchaco importante","sintomas neurologicos","dor subita e intensa","confusao"] |
| Recomendado quando | ["estou com dor de cabeca","minha nuca esta tensa","quero descansar com apoio","dor de cabeca tensional leve","tensao na nuca","pescoco cansado","necessidade de descanso","relaxamento com apoio sob joelhos","dor de cabeca","cefaleia tensional","nuca","pescoco tenso","relaxar","descansar","cabeca pesada","tensao na nuca","dor de cabeca leve","pescoco cansado","cabeca","cervical","ombros","lombar leve","sono","cabeca","cervical","relaxamento","dor leve","travesseiro","relaxamento cervical e apoio lombar leve","descansar com menos esforco e menos tensao","Colecao: sono_inteligente_apoio_corporal"] |
| Evitar quando | ["dor subita e intensa","febre","confusao","visao turva","trauma recente"] |
| Imagem/chave | ref_002_mov_03 |

### Posicao elevada para parte superior das costas

| Campo | Valor |
| --- | --- |
| Slug | ref_002_mov_02 |
| Area | SLEEP |
| Categoria | PHYSICAL / SLEEP_SUPPORT |
| Nivel | 1 |
| Objetivo | Pode ajudar a reduzir tensao na parte superior das costas usando apoio sob a regiao toracica. |
| Descricao curta | Essa posicao usa um apoio sob a parte superior das costas para criar uma abertura suave no peito e favorecer relaxamento da regiao toracica. |
| Como fazer | ["Prepare o travesseiro ou apoio atras do tronco.","Deite lentamente sobre o apoio.","Ajuste o travesseiro sob a cabeca.","Relaxe ombros e bracos.","Respire suavemente."] |
| Dicas de postura | ["deitado de barriga para cima","Mantenha o apoio na regiao toracica, com cabeca e pescoco confortaveis.","Nao use o apoio se ele aumentar dor, tontura ou desconforto respiratorio."] |
| Respiracao | ["Lenta, ampliando suavemente o peito."] |
| Erros comuns | ["Colocar o apoio muito baixo, comprimindo a lombar."] |
| Cuidados | ["Nao use o apoio se ele aumentar dor, tontura ou desconforto respiratorio.","Nao substitui orientacao profissional. Pare e procure avaliacao se houver dor forte, dor aguda, formigamento, perda de forca, dor no peito, falta de ar, febre, trauma recente, dor irradiada intensa, inchaco importante ou sintomas neurologicos.","Asset principal: GENERATED_PENDING_REVIEW. Video: PLANNED.","Imagens instrucionais cadastradas para revisao."] |
| Contraindicacoes | ["dor aguda na coluna","tontura","dificuldade respiratoria","dor no peito","lesao recente","dor forte","dor aguda","formigamento","perda de forca","falta de ar","febre","trauma recente","pos-operatorio","gravidez de risco","tontura intensa","dor irradiada intensa","inchaco importante","sintomas neurologicos"] |
| Recomendado quando | ["minhas costas estao tensas","dor entre as escapulas","quero relaxar antes de dormir","tensao na parte superior das costas","desconforto entre as escapulas","postura fechada","sensacao de costas cansadas","relaxamento antes de dormir","parte superior das costas","costas altas","dor entre escapulas","postura","peito fechado","ombros tensos","tensao entre escapulas","postura fechada","ombros tensos","parte superior das costas","coluna toracica","escapulas","peito","sono","costas","toracica","postura","relaxamento","travesseiro","conforto toracico e abertura suave do peito","desacelerar com apoio e seguranca","Colecao: sono_inteligente_apoio_corporal"] |
| Evitar quando | ["dor aguda","dor no peito","falta de ar","tontura","trauma recente"] |
| Imagem/chave | ref_002_mov_02 |

### Posicao elevada para sinusite ou congestao

| Campo | Valor |
| --- | --- |
| Slug | ref_002_mov_06 |
| Area | SLEEP |
| Categoria | PHYSICAL / SLEEP_SUPPORT |
| Nivel | 1 |
| Objetivo | Pode ajudar no conforto respiratorio ao descansar com o tronco levemente elevado. |
| Descricao curta | Essa posicao elevada pode favorecer conforto ao descansar com congestao leve, mantendo tronco e cabeca apoiados sem dobrar demais o pescoco. |
| Como fazer | ["Prepare travesseiros em inclinacao.","Deite com o tronco parcialmente elevado.","Ajuste cabeca e ombros.","Mantenha o pescoco confortavel.","Respire de forma natural."] |
| Dicas de postura | ["deitado de barriga para cima com tronco elevado","Eleve tambem a parte superior do tronco para manter alinhamento mais confortavel.","Se houver falta de ar, febre alta ou piora respiratoria, procure atendimento."] |
| Respiracao | ["Natural, sem tentar forcar entrada de ar."] |
| Erros comuns | ["Elevar apenas a cabeca, dobrando o pescoco."] |
| Cuidados | ["Se houver falta de ar, febre alta ou piora respiratoria, procure atendimento.","Nao substitui orientacao profissional. Pare e procure avaliacao se houver dor forte, dor aguda, formigamento, perda de forca, dor no peito, falta de ar, febre, trauma recente, dor irradiada intensa, inchaco importante ou sintomas neurologicos.","Asset principal: PLANNED. Video: PLANNED.","Imagens pendentes: sleep_support_006_sinusite_elevada_step_01_prepare.png, sleep_support_006_sinusite_elevada_step_05_common_mistake.png."] |
| Contraindicacoes | ["falta de ar intensa","febre alta","dor facial forte","tontura intensa","piora respiratoria","dor forte","dor aguda","formigamento","perda de forca","dor no peito","falta de ar","febre","trauma recente","pos-operatorio","gravidez de risco","dor irradiada intensa","inchaco importante","sintomas neurologicos"] |
| Recomendado quando | ["estou com sinusite","nariz entupido para dormir","quero deitar mais elevado","congestao nasal leve","sinusite com desconforto leve","sensacao de cabeca pesada","dificuldade de deitar totalmente plano","descanso elevado","sinusite","congestao","nariz entupido","respirar melhor","cabeca pesada","dormir elevado","nariz entupido","cabeca pesada","desconforto leve ao deitar plano","cabeca","vias respiratorias superiores","pescoco","tronco","sono","respiracao","sinusite","congestao","posicao elevada","conforto respiratorio e alinhamento elevado","descansar com menos desconforto durante congestao leve","Colecao: sono_inteligente_apoio_corporal"] |
| Evitar quando | ["falta de ar","febre","piora respiratoria","dor facial forte","tontura intensa"] |
| Imagem/chave | ref_002_mov_06 |

### Posicao lateral para ciatica ou quadril

| Campo | Valor |
| --- | --- |
| Slug | ref_002_mov_07 |
| Area | SLEEP |
| Categoria | PHYSICAL / SLEEP_SUPPORT |
| Nivel | 1 |
| Objetivo | Pode ajudar a reduzir tensao no quadril e melhorar alinhamento das pernas durante o descanso lateral. |
| Descricao curta | Essa posicao lateral usa um travesseiro entre os joelhos para ajudar no alinhamento de quadris e pernas durante o descanso. |
| Como fazer | ["Deite de lado.","Dobre levemente os joelhos.","Coloque um travesseiro entre os joelhos.","Alinhe joelhos e quadris.","Respire com a coluna confortavel."] |
| Dicas de postura | ["deitado de lado","Mantenha joelhos alinhados com o travesseiro entre eles.","Evite se houver dor irradiada forte, perda de forca ou formigamento persistente."] |
| Respiracao | ["Natural e lenta, sem prender o ar."] |
| Erros comuns | ["Deixar o joelho de cima cair a frente, torcendo a pelve."] |
| Cuidados | ["Evite se houver dor irradiada forte, perda de forca ou formigamento persistente.","Nao substitui orientacao profissional. Pare e procure avaliacao se houver dor forte, dor aguda, formigamento, perda de forca, dor no peito, falta de ar, febre, trauma recente, dor irradiada intensa, inchaco importante ou sintomas neurologicos.","Asset principal: GENERATED_PENDING_REVIEW. Video: PLANNED.","Imagens instrucionais cadastradas para revisao."] |
| Contraindicacoes | ["dor ciatica intensa","perda de forca","formigamento persistente","dor irradiada forte","lesao recente de quadril ou coluna","dor forte","dor aguda","formigamento","dor no peito","falta de ar","febre","trauma recente","pos-operatorio","gravidez de risco","tontura intensa","dor irradiada intensa","inchaco importante","sintomas neurologicos","lesao recente"] |
| Recomendado quando | ["meu quadril incomoda ao deitar","ciatica leve para dormir","preciso de apoio entre joelhos","desconforto leve no quadril","tensao glutea","ciatica leve sem sinais de alerta","desconforto ao dormir de lado","necessidade de apoio entre joelhos","ciatica","quadril","dor no quadril","gluteo","lombar","travesseiro entre joelhos","quadril incomoda ao deitar","tensao glutea","ciatica leve sem alerta","quadril","gluteos","lombar","joelhos","sono","quadril","ciatica leve","apoio entre joelhos","relaxamento","alinhamento de pelve e conforto lateral","dormir de lado com mais suporte","Colecao: sono_inteligente_apoio_corporal"] |
| Evitar quando | ["dor irradiada intensa","perda de forca","formigamento","lesao recente","dor forte"] |
| Imagem/chave | ref_002_mov_07 |

### Posicao lateral para ombro

| Campo | Valor |
| --- | --- |
| Slug | ref_002_mov_01 |
| Area | SLEEP |
| Categoria | PHYSICAL / SLEEP_SUPPORT |
| Nivel | 1 |
| Objetivo | Pode ajudar a reduzir a sobrecarga no ombro sensivel durante o sono lateral. |
| Descricao curta | A posicao lateral com travesseiro abracado pode ajudar a reduzir a sobrecarga no ombro durante o descanso. Deite sobre o lado sem dor e apoie o braco superior em um travesseiro a frente do corpo para manter o ombro mais confortavel. |
| Como fazer | ["Deite de lado sobre o lado sem dor.","Ajuste o travesseiro sob a cabeca.","Coloque um travesseiro a frente do peito.","Abrace o travesseiro, mantendo o ombro superior apoiado.","Relaxe o pescoco e respire devagar."] |
| Dicas de postura | ["deitado de lado, sobre o lado sem dor","Use um travesseiro abracado para sustentar o braco e manter o ombro mais neutro.","Nao force a posicao se aumentar a dor."] |
| Respiracao | ["Lenta e nasal, sem esforco."] |
| Erros comuns | ["Dormir sobre o ombro dolorido ou deixar o braco superior cair a frente do corpo sem apoio."] |
| Cuidados | ["Nao force a posicao se aumentar a dor.","Nao substitui orientacao profissional. Pare e procure avaliacao se houver dor forte, dor aguda, formigamento, perda de forca, dor no peito, falta de ar, febre, trauma recente, dor irradiada intensa, inchaco importante ou sintomas neurologicos.","Asset principal: GENERATED_PENDING_REVIEW. Video: PLANNED.","Imagens instrucionais cadastradas para revisao."] |
| Contraindicacoes | ["dor intensa","trauma recente","dormencia","formigamento","perda de forca","dor forte","dor aguda","dor no peito","falta de ar","febre","pos-operatorio","gravidez de risco","tontura intensa","dor irradiada intensa","inchaco importante","sintomas neurologicos","lesao recente"] |
| Recomendado quando | ["estou com dor no ombro","nao consigo dormir de lado","meus ombros estao tensos","desconforto leve no ombro","tensao nos ombros","dificuldade para dormir de lado","necessidade de apoio para braco e tronco","relaxamento antes de dormir","dor no ombro","ombro dolorido","ombro pesado","dormir de lado","ombros tensos","tensao no ombro","dor leve no ombro","tensao escapular","desconforto para dormir","ombros","pescoco","coluna toracica","braco superior","sono","ombro","relaxamento","apoio com travesseiro","dor leve","posicao lateral","conforto articular e relaxamento muscular","dormir com mais seguranca e conforto","Colecao: sono_inteligente_apoio_corporal"] |
| Evitar quando | ["dor forte","lesao recente","dormencia","formigamento","perda de forca"] |
| Imagem/chave | ref_002_mov_01 |

### 90/90 de quadril

| Campo | Valor |
| --- | --- |
| Slug | noventa-noventa |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em quadril. |
| Descricao curta | Reduzir rigidez e melhorar conforto em quadril. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de quadril, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de quadril e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["muito tempo sentado","antes do treino","rigidez matinal"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | noventa-noventa |

### Abertura dos dedos

| Campo | Valor |
| --- | --- |
| Slug | abertura-dedos |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em maos, dedos e punhos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em maos, dedos e punhos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de punhos e dedos, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de dedos, metacarpofalangicas e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["maos e punhos cansados","foco no trabalho","muito tempo sentado"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | abertura-dedos |

### Abertura dos dedos do pe

| Campo | Valor |
| --- | --- |
| Slug | abertura-dedos-pe |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em pes e dedos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em pes e dedos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de pes, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de dedos e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["caminhada ou corrida","relaxamento","rigidez matinal"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | abertura-dedos-pe |

### Alfabeto com tornozelo

| Campo | Valor |
| --- | --- |
| Slug | alfabeto-tornozelo |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em tornozelos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em tornozelos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de tornozelos, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de tornozelo e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["caminhada ou corrida","antes do treino","mobilidade geral"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | alfabeto-tornozelo |

### Alongamento de pernas

| Campo | Valor |
| --- | --- |
| Slug | alongamento-de-pernas |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Soltar pernas e reduzir rigidez. |
| Descricao curta | Soltar pernas e reduzir rigidez. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique alongamento de pernas pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | alongamento-de-pernas |

### Alongamento leve

| Campo | Valor |
| --- | --- |
| Slug | alongamento-leve |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Soltar tensao do corpo com seguranca. |
| Descricao curta | Soltar tensao do corpo com seguranca. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique alongamento leve pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | alongamento-leve |

### Alongamento leve de pernas

| Campo | Valor |
| --- | --- |
| Slug | alongamento-leve-pernas |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Soltar pernas com permanencia confortavel. |
| Descricao curta | Soltar pernas com permanencia confortavel. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique alongamento leve de pernas pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | alongamento-leve-pernas |

### Arco plantar com bola

| Campo | Valor |
| --- | --- |
| Slug | arco-plantar-bola |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em pes e dedos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em pes e dedos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de pes, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de pe, dedos e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["caminhada ou corrida","relaxamento","rigidez matinal"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | arco-plantar-bola |

### Bascula pelvica

| Campo | Valor |
| --- | --- |
| Slug | bascula-pelvica |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em lombar. |
| Descricao curta | Reduzir rigidez e melhorar conforto em lombar. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de lombar, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de lombar, pelve e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["lombar rigida","muito tempo sentado","antes de dormir"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | bascula-pelvica |

### Bom dia de mobilidade

| Campo | Valor |
| --- | --- |
| Slug | bom-dia-mobilidade |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em posterior de coxa. |
| Descricao curta | Reduzir rigidez e melhorar conforto em posterior de coxa. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de posterior de coxa, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de quadril e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["caminhada ou corrida","depois do treino","lombar rigida"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | bom-dia-mobilidade |

### Circulos de punho

| Campo | Valor |
| --- | --- |
| Slug | circulos-punho-mobilidade |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em maos, dedos e punhos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em maos, dedos e punhos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de punhos e dedos, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de punho e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["maos e punhos cansados","foco no trabalho","muito tempo sentado"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | circulos-punho-mobilidade |

### Circulos de quadril

| Campo | Valor |
| --- | --- |
| Slug | circulos-quadril |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em quadril. |
| Descricao curta | Reduzir rigidez e melhorar conforto em quadril. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de quadril, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de quadril e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["muito tempo sentado","antes do treino","rigidez matinal"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | circulos-quadril |

### Circulos de tornozelo

| Campo | Valor |
| --- | --- |
| Slug | circulos-tornozelo |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em tornozelos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em tornozelos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de tornozelos, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de tornozelo e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["caminhada ou corrida","antes do treino","mobilidade geral"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | circulos-tornozelo |

### Circulos lentos de ombros

| Campo | Valor |
| --- | --- |
| Slug | elevacao-ombros-circulos |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em ombros e deltoides. |
| Descricao curta | Reduzir rigidez e melhorar conforto em ombros e deltoides. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de ombros, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de ombro, escapula e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["tensao nos ombros","foco no trabalho","muito tempo sentado"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | elevacao-ombros-circulos |

### Dorsiflexao na parede

| Campo | Valor |
| --- | --- |
| Slug | dorsiflexao-parede |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em tornozelos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em tornozelos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de tornozelos, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de tornozelo e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["caminhada ou corrida","antes do treino","mobilidade geral"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | dorsiflexao-parede |

### Extensao dos flexores do punho

| Campo | Valor |
| --- | --- |
| Slug | extensao-flexores-punho |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir tensao da face anterior do antebraco. |
| Descricao curta | Reduzir tensao da face anterior do antebraco. |
| Como fazer | ["Estenda o braco a frente com a palma para cima.","Com a outra mao, puxe suavemente os dedos para baixo e para tras.","Mantenha o cotovelo estendido sem travar.","Respire e sustente tensao confortavel."] |
| Dicas de postura | ["Cotovelo semiflexionado.","Dedos mais estendidos, sem aumentar dor.","Puxar na palma e na face anterior do antebraco."] |
| Respiracao | ["Lenta, sem prender o ar."] |
| Erros comuns | ["dobrar o cotovelo","puxar com forca","elevar o ombro"] |
| Cuidados | ["Interrompa se houver dormencia.","Interrompa se houver choque.","Interrompa se houver dor irradiada.","Alonga tendoes flexores que passam pela regiao anterior do punho."] |
| Contraindicacoes | ["formigamento","dor no tunel do carpo","cirurgia recente"] |
| Recomendado quando | ["teclado","mouse","celular","musculacao"] |
| Evitar quando | ["formigamento","dor no tunel do carpo","cirurgia recente"] |
| Imagem/chave | extensao-flexores-punho |

### Extensao toracica com abertura de peito

| Campo | Valor |
| --- | --- |
| Slug | extensao-toracica-peito |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em peitoral. |
| Descricao curta | Reduzir rigidez e melhorar conforto em peitoral. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de peitoral, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de coluna toracica, ombro e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["muito tempo sentado","foco no trabalho","tensao nos ombros"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | extensao-toracica-peito |

### Extensao toracica na cadeira

| Campo | Valor |
| --- | --- |
| Slug | extensao-toracica-cadeira |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em coluna toracica. |
| Descricao curta | Reduzir rigidez e melhorar conforto em coluna toracica. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de toracica, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de coluna toracica e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["muito tempo sentado","mobilidade geral","antes do treino"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | extensao-toracica-cadeira |

### Gato-vaca escapular

| Campo | Valor |
| --- | --- |
| Slug | gato-vaca-escapular |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em costas superiores e escapulas. |
| Descricao curta | Reduzir rigidez e melhorar conforto em costas superiores e escapulas. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de costas superiores, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de escapula, toracica e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["tensao nos ombros","muito tempo sentado","relaxamento"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | gato-vaca-escapular |

### Gato-vaca toracico

| Campo | Valor |
| --- | --- |
| Slug | gato-vaca-toracico |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em coluna toracica. |
| Descricao curta | Reduzir rigidez e melhorar conforto em coluna toracica. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de toracica, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de toracica, lombar e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["muito tempo sentado","mobilidade geral","antes do treino"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | gato-vaca-toracico |

### Inversao e eversao controlada

| Campo | Valor |
| --- | --- |
| Slug | inversao-eversao-controlada |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em tornozelos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em tornozelos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de tornozelos, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de tornozelo e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["caminhada ou corrida","antes do treino","mobilidade geral"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | inversao-eversao-controlada |

### Livro aberto

| Campo | Valor |
| --- | --- |
| Slug | livro-aberto |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em coluna toracica. |
| Descricao curta | Reduzir rigidez e melhorar conforto em coluna toracica. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de toracica, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de toracica, ombro e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["muito tempo sentado","mobilidade geral","antes do treino"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | livro-aberto |

### Mobilidade de braco e cotovelo

| Campo | Valor |
| --- | --- |
| Slug | mobilidade-braco-cotovelo |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em biceps, triceps e bracos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em biceps, triceps e bracos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de bracos, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de ombro, cotovelo e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["depois do treino","mobilidade geral"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | mobilidade-braco-cotovelo |

### Mobilidade leve de cotovelo

| Campo | Valor |
| --- | --- |
| Slug | mobilidade-cotovelo |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em antebracos e cotovelos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em antebracos e cotovelos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de antebraco, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de cotovelo e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["maos e punhos cansados","foco no trabalho"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | mobilidade-cotovelo |

### Mobilidade tornozelo-panturrilha

| Campo | Valor |
| --- | --- |
| Slug | mobilidade-tornozelo-panturrilha |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em panturrilhas. |
| Descricao curta | Reduzir rigidez e melhorar conforto em panturrilhas. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de panturrilhas, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de tornozelo e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["caminhada ou corrida","depois do treino","rigidez matinal"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | mobilidade-tornozelo-panturrilha |

### Pendulo de ombro

| Campo | Valor |
| --- | --- |
| Slug | pendulo-ombro |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em ombros e deltoides. |
| Descricao curta | Reduzir rigidez e melhorar conforto em ombros e deltoides. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de ombros, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de ombro e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["tensao nos ombros","foco no trabalho","muito tempo sentado"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | pendulo-ombro |

### Ponte suave com abertura anterior

| Campo | Valor |
| --- | --- |
| Slug | ponte-suave-abertura |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em abdomen e tronco anterior. |
| Descricao curta | Reduzir rigidez e melhorar conforto em abdomen e tronco anterior. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de tronco anterior, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de quadril, coluna e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["mobilidade geral","antes do treino"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | ponte-suave-abertura |

### Pronacao e supinacao do antebraco

| Campo | Valor |
| --- | --- |
| Slug | pronacao-supinacao-antebraco |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em antebracos e cotovelos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em antebracos e cotovelos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de antebraco, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de cotovelo, radio-ulnar e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["maos e punhos cansados","foco no trabalho"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | pronacao-supinacao-antebraco |

### Queixo para tras

| Campo | Valor |
| --- | --- |
| Slug | queixo-para-tras |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em pescoco e cervical. |
| Descricao curta | Reduzir rigidez e melhorar conforto em pescoco e cervical. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de cervical, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de cervical e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["dor ou tensao no pescoco","tensao nos ombros","foco no trabalho"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | queixo-para-tras |

### Respiracao nas costelas

| Campo | Valor |
| --- | --- |
| Slug | respiracao-costelas |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em abdomen e tronco anterior. |
| Descricao curta | Reduzir rigidez e melhorar conforto em abdomen e tronco anterior. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de tronco anterior, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de costelas, toracica e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["mobilidade geral","antes do treino"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | respiracao-costelas |

### Retracao e protracao escapular

| Campo | Valor |
| --- | --- |
| Slug | retracao-protracao-escapular |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em costas superiores e escapulas. |
| Descricao curta | Reduzir rigidez e melhorar conforto em costas superiores e escapulas. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de costas superiores, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de escapula e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["tensao nos ombros","muito tempo sentado","relaxamento"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | retracao-protracao-escapular |

### Rotacao cervical controlada

| Campo | Valor |
| --- | --- |
| Slug | rotacao-cervical-controlada |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em pescoco e cervical. |
| Descricao curta | Reduzir rigidez e melhorar conforto em pescoco e cervical. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de cervical, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de cervical e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["dor ou tensao no pescoco","tensao nos ombros","foco no trabalho"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | rotacao-cervical-controlada |

### Rotacao externa na parede

| Campo | Valor |
| --- | --- |
| Slug | rotacao-externa-parede |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em ombros e deltoides. |
| Descricao curta | Reduzir rigidez e melhorar conforto em ombros e deltoides. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de ombros, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de ombro e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["tensao nos ombros","foco no trabalho","muito tempo sentado"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | rotacao-externa-parede |

### Rotacao toracica sentada

| Campo | Valor |
| --- | --- |
| Slug | rotacao-toracica-sentada |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir rigidez e melhorar conforto em coluna toracica. |
| Descricao curta | Reduzir rigidez e melhorar conforto em coluna toracica. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Movimente dentro da amplitude disponivel de forma lenta.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de toracica, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de coluna toracica e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["muito tempo sentado","mobilidade geral","antes do treino"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | rotacao-toracica-sentada |

### Soltar tensao de pescoco e ombros

| Campo | Valor |
| --- | --- |
| Slug | soltar-tensao-pescoco-ombros |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 1 |
| Objetivo | Reduzir tensao acumulada na parte superior do corpo. |
| Descricao curta | Reduzir tensao acumulada na parte superior do corpo. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique soltar tensao de pescoco e ombros pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | soltar-tensao-pescoco-ombros |

### Abertura de peito na porta

| Campo | Valor |
| --- | --- |
| Slug | abertura-peito-porta |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em peitoral. |
| Descricao curta | Reduzir rigidez e melhorar conforto em peitoral. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de peitoral, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de ombro, escapula e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["muito tempo sentado","foco no trabalho","tensao nos ombros"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | abertura-peito-porta |

### Abertura de pernas na parede

| Campo | Valor |
| --- | --- |
| Slug | ref_005_mov_09 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Alongar adutores e trabalhar abertura lateral com suporte da parede. |
| Descricao curta | Alongar adutores e trabalhar abertura lateral com suporte da parede. |
| Como fazer | ["Deite de barriga para cima proximo a parede, eleve as pernas e deixe-as abrir lateralmente com controle, usando a parede como apoio."] |
| Dicas de postura | ["Ajustar a distancia da parede e abrir as pernas gradualmente.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Respire de forma lenta e confortavel."] |
| Erros comuns | ["Deixar a lombar desconfortavel ou forcar a abertura alem do limite."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Nao apresente como promessa de conseguir espacate. Respeite limites individuais e evite em caso de dor aguda, lesao recente, formigamento, dor irradiada ou instabilidade.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/mobility/split-prep.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: mobility_split_009_abertura_parede_step_01_sit_near_wall.png, mobility_split_009_abertura_parede_step_02_legs_up.png, mobility_split_009_abertura_parede_step_03_open_legs.png, mobility_split_009_abertura_parede_step_04_final.png, mobility_split_009_abertura_parede_step_05_common_mistake.png, mobility_split_009_abertura_parede_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor na virilha","dor lombar intensa","desconforto ao elevar pernas","dor forte no quadril","dor no joelho"] |
| Recomendado quando | ["quero abrir o quadril","quero melhorar flexibilidade","quero treinar espacate","minha virilha e muito encurtada","quero alongar pernas","quero melhorar mobilidade do quadril","quero uma rotina de alongamento para pernas","virilha encurtada","abertura lateral","relaxamento de pernas","flexibilidade passiva","parede","espacate","virilha","adutores","pernas abertas","Abertura de pernas na parede","Wall Straddle","Sequencia para abertura de quadril e flexibilidade lateral","From here / To here","abertura_quadril_flexibilidade_lateral","Abertura de quadril e flexibilidade lateral","quadril","flexibilidade","relaxamento","abertura de quadril","mobilidade","espacate lateral","alongamento","yoga","pernas","postura","mobilidade de quadril","ref_005","lombar leve","isquiotibiais","gluteos","Alongar adutores e trabalhar abertura lateral com suporte da parede.","paciencia corporal, controle e seguranca no progresso","Referencia: ref_005","Colecao: abertura_quadril_flexibilidade_lateral"] |
| Evitar quando | ["dor na virilha","dor lombar intensa","desconforto ao elevar pernas","formigamento","dor forte no quadril","dor no joelho","lesao recente","dor irradiada","cirurgia recente","instabilidade articular","gravidez de risco"] |
| Imagem/chave | ref_005_mov_09 |

### Abertura de quadril sentado

| Campo | Valor |
| --- | --- |
| Slug | abertura-quadril-sentado |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em quadril. |
| Descricao curta | Reduzir rigidez e melhorar conforto em quadril. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de quadril, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de quadril e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["muito tempo sentado","antes do treino","rigidez matinal"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | abertura-quadril-sentado |

### Abraco das escapulas

| Campo | Valor |
| --- | --- |
| Slug | abraco-escapulas |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em costas superiores e escapulas. |
| Descricao curta | Reduzir rigidez e melhorar conforto em costas superiores e escapulas. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de costas superiores, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de escapula, ombro e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["tensao nos ombros","muito tempo sentado","relaxamento"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | abraco-escapulas |

### Alcance lateral toracico

| Campo | Valor |
| --- | --- |
| Slug | alcance-lateral-toracico |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em coluna toracica. |
| Descricao curta | Reduzir rigidez e melhorar conforto em coluna toracica. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de toracica, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de toracica, ombro e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["muito tempo sentado","mobilidade geral","antes do treino"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | alcance-lateral-toracico |

### Alongamento da frente do tornozelo

| Campo | Valor |
| --- | --- |
| Slug | alongamento-frente-tornozelo |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em tornozelos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em tornozelos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de tornozelos, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de tornozelo, dedos e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["caminhada ou corrida","antes do treino","mobilidade geral"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | alongamento-frente-tornozelo |

### Alongamento de biceps na parede

| Campo | Valor |
| --- | --- |
| Slug | alongamento-biceps-parede |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em biceps, triceps e bracos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em biceps, triceps e bracos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de bracos, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de ombro, cotovelo e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["depois do treino","mobilidade geral"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | alongamento-biceps-parede |

### Alongamento do braquiorradial

| Campo | Valor |
| --- | --- |
| Slug | alongamento-braquiorradial |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em antebracos e cotovelos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em antebracos e cotovelos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de antebraco, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de cotovelo, punho e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["maos e punhos cansados","foco no trabalho"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | alongamento-braquiorradial |

### Alongamento do elevador da escapula

| Campo | Valor |
| --- | --- |
| Slug | elevador-escapula |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em pescoco e cervical. |
| Descricao curta | Reduzir rigidez e melhorar conforto em pescoco e cervical. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de cervical, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de cervical, escapula e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["dor ou tensao no pescoco","tensao nos ombros","foco no trabalho"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | elevador-escapula |

### Alongamento do polegar

| Campo | Valor |
| --- | --- |
| Slug | alongamento-polegar |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em maos, dedos e punhos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em maos, dedos e punhos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de punhos e dedos, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de polegar, punho e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["maos e punhos cansados","foco no trabalho","muito tempo sentado"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | alongamento-polegar |

### Alongamento dos pronadores

| Campo | Valor |
| --- | --- |
| Slug | alongamento-pronadores |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em antebracos e cotovelos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em antebracos e cotovelos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de antebraco, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de cotovelo, punho e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["maos e punhos cansados","foco no trabalho"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | alongamento-pronadores |

### Alongamento dos supinadores

| Campo | Valor |
| --- | --- |
| Slug | alongamento-supinadores |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em antebracos e cotovelos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em antebracos e cotovelos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de antebraco, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de cotovelo, radio-ulnar e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["maos e punhos cansados","foco no trabalho"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | alongamento-supinadores |

### Alongamento lateral do tronco

| Campo | Valor |
| --- | --- |
| Slug | alongamento-lateral-tronco |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em abdomen e tronco anterior. |
| Descricao curta | Reduzir rigidez e melhorar conforto em abdomen e tronco anterior. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de tronco anterior, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de coluna, costelas e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["mobilidade geral","antes do treino"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | alongamento-lateral-tronco |

### Alongamento posterior do ombro

| Campo | Valor |
| --- | --- |
| Slug | capsula-posterior-ombro |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em ombros e deltoides. |
| Descricao curta | Reduzir rigidez e melhorar conforto em ombros e deltoides. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de ombros, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de ombro e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["tensao nos ombros","foco no trabalho","muito tempo sentado"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | capsula-posterior-ombro |

### Anterior de coxa com joelho no chao

| Campo | Valor |
| --- | --- |
| Slug | joelho-no-chao-anterior |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em anterior de coxa. |
| Descricao curta | Reduzir rigidez e melhorar conforto em anterior de coxa. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de anterior de coxa, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de joelho, quadril e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["depois do treino","caminhada ou corrida"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | joelho-no-chao-anterior |

### Anterior de coxa na cadeira

| Campo | Valor |
| --- | --- |
| Slug | anterior-coxa-cadeira |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em anterior de coxa. |
| Descricao curta | Reduzir rigidez e melhorar conforto em anterior de coxa. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de anterior de coxa, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de joelho e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["depois do treino","caminhada ou corrida"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | anterior-coxa-cadeira |

### Borboleta

| Campo | Valor |
| --- | --- |
| Slug | borboleta |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em quadril. |
| Descricao curta | Reduzir rigidez e melhorar conforto em quadril. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de quadril, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de quadril e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["muito tempo sentado","antes do treino","rigidez matinal"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | borboleta |

### Braco cruzado suave

| Campo | Valor |
| --- | --- |
| Slug | braco-cruzado-suave |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em biceps, triceps e bracos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em biceps, triceps e bracos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de bracos, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de ombro e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["depois do treino","mobilidade geral"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | braco-cruzado-suave |

### Cobra suave

| Campo | Valor |
| --- | --- |
| Slug | cobra-suave |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em abdomen e tronco anterior. |
| Descricao curta | Reduzir rigidez e melhorar conforto em abdomen e tronco anterior. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de tronco anterior, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de coluna, quadril e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["mobilidade geral","antes do treino"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | cobra-suave |

### Deltoide posterior cruzado

| Campo | Valor |
| --- | --- |
| Slug | deltoide-posterior-cruzado |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em ombros e deltoides. |
| Descricao curta | Reduzir rigidez e melhorar conforto em ombros e deltoides. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de ombros, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de ombro, escapula e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["tensao nos ombros","foco no trabalho","muito tempo sentado"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | deltoide-posterior-cruzado |

### Dorsal com apoio na cadeira

| Campo | Valor |
| --- | --- |
| Slug | alongamento-dorsal-cadeira |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em costas superiores e escapulas. |
| Descricao curta | Reduzir rigidez e melhorar conforto em costas superiores e escapulas. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de costas superiores, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de ombro, toracica e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["tensao nos ombros","muito tempo sentado","relaxamento"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | alongamento-dorsal-cadeira |

### Extensao abdominal em pe

| Campo | Valor |
| --- | --- |
| Slug | extensao-abdominal-em-pe |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em abdomen e tronco anterior. |
| Descricao curta | Reduzir rigidez e melhorar conforto em abdomen e tronco anterior. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de tronco anterior, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de coluna, quadril e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["mobilidade geral","antes do treino"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | extensao-abdominal-em-pe |

### Extensao dos bracos atras

| Campo | Valor |
| --- | --- |
| Slug | extensao-bracos-atras |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em biceps, triceps e bracos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em biceps, triceps e bracos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de bracos, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de ombro, cotovelo e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["depois do treino","mobilidade geral"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | extensao-bracos-atras |

### Extensao dos dedos do pe

| Campo | Valor |
| --- | --- |
| Slug | extensao-dedos-pe |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em pes e dedos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em pes e dedos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de pes, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de dedos, metatarsofalangicas e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["caminhada ou corrida","relaxamento","rigidez matinal"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | extensao-dedos-pe |

### Fascia plantar com toalha

| Campo | Valor |
| --- | --- |
| Slug | fascia-plantar-toalha |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em pes e dedos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em pes e dedos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de pes, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de pe, tornozelo e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["caminhada ou corrida","relaxamento","rigidez matinal"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | fascia-plantar-toalha |

### Figura quatro sentado

| Campo | Valor |
| --- | --- |
| Slug | figura-quatro-sentado |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em gluteos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em gluteos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de gluteos, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de quadril e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["muito tempo sentado","lombar rigida","depois do treino"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | figura-quatro-sentado |

### Flexao cervical suave

| Campo | Valor |
| --- | --- |
| Slug | flexao-cervical-suave |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em pescoco e cervical. |
| Descricao curta | Reduzir rigidez e melhorar conforto em pescoco e cervical. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de cervical, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de cervical e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["dor ou tensao no pescoco","tensao nos ombros","foco no trabalho"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | flexao-cervical-suave |

### Flexao dos dedos do pe

| Campo | Valor |
| --- | --- |
| Slug | flexao-dedos-pe |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em pes e dedos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em pes e dedos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de pes, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de dedos e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["caminhada ou corrida","relaxamento","rigidez matinal"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | flexao-dedos-pe |

### Flexao dos extensores do punho

| Campo | Valor |
| --- | --- |
| Slug | flexao-extensores-punho |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em maos, dedos e punhos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em maos, dedos e punhos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de punhos e dedos, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de punho, dedos, cotovelo e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["maos e punhos cansados","foco no trabalho","muito tempo sentado"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | flexao-extensores-punho |

### Flexao lombar sentada

| Campo | Valor |
| --- | --- |
| Slug | flexao-lombar-sentada |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em lombar. |
| Descricao curta | Reduzir rigidez e melhorar conforto em lombar. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de lombar, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de lombar, quadril e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["lombar rigida","muito tempo sentado","antes de dormir"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | flexao-lombar-sentada |

### Flexor do quadril ajoelhado

| Campo | Valor |
| --- | --- |
| Slug | flexor-quadril-ajoelhado |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em quadril. |
| Descricao curta | Reduzir rigidez e melhorar conforto em quadril. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de quadril, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de quadril, joelho e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["muito tempo sentado","antes do treino","rigidez matinal"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | flexor-quadril-ajoelhado |

### Flexor do quadril com quadriceps

| Campo | Valor |
| --- | --- |
| Slug | flexor-quadril-com-quadriceps |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em anterior de coxa. |
| Descricao curta | Reduzir rigidez e melhorar conforto em anterior de coxa. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de anterior de coxa, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de quadril, joelho e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["depois do treino","caminhada ou corrida"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | flexor-quadril-com-quadriceps |

### Gluteo na parede

| Campo | Valor |
| --- | --- |
| Slug | gluteo-parede |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em gluteos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em gluteos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de gluteos, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de quadril e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["muito tempo sentado","lombar rigida","depois do treino"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | gluteo-parede |

### Inclinacao lateral do pescoco

| Campo | Valor |
| --- | --- |
| Slug | inclinacao-lateral-pescoco |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em pescoco e cervical. |
| Descricao curta | Reduzir rigidez e melhorar conforto em pescoco e cervical. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de cervical, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de cervical e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["dor ou tensao no pescoco","tensao nos ombros","foco no trabalho"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | inclinacao-lateral-pescoco |

### Inclinacao unilateral na cadeira

| Campo | Valor |
| --- | --- |
| Slug | inclinacao-unilateral-cadeira |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em posterior de coxa. |
| Descricao curta | Reduzir rigidez e melhorar conforto em posterior de coxa. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de posterior de coxa, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de quadril, joelho e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["caminhada ou corrida","depois do treino","lombar rigida"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | inclinacao-unilateral-cadeira |

### Joelho ao peito cruzado

| Campo | Valor |
| --- | --- |
| Slug | joelho-ao-peito-cruzado |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em gluteos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em gluteos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de gluteos, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de quadril, lombar e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["muito tempo sentado","lombar rigida","depois do treino"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | joelho-ao-peito-cruzado |

### Joelhos ao peito

| Campo | Valor |
| --- | --- |
| Slug | joelhos-ao-peito |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em lombar. |
| Descricao curta | Reduzir rigidez e melhorar conforto em lombar. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de lombar, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de lombar, quadril e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["lombar rigida","muito tempo sentado","antes de dormir"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | joelhos-ao-peito |

### Maos atras das costas

| Campo | Valor |
| --- | --- |
| Slug | maos-atras-costas |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em peitoral. |
| Descricao curta | Reduzir rigidez e melhorar conforto em peitoral. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de peitoral, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de ombro e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["muito tempo sentado","foco no trabalho","tensao nos ombros"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | maos-atras-costas |

### Panturrilha com toalha

| Campo | Valor |
| --- | --- |
| Slug | panturrilha-toalha |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em panturrilhas. |
| Descricao curta | Reduzir rigidez e melhorar conforto em panturrilhas. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de panturrilhas, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de tornozelo, joelho e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["caminhada ou corrida","depois do treino","rigidez matinal"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | panturrilha-toalha |

### Panturrilha na parede

| Campo | Valor |
| --- | --- |
| Slug | panturrilha-parede |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em panturrilhas. |
| Descricao curta | Reduzir rigidez e melhorar conforto em panturrilhas. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de panturrilhas, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de tornozelo, joelho e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["caminhada ou corrida","depois do treino","rigidez matinal"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | panturrilha-parede |

### Panturrilha no degrau

| Campo | Valor |
| --- | --- |
| Slug | degrau-panturrilha |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em panturrilhas. |
| Descricao curta | Reduzir rigidez e melhorar conforto em panturrilhas. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de panturrilhas, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de tornozelo e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["caminhada ou corrida","depois do treino","rigidez matinal"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | degrau-panturrilha |

### Peitoral na parede com um braco

| Campo | Valor |
| --- | --- |
| Slug | peitoral-parede-um-braco |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em peitoral. |
| Descricao curta | Reduzir rigidez e melhorar conforto em peitoral. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de peitoral, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de ombro e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["muito tempo sentado","foco no trabalho","tensao nos ombros"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | peitoral-parede-um-braco |

### Peitoral no canto da parede

| Campo | Valor |
| --- | --- |
| Slug | peitoral-no-canto |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em peitoral. |
| Descricao curta | Reduzir rigidez e melhorar conforto em peitoral. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de peitoral, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de ombro, toracica e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["muito tempo sentado","foco no trabalho","tensao nos ombros"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | peitoral-no-canto |

### Piriforme deitado

| Campo | Valor |
| --- | --- |
| Slug | piriforme-deitado |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em gluteos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em gluteos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de gluteos, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de quadril, lombar e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["muito tempo sentado","lombar rigida","depois do treino"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | piriforme-deitado |

### Pombo adaptado

| Campo | Valor |
| --- | --- |
| Slug | pombo-adaptado |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em gluteos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em gluteos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de gluteos, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de quadril e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["muito tempo sentado","lombar rigida","depois do treino"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | pombo-adaptado |

### Posterior com toalha deitado

| Campo | Valor |
| --- | --- |
| Slug | toalha-deitado |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em posterior de coxa. |
| Descricao curta | Reduzir rigidez e melhorar conforto em posterior de coxa. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de posterior de coxa, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de quadril, joelho, tornozelo e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["caminhada ou corrida","depois do treino","lombar rigida"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | toalha-deitado |

### Posterior em pe com apoio

| Campo | Valor |
| --- | --- |
| Slug | posterior-em-pe-apoio |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em posterior de coxa. |
| Descricao curta | Reduzir rigidez e melhorar conforto em posterior de coxa. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de posterior de coxa, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de quadril, joelho e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["caminhada ou corrida","depois do treino","lombar rigida"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | posterior-em-pe-apoio |

### Posterior sentado

| Campo | Valor |
| --- | --- |
| Slug | posterior-sentado |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em posterior de coxa. |
| Descricao curta | Reduzir rigidez e melhorar conforto em posterior de coxa. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de posterior de coxa, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de quadril, joelho e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["caminhada ou corrida","depois do treino","lombar rigida"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | posterior-sentado |

### Postura da crianca

| Campo | Valor |
| --- | --- |
| Slug | postura-crianca |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em lombar. |
| Descricao curta | Reduzir rigidez e melhorar conforto em lombar. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de lombar, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de lombar, quadril e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["lombar rigida","muito tempo sentado","antes de dormir"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | postura-crianca |

### Postura da crianca lateral

| Campo | Valor |
| --- | --- |
| Slug | postura-crianca-lateral |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em costas superiores e escapulas. |
| Descricao curta | Reduzir rigidez e melhorar conforto em costas superiores e escapulas. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de costas superiores, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de ombro, coluna e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["tensao nos ombros","muito tempo sentado","relaxamento"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | postura-crianca-lateral |

### Quadriceps deitado de lado

| Campo | Valor |
| --- | --- |
| Slug | quadriceps-lateral-deitado |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em anterior de coxa. |
| Descricao curta | Reduzir rigidez e melhorar conforto em anterior de coxa. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de anterior de coxa, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de joelho, quadril e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["depois do treino","caminhada ou corrida"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | quadriceps-lateral-deitado |

### Quadriceps em pe com apoio

| Campo | Valor |
| --- | --- |
| Slug | quadriceps-em-pe-apoio |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em anterior de coxa. |
| Descricao curta | Reduzir rigidez e melhorar conforto em anterior de coxa. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de anterior de coxa, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de joelho, quadril e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["depois do treino","caminhada ou corrida"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | quadriceps-em-pe-apoio |

### Soleo com joelho flexionado

| Campo | Valor |
| --- | --- |
| Slug | soleo-joelho-flexionado |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em panturrilhas. |
| Descricao curta | Reduzir rigidez e melhorar conforto em panturrilhas. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de panturrilhas, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de tornozelo, joelho e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["caminhada ou corrida","depois do treino","rigidez matinal"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | soleo-joelho-flexionado |

### Torcao lombar leve

| Campo | Valor |
| --- | --- |
| Slug | torcao-lombar-leve |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em lombar. |
| Descricao curta | Reduzir rigidez e melhorar conforto em lombar. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de lombar, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de lombar, quadril e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["lombar rigida","muito tempo sentado","antes de dormir"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | torcao-lombar-leve |

### Triceps acima da cabeca

| Campo | Valor |
| --- | --- |
| Slug | triceps-acima-cabeca |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / STRETCHING |
| Nivel | 3 |
| Objetivo | Reduzir rigidez e melhorar conforto em biceps, triceps e bracos. |
| Descricao curta | Reduzir rigidez e melhorar conforto em biceps, triceps e bracos. |
| Como fazer | ["Entre na posicao devagar e com apoio se precisar.","Ajuste ate sentir tensao confortavel, sem dor aguda.","Sustente a posicao sem quicar.","Respire sem prender o ar e retorne com calma."] |
| Dicas de postura | ["Reduza amplitude, use apoio e diminua o tempo.","Aumente tempo ou controle ativo somente se continuar confortavel.","Tensao confortavel na regiao de bracos, sem dor aguda."] |
| Respiracao | ["Respiracao lenta, com expiracao suave."] |
| Erros comuns | ["quicar em alongamento estatico","prender a respiracao","forcar articulacoes","ignorar sinais de alerta"] |
| Cuidados | ["Interrompa se houver dor aguda.","Interrompa se houver formigamento.","Interrompa se houver perda de forca.","Interrompa se houver dor irradiada.","Interrompa se houver tontura.","Interrompa se houver sensacao de choque.","Trabalha tecidos ao redor de ombro, cotovelo e ajuda a organizar a percepcao corporal dessa regiao."] |
| Contraindicacoes | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Recomendado quando | ["depois do treino","mobilidade geral"] |
| Evitar quando | ["dor aguda","lesao recente sem liberacao","formigamento","tontura","condicao medica sem orientacao"] |
| Imagem/chave | triceps-acima-cabeca |

### Caminhada consciente curta

| Campo | Valor |
| --- | --- |
| Slug | caminhada-consciente-curta |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / WALKING |
| Nivel | 1 |
| Objetivo | Ativar circulacao com atencao no ambiente. |
| Descricao curta | Ativar circulacao com atencao no ambiente. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique caminhada consciente curta pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | caminhada-consciente-curta |

### Caminhada consciente

| Campo | Valor |
| --- | --- |
| Slug | caminhada-consciente |
| Area | ENERGY |
| Categoria | PHYSICAL / WALKING |
| Nivel | 3 |
| Objetivo | Regular corpo e mente caminhando com presenca. |
| Descricao curta | Regular corpo e mente caminhando com presenca. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique caminhada consciente pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | caminhada-consciente |

### Celular longe da cama

| Campo | Valor |
| --- | --- |
| Slug | celular-longe-da-cama |
| Area | SLEEP |
| Categoria | PHYSICAL / WORK_BREAK |
| Nivel | 1 |
| Objetivo | Reduzir o impulso de checar notificacoes antes de dormir. |
| Descricao curta | Crie uma pequena distancia fisica entre voce e a tela. |
| Como fazer | ["Escolha um local fora do alcance da cama.","Ative modo silencioso ou foco, se possivel.","Coloque o carregador nesse local.","Volte para a cama sem abrir outro app.","Respire por tres ciclos."] |
| Dicas de postura | ["Movimente-se devagar.","Evite deitar segurando o celular.","Mantenha o quarto seguro e acessivel."] |
| Respiracao | ["Expire longo ao deixar o aparelho.","Respire naturalmente depois."] |
| Erros comuns | ["Deixar o celular virado para cima.","Checar uma ultima coisa.","Usar outro dispositivo no lugar."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando o celular estiver puxando sua atencao na cama.","Antes do ritual de sono."] |
| Evitar quando | ["Evite se voce precisa do aparelho por seguranca; nesse caso, deixe em modo silencioso e fora da mao."] |
| Imagem/chave | celular-longe-da-cama |

### Pausa consciente no trabalho

| Campo | Valor |
| --- | --- |
| Slug | pausa-consciente-trabalho |
| Area | FOCUS |
| Categoria | PHYSICAL / WORK_BREAK |
| Nivel | 1 |
| Objetivo | Interromper o automatico durante o expediente. |
| Descricao curta | Interromper o automatico durante o expediente. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique pausa consciente no trabalho pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | pausa-consciente-trabalho |

### Pausa de foco sem impacto

| Campo | Valor |
| --- | --- |
| Slug | pausa-foco-sem-impacto |
| Area | FOCUS |
| Categoria | PHYSICAL / WORK_BREAK |
| Nivel | 1 |
| Objetivo | Reorganizar atencao com movimento leve. |
| Descricao curta | Reorganizar atencao com movimento leve. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique pausa de foco sem impacto pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | pausa-foco-sem-impacto |

### Pausa sem tela

| Campo | Valor |
| --- | --- |
| Slug | pausa-sem-tela |
| Area | FOCUS |
| Categoria | PHYSICAL / WORK_BREAK |
| Nivel | 1 |
| Objetivo | Reduzir estimulos e recuperar atencao. |
| Descricao curta | Reduzir estimulos e recuperar atencao. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique pausa sem tela pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | pausa-sem-tela |

### Reset corporal no trabalho

| Campo | Valor |
| --- | --- |
| Slug | reset-corporal-trabalho |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / WORK_BREAK |
| Nivel | 1 |
| Objetivo | Fazer uma pausa corporal segura no expediente. |
| Descricao curta | Fazer uma pausa corporal segura no expediente. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique reset corporal no trabalho pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | reset-corporal-trabalho |

### Uma tarefa apenas

| Campo | Valor |
| --- | --- |
| Slug | uma-tarefa-apenas |
| Area | FOCUS |
| Categoria | PHYSICAL / WORK_BREAK |
| Nivel | 1 |
| Objetivo | Treinar monotarefa de forma curta e possivel. |
| Descricao curta | Escolha uma unica tarefa pequena e proteja 2 minutos de atencao. |
| Como fazer | ["Escreva a menor parte da tarefa.","Feche ou minimize o que nao ajuda agora.","Coloque um timer de 2 minutos.","Faca somente essa parte ate o timer terminar."] |
| Dicas de postura | ["Mantenha o material essencial visivel.","Deixe o celular fora do campo de visao.","Sente-se de forma confortavel."] |
| Respiracao | ["Respire uma vez antes de iniciar.","Solte o ar quando perceber vontade de trocar de aba."] |
| Erros comuns | ["Escolher uma tarefa grande.","Tentar resolver mensagens junto.","Reiniciar o timer varias vezes."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce estiver pulando entre tarefas.","Quando o foco estiver baixo, mas ainda existir energia."] |
| Evitar quando | ["Evite transformar a pratica em uma meta longa demais."] |
| Imagem/chave | uma-tarefa-apenas |

### Reset de foco

| Campo | Valor |
| --- | --- |
| Slug | reset-de-foco |
| Area | FOCUS |
| Categoria | PHYSICAL / WORK_BREAK |
| Nivel | 3 |
| Objetivo | Retomar uma tarefa com menos dispersao. |
| Descricao curta | Retomar uma tarefa com menos dispersao. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique reset de foco pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | reset-de-foco |

### Alongamento lateral sentado

| Campo | Valor |
| --- | --- |
| Slug | ref_001_mov_06 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 1 |
| Objetivo | Pode ajudar a alongar a lateral do tronco e mobilizar coluna. |
| Descricao curta | Pode ajudar a alongar a lateral do tronco e mobilizar coluna. |
| Como fazer | ["Sentar, apoiar uma mao e levar o braco oposto por cima da cabeca.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Peito aberto, apoio estavel e amplitude confortavel.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Peito aberto, apoio estavel e amplitude confortavel.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Peito aberto, apoio estavel e amplitude confortavel."] |
| Respiracao | ["inspirar expandindo costelas, expirar relaxando"] |
| Erros comuns | ["Colapsar o peito e forcar o ombro."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Peito aberto, apoio estavel e amplitude confortavel.","Nao apresentar como tratamento de dor ou correcao de coluna.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/yoga/spine-strength-flexibility.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CONFERIR com ref_005_mov_02 se REF_005 existir; senao GERAR_NOVO_CANONICO.","Status do video: PLANNED.","Imagens planejadas pendentes: yoga_spine_006_seated_side_stretch_step_01_start.png, yoga_spine_006_seated_side_stretch_step_02_arm_lift.png, yoga_spine_006_seated_side_stretch_step_03_final_right.png, yoga_spine_006_seated_side_stretch_step_04_final_left.png, yoga_spine_006_seated_side_stretch_step_05_common_mistake.png, yoga_spine_006_seated_side_stretch_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","pos-operatorio sem liberacao","dormencia","crise de hernia"] |
| Recomendado quando | ["rigidez leve nas costas","fortalecimento postural leve","alongamento de coluna","rotina de yoga","lateral","tronco","costelas","sentado","mobilidade, forca leve e flexibilidade da coluna","seguranca, presenca e confianca corporal","yoga","coluna","forca leve","flexibilidade","mobilidade","costas","postura","Alongamento lateral sentado","Seated Side Stretch","7 posturas de yoga para forca e flexibilidade da coluna","7 Yoga Poses to Build Spine Strength and Flexibility","yoga_coluna_forca_flexibilidade","ref_001","lateral do tronco","ombros","quadril","Referencia: ref_001","Colecao: yoga_coluna_forca_flexibilidade"] |
| Evitar quando | ["dor forte/aguda","lesao recente","pos-operatorio sem liberacao","formigamento","dormencia","perda de forca","tontura forte","falta de ar","dor no peito","dor irradiada","crise de hernia"] |
| Imagem/chave | ref_001_mov_06 |

### Borboleta reclinada

| Campo | Valor |
| --- | --- |
| Slug | ref_004_mov_02 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 1 |
| Objetivo | Pode ajudar no relaxamento da regiao pelvica e abertura suave do quadril em posicao de descanso. |
| Descricao curta | Pode ajudar no relaxamento da regiao pelvica e abertura suave do quadril em posicao de descanso. |
| Como fazer | ["Deite de barriga para cima, una as solas dos pes e deixe os joelhos abrirem para os lados. Use apoios sob os joelhos se necessario."] |
| Dicas de postura | ["Apoiar joelhos e manter lombar confortavel.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Lenta, abdominal."] |
| Erros comuns | ["Deixar joelhos suspensos com tensao ou arquear a lombar."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Esta colecao nao substitui acompanhamento medico, ginecologico, nutricional ou endocrinologico. Em caso de SOP, dor intensa, sangramento anormal, tontura, gestacao, pos-operatorio, doenca hormonal diagnosticada ou uso de medicacao, busque orientacao profissional.","Status dos assets: NEEDS_REVIEW. Imagens vinculadas: 5. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/hormonal-balance.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: yoga_hormonal_002_borboleta_reclinada_step_02_feet_together.png, yoga_hormonal_002_borboleta_reclinada_step_03_knees_open.png, yoga_hormonal_002_borboleta_reclinada_step_04_final.png, yoga_hormonal_002_borboleta_reclinada_step_05_common_mistake.png, yoga_hormonal_002_borboleta_reclinada_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor pelvica intensa","sangramento anormal","dor lombar ao deitar","desconforto intenso no quadril","lesao no joelho"] |
| Recomendado quando | ["tenho SOP","quero yoga para hormonios","quero reduzir estresse","estou ansiosa","quero melhorar meu ciclo","quero yoga para colica leve","quero relaxar","quero alongar quadril","quero uma pratica feminina","quero equilibrio hormonal","relaxamento noturno","estresse","tensao pelvica leve","rotina de descanso","yoga restaurativa","relaxamento","SOP","colica leve","quadril","pelvico","sono","Borboleta reclinada","Supta Baddha Konasana","20 posturas de yoga para SOP, equilibrio hormonal e reducao do estresse","20 Yoga Asanas for PCOD & Hormonal Balance","yoga_hormonal_sop_equilibrio","Yoga para SOP e equilibrio hormonal","pelve","ciclo menstrual","yoga","ovario policistico","equilibrio hormonal","ansiedade leve","respiracao","bem-estar feminino","autocuidado","flexibilidade","ref_004","abdomen","virilha","lombar","adutores","gluteos","musculatura postural","abertura passiva de quadril e relaxamento pelvico","calma, autocuidado e conexao corporal","Referencia: ref_004","Colecao: yoga_hormonal_sop_equilibrio"] |
| Evitar quando | ["dor pelvica intensa","sangramento anormal","febre","gravidez de risco","pos-operatorio","tontura forte","dor aguda","falta de ar","sintomas neurologicos","dor no peito"] |
| Imagem/chave | ref_004_mov_02 |

### Postura da borboleta

| Campo | Valor |
| --- | --- |
| Slug | ref_004_mov_01 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 1 |
| Objetivo | Pode ajudar a mobilizar quadris e regiao pelvica, favorecendo relaxamento e abertura suave. |
| Descricao curta | Pode ajudar a mobilizar quadris e regiao pelvica, favorecendo relaxamento e abertura suave. |
| Como fazer | ["Sentar com pernas a frente.","Dobrar os joelhos.","Unir as solas dos pes.","Aproximar os pes do corpo ate onde for confortavel.","Alongar a coluna e relaxar os ombros."] |
| Dicas de postura | ["Manter a coluna longa e permitir que os joelhos descam naturalmente, usando apoio se necessario.","nao pressionar os joelhos","usar almofadas se houver desconforto"] |
| Respiracao | ["Lenta e nasal."] |
| Erros comuns | ["Arredondar a coluna e forcar os joelhos para baixo."] |
| Cuidados | ["nao pressionar os joelhos","usar almofadas se houver desconforto","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Esta colecao nao substitui acompanhamento medico, ginecologico, nutricional ou endocrinologico. Em caso de SOP, dor intensa, sangramento anormal, tontura, gestacao, pos-operatorio, doenca hormonal diagnosticada ou uso de medicacao, busque orientacao profissional.","Status dos assets: GENERATED_PENDING_REVIEW. Imagens vinculadas: 6. Imagens planejadas pendentes: 0. Base: /instructional-images/yoga/hormonal-balance.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Todas as imagens esperadas cadastradas para o movimento possuem vinculo fisico ou revisao pendente."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor pelvica intensa","joelho dolorido","sangramento anormal","dor aguda no quadril","dor aguda no joelho","dor aguda na pelve"] |
| Recomendado quando | ["tenho SOP","quero relaxar","estou com quadril travado","quero yoga leve","rigidez no quadril","tensao na regiao pelvica","pratica leve para relaxamento","mobilidade feminina","alongamento suave","rotina de yoga para bem-estar hormonal","SOP","ovario policistico","equilibrio hormonal","quadril rigido","tensao pelvica","relaxamento feminino","alongamento de virilha","Postura da borboleta","Baddha Konasana","20 posturas de yoga para SOP, equilibrio hormonal e reducao do estresse","20 Yoga Asanas for PCOD & Hormonal Balance","yoga_hormonal_sop_equilibrio","Yoga para SOP e equilibrio hormonal","borboleta","abertura de quadril","alongamento pelvico","yoga","quadril","pelve","relaxamento","iniciante","estresse","ciclo menstrual","ansiedade leve","respiracao","bem-estar feminino","autocuidado","flexibilidade","ref_004","virilha","coluna","adutores","gluteos","assoalho pelvico indireto","musculatura postural","mobilidade de quadril e relaxamento pelvico","calma, autocuidado e conexao corporal","Referencia: ref_004","Colecao: yoga_hormonal_sop_equilibrio"] |
| Evitar quando | ["dor pelvica intensa","joelho dolorido","lesao recente","sangramento anormal","febre","gravidez de risco","pos-operatorio","tontura forte","dor aguda","falta de ar","sintomas neurologicos","dor no peito"] |
| Imagem/chave | ref_004_mov_01 |

### Postura da crianca

| Campo | Valor |
| --- | --- |
| Slug | ref_004_mov_04 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 1 |
| Objetivo | Pode ajudar a relaxar costas, quadril e sistema nervoso. |
| Descricao curta | Pode ajudar a relaxar costas, quadril e sistema nervoso. |
| Como fazer | ["Ajoelhe-se, sente sobre os calcanhares e leve o tronco a frente, apoiando testa e bracos no chao."] |
| Dicas de postura | ["Usar almofada sob tronco ou testa para conforto.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Respire de forma lenta e confortavel."] |
| Erros comuns | ["Forcar joelhos ou deixar pescoco tensionado."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Esta colecao nao substitui acompanhamento medico, ginecologico, nutricional ou endocrinologico. Em caso de SOP, dor intensa, sangramento anormal, tontura, gestacao, pos-operatorio, doenca hormonal diagnosticada ou uso de medicacao, busque orientacao profissional.","Status dos assets: NEEDS_REVIEW. Imagens vinculadas: 5. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/hormonal-balance.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: yoga_hormonal_004_balasana_step_02_sit_back.png, yoga_hormonal_004_balasana_step_03_reach_forward.png, yoga_hormonal_004_balasana_step_04_final.png, yoga_hormonal_004_balasana_step_05_common_mistake.png, yoga_hormonal_004_balasana_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor pelvica intensa","sangramento anormal","dor no joelho","desconforto intenso no quadril","tontura ao baixar a cabeca"] |
| Recomendado quando | ["tenho SOP","quero yoga para hormonios","quero reduzir estresse","estou ansiosa","quero melhorar meu ciclo","quero yoga para colica leve","quero relaxar","quero alongar quadril","quero uma pratica feminina","quero equilibrio hormonal","estresse","pausa de descanso","tensao nas costas","relaxamento","respiracao calma","balasana","postura da crianca","descanso","Postura da crianca","Balasana","20 posturas de yoga para SOP, equilibrio hormonal e reducao do estresse","20 Yoga Asanas for PCOD & Hormonal Balance","yoga_hormonal_sop_equilibrio","Yoga para SOP e equilibrio hormonal","costas","yoga leve","yoga","SOP","ovario policistico","equilibrio hormonal","ciclo menstrual","ansiedade leve","respiracao","quadril","pelve","bem-estar feminino","autocuidado","flexibilidade","ref_004","lombar","ombros","pescoco","gluteos","dorsais","relaxamento de costas e quadril","calma, autocuidado e conexao corporal","Referencia: ref_004","Colecao: yoga_hormonal_sop_equilibrio"] |
| Evitar quando | ["dor pelvica intensa","sangramento anormal","febre","gravidez de risco","pos-operatorio","tontura forte","dor aguda","falta de ar","sintomas neurologicos","dor no peito"] |
| Imagem/chave | ref_004_mov_04 |

### Postura da oracao

| Campo | Valor |
| --- | --- |
| Slug | ref_003_mov_01 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 1 |
| Objetivo | Preparar corpo e respiracao para iniciar a sequencia. |
| Descricao curta | Preparar corpo e respiracao para iniciar a sequencia. |
| Como fazer | ["Ficar em pe na frente do colchonete.","Alinhar pes e coluna.","Unir as maos a frente do peito.","Relaxar ombros.","Respirar normalmente."] |
| Dicas de postura | ["Alongar a coluna, relaxar ombros e manter maos no centro do peito.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Normal."] |
| Erros comuns | ["Ombros elevados e coluna relaxada demais."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Faca os movimentos com calma e respeite seus limites. Pare se sentir dor forte, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/surya-namaskar.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: surya_001_pranamasana_step_01_start.png, surya_001_pranamasana_step_02_hands_to_chest.png, surya_001_pranamasana_step_03_final.png, surya_001_pranamasana_step_04_common_mistake.png, surya_001_pranamasana_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor aguda na lombar","dor intensa nos punhos","dor no ombro","tontura","tontura intensa em pe","dificuldade de equilibrio sem apoio"] |
| Recomendado quando | ["quero fazer yoga","quero alongar o corpo todo","quero comecar o dia melhor","estou sem energia","quero melhorar minha flexibilidade","quero uma sequencia completa","quero algo para corpo e mente","quero me movimentar pela manha","quero reduzir estresse","quero melhorar postura","inicio de pratica","foco mental","rotina matinal","preparacao para yoga","respiracao consciente","comecar yoga","foco","respiracao","saudacao ao sol","Postura da oracao","Pranamasana / Prayer Pose","Saudacao ao Sol - 12 passos para corpo, mente e respiracao","Surya Namaskar - 12 Steps: A Complete Workout for Body, Mind & Soul","surya_namaskar_12_passos","Saudacao ao Sol - 12 passos","yoga","inicio","manha","postura","surya namaskar","energia","flexibilidade","forca","corpo inteiro","mobilidade","equilibrio","estresse","ansiedade leve","ref_003","coluna","ombros","peito","core leve","musculatura postural","alinhamento postural inicial","foco, energia leve e equilibrio entre corpo, mente e respiracao","Referencia: ref_003","Colecao: surya_namaskar_12_passos"] |
| Evitar quando | ["dor forte","dor aguda na lombar","dor intensa nos punhos","dor no ombro","tontura","falta de ar","pressao descontrolada","lesao recente","pos-operatorio","gravidez de risco","dor no peito","formigamento","perda de forca"] |
| Imagem/chave | ref_003_mov_01 |

### Postura da oracao final

| Campo | Valor |
| --- | --- |
| Slug | ref_003_mov_12 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 1 |
| Objetivo | Finalizar a sequencia com foco e respiracao. |
| Descricao curta | Finalizar a sequencia com foco e respiracao. |
| Como fazer | ["Retorne as maos ao centro do peito, relaxe os ombros e perceba a respiracao."] |
| Dicas de postura | ["Estabilizar pes, coluna e respiracao antes de encerrar.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Expirar e retornar ao normal."] |
| Erros comuns | ["Finalizar apressado sem reorganizar postura."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Faca os movimentos com calma e respeite seus limites. Pare se sentir dor forte, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/surya-namaskar.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: surya_012_pranamasana_final_step_01_start.png, surya_012_pranamasana_final_step_02_hands_down.png, surya_012_pranamasana_final_step_03_final.png, surya_012_pranamasana_final_step_04_common_mistake.png, surya_012_pranamasana_final_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor aguda na lombar","dor intensa nos punhos","dor no ombro","tontura","tontura intensa em pe","dificuldade de equilibrio sem apoio"] |
| Recomendado quando | ["quero fazer yoga","quero alongar o corpo todo","quero comecar o dia melhor","estou sem energia","quero melhorar minha flexibilidade","quero uma sequencia completa","quero algo para corpo e mente","quero me movimentar pela manha","quero reduzir estresse","quero melhorar postura","fechamento de sequencia","pausa de respiracao","integracao corpo e mente","finalizar yoga","oracao final","respiracao","saudacao ao sol","Postura da oracao final","Pranamasana / Prayer Pose","Saudacao ao Sol - 12 passos para corpo, mente e respiracao","Surya Namaskar - 12 Steps: A Complete Workout for Body, Mind & Soul","surya_namaskar_12_passos","Saudacao ao Sol - 12 passos","yoga","fechamento","postura","surya namaskar","manha","energia","flexibilidade","forca","corpo inteiro","mobilidade","equilibrio","estresse","ansiedade leve","ref_003","coluna","ombros","peito","core leve","musculatura postural","retorno postural e fechamento da sequencia","foco, energia leve e equilibrio entre corpo, mente e respiracao","Referencia: ref_003","Colecao: surya_namaskar_12_passos"] |
| Evitar quando | ["dor forte","dor aguda na lombar","dor intensa nos punhos","dor no ombro","tontura","falta de ar","pressao descontrolada","lesao recente","pos-operatorio","gravidez de risco","dor no peito","formigamento","perda de forca"] |
| Imagem/chave | ref_003_mov_12 |

### Postura da vaca

| Campo | Valor |
| --- | --- |
| Slug | ref_004_mov_06 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 1 |
| Objetivo | Mobilizar a coluna em extensao e abrir o peito. |
| Descricao curta | Mobilizar a coluna em extensao e abrir o peito. |
| Como fazer | ["Em quatro apoios, inspire levando o peito a frente e elevando suavemente o olhar, mantendo apoio firme."] |
| Dicas de postura | ["Distribuir extensao por toda a coluna.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Inspirar abrindo o peito."] |
| Erros comuns | ["Exagerar na lombar e tensionar pescoco."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Esta colecao nao substitui acompanhamento medico, ginecologico, nutricional ou endocrinologico. Em caso de SOP, dor intensa, sangramento anormal, tontura, gestacao, pos-operatorio, doenca hormonal diagnosticada ou uso de medicacao, busque orientacao profissional.","Status dos assets: GENERATED_PENDING_REVIEW. Imagens vinculadas: 5. Imagens planejadas pendentes: 0. Base: /instructional-images/yoga/hormonal-balance.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Todas as imagens esperadas cadastradas para o movimento possuem vinculo fisico ou revisao pendente."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor pelvica intensa","sangramento anormal","dor cervical ao olhar para cima","compressao lombar dolorosa"] |
| Recomendado quando | ["tenho SOP","quero yoga para hormonios","quero reduzir estresse","estou ansiosa","quero melhorar meu ciclo","quero yoga para colica leve","quero relaxar","quero alongar quadril","quero uma pratica feminina","quero equilibrio hormonal","mobilidade da coluna","abrir peito","aquecimento","postura","vaca","bitilasana","coluna","Postura da vaca","Bitilasana","20 posturas de yoga para SOP, equilibrio hormonal e reducao do estresse","20 Yoga Asanas for PCOD & Hormonal Balance","yoga_hormonal_sop_equilibrio","Yoga para SOP e equilibrio hormonal","mobilidade","peito","yoga","SOP","ovario policistico","equilibrio hormonal","ciclo menstrual","estresse","ansiedade leve","respiracao","quadril","pelve","relaxamento","bem-estar feminino","autocuidado","flexibilidade","ref_004","pescoco","ombros","extensores da coluna","peitoral","mobilidade em extensao da coluna","calma, autocuidado e conexao corporal","Referencia: ref_004","Colecao: yoga_hormonal_sop_equilibrio"] |
| Evitar quando | ["dor pelvica intensa","sangramento anormal","febre","gravidez de risco","pos-operatorio","tontura forte","dor aguda","falta de ar","sintomas neurologicos","dor no peito"] |
| Imagem/chave | ref_004_mov_06 |

### Postura da vaca

| Campo | Valor |
| --- | --- |
| Slug | ref_001_mov_05 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 1 |
| Objetivo | Pode ajudar a mobilizar a coluna em extensao suave. |
| Descricao curta | Pode ajudar a mobilizar a coluna em extensao suave. |
| Como fazer | ["Em quatro apoios, levar peito a frente e criar extensao confortavel.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Distribuir a extensao e manter pescoco confortavel.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Distribuir a extensao e manter pescoco confortavel.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Distribuir a extensao e manter pescoco confortavel."] |
| Respiracao | ["inspirar ao abrir o peito"] |
| Erros comuns | ["Jogar a cabeca para tras e comprimir lombar."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Distribuir a extensao e manter pescoco confortavel.","Nao apresentar como tratamento de dor ou correcao de coluna.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/spine-strength-flexibility.","Reaproveitamento visual: REUSED. REUTILIZAR ref_004_mov_06.","Status do video: PLANNED.","Imagens planejadas pendentes: yoga_spine_005_cow_pose_step_01_tabletop.png, yoga_spine_005_cow_pose_step_02_chest_forward.png, yoga_spine_005_cow_pose_step_03_final.png, yoga_spine_005_cow_pose_step_04_common_mistake.png, yoga_spine_005_cow_pose_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","pos-operatorio sem liberacao","dormencia","crise de hernia"] |
| Recomendado quando | ["rigidez leve nas costas","fortalecimento postural leve","alongamento de coluna","rotina de yoga","vaca","coluna","extensao","mobilidade, forca leve e flexibilidade da coluna","seguranca, presenca e confianca corporal","yoga","forca leve","flexibilidade","mobilidade","costas","postura","Postura da vaca","Cow Pose","7 posturas de yoga para forca e flexibilidade da coluna","7 Yoga Poses to Build Spine Strength and Flexibility","yoga_coluna_forca_flexibilidade","ref_001","peito","ombros","Referencia: ref_001","Colecao: yoga_coluna_forca_flexibilidade"] |
| Evitar quando | ["dor forte/aguda","lesao recente","pos-operatorio sem liberacao","formigamento","dormencia","perda de forca","tontura forte","falta de ar","dor no peito","dor irradiada","crise de hernia"] |
| Imagem/chave | ref_001_mov_05 |

### Postura do gato

| Campo | Valor |
| --- | --- |
| Slug | ref_004_mov_05 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 1 |
| Objetivo | Mobilizar a coluna em flexao. |
| Descricao curta | Mobilizar a coluna em flexao. |
| Como fazer | ["Em quatro apoios, arredonde a coluna para cima ao expirar, levando o abdomen para dentro e soltando a cabeca com controle."] |
| Dicas de postura | ["Empurrar o chao e distribuir a curva por toda a coluna.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Expirar arredondando a coluna."] |
| Erros comuns | ["Mover so a lombar e colapsar bracos."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Esta colecao nao substitui acompanhamento medico, ginecologico, nutricional ou endocrinologico. Em caso de SOP, dor intensa, sangramento anormal, tontura, gestacao, pos-operatorio, doenca hormonal diagnosticada ou uso de medicacao, busque orientacao profissional.","Status dos assets: NEEDS_REVIEW. Imagens vinculadas: 3. Imagens planejadas pendentes: 2. Base: /instructional-images/yoga/hormonal-balance.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: yoga_hormonal_005_marjariasana_step_02_spine_rounding.png, yoga_hormonal_005_marjariasana_step_03_final.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor pelvica intensa","sangramento anormal","dor aguda intensa"] |
| Recomendado quando | ["tenho SOP","quero yoga para hormonios","quero reduzir estresse","estou ansiosa","quero melhorar meu ciclo","quero yoga para colica leve","quero relaxar","quero alongar quadril","quero uma pratica feminina","quero equilibrio hormonal","rigidez nas costas","mobilidade leve","aquecimento","tensao lombar","gato","marjariasana","coluna","mobilidade","costas","Postura do gato","Marjariasana","20 posturas de yoga para SOP, equilibrio hormonal e reducao do estresse","20 Yoga Asanas for PCOD & Hormonal Balance","yoga_hormonal_sop_equilibrio","Yoga para SOP e equilibrio hormonal","yoga","SOP","ovario policistico","equilibrio hormonal","ciclo menstrual","estresse","ansiedade leve","respiracao","quadril","pelve","relaxamento","bem-estar feminino","autocuidado","flexibilidade","ref_004","lombar","toracica","pescoco","ombros","extensores da coluna","abdominais leves","mobilidade em flexao da coluna","calma, autocuidado e conexao corporal","Referencia: ref_004","Colecao: yoga_hormonal_sop_equilibrio"] |
| Evitar quando | ["dor pelvica intensa","sangramento anormal","febre","gravidez de risco","pos-operatorio","tontura forte","dor aguda","falta de ar","sintomas neurologicos","dor no peito"] |
| Imagem/chave | ref_004_mov_05 |

### Postura do gato

| Campo | Valor |
| --- | --- |
| Slug | ref_001_mov_04 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 1 |
| Objetivo | Pode ajudar a mobilizar a coluna em flexao. |
| Descricao curta | Pode ajudar a mobilizar a coluna em flexao. |
| Como fazer | ["Em quatro apoios, arredondar a coluna para cima com controle.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Empurrar o chao e distribuir a curva pela coluna.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Empurrar o chao e distribuir a curva pela coluna.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Empurrar o chao e distribuir a curva pela coluna."] |
| Respiracao | ["expirar ao arredondar"] |
| Erros comuns | ["Mover so o pescoco ou colapsar ombros."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Empurrar o chao e distribuir a curva pela coluna.","Nao apresentar como tratamento de dor ou correcao de coluna.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/spine-strength-flexibility.","Reaproveitamento visual: REUSED. REUTILIZAR ref_004_mov_05.","Status do video: PLANNED.","Imagens planejadas pendentes: yoga_spine_004_cat_pose_step_01_tabletop.png, yoga_spine_004_cat_pose_step_02_rounding.png, yoga_spine_004_cat_pose_step_03_final.png, yoga_spine_004_cat_pose_step_04_common_mistake.png, yoga_spine_004_cat_pose_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","pos-operatorio sem liberacao","dormencia","crise de hernia"] |
| Recomendado quando | ["rigidez leve nas costas","fortalecimento postural leve","alongamento de coluna","rotina de yoga","gato","coluna","mobilidade","mobilidade, forca leve e flexibilidade da coluna","seguranca, presenca e confianca corporal","yoga","forca leve","flexibilidade","costas","postura","Postura do gato","Cat Pose","7 posturas de yoga para forca e flexibilidade da coluna","7 Yoga Poses to Build Spine Strength and Flexibility","yoga_coluna_forca_flexibilidade","ref_001","ombros","quadril","Referencia: ref_001","Colecao: yoga_coluna_forca_flexibilidade"] |
| Evitar quando | ["dor forte/aguda","lesao recente","pos-operatorio sem liberacao","formigamento","dormencia","perda de forca","tontura forte","falta de ar","dor no peito","dor irradiada","crise de hernia"] |
| Imagem/chave | ref_001_mov_04 |

### Postura dos bracos elevados

| Campo | Valor |
| --- | --- |
| Slug | ref_003_mov_02 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 1 |
| Objetivo | Alongar a frente do corpo e abrir o peito. |
| Descricao curta | Alongar a frente do corpo e abrir o peito. |
| Como fazer | ["A partir da postura da oracao, inspire e eleve os bracos acima da cabeca, alongando o corpo para cima. Incline levemente o tronco para tras apenas se for confortavel."] |
| Dicas de postura | ["Crescer para cima antes de inclinar e manter abdomen levemente ativo.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Inspirar."] |
| Erros comuns | ["Comprimir a lombar e jogar a cabeca para tras."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Faca os movimentos com calma e respeite seus limites. Pare se sentir dor forte, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/surya-namaskar.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: surya_002_hasta_uttanasana_step_01_start.png, surya_002_hasta_uttanasana_step_02_arms_rise.png, surya_002_hasta_uttanasana_step_03_final.png, surya_002_hasta_uttanasana_step_04_common_mistake.png, surya_002_hasta_uttanasana_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor aguda na lombar","dor intensa nos punhos","dor no ombro","tontura","dor lombar ao estender","tontura ao olhar para cima","dor intensa no ombro"] |
| Recomendado quando | ["quero fazer yoga","quero alongar o corpo todo","quero comecar o dia melhor","estou sem energia","quero melhorar minha flexibilidade","quero uma sequencia completa","quero algo para corpo e mente","quero me movimentar pela manha","quero reduzir estresse","quero melhorar postura","rigidez no tronco","abertura do peito","rotina matinal","alongamento leve","expansao respiratoria","abrir peito","alongar bracos","acordar corpo","respiracao","coluna","Postura dos bracos elevados","Hasta Uttanasana / Raised Arms Pose","Saudacao ao Sol - 12 passos para corpo, mente e respiracao","Surya Namaskar - 12 Steps: A Complete Workout for Body, Mind & Soul","surya_namaskar_12_passos","Saudacao ao Sol - 12 passos","yoga","extensao","manha","postura","saudacao ao sol","surya namaskar","energia","flexibilidade","forca","corpo inteiro","mobilidade","equilibrio","estresse","ansiedade leve","ref_003","bracos","ombros","peito","abdomen","deltoides","peitoral","abdominais","extensores da coluna","abertura anterior do tronco e mobilidade de ombros","foco, energia leve e equilibrio entre corpo, mente e respiracao","Referencia: ref_003","Colecao: surya_namaskar_12_passos"] |
| Evitar quando | ["dor forte","dor aguda na lombar","dor intensa nos punhos","dor no ombro","tontura","falta de ar","pressao descontrolada","lesao recente","pos-operatorio","gravidez de risco","dor no peito","formigamento","perda de forca"] |
| Imagem/chave | ref_003_mov_02 |

### Postura dos bracos elevados

| Campo | Valor |
| --- | --- |
| Slug | ref_003_mov_11 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 1 |
| Objetivo | Retornar a extensao suave e abrir o peito antes do fechamento. |
| Descricao curta | Retornar a extensao suave e abrir o peito antes do fechamento. |
| Como fazer | ["Suba com controle, elevando bracos acima da cabeca e alongando o corpo para cima com leve extensao se confortavel."] |
| Dicas de postura | ["Subir com controle, ativar abdomen e alongar a coluna.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Inspirar."] |
| Erros comuns | ["Subir rapido usando lombar."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Faca os movimentos com calma e respeite seus limites. Pare se sentir dor forte, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/yoga/surya-namaskar.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: surya_011_hasta_uttanasana_retorno_step_01_start.png, surya_011_hasta_uttanasana_retorno_step_02_rise_up.png, surya_011_hasta_uttanasana_retorno_step_03_arms_overhead.png, surya_011_hasta_uttanasana_retorno_step_04_final.png, surya_011_hasta_uttanasana_retorno_step_05_common_mistake.png, surya_011_hasta_uttanasana_retorno_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor aguda na lombar","dor intensa nos punhos","dor no ombro","tontura","dor lombar ao estender"] |
| Recomendado quando | ["quero fazer yoga","quero alongar o corpo todo","quero comecar o dia melhor","estou sem energia","quero melhorar minha flexibilidade","quero uma sequencia completa","quero algo para corpo e mente","quero me movimentar pela manha","quero reduzir estresse","quero melhorar postura","retorno da sequencia","postura","respiracao","bracos elevados","retorno","abrir peito","saudacao ao sol","Postura dos bracos elevados","Hasta Uttanasana / Raised Arms Pose","Saudacao ao Sol - 12 passos para corpo, mente e respiracao","Surya Namaskar - 12 Steps: A Complete Workout for Body, Mind & Soul","surya_namaskar_12_passos","Saudacao ao Sol - 12 passos","yoga","extensao","surya namaskar","manha","energia","flexibilidade","forca","corpo inteiro","mobilidade","equilibrio","estresse","ansiedade leve","ref_003","bracos","ombros","peito","abdomen","coluna","deltoides","peitoral","abdominais","extensores da coluna","extensao suave e abertura de peito","foco, energia leve e equilibrio entre corpo, mente e respiracao","Referencia: ref_003","Colecao: surya_namaskar_12_passos"] |
| Evitar quando | ["dor forte","dor aguda na lombar","dor intensa nos punhos","dor no ombro","tontura","falta de ar","pressao descontrolada","lesao recente","pos-operatorio","gravidez de risco","dor no peito","formigamento","perda de forca"] |
| Imagem/chave | ref_003_mov_11 |

### Respiracao alternada pelas narinas

| Campo | Valor |
| --- | --- |
| Slug | ref_004_mov_19 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 1 |
| Objetivo | Pode ajudar a acalmar mente, foco e equilibrio respiratorio. |
| Descricao curta | Postura da colecao REF_004 para acalmar mente, foco e equilibrio respiratorio, com linguagem segura e sem promessa de tratamento. |
| Como fazer | ["Pratique respiracao alternada pelas narinas com respiracao lenta, amplitude confortavel e suporte quando necessario."] |
| Dicas de postura | ["Reduzir amplitude, usar apoio e priorizar respiracao calma.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Respiracao lenta, sem prender o ar."] |
| Erros comuns | ["Forcar amplitude ou comprimir coluna, joelhos, ombros ou pescoco."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Esta colecao nao substitui acompanhamento medico, ginecologico, nutricional ou endocrinologico. Em caso de SOP, dor intensa, sangramento anormal, tontura, gestacao, pos-operatorio, doenca hormonal diagnosticada ou uso de medicacao, busque orientacao profissional.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/yoga/hormonal-balance.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: yoga_hormonal_019_nadi_shodhana_step_01_seated.png, yoga_hormonal_019_nadi_shodhana_step_02_hand_position.png, yoga_hormonal_019_nadi_shodhana_step_03_inhale_one_side.png, yoga_hormonal_019_nadi_shodhana_step_04_switch_side.png, yoga_hormonal_019_nadi_shodhana_step_05_common_mistake.png, yoga_hormonal_019_nadi_shodhana_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","crise respiratoria","tontura","dor pelvica intensa","sangramento anormal"] |
| Recomendado quando | ["tenho SOP","quero yoga para hormonios","quero reduzir estresse","estou ansiosa","quero melhorar meu ciclo","quero yoga para colica leve","quero relaxar","quero alongar quadril","quero uma pratica feminina","quero equilibrio hormonal","estresse","ansiedade leve","foco","pausa mental","Respiracao alternada pelas narinas","Nadi Shodhana","acalmar mente, foco e equilibrio respiratorio","20 posturas de yoga para SOP, equilibrio hormonal e reducao do estresse","20 Yoga Asanas for PCOD & Hormonal Balance","yoga_hormonal_sop_equilibrio","Yoga para SOP e equilibrio hormonal","yoga","SOP","equilibrio hormonal","bem-estar feminino","ovario policistico","ciclo menstrual","respiracao","quadril","pelve","relaxamento","autocuidado","flexibilidade","ref_004","coluna","pernas","peito","musculatura postural","adutores","gluteos","costas","calma, autocuidado e conexao corporal","Referencia: ref_004","Colecao: yoga_hormonal_sop_equilibrio"] |
| Evitar quando | ["falta de ar","crise respiratoria","tontura","dor pelvica intensa","sangramento anormal","febre","gravidez de risco","pos-operatorio","tontura forte","dor aguda","sintomas neurologicos","dor no peito"] |
| Imagem/chave | ref_004_mov_19 |

### Respiracao da abelha

| Campo | Valor |
| --- | --- |
| Slug | ref_004_mov_20 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 1 |
| Objetivo | Pode ajudar a favorecer relaxamento e reducao de estresse por vibracao sonora suave. |
| Descricao curta | Postura da colecao REF_004 para favorecer relaxamento e reducao de estresse por vibracao sonora suave, com linguagem segura e sem promessa de tratamento. |
| Como fazer | ["Pratique respiracao da abelha com respiracao lenta, amplitude confortavel e suporte quando necessario."] |
| Dicas de postura | ["Reduzir amplitude, usar apoio e priorizar respiracao calma.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Respiracao lenta, sem prender o ar."] |
| Erros comuns | ["Forcar amplitude ou comprimir coluna, joelhos, ombros ou pescoco."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Esta colecao nao substitui acompanhamento medico, ginecologico, nutricional ou endocrinologico. Em caso de SOP, dor intensa, sangramento anormal, tontura, gestacao, pos-operatorio, doenca hormonal diagnosticada ou uso de medicacao, busque orientacao profissional.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/yoga/hormonal-balance.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: yoga_hormonal_020_bhramari_pranayama_step_01_seated.png, yoga_hormonal_020_bhramari_pranayama_step_02_hands_to_ears.png, yoga_hormonal_020_bhramari_pranayama_step_03_humming.png, yoga_hormonal_020_bhramari_pranayama_step_04_final.png, yoga_hormonal_020_bhramari_pranayama_step_05_common_mistake.png, yoga_hormonal_020_bhramari_pranayama_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor ou infeccao no ouvido","tontura","desconforto respiratorio","dor pelvica intensa","sangramento anormal"] |
| Recomendado quando | ["tenho SOP","quero yoga para hormonios","quero reduzir estresse","estou ansiosa","quero melhorar meu ciclo","quero yoga para colica leve","quero relaxar","quero alongar quadril","quero uma pratica feminina","quero equilibrio hormonal","ansiedade leve","mente acelerada","relaxamento","foco","Respiracao da abelha","Bhramari Pranayama","favorecer relaxamento e reducao de estresse por vibracao sonora suave","20 posturas de yoga para SOP, equilibrio hormonal e reducao do estresse","20 Yoga Asanas for PCOD & Hormonal Balance","yoga_hormonal_sop_equilibrio","Yoga para SOP e equilibrio hormonal","yoga","SOP","equilibrio hormonal","estresse","bem-estar feminino","ovario policistico","ciclo menstrual","respiracao","quadril","pelve","autocuidado","flexibilidade","ref_004","coluna","pernas","peito","musculatura postural","adutores","gluteos","costas","calma, autocuidado e conexao corporal","Referencia: ref_004","Colecao: yoga_hormonal_sop_equilibrio"] |
| Evitar quando | ["dor ou infeccao no ouvido","tontura","desconforto respiratorio","dor pelvica intensa","sangramento anormal","febre","gravidez de risco","pos-operatorio","tontura forte","dor aguda","falta de ar","sintomas neurologicos","dor no peito"] |
| Imagem/chave | ref_004_mov_20 |

### Torcao sentada

| Campo | Valor |
| --- | --- |
| Slug | ref_001_mov_01 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 1 |
| Objetivo | Pode ajudar a mobilizar a coluna em rotacao e reduzir rigidez leve. |
| Descricao curta | Pode ajudar a mobilizar a coluna em rotacao e reduzir rigidez leve. |
| Como fazer | ["Sentar com coluna longa, cruzar/organizar as pernas e girar o tronco suavemente para um lado, repetindo do outro.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Crescer a coluna antes de girar e manter a torcao confortavel.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Crescer a coluna antes de girar e manter a torcao confortavel.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Crescer a coluna antes de girar e manter a torcao confortavel."] |
| Respiracao | ["lenta, expirar na torcao"] |
| Erros comuns | ["Arredondar a coluna e puxar a torcao com forca."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Crescer a coluna antes de girar e manter a torcao confortavel.","Nao apresentar como tratamento de dor ou correcao de coluna.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/spine-strength-flexibility.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO salvo se houver twist sentado ja cadastrado.","Status do video: PLANNED.","Imagens planejadas pendentes: yoga_spine_001_seated_twist_step_01_start.png, yoga_spine_001_seated_twist_step_02_rotate_right.png, yoga_spine_001_seated_twist_step_03_rotate_left.png, yoga_spine_001_seated_twist_step_04_common_mistake.png, yoga_spine_001_seated_twist_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","pos-operatorio sem liberacao","dormencia","crise de hernia"] |
| Recomendado quando | ["rigidez leve nas costas","fortalecimento postural leve","alongamento de coluna","rotina de yoga","coluna","torcao","mobilidade","yoga","mobilidade, forca leve e flexibilidade da coluna","seguranca, presenca e confianca corporal","forca leve","flexibilidade","costas","postura","Torcao sentada","Seated Twist","7 posturas de yoga para forca e flexibilidade da coluna","7 Yoga Poses to Build Spine Strength and Flexibility","yoga_coluna_forca_flexibilidade","ref_001","coluna toracica","lombar","quadril","Referencia: ref_001","Colecao: yoga_coluna_forca_flexibilidade"] |
| Evitar quando | ["dor forte/aguda","lesao recente","pos-operatorio sem liberacao","formigamento","dormencia","perda de forca","tontura forte","falta de ar","dor no peito","dor irradiada","crise de hernia"] |
| Imagem/chave | ref_001_mov_01 |

### Yoga de bolso: coluna leve

| Campo | Valor |
| --- | --- |
| Slug | yoga-bolso-coluna-leve |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 1 |
| Objetivo | Trazer movimento suave ao corpo sem virar treino intenso. |
| Descricao curta | Uma pratica curta de yoga leve para soltar coluna, ombros e respiracao. |
| Como fazer | ["Sente-se ou fique em pe com apoio.","Cresca a coluna inspirando.","Incline o tronco suavemente para um lado e depois para o outro.","Gire ombros devagar.","Finalize com tres respiracoes longas."] |
| Dicas de postura | ["Nao force amplitude.","Mantenha o pescoco confortavel.","Use cadeira como apoio se precisar."] |
| Respiracao | ["Inspire ao alongar a coluna.","Expire ao inclinar ou soltar ombros.","Volte ao natural se ficar desconfortavel."] |
| Erros comuns | ["Fazer rapido demais.","Forcar torcao.","Comparar sua mobilidade com imagens de yoga."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando o corpo estiver rigido.","Quando voce quiser movimento leve sem sair do conceito de pausa."] |
| Evitar quando | ["Evite se houver dor na coluna, tontura ou desconforto incomum."] |
| Imagem/chave | yoga-bolso-coluna-leve |

### Yoga de bolso: pausa no chao

| Campo | Valor |
| --- | --- |
| Slug | yoga-bolso-pausa-no-chao |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 1 |
| Objetivo | Criar um fechamento corporal calmo com posturas simples e seguras. |
| Descricao curta | Uma sequencia muito leve no chao para desacelerar corpo e mente. |
| Como fazer | ["Sente-se em uma superficie confortavel.","Apoie as maos nas pernas e respire.","Leve o tronco levemente a frente sem forcar.","Volte devagar e abrace os joelhos se for confortavel.","Finalize sentado, percebendo o ritmo da respiracao."] |
| Dicas de postura | ["Use almofada se precisar.","Mantenha joelhos relaxados.","Nao force lombar ou quadril."] |
| Respiracao | ["Inspire ao crescer a coluna.","Expire ao aproximar o tronco.","Respire naturalmente no final."] |
| Erros comuns | ["Forcar flexibilidade.","Prender o ar.","Ficar em posicao que causa dor."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["No fim do dia.","Quando voce quiser desacelerar sem tela."] |
| Evitar quando | ["Evite se levantar ou deitar no chao for desconfortavel ou inseguro."] |
| Imagem/chave | yoga-bolso-pausa-no-chao |

### Angulo lateral estendido

| Campo | Valor |
| --- | --- |
| Slug | ref_004_mov_12 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Pode ajudar a alongar lateral do tronco, abrir quadril e fortalecer pernas. |
| Descricao curta | Postura da colecao REF_004 para alongar lateral do tronco, abrir quadril e fortalecer pernas, com linguagem segura e sem promessa de tratamento. |
| Como fazer | ["Pratique angulo lateral estendido com respiracao lenta, amplitude confortavel e suporte quando necessario."] |
| Dicas de postura | ["Reduzir amplitude, usar apoio e priorizar respiracao calma.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Respire de forma lenta e nasal."] |
| Erros comuns | ["Forcar amplitude ou comprimir coluna, joelhos, ombros ou pescoco."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Esta colecao nao substitui acompanhamento medico, ginecologico, nutricional ou endocrinologico. Em caso de SOP, dor intensa, sangramento anormal, tontura, gestacao, pos-operatorio, doenca hormonal diagnosticada ou uso de medicacao, busque orientacao profissional.","Status dos assets: NEEDS_REVIEW. Imagens vinculadas: 5. Imagens planejadas pendentes: 1. Base: /instructional-images/yoga/hormonal-balance.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: yoga_hormonal_012_parsvakonasana_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor no joelho","tontura","instabilidade","dor pelvica intensa","sangramento anormal"] |
| Recomendado quando | ["tenho SOP","quero yoga para hormonios","quero reduzir estresse","estou ansiosa","quero melhorar meu ciclo","quero yoga para colica leve","quero relaxar","quero alongar quadril","quero uma pratica feminina","quero equilibrio hormonal","mobilidade lateral","quadril","postura","Angulo lateral estendido","Parsvakonasana","alongar lateral do tronco, abrir quadril e fortalecer pernas","20 posturas de yoga para SOP, equilibrio hormonal e reducao do estresse","20 Yoga Asanas for PCOD & Hormonal Balance","yoga_hormonal_sop_equilibrio","Yoga para SOP e equilibrio hormonal","yoga","SOP","equilibrio hormonal","estresse","bem-estar feminino","ovario policistico","ciclo menstrual","ansiedade leve","respiracao","pelve","relaxamento","autocuidado","flexibilidade","ref_004","coluna","pernas","peito","musculatura postural","adutores","gluteos","costas","calma, autocuidado e conexao corporal","Referencia: ref_004","Colecao: yoga_hormonal_sop_equilibrio"] |
| Evitar quando | ["dor no joelho","tontura","instabilidade","dor pelvica intensa","sangramento anormal","febre","gravidez de risco","pos-operatorio","tontura forte","dor aguda","falta de ar","sintomas neurologicos","dor no peito"] |
| Imagem/chave | ref_004_mov_12 |

### Angulo lateral estendido

| Campo | Valor |
| --- | --- |
| Slug | ref_001_mov_07 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Pode ajudar a fortalecer pernas e alongar a lateral do corpo. |
| Descricao curta | Pode ajudar a fortalecer pernas e alongar a lateral do corpo. |
| Como fazer | ["Base ampla, joelho da frente flexionado, braco superior alongado na diagonal.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Joelho alinhado, peito aberto e apoio estavel.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Joelho alinhado, peito aberto e apoio estavel.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Joelho alinhado, peito aberto e apoio estavel."] |
| Respiracao | ["respiracao lateral ampla"] |
| Erros comuns | ["Joelho desalinhado e tronco colapsado."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Joelho alinhado, peito aberto e apoio estavel.","Nao apresentar como tratamento de dor ou correcao de coluna.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/spine-strength-flexibility.","Reaproveitamento visual: REUSED. REUTILIZAR ref_004_mov_12 se asset existir.","Status do video: PLANNED.","Imagens planejadas pendentes: yoga_spine_007_extended_side_angle_step_01_wide_stance.png, yoga_spine_007_extended_side_angle_step_02_knee_bend.png, yoga_spine_007_extended_side_angle_step_03_final.png, yoga_spine_007_extended_side_angle_step_04_common_mistake.png, yoga_spine_007_extended_side_angle_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","pos-operatorio sem liberacao","dormencia","crise de hernia"] |
| Recomendado quando | ["rigidez leve nas costas","fortalecimento postural leve","alongamento de coluna","rotina de yoga","parsvakonasana","angulo lateral","quadril","lateral","mobilidade, forca leve e flexibilidade da coluna","seguranca, presenca e confianca corporal","yoga","coluna","forca leve","flexibilidade","mobilidade","costas","postura","Angulo lateral estendido","Extended Side Angle","7 posturas de yoga para forca e flexibilidade da coluna","7 Yoga Poses to Build Spine Strength and Flexibility","yoga_coluna_forca_flexibilidade","ref_001","pernas","lateral do tronco","ombros","Referencia: ref_001","Colecao: yoga_coluna_forca_flexibilidade"] |
| Evitar quando | ["dor forte/aguda","lesao recente","pos-operatorio sem liberacao","formigamento","dormencia","perda de forca","tontura forte","falta de ar","dor no peito","dor irradiada","crise de hernia"] |
| Imagem/chave | ref_001_mov_07 |

### Cabeca ao joelho

| Campo | Valor |
| --- | --- |
| Slug | ref_004_mov_14 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Pode ajudar a alongar uma perna por vez e mobilizar quadril e coluna. |
| Descricao curta | Postura da colecao REF_004 para alongar uma perna por vez e mobilizar quadril e coluna, com linguagem segura e sem promessa de tratamento. |
| Como fazer | ["Pratique cabeca ao joelho com respiracao lenta, amplitude confortavel e suporte quando necessario."] |
| Dicas de postura | ["Reduzir amplitude, usar apoio e priorizar respiracao calma.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Respire de forma lenta e nasal."] |
| Erros comuns | ["Forcar amplitude ou comprimir coluna, joelhos, ombros ou pescoco."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Esta colecao nao substitui acompanhamento medico, ginecologico, nutricional ou endocrinologico. Em caso de SOP, dor intensa, sangramento anormal, tontura, gestacao, pos-operatorio, doenca hormonal diagnosticada ou uso de medicacao, busque orientacao profissional.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/yoga/hormonal-balance.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: yoga_hormonal_014_janu_sirsasana_step_01_seated.png, yoga_hormonal_014_janu_sirsasana_step_02_one_knee_bent.png, yoga_hormonal_014_janu_sirsasana_step_03_forward_reach.png, yoga_hormonal_014_janu_sirsasana_step_04_final.png, yoga_hormonal_014_janu_sirsasana_step_05_common_mistake.png, yoga_hormonal_014_janu_sirsasana_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor no joelho","dor lombar aguda","dor pelvica intensa","sangramento anormal"] |
| Recomendado quando | ["tenho SOP","quero yoga para hormonios","quero reduzir estresse","estou ansiosa","quero melhorar meu ciclo","quero yoga para colica leve","quero relaxar","quero alongar quadril","quero uma pratica feminina","quero equilibrio hormonal","rigidez posterior","assimetria","relaxamento","Cabeca ao joelho","Janu Sirsasana","alongar uma perna por vez e mobilizar quadril e coluna","20 posturas de yoga para SOP, equilibrio hormonal e reducao do estresse","20 Yoga Asanas for PCOD & Hormonal Balance","yoga_hormonal_sop_equilibrio","Yoga para SOP e equilibrio hormonal","yoga","SOP","equilibrio hormonal","estresse","bem-estar feminino","ovario policistico","ciclo menstrual","ansiedade leve","respiracao","quadril","pelve","autocuidado","flexibilidade","ref_004","coluna","pernas","peito","musculatura postural","adutores","gluteos","costas","calma, autocuidado e conexao corporal","Referencia: ref_004","Colecao: yoga_hormonal_sop_equilibrio"] |
| Evitar quando | ["dor no joelho","dor lombar aguda","dor pelvica intensa","sangramento anormal","febre","gravidez de risco","pos-operatorio","tontura forte","dor aguda","falta de ar","sintomas neurologicos","dor no peito"] |
| Imagem/chave | ref_004_mov_14 |

### Cao olhando para baixo

| Campo | Valor |
| --- | --- |
| Slug | ref_004_mov_10 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Pode ajudar a alongar cadeia posterior e fortalecer ombros e bracos. |
| Descricao curta | Postura da colecao REF_004 para alongar cadeia posterior e fortalecer ombros e bracos, com linguagem segura e sem promessa de tratamento. |
| Como fazer | ["Pratique cao olhando para baixo com respiracao lenta, amplitude confortavel e suporte quando necessario."] |
| Dicas de postura | ["Reduzir amplitude, usar apoio e priorizar respiracao calma.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Respire de forma lenta e nasal."] |
| Erros comuns | ["Forcar amplitude ou comprimir coluna, joelhos, ombros ou pescoco."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Esta colecao nao substitui acompanhamento medico, ginecologico, nutricional ou endocrinologico. Em caso de SOP, dor intensa, sangramento anormal, tontura, gestacao, pos-operatorio, doenca hormonal diagnosticada ou uso de medicacao, busque orientacao profissional.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/yoga/hormonal-balance.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: yoga_hormonal_010_adho_mukha_svanasana_step_01_tabletop.png, yoga_hormonal_010_adho_mukha_svanasana_step_02_hips_lift.png, yoga_hormonal_010_adho_mukha_svanasana_step_03_push_back.png, yoga_hormonal_010_adho_mukha_svanasana_step_04_final.png, yoga_hormonal_010_adho_mukha_svanasana_step_05_common_mistake.png, yoga_hormonal_010_adho_mukha_svanasana_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor nos punhos","dor no ombro","tontura","dor pelvica intensa","sangramento anormal"] |
| Recomendado quando | ["tenho SOP","quero yoga para hormonios","quero reduzir estresse","estou ansiosa","quero melhorar meu ciclo","quero yoga para colica leve","quero relaxar","quero alongar quadril","quero uma pratica feminina","quero equilibrio hormonal","alongamento geral","mobilidade","energia","Cao olhando para baixo","Adho Mukha Svanasana","alongar cadeia posterior e fortalecer ombros e bracos","20 posturas de yoga para SOP, equilibrio hormonal e reducao do estresse","20 Yoga Asanas for PCOD & Hormonal Balance","yoga_hormonal_sop_equilibrio","Yoga para SOP e equilibrio hormonal","yoga","SOP","equilibrio hormonal","estresse","bem-estar feminino","ovario policistico","ciclo menstrual","ansiedade leve","respiracao","quadril","pelve","relaxamento","autocuidado","flexibilidade","ref_004","coluna","pernas","peito","musculatura postural","adutores","gluteos","costas","calma, autocuidado e conexao corporal","Referencia: ref_004","Colecao: yoga_hormonal_sop_equilibrio"] |
| Evitar quando | ["dor nos punhos","dor no ombro","tontura","pressao descontrolada","dor pelvica intensa","sangramento anormal","febre","gravidez de risco","pos-operatorio","tontura forte","dor aguda","falta de ar","sintomas neurologicos","dor no peito"] |
| Imagem/chave | ref_004_mov_10 |

### Flexao em pe com maos aos pes

| Campo | Valor |
| --- | --- |
| Slug | ref_003_mov_03 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Alongar cadeia posterior e mobilizar a coluna em flexao. |
| Descricao curta | Alongar cadeia posterior e mobilizar a coluna em flexao. |
| Como fazer | ["Expire e incline o tronco a frente a partir do quadril, levando as maos em direcao ao chao, pes ou tornozelos. Mantenha joelhos suavemente flexionados se necessario."] |
| Dicas de postura | ["Dobrar levemente os joelhos e aproximar o abdomen das coxas com controle.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Expirar."] |
| Erros comuns | ["Forcar a lombar com joelhos travados."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Faca os movimentos com calma e respeite seus limites. Pare se sentir dor forte, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/yoga/surya-namaskar.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: surya_003_padahastasana_step_01_start.png, surya_003_padahastasana_step_02_hip_hinge.png, surya_003_padahastasana_step_03_hands_down.png, surya_003_padahastasana_step_04_final.png, surya_003_padahastasana_step_05_common_mistake.png, surya_003_padahastasana_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor aguda na lombar","dor intensa nos punhos","dor no ombro","tontura","dor lombar aguda","tontura ao dobrar para frente","pressao baixa com sintomas","dor ciatica intensa"] |
| Recomendado quando | ["quero fazer yoga","quero alongar o corpo todo","quero comecar o dia melhor","estou sem energia","quero melhorar minha flexibilidade","quero uma sequencia completa","quero algo para corpo e mente","quero me movimentar pela manha","quero reduzir estresse","quero melhorar postura","rigidez nas pernas","alongamento posterior","mobilidade de coluna","rotina de flexibilidade","alongar pernas","posterior de coxa","flexao a frente","coluna","rigidez","Flexao em pe com maos aos pes","Padahastasana / Hand to Foot Pose","Saudacao ao Sol - 12 passos para corpo, mente e respiracao","Surya Namaskar - 12 Steps: A Complete Workout for Body, Mind & Soul","surya_namaskar_12_passos","Saudacao ao Sol - 12 passos","yoga","alongamento","posterior","flexibilidade","saudacao ao sol","surya namaskar","manha","energia","forca","postura","respiracao","corpo inteiro","mobilidade","equilibrio","estresse","ansiedade leve","ref_003","posteriores de coxa","panturrilhas","quadril","isquiotibiais","lombar","gluteos","alongamento posterior e flexibilidade","foco, energia leve e equilibrio entre corpo, mente e respiracao","Referencia: ref_003","Colecao: surya_namaskar_12_passos"] |
| Evitar quando | ["dor forte","dor aguda na lombar","dor intensa nos punhos","dor no ombro","tontura","falta de ar","pressao descontrolada","lesao recente","pos-operatorio","gravidez de risco","dor no peito","formigamento","perda de forca"] |
| Imagem/chave | ref_003_mov_03 |

### Flexao em pe com maos aos pes

| Campo | Valor |
| --- | --- |
| Slug | ref_003_mov_10 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Retornar a flexao a frente e alongar cadeia posterior. |
| Descricao curta | Retornar a flexao a frente e alongar cadeia posterior. |
| Como fazer | ["Leve a perna de tras a frente, aproximando os pes, e retorne a flexao em pe com maos proximas aos pes."] |
| Dicas de postura | ["Aproximar os pes com controle e suavizar joelhos se necessario.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Expirar."] |
| Erros comuns | ["Subir rapido demais ou travar joelhos."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Faca os movimentos com calma e respeite seus limites. Pare se sentir dor forte, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/yoga/surya-namaskar.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: surya_010_padahastasana_retorno_step_01_start.png, surya_010_padahastasana_retorno_step_02_step_forward.png, surya_010_padahastasana_retorno_step_03_fold_return.png, surya_010_padahastasana_retorno_step_04_final.png, surya_010_padahastasana_retorno_step_05_common_mistake.png, surya_010_padahastasana_retorno_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor aguda na lombar","dor intensa nos punhos","dor no ombro","tontura","dor lombar aguda","ciatica intensa"] |
| Recomendado quando | ["quero fazer yoga","quero alongar o corpo todo","quero comecar o dia melhor","estou sem energia","quero melhorar minha flexibilidade","quero uma sequencia completa","quero algo para corpo e mente","quero me movimentar pela manha","quero reduzir estresse","quero melhorar postura","alongamento posterior","mobilidade","retorno da sequencia","flexao a frente","retorno","padahastasana","posterior de coxa","Flexao em pe com maos aos pes","Padahastasana / Hand to Foot Pose","Saudacao ao Sol - 12 passos para corpo, mente e respiracao","Surya Namaskar - 12 Steps: A Complete Workout for Body, Mind & Soul","surya_namaskar_12_passos","Saudacao ao Sol - 12 passos","yoga","alongamento","posterior","saudacao ao sol","surya namaskar","manha","energia","flexibilidade","forca","postura","respiracao","corpo inteiro","equilibrio","estresse","ansiedade leve","ref_003","coluna","posteriores de coxa","panturrilhas","quadril","isquiotibiais","lombar","gluteos","retorno controlado e alongamento posterior","foco, energia leve e equilibrio entre corpo, mente e respiracao","Referencia: ref_003","Colecao: surya_namaskar_12_passos"] |
| Evitar quando | ["dor forte","dor aguda na lombar","dor intensa nos punhos","dor no ombro","tontura","falta de ar","pressao descontrolada","lesao recente","pos-operatorio","gravidez de risco","dor no peito","formigamento","perda de forca"] |
| Imagem/chave | ref_003_mov_10 |

### Flexao sentada a frente

| Campo | Valor |
| --- | --- |
| Slug | ref_004_mov_13 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Pode ajudar a alongar cadeia posterior e relaxar a coluna. |
| Descricao curta | Postura da colecao REF_004 para alongar cadeia posterior e relaxar a coluna, com linguagem segura e sem promessa de tratamento. |
| Como fazer | ["Pratique flexao sentada a frente com respiracao lenta, amplitude confortavel e suporte quando necessario."] |
| Dicas de postura | ["Reduzir amplitude, usar apoio e priorizar respiracao calma.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Respire de forma lenta e nasal."] |
| Erros comuns | ["Forcar amplitude ou comprimir coluna, joelhos, ombros ou pescoco."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Esta colecao nao substitui acompanhamento medico, ginecologico, nutricional ou endocrinologico. Em caso de SOP, dor intensa, sangramento anormal, tontura, gestacao, pos-operatorio, doenca hormonal diagnosticada ou uso de medicacao, busque orientacao profissional.","Status dos assets: NEEDS_REVIEW. Imagens vinculadas: 4. Imagens planejadas pendentes: 4. Base: /instructional-images/yoga/hormonal-balance.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: yoga_hormonal_013_paschimottanasana_step_03_progression.png, yoga_hormonal_013_paschimottanasana_step_04_final.png, yoga_hormonal_013_paschimottanasana_step_05_common_mistake.png, yoga_hormonal_013_paschimottanasana_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor lombar aguda","ciatica intensa","dor pelvica intensa","sangramento anormal"] |
| Recomendado quando | ["tenho SOP","quero yoga para hormonios","quero reduzir estresse","estou ansiosa","quero melhorar meu ciclo","quero yoga para colica leve","quero relaxar","quero alongar quadril","quero uma pratica feminina","quero equilibrio hormonal","flexibilidade","relaxamento","rigidez posterior","Flexao sentada a frente","Paschimottanasana","alongar cadeia posterior e relaxar a coluna","20 posturas de yoga para SOP, equilibrio hormonal e reducao do estresse","20 Yoga Asanas for PCOD & Hormonal Balance","yoga_hormonal_sop_equilibrio","Yoga para SOP e equilibrio hormonal","yoga","SOP","equilibrio hormonal","estresse","bem-estar feminino","ovario policistico","ciclo menstrual","ansiedade leve","respiracao","quadril","pelve","autocuidado","ref_004","coluna","pernas","peito","musculatura postural","adutores","gluteos","costas","calma, autocuidado e conexao corporal","Referencia: ref_004","Colecao: yoga_hormonal_sop_equilibrio"] |
| Evitar quando | ["dor lombar aguda","ciatica intensa","dor pelvica intensa","sangramento anormal","febre","gravidez de risco","pos-operatorio","tontura forte","dor aguda","falta de ar","sintomas neurologicos","dor no peito"] |
| Imagem/chave | ref_004_mov_13 |

### Flexao sentada a frente

| Campo | Valor |
| --- | --- |
| Slug | ref_001_mov_02 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Pode ajudar a alongar cadeia posterior e mobilizar a coluna com controle. |
| Descricao curta | Pode ajudar a alongar cadeia posterior e mobilizar a coluna com controle. |
| Como fazer | ["Sentar com pernas a frente e inclinar a partir do quadril, alcancando pernas/pes sem forcar.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Manter joelhos suaves se necessario e coluna longa.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Manter joelhos suaves se necessario e coluna longa.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Manter joelhos suaves se necessario e coluna longa."] |
| Respiracao | ["expirar ao inclinar, inspirar para alongar a coluna"] |
| Erros comuns | ["Colapsar a coluna e puxar os pes com forca."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Manter joelhos suaves se necessario e coluna longa.","Nao apresentar como tratamento de dor ou correcao de coluna.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/spine-strength-flexibility.","Reaproveitamento visual: REUSED. REUTILIZAR ref_004_mov_13 Paschimottanasana se asset existir.","Status do video: PLANNED.","Imagens planejadas pendentes: yoga_spine_002_seated_forward_fold_step_01_start.png, yoga_spine_002_seated_forward_fold_step_02_hip_hinge.png, yoga_spine_002_seated_forward_fold_step_03_final.png, yoga_spine_002_seated_forward_fold_step_04_common_mistake.png, yoga_spine_002_seated_forward_fold_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","pos-operatorio sem liberacao","dormencia","crise de hernia"] |
| Recomendado quando | ["rigidez leve nas costas","fortalecimento postural leve","alongamento de coluna","rotina de yoga","posterior","flexao sentada","paschimottanasana","coluna","mobilidade, forca leve e flexibilidade da coluna","seguranca, presenca e confianca corporal","yoga","forca leve","flexibilidade","mobilidade","costas","postura","Flexao sentada a frente","Seated Forward Fold","7 posturas de yoga para forca e flexibilidade da coluna","7 Yoga Poses to Build Spine Strength and Flexibility","yoga_coluna_forca_flexibilidade","ref_001","posteriores de coxa","lombar","Referencia: ref_001","Colecao: yoga_coluna_forca_flexibilidade"] |
| Evitar quando | ["dor forte/aguda","lesao recente","pos-operatorio sem liberacao","formigamento","dormencia","perda de forca","tontura forte","falta de ar","dor no peito","dor irradiada","crise de hernia"] |
| Imagem/chave | ref_001_mov_02 |

### Joelhos ao peito

| Campo | Valor |
| --- | --- |
| Slug | ref_004_mov_15 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Pode ajudar a relaxar lombar e abdomen com joelhos ao peito. |
| Descricao curta | Postura da colecao REF_004 para relaxar lombar e abdomen com joelhos ao peito, com linguagem segura e sem promessa de tratamento. |
| Como fazer | ["Pratique joelhos ao peito com respiracao lenta, amplitude confortavel e suporte quando necessario."] |
| Dicas de postura | ["Reduzir amplitude, usar apoio e priorizar respiracao calma.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Respire de forma lenta e nasal."] |
| Erros comuns | ["Forcar amplitude ou comprimir coluna, joelhos, ombros ou pescoco."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Esta colecao nao substitui acompanhamento medico, ginecologico, nutricional ou endocrinologico. Em caso de SOP, dor intensa, sangramento anormal, tontura, gestacao, pos-operatorio, doenca hormonal diagnosticada ou uso de medicacao, busque orientacao profissional.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/yoga/hormonal-balance.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: yoga_hormonal_015_pavanamuktasana_step_01_lie_down.png, yoga_hormonal_015_pavanamuktasana_step_02_one_knee_in.png, yoga_hormonal_015_pavanamuktasana_step_03_both_knees_in.png, yoga_hormonal_015_pavanamuktasana_step_04_final.png, yoga_hormonal_015_pavanamuktasana_step_05_common_mistake.png, yoga_hormonal_015_pavanamuktasana_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor abdominal forte","gravidez avancada sem orientacao","dor pelvica intensa","sangramento anormal"] |
| Recomendado quando | ["tenho SOP","quero yoga para hormonios","quero reduzir estresse","estou ansiosa","quero melhorar meu ciclo","quero yoga para colica leve","quero relaxar","quero alongar quadril","quero uma pratica feminina","quero equilibrio hormonal","desconforto abdominal leve","lombar cansada","relaxamento","Joelhos ao peito","Pavanamuktasana","relaxar lombar e abdomen com joelhos ao peito","20 posturas de yoga para SOP, equilibrio hormonal e reducao do estresse","20 Yoga Asanas for PCOD & Hormonal Balance","yoga_hormonal_sop_equilibrio","Yoga para SOP e equilibrio hormonal","yoga","SOP","equilibrio hormonal","estresse","bem-estar feminino","ovario policistico","ciclo menstrual","ansiedade leve","respiracao","quadril","pelve","autocuidado","flexibilidade","ref_004","coluna","pernas","peito","musculatura postural","adutores","gluteos","costas","calma, autocuidado e conexao corporal","Referencia: ref_004","Colecao: yoga_hormonal_sop_equilibrio"] |
| Evitar quando | ["dor abdominal forte","cirurgia recente","gravidez avancada sem orientacao","dor pelvica intensa","sangramento anormal","febre","gravidez de risco","pos-operatorio","tontura forte","dor aguda","falta de ar","sintomas neurologicos","dor no peito"] |
| Imagem/chave | ref_004_mov_15 |

### Pernas na parede

| Campo | Valor |
| --- | --- |
| Slug | ref_004_mov_16 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Pode ajudar a favorecer relaxamento e retorno venoso leve com pernas elevadas. |
| Descricao curta | Postura da colecao REF_004 para favorecer relaxamento e retorno venoso leve com pernas elevadas, com linguagem segura e sem promessa de tratamento. |
| Como fazer | ["Pratique pernas na parede com respiracao lenta, amplitude confortavel e suporte quando necessario."] |
| Dicas de postura | ["Reduzir amplitude, usar apoio e priorizar respiracao calma.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Respire de forma lenta e nasal."] |
| Erros comuns | ["Forcar amplitude ou comprimir coluna, joelhos, ombros ou pescoco."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Esta colecao nao substitui acompanhamento medico, ginecologico, nutricional ou endocrinologico. Em caso de SOP, dor intensa, sangramento anormal, tontura, gestacao, pos-operatorio, doenca hormonal diagnosticada ou uso de medicacao, busque orientacao profissional.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/yoga/hormonal-balance.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: yoga_hormonal_016_viparita_karani_step_01_sit_near_wall.png, yoga_hormonal_016_viparita_karani_step_02_legs_up.png, yoga_hormonal_016_viparita_karani_step_03_adjust_hips.png, yoga_hormonal_016_viparita_karani_step_04_final.png, yoga_hormonal_016_viparita_karani_step_05_common_mistake.png, yoga_hormonal_016_viparita_karani_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","glaucoma","desconforto com inversoes","dor pelvica intensa","sangramento anormal"] |
| Recomendado quando | ["tenho SOP","quero yoga para hormonios","quero reduzir estresse","estou ansiosa","quero melhorar meu ciclo","quero yoga para colica leve","quero relaxar","quero alongar quadril","quero uma pratica feminina","quero equilibrio hormonal","pernas cansadas","relaxamento","estresse","fim do dia","Pernas na parede","Viparita Karani","favorecer relaxamento e retorno venoso leve com pernas elevadas","20 posturas de yoga para SOP, equilibrio hormonal e reducao do estresse","20 Yoga Asanas for PCOD & Hormonal Balance","yoga_hormonal_sop_equilibrio","Yoga para SOP e equilibrio hormonal","yoga","SOP","equilibrio hormonal","bem-estar feminino","ovario policistico","ciclo menstrual","ansiedade leve","respiracao","quadril","pelve","autocuidado","flexibilidade","ref_004","coluna","pernas","peito","musculatura postural","adutores","gluteos","costas","calma, autocuidado e conexao corporal","Referencia: ref_004","Colecao: yoga_hormonal_sop_equilibrio"] |
| Evitar quando | ["glaucoma","pressao descontrolada","desconforto com inversoes","dor pelvica intensa","sangramento anormal","febre","gravidez de risco","pos-operatorio","tontura forte","dor aguda","falta de ar","sintomas neurologicos","dor no peito"] |
| Imagem/chave | ref_004_mov_16 |

### Postura da cobra

| Campo | Valor |
| --- | --- |
| Slug | ref_003_mov_07 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Mobilizar coluna em extensao e abrir o peito. |
| Descricao curta | Mobilizar coluna em extensao e abrir o peito. |
| Como fazer | ["Deslize o tronco para frente e eleve o peito com as maos apoiadas no chao, mantendo ombros longe das orelhas e extensao confortavel da coluna."] |
| Dicas de postura | ["Elevar o peito com controle, ombros baixos e extensao distribuida.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Inspirar."] |
| Erros comuns | ["Empurrar demais com os bracos e comprimir a lombar."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Faca os movimentos com calma e respeite seus limites. Pare se sentir dor forte, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/yoga/surya-namaskar.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: surya_007_bhujangasana_step_01_start.png, surya_007_bhujangasana_step_02_slide_forward.png, surya_007_bhujangasana_step_03_chest_lift.png, surya_007_bhujangasana_step_04_final.png, surya_007_bhujangasana_step_05_common_mistake.png, surya_007_bhujangasana_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor aguda na lombar","dor intensa nos punhos","dor no ombro","tontura","dor lombar aguda","compressao lombar","gravidez avancada","dor nos punhos ou ombros"] |
| Recomendado quando | ["quero fazer yoga","quero alongar o corpo todo","quero comecar o dia melhor","estou sem energia","quero melhorar minha flexibilidade","quero uma sequencia completa","quero algo para corpo e mente","quero me movimentar pela manha","quero reduzir estresse","quero melhorar postura","abertura de peito","mobilidade da coluna","postura","sequencia de yoga","cobra","abrir peito","coluna","lombar","yoga","Postura da cobra","Bhujangasana / Cobra Pose","Saudacao ao Sol - 12 passos para corpo, mente e respiracao","Surya Namaskar - 12 Steps: A Complete Workout for Body, Mind & Soul","surya_namaskar_12_passos","Saudacao ao Sol - 12 passos","extensao","peito","saudacao ao sol","surya namaskar","manha","energia","flexibilidade","forca","respiracao","corpo inteiro","mobilidade","equilibrio","estresse","ansiedade leve","ref_003","abdomen","ombros","extensores da coluna","gluteos leves","peitoral","extensao suave de coluna e abertura de peito","foco, energia leve e equilibrio entre corpo, mente e respiracao","Referencia: ref_003","Colecao: surya_namaskar_12_passos"] |
| Evitar quando | ["dor forte","dor aguda na lombar","dor intensa nos punhos","dor no ombro","tontura","falta de ar","pressao descontrolada","lesao recente","pos-operatorio","gravidez de risco","dor no peito","formigamento","perda de forca"] |
| Imagem/chave | ref_003_mov_07 |

### Postura da cobra

| Campo | Valor |
| --- | --- |
| Slug | ref_004_mov_07 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Abrir o peito e mobilizar a coluna em extensao. |
| Descricao curta | Abrir o peito e mobilizar a coluna em extensao. |
| Como fazer | ["Deite de barriga para baixo e eleve o peito com controle, mantendo ombros longe das orelhas."] |
| Dicas de postura | ["Elevar suavemente, peito aberto e ombros baixos.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Inspirar."] |
| Erros comuns | ["Empurrar demais com bracos e comprimir a lombar."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Esta colecao nao substitui acompanhamento medico, ginecologico, nutricional ou endocrinologico. Em caso de SOP, dor intensa, sangramento anormal, tontura, gestacao, pos-operatorio, doenca hormonal diagnosticada ou uso de medicacao, busque orientacao profissional.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/yoga/hormonal-balance.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: yoga_hormonal_007_bhujangasana_step_01_prone.png, yoga_hormonal_007_bhujangasana_step_02_hands_under_shoulders.png, yoga_hormonal_007_bhujangasana_step_03_chest_lift.png, yoga_hormonal_007_bhujangasana_step_04_final.png, yoga_hormonal_007_bhujangasana_step_05_common_mistake.png, yoga_hormonal_007_bhujangasana_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor pelvica intensa","sangramento anormal","dor lombar aguda","compressao lombar","gravidez avancada sem orientacao"] |
| Recomendado quando | ["tenho SOP","quero yoga para hormonios","quero reduzir estresse","estou ansiosa","quero melhorar meu ciclo","quero yoga para colica leve","quero relaxar","quero alongar quadril","quero uma pratica feminina","quero equilibrio hormonal","postura","abrir peito","mobilidade de coluna","ativacao leve","cobra","bhujangasana","peito","coluna","Postura da cobra","Bhujangasana","20 posturas de yoga para SOP, equilibrio hormonal e reducao do estresse","20 Yoga Asanas for PCOD & Hormonal Balance","yoga_hormonal_sop_equilibrio","Yoga para SOP e equilibrio hormonal","yoga","SOP","ovario policistico","equilibrio hormonal","ciclo menstrual","estresse","ansiedade leve","respiracao","quadril","pelve","relaxamento","bem-estar feminino","autocuidado","flexibilidade","ref_004","abdomen","ombros","extensores da coluna","peitoral","abertura de peito e extensao suave da coluna","calma, autocuidado e conexao corporal","Referencia: ref_004","Colecao: yoga_hormonal_sop_equilibrio"] |
| Evitar quando | ["dor pelvica intensa","sangramento anormal","febre","gravidez de risco","pos-operatorio","tontura forte","dor aguda","falta de ar","sintomas neurologicos","dor no peito"] |
| Imagem/chave | ref_004_mov_07 |

### Postura da guirlanda / agachamento yogue

| Campo | Valor |
| --- | --- |
| Slug | ref_004_mov_03 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Pode ajudar na mobilidade de quadril, tornozelos e pelve. |
| Descricao curta | Pode ajudar na mobilidade de quadril, tornozelos e pelve. |
| Como fazer | ["Afaste os pes, agache lentamente e una as maos em frente ao peito, usando os cotovelos para abrir os joelhos com suavidade."] |
| Dicas de postura | ["Manter coluna longa, usar apoio sob calcanhares se necessario.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Respire de forma lenta e confortavel."] |
| Erros comuns | ["Arredondar a coluna e deixar calcanhares levantarem sem controle."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Esta colecao nao substitui acompanhamento medico, ginecologico, nutricional ou endocrinologico. Em caso de SOP, dor intensa, sangramento anormal, tontura, gestacao, pos-operatorio, doenca hormonal diagnosticada ou uso de medicacao, busque orientacao profissional.","Status dos assets: NEEDS_REVIEW. Imagens vinculadas: 5. Imagens planejadas pendentes: 1. Base: /instructional-images/yoga/hormonal-balance.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: yoga_hormonal_003_malasana_step_03_hands_prayer.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor pelvica intensa","sangramento anormal","dor no joelho","dor no tornozelo","instabilidade","tontura"] |
| Recomendado quando | ["tenho SOP","quero yoga para hormonios","quero reduzir estresse","estou ansiosa","quero melhorar meu ciclo","quero yoga para colica leve","quero relaxar","quero alongar quadril","quero uma pratica feminina","quero equilibrio hormonal","quadril rigido","mobilidade pelvica","alongamento de virilha","rotina de yoga","malasana","agachamento yogue","quadril","pelve","SOP","Postura da guirlanda / agachamento yogue","Malasana","20 posturas de yoga para SOP, equilibrio hormonal e reducao do estresse","20 Yoga Asanas for PCOD & Hormonal Balance","yoga_hormonal_sop_equilibrio","Yoga para SOP e equilibrio hormonal","mobilidade","yoga","pernas","ovario policistico","equilibrio hormonal","ciclo menstrual","estresse","ansiedade leve","respiracao","relaxamento","bem-estar feminino","autocuidado","flexibilidade","ref_004","joelhos","tornozelos","coluna","adutores","gluteos","quadriceps","panturrilhas","mobilidade pelvica e de tornozelos","calma, autocuidado e conexao corporal","Referencia: ref_004","Colecao: yoga_hormonal_sop_equilibrio"] |
| Evitar quando | ["dor pelvica intensa","sangramento anormal","febre","gravidez de risco","pos-operatorio","tontura forte","dor aguda","falta de ar","sintomas neurologicos","dor no peito"] |
| Imagem/chave | ref_004_mov_03 |

### Postura da montanha

| Campo | Valor |
| --- | --- |
| Slug | ref_003_mov_08 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Alongar cadeia posterior e fortalecer bracos em V invertido. |
| Descricao curta | Alongar cadeia posterior e fortalecer bracos em V invertido. |
| Como fazer | ["A partir da cobra, eleve o quadril para cima e para tras, formando um V invertido. Mantenha maos firmes e coluna alongada."] |
| Dicas de postura | ["Empurrar o chao, alongar coluna e permitir joelhos levemente flexionados.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Expirar."] |
| Erros comuns | ["Arredondar demais as costas e jogar peso nos punhos."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Faca os movimentos com calma e respeite seus limites. Pare se sentir dor forte, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/yoga/surya-namaskar.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: surya_008_parvatasana_step_01_start.png, surya_008_parvatasana_step_02_hips_lift.png, surya_008_parvatasana_step_03_push_back.png, surya_008_parvatasana_step_04_final.png, surya_008_parvatasana_step_05_common_mistake.png, surya_008_parvatasana_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor aguda na lombar","dor intensa nos punhos","dor no ombro","tontura","tontura com cabeca baixa"] |
| Recomendado quando | ["quero fazer yoga","quero alongar o corpo todo","quero comecar o dia melhor","estou sem energia","quero melhorar minha flexibilidade","quero uma sequencia completa","quero algo para corpo e mente","quero me movimentar pela manha","quero reduzir estresse","quero melhorar postura","alongamento do corpo todo","rigidez posterior","mobilidade de coluna","fortalecimento leve dos bracos","cao olhando para baixo","alongar costas","panturrilha","ombros","yoga","Postura da montanha","Parvatasana / Mountain Pose","Saudacao ao Sol - 12 passos para corpo, mente e respiracao","Surya Namaskar - 12 Steps: A Complete Workout for Body, Mind & Soul","surya_namaskar_12_passos","Saudacao ao Sol - 12 passos","V invertido","parvatasana","alongamento","coluna","posteriores","saudacao ao sol","surya namaskar","manha","energia","flexibilidade","forca","postura","respiracao","corpo inteiro","mobilidade","equilibrio","estresse","ansiedade leve","ref_003","bracos","panturrilhas","deltoides","triceps","isquiotibiais","costas","alongamento posterior e estabilidade de ombros","foco, energia leve e equilibrio entre corpo, mente e respiracao","Referencia: ref_003","Colecao: surya_namaskar_12_passos"] |
| Evitar quando | ["dor forte","dor aguda na lombar","dor intensa nos punhos","dor no ombro","tontura","falta de ar","pressao descontrolada","lesao recente","pos-operatorio","gravidez de risco","dor no peito","formigamento","perda de forca"] |
| Imagem/chave | ref_003_mov_08 |

### Postura da ponte

| Campo | Valor |
| --- | --- |
| Slug | ref_004_mov_08 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Fortalecer gluteos e costas, abrindo o peito. |
| Descricao curta | Fortalecer gluteos e costas, abrindo o peito. |
| Como fazer | ["Deite de barriga para cima, flexione os joelhos e eleve o quadril com controle."] |
| Dicas de postura | ["Apoiar ombros e elevar quadril sem comprimir cervical.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Respire de forma lenta e confortavel."] |
| Erros comuns | ["Jogar peso no pescoco."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Esta colecao nao substitui acompanhamento medico, ginecologico, nutricional ou endocrinologico. Em caso de SOP, dor intensa, sangramento anormal, tontura, gestacao, pos-operatorio, doenca hormonal diagnosticada ou uso de medicacao, busque orientacao profissional.","Status dos assets: GENERATED_PENDING_REVIEW. Imagens vinculadas: 6. Imagens planejadas pendentes: 0. Base: /instructional-images/yoga/hormonal-balance.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Todas as imagens esperadas cadastradas para o movimento possuem vinculo fisico ou revisao pendente."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor pelvica intensa","sangramento anormal","dor cervical","dor lombar aguda"] |
| Recomendado quando | ["tenho SOP","quero yoga para hormonios","quero reduzir estresse","estou ansiosa","quero melhorar meu ciclo","quero yoga para colica leve","quero relaxar","quero alongar quadril","quero uma pratica feminina","quero equilibrio hormonal","postura","lombar leve","gluteos","abertura do peito","ponte","setu bandhasana","lombar","peito","Postura da ponte","Setu Bandhasana","20 posturas de yoga para SOP, equilibrio hormonal e reducao do estresse","20 Yoga Asanas for PCOD & Hormonal Balance","yoga_hormonal_sop_equilibrio","Yoga para SOP e equilibrio hormonal","yoga","SOP","ovario policistico","equilibrio hormonal","ciclo menstrual","estresse","ansiedade leve","respiracao","quadril","pelve","relaxamento","bem-estar feminino","autocuidado","flexibilidade","ref_004","pescoco","posteriores de coxa","extensores da coluna","peitoral","fortalecimento leve de gluteos e abertura de peito","calma, autocuidado e conexao corporal","Referencia: ref_004","Colecao: yoga_hormonal_sop_equilibrio"] |
| Evitar quando | ["dor pelvica intensa","sangramento anormal","febre","gravidez de risco","pos-operatorio","tontura forte","dor aguda","falta de ar","sintomas neurologicos","dor no peito"] |
| Imagem/chave | ref_004_mov_08 |

### Postura do camelo

| Campo | Valor |
| --- | --- |
| Slug | ref_004_mov_09 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Pode ajudar a abrir peito, alongar frente do corpo e mobilizar coluna em extensao. |
| Descricao curta | Postura da colecao REF_004 para abrir peito, alongar frente do corpo e mobilizar coluna em extensao, com linguagem segura e sem promessa de tratamento. |
| Como fazer | ["Pratique postura do camelo com respiracao lenta, amplitude confortavel e suporte quando necessario."] |
| Dicas de postura | ["Reduzir amplitude, usar apoio e priorizar respiracao calma.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Respire de forma lenta e nasal."] |
| Erros comuns | ["Forcar amplitude ou comprimir coluna, joelhos, ombros ou pescoco."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Esta colecao nao substitui acompanhamento medico, ginecologico, nutricional ou endocrinologico. Em caso de SOP, dor intensa, sangramento anormal, tontura, gestacao, pos-operatorio, doenca hormonal diagnosticada ou uso de medicacao, busque orientacao profissional.","Status dos assets: GENERATED_PENDING_REVIEW. Imagens vinculadas: 6. Imagens planejadas pendentes: 0. Base: /instructional-images/yoga/hormonal-balance.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Todas as imagens esperadas cadastradas para o movimento possuem vinculo fisico ou revisao pendente."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor lombar","dor cervical","tontura","dor pelvica intensa","sangramento anormal"] |
| Recomendado quando | ["tenho SOP","quero yoga para hormonios","quero reduzir estresse","estou ansiosa","quero melhorar meu ciclo","quero yoga para colica leve","quero relaxar","quero alongar quadril","quero uma pratica feminina","quero equilibrio hormonal","postura","peito fechado","energia","alongamento frontal","Postura do camelo","Ustrasana","abrir peito, alongar frente do corpo e mobilizar coluna em extensao","20 posturas de yoga para SOP, equilibrio hormonal e reducao do estresse","20 Yoga Asanas for PCOD & Hormonal Balance","yoga_hormonal_sop_equilibrio","Yoga para SOP e equilibrio hormonal","yoga","SOP","equilibrio hormonal","estresse","bem-estar feminino","ovario policistico","ciclo menstrual","ansiedade leve","respiracao","quadril","pelve","relaxamento","autocuidado","flexibilidade","ref_004","coluna","pernas","peito","musculatura postural","adutores","gluteos","costas","calma, autocuidado e conexao corporal","Referencia: ref_004","Colecao: yoga_hormonal_sop_equilibrio"] |
| Evitar quando | ["dor lombar","dor cervical","tontura","dor pelvica intensa","sangramento anormal","febre","gravidez de risco","pos-operatorio","tontura forte","dor aguda","falta de ar","sintomas neurologicos","dor no peito"] |
| Imagem/chave | ref_004_mov_09 |

### Postura do gafanhoto

| Campo | Valor |
| --- | --- |
| Slug | ref_001_mov_03 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Pode ajudar a fortalecer cadeia posterior e consciencia postural. |
| Descricao curta | Pode ajudar a fortalecer cadeia posterior e consciencia postural. |
| Como fazer | ["Deitar de barriga para baixo e elevar peito/pernas suavemente conforme conforto.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Baixa amplitude, pescoco neutro e gluteos/core ativos.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Baixa amplitude, pescoco neutro e gluteos/core ativos.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Baixa amplitude, pescoco neutro e gluteos/core ativos."] |
| Respiracao | ["respiracao continua, sem prender o ar"] |
| Erros comuns | ["Elevar demais e comprimir lombar/pescoco."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Baixa amplitude, pescoco neutro e gluteos/core ativos.","Nao apresentar como tratamento de dor ou correcao de coluna.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/spine-strength-flexibility.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO.","Status do video: PLANNED.","Imagens planejadas pendentes: yoga_spine_003_locust_pose_step_01_prone.png, yoga_spine_003_locust_pose_step_02_lift.png, yoga_spine_003_locust_pose_step_03_final.png, yoga_spine_003_locust_pose_step_04_common_mistake.png, yoga_spine_003_locust_pose_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","pos-operatorio sem liberacao","dormencia","crise de hernia"] |
| Recomendado quando | ["rigidez leve nas costas","fortalecimento postural leve","alongamento de coluna","rotina de yoga","gafanhoto","costas","fortalecimento","cadeia posterior","mobilidade, forca leve e flexibilidade da coluna","seguranca, presenca e confianca corporal","yoga","coluna","forca leve","flexibilidade","mobilidade","postura","Postura do gafanhoto","Locust Pose","7 posturas de yoga para forca e flexibilidade da coluna","7 Yoga Poses to Build Spine Strength and Flexibility","yoga_coluna_forca_flexibilidade","ref_001","gluteos","posteriores","ombros","Referencia: ref_001","Colecao: yoga_coluna_forca_flexibilidade"] |
| Evitar quando | ["dor forte/aguda","lesao recente","pos-operatorio sem liberacao","formigamento","dormencia","perda de forca","tontura forte","falta de ar","dor no peito","dor irradiada","crise de hernia"] |
| Imagem/chave | ref_001_mov_03 |

### Postura do peixe

| Campo | Valor |
| --- | --- |
| Slug | ref_004_mov_18 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Pode ajudar a abrir peito e alongar regiao anterior do pescoco e torso. |
| Descricao curta | Postura da colecao REF_004 para abrir peito e alongar regiao anterior do pescoco e torso, com linguagem segura e sem promessa de tratamento. |
| Como fazer | ["Pratique postura do peixe com respiracao lenta, amplitude confortavel e suporte quando necessario."] |
| Dicas de postura | ["Reduzir amplitude, usar apoio e priorizar respiracao calma.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Respire de forma lenta e nasal."] |
| Erros comuns | ["Forcar amplitude ou comprimir coluna, joelhos, ombros ou pescoco."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Esta colecao nao substitui acompanhamento medico, ginecologico, nutricional ou endocrinologico. Em caso de SOP, dor intensa, sangramento anormal, tontura, gestacao, pos-operatorio, doenca hormonal diagnosticada ou uso de medicacao, busque orientacao profissional.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/yoga/hormonal-balance.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: yoga_hormonal_018_matsyasana_step_01_lie_down.png, yoga_hormonal_018_matsyasana_step_02_elbows_support.png, yoga_hormonal_018_matsyasana_step_03_chest_lift.png, yoga_hormonal_018_matsyasana_step_04_final.png, yoga_hormonal_018_matsyasana_step_05_common_mistake.png, yoga_hormonal_018_matsyasana_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor cervical","tontura","dor lombar","dor pelvica intensa","sangramento anormal"] |
| Recomendado quando | ["tenho SOP","quero yoga para hormonios","quero reduzir estresse","estou ansiosa","quero melhorar meu ciclo","quero yoga para colica leve","quero relaxar","quero alongar quadril","quero uma pratica feminina","quero equilibrio hormonal","peito fechado","postura","respiracao","Postura do peixe","Matsyasana","abrir peito e alongar regiao anterior do pescoco e torso","20 posturas de yoga para SOP, equilibrio hormonal e reducao do estresse","20 Yoga Asanas for PCOD & Hormonal Balance","yoga_hormonal_sop_equilibrio","Yoga para SOP e equilibrio hormonal","yoga","SOP","equilibrio hormonal","estresse","bem-estar feminino","ovario policistico","ciclo menstrual","ansiedade leve","quadril","pelve","relaxamento","autocuidado","flexibilidade","ref_004","coluna","pernas","peito","musculatura postural","adutores","gluteos","costas","calma, autocuidado e conexao corporal","Referencia: ref_004","Colecao: yoga_hormonal_sop_equilibrio"] |
| Evitar quando | ["dor cervical","tontura","dor lombar","dor pelvica intensa","sangramento anormal","febre","gravidez de risco","pos-operatorio","tontura forte","dor aguda","falta de ar","sintomas neurologicos","dor no peito"] |
| Imagem/chave | ref_004_mov_18 |

### Postura do sapo

| Campo | Valor |
| --- | --- |
| Slug | ref_004_mov_17 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Pode ajudar a abrir quadril e alongar regiao interna das coxas. |
| Descricao curta | Postura da colecao REF_004 para abrir quadril e alongar regiao interna das coxas, com linguagem segura e sem promessa de tratamento. |
| Como fazer | ["Pratique postura do sapo com respiracao lenta, amplitude confortavel e suporte quando necessario."] |
| Dicas de postura | ["Reduzir amplitude, usar apoio e priorizar respiracao calma.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Respire de forma lenta e nasal."] |
| Erros comuns | ["Forcar amplitude ou comprimir coluna, joelhos, ombros ou pescoco."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Esta colecao nao substitui acompanhamento medico, ginecologico, nutricional ou endocrinologico. Em caso de SOP, dor intensa, sangramento anormal, tontura, gestacao, pos-operatorio, doenca hormonal diagnosticada ou uso de medicacao, busque orientacao profissional.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/yoga/hormonal-balance.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: yoga_hormonal_017_mandukasana_step_01_tabletop.png, yoga_hormonal_017_mandukasana_step_02_knees_apart.png, yoga_hormonal_017_mandukasana_step_03_hips_back.png, yoga_hormonal_017_mandukasana_step_04_final.png, yoga_hormonal_017_mandukasana_step_05_common_mistake.png, yoga_hormonal_017_mandukasana_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor no joelho","dor no quadril","dor na virilha","dor pelvica intensa","sangramento anormal"] |
| Recomendado quando | ["tenho SOP","quero yoga para hormonios","quero reduzir estresse","estou ansiosa","quero melhorar meu ciclo","quero yoga para colica leve","quero relaxar","quero alongar quadril","quero uma pratica feminina","quero equilibrio hormonal","mobilidade pelvica","quadril rigido","Postura do sapo","Mandukasana","abrir quadril e alongar regiao interna das coxas","20 posturas de yoga para SOP, equilibrio hormonal e reducao do estresse","20 Yoga Asanas for PCOD & Hormonal Balance","yoga_hormonal_sop_equilibrio","Yoga para SOP e equilibrio hormonal","yoga","SOP","equilibrio hormonal","estresse","bem-estar feminino","ovario policistico","ciclo menstrual","ansiedade leve","respiracao","quadril","pelve","relaxamento","autocuidado","flexibilidade","ref_004","coluna","pernas","peito","musculatura postural","adutores","gluteos","costas","calma, autocuidado e conexao corporal","Referencia: ref_004","Colecao: yoga_hormonal_sop_equilibrio"] |
| Evitar quando | ["dor no joelho","dor no quadril","dor na virilha","dor pelvica intensa","sangramento anormal","febre","gravidez de risco","pos-operatorio","tontura forte","dor aguda","falta de ar","sintomas neurologicos","dor no peito"] |
| Imagem/chave | ref_004_mov_17 |

### Postura do triangulo

| Campo | Valor |
| --- | --- |
| Slug | ref_004_mov_11 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Pode ajudar a alongar lateral do corpo, pernas e melhorar equilibrio. |
| Descricao curta | Postura da colecao REF_004 para alongar lateral do corpo, pernas e melhorar equilibrio, com linguagem segura e sem promessa de tratamento. |
| Como fazer | ["Pratique postura do triangulo com respiracao lenta, amplitude confortavel e suporte quando necessario."] |
| Dicas de postura | ["Reduzir amplitude, usar apoio e priorizar respiracao calma.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Respire de forma lenta e nasal."] |
| Erros comuns | ["Forcar amplitude ou comprimir coluna, joelhos, ombros ou pescoco."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Esta colecao nao substitui acompanhamento medico, ginecologico, nutricional ou endocrinologico. Em caso de SOP, dor intensa, sangramento anormal, tontura, gestacao, pos-operatorio, doenca hormonal diagnosticada ou uso de medicacao, busque orientacao profissional.","Status dos assets: GENERATED_PENDING_REVIEW. Imagens vinculadas: 6. Imagens planejadas pendentes: 0. Base: /instructional-images/yoga/hormonal-balance.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Todas as imagens esperadas cadastradas para o movimento possuem vinculo fisico ou revisao pendente."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","tontura","dor no joelho","instabilidade","dor pelvica intensa","sangramento anormal"] |
| Recomendado quando | ["tenho SOP","quero yoga para hormonios","quero reduzir estresse","estou ansiosa","quero melhorar meu ciclo","quero yoga para colica leve","quero relaxar","quero alongar quadril","quero uma pratica feminina","quero equilibrio hormonal","postura","mobilidade lateral","quadril","equilibrio","Postura do triangulo","Trikonasana","alongar lateral do corpo, pernas e melhorar equilibrio","20 posturas de yoga para SOP, equilibrio hormonal e reducao do estresse","20 Yoga Asanas for PCOD & Hormonal Balance","yoga_hormonal_sop_equilibrio","Yoga para SOP e equilibrio hormonal","yoga","SOP","equilibrio hormonal","estresse","bem-estar feminino","ovario policistico","ciclo menstrual","ansiedade leve","respiracao","pelve","relaxamento","autocuidado","flexibilidade","ref_004","coluna","pernas","peito","musculatura postural","adutores","gluteos","costas","calma, autocuidado e conexao corporal","Referencia: ref_004","Colecao: yoga_hormonal_sop_equilibrio"] |
| Evitar quando | ["tontura","dor no joelho","instabilidade","dor pelvica intensa","sangramento anormal","febre","gravidez de risco","pos-operatorio","tontura forte","dor aguda","falta de ar","sintomas neurologicos","dor no peito"] |
| Imagem/chave | ref_004_mov_11 |

### Postura equestre

| Campo | Valor |
| --- | --- |
| Slug | ref_003_mov_04 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Abrir quadril e alongar a frente da perna de tras. |
| Descricao curta | Abrir quadril e alongar a frente da perna de tras. |
| Como fazer | ["Leve uma perna para tras, mantendo a outra a frente entre as maos. Apoie o joelho de tras se necessario e abra o peito com controle."] |
| Dicas de postura | ["Alinhar joelho com tornozelo, alongar coluna e distribuir o peso.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Inspirar."] |
| Erros comuns | ["Joelho da frente desalinhado e quadril caido."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Faca os movimentos com calma e respeite seus limites. Pare se sentir dor forte, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/yoga/surya-namaskar.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: surya_004_ashwa_sanchalanasana_step_01_start.png, surya_004_ashwa_sanchalanasana_step_02_leg_back.png, surya_004_ashwa_sanchalanasana_step_03_chest_open.png, surya_004_ashwa_sanchalanasana_step_04_final.png, surya_004_ashwa_sanchalanasana_step_05_common_mistake.png, surya_004_ashwa_sanchalanasana_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor aguda na lombar","dor intensa nos punhos","dor no ombro","tontura","dor forte no joelho","dor intensa no quadril","instabilidade importante"] |
| Recomendado quando | ["quero fazer yoga","quero alongar o corpo todo","quero comecar o dia melhor","estou sem energia","quero melhorar minha flexibilidade","quero uma sequencia completa","quero algo para corpo e mente","quero me movimentar pela manha","quero reduzir estresse","quero melhorar postura","quadril rigido","encurtamento da frente do quadril","mobilidade de pernas","sequencia energetica","quadril","flexor de quadril","alongar pernas","avanco","yoga","Postura equestre","Ashwa Sanchalanasana / Equestrian Pose","Saudacao ao Sol - 12 passos para corpo, mente e respiracao","Surya Namaskar - 12 Steps: A Complete Workout for Body, Mind & Soul","surya_namaskar_12_passos","Saudacao ao Sol - 12 passos","pernas","mobilidade","saudacao ao sol","surya namaskar","manha","energia","flexibilidade","forca","postura","respiracao","corpo inteiro","equilibrio","estresse","ansiedade leve","ref_003","coluna","peito","flexores do quadril","quadriceps","gluteos","core","mobilidade de quadril e extensao da perna de tras","foco, energia leve e equilibrio entre corpo, mente e respiracao","Referencia: ref_003","Colecao: surya_namaskar_12_passos"] |
| Evitar quando | ["dor forte","dor aguda na lombar","dor intensa nos punhos","dor no ombro","tontura","falta de ar","pressao descontrolada","lesao recente","pos-operatorio","gravidez de risco","dor no peito","formigamento","perda de forca"] |
| Imagem/chave | ref_003_mov_04 |

### Postura equestre, lado oposto

| Campo | Valor |
| --- | --- |
| Slug | ref_003_mov_09 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Abrir quadril do lado oposto e retornar da sequencia. |
| Descricao curta | Abrir quadril do lado oposto e retornar da sequencia. |
| Como fazer | ["A partir da postura da montanha, leve uma perna a frente entre as maos, mantendo a outra estendida atras ou com joelho apoiado."] |
| Dicas de postura | ["Ajustar o pe entre as maos e alongar o peito.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Inspirar."] |
| Erros comuns | ["Pe da frente longe das maos e tronco colapsado."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Faca os movimentos com calma e respeite seus limites. Pare se sentir dor forte, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/yoga/surya-namaskar.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: surya_009_ashwa_sanchalanasana_oposto_step_01_start.png, surya_009_ashwa_sanchalanasana_oposto_step_02_leg_forward.png, surya_009_ashwa_sanchalanasana_oposto_step_03_chest_open.png, surya_009_ashwa_sanchalanasana_oposto_step_04_final.png, surya_009_ashwa_sanchalanasana_oposto_step_05_common_mistake.png, surya_009_ashwa_sanchalanasana_oposto_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor aguda na lombar","dor intensa nos punhos","dor no ombro","tontura","dor intensa no joelho","dor intensa no quadril","instabilidade"] |
| Recomendado quando | ["quero fazer yoga","quero alongar o corpo todo","quero comecar o dia melhor","estou sem energia","quero melhorar minha flexibilidade","quero uma sequencia completa","quero algo para corpo e mente","quero me movimentar pela manha","quero reduzir estresse","quero melhorar postura","trabalho do lado oposto","mobilidade de quadril","retorno da sequencia","equilibrio entre lados","postura equestre","lado oposto","quadril","saudacao ao sol","Postura equestre, lado oposto","Ashwa Sanchalanasana / Equestrian Pose","Saudacao ao Sol - 12 passos para corpo, mente e respiracao","Surya Namaskar - 12 Steps: A Complete Workout for Body, Mind & Soul","surya_namaskar_12_passos","Saudacao ao Sol - 12 passos","yoga","pernas","mobilidade","surya namaskar","manha","energia","flexibilidade","forca","postura","respiracao","corpo inteiro","equilibrio","estresse","ansiedade leve","ref_003","coluna","peito","flexores do quadril","quadriceps","gluteos","core","mobilidade de quadril do lado oposto","foco, energia leve e equilibrio entre corpo, mente e respiracao","Referencia: ref_003","Colecao: surya_namaskar_12_passos"] |
| Evitar quando | ["dor forte","dor aguda na lombar","dor intensa nos punhos","dor no ombro","tontura","falta de ar","pressao descontrolada","lesao recente","pos-operatorio","gravidez de risco","dor no peito","formigamento","perda de forca"] |
| Imagem/chave | ref_003_mov_09 |

### Prancha

| Campo | Valor |
| --- | --- |
| Slug | ref_003_mov_05 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Fortalecer core, bracos e estabilidade corporal. |
| Descricao curta | Fortalecer core, bracos e estabilidade corporal. |
| Como fazer | ["Leve a perna de tras para encontrar a outra e forme uma linha firme do topo da cabeca aos calcanhares, com maos abaixo dos ombros."] |
| Dicas de postura | ["Alinhar cabeca, tronco, quadril e pernas em uma linha estavel.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Expirar."] |
| Erros comuns | ["Quadril caido ou elevado demais."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Faca os movimentos com calma e respeite seus limites. Pare se sentir dor forte, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/yoga/surya-namaskar.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: surya_005_phalakasana_step_01_start.png, surya_005_phalakasana_step_02_step_back.png, surya_005_phalakasana_step_03_alignment.png, surya_005_phalakasana_step_04_final.png, surya_005_phalakasana_step_05_common_mistake.png, surya_005_phalakasana_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor aguda na lombar","dor intensa nos punhos","dor no ombro","tontura","dor no punho","dor lombar ao sustentar"] |
| Recomendado quando | ["quero fazer yoga","quero alongar o corpo todo","quero comecar o dia melhor","estou sem energia","quero melhorar minha flexibilidade","quero uma sequencia completa","quero algo para corpo e mente","quero me movimentar pela manha","quero reduzir estresse","quero melhorar postura","fortalecimento leve a moderado","postura","estabilidade","ativacao do core","prancha","core","fortalecer abdomen","bracos","Prancha","Phalakasana / Plank Pose","Saudacao ao Sol - 12 passos para corpo, mente e respiracao","Surya Namaskar - 12 Steps: A Complete Workout for Body, Mind & Soul","surya_namaskar_12_passos","Saudacao ao Sol - 12 passos","yoga","forca","saudacao ao sol","surya namaskar","manha","energia","flexibilidade","respiracao","corpo inteiro","mobilidade","equilibrio","estresse","ansiedade leve","ref_003","ombros","pernas","coluna","abdominais","deltoides","peitoral","quadriceps","gluteos","forca e estabilidade de core e ombros","foco, energia leve e equilibrio entre corpo, mente e respiracao","Referencia: ref_003","Colecao: surya_namaskar_12_passos"] |
| Evitar quando | ["dor forte","dor aguda na lombar","dor intensa nos punhos","dor no ombro","tontura","falta de ar","pressao descontrolada","lesao recente","pos-operatorio","gravidez de risco","dor no peito","formigamento","perda de forca"] |
| Imagem/chave | ref_003_mov_05 |

### Saudacao com oito apoios

| Campo | Valor |
| --- | --- |
| Slug | ref_003_mov_06 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Transicao de forca e controle com oito pontos de apoio. |
| Descricao curta | Transicao de forca e controle com oito pontos de apoio. |
| Como fazer | ["A partir da prancha, abaixe joelhos, peito e queixo em direcao ao chao, mantendo quadril levemente elevado e cotovelos proximos ao corpo."] |
| Dicas de postura | ["Descer com controle, mantendo cotovelos proximos ao corpo e pescoco confortavel.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum."] |
| Respiracao | ["Expirar."] |
| Erros comuns | ["Cair com o peso nos ombros ou colapsar o pescoco."] |
| Cuidados | ["Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Faca os movimentos com calma e respeite seus limites. Pare se sentir dor forte, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 6. Base: /instructional-images/yoga/surya-namaskar.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CHECK_BEFORE_GENERATE","Status do video: PLANNED.","Imagens planejadas pendentes: surya_006_ashtanga_namaskar_step_01_start.png, surya_006_ashtanga_namaskar_step_02_knees_down.png, surya_006_ashtanga_namaskar_step_03_chest_chin_down.png, surya_006_ashtanga_namaskar_step_04_final.png, surya_006_ashtanga_namaskar_step_05_common_mistake.png, surya_006_ashtanga_namaskar_step_06_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor aguda na lombar","dor intensa nos punhos","dor no ombro","tontura","dor em punhos","dor nos ombros","dor cervical","dificuldade de sustentar o corpo"] |
| Recomendado quando | ["quero fazer yoga","quero alongar o corpo todo","quero comecar o dia melhor","estou sem energia","quero melhorar minha flexibilidade","quero uma sequencia completa","quero algo para corpo e mente","quero me movimentar pela manha","quero reduzir estresse","quero melhorar postura","pratica intermediaria","fortalecimento de bracos","controle de transicao","sequencia tradicional","oito apoios","transicao","forca","bracos","saudacao ao sol","Saudacao com oito apoios","Ashtanga Namaskar / Salute with Eight Points","Saudacao ao Sol - 12 passos para corpo, mente e respiracao","Surya Namaskar - 12 Steps: A Complete Workout for Body, Mind & Soul","surya_namaskar_12_passos","Saudacao ao Sol - 12 passos","yoga","core","surya namaskar","manha","energia","flexibilidade","postura","respiracao","corpo inteiro","mobilidade","equilibrio","estresse","ansiedade leve","ref_003","peito","joelhos","queixo","coluna","peitoral","triceps","ombros","controle corporal e apoio de bracos","foco, energia leve e equilibrio entre corpo, mente e respiracao","Referencia: ref_003","Colecao: surya_namaskar_12_passos"] |
| Evitar quando | ["dor forte","dor aguda na lombar","dor intensa nos punhos","dor no ombro","tontura","falta de ar","pressao descontrolada","lesao recente","pos-operatorio","gravidez de risco","dor no peito","formigamento","perda de forca"] |
| Imagem/chave | ref_003_mov_06 |

### Yoga leve

| Campo | Valor |
| --- | --- |
| Slug | yoga-leve |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 3 |
| Objetivo | Combinar mobilidade suave e respiracao. |
| Descricao curta | Combinar mobilidade suave e respiracao. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique yoga leve pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | yoga-leve |

### Yoga de energia leve

| Campo | Valor |
| --- | --- |
| Slug | yoga-energia-leve |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 4 |
| Objetivo | Ganhar energia com mobilidade controlada. |
| Descricao curta | Ganhar energia com mobilidade controlada. |
| Como fazer | ["Prepare um espaco tranquilo.","Pratique yoga de energia leve pelo tempo sugerido.","Mantenha o ritmo confortavel.","Finalize percebendo como o corpo esta agora."] |
| Dicas de postura | ["Mantenha a coluna confortavel.","Solte os ombros.","Reduza amplitude se houver tensao."] |
| Respiracao | ["Respire sem prender o ar.","Prefira uma expiracao lenta.","Volte ao ritmo natural se ficar desconfortavel."] |
| Erros comuns | ["Forcar amplitude.","Apressar a pratica.","Ignorar sinais de desconforto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Os exercicios sao sugestoes de bem-estar e nao substituem orientacao profissional."] |
| Contraindicacoes | ["Evite em caso de dor, lesao recente, tontura ou orientacao profissional para evitar impacto."] |
| Recomendado quando | ["Quando voce quiser uma pausa guiada e segura.","Quando a pratica combinar com seu check-in do dia."] |
| Evitar quando | ["Evite se causar desconforto ou se voce precisar de atendimento profissional."] |
| Imagem/chave | yoga-energia-leve |

### Afundo baixo

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_07 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Afundo baixo com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: REUSED. REUTILIZAR ref_003_mov_04/ref_003_mov_09 se equivalente.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_sacral_07_low_lunge_step_01_start.png, chakra_sacral_07_low_lunge_step_02_entry.png, chakra_sacral_07_low_lunge_step_03_final.png, chakra_sacral_07_low_lunge_step_04_common_mistake.png, chakra_sacral_07_low_lunge_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","afundo baixo","yoga","chakra","sacral","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Afundo baixo","Low Lunge","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_07 |

### Cao olhando para cima

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_16 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Cao olhando para cima com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CONFERIR cobra; preferir GERAR_NOVO para diferenciar.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_heart_16_upward_dog_step_01_start.png, chakra_heart_16_upward_dog_step_02_entry.png, chakra_heart_16_upward_dog_step_03_final.png, chakra_heart_16_upward_dog_step_04_common_mistake.png, chakra_heart_16_upward_dog_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","cao olhando para cima","yoga","chakra","heart","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Cao olhando para cima","Upward Dog","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_16 |

### Flexao a frente

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_21 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Flexao a frente com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: REUSED. REUTILIZAR ref_003_mov_03/ref_003_mov_10 se em pe; ref_004_mov_13 se sentada.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_third_eye_21_forward_fold_step_01_start.png, chakra_third_eye_21_forward_fold_step_02_entry.png, chakra_third_eye_21_forward_fold_step_03_final.png, chakra_third_eye_21_forward_fold_step_04_common_mistake.png, chakra_third_eye_21_forward_fold_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","flexao a frente","yoga","chakra","third_eye","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Flexao a frente","Forward Fold","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_21 |

### Guerreiro II

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_03 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Guerreiro II com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO_CANONICO.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_root_03_virabhadrasana_ii_step_01_start.png, chakra_root_03_virabhadrasana_ii_step_02_entry.png, chakra_root_03_virabhadrasana_ii_step_03_final.png, chakra_root_03_virabhadrasana_ii_step_04_common_mistake.png, chakra_root_03_virabhadrasana_ii_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","guerreiro ii","yoga","chakra","root","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Guerreiro II","Virabhadrasana II","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_03 |

### Guerreiro III

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_12 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Guerreiro III com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO_CANONICO.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_solar_12_warrior_iii_step_01_start.png, chakra_solar_12_warrior_iii_step_02_entry.png, chakra_solar_12_warrior_iii_step_03_final.png, chakra_solar_12_warrior_iii_step_04_common_mistake.png, chakra_solar_12_warrior_iii_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","guerreiro iii","yoga","chakra","solar","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Guerreiro III","Warrior III","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_12 |

### Malasana

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_02 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Malasana com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: REUSED. REUTILIZAR ref_004_mov_03 ou ref_005_mov_01.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_root_02_malasana_step_01_start.png, chakra_root_02_malasana_step_02_entry.png, chakra_root_02_malasana_step_03_final.png, chakra_root_02_malasana_step_04_common_mistake.png, chakra_root_02_malasana_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","malasana","yoga","chakra","root","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Malasana","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_02 |

### Parada sobre a cabeca

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_26 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Parada sobre a cabeca com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO_CANONICO_AVANCADO; bloquear recomendacao automatica.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_crown_26_headstand_step_01_start.png, chakra_crown_26_headstand_step_02_entry.png, chakra_crown_26_headstand_step_03_final.png, chakra_crown_26_headstand_step_04_common_mistake.png, chakra_crown_26_headstand_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","parada sobre a cabeca","yoga","chakra","crown","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Parada sobre a cabeca","Headstand","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_26 |

### Pernas na parede

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_24 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Pernas na parede com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: REUSED. REUTILIZAR ref_004_mov_16.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_third_eye_24_viparita_karani_step_01_start.png, chakra_third_eye_24_viparita_karani_step_02_entry.png, chakra_third_eye_24_viparita_karani_step_03_final.png, chakra_third_eye_24_viparita_karani_step_04_common_mistake.png, chakra_third_eye_24_viparita_karani_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","pernas na parede","yoga","chakra","third_eye","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Pernas na parede","Viparita Karani","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_24 |

### Postura da aguia

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_23 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Postura da aguia com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO_CANONICO.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_third_eye_23_eagle_pose_step_01_start.png, chakra_third_eye_23_eagle_pose_step_02_entry.png, chakra_third_eye_23_eagle_pose_step_03_final.png, chakra_third_eye_23_eagle_pose_step_04_common_mistake.png, chakra_third_eye_23_eagle_pose_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","postura da aguia","yoga","chakra","third_eye","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Postura da aguia","Eagle Pose","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_23 |

### Postura da borboleta

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_05 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Postura da borboleta com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: REUSED. REUTILIZAR ref_004_mov_01.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_sacral_05_baddha_konasana_step_01_start.png, chakra_sacral_05_baddha_konasana_step_02_entry.png, chakra_sacral_05_baddha_konasana_step_03_final.png, chakra_sacral_05_baddha_konasana_step_04_common_mistake.png, chakra_sacral_05_baddha_konasana_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","postura da borboleta","yoga","chakra","sacral","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Postura da borboleta","Baddha Konasana","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_05 |

### Postura da cobra

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_13 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Postura da cobra com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: REUSED. REUTILIZAR ref_003_mov_07 ou ref_004_mov_07.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_heart_13_bhujangasana_step_01_start.png, chakra_heart_13_bhujangasana_step_02_entry.png, chakra_heart_13_bhujangasana_step_03_final.png, chakra_heart_13_bhujangasana_step_04_common_mistake.png, chakra_heart_13_bhujangasana_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","postura da cobra","yoga","chakra","heart","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Postura da cobra","Bhujangasana","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_13 |

### Postura da crianca

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_04 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Postura da crianca com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: REUSED. REUTILIZAR ref_004_mov_04.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_root_04_balasana_step_01_start.png, chakra_root_04_balasana_step_02_entry.png, chakra_root_04_balasana_step_03_final.png, chakra_root_04_balasana_step_04_common_mistake.png, chakra_root_04_balasana_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","postura da crianca","yoga","chakra","root","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Postura da crianca","Balasana","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_04 |

### Postura da deusa

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_06 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Postura da deusa com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: REUSED. REUTILIZAR ref_005_mov_08 se criado; senao gerar.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_sacral_06_goddess_pose_step_01_start.png, chakra_sacral_06_goddess_pose_step_02_entry.png, chakra_sacral_06_goddess_pose_step_03_final.png, chakra_sacral_06_goddess_pose_step_04_common_mistake.png, chakra_sacral_06_goddess_pose_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","postura da deusa","yoga","chakra","sacral","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Postura da deusa","Goddess Pose","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_06 |

### Postura da ponte

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_15 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Postura da ponte com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: REUSED. REUTILIZAR ref_004_mov_08.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_heart_15_setu_bandhasana_step_01_start.png, chakra_heart_15_setu_bandhasana_step_02_entry.png, chakra_heart_15_setu_bandhasana_step_03_final.png, chakra_heart_15_setu_bandhasana_step_04_common_mistake.png, chakra_heart_15_setu_bandhasana_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","postura da ponte","yoga","chakra","heart","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Postura da ponte","Setu Bandhasana","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_15 |

### Postura da vela

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_18 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Postura da vela com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO_CANONICO_AVANCADO; bloquear iniciantes.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_throat_18_sarvangasana_step_01_start.png, chakra_throat_18_sarvangasana_step_02_entry.png, chakra_throat_18_sarvangasana_step_03_final.png, chakra_throat_18_sarvangasana_step_04_common_mistake.png, chakra_throat_18_sarvangasana_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","postura da vela","yoga","chakra","throat","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Postura da vela","Sarvangasana","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_18 |

### Postura de lotus

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_25 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Postura de lotus com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CONFERIR pranayamas sentados da REF_004; gerar se nao for lotus real.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_crown_25_padmasana_step_01_start.png, chakra_crown_25_padmasana_step_02_entry.png, chakra_crown_25_padmasana_step_03_final.png, chakra_crown_25_padmasana_step_04_common_mistake.png, chakra_crown_25_padmasana_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","postura de lotus","yoga","chakra","crown","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Postura de lotus","Padmasana","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_25 |

### Postura do arado

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_19 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Postura do arado com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO_CANONICO_AVANCADO; bloquear iniciantes.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_throat_19_halasana_step_01_start.png, chakra_throat_19_halasana_step_02_entry.png, chakra_throat_19_halasana_step_03_final.png, chakra_throat_19_halasana_step_04_common_mistake.png, chakra_throat_19_halasana_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","postura do arado","yoga","chakra","throat","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Postura do arado","Halasana","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_19 |

### Postura do arco

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_11 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Postura do arco com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO_CANONICO.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_solar_11_dhanurasana_step_01_start.png, chakra_solar_11_dhanurasana_step_02_entry.png, chakra_solar_11_dhanurasana_step_03_final.png, chakra_solar_11_dhanurasana_step_04_common_mistake.png, chakra_solar_11_dhanurasana_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","postura do arco","yoga","chakra","solar","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Postura do arco","Dhanurasana","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_11 |

### Postura do barco

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_09 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Postura do barco com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO_CANONICO.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_solar_09_navasana_step_01_start.png, chakra_solar_09_navasana_step_02_entry.png, chakra_solar_09_navasana_step_03_final.png, chakra_solar_09_navasana_step_04_common_mistake.png, chakra_solar_09_navasana_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","postura do barco","yoga","chakra","solar","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Postura do barco","Navasana","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_09 |

### Postura do camelo

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_14 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Postura do camelo com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: REUSED. REUTILIZAR ref_004_mov_09.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_heart_14_ustrasana_step_01_start.png, chakra_heart_14_ustrasana_step_02_entry.png, chakra_heart_14_ustrasana_step_03_final.png, chakra_heart_14_ustrasana_step_04_common_mistake.png, chakra_heart_14_ustrasana_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","postura do camelo","yoga","chakra","heart","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Postura do camelo","Ustrasana","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_14 |

### Postura do coelho

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_28 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Postura do coelho com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO_CANONICO.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_crown_28_rabbit_pose_step_01_start.png, chakra_crown_28_rabbit_pose_step_02_entry.png, chakra_crown_28_rabbit_pose_step_03_final.png, chakra_crown_28_rabbit_pose_step_04_common_mistake.png, chakra_crown_28_rabbit_pose_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","postura do coelho","yoga","chakra","crown","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Postura do coelho","Rabbit Pose","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_28 |

### Postura do golfinho

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_22 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Postura do golfinho com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO_CANONICO.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_third_eye_22_dolphin_pose_step_01_start.png, chakra_third_eye_22_dolphin_pose_step_02_entry.png, chakra_third_eye_22_dolphin_pose_step_03_final.png, chakra_third_eye_22_dolphin_pose_step_04_common_mistake.png, chakra_third_eye_22_dolphin_pose_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","postura do golfinho","yoga","chakra","third_eye","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Postura do golfinho","Dolphin Pose","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_22 |

### Postura do peixe

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_17 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Postura do peixe com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: REUSED. REUTILIZAR ref_004_mov_18.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_throat_17_matsyasana_step_01_start.png, chakra_throat_17_matsyasana_step_02_entry.png, chakra_throat_17_matsyasana_step_03_final.png, chakra_throat_17_matsyasana_step_04_common_mistake.png, chakra_throat_17_matsyasana_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","postura do peixe","yoga","chakra","throat","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Postura do peixe","Matsyasana","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_17 |

### Postura do pombo

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_08 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Postura do pombo com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO_CANONICO.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_sacral_08_pigeon_pose_step_01_start.png, chakra_sacral_08_pigeon_pose_step_02_entry.png, chakra_sacral_08_pigeon_pose_step_03_final.png, chakra_sacral_08_pigeon_pose_step_04_common_mistake.png, chakra_sacral_08_pigeon_pose_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","postura do pombo","yoga","chakra","sacral","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Postura do pombo","Pigeon Pose","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_08 |

### Prancha

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_10 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Prancha com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: REUSED. REUTILIZAR ref_003_mov_05 ou ref_006_mov_08 conforme variacao.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_solar_10_plank_step_01_start.png, chakra_solar_10_plank_step_02_entry.png, chakra_solar_10_plank_step_03_final.png, chakra_solar_10_plank_step_04_common_mistake.png, chakra_solar_10_plank_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","prancha","yoga","chakra","solar","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Prancha","Plank","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_10 |

### Relaxamento final

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_27 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Relaxamento final com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CONFERIR REF_002; gerar novo se nao houver supino neutro sem travesseiros.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_crown_27_savasana_step_01_start.png, chakra_crown_27_savasana_step_02_entry.png, chakra_crown_27_savasana_step_03_final.png, chakra_crown_27_savasana_step_04_common_mistake.png, chakra_crown_27_savasana_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","relaxamento final","yoga","chakra","crown","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Relaxamento final","Savasana","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_27 |

### Respiracao do leao

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_20 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Respiracao do leao com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: NEW_REQUIRED. GERAR_NOVO_CANONICO.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_throat_20_lions_breath_step_01_start.png, chakra_throat_20_lions_breath_step_02_entry.png, chakra_throat_20_lions_breath_step_03_final.png, chakra_throat_20_lions_breath_step_04_common_mistake.png, chakra_throat_20_lions_breath_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","respiracao do leao","yoga","chakra","throat","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Respiracao do leao","Lion's Breath","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_20 |

### Tadasana

| Campo | Valor |
| --- | --- |
| Slug | ref_011_mov_01 |
| Area | BODY_MOVEMENT |
| Categoria | PHYSICAL / YOGA |
| Nivel | 5 |
| Objetivo | Pode ajudar em yoga simbolica, respiracao. |
| Descricao curta | Pode ajudar em yoga simbolica, respiracao. |
| Como fazer | ["Executar Tadasana com controle, respeitando limites e respiracao.","Organize a postura inicial com respiracao tranquila.","Execute somente dentro de uma amplitude confortavel.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Retorne devagar e observe como o corpo responde."] |
| Dicas de postura | ["Reduzir amplitude, alinhar articulacoes e respirar com calma.","Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma."] |
| Respiracao | ["lenta e controlada"] |
| Erros comuns | ["Forcar amplitude, desalinhamento ou prender a respiracao."] |
| Cuidados | ["Respeite amplitude confortavel e pare se houver dor, tontura, falta de ar ou desconforto incomum.","Reduzir amplitude, alinhar articulacoes e respirar com calma.","Nao prometer cura energetica/corporal; chakras devem ser apresentados como tradicao simbolica/yogue.","Respeite amplitude confortavel.","Pare se sentir dor, tontura, falta de ar ou desconforto incomum.","Status dos assets: PLANNED. Imagens vinculadas: 0. Imagens planejadas pendentes: 5. Base: /instructional-images/yoga/chakra-flow.","Reaproveitamento visual: CHECK_BEFORE_GENERATE. CONFERIR ref_003 postura em pe neutra; gerar se nao houver.","Status do video: PLANNED.","Imagens planejadas pendentes: chakra_root_01_tadasana_step_01_start.png, chakra_root_01_tadasana_step_02_entry.png, chakra_root_01_tadasana_step_03_final.png, chakra_root_01_tadasana_step_04_common_mistake.png, chakra_root_01_tadasana_step_05_correction.png."] |
| Contraindicacoes | ["dor forte","dor intensa","dor aguda","falta de ar","dor no peito","formigamento","perda de forca","tontura forte","tontura intensa","pressao descontrolada","lesao recente","pos-operatorio","cirurgia recente","gravidez de risco","febre","sintomas neurologicos","dor irradiada","instabilidade articular","dor forte/aguda","tontura","glaucoma/inversoes","dor cervical","crise intensa"] |
| Recomendado quando | ["yoga para chakras","respiracao","relaxamento","sequencia guiada","pratica espiritual/simbolica","tadasana","yoga","chakra","root","pausa ai","fluxo de yoga com respiracao e consciencia corporal","presenca, simbolismo pessoal e respiracao consciente","chakras","consciencia corporal","equilibrio simbolico","Tadasana","Fluxo de yoga dos 7 chakras - equilibrio, respiracao e consciencia corporal","7 Chakras & Yoga Flow","yoga_flow_7_chakras_consciencia_corporal","ref_011","corpo inteiro","chakra simbolico correspondente","Referencia: ref_011","Colecao: yoga_flow_7_chakras_consciencia_corporal"] |
| Evitar quando | ["dor forte/aguda","tontura","pressao descontrolada","glaucoma/inversoes","dor cervical","crise intensa"] |
| Imagem/chave | ref_011_mov_01 |

## Yoga - Praticas
| Slug | Titulo | Tipo | Area | Nivel | Unlock | Contexto | Duracao s | Intensidade | Video |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| alongamento-coluna-em-pe | Alongamento de coluna em pe | FUNCTIONAL | MOBILITY | 1 | 1 | WORK | 180 | VERY_LIGHT | PLANNED (/videos/alongamento-coluna-em-pe.mp4) |
| montanha-com-respiracao | Postura da montanha com respiracao | FUNCTIONAL | FOCUS | 1 | 1 | BOTH | 180 | VERY_LIGHT | PLANNED (/videos/montanha-com-respiracao.mp4) |
| abertura-de-peito | Abertura de peito | FUNCTIONAL | MOOD | 2 | 2 | BOTH | 300 | LIGHT | PLANNED (/videos/abertura-de-peito.mp4) |
| mobilidade-de-quadril-yoga | Mobilidade de quadril | FUNCTIONAL | MOBILITY | 2 | 2 | HOME | 300 | LIGHT | PLANNED (/videos/mobilidade-de-quadril-yoga.mp4) |
| agachamento-apoio-consciencia | Agachamento com apoio e consciencia corporal | FUNCTIONAL | ENERGY | 3 | 3 | HOME | 420 | LIGHT | PLANNED (/videos/agachamento-apoio-consciencia.mp4) |
| alongamento-lateral-em-pe | Alongamento lateral em pe | FUNCTIONAL | ENERGY | 3 | 3 | BOTH | 360 | LIGHT | PLANNED (/videos/alongamento-lateral-em-pe.mp4) |
| sequencia-longas-horas-sentado | Sequencia curta para longas horas sentado | FUNCTIONAL | WORK_BREAK | 4 | 4 | WORK | 600 | LIGHT | PLANNED (/videos/sequencia-longas-horas-sentado.mp4) |
| torcao-em-cadeira | Torcao em cadeira | FUNCTIONAL | WORK_BREAK | 4 | 4 | WORK | 420 | LIGHT | PLANNED (/videos/torcao-em-cadeira.mp4) |
| fluxo-funcional-energia-leve | Fluxo funcional para energia leve | FUNCTIONAL | ENERGY | 5 | 5 | HOME | 900 | MODERATE_LIGHT | PLANNED (/videos/fluxo-funcional-energia-leve.mp4) |
| yoga-funcional-foco-trabalho | Yoga funcional para foco no trabalho | FUNCTIONAL | FOCUS | 5 | 5 | WORK | 720 | LIGHT | PLANNED (/videos/yoga-funcional-foco-trabalho.mp4) |
| postura-facil-atencao-corpo | Postura facil com atencao no corpo | LIGHT | FOCUS | 1 | 1 | HOME | 180 | VERY_LIGHT | PLANNED (/videos/postura-facil-atencao-corpo.mp4) |
| respiracao-sentada-tranquila | Respiracao sentada tranquila | LIGHT | STRESS | 1 | 1 | BOTH | 180 | VERY_LIGHT | PLANNED (/videos/respiracao-sentada-tranquila.mp4) |
| alongamento-lateral-sentado | Alongamento lateral sentado | LIGHT | MOBILITY | 2 | 2 | BOTH | 240 | LIGHT | PLANNED (/videos/alongamento-lateral-sentado.mp4) |
| mobilidade-de-ombros-yoga | Mobilidade de ombros | LIGHT | WORK_BREAK | 2 | 2 | WORK | 240 | LIGHT | PLANNED (/videos/mobilidade-de-ombros-yoga.mp4) |
| gato-vaca-suave | Gato-vaca suave | LIGHT | MOBILITY | 3 | 3 | HOME | 360 | LIGHT | PLANNED (/videos/gato-vaca-suave.mp4) |
| postura-da-montanha | Postura da montanha | LIGHT | FOCUS | 3 | 3 | BOTH | 300 | LIGHT | PLANNED (/videos/postura-da-montanha.mp4) |
| alongamento-posterior-sentado | Alongamento posterior sentado | LIGHT | MOBILITY | 4 | 4 | HOME | 420 | LIGHT | PLANNED (/videos/alongamento-posterior-sentado.mp4) |
| cachorro-adaptado-parede | Cachorro olhando para baixo adaptado | LIGHT | ENERGY | 4 | 4 | BOTH | 420 | LIGHT | PLANNED (/videos/cachorro-adaptado-parede.mp4) |
| guerreiro-dois-leve | Guerreiro II leve | LIGHT | ENERGY | 5 | 5 | HOME | 600 | MODERATE_LIGHT | PLANNED (/videos/guerreiro-dois-leve.mp4) |
| sequencia-energia-leve | Sequencia curta de energia leve | LIGHT | ENERGY | 5 | 5 | HOME | 720 | MODERATE_LIGHT | PLANNED (/videos/sequencia-energia-leve.mp4) |
| pernas-na-parede-adaptada | Pernas apoiadas na parede adaptada | RESTORATIVE | SLEEP | 1 | 1 | HOME | 300 | VERY_LIGHT | PLANNED (/videos/pernas-na-parede-adaptada.mp4) |
| postura-da-crianca | Postura da crianca | RESTORATIVE | STRESS | 1 | 1 | HOME | 240 | VERY_LIGHT | PLANNED (/videos/postura-da-crianca.mp4) |
| flexao-frente-restaurativa | Flexao a frente restaurativa | RESTORATIVE | SLEEP | 2 | 2 | HOME | 360 | VERY_LIGHT | PLANNED (/videos/flexao-frente-restaurativa.mp4) |
| torcao-sentada-suave | Torcao sentada suave | RESTORATIVE | MOBILITY | 2 | 2 | BOTH | 300 | VERY_LIGHT | PLANNED (/videos/torcao-sentada-suave.mp4) |
| alongamento-pescoco-ombros-restaurativo | Alongamento de pescoco e ombros | RESTORATIVE | WORK_BREAK | 3 | 3 | WORK | 360 | VERY_LIGHT | PLANNED (/videos/alongamento-pescoco-ombros-restaurativo.mp4) |
| respiracao-para-desacelerar-yoga | Respiracao para desacelerar | RESTORATIVE | STRESS | 3 | 3 | BOTH | 360 | VERY_LIGHT | PLANNED (/videos/respiracao-para-desacelerar-yoga.mp4) |
| escaneamento-corporal-postura-confortavel | Escaneamento corporal com postura confortavel | RESTORATIVE | SLEEP | 4 | 4 | HOME | 600 | VERY_LIGHT | PLANNED (/videos/escaneamento-corporal-postura-confortavel.mp4) |
| sequencia-fim-de-dia | Sequencia de fim de dia | RESTORATIVE | SLEEP | 4 | 4 | HOME | 720 | LIGHT | PLANNED (/videos/sequencia-fim-de-dia.mp4) |
| ritual-sono-yoga-leve | Ritual de sono com yoga leve | RESTORATIVE | SLEEP | 5 | 5 | HOME | 900 | LIGHT | PLANNED (/videos/ritual-sono-yoga-leve.mp4) |
| yoga-restaurativa-pausa-trabalho | Yoga restaurativa para pausa no trabalho | RESTORATIVE | WORK_BREAK | 5 | 5 | WORK | 600 | LIGHT | PLANNED (/videos/yoga-restaurativa-pausa-trabalho.mp4) |
## Detalhes de Yoga

### Alongamento de coluna em pe

| Campo | Valor |
| --- | --- |
| Slug | alongamento-coluna-em-pe |
| Tipo | FUNCTIONAL |
| Contexto | WORK |
| Objetivo | Reduzir rigidez de postura sentada. |
| Descricao curta | Movimento simples para alongar coluna sem sair do lugar. |
| Como fazer | ["Fique em pe com pes firmes.","Apoie maos nos quadris.","Alongue a coluna.","Incline pouco para frente ou lados.","Retorne ao centro."] |
| Dicas de postura | ["Movimento pequeno.","Joelhos soltos.","Pescoço relaxado."] |
| Respiracao | ["Inspire crescendo.","Expire no movimento."] |
| Erros comuns | ["Curvar rapido.","Forcar lombar.","Olhar para baixo demais."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["muito tempo sentado","pausa no trabalho","energia baixa leve"] |
| Evitar quando | ["dor lombar forte"] |
| Imagem principal | alongamento-coluna-em-pe |
| Sequencia de imagens | ["alongamento-coluna-em-pe-1","alongamento-coluna-em-pe-2","alongamento-coluna-em-pe-3","alongamento-coluna-em-pe-4","alongamento-coluna-em-pe-5"] |

### Postura da montanha com respiracao

| Campo | Valor |
| --- | --- |
| Slug | montanha-com-respiracao |
| Tipo | FUNCTIONAL |
| Contexto | BOTH |
| Objetivo | Criar estabilidade corporal antes de movimento ou trabalho. |
| Descricao curta | Base em pe com respiracao para reorganizar postura. |
| Como fazer | ["Fique em pe.","Distribua o peso.","Solte ombros.","Respire por alguns ciclos.","Observe se a postura mudou."] |
| Dicas de postura | ["Joelhos destravados.","Pes firmes.","Olhar suave."] |
| Respiracao | ["Inspire natural.","Expire sem pressa."] |
| Erros comuns | ["Travar joelhos.","Prender ar.","Forcar barriga."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["foco baixo","inicio de pausa","antes de caminhar"] |
| Evitar quando | ["tontura em pe"] |
| Imagem principal | montanha-com-respiracao |
| Sequencia de imagens | ["montanha-com-respiracao-1","montanha-com-respiracao-2","montanha-com-respiracao-3","montanha-com-respiracao-4","montanha-com-respiracao-5"] |

### Abertura de peito

| Campo | Valor |
| --- | --- |
| Slug | abertura-de-peito |
| Tipo | FUNCTIONAL |
| Contexto | BOTH |
| Objetivo | Soltar postura fechada e respirar com mais espaco. |
| Descricao curta | Abertura suave de peito e ombros, sem arco profundo. |
| Como fazer | ["Fique sentado ou em pe.","Leve maos para tras com conforto.","Abra o peito sem jogar a cabeca.","Respire duas vezes.","Solte os bracos."] |
| Dicas de postura | ["Costelas sem projetar.","Queixo neutro.","Ombros longe das orelhas."] |
| Respiracao | ["Inspire com peito amplo.","Expire relaxando ombros."] |
| Erros comuns | ["Arquear lombar.","Jogar cabeca para tras.","Forcar bracos."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["humor baixo","postura fechada","tela demais"] |
| Evitar quando | ["dor no ombro","formigamento"] |
| Imagem principal | abertura-de-peito |
| Sequencia de imagens | ["abertura-de-peito-1","abertura-de-peito-2","abertura-de-peito-3","abertura-de-peito-4","abertura-de-peito-5"] |

### Mobilidade de quadril

| Campo | Valor |
| --- | --- |
| Slug | mobilidade-de-quadril-yoga |
| Tipo | FUNCTIONAL |
| Contexto | HOME |
| Objetivo | Preparar o corpo para ficar menos rigido. |
| Descricao curta | Mobilidade leve com apoio para quadris. |
| Como fazer | ["Use parede ou cadeira como apoio.","Eleve um joelho pouco.","Faca circulos pequenos.","Troque o sentido.","Repita do outro lado."] |
| Dicas de postura | ["Apoio firme.","Tronco estavel.","Amplitude pequena."] |
| Respiracao | ["Respire continuo.","Expire quando reduzir tensao."] |
| Erros comuns | ["Circulos grandes demais.","Sem apoio.","Compensar na lombar."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["quadril rigido","antes de caminhada","longas horas sentado"] |
| Evitar quando | ["dor no quadril","falta de equilibrio"] |
| Imagem principal | mobilidade-de-quadril-yoga |
| Sequencia de imagens | ["mobilidade-de-quadril-yoga-1","mobilidade-de-quadril-yoga-2","mobilidade-de-quadril-yoga-3","mobilidade-de-quadril-yoga-4","mobilidade-de-quadril-yoga-5"] |

### Agachamento com apoio e consciencia corporal

| Campo | Valor |
| --- | --- |
| Slug | agachamento-apoio-consciencia |
| Tipo | FUNCTIONAL |
| Contexto | HOME |
| Objetivo | Ativar pernas com baixa pressao de performance. |
| Descricao curta | Agachamento curto com apoio, foco em controle e seguranca. |
| Como fazer | ["Use cadeira ou parede.","Afaste pes na largura do quadril.","Leve quadril para tras.","Dobre pouco os joelhos.","Suba empurrando o chao."] |
| Dicas de postura | ["Joelhos acompanham os pes.","Coluna neutra.","Apoio sempre disponivel."] |
| Respiracao | ["Inspire ao descer.","Expire ao subir."] |
| Erros comuns | ["Joelhos para dentro.","Descer demais.","Tirar calcanhares do chao."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["energia estavel","necessidade de ativacao","pratica em casa"] |
| Evitar quando | ["dor no joelho","tontura","sono muito ruim"] |
| Imagem principal | agachamento-apoio-consciencia |
| Sequencia de imagens | ["agachamento-apoio-consciencia-1","agachamento-apoio-consciencia-2","agachamento-apoio-consciencia-3","agachamento-apoio-consciencia-4","agachamento-apoio-consciencia-5"] |

### Alongamento lateral em pe

| Campo | Valor |
| --- | --- |
| Slug | alongamento-lateral-em-pe |
| Tipo | FUNCTIONAL |
| Contexto | BOTH |
| Objetivo | Ativar corpo sem treino intenso. |
| Descricao curta | Inclinação lateral em pe para mobilidade e energia suave. |
| Como fazer | ["Comece em montanha.","Eleve um braco.","Incline suavemente para o lado.","Respire uma ou duas vezes.","Volte e troque."] |
| Dicas de postura | ["Quadril estavel.","Joelhos soltos.","Nao colapse o tronco."] |
| Respiracao | ["Inspire ao subir.","Expire ao inclinar."] |
| Erros comuns | ["Forcar alcance.","Girar tronco.","Prender ar."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["energia moderada","pausa ativa","manha"] |
| Evitar quando | ["tontura","dor lateral"] |
| Imagem principal | alongamento-lateral-em-pe |
| Sequencia de imagens | ["alongamento-lateral-em-pe-1","alongamento-lateral-em-pe-2","alongamento-lateral-em-pe-3","alongamento-lateral-em-pe-4","alongamento-lateral-em-pe-5"] |

### Sequencia curta para longas horas sentado

| Campo | Valor |
| --- | --- |
| Slug | sequencia-longas-horas-sentado |
| Tipo | FUNCTIONAL |
| Contexto | WORK |
| Objetivo | Transformar pausa de trabalho em cuidado corporal simples. |
| Descricao curta | Sequencia de cadeira e postura em pe para quebrar rigidez. |
| Como fazer | ["Sente-se e respire.","Mobilize ombros.","Faca torcao em cadeira.","Levante e encontre montanha.","Volte com uma proxima acao."] |
| Dicas de postura | ["Movimentos pequenos.","Use cadeira como apoio.","Nao apresse transicoes."] |
| Respiracao | ["Respire entre etapas.","Expire antes de voltar ao trabalho."] |
| Erros comuns | ["Fazer escondido e tenso.","Levantar rapido.","Forcar torcao."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["tela por muitas horas","foco baixo","pescoço rigido"] |
| Evitar quando | ["dor ao levantar","tontura"] |
| Imagem principal | sequencia-longas-horas-sentado |
| Sequencia de imagens | ["sequencia-longas-horas-sentado-1","sequencia-longas-horas-sentado-2","sequencia-longas-horas-sentado-3","sequencia-longas-horas-sentado-4","sequencia-longas-horas-sentado-5"] |

### Torcao em cadeira

| Campo | Valor |
| --- | --- |
| Slug | torcao-em-cadeira |
| Tipo | FUNCTIONAL |
| Contexto | WORK |
| Objetivo | Soltar coluna e reorganizar foco durante expediente. |
| Descricao curta | Torcao leve na cadeira para pausa funcional no trabalho. |
| Como fazer | ["Sente-se na frente da cadeira.","Apoie os pes.","Gire suavemente para um lado.","Respire.","Volte e troque o lado."] |
| Dicas de postura | ["Giro pequeno.","Quadril permanece estavel.","Pes no chao."] |
| Respiracao | ["Inspire alongando.","Expire girando pouco."] |
| Erros comuns | ["Puxar com forca.","Torcer pescoço.","Segurar ar."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["longas horas sentado","foco baixo","pausa no trabalho"] |
| Evitar quando | ["dor aguda na coluna"] |
| Imagem principal | torcao-em-cadeira |
| Sequencia de imagens | ["torcao-em-cadeira-1","torcao-em-cadeira-2","torcao-em-cadeira-3","torcao-em-cadeira-4","torcao-em-cadeira-5"] |

### Fluxo funcional para energia leve

| Campo | Valor |
| --- | --- |
| Slug | fluxo-funcional-energia-leve |
| Tipo | FUNCTIONAL |
| Contexto | HOME |
| Objetivo | Criar ativacao leve em dias favoraveis. |
| Descricao curta | Fluxo acessivel com montanha, lateral e agachamento apoiado. |
| Como fazer | ["Comece em montanha.","Eleve os bracos.","Incline para cada lado.","Faca agachamento curto com apoio.","Finalize respirando."] |
| Dicas de postura | ["Amplitude confortavel.","Joelhos alinhados.","Apoio perto do corpo."] |
| Respiracao | ["Movimento acompanha respiracao.","Nao prenda o ar no agachamento."] |
| Erros comuns | ["Transformar em treino intenso.","Descer demais.","Acelerar."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["energia boa","estado equilibrado","vontade de movimento"] |
| Evitar quando | ["energia baixa","sono ruim","estresse muito alto"] |
| Imagem principal | fluxo-funcional-energia-leve |
| Sequencia de imagens | ["fluxo-funcional-energia-leve-1","fluxo-funcional-energia-leve-2","fluxo-funcional-energia-leve-3","fluxo-funcional-energia-leve-4","fluxo-funcional-energia-leve-5"] |

### Yoga funcional para foco no trabalho

| Campo | Valor |
| --- | --- |
| Slug | yoga-funcional-foco-trabalho |
| Tipo | FUNCTIONAL |
| Contexto | WORK |
| Objetivo | Reduzir dispersao usando postura, respiracao e movimento leve. |
| Descricao curta | Sequencia discreta para corpo e atencao antes de tarefa importante. |
| Como fazer | ["Sente-se com os pes firmes.","Respire por alguns ciclos.","Abra o peito suavemente.","Faca torcao pequena.","Escolha uma unica proxima acao."] |
| Dicas de postura | ["Pes apoiados.","Ombros baixos.","Giro pequeno."] |
| Respiracao | ["Inspire abrindo espaco.","Expire soltando tensao."] |
| Erros comuns | ["Tentar resolver tudo.","Fazer rapido demais.","Forcar pescoço."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["foco baixo","antes de reuniao","trabalho em tela"] |
| Evitar quando | ["dor no ombro ou coluna","urgencia externa real"] |
| Imagem principal | yoga-funcional-foco-trabalho |
| Sequencia de imagens | ["yoga-funcional-foco-trabalho-1","yoga-funcional-foco-trabalho-2","yoga-funcional-foco-trabalho-3","yoga-funcional-foco-trabalho-4","yoga-funcional-foco-trabalho-5"] |

### Postura facil com atencao no corpo

| Campo | Valor |
| --- | --- |
| Slug | postura-facil-atencao-corpo |
| Tipo | LIGHT |
| Contexto | HOME |
| Objetivo | Trazer presenca antes de iniciar outra tarefa. |
| Descricao curta | Observacao simples do corpo em postura sentada confortavel. |
| Como fazer | ["Sente-se no chao ou cadeira.","Apoie o quadril para nao forcar.","Observe pes, pernas e coluna.","Note a respiracao sem mudar muito.","Finalize escolhendo uma pequena acao."] |
| Dicas de postura | ["Use almofada se precisar.","Mantenha o pescoço longo.","Relaxe as maos."] |
| Respiracao | ["Respire sem controlar demais.","Observe entrada e saida do ar."] |
| Erros comuns | ["Sentar sem apoio com dor.","Forcar coluna reta.","Julgar pensamentos."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["foco baixo","inicio do dia","antes de estudar"] |
| Evitar quando | ["dor ao sentar no chao"] |
| Imagem principal | postura-facil-atencao-corpo |
| Sequencia de imagens | ["postura-facil-atencao-corpo-1","postura-facil-atencao-corpo-2","postura-facil-atencao-corpo-3","postura-facil-atencao-corpo-4","postura-facil-atencao-corpo-5"] |

### Respiracao sentada tranquila

| Campo | Valor |
| --- | --- |
| Slug | respiracao-sentada-tranquila |
| Tipo | LIGHT |
| Contexto | BOTH |
| Objetivo | Reduzir estimulos e criar uma entrada suave na pratica. |
| Descricao curta | Uma pausa sentada para perceber o corpo e alongar a expiracao. |
| Como fazer | ["Sente-se com os pes apoiados.","Alongue a coluna sem rigidez.","Inspire pelo nariz de forma natural.","Expire um pouco mais longo que a inspiracao.","Repita por alguns ciclos."] |
| Dicas de postura | ["Ombros soltos.","Mandibula relaxada.","Pes firmes no chao."] |
| Respiracao | ["Nao force o ar.","Use expiracao suave e longa.","Volte ao ritmo natural se desconfortar."] |
| Erros comuns | ["Prender a respiracao.","Elevar ombros.","Tentar respirar profundo demais."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["estresse alto","mente acelerada","pausa no trabalho"] |
| Evitar quando | ["desconforto ao segurar ar","tontura"] |
| Imagem principal | respiracao-sentada-tranquila |
| Sequencia de imagens | ["respiracao-sentada-tranquila-1","respiracao-sentada-tranquila-2","respiracao-sentada-tranquila-3","respiracao-sentada-tranquila-4","respiracao-sentada-tranquila-5"] |

### Alongamento lateral sentado

| Campo | Valor |
| --- | --- |
| Slug | alongamento-lateral-sentado |
| Tipo | LIGHT |
| Contexto | BOTH |
| Objetivo | Soltar tronco e criar espaco para respirar melhor. |
| Descricao curta | Inclinação lateral suave para abrir costelas e ombros. |
| Como fazer | ["Sente-se com base estavel.","Eleve um braco sem travar o ombro.","Incline o tronco para o lado oposto.","Respire duas ou tres vezes.","Volte ao centro e repita do outro lado."] |
| Dicas de postura | ["Nao gire o tronco para frente.","Mantenha os dois lados do quadril apoiados.","Evite elevar o ombro perto da orelha."] |
| Respiracao | ["Inspire no centro.","Expire durante a inclinacao.","Respire nas costelas do lado alongado."] |
| Erros comuns | ["Forcar alcance.","Prender respiracao.","Desabar o peito."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["muitas horas sentado","ombros tensos","foco baixo"] |
| Evitar quando | ["dor lateral intensa","tontura ao inclinar"] |
| Imagem principal | alongamento-lateral-sentado |
| Sequencia de imagens | ["alongamento-lateral-sentado-1","alongamento-lateral-sentado-2","alongamento-lateral-sentado-3","alongamento-lateral-sentado-4","alongamento-lateral-sentado-5"] |

### Mobilidade de ombros

| Campo | Valor |
| --- | --- |
| Slug | mobilidade-de-ombros-yoga |
| Tipo | LIGHT |
| Contexto | WORK |
| Objetivo | Reduzir rigidez e retomar consciencia corporal. |
| Descricao curta | Movimentos lentos para ombros depois de tela ou postura fixa. |
| Como fazer | ["Fique sentado ou em pe.","Eleve e solte os ombros tres vezes.","Faca circulos lentos para tras.","Abra os bracos com amplitude pequena.","Finalize relaxando as maos."] |
| Dicas de postura | ["Pes apoiados.","Costelas sem projetar.","Pescoço solto."] |
| Respiracao | ["Inspire ao abrir.","Expire ao soltar.","Nao segure o ar."] |
| Erros comuns | ["Fazer rapido demais.","Encolher pescoço.","Forcar amplitude."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["trabalho em tela","ombros tensos","pausa curta"] |
| Evitar quando | ["dor no ombro","formigamento"] |
| Imagem principal | mobilidade-de-ombros-yoga |
| Sequencia de imagens | ["mobilidade-de-ombros-yoga-1","mobilidade-de-ombros-yoga-2","mobilidade-de-ombros-yoga-3","mobilidade-de-ombros-yoga-4","mobilidade-de-ombros-yoga-5"] |

### Gato-vaca suave

| Campo | Valor |
| --- | --- |
| Slug | gato-vaca-suave |
| Tipo | LIGHT |
| Contexto | HOME |
| Objetivo | Destravar a coluna com movimento lento e seguro. |
| Descricao curta | Mobilidade leve de coluna em quatro apoios. |
| Como fazer | ["Apoie maos e joelhos.","Mantenha movimento pequeno.","Inspire abrindo o peito suavemente.","Expire arredondando a coluna sem forcar.","Repita devagar."] |
| Dicas de postura | ["Maos abaixo dos ombros.","Joelhos abaixo do quadril.","Use manta sob joelhos se precisar."] |
| Respiracao | ["Inspire na abertura.","Expire ao arredondar.","Movimento acompanha a respiracao."] |
| Erros comuns | ["Movimento rapido.","Afundar ombros.","Forcar lombar."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["coluna rigida","energia baixa moderada","pausa em casa"] |
| Evitar quando | ["dor nos punhos ou joelhos","dor lombar forte"] |
| Imagem principal | gato-vaca-suave |
| Sequencia de imagens | ["gato-vaca-suave-1","gato-vaca-suave-2","gato-vaca-suave-3","gato-vaca-suave-4","gato-vaca-suave-5"] |

### Postura da montanha

| Campo | Valor |
| --- | --- |
| Slug | postura-da-montanha |
| Tipo | LIGHT |
| Contexto | BOTH |
| Objetivo | Criar estabilidade antes de uma tarefa ou pratica maior. |
| Descricao curta | Postura em pe para alinhar corpo, atencao e respiracao. |
| Como fazer | ["Fique em pe com pes na largura do quadril.","Distribua o peso entre calcanhar e frente dos pes.","Alongue a coluna sem travar joelhos.","Relaxe os ombros.","Respire por alguns ciclos."] |
| Dicas de postura | ["Joelhos destravados.","Queixo paralelo ao chao.","Abdomen relaxado, nao rigido."] |
| Respiracao | ["Respire pelo nariz se confortavel.","Use expiracao tranquila."] |
| Erros comuns | ["Travar joelhos.","Empinar costelas.","Apertar mandibula."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["dispersao","antes de movimento","inicio do dia"] |
| Evitar quando | ["tontura em pe"] |
| Imagem principal | postura-da-montanha |
| Sequencia de imagens | ["postura-da-montanha-1","postura-da-montanha-2","postura-da-montanha-3","postura-da-montanha-4","postura-da-montanha-5"] |

### Alongamento posterior sentado

| Campo | Valor |
| --- | --- |
| Slug | alongamento-posterior-sentado |
| Tipo | LIGHT |
| Contexto | HOME |
| Objetivo | Soltar pernas e lombar com amplitude confortavel. |
| Descricao curta | Alongamento leve da parte posterior sem buscar flexibilidade maxima. |
| Como fazer | ["Sente-se com as pernas a frente.","Dobre um pouco os joelhos.","Leve o tronco levemente a frente.","Pare antes de qualquer dor.","Volte empilhando a coluna devagar."] |
| Dicas de postura | ["Use almofada sob o quadril.","Nao force tocar os pes.","Mantenha rosto relaxado."] |
| Respiracao | ["Inspire alongando a coluna.","Expire reduzindo tensao.","Respire sem prender."] |
| Erros comuns | ["Arredondar demais para forcar.","Travar joelhos.","Comparar amplitude."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["pernas rigidas","fim do dia","mobilidade leve"] |
| Evitar quando | ["dor ciatica","dor lombar forte"] |
| Imagem principal | alongamento-posterior-sentado |
| Sequencia de imagens | ["alongamento-posterior-sentado-1","alongamento-posterior-sentado-2","alongamento-posterior-sentado-3","alongamento-posterior-sentado-4","alongamento-posterior-sentado-5"] |

### Cachorro olhando para baixo adaptado

| Campo | Valor |
| --- | --- |
| Slug | cachorro-adaptado-parede |
| Tipo | LIGHT |
| Contexto | BOTH |
| Objetivo | Criar energia suave e soltar a parte superior do corpo. |
| Descricao curta | Versao na parede para alongar costas e ombros sem sobrecarga. |
| Como fazer | ["Apoie as maos na parede.","Caminhe para tras ate alongar os bracos.","Leve o quadril para tras.","Mantenha joelhos destravados.","Volte caminhando para perto da parede."] |
| Dicas de postura | ["Punhos alinhados aos ombros.","Pes firmes.","Coluna longa sem forcar."] |
| Respiracao | ["Inspire preparando.","Expire recuando o quadril.","Respire nas costas."] |
| Erros comuns | ["Empurrar cabeca para baixo.","Travar joelhos.","Forcar ombros."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["ombros cansados","pausa no trabalho","energia moderada"] |
| Evitar quando | ["dor no ombro","tontura"] |
| Imagem principal | cachorro-adaptado-parede |
| Sequencia de imagens | ["cachorro-adaptado-parede-1","cachorro-adaptado-parede-2","cachorro-adaptado-parede-3","cachorro-adaptado-parede-4","cachorro-adaptado-parede-5"] |

### Guerreiro II leve

| Campo | Valor |
| --- | --- |
| Slug | guerreiro-dois-leve |
| Tipo | LIGHT |
| Contexto | HOME |
| Objetivo | Estimular presenca, energia e estabilidade sem intensidade alta. |
| Descricao curta | Postura em pe adaptada, com base menor e permanencia curta. |
| Como fazer | ["Abra os pes em base confortavel.","Vire o pe da frente para fora.","Dobre pouco o joelho da frente.","Abra os bracos sem tensionar ombros.","Volte e troque o lado."] |
| Dicas de postura | ["Joelho acompanha a direcao do pe.","Base menor e segura.","Ombros longe das orelhas."] |
| Respiracao | ["Respire continuo.","Expire relaxando ombros.","Nao prenda o ar na permanencia."] |
| Erros comuns | ["Base muito ampla.","Joelho cair para dentro.","Contrair ombros."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["estado equilibrado","energia boa","vontade de progressao"] |
| Evitar quando | ["dor no joelho","tontura","energia muito baixa"] |
| Imagem principal | guerreiro-dois-leve |
| Sequencia de imagens | ["guerreiro-dois-leve-1","guerreiro-dois-leve-2","guerreiro-dois-leve-3","guerreiro-dois-leve-4","guerreiro-dois-leve-5"] |

### Sequencia curta de energia leve

| Campo | Valor |
| --- | --- |
| Slug | sequencia-energia-leve |
| Tipo | LIGHT |
| Contexto | HOME |
| Objetivo | Ativar o corpo mantendo ritmo calmo. |
| Descricao curta | Mini fluxo com montanha, alongamento lateral e retorno consciente. |
| Como fazer | ["Comece em montanha.","Eleve os bracos com conforto.","Incline para um lado.","Volte e repita do outro lado.","Finalize com respiracao tranquila."] |
| Dicas de postura | ["Joelhos soltos.","Quadril estavel.","Ombros relaxados."] |
| Respiracao | ["Inspire ao subir.","Expire na inclinacao.","Respire natural no fechamento."] |
| Erros comuns | ["Fazer rapido.","Forcar lombar.","Segurar respiracao."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["energia estavel","manha","estado equilibrado"] |
| Evitar quando | ["sono muito ruim","estresse muito alto","tontura"] |
| Imagem principal | sequencia-energia-leve |
| Sequencia de imagens | ["sequencia-energia-leve-1","sequencia-energia-leve-2","sequencia-energia-leve-3","sequencia-energia-leve-4","sequencia-energia-leve-5"] |

### Pernas apoiadas na parede adaptada

| Campo | Valor |
| --- | --- |
| Slug | pernas-na-parede-adaptada |
| Tipo | RESTORATIVE |
| Contexto | HOME |
| Objetivo | Desacelerar o corpo antes da noite ou apos cansaço. |
| Descricao curta | Descanso com pernas elevadas de forma confortavel. |
| Como fazer | ["Sente-se perto da parede.","Deite de lado e suba as pernas.","Ajuste distancia ate ficar confortavel.","Descanse os bracos.","Saia rolando de lado."] |
| Dicas de postura | ["Nao precisa encostar quadril na parede.","Use almofada se ajudar.","Mantenha pes relaxados."] |
| Respiracao | ["Respire suave.","Alongue a expiracao se for confortavel."] |
| Erros comuns | ["Ficar perto demais da parede.","Forcar pernas retas.","Levantar rapido."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["sono ruim","pernas cansadas","fim de dia"] |
| Evitar quando | ["desconforto lombar","tontura deitado"] |
| Imagem principal | pernas-na-parede-adaptada |
| Sequencia de imagens | ["pernas-na-parede-adaptada-1","pernas-na-parede-adaptada-2","pernas-na-parede-adaptada-3","pernas-na-parede-adaptada-4","pernas-na-parede-adaptada-5"] |

### Postura da crianca

| Campo | Valor |
| --- | --- |
| Slug | postura-da-crianca |
| Tipo | RESTORATIVE |
| Contexto | HOME |
| Objetivo | Criar sensacao de recolhimento e pausa corporal. |
| Descricao curta | Postura restaurativa simples com apoio para desacelerar. |
| Como fazer | ["Ajoelhe-se com manta se precisar.","Leve o quadril para tras.","Apoie o tronco com conforto.","Descanse os bracos.","Volte devagar."] |
| Dicas de postura | ["Use almofada sob o tronco.","Separe joelhos se ficar melhor.","Nao force testa no chao."] |
| Respiracao | ["Respire nas costas.","Expire soltando o peso.","Mantenha ar natural."] |
| Erros comuns | ["Forcar joelhos.","Entrar rapido demais.","Prender respiracao."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["estresse alto","fim do dia","necessidade de pausa"] |
| Evitar quando | ["dor no joelho","desconforto ao ajoelhar"] |
| Imagem principal | postura-da-crianca |
| Sequencia de imagens | ["postura-da-crianca-1","postura-da-crianca-2","postura-da-crianca-3","postura-da-crianca-4","postura-da-crianca-5"] |

### Flexao a frente restaurativa

| Campo | Valor |
| --- | --- |
| Slug | flexao-frente-restaurativa |
| Tipo | RESTORATIVE |
| Contexto | HOME |
| Objetivo | Criar transicao calma sem alongamento agressivo. |
| Descricao curta | Flexao sentada com apoio para encerrar o dia. |
| Como fazer | ["Sente-se sobre apoio.","Coloque almofada a frente.","Incline o tronco ate apoiar.","Respire sem pressa.","Volte devagar."] |
| Dicas de postura | ["Joelhos podem dobrar.","Apoie o tronco.","Nao busque tocar os pes."] |
| Respiracao | ["Expire soltando peso.","Mantenha respiracao leve."] |
| Erros comuns | ["Forcar flexibilidade.","Entrar sem apoio.","Subir rapido."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["noite","sono sensivel","cansaço"] |
| Evitar quando | ["dor lombar forte","tontura ao inclinar"] |
| Imagem principal | flexao-frente-restaurativa |
| Sequencia de imagens | ["flexao-frente-restaurativa-1","flexao-frente-restaurativa-2","flexao-frente-restaurativa-3","flexao-frente-restaurativa-4","flexao-frente-restaurativa-5"] |

### Torcao sentada suave

| Campo | Valor |
| --- | --- |
| Slug | torcao-sentada-suave |
| Tipo | RESTORATIVE |
| Contexto | BOTH |
| Objetivo | Soltar costas sem torcao intensa. |
| Descricao curta | Rotacao leve da coluna, segura para pausa curta. |
| Como fazer | ["Sente-se com pes apoiados.","Alongue a coluna.","Gire pouco para um lado.","Respire duas vezes.","Volte e repita do outro lado."] |
| Dicas de postura | ["Comece o giro pelo peito, nao pelo pescoço.","Mantenha quadril estavel.","Nao puxe com forca."] |
| Respiracao | ["Inspire crescendo.","Expire girando pouco.","Respire sem travar."] |
| Erros comuns | ["Forcar com as maos.","Girar pescoço demais.","Inclinar o tronco."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["muitas horas sentado","trabalho em tela","tensao leve"] |
| Evitar quando | ["dor aguda na coluna","gestacao sem orientacao"] |
| Imagem principal | torcao-sentada-suave |
| Sequencia de imagens | ["torcao-sentada-suave-1","torcao-sentada-suave-2","torcao-sentada-suave-3","torcao-sentada-suave-4","torcao-sentada-suave-5"] |

### Alongamento de pescoco e ombros

| Campo | Valor |
| --- | --- |
| Slug | alongamento-pescoco-ombros-restaurativo |
| Tipo | RESTORATIVE |
| Contexto | WORK |
| Objetivo | Soltar tensao sem tirar o usuario do ambiente de trabalho. |
| Descricao curta | Pausa restaurativa para quem ficou muito tempo em tela. |
| Como fazer | ["Sente-se com apoio.","Incline a cabeca para um lado.","Mantenha o ombro oposto relaxado.","Respire duas vezes.","Volte e troque o lado."] |
| Dicas de postura | ["Nao puxe a cabeca.","Queixo levemente recolhido.","Peito aberto sem rigidez."] |
| Respiracao | ["Expire soltando ombros.","Respire pequeno e confortavel."] |
| Erros comuns | ["Puxar forte.","Elevar ombro.","Girar o pescoço rapido."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["tela demais","ombros tensos","pausa de expediente"] |
| Evitar quando | ["dor irradiada","formigamento"] |
| Imagem principal | alongamento-pescoco-ombros-restaurativo |
| Sequencia de imagens | ["alongamento-pescoco-ombros-restaurativo-1","alongamento-pescoco-ombros-restaurativo-2","alongamento-pescoco-ombros-restaurativo-3","alongamento-pescoco-ombros-restaurativo-4","alongamento-pescoco-ombros-restaurativo-5"] |

### Respiracao para desacelerar

| Campo | Valor |
| --- | --- |
| Slug | respiracao-para-desacelerar-yoga |
| Tipo | RESTORATIVE |
| Contexto | BOTH |
| Objetivo | Ajudar o corpo a sair do ritmo de urgencia. |
| Descricao curta | Pratica respiratoria com expiracao mais longa, sem retencao intensa. |
| Como fazer | ["Sente-se com conforto.","Inspire sem forcar.","Expire contando um pouco mais longo.","Repita por alguns ciclos.","Volte ao ritmo natural."] |
| Dicas de postura | ["Coluna apoiada se preciso.","Ombros baixos.","Rosto suave."] |
| Respiracao | ["Nao segure o ar.","Expiracao deve ser confortavel.","Pare se houver tontura."] |
| Erros comuns | ["Controlar demais.","Prender ar.","Fazer com pressa."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["estresse alto","antes de dormir","pausa entre tarefas"] |
| Evitar quando | ["tontura","desconforto respiratorio"] |
| Imagem principal | respiracao-para-desacelerar-yoga |
| Sequencia de imagens | ["respiracao-para-desacelerar-yoga-1","respiracao-para-desacelerar-yoga-2","respiracao-para-desacelerar-yoga-3","respiracao-para-desacelerar-yoga-4","respiracao-para-desacelerar-yoga-5"] |

### Escaneamento corporal com postura confortavel

| Campo | Valor |
| --- | --- |
| Slug | escaneamento-corporal-postura-confortavel |
| Tipo | RESTORATIVE |
| Contexto | HOME |
| Objetivo | Preparar transicao para descanso com mais presenca. |
| Descricao curta | Observacao guiada do corpo em postura de descanso. |
| Como fazer | ["Deite-se ou sente-se com apoio.","Observe pes e pernas.","Passe atencao por tronco, ombros e rosto.","Nao tente mudar tudo.","Finalize com respiracao natural."] |
| Dicas de postura | ["Apoie joelhos se precisar.","Solte mandibula.","Mantenha o corpo aquecido."] |
| Respiracao | ["Respire natural.","Use expiracao suave para soltar tensao."] |
| Erros comuns | ["Tentar relaxar a forca.","Ficar desconfortavel por muito tempo.","Cobrar silencio mental."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["sono sensivel","fim de noite","cansaço mental"] |
| Evitar quando | ["desconforto deitado","sonolencia em local inseguro"] |
| Imagem principal | escaneamento-corporal-postura-confortavel |
| Sequencia de imagens | ["escaneamento-corporal-postura-confortavel-1","escaneamento-corporal-postura-confortavel-2","escaneamento-corporal-postura-confortavel-3","escaneamento-corporal-postura-confortavel-4","escaneamento-corporal-postura-confortavel-5"] |

### Sequencia de fim de dia

| Campo | Valor |
| --- | --- |
| Slug | sequencia-fim-de-dia |
| Tipo | RESTORATIVE |
| Contexto | HOME |
| Objetivo | Criar ritual de fechamento sem depender de tela. |
| Descricao curta | Sequencia curta para sair do modo alerta. |
| Como fazer | ["Diminua estimulos.","Sente-se e respire.","Faca torcao suave para cada lado.","Entre em postura da crianca apoiada.","Volte e encerre."] |
| Dicas de postura | ["Use apoios.","Movimentos lentos.","Nao force permanencia."] |
| Respiracao | ["Expire mais longo.","Respire pelo nariz se confortavel."] |
| Erros comuns | ["Fazer como treino.","Ligar telas no meio.","Forcar amplitude."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["noite","apos trabalho","sono agitado"] |
| Evitar quando | ["dor no joelho","tontura"] |
| Imagem principal | sequencia-fim-de-dia |
| Sequencia de imagens | ["sequencia-fim-de-dia-1","sequencia-fim-de-dia-2","sequencia-fim-de-dia-3","sequencia-fim-de-dia-4","sequencia-fim-de-dia-5"] |

### Ritual de sono com yoga leve

| Campo | Valor |
| --- | --- |
| Slug | ritual-sono-yoga-leve |
| Tipo | RESTORATIVE |
| Contexto | HOME |
| Objetivo | Preparar a noite de forma gentil e repetivel. |
| Descricao curta | Ritual restaurativo com apoio, respiracao e fechamento do dia. |
| Como fazer | ["Reduza luzes.","Faca respiracao tranquila.","Use flexao com apoio.","Eleve pernas se confortavel.","Finalize com escaneamento corporal."] |
| Dicas de postura | ["Apoios sao bem-vindos.","Conforto acima de forma.","Saia das posturas devagar."] |
| Respiracao | ["Respiracao leve.","Expiracao longa sem reter ar."] |
| Erros comuns | ["Transformar em meta.","Fazer sem apoio.","Ficar em dor."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["rotina de sono","fim de semana","desacelerar"] |
| Evitar quando | ["dor ao flexionar","tontura deitado"] |
| Imagem principal | ritual-sono-yoga-leve |
| Sequencia de imagens | ["ritual-sono-yoga-leve-1","ritual-sono-yoga-leve-2","ritual-sono-yoga-leve-3","ritual-sono-yoga-leve-4","ritual-sono-yoga-leve-5"] |

### Yoga restaurativa para pausa no trabalho

| Campo | Valor |
| --- | --- |
| Slug | yoga-restaurativa-pausa-trabalho |
| Tipo | RESTORATIVE |
| Contexto | WORK |
| Objetivo | Recuperar atencao e reduzir estimulos durante o expediente. |
| Descricao curta | Pausa restaurativa discreta para cadeira e mesa. |
| Como fazer | ["Sente-se na cadeira.","Apoie os pes.","Respire com maos no abdomen.","Incline o tronco sobre a mesa se houver espaco.","Volte escolhendo uma acao simples."] |
| Dicas de postura | ["Use apoio da mesa.","Nao deixe pes suspensos.","Relaxe ombros."] |
| Respiracao | ["Inspire sentindo costelas.","Expire soltando peso."] |
| Erros comuns | ["Ficar em postura desconfortavel.","Forcar pescoço.","Tentar esconder respiracao."] |
| Progressao | ["Comece pelo tempo sugerido.","Aumente apenas quando a pratica parecer facil e confortavel.","Volte para nivel 1 ou 2 em dias de baixa energia, sono ruim ou estresse alto."] |
| Cuidados | ["Faca em ritmo confortavel.","Pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.","Reduza a amplitude sempre que o corpo pedir."] |
| Contraindicacoes | ["Evite se houver dor aguda ou desconforto incomum.","Evite forcar amplitude ou buscar performance.","Se tiver limitacao importante, adapte ou busque orientacao profissional."] |
| Recomendado quando | ["tela demais","reuniao dificil","pausa de expediente"] |
| Evitar quando | ["ambiente inseguro","dor ao inclinar"] |
| Imagem principal | yoga-restaurativa-pausa-trabalho |
| Sequencia de imagens | ["yoga-restaurativa-pausa-trabalho-1","yoga-restaurativa-pausa-trabalho-2","yoga-restaurativa-pausa-trabalho-3","yoga-restaurativa-pausa-trabalho-4","yoga-restaurativa-pausa-trabalho-5"] |

## Yoga - Sequencias
| Slug | Titulo | Nivel | Contexto | Duracao s | Objetivos | Praticas | Video |
| --- | --- | --- | --- | --- | --- | --- | --- |
| yoga-energia-baixa | Yoga leve para energia baixa | 1 | BOTH | 480 | ["ENERGY","MOBILITY"] | ["respiracao-sentada-tranquila","montanha-com-respiracao","alongamento-coluna-em-pe"] | PLANNED (/videos/yoga-energia-baixa.mp4) |
| yoga-leve-comecar-dia | Yoga leve para comecar o dia | 2 | HOME | 600 | ["ENERGY","FOCUS"] | ["respiracao-sentada-tranquila","postura-da-montanha","alongamento-lateral-em-pe"] | PLANNED (/videos/yoga-leve-comecar-dia.mp4) |
| yoga-restaurativa-desacelerar | Yoga restaurativa para desacelerar | 2 | HOME | 720 | ["STRESS","SLEEP"] | ["respiracao-para-desacelerar-yoga","postura-da-crianca","pernas-na-parede-adaptada"] | PLANNED (/videos/yoga-restaurativa-desacelerar.mp4) |
| yoga-depois-horas-sentado | Yoga leve para depois de muitas horas sentado | 3 | WORK | 720 | ["MOBILITY","WORK_BREAK"] | ["mobilidade-de-ombros-yoga","torcao-sentada-suave","sequencia-longas-horas-sentado"] | PLANNED (/videos/yoga-depois-horas-sentado.mp4) |
| yoga-foco-trabalho | Yoga para foco no trabalho | 3 | WORK | 600 | ["FOCUS","WORK_BREAK"] | ["postura-facil-atencao-corpo","torcao-em-cadeira","yoga-funcional-foco-trabalho"] | PLANNED (/videos/yoga-foco-trabalho.mp4) |
| yoga-fim-de-noite | Yoga para fim de noite | 4 | HOME | 900 | ["SLEEP","STRESS"] | ["sequencia-fim-de-dia","flexao-frente-restaurativa","escaneamento-corporal-postura-confortavel"] | PLANNED (/videos/yoga-fim-de-noite.mp4) |
## Missoes - Mission
| Titulo | Slug alvo de video | Categoria | Duracao min | Unlock | Premium | Complexidade | Tipo | Intensidade | Video |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Alongamento leve | alongamento-leve | Energia | 5 | 1 | nao | Simples | Mobilidade | Leve | READY (/videos/missao-alongamento-leve.mp4) |
| Caminhada consciente | caminhada-consciente | Energia | 10 | 1 | sim | Simples | Autocuidado | Leve | READY (/videos/missao-caminhada-consciente.mp4) |
| Caminhada consciente indoor | caminhada-consciente-indoor | Energia | 8 | 3 | nao | Intermediária | Movimento | Leve | PLANNED (/videos/missao-caminhada-consciente-indoor.mp4) |
| Yoga de bolso: coluna leve | yoga-de-bolso-coluna-leve | Energia | 6 | 3 | nao | Intermediária | Yoga | Leve | READY (/videos/missao-yoga-de-bolso-coluna-leve.mp4) |
| Treino casa-calma | treino-casa-calma | Energia | 8 | 4 | nao | Intermediária | Treino em casa | Moderada | PLANNED (/videos/missao-treino-casa-calma.mp4) |
| Mobilidade corpo inteiro | mobilidade-corpo-inteiro | Energia | 10 | 8 | nao | Avançada | Mobilidade | Moderada | PLANNED (/videos/missao-mobilidade-corpo-inteiro.mp4) |
| Respiração 4-4-6 | respiracao-4-4-6 | Estresse | 3 | 1 | nao | Simples | Respiração | Leve | READY (/videos/missao-respiracao-4-4-6.mp4) |
| Modo reunião difícil | modo-reuniao-dificil | Estresse | 6 | 5 | nao | Intermediária | Trabalho | Leve | PLANNED (/videos/missao-modo-reuniao-dificil.mp4) |
| Pausa de foco | pausa-de-foco | Foco | 5 | 1 | nao | Simples | Autocuidado | Leve | PLANNED (/videos/missao-pausa-de-foco.mp4) |
| Pausa sem tela | pausa-sem-tela | Foco | 5 | 1 | nao | Simples | Ambiente | Leve | READY (/videos/missao-pausa-sem-tela.mp4) |
| Reset de foco | reset-de-foco | Foco | 7 | 3 | sim | Intermediária | Foco | Leve | PLANNED (/videos/missao-reset-de-foco.mp4) |
| Trilha voltar ao foco | trilha-voltar-ao-foco | Foco | 10 | 7 | nao | Avançada | Trilha | Leve | PLANNED (/videos/missao-trilha-voltar-ao-foco.mp4) |
| Diário de descarrego mental | diario-de-descarrego-mental | Humor | 5 | 1 | nao | Simples | Escrita | Leve | READY (/videos/missao-diario-de-descarrego-mental.mp4) |
| Gratidão rápida | gratidao-rapida | Humor | 3 | 2 | nao | Simples | Escrita | Leve | READY (/videos/missao-gratidao-rapida.mp4) |
| Mapa pessoal do agora | mapa-pessoal-do-agora | Humor | 12 | 10 | nao | Avançada | Reflexão | Leve | READY (/videos/missao-mapa-pessoal-do-agora.mp4) |
| Planejamento gentil do dia | planejamento-gentil-do-dia | Rotina | 7 | 1 | sim | Simples | Autocuidado | Leve | READY (/videos/missao-planejamento-gentil-do-dia.mp4) |
| Organização de 5 minutos | organizacao-de-5-minutos | Rotina | 5 | 2 | nao | Simples | Rotina | Leve | READY (/videos/missao-organizacao-de-5-minutos.mp4) |
| Pausa de ambiente | pausa-de-ambiente | Rotina | 7 | 5 | nao | Intermediária | Ambiente | Leve | READY (/videos/missao-pausa-de-ambiente.mp4) |
| Ritual de sono sem tela | ritual-de-sono-sem-tela | Sono | 10 | 1 | nao | Simples | Sono | Leve | PLANNED (/videos/missao-ritual-de-sono-sem-tela.mp4) |
| Fechamento do dia | fechamento-do-dia | Sono | 8 | 4 | sim | Intermediária | Sono | Leve | PLANNED (/videos/missao-fechamento-do-dia.mp4) |
| Yoga de bolso: desacelerar | yoga-de-bolso-desacelerar | Sono | 8 | 6 | nao | Avançada | Yoga | Leve | PLANNED (/videos/missao-yoga-de-bolso-desacelerar.mp4) |
| Desafio gentil de sono | desafio-gentil-de-sono | Sono | 12 | 9 | nao | Avançada | Trilha | Leve | PLANNED (/videos/missao-desafio-gentil-de-sono.mp4) |
## Detalhes das Missoes

### Alongamento leve

| Campo | Valor |
| --- | --- |
| ID | cmpftafnb0003o38g9kfknq8u |
| Slug alvo de video | alongamento-leve |
| Categoria | Energia |
| Duracao min | 5 |
| Unlock level | 1 |
| Premium | nao |
| Complexidade | Simples |
| Tipo de atividade | Mobilidade |
| Intensidade | Leve |
| Descricao | Solte tensão do corpo com movimentos simples. |
| Passos | ["Gire ombros","Alongue pescoço","Estique braços","Respire com calma"] |
| Nota de seguranca | Faça no seu ritmo. Pare se sentir dor, tontura ou desconforto e adapte os movimentos ao seu corpo. |

### Caminhada consciente

| Campo | Valor |
| --- | --- |
| ID | cmpftafnz0005o38gxfe8tyba |
| Slug alvo de video | caminhada-consciente |
| Categoria | Energia |
| Duracao min | 10 |
| Unlock level | 1 |
| Premium | sim |
| Complexidade | Simples |
| Tipo de atividade | Autocuidado |
| Intensidade | Leve |
| Descricao | Caminhe observando corpo, respiração e ambiente. |
| Passos | ["Caminhe sem pressa","Observe três sons","Sinta os pés no chão","Retorne devagar"] |
| Nota de seguranca |  |

### Caminhada consciente indoor

| Campo | Valor |
| --- | --- |
| ID | cmpl972730007o3p8bo2t6di0 |
| Slug alvo de video | caminhada-consciente-indoor |
| Categoria | Energia |
| Duracao min | 8 |
| Unlock level | 3 |
| Premium | nao |
| Complexidade | Intermediária |
| Tipo de atividade | Movimento |
| Intensidade | Leve |
| Descricao | Caminhe devagar em casa ou no corredor, observando corpo e respiração. |
| Passos | ["Caminhe sem pressa","Observe três sons","Sinta os pés no chão","Retorne devagar"] |
| Nota de seguranca | Faça no seu ritmo. Pare se sentir dor, tontura ou desconforto e adapte os movimentos ao seu corpo. |

### Yoga de bolso: coluna leve

| Campo | Valor |
| --- | --- |
| ID | cmpl9727f0008o3p8vjvixxjz |
| Slug alvo de video | yoga-de-bolso-coluna-leve |
| Categoria | Energia |
| Duracao min | 6 |
| Unlock level | 3 |
| Premium | nao |
| Complexidade | Intermediária |
| Tipo de atividade | Yoga |
| Intensidade | Leve |
| Descricao | Sequência curta de mobilidade inspirada em yoga para soltar coluna e ombros. |
| Passos | ["Sente-se ou fique em pé com conforto","Faça círculos lentos com ombros","Incline o tronco suavemente para os lados","Finalize com 3 respirações longas"] |
| Nota de seguranca | Faça no seu ritmo. Pare se sentir dor, tontura ou desconforto e adapte os movimentos ao seu corpo. |

### Treino casa-calma

| Campo | Valor |
| --- | --- |
| ID | cmpl9728m000bo3p8asr7as1w |
| Slug alvo de video | treino-casa-calma |
| Categoria | Energia |
| Duracao min | 8 |
| Unlock level | 4 |
| Premium | nao |
| Complexidade | Intermediária |
| Tipo de atividade | Treino em casa |
| Intensidade | Moderada |
| Descricao | Movimento de baixo impacto para acordar o corpo sem pressão de performance. |
| Passos | ["Marcha leve no lugar por 1 minuto","Agachamento curto com apoio por 2 minutos","Alongue panturrilhas na parede","Respire e beba água"] |
| Nota de seguranca | Faça no seu ritmo. Pare se sentir dor, tontura ou desconforto e adapte os movimentos ao seu corpo. |

### Mobilidade corpo inteiro

| Campo | Valor |
| --- | --- |
| ID | cmpl972ap000go3p8k61kqp3t |
| Slug alvo de video | mobilidade-corpo-inteiro |
| Categoria | Energia |
| Duracao min | 10 |
| Unlock level | 8 |
| Premium | nao |
| Complexidade | Avançada |
| Tipo de atividade | Mobilidade |
| Intensidade | Moderada |
| Descricao | Sequência leve para soltar pescoço, ombros, quadril e pernas. |
| Passos | ["Gire pescoço sem forçar","Faça círculos com ombros","Mobilize quadril com apoio","Alongue pernas com respiração lenta"] |
| Nota de seguranca | Faça no seu ritmo. Pare se sentir dor, tontura ou desconforto e adapte os movimentos ao seu corpo. |

### Respiração 4-4-6

| Campo | Valor |
| --- | --- |
| ID | cmpftaflq0000o38gc5ne2dtr |
| Slug alvo de video | respiracao-4-4-6 |
| Categoria | Estresse |
| Duracao min | 3 |
| Unlock level | 1 |
| Premium | nao |
| Complexidade | Simples |
| Tipo de atividade | Respiração |
| Intensidade | Leve |
| Descricao | Uma pausa respiratória curta para desacelerar. |
| Passos | ["Inspire por 4 segundos","Segure por 4 segundos","Solte o ar por 6 segundos","Repita por 3 minutos"] |
| Nota de seguranca |  |

### Modo reunião difícil

| Campo | Valor |
| --- | --- |
| ID | cmpl97290000co3p8od7h4xpl |
| Slug alvo de video | modo-reuniao-dificil |
| Categoria | Estresse |
| Duracao min | 6 |
| Unlock level | 5 |
| Premium | nao |
| Complexidade | Intermediária |
| Tipo de atividade | Trabalho |
| Intensidade | Leve |
| Descricao | Uma pausa antes ou depois de uma conversa exigente. |
| Passos | ["Solte os ombros","Nomeie o que você precisa levar para a reunião","Respire 4 vezes com calma","Depois, escreva uma coisa que ficou resolvida"] |
| Nota de seguranca |  |

### Pausa de foco

| Campo | Valor |
| --- | --- |
| ID | cmpftafpz000bo38ga3vj6agy |
| Slug alvo de video | pausa-de-foco |
| Categoria | Foco |
| Duracao min | 5 |
| Unlock level | 1 |
| Premium | nao |
| Complexidade | Simples |
| Tipo de atividade | Autocuidado |
| Intensidade | Leve |
| Descricao | Uma micro pausa para recuperar clareza. |
| Passos | ["Afaste notificações","Respire","Releia a próxima tarefa"] |
| Nota de seguranca |  |

### Pausa sem tela

| Campo | Valor |
| --- | --- |
| ID | cmpftafnn0004o38gcrxpi33b |
| Slug alvo de video | pausa-sem-tela |
| Categoria | Foco |
| Duracao min | 5 |
| Unlock level | 1 |
| Premium | nao |
| Complexidade | Simples |
| Tipo de atividade | Ambiente |
| Intensidade | Leve |
| Descricao | Descanse a atenção sem notificações. |
| Passos | ["Afaste o celular","Olhe para longe","Respire devagar","Volte com uma próxima ação"] |
| Nota de seguranca |  |

### Reset de foco

| Campo | Valor |
| --- | --- |
| ID | cmpftafp10008o38g3vchw13p |
| Slug alvo de video | reset-de-foco |
| Categoria | Foco |
| Duracao min | 7 |
| Unlock level | 3 |
| Premium | sim |
| Complexidade | Intermediária |
| Tipo de atividade | Foco |
| Intensidade | Leve |
| Descricao | Recomece com uma intenção clara. |
| Passos | ["Feche abas extras","Respire por 1 minuto","Escolha uma prioridade","Trabalhe por 5 minutos"] |
| Nota de seguranca |  |

### Trilha voltar ao foco

| Campo | Valor |
| --- | --- |
| ID | cmpl972a9000fo3p8sxls5en7 |
| Slug alvo de video | trilha-voltar-ao-foco |
| Categoria | Foco |
| Duracao min | 10 |
| Unlock level | 7 |
| Premium | nao |
| Complexidade | Avançada |
| Tipo de atividade | Trilha |
| Intensidade | Leve |
| Descricao | Combine respiração, ambiente e uma ação mínima para retomar clareza. |
| Passos | ["Afaste notificações","Respire por 2 minutos","Organize o campo de visão","Faça uma tarefa pequena por 5 minutos"] |
| Nota de seguranca |  |

### Diário de descarrego mental

| Campo | Valor |
| --- | --- |
| ID | cmpftafmo0001o38g7c7p86tz |
| Slug alvo de video | diario-de-descarrego-mental |
| Categoria | Humor |
| Duracao min | 5 |
| Unlock level | 1 |
| Premium | nao |
| Complexidade | Simples |
| Tipo de atividade | Escrita |
| Intensidade | Leve |
| Descricao | Escreva sem filtro para aliviar a carga mental. |
| Passos | ["Escreva tudo que está ocupando sua mente","Não organize, apenas despeje","Escolha uma coisa que pode esperar","Feche com uma frase de cuidado"] |
| Nota de seguranca |  |

### Gratidão rápida

| Campo | Valor |
| --- | --- |
| ID | cmpftafoo0007o38g6vpqi40o |
| Slug alvo de video | gratidao-rapida |
| Categoria | Humor |
| Duracao min | 3 |
| Unlock level | 2 |
| Premium | nao |
| Complexidade | Simples |
| Tipo de atividade | Escrita |
| Intensidade | Leve |
| Descricao | Registre algo simples que ajudou hoje. |
| Passos | ["Pense em um ponto positivo","Escreva uma frase","Agradeça mentalmente","Siga com gentileza"] |
| Nota de seguranca |  |

### Mapa pessoal do agora

| Campo | Valor |
| --- | --- |
| ID | cmpl972bh000io3p82dfi1kbr |
| Slug alvo de video | mapa-pessoal-do-agora |
| Categoria | Humor |
| Duracao min | 12 |
| Unlock level | 10 |
| Premium | nao |
| Complexidade | Avançada |
| Tipo de atividade | Reflexão |
| Intensidade | Leve |
| Descricao | Observe padrões do dia sem julgamento e escolha um cuidado possível. |
| Passos | ["Liste energia, humor e tensão","Note um padrão do dia","Escolha uma coisa que pode esperar","Escolha uma pequena ação de cuidado"] |
| Nota de seguranca |  |

### Planejamento gentil do dia

| Campo | Valor |
| --- | --- |
| ID | cmpftafpp000ao38gx3nykznx |
| Slug alvo de video | planejamento-gentil-do-dia |
| Categoria | Rotina |
| Duracao min | 7 |
| Unlock level | 1 |
| Premium | sim |
| Complexidade | Simples |
| Tipo de atividade | Autocuidado |
| Intensidade | Leve |
| Descricao | Organize o dia com menos pressão. |
| Passos | ["Escolha três prioridades","Marque uma pausa","Defina um limite realista"] |
| Nota de seguranca |  |

### Organização de 5 minutos

| Campo | Valor |
| --- | --- |
| ID | cmpftafob0006o38g2lb4q9b6 |
| Slug alvo de video | organizacao-de-5-minutos |
| Categoria | Rotina |
| Duracao min | 5 |
| Unlock level | 2 |
| Premium | nao |
| Complexidade | Simples |
| Tipo de atividade | Rotina |
| Intensidade | Leve |
| Descricao | Escolha uma pequena área para organizar sem tentar arrumar tudo. |
| Passos | ["Defina um espaço pequeno","Remova o que não pertence","Separe uma próxima tarefa","Pare ao fim de 5 minutos"] |
| Nota de seguranca |  |

### Pausa de ambiente

| Campo | Valor |
| --- | --- |
| ID | cmpl9729d000do3p8wmgroh2a |
| Slug alvo de video | pausa-de-ambiente |
| Categoria | Rotina |
| Duracao min | 7 |
| Unlock level | 5 |
| Premium | nao |
| Complexidade | Intermediária |
| Tipo de atividade | Ambiente |
| Intensidade | Leve |
| Descricao | Use luz, água e organização visual para reduzir estímulos ao redor. |
| Passos | ["Beba água","Ajuste a luz ou a tela","Retire um item visual que distraia","Escolha a próxima ação pequena"] |
| Nota de seguranca |  |

### Ritual de sono sem tela

| Campo | Valor |
| --- | --- |
| ID | cmpftafmz0002o38ge35xbyuy |
| Slug alvo de video | ritual-de-sono-sem-tela |
| Categoria | Sono |
| Duracao min | 10 |
| Unlock level | 1 |
| Premium | nao |
| Complexidade | Simples |
| Tipo de atividade | Sono |
| Intensidade | Leve |
| Descricao | Prepare o corpo para encerrar o dia com menos estímulo. |
| Passos | ["Afaste telas","Reduza luzes","Anote uma pendência para amanhã","Faça respiração lenta"] |
| Nota de seguranca |  |

### Fechamento do dia

| Campo | Valor |
| --- | --- |
| ID | cmpftafpd0009o38gl5qbvz3n |
| Slug alvo de video | fechamento-do-dia |
| Categoria | Sono |
| Duracao min | 8 |
| Unlock level | 4 |
| Premium | sim |
| Complexidade | Intermediária |
| Tipo de atividade | Sono |
| Intensidade | Leve |
| Descricao | Finalize o dia sem tentar resolver tudo. |
| Passos | ["Liste pendências","Escolha o que fica para amanhã","Reduza luzes","Faça uma respiração lenta"] |
| Nota de seguranca |  |

### Yoga de bolso: desacelerar

| Campo | Valor |
| --- | --- |
| ID | cmpl9729t000eo3p83agf6w4s |
| Slug alvo de video | yoga-de-bolso-desacelerar |
| Categoria | Sono |
| Duracao min | 8 |
| Unlock level | 6 |
| Premium | nao |
| Complexidade | Avançada |
| Tipo de atividade | Yoga |
| Intensidade | Leve |
| Descricao | Uma sequência tranquila para sair do modo alerta. |
| Passos | ["Sente-se com apoio","Faça torções suaves para cada lado","Alongue braços acima da cabeça","Expire mais longo que inspira por 2 minutos"] |
| Nota de seguranca | Faça no seu ritmo. Pare se sentir dor, tontura ou desconforto e adapte os movimentos ao seu corpo. |

### Desafio gentil de sono

| Campo | Valor |
| --- | --- |
| ID | cmpl972b3000ho3p8v3akgz15 |
| Slug alvo de video | desafio-gentil-de-sono |
| Categoria | Sono |
| Duracao min | 12 |
| Unlock level | 9 |
| Premium | nao |
| Complexidade | Avançada |
| Tipo de atividade | Trilha |
| Intensidade | Leve |
| Descricao | Uma rotina combinada para preparar a noite com mais intenção. |
| Passos | ["Defina horário de encerramento de tela","Anote pendências","Reduza luzes","Faça respiração 4-4-6","Escolha uma frase de fechamento"] |
| Nota de seguranca |  |

## Rotinas de Treino - WorkoutRoutine
| ID | Titulo | Categoria | Modalidade | Nivel min | Intensidade | Rounds | Round s | Descanso s | XP | Descricao |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cmpoc8jyl000yo3uop07gh6fz | Destravar pescoco e ombros | Alongamentos | Alongamentos | 1 | Leve | 3 | 40 | 20 | 15 | Treino funcional simples para fazer em casa, sem equipamento e com ritmo seguro. |
| cmpoc8k4t0015o3uodmyk6arr | Mobilidade funcional em casa | Alongamentos | Alongamentos | 3 | Leve | 3 | 40 | 20 | 25 | Treino funcional simples para fazer em casa, sem equipamento e com ritmo seguro. |
| cmpoc8k2w0011o3uohj1n1qiz | Cardio sem impacto | Cardio leve | Cardio leve | 2 | Leve | 3 | 40 | 20 | 15 | Treino funcional simples para fazer em casa, sem equipamento e com ritmo seguro. |
| cmpoc8k6h0018o3uozglq5pye | Cardio funcional baixo impacto | Cardio leve | Cardio leve | 4 | Moderada | 6 | 45 | 30 | 25 | Treino funcional simples para fazer em casa, sem equipamento e com ritmo seguro. |
| cmplb1qje000jo3ukqklo4vpo | Energia leve | Plano 0 | Energia | 1 | Leve | 4 | 25 | 15 | 15 | Uma rotina curta para ativar o corpo sem entrar em modo treino. |
| cmplb1ql4000no3ukzsr5d410 | Energia e rotina | Plano 0 | Energia | 4 | Moderada | 5 | 35 | 25 | 25 | Movimento leve de baixo impacto para acordar o corpo sem pressão de performance. |
| cmplb1qka000lo3ukybe1vgwp | Reset de estresse | Plano 0 | Estresse | 2 | Leve | 4 | 40 | 20 | 15 | Uma pausa guiada para baixar urgência antes de continuar o dia. |
| cmplb1qjv000ko3uk2kd2mn8n | Foco antes da tarefa | Plano 0 | Foco | 1 | Leve | 3 | 45 | 10 | 15 | Uma sequência de respiração, postura e intenção para começar uma tarefa. |
| cmplb1qkp000mo3ukfkibbcux | Alongamento de foco | Plano 0 | Foco | 3 | Leve | 5 | 30 | 15 | 15 | Alongamento simples para pescoço e ombros depois de muito tempo parado. |
| cmpoc8k3d0012o3uovd49vt7k | Core iniciante | Funcional em casa | Funcional em casa | 2 | Leve | 3 | 40 | 20 | 15 | Treino funcional simples para fazer em casa, sem equipamento e com ritmo seguro. |
| cmpoc8k2e0010o3uogdg49tah | Funcional iniciante 8 minutos | Funcional em casa | Funcional em casa | 2 | Leve | 3 | 40 | 20 | 15 | Treino funcional simples para fazer em casa, sem equipamento e com ritmo seguro. |
| cmpoc8k3w0013o3uo7s4srqx1 | Ativacao total 12 minutos | Funcional em casa | Funcional em casa | 3 | Leve | 4 | 40 | 20 | 25 | Treino funcional simples para fazer em casa, sem equipamento e com ritmo seguro. |
| cmpoc8k5a0016o3uo7por19kh | Corpo inteiro 18 minutos | Funcional em casa | Funcional em casa | 4 | Moderada | 6 | 45 | 30 | 25 | Treino funcional simples para fazer em casa, sem equipamento e com ritmo seguro. |
| cmpoc8k5x0017o3uoekc5xipc | Energia e forca | Funcional em casa | Funcional em casa | 4 | Moderada | 6 | 45 | 30 | 25 | Treino funcional simples para fazer em casa, sem equipamento e com ritmo seguro. |
| cmpoc8k710019o3uoe334uu1v | Circuito funcional 25 minutos | Funcional em casa | Funcional em casa | 5 | Moderada | 6 | 45 | 30 | 30 | Treino funcional simples para fazer em casa, sem equipamento e com ritmo seguro. |
| cmplat91i000ro35csrpj40sl | Funcional em casa: base | Modalidades | Funcional em casa | 5 | Moderada | 6 | 35 | 25 | 25 | Rotina funcional sem equipamento, com movimentos controlados. |
| cmplat916000qo35ce4o6wobe | Jumping: baixo impacto | Modalidades | Jumping | 5 | Moderada | 6 | 30 | 30 | 25 | Sequência opcional com passos de baixo impacto para simular jumping sem excesso. |
| cmpoc8k4e0014o3uor1lr2sgv | Luta sombra leve funcional | Luta | Luta | 3 | Leve | 3 | 40 | 20 | 25 | Treino funcional simples para fazer em casa, sem equipamento e com ritmo seguro. |
| cmplat90v000po35c05ya7e7b | Luta: sombra leve | Modalidades | Luta | 5 | Moderada | 6 | 45 | 30 | 25 | Rounds de sombra sem contato para coordenação, energia e foco. |
| cmplat91z000so35cvdvggh61 | Mobilidade funcional | Modalidades | Mobilidade funcional | 5 | Leve | 5 | 45 | 15 | 15 | Mobilidade de corpo inteiro para preparar treinos ou recuperar energia. |
| cmpoc8k1v000zo3uo1758dikk | Energia minima | Pausas rapidas | Pausas rapidas | 1 | Leve | 3 | 40 | 20 | 15 | Treino funcional simples para fazer em casa, sem equipamento e com ritmo seguro. |
| cmpoc8jxz000xo3uo4eswatl9 | Reset corporal de 3 minutos | Pausas rapidas | Pausas rapidas | 1 | Leve | 3 | 40 | 20 | 15 | Treino funcional simples para fazer em casa, sem equipamento e com ritmo seguro. |
| cmplacacd000oo3twnxn4ccwy | Corda iniciante opcional | Modalidades | Pular corda | 5 | Moderada | 6 | 20 | 40 | 30 | Primeira rotina opcional de corda com ritmo leve e pausas longas. |
| cmpoc8k7i001ao3uoj2lqbcd3 | Pular corda iniciante progressivo | Pular corda | Pular corda | 5 | Moderada | 4 | 45 | 30 | 30 | Treino funcional simples para fazer em casa, sem equipamento e com ritmo seguro. |
| cmplacacv000po3twlqrj91wt | Corda base | Modalidades | Pular corda | 6 | Moderada | 8 | 30 | 30 | 30 | Rotina base para manter ritmo confortável, sem buscar intensidade alta. |
| cmplacadw000qo3tw3ay89cpb | Corda ritmo estável | Modalidades | Pular corda | 7 | Moderada | 10 | 40 | 25 | 30 | Rotina moderada para sustentar ritmo sem competir com o corpo. |
| cmplacaek000ro3tw5o4ugnr1 | Corda progressiva moderada | Modalidades | Pular corda | 8 | Moderada | 12 | 45 | 20 | 30 | Sequência progressiva moderada para usuários acostumados com corda. |
| cmpoc8k83001bo3uoxahs918t | Flow forca + mobilidade | Yoga | Yoga | 5 | Moderada | 6 | 45 | 30 | 30 | Treino funcional simples para fazer em casa, sem equipamento e com ritmo seguro. |
| cmplat90k000oo35ctxyotubh | Yoga: base leve | Modalidades | Yoga | 5 | Leve | 5 | 45 | 15 | 15 | Sequência curta de yoga leve para coluna, ombros e respiração. |
## Detalhes das Rotinas de Treino

### Destravar pescoco e ombros

| Campo | Valor |
| --- | --- |
| ID | cmpoc8jyl000yo3uop07gh6fz |
| Categoria/modalidade | Alongamentos / Alongamentos |
| Nivel minimo | 1 |
| Intensidade | Leve |
| Ritmo min/max | / |
| Rounds | 3 |
| Round segundos | 40 |
| Descanso segundos | 20 |
| Aquecimento | Respire em ritmo confortavel; Mobilize ombros e quadril; Comece abaixo do seu limite |
| Desaceleracao | Caminhe devagar; Alongue sem forcar; Hidrate-se e observe o corpo |
| Cuidados | Consulte um profissional de saude antes de iniciar exercicios se tiver limitacoes, dores, lesoes ou condicoes pre-existentes. Pare imediatamente se sentir dor, tontura, falta de ar intensa ou desconforto incomum. |
| Alternativa | Alternativa: reduza amplitude, faca sentado ou troque por mobilidade leve. |
| XP | 15 |

### Mobilidade funcional em casa

| Campo | Valor |
| --- | --- |
| ID | cmpoc8k4t0015o3uodmyk6arr |
| Categoria/modalidade | Alongamentos / Alongamentos |
| Nivel minimo | 3 |
| Intensidade | Leve |
| Ritmo min/max | / |
| Rounds | 3 |
| Round segundos | 40 |
| Descanso segundos | 20 |
| Aquecimento | Respire em ritmo confortavel; Mobilize ombros e quadril; Comece abaixo do seu limite |
| Desaceleracao | Caminhe devagar; Alongue sem forcar; Hidrate-se e observe o corpo |
| Cuidados | Consulte um profissional de saude antes de iniciar exercicios se tiver limitacoes, dores, lesoes ou condicoes pre-existentes. Pare imediatamente se sentir dor, tontura, falta de ar intensa ou desconforto incomum. |
| Alternativa | Alternativa: reduza amplitude, faca sentado ou troque por mobilidade leve. |
| XP | 25 |

### Cardio sem impacto

| Campo | Valor |
| --- | --- |
| ID | cmpoc8k2w0011o3uohj1n1qiz |
| Categoria/modalidade | Cardio leve / Cardio leve |
| Nivel minimo | 2 |
| Intensidade | Leve |
| Ritmo min/max | / |
| Rounds | 3 |
| Round segundos | 40 |
| Descanso segundos | 20 |
| Aquecimento | Respire em ritmo confortavel; Mobilize ombros e quadril; Comece abaixo do seu limite |
| Desaceleracao | Caminhe devagar; Alongue sem forcar; Hidrate-se e observe o corpo |
| Cuidados | Consulte um profissional de saude antes de iniciar exercicios se tiver limitacoes, dores, lesoes ou condicoes pre-existentes. Pare imediatamente se sentir dor, tontura, falta de ar intensa ou desconforto incomum. |
| Alternativa | Alternativa: reduza amplitude, faca sentado ou troque por mobilidade leve. |
| XP | 15 |

### Cardio funcional baixo impacto

| Campo | Valor |
| --- | --- |
| ID | cmpoc8k6h0018o3uozglq5pye |
| Categoria/modalidade | Cardio leve / Cardio leve |
| Nivel minimo | 4 |
| Intensidade | Moderada |
| Ritmo min/max | / |
| Rounds | 6 |
| Round segundos | 45 |
| Descanso segundos | 30 |
| Aquecimento | Respire em ritmo confortavel; Mobilize ombros e quadril; Comece abaixo do seu limite |
| Desaceleracao | Caminhe devagar; Alongue sem forcar; Hidrate-se e observe o corpo |
| Cuidados | Consulte um profissional de saude antes de iniciar exercicios se tiver limitacoes, dores, lesoes ou condicoes pre-existentes. Pare imediatamente se sentir dor, tontura, falta de ar intensa ou desconforto incomum. |
| Alternativa | Alternativa: reduza amplitude, faca sentado ou troque por mobilidade leve. |
| XP | 25 |

### Energia leve

| Campo | Valor |
| --- | --- |
| ID | cmplb1qje000jo3ukqklo4vpo |
| Categoria/modalidade | Plano 0 / Energia |
| Nivel minimo | 1 |
| Intensidade | Leve |
| Ritmo min/max | / |
| Rounds | 4 |
| Round segundos | 25 |
| Descanso segundos | 15 |
| Aquecimento | Respire fundo por 30 segundos; Gire ombros lentamente; Mexa mãos e tornozelos |
| Desaceleracao | Caminhe devagar; Solte braços; Beba água |
| Cuidados | Faça no seu ritmo. Pare se sentir dor, tontura ou desconforto e adapte os movimentos ao seu corpo. |
| Alternativa | Faça todos os movimentos sentado se preferir. |
| XP | 15 |

### Energia e rotina

| Campo | Valor |
| --- | --- |
| ID | cmplb1ql4000no3ukzsr5d410 |
| Categoria/modalidade | Plano 0 / Energia |
| Nivel minimo | 4 |
| Intensidade | Moderada |
| Ritmo min/max | / |
| Rounds | 5 |
| Round segundos | 35 |
| Descanso segundos | 25 |
| Aquecimento | Marcha leve; Mobilize quadril com apoio; Respire antes de começar |
| Desaceleracao | Alongue panturrilhas; Solte ombros; Beba água |
| Cuidados | Faça no seu ritmo. Pare se sentir dor, tontura ou desconforto e adapte os movimentos ao seu corpo. |
| Alternativa | Troque agachamentos por sentar e levantar de uma cadeira com apoio. |
| XP | 25 |

### Reset de estresse

| Campo | Valor |
| --- | --- |
| ID | cmplb1qka000lo3ukybe1vgwp |
| Categoria/modalidade | Plano 0 / Estresse |
| Nivel minimo | 2 |
| Intensidade | Leve |
| Ritmo min/max | / |
| Rounds | 4 |
| Round segundos | 40 |
| Descanso segundos | 20 |
| Aquecimento | Apoie os pés no chão; Solte ombros; Respire por 3 ciclos |
| Desaceleracao | Anote uma coisa que pode esperar; Beba água; Retome devagar |
| Cuidados | Faça no seu ritmo. Pare se sentir dor, tontura ou desconforto e adapte os movimentos ao seu corpo. |
| Alternativa | Mantenha tudo sentado e reduza qualquer movimento que incomode. |
| XP | 15 |

### Foco antes da tarefa

| Campo | Valor |
| --- | --- |
| ID | cmplb1qjv000ko3uk2kd2mn8n |
| Categoria/modalidade | Plano 0 / Foco |
| Nivel minimo | 1 |
| Intensidade | Leve |
| Ritmo min/max | / |
| Rounds | 3 |
| Round segundos | 45 |
| Descanso segundos | 10 |
| Aquecimento | Afaste notificações; Respire sem pressa; Escolha uma tarefa pequena |
| Desaceleracao | Nomeie a próxima ação; Organize o campo de visão; Comece por 2 minutos |
| Cuidados | Faça no seu ritmo. Pare se sentir dor, tontura ou desconforto e adapte os movimentos ao seu corpo. |
| Alternativa | Se estiver cansado, faça apenas a respiração e a escolha da próxima ação. |
| XP | 15 |

### Alongamento de foco

| Campo | Valor |
| --- | --- |
| ID | cmplb1qkp000mo3ukfkibbcux |
| Categoria/modalidade | Plano 0 / Foco |
| Nivel minimo | 3 |
| Intensidade | Leve |
| Ritmo min/max | / |
| Rounds | 5 |
| Round segundos | 30 |
| Descanso segundos | 15 |
| Aquecimento | Sente-se com apoio; Relaxe mandíbula; Respire sem pressa |
| Desaceleracao | Observe o corpo; Retome devagar; Escolha uma próxima ação pequena |
| Cuidados | Faça no seu ritmo. Pare se sentir dor, tontura ou desconforto e adapte os movimentos ao seu corpo. |
| Alternativa | Reduza amplitude e mantenha movimentos confortáveis. |
| XP | 15 |

### Core iniciante

| Campo | Valor |
| --- | --- |
| ID | cmpoc8k3d0012o3uovd49vt7k |
| Categoria/modalidade | Funcional em casa / Funcional em casa |
| Nivel minimo | 2 |
| Intensidade | Leve |
| Ritmo min/max | / |
| Rounds | 3 |
| Round segundos | 40 |
| Descanso segundos | 20 |
| Aquecimento | Respire em ritmo confortavel; Mobilize ombros e quadril; Comece abaixo do seu limite |
| Desaceleracao | Caminhe devagar; Alongue sem forcar; Hidrate-se e observe o corpo |
| Cuidados | Consulte um profissional de saude antes de iniciar exercicios se tiver limitacoes, dores, lesoes ou condicoes pre-existentes. Pare imediatamente se sentir dor, tontura, falta de ar intensa ou desconforto incomum. |
| Alternativa | Alternativa: reduza amplitude, faca sentado ou troque por mobilidade leve. |
| XP | 15 |

### Funcional iniciante 8 minutos

| Campo | Valor |
| --- | --- |
| ID | cmpoc8k2e0010o3uogdg49tah |
| Categoria/modalidade | Funcional em casa / Funcional em casa |
| Nivel minimo | 2 |
| Intensidade | Leve |
| Ritmo min/max | / |
| Rounds | 3 |
| Round segundos | 40 |
| Descanso segundos | 20 |
| Aquecimento | Respire em ritmo confortavel; Mobilize ombros e quadril; Comece abaixo do seu limite |
| Desaceleracao | Caminhe devagar; Alongue sem forcar; Hidrate-se e observe o corpo |
| Cuidados | Consulte um profissional de saude antes de iniciar exercicios se tiver limitacoes, dores, lesoes ou condicoes pre-existentes. Pare imediatamente se sentir dor, tontura, falta de ar intensa ou desconforto incomum. |
| Alternativa | Alternativa: reduza amplitude, faca sentado ou troque por mobilidade leve. |
| XP | 15 |

### Ativacao total 12 minutos

| Campo | Valor |
| --- | --- |
| ID | cmpoc8k3w0013o3uo7s4srqx1 |
| Categoria/modalidade | Funcional em casa / Funcional em casa |
| Nivel minimo | 3 |
| Intensidade | Leve |
| Ritmo min/max | / |
| Rounds | 4 |
| Round segundos | 40 |
| Descanso segundos | 20 |
| Aquecimento | Respire em ritmo confortavel; Mobilize ombros e quadril; Comece abaixo do seu limite |
| Desaceleracao | Caminhe devagar; Alongue sem forcar; Hidrate-se e observe o corpo |
| Cuidados | Consulte um profissional de saude antes de iniciar exercicios se tiver limitacoes, dores, lesoes ou condicoes pre-existentes. Pare imediatamente se sentir dor, tontura, falta de ar intensa ou desconforto incomum. |
| Alternativa | Alternativa: reduza amplitude, faca sentado ou troque por mobilidade leve. |
| XP | 25 |

### Corpo inteiro 18 minutos

| Campo | Valor |
| --- | --- |
| ID | cmpoc8k5a0016o3uo7por19kh |
| Categoria/modalidade | Funcional em casa / Funcional em casa |
| Nivel minimo | 4 |
| Intensidade | Moderada |
| Ritmo min/max | / |
| Rounds | 6 |
| Round segundos | 45 |
| Descanso segundos | 30 |
| Aquecimento | Respire em ritmo confortavel; Mobilize ombros e quadril; Comece abaixo do seu limite |
| Desaceleracao | Caminhe devagar; Alongue sem forcar; Hidrate-se e observe o corpo |
| Cuidados | Consulte um profissional de saude antes de iniciar exercicios se tiver limitacoes, dores, lesoes ou condicoes pre-existentes. Pare imediatamente se sentir dor, tontura, falta de ar intensa ou desconforto incomum. |
| Alternativa | Alternativa: reduza amplitude, faca sentado ou troque por mobilidade leve. |
| XP | 25 |

### Energia e forca

| Campo | Valor |
| --- | --- |
| ID | cmpoc8k5x0017o3uoekc5xipc |
| Categoria/modalidade | Funcional em casa / Funcional em casa |
| Nivel minimo | 4 |
| Intensidade | Moderada |
| Ritmo min/max | / |
| Rounds | 6 |
| Round segundos | 45 |
| Descanso segundos | 30 |
| Aquecimento | Respire em ritmo confortavel; Mobilize ombros e quadril; Comece abaixo do seu limite |
| Desaceleracao | Caminhe devagar; Alongue sem forcar; Hidrate-se e observe o corpo |
| Cuidados | Consulte um profissional de saude antes de iniciar exercicios se tiver limitacoes, dores, lesoes ou condicoes pre-existentes. Pare imediatamente se sentir dor, tontura, falta de ar intensa ou desconforto incomum. |
| Alternativa | Alternativa: reduza amplitude, faca sentado ou troque por mobilidade leve. |
| XP | 25 |

### Circuito funcional 25 minutos

| Campo | Valor |
| --- | --- |
| ID | cmpoc8k710019o3uoe334uu1v |
| Categoria/modalidade | Funcional em casa / Funcional em casa |
| Nivel minimo | 5 |
| Intensidade | Moderada |
| Ritmo min/max | / |
| Rounds | 6 |
| Round segundos | 45 |
| Descanso segundos | 30 |
| Aquecimento | Respire em ritmo confortavel; Mobilize ombros e quadril; Comece abaixo do seu limite |
| Desaceleracao | Caminhe devagar; Alongue sem forcar; Hidrate-se e observe o corpo |
| Cuidados | Consulte um profissional de saude antes de iniciar exercicios se tiver limitacoes, dores, lesoes ou condicoes pre-existentes. Pare imediatamente se sentir dor, tontura, falta de ar intensa ou desconforto incomum. |
| Alternativa | Alternativa: reduza amplitude, faca sentado ou troque por mobilidade leve. |
| XP | 30 |

### Funcional em casa: base

| Campo | Valor |
| --- | --- |
| ID | cmplat91i000ro35csrpj40sl |
| Categoria/modalidade | Modalidades / Funcional em casa |
| Nivel minimo | 5 |
| Intensidade | Moderada |
| Ritmo min/max | / |
| Rounds | 6 |
| Round segundos | 35 |
| Descanso segundos | 25 |
| Aquecimento | Marcha leve; Mobilize quadril; Faça agachamento curto com apoio |
| Desaceleracao | Alongue pernas; Solte ombros; Respire devagar |
| Cuidados | Faça no seu ritmo. Pare se sentir dor, tontura ou desconforto e adapte os movimentos ao seu corpo. |
| Alternativa | Use cadeira como apoio e reduza amplitude. |
| XP | 25 |

### Jumping: baixo impacto

| Campo | Valor |
| --- | --- |
| ID | cmplat916000qo35ce4o6wobe |
| Categoria/modalidade | Modalidades / Jumping |
| Nivel minimo | 5 |
| Intensidade | Moderada |
| Ritmo min/max | / |
| Rounds | 6 |
| Round segundos | 30 |
| Descanso segundos | 30 |
| Aquecimento | Aqueça tornozelos; Faça marcha no lugar; Teste step touch sem salto |
| Desaceleracao | Caminhe devagar; Alongue panturrilhas; Beba água |
| Cuidados | Evite se houver dor, tontura, lesão recente ou desconforto em joelhos, tornozelos ou coluna. |
| Alternativa | Alternativa sem impacto: step touch, marcha no lugar ou mobilidade leve. |
| XP | 25 |

### Luta sombra leve funcional

| Campo | Valor |
| --- | --- |
| ID | cmpoc8k4e0014o3uor1lr2sgv |
| Categoria/modalidade | Luta / Luta |
| Nivel minimo | 3 |
| Intensidade | Leve |
| Ritmo min/max | / |
| Rounds | 3 |
| Round segundos | 40 |
| Descanso segundos | 20 |
| Aquecimento | Respire em ritmo confortavel; Mobilize ombros e quadril; Comece abaixo do seu limite |
| Desaceleracao | Caminhe devagar; Alongue sem forcar; Hidrate-se e observe o corpo |
| Cuidados | Consulte um profissional de saude antes de iniciar exercicios se tiver limitacoes, dores, lesoes ou condicoes pre-existentes. Pare imediatamente se sentir dor, tontura, falta de ar intensa ou desconforto incomum. |
| Alternativa | Alternativa: reduza amplitude, faca sentado ou troque por mobilidade leve. |
| XP | 25 |

### Luta: sombra leve

| Campo | Valor |
| --- | --- |
| ID | cmplat90v000po35c05ya7e7b |
| Categoria/modalidade | Modalidades / Luta |
| Nivel minimo | 5 |
| Intensidade | Moderada |
| Ritmo min/max | / |
| Rounds | 6 |
| Round segundos | 45 |
| Descanso segundos | 30 |
| Aquecimento | Mobilize ombros; Faça base leve sem saltar; Respire antes do primeiro round |
| Desaceleracao | Solte braços; Alongue ombros; Respire até reduzir o ritmo |
| Cuidados | Sem contato e sem golpes explosivos. Pare se sentir dor, tontura ou desconforto. |
| Alternativa | Faça movimentos lentos de braço sentado ou troque por mobilidade de ombros. |
| XP | 25 |

### Mobilidade funcional

| Campo | Valor |
| --- | --- |
| ID | cmplat91z000so35cvdvggh61 |
| Categoria/modalidade | Modalidades / Mobilidade funcional |
| Nivel minimo | 5 |
| Intensidade | Leve |
| Ritmo min/max | / |
| Rounds | 5 |
| Round segundos | 45 |
| Descanso segundos | 15 |
| Aquecimento | Respire em pé; Mobilize pescoço sem forçar; Solte quadril com apoio |
| Desaceleracao | Alongue panturrilhas; Solte mãos; Observe o corpo |
| Cuidados | Faça no seu ritmo. Pare se sentir dor, tontura ou desconforto e adapte os movimentos ao seu corpo. |
| Alternativa | Faça tudo sentado se estiver com baixa energia. |
| XP | 15 |

### Energia minima

| Campo | Valor |
| --- | --- |
| ID | cmpoc8k1v000zo3uo1758dikk |
| Categoria/modalidade | Pausas rapidas / Pausas rapidas |
| Nivel minimo | 1 |
| Intensidade | Leve |
| Ritmo min/max | / |
| Rounds | 3 |
| Round segundos | 40 |
| Descanso segundos | 20 |
| Aquecimento | Respire em ritmo confortavel; Mobilize ombros e quadril; Comece abaixo do seu limite |
| Desaceleracao | Caminhe devagar; Alongue sem forcar; Hidrate-se e observe o corpo |
| Cuidados | Consulte um profissional de saude antes de iniciar exercicios se tiver limitacoes, dores, lesoes ou condicoes pre-existentes. Pare imediatamente se sentir dor, tontura, falta de ar intensa ou desconforto incomum. |
| Alternativa | Alternativa: reduza amplitude, faca sentado ou troque por mobilidade leve. |
| XP | 15 |

### Reset corporal de 3 minutos

| Campo | Valor |
| --- | --- |
| ID | cmpoc8jxz000xo3uo4eswatl9 |
| Categoria/modalidade | Pausas rapidas / Pausas rapidas |
| Nivel minimo | 1 |
| Intensidade | Leve |
| Ritmo min/max | / |
| Rounds | 3 |
| Round segundos | 40 |
| Descanso segundos | 20 |
| Aquecimento | Respire em ritmo confortavel; Mobilize ombros e quadril; Comece abaixo do seu limite |
| Desaceleracao | Caminhe devagar; Alongue sem forcar; Hidrate-se e observe o corpo |
| Cuidados | Consulte um profissional de saude antes de iniciar exercicios se tiver limitacoes, dores, lesoes ou condicoes pre-existentes. Pare imediatamente se sentir dor, tontura, falta de ar intensa ou desconforto incomum. |
| Alternativa | Alternativa: reduza amplitude, faca sentado ou troque por mobilidade leve. |
| XP | 15 |

### Corda iniciante opcional

| Campo | Valor |
| --- | --- |
| ID | cmplacacd000oo3twnxn4ccwy |
| Categoria/modalidade | Modalidades / Pular corda |
| Nivel minimo | 5 |
| Intensidade | Moderada |
| Ritmo min/max | 40 / 70 |
| Rounds | 6 |
| Round segundos | 20 |
| Descanso segundos | 40 |
| Aquecimento | Aqueça tornozelos; Faça marcha no lugar; Teste a corda sem pressa |
| Desaceleracao | Caminhe devagar; Alongue panturrilhas; Respire e hidrate |
| Cuidados | Evite se houver dor, tontura, lesão recente, desconforto em joelho/tornozelo/coluna ou recomendação médica para evitar impacto. |
| Alternativa | Alternativa sem impacto: marcha no lugar, step touch, polichinelo sem salto ou mobilidade leve. |
| XP | 30 |

### Pular corda iniciante progressivo

| Campo | Valor |
| --- | --- |
| ID | cmpoc8k7i001ao3uoj2lqbcd3 |
| Categoria/modalidade | Pular corda / Pular corda |
| Nivel minimo | 5 |
| Intensidade | Moderada |
| Ritmo min/max | 40 / 80 |
| Rounds | 4 |
| Round segundos | 45 |
| Descanso segundos | 30 |
| Aquecimento | Respire em ritmo confortavel; Mobilize ombros e quadril; Comece abaixo do seu limite |
| Desaceleracao | Caminhe devagar; Alongue sem forcar; Hidrate-se e observe o corpo |
| Cuidados | Consulte um profissional de saude antes de iniciar exercicios se tiver limitacoes, dores, lesoes ou condicoes pre-existentes. Pare imediatamente se sentir dor, tontura, falta de ar intensa ou desconforto incomum. |
| Alternativa | Alternativa: reduza amplitude, faca sentado ou troque por mobilidade leve. |
| XP | 30 |

### Corda base

| Campo | Valor |
| --- | --- |
| ID | cmplacacv000po3twlqrj91wt |
| Categoria/modalidade | Modalidades / Pular corda |
| Nivel minimo | 6 |
| Intensidade | Moderada |
| Ritmo min/max | 70 / 100 |
| Rounds | 8 |
| Round segundos | 30 |
| Descanso segundos | 30 |
| Aquecimento | Mobilize tornozelos e joelhos; Faça 1 minuto de marcha; Comece com saltos baixos |
| Desaceleracao | Caminhe devagar; Alongue panturrilhas; Faça respiração lenta |
| Cuidados | Evite se houver dor, tontura, lesão recente, desconforto em joelho/tornozelo/coluna ou recomendação médica para evitar impacto. |
| Alternativa | Alternativa sem impacto: marcha no lugar, step touch, polichinelo sem salto ou mobilidade leve. |
| XP | 30 |

### Corda ritmo estável

| Campo | Valor |
| --- | --- |
| ID | cmplacadw000qo3tw3ay89cpb |
| Categoria/modalidade | Modalidades / Pular corda |
| Nivel minimo | 7 |
| Intensidade | Moderada |
| Ritmo min/max | 90 / 120 |
| Rounds | 10 |
| Round segundos | 40 |
| Descanso segundos | 25 |
| Aquecimento | Aqueça tornozelos; Faça saltos simulados sem corda; Comece abaixo do seu pace |
| Desaceleracao | Reduza ritmo por 1 minuto; Alongue panturrilhas e quadris; Hidrate |
| Cuidados | Evite se houver dor, tontura, lesão recente, desconforto em joelho/tornozelo/coluna ou recomendação médica para evitar impacto. |
| Alternativa | Alternativa sem impacto: marcha no lugar, step touch, polichinelo sem salto ou mobilidade leve. |
| XP | 30 |

### Corda progressiva moderada

| Campo | Valor |
| --- | --- |
| ID | cmplacaek000ro3tw5o4ugnr1 |
| Categoria/modalidade | Modalidades / Pular corda |
| Nivel minimo | 8 |
| Intensidade | Moderada |
| Ritmo min/max | 110 / 140 |
| Rounds | 12 |
| Round segundos | 45 |
| Descanso segundos | 20 |
| Aquecimento | Aqueça tornozelos e panturrilhas; Faça 2 rounds muito leves; Mantenha saltos baixos |
| Desaceleracao | Caminhe até normalizar respiração; Alongue panturrilhas; Faça mobilidade de tornozelos |
| Cuidados | Evite se houver dor, tontura, lesão recente, desconforto em joelho/tornozelo/coluna ou recomendação médica para evitar impacto. |
| Alternativa | Alternativa sem impacto: marcha no lugar, step touch, polichinelo sem salto ou mobilidade leve. |
| XP | 30 |

### Flow forca + mobilidade

| Campo | Valor |
| --- | --- |
| ID | cmpoc8k83001bo3uoxahs918t |
| Categoria/modalidade | Yoga / Yoga |
| Nivel minimo | 5 |
| Intensidade | Moderada |
| Ritmo min/max | / |
| Rounds | 6 |
| Round segundos | 45 |
| Descanso segundos | 30 |
| Aquecimento | Respire em ritmo confortavel; Mobilize ombros e quadril; Comece abaixo do seu limite |
| Desaceleracao | Caminhe devagar; Alongue sem forcar; Hidrate-se e observe o corpo |
| Cuidados | Consulte um profissional de saude antes de iniciar exercicios se tiver limitacoes, dores, lesoes ou condicoes pre-existentes. Pare imediatamente se sentir dor, tontura, falta de ar intensa ou desconforto incomum. |
| Alternativa | Alternativa: reduza amplitude, faca sentado ou troque por mobilidade leve. |
| XP | 30 |

### Yoga: base leve

| Campo | Valor |
| --- | --- |
| ID | cmplat90k000oo35ctxyotubh |
| Categoria/modalidade | Modalidades / Yoga |
| Nivel minimo | 5 |
| Intensidade | Leve |
| Ritmo min/max | / |
| Rounds | 5 |
| Round segundos | 45 |
| Descanso segundos | 15 |
| Aquecimento | Respire de pé ou sentado; Gire ombros; Alongue braços sem forçar |
| Desaceleracao | Expire longo; Observe a postura; Volte com calma |
| Cuidados | Faça no seu ritmo. Pare se sentir dor, tontura ou desconforto e adapte os movimentos ao seu corpo. |
| Alternativa | Faça a sequência sentado se estiver cansado. |
| XP | 15 |

## Rotina Pessoal - Registros no Banco
### Lembretes de rotina

| Titulo | Categoria | Tipo | Horario | Ativo | Dias | Repeticao | Soneca | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |

### Tarefas de rotina

| Titulo | Categoria | Prioridade | Status | Vencimento | Horario | Notas |
| --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |

### Descanso digital/social

| Ativo | Inicio | Fim | Apps | Dias | Nota |
| --- | --- | --- | --- | --- | --- |
| sim | 17:01 | 07:00 | Instagram,YouTube | 1,2,3,4,5,6,0 |  |

## Rotinas de Alongamento Estaticas
| ID | Titulo | Duracao | Objetivo | Melhor para | Exercicios |
| --- | --- | --- | --- | --- | --- |
| rotina-rapida-trabalho | Rotina rapida para trabalho | 5 minutos | Soltar pescoco, punhos, peitoral e costas superiores durante o expediente. | foco no trabalho; muito tempo sentado; maos e punhos cansados | Inclinacao lateral do pescoco; Extensao dos flexores do punho; Abertura de peito na porta; Abraco das escapulas; Respiracao nas costelas |
| rotina-matinal | Rotina matinal | 8 a 10 minutos | Despertar o corpo com mobilidade cervical, coluna, peito, quadril, panturrilha e respiracao. | rigidez matinal; dar energia; mobilidade geral | Rotacao cervical controlada; Gato-vaca toracico; Abertura de peito na porta; Circulos de quadril; Panturrilha na parede; Respiracao nas costelas |
| rotina-pos-treino | Rotina pos-treino | 10 a 15 minutos | Relaxar a regiao treinada e incluir posterior de coxa, quadriceps, gluteos, peitoral e dorsal. | depois do treino; caminhada ou corrida | Posterior sentado; Quadriceps em pe com apoio; Figura quatro sentado; Peitoral na parede com um braco; Dorsal com apoio na cadeira; Panturrilha na parede |
| rotina-para-dormir | Rotina para dormir | 10 minutos | Desacelerar com respiracao lenta, postura da crianca, torcao lombar leve, pescoco e relaxamento muscular. | antes de dormir; relaxamento; ansiedade corporal | Respiracao nas costelas; Postura da crianca; Torcao lombar leve; Inclinacao lateral do pescoco; Gluteo na parede |
| rotina-quem-fica-sentado | Rotina para quem fica sentado | 7 minutos | Soltar flexores do quadril, peitoral, coluna toracica, lombar e pescoco. | muito tempo sentado; lombar rigida; foco no trabalho | Flexor do quadril ajoelhado; Abertura de peito na porta; Extensao toracica na cadeira; Bascula pelvica; Inclinacao lateral do pescoco |
## Exercicios de Alongamento Estaticos
| ID | Titulo | Regiao | Duracao | Dificuldade | Melhor para | Evitar quando |
| --- | --- | --- | --- | --- | --- | --- |
| extensao-flexores-punho | Extensao dos flexores do punho |  | 20 a 30 segundos |  |  |  |
| flexao-extensores-punho | Flexao dos extensores do punho |  | 20 a 30 segundos |  |  |  |
| abertura-dedos | Abertura dos dedos |  | 6 a 10 repeticoes lentas |  |  |  |
| alongamento-polegar | Alongamento do polegar |  | 20 a 30 segundos |  |  |  |
| circulos-punho-mobilidade | Circulos de punho |  | 6 a 10 repeticoes lentas |  |  |  |
| pronacao-supinacao-antebraco | Pronacao e supinacao do antebraco |  | 6 a 10 repeticoes lentas |  |  |  |
| alongamento-braquiorradial | Alongamento do braquiorradial |  | 20 a 30 segundos |  |  |  |
| alongamento-pronadores | Alongamento dos pronadores |  | 20 a 30 segundos |  |  |  |
| alongamento-supinadores | Alongamento dos supinadores |  | 20 a 30 segundos |  |  |  |
| mobilidade-cotovelo | Mobilidade leve de cotovelo |  | 6 a 10 repeticoes lentas |  |  |  |
| alongamento-biceps-parede | Alongamento de biceps na parede |  | 20 a 30 segundos |  |  |  |
| triceps-acima-cabeca | Triceps acima da cabeca |  | 20 a 30 segundos |  |  |  |
| braco-cruzado-suave | Braco cruzado suave |  | 20 a 30 segundos |  |  |  |
| extensao-bracos-atras | Extensao dos bracos atras |  | 20 a 30 segundos |  |  |  |
| mobilidade-braco-cotovelo | Mobilidade de braco e cotovelo |  | 6 a 10 repeticoes lentas |  |  |  |
| deltoide-posterior-cruzado | Deltoide posterior cruzado |  | 20 a 30 segundos |  |  |  |
| elevacao-ombros-circulos | Circulos lentos de ombros |  | 6 a 10 repeticoes lentas |  |  |  |
| rotacao-externa-parede | Rotacao externa na parede |  | 6 a 10 repeticoes lentas |  |  |  |
| capsula-posterior-ombro | Alongamento posterior do ombro |  | 20 a 30 segundos |  |  |  |
| pendulo-ombro | Pendulo de ombro |  | 6 a 10 repeticoes lentas |  |  |  |
| abertura-peito-porta | Abertura de peito na porta |  | 20 a 30 segundos |  |  |  |
| peitoral-parede-um-braco | Peitoral na parede com um braco |  | 20 a 30 segundos |  |  |  |
| maos-atras-costas | Maos atras das costas |  | 20 a 30 segundos |  |  |  |
| peitoral-no-canto | Peitoral no canto da parede |  | 20 a 30 segundos |  |  |  |
| extensao-toracica-peito | Extensao toracica com abertura de peito |  | 6 a 10 repeticoes lentas |  |  |  |
| abraco-escapulas | Abraco das escapulas |  | 20 a 30 segundos |  |  |  |
| alongamento-dorsal-cadeira | Dorsal com apoio na cadeira |  | 20 a 30 segundos |  |  |  |
| retracao-protracao-escapular | Retracao e protracao escapular |  | 6 a 10 repeticoes lentas |  |  |  |
| postura-crianca-lateral | Postura da crianca lateral |  | 20 a 30 segundos |  |  |  |
| gato-vaca-escapular | Gato-vaca escapular |  | 6 a 10 repeticoes lentas |  |  |  |
| inclinacao-lateral-pescoco | Inclinacao lateral do pescoco |  | 20 a 30 segundos |  |  |  |
| flexao-cervical-suave | Flexao cervical suave |  | 20 a 30 segundos |  |  |  |
| rotacao-cervical-controlada | Rotacao cervical controlada |  | 6 a 10 repeticoes lentas |  |  |  |
| elevador-escapula | Alongamento do elevador da escapula |  | 20 a 30 segundos |  |  |  |
| queixo-para-tras | Queixo para tras |  | 6 a 10 repeticoes lentas |  |  |  |
| rotacao-toracica-sentada | Rotacao toracica sentada |  | 6 a 10 repeticoes lentas |  |  |  |
| extensao-toracica-cadeira | Extensao toracica na cadeira |  | 6 a 10 repeticoes lentas |  |  |  |
| gato-vaca-toracico | Gato-vaca toracico |  | 6 a 10 repeticoes lentas |  |  |  |
| livro-aberto | Livro aberto |  | 6 a 10 repeticoes lentas |  |  |  |
| alcance-lateral-toracico | Alcance lateral toracico |  | 20 a 30 segundos |  |  |  |
| joelhos-ao-peito | Joelhos ao peito |  | 20 a 30 segundos |  |  |  |
| torcao-lombar-leve | Torcao lombar leve |  | 20 a 30 segundos |  |  |  |
| postura-crianca | Postura da crianca |  | 20 a 30 segundos |  |  |  |
| bascula-pelvica | Bascula pelvica |  | 6 a 10 repeticoes lentas |  |  |  |
| flexao-lombar-sentada | Flexao lombar sentada |  | 20 a 30 segundos |  |  |  |
| cobra-suave | Cobra suave |  | 20 a 30 segundos |  |  |  |
| extensao-abdominal-em-pe | Extensao abdominal em pe |  | 20 a 30 segundos |  |  |  |
| alongamento-lateral-tronco | Alongamento lateral do tronco |  | 20 a 30 segundos |  |  |  |
| ponte-suave-abertura | Ponte suave com abertura anterior |  | 6 a 10 repeticoes lentas |  |  |  |
| respiracao-costelas | Respiracao nas costelas |  | 6 a 10 repeticoes lentas |  |  |  |
| flexor-quadril-ajoelhado | Flexor do quadril ajoelhado |  | 20 a 30 segundos |  |  |  |
| borboleta | Borboleta |  | 20 a 30 segundos |  |  |  |
| noventa-noventa | 90/90 de quadril |  | 6 a 10 repeticoes lentas |  |  |  |
| circulos-quadril | Circulos de quadril |  | 6 a 10 repeticoes lentas |  |  |  |
| abertura-quadril-sentado | Abertura de quadril sentado |  | 20 a 30 segundos |  |  |  |
| figura-quatro-sentado | Figura quatro sentado |  | 20 a 30 segundos |  |  |  |
| piriforme-deitado | Piriforme deitado |  | 20 a 30 segundos |  |  |  |
| pombo-adaptado | Pombo adaptado |  | 20 a 30 segundos |  |  |  |
| joelho-ao-peito-cruzado | Joelho ao peito cruzado |  | 20 a 30 segundos |  |  |  |
| gluteo-parede | Gluteo na parede |  | 20 a 30 segundos |  |  |  |
| posterior-sentado | Posterior sentado |  | 20 a 30 segundos |  |  |  |
| posterior-em-pe-apoio | Posterior em pe com apoio |  | 20 a 30 segundos |  |  |  |
| toalha-deitado | Posterior com toalha deitado |  | 20 a 30 segundos |  |  |  |
| bom-dia-mobilidade | Bom dia de mobilidade |  | 6 a 10 repeticoes lentas |  |  |  |
| inclinacao-unilateral-cadeira | Inclinacao unilateral na cadeira |  | 20 a 30 segundos |  |  |  |
| quadriceps-em-pe-apoio | Quadriceps em pe com apoio |  | 20 a 30 segundos |  |  |  |
| quadriceps-lateral-deitado | Quadriceps deitado de lado |  | 20 a 30 segundos |  |  |  |
| flexor-quadril-com-quadriceps | Flexor do quadril com quadriceps |  | 20 a 30 segundos |  |  |  |
| joelho-no-chao-anterior | Anterior de coxa com joelho no chao |  | 20 a 30 segundos |  |  |  |
| anterior-coxa-cadeira | Anterior de coxa na cadeira |  | 20 a 30 segundos |  |  |  |
| panturrilha-parede | Panturrilha na parede |  | 20 a 30 segundos |  |  |  |
| soleo-joelho-flexionado | Soleo com joelho flexionado |  | 20 a 30 segundos |  |  |  |
| degrau-panturrilha | Panturrilha no degrau |  | 20 a 30 segundos |  |  |  |
| panturrilha-toalha | Panturrilha com toalha |  | 20 a 30 segundos |  |  |  |
| mobilidade-tornozelo-panturrilha | Mobilidade tornozelo-panturrilha |  | 6 a 10 repeticoes lentas |  |  |  |
| dorsiflexao-parede | Dorsiflexao na parede |  | 6 a 10 repeticoes lentas |  |  |  |
| circulos-tornozelo | Circulos de tornozelo |  | 6 a 10 repeticoes lentas |  |  |  |
| inversao-eversao-controlada | Inversao e eversao controlada |  | 6 a 10 repeticoes lentas |  |  |  |
| alongamento-frente-tornozelo | Alongamento da frente do tornozelo |  | 20 a 30 segundos |  |  |  |
| alfabeto-tornozelo | Alfabeto com tornozelo |  | 6 a 10 repeticoes lentas |  |  |  |
| extensao-dedos-pe | Extensao dos dedos do pe |  | 20 a 30 segundos |  |  |  |
| flexao-dedos-pe | Flexao dos dedos do pe |  | 20 a 30 segundos |  |  |  |
| arco-plantar-bola | Arco plantar com bola |  | 6 a 10 repeticoes lentas |  |  |  |
| fascia-plantar-toalha | Fascia plantar com toalha |  | 20 a 30 segundos |  |  |  |
| abertura-dedos-pe | Abertura dos dedos do pe |  | 6 a 10 repeticoes lentas |  |  |  |
## Caminhada - Modos
| ID | Titulo | Objetivo | Duracao padrao s | Ritmo | Intensidade | GPS | Objetivos |
| --- | --- | --- | --- | --- | --- | --- | --- |
| light | Caminhada Leve / Recuperacao |  |  |  | Muito leve | nao | Ativar circulacao; Reduzir rigidez; Criar constancia; Reduzir estresse leve |
| power | Caminhada Rapida / Power Walking |  |  |  | Moderada | nao | Aumentar gasto calorico; Desenvolver resistencia; Melhorar disposicao |
| incline | Caminhada em Subida / com Inclinacao |  |  |  | Moderada+ | nao | Fortalecer gluteos; Trabalhar panturrilhas; Ativar posteriores de coxa; Aumentar gasto energetico |
| chair | Caminhada Adaptada na Cadeira |  |  |  | Muito leve | nao | Manter movimento; Ativar circulacao; Reduzir sedentarismo; Fortalecer levemente membros inferiores |
| stress_relief | Caminhada Antiestresse |  |  |  | Leve | nao | Diminuir urgencia; Organizar atencao; Soltar ombros; Criar pausa mental ativa |
| anxiety | Caminhada para Ansiedade |  |  |  | Leve | nao | Aterrar a atencao; Relaxar ombros; Regular respiracao; Retomar sensacao de presenca |
| weight_loss | Caminhada para Emagrecimento |  |  |  | Moderada | nao | Aumentar gasto calorico; Criar regularidade; Melhorar folego; Evitar excesso |
| conditioning | Caminhada para Condicionamento |  |  |  | Moderada | nao | Melhorar resistencia; Aumentar tempo em movimento; Construir rotina; Acompanhar evolucao pessoal |
| free | Caminhada Livre |  |  |  | Livre | nao | Registrar tempo; Registrar distancia se houver GPS; Perceber o corpo; Manter continuidade |
## Conquistas
| Slug | Titulo | Trigger | Meta | Descricao |
| --- | --- | --- | --- | --- |
| all-types | Mapa completo | ALL_EXERCISE_TYPES | 1 | Experimentou todos os tipos principais de exercicio. |
| first-checkin | Primeira pausa | FIRST_CHECKIN | 1 | Fez o primeiro check-in no Pausa AI. |
| level-10 | Nivel 10 | LEVEL_REACHED | 10 | Chegou ao nivel 10. |
| level-5 | Nivel 5 | LEVEL_REACHED | 5 | Chegou ao nivel 5. |
| ten-missions | Dez missoes | MISSION_COUNT | 10 | Concluiu 10 missoes de bem-estar. |
| streak-30 | Ritual consistente | STREAK_DAYS | 30 | Manteve uma sequencia de 30 dias de check-in. |
| streak-7 | Sete dias de cuidado | STREAK_DAYS | 7 | Manteve uma sequencia de 7 dias de check-in. |
| walking-comeback | Voltou para o movimento | WALKING_COMEBACK | 1 | Registrou uma caminhada apos mais de 7 dias de pausa. |
| first-walk | Primeira caminhada | WALKING_COUNT | 1 | Concluiu a primeira Caminhada Inteligente. |
| walking-1km | Primeiro quilometro | WALKING_DISTANCE_KM | 1 | Percorreu 1 km em caminhadas. |
| walking-30-min | 30 minutos acumulados | WALKING_MINUTES | 30 | Acumulou 30 minutos de caminhada. |
| walking-chair | Treino adaptado concluido | WALKING_MODE_CHAIR | 1 | Concluiu uma caminhada adaptada na cadeira. |
| walking-stress-relief | Antiestresse concluida | WALKING_MODE_STRESS_RELIEF | 1 | Concluiu uma caminhada antiestresse. |
| walking-5km-month | 5 km no mes | WALKING_MONTH_DISTANCE_KM | 5 | Somou 5 km de caminhada em 30 dias. |
| walking-mood-up | Humor melhorou | WALKING_MOOD_IMPROVED | 1 | Registrou melhora de humor apos caminhar. |
| walking-streak-7 | Sete dias de movimento | WALKING_STREAK_DAYS | 7 | Criou 7 dias consecutivos com caminhada. |
| walks-week-3 | Tres caminhadas na semana | WALKING_WEEK_COUNT | 3 | Fez 3 caminhadas em uma janela de 7 dias. |
| five-yoga | Yoga de bolso | YOGA_COUNT | 5 | Concluiu 5 praticas de yoga. |
## Observacoes de Integridade
| Verificacao | Resultado |
| --- | --- |
| Videos sem alvo encontrado | nenhum encontrado pelos modelos verificados |
| Yoga seed vs banco | 30 seeds / 30 banco |
| Yoga sequencias seed vs banco | 6 seeds / 6 banco |
| Rotinas pessoais | RoutineReminder/RoutineTask/SocialDowntime sao dados por usuario; este relatorio omite email e id de usuario |