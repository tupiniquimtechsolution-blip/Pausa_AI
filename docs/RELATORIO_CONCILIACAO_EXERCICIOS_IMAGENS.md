# Relatorio de conciliacao entre exercicios e banco de imagens

Gerado em: 2026-07-18

Este relatorio cruza o catalogo de exercicios fisicos, alongamentos e yoga com os mapeamentos das referencias e com os arquivos realmente presentes em `public/instructional-images`.

## Regra operacional

- `ACTIVE`: existe correspondencia confirmada e pelo menos uma imagem fisica utilizavel. O aplicativo pode exibir o exercicio e puxar a sequencia vinculada.
- `ARCHIVED_MISSING_IMAGE`: nao ha correspondencia confirmada ou o arquivo fisico ainda nao existe. O registro permanece no banco, mas nao entra no catalogo ativo nem em novas recomendacoes.
- `ARCHIVED_NEEDS_REVIEW`: o mapeamento exige validacao humana explicita (por exemplo, anatomia ou aceitacao visual) antes da liberacao.
- `ARCHIVED_REJECTED`: a decisao humana rejeitou explicitamente o asset; candidatos fisicos permanecem apenas para auditoria.

## Resumo

| Status | Total |
| --- | --- |
| ACTIVE | 165 |
| ARCHIVED_MISSING_IMAGE | 184 |
| ARCHIVED_NEEDS_REVIEW | 5 |
| ARCHIVED_REJECTED | 0 |
| TOTAL | 354 |

## Escopo por area

| Area | Total |
| --- | --- |
| EXERCISE | 2 |
| EXERCISE_INSTRUCTION | 231 |
| STRETCHING_EXERCISE | 85 |
| YOGA_PRACTICE | 30 |
| YOGA_SEQUENCE | 6 |

## Resultado pratico

- 165 itens ficaram ligados ao banco de imagens e podem aparecer no aplicativo.
- 189 itens ficaram preservados no arquivo morto.
- 184 itens precisam de criacao ou localizacao de imagens.
- 5 itens aguardam a validacao humana explicita registrada no mapeamento.
- 0 itens foram rejeitados explicitamente.
- 174 pendencias pertencem ao catalogo anterior as referencias extraidas.

## Itens sem imagem criada ou sem correspondencia confirmada

