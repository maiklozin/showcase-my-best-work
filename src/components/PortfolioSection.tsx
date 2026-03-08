import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";
import portfolio9 from "@/assets/portfolio-9.jpg";
import portfolio11 from "@/assets/portfolio-11.jpg";
import { useI18n } from "@/i18n/I18nProvider";

const PortfolioSection = () => {
  const { t } = useI18n();

  const works = [
    { src: portfolio1, title: t("workVogue"), category: t("catEditorial") },
    { src: portfolio2, title: t("workBeauty"), category: t("catHauteCouture") },
    { src: portfolio3, title: t("workMilan"), category: t("catBeauty") },
    { src: portfolio4, title: t("workStreet"), category: t("catCommercial") },
    { src: portfolio5, title: t("workNoir"), category: t("catHauteCouture") },
    { src: portfolio6, title: t("workSummer"), category: t("catLifestyle") },
    { src: portfolio7, title: t("workOcean"), category: t("catCommercial") },
    { src: portfolio8, title: t("workPortrait"), category: t("catBeauty") },
    { src: portfolio9, title: t("workDesert"), category: t("catEditorial") },
    { src: portfolio10, title: t("workClassic"), category: t("catBeauty") },
    { src: portfolio11, title: t("workNight"), category: t("catHauteCouture") },
  ];

  return (
    <section id="portfolio" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mb-16 text-center">
        <p className="mb-3 font-body text-xs uppercase tracking-[0.4em] text-primary">
          {t("portfolioLabel")}
        </p>
        <h2 className="font-display text-4xl font-medium italic text-foreground md:text-5xl">
          {t("portfolioTitle")}
        </h2>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work, i) => (
          <div key={i} className="group relative cursor-pointer overflow-hidden">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={work.src}
                alt={work.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-background/80 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <p className="font-body text-[10px] uppercase tracking-[0.3em] text-primary">
                {work.category}
              </p>
              <p className="mt-1 font-display text-xl italic text-foreground">
                {work.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
