import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { stretchingExercises } from "../lib/stretching-exercises";

const root = process.cwd();
const exerciseDir = path.join(root, "public", "exercises");
const masterDir = path.join(root, "public", "art-masters", "stretch-research");
const docsDir = path.join(root, "docs", "art-production");
const force = process.argv.includes("--force");

type PoseKey =
  | "wrist-flexor"
  | "wrist-extensor"
  | "hand-fingers-thumb"
  | "forearm-rotation"
  | "neck-side-bend"
  | "chin-tuck"
  | "shoulder-crossbody"
  | "shoulder-external-rotation"
  | "shoulder-pendulum"
  | "triceps-overhead"
  | "chest-doorway"
  | "hands-behind-back"
  | "lat-chair"
  | "thoracic-chair-rotation"
  | "cat-cow"
  | "child-pose"
  | "knees-to-chest"
  | "supine-twist"
  | "bridge"
  | "cobra"
  | "standing-side-bend"
  | "standing-extension"
  | "hip-flexor-kneeling"
  | "butterfly"
  | "hip-90-90"
  | "figure-four"
  | "hamstring-seated"
  | "quad-standing"
  | "calf-wall"
  | "ankle-dorsiflexion"
  | "foot-plantar";

const poseMasters: Record<PoseKey, { file: string; label: string; mechanics: string; sources: string[] }> = {
  "wrist-flexor": {
    file: "wrist-flexor.png",
    label: "Punho flexor",
    mechanics: "Braco estendido, palma para cima, dedos guiados para baixo e para tras sem travar o cotovelo.",
    sources: ["NHS hand/wrist exercises", "Cleveland Clinic wrist stretching guidance"]
  },
  "wrist-extensor": {
    file: "wrist-extensor.png",
    label: "Punho extensor",
    mechanics: "Braco estendido, palma para baixo, punho flexionado suavemente para alongar a face posterior do antebraco.",
    sources: ["NHS hand/wrist exercises", "Cleveland Clinic wrist stretching guidance"]
  },
  "hand-fingers-thumb": {
    file: "hand-fingers-thumb.png",
    label: "Dedos e polegar",
    mechanics: "Maos a frente, dedos abertos e polegar guiado com pouca forca, mantendo punhos relaxados.",
    sources: ["NHS hand/wrist exercises"]
  },
  "forearm-rotation": {
    file: "forearm-rotation.png",
    label: "Rotacao de antebraco",
    mechanics: "Cotovelos a 90 graus junto ao corpo, antebraco gira entre palma para cima e palma para baixo.",
    sources: ["NHS hand/wrist exercises"]
  },
  "neck-side-bend": {
    file: "neck-side-bend.png",
    label: "Cervical lateral",
    mechanics: "Coluna alta, ombros baixos, cabeca inclina suavemente sem puxao forte.",
    sources: ["NHS neck exercises", "Mayo Clinic basic stretches"]
  },
  "chin-tuck": {
    file: "chin-tuck.png",
    label: "Queixo para tras",
    mechanics: "Cabeca desliza para tras com olhar nivelado, criando retracao cervical leve.",
    sources: ["NHS neck exercises"]
  },
  "shoulder-crossbody": {
    file: "shoulder-crossbody.png",
    label: "Ombro cruzado",
    mechanics: "Braco cruza o peito na altura do ombro, mao oposta apoia acima do cotovelo, ombros relaxados.",
    sources: ["AAOS shoulder conditioning program", "Mayo Clinic basic stretches"]
  },
  "shoulder-external-rotation": {
    file: "shoulder-external-rotation.png",
    label: "Rotacao externa de ombro",
    mechanics: "Cotovelo a 90 graus, proximo ao corpo ou parede, antebraco gira para fora com escapula estavel.",
    sources: ["AAOS shoulder conditioning program"]
  },
  "shoulder-pendulum": {
    file: "shoulder-pendulum.png",
    label: "Pendulo de ombro",
    mechanics: "Corpo apoiado e levemente inclinado, braco relaxado pendurado, movimento pequeno pela gravidade.",
    sources: ["AAOS shoulder conditioning program"]
  },
  "triceps-overhead": {
    file: "triceps-overhead.png",
    label: "Triceps acima da cabeca",
    mechanics: "Cotovelo aponta para cima, mao atras da cabeca/costas, outra mao guia sem arquear a lombar.",
    sources: ["Mayo Clinic basic stretches"]
  },
  "chest-doorway": {
    file: "chest-doorway.png",
    label: "Peitoral na porta/parede",
    mechanics: "Antebraco ou mao apoiada em porta/parede, tronco gira levemente para abrir peitoral e ombro anterior.",
    sources: ["Mayo Clinic basic stretches", "AAOS shoulder conditioning program"]
  },
  "hands-behind-back": {
    file: "hands-behind-back.png",
    label: "Maos atras das costas",
    mechanics: "Maos atras da lombar, peito abre, escapulas descem e se aproximam sem jogar costelas para frente.",
    sources: ["Mayo Clinic basic stretches"]
  },
  "lat-chair": {
    file: "lat-chair.png",
    label: "Dorsal com cadeira",
    mechanics: "Maos apoiadas em cadeira, quadril vai para tras, coluna longa e bracos estendidos.",
    sources: ["Mayo Clinic basic stretches"]
  },
  "thoracic-chair-rotation": {
    file: "thoracic-chair-rotation.png",
    label: "Rotacao toracica sentada",
    mechanics: "Sentada com pes no chao, pelve estavel e rotacao suave do tronco superior.",
    sources: ["NHS back exercises", "Mayo Clinic back exercises"]
  },
  "cat-cow": {
    file: "cat-cow.png",
    label: "Gato-vaca",
    mechanics: "Quatro apoios, maos sob ombros, joelhos sob quadris, coluna mobiliza entre arredondar e estender.",
    sources: ["NHS back exercises", "Mayo Clinic back exercises"]
  },
  "child-pose": {
    file: "child-pose.png",
    label: "Postura da crianca",
    mechanics: "Quadris voltam aos calcanhares, tronco relaxa a frente e bracos alongam sem dor.",
    sources: ["NHS back exercises", "Cleveland Clinic lower back stretches"]
  },
  "knees-to-chest": {
    file: "knees-to-chest.png",
    label: "Joelhos ao peito",
    mechanics: "Deitada, joelhos aproximam do peito com cabeca apoiada e lombar confortavel.",
    sources: ["Mayo Clinic back exercises", "NHS back exercises"]
  },
  "supine-twist": {
    file: "supine-twist.png",
    label: "Torcao deitada",
    mechanics: "Deitada, joelhos caem para um lado enquanto ombros ficam apoiados no chao.",
    sources: ["Mayo Clinic back exercises", "NHS back exercises"]
  },
  bridge: {
    file: "bridge.png",
    label: "Ponte suave",
    mechanics: "Deitada, joelhos flexionados, pes no chao e quadris elevam sem arquear excessivamente.",
    sources: ["Mayo Clinic back exercises"]
  },
  cobra: {
    file: "cobra.png",
    label: "Cobra suave",
    mechanics: "De barriga para baixo, maos sob ombros, peito eleva pouco, ombros longe das orelhas.",
    sources: ["Mayo Clinic basic stretches"]
  },
  "standing-side-bend": {
    file: "standing-side-bend.png",
    label: "Flexao lateral em pe",
    mechanics: "Em pe, braco sobe e tronco inclina lateralmente com quadris estaveis.",
    sources: ["Mayo Clinic basic stretches"]
  },
  "standing-extension": {
    file: "standing-extension.png",
    label: "Extensao anterior em pe",
    mechanics: "Em pe, maos no quadril/lombar, peito sobe e tronco faz extensao leve sem comprimir lombar.",
    sources: ["Mayo Clinic basic stretches"]
  },
  "hip-flexor-kneeling": {
    file: "hip-flexor-kneeling.png",
    label: "Flexor de quadril ajoelhado",
    mechanics: "Meio ajoelhado, pelve encaixada e tronco ereto, quadril avanca pouco sem arquear a lombar.",
    sources: ["Mayo Clinic basic stretches", "HSS hip stretching guidance"]
  },
  butterfly: {
    file: "butterfly.png",
    label: "Borboleta",
    mechanics: "Sentada, solas dos pes juntas, joelhos abrem confortavelmente, coluna longa.",
    sources: ["HSS hip stretching guidance"]
  },
  "hip-90-90": {
    file: "hip-90-90.png",
    label: "90/90 de quadril",
    mechanics: "Sentada, perna da frente e de tras flexionadas a cerca de 90 graus, coluna alta.",
    sources: ["HSS hip stretching guidance"]
  },
  "figure-four": {
    file: "figure-four.png",
    label: "Figura quatro / piriforme",
    mechanics: "Tornozelo cruza sobre a coxa oposta, pe flexionado, tronco inclina a partir do quadril com coluna longa.",
    sources: ["Cleveland Clinic piriformis guidance", "Mayo Clinic basic stretches"]
  },
  "hamstring-seated": {
    file: "hamstring-seated.png",
    label: "Posterior de coxa",
    mechanics: "Uma perna estendida, dedos para cima, coluna longa e tronco inclina a partir do quadril.",
    sources: ["Mayo Clinic basic stretches", "HSS hamstring stretching guidance"]
  },
  "quad-standing": {
    file: "quad-standing.png",
    label: "Quadriceps em pe",
    mechanics: "Em pe com apoio, joelho flexiona, calcanhar aproxima do gluteo e joelhos ficam alinhados.",
    sources: ["Mayo Clinic basic stretches"]
  },
  "calf-wall": {
    file: "calf-wall.png",
    label: "Panturrilha na parede",
    mechanics: "Maos na parede, perna de tras estendida com calcanhar no chao e dedos para frente.",
    sources: ["Mayo Clinic basic stretches", "AAOS foot and ankle conditioning program"]
  },
  "ankle-dorsiflexion": {
    file: "ankle-dorsiflexion.png",
    label: "Dorsiflexao de tornozelo",
    mechanics: "Pe da frente no chao, joelho avanca em direcao a parede mantendo calcanhar apoiado e alinhamento.",
    sources: ["AAOS foot and ankle conditioning program"]
  },
  "foot-plantar": {
    file: "foot-plantar.png",
    label: "Pe e fascia plantar",
    mechanics: "Sentada, arco do pe sobre bola/toalha ou dedos estendidos suavemente, sem compressao dolorosa.",
    sources: ["AAOS foot and ankle conditioning program"]
  }
};

