import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { Language, languageNames } from "@/i18n/translations";
import { Globe } from "lucide-react";
import { useLocation } from "react-router-dom";

const languages: Language[] = ["en", "es", "de", "fr", "ru", "zh"];

const LanguageSwitcher = () => {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const showBookingCta = location.pathname === "/";

  return (
    <div className="fixed right-4 top-4 z-50 flex items-center gap-2 md:right-6 md:top-6">
      {showBookingCta ? (
        <a
          href="/contact#booking"
          className="border border-primary bg-primary/10 px-3 py-2 font-body text-[10px] uppercase tracking-[0.22em] text-primary backdrop-blur-md transition-colors hover:bg-primary hover:text-primary-foreground sm:px-4 sm:text-[11px]"
        >
          Booking
        </a>
      ) : null}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 border border-border bg-background/80 px-4 py-2 font-body text-xs uppercase tracking-wider text-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
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
