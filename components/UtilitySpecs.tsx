"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import TruckModelViewer from "./TruckModelViewer";

const luxuryFeatures = [
  {
    n: "01",
    title: "High-Powered Charging",
    body: "DC fast charging at 50 kW via CCS1 and AC Level 2 at 11.5 kW via J1772 ensure your truck is ready when you are. Recharge to 80% in just 40 minutes.",
    image: "/1charging.png",
  },
  {
    n: "02",
    title: "Three 120V Outlets",
    body: "Pure sine-wave power delivers clean, stable energy. Run a chop saw, inverter welder, and espresso machine simultaneously. 30A continuous draw with thermal headroom for all-day work.",
    image: "/2outlets.png",
  },
  {
    n: "03",
    title: "Comfortable Cab",
    body: "Two premium seats designed for both daily driving and extended workdays. Climate control and ergonomic support make every journey as refined as the engineering.",
    image: "/3seats.png",
  },
  {
    n: "04",
    title: "214 Horsepower Electric Motor",
    body: "Instant torque delivery from zero RPM provides the responsive performance of a finely-tuned sports car. A single-speed reduction drive maximizes efficiency without compromise.",
    image: "/4motor.png",
  },
  {
    n: "05",
    title: "400W Solar Array",
    body: "Roof-mounted monocrystalline panels generate clean energy continuously. Recharge while you work, ensuring your power station never runs dry.",
    image: "/5solar.png",
  },
  {
    n: "06",
    title: "28.8 kWh Lithium-Ion Battery",
    body: "Advanced battery chemistry with active liquid thermal management delivers 260 miles of range on a single charge. Choose between NMC and LFP for your specific needs.",
    image: "/6battery.png",
  },
];

const colorOptions = [
  { name: "Obsidian Black", hex: "#0D0D0D" },
  { name: "Midnight Navy", hex: "#0A1628" },
  { name: "British Racing Green", hex: "#1A3A2A" },
  { name: "Bordeaux", hex: "#3D0C11" },
  { name: "Champagne Gold", hex: "#C9A84C" },
  { name: "Alpine White", hex: "#F5F4F0" },
];

function OutletIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
    >
      <circle cx="16" cy="16" r="13" />
      <rect x="11" y="9" width="2" height="7" />
      <rect x="19" y="9" width="2" height="7" />
      <circle cx="16" cy="22" r="1.6" />
    </svg>
  );
}

function ToolIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
    >
      <path d="M6 26 L20 12 M20 12 L24 8 L26 10 L22 14 L20 12 Z" />
      <path d="M4 28 L8 24" />
      <path d="M14 18 L18 22" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
    >
      <path d="M18 4 L8 18 L15 18 L13 28 L24 13 L17 13 L18 4 Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden
    >
      <circle cx="16" cy="16" r="6" />
      <path d="M16 3 V7 M16 25 V29 M3 16 H7 M25 16 H29 M6.5 6.5 L9.3 9.3 M22.7 22.7 L25.5 25.5 M6.5 25.5 L9.3 22.7 M22.7 9.3 L25.5 6.5" />
    </svg>
  );
}

const cells = [
  {
    span: "md:col-span-2 md:row-span-2",
    title: "3 × 120V",
    sub: "Weatherproof Bed Outlets",
    body: "Pure sine-wave power. Run a chop saw, an inverter welder, and the espresso machine — simultaneously, anywhere.",
    icon: <OutletIcon />,
    accent: true,
  },
  {
    title: "30A",
    sub: "Continuous Draw",
    body: "Sustained heavy-tool load with thermal headroom for the long workday.",
    icon: <BoltIcon />,
  },
  {
    title: "IP67",
    sub: "Sealed Connectors",
    body: "Rated for rain, dust, and the back-of-the-truck reality.",
    icon: <ToolIcon />,
  },
  {
    title: "400W",
    sub: "Solar Replenishment",
    body: "Roof-mounted monocrystalline array tops the pack while you work.",
    icon: <SunIcon />,
  },
  {
    title: "Silent",
    sub: "Site-Approved",
    body: "Below 35 dB at idle. Welcome on every residential, hospital, and film set in the country.",
    icon: <BoltIcon />,
  },
];

