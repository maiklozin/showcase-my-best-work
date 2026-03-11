import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";

const links = [
  { to: "/about", label: "About" },
  { anchor: "portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

const SiteFooterLinks = () => {
  const location = useLocation();
  const portfolioHref = location.pathname === "/" ? "#portfolio" : "/#portfolio";

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
            className="border border-border bg-background/60 px-4 py-2 font-body text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {link.label}
          </a>
        ) : (
          <NavLink
            key={link.to}
            to={link.to ?? "/"}
            className="border border-border bg-background/60 px-4 py-2 font-body text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
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
