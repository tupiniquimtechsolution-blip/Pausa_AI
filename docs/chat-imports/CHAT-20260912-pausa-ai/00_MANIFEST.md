# Migration Manifest

- `chat_id`: `CHAT-20260912-pausa-ai`
- `project_id`: `PROJ-PAUSA-AI`
- `source_type`: ChatGPT conversation
- `source_url`: `https://chatgpt.com/c/6a2c5f00-667c-83e9-9c41-7826ad8bdb7b`
- `source_access`: `private_url_inaccessible_to_external_fetch`
- `repository`: `tupiniquimtechsolution-blip/Pausa_AI`
- `base_branch`: `main`
- `working_branch`: `migration/chatgpt-free-2026-09-12-pausa-ai`
- `migration_date`: `2026-09-12`
- `status`: `PARTIAL`
- `security`: `sanitized_public_repository`

## Evidence sources used

1. Content explicitly supplied by the user in the active migration conversation.
2. Authorized recoverable project context available to the active ChatGPT session.
3. Current repository code and documentation.
4. Repository agent rules (`AGENTS.md` and Tupiniquim Toolbox skill).

## Source limitation

The supplied ChatGPT URL is a private `/c/...` conversation URL. External fetch could not access its message content. Therefore this import does **not** claim verbatim or complete recovery of that older chat.

Unknown or inaccessible material remains explicitly marked `unknown`/`not_recovered`.

## Required artifacts

- `README.md`
- `00_MANIFEST.md`
- `01_CHAT_FORENSIC_EXTRACTION.md`
- `02_DOSSIE_CANONICO.md`
- `03_IMPORT_PACK.yaml`
- `04_KNOWLEDGE_UNITS.jsonl`
- `05_PROMPTS.md`
- `06_DECISIONS.md`
- `07_CURRENT_STATE.md`
- `08_TIMELINE.md`
- `09_MIGRATION_AUDIT.md`
- `CHECKPOINT.md`

## Completion rule

`MIGRATION_STATUS: COMPLETE` is forbidden until the exact older conversation content has been made accessible and compared against these artifacts.
