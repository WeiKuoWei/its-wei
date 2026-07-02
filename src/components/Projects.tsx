/**
 * Projects: spotlight-hover cards (pattern ref: React Bits Spotlight Card, re-based
 * to plain CSS vars — single accent glow, no gradient slop).
 */
import { MouseEvent } from "react";
import { allProjects } from "@/data/projects";
import Section from "./Section";

const handleMove = (e: MouseEvent<HTMLElement>) => {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
};

const Projects = () => (
  <Section id="projects" index="03" kicker="projects">
    <div className="grid md:grid-cols-3 gap-5">
      {allProjects.map((p) => {
        const Tag = p.link ? "a" : "div";
        return (
          <Tag
            key={p.title}
            {...(p.link ? { href: p.link, target: "_blank", rel: "noopener noreferrer" } : {})}
            onMouseMove={handleMove}
            data-reveal
            className="group relative overflow-hidden border border-ink-3 bg-ink-2/60 p-7 min-h-56 flex flex-col justify-between transition-colors hover:border-paper-faint"
            style={{
              backgroundImage:
                "radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(255,77,0,0.08), transparent 65%)",
            }}
          >
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-paper-faint">{p.category}</p>
              <h3 className="mt-3 font-display font-medium text-xl tracking-tight text-paper group-hover:text-accent transition-colors">
                {p.title}
                {p.link && (
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                )}
              </h3>
              <p className="mt-3 text-sm text-paper-dim leading-relaxed">{p.description}</p>
            </div>
            <p className="mt-6 font-mono text-[0.65rem] tracking-wide text-paper-dim">
              {p.tech.join(" · ")}
            </p>
          </Tag>
        );
      })}
    </div>
  </Section>
);

export default Projects;
