# Cloudflare Prisma WASM — 2026-10-08

## Failure observed

A temporary live-log capture for staging version 41f0219d-e2d9-4aac-9449-b97621aeb3a0 identified `no such file or directory, readAll '/bundle/generated/prisma-pg/query_compiler_bg.wasm'` during SELECT 1. The error occurs before the database query. No credentials or request metadata are reproduced here.

## Correction and validation

Vite resolves the generated PostgreSQL client to `generated/prisma-pg/wasm.js`. Node-based scripts retain the regular generated client import. No schema or dependencies change.

Local `build:vinext` passed. The worker.config.json manifest declares `_next/static/media/query_compiler_bg.ldwV2G9w.wasm` as type wasm; the emitted Worker loader imports this module. An isolated Miniflare/workerd run of the actual bundle with fictional credentials and a deliberately unreachable local database advanced to `proxy request failed, cannot connect to the specified address`, without the missing WASM error. Its health response remained 503 as expected for that fictitious target. This proves loading, not a real staging database connection.

## Cloudflare preview configuration

The initial PR preview used `npm run build` and `npx wrangler preview`; it failed because the Next build did not generate the PostgreSQL client. Preview build settings were changed to:

- Build: `npm run build:vinext`
- Preview: `npx @vinext/cloudflare deploy --no-promote --skip-build`

The CLI help confirms --no-promote uploads a version without promoting it to 100% traffic. Retrying an old Cloudflare build reuses its original command snapshot; a fresh branch commit is required to validate new settings.

## Acceptance

All checks must pass on the final PR SHA. After a successful candidate build, merge only within authorized staging scope, verify the actual main deployment, and repeat HTTPS /api/health. A response 200 with database=ready is required before authenticated smoke. G9/G10 remain NO-GO pending the remaining operational audit evidence.
