/**
 * Dekorasi SVG bergaya Y2K acid yang mengambil bahasa visual dari logo KAHA FEST:
 * petir kuning neon, bintang empat sudut, panah biru, dan busur chrome.
 */

export function Bolt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M13.5 2 4 13.8h6.1L9.2 22 20 9.6h-6.6L13.5 2Z" />
    </svg>
  );
}

export function Star4({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M12 0c.9 6.9 5.1 11.1 12 12-6.9.9-11.1 5.1-12 12-.9-6.9-5.1-11.1-12-12C6.9 11.1 11.1 6.9 12 0Z" />
    </svg>
  );
}

export function ArrowShape({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M3 4l10 8-10 8 7-8-7-8Zm11 0l10 8-10 8 7-8-7-8Z" />
    </svg>
  );
}

export function ArcRing({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className} fill="none">
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="180 96"
      />
      <circle
        cx="50"
        cy="50"
        r="30"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="60 128"
        opacity="0.6"
      />
    </svg>
  );
}

/** Kelompok dekorasi melayang untuk latar section */
export function FloatingShapes({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <Bolt className="animate-floaty absolute left-[6%] top-[16%] h-10 w-10 text-acid/30" />
      <Star4 className="animate-floaty-slow absolute right-[10%] top-[24%] h-8 w-8 text-chrome/25" />
      <ArrowShape className="animate-floaty-slow absolute left-[14%] bottom-[18%] h-9 w-9 text-electric/35" />
      <ArcRing className="animate-spin-slow absolute right-[6%] bottom-[12%] h-24 w-24 text-cream/15" />
      <Star4 className="animate-floaty absolute left-[45%] top-[8%] h-5 w-5 text-acid/40" />
    </div>
  );
}
