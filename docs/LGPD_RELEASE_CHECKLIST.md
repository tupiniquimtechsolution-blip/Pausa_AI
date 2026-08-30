# LGPD_RELEASE_CHECKLIST

Data: 2026-06-30

Este documento e um checklist tecnico de privacidade. Nao substitui revisao juridica.

## Dados coletados

- Nome, e-mail, senha com hash e papel do usuario.
- Preferencias de onboarding: objetivo, tempo diario, horario preferido, estresse, area de dificuldade, sono, horas livres/trabalho e preferencias de movimento.
- Check-ins: humor, foco, estresse, energia, sono, texto livre, tags, area primaria/secundaria, recomendacao e indicacao de risco.
- Missoes, exercicios, yoga, foco e progresso: sessoes, XP, conquistas e historico.
- Rotina: lembretes, tarefas, alarmes pretendidos, modo sem redes assistido e apps informados.
- Agenda: eventos, tarefas, lembretes, habitos, conexoes de calendario preparadas, inbox e fila de sync.
- Caminhada: modo, objetivo, horario, duracao, distancia, rota quando GPS estiver ativo, privacidade, humor/estresse/ansiedade antes e depois, notas.
- Saude: passos, sono, frequencia cardiaca media quando informado/sincronizado.
- B2B/admin: leads comerciais, parceiros, interesses, empresa demo e metricas mockadas.

## Onde persistem

- Desenvolvimento local: SQLite em `prisma/dev.db`, ignorado pelo Git.
- Futuro staging/producao: deve ser PostgreSQL ou banco gerenciado equivalente.
- Cookies: sessao em cookie httpOnly com JWT.
- LocalStorage/browser: preferencias visuais, notificacoes locais/favoritos em componentes client-side.

## Exclusao e direitos do titular

Ja existe tecnicamente:

- Exclusao de sessoes de caminhada por API autenticada (`DELETE /api/walking/sessions/[id]`), coberta por `npm.cmd run test:walking:auth`.
- Exclusao de eventos, tarefas, lembretes, inbox, rotina e conexoes de calendario por rotas autenticadas especificas.

Antes de producao, implementar ou documentar:

- Exclusao de conta pelo usuario.
- Exportacao de dados em formato legivel.
- Remocao de check-ins, sessoes, rotas e rotina.
- Revogacao de consentimento para notificacoes, Health Connect e GPS.
- Retencao maxima de logs e tokens.
- Processo administrativo para atender solicitacoes de titular.
- Testes automatizados para exclusao/exportacao de conta completa.

## Telas existentes

- `/privacidade`
- `/termos`
- `/app/perfil`
- Preferencias de comunicacao no perfil.
- Fluxos de caminhada com privacidade/fallback sem GPS.

## Caminhada, GPS e fallback

Estado atual:

- Caminhada aceita GPS ou modo temporizador.
- Rota pode ocultar bordas (`hideRouteEdges`).
- Privacidade pode ser `private` ou intencao visual equivalente.
- Fallback sem GPS foi validado por teste autenticado.
- WebView mobile esta com `geolocationEnabled`.
- Testes cobrem GPS indisponivel/fallback timer, rota mascarada e exclusao de sessao.

Antes de producao:

- Explicar uso de localizacao em linguagem clara.
- Solicitar permissao somente quando necessaria.
- Permitir uso sem GPS.
- Permitir exclusao de sessoes e rotas.
- Validar mascaramento de rota em casos reais.
- Definir retencao de pontos de rota e criterio de minimizacao.
- Garantir que privacidade `public` nao exponha mapa individual em B2B.

## Check-ins e dados sensiveis

Riscos:

- Texto livre pode conter informacoes sensiveis de saude, trabalho, familia ou risco.
- Scores de humor/estresse/sono/energia podem ser interpretados como dados de saude/comportamento.
- O app nao deve alegar diagnostico, terapia ou substituicao de atendimento medico.

Controles necessarios:

- Aviso claro de limite nao terapeutico.
- Deteccao de risco com orientacao de apoio imediato.
- Evitar exibir conteudo individual em B2B.
- Revisar retencao de texto livre.
- Definir se texto livre pode ser editado/apagado pelo usuario.
- Criar exportacao que diferencie dados informados, inferidos e agregados.
- Definir politica para dados de risco/crise, inclusive logs e atendimento.

