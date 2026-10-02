# Pausa AI — Release Status

Atualizado em: 2026-10-02

| Gate | Área | Status | Evidência atual | Bloqueador |
|---|---|---|---|---|
| G0 | Inventário/Baseline | 🟢 GREEN | stack, páginas, APIs, 85 models e 9 migrations locais inventariados | — |
| G1 | Documentação | 🟢 GREEN | README, CURRENT_STATE, RELEASE_STATUS e ADR atualizados | — |
| G2 | Repositório | 🟢 GREEN | CI, CodeQL, Dependabot, CODEOWNERS, templates e política de segurança integrados | ruleset de main ainda merece configuração administrativa |
| G3 | Código | 🟢 GREEN | CI contemporâneo passou no commit 37517f5 | — |
| G4 | Dados | 🟡 PARTIAL | PostgreSQL 17 saudável; 85 tabelas aplicadas; Data API endurecida; teste transacional+rollback aprovado | seed PostgreSQL, backup/restore drill e smoke da aplicação |
| G5 | Segurança | 🟡 PARTIAL | CodeQL green; Supabase security advisors sem lints; acesso Data API removido | dívida de dependências rastreada na Issue #5; revisão LGPD final externa |
| G6 | Testes | 🟢 GREEN | CI + W8 + database drill local + Release Green Baseline aprovados | QA físico/mobile/a11y permanece externo |
| G7 | Cloud | 🟡 PARTIAL | Worker HTTPS publicado e correção Prisma/Workers + bindings em validação | secrets reais ainda precisam ser provisionados no Cloudflare e redeploy validado |
| G8 | Staging | 🔴 BLOCKED | PostgreSQL staging saudável e Worker HTTPS publicado | falta conexão runtime comprovada, usuário de staging e smoke autenticado |
| G9 | Release Candidate | 🔴 NO-GO | baseline técnica pronta para RC | depende de G4/G5/G7/G8 |
| G10 | Release Green | 🔴 NO-GO | — | depende de staging real, auditoria final, backup/restore e bloqueadores acima |

## Evidências contemporâneas

- GitHub CI: success no commit `37517f5477ee568a7689aadae92ecd94daf7ab67`.
- GitHub CodeQL: success no mesmo commit.
- Release Green Baseline: success no push e no pull request.
- PostgreSQL Prisma schema: validado e DDL gerado pelo Prisma em CI.
- Supabase: 85 tabelas `public`, migrations de baseline aplicadas e security advisors sem lints após endurecimento da Data API.
- Teste de integridade: inserção sintética com FK em transação funcionou; rollback confirmou 0 resíduos.

## Definição de Green

Release Green exige documentação atualizada, CI green, build green, schema/migrations green, autenticação e autorização validadas, testes críticos green, banco staging persistente, deploy Cloudflare green, smoke HTTPS, backup/restore, rollback e auditoria final sem bloqueadores críticos.

## Pendências de maior prioridade

1. resolver/triagear dependências vulneráveis sem upgrades major cegos;
2. provisionar secrets do Worker e comprovar conexão server-side ao PostgreSQL;
3. criar usuário de staging por cadastro/seed controlado;
4. redeployar o Worker com bindings e Prisma edge-compatible;
5. executar /api/health e smoke HTTPS autenticado;
6. executar backup/restore drill;
7. auditoria final e promoção G9 → G10 somente com evidência.
