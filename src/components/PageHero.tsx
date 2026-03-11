import { ReactNode } from "react";
import heroImage from "@/assets/hero.jpg";
import { NavLink } from "@/components/NavLink";
import { quietCtaPrimaryClass, quietCtaSecondaryClass } from "@/lib/ctaStyles";

type PageHeroLink = {
  href?: string;
  to?: string;
  label: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  icon?: ReactNode;
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
        <h1 className="max-w-4xl font-display text-4xl font-medium italic leading-[1.05] text-foreground sm:text-5xl md:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl font-body text-sm leading-relaxed text-secondary-foreground md:text-base">
          {description}
        </p>
        <div className="mt-7 flex max-w-lg flex-wrap items-center gap-2">
          {links.map((link) => (
            link.href ? (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={
                  link.variant === "primary"
                    ? quietCtaPrimaryClass
                    : quietCtaSecondaryClass
                }
              >
                {link.icon ? <span className="shrink-0 opacity-90">{link.icon}</span> : null}
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.to}
                to={link.to ?? "/"}
                className={
                  link.variant === "primary"
                    ? quietCtaPrimaryClass
                    : quietCtaSecondaryClass
                }
              >
                {link.icon ? <span className="shrink-0 opacity-90">{link.icon}</span> : null}
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
