import Reveal from "./Reveal";

export default function Quote() {
  return (
    <section
      id="quote"
      className="relative overflow-hidden border-t border-[0.5px] border-ink/10 bg-paper py-52 md:py-72"
      style={{ backgroundColor: "#F1F0E8", color: "#1A1A1A" }}
    >
      <div className="relative mx-auto max-w-[1440px] px-6 md:px-14">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-32">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-brass" />
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brass">
                  Commission
                </span>
              </div>
              <h2 className="mt-10 font-display text-4xl font-light uppercase leading-[1.12] tracking-luxury text-ink md:text-6xl">
                Begin your
                <br />
                <span className="text-graphite">build.</span>
              </h2>
              <p className="mt-12 max-w-md text-base leading-[1.8] text-graphite">
                Each commission begins with a fitting. We'll match donor
                chassis, configure powertrain to your terrain, and walk you
                through the cell stack on a private floor visit.
              </p>

              <div className="mt-16 space-y-10 pt-12">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ash">
                    Location
                  </p>
                  <p className="mt-3 font-display text-base font-semibold uppercase tracking-engineered text-ink">
                    Honolulu, HI
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ash">
                    Inquiries
                  </p>
                  <p className="mt-3 font-display text-base font-semibold uppercase tracking-engineered text-ink">
                    keitruck@normallab.co
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-7">
            <Reveal delay={0.15}>
              <form className="border border-[0.5px] border-ink/10 bg-bone/80 p-10 md:p-14">
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-brass">
                  Configuration Request
                </p>

                {[
                  { label: "Name", type: "text", id: "name" },
                  { label: "Email", type: "email", id: "email" },
                  { label: "Region · Use Case", type: "text", id: "region" },
                ].map((f) => (
                  <div key={f.id} className="mt-10">
                    <label
                      htmlFor={f.id}
                      className="font-mono text-[9px] uppercase tracking-[0.3em] text-ash"
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      type={f.type}
                      className="mt-3 w-full border-0 border-b border-[0.5px] border-ink/12 bg-transparent pb-3 font-display text-base font-light uppercase tracking-luxury text-ink outline-none transition-colors placeholder:text-ash/60 focus:border-brass"
                    />
                  </div>
                ))}

                <button
                  type="button"
                  className="group mt-14 inline-flex w-full items-center justify-between bg-ink px-8 py-5 font-display text-[10px] font-light uppercase tracking-luxury text-paper transition-all hover:bg-obsidian"
                >
                  Reserve a Build Slot
                  <span className="text-brass transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
