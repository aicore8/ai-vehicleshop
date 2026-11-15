import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  build: {
    emptyOutDir: true,
    outDir: "../dist/web",
    chunkSizeWarningLimit: 1000,
  },
  server: {
    // bun keeps packages in the workspace root store (node_modules/.bun): the preview must serve fonts from there.
    fs: { allow: ["..", "../../../../node_modules"] },
  },
});
