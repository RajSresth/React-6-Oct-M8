import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
});


/**
 * It provides
 * 1. React Fast Refresh
 * 2. Hot Module Replacement
 * 3. Automatic JSX runtime
 */