import FloatingBackHomeButton from "@/components/FloatingBackHomeButton";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import PageHero from "@/components/PageHero";
import PortfolioPreviewGrid from "@/components/PortfolioPreviewGrid";
import SeoHead from "@/components/SeoHead";
import SiteFooterLinks from "@/components/SiteFooterLinks";
import SiteHeaderNav from "@/components/SiteHeaderNav";
import { useI18n } from "@/i18n/I18nProvider";
import { CONTACT_BOOKING_HREF, SITE_PATHS } from "@/lib/routes";
import { getPageSeo } from "@/lib/seo";
import { getSiteCopy } from "@/lib/siteCopy";

const PortfolioPage = () => {
  const { lang } = useI18n();
  const seo = getPageSeo("portfolio", lang);
  const copy = getSiteCopy(lang);

  return (
    <main className="min-h-screen bg-background">
      <SeoHead
        lang={lang}
        pathname={seo.pathname}
        title={seo.title}
        description={seo.description}
        robots={seo.robots}
        type={seo.type}
        imageUrl={seo.imageUrl}
        structuredData={seo.structuredData}
      />
      <FloatingBackHomeButton />
      <SiteHeaderNav />
      <LanguageSwitcher />
      <PageHero
        eyebrow={copy.portfolioPage.eyebrow}
        title={copy.portfolioPage.title}
        description={copy.portfolioPage.description}
        imageAlt={copy.portfolioPage.imageAlt}
        links={[
          { to: SITE_PATHS.about, label: copy.nav.about },
          { href: CONTACT_BOOKING_HREF, label: copy.nav.booking, variant: "primary" },
        ]}
      />

      <PortfolioPreviewGrid />

      <section className="border-t border-border px-6 py-14 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <article>
            <h2 className="font-display text-3xl font-medium italic text-foreground">{copy.portfolioPage.editorialTitle}</h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-secondary-foreground">
              {copy.portfolioPage.editorialBody}
            </p>
          </article>
          <article>
            <h2 className="font-display text-3xl font-medium italic text-foreground">{copy.portfolioPage.commercialTitle}</h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-secondary-foreground">
              {copy.portfolioPage.commercialBody}
            </p>
          </article>
          <article>
            <h2 className="font-display text-3xl font-medium italic text-foreground">{copy.portfolioPage.runwayTitle}</h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-secondary-foreground">
              {copy.portfolioPage.runwayBody}
            </p>
          </article>
        </div>
      </section>

      <section className="border-t border-border px-6 py-10 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 font-body text-xs uppercase tracking-[0.35em] text-primary">
            {copy.portfolioPage.footerHeading}
          </p>
          <SiteFooterLinks />
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;