| Area | ID/slug | Titulo | Origem | Motivo | REFs candidatas |
| --- | --- | --- | --- | --- | --- |
| EXERCISE_INSTRUCTION | noventa-noventa | 90/90 de quadril | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | abertura-peito-porta | Abertura de peito na porta | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | abertura-quadril-sentado | Abertura de quadril sentado | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | abertura-dedos | Abertura dos dedos | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | abraco-escapulas | Abraco das escapulas | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | alfabeto-tornozelo | Alfabeto com tornozelo | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | alongamento-frente-tornozelo | Alongamento da frente do tornozelo | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | alongamento-biceps-parede | Alongamento de biceps na parede | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | alongamento-de-pernas | Alongamento de pernas | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | alongamento-braquiorradial | Alongamento do braquiorradial | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | elevador-escapula | Alongamento do elevador da escapula | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | alongamento-polegar | Alongamento do polegar | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | alongamento-pronadores | Alongamento dos pronadores | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | alongamento-supinadores | Alongamento dos supinadores | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | alongamento-leve | Alongamento leve | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | alongamento-leve-pernas | Alongamento leve de pernas | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | capsula-posterior-ombro | Alongamento posterior do ombro | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | joelho-no-chao-anterior | Anterior de coxa com joelho no chao | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | anterior-coxa-cadeira | Anterior de coxa na cadeira | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | ativacao-leve-3-minutos | Ativacao leve de 3 minutos | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | bom-dia-mobilidade | Bom dia de mobilidade | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | braco-cruzado-suave | Braco cruzado suave | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | ref_004_mov_14 | Cabeca ao joelho | REFERENCE_EXTRACTED | O exercicio possui mapeamento, mas ainda faltam arquivos fisicos obrigatorios. | ref_004_mov_14 |
| EXERCISE_INSTRUCTION | ref_005_mov_05 | Cabeca ao joelho | REFERENCE_EXTRACTED | O exercicio possui mapeamento, mas ainda faltam arquivos fisicos obrigatorios. | ref_005_mov_05, ref_004_mov_14 |
| EXERCISE_INSTRUCTION | caminhada-consciente | Caminhada consciente | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | caminhada-consciente-curta | Caminhada consciente curta | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | ref_004_mov_10 | Cao olhando para baixo | REFERENCE_EXTRACTED | O exercicio possui mapeamento, mas ainda faltam arquivos fisicos obrigatorios. | ref_004_mov_10 |
| EXERCISE_INSTRUCTION | circulos-punho-mobilidade | Circulos de punho | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | circulos-quadril | Circulos de quadril | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | circulos-tornozelo | Circulos de tornozelo | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | elevacao-ombros-circulos | Circulos lentos de ombros | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | deltoide-posterior-cruzado | Deltoide posterior cruzado | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | alongamento-dorsal-cadeira | Dorsal com apoio na cadeira | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | dorsiflexao-parede | Dorsiflexao na parede | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | extensao-abdominal-em-pe | Extensao abdominal em pe | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | extensao-bracos-atras | Extensao dos bracos atras | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | extensao-flexores-punho | Extensao dos flexores do punho | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | extensao-toracica-peito | Extensao toracica com abertura de peito | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | extensao-toracica-cadeira | Extensao toracica na cadeira | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | figura-quatro-sentado | Figura quatro sentado | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | ref_011_mov_21 | Flexao a frente | REFERENCE_EXTRACTED | O exercicio possui mapeamento, mas ainda faltam arquivos fisicos obrigatorios. | ref_011_mov_21 |
| EXERCISE_INSTRUCTION | flexao-cervical-suave | Flexao cervical suave | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | flexao-extensores-punho | Flexao dos extensores do punho | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | flexao-lombar-sentada | Flexao lombar sentada | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | flexor-quadril-com-quadriceps | Flexor do quadril com quadriceps | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | funcional-em-casa-iniciante | Funcional em casa iniciante | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | gluteo-parede | Gluteo na parede | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | inclinacao-lateral-pescoco | Inclinacao lateral do pescoco | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | inclinacao-unilateral-cadeira | Inclinacao unilateral na cadeira | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | inversao-eversao-controlada | Inversao e eversao controlada | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | jumping-baixo-impacto | Jumping baixo impacto | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | levantar-e-respirar | Levantar e respirar | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | livro-aberto | Livro aberto | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | luta-sombra-leve | Luta sombra leve | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | maos-atras-costas | Maos atras das costas | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | marcha-leve-parada | Marcha leve parada | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | mobilidade-braco-cotovelo | Mobilidade de braco e cotovelo | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | mobilidade-pescoco-ombros | Mobilidade de pescoco e ombros | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | mobilidade-cotovelo | Mobilidade leve de cotovelo | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | mobilidade-tornozelo-panturrilha | Mobilidade tornozelo-panturrilha | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | degrau-panturrilha | Panturrilha no degrau | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | pausa-de-energia | Pausa de energia | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | peitoral-parede-um-braco | Peitoral na parede com um braco | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | peitoral-no-canto | Peitoral no canto da parede | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | pendulo-ombro | Pendulo de ombro | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | piriforme-deitado | Piriforme deitado | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | toalha-deitado | Posterior com toalha deitado | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | posterior-em-pe-apoio | Posterior em pe com apoio | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | ref_004_mov_07 | Postura da cobra | REFERENCE_EXTRACTED | O exercicio possui mapeamento, mas ainda faltam arquivos fisicos obrigatorios. | ref_004_mov_07 |
| EXERCISE_INSTRUCTION | ref_003_mov_12 | Postura da oracao final | REFERENCE_EXTRACTED | O exercicio possui mapeamento, mas ainda faltam arquivos fisicos obrigatorios. | ref_003_mov_12 |
| EXERCISE_INSTRUCTION | ref_001_mov_03 | Postura do gafanhoto | REFERENCE_EXTRACTED | O exercicio possui mapeamento, mas ainda faltam arquivos fisicos obrigatorios. | ref_001_mov_03 |
| EXERCISE_INSTRUCTION | ref_004_mov_17 | Postura do sapo | REFERENCE_EXTRACTED | O exercicio possui mapeamento, mas ainda faltam arquivos fisicos obrigatorios. | ref_004_mov_17 |
| EXERCISE_INSTRUCTION | ref_005_mov_06 | Postura do sapo | REFERENCE_EXTRACTED | O exercicio possui mapeamento, mas ainda faltam arquivos fisicos obrigatorios. | ref_005_mov_06, ref_004_mov_17 |
| EXERCISE_INSTRUCTION | ref_008_mov_05 | Prancha | REFERENCE_EXTRACTED | O exercicio possui mapeamento, mas ainda faltam arquivos fisicos obrigatorios. | ref_003_mov_05 |
| EXERCISE_INSTRUCTION | ref_011_mov_10 | Prancha | REFERENCE_EXTRACTED | O exercicio possui mapeamento, mas ainda faltam arquivos fisicos obrigatorios. | ref_003_mov_05 |
| EXERCISE_INSTRUCTION | pronacao-supinacao-antebraco | Pronacao e supinacao do antebraco | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | pular-corda-iniciante | Pular corda iniciante | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | quadriceps-lateral-deitado | Quadriceps deitado de lado | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | quadriceps-em-pe-apoio | Quadriceps em pe com apoio | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | queixo-para-tras | Queixo para tras | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | reset-corporal-trabalho | Reset corporal no trabalho | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | reset-postural | Reset postural | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | respiracao-mobilidade | Respiracao + mobilidade | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | respiracao-costelas | Respiracao nas costelas | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | retracao-protracao-escapular | Retracao e protracao escapular | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | rotacao-cervical-controlada | Rotacao cervical controlada | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | rotacao-externa-parede | Rotacao externa na parede | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | rotacao-toracica-sentada | Rotacao toracica sentada | PRE_REFERENCE_CATALOG | O exercicio possui mapeamento, mas ainda faltam arquivos fisicos obrigatorios. | ref_001_mov_01 |
| EXERCISE_INSTRUCTION | soleo-joelho-flexionado | Soleo com joelho flexionado | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | soltar-tensao-pescoco-ombros | Soltar tensao de pescoco e ombros | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | torcao-lombar-leve | Torcao lombar leve | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | ref_001_mov_01 | Torcao sentada | REFERENCE_EXTRACTED | O exercicio possui mapeamento, mas ainda faltam arquivos fisicos obrigatorios. | ref_001_mov_01 |
| EXERCISE_INSTRUCTION | triceps-acima-cabeca | Triceps acima da cabeca | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | yoga-bolso-coluna-leve | Yoga de bolso: coluna leve | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | yoga-bolso-pausa-no-chao | Yoga de bolso: pausa no chao | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | yoga-energia-leve | Yoga de energia leve | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| EXERCISE_INSTRUCTION | yoga-leve | Yoga leve | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | noventa-noventa | 90/90 de quadril | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | abertura-peito-porta | Abertura de peito na porta | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | abertura-quadril-sentado | Abertura de quadril sentado | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | abertura-dedos | Abertura dos dedos | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | abraco-escapulas | Abraco das escapulas | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | alfabeto-tornozelo | Alfabeto com tornozelo | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | alongamento-frente-tornozelo | Alongamento da frente do tornozelo | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | alongamento-biceps-parede | Alongamento de biceps na parede | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | alongamento-braquiorradial | Alongamento do braquiorradial | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | elevador-escapula | Alongamento do elevador da escapula | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | alongamento-polegar | Alongamento do polegar | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | alongamento-pronadores | Alongamento dos pronadores | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | alongamento-supinadores | Alongamento dos supinadores | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | capsula-posterior-ombro | Alongamento posterior do ombro | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | joelho-no-chao-anterior | Anterior de coxa com joelho no chao | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | anterior-coxa-cadeira | Anterior de coxa na cadeira | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | bom-dia-mobilidade | Bom dia de mobilidade | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | braco-cruzado-suave | Braco cruzado suave | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | circulos-punho-mobilidade | Circulos de punho | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | circulos-quadril | Circulos de quadril | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | circulos-tornozelo | Circulos de tornozelo | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | elevacao-ombros-circulos | Circulos lentos de ombros | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | deltoide-posterior-cruzado | Deltoide posterior cruzado | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | alongamento-dorsal-cadeira | Dorsal com apoio na cadeira | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | dorsiflexao-parede | Dorsiflexao na parede | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | extensao-abdominal-em-pe | Extensao abdominal em pe | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | extensao-bracos-atras | Extensao dos bracos atras | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | extensao-flexores-punho | Extensao dos flexores do punho | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | extensao-toracica-peito | Extensao toracica com abertura de peito | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | extensao-toracica-cadeira | Extensao toracica na cadeira | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | figura-quatro-sentado | Figura quatro sentado | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | flexao-cervical-suave | Flexao cervical suave | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | flexao-extensores-punho | Flexao dos extensores do punho | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | flexao-lombar-sentada | Flexao lombar sentada | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | flexor-quadril-com-quadriceps | Flexor do quadril com quadriceps | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | gluteo-parede | Gluteo na parede | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | inclinacao-lateral-pescoco | Inclinacao lateral do pescoco | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | inclinacao-unilateral-cadeira | Inclinacao unilateral na cadeira | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | inversao-eversao-controlada | Inversao e eversao controlada | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | livro-aberto | Livro aberto | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | maos-atras-costas | Maos atras das costas | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | mobilidade-braco-cotovelo | Mobilidade de braco e cotovelo | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | mobilidade-cotovelo | Mobilidade leve de cotovelo | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | mobilidade-tornozelo-panturrilha | Mobilidade tornozelo-panturrilha | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | degrau-panturrilha | Panturrilha no degrau | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | peitoral-parede-um-braco | Peitoral na parede com um braco | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | peitoral-no-canto | Peitoral no canto da parede | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | pendulo-ombro | Pendulo de ombro | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | piriforme-deitado | Piriforme deitado | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | toalha-deitado | Posterior com toalha deitado | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | posterior-em-pe-apoio | Posterior em pe com apoio | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | pronacao-supinacao-antebraco | Pronacao e supinacao do antebraco | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | quadriceps-lateral-deitado | Quadriceps deitado de lado | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | quadriceps-em-pe-apoio | Quadriceps em pe com apoio | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | queixo-para-tras | Queixo para tras | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | respiracao-costelas | Respiracao nas costelas | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | retracao-protracao-escapular | Retracao e protracao escapular | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | rotacao-cervical-controlada | Rotacao cervical controlada | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | rotacao-externa-parede | Rotacao externa na parede | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | rotacao-toracica-sentada | Rotacao toracica sentada | PRE_REFERENCE_CATALOG | O exercicio possui mapeamento, mas ainda faltam arquivos fisicos obrigatorios. | ref_001_mov_01 |
| STRETCHING_EXERCISE | soleo-joelho-flexionado | Soleo com joelho flexionado | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | torcao-lombar-leve | Torcao lombar leve | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| STRETCHING_EXERCISE | triceps-acima-cabeca | Triceps acima da cabeca | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| YOGA_PRACTICE | abertura-de-peito | Abertura de peito | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| YOGA_PRACTICE | agachamento-apoio-consciencia | Agachamento com apoio e consciencia corporal | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| YOGA_PRACTICE | alongamento-coluna-em-pe | Alongamento de coluna em pe | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| YOGA_PRACTICE | alongamento-pescoco-ombros-restaurativo | Alongamento de pescoco e ombros | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| YOGA_PRACTICE | alongamento-lateral-em-pe | Alongamento lateral em pe | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| YOGA_PRACTICE | cachorro-adaptado-parede | Cachorro olhando para baixo adaptado | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| YOGA_PRACTICE | fluxo-funcional-energia-leve | Fluxo funcional para energia leve | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| YOGA_PRACTICE | gato-vaca-suave | Gato-vaca suave | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| YOGA_PRACTICE | guerreiro-dois-leve | Guerreiro II leve | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| YOGA_PRACTICE | mobilidade-de-ombros-yoga | Mobilidade de ombros | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| YOGA_PRACTICE | mobilidade-de-quadril-yoga | Mobilidade de quadril | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| YOGA_PRACTICE | postura-facil-atencao-corpo | Postura facil com atencao no corpo | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| YOGA_PRACTICE | respiracao-para-desacelerar-yoga | Respiracao para desacelerar | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| YOGA_PRACTICE | respiracao-sentada-tranquila | Respiracao sentada tranquila | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| YOGA_PRACTICE | ritual-sono-yoga-leve | Ritual de sono com yoga leve | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| YOGA_PRACTICE | sequencia-energia-leve | Sequencia curta de energia leve | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| YOGA_PRACTICE | sequencia-longas-horas-sentado | Sequencia curta para longas horas sentado | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| YOGA_PRACTICE | sequencia-fim-de-dia | Sequencia de fim de dia | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| YOGA_PRACTICE | torcao-em-cadeira | Torcao em cadeira | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| YOGA_PRACTICE | torcao-sentada-suave | Torcao sentada suave | PRE_REFERENCE_CATALOG | O exercicio possui mapeamento, mas ainda faltam arquivos fisicos obrigatorios. | ref_001_mov_01 |
| YOGA_PRACTICE | yoga-funcional-foco-trabalho | Yoga funcional para foco no trabalho | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| YOGA_PRACTICE | yoga-restaurativa-pausa-trabalho | Yoga restaurativa para pausa no trabalho | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |
| YOGA_SEQUENCE | yoga-depois-horas-sentado | Yoga leve para depois de muitas horas sentado | PRE_REFERENCE_CATALOG | O exercicio possui mapeamento, mas ainda faltam arquivos fisicos obrigatorios. | ref_001_mov_01 |
| YOGA_SEQUENCE | yoga-foco-trabalho | Yoga para foco no trabalho | PRE_REFERENCE_CATALOG | Ainda nao existe correspondencia confirmada entre este exercicio e o banco de imagens de referencias. | - |

