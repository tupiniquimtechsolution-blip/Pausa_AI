# VIDEO_RECONCILIATION_REPORT

Data: 2026-06-30

## Objetivo

Reconciliar os registros `InstructionalVideo` do banco local com os arquivos MP4 realmente presentes em `public/videos`, sem gerar videos, sem criar placeholders falsos e sem alterar artes finais.

## Regra usada

Para cada registro:

- `videoUrl` deve comecar com `/`.
- O caminho fisico verificado e `public/<videoUrl sem barra inicial>`.
- Se o arquivo MP4 existe fisicamente, o status correto e `READY`.
- Se o arquivo nao existe, o status correto permanece `PLANNED`.

Essa regra foi adicionada ao seed em `prisma/seed.ts` e ao comando operacional `npm.cmd run videos:reconcile`.

## Resultado no banco local

Total de registros de video: 174

MP4 fisicos encontrados: 22

Marcados como `READY`: 22

Ainda `PLANNED`: 152

Distribuicao final:

| Status | Target type | Registros |
| --- | --- | ---: |
| READY | EXERCISE_INSTRUCTION | 11 |
| READY | MISSION | 11 |
| PLANNED | EXERCISE_INSTRUCTION | 105 |
| PLANNED | MISSION | 11 |
| PLANNED | YOGA_PRACTICE | 30 |
| PLANNED | YOGA_SEQUENCE | 6 |

## Videos reconciliados como READY

| Slug | Tipo | Arquivo |
| --- | --- | --- |
| agachamento-leve-guiado | EXERCISE_INSTRUCTION | /videos/agachamento-leve-guiado.mp4 |
| alongamento-leve | EXERCISE_INSTRUCTION | /videos/alongamento-leve.mp4 |
| ativacao-leve-3-minutos | EXERCISE_INSTRUCTION | /videos/ativacao-leve-3-minutos.mp4 |
| caminhada-consciente | EXERCISE_INSTRUCTION | /videos/caminhada-consciente.mp4 |
| caminhada-consciente-curta | EXERCISE_INSTRUCTION | /videos/caminhada-consciente-curta.mp4 |
| celular-longe-da-cama | EXERCISE_INSTRUCTION | /videos/celular-longe-da-cama.mp4 |
| funcional-em-casa-iniciante | EXERCISE_INSTRUCTION | /videos/funcional-em-casa-iniciante.mp4 |
| mobilidade-de-coluna | EXERCISE_INSTRUCTION | /videos/mobilidade-de-coluna.mp4 |
| pausa-sem-tela | EXERCISE_INSTRUCTION | /videos/pausa-sem-tela.mp4 |
| reset-postural | EXERCISE_INSTRUCTION | /videos/reset-postural.mp4 |
| yoga-bolso-coluna-leve | EXERCISE_INSTRUCTION | /videos/yoga-bolso-coluna-leve.mp4 |
| missao-alongamento-leve | MISSION | /videos/missao-alongamento-leve.mp4 |
| missao-caminhada-consciente | MISSION | /videos/missao-caminhada-consciente.mp4 |
| missao-diario-de-descarrego-mental | MISSION | /videos/missao-diario-de-descarrego-mental.mp4 |
| missao-gratidao-rapida | MISSION | /videos/missao-gratidao-rapida.mp4 |
| missao-mapa-pessoal-do-agora | MISSION | /videos/missao-mapa-pessoal-do-agora.mp4 |
| missao-organizacao-de-5-minutos | MISSION | /videos/missao-organizacao-de-5-minutos.mp4 |
| missao-pausa-de-ambiente | MISSION | /videos/missao-pausa-de-ambiente.mp4 |
| missao-pausa-sem-tela | MISSION | /videos/missao-pausa-sem-tela.mp4 |
| missao-planejamento-gentil-do-dia | MISSION | /videos/missao-planejamento-gentil-do-dia.mp4 |
| missao-respiracao-4-4-6 | MISSION | /videos/missao-respiracao-4-4-6.mp4 |
| missao-yoga-de-bolso-coluna-leve | MISSION | /videos/missao-yoga-de-bolso-coluna-leve.mp4 |

## Faltantes documentados

Total faltante: 152 registros.

Amostra:

- /videos/abertura-dedos.mp4
- /videos/abertura-dedos-pe.mp4
- /videos/abertura-peito-porta.mp4
- /videos/abertura-quadril-sentado.mp4
- /videos/abraco-escapulas.mp4
- /videos/alcance-lateral-toracico.mp4
- /videos/alfabeto-tornozelo.mp4
- /videos/alongamento-biceps-parede.mp4
- /videos/alongamento-braquiorradial.mp4
- /videos/alongamento-de-pernas.mp4
- /videos/alongamento-dorsal-cadeira.mp4
- /videos/alongamento-frente-tornozelo.mp4

## Comando executado

```powershell
$env:DATABASE_URL='file:./dev.db'; npm.cmd run videos:reconcile
```

Resultado: passou, alterando 22 registros de `PLANNED` para `READY`.

## Proximos passos

- Quando novos MP4 forem produzidos, salvar em `public/videos/<slug>.mp4`.
- Rodar `npm.cmd run videos:reconcile`.
- Rodar `npm.cmd run typecheck`, `npm.cmd run build` e smoke test.
- Nao marcar `READY` manualmente sem arquivo fisico correspondente.
- A etapa de artes/videoproducao final permanece pendente para uma bateria visual posterior.
