import { useI18n } from "@/i18n/I18nProvider";
import InstagramIcon from "@/components/InstagramIcon";
import SiteFooterLinks from "@/components/SiteFooterLinks";
import { quietSocialChipClass, quietSocialHandleClass } from "@/lib/ctaStyles";
import { INSTAGRAM_HANDLE, INSTAGRAM_PROFILE_URL } from "@/lib/social";
import { getSiteCopy } from "@/lib/siteCopy";

const ContactSection = () => {
  const { lang, t } = useI18n();
  const copy = getSiteCopy(lang);

  return (
    <section id="contact" className="border-t border-border px-6 py-12 text-center md:py-24">
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
        href={INSTAGRAM_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={quietSocialChipClass}
      >
        <InstagramIcon size={16} className="transition-transform duration-300 group-hover:scale-105" />
        <span className={quietSocialHandleClass}>{INSTAGRAM_HANDLE}</span>
      </a>
      <div className="mt-14">
        <p className="mb-4 font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {copy.contactSection.exploreHeading}
        </p>
        <SiteFooterLinks />
      </div>
      <div className="mt-24 pb-6">
        <p className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {t("copyright")}
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
