export const SITE_PATHS = {
  home: "/",
  about: "/about/",
  portfolio: "/portfolio/",
  contact: "/contact/",
} as const;

export const HOME_PORTFOLIO_HREF = "/#portfolio";
export const CONTACT_BOOKING_HREF = `${SITE_PATHS.contact}#booking`;

export const normalizeSitePath = (pathname: string) =>
  pathname === SITE_PATHS.home ? SITE_PATHS.home : pathname.replace(/\/+$/, "");
