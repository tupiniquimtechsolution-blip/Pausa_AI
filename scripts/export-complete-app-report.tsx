import React from "react";
import fsSync from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { Document, Image, Page, StyleSheet, Text, View, renderToFile } from "@react-pdf/renderer";
import { PrismaClient } from "@prisma/client";
import { exerciseSeeds, partnerSeeds } from "../lib/exercise-data";
import { exerciseInstructionSeeds } from "../lib/exercise-instruction-data";
import { stretchingExercises, stretchingRegions } from "../lib/stretching-exercises";
import { yogaPracticeSeeds, yogaSequenceSeeds } from "../lib/yoga-data";
import { walkingModes } from "../lib/walking";

type FileInfo = {
  path: string;
  ext: string;
  bytes: number;
  lines: number | null;
  sha1: string;
};

type AssetGroup = {
  group: string;
  files: number;
  png: number;
  jpg: number;
  svg: number;
  mp4: number;
  json: number;
  apk: number;
  mb: number;
};

type DbCount = {
  model: string;
  count: number | null;
  error?: string;
};

type PrismaDelegateWithCount = {
  count: () => Promise<number>;
};

const prisma = new PrismaClient();
const root = process.cwd();
const docsDir = path.join(root, "docs");
const outputPath = path.join(docsDir, "relatorio-completo-pausa-ai-2026-06-16.pdf");

const ignoreDirs = new Set([
  ".git",
  ".next",
  ".tmp-video-render",
  "node_modules",
  ".expo",
  ".gradle",
  "build",
  ".cache"
]);

const textExts = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".mjs",
  ".cjs",
  ".json",
  ".md",
  ".txt",
  ".css",
  ".prisma",
  ".sql",
  ".ps1",
  ".xml",
  ".properties",
  ".gradle",
  ".yml",
  ".yaml",
  ".toml",
  ".env",
  ".example"
]);

const codeExts = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".mjs",
  ".cjs",
  ".css",
  ".prisma",
  ".sql",
  ".ps1",
  ".json",
  ".xml",
  ".properties",
  ".gradle"
]);

const languageLabels: Record<string, string> = {
  ".ts": "TypeScript",
  ".tsx": "TypeScript React",
  ".js": "JavaScript",
  ".mjs": "JavaScript module",
  ".cjs": "JavaScript CommonJS",
  ".css": "CSS/Tailwind",
  ".prisma": "Prisma schema",
  ".sql": "SQL",
  ".ps1": "PowerShell",
  ".json": "JSON/config",
  ".xml": "XML/Android",
  ".properties": "Properties",
  ".gradle": "Gradle"
};

function rel(filePath: string) {
  return path.relative(root, filePath).replace(/\\/g, "/");
}

function lowerFirst(value: string) {
  return value.slice(0, 1).toLowerCase() + value.slice(1);
}

function bytesToMb(bytes: number) {
  return Math.round((bytes / 1024 / 1024) * 10) / 10;
}

