# W1 — Relatório de fundações compartilhadas

Data do gate: 25/07/2026  
Decisão: **GO**

## Escopo entregue

- design tokens semânticos e nove temas oficiais, com preferência `system` separada;
- persistência local e no perfil, aplicação imediata e respeito à redução de movimento;
- catálogo i18n central para `pt-BR`, `en`, `es`, `de`, `fr`, `it` e `ja`;
- apenas `pt-BR` habilitado; os demais locales permanecem bloqueados até QA;
- RBAC persistido para `MASTER`, `ADMIN`, `EDITOR`, `REVIEWER`, `SUPPORT` e `USER`;
- autorização de servidor, atribuição auditada e seed controlado da conta MASTER;
- registro central de feature flags por ambiente, plataforma e papel;
- `PlatformCapabilityService`, central de permissões e revalidação ao retornar das configurações;
- correlation ID, logs estruturados com redação de campos sensíveis, auditoria e outbox idempotente;
- componentes de diagnóstico do fluxo piloto para MASTER/ADMIN.

## Migration e preservação

- migration: `20260725192501_w1_foundations`;
- estratégia: somente expansão;
- tabelas preexistentes preservadas: 43;
- tabelas adicionadas: 9;
- novas tabelas: `Role`, `Permission`, `RolePermission`, `UserRole`, `AuditLog`,
  `FeatureFlag`, `FeatureFlagAudit`, `PlatformPermissionRecord` e `OutboxEvent`;
- `PRAGMA integrity_check`: `ok`;
- `PRAGMA foreign_key_check`: zero violações;
- contagens das 43 tabelas preexistentes: sem diferenças após migration;
- validação realizada sobre cópia representativa antes da aplicação em `dev.db`;
- seed aplicado no banco principal: `db:seed:foundations`, sem executar o seed destrutivo de catálogo.

## Evidências do gate

| Verificação | Resultado |
| --- | --- |
| `npm run typecheck` | passou |
| `npm run lint` | passou sem avisos |
| `npm run test:foundations` | passou |
| `npm run test:migration-integrity` | passou |
| `npm run test:foundations:gate` | passou |
| build Next de produção isolado | 86 rotas, compilação aprovada |
| autenticação MASTER | passou |
| RBAC e negação para USER | passou |
| atribuição SUPPORT persistida/auditada | passou |
| troca para tema `black-green` | passou |
| bloqueio de locale `en` pendente de QA | passou |
| capacidade `app_blocking` no desktop web | `UNSUPPORTED`, conforme esperado |
| permissão de notificações negada e auditada | passou |
| ativação e restauração de `NAV_V2` | passou com duas auditorias |
| caminho de erro | retornou `400`/`403` sem falha silenciosa |

## Segurança operacional

- flags começam desativadas em todos os ambientes;
- nenhuma integração externa é ativada pelo seed;
- senha seed de MASTER não sobrescreve conta existente, salvo no banco descartável do gate com
  `RESET_MASTER_SEED_PASSWORD=true`;
- logs bloqueiam senha, segredo, token, cookie, localização, rota e saúde;
- dados reais e catálogo não foram apagados ou regravados.

## Rollback W1

1. desativar todas as flags W1;
2. restaurar o código para o commit anterior à W1;
3. manter as nove tabelas novas sem uso durante o ciclo de compatibilidade;
4. se restauração de banco for indispensável, usar o backup W0:
   `C:\Users\rodrigo.filho\Documents\Pausa AI Backups\W0_pre_execution_20260725_154102`;
5. a contração física das tabelas fica proibida nesta release.

## Pendências controladas

- QA linguístico completo para seis locales antes de habilitá-los;
- validação visual dos nove temas em dispositivos reais será repetida no hardening W8;
- flags funcionais continuam desativadas e serão ativadas somente nos gates correspondentes.
