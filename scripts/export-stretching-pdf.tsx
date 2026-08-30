import React from "react";
import fs from "node:fs/promises";
import path from "node:path";
import { Document, Page, StyleSheet, Text, View, renderToFile } from "@react-pdf/renderer";
import {
  stretchingExercises,
  stretchingPrinciples,
  stretchingRegions,
  stretchingTypeCards,
  type StretchExercise,
  type StretchLevel,
  type StretchType
} from "../lib/stretching-exercises";

const root = process.cwd();
const outputDir = path.join(root, "docs");
const outputPath = path.join(outputDir, "alongamentos-detalhados-pausa-ai.pdf");

const typeLabels: Record<StretchType, string> = {
  static: "Estático",
  dynamic: "Dinâmico",
  active: "Ativo",
  passive: "Passivo",
  ballistic: "Balístico",
  pnf: "PNF",
  mobility: "Mobilidade"
};

const levelLabels: Record<StretchLevel, string> = {
  beginner: "Iniciante",
  intermediate: "Intermediário",
  advanced: "Avançado"
};

const accentOutput: Record<string, string> = {
  acao: "ação",
  abducao: "abdução",
  alcancado: "alcançado",
  amplitude: "amplitude",
  anatomica: "anatômica",
  anatomico: "anatômico",
  avancado: "avançado",
  aplicacao: "aplicação",
  articulacao: "articulação",
  articulacoes: "articulações",
  atras: "atrás",
  ate: "até",
  balistico: "balístico",
  biceps: "bíceps",
  cabeca: "cabeça",
  circulos: "círculos",
  condicao: "condição",
  confortavel: "confortável",
  contracao: "contração",
  coracao: "coração",
  criacao: "criação",
  crianca: "criança",
  dinamico: "dinâmico",
  dorsiflexao: "dorsiflexão",
  elevacao: "elevação",
  execucao: "execução",
  escapula: "escápula",
  escapulas: "escápulas",
  estatico: "estático",
  extraida: "extraída",
  extensao: "extensão",
  facil: "fácil",
  flexao: "flexão",
  funcao: "função",
  forca: "força",
  gluteo: "glúteo",
  gluteos: "glúteos",
  indice: "índice",
  indicacao: "indicação",
  indicacoes: "indicações",
  inclinacao: "inclinação",
  intermediario: "intermediário",
  inversao: "inversão",
  maos: "mãos",
  mao: "mão",
  medico: "médico",
  mobilizacao: "mobilização",
  musculo: "músculo",
  musculos: "músculos",
  orientacao: "orientação",
  pe: "pé",
  pes: "pés",
  pelvica: "pélvica",
  pescoco: "pescoço",
  pos: "pós",
  posicao: "posição",
  preparacao: "preparação",
  principio: "princípio",
  pronacao: "pronação",
  proprio: "próprio",
  quadriceps: "quadríceps",
  regiao: "região",
  regioes: "regiões",
  revisao: "revisão",
  respiracao: "respiração",
  retracao: "retração",
  rotacao: "rotação",
  sao: "são",
  sensacao: "sensação",
  seguranca: "segurança",
  serie: "série",
  series: "séries",
  sessao: "sessão",
  toracica: "torácica",
  toracico: "torácico",
  torax: "tórax",
  tensao: "tensão",
  tunel: "túnel",
  variacao: "variação",
  variacoes: "variações",
  versao: "versão"
};

function applyCase(source: string, replacement: string) {
  if (source.toUpperCase() === source) return replacement.toUpperCase();
  if (source[0] === source[0].toUpperCase()) return replacement[0].toUpperCase() + replacement.slice(1);
  return replacement;
}

function pt(value: string) {
  return value.replace(/\b[a-zA-Z]+\b/g, (word) => {
    const lower = word.toLowerCase();
    const replacement = accentOutput[lower];
    if (!replacement) return word;
    return applyCase(word, replacement);
  });
}

function joinList(items: string[]) {
  return items.map(pt).join(", ");
}

