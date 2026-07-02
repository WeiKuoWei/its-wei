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
  <section id={id} className="relative px-5 md:px-10 py-16 md:py-24 scroll-mt-16">
    <div className="max-w-[1400px] mx-auto">
      <h2 className="sr-only">{kicker}</h2>
      <div className="rule pt-4" data-reveal>
        <span className="kicker">
          <span className="text-accent">{index}</span> / {kicker}
        </span>
      </div>
      <div className="mt-10 md:mt-14">{children}</div>
    </div>
  </section>
);

export default Section;
