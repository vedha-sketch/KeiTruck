export default function Footer() {
  return (
    <footer className="relative border-t border-ink/10 bg-paper pb-12 pt-28">
      <div className="mx-auto max-w-[1440px] px-6 md:px-14">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
          </div>

          <div className="grid grid-cols-3 gap-8 lg:col-span-7">
            {[
              {
                head: "Atelier",
                items: ["Vision", "Process", "Specifications"],
              },
              {
                head: "Commission",
                items: ["Configure", "Visit", "Press"],
              },
              {
                head: "Contact",
                items: ["keitruck@normallab.co", "+1 (802) 555-0144", "Instagram"],
              },
            ].map((c) => (
              <div key={c.head}>
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-brass">
                  {c.head}
                </p>
                <ul className="mt-8 space-y-4">
                  {c.items.map((it) => (
                    <li
                      key={it}
                      className="text-sm text-graphite transition-colors hover:text-ink"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-28 flex flex-col items-start justify-between gap-4 pt-8 md:flex-row md:items-center">
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-ash">
            © 2026 Normal Robotics · All Rights Reserved
          </p>
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-ash">
            Hand-built · Solar Powered · Made for Work
          </p>
        </div>
      </div>
    </footer>
  );
}
