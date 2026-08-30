import type { Metadata } from "next";
import "./globals.css";
import { PreferencesProvider } from "@/components/preferences";

export const metadata: Metadata = {
  title: "Pausa AI",
  description: "Pequenas pausas para uma mente menos sobrecarregada."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var p=localStorage.getItem("pausa_theme")||"system";var d=matchMedia("(prefers-color-scheme: dark)").matches;var t=p==="system"?(d?"dark":"light"):p;var dark=["dark","black-green","black-yellow"].indexOf(t)>=0;document.documentElement.dataset.theme=t;document.documentElement.dataset.themePreference=p;document.documentElement.classList.toggle("dark",dark);var l=localStorage.getItem("pausa_language");if(l==="pt-BR")document.documentElement.lang=l;}catch(e){}})();`
          }}
        />
      </head>
      <body><PreferencesProvider>{children}</PreferencesProvider></body>
    </html>
  );
}
