/**
 * Footer: live Taipei clock (personality anchor), version, source link.
 */
import { useEffect, useState } from "react";
import { SITE_VERSION } from "@/data/site";

const taipeiTime = () =>
  new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Taipei",
  }).format(new Date());

const Footer = () => {
  const [time, setTime] = useState(taipeiTime);

  useEffect(() => {
    const t = setInterval(() => setTime(taipeiTime()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <footer className="relative z-10 px-5 md:px-10 pb-8">
      <div className="max-w-[1400px] mx-auto rule pt-5 flex flex-wrap items-baseline justify-between gap-3 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-paper-faint">
        <span>© {new Date().getFullYear()} Wei Kuo</span>
        <span className="text-paper-dim">
          Taipei <span className="text-term tabular-nums">{time}</span> UTC+8
        </span>
        <span>
          {SITE_VERSION} ·{" "}
          <a
            href="https://github.com/WeiKuoWei/its-wei"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-paper transition-colors"
          >
            source ↗
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
