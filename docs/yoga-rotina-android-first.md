# Pausa AI - Yoga instrucional e Rotina Android-first

## Yoga

As praticas ficam no modelo `YogaPractice` e sao semeadas por `lib/yoga-data.ts`.
Cada pratica possui:

- `imageKey`
- `imageSequenceKeys`
- `imagePrompt`
- `imageSequencePrompt`
- `imageFrameDescriptions`
- conteudo instrucional completo: objetivo, como fazer, postura, respiracao, erros comuns, cuidados e progressao

As sequencias compostas ficam em `YogaSequence`. Elas combinam praticas ja existentes por `practiceSlugs`; nao criam movimentos novos.

Os videos guiados de Yoga usam o mesmo modelo `InstructionalVideo` das fichas de Corpo & Movimento:

- praticas: `targetType=YOGA_PRACTICE`;
- sequencias: `targetType=YOGA_SEQUENCE`;
- URLs planejadas em `public/videos/<slug>.mp4`;
- thumbnails planejadas em `public/videos/thumbs/<slug>.jpg`.

Enquanto o MP4 final nao existir, a ficha de Yoga preserva a sequencia de imagens e mostra o estado honesto de video em producao.

## Imagens

Os arquivos finais de Yoga devem ser colocados em `public/yoga/`.

Exemplo:

- `public/yoga/postura-da-crianca-1.png`
- `public/yoga/postura-da-crianca-2.png`
- `public/yoga/postura-da-crianca-3.png`
- `public/yoga/postura-da-crianca-4.png`
- `public/yoga/postura-da-crianca-5.png`

Missoes mentais usam 3 imagens por pratica em `public/exercises/`.
Corpo & Movimento e Yoga usam 3 a 5 imagens por pratica, com foco em inicio, transicao, execucao, permanencia e retorno.

Enquanto os PNGs finais nao existirem, `YogaImageSequence` e `ExerciseImageSequence` mostram placeholders responsivos sem quebrar o app.

## Recomendacao

`getRecommendedYogaPractice(checkin, practices, userLevel)` reduz a dificuldade quando:

- `energyScore <= 2`
- `sleepScore <= 2`
- `stressScore >= 4`

Nesses casos, a recomendacao fica em niveis 1 ou 2, priorizando yoga restaurativa, respiracao e mobilidade leve.

## Rotina, notificacoes e alarmes

A web usa `lib/native-routine-bridge.ts` para conversar com o app Expo/WebView.
No APK Android, `mobile/nativeFeedback.ts` tenta:

- solicitar permissao de notificacao com `expo-notifications`;
- agendar notificacoes locais;
- abrir configuracoes do app e notificacoes;
- abrir telas de Bem-estar Digital, foco ou configuracoes gerais quando o Android permitir;
- criar eventos no calendario via `expo-calendar`;
- abrir o app Relogio com intent de alarme quando possivel.

Quando Android/iOS nao permitem automacao direta, o app mostra uma mensagem honesta e orienta configuracao manual.

## APK local e HTTP de teste

O APK release local fica em `mobile/android/app/build/outputs/apk/release/app-release.apk`.
Para teste no trabalho ou na mesma rede, o `app.json` usa `extra.defaultWebBaseUrl` e o AndroidManifest gerado esta com `android:usesCleartextTraffic="true"` para permitir `http://IP_DA_MAQUINA:3000`. Em producao, a URL recomendada continua sendo HTTPS.

## Modo Sem Redes

O app nao promete bloquear redes sociais diretamente.
Ele salva a intencao do usuario, agenda lembretes e oferece atalhos/instrucoes para:

- Android: Bem-estar Digital, temporizadores de apps, Modo Foco e Hora de Dormir.
- iOS: Ajustes > Tempo de Uso > Limites de Apps ou Repouso.

## Calendario e tarefas

Tarefas podem tentar sincronizar com calendario nativo no APK.
Na web, o fallback oferece:

- Google Calendar;
- arquivo `.ics`;
- tarefa interna no Pausa AI.

## Limites conhecidos

- Web Push real exige HTTPS e service worker de producao.
- iOS nao permite que apps terceiros criem alarmes nativos livremente.
- Android pode variar a tela aberta dependendo do fabricante.
- Bloqueio direto de redes sociais depende dos recursos do sistema operacional, nao do Pausa AI.
