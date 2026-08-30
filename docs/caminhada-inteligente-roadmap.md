# Caminhada Inteligente - Roadmap

## Implementado nesta sprint

- Catalogo com 9 tipos de caminhada e recomendacao contextual por check-in.
- Modo GPS via WebView/navegador e fallback obrigatorio para temporizador.
- Metricas de distancia, ritmo, velocidade, tempo em movimento e calorias estimadas.
- Pausa automatica por baixa velocidade quando configurada.
- Historico, metas, heatmap, graficos, recordes pessoais e conquistas saudaveis.
- Privacidade por atividade, ocultacao de inicio/fim da rota e compartilhamento de resumo sem localizacao.
- Rotas favoritas salvas quando ha pontos GPS suficientes.
- Checks reproduziveis para calculos, fluxo autenticado de caminhada e configuracao mobile de GPS/WebView.

## Verificacao local da sprint

- `npm.cmd run test:walking`: calculos puros, recomendacoes, validacao e pausa automatica.
- `npm.cmd run test:walking:auth`: fluxo autenticado com paginas, sessao GPS, fallback sem GPS, metas, favoritas, historico, resumo, check-in e exclusao.
- `npm.cmd run test:mobile-gps`: permissoes Android/iOS, atalho Caminhada e WebView com `geolocationEnabled`.
- `npm.cmd run typecheck`, `npm.cmd run build`, `npm.cmd run test:smoke` e `cd mobile && npm.cmd run typecheck`.

## Roadmap documentado

- Feed social, clubes e eventos de caminhada.
- Integracao com smartwatch e provedores externos de mapa.
- Compartilhamento de localizacao em tempo real com contato de seguranca via WhatsApp/SMS.
- IA contextual mais profunda com planejamento semanal e ajuste por padroes historicos.
- HealthKit iOS real para exportacao/leitura de atividades quando houver build iOS dedicado.