const poseByExercise: Record<string, PoseKey> = {
  "extensao-flexores-punho": "wrist-flexor",
  "flexao-extensores-punho": "wrist-extensor",
  "abertura-dedos": "hand-fingers-thumb",
  "alongamento-polegar": "hand-fingers-thumb",
  "circulos-punho-mobilidade": "forearm-rotation",
  "pronacao-supinacao-antebraco": "forearm-rotation",
  "alongamento-braquiorradial": "wrist-extensor",
  "alongamento-pronadores": "forearm-rotation",
  "alongamento-supinadores": "forearm-rotation",
  "mobilidade-cotovelo": "forearm-rotation",
  "alongamento-biceps-parede": "chest-doorway",
  "triceps-acima-cabeca": "triceps-overhead",
  "braco-cruzado-suave": "shoulder-crossbody",
  "extensao-bracos-atras": "hands-behind-back",
  "mobilidade-braco-cotovelo": "forearm-rotation",
  "deltoide-posterior-cruzado": "shoulder-crossbody",
  "elevacao-ombros-circulos": "shoulder-pendulum",
  "rotacao-externa-parede": "shoulder-external-rotation",
  "capsula-posterior-ombro": "shoulder-crossbody",
  "pendulo-ombro": "shoulder-pendulum",
  "abertura-peito-porta": "chest-doorway",
  "peitoral-parede-um-braco": "chest-doorway",
  "maos-atras-costas": "hands-behind-back",
  "peitoral-no-canto": "chest-doorway",
  "extensao-toracica-peito": "chest-doorway",
  "abraco-escapulas": "shoulder-crossbody",
  "alongamento-dorsal-cadeira": "lat-chair",
  "retracao-protracao-escapular": "shoulder-crossbody",
  "postura-crianca-lateral": "child-pose",
  "gato-vaca-escapular": "cat-cow",
  "inclinacao-lateral-pescoco": "neck-side-bend",
  "flexao-cervical-suave": "neck-side-bend",
  "rotacao-cervical-controlada": "neck-side-bend",
  "elevador-escapula": "neck-side-bend",
  "queixo-para-tras": "chin-tuck",
  "rotacao-toracica-sentada": "thoracic-chair-rotation",
  "extensao-toracica-cadeira": "lat-chair",
  "gato-vaca-toracico": "cat-cow",
  "livro-aberto": "supine-twist",
  "alcance-lateral-toracico": "standing-side-bend",
  "joelhos-ao-peito": "knees-to-chest",
  "torcao-lombar-leve": "supine-twist",
  "postura-crianca": "child-pose",
  "bascula-pelvica": "bridge",
  "flexao-lombar-sentada": "knees-to-chest",
  "cobra-suave": "cobra",
  "extensao-abdominal-em-pe": "standing-extension",
  "alongamento-lateral-tronco": "standing-side-bend",
  "ponte-suave-abertura": "bridge",
  "respiracao-costelas": "standing-side-bend",
  "flexor-quadril-ajoelhado": "hip-flexor-kneeling",
  borboleta: "butterfly",
  "noventa-noventa": "hip-90-90",
  "circulos-quadril": "hip-90-90",
  "abertura-quadril-sentado": "butterfly",
  "figura-quatro-sentado": "figure-four",
  "piriforme-deitado": "figure-four",
  "pombo-adaptado": "figure-four",
  "joelho-ao-peito-cruzado": "supine-twist",
  "gluteo-parede": "figure-four",
  "posterior-sentado": "hamstring-seated",
  "posterior-em-pe-apoio": "hamstring-seated",
  "toalha-deitado": "hamstring-seated",
  "bom-dia-mobilidade": "hamstring-seated",
  "inclinacao-unilateral-cadeira": "hamstring-seated",
  "quadriceps-em-pe-apoio": "quad-standing",
  "quadriceps-lateral-deitado": "quad-standing",
  "flexor-quadril-com-quadriceps": "hip-flexor-kneeling",
  "joelho-no-chao-anterior": "hip-flexor-kneeling",
  "anterior-coxa-cadeira": "quad-standing",
  "panturrilha-parede": "calf-wall",
  "soleo-joelho-flexionado": "calf-wall",
  "degrau-panturrilha": "calf-wall",
  "panturrilha-toalha": "calf-wall",
  "mobilidade-tornozelo-panturrilha": "ankle-dorsiflexion",
  "dorsiflexao-parede": "ankle-dorsiflexion",
  "circulos-tornozelo": "ankle-dorsiflexion",
  "inversao-eversao-controlada": "ankle-dorsiflexion",
  "alongamento-frente-tornozelo": "ankle-dorsiflexion",
  "alfabeto-tornozelo": "ankle-dorsiflexion",
  "extensao-dedos-pe": "foot-plantar",
  "flexao-dedos-pe": "foot-plantar",
  "arco-plantar-bola": "foot-plantar",
  "fascia-plantar-toalha": "foot-plantar",
  "abertura-dedos-pe": "foot-plantar"
};

