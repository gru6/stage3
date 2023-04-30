/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    css: true,
    coverage: {
      provider: "c8",
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/types/*",
        "src/App.tsx",
        "src/components/Form/Form.test.tsx",
        "src/components/HomePageCards/ShortCard.test.tsx",
        "src/main.tsx",
        "src/hooks.tsx",
        "src/features/*",
        "src/vite-env.d.ts",
      ],
      reporter: ["text", "json", "html"],
      all: true,
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80,
    },
  },
});
