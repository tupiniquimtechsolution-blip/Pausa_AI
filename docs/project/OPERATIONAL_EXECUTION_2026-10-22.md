# Retomada operacional — 2026-10-22

**G8 BLOCKED; G9/G10 NO-GO. Nenhuma RC homologada.**

## Estado remoto conferido

- Main: `741d2c624c998a57e5d98e2929c95a7047e5fea0`.
- PR #39 aberto/draft, head inicial `b52475a89b47f48a4fef8b0ca02a91a8d3d924b8`, nove checks aprovados. Nenhuma integração realizada.
- Preview: `/api/health` HTTP 200, `ok:true`, banco ready. Deployment `e7f76d50-5197-4190-99ca-5ec72494e034`, tag `5fd7649`; os cinco nomes de secrets continuam como `secret_text`, sem ler valores.
- Principal: `/api/health` HTTP 503, banco unavailable, `missingConfig:[]`. Não representa ausência de secrets nem prova de erro de senha.
- Supabase Pausa AI: `ACTIVE_HEALTHY`, PostgreSQL 17.6.1.166. Sem alteração do banco real nesta retomada.
- Consulta de erros do preview nas duas horas anteriores à execução retornou zero eventos. Isso não substitui smoke autenticado nem demonstra resolução do Error 1102 de 16/10.

## Perfil local e correção

Criado `scripts/profile-worker-cpu.mjs`, executado no workerd/Miniflare instalado e PostgreSQL 17 local descartável, com dados e credenciais sintéticos. Não lê secrets nem acessa banco remoto. Captura perfis CDP `.cpuprofile`, tempos amostrados e contagem de statements PostgreSQL sem registrar SQL, parâmetros, cookies ou senhas.

O onboarding antes da correção executou **16–21 statements e 4–5 leituras de User por requisição**. Com `React.cache` em `getSessionUser` e seleção explícita dos campos de sessão, executou **13 statements e 3 leituras de User**. O framework ainda tem chamadas fora do mesmo contexto de cache: não se afirma consulta única. Nenhuma leitura de `passwordHash` foi observada nas consultas da sessão otimizada.

O cache React é limitado à renderização de Server Components e invalidado entre requisições. Não foi introduzido cache global de sessões/conexões, nem cache HTTP de páginas privadas. A validação de JWT, sessionVersion e papéis permanece ativa.

Testes com o bundle completo passaram: health, onboarding repetido, alternância de duas identidades, seis requisições simultâneas de dois titulares, revogação de sessão e RBAC USER→ADMIN→USER (403→200→403 com o mesmo token). Os testes verificam nomes sintéticos no HTML sem publicá-lo. Usuários da fixture removidos ao final. Typecheck, lint dos arquivos alterados e build Vinext passaram localmente. O workflow do PR agora inclui essa regressão com banco isolado.

O perfil isolado de bcrypt cost 12 concentra trabalho em `_encipher`/`_key`; o benchmark Node também mediu 219–282 ms de CPU por operação. Isso comprova custo local relevante, **não mede o orçamento remoto nem explica sozinho todas as falhas**. Hash/custo e autenticação não foram enfraquecidos. Inicialização Prisma/WASM, transporte e SSR continuam exigindo análise.

Perfis amostrados incluem sobrecarga de instrumentação e comportamento do runtime local; não equivalem à cobrança ou medição de CPU Cloudflare. Ganho de latência remota e estabilidade ainda não homologados.

## Evidências e gates

- [Baseline local](evidence/2026-10-22/worker-cpu-baseline.json).
- [Perfil e regressão local otimizada](evidence/2026-10-22/worker-cpu-optimized.json).
- Fontes: [Cloudflare CPU profiling](https://developers.cloudflare.com/workers/observability/dev-tools/cpu-usage/), [React cache](https://react.dev/reference/react/cache).
- Próximo gate: checks do novo commit, publicação apenas no preview existente e smoke HTTPS por SHA/deployment, com limpeza dos registros sintéticos. Até então o deployment remoto permanece no código anterior.
- Continuam pendentes: estabilidade CPU/autenticação, proteção de main/revisão independente, vulnerabilidades residuais, backup real/restore seguro, rollback integral e QA mobile/a11y.
- TASK-135: imagens originais adiadas pelo usuário até acesso ao disco removível.
- Nenhuma compra, mudança de plano ou contratação de capacidade paga.
