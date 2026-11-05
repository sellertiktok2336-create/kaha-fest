import { GUEST_STARS, LOCAL_HEROES, type Artist } from "@/config/kahafest";
import SectionHeading from "./SectionHeading";
import { ArrowShape, Bolt, Star4 } from "./AcidDecor";

/** Inisial artist untuk kartu tanpa foto */
function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

const GUEST_STYLES = [
  "from-acid/90 via-acid/40 to-transparent",
  "from-electric/90 via-electric/40 to-transparent",
  "from-chrome/70 via-chrome/25 to-transparent",
];

function GuestCard({ artist, index }: { artist: Artist; index: number }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-cream/10 bg-panel transition-all duration-300 hover:-translate-y-1.5 hover:border-acid/50">
      {/* Monogram besar */}
      <div className="relative flex h-44 items-center justify-center overflow-hidden sm:h-52">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${GUEST_STYLES[index % GUEST_STYLES.length]} opacity-60 transition-opacity group-hover:opacity-90`}
          aria-hidden="true"
        />
        <span
          className="font-display text-7xl font-black text-ink/85 drop-shadow-xl sm:text-8xl"
          aria-hidden="true"
        >
          {initials(artist.name)}
        </span>
        <Star4
          className="animate-floaty absolute right-5 top-5 h-7 w-7 text-ink/60"
          aria-hidden="true"
        />
        <Bolt
          className="animate-floaty-slow absolute bottom-5 left-5 h-6 w-6 text-ink/50"
          aria-hidden="true"
        />
      </div>

      <div className="p-5 sm:p-6">
        <p className="mb-2 inline-block rounded-full bg-electric/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-electric">
          Guest Star
        </p>
        <h3 className="font-display text-xl font-extrabold text-cream sm:text-2xl">
          {artist.name}
        </h3>
        <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-acid">
          {artist.role}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-cream/60">{artist.note}</p>
      </div>
    </article>
  );
}

function HeroCard({ artist }: { artist: Artist }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-cream/10 bg-panel p-5 transition-all duration-300 hover:-translate-y-1 hover:border-electric/60">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-electric/60 to-electric/20">
        <span className="font-display text-2xl font-black text-cream" aria-hidden="true">
          {initials(artist.name)}
        </span>
      </div>
      <h3 className="font-display text-base font-extrabold text-cream">
        {artist.name}
      </h3>
      <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-electric">
        {artist.role}
      </p>
      <p className="mt-2 text-xs text-cream/50">{artist.note} • Kapuas Hulu</p>
      <ArrowShape
        className="absolute -bottom-2 -right-2 h-10 w-10 text-electric/10 transition-colors group-hover:text-electric/25"
        aria-hidden="true"
      />
    </article>
  );
}

export default function Lineup() {
  return (
    <section
      id="lineup"
      className="relative scroll-mt-20 overflow-hidden bg-panel/40 py-20 sm:py-28"
      aria-label="Lineup KAHA FEST 2027"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Lineup 2027"
          title="Guest Star & Local Heroes"
          description="Berikut para penampil yang akan menghangatkan malam 23 Januari 2027 di GOR Uncak Kapuas. Enam Local Heroes membuka panggung, lalu tiga Guest Star menutup malam."
        />

        {/* Guest Star */}
        <div className="mb-14 grid gap-5 md:grid-cols-3">
          {GUEST_STARS.map((a, i) => (
            <GuestCard key={a.name} artist={a} index={i} />
          ))}
        </div>

        {/* Local Heroes */}
        <div className="mb-8 flex items-center gap-3">
          <h3 className="font-display text-xl font-black uppercase tracking-wide text-cream sm:text-2xl">
            Local <span className="text-electric">Heroes</span>
          </h3>
          <span className="h-px flex-1 bg-gradient-to-r from-electric/60 to-transparent" aria-hidden="true" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LOCAL_HEROES.map((a) => (
            <HeroCard key={a.name} artist={a} />
          ))}
        </div>

        <p className="mt-10 text-xs text-cream/45">
          *Urutan dan lineup dapat berubah sewaktu-waktu tanpa pemberitahuan
          sebelumnya, mengikuti kebutuhan produksi acara.
        </p>
      </div>
    </section>
  );
}