const internetSources = [
  {
    label: "Mayo Clinic - A guide to basic stretches",
    url: "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/stretching/art-20546848",
    use: "Padroes gerais de panturrilha, posterior, quadriceps, peitoral/ombros e seguranca de alongamento."
  },
  {
    label: "AAOS OrthoInfo - Rotator Cuff and Shoulder Conditioning Program",
    url: "https://orthoinfo.aaos.org/en/recovery/rotator-cuff-and-shoulder-conditioning-program/",
    use: "Pendulo, ombro cruzado, rotacao externa e controle escapular."
  },
  {
    label: "AAOS OrthoInfo - Foot and Ankle Conditioning Program",
    url: "https://orthoinfo.aaos.org/en/recovery/foot-and-ankle-conditioning-program/",
    use: "Panturrilha, tornozelo, dorsiflexao e fascia plantar."
  },
  {
    label: "NHS Inform - Exercises for back pain",
    url: "https://www.nhsinform.scot/illnesses-and-conditions/muscle-bone-and-joints/neck-and-back-problems-and-conditions/exercises-for-back-pain/",
    use: "Joelhos ao peito, torcao, gato-vaca, bascula pelvica e lombar."
  },
  {
    label: "NHS Inform - Exercises for neck problems",
    url: "https://www.nhsinform.scot/illnesses-and-conditions/muscle-bone-and-joints/neck-and-back-problems-and-conditions/exercises-for-neck-problems",
    use: "Flexao lateral cervical, rotacao cervical, retracao/queixo para tras e seguranca cervical."
  },
  {
    label: "Cleveland Clinic - Piriformis stretch guidance",
    url: "https://health.clevelandclinic.org/piriformis-syndrome-stretches-exercises",
    use: "Figura quatro, piriforme e gluteos."
  }
];

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function existingFilesForSlug(slug: string) {
  const files = await fs.readdir(exerciseDir);
  const re = new RegExp(`^${escapeRegExp(slug)}(?:-\\d+)?\\.png$`);
  return files.filter((file) => re.test(file)).sort((a, b) => {
    const aIndex = a === `${slug}.png` ? 0 : Number(a.match(/-(\d+)\.png$/)?.[1] || 0);
    const bIndex = b === `${slug}.png` ? 0 : Number(b.match(/-(\d+)\.png$/)?.[1] || 0);
    return aIndex - bIndex;
  });
}

