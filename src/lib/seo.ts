import { Language } from "@/i18n/translations";
import { getSiteCopy } from "@/lib/siteCopy";

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
    title: "Dara Model | Modelo de moda en Mallorca, España",
    description:
      "Modelo de moda con base en Mallorca, España. Disponible para editoriales, campañas comerciales, pasarela, sesiones de boda y colaboraciones con marcas en España y Europa.",
    introEyebrow: "Portafolio de modelo en Mallorca",
    introTitle: "Modelo de moda para editoriales, campañas, pasarela y sesiones de boda",
    introBody:
      "Dara es una modelo profesional con base en Mallorca, España, con experiencia en semanas de la moda, campañas publicitarias, contenido para redes sociales y producciones fotográficas en España y Europa.",
    facts: [
      { label: "Servicios", value: "Editorial, comercial, pasarela, bodas y campañas de marca" },
      { label: "Ubicación", value: "Mallorca, España, con desplazamiento por España y Europa" },
      { label: "Contacto", value: "Reservas y colaboraciones por Instagram @dara__es_" },
    ],
  },
  de: {
    locale: "de_DE",
    title: "Dara Model | Mode-Model auf Mallorca, Spanien",
    description:
      "Mode-Model mit Basis auf Mallorca, Spanien. Verfügbar für Editorials, Kampagnen, Laufsteg, Hochzeits-Shootings und Markenkooperationen in Spanien und Europa.",
    introEyebrow: "Model-Portfolio auf Mallorca",
    introTitle: "Mode-Model für Editorial, Kampagnen, Laufsteg und Hochzeitsprojekte",
    introBody:
      "Dara ist ein professionelles Mode-Model mit Basis auf Mallorca, Spanien, mit Erfahrung in Modewochen, Werbekampagnen, Social-Media-Content und Fotoproduktionen in Spanien und Europa.",
    facts: [
      { label: "Leistungen", value: "Editorial, kommerziell, Laufsteg, Hochzeiten und Brand-Kampagnen" },
      { label: "Standort", value: "Mallorca, Spanien, mit Reisen in Spanien und Europa" },
      { label: "Kontakt", value: "Bookings und Kooperationen über Instagram @dara__es_" },
    ],
  },
  fr: {
    locale: "fr_FR",
    title: "Dara Model | Mannequin mode à Majorque, Espagne",
    description:
      "Mannequin mode basée à Majorque, Espagne. Disponible pour éditoriaux, campagnes commerciales, défilés, shootings mariage et collaborations de marque en Espagne et en Europe.",
    introEyebrow: "Portfolio mannequin à Majorque",
    introTitle: "Mannequin mode pour l'éditorial, les campagnes, les défilés et les projets mariage",
    introBody:
      "Dara est un mannequin professionnel basé à Majorque, Espagne, avec de l'expérience dans les semaines de la mode, les campagnes publicitaires, le contenu pour les réseaux sociaux et les productions photo en Espagne et en Europe.",
    facts: [
      { label: "Prestations", value: "Éditorial, commercial, défilé, mariage et campagnes de marque" },
      { label: "Localisation", value: "Majorque, Espagne, avec déplacements en Espagne et en Europe" },
      { label: "Contact", value: "Réservations et collaborations via Instagram @dara__es_" },
    ],
  },
  ru: {
    locale: "ru_RU",
    title: "Dara Model | Фэшн-модель на Майорке, Испания",
    description:
      "Фэшн-модель с базой на Майорке, Испания. Доступна для эдиториалов, коммерческих кампаний, показов, свадебных съёмок и бренд-коллабораций по всей Испании и Европе.",
    introEyebrow: "Портфолио модели на Майорке",
    introTitle: "Фэшн-модель для эдиториала, коммерческих проектов, подиума и свадебных съёмок",
    introBody:
      "Dara — профессиональная фэшн-модель с базой на Майорке, Испания, с опытом недель моды, рекламных кампаний, контента для соцсетей и фотопродакшена по всей Испании и Европе.",
    facts: [
      { label: "Услуги", value: "Эдиториал, коммерция, подиум, свадебные съёмки и бренд-кампании" },
      { label: "Локация", value: "Майорка, Пальма-де-Майорка и выезды по Испании и Европе" },
      { label: "Контакт", value: "Бронирования и коллаборации через Instagram @dara__es_" },
    ],
  },
  zh: {
    locale: "zh_CN",
    title: "Dara Model | 西班牙马略卡岛时尚模特",
    description:
      "常驻西班牙马略卡岛的时尚模特，可承接编辑拍摄、商业广告、走秀、婚纱拍摄以及品牌合作，服务范围覆盖西班牙与欧洲。",
    introEyebrow: "马略卡岛模特作品集",
    introTitle: "适用于编辑拍摄、商业广告、走秀与婚纱项目的时尚模特",
    introBody:
      "Dara 是常驻西班牙马略卡岛的专业时尚模特，拥有时装周、广告活动、社交媒体内容和摄影制作经验，工作范围覆盖西班牙与欧洲。",
    facts: [
      { label: "服务", value: "编辑拍摄、商业广告、走秀、婚纱项目与品牌合作" },
      { label: "地点", value: "马略卡岛、帕尔马以及西班牙与欧洲其他地区" },
      { label: "联系", value: "预约与合作请通过 Instagram @dara__es_" },
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

const getBasePersonNode = (lang: Language) => ({
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Dara Model",
  url: `${SITE_URL}/`,
  jobTitle: "Fashion Model",
  image: OG_IMAGE_URL,
  description: seoByLanguage[lang].description,
  homeLocation: {
    "@type": "Place",
    name: getSiteCopy(lang).aboutSection.locationValue,
  },
  knowsLanguage: ["English", "Spanish", "Russian", "German"],
  sameAs: ["https://instagram.com/dara__es_"],
  worksFor: {
    "@type": "Organization",
    name: "Independent model",
  },
});

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
  siteDescription: string,
  lang: Language,
): Record<string, unknown> | null => {
  if (page === "notFound") {
    return null;
  }

  if (page === "home") {
    return {
      "@context": "https://schema.org",
      "@graph": [
        baseWebsiteNode(siteDescription),
        getBasePersonNode(lang),
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
      baseWebsiteNode(siteDescription),
      getBasePersonNode(lang),
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
  const siteCopy = getSiteCopy(lang);

  if (page === "home") {
    return {
      pathname: "/",
      title: copy.title,
      description: copy.description,
      robots: DEFAULT_ROBOTS,
      type: "website",
      imageUrl: OG_IMAGE_URL,
      locale: copy.locale,
      structuredData: buildStructuredData("home", copy.title, copy.description, "/", copy.description, lang),
    };
  }

  if (page === "about") {
    const title = `${siteCopy.aboutPage.title} | Dara Model`;
    const description = siteCopy.aboutPage.description;
    return {
      pathname: "/about",
      title,
      description,
      robots: DEFAULT_ROBOTS,
      type: "profile",
      imageUrl: OG_IMAGE_URL,
      locale: copy.locale,
      structuredData: buildStructuredData("about", title, description, "/about", copy.description, lang),
    };
  }

  if (page === "portfolio") {
    const title = `${siteCopy.portfolioPage.title} | Dara Model`;
    const description = siteCopy.portfolioPage.description;
    return {
      pathname: "/portfolio",
      title,
      description,
      robots: DEFAULT_ROBOTS,
      type: "website",
      imageUrl: OG_IMAGE_URL,
      locale: copy.locale,
      structuredData: buildStructuredData("portfolio", title, description, "/portfolio", copy.description, lang),
    };
  }

  if (page === "contact") {
    const title = `${siteCopy.contactPage.title} | Dara Model`;
    const description = siteCopy.contactPage.description;
    return {
      pathname: "/contact",
      title,
      description,
      robots: DEFAULT_ROBOTS,
      type: "website",
      imageUrl: OG_IMAGE_URL,
      locale: copy.locale,
      structuredData: buildStructuredData("contact", title, description, "/contact", copy.description, lang),
    };
  }

  const title = siteCopy.notFound.title;
  const description = siteCopy.notFound.description;
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
