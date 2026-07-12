# Practice Areas — Final Plan (20 items, 3 categories)

## Data

`src/data/practiceAreas.ts`

```ts
export type PracticeArea = { slug: string; title: string; content: string; Icon: LucideIcon };
export type Category = { id: string; title: string; items: PracticeArea[] };
```

Exactly 20 items in 3 categories, no additions/renames:

**קטגוריה 1 — הליכי גירושין ומעמד אישי (7)**
yishuv-sichsuch, gitin, ketuba, hatarat-nisuin, heskem-gerushin, alimut-shkufa, tzavei-hagana

**קטגוריה 2 — ילדים, רכוש וכלכלה (8)**
heskem-mamon, izun-mashabim, chalukat-rechush, zmanei-shehut, achrayut-horit, mzonot-yeladim, mzonot-isha, yeduim-batzibur

**קטגוריה 3 — ירושה, גישור וליווי משפטי (5)**
tzavaa, gishur, hotzaa-lapoal, chadlut-pireon, litigatzia

Full Hebrew legal text will be pasted verbatim into `content` during Build mode. Each item gets one outlined lucide icon matching existing style (strokeWidth 1.5).

## Routes & pages

- `/services` → `src/pages/Services.tsx` — 3 categories rendered as accordion (mobile) / tabs+accordion (desktop) via `PracticeAreasAccordion.tsx`. Deep-link via hash (`#slug`) scrolls & opens the item.
- `/services/:slug` → `src/pages/PracticeArea.tsx` — full article page for a single area, with breadcrumb, related items from same category, contact CTA.
- Unknown slug → 404.

## Components

- `src/components/PracticeAreasAccordion.tsx` — reusable, takes categories.
- `src/components/PracticeAreasPreview.tsx` — homepage teaser: 3 category cards → link to `/services#<first-slug>`, plus "לכל תחומי העיסוק" CTA to `/services`.

## Header

`Header.tsx`: "שירותי המשרד" becomes `<Link to="/services">` (remove scrollIntoView handler for this item only).

## Homepage

Existing "תחומי עיסוק" section replaced by `<PracticeAreasPreview />`.

## SEO

- `/services`: title "תחומי עיסוק | ...", generic meta description listing categories.
- `/services/:slug`: unique `<title>`, meta description (first ~155 chars of content), canonical, JSON-LD `LegalService` with `serviceType` = title.
- `public/sitemap.xml`: add `/services` + 20 `/services/:slug` entries.

## Acceptance

- Exactly 20 items, exact titles/slugs/categories above.
- No invented items (לשון הרע, ניכור הורי, אפוטרופסות, התנגדות לצו קיום צוואה removed).
- Header link points to `/services`.
- Direct load of `/services/tzavaa` renders full article; `/services#ketuba` opens correct accordion item.
