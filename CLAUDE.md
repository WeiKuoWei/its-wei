# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Wei Kuo's personal portfolio site — `weikuowei.github.io/its-wei`. A dark editorial
single-page React app: shader atmosphere, GSAP scroll choreography, and a
`wei@taipei` console easter egg. Rebuilt in July 2026; the pre-rebuild stack (a
third-party contact-form email service, ~62 shadcn/ui components, framer-motion) was
deleted.

Why the stack is what it is — and which libraries were rejected and why — is
recorded in [docs/stack-decisions.md](docs/stack-decisions.md) and
[docs/component-ledger.md](docs/component-ledger.md). **Read both before adding a
dependency**; the ledger requires a new row before any package is installed.

## Development Commands

```bash
npm i              # install
npm run dev        # dev server, http://localhost:8080
npm run build      # production build → dist/
npm run build:dev  # build in development mode
npm run lint       # eslint
npm run preview    # preview the production build
```

## Stack

- Vite 8 + React 19 + TypeScript, `@vitejs/plugin-react-swc`
- Tailwind 4, CSS-first: design tokens live in an `@theme` block in `src/index.css`.
  **There is no `tailwind.config.ts`.**
- GSAP (ScrollTrigger + SplitText) + `@gsap/react` `useGSAP`, with Lenis smooth scroll
- `@paper-design/shaders-react` for the lazy-mounted WebGL grain background
- Self-hosted fonts in `public/fonts/`: Clash Display + General Sans (Fontshare
  ITF-FFL), JetBrains Mono (OFL)
- React Router — one real route plus a catch-all 404
- No component kit. The UI is hand-rolled with Tailwind utility classes on the
  `@theme` tokens.

## Architecture

### Application structure

- **Entry**: `src/main.tsx` renders `App`.
- **`src/App.tsx`**: `BrowserRouter` (basename `import.meta.env.BASE_URL`), the skip
  link, `/` → `Home`, `*` → `NotFound`, and the `%c` console signature.
- **`src/pages/Home.tsx`**: the whole site. Mounts `Atmosphere`, `Nav`, a `<main>` of
  section components, `Footer`, and the lazy `Terminal`. Also owns the smooth-scroll
  init, the reveal attachment, and the backtick key handler.
- **`src/pages/NotFound.tsx`**: themed 404.
- No global state library, no data fetching — all content is static TypeScript in
  `src/data/`.

### Sections, in order

`Hero` → `Work` → `Research` → `Projects` → `Credentials` → `Contact`, with `Nav`
fixed above and `Footer` below.

- **`Work`** is a pinned horizontal deck: on `md+` viewports with motion allowed, the
  section pins and the slide track tweens horizontally on scroll (`xPercent`, scrub,
  nearest-boundary snap), one job per slide with a focal metric watermark, plus a
  stats strip and a progress rail. The base DOM is a plain vertical stack — mobile and
  reduced-motion users get every slide stacked and readable. All of it is layered on
  inside `gsap.matchMedia()`.
- **`Contact`** has **no form**. It is a large `mailto:` CTA plus a socials grid.
  Nothing on this site posts anywhere; there is no backend and no email service.
- **`Terminal`** is the signature interaction: a hand-rolled console (zero
  dependencies), opened with the backtick key or the nav `>_` button, offering
  `help` / `trace` / `work` / `projects` / `papers` / `resume` / `goto <id>` and
  friends. It is `React.lazy`-loaded and latched on first open, so it stays out of the
  initial bundle but keeps its history across toggles.

### Motion layer

- **`src/lib/motion.ts`** is the single place GSAP plugins are registered. It exports
  `gsap`, `ScrollTrigger`, `SplitText`, the `OK_MOTION` / `REDUCED` media-query
  constants, `prefersReducedMotion()`, `initSmoothScroll()`, and `scrollToId()`.
  Import GSAP from here, not from `gsap` directly.
