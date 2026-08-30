# W4 — Bibliotecas Corpo, Mente e governança editorial

Data de fechamento técnico: 26/07/2026  
Escopo: Sprint Mestre de 25/07/2026  
Status: gate técnico aprovado; sem merge ou publicação

## Resultado

A hierarquia canônica `Categoria → Circuito → Movimento` foi adicionada como camada governada sobre o catálogo existente. A promoção não cria conteúdo clínico: ela reutiliza instruções normalizadas e, no pilar Corpo, libera apenas os movimentos que já estavam `ACTIVE` na reconciliação visual.

- 21 categorias aprovadas;
- 21 circuitos aprovados;
- 227 movimentos aprovados;
- 5 categorias Corpo com mídia reconciliada;
- 16 categorias Mente com thumbnail e metadados completos;
- locale canônico `pt-BR`;
- versão editorial registrada;
- nenhuma categoria ou circuito vazio;
- nenhum movimento órfão;
- nenhum thumbnail publicado sem arquivo;
- nenhum card de Saúde/Nutrição publicado sem fonte e aprovação.

As modalidades sem lote visual aprovado permanecem fora da interface, evitando categorias vazias. A modelagem continua data-driven e já aceita a promoção futura de Aeróbicos, Pilates, Boxe, Muay Thai e outras modalidades quando seus conteúdos passarem pelos gates de mídia e revisão.

## Implementação

- modelos `ContentCategory`, `ContentCircuit`, `ContentMovement` e `EditorialCard`;
- migration aditiva `20260726054409_w4_content_library`;
- seed idempotente baseado na reconciliação de catálogo;
- serviço único de leitura que oculta drafts e estruturas vazias;
- componente visual compartilhado entre Corpo e Mente;
- APIs autenticadas `/api/content/library` e `/api/editorial/cards`;
- biblioteca editorial de Saúde/Nutrição configurada para ocultar a UI enquanto não houver conteúdo aprovado;
- remoção dos blocos legados “Regra desta volta”, “Retorno completo, sem pressa” e “Como decidir intensidade”.

## Evidências do gate

Comandos aprovados:

```text
npm run test:w4
npm run test:catalog
npm run typecheck
npm run lint -- --quiet
npm run build
```

O build de produção compilou 102 páginas. O gate W4 também valida arquivo físico de thumbnail, aprovação, locale, metadados obrigatórios, relações e ausência dos blocos legados.

## Decisões de segurança editorial

- Conteúdo pendente, rejeitado ou sem mídia continua arquivado.
- Saúde e Nutrição não recebem texto criado automaticamente nesta onda.
- Cards editoriais só podem ser publicados com fonte, URL, texto equivalente, imagem, locale e aprovação.
- A camada é informativa e de bem-estar; não inclui diagnóstico, prescrição ou promessa clínica.

## Rollback

1. Reverter o commit W4.
2. Reverter a migration `20260726054409_w4_content_library` conforme o procedimento de release da W8.
3. Manter as tabelas anteriores de exercícios, Yoga e reconciliação intactas; a migration é exclusivamente aditiva.
