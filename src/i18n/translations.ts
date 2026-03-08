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
  catEditorial: string;
  catBeauty: string;
  catRunway: string;
  catHauteCouture: string;
  catCommercial: string;
  catLifestyle: string;
  workVogue: string;
  workBeauty: string;
  workMilan: string;
  workStreet: string;
  workNoir: string;
  workSummer: string;
  workOcean: string;
  workPortrait: string;
  workDesert: string;
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
    catLifestyle: "Lifestyle",
    workVogue: "Urban Editorial",
    workBeauty: "Studio Session",
    workMilan: "Glamour Portrait",
    workStreet: "Marina Collection",
    workNoir: "Roses & Sunset",
    workSummer: "Boho Spirit",
    workOcean: "Ocean Breeze",
    workPortrait: "Natural Beauty",
    workDesert: "Desert Noir",
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
    catLifestyle: "Estilo de vida",
    workVogue: "Editorial Urbano",
    workBeauty: "Sesión de Estudio",
    workMilan: "Retrato Glamour",
    workStreet: "Colección Marina",
    workNoir: "Rosas & Atardecer",
    workSummer: "Espíritu Boho",
    workOcean: "Brisa del Mar",
    workPortrait: "Belleza Natural",
    workDesert: "Desierto Noir",
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
    catLifestyle: "Lifestyle",
    workVogue: "Urban Editorial",
    workBeauty: "Studio-Session",
    workMilan: "Glamour-Porträt",
    workStreet: "Marina Kollektion",
    workNoir: "Rosen & Sonnenuntergang",
    workSummer: "Boho Spirit",
    workOcean: "Meeresbrise",
    workPortrait: "Natürliche Schönheit",
    workDesert: "Wüsten-Noir",
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
    catLifestyle: "Style de vie",
    workVogue: "Éditorial Urbain",
    workBeauty: "Séance Studio",
    workMilan: "Portrait Glamour",
    workStreet: "Collection Marina",
    workNoir: "Roses & Coucher de Soleil",
    workSummer: "Esprit Bohème",
    workOcean: "Brise Marine",
    workPortrait: "Beauté Naturelle",
    workDesert: "Désert Noir",
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
    catLifestyle: "Лайфстайл",
    workVogue: "Городской эдиториал",
    workBeauty: "Студийная съёмка",
    workMilan: "Гламурный портрет",
    workStreet: "Коллекция Marina",
    workNoir: "Розы & Закат",
    workSummer: "Бохо-стиль",
    workOcean: "Морской бриз",
    workPortrait: "Естественная красота",
    workDesert: "Пустынный нуар",
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
    catLifestyle: "生活方式",
    workVogue: "城市编辑拍摄",
    workBeauty: "工作室拍摄",
    workMilan: "魅力肖像",
    workStreet: "游艇系列",
    workNoir: "玫瑰与日落",
    workSummer: "波西米亚风",
    workOcean: "海风",
    workPortrait: "自然之美",
    workDesert: "沙漠暗黑",
  },
};
