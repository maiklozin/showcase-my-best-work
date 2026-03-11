import { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { I18nProvider } from "@/i18n/I18nProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const browserQueryClient = new QueryClient();

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

type AppShellProps = {
  router: ReactNode;
  includeNotifications?: boolean;
  queryClient?: QueryClient;
};

export const AppShell = ({
  router,
  includeNotifications = true,
  queryClient = browserQueryClient,
}: AppShellProps) => (
  <QueryClientProvider client={queryClient}>
    <I18nProvider>
      <TooltipProvider>
        {includeNotifications ? <Toaster /> : null}
        {includeNotifications ? <Sonner /> : null}
        {router}
      </TooltipProvider>
    </I18nProvider>
  </QueryClientProvider>
);

const App = () => (
  <AppShell
    router={
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    }
  />
);

export default App;
