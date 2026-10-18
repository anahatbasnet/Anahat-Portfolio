import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" makes the build work on Vercel, Netlify and GitHub Pages (including repo sub-paths).
export default defineConfig({
  plugins: [react()],
  base: "./",
});
