import { Language } from "@/i18n/translations";

type SiteCopy = {
  nav: {
    home: string;
    about: string;
    portfolio: string;
    contact: string;
    booking: string;
  };
  cta: {
    viewPortfolio: string;
    contactOnInstagram: string;
  };
  booking: {
    waitBeforeRetry: string;
    errorTitle: string;
    errorDescription: string;
    sending: string;
  };
  notFound: {
    message: string;
    returnHome: string;
  };
  home: {
    aboutLink: string;
    contactLink: string;
  };
  aboutPage: {
    eyebrow: string;
    title: string;
    description: string;
    imageAlt: string;
    sectionTitle: string;
    body1: string;
    body2: string;
    basedTitle: string;
    basedBody: string;
    workTitle: string;
    workBody: string;
    nextTitle: string;
    nextBody: string;
    footerHeading: string;
  };
  portfolioPage: {
    eyebrow: string;
    title: string;
    description: string;
    imageAlt: string;
    introTitle: string;
    introBody: string;
    editorialTitle: string;
    editorialBody: string;
    commercialTitle: string;
    commercialBody: string;
    runwayTitle: string;
    runwayBody: string;
    footerHeading: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    description: string;
    imageAlt: string;
    sectionTitle: string;
    sectionBody: string;
    enquiriesTitle: string;
    enquiriesBody: string;
    baseLocationTitle: string;
    baseLocationBody: string;
    planningTitle: string;
    planningBody: string;
  };
  contactSection: {
    exploreHeading: string;
  };
};

