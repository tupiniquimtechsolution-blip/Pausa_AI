# W9 — Release Candidate Pausa AI 2026.07.25 RC1

Identificador: `pausa-ai-2026.07.25-rc.1`
Branch: `codex/atualizacao-25-07-2026`
Código W0–W8: `aa5d0ae`
Data de fechamento: 26/07/2026
Decisão: **RC montada; STOP antes de merge/deploy; produção em NO-GO até fechamento das quatro P1 externas**

Revalidação corretiva: 28/07/2026
Estado atual: **GO para RC corretiva; produção permanece em NO-GO**

## Resumo executivo

As ondas W0–W8 foram implementadas e versionadas em commits coesos. A aplicação compila com Next.js 16.2.10, possui 54 páginas de arquivo, 81 rotas de API, 85 models/tabelas, 9 migrations, 55 componentes compartilhados e 81 módulos TypeScript em `lib`.

O build de produção gerou 122 unidades estáticas/dinâmicas sem erro. A RC não ativa integração, mídia, idioma, monetização ou capacidade nativa que não tenha evidência real.

## Pacote obrigatório W9

| # | Entregável | Evidência |
| ---: | --- | --- |
| 1 | Build RC | `pausa-ai-2026.07.25-rc.1`; `npm run build:w9` |
| 2 | Changelog | `CHANGELOG_RC_2026-07-25.md` |
| 3 | Arquivos criados/alterados/removidos | `W9_INVENTARIO_TECNICO.md` — 124 criados, 61 alterados, 0 removidos |
| 4 | Rotas e redirects/aliases | `W9_INVENTARIO_TECNICO.md` + `W3_MATRIZ_ROTAS.md` |
| 5 | Componentes e serviços | `W9_INVENTARIO_TECNICO.md` |
| 6 | APIs, eventos e jobs | 81 APIs; `OutboxEvent`, cron de recomendação, retenção e sync no inventário |
| 7 | Models, migrations e seeds | 85 models, 9 migrations e seeds idempotentes no inventário |
| 8 | Matriz CORR/REQ → implementação → teste | `W9_MATRIZ_RASTREABILIDADE.md` |
| 9 | Matriz de botões | `W2_MATRIZ_BOTOES.md` + consolidação operacional W9 |
| 10 | Matriz de permissões | `W9_MATRIZES_OPERACIONAIS.md` |
| 11 | Matriz plataforma/capacidade | `W9_MATRIZES_OPERACIONAIS.md` |
| 12 | Matriz temas/idiomas | `W9_MATRIZES_OPERACIONAIS.md` |
| 13 | Matriz de testes | `W9_MATRIZES_OPERACIONAIS.md` |
| 14 | Matriz de feature flags | `W9_MATRIZES_OPERACIONAIS.md` |
| 15 | Matriz de integrações | `W9_MATRIZES_OPERACIONAIS.md` |
| 16 | Matriz mídia/direitos | `W9_MATRIZES_OPERACIONAIS.md` |
| 17 | Pendências, limitações e dependências | seção “P1 externas” abaixo |
| 18 | Plano de deploy | `W9_PLANO_DEPLOY_ROLLBACK.md` |
| 19 | Plano de rollback | `W9_PLANO_DEPLOY_ROLLBACK.md` |
| 20 | Evidência backup/restore | W8 + plano W9; hash, integridade, FKs e contagens |

## Gate integral

O comando `npm run test:w9` executa, em ordem:

```text
config:check
typecheck
lint --quiet
catalog e XP
smoke autenticado
caminhada unitária/autenticada
GPS mobile
fundações e gate autenticado W1
W2, gate autenticado e botões
W3 e gate autenticado
W4, W5, W6, W7 e W8
retenção dry-run
backup/restore/migrations
build de produção
```

Resultado final registrado em 26/07/2026:

| Evidência | Resultado |
| --- | --- |
| Gate integral | **23/23 etapas aprovadas** |
| Duração total | 940,2 s |
| Typecheck e lint | Aprovados |
| Gates autenticados | Smoke legado, Caminhada, W1, W2 e W3 aprovados |
| Auditoria de botões | 32/32 controles com ação, tipo e nome acessível |
| Build RC isolado | Aprovado por `npm run build:w9` |
| Saída do build | 122/122 unidades estáticas/dinâmicas |
| Banco representativo | 85 tabelas, 1.937 linhas, integridade `ok`, 0 FKs inválidas |
| SHA-256 backup/restauração | `1bf13027fa94abbc787f596ce45a3fd91830aee9960410e1816d6848d10a09b5` |

O build W9 usa `.next-w9-build` e restaura `next-env.d.ts`/`tsconfig.json` ao terminar. Isso isola a RC de qualquer servidor de desenvolvimento já aberto em `.next`, sem interromper o ambiente local do usuário.

