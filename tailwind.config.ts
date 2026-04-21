import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  safelist: [
    { pattern: /^bg-(paper|bone|ivory|stone|ink|graphite|brass|bronze|white)/ },
    { pattern: /^text-(paper|bone|ink|graphite|ash|slate|brass|bronze|platinum|white)/ },
    { pattern: /^border-(paper|bone|ink|graphite|brass|white)/ },
  ],
  theme: {
    extend: {
      colors: {
        // Airform soft-tech palette
        paper: "#F1F0E8",      // alabaster / bone background — warm, premium off-white
        bone: "#F7F6F2",       // lighter surface, cards
        ivory: "#EFEFEA",      // tinted divider band
        stone: "#E5E3DA",      // soft gray-warm block
        ink: "#1A1A1A",        // graphite black — primary text
        obsidian: "#0F0F0F",   // hover/pressed darkening
        graphite: "#3D3D3D",   // body text, secondary headlines
        slate: "#5C5C5C",      // tertiary text
        ash: "#8C8C8C",        // mono labels
        platinum: "#6E6E6E",   // subtle accent text
        brass: "#C5A059",      // metallic brass accent — hardware/luxury touch
        bronze: "#B8956A",     // warm-brass alternative
        taupe: "#A89080",      // muted warm gray
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        luxury: "0.15em",
        engineered: "0.08em",
        widest: "0.18em",
        ultra: "0.4em",
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 1.2s ease-out both",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
