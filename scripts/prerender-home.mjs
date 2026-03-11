import { rm, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { JSDOM } from "jsdom";
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

const upsertMeta = (document, selector, attributes, content) => {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    for (const [key, value] of Object.entries(attributes)) {
      tag.setAttribute(key, value);
    }
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

const removeMeta = (document, selector) => {
  document.head.querySelector(selector)?.remove();
};

const upsertCanonical = (document, href) => {
  let canonical = document.head.querySelector("link[rel='canonical']");

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", href);
};

const upsertStructuredData = (document, structuredData) => {
  const selector = "script[data-seo-jsonld='primary']";

  if (!structuredData) {
    document.head.querySelector(selector)?.remove();
    return;
  }

  let script = document.head.querySelector(selector);

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo-jsonld", "primary");
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(structuredData);
};

const renderDocument = (htmlTemplate, { appHtml, lang, seo }) => {
  const dom = new JSDOM(htmlTemplate);
  const { document } = dom.window;
  const root = document.getElementById("root");

  if (!root) {
    throw new Error("Could not find #root in client HTML template.");
  }

  root.innerHTML = appHtml;
  document.documentElement.lang = lang;
  document.title = seo.title;

  upsertMeta(document, "meta[name='description']", { name: "description" }, seo.description);
  upsertMeta(document, "meta[name='robots']", { name: "robots" }, seo.robots);
  upsertMeta(document, "meta[name='googlebot']", { name: "googlebot" }, seo.robots);
  upsertMeta(document, "meta[property='og:title']", { property: "og:title" }, seo.title);
  upsertMeta(
    document,
    "meta[property='og:description']",
    { property: "og:description" },
    seo.description,
  );
  upsertMeta(document, "meta[property='og:type']", { property: "og:type" }, seo.type);
  upsertMeta(document, "meta[property='og:url']", { property: "og:url" }, seo.canonicalUrl);
  upsertMeta(document, "meta[property='og:site_name']", { property: "og:site_name" }, "Dara Model");
  upsertMeta(document, "meta[property='og:locale']", { property: "og:locale" }, seo.locale);
  upsertMeta(document, "meta[name='twitter:title']", { name: "twitter:title" }, seo.title);
  upsertMeta(
    document,
    "meta[name='twitter:description']",
    { name: "twitter:description" },
    seo.description,
  );
  upsertMeta(document, "meta[name='twitter:url']", { name: "twitter:url" }, seo.canonicalUrl);
  upsertMeta(document, "meta[name='twitter:site']", { name: "twitter:site" }, "@dara__es_");
  upsertCanonical(document, seo.canonicalUrl);
  upsertStructuredData(document, seo.structuredData);

  if (seo.imageUrl) {
    upsertMeta(document, "meta[property='og:image']", { property: "og:image" }, seo.imageUrl);
    upsertMeta(
      document,
      "meta[property='og:image:alt']",
      { property: "og:image:alt" },
      seo.imageAlt,
    );
    upsertMeta(
      document,
      "meta[property='og:image:type']",
      { property: "og:image:type" },
      seo.imageType,
    );
    upsertMeta(
      document,
      "meta[property='og:image:width']",
      { property: "og:image:width" },
      seo.imageWidth,
    );
    upsertMeta(
      document,
      "meta[property='og:image:height']",
      { property: "og:image:height" },
      seo.imageHeight,
    );
    upsertMeta(document, "meta[name='twitter:image']", { name: "twitter:image" }, seo.imageUrl);
    upsertMeta(
      document,
      "meta[name='twitter:image:alt']",
      { name: "twitter:image:alt" },
      seo.imageAlt,
    );
    upsertMeta(
      document,
      "meta[name='twitter:card']",
      { name: "twitter:card" },
      "summary_large_image",
    );
  } else {
    removeMeta(document, "meta[property='og:image']");
    removeMeta(document, "meta[property='og:image:alt']");
    removeMeta(document, "meta[property='og:image:type']");
    removeMeta(document, "meta[property='og:image:width']");
    removeMeta(document, "meta[property='og:image:height']");
    removeMeta(document, "meta[name='twitter:image']");
    removeMeta(document, "meta[name='twitter:image:alt']");
    upsertMeta(document, "meta[name='twitter:card']", { name: "twitter:card" }, "summary");
  }

  return dom.serialize();
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

  const { PRERENDER_ROUTES, render } = await import(pathToFileURL(serverBundlePath).href);
  const htmlTemplate = await readFile(clientHtmlPath, "utf8");

  for (const route of PRERENDER_ROUTES) {
    const { appHtml, lang, seo } = await render(route.pathname);
    const canonicalUrl = new URL(seo.pathname, seo.siteUrl).toString();
    const renderedHtml = renderDocument(htmlTemplate, {
      appHtml,
      lang,
      seo: {
        ...seo,
        canonicalUrl,
      },
    });
    const outputPath = path.resolve(distDir, route.outputPath);

    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, renderedHtml, "utf8");
  }
} finally {
  await cleanup();
}