function formatBytes(bytes: number) {
  if (bytes > 1024 * 1024) return `${bytesToMb(bytes)} MB`;
  if (bytes > 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${bytes} B`;
}

function imageDataUri(filePath: string) {
  const ext = path.extname(filePath).toLowerCase();
  const mime = ext === ".jpg" || ext === ".jpeg" ? "image/jpeg" : "image/png";
  const base64 = fsSync.readFileSync(filePath).toString("base64");
  return `data:${mime};base64,${base64}`;
}

async function walk(dir: string, output: string[] = []): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === "dev.db") continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (ignoreDirs.has(entry.name)) continue;
      if (rel(fullPath).startsWith("mobile/android/app/build")) continue;
      if (rel(fullPath).startsWith("mobile/android/.gradle")) continue;
      await walk(fullPath, output);
    } else {
      output.push(fullPath);
    }
  }
  return output;
}

async function fileInfo(filePath: string): Promise<FileInfo> {
  const stat = await fs.stat(filePath);
  const ext = path.extname(filePath).toLowerCase() || path.basename(filePath).toLowerCase();
  const buffer = await fs.readFile(filePath);
  const sha1 = crypto.createHash("sha1").update(buffer).digest("hex").slice(0, 10);
  let lines: number | null = null;
  if (textExts.has(ext) || path.basename(filePath).includes(".env")) {
    const text = buffer.toString("utf8");
    lines = text.length ? text.split(/\r?\n/).length : 0;
  }
  return { path: rel(filePath), ext, bytes: stat.size, lines, sha1 };
}

function isProjectCode(file: FileInfo) {
  if (!codeExts.has(file.ext)) return false;
  if (file.path === "package-lock.json" || file.path === "mobile/package-lock.json") return false;
  if (file.path.startsWith("public/videos/metadata/")) return false;
  if (file.path.startsWith("public/videos/video-manifest")) return false;
  if (file.path.startsWith("public/videos/frame-production-plan")) return false;
  return (
    file.path.startsWith("app/") ||
    file.path.startsWith("components/") ||
    file.path.startsWith("lib/") ||
    file.path.startsWith("scripts/") ||
    file.path.startsWith("prisma/") ||
    file.path.startsWith("mobile/") ||
    ["package.json", "tsconfig.json", "tailwind.config.ts", "next.config.mjs", "postcss.config.js", "next-env.d.ts"].includes(file.path)
  );
}

function routeFromPage(filePath: string) {
  const parts = filePath.replace(/\\/g, "/").split("/");
  const appIndex = parts.indexOf("app");
  const routeParts = parts.slice(appIndex + 1, -1);
  const route = `/${routeParts.join("/")}`.replace(/\/page$/, "").replace(/\/$/, "");
  return route || "/";
}

function routeFromApi(filePath: string) {
  const clean = filePath.replace(/\\/g, "/").replace(/^app\/api\//, "").replace(/\/route\.(ts|tsx)$/, "");
  return `/api/${clean}`;
}

function parseModels(schema: string) {
  const matches = Array.from(schema.matchAll(/model\s+(\w+)\s+\{([\s\S]*?)\n\}/g));
  return matches.map((match) => {
    const body = match[2];
    const fields = body
      .split(/\r?\n/)
      .map((line: string) => line.trim())
      .filter((line: string) => line && !line.startsWith("@@") && !line.startsWith("//"));
    return {
      model: match[1],
      fields: fields.length,
      indexes: (body.match(/@@index/g) || []).length,
      uniques: (body.match(/@@unique/g) || []).length
    };
  });
}

function summarizeBy<T>(items: T[], key: (item: T) => string) {
  const map = new Map<string, number>();
  for (const item of items) map.set(key(item), (map.get(key(item)) || 0) + 1);
  return Array.from(map.entries()).sort((a, b) => b[1] - a[1]).map(([name, count]) => ({ name, count }));
}

function topPublicGroup(filePath: string) {
  const parts = filePath.split("/");
  if (parts[0] !== "public") return "outros";
  if (parts[1] === "videos" && parts[2]) return `public/videos/${parts[2]}`;
  if (parts[1] === "art-masters" && parts[2]) return parts[2] === "stretch-research" ? "public/art-masters/stretch-research" : "public/art-masters";
  return `public/${parts[1] || "raiz"}`;
}

function assetGroups(files: FileInfo[]) {
  const publicFiles = files.filter((file) => file.path.startsWith("public/"));
  const groups = new Map<string, AssetGroup>();
  for (const file of publicFiles) {
    const group = topPublicGroup(file.path);
    const current = groups.get(group) || { group, files: 0, png: 0, jpg: 0, svg: 0, mp4: 0, json: 0, apk: 0, mb: 0 };
    current.files += 1;
    current.mb += file.bytes / 1024 / 1024;
    if (file.ext === ".png") current.png += 1;
    if ([".jpg", ".jpeg"].includes(file.ext)) current.jpg += 1;
    if (file.ext === ".svg") current.svg += 1;
    if (file.ext === ".mp4") current.mp4 += 1;
    if (file.ext === ".json") current.json += 1;
    if (file.ext === ".apk") current.apk += 1;
    groups.set(group, current);
  }
  return Array.from(groups.values())
    .map((group) => ({ ...group, mb: Math.round(group.mb * 10) / 10 }))
    .sort((a, b) => b.files - a.files);
}

async function dbCounts(models: string[]): Promise<DbCount[]> {
  const counts: DbCount[] = [];
  const prismaDelegates = prisma as unknown as Record<string, PrismaDelegateWithCount | undefined>;
  for (const model of models) {
    const clientName = lowerFirst(model);
    const delegate = prismaDelegates[clientName];
    if (!delegate?.count) {
      counts.push({ model, count: null, error: "delegate ausente" });
      continue;
    }
    try {
      counts.push({ model, count: await delegate.count() });
    } catch (error) {
      counts.push({ model, count: null, error: String(error).slice(0, 80) });
    }
  }
  return counts;
}

async function buildData() {
  const allPaths = await walk(root);
  const allFiles = await Promise.all(allPaths.map(fileInfo));
  const codeFiles = allFiles.filter(isProjectCode).sort((a, b) => a.path.localeCompare(b.path));
  const docs = allFiles.filter((file) => file.path.startsWith("docs/")).sort((a, b) => a.path.localeCompare(b.path));
  const schema = await fs.readFile(path.join(root, "prisma", "schema.prisma"), "utf8");
  const models = parseModels(schema);
  const counts = await dbCounts(models.map((item) => item.model));
  const packageJson = JSON.parse(await fs.readFile(path.join(root, "package.json"), "utf8"));
  const mobilePackageJson = JSON.parse(await fs.readFile(path.join(root, "mobile", "package.json"), "utf8"));
  const videoIndexPath = path.join(root, "public", "videos", "video-production-index.json");
  const videoIndex = JSON.parse(await fs.readFile(videoIndexPath, "utf8"));
  const instructionalByType = await prisma.instructionalVideo.groupBy({
    by: ["targetType"],
    _count: { _all: true },
    orderBy: { targetType: "asc" }
  });

  const pageRoutes = codeFiles
    .filter((file) => /^app\/.+\/page\.tsx$/.test(file.path) || file.path === "app/page.tsx")
    .map((file) => ({ route: routeFromPage(file.path), file: file.path }))
    .sort((a, b) => a.route.localeCompare(b.route));
  const apiRoutes = codeFiles
    .filter((file) => /^app\/api\/.+\/route\.ts$/.test(file.path))
    .map((file) => ({ route: routeFromApi(file.path), file: file.path }))
    .sort((a, b) => a.route.localeCompare(b.route));
  const components = codeFiles.filter((file) => file.path.startsWith("components/") && file.ext === ".tsx");
  const libFiles = codeFiles.filter((file) => file.path.startsWith("lib/"));
  const scriptFiles = codeFiles.filter((file) => file.path.startsWith("scripts/"));
  const sourceLines = codeFiles.reduce((sum, file) => sum + (file.lines || 0), 0);
  const allProjectBytes = allFiles.reduce((sum, file) => sum + file.bytes, 0);
  const languageSummary = summarizeBy(codeFiles, (file) => languageLabels[file.ext] || file.ext);
  const libSummary = summarizeBy(libFiles, (file) => file.path.split("/")[1] || "lib");
  const assetSummary = assetGroups(allFiles);

  return {
    generatedAt: "16/06/2026",
    allFiles,
    codeFiles,
    docs,
    models,
    counts,
    packageJson,
    mobilePackageJson,
    videoIndex,
    instructionalByType,
    pageRoutes,
    apiRoutes,
    components,
    libFiles,
    scriptFiles,
    sourceLines,
    allProjectBytes,
    languageSummary,
    libSummary,
    assetSummary
  };
}

const colors = {
  navy: "#172554",
  text: "#334155",
  muted: "#64748B",
  mint: "#A7F3D0",
  mintDark: "#047857",
  lavender: "#DDD6FE",
  ice: "#F8FAFC",
  line: "#E2E8F0",
  amber: "#F59E0B",
  white: "#FFFFFF"
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 38,
    paddingBottom: 36,
    paddingHorizontal: 34,
    fontFamily: "Helvetica",
    color: colors.text,
    backgroundColor: "#FBFCFA"
  },
  cover: {
    padding: 42,
    fontFamily: "Helvetica",
    color: colors.text,
    backgroundColor: "#F3F8F4"
  },
  coverKicker: {
    fontSize: 9,
    color: colors.mintDark,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginBottom: 14
  },
  coverTitle: {
    fontSize: 30,
    lineHeight: 1.08,
    fontFamily: "Helvetica-Bold",
    color: colors.navy,
    marginBottom: 12
  },
  coverSubtitle: {
    fontSize: 11.5,
    lineHeight: 1.45,
    color: "#475569",
    marginBottom: 18
  },
  card: {
    borderWidth: 1,
    borderColor: "#DCE8DF",
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10
  },
  statGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8
  },
  statBox: {
    width: "33.33%",
    paddingRight: 8,
    marginBottom: 10
  },
  statNumber: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: colors.navy
  },
  statLabel: {
    fontSize: 7.5,
    lineHeight: 1.2,
    color: colors.muted,
    textTransform: "uppercase"
  },
  h1: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: colors.navy,
    marginBottom: 8
  },
  h2: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    color: colors.navy,
    marginTop: 8,
    marginBottom: 5
  },
  h3: {
    fontSize: 10.5,
    fontFamily: "Helvetica-Bold",
    color: "#1E3A8A",
    marginTop: 6,
    marginBottom: 3
  },
  p: {
    fontSize: 9,
    lineHeight: 1.42,
    color: colors.text,
    marginBottom: 5
  },
  small: {
    fontSize: 7.4,
    lineHeight: 1.25,
    color: colors.muted
  },
  pillRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 3,
    marginBottom: 7
  },
  pill: {
    fontSize: 7,
    color: colors.navy,
    backgroundColor: "#EEFDF4",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 3,
    marginRight: 4,
    marginBottom: 4
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 3
  },
  bulletDot: {
    width: 10,
    fontSize: 8,
    color: colors.mintDark
  },
  bulletText: {
    flex: 1,
    fontSize: 8.7,
    lineHeight: 1.35,
    color: colors.text
  },
  twoCol: {
    flexDirection: "row",
    gap: 10
  },
  col: {
    flex: 1
  },
  table: {
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 5,
    marginTop: 4,
    marginBottom: 8,
    overflow: "hidden"
  },
  tr: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.line
  },
  th: {
    backgroundColor: "#EEF2FF",
    fontFamily: "Helvetica-Bold",
    color: colors.navy
  },
  td: {
    fontSize: 7.1,
    lineHeight: 1.22,
    paddingHorizontal: 4,
    paddingVertical: 4,
    color: colors.text
  },
  sectionLabel: {
    fontSize: 7.4,
    color: colors.mintDark,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    marginBottom: 4,
    fontFamily: "Helvetica-Bold"
  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 6
  },
  imageCard: {
    width: "23.5%",
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 6,
    padding: 4,
    backgroundColor: colors.white
  },
  image: {
    width: "100%",
    height: 76,
    objectFit: "cover",
    borderRadius: 4
  },
  imageCaption: {
    fontSize: 6.5,
    lineHeight: 1.15,
    color: colors.muted,
    marginTop: 3
  },
  footer: {
    position: "absolute",
    bottom: 18,
    left: 34,
    right: 34,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    paddingTop: 5
  },
  footerText: {
    fontSize: 6.8,
    color: "#94A3B8"
  }
});

function Footer() {
  return (
    <View style={styles.footer} fixed>
      <Text style={styles.footerText}>Pausa AI - relatorio completo do app</Text>
      <Text style={styles.footerText} render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`} />
    </View>
  );
}

