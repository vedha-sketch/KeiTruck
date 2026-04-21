"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#vision", label: "Vision" },
  { href: "#process", label: "Process" },
  { href: "#utility", label: "Utility" },
  { href: "#specs", label: "Specifications" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-ink/8 bg-paper/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
      style={
        scrolled
          ? { backgroundColor: "rgba(241, 240, 232, 0.85)" }
          : {}
      }
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 md:px-14 md:py-7">
        <a href="#top">
          <Logo dark={scrolled} />
        </a>

        <nav className="items-center gap-8 flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-display text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors"
              style={
                scrolled
                  ? {
                      color: "#1A1A1A",
                    }
                  : {
                      color: "rgba(255, 255, 255, 0.8)",
                      textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
                    }
              }
            >
              {l.label}
              <span
                className="absolute -bottom-1.5 left-0 h-[0.5px] w-0 transition-all duration-500 group-hover:w-full"
                style={{
                  backgroundColor: scrolled ? "#1A1A1A" : "white",
                }}
              />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
