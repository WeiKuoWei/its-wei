/**
 * Full-viewport shader atmosphere behind all content (p5aholic model).
 * Lazy-mounted after first paint; static under reduced motion; plain ink if WebGL fails.
 */
import { lazy, Suspense, useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

const GrainField = lazy(() =>
  import("@paper-design/shaders-react").then((m) => ({
    default: m.GrainGradient,
  })),
);

const Atmosphere = () => {
  const [mounted, setMounted] = useState(false);
  const reduced = prefersReducedMotion();

  useEffect(() => {
    // defer heavy chunk until the browser is idle so it never blocks LCP
    if (typeof requestIdleCallback === "function") {
      const id = requestIdleCallback(() => setMounted(true), { timeout: 2500 });
      return () => cancelIdleCallback(id);
    }
    const id = setTimeout(() => setMounted(true), 350);
    return () => clearTimeout(id);
  }, []);

  return (
    <div aria-hidden className="fixed inset-0 z-0 pointer-events-none">
      {mounted && (
        <Suspense fallback={null}>
          <GrainField
            className="h-full w-full"
            colors={["#0a0a0b", "#141217", "#1c1410", "#0d0d10"]}
            colorBack="#0a0a0b"
            softness={0.85}
            intensity={0.35}
            noise={0.28}
            shape="corners"
            speed={reduced ? 0 : 0.45}
            maxPixelCount={1_600_000}
          />
        </Suspense>
      )}
      {/* vignette to keep edges ink-dark for text contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,11,0.55)_78%,rgba(10,10,11,0.9)_100%)]" />
    </div>
  );
};

export default Atmosphere;
