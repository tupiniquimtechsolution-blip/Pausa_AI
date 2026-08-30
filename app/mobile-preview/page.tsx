import { Smartphone } from "lucide-react";
import { MobilePreviewControls } from "@/components/mobile-preview";

const routes = [
  { label: "Landing", path: "/" },
  { label: "Cadastro", path: "/cadastro" },
  { label: "Login", path: "/login" },
  { label: "Gratuito", path: "/precos" },
  { label: "Empresas", path: "/empresas" },
  { label: "App", path: "/app" },
  { label: "Check-in", path: "/app/checkin" },
  { label: "Corpo", path: "/app/corpo" },
  { label: "Mente", path: "/app/mente" },
  { label: "Histórico", path: "/app/perfil/historico" },
  { label: "Admin", path: "/admin" }
];

export default function MobilePreviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-6 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row lg:items-start lg:justify-center">
        <aside className="lg:sticky lg:top-6 lg:w-80">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mint text-navy">
              <Smartphone className="h-5 w-5" />
            </span>
            <div>
              <h1 className="text-2xl font-black">Teste Mobile</h1>
              <p className="text-sm text-slate-300">Viewport 390 x 844</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-300">
            Use esta página para validar responsividade, navegação e formulários em formato de celular. O frame carrega rotas reais do app local.
          </p>
          <MobilePreviewControls routes={routes} />
        </aside>

        <section className="mx-auto">
          <div className="rounded-[2.2rem] border border-slate-700 bg-slate-900 p-3 shadow-2xl">
            <div className="mx-auto mb-3 h-1.5 w-24 rounded-full bg-slate-700" />
            <div className="h-[844px] w-[390px] overflow-hidden rounded-[1.7rem] bg-white">
              <iframe
                id="mobile-preview-frame"
                title="Pausa AI mobile preview"
                src="/"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
