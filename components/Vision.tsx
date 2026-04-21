import Image from "next/image";
import Reveal from "./Reveal";

const metrics = [
  { value: "260", unit: "mi", label: "Range" },
  { value: "40", unit: "min", label: "80% Charge" },
  { value: "300", unit: "Ah", label: "Energy Storage" },
  { value: "700", unit: "lb", label: "Payload" },
];

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden border-t border-[0.5px] border-ink/10 bg-paper"
      style={{ backgroundColor: "#F1F0E8", color: "#1A1A1A" }}
    >

      {/* Vision Content */}
      <div className="py-52 md:py-72">
        <div className="relative mx-auto grid max-w-[1440px] gap-16 px-6 md:px-14 lg:grid-cols-12 lg:gap-32">
          {/* Image on left */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="relative h-[500px] overflow-hidden rounded-lg">
              <Image
                src="/KeiTruck1.png"
                alt="Craftsman working alongside a solar-powered Kei truck"
                width={1200}
                height={900}
                className="h-full w-full object-cover object-top"
                priority={false}
              />
            </div>
          </Reveal>

          {/* Text on right */}
          <div className="lg:col-span-7 flex flex-col max-w-2xl">
            <Reveal delay={0.2}>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-brass" />
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brass">
                  01 — The Vision
                </span>
              </div>
              <h2 className="mt-12 font-display text-4xl font-light uppercase leading-[1.12] tracking-luxury text-ink md:text-5xl">
                Take the grid
                <br />
                <span className="text-graphite">with you.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.35}>
              <p className="mt-12 max-w-2xl font-display text-2xl font-light leading-[1.4] text-ink md:text-3xl">
                We transform vintage Kei trucks into sophisticated,
                solar-powered electric vehicles that act as your mobile power
                station.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <p className="mt-12 max-w-xl text-base leading-[1.8] text-graphite">
                Zero exhaust. Zero noise. Infinite capability for the modern
                craftsman. Every chassis is hand-stripped, every cell hand-laid,
                every panel torque-checked against a single standard — yours.
              </p>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
