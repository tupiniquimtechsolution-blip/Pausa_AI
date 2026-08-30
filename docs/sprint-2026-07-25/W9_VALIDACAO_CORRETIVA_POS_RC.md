# W9 — Validação corretiva pós-RC

Data: 28/07/2026
Branch: `codex/atualizacao-25-07-2026`
Decisão: **GO para a RC corretiva; NO-GO para produção**

## Escopo

Esta rodada reabriu temporariamente a W9 para corrigir e validar regressões encontradas após a montagem da RC. Não houve merge, push, deploy nem início da bateria de imagens REF 018–038.

## Defeitos tratados

| ID | Defeito | Correção | Evidência |
|---|---|---|---|
| BUG-AUTH-001 | navegação podia trocar a origem atual por `localhost` | redirecionamentos do navegador agora são relativos; origem local/LAN vem da requisição confiável | `test:auth:regression` em `localhost` e `127.0.0.1` |
| BUG-AUTH-002 | recuperação da conta MASTER sem validação completa | fluxo validado em cópia isolada: token único/expirável, revogação das sessões e preservação do papel | `test:auth:regression`; banco real não alterado |
| BUG-AUTH-003 | credencial inválida recarregava a página e apagava os campos | envio JSON com estados claros; e-mail preservado e somente senha limpa; fallback HTML mantido | componente `LoginForm` e gate de regressão |
| BUG-UI-001 | colisões entre texto e fundo nos aliases de tema | tokens semânticos e guardas de compatibilidade para classes legadas | `test:themes` |
| BUG-UI-002 | HUD com cores fixas e discrepantes entre temas | navegação, banners, notificações, toast e cartões migrados para tokens do app | `test:themes` e inspeção visual |
| BUG-UI-003 | campos, badges e alertas com contraste inconsistente | superfícies, texto, placeholder, estado desabilitado e contraste de destaque padronizados | `test:themes` e `test:w8` |

## Autenticação

- Login aprimorado envia JSON no mesmo domínio, preserva o e-mail em erro e apresenta carregamento e mensagens específicas.
- O fallback sem JavaScript continua funcional e usa apenas `Location` relativo.
- Links públicos usam o `APP_BASE_URL` canônico; navegação interna nunca depende dele.
- Cabeçalhos encaminhados não confiáveis continuam ignorados.
- A recuperação MASTER foi exercitada somente em cópia isolada. No banco real, o usuário deve escolher a senha em `/esqueci-senha`; nenhuma senha foi criada, registrada ou redefinida pelo seed.

## HUD, temas e contraste

- Os nove temas possuem contratos automáticos de contraste entre texto/fundo, texto secundário/superfície e texto/destaque.
- Em temas escuros, as superfícies permanecem escuras e o texto principal é claro.
- Componentes reutilizáveis usam tokens `app-background`, `app-surface`, `app-card`, `app-text`, `app-muted`, `app-accent` e `app-accent-contrast`.
- Foram corrigidos header, sidebar, navegação inferior, banners de progresso, alertas, preferências, notificações, toast, cartões, botões e campos.

## Resultado do gate W0–W9

| Evidência | Resultado |
|---|---|
| Gate integral | **25/25 etapas aprovadas** |
| Duração | 419,2 s |
| Build de produção | aprovado; 122/122 páginas geradas |
| Migrations | 9/9 íntegras |
| Banco restaurado | 85 tabelas; 1.953 linhas representativas; 0 violações de FK |
| Hash do backup/restauração | `86dab03e791c086564345e4f2e3705afe6e2a3357825582067ce33b2870b0255` |
| Auditoria de botões | 32/32 contratos em 20 arquivos |
| Regressão de autenticação | localhost, origem alternativa, sessão, onboarding, rate limit, recuperação e RBAC aprovados |
| Temas | 9/9 contratos aprovados |

## Validação interativa

- Login válido foi validado em origem alternativa sem troca para `localhost`.
- Tema escuro foi verificado em login e dashboard, em desktop e viewport móvel.
- Header, sidebar, navegação inferior, cartões, campos e botão principal mantiveram fundo/texto compatíveis.
- Não foi identificado overflow no viewport móvel testado.

## Dependências e risco residual

A auditoria online registrou **0 vulnerabilidades críticas e 3 altas** na cadeia de produção:

- atualização compatível disponível para Next.js;
- correção de Sharp/libvips exige atualização principal e teste de regressão;
- PostCSS acompanha a correção do ecossistema Next.js.

Nenhuma atualização automática forçada foi aplicada nesta rodada para não ampliar o escopo da RC sem uma validação própria. Dispositivo físico, infraestrutura, auditoria online final e revisão legal permanecem dependências externas.

## Decisão

A W9 retorna a **GO para a RC corretiva local** porque autenticação, HUD, temas, banco, build e os 25 gates passaram. Produção permanece em **NO-GO** até a correção/aceite das dependências altas e o fechamento das validações externas.
