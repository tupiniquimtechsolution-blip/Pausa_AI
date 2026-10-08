# Pausa AI — Release Status

Atualizado em: 2026-10-08 (America/Sao_Paulo)
Decisão operacional: **G9 NO-GO / G10 NO-GO. Nenhuma RC ou Release Green homologada.**

Baseline inicial auditada: `main@7392441c4785634cf1cfb92b0f8f0e4446d4c3a2`.
Main após integração autorizada: `741d2c624c998a57e5d98e2929c95a7047e5fea0`.
Correção de CI no PR #28: `633d1684803b35512529cdbeede1f2ef3006a072`.
Evidência e matriz TASK-123–134: [OPERATIONAL_AUDIT_2026-10-08.md](OPERATIONAL_AUDIT_2026-10-08.md).
Esta avaliação substitui as afirmações de saúde/prontidão de 30/09 e 02/10; elas permanecem históricas.

| Gate | Área | Status | Evidência atual | Bloqueador |
|---|---|---|---|---|
| G0 | Inventário/Baseline | GREEN | main e SHA dos cinco PRs confirmados; inventário do candidato #28: 54 páginas, 82 APIs, 85 models, 9 migrations SQLite | SHA do candidato é distinto da main |
| G1 | Documentação | PARTIAL | auditoria atual e status reconciliados nesta proposta | migração histórica #3 permanece PARTIAL; fontes completas ausentes |
| G2 | Repositório | BLOCKED | API de main: protected=false; rulesets=[]; cinco PRs sem reviews submetidos | proteção/reviews/checks obrigatórios da #2 |
| G3 | Código | PARTIAL | CI e build de main históricos passaram; todos os gates do candidato #28 passaram em 08/10 após corrigir geração PostgreSQL | exportação LGPD ainda usa SQL SQLite; seed controlado não é atômico |
| G4 | Dados | PARTIAL | Supabase ACTIVE_HEALTHY; SELECT 1 passou pelo conector; preview corrigido retornou banco ready em 6 consultas sequenciais e 4 simultâneas | revalidar schema, grants, seed, integridade e backup/restore PostgreSQL; principal ainda precisa receber candidato homologado |
| G5 | Segurança | BLOCKED | CodeQL #28 passou; auth/RBAC revisados em código; auditoria online obtida | raiz: 24 high; mobile: 25 high e 1 critical; cadastro sem rate limit; concorrência do limiter; LGPD/logs |
| G6 | Testes | PARTIAL | CI/W8 e drill SQLite sintético contemporâneos passaram; adapter SELECT 1 passou em PostgreSQL 17 de CI | auth/RBAC/privacidade em PostgreSQL staging, WebView/aparelhos/a11y e persistência entre isolates não homologados |
| G7 | Cloud | PARTIAL | PR #28 integrado em main@741d2c6; deploy Cloudflare concluído, versão 48ea9e87 | observabilidade e rollback ainda pendentes; presença das configurações não prova validade dos secrets |
| G8 | Staging | PARTIAL | preview do PR #36 com secrets restaurados: /api/health 200 em 10 consultas, /api/system/health 200; rotas sem sessão redirecionam para login | smoke autenticado completo, imagens de Corpo/Movimento ausentes (#37), preservação de secrets em deploy, cadastro/onboarding, cookies, RBAC, persistência entre isolates e principal ainda não homologados |
| G9 | Release Candidate | NO-GO | nenhuma RC publicada nesta auditoria | G2/G3/G4/G5/G6/G7/G8 e homologação/rollback |
| G10 | Release Green | NO-GO | issue #8 aberta; há bloqueadores reais | smoke HTTPS completo, backup/restore PostgreSQL, QA e auditoria final |

## Correções e evidências contemporâneas

