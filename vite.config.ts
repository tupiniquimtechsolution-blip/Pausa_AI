import { defineConfig } from "vite";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";
import path from "node:path";

export default defineConfig({
  plugins: [
    vinext(),
    cloudflare({
      viteEnvironment: {
        name: "rsc",
        childEnvironments: ["ssr"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@/lib/prisma": path.resolve(__dirname, "lib/prisma-worker.ts"),
      // Directory imports select the Node loader; the Worker needs the bundled WASM entry.
      // Keep Node scripts on the default entry. See docs/project/CLOUDFLARE_PRISMA_WASM_2026-10-08.md.
      "@/generated/prisma-pg": path.resolve(__dirname, "generated/prisma-pg/wasm.js"),
      "sharp": path.resolve(__dirname, "empty-stub.js"),
    },
  },
});
