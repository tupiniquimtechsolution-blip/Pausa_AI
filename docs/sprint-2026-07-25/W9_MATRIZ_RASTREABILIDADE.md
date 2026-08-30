# W9 — Matriz completa de rastreabilidade

Fonte: Documentos 0, 1, 2 e 9 do Sprint Mestre 25/07/2026.
Legenda: **implementado** = disponível no núcleo local; **flag** = preparado e desligado; **pesquisa** = não prometido como capacidade; **externo** = depende de evidência/terceiro e bloqueia produção, não a montagem da RC.

## CORR-001 a CORR-058 e CORR-008A

| ID | Entrega e estado RC | Implementação principal | Evidência |
| --- | --- | --- | --- |
| CORR-001 | Implementado — conflito de horários | `lib/scheduling/reservation-service.ts`, reservas e mutex | `test:w2:gate` (concorrência `200/409`) |
| CORR-002 | Implementado — voz com permissão/fallback | `components/smart-input.tsx`, capacidades | `test:w2`, `test:foundations:gate` |
| CORR-003 | Implementado — câmera/galeria/fallback | `components/smart-input.tsx`, capacidades | `test:w2`, `test:buttons` |
| CORR-004 | Implementado — settings e revalidação | bridge móvel + `PlatformCapabilityProvider` | `test:mobile-gps`, `test:w2` |
| CORR-005 | Pesquisa — sem promessa uniforme de background mic | matriz de capacidades retorna parcial/manual/indisponível | `test:foundations`, P1-EXT-002 |
| CORR-006 | Implementado — ações no mobile web | `components/ui.tsx` e correções de handlers | `test:buttons`, `test:w2:gate` |
| CORR-007 | Implementado — Corpo simplificado | `/app/corpo`, biblioteca orientada a dados | `test:w3`, `test:w4` |
| CORR-008 | Implementado — intensidade inteligente | `lib/recommendations/engine.ts` | `test:w5` |
| CORR-008A | Implementado — áudio opt-in com texto | `components/accessible-guidance.tsx` | `test:w5`, `test:w8` |
| CORR-009 | Implementado — nomenclatura canônica | pilares e aliases legados | `test:w3:gate` |
| CORR-010 | Implementado — cinco pilares | `components/pillar-navigation.tsx` | `test:w3`, `test:w3:gate` |
| CORR-011 | Implementado — submenu expansível acessível | navegação por foco/Escape/clique externo | `test:w3:gate` |
| CORR-012 | Implementado — Categoria → Circuito → Movimento | models/serviço W4 | `test:w4` |
| CORR-013 | Implementado — textos manuais removidos | páginas Corpo e gate de conteúdo | `test:w4` |
| CORR-014 | Implementado — recomendação automática | serviço central W5 | `test:w5` |
| CORR-015 | Implementado — Agenda/Rotina unificadas na experiência | pilar Rotina, agenda e reservas | `test:w2:gate`, `test:w3:gate` |
| CORR-016 | Implementado — Hoje dentro de Rotina | `/app/rotina/hoje` | `test:w3:gate` |
| CORR-017 | Implementado — contraste da Rotina | tokens semânticos | `test:w8` (WCAG AA) |
| CORR-018 | Implementado — Perfil simplificado | `/app/perfil` | `test:w3:gate` |
| CORR-019 | Implementado — Histórico no Perfil | `/app/perfil/historico` + alias | `test:w3:gate` |
| CORR-020 | Implementado — Conquistas no Perfil | `/app/perfil/conquistas` | `test:w3:gate` |
| CORR-021 | Implementado — Configurações próprias | `/app/perfil/configuracoes` | `test:w3:gate` |
| CORR-022 | Implementado no núcleo — integrações/capacidades | settings, providers e Device Connect por flag | `test:foundations`, `test:w6`, `test:w7` |
| CORR-023 | Implementado — Modo Foco | máquina de estados, API idempotente | `test:w2:gate` |
| CORR-024 | Implementado conforme capacidade — Sem Redes | política e estados real/manual/parcial | `test:w2` |
| CORR-025 | Implementado — nomes técnicos removidos | política de interface por plataforma | `test:w2` |
| CORR-026 | Implementado — auditoria de botões | componente-base + scanner | `test:buttons` |
| CORR-027 | Implementado — check-in interpretado | schema ampliado + motor W5 | `test:w5` |
| CORR-028 | Implementado — justificativa | decisão persistida e explicável | `test:w5` |
| CORR-029 | Implementado — texto/áudio controlável | guidance acessível | `test:w5`, `test:w8` |
| CORR-030 | Implementado — motor único | `lib/recommendations/*` | `test:w5` |
| CORR-031 | Implementado — sugestão/alerta/restrição/bloqueio | regras versionadas e auditáveis | `test:w5` |
| CORR-032 | Implementado — acompanhamento por check-in | `NotificationPlan` | `test:w5` |
| CORR-033 | Implementado — orquestração central | recomendações + política de notificações | `test:w5` |
| CORR-034 | Preparado — tipos adicionais sem abuso | tipos editoriais e flag; áudio depende de plataforma | `test:w5`, P1-EXT-002 |
| CORR-035 | Implementado — prevenção de fadiga | `lib/notifications/policy.ts` | `test:w2:gate`, `test:w5` |
| CORR-036 | Implementado — privacidade lockscreen | `NotificationPolicy.privacy` | `test:w2:gate` |
| CORR-037 | Implementado — Progresso | `/app/progresso`, resumo 30 dias | `test:w5`, `test:w3:gate` |
| CORR-038 | Implementado — categorias dinâmicas sem vazios | W4 + resumo de progresso | `test:w4`, `test:w5` |
| CORR-039 | Implementado — progressão não depende só de XP | motor usa sinais e segurança | `test:w5` |
| CORR-040 | Implementado — linguagem não punitiva | conteúdo e cancelamento sem punição | `test:w2`, `test:w5` |
| CORR-041 | Implementado — Design Tokens | `app/globals.css`, themes | `test:foundations`, `test:w8` |
| CORR-042 | Implementado — nove temas oficiais | catálogo central | `test:foundations`, `test:w8` |
| CORR-043 | Implementado — troca/persistência no primeiro toque | `components/preferences.tsx` | `test:foundations:gate` |
| CORR-044 | Implementado local — contraste automatizado | razões WCAG AA por tema | `test:w8`; aparelho real P1-EXT-002 |
| CORR-045 | Implementado local — baseline global A11y | foco, teclado, toque, redução de movimento, mídia acessível | `test:w3:gate`, `test:w8`; leitor real P1-EXT-002 |
| CORR-046 | Implementado — miniaturas Mente | componente compartilhado W4 | `test:w4` |
| CORR-047 | Implementado — card compartilhado | `components/content-library-browser.tsx` | `test:w4` |
| CORR-048 | Implementado — Biblioteca Mestre de Mídia | models, API e governança W7 | `test:w7` |
| CORR-049 | Governado — voz e linguagem | `docs/tom-de-voz.md`, `VoiceScript`, licença de voz | `test:w7`; aprovação editorial externa |
| CORR-050 | Implementado — Biblioteca de Roteiros | `VoiceScript` versionado/localizado | `test:w7` |
| CORR-051 | Implementado — templates/variáveis | `templateKey` e `variablesJson` | `test:w7` |
| CORR-052 | Implementado — Biblioteca de Áudio | capabilities e mídia própria | `test:w7` |
| CORR-053 | Implementado — Biblioteca Visual | MediaAsset/relações/localizações | `test:w7` |
| CORR-054 | Implementado — vídeo oculto sem aprovação | API retorna somente publicado | `test:w7` |
| CORR-055 | Governado — guia técnico/licenciamento | relatório W7 + metadados obrigatórios | `test:w7`, `test:w8` |
| CORR-056 | Preparado — pipeline de produção/revisão | `VideoProduction` e aprovações; nova bateria fora da RC | `test:w7` |
| CORR-057 | Preparado/flag — sete catálogos | i18n central, só `pt-BR` público | `test:foundations`; QA P1-EXT-002 |
| CORR-058 | Implementado no baseline local — tema/layout | tokens e fallback controlado | `test:w8`; QA multilíngue real P1-EXT-002 |

