/**
 * Editorial section shell: index number + mono kicker over a rule line.
 */
import { ReactNode } from "react";

interface Props {
  id: string;
  index: string; // "01"
  kicker: string;
  children: ReactNode;
}

const Section = ({ id, index, kicker, children }: Props) => (
  <section id={id} className="relative px-5 md:px-10 py-24 md:py-36 scroll-mt-16">
    <div className="max-w-[1400px] mx-auto">
      <h2 className="sr-only">{kicker}</h2>
      <div className="rule pt-4 flex items-baseline justify-between" data-reveal>
        <span className="kicker">
          <span className="text-accent">{index}</span> / {kicker}
        </span>
        <span className="kicker hidden md:inline" aria-hidden>
          wei kuo — {kicker}
        </span>
      </div>
      <div className="mt-12 md:mt-16">{children}</div>
    </div>
  </section>
);

export default Section;
