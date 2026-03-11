import AboutSection from "@/components/AboutSection";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import PageHero from "@/components/PageHero";
import SeoHead from "@/components/SeoHead";
import SiteFooterLinks from "@/components/SiteFooterLinks";
import SiteHeaderNav from "@/components/SiteHeaderNav";
import { useI18n } from "@/i18n/I18nProvider";
import { getPageSeo } from "@/lib/seo";

const AboutPage = () => {
  const { lang } = useI18n();
  const seo = getPageSeo("about", lang);

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
        eyebrow="About Dara Model"
        title="Fashion model based in Mallorca, available in Palma de Mallorca"
        description="Dara works across editorials, commercial campaigns, bridal shoots, runway bookings, and branded content for clients in Mallorca, Palma de Mallorca, Spain, and Europe."
        imageAlt="Dara Model portrait introducing the About page."
        links={[
          { href: "/#portfolio", label: "Portfolio" },
          { to: "/contact", label: "Contact" },
        ]}
      />

      <section className="px-6 py-14 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-display text-4xl font-medium italic text-foreground md:text-5xl">
              Editorial and commercial model in Spain
            </h2>
            <p className="mt-5 font-body text-sm leading-relaxed text-secondary-foreground md:text-base">
              Dara combines a fashion-forward portfolio with experience on editorial shoots,
              commercial productions, runway presentations, and bridal projects. Her work is tailored
              for brands, photographers, agencies, and creative teams looking for polished imagery with
              a luxury feel.
            </p>
            <p className="mt-5 font-body text-sm leading-relaxed text-secondary-foreground md:text-base">
              Based in Mallorca and available in Palma de Mallorca, Dara is open to collaborations
              throughout Spain and Europe, including campaign work, showroom content, social media
              productions, and destination shoots.
            </p>
          </div>

          <div className="grid gap-6 border-l border-border pl-0 md:pl-8">
            <div>
              <h3 className="font-body text-xs uppercase tracking-[0.3em] text-primary">
                Based in Mallorca
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-secondary-foreground">
                Available in Palma de Mallorca and for travel across Spain and Europe.
              </p>
            </div>
            <div>
              <h3 className="font-body text-xs uppercase tracking-[0.3em] text-primary">
                Typical work
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-secondary-foreground">
                Fashion editorials, commercial campaigns, beauty imagery, bridal shoots, and runway
                bookings.
              </p>
            </div>
            <div>
              <h3 className="font-body text-xs uppercase tracking-[0.3em] text-primary">
                Next step
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-secondary-foreground">
                Explore the fashion model portfolio or get in touch for availability, rates, and
                production details.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      <section className="border-t border-border px-6 py-10 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 font-body text-xs uppercase tracking-[0.35em] text-primary">
            Explore More
          </p>
          <SiteFooterLinks />
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
