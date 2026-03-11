import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio13 from "@/assets/portfolio-13.jpg";
import portfolio19 from "@/assets/portfolio-19.jpg";
import portfolio21 from "@/assets/portfolio-21.jpg";
import { useI18n } from "@/i18n/I18nProvider";
import { formatPortfolioImageAlt, getSiteCopy } from "@/lib/siteCopy";

const PortfolioPreviewGrid = () => {
  const { lang, t } = useI18n();
  const copy = getSiteCopy(lang);
  const items = [
    { src: portfolio1, title: t("workVogue"), category: t("catEditorial") },
    { src: portfolio4, title: t("workStreet"), category: t("catCommercial") },
    { src: portfolio7, title: t("workOcean"), category: t("catCommercial") },
    { src: portfolio13, title: t("workWhiteDress"), category: t("catHauteCouture") },
    { src: portfolio19, title: t("workCloseUp"), category: t("catBeauty") },
    { src: portfolio21, title: t("workRunwayFloral"), category: t("catRunway") },
  ];

  return (
    <section className="px-6 py-14 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <h2 className="font-display text-4xl font-medium italic text-foreground md:text-5xl">
            {copy.portfolioPage.introTitle}
          </h2>
          <p className="mt-5 font-body text-sm leading-relaxed text-secondary-foreground md:text-base">
            {copy.portfolioPage.introBody}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="overflow-hidden border border-border bg-card/60">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.src}
                  alt={formatPortfolioImageAlt(lang, item.category, item.title)}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="px-6 py-5">
                <p className="font-body text-[10px] uppercase tracking-[0.3em] text-primary">
                  {item.category}
                </p>
                <h3 className="mt-2 font-display text-2xl italic text-foreground">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreviewGrid;
