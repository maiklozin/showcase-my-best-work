import heroImage from "@/assets/hero.jpg";
import { NavLink } from "@/components/NavLink";

type PageHeroLink = {
  href?: string;
  to?: string;
  label: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageAlt: string;
  links: PageHeroLink[];
};

const PageHero = ({ eyebrow, title, description, imageAlt, links }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden border-b border-border px-6 pb-20 pt-32 md:px-12 lg:px-24">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt={imageAlt}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/65" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="mb-4 font-body text-xs uppercase tracking-[0.4em] text-primary">{eyebrow}</p>
        <h1 className="max-w-4xl font-display text-5xl font-medium italic text-foreground md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-secondary-foreground">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {links.map((link) => (
            link.href ? (
              <a
                key={link.href}
                href={link.href}
                className="border border-border bg-background/70 px-5 py-3 font-body text-[11px] uppercase tracking-[0.24em] text-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.to}
                to={link.to ?? "/"}
                className="border border-border bg-background/70 px-5 py-3 font-body text-[11px] uppercase tracking-[0.24em] text-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary"
              >
                {link.label}
              </NavLink>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
