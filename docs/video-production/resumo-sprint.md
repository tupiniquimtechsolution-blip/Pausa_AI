# Sprint de videos Pausa AI

Gerado em 2026-06-08T12:23:49.632Z.

## Entregas criadas

- Manifesto mestre: `public/videos/video-manifest.json`
- Indice do lote: `public/videos/video-production-index.json`
- Metadados individuais: `public/videos/metadata/*.json`
- Thumbnails verticais: `public/videos/thumbs/*.jpg`
- Roteiros completos: `docs/video-production/roteiros.md`
- Checklist CSV: `docs/video-production/checklist-videos.csv`

## Regra visual

Os videos devem usar a personagem premium recorrente das imagens geradas anteriormente. Assets simplificados das fichas continuam no manifesto apenas como referencia tecnica de pose/composicao, nunca como personagem final.

## Contagem

- Total: 138
- Corpo & Movimento: 116
- Missoes Classicas: 22
- Imagem da ficha como personagem premium: 10
- Imagem da ficha apenas como pose: 125
- Sem imagem de ficha, usando referencia premium: 3

## Ondas

- Onda 1: 11 videos
- Onda 2: 22 videos
- Onda 3: 88 videos
- Onda 4: 17 videos

## Categorias

- Alongamentos Regionais: 89
- Caminhada: 2
- Cardio Leve: 2
- Funcional em Casa: 2
- Luta Sombra: 1
- Missoes Classicas: 22
- Mobilidade: 8
- Pausas de Trabalho / Telas: 7
- Pular Corda: 1
- Yoga Fisico / Instrucional: 4

## Status editorial

Este sprint deixa prontos roteiros, metadados, URLs publicas planejadas e thumbnails. O status de publicacao continua pendente para os arquivos MP4 finais, porque a filmagem humana/demonstracao real e a exportacao H.264 precisam ser feitas fora deste gerador ou por um renderizador de video conectado ao pipeline.

## Regra de aprovacao

Nenhum item deve ser marcado como `pronto para publicacao` ate que o MP4 final exista em `public/videos`, com narracao, legendas, audio limpo, fade e validacao do checklist.
