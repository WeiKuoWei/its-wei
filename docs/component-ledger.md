# Component Ledger

Adopt/reject record for every UI component, library, and code lift considered for
this site. Harvested 2026-07-13 from a gitignored planning directory (component
hunt, 4 iterations, 2026-07-02).

## The rule

**Append to this ledger before adding any dependency.** A round that wants a new
package states here what it hunted, what it adopted, and what it rejected and why.
A dependency that arrives without a row is a dependency nobody argued for.

Two standing constraints from the stack decisions
([stack-decisions.md](stack-decisions.md)):

1. **One animation runtime.** A single `motion` import pulls the whole
   framer-motion/Motion runtime (~30-45 KB gz) alongside GSAP. Copy-paste sources
   must be GSAP-native or CSS-only as-is; motion-based ones are ported to GSAP or
   rejected.
2. **One GL library.** ogl and three are never both installed.

Copy-paste beats install: React Bits, Magic UI, and Codrops components are pasted
into `src/` and restyled, not depended on.

## Iteration 1 — React animated-component libraries

React Bits is the anchor library: the only major copy-paste catalogue with
GSAP-native components, so it needs no second animation runtime. Every
Motion-based catalogue (Magic UI animations, Aceternity, Fancy, Animata) fails
constraint 1.

| Slot | Verdict | Licence |
|---|---|---|
| Hero split/reveal text | React Bits Split Text (wraps GSAP SplitText, unstyled) | MIT + Commons Clause |
| Scramble text | Hand-roll on GSAP ScrambleTextPlugin (~30 lines; plugin is in the gsap package) | GSAP standard |
| Scroll section transitions | Hand-roll GSAP ScrollTrigger + Lenis; React Bits Scroll Reveal for text blocks. The design language stays bespoke | MIT + CC |
| Project cards | React Bits Spotlight Card / Tilted Card; choreography bespoke | MIT + CC |
| Marquee / ticker | Magic UI Marquee (pure CSS, no motion dependency) | MIT |
| Magnetic buttons | React Bits Magnet | MIT + CC |
| Custom cursor | React Bits Target Cursor (GSAP-based); needs reduced-motion + touch guards | MIT + CC |
| Dock / nav | Hand-roll (~60 lines GSAP). Magic UI Dock pulls motion — rejected | — |
| Terminal typing | Magic UI Terminal, motion import stripped and re-based on GSAP | MIT |
| Counters | React Bits Counter (GSAP variant) | MIT + CC |
| Timeline | Hand-roll GSAP ScrollTrigger. Aceternity Timeline is a *pattern* reference (sticky header + scroll beam) — steal the pattern, not the code | — |

**Rejected:** HeroUI (SaaS kit, wrong genre) · Eldora UI (stale since 2024) ·
cuicui (app UI) · uiverse (inconsistent, generic aesthetic) · 21st.dev (licensing
unclear — ideas only) · Aceternity (paywall + motion + is itself the templated look;
Timeline kept as a pattern reference) · Animata (nothing unique) · Fancy Components
(the best editorial text-effect catalogue, but 100% motion — port ideas to GSAP).

**Caveat:** no library ships `prefers-reduced-motion` handling. The global
`gsap.matchMedia()` layer is mandatory and ours.

## Iteration 2 — GSAP/Lenis official, Codrops, OSS repos

Licence ground truths, fetch-verified: public CodePen pens are automatically MIT
(blog.codepen.io/documentation/licensing) · downloadable Codrops demos are MIT,
commercial use OK with notice (tympanus.net/codrops/licensing) · Lenis is MIT.

| Pattern | Source | Lift |
|---|---|---|
| Lenis + ScrollTrigger sync | Lenis README recipe | Verbatim — see stack-decisions § 3 |
| Pin / scrub sections | Official ScrollTrigger showcase collection (codepen.io/collection/DkvGzg) | Code → `useGSAP` hooks |
| Image/canvas scrub sequence | GreenSock `imageSequence()` helper pen (VwgevYW) | Verbatim; add reduced-motion gate + lazy load |
| SplitText masked reveal | gsap.com/text + Codrops "SplitText to MorphSVG" | Code; new `mask` option, ~10 lines; re-split on `document.fonts.ready` |
| Scroll typography | codrops/ScrollTextMotion, ImageExpansionTypography | Code (Codrops org, MIT) |
| Menu overlay | codrops/EaseReverseClipMenu, MenuToGrid (Flip) | Code |
| Horizontal gallery | `xPercent` + pin recipe (official pens); ElasticGridScroll lag technique | Code |
| Reduced motion | `gsap.matchMedia()` — build every timeline inside the context | Pattern → shared hook |
| Dark terminal theme tokens, decoder text | HamishMW/portfolio (MIT, 3.4k stars) | Theme tokens + decoder-text effect |

