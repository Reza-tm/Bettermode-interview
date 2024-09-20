/// <reference types="vitest/config" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    setupFiles: "./setup-tests.ts",
    exclude: ["*.stories.*", "node_modules", "dist"],
  },
  ssr: { noExternal: ["@apollo/client"] },
});
