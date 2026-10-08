import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  worker: defineWorker({
    name: "pausa-ai-staging",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-09-30",
    compatibilityFlags: ["nodejs_compat"],
    assets: { notFoundHandling: "none" },
    // Capture application exceptions; omit invocation logs and redact query strings.
    observability: {
      enabled: true,
      redactQueryString: true,
      logs: { enabled: true, invocationLogs: false, persist: true },
    },
    env: {
      ASSETS: bindings.assets(),

      // Runtime secrets: values are provisioned separately in Cloudflare.
      DATABASE_URL: bindings.secret(),
      JWT_SECRET: bindings.secret(),
      RATE_LIMIT_PEPPER: bindings.secret(),
      CRON_SECRET: bindings.secret(),
      RESEND_API_KEY: bindings.secret(),

      // Non-sensitive staging configuration.
      COOKIE_SECURE: bindings.text("true"),
      APP_BASE_URL: bindings.text("https://pausa-ai-staging.tupiniquim-techsolution.workers.dev"),
      ADMIN_EMAIL: bindings.text("admin@pausaai.com"),
      RESEND_FROM_EMAIL: bindings.text("Pausa AI <onboarding@resend.dev>"),
      AUDIT_LOG_RETENTION_DAYS: bindings.text("180"),
      RELEASE_VERSION: bindings.text("staging"),
      B2B_REAL_DASHBOARD_ENABLED: bindings.text("false"),
    },
  }),
});
