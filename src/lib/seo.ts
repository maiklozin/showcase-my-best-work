import { Language } from "@/i18n/translations";

export const SITE_URL = "https://daramodel.com";
export const DEFAULT_ROBOTS =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
export const OG_IMAGE_URL = `${SITE_URL}/og-image.jpg`;
export const OG_IMAGE_ALT =
  "Dara Model social preview with fashion portrait, Mallorca location, and booking details.";
export const OG_IMAGE_TYPE = "image/jpeg";
export const OG_IMAGE_WIDTH = "1200";
export const OG_IMAGE_HEIGHT = "630";
export type SeoPageKey = "home" | "about" | "portfolio" | "contact" | "notFound";

type SeoFact = {
  label: string;
  value: string;
};

type SeoCopy = {
  locale: string;
  title: string;
  description: string;
  introEyebrow: string;
  introTitle: string;
  introBody: string;
  facts: SeoFact[];
};

export const seoByLanguage: Record<Language, SeoCopy> = {
  en: {
    locale: "en_US",
    title: "Dara Model | Fashion Model in Mallorca, Spain",
    description:
      "Fashion model based in Mallorca and available in Palma de Mallorca, Spain. Open for editorials, commercial campaigns, runway shows, bridal shoots, and brand collaborations across Spain and Europe.",
    introEyebrow: "Fashion Model in Mallorca",
    introTitle: "Fashion model portfolio for editorial, commercial, and runway work in Mallorca",
    introBody:
      "Dara is a professional fashion model based in Mallorca and available in Palma de Mallorca for editorials, commercial productions, brand campaigns, bridal shoots, and runway work across Spain and Europe.",
    facts: [
      { label: "Services", value: "Editorial, commercial, runway, bridal, and brand campaigns" },
      { label: "Location", value: "Mallorca, Palma de Mallorca, and travel across Spain and Europe" },
      { label: "Portfolio", value: "Fashion model portfolio with beauty, editorial, commercial, and haute couture work" },
    ],
  },
  es: {
    locale: "es_ES",
    title: "Dara Model | Modelo de moda en Mallorca, Espana",
    description:
      "Modelo de moda con base en Mallorca, Espana. Disponible para editoriales, campanas comerciales, pasarela, sesiones de boda y colaboraciones con marcas en Espana y Europa.",
    introEyebrow: "Portafolio de modelo en Mallorca",
    introTitle: "Modelo de moda para editoriales, campanas, pasarela y sesiones de boda",
    introBody:
      "Dara es una modelo profesional con base en Mallorca, Espana, con experiencia en fashion weeks, campanas publicitarias, contenido para redes sociales y producciones fotograficas en Espana y Europa.",
    facts: [
      { label: "Servicios", value: "Editorial, comercial, pasarela, bridal y campanas de marca" },
      { label: "Ubicacion", value: "Mallorca, Espana, con desplazamiento por Espana y Europa" },
      { label: "Contacto", value: "Reservas y colaboraciones por Instagram @dara__es_" },
    ],
  },
  de: {
    locale: "de_DE",
    title: "Dara Model | Fashion Model auf Mallorca, Spanien",
    description:
      "Fashion Model mit Basis auf Mallorca, Spanien. Verfugbar fur Editorials, Kampagnen, Laufsteg, Bridal-Shootings und Markenkooperationen in Spanien und Europa.",
    introEyebrow: "Model-Portfolio auf Mallorca",
    introTitle: "Fashion Model fur Editorial, Kampagnen, Laufsteg und Bridal-Projekte",
    introBody:
      "Dara ist ein professionelles Fashion Model mit Basis auf Mallorca, Spanien, mit Erfahrung in Fashion Weeks, Werbekampagnen, Social-Media-Content und Fotoproduktionen in Spanien und Europa.",
    facts: [
      { label: "Leistungen", value: "Editorial, kommerziell, Laufsteg, Bridal und Brand-Kampagnen" },
      { label: "Standort", value: "Mallorca, Spanien, mit Reisen in Spanien und Europa" },
      { label: "Kontakt", value: "Bookings und Kooperationen uber Instagram @dara__es_" },
    ],
  },
  fr: {
    locale: "fr_FR",
    title: "Dara Model | Mannequin mode a Majorque, Espagne",
    description:
      "Mannequin mode basee a Majorque, Espagne. Disponible pour editoriaux, campagnes commerciales, defiles, shootings mariage et collaborations de marque en Espagne et en Europe.",
    introEyebrow: "Portfolio mannequin a Majorque",
    introTitle: "Mannequin mode pour editorial, campagnes, defiles et projets mariage",
    introBody:
      "Dara est un mannequin professionnel base a Majorque, Espagne, avec de l'experience dans les fashion weeks, les campagnes publicitaires, le contenu social media et les productions photo en Espagne et en Europe.",
    facts: [
      { label: "Services", value: "Editorial, commercial, defiles, bridal et campagnes de marque" },
      { label: "Localisation", value: "Majorque, Espagne, avec deplacements en Espagne et en Europe" },
      { label: "Contact", value: "Reservations et collaborations via Instagram @dara__es_" },
    ],
  },
  ru: {
    locale: "ru_RU",
    title: "Dara Model | Fashion model in Mallorca, Spain",
    description:
      "Fashion model based in Mallorca, Spain. Available for editorials, commercial campaigns, runway shows, bridal shoots, and brand collaborations across Spain and Europe.",
    introEyebrow: "Model portfolio in Mallorca",
    introTitle: "Fashion model for editorial, commercial, runway, and bridal projects",
    introBody:
      "Dara is a professional fashion model based in Mallorca, Spain, with experience in fashion weeks, advertising campaigns, social media content, and photo productions across Spain and Europe.",
    facts: [
      { label: "Services", value: "Editorial, commercial, runway, bridal, and brand campaigns" },
      { label: "Location", value: "Mallorca, Spain, with travel across Spain and Europe" },
      { label: "Contact", value: "Bookings and collaborations via Instagram @dara__es_" },
    ],
  },
  zh: {
    locale: "zh_CN",
    title: "Dara Model | Fashion Model in Mallorca, Spain",
    description:
      "Fashion model based in Mallorca, Spain. Available for editorials, commercial campaigns, runway shows, bridal shoots, and brand collaborations across Spain and Europe.",
    introEyebrow: "Model portfolio in Mallorca",
    introTitle: "Fashion model for editorial, commercial, runway, and bridal projects",
    introBody:
      "Dara is a professional fashion model based in Mallorca, Spain, with experience in fashion weeks, advertising campaigns, social media content, and photo productions across Spain and Europe.",
    facts: [
      { label: "Services", value: "Editorial, commercial, runway, bridal, and brand campaigns" },
      { label: "Location", value: "Mallorca, Spain, with travel across Spain and Europe" },
      { label: "Contact", value: "Bookings and collaborations via Instagram @dara__es_" },
    ],
  },
};

