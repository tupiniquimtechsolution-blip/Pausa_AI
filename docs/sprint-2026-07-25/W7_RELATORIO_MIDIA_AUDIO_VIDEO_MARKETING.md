# W7 — Mídia, áudio, vídeo, marketing e compartilhamento

Data de fechamento técnico: 26/07/2026  
Status: gate técnico aprovado; sem merge, publicação externa ou ativação de conector

## Biblioteca Mestre de Mídia

Foram implementados os modelos:

- `MediaAsset`;
- `MediaVersion`;
- `MediaLocalization`;
- `MediaLicense`;
- `MediaRelation`;
- `MediaApproval`;
- `MediaPublication`;
- `MediaMetric`.

O ciclo de vida canônico contém:

```text
DRAFT
TECHNICAL_REVIEW
EDITORIAL_REVIEW
HEALTH_REVIEW
RIGHTS_REVIEW
LOCALIZATION_REVIEW
APPROVED
PUBLISHED
SUSPENDED
ARCHIVED
EXPIRED
REJECTED
```

Cada ativo registra hash SHA-256 para deduplicação, formato, dimensões, duração, codec, idioma, titular, prova, uso comercial, transformações, territórios, canais, crédito, validade, retirada e locais de uso.

## Publicação e retirada

Uma mídia só pode ser publicada quando:

- o arquivo físico existe;
- o ativo está aprovado;
- há licença ativa para o canal;
- há localização aprovada e texto alternativo;
- revisões técnica, editorial, de direitos e localização estão aprovadas;
- a revisão de Saúde está aprovada quando o ativo se relaciona a Saúde/Nutrição.

A retirada suspende as publicações e devolve canais e locais de uso afetados.

## Voz, áudio e vídeo

- roteiros são versionados, localizados e incluem transcrição e legenda;
- a política registra explicitamente a licença da voz;
- clonagem de voz não autorizada é proibida;
- áudio próprio `OWN_AUDIO` é a capacidade central ativa;
- `EMBEDDED_PROVIDER`, `REMOTE_CONTROL`, `DEEP_LINK_REDIRECT` e `USER_LIBRARY` são capacidades independentes;
- Spotify, YouTube e Deezer permanecem inativos sem credenciais e teste ativo;
- o pipeline de vídeo exige propriedade/autorização e revisões biomecânica, legal, editorial e de acessibilidade;
- vídeos sem pipeline completo não aparecem;
- a interface legada deixou de mostrar cards de “vídeo em produção”; somente `PUBLISHED` pode renderizar player.

## Marketing e compartilhamento

- campanhas suportam card, carrossel, story, reel e anúncio;
- registram objetivo, público, canal, formato, CTA, deep link, calendário, aprovação e métricas;
- pilares editoriais: Corpo, Mente, Saúde, Nutrição, Tecnologia, Progresso e Marca;
- campanhas nascem como draft e não são autopublicadas;
- share cards cobrem sessão, conquista, nível, atividade e rota;
- nome completo, localização exata e dados sensíveis ficam ocultos por padrão;
- story, feed e mensagens são suportados;
- criar um card salva apenas o preview/draft, sem publicar.

## Interfaces e APIs

- `/admin/media`
- `GET|POST /api/admin/media`
- `POST /api/admin/media/:id/approval`
- `POST /api/admin/media/:id/publish`
- `POST /api/admin/media/:id/withdraw`
- `GET|POST /api/admin/campaigns`
- `GET|POST /api/admin/voice-scripts`
- `GET /api/media/library`
- `GET /api/media/audio`
- `GET /api/media/videos`
- `GET /api/audio/providers`
- `GET|POST /api/share-cards`

## Gate

Comandos aprovados:

```text
npm run test:w7
npm run test:w6
npm run test:w5
npm run typecheck
npm run lint -- --quiet
npm run build
```

O teste W7 comprova bloqueio antes de direitos/revisões, publicação após os gates, retirada com rastreabilidade, privacidade dos share cards, conectores externos inativos e vídeo vazio oculto. O build compilou 121 páginas.

## Rollback

1. Reverter o commit W7.
2. Reverter a migration `20260726060555_w7_media_governance` pelo procedimento W8.
3. Os arquivos existentes permanecem no disco, porém não são publicados pela Biblioteca Mestre sem licença e aprovação.