function groupByRegion(exercises: StretchExercise[]) {
  return stretchingRegions.map((region) => ({
    ...region,
    exercises: exercises.filter((exercise) => exercise.bodyRegion === region.label)
  }));
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 34,
    paddingBottom: 42,
    paddingHorizontal: 36,
    fontFamily: "Helvetica",
    color: "#172033",
    backgroundColor: "#fbfcfa"
  },
  coverPage: {
    paddingTop: 50,
    paddingBottom: 42,
    paddingHorizontal: 42,
    fontFamily: "Helvetica",
    color: "#172033",
    backgroundColor: "#f4f8f1"
  },
  coverKicker: {
    color: "#476d62",
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: 1.1,
    marginBottom: 14
  },
  coverTitle: {
    fontSize: 31,
    lineHeight: 1.12,
    fontFamily: "Helvetica-Bold",
    marginBottom: 12
  },
  coverSubtitle: {
    fontSize: 12.5,
    lineHeight: 1.45,
    color: "#435069",
    marginBottom: 18,
    maxWidth: 470
  },
  coverBand: {
    backgroundColor: "#ffffff",
    borderColor: "#dce8df",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    marginTop: 8,
    marginBottom: 18
  },
  statRow: {
    flexDirection: "row",
    marginBottom: 10
  },
  statBox: {
    width: "33.3%",
    paddingRight: 12
  },
  statNumber: {
    color: "#1f5f52",
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    marginBottom: 2
  },
  statLabel: {
    color: "#586179",
    fontSize: 8.5,
    lineHeight: 1.3,
    textTransform: "uppercase",
    letterSpacing: 0.4
  },
  principleTitle: {
    fontSize: 11,
    color: "#25324a",
    fontFamily: "Helvetica-Bold",
    marginTop: 8,
    marginBottom: 4
  },
  principleText: {
    fontSize: 9.6,
    lineHeight: 1.45,
    color: "#46516a"
  },
  typeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10
  },
  typeCard: {
    width: "33.3%",
    paddingRight: 8,
    marginBottom: 8
  },
  typeTitle: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: "#25324a",
    marginBottom: 2
  },
  typeText: {
    fontSize: 8,
    lineHeight: 1.3,
    color: "#5b667d"
  },
  regionIndex: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 6
  },
  regionPill: {
    width: "33.3%",
    paddingRight: 8,
    marginBottom: 5
  },
  regionPillText: {
    fontSize: 8.4,
    color: "#3a465d"
  },
  header: {
    position: "absolute",
    top: 18,
    left: 36,
    right: 36,
    color: "#718096",
    fontSize: 7.5,
    textTransform: "uppercase",
    letterSpacing: 0.8
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 36,
    right: 36,
    color: "#8a95a8",
    fontSize: 8,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  regionBlock: {
    marginBottom: 16
  },
  regionTitle: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: "#183b36",
    marginBottom: 4
  },
  regionMeta: {
    color: "#69758c",
    fontSize: 8.8,
    marginBottom: 8
  },
  exerciseCard: {
    backgroundColor: "#ffffff",
    borderColor: "#e1e8e2",
    borderWidth: 1,
    borderRadius: 7,
    padding: 11,
    marginBottom: 9
  },
  exerciseTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4
  },
  exerciseTitle: {
    width: "68%",
    color: "#172033",
    fontSize: 12.5,
    fontFamily: "Helvetica-Bold",
    lineHeight: 1.25
  },
  badgeWrap: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "flex-end",
    flexWrap: "wrap"
  },
  badge: {
    backgroundColor: "#e7f0eb",
    color: "#24594d",
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 3,
    fontSize: 7.3,
    marginLeft: 3,
    marginBottom: 3
  },
  objective: {
    fontSize: 9.4,
    lineHeight: 1.35,
    color: "#33425b",
    marginBottom: 6
  },
  metaGrid: {
    flexDirection: "row",
    borderTopColor: "#eef2ef",
    borderTopWidth: 1,
    paddingTop: 6,
    marginBottom: 6
  },
  metaCol: {
    width: "33.3%",
    paddingRight: 8
  },
  metaLabel: {
    fontSize: 7,
    textTransform: "uppercase",
    letterSpacing: 0.4,
    color: "#7b8799",
    marginBottom: 2
  },
  metaValue: {
    fontSize: 8.3,
    color: "#27364e",
    lineHeight: 1.25
  },
  section: {
    marginTop: 5
  },
  sectionTitle: {
    fontSize: 8.2,
    fontFamily: "Helvetica-Bold",
    color: "#1e4f45",
    marginBottom: 2
  },
  paragraph: {
    fontSize: 8.6,
    lineHeight: 1.38,
    color: "#3e4a61"
  },
  step: {
    flexDirection: "row",
    marginBottom: 2
  },
  stepNumber: {
    width: 14,
    fontSize: 8.3,
    color: "#708096"
  },
  stepText: {
    flex: 1,
    fontSize: 8.6,
    lineHeight: 1.35,
    color: "#3e4a61"
  },
  twoCols: {
    flexDirection: "row",
    marginTop: 5
  },
  col: {
    width: "50%",
    paddingRight: 9
  },
  noteBox: {
    backgroundColor: "#f7faf7",
    borderColor: "#dce8df",
    borderWidth: 1,
    borderRadius: 6,
    padding: 8,
    marginTop: 6
  },
  warningText: {
    color: "#703f35",
    fontSize: 8.4,
    lineHeight: 1.32
  }
});

