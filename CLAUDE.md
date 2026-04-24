# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Dev server on port 8080
npm run build        # Production build
npm run build:dev    # Development build
npm run lint         # ESLint
npm run test         # Vitest (single run)
npm run test:watch   # Vitest (watch mode)
npm run preview      # Preview production build
```

## Architecture

**ProMechanik** is a Polish auto repair shop marketing website — a single-page React app with three routes:

- `/` — Home (Navbar + Hero + Services + WhyChooseUs + Contact + Footer)
- `/cennik` — Pricing page
- `/*` — 404

**Stack**: React 18, TypeScript, Vite 6 (SWC), React Router 6, Tailwind CSS, shadcn/ui (Radix UI), TanStack Query, Vitest, Playwright.

### Key conventions

- Path alias `@/` maps to `src/`
- Tailwind classes are merged using `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge)
- Dark theme is applied via CSS class on `<html>`; colors are HSL variables defined in `src/index.css`
- Display font: Oswald (headings), body font: Inter — loaded via Google Fonts in `src/index.css`
- shadcn/ui components live in `src/components/ui/`; add new ones with the shadcn CLI using `components.json`

### Routing note

`src/main.tsx` handles a query-string redirect pattern (`?/path`) for static host compatibility before rendering `<App>`. The router is `BrowserRouter` (not HashRouter).

### SEO

Structured data (JSON-LD `LocalBusiness` schema) and OG/Twitter meta tags are in `index.html`. Update them there, not in React components.
