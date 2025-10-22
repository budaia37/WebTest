import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./" // dôležité, ak chceš nasadiť na GitHub Pages alebo vlastnú doménu
});