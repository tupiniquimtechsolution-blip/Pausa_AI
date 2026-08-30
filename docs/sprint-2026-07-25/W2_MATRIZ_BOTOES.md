# W2 — Matriz de botões

Critérios comuns: `type` explícito, ação identificável, nome acessível, alvo mínimo de 44 px,
foco visível, prevenção de duplo envio e estado desabilitado comunicado.

| Área/tela | Arquivos auditados | Botões | Plataformas |
| --- | ---: | ---: | --- |
| Admin e leads | 1 | 1 | desktop web, mobile web |
| Agenda e rotina | 3 | 5 | todas |
| Exercícios e conclusão | 6 | 11 | todas |
| Navegação e preferências | 3 | 3 | todas |
| Notificações e feedback | 2 | 4 | todas |
| Caminhada | 2 | 3 | mobile web, WebView, Android, iOS |
| Componentes base e demais telas | 3 | 3 | todas |
| **Total** | **20** | **30** | **desktop, mobile, PWA/WebView, Android e iOS** |

Evidência automatizada: `npm run test:buttons`.

Os componentes `Button` e `SelectableButton` concentram alvo de toque, foco, loading,
desabilitado e rotulagem. Botões nativos remanescentes são auditados pelo script e falham o gate
quando não possuem tipo, ação ou nome acessível.
