/**
 * Terminal-styled 404.
 */
import { Link } from "react-router-dom";
import DecoderText from "@/components/DecoderText";

const NotFound = () => (
  <main className="min-h-svh flex flex-col items-center justify-center px-6 font-mono">
    <p className="text-paper-faint text-[0.7rem] tracking-[0.08em]">wei@taipei:~$ cat {location.pathname}</p>
    <h1 className="mt-6 font-display font-semibold text-[clamp(4rem,18vw,12rem)] leading-none text-paper">
      4<span className="text-accent">0</span>4
    </h1>
    <p className="mt-4 text-paper-dim text-sm">
      <DecoderText text="cat: no such file or directory" />
    </p>
    <Link
      to="/"
      className="mt-10 text-term text-sm hover:brightness-125 transition"
    >
      cd ~ ↵
    </Link>
  </main>
);

export default NotFound;
