import Image from "next/image";
import Reveal from "./Reveal";

const phases = [
  {
    n: "01",
    title: "Restoration",
    sub: "Restoration · Disassembly",
    body: "We begin with meticulous restoration, disassembling each chassis and removing every combustion component. The frame is prepared to factory tolerances—a blank canvas for complete electric transformation.",
    tags: ["Frame", "Body", "Drivetrain"],
  },
  {
    n: "02",
    title: "Motor",
    sub: "Motor · MCU Integration",
    body: "A high-performance electric motor is precision-mated to the original transmission, amplifying torque while preserving utility. The entire electrical architecture is orchestrated by an intelligent Motor Control Unit—enabling refined power delivery and system optimization.",
    tags: ["80kW Motor", "MCU", "Throttle Map"],
  },
  {
    n: "03",
    title: "Battery",
    sub: "Battery · Charging",
    body: "A bespoke battery system provides consistent, enduring power for both road and job site. Dual charging protocols ensure seamless recharging—fast-charge when time is scarce, standard when conditions allow.",
    tags: ["LFP/NMC", "CCS1", "J1772"],
  },
  {
    n: "04",
    title: "Solar",
    sub: "Solar · Inverter Stack",
    body: "Solar panels and inverters transform the truck into an autonomous power station—generating and delivering clean energy on demand, independent and wherever the work leads.",
    tags: ["Mono Si", "Pure Sine", "MPPT"],
  },
];

export default function BuildProcess() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-[0.5px] border-ink/10 bg-bone py-52 md:py-72"
      style={{ backgroundColor: "#F7F6F2", color: "#1A1A1A" }}
    >
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-14">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-brass" />
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brass">
                  02 — The Process
                </span>
              </div>
              <h2 className="mt-10 max-w-3xl font-display text-4xl font-light uppercase leading-[1.12] tracking-luxury text-ink md:text-6xl">
                Four phases.
                <br />
                <span className="text-graphite">One standard.</span>
              </h2>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Image scroll bar — full width */}
      <div className="relative mt-32 w-full overflow-hidden">
        <style>{`
          @keyframes scroll-horizontal {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .scroll-container {
            display: flex;
            gap: 16px;
            animation: scroll-horizontal 25s linear infinite;
          }
          .scroll-item {
            flex-shrink: 0;
            width: 35vw;
            position: relative;
          }
          .scroll-item img {
            width: 100%;
            height: auto;
            display: block;
          }
        `}</style>
        <div className="scroll-container">
          <div className="scroll-item">
            <Image src="/scroll3.png" alt="scroll" width={1920} height={1080} style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="scroll-item">
            <Image src="/scroll4.png" alt="scroll" width={1920} height={1080} style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="scroll-item">
            <Image src="/scroll1.png" alt="scroll" width={1920} height={1080} style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="scroll-item">
            <Image src="/scroll2.png" alt="scroll" width={1920} height={1080} style={{ width: '100%', height: 'auto' }} />
          </div>
          {/* Duplicate for seamless loop */}
          <div className="scroll-item">
            <Image src="/scroll3.png" alt="scroll" width={1920} height={1080} style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="scroll-item">
            <Image src="/scroll4.png" alt="scroll" width={1920} height={1080} style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="scroll-item">
            <Image src="/scroll1.png" alt="scroll" width={1920} height={1080} style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="scroll-item">
            <Image src="/scroll2.png" alt="scroll" width={1920} height={1080} style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-14">
        {/* Phase grid — hairline dividers */}
        <div className="mt-32 grid gap-[0.5px] overflow-hidden border border-[0.5px] border-ink/8 bg-ink/[0.02] md:grid-cols-2">
          {phases.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <article className="group relative h-full bg-bone p-12 transition-colors duration-500 hover:bg-paper md:p-16">
                <div className="flex items-start justify-between">
                  <span className="font-display text-7xl font-light tracking-engineered text-ink/15 transition-colors duration-500 group-hover:text-brass/40 md:text-8xl">
                    {p.n}
                  </span>
                </div>

                <div className="mt-14">
                  <p className="font-mono text-[9px] uppercase tracking-[0.32em] text-brass">
                    {p.sub}
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-light uppercase tracking-luxury text-ink md:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-6 max-w-md text-base leading-[1.8] text-graphite">
                    {p.body}
                  </p>
                </div>

                <div className="mt-12 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-[0.5px] border-ink/12 bg-paper/40 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.24em] text-graphite"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className="absolute inset-x-12 bottom-0 h-[0.5px] origin-left scale-x-0 bg-brass transition-transform duration-700 group-hover:scale-x-100 md:inset-x-16" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
