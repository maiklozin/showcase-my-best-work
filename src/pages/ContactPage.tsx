import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import InstagramIcon from "@/components/InstagramIcon";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import PageHero from "@/components/PageHero";
import SeoHead from "@/components/SeoHead";
import SiteHeaderNav from "@/components/SiteHeaderNav";
import { useI18n } from "@/i18n/I18nProvider";
import { getPageSeo } from "@/lib/seo";
import { INSTAGRAM_PROFILE_URL } from "@/lib/social";
import { getSiteCopy } from "@/lib/siteCopy";

const ContactPage = () => {
  const { lang } = useI18n();
  const seo = getPageSeo("contact", lang);
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
        eyebrow={copy.contactPage.eyebrow}
        title={copy.contactPage.title}
        description={copy.contactPage.description}
        imageAlt={copy.contactPage.imageAlt}
        links={[
          {
            href: INSTAGRAM_PROFILE_URL,
            label: copy.cta.contactOnInstagram,
            variant: "primary",
            external: true,
            icon: <InstagramIcon size={16} className="opacity-95" />,
          },
          { href: "/#portfolio", label: copy.cta.viewPortfolio },
        ]}
      />

      <section className="px-6 py-14 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-4xl font-medium italic text-foreground md:text-5xl">
              {copy.contactPage.sectionTitle}
            </h2>
            <p className="mt-5 font-body text-sm leading-relaxed text-secondary-foreground md:text-base">
              {copy.contactPage.sectionBody}
            </p>
          </div>

          <div className="grid gap-6 border-l border-border pl-0 md:pl-8">
            <div>
              <h3 className="font-body text-xs uppercase tracking-[0.3em] text-primary">
                {copy.contactPage.enquiriesTitle}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-secondary-foreground">
                {copy.contactPage.enquiriesBody}
              </p>
            </div>
            <div>
              <h3 className="font-body text-xs uppercase tracking-[0.3em] text-primary">
                {copy.contactPage.baseLocationTitle}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-secondary-foreground">
                {copy.contactPage.baseLocationBody}
              </p>
            </div>
            <div>
              <h3 className="font-body text-xs uppercase tracking-[0.3em] text-primary">
                {copy.contactPage.planningTitle}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-secondary-foreground">
                {copy.contactPage.planningBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      <BookingSection />
      <ContactSection />
    </main>
  );
};

export default ContactPage;
