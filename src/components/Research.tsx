/**
 * Research: publications ledger + lab roles.
 */
import { publications, research } from "@/data/research";
import Section from "./Section";

const Research = () => (
  <Section id="research" index="02" kicker="research">
    {/* Publications ledger */}
    <div className="mb-20">
      <h3 className="font-display font-medium text-2xl md:text-3xl tracking-tight mb-8" data-reveal>
        Publications
      </h3>
      <div>
        {publications.map((pub, i) => {
          const inner = (
            <div className="rule py-6 grid md:grid-cols-12 gap-3 group">
              <span className="md:col-span-1 font-mono text-paper-faint text-sm pt-1">
                P{i + 1}
              </span>
              <p className="md:col-span-8 text-paper leading-snug group-hover:text-accent transition-colors text-balance">
                {pub.title}
                {pub.link && <span className="ml-2 text-paper-faint group-hover:text-accent">↗</span>}
              </p>
              <p className="md:col-span-3 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-paper-dim pt-1 md:text-right">
                {pub.role}
                <br />
                <span className="text-paper-faint">{pub.venue}</span>
              </p>
            </div>
          );
          return pub.link ? (
            <a key={pub.title} href={pub.link} target="_blank" rel="noopener noreferrer" className="block" data-reveal>
              {inner}
            </a>
          ) : (
            <div key={pub.title} data-reveal>
              {inner}
            </div>
          );
        })}
      </div>
    </div>

    {/* Lab roles */}
    <div className="grid md:grid-cols-2 gap-10">
      {research.map((lab) => (
        <div key={lab.institution} className="rule pt-6" data-reveal>
          <h4 className="font-display font-medium text-xl tracking-tight text-paper">{lab.institution}</h4>
          <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-paper-faint">
            {lab.role} · {lab.period}
          </p>
          <ul className="mt-5 space-y-2.5 text-paper-dim text-[0.95rem] leading-relaxed">
            {lab.highlights.map((h) => (
              <li key={h} className="pl-4 relative">
                <span className="absolute left-0 top-[0.6em] w-1.5 h-px bg-accent" aria-hidden />
                {h}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

export default Research;
