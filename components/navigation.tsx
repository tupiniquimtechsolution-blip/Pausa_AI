import Link from "next/link";
import { Brain } from "lucide-react";
import { Button } from "@/components/ui";
import { getSessionUser } from "@/lib/auth";
import { ThemeToggle } from "@/components/preferences";
import { NotificationCenter } from "@/components/notification-center";
import { PillarMobileNavigation, PillarSidebar } from "@/components/pillar-navigation";
import { prisma } from "@/lib/prisma";

export function PublicHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-app-border bg-app-background/85 text-app-text backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-black text-app-text">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-mint"><Brain className="h-5 w-5" /></span>
          Pausa AI
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold text-app-muted md:flex">
          <Link href="/login">Entrar</Link>
          <Button href="/cadastro">Comecar gratis</Button>
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button href="/cadastro">Comecar</Button>
        </div>
      </div>
    </header>
  );
}

export function AppSidebar() {
  return <PillarSidebar />;
}

export function MobileNav() {
  return <PillarMobileNavigation />;
}

export async function Header() {
  const user = await getSessionUser();
  const profile = user ? await prisma.profile.findUnique({ where: { userId: user.id } }) : null;
  return (
    <header className="flex items-center justify-between border-b border-app-border bg-app-surface/85 px-4 py-4 text-app-text backdrop-blur lg:px-8">
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-app-muted">Pausa AI</p>
        <p className="font-bold text-app-text">Pequenas pausas para uma mente menos sobrecarregada.</p>
      </div>
      <div className="flex items-center gap-3 text-right text-sm">
        <NotificationCenter enabled={Boolean(profile?.pushNotificationsEnabled)} />
        <div>
          <p className="font-bold text-app-text">{user?.name}</p>
          <p className="text-app-muted">Nivel {user?.level || 1}</p>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
