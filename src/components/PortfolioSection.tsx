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

const CARD_WIDTH = 260;
const CARD_GAP = 16;
const STEP = CARD_WIDTH + CARD_GAP;

/* ── Tick sound via Web Audio API ── */
const audioCtxRef: { current: AudioContext | null } = { current: null };

function playTick() {
  try {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioContext();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") ctx.resume();

    // Short noise burst = ratchet/mechanical click sound
    const bufferSize = Math.floor(ctx.sampleRate * 0.012); // 12ms
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      // Rapid decay noise
      const decay = 1 - i / bufferSize;
      data[i] = (Math.random() * 2 - 1) * decay * decay;
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;

    // Bandpass filter to shape the click
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 3000;
    filter.Q.value = 1.5;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.015);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    source.start(ctx.currentTime);
  } catch {
    // silently ignore if audio not supported
  }
}

/* ── Film perforations ── */
const PERF_COUNT = 12;
const FilmPerforations = ({ side }: { side: "top" | "bottom" }) => (
  <div
    className={`absolute left-0 right-0 z-10 pointer-events-none flex items-center justify-between px-2 ${
      side === "top" ? "top-0" : "bottom-0"
    }`}
    style={{ height: "18px" }}
  >
    {Array.from({ length: PERF_COUNT }).map((_, i) => (
      <div key={i} className="rounded-sm bg-background" style={{ width: "10px", height: "10px" }} />
    ))}
  </div>
);

/* ── Coverflow carousel hook ── */
function useCoverflowScroll(itemCount: number, onCenterChange?: (index: number) => void) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const hasDragged = useRef(false);
  const lastCenterIndex = useRef(-1);
  const autoSpeed = useRef(0.6);
  const isPaused = useRef(false);
  const isUserInteracting = useRef(false);
  const interactionTimeout = useRef<ReturnType<typeof setTimeout>>();

  const singleWidth = itemCount * STEP;

  // Seamless infinite scroll reset
  const resetIfNeeded = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    if (el.scrollLeft >= singleWidth * 2) {
      el.scrollLeft -= singleWidth;
    } else if (el.scrollLeft < singleWidth * 0.5) {
      el.scrollLeft += singleWidth;
    }
  }, [singleWidth]);

  // Track which card is in center and play tick
  const updateCenter = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    const idx = Math.round(center / STEP) % itemCount;
    const normalizedIdx = ((idx % itemCount) + itemCount) % itemCount;
    if (normalizedIdx !== lastCenterIndex.current) {
      lastCenterIndex.current = normalizedIdx;
      if (isUserInteracting.current) {
        playTick();
      }
      onCenterChange?.(normalizedIdx);
    }
  }, [itemCount, onCenterChange]);

  // Listen for native scroll events (catches touch scroll on mobile)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      resetIfNeeded();
      updateCenter();
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [resetIfNeeded, updateCenter]);

  // Auto scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = singleWidth;

    let raf: number;
    const animate = () => {
      if (!isPaused.current && !isDragging.current && el) {
        el.scrollLeft += autoSpeed.current;
        resetIfNeeded();
        updateCenter();
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [singleWidth, resetIfNeeded, updateCenter]);

  const markInteracting = useCallback(() => {
    isUserInteracting.current = true;
    isPaused.current = true;
    clearTimeout(interactionTimeout.current);
  }, []);

  const unmarkInteracting = useCallback(() => {
    clearTimeout(interactionTimeout.current);
    interactionTimeout.current = setTimeout(() => {
      isUserInteracting.current = false;
      isPaused.current = false;
    }, 400);
  }, []);

  const onMouseEnter = useCallback(() => {
    isPaused.current = true;
  }, []);
  const onMouseLeave = useCallback(() => {
    isPaused.current = false;
    isDragging.current = false;
    isUserInteracting.current = false;
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    // Only manually control scroll on non-touch (let touch use native scroll)
    isDragging.current = e.pointerType !== "touch";
    hasDragged.current = false;
    markInteracting();
    dragStartX.current = e.clientX;
    dragScrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
  }, [markInteracting]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const dx = e.clientX - dragStartX.current;
    if (Math.abs(dx) > 5) hasDragged.current = true;
    scrollRef.current.scrollLeft = dragScrollLeft.current - dx;
  }, []);

  const onPointerUp = useCallback(() => {
    isDragging.current = false;
    unmarkInteracting();
  }, [unmarkInteracting]);

  const onTouchStart = useCallback(() => {
    markInteracting();
  }, [markInteracting]);

  const onTouchEnd = useCallback(() => {
    unmarkInteracting();
  }, [unmarkInteracting]);

  // Wheel scroll for desktop
  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const el = scrollRef.current;
    if (!el) return;
    markInteracting();
    el.scrollLeft += e.deltaY + e.deltaX;
    unmarkInteracting();
  }, [markInteracting, unmarkInteracting]);

  return {
    scrollRef,
    hasDragged,
    onMouseEnter,
    onMouseLeave,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onTouchStart,
    onTouchEnd,
    onWheel,
  };
}



