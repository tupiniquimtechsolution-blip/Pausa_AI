# ADR-001 — Cloud runtime e banco de staging

Status: ACEITO PARA STAGING / IMPLEMENTAÇÃO PARCIAL
Data: 2026-09-28

## Contexto

O Pausa AI é uma aplicação Next.js full-stack com Route Handlers, autenticação server-side, Prisma e persistência. Não é uma aplicação estática.

## Decisão de trabalho

1. Cloudflare Workers será o runtime web alvo.
2. Para Next.js 16, validar primeiro a compatibilidade com vinext, atualmente recomendado pela Cloudflare para novas migrações de Next.js em Workers.
3. PostgreSQL gerenciado será usado para staging/produção; Supabase é o provedor preferencial nesta retomada.
4. SQLite permanece para desenvolvimento local até a migração PostgreSQL estar validada.
5. Não substituir autenticação própria por Supabase Auth nesta fase. O Supabase será inicialmente banco PostgreSQL gerenciado; mudanças de autenticação exigiriam ADR separado.

## Motivos

- preserva a arquitetura e os fluxos existentes;
- evita reescrita;
- mantém Prisma;
- permite persistência adequada para ambiente serverless;
- separa migração de infraestrutura de mudança de domínio/autenticação.

## Pontos a validar

- conversão do schema SQLite para PostgreSQL — validada e aplicada no staging;
- compatibilidade das 9 migrations existentes;
- estratégia Prisma driver/adapter no Worker;
- limites de TCP/pooling no Cloudflare;
- compatibilidade vinext com os recursos Next usados — check aprovado;
- cookies, headers e runtime nodejs_compat;
- jobs/cron;
- e-mail transacional.

## Rollback

Enquanto staging não estiver validado:
- manter SQLite local como baseline;
- não remover migrations existentes;
- não alterar produção;
- reverter branch de infraestrutura sem afetar main.
