# W9 — Matrizes operacionais da Release Candidate

## 1. Botões e ações

A matriz detalhada por arquivo está em `W2_MATRIZ_BOTOES.md`. O scanner aprovou 32 controles críticos em 20 arquivos; os demais controles herdam o contrato `Button`/`SelectableButton`.

| Família | Ação | Loading/erro | Idempotência/concorrência | Evidência |
| --- | --- | --- | --- | --- |
| Autenticação | entrar, cadastrar, recuperar, sair | feedback explícito e rate limit | login/reset persistente | smoke + W8 |
| Agenda/Rotina | criar, editar, cancelar, concluir | erro de conflito identificado | mutex e reserva versionada | W2 gate |
| Foco | iniciar, pausar, retomar, reiniciar, cancelar | estado persistido | token e timer único | W2 gate |
| Permissões | voz, câmera, galeria, settings | estado real/parcial/manual | revalidação no retorno | W1/W2 |
| Check-in/recomendação | salvar, ignorar, alternativa, feedback | erro visível | decisão versionada | W5 |
| Atividade/GPS | iniciar, pausar, retomar, finalizar, sync | fallback sem GPS | `clientActivityId` e lote idempotente | W6 |
| Mídia/admin | cadastrar, aprovar, publicar, retirar | motivos de bloqueio | hash único e status transacional | W7/W8 |
| Privacidade | consentir, revogar, exportar, excluir | confirmação e no-store | rate limit de exclusão | W6/W8 |

Contrato transversal: nome acessível, `type`, foco visível, alvo mínimo de 44 px, estado desabilitado justificado e nenhuma falha silenciosa.

## 2. Papéis e permissões

| Papel | app | próprios dados | admin | papéis | flags | auditoria | criar/editar | revisar | publicar | suporte |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| MASTER | Sim | Sim | Sim | Sim | Sim | Sim | Sim | Sim | Sim | Sim |
| ADMIN | Sim | Sim | Sim | Não | Sim | Sim | Sim | Sim | Não | Sim |
| EDITOR | Sim | Sim | Não | Não | Não | Não | Sim | Não | Não | Não |
| REVIEWER | Sim | Sim | Não | Não | Não | Não | Não | Sim | Não | Não |
| SUPPORT | Sim | Sim | Não | Não | Não | Não | Não | Não | Não | Sim |
| USER | Sim | Sim | Não | Não | Não | Não | Não | Não | Não | Não |

Autorização administrativa é aplicada no servidor. A publicação de mídia ainda exige os gates técnicos/editoriais/direitos/localização, independentemente do papel.

## 3. Plataformas e capacidades

Estados: `SUPPORTED`, `REQUIRES_PERMISSION`, `PARTIAL`, `MANUAL_CONFIGURATION`, `REQUIRES_NATIVE_APP`, `UNSUPPORTED`.

| Capacidade | Desktop web | Mobile web | PWA | WebView | Android | iOS |
| --- | --- | --- | --- | --- | --- | --- |
| Microfone | Permissão | Permissão | Permissão | Parcial | Permissão | Permissão |
| Câmera | Permissão | Permissão | Permissão | Parcial | Permissão | Permissão |
| Galeria | Permissão | Permissão | Permissão | Parcial | Permissão | Permissão |
| Notificações | Permissão | Permissão | Permissão | Parcial | Permissão | Permissão |
| Localização | Permissão | Permissão | Permissão | Parcial | Permissão | Permissão |
| Localização background | Indisponível | Indisponível | Indisponível | Requer nativo | Parcial | Parcial |
| Bluetooth | Parcial | Parcial | Parcial | Requer nativo | Permissão | Permissão |
| Abrir settings | Manual | Manual | Manual | Parcial | Suportado | Suportado |
| Áudio background | Parcial | Parcial | Parcial | Requer nativo | Parcial | Parcial |
| Bloquear apps | Indisponível | Indisponível | Indisponível | Indisponível | Parcial | Parcial |

Teste automatizado cobre detecção, estados e WebView/GPS. Dispositivo real e entitlements: P1-EXT-002.

## 4. Temas e idiomas

| Tema | Estado | Contraste local | Superfície |
| --- | --- | --- | --- |
| Claro | Ativo | WCAG AA | clara |
| Escuro | Ativo | WCAG AA | escura |
| Cinza | Ativo | WCAG AA | clara |
| Monocromático | Ativo | WCAG AA | clara |
| Preto e Verde | Ativo | WCAG AA | escura |
| Preto e Amarelo | Ativo | WCAG AA | escura |
| Verde e Preto | Ativo | WCAG AA | clara |
| Amarelo e Preto | Ativo | WCAG AA | clara |
| Azul e Cinza | Ativo | WCAG AA | clara |
| Seguir sistema | Ativo | resolve Claro/Escuro | dinâmica |

| Locale | Catálogo | Público | Pendência |
| --- | --- | --- | --- |
| pt-BR | Completo no escopo central | Sim | revisão contínua |
| en | Presente | Não | QA linguístico/visual |
| es | Presente | Não | QA linguístico/visual |
| de | Presente | Não | QA linguístico/visual |
| fr | Presente | Não | QA linguístico/visual |
| it | Presente | Não | QA linguístico/visual |
| ja | Presente | Não | QA linguístico/visual |

Fallback é `pt-BR`; chave técnica ou mistura silenciosa não é exibida.

## 5. Feature flags

