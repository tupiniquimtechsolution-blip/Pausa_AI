# W2 — Relatório de correções críticas e estabilização

Data do gate: 25/07/2026  
Decisão: **GO**

## Entregas

### Agenda e concorrência

- serviço central `reservation-service` para reservas de período;
- mutex por usuário/dia e transação como autoridade;
- validação de período, timezone, edição, cancelamento e compatibilidade com eventos legados;
- reserva versionada e idempotente;
- feedback preventivo no frontend;
- backend retorna `409 SCHEDULE_CONFLICT`, título e período do item conflitante;
- duas requisições simultâneas testadas: uma criação e um conflito, sem duplicidade.

### Voz, imagem e permissões

- voz solicita microfone antes de iniciar;
- transcrição Web Speech usada apenas quando suportada;
- câmera solicita permissão e abre captura;
- galeria abre seletor nativo;
- indisponibilidade de OCR/transcrição é comunicada sem simulação;
- configurações nativas continuam mediadas pelo bridge e pela matriz de capacidades;
- revalidação no retorno permanece centralizada no `PlatformCapabilityProvider`.

### Botões

- componente base com área mínima de toque, foco visível, `loading`, estado desabilitado e motivo;
- auditoria estática de `type`, ação e nome acessível;
- sete falhas legadas corrigidas;
- 30 botões em 20 arquivos aprovados;
- matriz coberta para desktop web, mobile web, WebView, Android e iOS.

### Modo Foco

- durações 25, 45 e 60 minutos e duração personalizada de 1 a 120 minutos;
- iniciar, pausar, retomar, reiniciar e cancelar;
- máquina de estados testável;
- persistência local e recuperação após reload/background;
- token idempotente no servidor;
- bloqueio de timer concorrente por usuário;
- cancelamento sem linguagem punitiva.

### Modo Sem Redes

- objetivo, categorias e exceções normalizados;
- detecção de plataforma via serviço central;
- estado real `PARTIAL`, `MANUAL_CONFIGURATION` ou `UNSUPPORTED`;
- nenhuma promessa de bloquear apps diretamente;
- lembretes e relatórios permanecem disponíveis;
- atalhos usam nomes compreensíveis dos controles do sistema.

### Notificações e temas

- política persistida de máximo diário, intervalo mínimo, horários silenciosos e redução por ignoradas;
- privacidade `SHOW_ALL`, `HIDE_SENSITIVE` ou `HIDE_CONTENT`;
- conteúdo sensível é ocultado na tela bloqueada conforme preferência;
- solicitação automática de notificação ao carregar foi removida;
- temas continuam centralizados nos tokens W1.

## Migration

- migration: `20260725213000_w2_critical_stabilization`;
- estratégia: expansão;
- tabelas adicionadas: `ScheduleMutex`, `ScheduleReservation`, `NotificationPolicy`;
- campos aditivos em `SocialDowntime` e `FocusSession`;
- 52 tabelas preexistentes preservadas sem mudança de contagem;
- integridade SQLite: `ok`;
- chaves estrangeiras: zero violações;
- migration validada em cópia representativa e aplicada depois em `dev.db`.

## Gate e evidências

| Teste | Resultado |
| --- | --- |
| `npm run test:w2` | passou |
| `W2_DB_CHECK=true npm run test:w2` | passou |
| `npm run test:w2:gate` | passou |
| `npm run test:buttons` | passou |
| `npm run test:migration-integrity` | passou |
| `npm run typecheck` | passou |
| `npm run lint` | passou sem avisos |
| build Next de produção isolado | passou, 87 rotas |
| concorrência de agenda via HTTP | `200` + `409` |
| ciclo de foco via HTTP | passou |
| timer duplicado | bloqueado com `409` |
| política de fadiga/privacidade | passou |
| Modo Sem Redes no desktop | `UNSUPPORTED`, sem bloqueio simulado |

## Rollback

1. interromper uso das novas rotas e serviços;
2. restaurar o commit anterior à W2;
3. preservar tabelas e campos adicionados durante o ciclo de compatibilidade;
4. restaurar o banco a partir do backup W0 somente se houver dano comprovado;
5. contração física fica adiada para release posterior.

## Limitações registradas

- gravação de áudio em background permanece pesquisa/POC condicionada à plataforma;
- OCR requer provedor aprovado e continua indisponível sem credencial;
- bloqueio direto de outros apps não é prometido;
- validação final de toque e contraste em dispositivos reais será repetida na W8.
