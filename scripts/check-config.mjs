import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const mode = (process.argv[2] || process.env.CONFIG_ENV || process.env.NODE_ENV || "local").toLowerCase();
const root = process.cwd();

function parseEnvFile(path) {
  if (!existsSync(path)) return {};
  const entries = {};
  for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const match = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
    if (!match) continue;
    entries[match[1]] = match[2].trim().replace(/^"(.*)"$/, "$1");
  }
  return entries;
}

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

const fileEnv = parseEnvFile(join(root, ".env"));
const env = { ...fileEnv, ...process.env };
const failures = [];
const warnings = [];
const weakSecrets = new Set(["", "change-this-secret", "dev-secret-change-me"]);
const isReleaseMode = mode === "staging" || mode === "production";

function value(key) {
  return typeof env[key] === "string" ? env[key].trim() : "";
}

function fail(message) {
  failures.push(message);
}

function warn(message) {
  warnings.push(message);
}

function requireSet(key) {
  if (!value(key)) fail(`${key} nao esta configurada.`);
}

function requireStrongSecret(key) {
  const current = value(key);
  if (weakSecrets.has(current) || current.length < 32) {
    fail(`${key} precisa ter pelo menos 32 caracteres e nao pode ser placeholder.`);
  }
}

requireSet("DATABASE_URL");
requireStrongSecret("JWT_SECRET");
requireSet("ADMIN_EMAIL");

if (!value("COOKIE_SECURE")) warn("COOKIE_SECURE nao esta definida; use false em local e true em staging/producao.");
if (!value("APP_BASE_URL")) warn("APP_BASE_URL nao esta definida; recuperacao de senha e cron precisam dela fora do local.");
if (!["true", "false", ""].includes(value("B2B_REAL_DASHBOARD_ENABLED"))) {
  fail("B2B_REAL_DASHBOARD_ENABLED deve ser true, false ou ausente.");
}
if (value("AUDIT_LOG_RETENTION_DAYS") && !/^\d+$/.test(value("AUDIT_LOG_RETENTION_DAYS"))) {
  fail("AUDIT_LOG_RETENTION_DAYS deve ser um numero inteiro de dias.");
}

if (isReleaseMode) {
  if (value("DATABASE_URL").startsWith("file:")) fail("DATABASE_URL de staging/producao nao deve usar SQLite local.");
  if (value("COOKIE_SECURE") !== "true") fail("COOKIE_SECURE precisa ser true em staging/producao.");
  if (!value("APP_BASE_URL").startsWith("https://")) fail("APP_BASE_URL precisa ser HTTPS em staging/producao.");
  requireStrongSecret("CRON_SECRET");
  requireStrongSecret("RATE_LIMIT_PEPPER");
  requireSet("RESEND_API_KEY");
  requireSet("RESEND_FROM_EMAIL");
  requireSet("RELEASE_VERSION");
  if (!value("B2B_REAL_DASHBOARD_ENABLED")) fail("B2B_REAL_DASHBOARD_ENABLED deve ser explicitamente true ou false.");
}

const mobileConfigPath = join(root, "mobile", "app.json");
if (existsSync(mobileConfigPath)) {
  const appJson = readJson(mobileConfigPath);
  const defaultWebBaseUrl = appJson?.expo?.extra?.defaultWebBaseUrl || "";
  if (!defaultWebBaseUrl) {
    warn("mobile/app.json nao define expo.extra.defaultWebBaseUrl.");
  } else if (isReleaseMode && !String(defaultWebBaseUrl).startsWith("https://")) {
    fail("mobile/app.json precisa apontar defaultWebBaseUrl para HTTPS em staging/producao.");
  } else if (!isReleaseMode && /^http:\/\/192\.168\.5\.20(?::|\/|$)/.test(String(defaultWebBaseUrl))) {
    warn("mobile/app.json ainda aponta para o IP LAN historico 192.168.5.20; revise antes de novo APK.");
  }
}

if (warnings.length) {
  console.log("Avisos de configuracao:");
  for (const item of warnings) console.log(`- ${item}`);
}

if (failures.length) {
  console.error("Falhas de configuracao:");
  for (const item of failures) console.error(`- ${item}`);
  process.exit(1);
}

console.log(`Configuracao ${mode} passou nos checks locais.`);
