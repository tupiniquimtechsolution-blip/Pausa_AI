# Relatorio de pendencias de configuracao

Data: 2026-07-02  
Escopo: configuracao tecnica, ambiente, publicacao, seguranca, banco, mobile e operacao.  
Fora do escopo: qualquer item de arte, design visual, imagens, thumbnails, videos, identidade visual ou producao criativa.

Atualizacao em 2026-07-03: foram aplicadas as correcoes locais possiveis sem provedor externo: `.env` local completado, `JWT_SECRET` local trocado por valor forte, `CRON_SECRET` local criado, guardrail de `JWT_SECRET` fraco em runtime de producao, IP LAN historico removido de `mobile/app.json` e scripts `npm.cmd run config:check`, `npm.cmd run config:check:staging` e `npm.cmd run config:check:production` criados para validar configuracao.

## Resumo executivo

O projeto esta compilando e os checks tecnicos executados nesta auditoria passaram. As pendencias restantes nao sao de codigo quebrado; sao principalmente configuracoes necessarias para staging, producao, mobile externo, seguranca operacional e conformidade.

Status atual: adequado para desenvolvimento local e testes internos controlados.  
Status para producao publica: nao pronto.

## Validacao executada nesta auditoria

| Comando | Resultado |
| --- | --- |
| `$env:DATABASE_URL='file:./dev.db'; npx.cmd prisma validate` | Passou. |
| `npm.cmd run typecheck` | Passou. |
| `npm.cmd run build` | Passou, com 82 rotas geradas. |
| `npm.cmd run lint` | Passou com 0 erros e 16 warnings. |
| `$env:DATABASE_URL='file:./dev.db'; npm.cmd run test:walking` | Passou. |
| `npm.cmd run test:mobile-gps` | Passou. |
| `cd mobile; npm.cmd run typecheck` | Passou. |

Observacao: os testes HTTP que exigem servidor ativo, como `npm.cmd run test:smoke` e `npm.cmd run test:walking:auth`, nao foram executados nesta auditoria porque o objetivo foi levantar configuracoes pendentes. Eles devem entrar no gate antes de qualquer publicacao.

## Estado do ambiente local

O arquivo `.env` local existe, mas nao deve ser tratado como configuracao de producao.

Variaveis presentes no `.env` local:

- `DATABASE_URL`: definida.
- `JWT_SECRET`: definido como placeholder, precisa ser trocado.
- `OPENAI_API_KEY`: em branco; aceitavel para fallback local.
- `ADMIN_EMAIL`: definido.
- `NEXT_PUBLIC_INSTAGRAM_URL`: definido.
- `NEXT_PUBLIC_SPOTIFY_URL`: em branco; opcional.

Variaveis documentadas/esperadas que nao estao no `.env` local:

- `COOKIE_SECURE`
- `APP_BASE_URL`
- `CRON_SECRET`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `B2B_REAL_DASHBOARD_ENABLED`

Isto nao bloqueia desenvolvimento local, mas bloqueia uma configuracao segura de staging/producao.

## Pendencias de alta prioridade

| Area | Estado atual | Pendencia objetiva |
| --- | --- | --- |
| Segredo de sessao | Corrigido localmente em 2026-07-03; runtime de producao agora rejeita segredo fraco. | Criar segredo longo, aleatorio e exclusivo tambem em staging/producao; nunca reutilizar o valor local. |
| Banco | Prisma usa SQLite local em `prisma/dev.db`. | Provisionar PostgreSQL gerenciado para staging/producao, com backup, restore testado e plano de migracao. |
| Staging HTTPS | Nao ha URL HTTPS configurada no projeto local. | Publicar staging HTTPS, definir `APP_BASE_URL` e validar login, cadastro, check-in e rotas autenticadas. |
| Cookies | Corrigido localmente com `COOKIE_SECURE=false`; no codigo fica seguro quando `COOKIE_SECURE=true` ou `VERCEL=1`. | Em staging/producao, configurar `COOKIE_SECURE=true` e servir apenas por HTTPS. |
| E-mail transacional | `RESEND_FROM_EMAIL` foi padronizado localmente; `RESEND_API_KEY` segue vazio por nao haver provedor real. | Configurar provedor, dominio/remetente verificado e secrets no provedor de deploy. |
| Recuperacao de senha | Sem e-mail real, o fluxo nao envia link por provedor. Em local/LAN, a rota pode devolver `resetUrl` para teste. | Em ambiente publico, garantir `APP_BASE_URL` HTTPS, e-mail real, auditoria e nenhum link de reset exposto no corpo da resposta. |
| Cron | Corrigido localmente com `CRON_SECRET` forte. | Configurar agendador externo e segredo proprio em staging/producao. |
| Mobile/WebView | Corrigido localmente: `mobile/app.json` nao embute mais o IP LAN historico; fallback atual e `http://localhost:3000`. Android ainda permite HTTP claro para testes locais. | Antes de novo APK externo, apontar para staging HTTPS ou IP LAN atual de teste; para producao, remover dependencia de HTTP local. |
| APK/release | APKs locais existem, mas nao sao pipeline de distribuicao externa. | Definir assinatura, EAS/release pipeline, rollback, versao e validacao em aparelho real. |
| LGPD e privacidade | Checklist tecnico existe, mas revisao juridica final e fluxos completos ainda faltam. | Fechar base legal, consentimentos, retencao, exportacao de dados, exclusao de conta e processo de titular. |

