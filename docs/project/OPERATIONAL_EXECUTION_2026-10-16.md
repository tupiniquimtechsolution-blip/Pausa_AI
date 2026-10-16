# Execução operacional — 16/10/2026

Escopo autorizado: executar pendências não relacionadas à recuperação das imagens originais. TASK-135 permanece aguardando o disco removível. G9/G10 continuam NO-GO.

## Baseline e ambiente

- Main: `741d2c624c998a57e5d98e2929c95a7047e5fea0`, ainda sem proteção/rulesets na consulta de 16/10.
- Base destas correções: candidato #36, `64387b69074ee33f573728c218ea49ade80811dc`.
- Supabase `bccdypogqyrzmflimlom` estava INACTIVE e foi reativado; confirmado ACTIVE_HEALTHY/PostgreSQL 17.6, 85 tabelas public. Consulta agregada anterior ao smoke: dois usuários, um onboarding concluído. Nenhum dado pessoal foi exportado.
- Nenhuma das 85 tabelas tinha RLS; a consulta de grants não retornou privilégios de tabela para anon/authenticated. Isso preserva a distinção entre ausência de exposição pela Data API e RLS. Sem alteração de schema/grants em staging nesta execução.
- HTTPS: preview #36 com health/database ready; principal com health 503/database unavailable, configurações obrigatórias presentes.

## Correções implementadas

1. Exportação LGPD com `Prisma.sql`: parâmetros por provider, ordenação por PK explícita (incluindo a chave composta de ScheduleMutex) e exclusão de campos de credenciais de conexão. Removidos placeholder SQLite fixo e rowid.
2. Limitador persistente com um INSERT/ON CONFLICT/RETURNING atômico para criação, incremento e expiração; prioridade ao CF-Connecting-IP no Worker.
3. Cadastro limitado por endereço, inclusive payload inválido e variação de e-mail; excesso retorna 429/Retry-After.
4. Seed de administrador com confirmação explícita de staging, e-mail dedicado e transação única para usuário e role. Sem e-mail, ID, senha ou erro bruto nos logs. Não executado em staging.
5. Log de falha de auditoria usa código fixo; Prisma fora de desenvolvimento não imprime erros brutos de consulta.
6. Movimento executa quatro consultas independentes em paralelo; ganho remoto ainda precisa ser medido após deploy.
7. Publicador `cf` fixado em `1.0.0-beta.17`: implementação preserva os secrets do deployment anterior como bindings inherit. Teste da função real instalada passou com fixture descartável e cinco nomes, sem valores. Ainda exige teste de redeploy remoto e rollback.
8. Lockfiles atualizados com correções compatíveis; majors/downgrades sugeridos automaticamente não foram aplicados. Dependências remanescentes exigem triagem e validação separadas.

## Validação isolada realizada

- Typecheck raiz e mobile e ESLint passaram com Next/eslint-config-next 16.4.2; o build Vinext do lockfile final é verificado separadamente. Outputs gerados e fixtures temporárias foram excluídos do lint/typecheck, mantendo a análise do código-fonte.
- W8 passou em SQLite e PostgreSQL 17 local.
- Em cada provider, 128 hits concorrentes verificaram limite, contagem e expiração; exportação verificou isolamento entre usuários e binding de valor com conteúdo de tentativa de injeção.
- Falha injetada na gravação do vínculo ADMIN confirmou rollback do usuário; seed repetido confirmou idempotência de usuário/vínculo.
- Exportação não incluiu credencial criptografada de CalendarConnection. Falha de auditoria não incluiu texto de erro do banco.
- Restore PostgreSQL local em destino vazio: 85 tabelas/87 registros sintéticos, contagens iguais, FK ativas e leitura Prisma de usuários/perfis/80 check-ins. Snapshot SHA-256 `e371f412738a50cc20483331f523511003c96248f5e49e19a76e45e05bbdbb28`; restore 814 ms, execução 2880 ms. É um snapshot lógico de fixture local, não backup real do Supabase nem ensaio de rollback Cloudflare.
- A fixture Workerd não concluiu no ambiente Windows após atualização de dependências; execução local interrompida. O gate existente permanece no CI Linux e precisa passar no SHA final.

