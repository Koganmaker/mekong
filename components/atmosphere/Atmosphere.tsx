"use client";

import { useMemo } from "react";

type Particle = {
  left: number;
  delay: number;
  duration: number;
  size: number;
  drift: number;
  color: string;
};

const COUNT = 38;

// Pseudo-random with stable seed so SSR/hydration match
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export function Atmosphere() {
  const particles = useMemo<Particle[]>(() => {
    const r = seededRandom(42);
    return Array.from({ length: COUNT }).map(() => ({
      left: r() * 100,
      // All embers start in the first 4s after page load
      delay: r() * 4,
      // Slower rise: 13 to 24s — last embers gone around 28s
      duration: 13 + r() * 11,
      size: 2 + r() * 4,
      drift: (r() - 0.5) * 90,
      color: r() > 0.35 ? "#ff8a3c" : "#ff6035",
    }));
  }, []);

  return (
    <div
      className="fixed inset-0 -z-40 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Floating embers */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="ember"
          style={
            {
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.color,
              boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              ["--drift" as string]: `${p.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
