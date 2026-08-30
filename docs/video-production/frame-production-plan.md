# Plano de frames para videos

Total de videos: 138
Total de frames/fotos necessarios: 1124
Frames premium existentes: 1124
Frames premium faltantes: 0
Videos prontos sem gerar imagens: 138
Videos que precisam de geracao: 0

## Regra de contagem

- Videos estaticos/rituais comportamentais: 6 fotos.
- Alongamentos, mobilidade e pausas de trabalho: 8 fotos para continuidade de movimento.
- Yoga: 12 fotos.
- Caminhada, cardio, funcional, corda e luta sombra: 12 fotos.
- Missoes classicas com movimento corporal/respiracao: 8 fotos.

## Saidas

- Plano JSON: `public/videos/frame-production-plan.json`
- Prompts JSONL: `docs/video-production/missing-frame-prompts.jsonl`
- CSV de acompanhamento: `docs/video-production/frame-production-plan.csv`
- Pastas de destino: `public/videos/frames/<slug>/`

## Observacao operacional

As imagens faltantes devem ser geradas usando a personagem premium recorrente. A imagem simplificada de cada ficha pode orientar pose, mas nao deve aparecer como visual final.
