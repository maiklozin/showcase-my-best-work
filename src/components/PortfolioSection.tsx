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
import { useCallback, useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const CARD_WIDTH = 260;
const CARD_GAP = 16;
const STEP = CARD_WIDTH + CARD_GAP;
const PERF_COUNT = 12;
const AUTO_SCROLL_PX_PER_SECOND = 36;
const AUTO_SCROLL_RESUME_DELAY_MS = 900;
const MAX_ANIMATION_FRAME_MS = 32;
const TICK_COOLDOWN_MS = 55;
const MAX_BURST_TICKS = 4;

type PortfolioWork = {
  src: string;
  title: string;
  category: string;
};

type WindowWithWebkitAudio = Window &
  typeof globalThis & {
    webkitAudioContext?: typeof AudioContext;
  };

const tickAudio = {
  ctx: null as AudioContext | null,
  buffer: null as AudioBuffer | null,
  unlocked: false,
  lastPlayAt: 0,
};

function getAudioContextCtor() {
  if (typeof window === "undefined") {
    return null;
  }

  const audioWindow = window as WindowWithWebkitAudio;
  return audioWindow.AudioContext ?? audioWindow.webkitAudioContext ?? null;
}

function createTickBuffer(ctx: AudioContext) {
  const bufferSize = Math.floor(ctx.sampleRate * 0.012);
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i += 1) {
    const decay = 1 - i / bufferSize;
    data[i] = (Math.random() * 2 - 1) * decay * decay;
  }

  return buffer;
}

function ensureTickAudioContext() {
  const AudioContextCtor = getAudioContextCtor();

  if (!AudioContextCtor) {
    return null;
  }

  if (!tickAudio.ctx) {
    tickAudio.ctx = new AudioContextCtor();
  }

  if (!tickAudio.buffer) {
    tickAudio.buffer = createTickBuffer(tickAudio.ctx);
  }

  return tickAudio.ctx;
}

function warmupTickAudio(ctx: AudioContext) {
  const silentBuffer = ctx.createBuffer(1, 1, 22050);
  const source = ctx.createBufferSource();
  const gain = ctx.createGain();

  source.buffer = silentBuffer;
  gain.gain.value = 0.00001;

  source.connect(gain);
  gain.connect(ctx.destination);
  source.start(ctx.currentTime);
}

function unlockTickAudio() {
  try {
    const ctx = ensureTickAudioContext();

    if (!ctx) {
      return;
    }

    if (ctx.state !== "running") {
      void ctx
        .resume()
        .then(() => {
          tickAudio.unlocked = ctx.state === "running";
          warmupTickAudio(ctx);
        })
        .catch(() => {
          tickAudio.unlocked = false;
        });
      return;
    }

    tickAudio.unlocked = true;
    warmupTickAudio(ctx);
  } catch {
    tickAudio.unlocked = false;
  }
}

function playTick(delaySeconds = 0) {
  try {
    const ctx = ensureTickAudioContext();

    if (!ctx || !tickAudio.buffer || !tickAudio.unlocked || ctx.state !== "running") {
      return;
    }

    const now = performance.now();
    if (delaySeconds === 0 && now - tickAudio.lastPlayAt < TICK_COOLDOWN_MS) {
      return;
    }

    if (delaySeconds === 0) {
      tickAudio.lastPlayAt = now;
    }

    const source = ctx.createBufferSource();
    source.buffer = tickAudio.buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 3000;
    filter.Q.value = 1.5;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.15, ctx.currentTime + delaySeconds);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delaySeconds + 0.015);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    source.start(ctx.currentTime + delaySeconds);
  } catch {
    // Ignore audio failures on unsupported browsers.
  }
}

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

