# Execução operacional — 16/10/2026

Escopo: executar pendências independentes da recuperação das imagens originais. Usuário proibiu ações pagas. TASK-135 aguarda o disco; G9/G10 continuam NO-GO.

## Baseline e fontes

Main auditada: 741d2c624c998a57e5d98e2929c95a7047e5fea0; base de runtime #36/64387b69074ee33f573728c218ea49ade80811dc. [PR #39](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/pull/39) contém as correções e fica draft porque o smoke real não passou.

Issues #2, #3, #5, #6, #7 e #8 permanecem abertas. PR #28 foi integrado; #22 permanece draft; #29/#30 foram fechados sem merge e superados por grupos posteriores; #31 está aberto. Não integrar grupos de dependências apenas por atualização automática.

## Dados e privacidade

Supabase bccdypogqyrzmflimlom estava INACTIVE e foi reativado; confirmado ACTIVE_HEALTHY/PostgreSQL 17.6. Auditoria de metadados: 85 modelos e tabelas, nenhuma tabela/coluna escalar esperada ausente, 86 FKs. Isso não prova equivalência de tipos/defaults/índices nem integridade de conteúdo completo. Há seis roles e 328 instruções existentes.

Nenhuma tabela tem RLS; nenhuma possui grants efetivos SELECT/INSERT/UPDATE/DELETE para anon/authenticated na consulta. Ausência de grants e presença de RLS são controles distintos. Advisors security retornou lista vazia após reativação, sem substituir essa análise. Nenhuma mudança de schema/grants foi feita. pgcrypto já existe no schema extensions; não foi instalado nem adotado novo mecanismo de senha.

Somente contas sintéticas foram criadas pelos smokes. Limpeza pela API foi usada quando possível; resíduos foram removidos por SQL restrito ao nome Synthetic Operational Smoke, prefixo de e-mail ops-smoke- no domínio example.test e data da execução. Contas existentes foram preservadas. Nenhuma senha, cookie ou secret real consta nos relatórios públicos.

## Código e testes isolados

- Exportação LGPD: Prisma.sql com binding por provider; identificadores vêm de allowlist; ordenação de ScheduleMutex pela chave bucketKey; campos de credenciais excluídos.
- Limiter: INSERT/ON CONFLICT/RETURNING atômico para primeiro hit, incremento e expiração; prioridade ao CF-Connecting-IP. Cadastro limitado mesmo para payload inválido.
- Seed ADMIN: staging e confirmação explícitos, dados dedicados obrigatórios, hash com custo 12 e transação usuário/role. Não executado em staging real.
- Logs: código fixo na falha de auditoria, sem mensagem bruta do banco; logs Prisma desabilitados no runtime produtivo.
- Movimento: quatro consultas em paralelo; ganho ainda não medido com baseline HTTPS comparável.
- Ownership: parâmetro de check-in inexistente/alheio retorna 404 controlado, sem carregar catálogo ou tentar criar decisão.
- cf 1.0.0-beta.17 e Next/eslint-config-next 16.4.2; duas entradas opcionais de @emnapi ausentes no lockfile foram incluídas para Linux.

Typecheck raiz/mobile, ESLint e build Vinext passaram. W8 e checks operacionais passaram em SQLite e PostgreSQL 17: 128 hits/provider, expiração, isolamento entre titulares, SQL injection como valor, exclusão de credencial criptografada, rollback/idempotência do seed e log sem dados do erro. A fixture Workerd não concluiu no Windows, mas o gate Linux correspondente passou.

Código 5fd7649ec70dd25a7ac1ccbcddd33aafcca9c79f: nove checks GitHub e build Cloudflare passaram. O check npm-audit verde não significa ausência de vulnerabilidades.

## Deploy e secrets

Teste remoto descartável no Worker existente:
- inicial 98eacf55-4369-4d20-a329-31144100a870;
- deploy por cf beta.17 70aa9652-2d88-4821-a041-1397c0e5f774;
- rollback por republicação do módulo original b7d46c82-49c2-48c9-b2b9-4f986928e656;
- secret sintético preservado e preview removido.

A primeira leitura do rollback ainda observou propagação da revisão anterior; confirmação posterior observou a revisão correta. Esse teste não equivale ao rollback completo do app.

