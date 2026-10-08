# Pausa AI — Current State

Atualizado em: 2026-10-08 (America/Sao_Paulo).
Baseline: `main@7392441c4785634cf1cfb92b0f8f0e4446d4c3a2`.
Estado canônico de gates: [RELEASE_STATUS.md](RELEASE_STATUS.md).
Evidências e TASK-123–134: [OPERATIONAL_AUDIT_2026-10-08.md](OPERATIONAL_AUDIT_2026-10-08.md).

## Produto e arquitetura

Pausa AI transforma estado/contexto de bem-estar em recomendações e ações, registra resultados e usa histórico para contextualização.
Next.js/App Router/React/TypeScript, Prisma 6.19.3, SQLite local, PostgreSQL Supabase para staging, auth própria JWT/bcrypt/cookie httpOnly, RBAC, rate limit persistido, audit log/outbox, Expo/WebView.
Nenhuma migração para Supabase Auth foi realizada.
Inventário do candidato #28: 54 páginas, 82 APIs (inclui nova /api/health), 85 models, 9 migrations SQLite. Main possui 81 APIs.

## Código e CI

Main permanece no merge #25 de 30/09. PR #28 ainda draft; adapter PostgreSQL, bindings e seed controlado estão no candidato, não em main.
Nesta auditoria foram corrigidos CI/Release Green Baseline para gerar os clientes SQLite e PostgreSQL antes do typecheck. Todos os seis workflows passaram no candidato `633d1684803b35512529cdbeede1f2ef3006a072`.
PR #22 conflita com main; #29/#30 falham por incompatibilidade Prisma 6/7; #31 tem checks green, sem review submetido.
Main continua sem proteção/rulesets. Não houve merge nesta auditoria.

## Ambientes

- Supabase Pausa AI: **INACTIVE** em listagem/detalhe atuais; consulta SQL falhou por timeout. Saúde, 85 tabelas, grants e User=0 de setembro são históricos, não reconfirmados.
- Advisors: lints=[] com banco inacessível; resultado inconclusivo.
- Cloudflare pausa-ai-staging: versão 118c4f96 ativa, build main@7392441; HTTPS responde. Branch main, build:vinext e deploy vinext confirmados.
- DATABASE_URL configurada somente como secret de build na inspeção; runtime secrets vazio. APP_BASE_URL de build corrigida de placeholder para URL real. Logs/traces/issues OFF.
- Smoke real: / 200; /api/health 404; /api/system/health 503 database unreachable. Nenhuma homologação autenticada.

## Bloqueadores

1. Proteção de main e review do candidato.
2. Banco staging ativo, secrets de runtime e deploy verificável.
3. Seed PostgreSQL idempotente/integridade e seed admin atômico.
4. Exportação LGPD com SQL compatível PostgreSQL, cadastro com rate limit e limite seguro sob concorrência.
5. Dependências: raiz 31 achados; mobile 35, com 1 critical. Triage de alcance/patches pendente.
6. Smoke HTTPS completo, auth/RBAC/cookies/privacidade/isolates e QA real mobile/a11y.
7. Backup/restore PostgreSQL e rollback Worker. Drill SQLite de CI passou; não substitui ensaio Supabase.
8. Minimização de logs e revisão final jurídica/privacidade.
9. Migração histórica #3 permanece PARTIAL; fontes originais completas não disponíveis nesta auditoria.

**G9 NO-GO / G10 NO-GO. Produção e RC não homologadas.**
Histórico/planejamento/CI não substituem evidência do ambiente efetivamente publicado.
