import InstagramIcon from "@/components/InstagramIcon";
import { useI18n } from "@/i18n/I18nProvider";

const AboutSection = () => {
  const { t } = useI18n();

  const services = [
    t("aboutService1"),
    t("aboutService2"),
    t("aboutService3"),
    t("aboutService4"),
    t("aboutService5"),
  ];

  return (
    <section id="about" className="px-6 py-12 md:py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p className="mb-3 font-body text-xs uppercase tracking-[0.4em] text-primary">
            {t("aboutLabel")}
          </p>
          <h2 className="font-display text-4xl font-medium italic text-foreground md:text-5xl">
            {t("aboutTitle")}
          </h2>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary">{t("aboutLocation")}</p>
              <p className="mt-1 font-display text-lg italic text-foreground">Mallorca, Spain</p>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary">{t("aboutHeight")}</p>
              <p className="mt-1 font-display text-lg italic text-foreground">173 cm</p>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary">{t("aboutExperience")}</p>
              <p className="mt-1 font-display text-lg italic text-foreground">{t("aboutExperienceValue")}</p>
            </div>
            <div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-primary">{t("aboutLanguages")}</p>
              <p className="mt-1 font-display text-lg italic text-foreground">{t("aboutLanguagesValue")}</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="font-body text-sm leading-relaxed text-secondary-foreground">
              {t("aboutBio")}
            </p>
            <p className="font-body text-sm leading-relaxed text-secondary-foreground">
              Professional fashion model based in Mallorca, Spain. Available for runway shows, editorial shoots, commercial campaigns and wedding photoshoots across Spain and Europe.
            </p>
            <div>
              <p className="mb-4 font-body text-xs uppercase tracking-[0.3em] text-primary">
                {t("aboutAvailable")}
              </p>
              <ul className="space-y-2">
                {services.map((service, i) => (
                  <li key={i} className="flex items-center gap-3 font-body text-sm text-secondary-foreground">
                    <span className="h-px w-4 bg-primary" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <p className="font-body text-xs text-muted-foreground italic">
              {t("aboutTravel")}
            </p>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="mb-3 font-body text-xs uppercase tracking-[0.3em] text-primary">
                {t("contactLabel")}
              </p>
              <a
                href="https://instagram.com/dara__es_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm text-foreground transition-colors hover:text-primary"
              >
                <Instagram size={16} />
                @dara__es_
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
