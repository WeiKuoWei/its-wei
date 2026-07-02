/**
 * Fixed minimal nav: monogram, mono anchors, resume, terminal toggle.
 */
import { NAV_ITEMS, RESUME_PATH } from "@/data/site";
import { scrollToId } from "@/lib/motion";

interface Props {
  onTerminal: () => void;
}

const Nav = ({ onTerminal }: Props) => (
  <header className="fixed top-0 inset-x-0 z-40 bg-ink/70 backdrop-blur-sm">
    <nav className="max-w-[1400px] mx-auto px-5 md:px-10 h-14 flex items-center justify-between font-mono text-[0.72rem] tracking-[0.14em] uppercase">
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          scrollToId("top");
        }}
        className="text-paper font-medium"
      >
        WK<span className="text-accent">.</span>
      </a>

      <div className="hidden md:flex items-center gap-7">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToId(item.id);
            }}
            className="text-paper-dim hover:text-paper transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-5">
        <a
          href={`${import.meta.env.BASE_URL}${RESUME_PATH}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-paper-dim hover:text-paper transition-colors"
        >
          Resume ↗
        </a>
        <button
          onClick={onTerminal}
          aria-label="Open terminal"
          title="Open terminal (`)"
          className="text-term hover:brightness-125 transition cursor-pointer"
        >
          {">"}_
        </button>
      </div>
    </nav>
  </header>
);

export default Nav;