## Itens aguardando validacao humana

| Area | ID/slug | Titulo | REFs candidatas | Imagens encontradas |
| --- | --- | --- | --- | --- |
| EXERCISE_INSTRUCTION | gato-vaca-escapular | Gato-vaca escapular | gato-vaca-escapular | 0 |
| EXERCISE_INSTRUCTION | ref_011_mov_02 | Malasana | ref_004_mov_03 | 6 |
| EXERCISE_INSTRUCTION | ref_004_mov_03 | Postura da guirlanda / agachamento yogue | ref_004_mov_03 | 6 |
| EXERCISE_INSTRUCTION | ref_011_mov_25 | Postura de lotus | ref_011_mov_25 | 5 |
| STRETCHING_EXERCISE | gato-vaca-escapular | Gato-vaca escapular | gato-vaca-escapular | 0 |

## Fila tecnica por impacto

| Prioridade | Mapeamento | Bloqueio | Arquivos faltantes | Consumidores desbloqueados |
| --- | --- | --- | --- | --- |
| 1 | EXERCISE_INSTRUCTION::ref_004_mov_03 | PENDING_VISUAL_APPROVAL | 0 | EXERCISE_INSTRUCTION::ref_011_mov_02 |
| 2 | EXERCISE_INSTRUCTION::ref_008_mov_05 | MISSING_REQUIRED_FILES | 5 | EXERCISE_INSTRUCTION::ref_011_mov_10 |
| 3 | EXERCISE_INSTRUCTION::ref_011_mov_10 | MISSING_REQUIRED_FILES | 5 | EXERCISE_INSTRUCTION::ref_008_mov_05 |
| 4 | EXERCISE_INSTRUCTION::ref_011_mov_25 | PENDING_ANATOMY_APPROVAL | 0 | - |
| 5 | EXERCISE_INSTRUCTION::ref_011_mov_02 | PENDING_VISUAL_APPROVAL | 0 | - |
| 6 | EXERCISE_INSTRUCTION::gato-vaca-escapular | PENDING_VISUAL_APPROVAL | 1 | - |
| 7 | STRETCHING_EXERCISE::gato-vaca-escapular | PENDING_VISUAL_APPROVAL | 1 | - |
| 8 | EXERCISE_INSTRUCTION::ref_011_mov_21 | MISSING_REQUIRED_FILES | 5 | - |
| 9 | EXERCISE_INSTRUCTION::ref_001_mov_01 | MISSING_REQUIRED_FILES | 6 | - |
| 10 | EXERCISE_INSTRUCTION::ref_001_mov_03 | MISSING_REQUIRED_FILES | 6 | - |
| 11 | YOGA_SEQUENCE::yoga-depois-horas-sentado | MISSING_REQUIRED_FILES | 6 | - |
| 12 | EXERCISE_INSTRUCTION::ref_003_mov_12 | MISSING_REQUIRED_FILES | 6 | - |
| 13 | YOGA_PRACTICE::torcao-sentada-suave | MISSING_REQUIRED_FILES | 6 | - |
| 14 | STRETCHING_EXERCISE::rotacao-toracica-sentada | MISSING_REQUIRED_FILES | 6 | - |
| 15 | EXERCISE_INSTRUCTION::rotacao-toracica-sentada | MISSING_REQUIRED_FILES | 6 | - |
| 16 | EXERCISE_INSTRUCTION::ref_004_mov_07 | MISSING_REQUIRED_FILES | 7 | - |
| 17 | EXERCISE_INSTRUCTION::ref_005_mov_05 | MISSING_REQUIRED_FILES | 7 | - |
| 18 | EXERCISE_INSTRUCTION::ref_004_mov_17 | MISSING_REQUIRED_FILES | 7 | - |
| 19 | EXERCISE_INSTRUCTION::ref_004_mov_14 | MISSING_REQUIRED_FILES | 7 | - |
| 20 | EXERCISE_INSTRUCTION::ref_004_mov_10 | MISSING_REQUIRED_FILES | 7 | - |
| 21 | EXERCISE_INSTRUCTION::ref_005_mov_06 | MISSING_REQUIRED_FILES | 7 | - |

## Como atualizar depois de novas referencias

1. Adicione as novas imagens fisicas em `public/instructional-images` e atualize o mapeamento de equivalencias quando surgir um novo par catalogo/REF.
2. Rode `npm run catalog:reconcile`.
3. Revise este relatorio e o CSV `docs/exercicios-arquivados-sem-imagem.csv`.
4. Rode `npm run catalog:sync` para refletir os novos status no banco local.
