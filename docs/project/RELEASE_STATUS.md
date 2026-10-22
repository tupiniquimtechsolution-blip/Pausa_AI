# Pausa AI — Release Status

Atualizado em: 2026-10-22 (America/Sao_Paulo).
**G8 BLOCKED · G9 NO-GO · G10 NO-GO. Nenhuma RC/Release Green homologada.**

Main na auditoria: 741d2c624c998a57e5d98e2929c95a7047e5fea0.
Correções: [PR #39](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/pull/39), mantido draft; sem integração à main ou promoção do principal.
Código validado em CI/publicado: **5fd7649ec70dd25a7ac1ccbcddd33aafcca9c79f**.
Deployment preview: **e7f76d50-5197-4190-99ca-5ec72494e034**; build d4be2285-c7a7-4e9a-a4f6-5a8ac3930331.
[Execução e limites](OPERATIONAL_EXECUTION_2026-10-16.md) · [Evidências sanitizadas](evidence/2026-10-16/).

## Retomada em 22/10

Preview health 200; principal health 503; Supabase ACTIVE_HEALTHY. Deployment e cinco secrets preservados; nenhum novo deploy ainda. Perfil local do bundle identificou repetição de consultas de sessão: correção com React.cache limitado à renderização e campos mínimos reduziu o onboarding de 16–21 para 13 statements. Testes de isolamento simultâneo, revogação de sessão e RBAC passaram localmente. Novo gate adicionado ao PR. Hash de senha permanece cost 12 e requer tratamento adicional de CPU. Isso não encerra G8 nem comprova estabilidade remota. [Execução de 22/10](OPERATIONAL_EXECUTION_2026-10-22.md).

| Gate | Área | Estado | Evidência e pendência |
|---|---|---|---|
| G0 | Inventário/Baseline | GREEN | main/candidato identificados; 85 models/tabelas; assets versionados preservados |
| G1 | Documentação | PARTIAL | status, relatório, evidências e Notion atualizados; migração histórica incompleta |
| G2 | Repositório | BLOCKED | main sem proteção/rulesets; proposta administrativa pronta, não aplicada |
| G3 | Código | PARTIAL | privacidade, limiter, cadastro, logs, seed, Movimento e ownership corrigidos no PR; integração bloqueada pelo smoke |
| G4 | Dados | PARTIAL | Supabase saudável; 85 tabelas/colunas escalares presentes, 86 FKs; sem grants anon/authenticated; backup real/seed controlado pendentes |
| G5 | Segurança | BLOCKED | testes de segurança passaram; raiz 14 high/6 moderate, mobile 17 high/8 moderate; rotação e validação residual pendentes |
| G6 | Testes | PARTIAL | nove checks GitHub e build Cloudflare passaram no SHA do código; smoke real falhou; QA físico/mobile/a11y pendente |
| G7 | Cloud | PARTIAL | deploy e preservação de cinco secrets comprovados; rollback de fixture passou; principal permanece health 503 |
| G8 | Staging | BLOCKED | HTTP 503/Error 1102; logs confirmam Worker exceeded CPU time limit em onboarding/login/exclusão |
| G9 | Release Candidate | NO-GO | smoke estável, segurança, governança, backup real e QA pendentes |
| G10 | Release Green | NO-GO | issue #8 aberta; CI e fixtures não satisfazem homologação real |

## Executado

- Exportação LGPD usa parâmetros por provider e exclui credenciais. Limiter persistente atômico; cadastro limitado com 429/Retry-After. Seed ADMIN transacional com confirmação explícita. Logs sem erro bruto do banco.
- Movimento consulta quatro fontes independentes em paralelo. Ganho remoto não homologado.
- Correção adicional de ownership: check-in inexistente ou de outro titular recebe 404 antes da tentativa de gerar recomendação. CI passou; verificação HTTP desse caso permanece inconclusiva por CPU.
- cf fixado em 1.0.0-beta.17, Next/eslint-config-next 16.4.2 e lockfiles compatíveis. Duas entradas opcionais WASM ausentes no Linux foram corrigidas; npm ci/CI passaram.
- Por provider, 128 hits concorrentes verificaram contagem/limite/expiração; testes cobriram isolamento de exportação, binding de SQL, rollback/idempotência do seed e logs.
- Restore PostgreSQL 17 local/CI em destino vazio: 85 tabelas, 87 registros sintéticos, FKs/contagens/leitura Prisma. Não equivale a backup real do Supabase.
- Fixture remota de preservação/rollback por republicação passou e foi removida. Cinco secrets reais sobreviveram aos dois deploys do app; valores não foram lidos/copiados.
- Configuração do preview corrigida para build de Preview e publicador nativo. O comando anterior tentava criar versão do principal e falhava por nome incompatível.

## Bloqueio de runtime

Os smokes reais tiveram sucesso parcial em cadastro, cookies seguros, reloads, onboarding, check-in e recomendação, mas falharam de modo intermitente com HTTP 503. No último deployment, o corpo retornou Error 1102 e o serviço de observabilidade confirmou **Worker exceeded CPU time limit** nas mesmas requisições. [Evidência](evidence/2026-10-16/cloudflare-cpu-errors-2026-10-16.json).

Não há evidência de que uma variável ausente cause esse erro: os cinco secrets estão presentes. Não recadastrar secrets como correção de CPU. Não foi reduzido o custo do hash de senhas, habilitado cache de dados privados, aumentado plano ou contratado capacidade paga. A promoção está bloqueada até perfil/otimização e smoke completo estável.

## Próximas ações

1. Medir e reduzir CPU no runtime existente, incluindo inicialização Prisma/WASM, renderização e hashing; validar por perfil antes de escolher alteração estrutural. Repetir smoke integral por SHA/deployment.
2. Aplicar proteção administrativa proposta em main-ruleset.proposed.json; obter revisão independente real.
3. Tratar vulnerabilidades residuais e validar RBAC/ownership, exportação LGPD e 429 no deployment estável.
4. Executar backup real Supabase e restore apenas em destino isolado, medir RPO/RTO e ensaiar rollback completo do app. No plano gratuito, usar exportação local, sem ativar PITR/upgrade.
5. Validar mobile/WebView/a11y em dispositivo e completar a migração histórica.
6. TASK-135/imagens originais está adiada pelo usuário até acesso ao disco removível.

**Restrição permanente desta execução: nenhuma compra, assinatura, mudança de plano ou provisionamento pago.** Isso não representa uma garantia sobre a medição de uso normal dos serviços existentes.
