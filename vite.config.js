import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import babel from "@rolldown/plugin-babel";
import { cwd } from "node:process";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, cwd(), "");

  return {
    plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
    server: { port: env.VITE_PORT ? Number(env.VITE_PORT) : 5173 },
    test: {
      environment: "jsdom",
      setupFiles: "./src/tests/setup.js",
    },
  };
});
