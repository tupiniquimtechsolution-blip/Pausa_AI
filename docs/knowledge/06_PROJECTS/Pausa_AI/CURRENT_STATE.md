# Pausa AI — Current State

Status date: 2026-09-12
Status: `current`
Project ID: `PROJ-PAUSA-AI`

## Verified baseline

- Default branch: `main`.
- Baseline audited before this migration: commit `79a98c3840a8c0257c232fd036c8a1bd47447d50`.
- Working branch for knowledge migration and repository hardening: `migration/chatgpt-free-2026-09-12-pausa-ai`.
- `AGENTS.md` is the canonical agent contract.
- Universal skill: `.agents/skills/tupiniquim-toolbox/SKILL.md`.

## Product

Pausa AI is a preventive wellness MVP with B2C and B2B surfaces. Current visible priority is the mobile-oriented B2C core: landing/authentication, onboarding, dashboard, check-in, lightweight exercises, Body & Movement/Yoga, history and profile.

The application explicitly does not replace therapy, diagnosis, medical care or emergency services.

## Stack

- Next.js 16 / App Router
- React 19 / TypeScript
- Tailwind CSS
- Prisma 6
- SQLite in development
- Expo/WebView companion under `mobile/`
- JWT session in httpOnly cookie
- bcryptjs
- Zod
- OpenAI optional with local-rule fallback
- Resend prepared for transactional email

## Existing security/privacy controls verified in repository

- Secrets and local databases ignored by Git.
- Server-side session/authentication primitives.
- Password hashing.
- Input validation.
- Security headers governed in `next.config.mjs`.
- Persistent rate-limit abstraction covered by W8 tests.
- Password reset session revocation checks.
- Public media path validation.
- Campaign/privacy guards.
- Data-subject export and deletion primitives covered by W8 tests.
- Audit log primitive used by privacy deletion flow.
- B2B real data remains behind a feature flag and aggregation safeguards; demo/mock is the default documented surface.
- Technical LGPD and production-readiness checklists exist.

## Quality gates already available

The root `package.json` contains lint, typecheck, smoke, migration-integrity, auth regression, privacy/retention, catalog, W2-W9 and release-related gates.

This migration branch introduces remote CI using a synthetic isolated SQLite database and no production secrets. It also adds CodeQL and Dependabot.

## Not ready for public production

Current documented blockers include:

- managed PostgreSQL for staging/production;
- HTTPS staging;
- production secrets outside Git;
- real transactional email configuration;
- distributed/persistent production rate limiting where required;
- formal operational audit trail coverage;
- backup and tested restore;
- monitoring/APM and alerting;
- rollback runbook;
- legal LGPD review and final legal texts;
- full account export/deletion validation;
- safe mobile/APK release pipeline;
- remaining instructional media backlog.

Do not represent the repository as production-ready until these gates are explicitly closed with evidence.

## Repository governance introduced in this branch

- `.github/workflows/ci.yml`
- `.github/workflows/codeql.yml`
- `.github/dependabot.yml`
- `.github/CODEOWNERS`
- `.github/pull_request_template.md`
- `.github/ISSUE_TEMPLATE/bug_report.yml`
- layered knowledge architecture under `docs/knowledge/`
- ChatGPT migration protocol under `docs/chat-imports/`

## Known repository-level risk

At the time of audit, `main` was not protected. Branch protection/rulesets must be enabled in GitHub settings with required reviews and required CI checks before treating repository governance as hardened.

## Older ChatGPT conversation

The supplied URL uses the private `/c/<id>` ChatGPT format and could not be fetched by the external tooling used for this audit. Therefore exact older messages are not claimed as recovered.

Recoverable requirements from authorized current context are being stored as a partial migration with explicit provenance and confidence. Completion requires a shareable conversation URL/export or the original content supplied through an accessible source.

## Next safe sequence

1. Finish the partial chat-import artifacts without inventing missing content.
2. Run the new GitHub Actions gates on this branch/PR.
3. Fix only evidenced failures.
4. Enable branch protection/rulesets for `main` in GitHub settings.
5. Complete the older-chat migration when its exact content becomes accessible.
6. Continue product work from the production-readiness and LGPD gates, not from assumptions.
