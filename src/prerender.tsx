import { QueryClient } from "@tanstack/react-query";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes, AppShell } from "./App";

export function render(url = "/") {
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

  return { appHtml };
}
