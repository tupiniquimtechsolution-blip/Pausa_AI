# W5 — Check-in, recomendação adaptativa, notificações e progresso

Data de fechamento técnico: 26/07/2026  
Status: gate técnico aprovado; sem merge ou publicação

## Resultado

O check-in passou a registrar sono, energia, disposição, cansaço, estresse, ansiedade, humor, foco, dor/região e tempo disponível. Esses sinais alimentam um motor de regras local, versionado, explicável e auditável.

Cada decisão registra:

- versão do motor;
- fatores usados e o efeito de cada fator;
- tipo `SUGGESTION`, `ALERT`, `RESTRICTION` ou `NO_ACTIVITY`;
- intensidade, dificuldade, duração, modalidade, circuito, quantidade de movimentos e pausas;
- conteúdo a evitar;
- justificativa;
- alternativa e motivo;
- possibilidade de ignorar;
- bloqueio de segurança, quando aplicável.

O motor não diagnostica. Sugestões e restrições contextuais podem ser ignoradas; somente um bloqueio documentado por segurança impede atividade guiada.

## Entregas

- migration `20260726055045_w5_adaptive_recommendations`;
- modelos `RecommendationDecision`, `SessionFeedback` e `NotificationPlan`;
- motor `pausa-rules-2026.07.25-v1`;
- seleção apenas sobre movimentos aprovados pela W4;
- feedback de sessão concluída/abandonada e resposta pós-sessão;
- notificação planejada com assunto, horário, frequência, encerramento, privacidade, motivo e deep link seguro;
- respeito a limite diário e horário silencioso da política de notificações;
- orientação em texto sempre disponível;
- áudio opcional, sem autoplay, com controles nativos de pausar/interromper/repetir;
- resumo de Progresso em 30 dias com nível, barra, sequência, minutos, sessões, tendências, conquistas e categorias;
- monetização desativada e mecânicas punitivas desativadas.

## APIs

- `GET /api/recommendations/current`
- `POST /api/recommendations/feedback`
- `GET /api/progress/summary`

## Gate

Comandos aprovados:

```text
npm run test:w5
npm run test:w4
npm run typecheck
npm run lint -- --quiet
npm run build
```

O teste W5 cobre recomendação comum, bloqueio de segurança, persistência de fatores/versão/justificativa/alternativa e plano de notificação privado com deep link seguro. O build compilou 105 páginas.

## Rollback

1. Reverter o commit W5.
2. Reverter a migration `20260726055045_w5_adaptive_recommendations` pelo procedimento W8.
3. As recomendações antigas do `Checkin` continuam preservadas; as novas tabelas e colunas são aditivas.
