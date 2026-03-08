import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const works = [
  { src: portfolio1, title: "Vogue Editorial", category: "Editorial" },
  { src: portfolio2, title: "Beauty Campaign", category: "Beauty" },
  { src: portfolio3, title: "Milan Fashion Week", category: "Runway" },
  { src: portfolio4, title: "Street Style", category: "Editorial" },
  { src: portfolio5, title: "Noir Collection", category: "Haute Couture" },
  { src: portfolio6, title: "Summer Campaign", category: "Commercial" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mb-16 text-center">
        <p className="mb-3 font-body text-xs uppercase tracking-[0.4em] text-primary">
          Избранное
        </p>
        <h2 className="font-display text-4xl font-medium italic text-foreground md:text-5xl">
          Портфолио
        </h2>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((work, i) => (
          <div
            key={i}
            className="group relative cursor-pointer overflow-hidden"
          >
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
