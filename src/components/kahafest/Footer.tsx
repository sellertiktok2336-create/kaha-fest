import { Instagram } from "lucide-react";
import { EVENT } from "@/config/kahafest";
import { Bolt, Star4 } from "./AcidDecor";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-cream/10 bg-panel" aria-label="Kaki halaman">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#beranda" className="inline-flex items-center gap-2">
              <Bolt className="h-5 w-5 text-acid" aria-hidden="true" />
              <span className="font-display text-xl font-black tracking-widest">
                <span className="text-chrome">KAHA</span>
                <span className="text-acid"> FEST</span>
              </span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/60">
              Festival musik tahunan di GOR Uncak Kapuas, Kabupaten Kapuas Hulu,
              Kalimantan Barat. Satu panggung untuk guest star nasional dan
              Local Heroes tanah Kapuas.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-cream/70">
              <Star4 className="h-4 w-4 text-acid" aria-hidden="true" />
              {EVENT.dateLabel} • {EVENT.timeLabel}
            </p>
          </div>

          {/* Kontak & sosmed */}
          <div className="md:justify-self-end">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-cream">
              Instagram Resmi
            </h3>
            <ul className="mt-4 space-y-2">
              {EVENT.socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm text-cream/65 transition-colors hover:text-acid"
                  >
                    <Instagram className="h-4 w-4" aria-hidden="true" />
                    <span className="w-24">{s.name}</span>
                    <span className="font-semibold text-cream/85">{s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={EVENT.socials[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-electric to-acid px-5 py-2.5 font-display text-xs font-extrabold uppercase tracking-wider text-ink transition-transform hover:scale-105"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              Follow {EVENT.socials[0].handle}
            </a>
            <p className="mt-4 rounded-lg border border-dashed border-cream/20 px-3 py-2 text-xs text-cream/45">
              Pembelian tiket resmi via WhatsApp admin {EVENT.whatsappNumber}.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/40 sm:flex-row">
          <p>© 2027 KAHA FEST. Seluruh hak cipta dilindungi.</p>
          <p>
            Tiket dijual resmi via{" "}
            <span className="font-semibold text-cream/60">WhatsApp</span> •
            Diselenggarakan di {EVENT.venue}
          </p>
        </div>
      </div>
    </footer>
  );
}
