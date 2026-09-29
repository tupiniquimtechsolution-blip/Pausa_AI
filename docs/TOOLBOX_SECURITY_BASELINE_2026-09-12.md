# Tupiniquim Toolbox — Security & Repository Baseline

Date: 2026-09-12
Branch: `migration/chatgpt-free-2026-09-12-pausa-ai`

## Scope

Apply the parts of `AGENTS.md` and `.agents/skills/tupiniquim-toolbox/SKILL.md` relevant to repository engineering, knowledge migration, quality, privacy and security.

This audit does not automatically install external Toolbox references. External projects remain references until license, compatibility, maintenance, risk and necessity are validated.

## Verified existing controls

### Repository hygiene

- `.env` variants used for local secrets are ignored.
- SQLite/local database files are ignored.
- build/log/cache/mobile artifacts are ignored.
- `SECURITY.md` exists.
- agent governance exists through `AGENTS.md` and the universal Toolbox skill.

### Application baseline

- JWT/httpOnly cookie authentication model documented.
- bcryptjs password hashing.
- Zod validation.
- security headers in `next.config.mjs` including CSP, nosniff, frame denial, referrer policy, permissions policy and production HSTS.
- W8 hardening checks exercise rate limiting, session revocation, data-subject export/deletion, privacy guards, safe media paths, headers and observability redaction.
- technical LGPD and production-readiness checklists exist.

### Quality gates

`package.json` already exposes extensive typecheck, lint, smoke, auth, migration, privacy, catalog, hardening and release gates.

`test:migration-integrity` is a specialized migration gate: it requires explicit `SOURCE_DB` and `TARGET_DB` candidates and must not be simulated in generic CI with two identical databases merely to produce a green result.

## Changes applied in this branch

### CI

Added `.github/workflows/ci.yml` with:

- deterministic root and `mobile/` installs from their lockfiles;
- Prisma client generation;
- Prisma schema validation;
- isolated synthetic SQLite CI database;
- root typecheck;
- mobile typecheck;
- lint;
- W8 hardening checks;
- production build.

The generic CI intentionally excludes `test:migration-integrity`; that command belongs to an authorized migration run supplied with real source/target databases.

The workflow contains no production secrets.

### Static security analysis

Added `.github/workflows/codeql.yml` for JavaScript/TypeScript on push/PR to `main` and weekly schedule.

### Dependency maintenance

Added `.github/dependabot.yml` for:

- root npm dependencies;
- `mobile/` npm dependencies;
- GitHub Actions.

The first CI install also exposed existing dependency-audit debt. A dedicated issue tracks triage rather than applying `npm audit fix --force` blindly.

### Ownership and review

Added `.github/CODEOWNERS` for default ownership and sensitive areas including API, security/privacy code, Prisma and agent/governance files.

Added a PR template requiring evidence, quality gates, security/privacy review, rollback and remaining-risk disclosure.

### Public issue safety

Added a structured bug template that explicitly forbids secrets, PII, real wellbeing/health data and GPS data in public issues.

### Security policy

Expanded `SECURITY.md` with responsible private reporting guidance, sensitive-data rules, application threat categories, CI expectations, production gates and incident-handling basics.

### Knowledge migration safety

Added `_private/` migration staging paths to `.gitignore` and established a layered sanitized knowledge architecture under `docs/knowledge/`.

## Findings still open

### P1 — Main branch is unprotected

GitHub branch metadata reported `main` as `protected: false`.

Recommended repository ruleset:

- require pull request before merge;
- require at least 1 approving review;
- require CODEOWNERS review for sensitive paths when practical;
- require successful CI and CodeQL/security checks as available;
- dismiss stale approvals on new commits;
- block force pushes;
- block branch deletion;
- require conversation resolution;
- restrict direct pushes to `main`.

This is a GitHub repository setting and is not changed by file-content commits in this branch.

### P1/P2 — Production infrastructure gates remain open

Per existing production-readiness/LGPD documents:

- managed PostgreSQL;
- HTTPS staging;
- production secret management;
- transactional email;
- distributed/persistent rate limiting where required;
- backup/restore;
- monitoring and alerting;
- operational audit trail;
- rollback;
- legal LGPD review;
- validated account export/deletion;
- safe APK/mobile release.

### P1/P2 — Dependency audit debt

The first root install in CI reported 11 vulnerabilities (1 moderate, 9 high, 1 critical). The mobile install reported 24 vulnerabilities (12 moderate, 12 high). These counts are evidence for triage, not proof that every advisory is runtime-exploitable. Issue #5 tracks package/advisory analysis and minimal compatible remediation.

### P2 — CSP hardening opportunity

Current CSP intentionally contains `'unsafe-inline'` for scripts/styles and development adds `'unsafe-eval'`. Production removes `'unsafe-eval'` but nonce/hash-based CSP could be evaluated later.

Do not tighten this blindly: Next.js/runtime compatibility and existing UI must be tested before changing CSP directives.

### P3 — Historical `allowedDevOrigins`

`next.config.mjs` contains a fixed LAN development origin. This is not a production allowlist, but it should be reviewed for portability and removed/replaced by controlled configuration if no longer required.

## Pentest / Strix

No active penetration test was run as part of this migration. Toolbox rules require an owned/authorized target and appropriate environment. Static/repository hardening was applied instead.

## Validation required before merge

- GitHub Actions generic CI must pass on the PR.
- CodeQL result must be reviewed.
- Any failure must be fixed or explicitly documented; do not suppress security gates without evidence.
- Migration-integrity checks remain mandatory for actual database migration work with explicit source/target candidates.
- After merge, configure branch protection/ruleset and verify required checks against the actual workflow names.

## Status

**HARDENING IMPLEMENTED IN BRANCH — VALIDATION PENDING CI AND REPOSITORY RULESET**
