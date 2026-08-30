import Link from "next/link";
import { ArrowRight, Clock3, Layers3 } from "lucide-react";
import { ExerciseImage } from "@/components/exercise-image";
import { Badge, Card } from "@/components/ui";
import { getPublishedContentLibrary } from "@/lib/content-library/service";

function durationLabel(durationSeconds: number | null) {
  if (!durationSeconds) return "Duração adaptável";
  const minutes = Math.max(1, Math.round(durationSeconds / 60));
  return `${minutes} min`;
}

export async function ContentLibraryBrowser({ pillar }: { pillar: "BODY" | "MIND" }) {
  const categories = await getPublishedContentLibrary(pillar);
  if (!categories.length) return null;

  return (
    <section className="grid gap-4" aria-labelledby={`${pillar.toLowerCase()}-library-title`}>
      <div>
        <Badge tone="navy">Categoria → Circuito → Movimento</Badge>
        <h2 id={`${pillar.toLowerCase()}-library-title`} className="mt-3 text-2xl font-black text-navy">
          Biblioteca organizada
        </h2>
        <p className="mt-2 text-sm text-text">
          Somente conteúdos aprovados, localizados e com os recursos obrigatórios entram nesta biblioteca.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        {categories.map((category) => (
          <Card key={category.id} className="grid gap-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-wide text-positive">{category.modality}</p>
                <h3 className="mt-1 text-xl font-black text-navy">{category.title}</h3>
                <p className="mt-1 text-sm text-text">{category.description}</p>
              </div>
              <Badge tone="mint">{category.circuits.length} circuito{category.circuits.length === 1 ? "" : "s"}</Badge>
            </div>
            {category.circuits.map((circuit) => (
              <div key={circuit.id} className="grid gap-3 rounded-2xl border border-line bg-ice/60 p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Layers3 className="h-4 w-4 text-positive" />
                  <p className="font-black text-navy">{circuit.title}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500">
                    <Clock3 className="h-3 w-3" /> {durationLabel(circuit.durationSeconds)}
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {circuit.movements.slice(0, 4).map((movement) => (
                    <Link
                      key={movement.id}
                      href={`/app/exercicios/${movement.sourceKey}`}
                      className="group overflow-hidden rounded-2xl border border-line bg-white transition hover:border-positive focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-positive/20"
                    >
                      <ExerciseImage imageKey={movement.thumbnailKey} title={movement.title} className="aspect-[16/9] rounded-none" />
                      <div className="p-3">
                        <p className="font-black text-navy">{movement.title}</p>
                        <p className="mt-1 line-clamp-2 text-xs text-text">{movement.objective}</p>
                        <span className="mt-2 inline-flex items-center gap-1 text-xs font-black text-positive">
                          Abrir movimento <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
                {circuit.movements.length > 4 && (
                  <p className="text-xs font-bold text-slate-500">
                    + {circuit.movements.length - 4} movimentos aprovados neste circuito
                  </p>
                )}
              </div>
            ))}
          </Card>
        ))}
      </div>
    </section>
  );
}
