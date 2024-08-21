import { defineConfig, mergeConfig } from "vite";
import viteConfig from "@repo/viteconfig";

export default defineConfig(configEnv => {
  return mergeConfig(viteConfig(configEnv), {});
});