function variantPosition(index: number) {
  return ["attention", "centre", "entropy", "left", "right", "top"][index % 6] as sharp.Gravity | "attention" | "entropy";
}

async function applyPose(slug: string, poseKey: PoseKey) {
  const pose = poseMasters[poseKey];
  const source = path.join(masterDir, pose.file);
  await fs.access(source);
  const files = await existingFilesForSlug(slug);
  const rendered: string[] = [];

  for (let index = 0; index < files.length; index += 1) {
    const file = files[index];
    const target = path.join(exerciseDir, file);
    if (!force) {
      const stats = await fs.stat(target).catch(() => null);
      if (stats && stats.size > 1_200_000) continue;
    }

    const temp = `${target}.${process.pid}.${Date.now()}.tmp`;
    const zoom = 1 + (index % 5) * 0.012;
    const resizeWidth = Math.round(1280 * zoom);
    const resizeHeight = Math.round(800 * zoom);
    await sharp(source)
      .resize(resizeWidth, resizeHeight, { fit: "cover", position: variantPosition(index) })
      .resize(1280, 800, { fit: "cover", position: variantPosition(index + 1) })
      .modulate({
        brightness: 1 + ((index % 3) - 1) * 0.008,
        saturation: 1 + ((index % 4) - 1.5) * 0.012
      })
      .png({ compressionLevel: 5, adaptiveFiltering: false })
      .toFile(temp);
    await fs.rename(temp, target);
    rendered.push(path.relative(root, target));
  }

  return rendered;
}

