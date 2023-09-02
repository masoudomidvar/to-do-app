import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@app": resolve(__dirname, "./src/app"),
      "@features": resolve(__dirname, "./src/features/"),
      "@components": resolve(__dirname, "./src/components/"),
      "@utils": resolve(__dirname, "./src/utils/"),
      "@assets": resolve(__dirname, "./src/assets/"),
    },
  },
  server: {
    open: true,
    port: 3000,
  },
});