## Pendencias de seguranca e operacao

| Area | Estado atual | Antes de producao |
| --- | --- | --- |
| Rate limit | Recuperacao de senha usa rate limit em memoria. | Trocar por mecanismo persistente/distribuido. |
| Auditoria | Nao ha trilha formal para login, reset, exportacao, exclusao e acesso B2B. | Criar eventos de auditoria minimizados, sem payload sensivel, protegidos contra alteracao indevida. |
| Logs | Logs locais estao ignorados pelo Git; nao ha politica operacional de retencao/mascara. | Definir mascaramento de e-mail, tokens, texto livre, rota GPS e IDs antes de enviar logs a servico externo. |
| Monitoramento | Nao ha APM/alerta externo configurado. | Monitorar disponibilidade, erros, banco, jobs, e-mail e rotas criticas. |
| Backup | Nao ha rotina de backup de ambiente produtivo. | Configurar backup automatico do PostgreSQL e executar teste de restore. |
| Rollback | Nao ha plano operacional publicado. | Documentar rollback web, banco e APK antes de qualquer release. |
| Incidentes | Nao ha checklist de incidente/privacidade operacional. | Definir responsaveis, severidade, comunicacao e preservacao de evidencias. |

## Pendencias de B2B

O dashboard B2B real continua atras de `B2B_REAL_DASHBOARD_ENABLED`. Como a variavel nao esta definida, a API retorna o modo desativado e a experiencia principal permanece demo/mock.

Antes de ativar B2B real:

- Definir se o painel real sera ativado em staging.
- Configurar `B2B_REAL_DASHBOARD_ENABLED=true` somente em ambiente controlado.
- Validar permissao por empresa e por papel de usuario.
- Preservar minimo de 5 usuarios antes de qualquer agregacao.
- Bloquear drill-down individual.
- Revisar contrato, consentimento corporativo e relacao controlador/operador.

## Pendencias de Health Connect, GPS e permissoes mobile

Os checks estaticos passaram, mas integracoes de aparelho real ainda exigem validacao manual.

Antes de piloto externo:

- Testar Android real com Health Connect instalado.
- Validar consentimento granular para passos, sono, frequencia cardiaca e exportacao de exercicio.
- Confirmar revogacao de permissoes e apagamento de snapshots.
- Validar GPS preciso/aproximado e fallback sem GPS em APK instalado.
- Confirmar que a WebView usa URL correta de staging HTTPS ou IP LAN atual de teste.

## Variaveis por ambiente recomendadas

### Local

- `DATABASE_URL="file:./dev.db"`
- `JWT_SECRET`: valor local nao reutilizado.
- `COOKIE_SECURE="false"`
- `APP_BASE_URL="http://localhost:3000"`
- `ADMIN_EMAIL`
- `OPENAI_API_KEY=""` quando quiser manter fallback local.

### Staging

- `DATABASE_URL`: PostgreSQL separado.
- `JWT_SECRET`: segredo forte e exclusivo.
- `COOKIE_SECURE="true"`
- `APP_BASE_URL`: URL HTTPS de staging.
- `CRON_SECRET`: segredo forte.
- `RESEND_API_KEY` e `RESEND_FROM_EMAIL`: provedor validado.
- `B2B_REAL_DASHBOARD_ENABLED="false"` por padrao, ate decisao explicita.
- `OPENAI_API_KEY`: opcional; manter fallback local validado.

### Producao

- Banco gerenciado separado do staging.
- Segredos exclusivos, rotacionaveis e fora do Git.
- HTTPS obrigatorio.
- Cookies seguros.
- E-mail transacional validado.
- Monitoramento, backup, auditoria, rollback e LGPD fechados.
- APK apontando para URL publica segura, nao para IP LAN.

## Ordem recomendada para resolver

1. Criar staging HTTPS com variaveis reais fora do Git.
2. Provisionar PostgreSQL gerenciado separado do local.
3. Configurar e-mail transacional e `APP_BASE_URL` HTTPS.
4. Configurar agendador externo para usar `CRON_SECRET` do ambiente.
5. Atualizar `mobile/app.json` para staging HTTPS antes de novo APK.
6. Validar APK em Android real com login, cookies, GPS, notificacoes e Health Connect.
7. Implementar rate limit persistente, auditoria e politica de logs.
8. Fechar exportacao/exclusao de dados e revisao juridica LGPD.
9. Executar `npm.cmd run config:check` localmente e `npm.cmd run config:check:staging` no ambiente de staging.
10. Executar gate completo: `typecheck`, `build`, `lint`, `test:smoke`, `test:walking`, `test:walking:auth`, `test:mobile-gps` e `mobile/typecheck`.

## Conclusao

Nao ha bloqueio de compilacao no estado atual. A pendencia central e transformar o MVP local em ambiente publicavel: HTTPS, PostgreSQL, secrets fortes, e-mail real, cron seguro, mobile apontando para URL correta, auditoria, logs, backup, rollback e LGPD finalizada.

Este relatorio remove deliberadamente qualquer pendencia da parte artistica.