## Requisitos canônicos e aliases

| IDs cobertos | Estado | Implementação | Teste/gate |
| --- | --- | --- | --- |
| `REQ-SCHEDULE-001`, `REQ-SCHEDULING-001`, `REQ-ROUTINE-001`, `REQ-ROUTINE-TODAY-001` | Implementado | reservas transacionais, mutex, Rotina/Hoje | W2/W3 |
| `REQ-PERMISSION-001`, `REQ-PERMISSION-VOICE-001`, `REQ-PERMISSION-IMAGE-001`, `REQ-APP-SETTINGS-001`, `REQ-CAPABILITY-001` | Implementado conforme plataforma | central de capacidades, bridge e revalidação | W1/W2 |
| `REQ-UI-ACTION-001`, `REQ-FOCUS-001`, `REQ-NETWORK-FREE-001` | Implementado | UI base, timer, política Sem Redes | W2 |
| `REQ-NAV-001`, `REQ-NAV-ROOT-001`, `REQ-NAV-EXPAND-001`, `REQ-NAV-NAMING-001` | Implementado | cinco pilares, submenu e aliases | W3 |
| `REQ-BODY-UI-001`, `REQ-CARD-001`, `REQ-CONTENT-TAXONOMY-001`, `REQ-CONTENT-TAX-001` | Implementado | bibliotecas Corpo/Mente e card-base | W4 |
| `REQ-PROFILE-001`, `REQ-SETTINGS-001`, `REQ-INTEGRATION-HUB-001` | Implementado no núcleo | Perfil e Configurações; conectores inativos sem credencial | W1/W3/W6/W7 |
| `REQ-CHECKIN-INTELLIGENCE-001`, `REQ-RECOMMENDATION-001`, `REQ-RECOMMEND-001`, `REQ-RECOMMENDATION-EXPLAIN-001`, `REQ-RECOMMENDATION-SAFETY-001`, `REQ-RECOMMENDATION-AUDIO-001` | Implementado | motor explicável versionado e guidance acessível | W5 |
| `REQ-NOTIFICATION-001`, `REQ-NOTIFY-001`, `REQ-NOTIFICATION-ORCHESTRATOR-001`, `REQ-NOTIFICATION-FATIGUE-001`, `REQ-NOTIFICATION-PRIVACY-001` | Implementado | planos e política central | W2/W5 |
| `REQ-PROGRESS-001`, `REQ-PROGRESSION-UI-001`, `REQ-PROGRESSION-SAFETY-001`, `REQ-GAMIFICATION-TONE-001` | Implementado | resumo, categorias e regras não punitivas | W4/W5 |
| `REQ-THEME-001`, `REQ-THEME-CATALOG-001`, `REQ-THEME-SWITCH-001`, `REQ-A11Y-001` | Implementado local | tokens, nove temas, persistência, A11y | W1/W8 |
| `REQ-I18N-001` | Preparado/flag | sete catálogos, somente `pt-BR` validado | W1; P1-EXT-002 |
| `REQ-RBAC-001` | Implementado | seis papéis e autorização no servidor | W1 |
| `REQ-INFRA-001`, `REQ-LGPD-001` | Implementado local / produção condicionada | logs, rate limit, saúde, backup, exportação, exclusão e retenção | W1/W8; P1-EXT-001/003/004 |
| `REQ-DATA-001` | Externo condicionado | SQLite local validado; PostgreSQL exige staging fornecido | P1-EXT-003 |
| `REQ-PAUSA-ACTIVITY-001`, `REQ-PAUSA-GPS-001`, `REQ-PAUSA-METRICS-001`, `REQ-PAUSA-MAPS-001` | Implementado | atividade própria, GPS, métricas e provider substituível | W6 |
| `REQ-PAUSA-HEALTH-001`, `REQ-PAUSA-DEVICE-001`, `REQ-PAUSA-DATAVAULT-001` | Núcleo implementado; dispositivo real por flag | Health Profile, consentimento, origem, Device Connect | W6/W8 |
| `REQ-MEDIA-001` | Implementado/governado | mídia, voz, vídeo, direitos e publicação | W7/W8 |
| `REQ-MONETIZATION-001`, `REQ-B2B-001` | Preparado e desligado | flags seguras; sem cobrança e sem dashboard real exposto | W1/W5 |

