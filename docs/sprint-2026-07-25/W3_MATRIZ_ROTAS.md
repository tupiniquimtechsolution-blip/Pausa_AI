# W3 — Matriz de rotas canônicas e compatibilidade

## Pilares e destinos prioritários

| Pilar | Rota canônica | Destinos prioritários |
| --- | --- | --- |
| Progresso | `/app/progresso` | visão geral, Check-in, Tendências |
| Corpo | `/app/corpo` | visão geral, Yoga, Caminhada, Mobilidade |
| Mente | `/app/mente` | visão geral, Modo Foco, Respiração |
| Rotina | `/app/rotina` | Hoje, Agenda, Rotinas |
| Perfil | `/app/perfil` | Conta, Histórico, Conquistas, Configurações |

## Rotas canônicas adicionadas

| Rota | Origem ou responsabilidade | Estado |
| --- | --- | --- |
| `/app/progresso` | dashboard anteriormente exposto em `/app` | ativa |
| `/app/corpo` | conteúdo anteriormente exposto em `/app/movimento` | ativa |
| `/app/corpo/caminhada` | Caminhada Inteligente | ativa |
| `/app/corpo/caminhada/configurar` | configuração de caminhada | ativa |
| `/app/corpo/caminhada/andamento` | sessão em andamento | ativa |
| `/app/corpo/caminhada/historico` | histórico e metas de caminhada | ativa |
| `/app/corpo/caminhada/resumo` | resumo da sessão | ativa |
| `/app/corpo/yoga/[slug]` | detalhe de prática de Yoga | ativa |
| `/app/mente` | práticas anteriormente expostas em `/app/missoes` | ativa |
| `/app/mente/foco` | Modo Foco | ativa |
| `/app/rotina/hoje` | visão operacional Hoje | ativa |
| `/app/perfil/historico` | histórico geral | ativa |
| `/app/perfil/conquistas` | galeria de conquistas | ativa |
| `/app/perfil/configuracoes` | aparência, idioma, comunicação e permissões | ativa |

## Compatibilidade legada

| Rota legada | Destino canônico | Estratégia |
| --- | --- | --- |
| `/app` | `/app/progresso` | alias de conteúdo preservado |
| `/app/movimento` | `/app/corpo` | alias de conteúdo preservado |
| `/app/movimento/caminhada/*` | `/app/corpo/caminhada/*` | aliases preservados |
| `/app/missoes` | `/app/mente` | alias de conteúdo preservado |
| `/app/historico` | `/app/perfil/historico` | alias de conteúdo preservado |
| `/app/yoga/[slug]` | `/app/corpo/yoga/[slug]` | alias preservado |

Os aliases não aparecem na navegação principal. Eles existem apenas para deep links, favoritos, WebViews instaladas e versões anteriores do aplicativo.

## Regra contra rotas órfãs

- toda entrada fixa possui rota canônica;
- todo item de submenu possui destino testado;
- links internos usam rotas canônicas;
- aliases são declarados em `lib/navigation/pillars.ts`;
- o gate autenticado percorre as rotas canônicas em desktop, mobile web e Android WebView;
- remoções futuras exigem telemetria, changelog, redirect e aprovação de release.