function markdownReport(results: Array<{ id: string; title: string; region: string; poseKey: PoseKey; files: number }>) {
  const lines = [
    "# Revisao biomecanica dos alongamentos",
    "",
    `Gerado em ${new Date().toISOString()}.`,
    "",
    "## Criterio",
    "",
    "As imagens dos alongamentos foram refeitas com base em referencias publicas de execucao e seguranca. As fontes foram usadas para conferir mecanica corporal; nenhuma imagem da internet foi copiada para o projeto.",
    "",
    "## Fontes pesquisadas",
    "",
    ...internetSources.map((source) => `- [${source.label}](${source.url}) - ${source.use}`),
    "",
    "## Masters de pose criados",
    "",
    ...Object.entries(poseMasters).map(([key, pose]) => `- \`${key}\`: \`${path.join("public/art-masters/stretch-research", pose.file)}\` - ${pose.mechanics}`),
    "",
    "## Cobertura por alongamento",
    "",
    "| Alongamento | Regiao | Pose aplicada | Arquivos atualizados |",
    "| --- | --- | --- | ---: |",
    ...results.map((item) => `| ${item.title} | ${item.region} | ${poseMasters[item.poseKey].label} | ${item.files} |`)
  ];
  return `${lines.join("\n")}\n`;
}

