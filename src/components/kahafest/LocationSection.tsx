import { CloudRain, MapPin, Navigation, ParkingSquare, UtensilsCrossed } from "lucide-react";
import { EVENT } from "@/config/kahafest";
import SectionHeading from "./SectionHeading";

const TIPS = [
  {
    icon: CloudRain,
    title: "Anti Hujan & Panas",
    text: "Venue berupa gedung (GOR), jadi acara tetap aman dan nyaman apa pun cuacanya.",
  },
  {
    icon: ParkingSquare,
    title: "Area Parkir",
    text: "Parkir tersedia di sekitar venue dengan kapasitas terbatas. Datang lebih awal ya!",
  },
  {
    icon: UtensilsCrossed,
    title: "Tenant F&B Lokal",
    text: "Puluhan tenant kuliner lokal siap menemani kamu dari jam 18.00 hingga tutup.",
  },
  {
    icon: Navigation,
    title: "Rute Menuju Venue",
    text: "Gampang dijangkau dari pusat Putussibau. Cek peta di samping untuk rute lengkap.",
  },
];

export default function LocationSection() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    EVENT.mapsQuery
  )}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <section
      id="lokasi"
      className="relative scroll-mt-20 overflow-hidden bg-panel/40 py-20 sm:py-28"
      aria-label="Lokasi acara KAHA FEST 2027"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Lokasi"
          title="GOR Uncak Kapuas"
          description={`${EVENT.venue}, ${EVENT.city}. Jantung festival dengan akses mudah, fasilitas lengkap, dan suasana Kapuas Hulu yang hangat.`}
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Peta */}
          <div className="order-2 overflow-hidden rounded-2xl border border-cream/10 lg:order-1">
            <iframe
              src={mapSrc}
              title="Peta lokasi GOR Uncak Kapuas, Kapuas Hulu, Kalimantan Barat"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full border-0 sm:h-[420px] lg:h-full lg:min-h-[480px]"
            />
          </div>

          {/* Info & tips */}
          <div className="order-1 lg:order-2">
            <div className="mb-6 flex items-start gap-4 rounded-2xl border border-acid/40 bg-acid/10 p-5 sm:p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-acid text-ink">
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-lg font-extrabold text-cream">
                  {EVENT.venue}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-cream/65">
                  {EVENT.city}<br />
                  {EVENT.dateLabel} • {EVENT.timeLabel}
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {TIPS.map((tip) => (
                <div
                  key={tip.title}
                  className="rounded-xl border border-cream/10 bg-panel p-5"
                >
                  <tip.icon className="h-6 w-6 text-electric" aria-hidden="true" />
                  <h4 className="mt-3 font-display text-sm font-bold uppercase tracking-wider text-cream">
                    {tip.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">
                    {tip.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
