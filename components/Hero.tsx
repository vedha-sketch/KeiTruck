"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

const metrics = [
  { value: "260", unit: "mi", label: "Range" },
  { value: "40", unit: "min", label: "80% Charge" },
  { value: "300", unit: "Ah", label: "Energy Storage" },
  { value: "700", unit: "lb", label: "Payload" },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-paper"
    >
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          onEnded={(e) => {
            e.currentTarget.style.animation = "none";
            setTimeout(() => {
              e.currentTarget.style.animation = "fade-in-video 0.25s ease-in forwards";
              e.currentTarget.play();
            }, 0);
          }}
          className="h-full w-full object-cover"
        >
          <source src="/Kei Truck Start Page.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay scoped to video only */}
        <div className="absolute inset-0 bg-black/10" />
      </div>


      {/* Content */}
      <div className="relative z-10 w-full pb-12 md:pb-16">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-14">
          <div className="flex items-start justify-between gap-8">
            {/* Headline — left */}
            <Reveal delay={0.1} scale={0.96}>
              <h1
                style={{
                  textShadow:
                    "0 2px 8px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="font-display text-[9vw] font-medium uppercase leading-[1.15] tracking-[0.1em] text-white md:text-[5.5vw] lg:text-[4.8vw]">
                  Power
                </div>
                <div className="font-display text-[9vw] font-medium uppercase leading-[1.15] tracking-[0.1em] text-white md:text-[5.5vw] lg:text-[4.8vw]">
                  the Future
                </div>
                <div className="font-display text-[6vw] font-light uppercase leading-[1.15] tracking-[0.1em] text-white/80 md:text-[3.5vw] lg:text-[3vw]">
                  Sustain the Craft
                </div>
              </h1>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
