/**
 * Work: pinned horizontal deck (variant W-A, Wei pick 2026-07-13) — one job per
 * slide with a single focal metric, stats debrief strip pinned above the deck.
 * Base DOM is a static vertical stack; the pin + horizontal tween is layered on
 * only for md+ pointers with motion allowed (gsap.matchMedia), so reduced-motion
 * and mobile get every slide stacked and fully readable.
 */
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, OK_MOTION } from "@/lib/motion";
import { experiences } from "@/data/experiences";
import Section from "./Section";

// Career start = May 2023 (Metamory, earliest period in experiences). Whole
// elapsed years only, so "N+" never overstates before an anniversary.
const CAREER_START = new Date(2023, 4);

const yearsBuilding = () => {
  const now = new Date();
  const months = (now.getFullYear() - CAREER_START.getFullYear()) * 12 + (now.getMonth() - CAREER_START.getMonth());
  return `${Math.floor(months / 12)}+`;
};

const stats = [
  { value: String(experiences.length).padStart(2, "0"), label: "positions" },
  { value: yearsBuilding(), label: "years building" },
  { value: "AI/ML", label: "agents & automation" },
  { value: "TW·HK·RMT", label: "taiwan · hong kong · remote" },
];

const Work = () => {
  const root = useRef<HTMLDivElement>(null);
  const posRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(`(min-width: 768px) and ${OK_MOTION}`, () => {
        const pin = root.current!.querySelector<HTMLElement>("[data-deck-pin]")!;
        const track = root.current!.querySelector<HTMLElement>("[data-deck]")!;
        const slides = gsap.utils.toArray<HTMLElement>("[data-deck-slide]", track);
        const n = slides.length;
        if (n < 2) return;

        gsap.set(track, { display: "flex", flexDirection: "row", width: `${n * 100}%` });
        gsap.set(slides, { width: `${100 / n}%` });
        gsap.set("[data-deck-rail]", { display: "flex" });

        gsap.to(track, {
          xPercent: (-100 * (n - 1)) / n,
          ease: "none",
          scrollTrigger: {
            trigger: pin,
            pin: true,
            scrub: 0.6,
            start: "top 96px",
            end: () => `+=${window.innerHeight * (n - 1)}`,
            onUpdate: (self) => {
              const i = Math.round(self.progress * (n - 1));
              if (posRef.current) posRef.current.textContent = String(i + 1).padStart(2, "0");
              if (barRef.current) barRef.current.style.width = `${self.progress * 100}%`;
            },
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <Section id="work" index="01" kicker="work">
      <div ref={root}>
        <div data-deck-pin>
          {/* stats debrief strip */}
          <div data-stats className="grid grid-cols-2 md:grid-cols-4 border-y border-rule" data-reveal>
            {stats.map((s) => (
              <div key={s.label} className="px-5 py-5 md:px-6 border-r border-rule last:border-r-0 max-md:even:border-r-0 max-md:nth-[n+3]:border-t max-md:nth-[n+3]:border-t-rule">
                <span className="block font-display font-semibold text-2xl md:text-3xl tracking-tight text-paper">
                  {s.value}
                </span>
                <span className="mt-1 block font-mono text-[0.62rem] uppercase tracking-[0.15em] text-paper-faint">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* deck track — vertical stack by default; pinned horizontal deck on md+ with motion */}
          <div className="overflow-hidden">
            <div data-deck>
              {experiences.map((exp, i) => (
                <article key={exp.company} data-deck-slide className="relative py-12 md:py-16 md:px-2 md:min-h-[26rem] flex flex-col md:justify-center gap-6 border-b border-rule md:border-b-0">
                  <span
                    className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 font-display font-semibold text-[12rem] leading-none text-ink-3 select-none pointer-events-none"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-paper-faint text-sm" aria-hidden>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display font-semibold text-5xl md:text-7xl tracking-tight text-paper leading-[0.95]">
                        {exp.company}
                      </h3>
                    </div>
                    <p className="mt-3 text-paper-dim">
                      {exp.role}
                      {exp.current && (
                        <span className="ml-3 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-term">
                          ● now
                        </span>
                      )}
                    </p>
                    <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-paper-faint">
                      {exp.period} · {exp.location}
                    </p>
                  </div>

                  <p className="font-display font-medium text-xl md:text-[1.65rem] leading-snug tracking-tight text-accent max-w-3xl text-balance">
                    {exp.headline}
                  </p>

                  <ul className="space-y-3 text-paper-dim leading-relaxed text-[0.95rem] max-w-3xl">
                    {exp.achievements.map((a, j) => (
                      <li key={a} className="pl-9 relative">
                        <span className="absolute left-0 top-[0.28em] font-mono text-[0.68rem] text-paper-faint" aria-hidden>
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          {/* progress rail — only rendered useful in deck mode; hidden in stacked fallback */}
          <div data-deck-rail className="hidden items-center gap-4 border-t border-rule py-4 font-mono text-[0.7rem] tracking-[0.15em] text-paper-faint" aria-hidden>
            <span>
              <span ref={posRef} className="text-accent">
                01
              </span>{" "}
              / {String(experiences.length).padStart(2, "0")}
            </span>
            <span className="relative flex-1 h-px bg-rule">
              <span ref={barRef} className="absolute left-0 top-0 h-px bg-accent" style={{ width: "0%" }} />
            </span>
            <span>scroll</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Work;
