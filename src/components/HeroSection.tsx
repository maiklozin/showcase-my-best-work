import heroImage from "@/assets/hero.jpg";
import { NavLink } from "@/components/NavLink";
import { useI18n } from "@/i18n/I18nProvider";
import { getSiteCopy } from "@/lib/siteCopy";

const HeroSection = () => {
  const { lang, t } = useI18n();
  const copy = getSiteCopy(lang);
  const heroPrimaryCtaClass =
    "inline-flex min-h-12 w-full items-center justify-center rounded-full border border-transparent bg-transparent px-4 py-3 text-center font-body text-[11px] uppercase tracking-[0.28em] text-primary shadow-[inset_0_-1px_0_hsl(var(--primary)/0.45)] transition-all duration-300 ease-out hover:border-primary/35 hover:bg-background/60 hover:text-primary hover:shadow-[0_14px_30px_hsl(var(--background)/0.25)] focus-visible:border-primary/45 focus-visible:bg-background/70 focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 active:border-primary/40 active:bg-background/70 sm:w-auto sm:px-5";
  const heroSecondaryCtaClass =
    "inline-flex min-h-12 w-full items-center justify-center rounded-full border border-transparent bg-transparent px-4 py-3 text-center font-body text-[11px] uppercase tracking-[0.28em] text-foreground/90 shadow-[inset_0_-1px_0_hsl(var(--border)/0.4)] transition-all duration-300 ease-out hover:border-border hover:bg-background/55 hover:text-foreground hover:shadow-[0_14px_30px_hsl(var(--background)/0.22)] focus-visible:border-primary/35 focus-visible:bg-background/70 focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 active:border-border active:bg-background/70 sm:w-auto sm:px-5";
  const heroTertiaryCtaClass =
    "mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-transparent bg-transparent px-4 py-2 text-center font-body text-[11px] uppercase tracking-[0.28em] text-muted-foreground shadow-[inset_0_-1px_0_hsl(var(--border)/0.35)] opacity-0 animate-fade-up transition-all duration-300 ease-out hover:border-border/70 hover:bg-background/50 hover:text-foreground hover:shadow-[0_12px_24px_hsl(var(--background)/0.18)] focus-visible:border-primary/35 focus-visible:bg-background/60 focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 active:border-border active:bg-background/60";

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Dara Model fashion portrait introducing editorial and commercial work in Mallorca."
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 font-body text-sm uppercase tracking-[0.4em] text-primary opacity-0 animate-fade-up">
          {t("heroSubtitle")}
        </p>
        <h1 className="mb-6 font-display text-6xl font-medium italic tracking-wide text-foreground opacity-0 animate-fade-up md:text-8xl lg:text-9xl" style={{ animationDelay: "0.2s" }}>
          Dara Model
        </h1>
        <div className="h-px w-24 bg-primary opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }} />
        <p className="mt-6 max-w-md font-body text-sm font-light leading-relaxed text-secondary-foreground opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          {t("heroCategories")}
        </p>
        <div
          className="mt-12 flex w-full max-w-md flex-col items-center gap-3 opacity-0 animate-fade-up sm:flex-row sm:flex-wrap sm:justify-center"
          style={{ animationDelay: "0.8s" }}
        >
          <a
            href="#portfolio"
            className={heroPrimaryCtaClass}
          >
            {copy.cta.viewPortfolio}
          </a>
          <NavLink
            to="/contact"
            className={heroSecondaryCtaClass}
          >
            {copy.home.contactLink}
          </NavLink>
        </div>
        <NavLink
          to="/about"
          className={heroTertiaryCtaClass}
          style={{ animationDelay: "0.95s" }}
        >
          {copy.home.aboutLink}
        </NavLink>
      </div>
    </section>
  );
};

export default HeroSection;
