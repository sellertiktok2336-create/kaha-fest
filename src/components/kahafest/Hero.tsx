import Image from "next/image";
import { CalendarDays, Clock, Instagram, MapPin, Ticket } from "lucide-react";
import { EVENT } from "@/config/kahafest";
import Countdown from "./Countdown";
import { Bolt, Star4, ArcRing } from "./AcidDecor";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-16"
      aria-label="Beranda KAHA FEST"
    >
      {/* Latar gambar festival */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
        <div className="bg-grid absolute inset-0 opacity-60" />
      </div>

      {/* Dekorasi melayang */}
      <Bolt className="animate-floaty absolute left-[5%] top-[22%] hidden h-14 w-14 text-acid/40 md:block" aria-hidden="true" />
      <Star4 className="animate-floaty-slow absolute right-[8%] top-[18%] hidden h-10 w-10 text-chrome/40 md:block" aria-hidden="true" />
      <ArcRing className="animate-spin-slow absolute -right-16 bottom-24 hidden h-64 w-64 text-electric/30 lg:block" aria-hidden="true" />
      <Star4 className="animate-spin-slow absolute left-[12%] bottom-[30%] hidden h-6 w-6 text-acid/50 lg:block" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-5xl px-4 py-24 text-center sm:px-6">
        {/* Badge */}
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-acid/40 bg-ink/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-acid backdrop-blur-md">
          <Bolt className="h-3.5 w-3.5" aria-hidden="true" />
          Festival Musik • Kapuas Hulu
        </p>

        {/* Logo utama */}
        <div className="relative mx-auto mb-8 w-full max-w-md">
          <Image
            src="/kaha-fest-logo.png"
            alt="Logo KAHA FEST"
            width={640}
            height={640}
            priority
            className="animate-pulse-glow mx-auto h-auto w-full max-w-[360px] select-none rounded-3xl sm:max-w-[420px]"
          />
        </div>

        {/* Info acara */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2 text-sm sm:gap-3 sm:text-base">
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-2 backdrop-blur-md">
            <CalendarDays className="h-4 w-4 text-acid" aria-hidden="true" />
            {EVENT.dateLabel}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-2 backdrop-blur-md">
            <Clock className="h-4 w-4 text-acid" aria-hidden="true" />
            {EVENT.timeLabel}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-2 backdrop-blur-md">
            <MapPin className="h-4 w-4 text-acid" aria-hidden="true" />
            {EVENT.venue}, {EVENT.city}
          </span>
        </div>

        {/* Hitung mundur */}
        <div className="mx-auto mb-10 max-w-xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cream/60">
            Menuju Hari-H
          </p>
          <Countdown isoDate="2027-01-23T18:00:00+07:00" />
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href={EVENT.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-acid px-7 py-3.5 font-display text-sm font-extrabold uppercase tracking-wider text-ink transition-transform hover:scale-105 sm:w-auto"
          >
            <Ticket className="h-4 w-4" aria-hidden="true" />
            Beli Tiket via WhatsApp
          </a>
          <a
            href={EVENT.socials[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-electric/70 bg-electric/10 px-7 py-3.5 font-display text-sm font-extrabold uppercase tracking-wider text-cream backdrop-blur-md transition-colors hover:bg-electric/25 sm:w-auto"
          >
            <Instagram className="h-4 w-4 text-acid" aria-hidden="true" />
            Follow {EVENT.socials[0].handle}
          </a>
          <a
            href="#lineup"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-chrome/40 bg-ink/40 px-7 py-3.5 font-display text-sm font-extrabold uppercase tracking-wider text-chrome backdrop-blur-md transition-colors hover:border-acid hover:text-acid sm:w-auto"
          >
            Lihat Lineup
          </a>
        </div>

        <p className="mt-6 text-xs text-cream/50">
          Harga tiket {EVENT.ticketNote.toLowerCase()}. Pantau terus website dan Instagram resmi kami {EVENT.socials[0].handle}.
        </p>
      </div>
    </section>
  );
}