const siteCopyByLanguage: Record<Language, SiteCopy> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      contact: "Contact",
      booking: "Booking",
    },
    cta: {
      viewPortfolio: "View Portfolio",
      contactOnInstagram: "Contact on Instagram",
    },
    booking: {
      waitBeforeRetry: "Please wait before submitting again.",
      errorTitle: "Error",
      errorDescription: "Could not save booking. Please try via Instagram.",
      sending: "Sending...",
    },
    notFound: {
      message: "Oops! Page not found",
      returnHome: "Return to Home",
    },
    home: {
      aboutLink: "About",
      contactLink: "Contact",
    },
    aboutPage: {
      eyebrow: "About Dara Model",
      title: "Fashion model based in Mallorca, available in Palma de Mallorca",
      description:
        "Dara works across editorials, commercial campaigns, bridal shoots, runway bookings, and branded content for clients in Mallorca, Palma de Mallorca, Spain, and Europe.",
      imageAlt: "Dara Model portrait introducing the About page.",
      sectionTitle: "Editorial and commercial model in Spain",
      body1:
        "Dara combines a fashion-forward portfolio with experience on editorial shoots, commercial productions, runway presentations, and bridal projects. Her work is tailored for brands, photographers, agencies, and creative teams looking for polished imagery with a luxury feel.",
      body2:
        "Based in Mallorca and available in Palma de Mallorca, Dara is open to collaborations throughout Spain and Europe, including campaign work, showroom content, social media productions, and destination shoots.",
      basedTitle: "Based in Mallorca",
      basedBody: "Available in Palma de Mallorca and for travel across Spain and Europe.",
      workTitle: "Typical work",
      workBody: "Fashion editorials, commercial campaigns, beauty imagery, bridal shoots, and runway bookings.",
      nextTitle: "Next step",
      nextBody: "Explore the fashion model portfolio or get in touch for availability, rates, and production details.",
      footerHeading: "Explore More",
    },
    portfolioPage: {
      eyebrow: "Dara Model Portfolio",
      title: "Fashion model portfolio for editorial, commercial, beauty, and runway work",
      description:
        "A curated portfolio from Mallorca and Palma de Mallorca, featuring fashion editorials, commercial productions, beauty imagery, bridal work, and couture looks.",
      imageAlt: "Dara Model portfolio page hero portrait.",
      introTitle: "Selected editorial and commercial model portfolio",
      introBody:
        "A focused selection of editorial, commercial, beauty, and haute couture imagery from Dara Model's portfolio in Mallorca, Palma de Mallorca, and wider Spain.",
      editorialTitle: "Editorial",
      editorialBody:
        "Fashion editorials with a luxury mood, strong portrait presence, and location-aware storytelling for magazines, photographers, and creative teams.",
      commercialTitle: "Commercial",
      commercialBody:
        "Commercial model work for brands that need polished campaign imagery, social media content, and adaptable visual direction in Mallorca and across Spain.",
      runwayTitle: "Runway",
      runwayBody:
        "Runway, showroom, and couture presentation work supported by experience with fashion week, event production, and client-facing presentations.",
      footerHeading: "Continue Browsing",
    },
    contactPage: {
      eyebrow: "Contact Dara Model",
      title: "Bookings and collaborations in Mallorca, Palma de Mallorca, and Spain",
      description:
        "For bookings, collaborations, and availability, Instagram is the fastest way to reach Dara. Share your dates, location, and project details there or continue below with the booking form.",
      imageAlt: "Dara Model contact page portrait.",
      sectionTitle: "Contact Dara for fashion, commercial, and bridal bookings",
      sectionBody:
        "The fastest way to discuss availability is through the booking form below or Instagram. Share your shoot dates, location, concept, and production details so the project can be scoped clearly from the start.",
      enquiriesTitle: "Typical enquiries",
      enquiriesBody:
        "Editorial shoots, commercial campaigns, bridal imagery, brand content, showroom work, runway bookings, and destination productions.",
      baseLocationTitle: "Base location",
      baseLocationBody: "Mallorca and Palma de Mallorca, with travel across Spain and Europe.",
      planningTitle: "Best for planning",
      planningBody: "Include dates, timing, location, usage, and any moodboard references to speed up the booking conversation.",
    },
    contactSection: {
      exploreHeading: "Explore Dara Model",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      portfolio: "Portfolio",
      contact: "Contacto",
      booking: "Reserva",
    },
    cta: {
      viewPortfolio: "Ver portfolio",
      contactOnInstagram: "Contactar en Instagram",
    },
    booking: {
      waitBeforeRetry: "Espera un momento antes de enviar otra vez.",
      errorTitle: "Error",
      errorDescription: "No se pudo guardar la solicitud. Prueba por Instagram.",
      sending: "Enviando...",
    },
    notFound: {
      message: "Ups, la página no existe",
      returnHome: "Volver al inicio",
    },
    home: {
      aboutLink: "Sobre mí",
      contactLink: "Contacto",
    },
    aboutPage: {
      eyebrow: "Sobre Dara Model",
      title: "Modelo de moda con base en Mallorca, disponible en Palma de Mallorca",
      description:
        "Dara trabaja en editoriales, campañas comerciales, sesiones bridal, bookings de pasarela y contenido para marcas en Mallorca, Palma de Mallorca, España y Europa.",
      imageAlt: "Retrato de Dara Model para la página Sobre mí.",
      sectionTitle: "Modelo editorial y comercial en España",
      body1:
        "Dara combina un portfolio de moda con experiencia en editoriales, producciones comerciales, pasarela y proyectos bridal. Su trabajo está pensado para marcas, fotógrafos, agencias y equipos creativos que buscan una imagen pulida y de lujo.",
      body2:
        "Con base en Mallorca y disponible en Palma de Mallorca, Dara está abierta a colaboraciones en toda España y Europa, incluyendo campañas, contenido para showroom, producciones para redes sociales y shootings de destino.",
      basedTitle: "Base en Mallorca",
      basedBody: "Disponible en Palma de Mallorca y para viajar por España y Europa.",
      workTitle: "Trabajo habitual",
      workBody: "Editoriales de moda, campañas comerciales, beauty, bridal y bookings de pasarela.",
      nextTitle: "Siguiente paso",
      nextBody: "Explora el portfolio de moda o ponte en contacto para disponibilidad, tarifas y detalles de producción.",
      footerHeading: "Seguir explorando",
    },
    portfolioPage: {
      eyebrow: "Portfolio de Dara Model",
      title: "Portfolio de modelo de moda para editorial, comercial, beauty y pasarela",
      description:
        "Una selección cuidada desde Mallorca y Palma de Mallorca con editoriales de moda, producciones comerciales, beauty, bridal y looks de alta costura.",
      imageAlt: "Retrato de Dara Model para la página de portfolio.",
      introTitle: "Selección editorial y comercial del portfolio",
      introBody:
        "Una selección enfocada de imágenes editoriales, comerciales, beauty y haute couture del portfolio de Dara Model en Mallorca, Palma de Mallorca y el resto de España.",
      editorialTitle: "Editorial",
      editorialBody:
        "Editoriales de moda con atmósfera de lujo, presencia fuerte en retrato y narrativa visual pensada para revistas, fotógrafos y equipos creativos.",
      commercialTitle: "Comercial",
      commercialBody:
        "Trabajo comercial para marcas que necesitan campañas pulidas, contenido para redes sociales y una dirección visual adaptable en Mallorca y toda España.",
      runwayTitle: "Pasarela",
      runwayBody:
        "Pasarela, showroom y presentaciones couture respaldadas por experiencia en fashion week, producción de eventos y trabajo de cara al cliente.",
      footerHeading: "Seguir navegando",
    },
    contactPage: {
      eyebrow: "Contacto Dara Model",
      title: "Reservas y colaboraciones en Mallorca, Palma de Mallorca y España",
      description:
        "Para reservas, colaboraciones y disponibilidad, Instagram es la forma más rápida de contactar con Dara. Envía allí tus fechas, ubicación y detalles del proyecto o continúa abajo con el formulario.",
      imageAlt: "Retrato de Dara Model para la página de contacto.",
      sectionTitle: "Contacta con Dara para bookings de moda, comercial y bridal",
      sectionBody:
        "La forma más rápida de hablar sobre disponibilidad es el formulario de booking de abajo o Instagram. Comparte fechas, ubicación, concepto y detalles de producción para definir el proyecto desde el inicio.",
      enquiriesTitle: "Consultas habituales",
      enquiriesBody:
        "Editoriales, campañas comerciales, bridal, contenido para marcas, showroom, pasarela y producciones de destino.",
      baseLocationTitle: "Ubicación base",
      baseLocationBody: "Mallorca y Palma de Mallorca, con disponibilidad para viajar por España y Europa.",
      planningTitle: "Para planificar mejor",
      planningBody: "Incluye fechas, horario, ubicación, uso de imágenes y referencias de moodboard para agilizar la conversación.",
    },
    contactSection: {
      exploreHeading: "Explora Dara Model",
    },
  },
  de: {
    nav: {
      home: "Start",
      about: "Über mich",
      portfolio: "Portfolio",
      contact: "Kontakt",
      booking: "Buchung",
    },
    cta: {
      viewPortfolio: "Portfolio ansehen",
      contactOnInstagram: "Auf Instagram kontaktieren",
    },
    booking: {
      waitBeforeRetry: "Bitte warte kurz, bevor du erneut sendest.",
      errorTitle: "Fehler",
      errorDescription: "Die Anfrage konnte nicht gespeichert werden. Bitte versuche es über Instagram.",
      sending: "Wird gesendet...",
    },
    notFound: {
      message: "Ups, diese Seite wurde nicht gefunden",
      returnHome: "Zur Startseite",
    },
    home: {
      aboutLink: "Über mich",
      contactLink: "Kontakt",
    },
    aboutPage: {
      eyebrow: "Über Dara Model",
      title: "Fashion Model auf Mallorca, verfügbar in Palma de Mallorca",
      description:
        "Dara arbeitet in Editorials, kommerziellen Kampagnen, Bridal-Shootings, Laufsteg-Bookings und Brand Content für Kunden auf Mallorca, in Palma de Mallorca, in Spanien und Europa.",
      imageAlt: "Porträt von Dara Model für die Über-mich-Seite.",
      sectionTitle: "Editorial- und Commercial-Model in Spanien",
      body1:
        "Dara verbindet ein modisches Portfolio mit Erfahrung in Editorial-Shootings, kommerziellen Produktionen, Laufsteg-Präsentationen und Bridal-Projekten. Ihre Arbeit richtet sich an Marken, Fotografen, Agenturen und Kreativteams mit Anspruch an hochwertige Bildwelten.",
      body2:
        "Mit Basis auf Mallorca und verfügbar in Palma de Mallorca ist Dara offen für Kooperationen in ganz Spanien und Europa, darunter Kampagnen, Showroom-Content, Social-Media-Produktionen und Destination-Shootings.",
      basedTitle: "Basis auf Mallorca",
      basedBody: "Verfügbar in Palma de Mallorca und für Reisen in Spanien und Europa.",
      workTitle: "Typische Projekte",
      workBody: "Modeeditorials, kommerzielle Kampagnen, Beauty-Bilder, Bridal-Shootings und Laufsteg-Bookings.",
      nextTitle: "Nächster Schritt",
      nextBody: "Entdecke das Portfolio oder nimm Kontakt auf für Verfügbarkeit, Konditionen und Produktionsdetails.",
      footerHeading: "Mehr entdecken",
    },
    portfolioPage: {
      eyebrow: "Portfolio von Dara Model",
      title: "Fashion-Model-Portfolio für Editorial, Commercial, Beauty und Laufsteg",
      description:
        "Ein kuratiertes Portfolio aus Mallorca und Palma de Mallorca mit Modeeditorials, kommerziellen Produktionen, Beauty-Bildern, Bridal-Arbeiten und Couture-Looks.",
      imageAlt: "Porträt von Dara Model für die Portfolio-Seite.",
      introTitle: "Ausgewähltes Editorial- und Commercial-Portfolio",
      introBody:
        "Eine fokussierte Auswahl aus Editorial-, Commercial-, Beauty- und Haute-Couture-Bildern aus Dara Models Portfolio auf Mallorca, in Palma de Mallorca und in ganz Spanien.",
      editorialTitle: "Editorial",
      editorialBody:
        "Modeeditorials mit luxuriöser Stimmung, starker Porträtpräsenz und visuellem Storytelling für Magazine, Fotografen und Kreativteams.",
      commercialTitle: "Commercial",
      commercialBody:
        "Kommerzielles Model-Work für Marken, die hochwertige Kampagnenbilder, Social-Media-Content und eine flexible visuelle Richtung auf Mallorca und in ganz Spanien benötigen.",
      runwayTitle: "Laufsteg",
      runwayBody:
        "Laufsteg, Showroom und Couture-Präsentationen, gestützt durch Erfahrung mit Fashion Week, Eventproduktion und kundennahen Präsentationen.",
      footerHeading: "Weiter stöbern",
    },
    contactPage: {
      eyebrow: "Kontakt Dara Model",
      title: "Bookings und Kooperationen auf Mallorca, in Palma de Mallorca und Spanien",
      description:
        "Für Bookings, Kooperationen und Verfügbarkeit ist Instagram der schnellste Weg, Dara zu erreichen. Sende dort deine Daten, den Ort und Projektdetails oder nutze unten das Booking-Formular.",
      imageAlt: "Porträt von Dara Model für die Kontakt-Seite.",
      sectionTitle: "Kontaktiere Dara für Fashion-, Commercial- und Bridal-Bookings",
      sectionBody:
        "Am schnellsten lässt sich Verfügbarkeit über das Booking-Formular unten oder per Instagram klären. Teile Shoot-Daten, Ort, Konzept und Produktionsdetails mit, damit das Projekt von Anfang an sauber geplant werden kann.",
      enquiriesTitle: "Typische Anfragen",
      enquiriesBody:
        "Editorial-Shootings, kommerzielle Kampagnen, Bridal-Bilder, Brand Content, Showroom-Arbeit, Laufsteg-Bookings und Destination-Produktionen.",
      baseLocationTitle: "Standort",
      baseLocationBody: "Mallorca und Palma de Mallorca, mit Reisen in ganz Spanien und Europa.",
      planningTitle: "Für bessere Planung",
      planningBody: "Nenne Daten, Zeiten, Ort, Nutzungsrechte und Moodboard-Referenzen, um die Abstimmung zu beschleunigen.",
    },
    contactSection: {
      exploreHeading: "Dara Model entdecken",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      portfolio: "Portfolio",
      contact: "Contact",
      booking: "Réserver",
    },
    cta: {
      viewPortfolio: "Voir le portfolio",
      contactOnInstagram: "Contacter sur Instagram",
    },
    booking: {
      waitBeforeRetry: "Veuillez patienter avant de renvoyer une demande.",
      errorTitle: "Erreur",
      errorDescription: "Impossible d'enregistrer la demande. Essayez via Instagram.",
      sending: "Envoi en cours...",
    },
    notFound: {
      message: "Oups, cette page est introuvable",
      returnHome: "Retour à l'accueil",
    },
    home: {
      aboutLink: "À propos",
      contactLink: "Contact",
    },
    aboutPage: {
      eyebrow: "À propos de Dara Model",
      title: "Mannequin mode basée à Majorque, disponible à Palma de Majorque",
      description:
        "Dara travaille sur des éditoriaux, campagnes commerciales, shootings bridal, bookings défilé et contenus de marque pour des clients à Majorque, Palma de Majorque, en Espagne et en Europe.",
      imageAlt: "Portrait de Dara Model pour la page À propos.",
      sectionTitle: "Mannequin éditorial et commercial en Espagne",
      body1:
        "Dara associe un portfolio mode affirmé à une expérience en shootings éditoriaux, productions commerciales, présentations runway et projets bridal. Son travail s'adresse aux marques, photographes, agences et équipes créatives à la recherche d'une image soignée et luxueuse.",
      body2:
        "Basée à Majorque et disponible à Palma de Majorque, Dara est ouverte aux collaborations dans toute l'Espagne et en Europe, y compris campagnes, contenus showroom, productions social media et shootings destination.",
      basedTitle: "Basée à Majorque",
      basedBody: "Disponible à Palma de Majorque et pour des déplacements en Espagne et en Europe.",
      workTitle: "Travail habituel",
      workBody: "Éditoriaux mode, campagnes commerciales, images beauty, shootings bridal et bookings défilé.",
      nextTitle: "Étape suivante",
      nextBody: "Découvrez le portfolio ou prenez contact pour la disponibilité, les tarifs et les détails de production.",
      footerHeading: "Explorer davantage",
    },
    portfolioPage: {
      eyebrow: "Portfolio de Dara Model",
      title: "Portfolio mannequin pour l'éditorial, le commercial, la beauté et le défilé",
      description:
        "Un portfolio soigneusement sélectionné depuis Majorque et Palma de Majorque, avec éditoriaux mode, productions commerciales, images beauty, bridal et looks couture.",
      imageAlt: "Portrait de Dara Model pour la page portfolio.",
      introTitle: "Sélection éditoriale et commerciale du portfolio",
      introBody:
        "Une sélection ciblée d'images éditoriales, commerciales, beauty et haute couture issues du portfolio de Dara Model à Majorque, Palma de Majorque et dans le reste de l'Espagne.",
      editorialTitle: "Éditorial",
      editorialBody:
        "Des éditoriaux mode à l'atmosphère luxueuse, avec une présence forte en portrait et un storytelling visuel pensé pour magazines, photographes et équipes créatives.",
      commercialTitle: "Commercial",
      commercialBody:
        "Un travail commercial pour les marques qui ont besoin d'images de campagne soignées, de contenu social media et d'une direction visuelle adaptable à Majorque et en Espagne.",
      runwayTitle: "Défilé",
      runwayBody:
        "Défilé, showroom et présentations couture soutenus par une expérience en fashion week, production d'événements et présentations clients.",
      footerHeading: "Continuer à explorer",
    },
    contactPage: {
      eyebrow: "Contact Dara Model",
      title: "Bookings et collaborations à Majorque, Palma de Majorque et en Espagne",
      description:
        "Pour les bookings, collaborations et disponibilités, Instagram est le moyen le plus rapide de joindre Dara. Envoyez-y vos dates, votre lieu et les détails du projet, ou utilisez le formulaire ci-dessous.",
      imageAlt: "Portrait de Dara Model pour la page contact.",
      sectionTitle: "Contactez Dara pour les bookings mode, commerciaux et bridal",
      sectionBody:
        "Le moyen le plus rapide de parler disponibilité est le formulaire de booking ci-dessous ou Instagram. Partagez vos dates, le lieu, le concept et les détails de production pour cadrer le projet dès le départ.",
      enquiriesTitle: "Demandes fréquentes",
      enquiriesBody:
        "Shootings éditoriaux, campagnes commerciales, imagerie bridal, contenus de marque, showroom, bookings défilé et productions destination.",
      baseLocationTitle: "Base",
      baseLocationBody: "Majorque et Palma de Majorque, avec déplacements en Espagne et en Europe.",
      planningTitle: "Pour mieux préparer",
      planningBody: "Ajoutez les dates, horaires, lieu, usage des images et références de moodboard pour accélérer l'échange.",
    },
    contactSection: {
      exploreHeading: "Explorer Dara Model",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "Обо мне",
      portfolio: "Портфолио",
      contact: "Контакты",
      booking: "Бронь",
    },
    cta: {
      viewPortfolio: "Смотреть портфолио",
      contactOnInstagram: "Написать в Instagram",
    },
    booking: {
      waitBeforeRetry: "Пожалуйста, подождите перед повторной отправкой.",
      errorTitle: "Ошибка",
      errorDescription: "Не удалось сохранить запрос. Попробуйте написать через Instagram.",
      sending: "Отправка...",
    },
    notFound: {
      message: "Упс, страница не найдена",
      returnHome: "Вернуться на главную",
    },
    home: {
      aboutLink: "Обо мне",
      contactLink: "Контакты",
    },
    aboutPage: {
      eyebrow: "О Dara Model",
      title: "Фэшн-модель на Майорке, доступна в Пальма-де-Майорка",
      description:
        "Dara работает с эдиториалами, коммерческими кампаниями, bridal-съёмками, booking-проектами для подиума и branded content для клиентов на Майорке, в Пальма-де-Майорка, по Испании и Европе.",
      imageAlt: "Портрет Dara Model для страницы «Обо мне».",
      sectionTitle: "Эдиториал и коммерческая модель в Испании",
      body1:
        "Dara сочетает fashion-портфолио с опытом в editorial-съёмках, коммерческих продакшенах, показах и bridal-проектах. Её работа подходит брендам, фотографам, агентствам и креативным командам, которым нужна аккуратная визуальная подача с luxury-настроением.",
      body2:
        "Базируется на Майорке и доступна в Пальма-де-Майорка для сотрудничества по всей Испании и Европе: кампании, showroom-контент, съёмки для соцсетей и destination-проекты.",
      basedTitle: "База на Майорке",
      basedBody: "Доступна в Пальма-де-Майорка и для проектов по Испании и Европе.",
      workTitle: "Типичные проекты",
      workBody: "Fashion editorials, коммерческие кампании, beauty-съёмки, bridal и показы.",
      nextTitle: "Следующий шаг",
      nextBody: "Посмотрите портфолио или свяжитесь, чтобы обсудить доступность, ставки и детали продакшена.",
      footerHeading: "Смотреть дальше",
    },
    portfolioPage: {
      eyebrow: "Портфолио Dara Model",
      title: "Портфолио фэшн-модели для editorial, commercial, beauty и runway",
      description:
        "Кураторская подборка с Майорки и из Пальма-де-Майорка: fashion editorials, commercial productions, beauty, bridal и couture-образы.",
      imageAlt: "Портрет Dara Model для страницы портфолио.",
      introTitle: "Избранное из editorial и commercial портфолио",
      introBody:
        "Сфокусированная подборка editorial, commercial, beauty и haute couture кадров из портфолио Dara Model на Майорке, в Пальма-де-Майорка и по всей Испании.",
      editorialTitle: "Эдиториал",
      editorialBody:
        "Fashion editorials с luxury-настроением, сильным портретным присутствием и визуальным сторителлингом для журналов, фотографов и креативных команд.",
      commercialTitle: "Коммерция",
      commercialBody:
        "Коммерческая модельная работа для брендов, которым нужны аккуратные campaign-кадры, контент для соцсетей и гибкая визуальная подача на Майорке и по Испании.",
      runwayTitle: "Подиум",
      runwayBody:
        "Подиум, showroom и couture-презентации с опытом работы на fashion week, в event production и в клиентских презентациях.",
      footerHeading: "Продолжить просмотр",
    },
    contactPage: {
      eyebrow: "Контакты Dara Model",
      title: "Booking и коллаборации на Майорке, в Пальма-де-Майорка и по Испании",
      description:
        "Для booking, коллабораций и уточнения доступности Instagram — самый быстрый способ связаться с Dara. Отправьте туда даты, локацию и детали проекта или используйте форму ниже.",
      imageAlt: "Портрет Dara Model для страницы контактов.",
      sectionTitle: "Свяжитесь с Dara для fashion, commercial и bridal booking",
      sectionBody:
        "Быстрее всего обсудить доступность через форму ниже или Instagram. Укажите даты, локацию, концепт и детали продакшена, чтобы сразу собрать ясный запрос.",
      enquiriesTitle: "Частые запросы",
      enquiriesBody:
        "Editorial-съёмки, коммерческие кампании, bridal, brand content, showroom, runway booking и destination-проекты.",
      baseLocationTitle: "Базовая локация",
      baseLocationBody: "Майорка и Пальма-де-Майорка, с выездом по Испании и Европе.",
      planningTitle: "Для удобного планирования",
      planningBody: "Добавьте даты, время, локацию, usage и moodboard-референсы, чтобы ускорить обсуждение.",
    },
    contactSection: {
      exploreHeading: "Исследовать Dara Model",
    },
  },
  zh: {
    nav: {
      home: "首页",
      about: "简介",
      portfolio: "作品集",
      contact: "联系",
      booking: "预约",
    },
    cta: {
      viewPortfolio: "查看作品集",
      contactOnInstagram: "在 Instagram 联系",
    },
    booking: {
      waitBeforeRetry: "请稍后再重复提交。",
      errorTitle: "错误",
      errorDescription: "无法保存预约请求，请尝试通过 Instagram 联系。",
      sending: "发送中...",
    },
    notFound: {
      message: "抱歉，页面不存在",
      returnHome: "返回首页",
    },
    home: {
      aboutLink: "简介",
      contactLink: "联系",
    },
    aboutPage: {
      eyebrow: "关于 Dara Model",
      title: "常驻马略卡岛、可在帕尔马工作的时尚模特",
      description:
        "Dara 为马略卡岛、帕尔马、全西班牙及欧洲的客户提供时尚 editorial、商业 campaign、bridal 拍摄、runway booking 与品牌内容合作。",
      imageAlt: "Dara Model 的关于页面肖像。",
      sectionTitle: "西班牙的 editorial 与商业模特",
      body1:
        "Dara 拥有鲜明的时尚作品集，并具备 editorial 拍摄、商业制作、runway 展示和 bridal 项目的经验。她适合需要高级质感与精致视觉表达的品牌、摄影师、经纪公司和创意团队。",
      body2:
        "Dara 常驻马略卡岛，也可在帕尔马工作，并接受西班牙及欧洲范围内的 campaign、showroom 内容、社交媒体制作与目的地拍摄合作。",
      basedTitle: "常驻马略卡岛",
      basedBody: "可在帕尔马工作，也可前往西班牙和欧洲其他地区。",
      workTitle: "常见合作类型",
      workBody: "时尚 editorial、商业 campaign、beauty 影像、bridal 拍摄与 runway booking。",
      nextTitle: "下一步",
      nextBody: "查看作品集，或联系 Dara 了解档期、报价与制作细节。",
      footerHeading: "继续浏览",
    },
    portfolioPage: {
      eyebrow: "Dara Model 作品集",
      title: "适用于 editorial、commercial、beauty 与 runway 的时尚模特作品集",
      description:
        "来自马略卡岛与帕尔马的精选作品，涵盖时尚 editorial、商业制作、beauty 影像、bridal 拍摄与 couture 造型。",
      imageAlt: "Dara Model 的作品集页面肖像。",
      introTitle: "精选 editorial 与 commercial 作品",
      introBody:
        "这是一组来自 Dara Model 作品集的精选影像，聚焦 editorial、commercial、beauty 与 haute couture，拍摄于马略卡岛、帕尔马及西班牙其他地区。",
      editorialTitle: "Editorial",
      editorialBody:
        "带有高级氛围的时尚 editorial，强调肖像表现力与视觉叙事，适合杂志、摄影师与创意团队。",
      commercialTitle: "Commercial",
      commercialBody:
        "适合品牌 campaign、社交媒体内容与灵活视觉方向的商业模特合作，可在马略卡岛及西班牙范围内完成。",
      runwayTitle: "Runway",
      runwayBody:
        "runway、showroom 与 couture 展示经验，涵盖 fashion week、活动制作与面向客户的展示场景。",
      footerHeading: "继续查看",
    },
    contactPage: {
      eyebrow: "联系 Dara Model",
      title: "马略卡岛、帕尔马与西班牙地区的预约与合作",
      description:
        "如需预约、合作或确认档期，Instagram 是联系 Dara 最快的方式。你可以直接发送日期、地点和项目细节，或继续使用下方表单。",
      imageAlt: "Dara Model 的联系页面肖像。",
      sectionTitle: "联系 Dara 进行时尚、商业与 bridal booking",
      sectionBody:
        "讨论档期最快的方式是使用下方 booking 表单或 Instagram。请提供拍摄日期、地点、概念与制作细节，以便快速明确项目需求。",
      enquiriesTitle: "常见咨询",
      enquiriesBody:
        "Editorial 拍摄、商业 campaign、bridal 影像、品牌内容、showroom、runway booking 与目的地制作。",
      baseLocationTitle: "常驻地点",
      baseLocationBody: "马略卡岛与帕尔马，可前往西班牙和欧洲其他地区工作。",
      planningTitle: "方便快速沟通",
      planningBody: "请尽量提供日期、时间、地点、使用范围与 moodboard 参考，以便更快推进沟通。",
    },
    contactSection: {
      exploreHeading: "了解 Dara Model",
    },
  },
};

export const getSiteCopy = (lang: Language) => siteCopyByLanguage[lang] ?? siteCopyByLanguage.en;

export const formatPortfolioImageAlt = (lang: Language, category: string, title: string) => {
  switch (lang) {
    case "es":
      return `Imagen del portfolio de Dara Model (${category}): ${title}.`;
    case "de":
      return `Portfolio-Bild von Dara Model (${category}): ${title}.`;
    case "fr":
      return `Image du portfolio de Dara Model (${category}) : ${title}.`;
    case "ru":
      return `Изображение портфолио Dara Model (${category}): ${title}.`;
    case "zh":
      return `Dara Model 作品集图片（${category}）：${title}。`;
    default:
      return `Dara Model ${category.toLowerCase()} portfolio image: ${title}.`;
  }
};
