# DECISIONS

## DEC-PAUSA-0001 — Layered knowledge architecture

- Status: `current`
- Confidence: `confirmed`
- Decision: use the layered structure under `docs/knowledge/` from sanitized RAW through project current state and archive/logs.
- Reason: preserve provenance, human readability and future AI/RAG ingestion.

## DEC-PAUSA-0002 — Security overrides literal raw preservation

- Status: `current`
- Confidence: `confirmed`
- Decision: raw chats may only be committed after sanitization because the repository is public.
- Consequence: private dumps, secrets, PII and identifiable wellbeing/health histories remain outside Git.

## DEC-PAUSA-0003 — Keep older-chat migration partial

- Status: `current`
- Confidence: `confirmed`
- Decision: do not declare the older conversation migrated until its exact content is accessible and compared.
- Reason: the supplied `/c/...` URL is not externally retrievable.

## DEC-PAUSA-0004 — Apply Toolbox hardening in a dedicated branch

- Status: `implemented_in_branch`
- Confidence: `confirmed`
- Decision: add remote CI, CodeQL, Dependabot, CODEOWNERS and contribution templates without writing directly to `main`.
- Reason: prior Toolbox audit identified missing remote CI and current branch metadata showed `main` unprotected.

## DEC-PAUSA-0005 — Use synthetic CI data only

- Status: `implemented_in_branch`
- Confidence: `confirmed`
- Decision: CI uses an isolated SQLite database and test-only environment values.
- Reason: repository policy forbids real secrets and real sensitive user data in tests/public automation.

## DEC-PAUSA-0006 — Historical evidence remains historical until merge

- Status: `current`
- Confidence: `confirmed`
- Decision: the 2026-09-08 statement “remote CI absent” remains historically valid for the audited `main`; it becomes superseded for current state only after the hardening branch is merged.

## Unknown decisions from older transcript

Status: `not_recovered`

Any decisions that exist only inside the inaccessible private chat remain unknown and must not be fabricated.
