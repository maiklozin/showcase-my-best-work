import { Instagram } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const ContactSection = () => {
  const { t } = useI18n();

  return (
    <section className="border-t border-border px-6 py-24 text-center">
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
        className="inline-flex items-center gap-3 border border-instagram px-8 py-3.5 font-body text-xs uppercase tracking-[0.3em] text-instagram transition-colors duration-300 hover:bg-instagram hover:text-instagram-foreground"
      >
        <Instagram size={16} />
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
