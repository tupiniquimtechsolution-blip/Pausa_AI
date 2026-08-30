# W6 — Pausa Activity, GPS, métricas, Saúde, dispositivos e Data Vault

Data de fechamento técnico: 26/07/2026  
Status: gate técnico aprovado; sem merge ou publicação

## Resultado

O Pausa AI agora possui um núcleo próprio de atividades que funciona sem conta externa ou conector:

- caminhada;
- corrida;
- exercício livre;
- sessão Pausa AI.

O fluxo cobre início, pausa, retomada, finalização, histórico e sync idempotente de lotes temporariamente offline.

## GPS, rotas e métricas

- pontos GPS guardam coordenadas, horário, precisão e altitude;
- pontos inválidos, fora de ordem, com baixa precisão ou velocidade implausível são rejeitados com motivo;
- distância, tempo total, tempo em movimento, pausas, velocidade média, ritmo e elevação são calculados pelo motor próprio `pausa-metrics-2026.07.25-v1`;
- cada métrica declara `MEASURED`, `REPORTED` ou `ESTIMATED`;
- rotas são privadas por padrão;
- início e fim são ocultados por padrão;
- compartilhamento é desativado por padrão;
- o provedor de mapas é substituível, com fallback local que não exige credencial.

## Health Profile, Device Connect e Data Vault

O Health Profile recebe sono, energia, humor, estresse, ansiedade, dor, hidratação, passos, peso informado, frequência cardíaca quando disponível, recuperação e esforço percebido. Não há uso diagnóstico.

As fontes canônicas são:

```text
MANUAL
PHONE_SENSOR
PAUSA_SESSION
BLUETOOTH_DEVICE
IMPORTED_FILE
EXTERNAL_CONNECTOR
ESTIMATED
```

Fontes externas exigem consentimento ativo. Dispositivos são inicialmente `DECLARED` e só podem virar conectados após teste real; o sistema não promete sensores inacessíveis.

O Data Vault oferece:

- consentimento e revogação;
- retenção;
- exportação estruturada;
- correção por registro sucessor;
- exclusão;
- trilha de auditoria;
- origem e qualidade.

## APIs e interface

- `/app/corpo/atividade`
- `GET|POST /api/activities`
- `GET|PATCH /api/activities/:id`
- `POST /api/activities/:id/points`
- `POST /api/activities/sync`
- `GET|POST /api/health/profile`
- `GET|POST /api/devices`
- `GET|POST /api/data-vault/consents`
- `GET|PATCH|DELETE /api/data-vault`

## Gate

Comandos aprovados:

```text
npm run test:w6
npm run test:w5
npm run test:walking
npm run typecheck
npm run lint -- --quiet
npm run build
```

O teste W6 executa o ciclo completo, valida idempotência offline, filtro de GPS, tempos, métricas, privacidade de rota e auditoria, sem criar dispositivo ou conector. O build compilou 112 páginas.

## Rollback

1. Reverter o commit W6.
2. Reverter a migration `20260726055827_w6_activity_data_vault` pelo procedimento W8.
3. A implementação anterior de Caminhada permanece preservada e pode continuar operando independentemente.
