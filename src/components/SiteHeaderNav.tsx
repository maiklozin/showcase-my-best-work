import { NavLink } from "@/components/NavLink";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

const SiteHeaderNav = () => {
  return (
    <nav
      aria-label="Primary"
      className="fixed left-4 right-28 top-4 z-50 flex flex-wrap items-center gap-2 md:left-6 md:right-32 md:top-6"
    >
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className="border border-border bg-background/80 px-3 py-2 font-body text-[10px] uppercase tracking-[0.22em] text-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary sm:px-4 sm:text-[11px]"
          activeClassName="border-primary text-primary"
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default SiteHeaderNav;
