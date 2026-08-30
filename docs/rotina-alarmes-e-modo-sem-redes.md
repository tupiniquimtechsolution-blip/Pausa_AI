# Rotina, alarmes e modo sem redes

Data: 30/05/2026

## O que foi implementado

O Pausa AI agora possui a rota `/app/rotina` para organizar:

- horario de dormir;
- horario de acordar;
- lembretes de check-in e pausas;
- lista de tarefas;
- modo sem redes assistido.

O recurso continua 100% gratuito.

## Como funcionam os lembretes

Na web, o app usa notificacoes do navegador quando a permissao for concedida. Essa versao depende da aba estar aberta.

No app mobile companion/Expo, a pagina envia uma mensagem para a WebView e o app agenda notificacoes locais com `expo-notifications`, quando o aparelho permitir.

## Limite importante sobre alarmes do sistema

O Pausa AI nao substitui o app nativo de relogio/alarme do celular nesta fase.

Motivo:

- iOS e Android nao oferecem uma API universal e confiavel para um app web/Expo Go criar alarmes reais no app Relogio do sistema.
- notificacoes locais sao o caminho seguro para lembretes dentro do app;
- alarmes exatos em Android podem exigir permissoes e configuracoes especificas do APK;
- iOS nao permite que apps terceiros controlem o alarme nativo do usuario.

## Modo sem redes

O Pausa AI nao bloqueia Instagram, TikTok, YouTube ou outros apps diretamente.

O que ele faz agora:

- salva horario de inicio e fim;
- salva quais apps o usuario quer reduzir;
- agenda lembretes de inicio/fim;
- abre as configuracoes do aparelho quando o app mobile suportar;
- orienta o usuario a configurar Foco, Tempo de Uso ou Bem-estar Digital.

## Por que nao bloquear outros apps diretamente

Bloquear ou suspender outros aplicativos depende de recursos nativos restritos:

- Tempo de Uso/Screen Time no iOS;
- Bem-estar Digital/Focus Mode no Android;
- permissoes especiais, MDM, controles parentais ou APIs com entitlement;
- regras de loja que podem limitar apps que tentam controlar outros apps.

Por isso, a integracao atual e assistida e segura. Ela prepara o usuario e o sistema, sem prometer bloqueio automatico indevido.

## Proxima fase APK

Quando o app sair do Expo Go para APK/development build, avaliar:

1. deep links mais especificos para configuracoes Android;
2. solicitacao clara de permissao de notificacao;
3. canal de notificacao para sono, pausas e modo sem redes;
4. notificacoes locais recorrentes por dias da semana;
5. instrucoes dentro do app para configurar Bem-estar Digital/Tempo de Uso;
6. validar politica da loja antes de qualquer tentativa de bloquear apps terceiros.

