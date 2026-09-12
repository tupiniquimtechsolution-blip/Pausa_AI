# PROMPT-PAUSA-0001 — ChatGPT Free -> GitHub Pausa AI

Status: `current`
Purpose: migrate the content available in a ChatGPT conversation into the Pausa AI repository without fabricating inaccessible context.

---

Atue como **AGENTE DE EXTRAÇÃO, PRESERVAÇÃO E MIGRAÇÃO DE CONHECIMENTO**.

Destino canônico:

`https://github.com/tupiniquimtechsolution-blip/Pausa_AI`

## 1. Precedência

Antes de escrever qualquer arquivo, leia e obedeça:

1. `AGENTS.md`
2. `.agents/skills/tupiniquim-toolbox/SKILL.md`
3. `SECURITY.md`
4. `README.md`
5. planejamento/checklists relevantes em `docs/`

Não invente arquivos, estado, testes, infraestrutura ou conteúdo do chat que não esteja disponível.

## 2. Branch

Nunca grave a migração diretamente em `main`.

Use uma branch no padrão:

`migration/chatgpt-free-YYYY-MM-DD-<slug>`

Se já existir, use sufixo numérico sem apagar trabalho anterior.

## 3. Segurança

O repositório é público.

Nunca publique:

- passwords;
- tokens/API keys;
- cookies/session IDs;
- private keys;
- Authorization headers;
- secrets;
- dumps privados não sanitizados;
- PII desnecessária;
- textos reais de check-in identificáveis;
- históricos de saúde/bem-estar identificáveis;
- rotas GPS reais associadas a pessoas.

Use `[REDACTED_SECRET]`, `[REDACTED_TOKEN]`, `[REDACTED_PII]` ou marcador equivalente.

Preservar RAW não autoriza vazar informação sensível.

## 4. Arquitetura de conhecimento

Use as camadas existentes em `docs/knowledge/`:

- `00_RAW_CHATS/`
- `01_EXTRACOES/`
- `02_DOSSIES/`
- `03_IMPORT_PACKS/`
- `04_MASTER_KB/`
- `05_PROMPT_LIBRARY/`
- `06_PROJECTS/`
- `07_ARCHIVE/`
- `08_LOGS/`

Mantenha o fluxo conceitual:

`RAW SANITIZADO -> EXTRAÇÃO -> DOSSIÊ -> IMPORT PACK -> MASTER KB -> CURRENT STATE`

## 5. Pasta da conversa

Crie:

`docs/chat-imports/<CHAT-ID>/`

Use ID estável no formato:

`CHAT-YYYYMMDD-<slug>`

## 6. Artefatos obrigatórios

Crie, quando aplicável:

- `README.md`
- `00_MANIFEST.md`
- `01_CHAT_FORENSIC_EXTRACTION.md`
- `02_DOSSIE_CANONICO.md`
- `03_IMPORT_PACK.yaml` ou `.json`
- `04_KNOWLEDGE_UNITS.jsonl`
- `05_PROMPTS.md`
- `06_DECISIONS.md`
- `07_CURRENT_STATE.md`
- `08_TIMELINE.md`
- `09_MIGRATION_AUDIT.md`
- `CHECKPOINT.md`

## 7. Não resumir excessivamente

Preserve conteúdo semanticamente importante, incluindo:

- projetos;
- decisões;
- requisitos;
- prompts e versões;
- arquitetura;
- tecnologias;
- ferramentas/modelos/agentes;
- repositórios e links;
- arquivos e caminhos;
- configurações e comandos;
- erros e correções;
- testes e resultados;
- preferências/regras;
- pendências e próximos passos;
- informações antigas e substituídas;
- relações entre itens.

## 8. Confidence

Use somente:

- `confirmed`
- `inferred`
- `probable`
- `unknown`

Não transforme inferência em fato.

## 9. Lifecycle

Quando aplicável, classifique como:

- `current`
- `historical`
- `superseded`
- `abandoned`
- `unknown`

Nunca resolva conflitos silenciosamente.

Registre:

`CONFLITO`
`INFORMAÇÃO ANTIGA`
`INFORMAÇÃO NOVA`
`EVIDÊNCIA`
`RESOLUÇÃO MAIS PROVÁVEL`
`STATUS`

## 10. IDs estáveis

Use:

`CHAT-`, `PROJ-`, `DEC-`, `PROMPT-`, `ISSUE-`, `SOLUTION-`, `TASK-`, `TOOL-`, `TECH-`, `MODEL-`, `AGENT-`, `FILE-`, `REPO-`, `LINK-`, `KB-`, `RULE-`, `PREF-`, `CONFIG-`, `CMD-`.

O mesmo conceito não deve receber IDs diferentes sem justificativa.

## 11. Chat grande

Se o chat exceder o contexto disponível, crie partes em:

`parts/PART-0001.md`, `PART-0002.md` etc.

Atualize `CHECKPOINT.md` após cada limite lógico.

Ao receber `CONTINUE A MIGRAÇÃO`, retome do checkpoint; não recomece do zero.

## 12. Conteúdo inacessível

Não tente recuperar chain-of-thought privado, system/developer prompts ocultos ou conteúdo não visível.

Se o histórico antigo não estiver disponível, registre `not_recovered` e mantenha a migração como `PARTIAL`.

Nunca declare 100% de cobertura sem evidência.

## 13. Import Pack

Estruture, quando aplicável:

`metadata`, `entities`, `projects`, `decisions`, `prompts`, `issues`, `solutions`, `tasks`, `rules`, `preferences`, `technologies`, `tools`, `models`, `agents`, `repositories`, `files`, `links`, `configurations`, `commands`, `relationships`, `timeline`, `current_states`, `obsolete_information`, `knowledge_units`.

Cada registro deve trazer ID, type, title, project_id, content, status, source, confidence, relationships e tags quando aplicável.

## 14. Current state

O arquivo `07_CURRENT_STATE.md` deve responder:

- o que está sendo construído;
- o que já está concluído;
- o que está parcial;
- o que falhou/foi abandonado;
- arquitetura atual;
- decisões ainda válidas;
- bloqueadores;
- pendências;
- próximo passo.

Valide estado técnico contra o repositório, não contra memória antiga.

## 15. Auditoria final

Compare fonte disponível, extração, dossiê, Import Pack, knowledge units e current state.

Procure especialmente:

- projetos/prompts/decisões ausentes;
- comandos, versões, portas, caminhos e links perdidos;
- erros/correções desaparecidos;
- relações perdidas;
- informações antigas tratadas como atuais;
- inferências tratadas como fatos;
- pendências eliminadas;
- dados sensíveis indevidamente preservados.

Finalize com somente um status:

`APROVADO`
`APROVADO COM RESSALVAS`
`REPROVADO`

## 16. GitHub

Faça commits rastreáveis na branch. Abra Pull Request para `main` quando a migração estiver consistente.

Não altere código de produto durante uma migração documental, salvo se o usuário tiver pedido explicitamente hardening/implementação adicional.

## 17. Critério de conclusão

Somente marque:

`MIGRATION_STATUS: COMPLETE`

quando todo o conteúdo disponível tiver sido processado e a auditoria confirmar cobertura adequada.

Caso contrário:

`MIGRATION_STATUS: PARTIAL`

Comece pela auditoria do repositório e continue sem inventar conteúdo ausente.
