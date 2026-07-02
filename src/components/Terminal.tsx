/**
 * wei@taipei agent console — the site's signature interaction.
 * Hand-rolled (~180 lines, zero deps). Opens via nav button or backtick key.
 * Terminal green lives ONLY here.
 */
import { KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";
import { EMAIL, RESUME_PATH, SOCIALS } from "@/data/site";
import { experiences } from "@/data/experiences";
import { allProjects } from "@/data/projects";
import { publications } from "@/data/research";
import { scrollToId } from "@/lib/motion";

interface Line {
  type: "in" | "out";
  text: string;
}

const BOOT: Line[] = [
  { type: "out", text: "wei-console 2.0 — agent runtime attached" },
  { type: "out", text: "type `help` for commands" },
];

const HELP = [
  "help          this list",
  "whoami        one-liner",
  "work          employment log",
  "projects      shipped things",
  "papers        publications",
  "resume        open resume pdf",
  "contact       how to reach me",
  "goto <id>     scroll to section (work/research/projects/credentials/contact)",
  "clear         wipe console",
  "exit          close console",
];

const Terminal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const [lines, setLines] = useState<Line[]>(BOOT);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [lines]);

  const print = useCallback((out: string[]) => {
    setLines((prev) => [...prev, ...out.map((text) => ({ type: "out" as const, text }))]);
  }, []);

  const run = useCallback(
    (raw: string) => {
      const cmd = raw.trim();
      setLines((prev) => [...prev, { type: "in", text: cmd }]);
      if (!cmd) return;
      setHistory((h) => [cmd, ...h]);
      setHistIdx(-1);

      const [name, ...args] = cmd.toLowerCase().split(/\s+/);
      switch (name) {
        case "help":
          print(HELP);
          break;
        case "whoami":
          print(["Wei Kuo — co-founder & founding engineer @ GitRoll. Builds agents that build things."]);
          break;
        case "work":
          print(experiences.map((e) => `${e.period.padEnd(22)} ${e.company} — ${e.role}`));
          break;
        case "projects":
          print(allProjects.map((p) => `${p.title}  →  ${p.link}`));
          break;
        case "papers":
          print(publications.map((p, i) => `[P${i + 1}] ${p.title} (${p.role}, ${p.venue})`));
          break;
        case "resume":
          print(["opening resume…"]);
          window.open(`${import.meta.env.BASE_URL}${RESUME_PATH}`, "_blank", "noopener");
          break;
        case "contact":
          print([`email: ${EMAIL}`, ...SOCIALS.filter((s) => s.id !== "email").map((s) => `${s.label.toLowerCase()}: ${s.href}`)]);
          break;
        case "goto": {
          const id = args[0];
          if (id && ["work", "research", "projects", "credentials", "contact", "top"].includes(id)) {
            print([`→ ${id}`]);
            scrollToId(id);
            onClose();
          } else print(["usage: goto <work|research|projects|credentials|contact>"]);
          break;
        }
        case "sudo":
          print(
            args.join(" ") === "hire-me"
              ? ["permission granted. drafting offer…", `(actually: ${EMAIL})`]
              : ["sudo: only `sudo hire-me` is permitted here"],
          );
          break;
        case "ls":
          print(["work/  research/  projects/  credentials/  contact/"]);
          break;
        case "pwd":
          print(["/home/wei/portfolio"]);
          break;
        case "clear":
          setLines([]);
          break;
        case "exit":
          onClose();
          break;
        default:
          print([`command not found: ${name} — try \`help\``]);
      }
    },
    [onClose, print],
  );

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(histIdx + 1, history.length - 1);
      if (history[next]) {
        setHistIdx(next);
        setInput(history[next]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = histIdx - 1;
      setHistIdx(next);
      setInput(next >= 0 ? history[next] : "");
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-ink/60 backdrop-blur-[2px]"
      onClick={onClose}
      role="dialog"
      aria-label="Terminal console"
    >
      <div
        className="w-full md:max-w-2xl md:mx-6 bg-[#060607] border border-ink-3 shadow-2xl font-mono text-[0.8rem] leading-relaxed"
        onClick={(e) => {
          e.stopPropagation();
          inputRef.current?.focus();
        }}
      >
        {/* title bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-ink-3 text-paper-faint text-[0.65rem] uppercase tracking-[0.16em]">
          <span>wei@taipei — console</span>
          <button onClick={onClose} className="hover:text-paper cursor-pointer" aria-label="Close terminal">
            esc ✕
          </button>
        </div>

        {/* scrollback */}
        <div ref={scrollRef} className="px-4 py-3 h-72 md:h-80 overflow-y-auto">
          {lines.map((l, i) =>
            l.type === "in" ? (
              <p key={i}>
                <span className="text-term">wei@taipei</span>
                <span className="text-paper-faint">:~$</span> <span className="text-paper">{l.text}</span>
              </p>
            ) : (
              <p key={i} className="text-paper-dim whitespace-pre-wrap">
                {l.text}
              </p>
            ),
          )}
          {/* prompt */}
          <p className="flex">
            <span className="text-term shrink-0">wei@taipei</span>
            <span className="text-paper-faint shrink-0">:~$&nbsp;</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKey}
              className="flex-1 bg-transparent outline-none text-paper caret-term"
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
              aria-label="Terminal input"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
