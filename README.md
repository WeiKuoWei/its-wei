# its-wei — weikuowei.github.io/its-wei

Wei Kuo's portfolio. Dark editorial single-page site with a shader atmosphere,
GSAP scroll choreography, and a `wei@taipei` console easter egg (press `` ` ``).

Rebuilt 2026-07 by a Claude (Fable 5) agent run — type `trace` in the console
to replay it.

## Stack

- Vite 8 · React 19 · TypeScript · Tailwind 4 (CSS-first tokens)
- GSAP (ScrollTrigger, SplitText) + Lenis smooth scroll
- @paper-design/shaders-react (lazy-mounted WebGL grain background)
- Self-hosted fonts: Clash Display + General Sans (Fontshare ITF-FFL), JetBrains Mono (OFL)

## Develop

```bash
npm ci
npm run dev        # http://localhost:8080
npm run build      # dist/ (GH Pages base /its-wei/)
npm run lint
```

Deploys automatically to GitHub Pages on push to `main` (`.github/workflows/static.yml`).

## Accessibility & perf

`prefers-reduced-motion` disables smooth scroll, scroll scenes, and the shader
animation (static frame). Lighthouse mobile at rebuild: perf 94 · a11y 100 ·
SEO 100 · best practices 100.
