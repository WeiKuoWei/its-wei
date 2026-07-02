/**
 * Contact: one massive mailto CTA + socials ledger. No form.
 */
import { EMAIL, SOCIALS } from "@/data/site";
import Section from "./Section";

const Contact = () => (
  <Section id="contact" index="05" kicker="contact">
    <div data-reveal>
      <p className="text-paper-dim max-w-md">
        Open to opportunities in agents, ML systems, and full-stack AI. Based in Taipei, works everywhere.
      </p>
      <a
        href={`mailto:${EMAIL}`}
        className="group block mt-10 font-display font-semibold tracking-[-0.03em] leading-none text-[clamp(1.8rem,7.5vw,7rem)] text-paper hover:text-accent transition-colors break-all"
      >
        {EMAIL}
        <span className="inline-block ml-3 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2">
          ↗
        </span>
      </a>
    </div>

    <div className="mt-16 grid md:grid-cols-3 gap-px bg-ink-3 border border-ink-3" data-reveal>
      {SOCIALS.map((s) => (
        <a
          key={s.id}
          href={s.href}
          target={s.id === "email" ? undefined : "_blank"}
          rel={s.id === "email" ? undefined : "noopener noreferrer"}
          className="bg-ink p-6 group hover:bg-ink-2 transition-colors"
        >
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-paper-faint">{s.label}</p>
          <p className="mt-2 text-paper group-hover:text-accent transition-colors font-mono text-sm">
            {s.handle} ↗
          </p>
        </a>
      ))}
    </div>
  </Section>
);

export default Contact;
