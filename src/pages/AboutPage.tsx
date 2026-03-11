import AboutSection from "@/components/AboutSection";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import PageHero from "@/components/PageHero";
import SeoHead from "@/components/SeoHead";
import SiteFooterLinks from "@/components/SiteFooterLinks";
import SiteHeaderNav from "@/components/SiteHeaderNav";
import { useI18n } from "@/i18n/I18nProvider";
import { getPageSeo } from "@/lib/seo";
import { getSiteCopy } from "@/lib/siteCopy";

const AboutPage = () => {
  const { lang } = useI18n();
  const seo = getPageSeo("about", lang);
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
      <SiteHeaderNav />
      <LanguageSwitcher />
      <PageHero
        eyebrow={copy.aboutPage.eyebrow}
        title={copy.aboutPage.title}
        description={copy.aboutPage.description}
        imageAlt={copy.aboutPage.imageAlt}
        links={[
          { href: "/#portfolio", label: copy.nav.portfolio },
          { href: "/contact#booking", label: copy.nav.booking, variant: "primary" },
        ]}
      />

      <section className="px-6 py-14 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-display text-4xl font-medium italic text-foreground md:text-5xl">
              {copy.aboutPage.sectionTitle}
            </h2>
            <p className="mt-5 font-body text-sm leading-relaxed text-secondary-foreground md:text-base">
              {copy.aboutPage.body1}
            </p>
            <p className="mt-5 font-body text-sm leading-relaxed text-secondary-foreground md:text-base">
              {copy.aboutPage.body2}
            </p>
          </div>

          <div className="grid gap-6 border-l border-border pl-0 md:pl-8">
            <div>
              <h3 className="font-body text-xs uppercase tracking-[0.3em] text-primary">
                {copy.aboutPage.basedTitle}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-secondary-foreground">
                {copy.aboutPage.basedBody}
              </p>
            </div>
            <div>
              <h3 className="font-body text-xs uppercase tracking-[0.3em] text-primary">
                {copy.aboutPage.workTitle}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-secondary-foreground">
                {copy.aboutPage.workBody}
              </p>
            </div>
            <div>
              <h3 className="font-body text-xs uppercase tracking-[0.3em] text-primary">
                {copy.aboutPage.nextTitle}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-secondary-foreground">
                {copy.aboutPage.nextBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      <section className="border-t border-border px-6 py-10 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 font-body text-xs uppercase tracking-[0.35em] text-primary">
            {copy.aboutPage.footerHeading}
          </p>
          <SiteFooterLinks />
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