function ColorCustomizer({ selectedColor, setSelectedColor }: { selectedColor: string; setSelectedColor: (color: string) => void }) {
  return (
    <section
      className="relative overflow-hidden border-t border-[0.5px] border-ink/10 bg-bone py-40 md:py-56"
      style={{ backgroundColor: "#F7F6F2", color: "#1A1A1A" }}
    >
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-14">
        <Reveal delay={0.1}>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-brass" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brass">
              03 — Customize Your Build
            </span>
          </div>
          <h2 className="mt-10 max-w-4xl font-display text-4xl font-light uppercase leading-[1.12] tracking-luxury text-ink md:text-6xl">
            Your vision,
            <br />
            <span className="text-graphite">your colour.</span>
          </h2>
          <p className="mt-12 max-w-xl text-base leading-[1.8] text-graphite">
            Every Kei truck is finished to your exact specification. Choose from our curated palette of premium colours, each selected to complement the truck's form and function.
          </p>
        </Reveal>

        <div className="mt-32 grid lg:grid-cols-12 gap-16">
          {/* 3D Canvas */}
          <Reveal delay={0.2} className="lg:col-span-8">
            <TruckModelViewer color={selectedColor} />
          </Reveal>

          {/* Color Picker Controls */}
          <Reveal delay={0.3} className="lg:col-span-4 flex flex-col">
            <div>
              <h3 className="font-display text-2xl font-light uppercase tracking-luxury text-ink md:text-3xl">
                Choose Your Color
              </h3>
              <p className="mt-4 text-sm text-graphite leading-relaxed">
                Select from our curated palette or bring your own vision. Every truck is finished to your exact specification.
              </p>
            </div>

            {/* Color Swatches */}
            <div className="mt-12 grid grid-cols-2 gap-3">
              {colorOptions.map((option) => (
                <button
                  key={option.hex}
                  onClick={() => setSelectedColor(option.hex)}
                  className={`group relative flex items-center gap-3 px-4 py-3 border transition-all duration-300 ${
                    selectedColor === option.hex
                      ? "border-brass bg-brass/10"
                      : "border-[0.5px] border-ink/12 hover:border-brass/50"
                  }`}
                >
                  <div
                    className="w-5 h-5 rounded-full border border-ink/20 transition-transform duration-300"
                    style={{ backgroundColor: option.hex }}
                  />
                  <span className="font-mono text-xs uppercase tracking-[0.08em] text-ink">
                    {option.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Current Color Display */}
            <div className="mt-12 border border-[0.5px] border-ink/8 bg-ink/[0.02] p-6">
              <p className="font-mono text-[9px] uppercase tracking-[0.32em] text-brass mb-3">
                Selected Color
              </p>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded border border-ink/10"
                  style={{ backgroundColor: selectedColor }}
                />
                <div>
                  {colorOptions.find((opt) => opt.hex === selectedColor) && (
                    <p className="font-display text-sm font-light uppercase text-ink">
                      {colorOptions.find((opt) => opt.hex === selectedColor)?.name}
                    </p>
                  )}
                  <p className="font-mono text-[10px] text-graphite mt-1">
                    {selectedColor.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function UtilitySpecs() {
  const [selectedColor, setSelectedColor] = useState("#0D0D0D");

  return (
    <>
      <section
        id="utility"
        className="relative overflow-hidden border-t border-[0.5px] border-ink/10 bg-paper py-40 md:py-56"
        style={{ backgroundColor: "#F1F0E8", color: "#1A1A1A" }}
      >
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-14">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-brass" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brass">
              02 — Grid-Free
            </span>
          </div>
          <h2 className="mt-10 max-w-4xl font-display text-4xl font-light uppercase leading-[1.12] tracking-luxury text-ink md:text-6xl">
            Pure power,
            <br />
            <span className="text-graphite">pure utility.</span>
          </h2>
          <p className="mt-12 max-w-2xl text-base leading-[1.8] text-graphite">
            Every system engineered for real-world performance. The Kei truck is built from the ground up as a mobile power station—delivering instant torque, abundant charging capability, and premium comfort.
          </p>
        </Reveal>

        {/* Luxury alternating feature layout */}
        <div className="mt-32 space-y-24">
          {luxuryFeatures.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08}>
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:auto-cols-fr" : ""}`}>
                {/* Image — alternates left/right */}
                <div className={`relative h-[500px] overflow-hidden rounded-lg ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text content */}
                <div className={`flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-display text-5xl font-light text-brass">
                      {feature.n}
                    </span>
                  </div>
                  <h3 className="font-display text-4xl font-light uppercase leading-[1.15] tracking-luxury text-ink md:text-5xl">
                    {feature.title}
                  </h3>
                  <p className="mt-8 max-w-lg text-base leading-[1.9] text-graphite">
                    {feature.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    <ColorCustomizer selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
    </>
  );
}
