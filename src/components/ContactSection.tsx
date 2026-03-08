import { useI18n } from "@/i18n/I18nProvider";
import InstagramIcon from "@/components/InstagramIcon";

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
        className="group inline-flex items-center gap-4 rounded-xl border-2 border-primary bg-primary/10 px-10 py-5 font-body uppercase tracking-[0.3em] text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
      >
        <InstagramIcon size={36} className="transition-transform duration-300 group-hover:scale-110" />
        <span className="text-xl font-bold md:text-2xl">@dara__es_</span>
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