Build automático inicial falhou porque o comando de preview chamava o publicador de versões do principal. Foram ajustados build de Preview e cf previews deploy com nome explícito do preview existente. Base dos futuros previews corrigida; autobuild do preview vazio criado para a branch do PR foi desligado para evitar publicação duplicada sem secrets.

Deploys do app:
- 737e5b5 → f8cc70f1-1f4e-4b67-a8f1-63935554a339;
- 5fd7649 → e7f76d50-5197-4190-99ca-5ec72494e034, build d4be2285-c7a7-4e9a-a4f6-5a8ac3930331.

DATABASE_URL, JWT_SECRET, RATE_LIMIT_PEPPER, CRON_SECRET e RESEND_API_KEY sobreviveram como bindings criptografados. Valores não foram lidos/copiados. Rotação de valores anteriormente expostos, cron/e-mail positivos e principal ainda exigem confirmação. Cron sem credencial respondeu 401; isso não valida envio de e-mail.

## Smoke real e CPU

Smokes anteriores comprovaram parcialmente cadastro/cookies HttpOnly+Secure+SameSite=Lax, onboarding, check-in e recomendação. Consulta de check-in de outro titular retornou 500; isso motivou a correção 404. Não foi observado retorno de dados de outro titular e não se declarou IDOR com base em 500/503.

No último deployment, os smokes integral e diagnóstico por API falharam com HTTP 503/Error 1102, inclusive em onboarding, login, cadastro e exclusão. Logs de observabilidade confirmam Worker exceeded CPU time limit e o scriptVersion e7f76d50. Raios de exemplo: a4b7fae648e7a52b, a4b7fafdcacfa52b e a4b7fff8282c1047.

Não foi comprovado qual componente concentra o consumo. Bcrypt, inicialização Prisma/WASM e renderização precisam de perfil; não atribuir toda a falha a um deles sem medição. Não reduzir proteção de senhas nem cachear dados privados para passar no limite. Nenhum plano, limite pago ou capacidade adicional foi ativado. **Principal não promovido, PR não integrado, smoke não homologado.**

## Backup e dependências

Restore PostgreSQL local em destino vazio: 85 tabelas/87 registros sintéticos, contagens iguais, FK ativas e leitura Prisma de usuários/perfis/80 check-ins. Snapshot SHA-256 e371f412738a50cc20483331f523511003c96248f5e49e19a76e45e05bbdbb28; restore 814 ms, execução 2880 ms. CI também executou o drill. É snapshot lógico sintético, não pg_dump/backup real Supabase.

Auditoria após correções: raiz 31→20 (14 high/6 moderate), runtime 13 (9 high/4 moderate), mobile 35→25 (17 high/8 moderate), zero critical remanescentes. Não foram aceitos upgrades de Prisma/Tailwind/sharp nem downgrades sugeridos de Expo/React Native sem validação estrutural.

## Pendências e ação manual

- Perfil/otimização do consumo de CPU sem custo e repetição do smoke completo. Nenhuma necessidade de recadastrar secrets foi demonstrada para esse erro.
- Administrador: GitHub Settings → Rules → Rulesets; aplicar a proposta main-ruleset.proposed.json, conferir quatro checks obrigatórios e revisão independente. Não contornar exigência de plano caso a conta apresente cobrança.
- Backup real: exportação local pelo Supabase CLI/pg_dump, conexão privada configurada fora do chat/Git e restore em PostgreSQL local vazio. Não restaurar sobre o banco existente nem habilitar PITR ou upgrade.
- QA em aparelho: login, fechamento/reabertura, histórico, Movimento, navegação/teclado/leitor de tela e logout.
- Fonte histórica completa para TASK-133; imagens originais somente quando o disco retornar, conforme decisão do usuário.

[Status canônico](RELEASE_STATUS.md) · [Evidências](evidence/2026-10-16/) · [Bloqueio staging #7](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/issues/7) · [Auditoria #8](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/issues/8) · [Backups Supabase](https://supabase.com/docs/guides/platform/backups) · [Limites Cloudflare](https://developers.cloudflare.com/workers/platform/limits/).
