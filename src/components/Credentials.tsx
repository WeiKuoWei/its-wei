/**
 * Credentials: compact editorial ledger + skills matrix. No carousel.
 */
import { credentials } from "@/data/certificates";
import { skillCategories, statsData } from "@/data/skills";
import Section from "./Section";

const Credentials = () => (
  <Section id="credentials" index="04" kicker="credentials">
    {/* stats strip */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink-3 border border-ink-3 mb-20" data-reveal>
      {statsData.map((s) => (
        <div key={s.label} className="bg-ink p-6 md:p-8">
          <p className="font-display font-semibold text-4xl md:text-5xl text-paper">{s.value}</p>
          <p className="mt-2 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-paper-dim">{s.label}</p>
        </div>
      ))}
    </div>

    <div className="grid md:grid-cols-2 gap-16">
      {/* credentials ledger */}
      <div>
        <h3 className="font-display font-medium text-2xl tracking-tight mb-6" data-reveal>
          Credentials
        </h3>
        <div>
          {credentials.map((c) => {
            const row = (
              <div className="rule py-4 flex items-baseline justify-between gap-4 group">
                <div>
                  <p className="text-paper text-[0.95rem] group-hover:text-accent transition-colors">
                    {c.title}
                    {c.file && <span className="ml-2 text-paper-faint text-xs">PDF ↗</span>}
                  </p>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-paper-faint mt-1">
                    {c.issuer} — {c.detail}
                  </p>
                </div>
                <span className="font-mono text-[0.65rem] text-paper-faint whitespace-nowrap">{c.date}</span>
              </div>
            );
            return c.file ? (
              <a
                key={c.title}
                href={`${import.meta.env.BASE_URL}${c.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                data-reveal
              >
                {row}
              </a>
            ) : (
              <div key={c.title} data-reveal>
                {row}
              </div>
            );
          })}
        </div>
      </div>

      {/* skills matrix */}
      <div>
        <h3 className="font-display font-medium text-2xl tracking-tight mb-6" data-reveal>
          Stack
        </h3>
        <div className="space-y-6">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="rule pt-4 grid grid-cols-12 gap-3" data-reveal>
              <p className="col-span-4 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-paper-faint pt-1">
                {cat.title}
              </p>
              <p className="col-span-8 text-paper-dim text-[0.9rem] leading-relaxed">{cat.skills.join(", ")}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export default Credentials;