### Revalidação corretiva de 28/07/2026

| Evidência | Resultado |
| --- | --- |
| Gate integral ampliado | **25/25 etapas aprovadas** |
| Duração total | 419,2 s |
| Regressão de autenticação | localhost, `127.0.0.1`, sessão, onboarding, rate limit, recuperação e RBAC aprovados |
| Contratos de tema | 9/9 aprovados |
| Validação visual | login/dashboard escuros em desktop e mobile, sem contraste inválido ou overflow |
| Build | 122/122 unidades estáticas/dinâmicas |
| Banco | 85 tabelas, 1.953 linhas, integridade `ok`, 0 FKs inválidas |
| SHA-256 backup/restauração | `86dab03e791c086564345e4f2e3705afe6e2a3357825582067ce33b2870b0255` |

Os defeitos `BUG-AUTH-001` a `003` e `BUG-UI-001` a `003` foram fechados. Evidência completa em `W9_VALIDACAO_CORRETIVA_POS_RC.md`.

Verificação de dependências:

- `npm audit --omit=dev --audit-level=critical --offline`: 0 vulnerabilidades no cache;
- endpoint online: indisponível por resposta compactada inválida em duas tentativas, registrado como P1-EXT-001.

Repetição online em 28/07/2026:

- 0 vulnerabilidades críticas;
- 3 vulnerabilidades altas em Next.js/PostCSS e Sharp/libvips;
- correção compatível disponível para Next.js;
- Sharp/libvips exige atualização principal e gate de regressão;
- nenhuma correção forçada foi aplicada dentro desta RC.

## Migrations e dados

Estratégia usada: **EXPAND → VALIDATE**, sem contração.

- 9 migrations aplicadas e `prisma migrate status` atualizado;
- banco vazio criado e migrado do baseline à W8;
- cópia representativa com 85 tabelas e 1.937 linhas;
- integridade `ok`, zero FKs inválidas;
- backup e restauração comparados por SHA-256;
- hash final de backup e restauração: `1bf13027fa94abbc787f596ce45a3fd91830aee9960410e1816d6848d10a09b5`;
- IDs e contagens preservados;
- nenhuma exclusão silenciosa;
- PostgreSQL permanece condicionado a staging P1-EXT-003.

## P1 externas formais

| ID | Dependência | Impacto | Dono/fechamento |
| --- | --- | --- | --- |
| P1-EXT-001 | audit de dependências online | impede declaração final de segurança da cadeia | Engenharia; repetir e anexar JSON |
| P1-EXT-002 | aparelhos reais, leitores de tela, redes degradadas e QA de locales | impede ativação nativa/multilíngue | QA Mobile/A11y |
| P1-EXT-003 | PostgreSQL/staging/segredos/HTTPS/e-mail/monitoramento | impede deploy | Infra/DevOps |
| P1-EXT-004 | Jurídico/Privacidade/Conteúdo/Direitos | impede publicação comercial e dados sensíveis em produção | Jurídico/Editorial |

Não existe P0 aberta no gate local.

## Limitações deliberadas

- somente `pt-BR` está público;
- vídeos só aparecem quando `PUBLISHED`;
- Device Connect não declara dispositivo conectado sem teste real;
- Spotify, YouTube, Deezer e conectores de saúde são opcionais e inativos;
- social publishing, monetização e B2B real permanecem desligados;
- voz em segundo plano e bloqueio de apps usam estados parcial/manual/indisponível;
- as referências REF 018–038 não foram publicadas nem transformadas em arte nesta RC.

## Critérios de aceite da RC

| Critério | Resultado |
| --- | --- |
| Nenhuma P0 | Atendido localmente |
| Somente P1 externa formal | Atendido: quatro IDs |
| Migration em cópia representativa | Atendido para SQLite local |
| Rollback testado | Atendido em cópia isolada |
| Nenhuma área vazia exposta | Atendido por ocultação/flag |
| Nenhuma integração simulada | Atendido |
| Documentação alinhada ao código | Atendido pelas matrizes/inventário |
| Produção pronta | **Não**, depende de P1-EXT-001 a 004 |

## Decisão e parada obrigatória

A Release Candidate está consolidada para revisão humana. Conforme o Documento 9:

- não fazer merge;
- não fazer push;
- não fazer deploy;
- não ativar flags de staging/produção;
- não publicar mídia ou campanha;
- não iniciar a bateria REF 018–038 dentro desta RC.

O próximo passo autorizado é revisão/aceite humano do pacote W9. Qualquer implantação exige nova autorização explícita e fechamento das dependências externas.
