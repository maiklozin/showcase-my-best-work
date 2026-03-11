import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio13 from "@/assets/portfolio-13.jpg";
import portfolio19 from "@/assets/portfolio-19.jpg";
import portfolio21 from "@/assets/portfolio-21.jpg";

const items = [
  {
    src: portfolio1,
    title: "Urban Editorial",
    category: "Editorial",
    alt: "Dara Model editorial portfolio image from the Urban Editorial series.",
  },
  {
    src: portfolio4,
    title: "Marina Collection",
    category: "Commercial",
    alt: "Dara Model commercial fashion portfolio image from the Marina Collection series.",
  },
  {
    src: portfolio7,
    title: "Ocean Breeze",
    category: "Commercial",
    alt: "Dara Model commercial portfolio image from the Ocean Breeze fashion shoot.",
  },
  {
    src: portfolio13,
    title: "White Flow",
    category: "Haute Couture",
    alt: "Dara Model haute couture portfolio image from the White Flow series.",
  },
  {
    src: portfolio19,
    title: "Beauty Portrait",
    category: "Beauty",
    alt: "Dara Model beauty portfolio close-up portrait for fashion and cosmetics work.",
  },
  {
    src: portfolio21,
    title: "Floral Couture",
    category: "Runway",
    alt: "Dara Model runway portfolio image from the Floral Couture collection.",
  },
];

const PortfolioPreviewGrid = () => {
  return (
    <section className="px-6 py-14 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <h2 className="font-display text-4xl font-medium italic text-foreground md:text-5xl">
            Selected editorial and commercial model portfolio
          </h2>
          <p className="mt-5 font-body text-sm leading-relaxed text-secondary-foreground md:text-base">
            A focused selection of editorial, commercial, beauty, and haute couture imagery from Dara
            Model's portfolio in Mallorca, Palma de Mallorca, and wider Spain.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="overflow-hidden border border-border bg-card/60">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
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
