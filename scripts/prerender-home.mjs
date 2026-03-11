import { rm, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "vite";

const rootDir = process.cwd();
const distDir = path.resolve(rootDir, "dist");
const prerenderDir = path.resolve(rootDir, ".prerender");
const clientHtmlPath = path.resolve(distDir, "index.html");
const serverEntryPath = path.resolve(rootDir, "src/prerender.tsx");
const serverBundlePath = path.resolve(prerenderDir, "entry.js");

const cleanup = async () => {
  await rm(prerenderDir, { recursive: true, force: true });
};

try {
  await cleanup();
  await mkdir(prerenderDir, { recursive: true });

  await build({
    appType: "custom",
    build: {
      emptyOutDir: true,
      outDir: prerenderDir,
      rollupOptions: {
        output: {
          entryFileNames: "entry.js",
        },
      },
      ssr: serverEntryPath,
    },
    configFile: path.resolve(rootDir, "vite.config.ts"),
    logLevel: "silent",
  });

  const { render } = await import(pathToFileURL(serverBundlePath).href);
  const indexHtml = await readFile(clientHtmlPath, "utf8");
  const { appHtml } = await render("/");

  const prerenderedHtml = indexHtml.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  if (prerenderedHtml === indexHtml) {
    throw new Error('Could not inject prerendered markup into dist/index.html');
  }

  await writeFile(clientHtmlPath, prerenderedHtml, "utf8");
} finally {
  await cleanup();
}
