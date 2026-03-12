import { NavLink } from "@/components/NavLink";
import { useI18n } from "@/i18n/I18nProvider";
import { quietCtaTertiaryClass } from "@/lib/ctaStyles";
import { HOME_PORTFOLIO_HREF, SITE_PATHS } from "@/lib/routes";
import { getSiteCopy } from "@/lib/siteCopy";
import { useLocation } from "react-router-dom";

const SiteFooterLinks = () => {
  const { lang } = useI18n();
  const location = useLocation();
  const portfolioHref = location.pathname === SITE_PATHS.home ? "#portfolio" : HOME_PORTFOLIO_HREF;
  const copy = getSiteCopy(lang);
  const links = [
    { to: SITE_PATHS.about, label: copy.nav.about },
    { anchor: "portfolio", label: copy.nav.portfolio },
    { to: SITE_PATHS.contact, label: copy.nav.contact },
  ];

  return (
    <nav
      aria-label="Footer"
      className="flex flex-wrap items-center justify-center gap-3"
    >
      {links.map((link) => (
        link.anchor ? (
          <a
            key={link.anchor}
            href={portfolioHref}
            className={`${quietCtaTertiaryClass} bg-background/18 backdrop-blur-sm`}
          >
            {link.label}
          </a>
        ) : (
          <NavLink
            key={link.to}
            to={link.to ?? "/"}
            className={`${quietCtaTertiaryClass} bg-background/18 backdrop-blur-sm`}
            activeClassName="border-primary/24 bg-background/32 text-primary"
          >
            {link.label}
          </NavLink>
        )
      ))}
    </nav>
  );
};

export default SiteFooterLinks;
