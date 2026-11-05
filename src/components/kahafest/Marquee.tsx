import { EVENT } from "@/config/kahafest";

const ITEMS = [
  "KAHA FEST 2027",
  EVENT.dateShort,
  EVENT.venue.toUpperCase(),
  "KAPUAS HULU",
  "GUEST STAR: YOUNG LEX • BADAI EC KERISPATIH • ECKO SHOW • DJ AYU CHERRY",
  "TIKET VIA WHATSAPP",
];

export default function Marquee({ reverse = false }: { reverse?: boolean }) {
  const strip = (
    <>
      {ITEMS.map((item, i) => (
        <span key={i} className="mx-6 inline-flex items-center gap-6">
          <span className="font-display text-sm font-bold tracking-[0.2em] md:text-base">
            {item}
          </span>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4 shrink-0 text-ink"
            fill="currentColor"
          >
            <path d="M12 0c.9 6.9 5.1 11.1 12 12-6.9.9-11.1 5.1-12 12-.9-6.9-5.1-11.1-12-12C6.9 11.1 11.1 6.9 12 0Z" />
          </svg>
        </span>
      ))}
    </>
  );

  return (
    <div
      className="relative overflow-hidden bg-acid py-3 text-ink"
      aria-hidden="true"
    >
      <div
        className="animate-marquee flex w-max whitespace-nowrap"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        <div className="flex">{strip}</div>
        <div className="flex">{strip}</div>
      </div>
    </div>
  );
}
