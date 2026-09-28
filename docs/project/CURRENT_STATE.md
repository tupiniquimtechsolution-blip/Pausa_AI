# Pausa AI — Current State

Data de baseline: 2026-09-28
Branch de trabalho: `chatgpt/release-green-2026-09-28`
Base: `main@79a98c3840a8c0257c232fd036c8a1bd47447d50`

## Produto

O Pausa AI é uma plataforma de bem-estar preventivo que transforma o estado e o contexto atual do usuário em pequenas ações viáveis naquele momento, registra o resultado e utiliza o histórico para tornar as próximas recomendações mais contextuais.

Fluxo principal:

`estado → interpretação → recomendação → ação → registro → histórico → nova recomendação`

Não é apenas uma biblioteca de exercícios, agenda, cronômetro ou chatbot.

## Arquitetura observada

- Next.js 16 / App Router / React 19 / TypeScript
- Prisma 6.19.3
- SQLite em desenvolvimento
- autenticação própria com JWT + bcrypt + cookie httpOnly
- RBAC persistido
- rate limiting persistente
- feature flags, audit log e outbox
- motor de recomendação determinístico/versionado
- Expo + React Native + WebView com ponte nativa
- 54 páginas
- 81 rotas de API
- 85 models Prisma
- 9 migrations
- mais de 3.300 arquivos no repositório

## Estado funcional confirmado no código

Existem implementações para autenticação, onboarding, check-in, recomendações, Corpo/Mente, caminhada, atividade, yoga, foco, agenda, rotina, histórico, progresso, notificações, saúde, dispositivos, Data Vault, mídia governada, B2B/admin e mobile.

## Histórico relevante

Os documentos W0–W9 registram evolução por ondas, chegando a uma RC local em julho de 2026. Esses resultados são evidência histórica; todos os gates devem ser reexecutados para a release atual.

## Produção

Produção não está declarada pronta.

Bloqueadores atuais conhecidos:

1. banco de produção/staging ainda não provisionado para Pausa AI;
2. runtime Cloudflare ainda não configurado no repositório;
3. secrets de staging/produção não configurados;
4. staging HTTPS real ainda não validado;
5. e-mail transacional real ainda não validado;
6. auditoria contemporânea de dependências e segurança ainda deve ser executada;
7. QA real mobile/a11y ainda precisa de evidência;
8. revisão jurídica/LGPD final continua externa ao código.

## Estratégia de infraestrutura

Direção atual:

`Cloudflare Workers → Next.js (vinext se compatível) → Prisma → PostgreSQL gerenciado (Supabase candidato preferencial)`

A decisão final do banco/runtime deve ser registrada em ADR e validada por teste real.

## Regras de continuidade

- código atual prevalece sobre snapshots históricos para estado de implementação;
- planejamento não equivale a implementação;
- não executar migrações destrutivas sem rollback e evidência;
- não declarar Release Green sem gates contemporâneos;
- integrações externas são opcionais ao Pausa AI Core.
