import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";
import portfolio9 from "@/assets/portfolio-9.jpg";
import portfolio10 from "@/assets/portfolio-10.jpg";
import portfolio11 from "@/assets/portfolio-11.jpg";
import portfolio12 from "@/assets/portfolio-12.jpg";
import portfolio13 from "@/assets/portfolio-13.jpg";
import portfolio14 from "@/assets/portfolio-14.jpg";
import portfolio15 from "@/assets/portfolio-15.jpg";
import portfolio16 from "@/assets/portfolio-16.jpg";
import portfolio17 from "@/assets/portfolio-17.jpg";
import portfolio18 from "@/assets/portfolio-18.jpg";
import portfolio19 from "@/assets/portfolio-19.jpg";
import portfolio21 from "@/assets/portfolio-21.jpg";
import { useI18n } from "@/i18n/I18nProvider";
import { useState, useRef, useCallback } from "react";

const CARD_WIDTH = 280;
const GAP = 16;

const useDragScroll = (setPaused: (v: boolean) => void) => {
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragging.current = true;
    startX.current = e.clientX;
    const el = ref.current;
    if (el) {
      const transform = getComputedStyle(el).transform;
      const matrix = new DOMMatrixReadOnly(transform);
      scrollStart.current = matrix.m41;
    }
    setPaused(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, [setPaused]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging.current || !ref.current) return;
    const dx = e.clientX - startX.current;
    ref.current.style.transform = `translateX(${scrollStart.current + dx}px)`;
  }, []);

  const onPointerUp = useCallback(() => {
    dragging.current = false;
    setPaused(false);
    if (ref.current) {
      ref.current.style.transform = '';
    }
  }, [setPaused]);

  return { ref, onPointerDown, onPointerMove, onPointerUp };
};

const PortfolioSection = () => {
  const { t } = useI18n();
  const [row1Paused, setRow1Paused] = useState(false);
  const [row2Paused, setRow2Paused] = useState(false);
  const drag1 = useDragScroll(setRow1Paused);
  const drag2 = useDragScroll(setRow2Paused);

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
    { src: portfolio12, title: t("workBeach"), category: t("catEditorial") },
    { src: portfolio13, title: t("workWhiteDress"), category: t("catHauteCouture") },
    { src: portfolio14, title: t("workSilverJacket"), category: t("catCommercial") },
    { src: portfolio15, title: t("workGoldDress"), category: t("catEditorial") },
    { src: portfolio16, title: t("workRedLight"), category: t("catBeauty") },
    { src: portfolio17, title: t("workPaperDress"), category: t("catHauteCouture") },
    { src: portfolio18, title: t("workRedBridge"), category: t("catLifestyle") },
    { src: portfolio19, title: t("workCloseUp"), category: t("catBeauty") },
    { src: portfolio21, title: t("workRunwayFloral"), category: t("catHauteCouture") },
  ];

  const row1 = works.slice(0, 10);
  const row2 = works.slice(10);

  const row1Width = row1.length * (CARD_WIDTH + GAP);
  const row2Width = row2.length * (CARD_WIDTH + GAP);

  const renderCard = (work: (typeof works)[0], i: number) => (
    <div
      key={i}
      className="group relative flex-shrink-0 cursor-grab overflow-hidden select-none"
      style={{ width: `${CARD_WIDTH}px` }}
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
  );

  return (
    <section id="portfolio" className="px-0 py-24 overflow-hidden">
      <div className="mb-16 text-center px-6">
        <p className="mb-3 font-body text-xs uppercase tracking-[0.4em] text-primary">
          {t("portfolioLabel")}
        </p>
        <h2 className="font-display text-4xl font-medium italic text-foreground md:text-5xl">
          {t("portfolioTitle")}
        </h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div
        className="mb-4 overflow-hidden"
        onMouseEnter={() => setRow1Paused(true)}
        onMouseLeave={() => setRow1Paused(false)}
        onTouchStart={() => setRow1Paused(true)}
        onTouchEnd={() => setRow1Paused(false)}
      >
        <div
          className="flex gap-4"
          style={{
            width: `${row1Width * 2}px`,
            animation: `marquee-left ${row1.length * 4}s linear infinite`,
            animationPlayState: row1Paused ? "paused" : "running",
          }}
        >
          {[...row1, ...row1].map((work, i) => renderCard(work, i))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div
        className="overflow-hidden"
        onMouseEnter={() => setRow2Paused(true)}
        onMouseLeave={() => setRow2Paused(false)}
        onTouchStart={() => setRow2Paused(true)}
        onTouchEnd={() => setRow2Paused(false)}
      >
        <div
          className="flex gap-4"
          style={{
            width: `${row2Width * 2}px`,
            animation: `marquee-right ${row2.length * 4}s linear infinite`,
            animationPlayState: row2Paused ? "paused" : "running",
          }}
        >
          {[...row2, ...row2].map((work, i) => renderCard(work, i + 100))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${row1Width}px); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-${row2Width}px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection;
