import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "rgb(var(--color-navy) / <alpha-value>)",
        mint: "rgb(var(--color-mint) / <alpha-value>)",
        lavender: "rgb(var(--color-lavender) / <alpha-value>)",
        ice: "rgb(var(--color-ice) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        positive: "rgb(var(--color-positive) / <alpha-value>)",
        amber: "rgb(var(--color-amber) / <alpha-value>)",
        focus: "rgb(var(--ds-focus) / <alpha-value>)",
        app: {
          background: "rgb(var(--ds-background) / <alpha-value>)",
          surface: "rgb(var(--ds-surface) / <alpha-value>)",
          card: "rgb(var(--ds-card) / <alpha-value>)",
          text: "rgb(var(--ds-text) / <alpha-value>)",
          muted: "rgb(var(--ds-muted) / <alpha-value>)",
          border: "rgb(var(--ds-border) / <alpha-value>)",
          accent: "rgb(var(--ds-accent) / <alpha-value>)",
          "accent-contrast": "rgb(var(--ds-accent-contrast) / <alpha-value>)",
          selection: "rgb(var(--ds-selection) / <alpha-value>)",
          success: "rgb(var(--ds-success) / <alpha-value>)",
          warning: "rgb(var(--ds-warning) / <alpha-value>)",
          error: "rgb(var(--ds-error) / <alpha-value>)"
        }
      },
      boxShadow: {
        soft: "var(--ds-shadow-soft)"
      }
    }
  },
  plugins: []
};

export default config;
