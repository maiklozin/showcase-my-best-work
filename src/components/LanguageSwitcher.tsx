import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { Language, languageNames } from "@/i18n/translations";
import { quietCtaSecondaryClass } from "@/lib/ctaStyles";
import { getSiteCopy } from "@/lib/siteCopy";
import { Globe } from "lucide-react";
import { useLocation } from "react-router-dom";

const languages: Language[] = ["en", "es", "de", "fr", "ru", "zh"];

const LanguageSwitcher = () => {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const showBookingCta = location.pathname === "/";
  const copy = getSiteCopy(lang);

  return (
    <div className="fixed right-4 top-4 z-50 flex items-center gap-1.5 md:right-6 md:top-6 md:gap-2">
      {showBookingCta ? (
        <a
          href="/contact#booking"
          className={`${quietCtaSecondaryClass} bg-background/34 backdrop-blur-md`}
        >
          {copy.nav.booking}
        </a>
      ) : null}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex min-h-[40px] items-center gap-1.5 whitespace-nowrap rounded-full border border-border/70 bg-background/72 px-3 py-2 font-body text-[10px] uppercase tracking-[0.16em] text-foreground/88 backdrop-blur-md transition-all duration-300 ease-out hover:border-primary/42 hover:bg-background/82 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 sm:min-h-[42px] sm:px-3.5 sm:text-[11px] sm:tracking-[0.2em]"
        >
          <Globe size={14} />
          {languageNames[lang]}
        </button>
        {open && (
          <div className="absolute right-0 mt-1 min-w-[140px] border border-border bg-background/95 backdrop-blur-md">
            {languages.map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setOpen(false); }}
                className={`block w-full px-4 py-2.5 text-left font-body text-xs tracking-wider transition-colors hover:bg-secondary ${
                  l === lang ? "text-primary" : "text-foreground"
                }`}
              >
                {languageNames[l]}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
