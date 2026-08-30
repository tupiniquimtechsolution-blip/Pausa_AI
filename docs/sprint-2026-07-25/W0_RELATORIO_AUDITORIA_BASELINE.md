# RELATÓRIO W0 — AUDITORIA E BASELINE

Data do gate: 25/07/2026  
Branch: `codex/atualizacao-25-07-2026`  
Commit de origem: `5629ceb0d78446a9053aa05f82331ed190e69c9e`  
Baseline preservada: `b197d6f`  
Baseline de migrations: `caad4bc`

## 1. Documentos e autoridade

Foram localizados e lidos os Documentos 0 a 9 do pacote oficial. As versões encontradas coincidem com a ordem de autoridade definida no Prompt Mestre:

1. Documento 0 — Índice Mestre e Rastreabilidade v1.1.
2. Documento 1 — PRD Mestre v1.1.
3. Documento 2 — Catálogo Mestre de Correções v1.0.
4. Documento 3 — Arquitetura Técnica Consolidada v1.0.
5. Documento 4 — Dados, APIs e Integrações v1.0.
6. Documento 5 — Conteúdo e Governança Editorial v1.0.
7. Documento 6 — Multimídia, Marketing e Produção v1.0.
8. Documento 7 — Plano Executivo do Sprint Mestre v1.0.
9. Documento 8 — Testes, Migração, Release, Rollback e Changelog v1.0.
10. Documento 9 — Prompt Mestre Final Codex v1.0.

Não foi encontrada ausência documental que impeça a execução.

## 2. Stack e arquitetura real

- Next.js 16.2.10 com App Router.
- React 19.2.3 e TypeScript 5.6.
- Tailwind CSS 3.4.
- Prisma 6.19 com SQLite local.
- Node.js 24 no ambiente auditado.
- Aplicativo móvel Expo/React Native com WebView.
- Monólito modular confirmado: páginas e rotas no App Router, domínios em `lib`, persistência Prisma, componentes compartilhados e shell móvel separado.
- 38 páginas, 50 rotas de API e 3 layouts.
- 48 componentes React em `components`.
- 43 modelos Prisma.

A arquitetura real é compatível com a decisão de monólito modular. PostgreSQL permanece alvo de staging/produção e não foi ativado nesta onda.

## 3. Rotas, páginas e navegação

Foram inventariadas as famílias:

- públicas: início, autenticação, cadastro, recuperação, preços, empresas, privacidade e termos;
- aplicação: dashboard, check-in, agenda, rotina, missões, movimento, caminhada, yoga, respiração, histórico, insights, perfil, premium e benefícios;
- administração: dashboard, leads e parceiros;
- APIs: autenticação, onboarding, check-in, agenda, rotinas, catálogo, missões, exercícios, yoga, caminhada, foco, saúde, perfil, relatórios, B2B e parceiros.

Divergência: a navegação atual ainda usa “Movimento”, “Missões” e estrutura anterior aos cinco pilares. `NAV_V2` ainda não existia como fundação central na baseline.

## 4. Componentes, botões e formulários

- 164 usos estáticos de `button`, `Button` ou `SelectableButton`.
- Componentes compartilhados existentes para UI, navegação, feedback, check-in, agenda, rotina, foco, respiração, imagens, conclusão, caminhada e notificações.
- O lint inicial encontrou 16 avisos: imagens sem `next/image` e atualizações síncronas em efeitos.
- Os 16 avisos foram corrigidos no fechamento da W0.
- A matriz funcional por tela/plataforma será expandida na W2 e consolidada na W9.

Risco identificado: os controles ainda não compartilham um contrato único de estado assíncrono, erro e idempotência em toda a aplicação.

## 5. Banco, migrations e seeds

- Banco local SQLite com 43 tabelas de negócio.
- Integridade do banco: `ok`.
- Violações de chave estrangeira: zero.
- O repositório não possuía histórico formal de Prisma Migrate compatível com o schema atual.
- Foi criada a migration expansiva de baseline `20260725160000_baseline`.
- A migration foi aplicada a banco vazio de validação e marcada como aplicada no banco local sem recriar ou remover tabelas.
- Comparação pré/pós: mesmos nomes de tabelas, definições funcionais, índices e contagens de registros.
- Cinco tabelas diferem apenas na ordem histórica de colunas; tipos, nulabilidade, defaults e chaves coincidem.
- `prisma migrate status`: schema atualizado.

Nenhuma contração destrutiva foi executada.

## 6. APIs, serviços, jobs e integrações

Já existem serviços e contratos para:

- autenticação, sessão e recuperação de senha;
- agenda, conflitos, tarefas, lembretes, hábitos, inbox e conexões de calendário;
- check-in, recomendação atual, missões, exercícios, yoga, caminhada, foco e progresso;
- bridges de rotina e feedback nativo;
- reconciliação de catálogo, ativos visuais e vídeos;
- B2B, leads, parceiros e relatórios.

Divergências:

- feature flags não estavam centralizadas;
- RBAC persistido com os seis papéis oficiais ainda não existia;
- logs estruturados, correlation ID, auditoria genérica, jobs e eventos precisavam de fundação comum;
- integrações externas permanecem incompletas e devem continuar invisíveis por flag.