**Study-only (no licence — do not copy):** olivierlarose/awwwards-landing-page
(re-implement from the tutorials) · AliBagheri2079 Snellenberg clone (also a
visual-clone ethics problem) · davidhckh/portfolio-2025 (NOASSERTION).

**Note:** godly.website is dead → recent.design. Codrops' GSAP Highlights hub is
the richest verified source. No React-19-native page-transition example exists;
immaterial for a single-page site.

## Iteration 3 — WebGL / shader / terminal

| Slot | Verdict |
|---|---|
| Shader background | **Adopt `@paper-design/shaders-react`** — eliminates three.js entirely for the background layer. Rationale, measurements, alternatives: stack-decisions § 4 |
| `shadergradient` | Skip — the gradient-blob look, and drags full three |
| three / r3f / drei | Conditional — only for a real 3D scene. drei 10.7.7 + fiber 9 + React 19 peers confirmed compatible |
| r3f scroll patterns | Reference pmndrs/examples (MIT, liftable): tying-canvas-to-scroll-offset, useintersect-and-scrollcontrols, lusion-connectors, shadermaterials |
| react-three-next | Reference only (Next-only): the tunnel-rat View portals pattern |
| Three.js Journey code | Do not copy (course copyright). Use the MIT ports in pmndrs/examples |
| Terminal | **Hand-roll** — see stack-decisions § 6. Crib crt-terminal's scanline/glow SCSS as an effect, not a dependency |
| ASCII / dither | paper-design dithering shaders (free once adopted) or a ~60-line canvas rasterizer. `ditherjs` is CC-BY-SA and dead — avoid |

## Iteration 4 — gap fill. Net: zero new dependencies

Every remaining gap was cheaper to hand-roll than to depend on.

| Gap | Verdict |
|---|---|
| Preloader | ~40 lines: GSAP counter tween (`snap: 1`) + decoder wordmark; exit on `Promise.all([document.fonts.ready, load])`, cap ~1.2s, no fake delay |
| OG / SEO | Hand-design one 1200x630 PNG; hardcode OG/Twitter meta in static `index.html` (scrapers do not run JS). React 19 hoists native `<title>`/`<meta>` — no helmet (abandoned) |
| Favicon | Inline SVG monogram with an embedded `prefers-color-scheme` dark variant, plus `.ico`/PNG and apple-touch-icon fallbacks (Safari still ignores SVG, so the fallback must read on both tab colours) |
| Easter eggs | `useKonami` hand-roll (~15 lines; libraries are stale) · console `%c` signature (~10 lines) |
| Focus / skip link | ~15 lines CSS: `:focus-visible` accent outline (never bare `:focus`) + translateY skip link → WCAG 2.4.1 / 2.4.7 |
| 404 | ~50 lines: decoder heading + terminal body. Build copies `index.html` → `404.html` (the GitHub Pages SPA trick) |

## Hunt closed

Four iterations; stopped because iteration 4 adopted zero new dependencies (dry
for adoption) and every UI slot had an adopt-or-justified-hand-roll verdict.

**Net dependency additions for the rebuild:** `gsap`, `@gsap/react`, `lenis`,
`@paper-design/shaders-react`. Everything else was copy-paste or hand-rolled.

## Round log

Rounds after the rebuild append here.

| Date | Round | Dependencies added | Note |
|---|---|---|---|
| 2026-07-13 | 02 — work-deck polish | **none** | The pinned horizontal Work deck (`src/components/Work.tsx`) is built on the GSAP already present: ScrollTrigger pin + `xPercent` tween + nearest-boundary snap, inside `gsap.matchMedia()`. The iteration-2 "horizontal gallery" recipe was the pattern; no carousel or deck library was needed |
