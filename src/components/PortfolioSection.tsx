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
import { useRef, useEffect, useCallback } from "react";

const CARD_WIDTH = 280;
const GAP = 16;
const AUTO_SPEED = 1; // pixels per frame

const useAutoScroll = (direction: 'left' | 'right') => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Set initial scroll position for right-scrolling row
    const halfScroll = el.scrollWidth / 2;
    if (direction === 'right') {
      el.scrollLeft = halfScroll;
    }

    let raf: number;
    const animate = () => {
      if (!isPaused.current && !isDragging.current && el) {
        if (direction === 'left') {
          el.scrollLeft += AUTO_SPEED;
          // Loop: when we've scrolled past the first set, jump back
          if (el.scrollLeft >= halfScroll) {
            el.scrollLeft -= halfScroll;
          }
        } else {
          el.scrollLeft -= AUTO_SPEED;
          if (el.scrollLeft <= 0) {
            el.scrollLeft += halfScroll;
          }
        }
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [direction]);

  const onMouseEnter = useCallback(() => { isPaused.current = true; }, []);
  const onMouseLeave = useCallback(() => { isPaused.current = false; isDragging.current = false; }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragScrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = e.clientX - dragStartX.current;
    scrollRef.current.scrollLeft = dragScrollLeft.current - dx;
  }, []);

  const onPointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  // Touch events for mobile
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    isPaused.current = true;
    isDragging.current = true;
    dragStartX.current = e.touches[0].clientX;
    dragScrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = e.touches[0].clientX - dragStartX.current;
    scrollRef.current.scrollLeft = dragScrollLeft.current - dx;
  }, []);

  const onTouchEnd = useCallback(() => {
    isDragging.current = false;
    isPaused.current = false;
  }, []);

  return {
    scrollRef,
    onMouseEnter,
    onMouseLeave,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};

const PortfolioSection = () => {
  const { t } = useI18n();
  const row1Controls = useAutoScroll('left');
  const row2Controls = useAutoScroll('right');

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
          draggable={false}
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

  const rowProps = (controls: typeof row1Controls) => ({
    ref: controls.scrollRef,
    onMouseEnter: controls.onMouseEnter,
    onMouseLeave: controls.onMouseLeave,
    onPointerDown: controls.onPointerDown,
    onPointerMove: controls.onPointerMove,
    onPointerUp: controls.onPointerUp,
    onTouchStart: controls.onTouchStart,
    onTouchMove: controls.onTouchMove,
    onTouchEnd: controls.onTouchEnd,
  });

  return (
    <section id="portfolio" className="px-0 py-12 md:py-24 overflow-hidden">
      <div className="mb-8 md:mb-16 text-center px-6">
        <p className="mb-3 font-body text-xs uppercase tracking-[0.4em] text-primary">
          {t("portfolioLabel")}
        </p>
        <h2 className="font-display text-4xl font-medium italic text-foreground md:text-5xl">
          {t("portfolioTitle")}
        </h2>
      </div>

      {/* Row 1 — auto scrolls left, manual drag */}
      <div
        className="mb-4 flex gap-4 overflow-x-auto cursor-grab touch-pan-y [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        {...rowProps(row1Controls)}
      >
        {[...row1, ...row1].map((work, i) => renderCard(work, i))}
      </div>

      {/* Row 2 — auto scrolls right, manual drag */}
      <div
        className="flex gap-4 overflow-hidden cursor-grab touch-pan-y"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        {...rowProps(row2Controls)}
      >
        {[...row2, ...row2].map((work, i) => renderCard(work, i + 100))}
      </div>
    </section>
  );
};

export default PortfolioSection;
