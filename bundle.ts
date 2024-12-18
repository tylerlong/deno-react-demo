import { build, stop } from "https://deno.land/x/esbuild@v0.20.1/mod.js";
import { denoPlugins } from "@luca/esbuild-deno-loader";

build({
  plugins: [...denoPlugins()],
  entryPoints: ["src/index.tsx"],
  outdir: "public",
  bundle: true,
  platform: "browser",
  format: "esm",
  target: "esnext",
  minify: true,
  sourcemap: true,
  treeShaking: true,
});
await stop();
