import { NavLink } from "@/components/NavLink";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Dara" },
  { to: "/portfolio", label: "Model Portfolio" },
  { to: "/contact", label: "Contact" },
];

const SiteHeaderNav = () => {
  return (
    <nav
      aria-label="Primary"
      className="fixed left-6 top-6 z-50 hidden max-w-[calc(100vw-18rem)] flex-wrap items-center gap-2 md:flex"
    >
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className="border border-border bg-background/80 px-4 py-2 font-body text-[11px] uppercase tracking-[0.25em] text-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
          activeClassName="border-primary text-primary"
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default SiteHeaderNav;
