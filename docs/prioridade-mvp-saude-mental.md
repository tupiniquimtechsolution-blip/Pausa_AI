# Prioridade atual do MVP: nucleo mental mobile

Data: 29/05/2026

## Direcao do produto

Nesta etapa, o Pausa AI deve ser percebido primeiro como um app de bem-estar mental preventivo, focado em:

- ansiedade do dia a dia;
- sobrecarga por telas;
- foco;
- energia;
- sono;
- felicidade possivel;
- Corpo & Movimento leve como retorno gradual: Yoga de bolso, mobilidade, alongamentos, caminhada e casa leve.

As areas de beneficios, parceiros, B2B, admin, treinos fisicos avancados e integracoes externas continuam preservadas, mas nao devem competir com a experiencia diaria do usuario comum.

## Matriz de prioridade

| Camada | Status | O que entra |
| --- | --- | --- |
| P0 | Ativo no MVP mobile | Landing, cadastro, login, onboarding, dashboard, check-in, exercicios, Movimento leve, historico e perfil |
| P1 | Ativo no nucleo B2C | Astral do dia, recomendacao, XP, respiracao 4-4-6, pausa sem tela, Yoga de bolso, mobilidade e alongamentos leves |
| P2 | Disponivel por rota direta | Insights, beneficios, empresas, precos e admin |
| P3 | Oculto temporariamente | Parceiros, Wellhub/TotalPass, social buttons, treinos fisicos avancados e integracoes externas |
| P4 | Futuro | APK final, dashboard B2B real, relatorios PDF, monetizacao e integracoes reais |

## Nucleo visivel

Navegacao interna visivel:

- Hoje;
- Check-in;
- Exercicios;
- Movimento;
- Historico;
- Perfil.

`/app/movimento` esta ativo como hub visual gratuito de retorno gradual. A experiencia principal mostra Yoga de bolso, mobilidade, alongamentos, caminhada e casa leve. Pular corda, luta sombra e jumping continuam posicionados como proximas trilhas gratuitas, com alternativas seguras antes de entrarem como fluxo principal.

## P4 - criterio para executar

Para iniciar publicacao e distribuicao sem improviso, sera necessario:

- QA completo no celular fisico;
- URL HTTPS para staging;
- conta Expo/EAS ativa;
- autorizacao para rede externa e upload do build mobile;
- decisao sobre PostgreSQL de producao;
- checklist LGPD operacional;
- plano de suporte para recuperacao de senha por e-mail real.

Ja esta preparado:

- `mobile/eas.json`;
- package Android `com.pausaai.mobile`;
- app companion Expo/WebView;
- assets mobile basicos;
- smoke tests iniciais;
- ponte para haptics/notificacoes nativas;
- B2B e admin por URL direta.

## Criterios de aceite atuais

- Usuario novo entende o que fazer em menos de 1 minuto.
- Check-in gera recomendacao coerente com scores, tags e observacao.
- Risco textual interrompe recomendacao comum.
- Exercicios principais carregam com imagem.
- Movimento mostra trilhas leves, gratuitas e sem Premium.
- TypeScript e build passam.
- Expo Go abre o fluxo principal.