function Footer() {
  return (
    <View style={styles.footer} fixed>
      <Text>Pausa AI - guia interno de alongamentos</Text>
      <Text render={({ pageNumber, totalPages }) => `Página ${pageNumber} de ${totalPages}`} />
    </View>
  );
}

function Header() {
  return <Text style={styles.header} fixed>Alongamentos detalhados - execução, função e segurança</Text>;
}

function SectionText({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.paragraph}>{children}</Text>
    </View>
  );
}

function ExerciseCard({ exercise }: { exercise: StretchExercise }) {
  return (
    <View style={styles.exerciseCard}>
      <View style={styles.exerciseTop}>
        <Text style={styles.exerciseTitle}>{pt(exercise.title)}</Text>
        <View style={styles.badgeWrap}>
          <Text style={styles.badge}>{pt(typeLabels[exercise.type])}</Text>
          <Text style={styles.badge}>{pt(levelLabels[exercise.level])}</Text>
        </View>
      </View>

      <Text style={styles.objective}>
        <Text style={{ fontFamily: "Helvetica-Bold" }}>Função: </Text>
        {pt(exercise.objective)}
      </Text>

      <View style={styles.metaGrid}>
        <View style={styles.metaCol}>
          <Text style={styles.metaLabel}>Região</Text>
          <Text style={styles.metaValue}>{pt(exercise.bodyRegion)}</Text>
        </View>
        <View style={styles.metaCol}>
          <Text style={styles.metaLabel}>Tempo</Text>
          <Text style={styles.metaValue}>{pt(exercise.duration)}</Text>
        </View>
        <View style={styles.metaCol}>
          <Text style={styles.metaLabel}>Séries</Text>
          <Text style={styles.metaValue}>{pt(exercise.sets)}</Text>
        </View>
      </View>

      <View style={styles.metaGrid}>
        <View style={styles.metaCol}>
          <Text style={styles.metaLabel}>Músculos principais</Text>
          <Text style={styles.metaValue}>{joinList(exercise.primaryMuscles)}</Text>
        </View>
        <View style={styles.metaCol}>
          <Text style={styles.metaLabel}>Articulações</Text>
          <Text style={styles.metaValue}>{joinList(exercise.joints)}</Text>
        </View>
        <View style={styles.metaCol}>
          <Text style={styles.metaLabel}>Indicado para</Text>
          <Text style={styles.metaValue}>{joinList(exercise.indicatedFor)}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Como executar</Text>
        {exercise.instructions.map((instruction, index) => (
          <View key={`${exercise.id}-step-${index}`} style={styles.step}>
            <Text style={styles.stepNumber}>{index + 1}.</Text>
            <Text style={styles.stepText}>{pt(instruction)}</Text>
          </View>
        ))}
      </View>

      <View style={styles.twoCols}>
        <View style={styles.col}>
          <SectionText title="Respiração">{pt(exercise.breathing)}</SectionText>
          <SectionText title="Sensação correta">{pt(exercise.correctFeeling)}</SectionText>
        </View>
        <View style={styles.col}>
          <SectionText title="Evite se houver">{joinList(exercise.avoidIf)}</SectionText>
          <SectionText title="Erros comuns">{joinList(exercise.commonMistakes)}</SectionText>
        </View>
      </View>

      <View style={styles.twoCols}>
        <View style={styles.col}>
          <SectionText title="Versão fácil">{pt(exercise.easyVariation)}</SectionText>
        </View>
        <View style={styles.col}>
          <SectionText title="Progressao">{pt(exercise.advancedVariation)}</SectionText>
        </View>
      </View>

      <View style={styles.noteBox}>
        <Text style={styles.paragraph}>
          <Text style={{ fontFamily: "Helvetica-Bold" }}>Melhor momento: </Text>
          {pt(exercise.bestMoment)}
        </Text>
        <Text style={styles.paragraph}>
          <Text style={{ fontFamily: "Helvetica-Bold" }}>Nota anatômica: </Text>
          {pt(exercise.anatomicalNote)}
        </Text>
        <Text style={styles.warningText}>
          <Text style={{ fontFamily: "Helvetica-Bold" }}>Sinais de alerta: </Text>
          {joinList(exercise.warningSigns)}
        </Text>
      </View>
    </View>
  );
}

