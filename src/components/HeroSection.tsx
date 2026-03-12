import heroImage from "@/assets/hero.jpg";
import { NavLink } from "@/components/NavLink";
import { useI18n } from "@/i18n/I18nProvider";
import { quietCtaPrimaryClass, quietCtaSecondaryClass, quietCtaTertiaryClass } from "@/lib/ctaStyles";
import { SITE_PATHS } from "@/lib/routes";
import { getSiteCopy } from "@/lib/siteCopy";

const HeroSection = () => {
  const { lang, t } = useI18n();
  const copy = getSiteCopy(lang);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={copy.home.heroImageAlt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 font-body text-sm uppercase tracking-[0.4em] text-primary opacity-0 animate-fade-up">
          {t("heroSubtitle")}
        </p>
        <h1 className="mb-6 font-display text-6xl font-medium italic tracking-wide text-foreground/90 drop-shadow-[0_10px_24px_hsl(var(--background)/0.16)] opacity-0 animate-fade-up md:text-8xl lg:text-9xl" style={{ animationDelay: "0.2s" }}>
          Dara Model
        </h1>
        <div className="h-px w-24 bg-primary opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }} />
        <p className="mt-6 max-w-md font-body text-sm font-light leading-relaxed text-secondary-foreground opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          {t("heroCategories")}
        </p>
        <div
          className="mt-11 flex max-w-lg flex-wrap items-center justify-center gap-2 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#portfolio"
            className={quietCtaPrimaryClass}
          >
            {copy.cta.viewPortfolio}
          </a>
          <NavLink
            to={SITE_PATHS.contact}
            className={quietCtaSecondaryClass}
          >
            {copy.home.contactLink}
          </NavLink>
        </div>
        <NavLink
          to={SITE_PATHS.about}
          className={`mt-3.5 opacity-0 animate-fade-up ${quietCtaTertiaryClass}`}
          style={{ animationDelay: "0.95s" }}
        >
          {copy.home.aboutLink}
        </NavLink>
      </div>
    </section>
  );
};

export default HeroSection;
