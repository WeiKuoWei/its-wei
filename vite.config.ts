import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { copyFileSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/its-wei/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    tailwindcss(),
    {
      // GH Pages SPA fallback: serve the app for unknown routes (themed 404 via router catch-all)
      name: "copy-index-to-404",
      closeBundle() {
        copyFileSync(
          path.resolve(__dirname, "dist/index.html"),
          path.resolve(__dirname, "dist/404.html"),
        );
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
