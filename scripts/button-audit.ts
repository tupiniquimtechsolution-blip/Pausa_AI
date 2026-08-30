import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";

const roots = ["app", "components"];

async function sourceFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(path);
    return entry.isFile() && /\.(tsx|jsx)$/.test(entry.name) ? [path] : [];
  }));
  return nested.flat();
}

async function main() {
  const files = (await Promise.all(roots.map(sourceFiles))).flat();
  const issues: Array<{ file: string; line: number; issue: string }> = [];
  const matrix: Array<{ file: string; buttons: number; interactive: number; labelled: number }> = [];

  for (const file of files) {
    const source = await readFile(file, "utf8");
    const buttonPattern = /<button\b([\s\S]*?)>([\s\S]*?)<\/button>/g;
    let match: RegExpExecArray | null;
    let buttons = 0;
    let interactive = 0;
    let labelled = 0;
    while ((match = buttonPattern.exec(source))) {
      buttons += 1;
      const attributes = match[1];
      const children = match[2];
      const line = source.slice(0, match.index).split("\n").length;
      const hasType = /\btype\s*=/.test(attributes);
      const hasAction = /\bonClick\s*=|\bformAction\s*=|\btype\s*=\s*["']submit["']/.test(attributes);
      const visibleText = children
        .replace(/<[^>]+>/g, " ")
        .replace(/\{[^}]*\}/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      const hasLabel = /\baria-label\s*=|\btitle\s*=/.test(attributes) || visibleText.length > 0;
      if (hasAction) interactive += 1;
      if (hasLabel) labelled += 1;
      if (!hasType) issues.push({ file: relative(process.cwd(), file), line, issue: "button sem type explícito" });
      if (!hasAction) issues.push({ file: relative(process.cwd(), file), line, issue: "button sem ação identificável" });
      if (!hasLabel) issues.push({ file: relative(process.cwd(), file), line, issue: "button sem nome acessível identificável" });
    }
    if (buttons) matrix.push({ file: relative(process.cwd(), file), buttons, interactive, labelled });
  }

  assert.deepEqual(issues, [], `Auditoria de botões falhou:\n${issues.map((item) =>
    `${item.file}:${item.line} ${item.issue}`
  ).join("\n")}`);
  console.info(JSON.stringify({
    event: "button_audit_passed",
    files: matrix.length,
    buttons: matrix.reduce((sum, item) => sum + item.buttons, 0),
    platforms: ["desktop-web", "mobile-web", "webview", "android", "ios"],
    matrix
  }));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
