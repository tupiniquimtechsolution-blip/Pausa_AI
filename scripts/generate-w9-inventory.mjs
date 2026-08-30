import { execFileSync } from "node:child_process";
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const baseline = process.env.RC_BASELINE || "b197d6f";
const releaseHead = process.env.RC_CODE_HEAD || "aa5d0ae";
const output = join(root, "docs", "sprint-2026-07-25", "W9_INVENTARIO_TECNICO.md");

function git(args) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();
}

function walk(path) {
  return readdirSync(path, { withFileTypes: true }).flatMap((entry) => {
    const candidate = join(path, entry.name);
    return entry.isDirectory() ? walk(candidate) : [relative(root, candidate).replaceAll("\\", "/")];
  });
}

const changes = git(["diff", "--name-status", `${baseline}..${releaseHead}`])
  .split(/\r?\n/)
  .filter(Boolean)
  .map((line) => {
    const [status, ...paths] = line.split("\t");
    return { status, paths };
  });
const created = changes.filter((item) => item.status.startsWith("A")).flatMap((item) => item.paths);
const changed = changes.filter((item) => item.status.startsWith("M")).flatMap((item) => item.paths);
const removed = changes.filter((item) => item.status.startsWith("D")).flatMap((item) => item.paths);
const renamed = changes.filter((item) => item.status.startsWith("R")).flatMap((item) => item.paths);

const appFiles = walk(join(root, "app"));
const pages = appFiles.filter((file) => /\/page\.tsx$/.test(file)).sort();
const apiRoutes = appFiles.filter((file) => /\/api\/.+\/route\.ts$/.test(file)).sort();
const serviceFiles = walk(join(root, "lib")).filter((file) => file.endsWith(".ts")).sort();
const components = walk(join(root, "components")).filter((file) => file.endsWith(".tsx")).sort();
const migrations = readdirSync(join(root, "prisma", "migrations"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

function list(items, empty = "Nenhum.") {
  return items.length ? items.map((item) => `- \`${item}\``).join("\n") : empty;
}

const content = `# W9 — Inventário técnico da Release Candidate

Gerado em: ${new Date().toISOString()}
Baseline comparada: \`${baseline}\`
Head de código W0–W8: \`${releaseHead}\`

## Resumo

| Item | Quantidade |
| --- | ---: |
| Arquivos criados | ${created.length} |
| Arquivos alterados | ${changed.length} |
| Arquivos removidos | ${removed.length} |
| Arquivos renomeados | ${renamed.length} |
| Páginas atuais | ${pages.length} |
| Rotas de API atuais | ${apiRoutes.length} |
| Serviços/módulos TypeScript em \`lib\` | ${serviceFiles.length} |
| Componentes React compartilhados | ${components.length} |
| Migrations | ${migrations.length} |

Os artefatos documentais W9 são adicionados depois do head de código e ficam enumerados na seção final.

## Arquivos criados

${list(created)}

## Arquivos alterados

${list(changed)}

## Arquivos removidos

${list(removed)}

## Arquivos renomeados

${list(renamed)}

## Páginas

${list(pages)}

## Rotas de API

${list(apiRoutes)}

## Componentes compartilhados

${list(components)}

## Serviços e módulos

${list(serviceFiles)}

## Models, migrations e seeds

Schema: \`prisma/schema.prisma\`
Seeds: \`prisma/seed.ts\`, \`scripts/seed-foundations.ts\`, \`scripts/seed-w4-content-library.ts\` e \`scripts/seed-w7-media-governance.ts\`.

${list(migrations)}

## Artefatos W9

- \`docs/sprint-2026-07-25/CHANGELOG_RC_2026-07-25.md\`
- \`docs/sprint-2026-07-25/W9_INVENTARIO_TECNICO.md\`
- \`docs/sprint-2026-07-25/W9_MATRIZ_RASTREABILIDADE.md\`
- \`docs/sprint-2026-07-25/W9_MATRIZES_OPERACIONAIS.md\`
- \`docs/sprint-2026-07-25/W9_PLANO_DEPLOY_ROLLBACK.md\`
- \`docs/sprint-2026-07-25/W9_RELEASE_CANDIDATE.md\`
- \`scripts/generate-w9-inventory.mjs\`
- \`scripts/run-w9-release-gate.mjs\`
- \`scripts/run-w9-authenticated-gate.mjs\`
- \`scripts/run-w9-build.mjs\`

### Ajustes de fechamento detectados pelo gate W9

- \`components/pillar-navigation.tsx\` — nome acessível explícito no botão de pilar;
- \`scripts/foundation-authenticated-checks.ts\` — contagem de auditoria idempotente;
- \`scripts/w2-authenticated-checks.ts\` — isolamento e limpeza de eventos/reservas concorrentes;
- \`scripts/navigation-checks.ts\` — contrato atualizado para Pausa Activity no pilar Corpo;
- \`scripts/run-foundation-gate.mjs\`, \`scripts/run-w2-gate.mjs\` e \`scripts/run-w3-gate.mjs\` — migrations antes dos testes autenticados;
- \`scripts/smoke-tests.mjs\` — conflito rejeitado não é tratado como evento persistido;
- \`scripts/w8-hardening-checks.ts\` — cobertura dos nove temas governados;
- \`package.json\` — comandos \`test:w9\`, \`test:w9:auth\`, \`build:w9\` e \`release:inventory\`.
`;

writeFileSync(output, content, "utf8");
console.info(JSON.stringify({
  event: "w9_inventory_generated",
  output: relative(root, output).replaceAll("\\", "/"),
  created: created.length,
  changed: changed.length,
  removed: removed.length,
  pages: pages.length,
  apiRoutes: apiRoutes.length
}));
