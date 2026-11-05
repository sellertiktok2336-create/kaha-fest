import Image from "next/image";
import { EVENT } from "@/config/kahafest";
import SectionHeading from "./SectionHeading";
import { Bolt, Star4 } from "./AcidDecor";

const STATS = [
  { value: "9+", label: "Penampil" },
  { value: "5", label: "Jam Nonstop" },
  { value: "3", label: "Guest Star" },
  { value: "1", label: "Panggung Utama" },
];

export default function About() {
  return (
    <section id="tentang" className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28" aria-label="Tentang KAHA FEST">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Tentang Acara"
          title="Satu Malam yang Menghidupkan Kapuas Hulu"
          description="KAHA FEST lahir dari ide sederhana: membawa panggung musik festival berkelas ke jantung Kalimantan Barat."
        />

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Teks naratif */}
          <div className="space-y-5 text-cream/70">
            <p className="text-lg leading-relaxed">
              Pada <strong className="text-cream">Sabtu, 23 Januari 2027</strong>,
              pukul 18.00-23.00 WIB, {EVENT.venue} akan berubah menjadi markas
              terbesar pecinta musik di sepanjang tepi Sungai Kapuas. Untuk pertama
              kalinya, nama-nama besar musik nasional naik ke panggung yang sama
              dengan musisi lokal terbaik Kapuas Hulu.
            </p>
            <p className="leading-relaxed">
              Dalam satu malam, {EVENT.name} menampilkan{" "}
              <strong className="text-acid">3 Guest Star</strong>, yaitu Young Lex, Ecko
              Show, dan DJ Ayu Cherry, serta{" "}
              <strong className="text-cream">6 Local Heroes</strong> yang siap
              membuktikan bahwa musik dari pedalaman Kalimantan layak bersinar di
              panggung mana pun. Semua tampil di satu panggung yang sama untuk kalian.
            </p>
            <p className="leading-relaxed">
              Selain musik, KAHA FEST juga menyuguhkan tenant kuliner lokal, spot
              foto, merchandise resmi, dan suasana komunitas yang hangat. Dengan
              venue indoor (GOR), seluruh penampilan tetap nyaman apa pun cuacanya.
              Datang sebagai penonton, pulang sebagai bagian dari sejarah musik
              Kapuas Hulu.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <Bolt className="h-5 w-5 shrink-0 text-acid" aria-hidden="true" />
              <p className="text-sm font-medium text-cream/60">
                Terbuka untuk seluruh umur. Rincian usia menyusul bersama info tiket.
              </p>
            </div>
          </div>

          {/* Visual + statistik */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-cream/10">
              <Image
                src="/images/gallery-borneo.png"
                alt="Ilustrasi suasana panggung KAHA FEST di Kapuas Hulu, Kalimantan Barat"
                width={1024}
                height={1024}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                <Star4 className="h-5 w-5 shrink-0 text-acid" aria-hidden="true" />
                <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-cream">
                  GOR Uncak Kapuas • Kapuas Hulu • Kalimantan Barat
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-cream/10 bg-panel p-4 text-center"
                >
                  <div className="font-display text-2xl font-black text-acid sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-cream/55">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
