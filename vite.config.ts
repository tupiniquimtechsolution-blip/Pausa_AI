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
      // Directory imports select the Node loader; the Worker needs the bundled WASM entry.
      "@/generated/prisma-pg": path.resolve(__dirname, "generated/prisma-pg/wasm.js"),
      "sharp": path.resolve(__dirname, "empty-stub.js"),
    },
  },
});