function CoverPage() {
  return (
    <Page size="A4" style={styles.coverPage}>
      <Text style={styles.coverKicker}>Pausa AI - corpo e movimento</Text>
      <Text style={styles.coverTitle}>Guia detalhado de alongamentos</Text>
      <Text style={styles.coverSubtitle}>
        Lista extraída da base interna do app, com função, modo de execução, tempo, indicações,
        cuidados e variações de cada alongamento.
      </Text>

      <View style={styles.coverBand}>
        <View style={styles.statRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{stretchingExercises.length}</Text>
            <Text style={styles.statLabel}>Alongamentos catalogados</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{stretchingRegions.length}</Text>
            <Text style={styles.statLabel}>Regiões corporais</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{stretchingTypeCards.length}</Text>
            <Text style={styles.statLabel}>Tipos explicados</Text>
          </View>
        </View>
        <Text style={styles.principleTitle}>Como usar este guia</Text>
        <Text style={styles.principleText}>
          Use a lista para consulta rápida, roteiros de vídeo, revisão de conteúdo e criação de fichas no app.
          Em todos os casos, priorize tensão confortável e retorno calmo da postura.
        </Text>
        <Text style={styles.principleTitle}>Princípio de segurança</Text>
        <Text style={styles.principleText}>{pt(stretchingPrinciples.safety)}</Text>
      </View>

      <Text style={styles.principleTitle}>Tipos de alongamento</Text>
      <View style={styles.typeGrid}>
        {stretchingTypeCards.map((card) => (
          <View key={card.type} style={styles.typeCard}>
            <Text style={styles.typeTitle}>{pt(card.title)}</Text>
            <Text style={styles.typeText}>{pt(card.description)}</Text>
            <Text style={styles.typeText}>{pt(card.bestFor)}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.principleTitle}>Índice por região</Text>
      <View style={styles.regionIndex}>
        {stretchingRegions.map((region) => (
          <View key={region.id} style={styles.regionPill}>
            <Text style={styles.regionPillText}>
              {pt(region.label)} - {region.count} itens
            </Text>
          </View>
        ))}
      </View>
      <Footer />
    </Page>
  );
}

function StretchingPdf() {
  const regions = groupByRegion(stretchingExercises);

  return (
    <Document title="Pausa AI - Guia detalhado de alongamentos" author="Pausa AI">
      <CoverPage />
      <Page size="A4" style={styles.page}>
        <Header />
        {regions.map((region) => (
          <View key={region.id} style={styles.regionBlock}>
            <Text style={styles.regionTitle}>{pt(region.label)}</Text>
            <Text style={styles.regionMeta}>
              {region.exercises.length} alongamentos - sinais atendidos: {joinList(region.tags)}
            </Text>
            {region.exercises.map((exercise) => (
              <ExerciseCard key={exercise.id} exercise={exercise} />
            ))}
          </View>
        ))}
        <Footer />
      </Page>
    </Document>
  );
}

async function main() {
  await fs.mkdir(outputDir, { recursive: true });
  await renderToFile(<StretchingPdf />, outputPath);

  const stat = await fs.stat(outputPath);
  console.log(JSON.stringify({
    outputPath,
    exercises: stretchingExercises.length,
    regions: stretchingRegions.length,
    bytes: stat.size
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
