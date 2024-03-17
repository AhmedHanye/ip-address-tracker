import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import csp from "vite-plugin-csp";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    csp({
      // Specify the CSP directives here
      directives: {
        "object-src": `'none'`,
        "base-uri": `'self'`,
      },
    }),
  ],
  base: "/ip-address-tracker/",
});
