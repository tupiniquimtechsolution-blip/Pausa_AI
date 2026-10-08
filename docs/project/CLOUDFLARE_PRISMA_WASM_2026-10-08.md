# Cloudflare Prisma runtime — 2026-10-08

## WASM compiler

Staging version 41f0219d-e2d9-4aac-9449-b97621aeb3a0 failed before SELECT 1 because the Node loader attempted to read /bundle/generated/prisma-pg/query_compiler_bg.wasm. Vite resolves the PostgreSQL client to generated/prisma-pg/wasm.js. Node scripts retain their normal entry.

## Preview publication

Build command: npm run build:vinext. Preview command: npx cf previews deploy fix/cloudflare-prisma-wasm-loader. The CLI rebuilds in Preview mode; --prebuilt rejected the previous production-mode output. Existing previews have their own build configuration. Build f7234eee succeeded on bdde1e5. HTTPS health became 200/database=ready after the user provisioned secrets in this preview.

## Intermittent request failure

On 08/10 an actual registration reached /app/onboarding, then the Worker returned Error 1101. Read-only database verification found one user and no completed onboarding. Reloads alternated between the authenticated onboarding screen and Error 1101. A public health sequence returned 200,200,500. No password or user record is reproduced here.

The actual Worker bundle was tested in Miniflare/workerd with a disposable local PostgreSQL protocol fixture. Its global Prisma/pg pool alternated 200,500,200,500: requests 2 and 4 reused prior-request connections and workerd canceled the request as hung. This is a controlled reproduction of connection lifecycle failure; the original remote exception text has not yet been captured.

The Worker entry now creates an AsyncLocalStorage database scope per request. The Vite-only Prisma proxy lazily creates one PostgreSQL client inside that scope. Response streaming retains the context and disconnects the client when the stream ends, fails or is canceled. Node/SQLite scripts keep lib/prisma.ts. No real database data, schema, credentials or dependencies are changed.

Validation: typecheck and build:vinext passed. The same actual-bundle fixture now returns four consecutive 200 responses and six concurrent 200 responses, with ten distinct connections and ten closed connections. The regression test is scripts/worker-request-db-check.mjs and runs after build in Cloudflare Vinext Build Evidence.

Cloudflare application-error collection is enabled on this candidate, without invocation logs, with query-string redaction. The Worker Prisma client omits query error logging because it can include sensitive parameters.

References: https://developers.cloudflare.com/hyperdrive/observability/troubleshooting/ recommends clients inside each request; https://developers.cloudflare.com/workers/previews/test-and-debug/ documents separate preview observability and lack of wrangler tail preview support.

## Acceptance

Checks must pass on the final candidate SHA. Verify the deployed preview through repeated HTTPS health and authenticated onboarding reloads before integration. Registration success and one healthy response do not prove stable auth, full RBAC, backup/restore, rollback or QA. G9/G10 remain NO-GO.