export const getSeoCopy = (lang: Language) => seoByLanguage[lang] ?? seoByLanguage.en;

type PageSeo = {
  pathname: string;
  title: string;
  description: string;
  robots: string;
  type: string;
  imageUrl: string | null;
  locale: string;
  structuredData: Record<string, unknown> | null;
};

type PrerenderRoute = {
  page: SeoPageKey;
  pathname: string;
  outputPath: string;
};

export const PRERENDER_ROUTES: PrerenderRoute[] = [
  { page: "home", pathname: "/", outputPath: "index.html" },
  { page: "about", pathname: "/about", outputPath: "about/index.html" },
  { page: "portfolio", pathname: "/portfolio", outputPath: "portfolio/index.html" },
  { page: "contact", pathname: "/contact", outputPath: "contact/index.html" },
];

export const getSeoPageFromPath = (pathname: string): SeoPageKey => {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");

  switch (normalizedPath) {
    case "/":
      return "home";
    case "/about":
      return "about";
    case "/portfolio":
      return "portfolio";
    case "/contact":
      return "contact";
    default:
      return "notFound";
  }
};

const baseWebsiteNode = (description: string) => ({
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: "Dara Model",
  image: OG_IMAGE_URL,
  description,
});

const basePersonNode = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Dara Model",
  url: `${SITE_URL}/`,
  jobTitle: "Fashion Model",
  image: OG_IMAGE_URL,
  description:
    "Professional fashion model based in Mallorca, Spain, working on editorial, runway, commercial, bridal, and social media projects.",
  homeLocation: {
    "@type": "Place",
    name: "Mallorca, Spain",
  },
  knowsLanguage: ["English", "Spanish", "Russian", "German"],
  sameAs: ["https://instagram.com/dara__es_"],
  worksFor: {
    "@type": "Organization",
    name: "Independent model",
  },
};

