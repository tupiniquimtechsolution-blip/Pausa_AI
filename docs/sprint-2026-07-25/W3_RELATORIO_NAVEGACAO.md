# W3 — Relatório de navegação e experiência

Data do gate: 26/07/2026
Decisão: **GO**

## Escopo atendido

- PRD-NAV-001 a PRD-NAV-005;
- REQ-NAV-ROOT-001, REQ-NAV-EXPAND-001 e REQ-NAV-NAMING-001;
- CORR-007, CORR-009, CORR-010, CORR-011, CORR-012, CORR-013, CORR-037, CORR-038, CORR-046 e CORR-047;
- AUD-CL-005, AUD-CF-002 e AUD-CF-003.

## Cinco pilares

A navegação principal possui somente:

1. Progresso;
2. Corpo;
3. Mente;
4. Rotina;
5. Perfil.

Yoga e Modo Foco permanecem acessíveis em submenus prioritários, sem ocupar posição fixa. “Hoje” é uma visão interna de Rotina. Histórico, Conquistas e Configurações ficam em Perfil.

## Comportamento do menu

- selecionar um pilar revela primeiro seu submenu contextual;
- somente um submenu permanece aberto;
- selecionar novamente o mesmo pilar fecha o submenu;
- clique ou toque fora fecha o submenu;
- `Escape` fecha o submenu e devolve o foco ao acionador;
- o primeiro destino recebe foco quando o submenu abre;
- botões expõem `aria-expanded`, `aria-controls`, `aria-haspopup` e estado atual;
- em telas estreitas, o submenu usa painel complementar vinculado acima da barra;
- quando há largura, os destinos prioritários são apresentados em faixa horizontal;
- cada pilar apresenta três ou quatro destinos, evitando transformar o menu em catálogo.

## Nomenclatura e rotas

- Hoje → Progresso;
- Movimento → Corpo;
- Missões → Mente;
- Histórico → Perfil / Histórico;
- links internos, atalhos de caminhada, recomendações, filtros e retorno de práticas foram atualizados;
- rotas legadas permanecem como aliases compatíveis, sem conteúdo duplicado;
- novas páginas canônicas de Foco, Conquistas e Configurações foram adicionadas.

Consulte `W3_MATRIZ_ROTAS.md` para a matriz completa.

## Rollout

- flag: `NAV_V2`;
- migration: `20260725230000_w3_navigation_rollout`;
- ativa em `local` e `test`;
- `staging` e `production` permanecem desativados até a autorização de rollout;
- com a flag desativada, os cinco pilares continuam disponíveis como links diretos, preservando recuperação segura.

## Gate e evidências

| Verificação | Resultado |
| --- | --- |
| `npm run test:w3` | passou |
| `npm run test:w3:gate` | passou |
| `npm run typecheck` | passou |
| `npm run lint` | passou sem avisos |
| build Next de produção isolado | passou, 100 rotas |
| desktop web autenticado | 11 rotas canônicas sem quebra |
| mobile web autenticado | 11 rotas canônicas sem quebra |
| Android WebView simulado | 11 rotas canônicas sem quebra |
| rotas legadas autenticadas | 4 rotas verificadas, todas `200` |
| teste interativo desktop | abrir, alternar, segundo toque, clique externo e `Escape` passaram |
| teste interativo móvel 390 × 844 | painel complementar e navegação para Hoje passaram |
| console do navegador | zero erros |

O painel móvel medido ocupou 359 px de largura em viewport de 390 px e permaneceu acima da barra inferior, preservando contexto e área de toque.

## Rollback

1. desativar `NAV_V2` no ambiente afetado;
2. manter os cinco pilares em modo de links diretos;
3. restaurar o commit anterior à W3 se houver regressão estrutural;
4. preservar aliases legados durante todo o ciclo de compatibilidade;
5. remover aliases somente em release futura com telemetria e comunicação aprovadas.

## Pendências encaminhadas

- validação em aparelhos físicos e leitores de tela reais será repetida na W8;
- ativação em staging/produção depende do gate de release;
- ampliação dos catálogos dentro dos pilares pertence à W4 e não ao menu principal.
