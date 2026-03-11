import { NavLink } from "@/components/NavLink";
import { useI18n } from "@/i18n/I18nProvider";
import { getSiteCopy } from "@/lib/siteCopy";
import { useLocation } from "react-router-dom";

const SiteFooterLinks = () => {
  const { lang } = useI18n();
  const location = useLocation();
  const portfolioHref = location.pathname === "/" ? "#portfolio" : "/#portfolio";
  const copy = getSiteCopy(lang);
  const links = [
    { to: "/about", label: copy.nav.about },
    { anchor: "portfolio", label: copy.nav.portfolio },
    { to: "/contact", label: copy.nav.contact },
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
            className="inline-flex items-center justify-center border border-border bg-background/60 px-4 py-2 text-center font-body text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {link.label}
          </a>
        ) : (
          <NavLink
            key={link.to}
            to={link.to ?? "/"}
            className="inline-flex items-center justify-center border border-border bg-background/60 px-4 py-2 text-center font-body text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            activeClassName="border-primary text-primary"
          >
            {link.label}
          </NavLink>
        )
      ))}
    </nav>
  );
};

export default SiteFooterLinks;
