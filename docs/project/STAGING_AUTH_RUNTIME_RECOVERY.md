# Pausa AI — Staging Auth/Runtime Recovery

Atualizado em: 2026-10-02

## Objetivo

Restabelecer autenticação no staging Cloudflare sem alterar a decisão arquitetural: autenticação própria (JWT + bcrypt + cookie httpOnly), Prisma e PostgreSQL gerenciado no Supabase.

## Diagnóstico confirmado

1. O build/deploy vinext já conclui e publica o Worker.
2. O deploy anterior expôs apenas o binding `ASSETS`; secrets de runtime não estavam declarados no Worker.
3. O PostgreSQL staging está saudável e possui as 85 tabelas, mas a aplicação publicada ainda não está comprovadamente conectada a ele.
4. O Prisma PostgreSQL usava o cliente padrão com engine nativo; Cloudflare Workers exige um caminho edge-compatible.
5. A tabela `User` está vazia. Credenciais locais antigas não existem no staging; o primeiro usuário deve ser criado via `/cadastro` ou por seed controlado.
6. `workers_dev`/Preview URLs habilitados não são causa da falha de login.

## Correções implementadas neste branch

- `@prisma/adapter-pg@6.19.3` adicionado como dependência de runtime.
- cliente PostgreSQL gerado com `engineType = "client"` em `generated/prisma-pg`.
- `lib/prisma.ts` seleciona PostgreSQL + `PrismaPg` quando `DATABASE_URL` é PostgreSQL e mantém SQLite no fluxo local.
- `cloudflare.config.ts` declara os secrets obrigatórios e os bindings de staging.
- `scripts/check-config.mjs` exige PostgreSQL em staging/produção.
- `/api/health` testa presença de configuração e conectividade real com banco sem expor valores secretos.
- gate `Staging Runtime Gate` sobe PostgreSQL 17 em CI, aplica o schema, testa o adapter, executa typecheck/lint e constrói o Worker.

## Pendências restantes

### P0 — necessária para login real no Worker

- Provisionar no Cloudflare Worker `pausa-ai-staging`:
  - `DATABASE_URL`
  - `JWT_SECRET`
  - `RATE_LIMIT_PEPPER`
  - `CRON_SECRET`
  - `RESEND_API_KEY`
- Usar uma URL PostgreSQL apropriada para runtime serverless/edge e manter a senha somente em secret.
- Fazer novo deploy após os secrets existirem.
- Validar `GET /api/health` = HTTP 200 / `database: "ready"`.
- Criar o primeiro usuário em `/cadastro` ou executar seed controlado com senha fornecida fora do Git.
- Executar login e confirmar emissão do cookie `pausa_session`.

### P1 — necessário para fechar G8

- smoke autenticado completo (cadastro/login/app/logout/login);
- validar persistência no PostgreSQL;
- validar recuperação de senha quando Resend estiver configurado;
- revisar logs de Worker e banco após o smoke.

### P2 — necessário antes de Release Green

- backup/restore drill;
- QA físico/mobile/a11y;
- triagem final de dependências;
- auditoria LGPD/jurídica externa;
- promoção G9/G10 somente com evidência contemporânea.

## Critério de conclusão desta recuperação

A recuperação de autenticação só fica GREEN quando:

1. `Staging Runtime Gate` estiver GREEN;
2. secrets estiverem provisionados no Cloudflare;
3. novo deploy estiver GREEN;
4. `/api/health` retornar 200;
5. cadastro/login/logout funcionarem contra o Supabase staging;
6. um reload preserva sessão e dados persistidos.