- **`initSmoothScroll()`** runs the official Lenis + ScrollTrigger single-RAF recipe
  (`autoRaf: false`, Lenis drives `ScrollTrigger.update`, GSAP's ticker drives Lenis,
  `lagSmoothing(0)`). It no-ops under reduced motion.
- **`src/lib/reveal.ts`**: any element tagged `data-reveal` fades and rises once on
  enter. Under reduced motion the elements are simply set visible.
- **Reduced motion is a branch, not a switch.** Build every timeline inside
  `gsap.matchMedia()` with an `OK_MOTION` condition so the reduced branch never
  constructs the animation at all. Component-scoped timelines use `useGSAP` with a
  `scope` ref for automatic cleanup.
- **`src/components/Atmosphere.tsx`**: the shader background, `React.lazy` + mounted on
  `requestIdleCallback` so it never blocks LCP. `speed={0}` under reduced motion gives
  a static frame; if WebGL fails the page falls back to plain ink.

### Styling conventions

- Tokens are Tailwind 4 `@theme` variables in `src/index.css`, used as ordinary
  utilities (`text-paper`, `bg-ink-2`, `border-rule`, `text-accent`):
  - `ink` / `ink-2` / `ink-3` — page ground, raised surfaces, borders
  - `paper` / `paper-dim` / `paper-faint` — primary/secondary/tertiary text
  - `rule` — hairline rules; `accent` — `#ff4d00` editorial orange
  - `term` — terminal green, **used only inside the Terminal** (and the "now" dot)
  - `font-display` (Clash Display) / `font-sans` (General Sans) / `font-mono`
    (JetBrains Mono)
- Two shared CSS classes: `.rule` (top hairline) and `.kicker` (mono section label).
- `src/components/Section.tsx` is the section shell — index number + mono kicker over a
  rule line. Use it for any new section.
- Focus uses `:focus-visible` only, never bare `:focus`.
- There is no `cn()` helper and no `src/lib/utils.ts`. Compose class strings directly.

### Content

All copy and data are static modules in `src/data/`: `site.ts` (email, socials, nav,
resume path), `experiences.ts`, `projects.ts`, `research.ts`, `certificates.ts`,
`skills.ts`. Change content there, not in components.

## Configuration

- **Path alias**: `@/` → `./src` (`vite.config.ts`).
- **Base path**: `/its-wei/` in production only, `/` in dev — GitHub Pages subpath.
  Build any asset URL through `import.meta.env.BASE_URL`.
- **Dev server**: port 8080, host `::`.
- **404**: a `closeBundle` plugin in `vite.config.ts` copies `dist/index.html` to
  `dist/404.html` — the GitHub Pages SPA fallback, so the router's catch-all renders.
- **ESLint**: recommended JS + TypeScript, React Hooks, React Refresh;
  `@typescript-eslint/no-unused-vars` is off.

## Deployment

Pushing to `main` triggers `.github/workflows/static.yml`, which builds and deploys to
GitHub Pages.

## Assets

`public/` — fonts, favicons, `og.png`, `robots.txt`, and `certificates/` (resume plus
certificate PDFs, linked from the site). There is no `src/assets/`.

## Design records

`docs/design/*.html` are the rendered design-option pages from each redesign round
(2026-07-02 direction options, 2026-07-12 v2.1 options). They record what was chosen
and what was passed over.

## Testing

No test framework is configured. Verification is `npm run build` + `npm run lint`, plus
manual/headless checks (viewport sweeps, reduced-motion, Lighthouse).

## Vestigial scaffold artifacts

The repo began as a Lovable `vite_react_shadcn_ts` scaffold. Leftovers that do **not**
describe the current site:

- `package.json` `"name": "vite_react_shadcn_ts"`.
- `components.json` — a shadcn config pointing at a `tailwind.config.ts` and a
  `src/components/ui/` that no longer exist.
- Unused dependencies with zero imports in `src/`: `@radix-ui/*`,
  `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`,
  `tailwindcss-animate`.

Do not build on these. Removing them is a valid cleanup; re-introducing shadcn/ui is
not (see the component ledger).
