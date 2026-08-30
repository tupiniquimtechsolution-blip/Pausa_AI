# PRODUCTION_READINESS_CHECKLIST

Data: 2026-06-30

## Status resumido

O Pausa AI esta funcional em desenvolvimento, com build e testes principais estabilizados nesta bateria. Ainda nao deve ser publicado em producao.

## Pronto em dev

- Cadastro, login e logout.
- Recuperacao de senha com token local e preparo para e-mail real.
- Onboarding.
- Dashboard autenticado.
- Check-in, deteccao de risco textual e recomendacao local/IA opcional.
- Exercicios, missoes, respiracao e Corpo & Movimento.
- Yoga de bolso, praticas e sequencias.
- Rotina, tarefas, lembretes e modo sem redes assistido.
- Agenda local, parser de texto, inbox, conflitos e tempo livre.
- Caminhada inteligente com GPS, fallback sem GPS, metas, favoritas, historico e resumo.
- Admin, leads, parceiros e dashboard empresarial demonstrativo.
- Mobile Expo/WebView com typecheck passando.
- Videos existentes reconciliados: 22 `READY`, 152 `PLANNED`.

## Nao pronto para producao

- SQLite local ainda e o banco principal.
- Staging HTTPS ainda nao esta configurado.
- E-mail transacional real ainda depende de provedor e secrets.
- Revisao LGPD juridica ainda nao foi feita.
- Dashboard B2B real esta atras de feature flag; experiencia visivel continua demo/mock.
- Pipeline APK precisa de validacao segura antes de distribuicao externa.
- 152 videos instrucionais ainda nao possuem MP4.
- Artes finais nao foram preparadas nesta bateria.
- Snapshots reais de saude dependem de aparelho, Health Connect e permissoes.
- Integracoes reais de calendario/e-mail/saude nao devem ser ativadas sem ambiente e autorizacao.

## Pendencias tecnicas fora de artes/assets

| Area | Estado atual | Antes de producao |
| --- | --- | --- |
| PostgreSQL | SQLite local em `prisma/dev.db`. | Provisionar PostgreSQL gerenciado por ambiente, migrar com backup e validar seed seguro. |
| Staging HTTPS | Nao publicado. | Criar URL HTTPS, banco separado, `COOKIE_SECURE=true` e smoke test pos-deploy. |
| Secrets | `.env.example` documenta placeholders. | Guardar `DATABASE_URL`, `JWT_SECRET`, `RESEND_API_KEY`, `CRON_SECRET` e variaveis mobile no provedor, nunca no Git. |
| E-mail transacional | `RESEND_API_KEY` vazio retorna fallback seguro; recuperacao local pode exibir `resetUrl` somente em local/LAN. | Definir provedor/remetente, validar dominio, nao expor link em ambiente publico e auditar falhas. |
| Rate limit | Recuperacao de senha tem rate limit local em memoria, sem servico externo. | Trocar por rate limit persistente/distribuido no staging/prod. |
| Logs | Logs locais ignorados pelo Git. | Definir retencao, mascaramento de PII, acesso minimo e alerta para erro sensivel. |
| Auditoria | Sem trilha formal de auditoria. | Registrar eventos criticos: login, reset de senha, exportacao/exclusao de dados e acesso B2B. |
| B2B real vs demo | Demo/mock visivel; API real atras de `B2B_REAL_DASHBOARD_ENABLED`. | Decidir ativacao, permissao por empresa, minimo de usuarios e agregacao anonima. |
| APK pipeline | APKs locais existem e estao ignorados. | Validar EAS/assinatura, staging HTTPS na WebView, permissoes reais e rollback de versao. |
| LGPD | Checklist tecnico existe; sem parecer juridico. | Fechar base legal, consentimento, retencao, exportacao, exclusao e contrato B2B. |
| Backup | Sem rotina de backup local/prod. | Criar backup automatico do PostgreSQL e plano de restore testado. |
| Monitoramento | Sem APM/alerta externo. | Definir monitoramento de erro, disponibilidade, jobs, e-mail e banco. |
| Rollback | Sem plano operacional publicado. | Documentar rollback web, banco e APK antes de release. |

## Banco

Estado atual: SQLite local via Prisma, `DATABASE_URL="file:./dev.db"`.

Antes de producao:

- Criar banco PostgreSQL gerenciado para staging.
- Trocar `DATABASE_URL` por URL PostgreSQL real no ambiente de staging/producao.
- Manter banco local apenas para desenvolvimento.
- Criar backup do SQLite antes de qualquer migracao de dados reais.
- Rodar `npx.cmd prisma migrate dev` em ambiente controlado quando houver historico de migrations oficial.
- Para primeira subida controlada, usar `npx.cmd prisma db push` somente se for uma decisao consciente de MVP/staging.
- Rodar seed seguro sem dados pessoais reais.

Variaveis:

- `DATABASE_URL`
- `JWT_SECRET`
- `COOKIE_SECURE`
- `APP_BASE_URL`
- `ADMIN_EMAIL`
- `CRON_SECRET`

## E-mail

Estado atual: `RESEND_API_KEY` e `RESEND_FROM_EMAIL` existem no `.env.example`, mas sem segredo real. A recuperacao de senha retorna link local apenas para `localhost`, `127.0.0.1`, `::1` e faixas LAN privadas. A rota agora possui rate limit local em memoria para reduzir abuso em desenvolvimento/staging simples.

Antes de producao:

- Definir provedor oficial.
- Configurar dominio/remetente verificado.
- Configurar `RESEND_API_KEY` real no ambiente, nunca no Git.
- Validar fluxo de recuperacao de senha.
- Definir politica de expiracao e auditoria de tokens.
- Substituir rate limit em memoria por protecao persistente/distribuida.
- Garantir que nenhum link de reset seja retornado no corpo da resposta em ambiente publico.

## Staging

Obrigatorio:

- HTTPS.
- Dominio ou subdominio claro.
- Banco separado do desenvolvimento.
- Secrets em variaveis do provedor.
- `COOKIE_SECURE=true`.
- `APP_BASE_URL` apontando para a URL HTTPS.
- Seed sem usuarios reais e sem dados sensiveis.
- Smoke test completo depois do deploy.

## B2B

Estado atual:

- Admin, leads, parceiros e dashboard empresarial demonstrativo existem.
- `/admin/dashboard-empresas` mostra dados mockados, anonimos e consolidados.
- `/api/b2b/dashboard` retorna `enabled:false` enquanto `B2B_REAL_DASHBOARD_ENABLED` nao for `"true"`.
- Quando a feature flag e ativada, a API exige usuario admin ou `COMPANY_ADMIN` da propria empresa e bloqueia agregacao com menos de 5 usuarios.

Antes de producao:

- Definir se o B2B real sera ativado.
- Exigir minimo de usuarios antes de agregacao.
- Garantir que respostas individuais nunca aparecam no painel corporativo.
- Revisar contrato, consentimento e comunicacao com empresas.
- Separar dados por empresa/departamento com permissao explicita.
- Bloquear drill-down individual e exportacao identificavel.
- Sinalizar internamente qualquer tela demo para evitar leitura como producao real.

## APK e mobile

Estado atual:

- Existem APKs locais em `public/apk`.
- APK mais recente local: `pausa-ai-0.1.6-vc7-192.168.5.20-android14-oneui6.1-release.apk`.
- `mobile/npm.cmd run typecheck` passa.
- `mobile/App.tsx` resolve URL por `Constants.expoConfig.hostUri`, `extra.defaultWebBaseUrl` ou fallback `http://localhost:3000`.
- `mobile/app.json` contem `extra.defaultWebBaseUrl` com IP LAN historico; antes de novo APK, atualizar para staging HTTPS ou IP LAN atual de teste.
- `geolocationEnabled` esta ativo na WebView e `npm.cmd run test:mobile-gps` cobre permissoes/atalho de caminhada.

Antes de distribuicao:

- Validar WebView apontando para staging HTTPS.
- Validar permissoes no aparelho real.
- Validar Health Connect em Android real.
- Definir assinatura/release pipeline seguro.
- Nao publicar APK automaticamente a partir desta bateria.
- Para emulador Android, `localhost` da maquina geralmente precisa ser `http://10.0.2.2:3000`.
- Para celular fisico, usar `http://IP_LAN_ATUAL:3000` com servidor web acessivel na rede.
- Para LAN corporativa bloqueada, testar Expo tunnel apenas quando permitido pela politica da rede.
- Scripts existentes: `mobile/npm.cmd run start:lan`, `mobile/npm.cmd run start:tunnel`, `mobile/npm.cmd run build:apk`, `mobile/npm.cmd run build:android`. Builds release nao devem ser executados sem autorizacao.

## Videos e artes

Estado atual:

- 22 MP4 existentes foram reconhecidos como `READY`.
- 152 registros seguem `PLANNED`.
- Nenhum video novo foi criado.
- Nenhuma arte final foi preparada nesta bateria.

Antes da etapa visual:

- Definir lista prioritaria de 152 videos faltantes.
- Produzir MP4 real em H.264.
- Gerar thumbnails coerentes.
- Rodar `npm.cmd run videos:reconcile`.
- Revalidar paginas com fallback.

## Checklist minimo antes de producao

- `npm.cmd run typecheck` passando.
- `npm.cmd run build` passando.
- `npm.cmd run lint` passando.
- `npx.cmd prisma validate` passando.
- `npm.cmd run test:smoke` passando.
- `npm.cmd run test:walking` passando.
- `npm.cmd run test:mobile-gps` passando.
- `npm.cmd run test:walking:auth` passando.
- `mobile/npm.cmd run typecheck` passando.
- Staging HTTPS ativo.
- Banco PostgreSQL configurado.
- Secrets reais fora do Git.
- Revisao LGPD/juridica concluida.
- Plano de rollback.

## Reprodutibilidade local

Ordem recomendada para outro Codex reconstruir o ambiente sem `prisma/dev.db` versionado:

```powershell
npm.cmd install
Copy-Item .env.example .env
# Ajustar .env local sem segredos reais, mantendo DATABASE_URL="file:./dev.db"
npx.cmd prisma generate
npm.cmd run db:push
npm.cmd run db:seed
npm.cmd run videos:reconcile
npm.cmd run typecheck
npm.cmd run build
npm.cmd run lint
```

Observacoes:

- `prisma/dev.db` permanece ignorado pelo Git.
- O seed recria dados de desenvolvimento e status de videos conforme MP4 real em `public/videos`.
- `npm.cmd run videos:reconcile` deve ser repetido depois de qualquer MP4 novo real.
- Com `prisma.config.ts`, a configuracao Prisma carrega `.env` explicitamente; em CI/staging, variaveis devem vir do ambiente.