## Saude e Health Connect

Estado atual:

- Modelos e rotas existem para `HealthMetricSnapshot`.
- Mobile possui ponte nativa para leitura/exportacao quando o aparelho e permissoes permitem.
- Banco local atual nao depende de snapshots reais para passar nos testes.

Riscos:

- Passos, sono, frequencia cardiaca e treino podem ser dados sensiveis de saude/comportamento.
- Permissoes do Health Connect precisam ser granulares, revogaveis e explicadas.

Antes de producao:

- Consentimento explicito para cada tipo de dado de saude.
- Tela ou fluxo para revogar sincronizacao e apagar snapshots.
- Validacao em Android real com Health Connect instalado.
- Registro tecnico de fonte (`MANUAL`, `HEALTH_CONNECT` ou equivalente) e retencao.

## Recuperacao de senha

Estado atual:

- Token local com hash, expiracao e uso unico.
- E-mail real depende de provedor.
- Link de reset so volta no JSON para localhost, loopback e LAN privada.
- Existe rate limit local em memoria para reduzir abuso em desenvolvimento/staging simples.

Antes de producao:

- Enviar link por provedor verificado.
- Nao vazar se e-mail existe.
- Auditar tentativas e rate limit.
- Garantir `APP_BASE_URL` HTTPS.
- Trocar rate limit em memoria por protecao persistente/distribuida.
- Registrar eventos de reset sem armazenar token em claro.

## Consentimento

Antes de producao, explicitar consentimento para:

- Termos e privacidade.
- Check-ins e tratamento de dados de bem-estar.
- Notificacoes.
- Health Connect/dados de saude.
- GPS/localizacao.
- Uso B2B agregado, quando aplicavel.
- E-mail transacional e preferencias de comunicacao.
- Retencao de historico de bem-estar.

## Rotina, agenda e notificacoes

Estado atual:

- Rotina, tarefas, lembretes, agenda e modo sem redes assistido existem.
- O modo sem redes e assistido: orienta configuracoes do aparelho e nao promete bloqueio automatico total.
- Conexoes de calendario existem como preparo tecnico, sem integracao externa real ativa nesta bateria.

Antes de producao:

- Documentar exatamente quais dados ficam locais, no banco e no aparelho.
- Permitir revogar notificacoes e conexoes.
- Definir retencao para lembretes, tarefas, eventos e fila de sync.
- Garantir que textos de permissao expliquem recuperacao via configuracoes do sistema.

## Logs

- Nao registrar `JWT_SECRET`, tokens de reset, `RESEND_API_KEY`, senhas ou texto sensivel de check-in.
- Logs locais `*.log` estao ignorados pelo Git.
- Definir retencao e acesso em staging/producao.
- Mascarar e-mail, rota GPS, textos livres e IDs quando logs forem enviados a servico externo.
- Criar checklist de incidentes e acesso administrativo.

## B2B e mock

Estado atual:

- Dashboard demo usa dados mockados, anonimos e consolidados.
- API real B2B fica atras de feature flag.
- API real exige permissao por empresa e minimo de 5 usuarios antes de agregar.

Antes de producao:

- Definir limiar minimo de usuarios por empresa/time.
- Garantir anonimato e agregacao.
- Bloquear drill-down individual.
- Revisar contrato e consentimento corporativo.
- Sinalizar com clareza quando uma tela e demonstrativa para evitar decisao corporativa baseada em dado fake.
- Definir relacao controlador/operador e base legal do tratamento B2B.

## Auditoria tecnica pendente

- Nao ha trilha formal para login, reset, exportacao, exclusao de conta e acesso B2B.
- Criar eventos de auditoria minimizados, sem payload sensivel.
- Proteger auditoria contra alteracao por usuarios comuns.
- Testar exportacao/exclusao antes de qualquer producao.

## Pontos para revisao juridica

- Base legal para dados de bem-estar e saude.
- Texto final de politica de privacidade.
- Texto final de termos de uso.
- Consentimento de dados sensiveis.
- Retencao e exclusao.
- Relacao B2B/controlador-operador.
- Transferencia internacional se provedores externos forem usados.
- Avisos de crise/risco e responsabilidade.