const primaryImageNode = {
  "@type": "ImageObject",
  "@id": `${SITE_URL}/#primaryimage`,
  url: OG_IMAGE_URL,
  width: Number(OG_IMAGE_WIDTH),
  height: Number(OG_IMAGE_HEIGHT),
  encodingFormat: OG_IMAGE_TYPE,
  caption: OG_IMAGE_ALT,
};

const buildStructuredData = (
  page: SeoPageKey,
  title: string,
  description: string,
  pathname: string,
): Record<string, unknown> | null => {
  if (page === "notFound") {
    return null;
  }

  if (page === "home") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        baseWebsiteNode(description),
        basePersonNode,
        primaryImageNode,
        {
          "@type": "WebPage",
          "@id": `${SITE_URL}/#webpage`,
          url: `${SITE_URL}/`,
          name: title,
          description,
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#person` },
          primaryImageOfPage: { "@id": `${SITE_URL}/#primaryimage` },
        },
      ],
    };
  }

  const pageType =
    page === "about" ? "AboutPage" : page === "portfolio" ? "CollectionPage" : "ContactPage";

  return {
    "@context": "https://schema.org",
    "@graph": [
      baseWebsiteNode(seoByLanguage.en.description),
      basePersonNode,
      primaryImageNode,
      {
        "@type": pageType,
        "@id": `${SITE_URL}${pathname}#webpage`,
        url: `${SITE_URL}${pathname}`,
        name: title,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#person` },
        primaryImageOfPage: { "@id": `${SITE_URL}/#primaryimage` },
      },
    ],
  };
};

export const getPageSeo = (page: SeoPageKey, lang: Language = "en"): PageSeo => {
  const copy = getSeoCopy(lang);

  if (page === "home") {
    return {
      pathname: "/",
      title: copy.title,
      description: copy.description,
      robots: DEFAULT_ROBOTS,
      type: "website",
      imageUrl: OG_IMAGE_URL,
      locale: copy.locale,
      structuredData: buildStructuredData("home", copy.title, copy.description, "/"),
    };
  }

  if (page === "about") {
    const title = "About Dara Model | Fashion Model in Mallorca, Spain";
    const description =
      "Learn about Dara, a fashion model based in Mallorca and available in Palma de Mallorca for editorials, commercial campaigns, runway shows, and bridal shoots across Spain and Europe.";
    return {
      pathname: "/about",
      title,
      description,
      robots: DEFAULT_ROBOTS,
      type: "profile",
      imageUrl: OG_IMAGE_URL,
      locale: copy.locale,
      structuredData: buildStructuredData("about", title, description, "/about"),
    };
  }

  if (page === "portfolio") {
    const title = "Portfolio | Dara Model Fashion Model Portfolio";
    const description =
      "Explore Dara Model's fashion portfolio with editorial, commercial, beauty, runway, and haute couture work in Mallorca, Palma de Mallorca, and across Spain.";
    return {
      pathname: "/portfolio",
      title,
      description,
      robots: DEFAULT_ROBOTS,
      type: "website",
      imageUrl: OG_IMAGE_URL,
      locale: copy.locale,
      structuredData: buildStructuredData("portfolio", title, description, "/portfolio"),
    };
  }

  if (page === "contact") {
    const title = "Contact Dara Model | Bookings in Mallorca and Spain";
    const description =
      "Contact Dara Model for editorials, commercial campaigns, bridal shoots, runway bookings, and brand collaborations in Mallorca, Palma de Mallorca, and across Spain.";
    return {
      pathname: "/contact",
      title,
      description,
      robots: DEFAULT_ROBOTS,
      type: "website",
      imageUrl: OG_IMAGE_URL,
      locale: copy.locale,
      structuredData: buildStructuredData("contact", title, description, "/contact"),
    };
  }

  const title = "Page Not Found | Dara Model";
  const description = "The page you requested does not exist on daramodel.com.";
  return {
    pathname: "/404",
    title,
    description,
    robots: "noindex, nofollow",
    type: "website",
    imageUrl: OG_IMAGE_URL,
    locale: copy.locale,
    structuredData: null,
  };
};
