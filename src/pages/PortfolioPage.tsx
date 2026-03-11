import LanguageSwitcher from "@/components/LanguageSwitcher";
import PageHero from "@/components/PageHero";
import PortfolioPreviewGrid from "@/components/PortfolioPreviewGrid";
import SeoHead from "@/components/SeoHead";
import SiteFooterLinks from "@/components/SiteFooterLinks";
import SiteHeaderNav from "@/components/SiteHeaderNav";
import { useI18n } from "@/i18n/I18nProvider";
import { getPageSeo } from "@/lib/seo";

const PortfolioPage = () => {
  const { lang } = useI18n();
  const seo = getPageSeo("portfolio", lang);

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
      <SiteHeaderNav />
      <LanguageSwitcher />
      <PageHero
        eyebrow="Dara Model Portfolio"
        title="Fashion model portfolio for editorial, commercial, beauty, and runway work"
        description="A curated portfolio from Mallorca and Palma de Mallorca, featuring fashion editorials, commercial productions, beauty imagery, bridal work, and couture looks."
        imageAlt="Dara Model portfolio page hero portrait."
        links={[
          { to: "/about", label: "Read about Dara" },
          { to: "/contact", label: "Book a shoot" },
        ]}
      />

      <PortfolioPreviewGrid />

      <section className="border-t border-border px-6 py-14 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <article>
            <h2 className="font-display text-3xl font-medium italic text-foreground">Editorial</h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-secondary-foreground">
              Fashion editorials with a luxury mood, strong portrait presence, and location-aware
              storytelling for magazines, photographers, and creative teams.
            </p>
          </article>
          <article>
            <h2 className="font-display text-3xl font-medium italic text-foreground">Commercial</h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-secondary-foreground">
              Commercial model work for brands that need polished campaign imagery, social media
              content, and adaptable visual direction in Mallorca and across Spain.
            </p>
          </article>
          <article>
            <h2 className="font-display text-3xl font-medium italic text-foreground">Runway</h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-secondary-foreground">
              Runway, showroom, and couture presentation work supported by experience with fashion week,
              event production, and client-facing presentations.
            </p>
          </article>
        </div>
      </section>

      <section className="border-t border-border px-6 py-10 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 font-body text-xs uppercase tracking-[0.35em] text-primary">
            Continue Browsing
          </p>
          <SiteFooterLinks />
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;
