# Stack Decisions

Architecture decision record for the 2026-07 rebuild. The repository records the
outcome (`package.json`, `src/`); this file records why each choice beat its
alternatives, so a future round does not re-litigate settled ground or
accidentally reintroduce a rejected dependency.

Research date: 2026-07-02. Harvested 2026-07-13 from a gitignored planning
directory. Superseding a decision here means adding a row, not editing history.

## Decisions

### 1. Vite + React (kept), not Astro or Next static export

- Astro islands are moot for a single page where every section is interactive —
  the partial-hydration win does not exist.
- Next static export adds `basePath` friction against the GitHub Pages subpath.
- Vite handles the subpath with one line: `base: '/its-wei/'` (`vite.config.ts`,
  production only).
- Versions: Vite 8 (Rolldown default), React 19, TypeScript.

### 2. GSAP, not framer-motion — one animation runtime, not two

- **Rejected the hybrid outright.** Two animation systems driving one scroll
  timeline produce jank; there is no safe split.
- GSAP has been free including every former Club plugin since v3.13 (2026-04,
  Webflow acquisition), so ScrollTrigger, SplitText, and ScrambleText carry no
  licence cost. Sources: `gsap.com/pricing`, `webflow.com/blog/gsap-becomes-free`.
- GSAP also covers the micro-interactions framer-motion would have been kept for,
  so nothing is left uncovered by the drop.
- Consequence: any copy-paste component that imports `motion` drags a ~30-45 KB gz
  second runtime. Such components are ported to GSAP or rejected. See
  [component-ledger.md](component-ledger.md).
- Implemented in `src/lib/motion.ts` (single registration point) with
  `@gsap/react`'s `useGSAP` for scoped, auto-cleaned timelines.

### 3. Lenis + ScrollTrigger on a single RAF loop

Smooth scroll and scroll-triggered animation must share one clock, or ScrollTrigger
reads stale positions. The official Lenis recipe, taken verbatim:

```ts
lenis = new Lenis({ autoRaf: false });        // do NOT let Lenis run its own RAF
lenis.on("scroll", ScrollTrigger.update);      // Lenis drives ScrollTrigger
gsap.ticker.add((time) => lenis.raf(time * 1000)); // GSAP's ticker is the only loop
gsap.ticker.lagSmoothing(0);
```

- Import from `lenis/react` / `lenis`; the old `@studio-freight` package is retired.
- Smoothing is off on touch (`syncTouch: false`) and the whole initialiser no-ops
  under reduced motion.
- Implemented in `src/lib/motion.ts` → `initSmoothScroll()`.

### 4. `@paper-design/shaders-react`, not three.js / r3f / ogl

The original stack pick leaned toward three.js via react-three-fiber v9 + drei,
lazily mounted. Component-hunt iteration 3 overrode it: the background is a
shader backdrop, not a 3D scene, so the entire three ecosystem was unnecessary.

| Candidate | Verdict |
|---|---|
| `@paper-design/shaders-react` | **Adopted.** Apache-2.0, zero-dep, own WebGL mount, React 19 peer, ~31.5 KB gz worst case measured, per-shader import |
| three + r3f + drei | Rejected. ~150 KB gz core + ~30 KB fiber for no 3D scene; drei has React 19 rough edges (pmndrs/drei#2260) — pin versions if ever needed |
| `shadergradient` | Rejected. Is the gradient-blob look being avoided, and drags full three |
| `ogl` | Rejected as redundant once paper-shaders was adopted. Viable alternative (Unlicense, 15-25 KB, hand-written GLSL) if a shader backdrop were the only GL need |

- **Rule: one GL library total.** Never mix ogl and three — that is two GL contexts
  and two bundles for one effect.
- Shader choice: `GrainGradient`. Dark-fit shaders in the library are
  grain-gradient, dithering, neuro-noise, simplex/perlin-noise, smoke-ring,
  voronoi, paper-texture. Mesh-gradient and metaballs were skipped as the
  overused look.
- `speed={0}` renders a static frame — that is the reduced-motion path, no separate
  poster needed. DPR is capped by us via `maxPixelCount`.
- Implemented in `src/components/Atmosphere.tsx`: `React.lazy` + dynamic import,
  mounted on `requestIdleCallback` so the chunk never blocks LCP.

### 5. shadcn/ui dropped; UI is hand-rolled on Tailwind 4 tokens

- The scaffold's ~62 shadcn components were cut to zero. The site is a bespoke
  editorial layout; a generic component kit contributed styling to fight, not reuse.
- Radix primitives remain acceptable *directly* if a genuine accessible primitive
  is ever needed (dialog, popover) — the kit's wrapper layer is what was rejected,
  not Radix.
- Tailwind 4 is CSS-first: tokens live in an `@theme` block in `src/index.css` and
  there is no `tailwind.config.ts`. `@tailwindcss/vite` 4.3.2 supports Vite ^5-^8.

### 6. Terminal console hand-rolled

- ~180 lines, zero dependencies (`src/components/Terminal.tsx`).
- `react-terminal-ui` was the only healthy library (MIT, 4-8 KB) but every pixel
  would have been restyled anyway; its controlled API was cribbed, not installed.
- `react-terminal` has a packaging defect (hard React dependency).
  `@knpwrs/react-terminal` does not exist.

### 7. Self-hosted fonts

- Clash Display (display) + General Sans (body) — Fontshare, ITF-FFL licence,
  self-hosting permitted. JetBrains Mono (mono) — OFL.
- Served from `public/fonts/` as woff2 with the licence text alongside; no
  third-party font CDN, so no extra connection on the critical path.

### 8. Reduced motion is a build-time branch, not an afterthought

- Every timeline is constructed inside `gsap.matchMedia()` with a
  `prefers-reduced-motion` condition, so the reduced branch never builds the
  animation at all rather than building and disabling it.
- No component library ships this. It is a global layer we own
  (`src/lib/motion.ts`, `src/lib/reveal.ts`).
- Fallbacks: static layout, opacity-only reveals, static shader frame.

### 9. CSS scroll-driven animations: progressive enhancement only

`animation-timeline: scroll()` is still behind a flag in Firefox. Nothing
load-bearing may depend on it.

## Performance budget

Target: Lighthouse mobile >= 90.

| Metric | Target |
|---|---|
| Initial JS, pre-WebGL | <= 130 KB gz |
| Lazy WebGL chunk | 160-200 KB gz, post-LCP |
| LCP | < 2.0s — headline text or poster, never the canvas |
| CLS | ~0 (reserve the canvas box) |
| INP | < 200 ms |
| Fonts | 2 preloaded woff2 subsets, <= 60 KB |

Techniques: dynamic import + `requestIdleCallback` for the WebGL mount ·
IntersectionObserver scene lifecycle · DPR cap · `content-visibility: auto` below
the fold · single Lenis RAF loop.

## Sources

gsap.com/pricing · webflow.com/blog/gsap-becomes-free · motion.dev/docs/react ·
r3f.docs.pmnd.rs/tutorials/v9-migration-guide · github.com/pmndrs/drei/issues/2260 ·
vite.dev/blog/announcing-vite8 · npmjs.com/package/@tailwindcss/vite ·
github.com/darkroomengineering/lenis · github.com/paper-design/shaders ·
caniuse.com/mdn-css_properties_animation-timeline_scroll · fontshare.com/licenses/itf-ffl ·
github.com/oframe/ogl · docs.astro.build/en/concepts/islands
