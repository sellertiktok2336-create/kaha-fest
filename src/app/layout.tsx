import type { Metadata } from "next";
import { Unbounded, Space_Grotesk } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KAHA FEST 2027 | Festival Musik Kapuas Hulu",
  description:
    "KAHA FEST 2027: festival musik di GOR Uncak Kapuas, Kabupaten Kapuas Hulu, Kalimantan Barat pada Sabtu, 23 Januari 2027 pukul 18.00-23.00 WIB. Guest Star: Young Lex, Badai EC Kerispatih, Ecko Show, DJ Ayu Cherry + Local Heroes. Tiket via WhatsApp.",
  keywords: [
    "KAHA FEST",
    "festival musik",
    "Kapuas Hulu",
    "Kalimantan Barat",
    "konser",
    "Badai EC Kerispatih",
    "Ecko Show",
    "tiket festival WhatsApp",
  ],
  icons: {
    icon: "/kaha-fest-logo.png",
  },
  openGraph: {
    title: "KAHA FEST 2027 | Festival Musik Kapuas Hulu",
    description:
      "23 Januari 2027 • GOR Uncak Kapuas, Kapuas Hulu, Kalimantan Barat. Guest Star: Young Lex, Ecko Show, DJ Ayu Cherry.",
    type: "website",
    siteName: "KAHA FEST",
  },
  twitter: {
    card: "summary_large_image",
    title: "KAHA FEST 2027 | Festival Musik Kapuas Hulu",
    description:
      "23 Januari 2027 • GOR Uncak Kapuas, Kapuas Hulu, Kalimantan Barat.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${unbounded.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
