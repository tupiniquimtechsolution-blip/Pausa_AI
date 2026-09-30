import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig(({ mode }) => {
  const isStaging = mode === "staging";

  return {
    worker: defineWorker({
      name: isStaging ? "pausa-ai-staging" : "pausa-ai",
      entrypoint: "vinext/server/fetch-handler",
      compatibilityDate: "2026-09-30",
      compatibilityFlags: ["nodejs_compat"],
      assets: { notFoundHandling: "none" },
      env: {
        ASSETS: bindings.assets(),
        IMAGES: bindings.images(),
        VINEXT_KV_CACHE: bindings.kv(),
        DATABASE_URL: bindings.secret(),
        JWT_SECRET: bindings.secret(),
        RATE_LIMIT_PEPPER: bindings.secret(),
        CRON_SECRET: bindings.secret(),
        APP_BASE_URL: bindings.secret(),
        ADMIN_EMAIL: bindings.secret(),
        COOKIE_SECURE: bindings.text("true"),
        RELEASE_VERSION: bindings.text(
          process.env.RELEASE_VERSION ?? (isStaging ? "staging" : "production")
        ),
        B2B_REAL_DASHBOARD_ENABLED: bindings.text("false"),
      },
    }),
  };
});
