import Image from "next/image";
import { EVENT } from "@/config/kahafest";
import SectionHeading from "./SectionHeading";
import { Bolt, Star4 } from "./AcidDecor";

const PHOTOS = [
  {
    src: "/images/gallery-dj.png",
    alt: "Visual DJ set dengan cahaya neon di panggung KAHA FEST",
    caption: "Neon DJ Set",
    span: "sm:col-span-2 sm:row-span-2",
    size: 1024,
  },
  {
    src: "/images/gallery-crowd.png",
    alt: "Visual kerumunan penonton dengan konfeti neon KAHA FEST",
    caption: "Lautan Penonton",
    span: "",
    size: 1024,
  },
  {
    src: "/images/gallery-chrome.png",
    alt: "Visual identitas chrome liquid Y2K acid KAHA FEST",
    caption: "Acid Identity",
    span: "",
    size: 1024,
  },
  {
    src: "/images/gallery-borneo.png",
    alt: "Visual panggung festival di tengah tropis Kalimantan",
    caption: "Panggung Borneo",
    span: "sm:col-span-2",
    size: 1024,
  },
];

export default function GallerySection() {
  return (
    <section
      id="galeri"
      className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28"
      aria-label="Galeri visual KAHA FEST"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Galeri"
          title="Visual & Suasana"
          description="Visual resmi KAHA FEST yang menampilkan energi neon, chrome, dan malam Borneo sebagai identitas festival. Dokumentasi kegiatan nyata akan menyusul setelah hari-H."
        />

        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-4 sm:auto-rows-[240px]">
          {PHOTOS.map((p) => (
            <figure
              key={p.src}
              className={`group relative overflow-hidden rounded-2xl border border-cream/10 ${p.span}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.size}
                height={p.size}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
              <figcaption className="absolute bottom-4 left-4 flex items-center gap-2">
                <Bolt className="h-4 w-4 text-acid" aria-hidden="true" />
                <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-cream">
                  {p.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-cream/45">
          <Star4 className="h-3.5 w-3.5 text-acid" aria-hidden="true" />
          Ikuti{" "}
          <a
            href={EVENT.socials[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-acid underline-offset-4 hover:underline"
          >
            {EVENT.socials[0].handle}
          </a>{" "}
          untuk visual terbaru setiap pekan menjelang hari-H.
        </p>
      </div>
    </section>
  );
}