function ReportPage({ children }: { children: React.ReactNode }) {
  return (
    <Page size="A4" style={styles.page}>
      {children}
      <Footer />
    </Page>
  );
}

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <View>
      <Text style={styles.sectionLabel}>{label}</Text>
      <Text style={styles.h1}>{title}</Text>
    </View>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <Text style={styles.p}>{children}</Text>;
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bulletDot}>-</Text>
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  );
}

function Pills({ values }: { values: string[] }) {
  return (
    <View style={styles.pillRow}>
      {values.map((value) => (
        <Text key={value} style={styles.pill}>{value}</Text>
      ))}
    </View>
  );
}

function Table({
  headers,
  rows,
  widths
}: {
  headers: string[];
  rows: Array<Array<string | number | null | undefined>>;
  widths: number[];
}) {
  return (
    <View style={styles.table}>
      <View style={[styles.tr, styles.th]} fixed>
        {headers.map((header, index) => (
          <Text key={header} style={[styles.td, styles.th, { width: `${widths[index]}%` }]}>{header}</Text>
        ))}
      </View>
      {rows.map((row, rowIndex) => (
        <View key={`${rowIndex}-${row.join("-")}`} style={[styles.tr, rowIndex === rows.length - 1 ? { borderBottomWidth: 0 } : {}]}>
          {row.map((cell, index) => (
            <Text key={`${rowIndex}-${index}`} style={[styles.td, { width: `${widths[index]}%` }]}>
              {cell === null || cell === undefined ? "" : String(cell)}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}

function KeyValueTable({ rows }: { rows: Array<[string, string | number]> }) {
  return <Table headers={["Item", "Detalhe"]} widths={[34, 66]} rows={rows} />;
}

function chunk<T>(items: T[], size: number) {
  const chunks: T[][] = [];
  for (let index = 0; index < items.length; index += size) chunks.push(items.slice(index, index + size));
  return chunks;
}

function SummaryStats({ data }: { data: Awaited<ReturnType<typeof buildData>> }) {
  const totalAssets = data.assetSummary.reduce((sum, item) => sum + item.files, 0);
  const totalImages = data.allFiles.filter((file) => [".png", ".jpg", ".jpeg", ".svg"].includes(file.ext)).length;
  const totalVideos = data.allFiles.filter((file) => file.ext === ".mp4").length;
  const stats = [
    ["Arquivos proprios", data.allFiles.length],
    ["Arquivos de codigo/config", data.codeFiles.length],
    ["Linhas de fonte", data.sourceLines.toLocaleString("pt-BR")],
    ["Rotas web", data.pageRoutes.length],
    ["APIs", data.apiRoutes.length],
    ["Modelos Prisma", data.models.length],
    ["Assets publicos", totalAssets],
    ["Imagens/SVG", totalImages],
    ["MP4 reais", totalVideos]
  ];
  return (
    <View style={styles.statGrid}>
      {stats.map(([label, value]) => (
        <View key={String(label)} style={styles.statBox}>
          <Text style={styles.statNumber}>{String(value)}</Text>
          <Text style={styles.statLabel}>{String(label)}</Text>
        </View>
      ))}
    </View>
  );
}

function Cover({ data }: { data: Awaited<ReturnType<typeof buildData>> }) {
  return (
    <Page size="A4" style={styles.cover}>
      <Text style={styles.coverKicker}>Dossie tecnico, produto e arte - gerado em {data.generatedAt}</Text>
      <Text style={styles.coverTitle}>Pausa AI: relatorio completo de desenvolvimento do app</Text>
      <Text style={styles.coverSubtitle}>
        Documento consolidado sobre codigo, stack, arquitetura, front-end, back-end, banco de dados, mobile,
        artes, direcao visual, conteudo, videos, scripts, validacao e biblias de produto do workspace local.
      </Text>
      <View style={styles.card}>
        <Text style={styles.h2}>Escopo do relatorio</Text>
        <P>
          O PDF inventaria os arquivos proprios do projeto e resume as decisoes tecnicas e editoriais ja
          materializadas no repositorio. Dependencias de terceiros, cache de build, `.git`, `.next`,
          `node_modules` e builds Android gerados foram excluidos do inventario principal para preservar
          legibilidade e evitar confundir codigo do produto com artefatos externos.
        </P>
        <SummaryStats data={data} />
      </View>
      <View style={styles.card}>
        <Text style={styles.h2}>Leitura rapida</Text>
        <Bullet>Produto mobile-first de bem-estar preventivo, com check-ins, recomendacoes, rotina, movimento leve, agenda, historico e camadas B2B/admin.</Bullet>
        <Bullet>Stack principal: Next.js 16, React 19, TypeScript, Tailwind, Prisma, SQLite local, JWT em cookie httpOnly e Expo/WebView no companion mobile.</Bullet>
        <Bullet>Direcao de arte: calma, clara, humana, sem estetica fitness agressiva; paleta navy, mint, lavender, ice e acentos positivos.</Bullet>
        <Bullet>Conteudo planejado de videos: banco atual tem registros `InstructionalVideo` para exercicios, missoes, praticas de Yoga e sequencias de Yoga.</Bullet>
      </View>
      <Footer />
    </Page>
  );
}

function ProductBible() {
  return (
    <ReportPage>
      <SectionTitle label="01 - Biblia do produto" title="Identidade, promessa e limites do Pausa AI" />
      <P>
        O Pausa AI e um MVP full-stack de bem-estar preventivo. A promessa central nao e diagnosticar,
        tratar ou substituir ajuda humana; e oferecer pequenas pausas possiveis para reduzir sobrecarga,
        recuperar clareza e criar continuidade no dia.
      </P>
      <View style={styles.twoCol}>
        <View style={styles.col}>
          <Text style={styles.h2}>Pilares de produto</Text>
          <Bullet>Check-in rapido para mapear foco, humor, estresse, energia e sono.</Bullet>
          <Bullet>Recomendacao local com IA opcional e fallback seguro por regras.</Bullet>
          <Bullet>Conteudo leve: respiracao, pausa sem tela, escrita, sono, Yoga, mobilidade, alongamentos e caminhada.</Bullet>
          <Bullet>Progresso gratuito por XP, niveis, historico e conquistas.</Bullet>
          <Bullet>Rotina e agenda assistidas sem prometer automacoes que o sistema operacional nao permite.</Bullet>
        </View>
        <View style={styles.col}>
          <Text style={styles.h2}>Tom e seguranca</Text>
          <Bullet>Linguagem breve, clara, humana e sem cobranca.</Bullet>
          <Bullet>Evitar promessas de cura, diagnosticos, performance e frases agressivas.</Bullet>
          <Bullet>Quando houver risco, interromper recomendacoes comuns e orientar apoio imediato.</Bullet>
          <Bullet>Em contexto corporativo, dados devem ser anonimos e consolidados.</Bullet>
          <Bullet>O modo sem redes e assistido: salva intencao, lembra e orienta configuracoes do aparelho.</Bullet>
        </View>
      </View>
      <Text style={styles.h2}>Frases e postura editorial</Text>
      <P>
        O app fala em termos de &quot;parece&quot;, &quot;pode ser util&quot;, &quot;vamos comecar pequeno&quot;, &quot;uma pausa possivel&quot;
        e &quot;sem tentar resolver tudo de uma vez&quot;. O usuario nao deve sentir que falhou se nao completar uma
        pratica; o app reconhece pequenos passos e adapta amplitude, ritmo e contexto.
      </P>
      <Text style={styles.h2}>Publicos e casos de uso</Text>
      <P>
        O nucleo B2C atende pessoas com sobrecarga cotidiana, foco fragmentado, uso excessivo de telas,
        energia baixa, sono sensivel e necessidade de movimento leve. A camada B2B serve pilotos
        corporativos com dashboard demonstrativo, leads e relatorios consolidados.
      </P>
    </ReportPage>
  );
}

function Architecture({ data }: { data: Awaited<ReturnType<typeof buildData>> }) {
  const dependencies = Object.keys(data.packageJson.dependencies || {});
  const mobileDeps = Object.keys(data.mobilePackageJson.dependencies || {});
  return (
    <ReportPage>
      <SectionTitle label="02 - Arquitetura" title="Stack, runtime e organizacao do projeto" />
      <KeyValueTable rows={[
        ["Workspace", "C:/Users/rodrigo.filho/Documents/Pausa AI"],
        ["Web", "Next.js 16 App Router, React 19, TypeScript"],
        ["Estilo", "Tailwind CSS, globals.css e tokens em tailwind.config.ts"],
        ["Banco local", "SQLite via Prisma ORM"],
        ["Autenticacao", "JWT assinado em cookie httpOnly + bcryptjs"],
        ["Validacao", "Zod em rotas e formularios criticos"],
        ["Graficos/UI", "Recharts e lucide-react"],
        ["IA", "OpenAI opcional via OPENAI_API_KEY; fallback local por regras"],
        ["Mobile", "Expo + React Native + WebView + bridge nativa para feedback/permissoes"],
        ["PDF", "@react-pdf/renderer para documentos gerados localmente"]
      ]} />
      <Text style={styles.h2}>Dependencias web</Text>
      <P>{dependencies.join(", ")}</P>
      <Text style={styles.h2}>Dependencias mobile</Text>
      <P>{mobileDeps.join(", ")}</P>
      <Text style={styles.h2}>Estrutura de pastas</Text>
      <View style={styles.twoCol}>
        <View style={styles.col}>
          <Bullet>`app/`: telas, layouts e APIs Next.js.</Bullet>
          <Bullet>`components/`: UI reutilizavel e experiencias client-side.</Bullet>
          <Bullet>`lib/`: regras de negocio, seeds, recomendacao, agenda, walking, videos e conteudo.</Bullet>
          <Bullet>`prisma/`: schema, seed e SQLs de migracao.</Bullet>
        </View>
        <View style={styles.col}>
          <Bullet>`mobile/`: app Expo/WebView e ponte nativa.</Bullet>
          <Bullet>`public/`: artes, videos, frames, walking, yoga, APKs e manifests.</Bullet>
          <Bullet>`scripts/`: geradores de assets, videos, PDFs, testes e validadores.</Bullet>
          <Bullet>`docs/`: documentacao, handoff, roadmaps, roteiros e relatorios.</Bullet>
        </View>
      </View>
      <Text style={styles.h2}>Linguagens e formatos no codigo proprio</Text>
      <Table
        headers={["Linguagem/formato", "Arquivos"]}
        widths={[72, 28]}
        rows={data.languageSummary.map((item) => [item.name, item.count])}
      />
    </ReportPage>
  );
}

function Frontend({ data }: { data: Awaited<ReturnType<typeof buildData>> }) {
  const mainRoutes = data.pageRoutes.filter((route) => !route.route.startsWith("/admin")).slice(0, 42);
  const adminRoutes = data.pageRoutes.filter((route) => route.route.startsWith("/admin") || route.route.startsWith("/empresas"));
  const componentRows = data.components.slice(0, 55).map((file) => [file.path, file.lines || 0, formatBytes(file.bytes)]);
  return (
    <ReportPage>
      <SectionTitle label="03 - Front-end" title="Rotas, telas e componentes" />
      <P>
        O front-end usa Next.js App Router com rotas publicas, area autenticada em `/app`,
        admin/B2B e experiencias mobile-first. A navegacao principal prioriza dashboard,
        check-in, missoes, movimento, rotina, agenda, historico e perfil.
      </P>
      <Text style={styles.h2}>Rotas de pagina principais</Text>
      <Table headers={["Rota", "Arquivo"]} widths={[38, 62]} rows={mainRoutes.map((item) => [item.route, item.file])} />
      <Text style={styles.h2}>Rotas admin, empresas e B2B</Text>
      <Table headers={["Rota", "Arquivo"]} widths={[38, 62]} rows={adminRoutes.map((item) => [item.route, item.file])} />
      <Text style={styles.h2}>Componentes reutilizaveis</Text>
      <P>
        Ha {data.components.length} componentes TSX em `components/`. Eles cobrem navegacao, cards,
        timers, agenda, rotina, caminhada, charts, formularios, sequencias de imagem e blocos de video.
      </P>
      <Table headers={["Componente", "Linhas", "Tamanho"]} widths={[70, 15, 15]} rows={componentRows} />
    </ReportPage>
  );
}

function Backend({ data }: { data: Awaited<ReturnType<typeof buildData>> }) {
  const apiChunks = chunk(data.apiRoutes, 34);
  return (
    <>
      <ReportPage>
        <SectionTitle label="04 - Back-end" title="APIs, servicos e regras de negocio" />
        <P>
          O back-end vive no App Router (`app/api`) e em modulos de dominio dentro de `lib/`.
          A maior parte das decisoes sensiveis de produto, como risco, recomendacao, agenda e conteudo
          guiado, possui fallback local para nao depender exclusivamente de servicos externos.
        </P>
        <Text style={styles.h2}>Rotas de API</Text>
        <Table headers={["Endpoint", "Arquivo"]} widths={[40, 60]} rows={apiChunks[0].map((item) => [item.route, item.file])} />
      </ReportPage>
      {apiChunks.slice(1).map((items, index) => (
        <ReportPage key={`api-${index}`}>
          <SectionTitle label="04 - Back-end" title={`Rotas de API - continuacao ${index + 1}`} />
          <Table headers={["Endpoint", "Arquivo"]} widths={[40, 60]} rows={items.map((item) => [item.route, item.file])} />
        </ReportPage>
      ))}
      <ReportPage>
        <SectionTitle label="04 - Back-end" title="Modulos de dominio em lib/" />
        <P>
          Foram detectados {data.libFiles.length} arquivos em `lib/`. Abaixo esta o agrupamento por
          subdominio, seguido dos modulos mais relevantes para continuidade.
        </P>
        <Table headers={["Subdominio", "Arquivos"]} widths={[75, 25]} rows={data.libSummary.map((item) => [item.name, item.count])} />
        <Pills values={[
          "auth",
          "check-in",
          "agenda",
          "routine",
          "walking",
          "yoga",
          "stretching",
          "instructional videos",
          "weekly reports",
          "health snapshot",
          "achievements"
        ]} />
        <Text style={styles.h2}>Regras de alto risco</Text>
        <Bullet>Risco textual deve sobrepor recomendacoes comuns e orientar ajuda imediata.</Bullet>
        <Bullet>IA e opcional; fallback local deve continuar funcionando sem `OPENAI_API_KEY`.</Bullet>
        <Bullet>Dados B2B devem ser consolidados; nunca exibir respostas individuais no dashboard empresarial.</Bullet>
        <Bullet>Videos planejados nao significam MP4 final; a UI deve manter fallback honesto quando arquivo nao existe.</Bullet>
      </ReportPage>
    </>
  );
}

function DataLayer({ data }: { data: Awaited<ReturnType<typeof buildData>> }) {
  const countMap = new Map(data.counts.map((item) => [item.model, item.count]));
  return (
    <>
      <ReportPage>
        <SectionTitle label="05 - Dados" title="Prisma, SQLite e conteudo semeado" />
        <P>
          O banco local e SQLite (`file:./dev.db`) controlado por Prisma. O schema tem {data.models.length}
          modelos e cobre usuarios, perfis, check-ins, missoes, exercicios, videos planejados, rotina,
          agenda, walking, saude, empresas, leads e progresso.
        </P>
        <Table
          headers={["Modelo", "Campos", "Indexes", "Uniques", "Registros"]}
          widths={[38, 15, 15, 15, 17]}
          rows={data.models.map((model) => [model.model, model.fields, model.indexes, model.uniques, countMap.get(model.model) ?? "n/d"])}
        />
      </ReportPage>
      <ReportPage>
        <SectionTitle label="05 - Dados" title="Conteudo e seeds principais" />
        <KeyValueTable rows={[
          ["Exercise", exerciseSeeds.length],
          ["ExerciseInstruction", exerciseInstructionSeeds.length],
          ["Stretching exercises", stretchingExercises.length],
          ["Stretching regions", stretchingRegions.length],
          ["Yoga practices", yogaPracticeSeeds.length],
          ["Yoga sequences", yogaSequenceSeeds.length],
          ["Walking modes", walkingModes.length],
          ["Partners", partnerSeeds.length],
          ["InstructionalVideo no banco", data.instructionalByType.reduce((sum, item) => sum + item._count._all, 0)]
        ]} />
        <Text style={styles.h2}>Videos planejados por tipo no banco atual</Text>
        <Table
          headers={["Target type", "Registros"]}
          widths={[72, 28]}
          rows={data.instructionalByType.map((item) => [item.targetType, item._count._all])}
        />
        <Text style={styles.h2}>Taxonomia de movimento</Text>
        <P>
          Corpo & Movimento combina Yoga de bolso, mobilidade, alongamentos, caminhada, casa leve,
          pausas de trabalho, cardio leve e funcional com foco em seguranca, baixa pressao e progressao.
        </P>
      </ReportPage>
    </>
  );
}

function ArtDirection({ data }: { data: Awaited<ReturnType<typeof buildData>> }) {
  const masterFiles = data.allFiles
    .filter((file) => file.path.startsWith("public/art-masters/") && file.ext === ".png")
    .filter((file) => !file.path.includes("/stretch-research/"))
    .sort((a, b) => a.path.localeCompare(b.path));
  const imagePaths = masterFiles.slice(0, 8).map((file) => path.join(root, file.path));
  return (
    <>
      <ReportPage>
        <SectionTitle label="06 - Artes" title="Direcao de arte, assets e videos" />
        <P>
          A direcao visual e calma, limpa, humana e preventiva. O app evita academia escura, neon,
          linguagem de performance e personagens simplificados quando a entrega pede acabamento final.
          A paleta tecnica vem de `tailwind.config.ts` e `globals.css`.
        </P>
        <KeyValueTable rows={[
          ["Navy", "#172554"],
          ["Mint", "#A7F3D0"],
          ["Lavender", "#DDD6FE"],
          ["Ice", "#F8FAFC"],
          ["Text", "#334155"],
          ["Line", "#E2E8F0"],
          ["Positive", "#10B981"],
          ["Amber", "#F59E0B"],
          ["Fonte UI", "Inter/system-ui no CSS global"]
        ]} />
        <Text style={styles.h2}>Politica visual</Text>
        <Bullet>Usar ambientes claros, casa/trabalho, luz natural, plantas, tapete discreto e composicao limpa.</Bullet>
        <Bullet>Priorizar pessoa adulta recorrente, expressao calma, roupa azul-marinho e visual semi-realista/premium.</Bullet>
        <Bullet>Em movimento, mostrar alinhamento seguro e amplitude confortavel, sem acrobacia ou estetica fitness agressiva.</Bullet>
        <Bullet>Em videos, manter formato principal 9:16, legenda, narrativa gentil e checklist de aprovacao antes de publicar.</Bullet>
      </ReportPage>
      <ReportPage>
        <SectionTitle label="06 - Artes" title="Inventario de assets publicos" />
        <P>
          Este inventario agrupa todos os arquivos servidos em `public/`, incluindo artes, APKs,
          videos, thumbnails, frames e manifests.
        </P>
        <Table
          headers={["Grupo", "Arquivos", "PNG", "JPG", "SVG", "MP4", "JSON", "APK", "MB"]}
          widths={[34, 11, 8, 8, 8, 8, 8, 7, 8]}
          rows={data.assetSummary.map((item) => [item.group, item.files, item.png, item.jpg, item.svg, item.mp4, item.json, item.apk, item.mb])}
        />
      </ReportPage>
      <ReportPage>
        <SectionTitle label="06 - Artes" title="Masters humanos e amostras visuais" />
        <View style={styles.imageGrid}>
          {imagePaths.map((imagePath) => (
            <View key={imagePath} style={styles.imageCard}>
              <Image src={imageDataUri(imagePath)} style={styles.image} />
              <Text style={styles.imageCaption}>{rel(imagePath)}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.h2}>Sprint de videos em manifest</Text>
        <KeyValueTable rows={[
          ["Manifesto de producao", "public/videos/video-manifest.json"],
          ["Total no manifesto", data.videoIndex.total_videos],
          ["Corpo & Movimento no manifesto", data.videoIndex.body_movement_count],
          ["Missoes classicas no manifesto", data.videoIndex.classic_mission_count],
          ["Status", data.videoIndex.status],
          ["Observacao", "O banco atual amplia InstructionalVideo para YogaPractice/YogaSequence; o manifesto de producao ainda descreve a sprint original de 138 videos."]
        ]} />
      </ReportPage>
    </>
  );
}

function MobileAndOps({ data }: { data: Awaited<ReturnType<typeof buildData>> }) {
  const webScripts = Object.entries(data.packageJson.scripts || {});
  const mobileScripts = Object.entries(data.mobilePackageJson.scripts || {});
  const apks = data.allFiles.filter((file) => file.path.startsWith("public/apk/")).sort((a, b) => b.bytes - a.bytes);
  return (
    <ReportPage>
      <SectionTitle label="07 - Mobile e operacao" title="Expo/WebView, APKs, scripts e validacao" />
      <Text style={styles.h2}>Mobile companion</Text>
      <P>
        O app mobile em `mobile/` usa Expo, React Native e WebView para carregar a experiencia web.
        A ponte `mobile/nativeFeedback.ts` tenta habilitar haptics, notificacoes, calendario, intents
        Android, Health Connect e atalhos de configuracao quando o ambiente nativo permite.
      </P>
      <Text style={styles.h2}>Scripts web</Text>
      <Table headers={["Script", "Comando"]} widths={[30, 70]} rows={webScripts.map(([name, cmd]) => [name, String(cmd)])} />
      <Text style={styles.h2}>Scripts mobile</Text>
      <Table headers={["Script", "Comando"]} widths={[30, 70]} rows={mobileScripts.map(([name, cmd]) => [name, String(cmd)])} />
      <Text style={styles.h2}>APKs em public/apk</Text>
      <Table headers={["Arquivo", "Tamanho"]} widths={[82, 18]} rows={apks.map((file) => [file.path, formatBytes(file.bytes)])} />
      <Text style={styles.h2}>Validacao recomendada</Text>
      <Bullet>`npm.cmd run db:push`, `npm.cmd run db:seed`, `npm.cmd run typecheck`, `npm.cmd run build` e `npm.cmd run test:smoke`.</Bullet>
      <Bullet>Em Windows, se Prisma travar em `query_engine-windows.dll.node`, parar processos Node/Next antes de gerar client.</Bullet>
      <Bullet>Para testar no celular, iniciar servidor em `0.0.0.0:3000` e usar o IP LAN atual, nao o IP antigo no nome do APK.</Bullet>
    </ReportPage>
  );
}

function Documentation({ data }: { data: Awaited<ReturnType<typeof buildData>> }) {
  const docRows = data.docs
    .filter((file) => [".md", ".pdf", ".json", ".csv", ".jsonl"].includes(file.ext))
    .map((file) => [file.path, file.ext.replace(".", "").toUpperCase(), formatBytes(file.bytes)]);
  return (
    <ReportPage>
      <SectionTitle label="08 - Documentacao" title="Biblioteca interna e fontes de verdade" />
      <P>
        A pasta `docs/` contem roadmaps, relatorios, handoffs, roteiros de video, direcao de voz,
        planejamento de imagens, checklist mobile e PDFs. O handoff de continuidade e este novo relatorio
        devem ser lidos junto com README, schema Prisma e os dados reais do seed.
      </P>
      <Table headers={["Documento", "Tipo", "Tamanho"]} widths={[74, 12, 14]} rows={docRows} />
    </ReportPage>
  );
}

function CodeInventory({ data }: { data: Awaited<ReturnType<typeof buildData>> }) {
  const rows = data.codeFiles.map((file) => [
    file.path,
    languageLabels[file.ext] || file.ext,
    file.lines ?? "-",
    formatBytes(file.bytes),
    file.sha1
  ]);
  const pages = chunk(rows, 38);
  return (
    <>
      {pages.map((items, index) => (
        <ReportPage key={`code-${index}`}>
          <SectionTitle label="09 - Anexo de codigo" title={`Inventario completo de codigo proprio ${index + 1}/${pages.length}`} />
          {index === 0 && (
            <P>
              Cada linha abaixo aponta para um arquivo de codigo, configuracao ou migracao propria do app.
              O hash curto SHA-1 permite identificar mudancas posteriores sem copiar dependencias externas
              ou codigo gerado de build para dentro do PDF.
            </P>
          )}
          <Table headers={["Arquivo", "Linguagem", "Linhas", "Tam.", "Hash"]} widths={[52, 20, 9, 9, 10]} rows={items} />
        </ReportPage>
      ))}
    </>
  );
}

function RoadmapAndRisks() {
  return (
    <ReportPage>
      <SectionTitle label="10 - Continuidade" title="Pendencias, riscos e proximos passos" />
      <Text style={styles.h2}>Limites conhecidos</Text>
      <Bullet>SQLite e adequado para desenvolvimento local; producao publica deve migrar para PostgreSQL ou banco gerenciado.</Bullet>
      <Bullet>Web Push real exige HTTPS, service worker de producao e configuracao de dominio.</Bullet>
      <Bullet>Alarmes nativos e bloqueio de redes dependem das permissoes do Android/iOS; o produto deve comunicar limites com honestidade.</Bullet>
      <Bullet>Health Connect precisa de validacao em aparelho fisico e permissoes reais.</Bullet>
      <Bullet>Videos planejados precisam de MP4 H.264 final, audio, legenda, thumbnail e checklist antes de publicacao.</Bullet>
      <Text style={styles.h2}>Proximas fases recomendadas</Text>
      <Bullet>QA completo no celular fisico, cobrindo login, onboarding, check-in, rotina, Yoga, caminhada e agenda.</Bullet>
      <Bullet>Staging HTTPS para WebView e testes externos.</Bullet>
      <Bullet>Revisao LGPD formal, politicas de retencao e privacidade para B2B.</Bullet>
      <Bullet>Dashboard B2B real atras de feature flag, mantendo demo anonima como experiencia segura.</Bullet>
      <Bullet>Ampliar testes automatizados para APIs criticas, agenda, videos planejados e recomendacao.</Bullet>
    </ReportPage>
  );
}

function AppReport({ data }: { data: Awaited<ReturnType<typeof buildData>> }) {
  return (
    <Document
      title="Relatorio completo Pausa AI"
      author="Codex"
      subject="Dossie tecnico, produto, codigo e arte do app Pausa AI"
      keywords="Pausa AI, app, Next.js, Prisma, Expo, relatorio tecnico"
    >
      <Cover data={data} />
      <ProductBible />
      <Architecture data={data} />
      <Frontend data={data} />
      <Backend data={data} />
      <DataLayer data={data} />
      <ArtDirection data={data} />
      <MobileAndOps data={data} />
      <Documentation data={data} />
      <CodeInventory data={data} />
      <RoadmapAndRisks />
    </Document>
  );
}

async function main() {
  await fs.mkdir(docsDir, { recursive: true });
  const data = await buildData();
  await renderToFile(<AppReport data={data} />, outputPath);
  await prisma.$disconnect();
  console.log(JSON.stringify({
    output: rel(outputPath),
    codeFiles: data.codeFiles.length,
    sourceLines: data.sourceLines,
    pagesExpected: "dynamic",
    assets: data.assetSummary.reduce((sum, item) => sum + item.files, 0),
    routes: data.pageRoutes.length,
    apis: data.apiRoutes.length,
    prismaModels: data.models.length
  }, null, 2));
}

main().catch(async (error) => {
  await prisma.$disconnect();
  console.error(error);
  process.exit(1);
});
