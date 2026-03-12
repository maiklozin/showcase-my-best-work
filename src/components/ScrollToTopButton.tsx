import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";
import FloatingActionButton from "@/components/FloatingActionButton";
import { SITE_PATHS } from "@/lib/routes";

const SCROLL_THRESHOLD = 480;

const ScrollToTopButton = () => {
  const { pathname } = useLocation();
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    let ticking = false;

    const updateVisibility = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  if (!isMounted || pathname !== SITE_PATHS.home) {
    return null;
  }

  return (
    <FloatingActionButton
      ariaLabel="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      visible={isVisible}
    >
      <ArrowUp size={18} />
    </FloatingActionButton>
  );
};

export default ScrollToTopButton;