function useCoverflowScroll(itemCount: number, renderedCount: number, onCenterChange?: (index: number) => void) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const hasDragged = useRef(false);
  const lastCenterIndex = useRef(-1);
  const lastCenterPosition = useRef<number | null>(null);
  const isPaused = useRef(false);
  const interactionTimeout = useRef<ReturnType<typeof setTimeout>>();
  const lastAnimationFrameAt = useRef(0);
  const touchStartX = useRef(0);
  const touchStartScrollLeft = useRef(0);

  const singleWidth = itemCount * STEP;

  const setCardRef = useCallback((node: HTMLDivElement | null, position: number) => {
    cardRefs.current[position] = node;
  }, []);

  const resetIfNeeded = useCallback(() => {
    const el = scrollRef.current;

    if (!el) {
      return;
    }

    if (el.scrollLeft >= singleWidth * 2) {
      el.scrollLeft -= singleWidth;
    } else if (el.scrollLeft < singleWidth * 0.5) {
      el.scrollLeft += singleWidth;
    }
  }, [singleWidth]);

  const updateCardTransforms = useCallback(() => {
    const el = scrollRef.current;

    if (!el) {
      return;
    }

    const containerCenter = el.scrollLeft + el.clientWidth / 2;
    const maxDist = Math.max(el.clientWidth / 2, STEP);

    for (let position = 0; position < renderedCount; position += 1) {
      const card = cardRefs.current[position];

      if (!card) {
        continue;
      }

      const cardCenter = position * STEP + CARD_WIDTH / 2;
      const distance = cardCenter - containerCenter;
      const normalized = Math.max(-1.25, Math.min(1.25, distance / maxDist));
      const absNorm = Math.abs(normalized);
      const scale = Math.max(0.72, 1 - absNorm * 0.35);
      const rotateY = normalized * -45;
      const translateZ = Math.max(0, (1 - Math.min(absNorm, 1)) * 50);
      const opacity = Math.max(0.35, 1 - absNorm * 0.5);

      card.style.transform = `perspective(1000px) rotateY(${rotateY}deg) scale(${scale}) translateZ(${translateZ}px)`;
      card.style.opacity = opacity.toFixed(3);
      card.style.zIndex = String(Math.round((1.5 - absNorm) * 100));
    }
  }, [renderedCount]);

  const updateCenter = useCallback(() => {
    const el = scrollRef.current;

    if (!el) {
      return;
    }

    const center = el.scrollLeft + el.clientWidth / 2;
    const idx = Math.round(center / STEP) % itemCount;
    const normalizedIdx = ((idx % itemCount) + itemCount) % itemCount;

    if (lastCenterIndex.current === -1) {
      lastCenterIndex.current = normalizedIdx;
      lastCenterPosition.current = center;
      onCenterChange?.(normalizedIdx);
      return;
    }

    if (normalizedIdx !== lastCenterIndex.current) {
      let movement = 0;

      if (lastCenterPosition.current !== null) {
        movement = center - lastCenterPosition.current;

        if (movement > singleWidth / 2) {
          movement -= singleWidth;
        } else if (movement < -singleWidth / 2) {
          movement += singleWidth;
        }
      }

      const crossedSteps = Math.max(
        1,
        Math.min(MAX_BURST_TICKS, Math.round(Math.abs(movement) / STEP) || 1)
      );

      for (let tickIndex = 0; tickIndex < crossedSteps; tickIndex += 1) {
        playTick(tickIndex * 0.018);
      }

      lastCenterIndex.current = normalizedIdx;
      onCenterChange?.(normalizedIdx);
    }

    lastCenterPosition.current = center;
  }, [itemCount, onCenterChange, singleWidth]);

  const syncFromScroll = useCallback(() => {
    resetIfNeeded();
    updateCenter();
    updateCardTransforms();
  }, [resetIfNeeded, updateCenter, updateCardTransforms]);

  const pauseAutoScroll = useCallback(() => {
    isPaused.current = true;
    clearTimeout(interactionTimeout.current);
  }, []);

  const resumeAutoScroll = useCallback((delay = AUTO_SCROLL_RESUME_DELAY_MS) => {
    clearTimeout(interactionTimeout.current);
    interactionTimeout.current = setTimeout(() => {
      if (!isDragging.current && !document.hidden) {
        isPaused.current = false;
      }
    }, delay);
  }, []);

  const beginInteraction = useCallback(() => {
    unlockTickAudio();
    pauseAutoScroll();
  }, [pauseAutoScroll]);

  useEffect(() => {
    const unlockOnFirstGesture = () => {
      unlockTickAudio();
    };

    window.addEventListener("pointerdown", unlockOnFirstGesture, { passive: true });
    window.addEventListener("touchstart", unlockOnFirstGesture, { passive: true });
    window.addEventListener("keydown", unlockOnFirstGesture);

    return () => {
      window.removeEventListener("pointerdown", unlockOnFirstGesture);
      window.removeEventListener("touchstart", unlockOnFirstGesture);
      window.removeEventListener("keydown", unlockOnFirstGesture);
    };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;

    if (!el) {
      return;
    }

    el.scrollLeft = singleWidth;
    syncFromScroll();

    let raf = 0;

    const animate = (timestamp: number) => {
      const previousFrameAt = lastAnimationFrameAt.current || timestamp;
      const deltaMs = Math.min(timestamp - previousFrameAt, MAX_ANIMATION_FRAME_MS);
      lastAnimationFrameAt.current = timestamp;

      if (!document.hidden && !isPaused.current && !isDragging.current) {
        el.scrollLeft += AUTO_SCROLL_PX_PER_SECOND * (deltaMs / 1000);
        syncFromScroll();
      }

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(raf);
      lastAnimationFrameAt.current = 0;
      clearTimeout(interactionTimeout.current);
    };
  }, [singleWidth, syncFromScroll]);

  useEffect(() => {
    const el = scrollRef.current;

    if (!el) {
      return;
    }

    const onScroll = () => {
      syncFromScroll();
    };

    el.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      el.removeEventListener("scroll", onScroll);
    };
  }, [syncFromScroll]);

  useEffect(() => {
    const handleResize = () => {
      syncFromScroll();
    };

    const handleVisibilityChange = () => {
      lastAnimationFrameAt.current = 0;

      if (!document.hidden) {
        syncFromScroll();
        resumeAutoScroll(120);
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [resumeAutoScroll, syncFromScroll]);

  const onMouseEnter = useCallback(() => {
    pauseAutoScroll();
  }, [pauseAutoScroll]);

  const onMouseLeave = useCallback(() => {
    resumeAutoScroll(120);
  }, [resumeAutoScroll]);

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      beginInteraction();
      hasDragged.current = false;
      dragStartX.current = e.clientX;
      dragScrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
      isDragging.current = e.pointerType !== "touch";

      if (isDragging.current) {
        e.currentTarget.setPointerCapture?.(e.pointerId);
      }
    },
    [beginInteraction]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging.current || !scrollRef.current) {
        return;
      }

      const dx = e.clientX - dragStartX.current;

      if (Math.abs(dx) > 4) {
        hasDragged.current = true;
      }

      scrollRef.current.scrollLeft = dragScrollLeft.current - dx;
      syncFromScroll();
    },
    [syncFromScroll]
  );

  const endPointerInteraction = useCallback(
    (e?: React.PointerEvent<HTMLDivElement>) => {
      if (e?.currentTarget.hasPointerCapture?.(e.pointerId)) {
        e.currentTarget.releasePointerCapture?.(e.pointerId);
      }

      isDragging.current = false;
      resumeAutoScroll();
    },
    [resumeAutoScroll]
  );

  const onTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    beginInteraction();
    touchStartX.current = e.touches[0]?.clientX ?? 0;
    touchStartScrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
  }, [beginInteraction]);

  const onTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    const touchX = e.touches[0]?.clientX ?? 0;

    if (touchStartX.current === 0) {
      touchStartX.current = touchX;
      return;
    }

    const currentScrollLeft = scrollRef.current?.scrollLeft ?? touchStartScrollLeft.current;
    const horizontalDelta = Math.abs(touchX - touchStartX.current);
    const scrollDelta = Math.abs(currentScrollLeft - touchStartScrollLeft.current);

    if (horizontalDelta > 4 || scrollDelta > 4) {
      hasDragged.current = true;
    }
  }, []);

  const onTouchEnd = useCallback(() => {
    touchStartX.current = 0;
    resumeAutoScroll();
  }, [resumeAutoScroll]);

  const onWheel = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      e.preventDefault();

      const el = scrollRef.current;

      if (!el) {
        return;
      }

      beginInteraction();
      el.scrollLeft += e.deltaY + e.deltaX;
      syncFromScroll();
      resumeAutoScroll(500);
    },
    [beginInteraction, resumeAutoScroll, syncFromScroll]
  );

  return {
    scrollRef,
    setCardRef,
    hasDragged,
    onMouseEnter,
    onMouseLeave,
    onPointerDown,
    onPointerMove,
    onPointerUp: endPointerInteraction,
    onPointerCancel: endPointerInteraction,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel: onTouchEnd,
    onWheel,
  };
}

