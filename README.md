# DARAMODEL.COM

Сайт-портфолио Dara Model.

- Домен: `https://daramodel.com`
- Стек: `Vite + React + TypeScript + Tailwind`
- Деплой: `GitHub Pages` через GitHub Actions
- Формат сайта: SPA с prerender для индексируемых страниц

## Локальный запуск

Установка зависимостей:

```sh
npm install
```

Dev-сервер:

```sh
npm run dev
```

Production build:

```sh
npm run build
```

Локальный preview собранной версии:

```sh
npm run preview
```

## Структура проекта

- `src/assets`
  - локальные изображения сайта, включая фото для портфолио
- `src/components`
  - основные секции и UI-компоненты
  - homepage portfolio carousel: `src/components/PortfolioSection.tsx`
  - portfolio preview grid для `/portfolio`: `src/components/PortfolioPreviewGrid.tsx`
  - booking/contact UI: `src/components/BookingSection.tsx`, `src/components/ContactSection.tsx`
- `src/pages`
  - маршруты сайта: `Index`, `AboutPage`, `PortfolioPage`, `ContactPage`, `NotFound`
- `src/lib`
  - проектные конфиги и shared logic
  - SEO-слой: `src/lib/seo.ts`
  - site copy: `src/lib/siteCopy.ts`
  - CTA visual system: `src/lib/ctaStyles.ts`
  - social links: `src/lib/social.ts`
- `src/i18n`
  - базовые переводы интерфейса: `src/i18n/translations.ts`
  - i18n provider: `src/i18n/I18nProvider.tsx`
- `public`
  - `robots.txt`, `sitemap.xml`, `CNAME`, `og-image.jpg`
- `.github/workflows/deploy.yml`
  - GitHub Pages deploy workflow
- `scripts/prerender-home.mjs`
  - prerender indexable routes в `dist`

## Как добавить новое фото в портфолио

### Куда класть файл

Новые изображения нужно класть в локальную папку:

`D:\Документы\сайты\дараком\showcase-my-best-work\src\assets\`

Безопасный шаблон имени:

- `portfolio-21.jpg`
- `portfolio-22.jpg`
- `portfolio-23.jpg`

Лучше продолжать текущую последовательность `portfolio-N.jpg`.

### Важно

Одного файла в `src/assets` недостаточно.

После добавления файла его нужно вручную подключить в коде.

### Чтобы фото появилось в главной looped-ленте

1. Добавить `import` в [PortfolioSection.tsx](/d:/Документы/сайты/дараком/showcase-my-best-work/src/components/PortfolioSection.tsx)
2. Добавить объект в массив `works`

Пример:

```ts
import portfolio22 from "@/assets/portfolio-22.jpg";

const works = [
  // ...
  { src: portfolio22, title: t("workSunsetMarina"), category: t("catEditorial") },
];
```

### Чтобы фото появилось ещё и на странице `/portfolio`

1. Добавить `import` в [PortfolioPreviewGrid.tsx](/d:/Документы/сайты/дараком/showcase-my-best-work/src/components/PortfolioPreviewGrid.tsx)
2. Добавить объект в массив `items`

Пример:

```ts
import portfolio22 from "@/assets/portfolio-22.jpg";

const items = [
  // ...
  { src: portfolio22, title: t("workSunsetMarina"), category: t("catEditorial") },
];
```

### Почему looped carousel не ломается

Главная лента работает по массиву `works`, а не по жёстко заданному числу кадров.

Внутри [PortfolioSection.tsx](/d:/Документы/сайты/дараком/showcase-my-best-work/src/components/PortfolioSection.tsx) карусель строится из:

```ts
const tripled = [...works, ...works, ...works];
```

Поэтому добавление новых элементов в `works` не ломает loop само по себе.

### Подписи к фото не создаются автоматически

Имя файла не используется как подпись.

Подписи задаются вручную в объекте:

- `category`
- `title`

Если нужен перевод названия, его нужно добавить в `src/i18n/translations.ts`.

## Как работают подписи и переводы в портфолио

- Категории берутся из `translations.ts`, например `catEditorial`
- Названия работ тоже задаются вручную, например `workSunsetMarina`
- Если новый title должен переводиться на все языки, нужно:
  1. добавить новый ключ в `src/i18n/translations.ts`
  2. заполнить его для `en`, `es`, `de`, `fr`, `ru`, `zh`

## Локализация

Поддерживаемые языки:

- `en`
- `es`
- `de`
- `fr`
- `ru`
- `zh`

Основные файлы локализации:

- [translations.ts](/d:/Документы/сайты/дараком/showcase-my-best-work/src/i18n/translations.ts)
- [siteCopy.ts](/d:/Документы/сайты/дараком/showcase-my-best-work/src/lib/siteCopy.ts)
- [seo.ts](/d:/Документы/сайты/дараком/showcase-my-best-work/src/lib/seo.ts)

Правило:

- не хардкодить видимый текст на английском прямо в компонентах
- весь пользовательский текст вести через текущую i18n/site copy систему
- если строка видима пользователю или screen reader, она тоже должна быть локализована

## SEO

SEO-слой уже настроен.

Основные места:

- [seo.ts](/d:/Документы/сайты/дараком/showcase-my-best-work/src/lib/seo.ts)
- [SeoHead.tsx](/d:/Документы/сайты/дараком/showcase-my-best-work/src/components/SeoHead.tsx)
- [robots.txt](/d:/Документы/сайты/дараком/showcase-my-best-work/public/robots.txt)
- [sitemap.xml](/d:/Документы/сайты/дараком/showcase-my-best-work/public/sitemap.xml)
- [index.html](/d:/Документы/сайты/дараком/showcase-my-best-work/index.html)

Что важно:

- `robots.txt`, `sitemap.xml`, canonical, OG/Twitter и deploy уже приведены в рабочее состояние
- не менять эти файлы без явной причины
- при текстовых правках не ломать существующий SEO-head layer

## Booking / Contact логика

- `Booking` ведёт на `/contact#booking`
- основной booking UI находится в [BookingSection.tsx](/d:/Документы/сайты/дараком/showcase-my-best-work/src/components/BookingSection.tsx)
- Instagram/contact ссылки и handle лежат в [social.ts](/d:/Документы/сайты/дараком/showcase-my-best-work/src/lib/social.ts)

Важно:

- кнопки booking form и success dialog не стоит случайно смешивать с обычной CTA visual system
- это функциональные кнопки, не просто декоративные site CTA

## Базовый workflow изменений

1. Внести изменения локально
2. Проверить сборку:

```sh
npm run build
```

3. При необходимости проверить preview:

```sh
npm run preview
```

4. Сделать `git commit`
5. Сделать `git push`
6. GitHub Pages опубликует новую версию через workflow

## Guardrails

- не ломать looped portfolio в `PortfolioSection.tsx`
- не хардкодить тексты мимо `translations.ts` / `siteCopy.ts`
- не трогать SEO/deploy без причины
- сохранять текущую CTA visual system
- bot/form buttons не смешивать с обычной CTA-системой
- новые фото сначала кладутся в `src/assets`, потом подключаются в коде
