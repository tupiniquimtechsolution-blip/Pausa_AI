type AlertMatcher = {
  label: string;
  terms: string[];
};

const physicalAlertMatchers: AlertMatcher[] = [
  { label: "dor forte", terms: ["dor forte", "dor intensa", "muita dor", "dor muito forte"] },
  { label: "dor aguda", terms: ["dor aguda", "pontada forte", "dor em pontada"] },
  { label: "formigamento", terms: ["formigamento", "formigando", "dormencia", "dormente"] },
  { label: "perda de forca", terms: ["perda de forca", "perdi forca", "fraqueza no braco", "fraqueza na perna", "sem forca"] },
  { label: "dor no peito", terms: ["dor no peito", "aperto no peito", "pressao no peito"] },
  { label: "falta de ar", terms: ["falta de ar", "sem ar", "dificuldade para respirar", "respirar esta dificil"] },
  { label: "febre", terms: ["febre", "febril", "temperatura alta"] },
  { label: "trauma recente", terms: ["trauma recente", "queda recente", "cai ontem", "cai hoje", "bati as costas", "bati o joelho", "apos queda"] },
  { label: "pos-operatorio", terms: ["pos-operatorio", "pos operatorio", "cirurgia recente", "operei recentemente", "recem operado", "recem operada"] },
  { label: "gravidez de risco", terms: ["gravidez de risco", "gestacao de risco", "gravida de risco", "gestante de risco"] },
  { label: "tontura intensa", terms: ["tontura intensa", "muita tontura", "tontura forte", "vertigem intensa"] },
  { label: "dor irradiada intensa", terms: ["dor irradiada intensa", "dor irradiando forte", "dor descendo pela perna", "dor descendo para o braco"] },
  { label: "inchaco importante", terms: ["inchaco importante", "muito inchado", "muito inchada", "inchaco grande"] },
  { label: "sintomas neurologicos", terms: ["sintomas neurologicos", "confusao mental", "visao turva", "fala enrolada", "perdi sensibilidade"] }
];

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function detectPhysicalAlertTerms(text?: string | null, tags: string[] = []) {
  const haystack = normalize([text || "", ...tags].join(" "));
  if (!haystack) return [];

  return physicalAlertMatchers
    .filter((matcher) => matcher.terms.some((term) => haystack.includes(normalize(term))))
    .map((matcher) => matcher.label);
}

export function physicalAlertMessage(terms: string[]) {
  const termText = terms.length ? ` Sinais mencionados: ${terms.join(", ")}.` : "";
  return `Seu check-in trouxe um possivel sinal de alerta fisico.${termText} Evite usar uma posicao guiada como solucao para esse quadro. Se o sintoma for intenso, recente, estiver piorando ou vier com falta de ar, dor no peito, febre, formigamento ou perda de forca, procure avaliacao profissional ou atendimento local.`;
}
