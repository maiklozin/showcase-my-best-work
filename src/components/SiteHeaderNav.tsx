import { NavLink } from "@/components/NavLink";
import { useI18n } from "@/i18n/I18nProvider";
import { HOME_PORTFOLIO_HREF, SITE_PATHS } from "@/lib/routes";
import { getSiteCopy } from "@/lib/siteCopy";
import { useLocation } from "react-router-dom";

const SiteHeaderNav = () => {
  const { lang } = useI18n();
  const location = useLocation();
  const portfolioHref = location.pathname === SITE_PATHS.home ? "#portfolio" : HOME_PORTFOLIO_HREF;
  const copy = getSiteCopy(lang);
  const links = [
    { to: SITE_PATHS.home, label: copy.nav.home },
    { to: SITE_PATHS.about, label: copy.nav.about },
    { anchor: "portfolio", label: copy.nav.portfolio },
    { to: SITE_PATHS.contact, label: copy.nav.contact },
  ];

  return (
    <nav
      aria-label="Primary"
      className="fixed left-4 right-28 top-4 z-50 flex flex-wrap items-center gap-1.5 md:left-6 md:right-32 md:top-6 md:gap-2"
    >
      {links.map((link) => (
        link.anchor ? (
          <a
            key={link.anchor}
            href={portfolioHref}
            className="inline-flex items-center justify-center border border-border bg-background/80 px-2.5 py-2 text-center font-body text-[9px] uppercase tracking-[0.18em] text-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary sm:px-4 sm:text-[11px] sm:tracking-[0.22em]"
          >
            {link.label}
          </a>
        ) : (
          <NavLink
            key={link.to}
            to={link.to ?? "/"}
            className="inline-flex items-center justify-center border border-border bg-background/80 px-2.5 py-2 text-center font-body text-[9px] uppercase tracking-[0.18em] text-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary sm:px-4 sm:text-[11px] sm:tracking-[0.22em]"
            activeClassName="border-primary text-primary"
          >
            {link.label}
          </NavLink>
        )
      ))}
    </nav>
  );
};

export default SiteHeaderNav;
