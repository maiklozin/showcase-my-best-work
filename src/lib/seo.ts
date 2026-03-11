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
      "Fashion model based in Mallorca, Spain. Available for editorials, commercial campaigns, runway shows, bridal shoots, and brand collaborations across Spain and Europe.",
    introEyebrow: "Model Portfolio in Mallorca",
    introTitle: "Fashion model for editorial, commercial, runway, and bridal projects",
    introBody:
      "Dara is a professional fashion model based in Mallorca, Spain, with experience in fashion weeks, advertising campaigns, social media content, and photo productions across Spain and Europe.",
    facts: [
      { label: "Services", value: "Editorial, commercial, runway, bridal, and brand campaigns" },
      { label: "Location", value: "Mallorca, Spain, with travel across Spain and Europe" },
      { label: "Contact", value: "Bookings and collaborations via Instagram @dara__es_" },
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
