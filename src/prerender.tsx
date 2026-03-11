import { QueryClient } from "@tanstack/react-query";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes, AppShell } from "./App";
import {
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_TYPE,
  OG_IMAGE_WIDTH,
  PRERENDER_ROUTES,
  SITE_URL,
  getPageSeo,
  getSeoPageFromPath,
} from "./lib/seo";

export { PRERENDER_ROUTES };

export function render(url = "/") {
  const lang = "en";
  const seo = getPageSeo(getSeoPageFromPath(url), lang);
  const appHtml = renderToString(
    <AppShell
      includeNotifications={false}
      queryClient={new QueryClient()}
      router={
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      }
    />
  );

  return {
    appHtml,
    lang,
    seo: {
      ...seo,
      siteUrl: SITE_URL,
      imageAlt: OG_IMAGE_ALT,
      imageType: OG_IMAGE_TYPE,
      imageWidth: OG_IMAGE_WIDTH,
      imageHeight: OG_IMAGE_HEIGHT,
    },
  };
}