## 7. Temas, tokens e idiomas

Baseline:

- temas: `light`, `dark`, `system`;
- idiomas: `pt-BR` e `es`;
- dicionário parcial no cliente;
- persistência em `localStorage` e PATCH de preferências;
- componentes ainda continham classes e cores diretas.

Meta W1:

- nove temas oficiais;
- sete catálogos de locale;
- tokens semânticos;
- fallback sem chave crua;
- locales não validados desativados.

## 8. Permissões e plataformas

Foram confirmados:

- notificações web e nativas;
- calendário nativo;
- localização web e WebView;
- bridge `ReactNativeWebView`;
- WebView com geolocalização;
- rotinas nativas e abertura de configurações;
- exportação de sessão para capacidades nativas disponíveis.

Plataformas no escopo: desktop web, navegador móvel, PWA, WebView, Android e iOS.

Divergência: não existia um `PlatformCapabilityService` único com os seis estados normativos nem uma central completa para câmera, microfone, galeria, localização, Bluetooth e notificações.

## 9. Conteúdo e assets

- Catálogo reconciliado: 354 entradas.
- Ativas: 165.
- Arquivadas por imagem ausente: 184.
- Arquivadas para revisão: 5.
- Mapeamentos visuais: 189.
- Conteúdo de caminhada, yoga, mobilidade, alongamento, sono e rotinas já possui base estruturada.
- Vídeos existentes usam status de catálogo; a interface deve depender de `READY/APPROVED` e permanecer oculta em outros estados.
- A nova bateria REF 018–038 foi recebida como referência de produção futura. Nenhuma arte final foi gerada na W0.

## 10. Backup e restauração

Backup externo:

`C:\Users\rodrigo.filho\Documents\Pausa AI Backups\W0_pre_execution_20260725_154102`

Conteúdo:

- snapshot de projeto sem caches e dependências regeneráveis;
- backup consistente do SQLite via API de backup;
- manifesto, estado Git, patch do worktree e lista de arquivos não rastreados;
- cópias de validação.

Validações:

- 5.743 arquivos e 7,436 GiB lógicos comparados sem diferenças;
- banco restaurado em cópia;
- 43 tabelas, schema e contagens iguais;
- integridade `ok`;
- zero violações de chave estrangeira.

## 11. Checks e testes

| Check | Resultado |
| --- | --- |
| Configuração | Passou |
| Prisma migration status | Passou |
| Migration em banco vazio | Passou |
| Integridade e FKs | Passou |
| TypeScript web | Passou |
| TypeScript mobile | Passou |
| ESLint | Passou, zero avisos |
| Build de produção | Passou, zero avisos do projeto |
| Catálogo e reconciliação | Passou |
| Caminhada unitária | Passou |
| GPS mobile | Passou |
| XP e idempotência | Passou |
| Caminhada autenticada E2E | Passou |
| Smoke E2E | Passou |

O teste de caminhada foi alinhado ao contrato obrigatório de `completionToken`. Os testes E2E foram executados na porta 3100 contra uma cópia isolada do banco.

## 12. Riscos P0/P1

### P0

Nenhum P0 aberto no gate.

### P1

- schema ainda é SQLite e requer estratégia separada antes de PostgreSQL;
- RBAC oficial, flags, i18n completo e tokens ainda não implementados;
- matriz completa de botões depende da auditoria funcional W2;
- capacidades nativas exigem teste em dispositivos reais na W8;
- mídia nova depende de produção artística, direitos e aprovação externa;
- conectores externos não possuem credenciais e permanecerão desativados.

## 13. Estratégia de rollback

- código: reverter commits coesos posteriores a `caad4bc`;
- banco: restaurar `database/dev.db` do backup externo;
- migrations: manter somente expansão nesta release;
- recursos: desativar por feature flag;
- conteúdo: arquivar/despublicar, sem exclusão;
- integrações: desativar adapter e jobs sem afetar o núcleo.

## 14. Plano de arquivos por ondas

- W1: `lib/platform`, `lib/i18n`, `lib/rbac`, `lib/feature-flags`, `lib/observability`, tokens CSS, providers, schema e migration expansiva.
- W2: agenda/conflitos, permissões, foco, sem redes, notificações, botões e testes concorrentes.
- W3: shell de navegação, cinco pilares, rotas, aliases e redirects.
- W4: taxonomia, catálogo, cards, Corpo, Mente, Rotina, Perfil e configurações.
- W5: check-in, motor de regras, notificações, progressão, auditoria e explicabilidade.
- W6: activity, GPS/routes, metrics, health profile, device connect, data vault e maps.
- W7: modelos e serviços de mídia, direitos, áudio, campanhas, cards compartilháveis e adapters opcionais.
- W8: segurança, LGPD, acessibilidade, performance, offline, plataformas e recuperação.
- W9: build RC, matrizes, changelog, deploy e rollback.

## 15. Decisão

**GO para W1.**

O backup é restaurável, a arquitetura foi confirmada, o build e os testes críticos passam, a migration de baseline é segura e não há P0 aberta. As divergências encontradas correspondem ao escopo planejado para W1–W9.