## Smoke HTTPS real do preview anterior

Foram criadas somente contas sintéticas, com senhas/cookies mantidos em memória. Passaram cadastro/cookies HttpOnly+Secure+SameSite=Lax, quatro reloads sequenciais e quatro simultâneos de onboarding, gravação de onboarding, check-in e leitura de recomendação. A consulta da recomendação de outro titular retornou 503, tornando o resultado de autorização inconclusivo. Uma repetição encontrou 503 em um reload autenticado; estabilidade não homologada.

As duas execuções limparam uma conta cada pela API; a conta sintética restante de cada execução foi removida por SQL limitado a nome, prefixo de e-mail sintético e data da execução. Não houve remoção de conta existente do usuário. Não se concluiu IDOR a partir de uma resposta 503.

Ainda faltam autorização por perfil positiva/negativa completa, ownership com resposta conclusiva, histórico, logout/nova sessão, mobilidade/a11y, evidência de isolates e medição do candidato corrigido publicado. Relatórios são sanitizados; não contêm senhas, cookies ou e-mails das contas sintéticas.

## Publicação e governança

O usuário autorizou a CLI Cloudflare e restringiu a execução a ações sem contratação/recursos pagos. A autorização inicial não cobria a API de deployments (403); os escopos específicos foram autorizados na segunda solicitação.

Teste remoto descartável no Worker existente: versão inicial `98eacf55`, publicação pelo cf@1.0.0-beta.17 `70aa9652`, rollback por republicação do módulo original `b7d46c82`. O valor sintético foi preservado nos dois casos; nenhum secret real foi lido ou copiado. A primeira leitura após rollback ainda viu a revisão anterior por propagação; leitura posterior confirmou revisão 1 e segredo intacto. Preview `ops-preservation-2026-10-16` removido após o teste. Principal não alterado por esse ensaio, nenhum recurso pago/contêiner/banco novo provisionado.

O teste de preservação/rollback de fixture não equivale à homologação do app principal. Publicação do código do app continua sujeita aos gates do SHA final. Não copiar secrets entre ambientes.

Auditoria de dependências após lockfiles e Next 16.4.2: raiz de 31 (24 high/7 moderate) para 20 (14 high/6 moderate). Mobile de 35 (25 high/9 moderate/1 critical) para 25 (17 high/8 moderate/0 critical). Risco residual não aceito como GREEN. Não foram aplicados downgrades de Expo/React Native nem majors de Prisma/Tailwind/sharp sugeridos automaticamente.

`main-ruleset.proposed.json` contém proposta concreta de proteção para importação pelo administrador, com revisão independente, checks obrigatórios e bloqueio de force-push/exclusão. A proposta ainda não foi aplicada. O conector GitHub disponível não possui ferramenta de escrita administrativa; nenhuma aprovação independente foi simulada.

## Critérios que continuam abertos

- Preservação remota dos secrets e rollback Cloudflare; principal receber candidato homologado.
- Smoke autenticado estável e RBAC/ownership; cron/e-mail controlados sem envio a terceiros não autorizados.
- Vulnerabilidades residuais, proteção administrativa, backup real do Supabase/restore seguro e revisão de grants/schema/seed.
- QA mobile/a11y em dispositivo e conclusão da migração documental histórica.
- Imagens originais, explicitamente adiadas pelo usuário, continuam fora desta execução.

Referências: [#32](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/issues/32), [#36](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/pull/36), [#8](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/issues/8), [auditoria anterior #33](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/pull/33), [configuração oficial de previews](https://developers.cloudflare.com/workers/previews/configuration/), [Prisma raw queries](https://www.prisma.io/docs/orm/prisma-client/using-raw-sql/raw-queries).
