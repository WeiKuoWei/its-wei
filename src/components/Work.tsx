/**
 * Work: editorial numbered rows. Current role expanded, others collapsed detail.
 */
import { experiences } from "@/data/experiences";
import Section from "./Section";

const Work = () => (
  <Section id="work" index="01" kicker="work">
    <div className="space-y-0">
      {experiences.map((exp, i) => (
        <article key={exp.company} className="rule py-10 md:py-12 grid md:grid-cols-12 gap-6" data-reveal>
          <div className="md:col-span-1 font-mono text-paper-faint text-sm pt-2">
            {String(i + 1).padStart(2, "0")}
          </div>

          <div className="md:col-span-5">
            <h3 className="font-display font-medium text-3xl md:text-4xl tracking-tight text-paper">
              {exp.company}
            </h3>
            <p className="mt-2 text-paper-dim">
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

          <ul className="md:col-span-6 space-y-3 text-paper-dim leading-relaxed text-[0.95rem]">
            {exp.achievements.map((a) => (
              <li key={a} className="pl-4 relative">
                <span className="absolute left-0 top-[0.6em] w-1.5 h-px bg-accent" aria-hidden />
                {a}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </Section>
);

export default Work;
