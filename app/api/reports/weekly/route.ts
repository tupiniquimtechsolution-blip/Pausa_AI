import React from "react";
import type { ReactElement } from "react";
import { Document, Page, StyleSheet, Text, View, renderToBuffer, type DocumentProps } from "@react-pdf/renderer";
import { format, subDays } from "date-fns";
import { NextResponse } from "next/server";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { average, computeStreak } from "@/lib/metrics";

const styles = StyleSheet.create({
  page: { padding: 32, fontSize: 11, color: "#172554", fontFamily: "Helvetica" },
  title: { fontSize: 24, fontWeight: 700, marginBottom: 8 },
  subtitle: { color: "#475569", marginBottom: 20 },
  section: { border: "1px solid #E2E8F0", borderRadius: 12, padding: 14, marginBottom: 12 },
  sectionTitle: { fontSize: 15, fontWeight: 700, marginBottom: 8 },
  grid: { flexDirection: "row", gap: 8, marginBottom: 12 },
  metric: { flex: 1, backgroundColor: "#ECFDF5", borderRadius: 10, padding: 10 },
  metricLabel: { fontSize: 8, color: "#64748B", textTransform: "uppercase" },
  metricValue: { fontSize: 18, fontWeight: 700, marginTop: 4 },
  row: { flexDirection: "row", justifyContent: "space-between", borderBottom: "1px solid #E2E8F0", paddingVertical: 5 },
  note: { color: "#475569", lineHeight: 1.45 }
});

function ReportDocument({
  name,
  checkins,
  practices,
  missions
}: {
  name: string;
  checkins: Array<{ createdAt: Date; moodScore: number; sleepScore: number; stressScore: number; energyScore: number }>;
  practices: number;
  missions: number;
}) {
  const mood = average(checkins.map((item) => item.moodScore));
  const sleep = average(checkins.map((item) => item.sleepScore));
  const stress = average(checkins.map((item) => item.stressScore));
  const energy = average(checkins.map((item) => item.energyScore));
  const suggestion = stress >= 4
    ? "Reserve pausas curtas antes de blocos exigentes e prefira respiracao guiada."
    : sleep <= 2.5
      ? "Experimente reduzir telas perto da noite em pelo menos duas noites."
      : "Mantenha praticas curtas e observe o horario que mais funciona para voce.";

  return React.createElement(Document, null,
    React.createElement(Page, { size: "A4", style: styles.page },
      React.createElement(Text, { style: styles.title }, "Relatorio semanal Pausa AI"),
      React.createElement(Text, { style: styles.subtitle }, `${name} - gerado em ${format(new Date(), "dd/MM/yyyy")}`),
      React.createElement(View, { style: styles.grid },
        React.createElement(View, { style: styles.metric }, React.createElement(Text, { style: styles.metricLabel }, "Humor"), React.createElement(Text, { style: styles.metricValue }, String(mood || "-"))),
        React.createElement(View, { style: styles.metric }, React.createElement(Text, { style: styles.metricLabel }, "Sono"), React.createElement(Text, { style: styles.metricValue }, String(sleep || "-"))),
        React.createElement(View, { style: styles.metric }, React.createElement(Text, { style: styles.metricLabel }, "Estresse"), React.createElement(Text, { style: styles.metricValue }, String(stress || "-"))),
        React.createElement(View, { style: styles.metric }, React.createElement(Text, { style: styles.metricLabel }, "Energia"), React.createElement(Text, { style: styles.metricValue }, String(energy || "-")))
      ),
      React.createElement(View, { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, "Resumo"),
        React.createElement(Text, { style: styles.note }, `Check-ins: ${checkins.length}. Streak atual: ${computeStreak(checkins)} dia(s). Praticas concluidas: ${practices}. Missoes concluidas: ${missions}.`)
      ),
      React.createElement(View, { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, "Check-ins recentes"),
        ...checkins.map((item) => React.createElement(View, { key: item.createdAt.toISOString(), style: styles.row },
          React.createElement(Text, null, format(item.createdAt, "dd/MM")),
          React.createElement(Text, null, `Humor ${item.moodScore} | Sono ${item.sleepScore} | Estresse ${item.stressScore} | Energia ${item.energyScore}`)
        ))
      ),
      React.createElement(View, { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, "Sugestao para a proxima semana"),
        React.createElement(Text, { style: styles.note }, suggestion)
      )
    )
  );
}

export async function GET(request: Request) {
  const user = await requireUser();
  const url = new URL(request.url);
  const week = url.searchParams.get("week") || format(new Date(), "yyyy-'W'II");
  const since = subDays(new Date(), 7);
  const [checkins, practices, missions] = await Promise.all([
    prisma.checkin.findMany({ where: { userId: user.id, createdAt: { gte: since } }, orderBy: { createdAt: "asc" } }),
    prisma.exerciseInstructionSession.count({ where: { userId: user.id, completedAt: { gte: since } } }),
    prisma.missionCompletion.count({ where: { userId: user.id, completedAt: { gte: since } } })
  ]);
  const document = React.createElement(ReportDocument, { name: user.name, checkins, practices, missions }) as ReactElement<DocumentProps>;
  const buffer = await renderToBuffer(document);
  return new NextResponse(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="pausa-ai-${week}.pdf"`
    }
  });
}
