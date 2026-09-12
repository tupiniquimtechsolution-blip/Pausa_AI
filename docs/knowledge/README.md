# Pausa AI — Knowledge Architecture

Esta área preserva conhecimento de projeto de forma versionada, auditável e reutilizável por pessoas e agentes de IA.

## Regra de segurança

O repositório é público. Portanto, **nenhum arquivo desta árvore pode conter secrets, tokens, cookies, senhas, chaves, dumps privados, PII desnecessária, textos reais de check-in, dados de saúde, rotas GPS ou históricos de bem-estar identificáveis**.

Conteúdo sensível deve permanecer fora do Git. Quando uma referência for necessária, use marcadores como `[REDACTED_SECRET]`, `[REDACTED_PII]` ou um identificador abstrato.

## Camadas

1. `00_RAW_CHATS/` — transcrições ou exports **sanitizados**, preservando a ordem original quando legal e seguro.
2. `01_EXTRACOES/` — extrações forenses estruturadas por chat/fonte.
3. `02_DOSSIES/` — dossiês canônicos consolidados sem apagar conflitos.
4. `03_IMPORT_PACKS/` — YAML/JSON/JSONL para ingestão por RAG, SQLite, busca e agentes.
5. `04_MASTER_KB/` — conhecimento estabilizado e deduplicado do projeto.
6. `05_PROMPT_LIBRARY/` — prompts reutilizáveis, versões e status.
7. `06_PROJECTS/` — estado corrente por projeto, decisões e handoff.
8. `07_ARCHIVE/` — material superseded/abandoned preservado por rastreabilidade.
9. `08_LOGS/` — logs de migração e auditoria, sempre sanitizados.

## Estados obrigatórios

Quando aplicável, use um dos estados:

- `current`
- `historical`
- `superseded`
- `abandoned`
- `unknown`

Nunca resolva conflitos silenciosamente. Registre a informação antiga, a nova, a evidência e o status.

## IDs estáveis

Use os prefixos definidos no protocolo de migração: `CHAT-`, `PROJ-`, `DEC-`, `PROMPT-`, `ISSUE-`, `SOLUTION-`, `TASK-`, `TOOL-`, `TECH-`, `MODEL-`, `AGENT-`, `FILE-`, `REPO-`, `LINK-`, `KB-`, `RULE-`, `PREF-`, `CONFIG-` e `CMD-`.

## Chat imports

Importações de conversas vivem em `docs/chat-imports/<CHAT-ID>/`. Depois da auditoria, o conteúdo estabilizado pode ser promovido para esta árvore de conhecimento.

## Fonte de verdade

Para estado técnico atual, o código e os documentos versionados do repositório prevalecem sobre memórias ou resumos externos. `AGENTS.md` e `.agents/skills/tupiniquim-toolbox/SKILL.md` governam qualquer agente que trabalhe nesta base.
