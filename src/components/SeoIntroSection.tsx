import { Link } from "react-router-dom";
import { useI18n } from "@/i18n/I18nProvider";
import { SITE_PATHS } from "@/lib/routes";
import { getSeoCopy } from "@/lib/seo";
import { getSiteCopy } from "@/lib/siteCopy";

const SeoIntroSection = () => {
  const { lang } = useI18n();
  const copy = getSeoCopy(lang);
  const siteCopy = getSiteCopy(lang);
  const trustCards = [
    {
      to: SITE_PATHS.about,
      title: siteCopy.aboutPage.basedTitle,
      body: siteCopy.aboutPage.basedBody,
      linkLabel: siteCopy.nav.about,
    },
    {
      to: SITE_PATHS.portfolio,
      title: copy.facts[2]?.label ?? siteCopy.nav.portfolio,
      body: copy.facts[2]?.value ?? "",
      linkLabel: siteCopy.nav.portfolio,
    },
    {
      to: SITE_PATHS.contact,
      title: siteCopy.contactPage.enquiriesTitle,
      body: siteCopy.contactPage.enquiriesBody,
      linkLabel: siteCopy.nav.contact,
    },
  ];

  return (
    <section className="border-y border-border bg-card/40 px-6 py-12 md:px-12 md:py-14 lg:px-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 md:grid-cols-[1.35fr_0.95fr] md:items-start">
          <div>
            <p className="mb-3 font-body text-xs uppercase tracking-[0.4em] text-primary">
              {copy.introEyebrow}
            </p>
            <h2 className="max-w-3xl font-display text-3xl font-medium italic text-foreground md:text-4xl">
              {copy.introTitle}
            </h2>
            <p className="mt-5 max-w-3xl font-body text-sm leading-relaxed text-secondary-foreground md:text-base">
              {copy.introBody}
            </p>
          </div>

          <dl className="grid gap-5 sm:grid-cols-3 md:grid-cols-1">
            {copy.facts.map((fact) => (
              <div key={fact.label} className="border-l border-primary/40 pl-4">
                <dt className="font-body text-xs uppercase tracking-[0.3em] text-primary">
                  {fact.label}
                </dt>
                <dd className="mt-2 font-body text-sm leading-relaxed text-secondary-foreground">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {trustCards.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group rounded-[1.5rem] border border-border bg-background/45 p-5 transition-all duration-300 hover:border-primary/40 hover:bg-background/72 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35"
            >
              <h3 className="font-display text-2xl font-medium italic text-foreground transition-colors group-hover:text-primary">
                {card.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-secondary-foreground">
                {card.body}
              </p>
              <span className="mt-5 inline-flex font-body text-[10px] uppercase tracking-[0.28em] text-primary/80">
                {card.linkLabel}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoIntroSection;
