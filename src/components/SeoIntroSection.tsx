import { useI18n } from "@/i18n/I18nProvider";
import { getSeoCopy } from "@/lib/seo";

const SeoIntroSection = () => {
  const { lang } = useI18n();
  const copy = getSeoCopy(lang);

  return (
    <section className="border-y border-border bg-card/40 px-6 py-12 md:px-12 md:py-14 lg:px-24">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.35fr_0.95fr] md:items-start">
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
    </section>
  );
};

export default SeoIntroSection;
