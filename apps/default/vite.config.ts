import { resolve } from "path";
import { defineConfig, mergeConfig } from "vite";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import viteConfig from "@repo/viteconfig";

export default defineConfig(configEnv => {
  return mergeConfig(viteConfig(configEnv), {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]"
      })
    ]
  });
});
