import { AppSidebar, Header } from "@/components/navigation";
import { requireAdmin } from "@/lib/auth";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="min-w-0 flex-1">
        <Header />
        <div className="mx-auto max-w-6xl px-4 py-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
