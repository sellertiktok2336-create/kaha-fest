import { Check, ExternalLink, Info, Ticket as TicketIcon } from "lucide-react";
import { EVENT, TICKETS } from "@/config/kahafest";
import SectionHeading from "./SectionHeading";
import { Star4 } from "./AcidDecor";

export default function Tickets() {
  return (
    <section
      id="tiket"
      className="relative scroll-mt-20 overflow-hidden bg-panel/40 py-20 sm:py-28"
      aria-label="Tiket KAHA FEST 2027"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Tiket"
          title="Amankan Tempatmu di Depan Panggung"
          description="Tiket KAHA FEST 2027 dijual resmi melalui WhatsApp admin. Harga belum diumumkan dan presale nanti berkuota terbatas, jadi pantau terus halaman ini atau hubungi kami langsung."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {TICKETS.map((tier) => (
            <article
              key={tier.name}
              className={`relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8 ${
                tier.featured
                  ? "border-acid/70 bg-gradient-to-b from-acid/15 via-panel to-panel shadow-[0_0_40px_rgba(217,255,61,0.12)]"
                  : "border-cream/10 bg-panel"
              }`}
            >
              {tier.badge && (
                <span
                  className={`absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] ${
                    tier.featured ? "bg-acid text-ink" : "bg-cream/10 text-cream/70"
                  }`}
                >
                  {tier.badge}
                </span>
              )}
              <Star4
                className="absolute -bottom-4 -right-4 h-20 w-20 text-cream/5"
                aria-hidden="true"
              />

              <h3 className="font-display text-xl font-black uppercase text-cream">
                {tier.name}
              </h3>
              <div className="mt-4">
                <p
                  className={`font-display text-2xl font-extrabold sm:text-3xl ${
                    tier.featured ? "text-acid" : "text-chrome"
                  }`}
                >
                  {tier.price}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-cream/45">
                  Harga belum diumumkan
                </p>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5 text-sm text-cream/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-acid" aria-hidden="true" />
                    {perk}
                  </li>
                ))}
              </ul>

              <a
                href={EVENT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Beli tiket ${tier.name} via WhatsApp`}
                className={`mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-sm font-extrabold uppercase tracking-wider transition-transform hover:scale-[1.03] ${
                  tier.featured
                    ? "bg-acid text-ink"
                    : "border border-chrome/40 text-chrome hover:border-acid hover:text-acid"
                }`}
              >
                <TicketIcon className="h-4 w-4" aria-hidden="true" />
                Beli via WhatsApp
              </a>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-xl border border-electric/30 bg-electric/10 p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-electric" aria-hidden="true" />
            <div className="text-sm leading-relaxed text-cream/70">
              <p>
                <strong className="text-cream">Catatan:</strong> tombol pembelian
                langsung menghubungkan Anda ke WhatsApp resmi panitia KAHA FEST{" "}
                <strong className="text-cream">{EVENT.whatsappNumber}</strong>.
                Hanya bertransaksi melalui nomor resmi tersebut. Panitia tidak
                bertanggung jawab atas tiket yang dibeli di luar nomor resmi.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center">
          <a
            href={EVENT.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric underline-offset-4 hover:underline"
          >
            Chat Admin via WhatsApp
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </p>
      </div>
    </section>
  );
}
