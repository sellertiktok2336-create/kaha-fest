"use client";

import { useEffect, useState } from "react";
import { Menu, Ticket, X } from "lucide-react";
import { EVENT, NAV_LINKS } from "@/config/kahafest";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-cream/10 bg-ink/85 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Logo teks */}
        <a
          href="#beranda"
          className="font-display text-base font-black tracking-widest sm:text-lg"
          aria-label="KAHA FEST, kembali ke beranda"
        >
          <span className="text-chrome">KAHA</span>
          <span className="text-acid"> FEST</span>
        </a>

        {/* Link desktop */}
        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-cream/70 transition-colors hover:text-acid"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={EVENT.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-acid px-4 py-2 text-sm font-bold text-ink transition-transform hover:scale-105 sm:inline-flex"
          >
            <Ticket className="h-4 w-4" aria-hidden="true" />
            Beli Tiket
          </a>

          {/* Tombol menu mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/15 text-cream lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Panel mobile */}
      {open && (
        <div
          id="menu-mobile"
          className="border-t border-cream/10 bg-ink/95 backdrop-blur-lg lg:hidden"
        >
          <ul className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 font-display text-sm font-bold uppercase tracking-wider text-cream/80 transition-colors hover:bg-cream/5 hover:text-acid"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={EVENT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-acid px-4 py-3 text-sm font-bold text-ink"
              >
                <Ticket className="h-4 w-4" aria-hidden="true" />
                Beli Tiket via WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
