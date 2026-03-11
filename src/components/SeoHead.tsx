import { useEffect } from "react";
import { Language } from "@/i18n/translations";
import {
  DEFAULT_ROBOTS,
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_TYPE,
  OG_IMAGE_URL,
  OG_IMAGE_WIDTH,
  SITE_URL,
  getSeoCopy,
} from "@/lib/seo";

type SeoHeadProps = {
  lang: Language;
  pathname?: string;
  title?: string;
  description?: string;
  robots?: string;
  type?: string;
  imageUrl?: string | null;
  structuredData?: Record<string, unknown> | null;
};

const upsertMeta = (selector: string, attributes: Record<string, string>, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!tag) {
    tag = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => tag?.setAttribute(key, value));
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

const removeMeta = (selector: string) => {
  document.head.querySelector(selector)?.remove();
};

const upsertStructuredData = (data: Record<string, unknown> | null) => {
  const selector = "script[data-seo-jsonld='primary']";

  if (!data) {
    document.head.querySelector(selector)?.remove();
    return;
  }

  let tag = document.head.querySelector<HTMLScriptElement>(selector);

  if (!tag) {
    tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.setAttribute("data-seo-jsonld", "primary");
    document.head.appendChild(tag);
  }

  tag.textContent = JSON.stringify(data);
};

const upsertCanonical = (href: string) => {
  let canonical = document.head.querySelector<HTMLLinkElement>("link[rel='canonical']");

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", href);
};

const buildAbsoluteUrl = (pathname: string) => new URL(pathname, SITE_URL).toString();

const SeoHead = ({
  lang,
  pathname = "/",
  title,
  description,
  robots = DEFAULT_ROBOTS,
  type = "website",
  imageUrl = OG_IMAGE_URL,
  structuredData = null,
}: SeoHeadProps) => {
  useEffect(() => {
    const copy = getSeoCopy(lang);
    const resolvedTitle = title ?? copy.title;
    const resolvedDescription = description ?? copy.description;
    const canonicalUrl = buildAbsoluteUrl(pathname);

    document.title = resolvedTitle;
    document.documentElement.lang = lang;

    upsertMeta("meta[name='description']", { name: "description" }, resolvedDescription);
    upsertMeta("meta[name='robots']", { name: "robots" }, robots);
    upsertMeta("meta[name='googlebot']", { name: "googlebot" }, robots);
    upsertMeta("meta[property='og:title']", { property: "og:title" }, resolvedTitle);
    upsertMeta(
      "meta[property='og:description']",
      { property: "og:description" },
      resolvedDescription
    );
    upsertMeta("meta[property='og:type']", { property: "og:type" }, type);
    upsertMeta("meta[property='og:url']", { property: "og:url" }, canonicalUrl);
    upsertMeta("meta[property='og:site_name']", { property: "og:site_name" }, "Dara Model");
    upsertMeta("meta[property='og:locale']", { property: "og:locale" }, copy.locale);
    upsertMeta("meta[name='twitter:title']", { name: "twitter:title" }, resolvedTitle);
    upsertMeta(
      "meta[name='twitter:description']",
      { name: "twitter:description" },
      resolvedDescription
    );
    upsertMeta("meta[name='twitter:url']", { name: "twitter:url" }, canonicalUrl);
    upsertMeta("meta[name='twitter:site']", { name: "twitter:site" }, "@dara__es_");
    upsertCanonical(canonicalUrl);
    upsertStructuredData(structuredData);

    if (imageUrl) {
      upsertMeta("meta[property='og:image']", { property: "og:image" }, imageUrl);
      upsertMeta("meta[property='og:image:alt']", { property: "og:image:alt" }, OG_IMAGE_ALT);
      upsertMeta("meta[property='og:image:type']", { property: "og:image:type" }, OG_IMAGE_TYPE);
      upsertMeta(
        "meta[property='og:image:width']",
        { property: "og:image:width" },
        OG_IMAGE_WIDTH
      );
      upsertMeta(
        "meta[property='og:image:height']",
        { property: "og:image:height" },
        OG_IMAGE_HEIGHT
      );
      upsertMeta("meta[name='twitter:image']", { name: "twitter:image" }, imageUrl);
      upsertMeta("meta[name='twitter:image:alt']", { name: "twitter:image:alt" }, OG_IMAGE_ALT);
      upsertMeta(
        "meta[name='twitter:card']",
        { name: "twitter:card" },
        "summary_large_image"
      );
    } else {
      removeMeta("meta[property='og:image']");
      removeMeta("meta[property='og:image:alt']");
      removeMeta("meta[property='og:image:type']");
      removeMeta("meta[property='og:image:width']");
      removeMeta("meta[property='og:image:height']");
      removeMeta("meta[name='twitter:image']");
      removeMeta("meta[name='twitter:image:alt']");
      upsertMeta("meta[name='twitter:card']", { name: "twitter:card" }, "summary");
    }
  }, [description, imageUrl, lang, pathname, robots, structuredData, title, type]);

  return null;
};

export default SeoHead;
