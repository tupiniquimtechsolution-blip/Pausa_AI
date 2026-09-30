# Pausa AI — Current State

Data de baseline: 2026-09-30
Branch de trabalho: `chatgpt/release-green-2026-09-28`
Base reconciliada com `main@8418aa5ad43e405a4d9a55c3f24ea3676cd655ca`

## Produto

O Pausa AI é uma plataforma de bem-estar preventivo que transforma o estado e o contexto atual do usuário em pequenas ações viáveis naquele momento, registra o resultado e utiliza o histórico para tornar as próximas recomendações mais contextuais.

Fluxo principal:

`estado → interpretação → recomendação → ação → registro → histórico → nova recomendação`

## Arquitetura confirmada

- Next.js 16 / App Router / React 19 / TypeScript
- Prisma 6.19.3
- SQLite em desenvolvimento
- PostgreSQL 17 no Supabase para staging de dados
- autenticação própria com JWT + bcrypt + cookie httpOnly
- RBAC persistido
- rate limiting persistente
- feature flags, audit log e outbox
- motor de recomendação determinístico/versionado
- Expo + React Native + WebView com ponte nativa
- 54 páginas
- 81 rotas de API
- 85 models Prisma
- 9 migrations SQLite do fluxo local
- schema PostgreSQL equivalente validado em CI e aplicado no Supabase

## Qualidade contemporânea

No commit `37517f5477ee568a7689aadae92ecd94daf7ab67`:

- CI: success
- CodeQL: success
- Release Green Baseline: success
- Prisma SQLite validate/migrate/seed: success em CI
- Prisma PostgreSQL schema validation: success
- `vinext check`: success

## Supabase staging

Executado:

- hardening de default privileges
- baseline PostgreSQL completo
- 85 tabelas confirmadas
- acesso direto da Data API removido nas tabelas da aplicação
- security advisors sem lints
- teste transacional sintético com FK e rollback bem-sucedido

Ainda não executado:

- seed completo de catálogo/foundations no PostgreSQL
- conexão da aplicação publicada ao banco
- backup/restore drill

## Cloud

Cloudflare Workers permanece o runtime web alvo. A compatibilidade via `vinext check` passou.

Ainda faltam configuração vinext persistida, Worker real, configuração de ambiente, URL HTTPS e smoke de staging.

## Produção

Produção não está declarada pronta.

Bloqueadores atuais:

1. dívida de dependências rastreada na Issue #5
2. seed/backup/restore do PostgreSQL staging
3. Cloudflare Worker real
4. staging HTTPS e smoke autenticado
5. QA físico/mobile/a11y
6. revisão jurídica/LGPD final

## Regras de continuidade

- código atual prevalece sobre snapshots históricos para estado de implementação
- planejamento não equivale a implementação
- não executar migrações destrutivas sem rollback e evidência
- não declarar Release Green sem gates contemporâneos
- integrações externas são opcionais ao Pausa AI Core
