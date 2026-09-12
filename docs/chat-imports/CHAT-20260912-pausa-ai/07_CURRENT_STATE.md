# CURRENT STATE — CHAT MIGRATION

## What is being built

A versioned knowledge and governance layer for the Pausa AI repository, allowing context from ChatGPT and other agents to be preserved safely in GitHub and reused across future sessions.

## What is complete in this branch

- dedicated migration branch;
- layered `docs/knowledge/` architecture;
- project knowledge index/current state;
- manifest/checkpoint for the older-chat migration;
- forensic extraction based only on available evidence;
- canonical dossier;
- Import Pack YAML;
- JSONL knowledge units;
- prompt registry and reusable migration prompt;
- decisions registry;
- remote CI workflow;
- CodeQL workflow;
- Dependabot configuration;
- CODEOWNERS;
- PR security/privacy checklist;
- safe public bug-report template.

## What is incomplete

- exact message-by-message migration of the older private ChatGPT conversation;
- exact older prompt library;
- complete older-chat chronology;
- any tasks/decisions that exist only in the inaccessible transcript;
- required CI result after opening/running the PR;
- manual GitHub branch protection/ruleset configuration.

## Product state

For the verified Pausa AI product state, read:

`docs/knowledge/06_PROJECTS/Pausa_AI/CURRENT_STATE.md`

## Blockers

1. Private `/c/...` ChatGPT URL cannot be externally fetched.
2. Main branch protection is a repository setting not changed by the current content-write operations.
3. New automation must be validated by GitHub Actions before merge.

## Next step

- finish remaining migration artifacts and audit;
- open a PR;
- inspect GitHub Actions results;
- fix only evidenced failures;
- enable branch protection/ruleset for `main` using the successful CI checks;
- later ingest the exact older conversation from an accessible share/export and rerun the migration audit.

`MIGRATION_STATUS: PARTIAL`
