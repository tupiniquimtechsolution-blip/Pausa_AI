# Pausa AI — Release Status

Atualizado em: 2026-09-28

| Gate | Área | Status | Evidência atual | Bloqueador |
|---|---|---|---|---|
| G0 | Inventário/Baseline | 🟢 GREEN | árvore, stack, páginas, APIs, models e migrations inventariados | — |
| G1 | Documentação | 🟡 IN PROGRESS | CURRENT_STATE e RELEASE_STATUS criados | README/arquitetura/runbooks ainda a reconciliar |
| G2 | Repositório | 🟡 IN PROGRESS | branch isolada criada | CI e estrutura documental em implantação |
| G3 | Código | 🟡 PENDING CI | gates históricos existem | reexecução contemporânea necessária |
| G4 | Dados | 🔴 BLOCKED | Prisma/SQLite local existem | Supabase Pausa AI ainda não provisionado |
| G5 | Segurança | 🟡 PENDING AUDIT | hardening histórico W8 | auditoria atual necessária |
| G6 | Testes | 🟡 PENDING CI | test:w9 e suites existem | reexecução contemporânea necessária |
| G7 | Cloud | 🔴 BLOCKED | alvo Cloudflare Workers definido | runtime/adaptador e credenciais Cloudflare ausentes |
| G8 | Staging | 🔴 BLOCKED | plano conhecido | Supabase + Cloudflare staging ausentes |
| G9 | Release Candidate | 🔴 NO-GO | RC histórica não vale como RC atual | depende de G3–G8 |
| G10 | Release Green | 🔴 NO-GO | — | depende de todos os gates anteriores |

## Definição de Green

Release Green exige, no mínimo:

- documentação atualizada;
- CI green;
- typecheck, lint e build green;
- schema/migrations green;
- autenticação/RBAC/rate limit green;
- testes críticos green;
- banco staging persistente green;
- Cloudflare build/deploy green;
- smoke HTTPS green;
- backup/restore green;
- rollback documentado/testado;
- auditoria final sem bloqueadores críticos conhecidos.
