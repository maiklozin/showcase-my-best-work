import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SeoHead from "@/components/SeoHead";
import { useI18n } from "@/i18n/I18nProvider";
import { getSiteCopy } from "@/lib/siteCopy";

const NotFound = () => {
  const location = useLocation();
  const { lang } = useI18n();
  const copy = getSiteCopy(lang);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <SeoHead
        lang="en"
        pathname={location.pathname}
        title="Page Not Found | Dara Model"
        description="The page you requested does not exist on daramodel.com."
        robots="noindex, nofollow"
      />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{copy.notFound.message}</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {copy.notFound.returnHome}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
