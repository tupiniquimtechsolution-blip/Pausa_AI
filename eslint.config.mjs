import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      ".next*/**",
      "node_modules/**",
      "mobile/node_modules/**",
      "mobile/.expo/**",
      "mobile/.tmp/**",
      "mobile/android/.gradle/**",
      "mobile/android/.kotlin/**",
      "mobile/android/build/**",
      "mobile/android/app/.cxx/**",
      "mobile/android/app/build/**",
      "public/**/*.png",
      "public/**/*.jpg",
      "public/**/*.jpeg",
      "public/**/*.mp4",
      "public/**/*.apk",
      "docs/**/*.pdf",
      "*.log",
      "**/*.log",
      "next-env.d.ts"
    ]
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      "react-hooks/purity": "warn",
      "react-hooks/set-state-in-effect": "warn",
      "react/no-unescaped-entities": "warn"
    }
  },
  {
    files: ["mobile/plugins/**/*.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off"
    }
  },
  {
    files: ["scripts/export-complete-app-report.tsx"],
    rules: {
      "jsx-a11y/alt-text": "off"
    }
  }
];

export default eslintConfig;
