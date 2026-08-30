import { AppSidebar, Header, MobileNav } from "@/components/navigation";
import { requireUser } from "@/lib/auth";
import { FeatureFlagProvider } from "@/components/feature-flags";
import { PlatformCapabilityProvider } from "@/components/platform-capabilities";
import { getFeatureFlagSnapshot } from "@/lib/feature-flags/server";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const user = await requireUser();
  const flags = await getFeatureFlagSnapshot({ roles: user.roles });
  if (!user.onboardingCompleted) {
    // Allow the onboarding route itself to render through middleware-free server checks in the page.
  }
  return (
    <FeatureFlagProvider flags={flags}>
      <PlatformCapabilityProvider>
        <div className="flex min-h-screen">
          <AppSidebar />
          <main className="min-w-0 flex-1 pb-24 lg:pb-0">
            <Header />
            <div className="mx-auto max-w-6xl px-4 py-6 lg:px-8">{children}</div>
          </main>
          <MobileNav />
        </div>
      </PlatformCapabilityProvider>
    </FeatureFlagProvider>
  );
}
