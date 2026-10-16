import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { createRequire } from "node:module";
import vm from "node:vm";

// Exercise the installed publisher's real settings builder against a disposable
// API fixture. This catches the beta.6 regression without real secret values or
// touching a live Preview. A remote redeploy still needs a separate smoke gate.
const require = createRequire(import.meta.url);
const dist = dirname(require.resolve("cf"));
const version = JSON.parse(readFileSync(join(dist, "../package.json"), "utf8")).version;
let builder;
for (const file of readdirSync(dist).filter(f => f.endsWith(".mjs"))) {
  const source = readFileSync(join(dist, file), "utf8");
  const label = /\w+\((\w+),`assemblePreviewDeploymentSettings`\)/.exec(source);
  if (!label) continue;
  const start = source.lastIndexOf(`async function ${label[1]}(`, label.index);
  assert.ok(start >= 0, "Installed publisher builder not found.");
  builder = source.slice(start, label.index);
  break;
}
assert.ok(builder, "Publisher implementation unavailable; fail closed.");
const names = ["DATABASE_URL", "JWT_SECRET", "RATE_LIMIT_PEPPER", "CRON_SECRET", "RESEND_API_KEY"];
const previous = { env: Object.fromEntries(names.map(name => [name, { type: "secret_text" }])) };
const fnName = /async function (\w+)/.exec(builder)[1];
const context = vm.createContext({
  oO: () => ({ modules: [] }),
  HD: () => ({ APP_ENV: { type: "plain_text", text: "staging" } }),
  vD: async () => previous,
});
const assemble = vm.runInContext(`${builder}; ${fnName}`, context);
const settings = await assemble({ previews: {}, exports: {}, migrations: [] }, null, "fixture-account", "fixture-preview", null, { isNewPreview: false });
for (const name of names) {
  assert.equal(settings.env[name]?.type, "inherit", `${name} must retain its existing binding.`);
  assert.equal(Object.hasOwn(settings.env[name], "text"), false);
}
assert.equal(settings.env.APP_ENV.text, "staging");
console.info(JSON.stringify({ ok: true, publisherVersion: version, inheritedSecretNames: names, valuesRead: false, remoteDeploymentTested: false }));
