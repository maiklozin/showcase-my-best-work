import heroImage from "@/assets/hero.jpg";
import { NavLink } from "@/components/NavLink";
import { useI18n } from "@/i18n/I18nProvider";

const HeroSection = () => {
  const { t } = useI18n();

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
        <a
          href="#portfolio"
          className="mt-12 font-body text-xs uppercase tracking-[0.3em] text-primary opacity-0 animate-fade-up transition-opacity hover:opacity-70"
          style={{ animationDelay: "0.8s" }}
        >
          {t("viewPortfolio")}
        </a>
        <div
          className="mt-6 flex flex-wrap items-center justify-center gap-3 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.95s" }}
        >
          <NavLink
            to="/about"
            className="border border-border bg-background/70 px-4 py-2 font-body text-[10px] uppercase tracking-[0.24em] text-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
          >
            About Dara Model
          </NavLink>
          <NavLink
            to="/portfolio"
            className="border border-border bg-background/70 px-4 py-2 font-body text-[10px] uppercase tracking-[0.24em] text-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
          >
            Fashion Model Portfolio
          </NavLink>
          <NavLink
            to="/contact"
            className="border border-border bg-background/70 px-4 py-2 font-body text-[10px] uppercase tracking-[0.24em] text-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
          >
            Contact for Bookings
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