## Decisões de auditoria

`AUD-CL-001` a `AUD-CL-008`, `AUD-CF-001` a `AUD-CF-008` e `AUD-GAP-001` a `AUD-GAP-008` são cobertos pelos relatórios W0–W8, pelos estados de capacidade/flag, pela governança editorial e pelos planos de deploy/rollback. Nenhum item de pesquisa, conector, idioma não validado, vídeo não aprovado ou capacidade nativa ausente é apresentado como funcional.

## Defeitos corretivos pós-RC

| ID | Estado | Implementação | Teste/gate |
| --- | --- | --- | --- |
| BUG-AUTH-001 | Fechado | redirecionamentos relativos e origem local confiável | `test:auth:regression` |
| BUG-AUTH-002 | Fechado em cópia isolada | recuperação MASTER com token, expiração, revogação e papel preservado | `test:auth:regression` |
| BUG-AUTH-003 | Fechado | login JSON, e-mail preservado, senha limpa e mensagens claras | `test:auth:regression` |
| BUG-UI-001 | Fechado | tokens semânticos e guardas para aliases de tema | `test:themes` |
| BUG-UI-002 | Fechado | HUD, banners e navegação sem cores fixas conflitantes | `test:themes` + browser local |
| BUG-UI-003 | Fechado | campos, botões, badges e alertas com contrato de contraste | `test:themes` + `test:w8` |
