# Planejamento De Videos Pausa AI

Documento interno para producao dos videos instrucionais curtos do Pausa AI.

## Objetivo

Planejar, roteirizar e preparar a integracao de 174 videos:

- 116 fichas de Corpo & Movimento.
- 22 Missoes Classicas.
- 30 Praticas de Yoga.
- 6 Sequencias de Yoga.

Os videos serao usados nas fichas instrucionais web/mobile. O app deve continuar funcionando com imagens enquanto os MP4 finais nao forem anexados.

## Identidade

- Estetica calma, limpa e encorajadora.
- Sem visual fitness agressivo.
- Sem academia escura, neon, competicao ou performance.
- Preferir sala clara, luz natural, plantas, mesa organizada e ambientes de casa/trabalho.
- Linguagem de bem-estar preventivo, nunca clinica.

## Especificacao Tecnica

- Formato principal: vertical 9:16.
- Formato secundario: 1:1 para cards.
- Resolucao minima: 1080 x 1920.
- Frame rate: 30fps.
- Legendas: sempre presentes.
- Narracao: portugues brasileiro neutro, voz suave e ritmo lento.
- Musica: instrumental suave, volume entre 20% e 30% da narracao.
- Exportacao: MP4 H.264.

## Estrutura De Roteiro

Todos os videos seguem a mesma estrutura:

1. Abertura suave, 0 a 5 segundos.
2. Beneficio imediato, 6 a 15 segundos.
3. Preparacao, 16 a 25 segundos.
4. Execucao guiada ate o penultimo bloco.
5. Encerramento nos ultimos 10 segundos, com frase de reconhecimento, 2 segundos de silencio e fade suave.

Frases preferidas:

- "No seu ritmo."
- "So o que for confortavel."
- "Pode adaptar."
- "Isso ja conta."
- "Voce acabou de fazer algo por voce."

Frases proibidas:

- "Vamos la!"
- "Arrasa!"
- "Forca!"
- "Sente a queimacao."
- "Doi pra crescer."

## Ondas De Producao

### Onda 1 - Prioridade maxima

Videos core:

- Respiracao 4-4-6.
- Mobilidade de coluna.
- Caminhada consciente.
- Reset postural.
- Pausa sem tela.
- Yoga de bolso: coluna leve.
- Alongamento leve.

### Onda 2 - Corpo & Movimento nao regional

Gravar os exercicios de funcional em casa, corda, cardio leve, mobilidade, luta sombra, caminhada, pausas de trabalho e yoga fisico/instrucional.

### Onda 3 - Alongamentos regionais

Gravar por lotes anatomicos:

- Pescoco.
- Ombros.
- Punhos e maos.
- Coluna.
- Quadril.
- Posterior de coxa.
- Panturrilha.
- Tornozelo.
- Peito.
- Lombar.
- Joelhos.
- Escapulas.
- Mobilidades articulares.

### Onda 4 - Missoes comportamentais

Gravar as 22 Missoes Classicas com estilo mais narrativo e comportamental.

## Duracao Por Tipo

- Alongamento regional: 60 a 90 segundos.
- Mobilidade: 2 a 3 minutos.
- Yoga de bolso: 3 a 5 minutos.
- Caminhada guiada: 2 a 4 minutos.
- Cardio leve, funcional e luta sombra: 2 a 3 minutos.
- Missao comportamental/mental: 60 a 120 segundos.
- Missao com exercicio fisico: 2 a 4 minutos.
- Respiracao 4-4-6: 3 a 5 minutos com animacao sincronizada.

## Integracao Com O App

O banco usa o modelo `InstructionalVideo`.

Cada video planejado possui:

- `slug`
- `targetType`
- `targetSlug`
- `title`
- `category`
- `durationSeconds`
- `videoUrl`
- `thumbnailUrl`
- `tags`
- `intensity`
- `equipment`
- `position`
- `benefitPrimary`
- `narrationScript`
- `batchWave`
- `status`
- `approvalChecklist`

Arquivos finais:

- MP4: `public/videos/<slug>.mp4`
- Thumbnail: `public/videos/thumbs/<slug>.jpg`

Enquanto o arquivo MP4 nao existir, o app mostra o bloco "Video guiado em producao" e preserva a imagem atual da ficha.

Yoga usa o mesmo modelo:

- Praticas: `targetType=YOGA_PRACTICE`, `targetSlug=<slug-da-pratica>`.
- Sequencias: `targetType=YOGA_SEQUENCE`, `targetSlug=<slug-da-sequencia>`.
- As fichas em `/app/yoga/[slug]` mostram o bloco de video guiado quando houver planejamento em `InstructionalVideo`.

## APIs

- `GET /api/videos`
- `GET /api/videos?targetType=EXERCISE_INSTRUCTION&targetSlug=mobilidade-de-coluna`
- `GET /api/videos?targetType=YOGA_PRACTICE&targetSlug=postura-da-crianca`
- `GET /api/videos/[slug]`

## Checklist De Aprovacao

- Duracao dentro do range da categoria.
- Abertura com nome do exercicio em audio e texto.
- Beneficio claro em ate 10 segundos.
- Narracao gentil, sem jargao e sem imperativo agressivo.
- Legendas presentes e legiveis.
- Qualidade de imagem maior ou igual a 1080p.
- Audio limpo, sem eco ou ruido de fundo.
- Musica de fundo sem sobrepor narracao.
- Encerramento com frase de reconhecimento.
- Fade de saida suave.
- Metadados JSON gerados e salvos.
- Thumbnail gerada entre segundo 10 e 20.
- Arquivo exportado em H.264 MP4.

## Observacoes De Seguranca

- Nao diagnosticar.
- Nao prometer cura.
- Nao sugerir que o video substitui orientacao profissional.
- Em exercicios fisicos, sempre orientar: pare se sentir dor, tontura, falta de ar intensa ou desconforto incomum.
- Em praticas mentais, sempre validar que a pessoa pode adaptar, pausar ou buscar apoio humano.
