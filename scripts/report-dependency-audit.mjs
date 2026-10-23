import assert from "node:assert/strict";
import { readFileSync, appendFileSync } from "node:fs";
import path from "node:path";

const directory = process.argv[2] || "artifacts";
const rows = ["root", "runtime", "mobile"].map(scope => {
  const data = JSON.parse(readFileSync(path.join(directory, `npm-audit-${scope}.json`), "utf8"));
  assert.ok(!data.error, `${scope}: audit collection failed`);
  const counts = data.metadata?.vulnerabilities;
  assert.ok(counts, `${scope}: missing audit metadata`);
  for (const key of ["info", "low", "moderate", "high", "critical", "total"]) {
    assert.ok(Number.isInteger(counts[key]) && counts[key] >= 0, `${scope}: invalid ${key} count`);
  }
  assert.equal(counts.info + counts.low + counts.moderate + counts.high + counts.critical, counts.total);
  return { scope, ...counts };
});

const report = { date: new Date().toISOString(), node: process.version, platform: process.platform, mode: "evidence-only", rows };
console.log(JSON.stringify(report));
const text = [
  "## Dependency audit evidence",
  "",
  "This job validates collection and publishes evidence; success does not mean zero vulnerabilities or release approval.",
  "Counts describe affected packages in the dependency graph, not unique CVEs or proven exploit paths in the shipped Worker.",
  "",
  "| Scope | High | Moderate | Critical | Total |",
  "|---|---:|---:|---:|---:|",
  ...rows.map(row => `| ${row.scope} | ${row.high} | ${row.moderate} | ${row.critical} | ${row.total} |`),
  "",
  `Collected ${report.date} with ${report.node} on ${report.platform}. See attached JSON for advisory chains and remediation planning.`,
  "",
].join("\n");
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, text);
