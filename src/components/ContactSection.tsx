import { useI18n } from "@/i18n/I18nProvider";

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ig-gradient" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-gradient)" strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="5" stroke="url(#ig-gradient)" strokeWidth="2" fill="none" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="url(#ig-gradient)" />
  </svg>
);

const ContactSection = () => {
  const { t } = useI18n();

  return (
    <section className="border-t border-border px-6 py-12 md:py-24 text-center">
      <p className="mb-3 font-body text-xs uppercase tracking-[0.4em] text-primary">
        {t("contactLabel")}
      </p>
      <h2 className="mb-8 font-display text-4xl font-medium italic text-foreground md:text-5xl">
        {t("contactTitle")}
      </h2>
      <p className="mx-auto mb-10 max-w-md font-body text-sm font-light leading-relaxed text-muted-foreground">
        {t("contactDescription")}
      </p>
      <a
        href="https://instagram.com/dara__es_"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 border border-primary px-8 py-3.5 font-body text-xs uppercase tracking-[0.3em] text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
      >
        <InstagramIcon size={18} />
        @dara__es_
      </a>
      <div className="mt-24 pb-6">
        <p className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {t("copyright")}
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