- PR [#28](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/pull/28): CI e Release Green Baseline agora geram os dois clientes Prisma antes do typecheck. Os seis workflows passaram no SHA `633d1684`.
- [CI](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/actions/runs/37771492156), [CodeQL](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/actions/runs/37771492118), [build Cloudflare](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/actions/runs/37771492011), [runtime PostgreSQL](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/actions/runs/37771492012) e [baseline/W8/drill](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/actions/runs/37771492207).
- Drill SQLite em CI: 9 migrations, 85 tabelas, 1.761 linhas, integrity=ok, zero violações de FK, backup/restored SHA-256 `2dcd0496945335f0f04436340c1efc08061aa8e66c407748954194aa9cad67d7`. **Não equivale a restore Supabase/PostgreSQL.**
- Inspeção inicial encontrou runtime secrets vazio. Posteriormente o usuário cadastrou cinco entradas como Secret; após deploy, /api/health retornou missingConfig=[] para DATABASE_URL/JWT_SECRET/RATE_LIMIT_PEPPER/APP_BASE_URL. Conteúdos não foram lidos; validade e rotação não são comprovadas por presença.
- Advisors retornaram lints=[] com projeto INACTIVE. Resultado inconclusivo para segurança/performance do banco atual; não foi usado como GREEN.
- Auditoria online: main/root 31 (7 moderate, 24 high, 0 critical); mobile 35 (9 moderate, 25 high, 1 critical). Root omit=dev do candidato #28: 23 (5 moderate, 18 high). Contagens representam pacotes sinalizados, não CVEs únicos nem explorabilidade comprovada.
- PRs #29/#30 falham por incompatibilidade Prisma 6/7. #31 tem checks green, mas não possui review submetido. #22 está draft e não mergeável.
- PR #28 integrado por autorização explícita do usuário após seis gates técnicos passarem e revisão do diff; reviews e threads estavam vazios. Nenhuma aprovação humana independente foi simulada. Governança de main continua pendente (#2). PRs #22/#29/#30/#31 não foram integrados nesta execução.

## Ordem de desbloqueio

1. Configurar proteção/reviews/checks de main (#2); integração técnica #28 concluída por autorização explícita.
2. Supabase reativado e SELECT 1 confirmado; diagnosticar a conexão do Worker e validar o schema, sem restaurar sobre banco existente.
3. Verificar validade dos secrets de runtime sem expor valores; revisar URI, senha codificada, pooler/TLS e configuração de e-mail.
4. Corrigir/verificar exportação LGPD em PostgreSQL, seed atômico e rate limiting; triar dependências em mudanças pequenas.
5. Integração e deploy #28 concluídos; repetir healthcheck após corrigir a conexão, registrando SHA/versão.
6. Executar auth/RBAC, cookies, check-in/recomendação/histórico, privacidade, rate limit e persistência entre isolates sob HTTPS.
7. Restaurar backup PostgreSQL em alvo isolado, ensaiar rollback e concluir QA real; só então reavaliar G9/G10.

Release Green exige evidência contemporânea do artefato efetivamente implantado. CI verde isolado, página inicial 200, advisor vazio ou drill SQLite não satisfazem esse critério.

## Evidência da integração e deploy — 08/10/2026

- Commit de merge: [741d2c6](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/commit/741d2c624c998a57e5d98e2929c95a7047e5fea0).
- Checks pós-merge: [CI](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/actions/runs/37778498139), [CodeQL](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/actions/runs/37778498086) e [Vinext](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/actions/runs/37778498096): success.
- [Build Cloudflare 0fa79ddb](https://dash.cloudflare.com/4b7b61dd588c9f0754dfacc0023f38e5/workers/services/view/pausa-ai-staging/production/builds/0fa79ddb-1459-4bb8-9083-53eb8501768b): Deploy complete; Success! Build completed; versão `48ea9e87-e785-4ffc-9d37-073c1f041949`.
- HTTPS após publicação: health 503 com configurações obrigatórias presentes; system/health 503. Supabase ACTIVE_HEALTHY e SELECT 1 pelo conector passaram. Falha específica da conexão utilizada pelo Worker ainda sem causa comprovada.
- TASK-123: integração concluída. TASK-124: presença parcial verificada, validade ainda bloqueada. TASK-129/134: não concluídas. Nenhuma migração, seed ou restore real executado nesta integração.
- O GitHub passou a apontar também um build Cloudflare `b4bfca0b-3a7a-4620-858b-514e2bf6562a` em andamento no mesmo SHA; o sucesso acima refere-se ao build 0fa79ddb efetivamente verificado no painel.

## Diagnóstico do 503 — 08/10/2026

Captura temporária de live logs do Worker, em versão `41f0219d-e2d9-4aac-9449-b97621aeb3a0`, identificou falha anterior à consulta: `no such file or directory, readAll '/bundle/generated/prisma-pg/query_compiler_bg.wasm'`. Portanto o healthcheck não comprova erro de senha/conexão PostgreSQL. Captura pausada após coleta; sem inclusão de headers, IPs ou secrets nesta evidência.

[PR #36](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/pull/36), SHA `9fbe865b63262cdf99ff6d7a22491465a2771f6f`, direciona o build ao entry WASM do cliente PostgreSQL. Build local passou; worker.config.json registra o query compiler como módulo wasm no manifest, e o loader importa o arquivo emitido. Gates CI e smoke do artefato implantado ainda necessários. G9/G10 permanecem NO-GO.

## Gates do candidato WASM e configuração de preview

PR #36, head `bdde1e5c56f1eb36df275849159c556916f69db4`: todos os checks GitHub presentes passaram (CI, CodeQL, Vinext, quality, cloudflare-compatibility, postgres-baseline e audit evidence). Teste local em Worker isolado carregou o compilador WASM e avançou até a conexão fictícia deliberadamente indisponível.

Cloudflare preview inicial falhou usando npm run build/Next sem gerar o cliente PostgreSQL. A configuração Previews Base foi corrigida, porém o preview existente mantinha uma cópia própria dos comandos antigos. Sua configuração também foi atualizada para npm run build:vinext e npx @vinext/cloudflare deploy --no-promote --skip-build. Não se concluiu que Retry congela comandos: a divergência constatada era a configuração do preview existente.

Execução 270aeafa ainda usava comandos antigos e foi cancelada para substituição. Nenhum secret foi copiado para o preview. Integração e healthcheck real permanecem pendentes; G9/G10 NO-GO.

Última execução de validação: [Cloudflare a51d48da](https://dash.cloudflare.com/4b7b61dd588c9f0754dfacc0023f38e5/workers/services/view/pausa-ai-staging/production/previews/fix-cloudflare-prisma-wasm-loader/builds/a51d48da-6b7f-4c7e-b372-016800128704), SHA bdde1e5, comandos npm run build:vinext e npx @vinext/cloudflare deploy --no-promote --skip-build confirmados. Ainda em Initializing na última inspeção. PR #36 permanece draft e não integrado enquanto o gate Cloudflare e o smoke real não forem resolvidos.

## Alinhamento de publicação do preview

A51d48da concluiu build:vinext, mas falhou na publicação: o upload de versões em modo production foi rejeitado pelo destino de preview por divergência de nome. A CLI cf instalada foi consultada: `cf previews deploy [preview-name] --prebuilt` é o comando específico para publicar Preview Build Output. Configuração do preview fix/cloudflare-prisma-wasm-loader atualizada para `npx cf previews deploy fix-cloudflare-prisma-wasm-loader --prebuilt`, mantendo o build npm run build:vinext. Não se renomeou o Worker principal nem se copiou secrets para o preview. Nova publicação ainda precisa de verificação.

## Preview publicado e HTTPS verificado — 08/10/2026

Build f402f104 falhou porque --prebuilt recebeu um Build Output de produção. O comando foi corrigido para `npx cf previews deploy fix/cloudflare-prisma-wasm-loader`, que gera o artefato no modo Preview antes de publicar.

[Build f7234eee](https://dash.cloudflare.com/4b7b61dd588c9f0754dfacc0023f38e5/workers/services/view/pausa-ai-staging/production/builds/f7234eee-3927-4bb6-90fc-86bd5b36bfb3), SHA `bdde1e5c56f1eb36df275849159c556916f69db4`: todas as fases exibem sucesso no painel, duração 12m03s. Verificação HTTPS direta: [preview](https://fix-cloudflare-prisma-wasm-loader-pausa-ai-staging.tupiniquim-techsolution.workers.dev/) retorna 200; `/api/health` retorna 503 com database=unknown e missingConfig=[DATABASE_URL,JWT_SECRET,RATE_LIMIT_PEPPER]. A publicação está comprovada; conexão PostgreSQL, carregamento WASM em consulta real e auth continuam não homologados, pois este preview não tem os secrets necessários. Os secrets cadastrados no Worker principal não comprovam configuração deste preview. Nenhum valor foi copiado ou exposto. PR #36 permanece candidato; G8 BLOCKED e G9/G10 NO-GO.

## Cadastro e estabilidade por requisição — 08/10/2026

Após o usuário configurar o preview, health retornou 200/database=ready. O cadastro chegou a /app/onboarding e consulta agregada somente leitura confirmou uma conta, sem onboarding concluído. A tela autenticada abriu com a sessão existente, mas recarregamentos alternaram sucesso e Error 1101 (Ray a476b174dee929ee, 16:58:56 UTC no relato inicial). Health repetido retornou 200,200,500. Cadastro e um health 200 não homologam estabilidade.

PR #36, candidato `64387b69074ee33f573728c218ea49ade80811dc`, acrescenta Prisma por requisição via AsyncLocalStorage e mantém o cliente até o término/cancelamento da resposta em streaming. O bundle anterior reproduziu 200,500,200,500 em Workerd local com PostgreSQL fictício, cancelando requisições que reutilizavam conexões como hung. O bundle corrigido passou quatro requisições sequenciais e seis simultâneas, com dez conexões distintas e encerradas. Typecheck/build locais passaram. [CI Vinext](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/actions/runs/37814937106) passou, incluindo Verify Worker database request isolation; quality, postgres-baseline, cloudflare-compatibility, validação e auditoria também passaram na última consulta. CodeQL estava em andamento nessa consulta; verificação posterior confirmou sucesso de todos os dez checks presentes no mesmo SHA, incluindo CodeQL e Analyze JavaScript/TypeScript.

[Deploy Cloudflare 1c0c6203](https://dash.cloudflare.com/4b7b61dd588c9f0754dfacc0023f38e5/workers/services/view/pausa-ai-staging/production/builds/1c0c6203-92e5-4394-a9bd-a2e26f4283ce) concluiu com sucesso. Porém, após essa publicação, o painel do preview deixou de listar os secrets previamente cadastrados. Seis healthchecks retornaram 503/missingConfig=[DATABASE_URL,JWT_SECRET,RATE_LIMIT_PEPPER]. O CLI/deploy não preservou a configuração manual de secrets desse preview nesta execução. Solicitado ao usuário novo cadastro direto no preview, sem enviar valores ao chat. Entrada de credenciais não foi automatizada. É necessário corrigir/verificar preservação de secrets nos futuros deploys; não repetir deploy após recadastro sem esse gate.

A correção está publicada como candidata, mas sua estabilidade no banco real e no onboarding não foi ainda homologada. A exceção remota original não teve stack capturado; a reprodução controlada sustenta a correção do ciclo de conexões. Nenhuma alteração de dados/schema, seed, senha ou main foi feita. G8 continua BLOCKED; G9/G10 NO-GO.

## Reconciliação de configuração — última verificação em 08/10/2026

O painel autenticado do preview `fix/cloudflare-prisma-wasm-loader`, atualizado pela navegação/reload, confirmou versão ativa `dca24d2c` e build 1c0c6203/commit 64387b6 com sucesso. A tabela runtime deste destino lista somente variáveis não secretas. Quatro novas consultas HTTPS continuaram retornando 503/missingConfig=[DATABASE_URL,JWT_SECRET,RATE_LIMIT_PEPPER]. O usuário apresentou recorte de uma tabela com quatro secrets criptografados, mas sem URL/cabeçalho de ambiente; não é possível atribuir essa imagem ao preview consultado. Solicitada apenas a URL do painel para reconciliar o destino, sem solicitar valores nem novo cadastro às cegas. Não há outro preview de mesmo nome no seletor consultado. Nenhum novo deploy disparado nesta verificação.

[Checks do candidato](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/commit/64387b69074ee33f573728c218ea49ade80811dc/checks) passaram; isso não altera G8 BLOCKED nem G9/G10 NO-GO. A validação de cadastro/onboarding e estabilidade real permanece pendente de configuração efetivamente disponível no preview.

## Destino confirmado e análise do publicador — 08/10/2026

O usuário confirmou a URL exata do preview consultado. A hipótese de imagem pertencente a outro ambiente não explica mais, por si só, a divergência. Após novo reload do painel autenticado, a tabela deste endereço continuou sem secrets; nova consulta /api/health retornou 503 com os mesmos três nomes ausentes. Solicitada atualização Ctrl+F5 no navegador do usuário para distinguir estado local desatualizado de divergência persistente do painel; resposta pendente.

Inspeção somente leitura de cf@1.0.0-beta.6 instalado: previewBuildOutput converte o Build Output em bindings; assemblePreviewDeploymentSettings define env com esses bindings e apenas acrescenta secret_text quando recebe secrets explicitamente; createPreviewDeployment publica uma nova configuração. O Build Output local contém as cinco declarações type=secret, sem valores, mas extractBindings do caminho convertido não contempla essas declarações como secrets de texto. Há evidência de mecanismo compatível com a substituição do ambiente por variáveis comuns no deploy observado. A causa precisa ser validada com teste de preservação em ambiente descartável antes de adotar uma correção e repetir publicação; nenhum secret real foi lido, copiado ou enviado. O diagnóstico não comprova defeito geral do Cloudflare nem falha da senha PostgreSQL. G8 BLOCKED; G9/G10 NO-GO.

## Secrets restaurados e smoke parcial — 08/10/2026, 15:02 BRT

Após novo salvamento pelo usuário, reload do painel do preview confirmou as cinco entradas criptografadas: DATABASE_URL, JWT_SECRET, RATE_LIMIT_PEPPER, CRON_SECRET e RESEND_API_KEY. Valores não foram lidos. Versão ativa exibida no painel: `3273854e`; build mais recente permanece 1c0c6203/commit `64387b69074ee33f573728c218ea49ade80811dc`. Não foi disparado outro build.

Verificação HTTPS: seis consultas sequenciais e quatro simultâneas a /api/health retornaram 200/ok=true/database=ready; /api/system/health retornou 200/database=reachable. Sem cookies, /app/onboarding e GET /api/admin/feature-flags retornaram 307 para login; nenhum conteúdo autenticado foi coletado. Isso comprova conexão PostgreSQL e bloqueio básico sem sessão, mas não comprova autorização por perfil, envio de e-mail nem persistência garantida entre isolates.

A aba existente do onboarding continha uma sessão antiga; após reload foi redirecionada a /login?session=expired, sem Error 1101 nessa navegação. Solicitado ao usuário novo login com a conta existente, sem enviar senha ao chat. Recarregamentos autenticados e cadastro/onboarding permanecem pendentes. Preservação de secrets no próximo deploy continua bloqueadora; nenhum dado/schema foi alterado, nenhum seed/restore executado. PR #36 permanece draft, sem merge. G8 passa a PARTIAL; G9/G10 permanecem NO-GO.

## Corpo/Movimento: imagens ausentes e carregamento — 08/10/2026

O usuário informou login bem-sucedido e aplicativo funcionando, com imagens ausentes em Corpo/Movimento e demora ocasional. A sessão autenticada utilizada pelo usuário não está disponível na aba acessível ao agente; login, onboarding e lentidão permanecem relatos do usuário, sem homologação completa independente.

Causa comprovada para parte das imagens: a árvore Git completa, não truncada, do candidato 64387b6 contém 2.863 arquivos public, mas zero em public/instructional-images/. Essa pasta está em .gitignore. Os 168 mapeamentos READY de lib/catalog-visual-assets-data.json apontam para capas ausentes na árvore; não há imagem com o mesmo catalogIdOrSlug em exercises/ ou yoga/ para essas capas. A consulta ao histórico GitHub da pasta não retornou commits.

HTTPS no preview: /instructional-images/yoga/hormonal-balance/yoga_hormonal_013_paschimottanasana_step_01_seated.png retornou 404/text/html; /exercises/soltar-tensao-pescoco-ombros.png retornou 200/image/png/1.217.061 bytes e /exercises/yoga-bolso-coluna-leve.png retornou 200/image/png/2.172.820 bytes. Isto distingue arquivo inexistente de imagem que apenas precisa carregar; não comprova que todos os cartões afetados usam o mesmo caminho.

Achado registrado em [issue #37](https://github.com/tupiniquimtechsolution-blip/Pausa_AI/issues/37), com critérios de recuperação das imagens originais aprovadas, publicação verificável e smoke visual. Solicitados nome de uma prática afetada e caminho local da pasta original. Não foram geradas novas ilustrações nem substituídas por imagens de outro movimento.

Melhoria local preparada para app/app/movimento/page.tsx: executar quatro consultas independentes em Promise.all em vez de sequencialmente; typecheck, ESLint do arquivo e build:vinext passaram. Patch disponibilizado no workspace como outputs/movimento-carregamento.patch. Não publicado nem integrado: ganho real ainda precisa ser medido na sessão autenticada, e preservação de secrets no deploy segue bloqueadora. Não foram alterados dados/schema ou a versão ativa funcional. G8 PARTIAL; G9/G10 NO-GO.

## Disponibilidade dos arquivos originais — 08/10/2026

O usuário informou que os arquivos do aplicativo estão em um disco removível atualmente indisponível. A recuperação de public/instructional-images/ fica pendente de acesso a essa fonte; não foi confirmada presença dessa pasta no disco. O achado #37 permanece aberto. Não foram inventadas, regeneradas ou substituídas imagens instrucionais. A melhoria local de carregamento está preparada e passou typecheck, ESLint e build, mas depende dos gates de publicação e preservação dos secrets para deploy. Essa dependência de mídia não impede análises independentes de código, governança e documentação; ela impede homologar a experiência visual completa de Corpo/Movimento. G8 PARTIAL; G9/G10 NO-GO.
