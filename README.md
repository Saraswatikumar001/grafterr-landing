# Grafterr Landing Page

A responsive marketing landing page for Grafterr — built with React 18, TypeScript, and plain CSS. No CSS frameworks.

---

## Tech Stack

- **React 18** — functional components and hooks only
- **TypeScript** — strict typing throughout
- **Vite** — fast dev server and bundler
- **Plain CSS** — CSS custom properties via `variables.css`, global styles via `global.css`

---

## Project Structure

```
grafterr-landing/
├── public/
│   └── images/                  # Static image assets
├── src/
│   ├── components/
│   │   ├── ui/                  # Reusable, generic UI components
│   │   │   ├── GradientText.tsx
│   │   │   ├── GradientButton.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   ├── Carousel.tsx
│   │   │   ├── FloatingShape.tsx
│   │   │   └── Skeleton.tsx
│   │   └── sections/            # Page section components
│   │       ├── HeroSection.tsx
│   │       └── FeaturesSection.tsx
│   ├── hooks/                   # Custom React hooks
│   │   ├── useContent.ts        # Fetches and manages content data
│   │   └── useCarousel.ts       # Carousel navigation logic
│   ├── services/
│   │   └── api.ts               # API utility functions
│   ├── data/
│   │   └── content.json         # Static content (copy, labels, etc.)
│   ├── styles/
│   │   ├── variables.css        # CSS custom properties (colors, spacing, typography)
│   │   └── global.css           # Base reset and global styles
│   ├── App.tsx
│   └── main.tsx
```

---

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm v9 or higher

### Installation

```bash
git clone https://github.com/Saraswatikumar001/grafterr-landing
cd grafterr-landing
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

---

## Component Overview

### UI Components (`src/components/ui/`)

| Component | Props | Description |
|---|---|---|
| `GradientText` | `children`, `classNames?` | Renders text with a CSS gradient fill |
| `GradientButton` | `children`, `href?`, `onClick?`, `classNames?` | CTA button with gradient border or fill |
| `ProductCard` | `title`, `description`, `image`, `badge?` | Card used in product feature carousels |
| `Carousel` | `cards`, `visibleCount?` | Horizontally scrollable card carousel |
| `FloatingShape` | `size`, `color`, `top`, `left` | Decorative background shape element |
| `Skeleton` | `width?`, `height?`, `classNames?` | Loading placeholder shimmer |

### Section Components (`src/components/sections/`)

| Component | Description |
|---|---|
| `HeroSection` | Full-width hero with headline, subtext, and CTA |
| `FeaturesSection` | Product feature highlights using `Carousel` and `ProductCard` |

---

## Custom Hooks

### `useContent`

Fetches and returns page content from `content.json` (or a remote API via `api.ts`).

```ts
const { content, loading, error } = useContent()
```

| Return | Type | Description |
|---|---|---|
| `content` | `ContentData \| null` | Parsed content object |
| `loading` | `boolean` | True while fetching |
| `error` | `string \| null` | Error message if fetch failed |

Internally uses `useState`, `useEffect`, and `useCallback`.

### `useCarousel`

Encapsulates all carousel navigation logic.

```ts
const { current, goTo, goNext, goPrev, canGoNext, canGoPrev } = useCarousel({
  total: 5,
  visibleCount: 3,
})
```

| Option | Type | Description |
|---|---|---|
| `total` | `number` | Total number of cards |
| `visibleCount` | `number` | Number of visible cards at once |

---

## Styling

All design tokens live in `src/styles/variables.css` and are applied globally:

```css
:root {
  --color-primary: #5895F0;
  --color-secondary: #F1B662;
  --font-heading: 'Inter', sans-serif;
  --font-body: 'Inter', sans-serif;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --border-radius: 12px;
}
```

Gradient text is applied with:

```css
.gradient-text {
  background: linear-gradient(90deg, #5895F0 0%, #F1B662 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## Data & Content

`src/data/content.json` holds all page copy — headlines, descriptions, button labels, and card data. The `useContent` hook reads this file (or fetches from an API endpoint configured in `src/services/api.ts`).

Example shape:

```json
{
  "hero": {
    "headline": "Technology built for hospitality",
    "subtext": "Grafterr helps venues manage operations end-to-end.",
    "cta": "Get started"
  },
  "features": [
    {
      "id": 1,
      "title": "Point of sale",
      "description": "Manage orders and payments from one interface.",
      "image": "/images/pos.png"
    }
  ]
}
```

---

## Requirements Coverage

| Requirement | Implementation |
|---|---|
| Functional components only | All components use arrow functions, no class components |
| `useState` | Used in `Carousel`, `useContent`, `useCarousel` |
| `useEffect` | Used in `useContent` for data fetching |
| `useCallback` | Used in `useCarousel` for stable navigation handlers |
| Custom hook — data fetching | `useContent.ts` |
| Custom hook — carousel logic | `useCarousel.ts` |
| Component composition | Sections compose `ProductCard`, `GradientText`, `Carousel` etc. |
| TypeScript | Strict types on all props, hooks, and service functions |
| No CSS frameworks | Plain CSS with custom properties only |

---

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript compiler check (`tsc --noEmit`) |

---

## License

Private — Grafterr. All rights reserved.