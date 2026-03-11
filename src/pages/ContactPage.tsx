import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import PageHero from "@/components/PageHero";
import SeoHead from "@/components/SeoHead";
import SiteHeaderNav from "@/components/SiteHeaderNav";
import { useI18n } from "@/i18n/I18nProvider";
import { getPageSeo } from "@/lib/seo";
import { INSTAGRAM_PROFILE_URL } from "@/lib/social";

const ContactPage = () => {
  const { lang } = useI18n();
  const seo = getPageSeo("contact", lang);

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
        eyebrow="Contact Dara Model"
        title="Bookings and collaborations in Mallorca, Palma de Mallorca, and Spain"
        description="For bookings, collaborations, and availability, Instagram is the fastest way to reach Dara. Share your dates, location, and project details there or continue below with the booking form."
        imageAlt="Dara Model contact page portrait."
        links={[
          {
            href: INSTAGRAM_PROFILE_URL,
            label: "Contact on Instagram",
            variant: "primary",
            external: true,
          },
          { href: "/#portfolio", label: "View Portfolio" },
        ]}
      />

      <section className="px-6 py-14 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-4xl font-medium italic text-foreground md:text-5xl">
              Contact Dara for fashion, commercial, and bridal bookings
            </h2>
            <p className="mt-5 font-body text-sm leading-relaxed text-secondary-foreground md:text-base">
              The fastest way to discuss availability is through the booking form below or Instagram.
              Share your shoot dates, location, concept, and production details so the project can be
              scoped clearly from the start.
            </p>
          </div>

          <div className="grid gap-6 border-l border-border pl-0 md:pl-8">
            <div>
              <h3 className="font-body text-xs uppercase tracking-[0.3em] text-primary">
                Typical enquiries
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-secondary-foreground">
                Editorial shoots, commercial campaigns, bridal imagery, brand content, showroom work,
                runway bookings, and destination productions.
              </p>
            </div>
            <div>
              <h3 className="font-body text-xs uppercase tracking-[0.3em] text-primary">
                Base location
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-secondary-foreground">
                Mallorca and Palma de Mallorca, with travel across Spain and Europe.
              </p>
            </div>
            <div>
              <h3 className="font-body text-xs uppercase tracking-[0.3em] text-primary">
                Best for planning
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-secondary-foreground">
                Include dates, timing, location, usage, and any moodboard references to speed up the
                booking conversation.
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
