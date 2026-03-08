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
import { useRef, useEffect, useCallback, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const CARD_WIDTH = 280;
const GAP = 16;
const AUTO_SPEED = 1;
const PERF_COUNT = 12;
const DRAG_THRESHOLD = 5; // pixels — if moved less, it's a click

const FilmPerforations = ({ side }: { side: 'top' | 'bottom' }) => (
  <div
    className={`absolute left-0 right-0 z-10 pointer-events-none flex items-center justify-between px-2 ${
      side === 'top' ? 'top-0' : 'bottom-0'
    }`}
    style={{ height: '18px' }}
  >
    {Array.from({ length: PERF_COUNT }).map((_, i) => (
      <div
        key={i}
        className="rounded-sm bg-background"
        style={{ width: '10px', height: '10px' }}
      />
    ))}
  </div>
);

const useAutoScroll = (direction: 'left' | 'right', onTap?: (index: number) => void) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const hasDragged = useRef(false);
  const pointerTarget = useRef<EventTarget | null>(null);
  const pointerStartTime = useRef(0);
  const isTouch = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const halfScroll = el.scrollWidth / 2;
    if (direction === 'right') {
      el.scrollLeft = halfScroll;
    }

    let raf: number;
    const animate = () => {
      if (!isPaused.current && !isDragging.current && el) {
        if (direction === 'left') {
          el.scrollLeft += AUTO_SPEED;
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
    isTouch.current = e.pointerType === 'touch';
    isDragging.current = true;
    hasDragged.current = false;
    isPaused.current = true;
    dragStartX.current = e.clientX;
    dragScrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
    pointerTarget.current = e.target;
    pointerStartTime.current = Date.now();
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = e.clientX - dragStartX.current;
    // Higher threshold for touch to distinguish tap from swipe
    const threshold = isTouch.current ? 15 : DRAG_THRESHOLD;
    if (Math.abs(dx) > threshold) {
      hasDragged.current = true;
    }
    // Only manually scroll on non-touch (touch uses native scroll)
    if (!isTouch.current) {
      scrollRef.current.scrollLeft = dragScrollLeft.current - dx;
    }
  }, []);

  const onPointerUp = useCallback(() => {
    const duration = Date.now() - pointerStartTime.current;
    // Only treat as tap if: didn't drag AND (mouse click OR short touch tap < 300ms)
    if (!hasDragged.current && onTap && pointerTarget.current && (!isTouch.current || duration < 300)) {
      const card = (pointerTarget.current as HTMLElement).closest('[data-card-index]');
      if (card) {
        const idx = parseInt(card.getAttribute('data-card-index') || '-1', 10);
        if (idx >= 0) onTap(idx);
      }
    }
    isDragging.current = false;
    isPaused.current = false;
  }, [onTap]);

  return {
    scrollRef,
    hasDragged,
    onMouseEnter,
    onMouseLeave,
    onPointerDown,
    onPointerMove,
    onPointerUp,
  };
};

const PortfolioSection = () => {
  const { t } = useI18n();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index % works.length);
  }, [works.length]);

  const row1Controls = useAutoScroll('left', openLightbox);
  const row2Controls = useAutoScroll('right', (index: number) => {
    setLightboxIndex(index % works.length);
  });

  const lightbox = lightboxIndex !== null ? works[lightboxIndex] : null;

  const goNext = useCallback(() => {
    setLightboxIndex(prev => prev !== null ? (prev + 1) % works.length : null);
  }, [works.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex(prev => prev !== null ? (prev - 1 + works.length) % works.length : null);
  }, [works.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, goNext, goPrev]);

  const renderCard = (work: (typeof works)[0], i: number, workIndex: number) => (
    <div
      key={i}
      data-card-index={workIndex}
      className="group relative flex-shrink-0 cursor-pointer overflow-hidden select-none bg-secondary"
      style={{ width: `${CARD_WIDTH}px`, padding: '18px 4px' }}
    >
      <FilmPerforations side="top" />
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={work.src}
          alt={work.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          draggable={false}
        />
      </div>
      <FilmPerforations side="bottom" />
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

      {/* Row 1 */}
      <div
        className="mb-4 flex gap-4 overflow-x-auto cursor-grab touch-pan-y [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none' }}
        {...rowProps(row1Controls)}
      >
        {[...row1, ...row1].map((work, i) => renderCard(work, i, i % row1.length))}
      </div>

      {/* Row 2 */}
      <div
        className="flex gap-4 overflow-x-auto cursor-grab touch-pan-y [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: 'none' }}
        {...rowProps(row2Controls)}
      >
        {[...row2, ...row2].map((work, i) => renderCard(work, i + 100, 10 + (i % row2.length)))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground/70 hover:text-foreground transition-colors z-50"
            onClick={() => setLightboxIndex(null)}
          >
            <X size={32} />
          </button>

          {/* Previous */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground transition-colors z-50 p-2"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
          >
            <ChevronLeft size={40} />
          </button>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground transition-colors z-50 p-2"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
          >
            <ChevronRight size={40} />
          </button>

          <div className="max-w-[90vw] max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              key={lightboxIndex}
              src={lightbox.src}
              alt={lightbox.title}
              className="max-w-full max-h-[75vh] object-contain animate-scale-in"
            />
            <div className="mt-4 text-center">
              <p className="font-body text-[10px] uppercase tracking-[0.3em] text-primary">
                {lightbox.category}
              </p>
              <p className="mt-1 font-display text-2xl italic text-foreground">
                {lightbox.title}
              </p>
              <p className="mt-2 font-body text-xs text-muted-foreground">
                {(lightboxIndex ?? 0) + 1} / {works.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