/* ── Card with 3D coverflow transform ── */
function CoverflowCard({
  work,
  index,
  scrollRef,
  onClick,
}: {
  work: { src: string; title: string; category: string };
  index: number;
  scrollRef: React.RefObject<HTMLDivElement>;
  onClick: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ scale: 0.75, rotateY: 0, translateZ: 0, opacity: 0.6 });

  useEffect(() => {
    const el = scrollRef.current;
    const card = cardRef.current;
    if (!el || !card) return;

    let raf: number;
    const update = () => {
      const containerCenter = el.scrollLeft + el.clientWidth / 2;
      const cardCenter = card.offsetLeft + CARD_WIDTH / 2;
      const distance = cardCenter - containerCenter;
      const maxDist = el.clientWidth / 2;
      const normalized = Math.max(-1, Math.min(1, distance / maxDist));
      const absNorm = Math.abs(normalized);

      const scale = 1 - absNorm * 0.35;
      const rotateY = normalized * -45;
      const translateZ = (1 - absNorm) * 50;
      const opacity = 1 - absNorm * 0.5;

      setTransform({ scale, rotateY, translateZ, opacity });
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [scrollRef, index]);

  return (
    <div
      ref={cardRef}
      data-card-index={index}
      className="group relative flex-shrink-0 cursor-pointer select-none bg-secondary"
      style={{
        width: `${CARD_WIDTH}px`,
        padding: "18px 4px",
        transform: `perspective(1000px) rotateY(${transform.rotateY}deg) scale(${transform.scale}) translateZ(${transform.translateZ}px)`,
        opacity: transform.opacity,
        transition: "opacity 0.1s ease-out",
        transformStyle: "preserve-3d",
        zIndex: Math.round(transform.scale * 100),
      }}
      onClick={onClick}
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
        <p className="font-body text-[10px] uppercase tracking-[0.3em] text-primary">{work.category}</p>
        <p className="mt-1 font-display text-xl italic text-foreground">{work.title}</p>
      </div>
    </div>
  );
}

/* ── Main component ── */
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

  const openLightbox = useCallback(
    (index: number) => {
      setLightboxIndex(((index % works.length) + works.length) % works.length);
    },
    [works.length]
  );

  const controls = useCoverflowScroll(works.length);

  const lightbox = lightboxIndex !== null ? works[lightboxIndex] : null;
  const lightboxTouchX = useRef(0);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % works.length : null));
  }, [works.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + works.length) % works.length : null));
  }, [works.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, goNext, goPrev]);

  // Render 3x copies for infinite scrolling
  const tripled = [...works, ...works, ...works];

  return (
    <section id="portfolio" className="px-0 py-12 md:py-24 overflow-hidden">
      <div className="mb-8 md:mb-16 text-center px-6">
        <p className="mb-3 font-body text-xs uppercase tracking-[0.4em] text-primary">{t("portfolioLabel")}</p>
        <h2 className="font-display text-4xl font-medium italic text-foreground md:text-5xl">{t("portfolioTitle")}</h2>
      </div>

      {/* Coverflow carousel */}
      <div
        ref={controls.scrollRef}
        className="flex items-center cursor-grab overflow-x-auto [&::-webkit-scrollbar]:hidden"
        style={{
          scrollbarWidth: "none",
          gap: `${CARD_GAP}px`,
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
        onMouseEnter={controls.onMouseEnter}
        onMouseLeave={controls.onMouseLeave}
        onPointerDown={controls.onPointerDown}
        onPointerMove={controls.onPointerMove}
        onPointerUp={controls.onPointerUp}
        onWheel={controls.onWheel}
      >
        {tripled.map((work, i) => (
          <CoverflowCard
            key={i}
            work={work}
            index={i % works.length}
            scrollRef={controls.scrollRef as React.RefObject<HTMLDivElement>}
            onClick={() => {
              if (!controls.hasDragged.current) {
                openLightbox(i % works.length);
              }
            }}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-background/90 backdrop-blur-sm animate-fade-in"
          style={{ zIndex: 9999 }}
          onClick={() => setLightboxIndex(null)}
          onTouchStart={(e) => {
            lightboxTouchX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const dx = e.changedTouches[0].clientX - lightboxTouchX.current;
            if (Math.abs(dx) > 50) {
              e.stopPropagation();
              if (dx < 0) goNext();
              else goPrev();
            }
          }}
        >
          <button
            className="absolute top-6 right-6 text-foreground/70 hover:text-foreground transition-colors z-50"
            onClick={() => setLightboxIndex(null)}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground transition-colors z-50 p-2"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
          >
            <ChevronLeft size={40} />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground transition-colors z-50 p-2"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
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
              <p className="font-body text-[10px] uppercase tracking-[0.3em] text-primary">{lightbox.category}</p>
              <p className="mt-1 font-display text-2xl italic text-foreground">{lightbox.title}</p>
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
