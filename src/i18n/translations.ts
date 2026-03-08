export type Language = "en" | "es" | "de" | "fr" | "ru" | "zh";

export const languageNames: Record<Language, string> = {
  en: "English",
  es: "Español",
  de: "Deutsch",
  fr: "Français",
  ru: "Русский",
  zh: "中文",
};

type TranslationKeys = {
  heroSubtitle: string;
  heroCategories: string;
  viewPortfolio: string;
  portfolioLabel: string;
  portfolioTitle: string;
  contactLabel: string;
  contactTitle: string;
  contactDescription: string;
  copyright: string;
  // portfolio item categories
  catEditorial: string;
  catBeauty: string;
  catRunway: string;
  catHauteCouture: string;
  catCommercial: string;
  // portfolio item titles
  workVogue: string;
  workBeauty: string;
  workMilan: string;
  workStreet: string;
  workNoir: string;
  workSummer: string;
};

export const translations: Record<Language, TranslationKeys> = {
  en: {
    heroSubtitle: "Fashion Model",
    heroCategories: "Haute Couture · Editorial · Runway",
    viewPortfolio: "View Portfolio ↓",
    portfolioLabel: "Selected Works",
    portfolioTitle: "Portfolio",
    contactLabel: "Contact",
    contactTitle: "Get in Touch",
    contactDescription: "Open for collaboration with brands, photographers, and agencies. Reach out via Instagram.",
    copyright: "© 2026 Dara · All rights reserved",
    catEditorial: "Editorial",
    catBeauty: "Beauty",
    catRunway: "Runway",
    catHauteCouture: "Haute Couture",
    catCommercial: "Commercial",
    workVogue: "Vogue Editorial",
    workBeauty: "Beauty Campaign",
    workMilan: "Milan Fashion Week",
    workStreet: "Street Style",
    workNoir: "Noir Collection",
    workSummer: "Summer Campaign",
  },
  es: {
    heroSubtitle: "Modelo de Moda",
    heroCategories: "Alta Costura · Editorial · Pasarela",
    viewPortfolio: "Ver Portafolio ↓",
    portfolioLabel: "Obras Selectas",
    portfolioTitle: "Portafolio",
    contactLabel: "Contacto",
    contactTitle: "Contáctame",
    contactDescription: "Abierta a colaboraciones con marcas, fotógrafos y agencias. Contáctame por Instagram.",
    copyright: "© 2026 Dara · Todos los derechos reservados",
    catEditorial: "Editorial",
    catBeauty: "Belleza",
    catRunway: "Pasarela",
    catHauteCouture: "Alta Costura",
    catCommercial: "Comercial",
    workVogue: "Editorial Vogue",
    workBeauty: "Campaña de Belleza",
    workMilan: "Semana de la Moda de Milán",
    workStreet: "Estilo Urbano",
    workNoir: "Colección Noir",
    workSummer: "Campaña de Verano",
  },
  de: {
    heroSubtitle: "Fashion Model",
    heroCategories: "Haute Couture · Editorial · Laufsteg",
    viewPortfolio: "Portfolio ansehen ↓",
    portfolioLabel: "Ausgewählte Arbeiten",
    portfolioTitle: "Portfolio",
    contactLabel: "Kontakt",
    contactTitle: "Kontakt aufnehmen",
    contactDescription: "Offen für Zusammenarbeit mit Marken, Fotografen und Agenturen. Kontaktiere mich über Instagram.",
    copyright: "© 2026 Dara · Alle Rechte vorbehalten",
    catEditorial: "Editorial",
    catBeauty: "Beauty",
    catRunway: "Laufsteg",
    catHauteCouture: "Haute Couture",
    catCommercial: "Kommerziell",
    workVogue: "Vogue Editorial",
    workBeauty: "Beauty-Kampagne",
    workMilan: "Mailänder Modewoche",
    workStreet: "Street Style",
    workNoir: "Noir Kollektion",
    workSummer: "Sommer-Kampagne",
  },
  fr: {
    heroSubtitle: "Mannequin",
    heroCategories: "Haute Couture · Éditorial · Défilé",
    viewPortfolio: "Voir le Portfolio ↓",
    portfolioLabel: "Œuvres Sélectionnées",
    portfolioTitle: "Portfolio",
    contactLabel: "Contact",
    contactTitle: "Me Contacter",
    contactDescription: "Ouverte aux collaborations avec des marques, photographes et agences. Contactez-moi sur Instagram.",
    copyright: "© 2026 Dara · Tous droits réservés",
    catEditorial: "Éditorial",
    catBeauty: "Beauté",
    catRunway: "Défilé",
    catHauteCouture: "Haute Couture",
    catCommercial: "Commercial",
    workVogue: "Éditorial Vogue",
    workBeauty: "Campagne Beauté",
    workMilan: "Semaine de la Mode de Milan",
    workStreet: "Style de Rue",
    workNoir: "Collection Noir",
    workSummer: "Campagne Été",
  },
  ru: {
    heroSubtitle: "Фэшн-модель",
    heroCategories: "Высокая мода · Эдиториал · Подиум",
    viewPortfolio: "Смотреть портфолио ↓",
    portfolioLabel: "Избранное",
    portfolioTitle: "Портфолио",
    contactLabel: "Контакты",
    contactTitle: "Связаться со мной",
    contactDescription: "Открыта для сотрудничества с брендами, фотографами и агентствами. Свяжитесь через Instagram.",
    copyright: "© 2026 Dara · Все права защищены",
    catEditorial: "Эдиториал",
    catBeauty: "Бьюти",
    catRunway: "Подиум",
    catHauteCouture: "Высокая мода",
    catCommercial: "Коммерция",
    workVogue: "Vogue Эдиториал",
    workBeauty: "Бьюти-кампания",
    workMilan: "Неделя моды в Милане",
    workStreet: "Уличный стиль",
    workNoir: "Коллекция Noir",
    workSummer: "Летняя кампания",
  },
  zh: {
    heroSubtitle: "时尚模特",
    heroCategories: "高级定制 · 编辑拍摄 · 走秀",
    viewPortfolio: "查看作品集 ↓",
    portfolioLabel: "精选作品",
    portfolioTitle: "作品集",
    contactLabel: "联系方式",
    contactTitle: "联系我",
    contactDescription: "欢迎与品牌、摄影师和经纪公司合作。请通过 Instagram 联系我。",
    copyright: "© 2026 Dara · 保留所有权利",
    catEditorial: "编辑拍摄",
    catBeauty: "美妆",
    catRunway: "走秀",
    catHauteCouture: "高级定制",
    catCommercial: "商业拍摄",
    workVogue: "Vogue 编辑拍摄",
    workBeauty: "美妆广告",
    workMilan: "米兰时装周",
    workStreet: "街拍风格",
    workNoir: "Noir 系列",
    workSummer: "夏季广告",
  },
};
