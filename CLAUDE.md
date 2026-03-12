# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Next.js)
npm run build     # Production build
npm run lint      # Run ESLint
```

No test suite is configured.

## Architecture

**Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lucide React.

**Pages** (`src/app/`):
- `/` — Home: hero, services, featured projects, CTA
- `/proyectos` — All projects with filter UI
- `/sobre-mi` — About: skills, experience timeline, certifications
- `/blog` — Blog listing and `[slug]` detail page
- `/contacto` — Contact info + Google Form link

**Shared layout:** `src/app/layout.tsx` wraps all pages with `<Navigation>`, `<Footer>`, and `<ErrorBoundary>`.

**Data layer:** All static data (projects, skills, experience, blog posts, services, statistics) lives in `src/lib/constants.ts`. No external CMS or API.

**Utilities:** `src/lib/utils.ts` — `cn()` (clsx + tailwind-merge), `isValidUrl()`, `safeOpenUrl()`.

## Design System

The site uses a **neobrutalist** aesthetic: white background, heavy black borders (`border-2 border-black`), vibrant highlight colors.

**Highlight colors** are defined as CSS custom properties in `src/app/globals.css` (not in `tailwind.config.ts`). The utility classes (`bg-highlight-yellow`, `text-highlight-pink`, etc.) are hand-written in that same CSS file. The allowed colors are typed as `HighlightColor = 'yellow' | 'pink' | 'blue' | 'green' | 'orange'` in `constants.ts`.

**Dark mode** uses `[data-theme="dark"]` CSS attribute selectors in `globals.css`. The theme is set via `localStorage` in an inline script in `<head>` to avoid flash. `ThemeToggle` component handles toggling.

**Fonts** (loaded via Google Fonts in `globals.css`):
- `font-heading` → Space Grotesk (applied via `.font-heading` CSS class)
- Body → Inter
- Mono → JetBrains Mono

## Known Issues

- `HighlightColor` type does not include `"red"` — avoid using it
- Filter buttons on `/proyectos` are decorative (no state)
- Several placeholder URLs are still in `constants.ts` (demo/GitHub URLs, Google Form link)
- `/public/cv-sebastian-minaya.pdf` and `/public/projects/*.jpg` images are missing
- Tailwind v4 conflict: `tailwind.config.ts` exists but the CSS-first `@import "tailwindcss"` approach is used — custom highlight classes are in CSS, not the config
