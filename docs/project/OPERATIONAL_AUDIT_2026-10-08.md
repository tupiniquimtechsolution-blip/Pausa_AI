# Pausa AI — Auditoria operacional G0–G10

Data: 2026-10-08, America/Sao_Paulo.
Escopo: TASK-123–134; issues #2/#3/#5/#6/#7/#8; PRs #22/#28/#29/#30/#31; main, Actions, Cloudflare e Supabase.
Decisão: **RC NO-GO / Release Green NO-GO**.
Critério: evidência contemporânea e distinção entre código, CI sintético e ambiente publicado.

## Baselines e governança

- main: `7392441c4785634cf1cfb92b0f8f0e4446d4c3a2`, merge do PR #25 em 30/09.
- API [main](https://api.github.com/repos/tupiniquimtechsolution-blip/Pausa_AI/branches/main): protected=false, required_status_checks off.
- API [rulesets](https://api.github.com/repos/tupiniquimtechsolution-blip/Pausa_AI/rulesets): [].
- Reviews submetidos dos cinco PRs: []. CODEOWNERS/CI em arquivos não constituem proteção.
- Issues [#2](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/issues/2), [#3](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/issues/3), [#5](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/issues/5), [#6](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/issues/6), [#7](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/issues/7), [#8](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/issues/8): OPEN.
- Correções foram preparadas em PR; nenhuma integração em main ou publicação de RC ocorreu. A conexão GitHub disponível não oferece operação administrativa de rulesets.
- main teve [CI](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/actions/runs/36737605074) e [build Cloudflare](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/actions/runs/36737605170) aprovados em 30/09, [CodeQL](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/actions/runs/37308231486) em 05/10. São evidência de código naquele SHA, sem smoke atual.

## Revisão dos PRs

| PR | SHA inspecionado | Estado e conclusão |
|---|---|---|
| [#22](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/pull/22) | d11d35d3a3228225590d6bcc0873c92f33a2c863 | OPEN/DRAFT, mergeable=false. Checks históricos passaram. Seed estático com manifesto de 1.682 linhas/15 tabelas, incluindo uma vazia; não é evidência de importação atual. Conflitos e diferenças de baseline precisam de reconciliação; não fazer merge cego. |
| [#28](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/pull/28) | 5b704575843f8237797ceb93716352b55027d212 → 633d1684803b35512529cdbeede1f2ef3006a072 | OPEN/DRAFT. Revisados adapter-pg 6.19.3, cliente PostgreSQL engineType=client em output separado, bindings, health, mobile e seed. CI/quality antes falhavam TS2307, pois não geravam generated/prisma-pg. Dois workflows corrigidos nesta auditoria. Seis workflows agora success. Não comprova auth em Worker. |
| [#29](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/pull/29) | 60ea1a9a33239f6ccd67321a7114ce8b38d6d6d8 | OPEN; CI/build/baseline FAIL. Atualiza client Prisma a 7 sem alinhar CLI 6; generate não encontra query_engine_bg.sqlite.wasm-base64.js. Múltiplos majors; requer separação e migração coordenada. |
| [#30](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/pull/30) | f04aba75c2b2e488764399bbb85cf10f625d207a | OPEN; CI/build/baseline FAIL. CLI Prisma 7 rejeita datasource url no schema atual (P1012). Não integrar independentemente do client nem aceitar CodeQL/audit report como substituto do build. |
| [#31](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/pull/31) | a00d1c160387a78ae4d8d2a1655103e439f50494 | OPEN; CI/CodeQL/build/baseline/audit report success. Alteração upload-artifact v4→v7 limitada a dois workflows. Nenhum review; candidato à integração após governança/review. |

Workflows #28 no SHA corrigido:
[CI](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/actions/runs/37771492156),
[CodeQL](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/actions/runs/37771492118),
[Vinext build](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/actions/runs/37771492011),
[PostgreSQL runtime](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/actions/runs/37771492012),
[baseline/W8/drill](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/actions/runs/37771492207),
[audit artifact](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/actions/runs/37771492095).
O workflow Dependency Audit Evidence usa `npm audit --json ... || true`; success significa relatório produzido, não ausência de vulnerabilidades.

## Cloudflare e smoke real

Worker: pausa-ai-staging; URL [HTTPS](https://pausa-ai-staging.tupiniquim-techsolution.workers.dev/).
Painel autenticado inspecionado; nenhum valor de secret foi lido ou copiado.

- Runtime variables and secrets: vazio.
- DATABASE_URL: secret criptografado em **Builds / Variables and secrets**, não runtime.
- Production branch=main; build=`npm run build:vinext`; deploy=`npx @vinext/cloudflare deploy`; root=/.
- compatibilityDate=2026-09-30; nodejs_compat presente.
- APP_BASE_URL de build tinha placeholder de subdomínio; corrigida e salva para a URL real.
- Logs, Traces e Issues: OFF. Não habilitados enquanto revisão de logs não garante minimização de erro/PII.
- Deploy ativo: versão 118c4f96, 100% de tráfego; build bem-sucedido identificado com main@7392441. Não há evidência de #28 implantado.
- Nenhum redeploy/rollback foi disparado; banco e secrets não estavam prontos.

| Leitura HTTPS sem sessão | Resultado | Interpretação |
|---|---|---|
| / | 200 HTML | frontend acessível |
| /api/health | 404 HTML | nova readiness do #28 ainda não disponível |
| /api/system/health | 503 JSON: ok=false, database=unreachable | backend/banco indisponível |
| /app | 200 após seguir redirects | não comprova autorização nem sessão; status isolado não é aceite |

Readiness falhou; cadastro, login, cookies, check-in, recomendação, histórico, export/delete, rate limiting e persistência entre isolates **não foram homologados**. Não se tentou criar usuário real, nem gerar carga de escrita em staging degradado. O SHA publicado foi identificado no painel; HTTP health não fornece SHA verificável neste estado.

Secrets exigidos pelo config gate: DATABASE_URL, JWT_SECRET, RATE_LIMIT_PEPPER, CRON_SECRET, RESEND_API_KEY.
Configurações não sensíveis: COOKIE_SECURE=true, APP_BASE_URL HTTPS correto, ADMIN_EMAIL, RESEND_FROM_EMAIL, RELEASE_VERSION identificável, B2B_REAL_DASHBOARD_ENABLED explícito; AUDIT_LOG_RETENTION_DAYS revisado.
OPENAI_API_KEY é opcional para os caminhos com fallback local; MAP_PROVIDER_API_KEY é condicional. Não exigir chaves de integrações desativadas sem revisar uso.
O operador deve inserir novas credenciais diretamente no painel; nenhum valor deve entrar em documentação/chat.

## Supabase, Prisma e seed

Projeto dedicado Pausa AI: `bccdypogqyrzmflimlom`, região us-west-2, PostgreSQL 17.6.1.166.
Listagem e detalhe contemporâneos: **INACTIVE**. Consulta `select current_database(), version()` falhou por connection timeout.

- Schema/tabelas/grants/RLS/roles/contagens/User=0 históricos não foram reconfirmados.
- Security e performance advisors devolveram lints=[]; com banco inacessível, isso é **inconclusivo**, não aprovação.
- Não houve reativação, seed, migração nem alteração de schema/dados no projeto.
- Arquitetura preservada: Supabase como PostgreSQL; auth própria JWT/bcrypt, sem migração para Supabase Auth.
- #28 usa PrismaPg e cliente sem engine Rust. Gate PostgreSQL 17 de CI realizou SELECT 1 via adapter e build; não valida pooler/credenciais do projeto real.
- Seed estático #22 contém dados de referência, não usuários; resolver FKs por chaves naturais não comprova integridade importada. Após reativação: confirmar versões/schema, executar em cópia isolada, repetir seed para idempotência, comparar contagens/FKs e registrar resíduos.
- Seed administrativo #28 atualiza/cria User antes de conferir a Role ADMIN e grava UserRole fora da mesma transação. Se Role faltar ou a segunda gravação falhar, pode restar usuário com legacy role ADMIN. Também redefine senha de usuário existente e registra email/id. Antes de executá-lo: torná-lo atômico, validar ambiente/alvo/role antes de escrever e remover PII do evento; testar role ausente e falha intermediária em PostgreSQL sintético. Não foi executado nesta auditoria.

## Auth/RBAC, privacidade e logs

Revisão estática, sem alegar exploração real:
- Sessão JWT tem issuer/audience/jti/expiração e sessionVersion; consulta usuário/roles no banco. Cookie httpOnly, sameSite=lax, secure depende de COOKIE_SECURE/VERCEL.
- RBAC persiste roles, filtra expiração e verifica permissões no servidor; assignRole exige roles.manage. Ainda faltam cenários USER→ADMIN, acesso cruzado entre empresas e ownership em HTTPS/PG.
- Logout remove cookie; reset incrementa sessionVersion. Logout não incrementa sessionVersion: não assumir revogação de tokens já copiados.
- **Cadastro público não chama rate limiter** antes de bcrypt/escrita. Bloqueador de abuso a corrigir e testar.
- RateLimitBucket usa read/compute/upsert com count absoluto em transação de isolamento padrão. Há risco de contagem perdida em chamadas concorrentes; provar/fixar incrementos atômicos ou serialização com retry no PostgreSQL. Persistência por si só não garante limite entre isolates.
- **Exportação LGPD usa `= ? ORDER BY rowid` em lib/privacy/data-subject.ts**, SQL específico de SQLite; falha no caminho PostgreSQL. Corrigir parametrização/ordenação e testar export de dois usuários, exclusão, cascatas e anonimização em PG.
- Exportação/exclusão existem em /api/data-vault/subject-request; checklist LGPD de junho afirma ausência e está desatualizado. Existência não significa homologação PostgreSQL.
- Sanitização de observability é por nomes de chave. `error.message` não é removida pela chave `error`; texto livre em mensagens pode conter dados sensíveis. Revisar erros Prisma, mensagens/metadata/reason/userAgent antes de habilitar retenção de logs. Não registrar e-mails, payloads de bem-estar, cookies ou secrets.
- Consentimento, retenção, minimização B2B e revisão jurídica continuam sem aceite contemporâneo anexado. Não extrapolar relatório W8 histórico para produção.

## Dependências

Auditoria online npm 11.6.2 em lockfiles existentes, sem audit fix/force e sem alterar versões.
Raiz main e candidato #28: **31** pacotes sinalizados (7 moderate, 24 high, 0 critical).
Mobile: **35** (9 moderate, 25 high, 1 critical).
Root #28 omit=dev: **23** (5 moderate, 18 high, 0 critical). Classificação npm não comprova inclusão no bundle Worker.

Prioridades:
- Mobile shell-quote 1.8.4 via react-devtools-core 6.1.5: [command injection](https://github.com/advisories/GHSA-pqg4-j6r4-53mv), faixa >=1.8.4 <1.11.0; [DoS](https://github.com/advisories/GHSA-395f-4hp3-45gv), <=1.8.4. Transitivo/tooling DevTools; alcance em build/servidor de desenvolvimento precisa de análise. Não afirmar exploração no app móvel. Testar atualização compatível >=1.11.0 isoladamente.
- Next 16.3.6: advisories com faixa <16.3.8, incluindo [SSRF em image optimization](https://github.com/advisories/GHSA-cjq9-62q9-8jv4) e [cache poisoning](https://github.com/advisories/GHSA-4jqv-mc3x-m676). Priorizar patch testado separado dos majors do #29; avaliar caminhos efetivamente usados pelo Vinext.
- sharp e libvips/libheif/librsvg: [advisory](https://github.com/advisories/GHSA-wq5f-xc86-pv6w); root 0.34.5 e cópia transitiva em miniflare. O alias Worker para stub não elimina uso em tooling/Next local.
- cf/miniflare/undici, Prisma/config/deepmerge-ts, Tailwind/fast-glob/micromatch e vinext/satori: separar tooling de runtime/bundle e validar advisories. Sugestões automáticas incluem majors e downgrades; não aplicadas.
Issue #5 permanece aberta. CI do relatório com exit ignorado não fecha esta pendência.

## Backup/restore e rollback

Drill **SQLite sintético** executado pelo CI contemporâneo #28:
9 migrations; 85 tabelas; 1.761 linhas; integrity=ok; FK issues=0; temporários removidos.
Backup/restored SHA-256: `2dcd0496945335f0f04436340c1efc08061aa8e66c407748954194aa9cad67d7`.
Fonte: [job quality](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/actions/runs/37771492207).

Tentativa local em SQLite isolado foi bloqueada inicialmente por spawn EPERM e depois por erro genérico do schema engine; não produziu aceite local. Typecheck local após gerar ambos os clientes passou. CI é a evidência executável do drill SQLite; não foi contado como restore Supabase.

Backup disponível no plano Supabase, retenção/PITR, export consistente/criptografia, RPO/RTO e destino isolado ainda não verificados. Nenhum restore sobre staging ativo foi solicitado/executado.
Para fechar TASK-130: banco ativo → confirmar plano/backups → snapshot sintético/representativo sanitizado → restore em alvo isolado autorizado → comparar schema/FKs/contagens/hash lógico/leitura Prisma → ensaiar versão Worker anterior e smoke → registrar tempo/resultados. Não criar recurso pago nem sobrescrever projeto sem autorização específica.

## Matriz TASK-123–134

| Task | Estado | Evidência/ação restante |
|---|---|---|
| 123 — integração #28 | PARTIAL | CI corrigido e seis workflows green; draft/review/governança e validação real pendentes; não mergeado |
| 124 — secrets runtime | BLOCKED | runtime vazio; DATABASE_URL só no build; valores exigem entrada segura pelo operador e verificação de presença |
| 125 — CI/CD Cloudflare | PARTIAL | branch main/build/deploy confirmados; URL placeholder corrigida; deploy do candidato não feito |
| 126 — HTTPS/logs | PARTIAL | HTTPS/versão ativa confirmados; logs/traces/issues OFF; sanitização pendente |
| 127 — auth staging | BLOCKED | readiness 503/404; cookies/cadastro/login/logout não homologados |
| 128 — seed/Prisma staging | BLOCKED | banco INACTIVE/timeout; seed #22 conflita e seed admin precisa atomicidade; SELECT 1 somente em CI |
| 129 — smoke integrado | BLOCKED | smoke de leitura executado e falhou no backend; fluxo autenticado/WebView/isolates não comprovado |
| 130 — backup/restore/rollback | PARTIAL | drill SQLite em CI passou; PostgreSQL/Supabase e rollback Worker pendentes |
| 131 — dependências | PARTIAL | relatórios atuais e PRs triados; highs/critical permanecem, upgrades majors rejeitados pelos gates |
| 132 — proteção main | BLOCKED | protected=false, rulesets=[], reviews=[]; configuração administrativa pendente |
| 133 — migração histórica | PARTIAL | manifesto/auditoria canônicos mantêm PARTIAL; conversa de continuidade é preview limitado, sem fontes antigas completas/anexos |
| 134 — auditoria/RC/Green | AUDITORIA REGISTRADA; RELEASE BLOCKED | G0–G10 reavaliados; #8 aberta; G9/G10 NO-GO |

Novos bloqueadores de privacidade PostgreSQL, rate limiting, seed e logs: [issue #32](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/issues/32).

## Critérios para próxima reavaliação

Nenhuma task operacional bloqueada é marcada concluída por existir código ou CI verde.
Exigir SHA do artefato implantado, banco acessível, configuração sem placeholders, evidência sanitizada do fluxo HTTPS autenticado e isolamento entre usuários/empresas, rate limit concorrente, export/delete PostgreSQL, backup restaurado em alvo seguro, rollback real e QA físico/a11y.
Só promover RC/Release Green quando todos os bloqueadores aplicáveis forem encerrados com evidência e responsáveis registrados.