function CoverflowCard({
  work,
  cardPosition,
  setCardRef,
  onClick,
}: {
  work: PortfolioWork;
  cardPosition: number;
  setCardRef: (node: HTMLDivElement | null, position: number) => void;
  onClick: () => void;
}) {
  return (
    <div
      ref={(node) => setCardRef(node, cardPosition)}
      data-card-position={cardPosition}
      className="group relative flex-shrink-0 cursor-pointer select-none bg-secondary"
      style={{
        width: `${CARD_WIDTH}px`,
        padding: "18px 4px",
        transform: "perspective(1000px) scale(0.75)",
        opacity: 0.6,
        transition: "opacity 0.12s linear",
        transformStyle: "preserve-3d",
        willChange: "transform, opacity",
        zIndex: 1,
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

const PortfolioSection = () => {
  const { t } = useI18n();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const works: PortfolioWork[] = [
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

  const tripled = [...works, ...works, ...works];
  const controls = useCoverflowScroll(works.length, tripled.length);
  const lightbox = lightboxIndex !== null ? works[lightboxIndex] : null;
  const lightboxTouchX = useRef(0);

  const openLightbox = useCallback(
    (index: number) => {
      setLightboxIndex(((index % works.length) + works.length) % works.length);
    },
    [works.length]
  );

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % works.length : null));
  }, [works.length]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + works.length) % works.length : null));
  }, [works.length]);

  useEffect(() => {
    if (lightboxIndex === null) {
      return;
    }

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goNext();
      } else if (e.key === "ArrowLeft") {
        goPrev();
      } else if (e.key === "Escape") {
        setLightboxIndex(null);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [goNext, goPrev, lightboxIndex]);

  return (
    <section id="portfolio" className="overflow-hidden px-0 py-12 md:py-24">
      <div className="mb-8 px-6 text-center md:mb-16">
        <p className="mb-3 font-body text-xs uppercase tracking-[0.4em] text-primary">{t("portfolioLabel")}</p>
        <h2 className="font-display text-4xl font-medium italic text-foreground md:text-5xl">{t("portfolioTitle")}</h2>
      </div>

      <div
        ref={controls.scrollRef}
        className="flex items-center cursor-grab overflow-x-auto [&::-webkit-scrollbar]:hidden"
        style={{
          scrollbarWidth: "none",
          gap: `${CARD_GAP}px`,
          paddingTop: "40px",
          paddingBottom: "40px",
          overflowY: "hidden",
          overscrollBehaviorX: "contain",
          WebkitOverflowScrolling: "auto",
          scrollBehavior: "auto",
        }}
        onMouseEnter={controls.onMouseEnter}
        onMouseLeave={controls.onMouseLeave}
        onPointerDown={controls.onPointerDown}
        onPointerMove={controls.onPointerMove}
        onPointerUp={controls.onPointerUp}
        onPointerCancel={controls.onPointerCancel}
        onTouchStart={controls.onTouchStart}
        onTouchMove={controls.onTouchMove}
        onTouchEnd={controls.onTouchEnd}
        onTouchCancel={controls.onTouchCancel}
        onWheel={controls.onWheel}
      >
        {tripled.map((work, i) => (
          <CoverflowCard
            key={i}
            work={work}
            cardPosition={i}
            setCardRef={controls.setCardRef}
            onClick={() => {
              if (!controls.hasDragged.current) {
                openLightbox(i % works.length);
              }
            }}
          />
        ))}
      </div>

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

              if (dx < 0) {
                goNext();
              } else {
                goPrev();
              }
            }
          }}
        >
          <button
            className="absolute right-6 top-6 z-50 text-foreground/70 transition-colors hover:text-foreground"
            onClick={() => setLightboxIndex(null)}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-4 top-1/2 z-50 -translate-y-1/2 p-2 text-foreground/50 transition-colors hover:text-foreground"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
          >
            <ChevronLeft size={40} />
          </button>

          <button
            className="absolute right-4 top-1/2 z-50 -translate-y-1/2 p-2 text-foreground/50 transition-colors hover:text-foreground"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
          >
            <ChevronRight size={40} />
          </button>

          <div className="flex max-h-[85vh] max-w-[90vw] flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              key={lightboxIndex}
              src={lightbox.src}
              alt={lightbox.title}
              className="max-h-[75vh] max-w-full animate-scale-in object-contain"
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
