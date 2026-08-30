# W9 — Plano de deploy, backup, restauração e rollback

Este é um plano operacional. **Não autoriza deploy.** A RC permanece local até autorização humana explícita e fechamento de P1-EXT-001 a P1-EXT-004.

## Pré-condições obrigatórias

1. `npm audit` online sem vulnerabilidade crítica;
2. QA real em Android/iOS, leitores de tela, WebView e rede degradada;
3. ambiente de staging com PostgreSQL, segredos, HTTPS, e-mail e observabilidade;
4. revisão Jurídico/Privacidade/Conteúdo;
5. backup consistente, criptografado e restaurado em ensaio;
6. aprovação do responsável pela release e janela de mudança;
7. nenhuma P0 e somente P1 externa formalmente aceita.

## Deploy em staging

1. congelar a árvore da RC e registrar commit/tree, lockfile e versão;
2. criar backup consistente do banco de staging e registrar hash/horário;
3. executar `config:check:staging`;
4. converter/validar o schema e migrations para PostgreSQL em branch de infraestrutura;
5. executar dry-run em cópia representativa;
6. comparar tabelas, IDs, contagens, nulos, chaves e amostras;
7. aplicar apenas a fase **EXPAND**;
8. executar seeds idempotentes de fundações, conteúdo e mídia governada;
9. subir o código com todas as flags de produção desligadas;
10. validar `/api/system/health`, autenticação, check-in, agenda, foco, Corpo/Mente, atividade, privacidade e admin;
11. executar matriz desktop/mobile/PWA/WebView/Android/iOS;
12. observar erro, latência, jobs, banco e logs durante a janela definida;
13. ativar `NAV_V2` primeiro em segmento interno; demais flags somente em rollout próprio.

## Deploy em produção

1. repetir backup/restore imediatamente antes da janela;
2. confirmar que staging está estável e que o artefato é idêntico;
3. aplicar migrations expansivas;
4. implantar com tráfego restrito/canário;
5. executar smoke de leitura e escrita com conta de teste;
6. ampliar tráfego por etapas;
7. manter `DEVICE_CONNECT`, provedores externos, vídeo, social, monetização e B2B real desligados;
8. registrar decisão, responsável, horários, métricas e resultado.

## Critérios de aborto

- migration, integridade ou FK falha;
- perda/divergência de contagem sem explicação;
- autenticação/autorização quebrada;
- conflito de agenda aceito;
- duplicidade de atividade/job;
- dado sensível em log/notificação/campanha;
- mídia sem licença publicada;
- erro P0 ou regressão crítica de acessibilidade;
- healthcheck instável ou taxa de erro acima do limite aprovado.

## Rollback de código

1. desligar flags alteradas;
2. interromper expansão de tráfego;
3. voltar ao artefato anterior;
4. manter tabelas/colunas expansivas sem uso durante o ciclo de compatibilidade;
5. repetir smoke e monitoramento antes de reabrir tráfego.

## Rollback de dados

1. bloquear escrita;
2. preservar logs/checkpoints da falha;
3. restaurar o backup pré-release em instância isolada;
4. validar hash, integridade, FKs, contagens e amostras;
5. promover a restauração conforme o runbook do provedor;
6. reabrir somente após smoke completo;
7. não executar `DROP`, contração ou script destrutivo automático.

## Retirada de conteúdo/mídia

- suspender `MediaPublication`;
- marcar o asset `SUSPENDED`/`EXPIRED`;
- registrar motivo, canais e locais de uso;
- retirar de UI/API sem apagar o arquivo ou a trilha;
- substituir somente após nova licença e aprovação.

## Evidência local já produzida

`test:w8:database`:

- 9 migrations aplicadas em banco vazio;
- 85 tabelas representativas;
- 1.937 linhas verificadas;
- backup e restauração com SHA-256 idênticos;
- SHA-256 do ensaio final: `1bf13027fa94abbc787f596ce45a3fd91830aee9960410e1816d6848d10a09b5`;
- `integrity_check=ok`;
- zero violações de FK;
- ensaio realizado em cópias temporárias removidas ao final.

O backup externo W0 permanece em:

`C:\Users\rodrigo.filho\Documents\Pausa AI Backups\W0_pre_execution_20260725_154102`