| Flag | Dono | Local/Test | Staging/Produção | Condição de ativação |
| --- | --- | --- | --- | --- |
| NAV_V2 | product-navigation | Ligada | Desligada | smoke/visual no staging |
| RECOMMENDATION_ENGINE_V1 | product-intelligence | Desligada | Desligada | rollout controlado e telemetria |
| SMART_NOTIFICATIONS | product-notifications | Desligada | Desligada | consentimento, job e aparelho real |
| PAUSA_ACTIVITY | product-activity | Desligada | Desligada | rollout controlado |
| DEVICE_CONNECT | platform-devices | Desligada | Desligada | SDK/bridge/aparelho aprovados |
| MEDIA_LIBRARY | content-media | Desligada | Desligada | ativos aprovados/licenciados |
| VIDEO_LIBRARY | content-media | Desligada | Desligada | vídeo `PUBLISHED` |
| EXTERNAL_MEDIA_PROVIDERS | platform-integrations | Desligada | Desligada | credencial, termos e teste ativo |
| SOCIAL_PUBLISHING | marketing | Desligada | Desligada | credencial, revisão e política |
| MONETIZATION_PREP | business | Desligada | Desligada | política comercial e cobrança aprovada |
| B2B_REAL_DASHBOARD_ENABLED | business-b2b | Desligada | Desligada | produto/dados reais e limiar de privacidade |

## 6. Integrações

| Integração | Tipo | Estado RC | Núcleo depende? | Falha/fallback |
| --- | --- | --- | --- | --- |
| Pausa Activity/Metrics/Data Vault | própria | Ativa no código | Sim, interno | funciona offline e sem conta externa |
| Mapa local por polyline | própria | Disponível | Não | substitui mapa remoto |
| OpenAI | opcional | Sem ativação obrigatória | Não | regras locais |
| Resend/e-mail | transacional | exige segredo em staging | Não para uso central | erro explícito e reset não vaza conta |
| Spotify/YouTube/Deezer | mídia externa | Desligada | Não | áudio Pausa/texto |
| Calendários externos | adapter preparado | Sem credencial ativa | Não | agenda interna |
| Health Connect/HealthKit | adapter opcional | Flag/aparelho | Não | entrada manual/Pausa Session |
| Bluetooth/fabricantes | adapter opcional | Declarado, não conectado | Não | capability real exibida |
| Redes sociais | export/publicação | autopublicação desligada | Não | card preview/draft |
| B2B real | produto externo ao usuário | Flag desligada | Não | demo claramente identificada |

## 7. Mídia, direitos e publicação

| Gate | Obrigatório | Bloqueio |
| --- | --- | --- |
| Arquivo físico, MIME/extensão, tamanho e SHA-256 | Sim | cadastro rejeitado |
| Titular e prova de licença | Sim | publicação rejeitada |
| Uso comercial, transformação, território e canal | Sim | publicação rejeitada |
| Revisão técnica | Sim | publicação rejeitada |
| Revisão editorial | Sim | publicação rejeitada |
| Revisão de direitos | Sim | publicação rejeitada |
| Localização com texto alternativo | Sim | publicação rejeitada |
| Transcrição/legenda para áudio/vídeo | Sim quando aplicável | localização não aprovada |
| Revisão de saúde | Sim para Saúde/Nutrição | publicação rejeitada |
| Propriedade e autorização de dublagem em vídeo | Sim | pipeline bloqueado |
| Retirada/licença expirada | Sim | publicação suspensa/oculta |

Referências REF 018–038 são insumos, não ativos publicados. A nova bateria de imagens será executada em fluxo separado, com nomes e pastas canônicos, depois da RC.

## 8. Matriz de testes

| Tipo | Cobertura | Comando/evidência | Estado |
| --- | --- | --- | --- |
| Unitário | cálculo, políticas, estados, validações | `test:walking`, `test:w2`, `test:w4`–`test:w8` | Passou |
| Integração | Prisma, serviços, consentimento, mídia | W4–W8 | Passou |
| Contrato | APIs, erros, flags, capacidades | foundation/W2/W3 gates | Passou |
| E2E autenticado | auth, onboarding, agenda, foco, navegação, caminhada | smoke, walking auth, W1/W2/W3 gates | Passou |
| Visual responsivo | desktop e viewport móvel | W3 gate/interativo anterior | Passou local |
| Acessibilidade | foco, toque, movimento, contraste, mídia | W8 | Passou local; leitor real externo |
| Segurança | authz, sessão, rate limit, upload, privacidade, headers | W8 | Passou local |
| Performance/confiabilidade | build, índices, idempotência, offline | build, W2/W6/W8 | Passou local |
| Migração | banco vazio + cópia representativa | `test:w8:database` | Passou |
| Backup/restore | hash, contagens, integridade, FKs | `test:w8:database` | Passou |
| Dispositivo real | Android/iOS, VoiceOver/TalkBack, rede lenta | P1-EXT-002 | Pendente externo |
| Dependências | audit offline | `npm audit --offline` | 0 conhecido; online P1-EXT-001 |

### Adendo corretivo — 28/07/2026

| Tipo | Cobertura adicional | Comando/evidência | Estado |
| --- | --- | --- | --- |
| Regressão de autenticação | origem, cookie, sessão, onboarding, rate limit, reset e RBAC | `npm run test:auth:regression` | Passou |
| Contrato visual | nove temas, superfícies, texto, destaque e guardas legadas | `npm run test:themes` | Passou |
| Visual interativo | login/dashboard, desktop/mobile, origem alternativa | inspeção local em browser | Passou local |
| Gate integral | W0–W9 com auth e temas | `npm run test:w9` | 25/25 |
| Dependências | audit online | `npm audit --omit=dev --audit-level=critical` | 0 críticas; 3 altas; produção NO-GO |