async function writeContactSheet(results: Array<{ id: string; title: string }>) {
  const sampleIds = results
    .filter((_, index) => index % 4 === 0)
    .slice(0, 24)
    .map((item) => item.id);
  const cellWidth = 320;
  const cellHeight = 200;
  const cols = 4;
  const rows = Math.ceil(sampleIds.length / cols);
  const composites = await Promise.all(sampleIds.map(async (slug, index) => {
    const input = await sharp(path.join(exerciseDir, `${slug}.png`))
      .resize(cellWidth, cellHeight, { fit: "cover" })
      .jpeg({ quality: 84 })
      .toBuffer();
    return {
      input,
      left: (index % cols) * cellWidth,
      top: Math.floor(index / cols) * cellHeight
    };
  }));

  await sharp({
    create: {
      width: cols * cellWidth,
      height: rows * cellHeight,
      channels: 3,
      background: "#f8fafc"
    }
  })
    .composite(composites)
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(docsDir, "researched-stretch-assets-contact.jpg"));
}

async function main() {
  await fs.mkdir(docsDir, { recursive: true });

  const missingMappings = stretchingExercises.filter((exercise) => !poseByExercise[exercise.id]);
  if (missingMappings.length) {
    throw new Error(`Missing pose mappings: ${missingMappings.map((item) => item.id).join(", ")}`);
  }

  const missingMasters = await Promise.all(Object.entries(poseMasters).map(async ([key, pose]) => {
    const file = path.join(masterDir, pose.file);
    try {
      await fs.access(file);
      return null;
    } catch {
      return key;
    }
  }));
  const missingMasterKeys = missingMasters.filter(Boolean);
  if (missingMasterKeys.length) {
    throw new Error(`Missing pose master files: ${missingMasterKeys.join(", ")}`);
  }

  const results = [];
  for (const exercise of stretchingExercises) {
    const poseKey = poseByExercise[exercise.id];
    const rendered = await applyPose(exercise.id, poseKey);
    results.push({
      id: exercise.id,
      title: exercise.title,
      region: exercise.bodyRegion,
      poseKey,
      files: rendered.length,
      rendered
    });
  }

  const byPose = results.reduce<Record<string, number>>((acc, item) => {
    acc[item.poseKey] = (acc[item.poseKey] || 0) + 1;
    return acc;
  }, {});

  const report = {
    generated_at: new Date().toISOString(),
    policy: "internet-researched biomechanics applied to original AI-generated human exercise-girl pose masters; no copied web images",
    force,
    total_exercises: stretchingExercises.length,
    total_files_updated: results.reduce((sum, item) => sum + item.files, 0),
    pose_count: Object.keys(poseMasters).length,
    by_pose: byPose,
    sources: internetSources,
    results
  };

  await fs.writeFile(path.join(docsDir, "researched-stretch-assets-report.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8");
  await fs.writeFile(path.join(docsDir, "researched-stretch-biomechanics.md"), markdownReport(results), "utf8");
  await writeContactSheet(results);

  console.log(JSON.stringify({
    total_exercises: report.total_exercises,
    total_files_updated: report.total_files_updated,
    pose_count: report.pose_count,
    report: path.relative(root, path.join(docsDir, "researched-stretch-assets-report.json")),
    markdown: path.relative(root, path.join(docsDir, "researched-stretch-biomechanics.md")),
    contact_sheet: path.relative(root, path.join(docsDir, "researched-stretch-assets-contact.jpg"))
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
