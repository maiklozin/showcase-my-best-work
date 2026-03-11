import { NavLink } from "@/components/NavLink";

const links = [
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

const SiteFooterLinks = () => {
  return (
    <nav
      aria-label="Footer"
      className="flex flex-wrap items-center justify-center gap-3"
    >
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className="border border-border bg-background/60 px-4 py-2 font-body text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          activeClassName="border-primary text-primary"
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default SiteFooterLinks;
