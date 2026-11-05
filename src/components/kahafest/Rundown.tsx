import { RUNDOWN, type RundownItem } from "@/config/kahafest";
import SectionHeading from "./SectionHeading";
import { Bolt } from "./AcidDecor";

const TAG_STYLES: Record<RundownItem["tag"], string> = {
  Info: "border-cream/25 bg-cream/10 text-cream/80",
  Seremoni: "border-chrome/40 bg-chrome/10 text-chrome",
  "Local Heroes": "border-electric/50 bg-electric/15 text-electric",
  "Guest Star": "border-acid/60 bg-acid/15 text-acid",
};

export default function Rundown() {
  return (
    <section
      id="rundown"
      className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28"
      aria-label="Rundown acara KAHA FEST 2027"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Rundown"
          title="Jalannya Acara"
          description="Lima jam nonstop dari gerbang dibuka hingga penutupan. Waktu dapat berubah mengikuti situasi lapangan."
        />

        <ol className="relative mx-auto max-w-3xl space-y-0">
          {RUNDOWN.map((item, i) => (
            <li key={i} className="relative flex gap-4 pb-6 sm:gap-6">
              {/* Garis vertikal */}
              {i < RUNDOWN.length - 1 && (
                <span
                  className="absolute left-[52px] top-10 h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-cream/25 to-cream/5 sm:left-[76px]"
                  aria-hidden="true"
                />
              )}

              {/* Waktu */}
              <div className="w-[64px] shrink-0 pt-1 text-right sm:w-[88px]">
                <span
                  className={`font-display text-sm font-extrabold tabular-nums sm:text-base ${
                    item.highlight ? "text-acid" : "text-chrome"
                  }`}
                >
                  {item.time}
                </span>
              </div>

              {/* Titik */}
              <span
                className={`relative mt-2 h-3 w-3 shrink-0 rounded-full border-2 ${
                  item.highlight
                    ? "border-acid bg-acid shadow-[0_0_14px_rgba(217,255,61,0.8)]"
                    : "border-cream/40 bg-ink"
                }`}
                aria-hidden="true"
              />

              {/* Konten */}
              <div
                className={`flex-1 rounded-xl border p-4 transition-colors sm:p-5 ${
                  item.highlight
                    ? "border-acid/50 bg-acid/10"
                    : "border-cream/10 bg-panel"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3
                    className={`font-display text-base font-extrabold sm:text-lg ${
                      item.highlight ? "text-acid" : "text-cream"
                    }`}
                  >
                    {item.title}
                    {item.highlight && (
                      <Bolt className="ml-2 inline h-4 w-4 align-middle" aria-hidden="true" />
                    )}
                  </h3>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] ${TAG_STYLES[item.tag]}`}
                  >
                    {item.tag}
                  </span>
                </div>
                {item.highlight && (
                  <p className="mt-2 text-sm text-cream/65">
                    Penampilan headliner guest star dengan durasi penuh dan energi maksimal.
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>

        <p className="mx-auto mt-8 max-w-3xl text-xs text-cream/45">
          *Rundown bersifat rencana kerja dan dapat disesuaikan oleh tim produksi
          tanpa pemberitahuan sebelumnya.
        </p>
      </div>
    </section>
  );
}
