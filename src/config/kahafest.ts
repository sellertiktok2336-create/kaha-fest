/**
 * Konfigurasi utama KAHA FEST 2027
 * Ganti nilai di bawah ini untuk memperbarui informasi di seluruh website
 * (mis. link WhatsApp, sosmed, kontak) tanpa menyentuh kode komponen.
 */

export const EVENT = {
  name: "KAHA FEST",
  edition: "2027",
  tagline: "Festival Musik Kapuas Hulu",
  description:
    "Festival musik tahunan di Kabupaten Kapuas Hulu, Kalimantan Barat. Guest star nasional tampil berdampingan dengan musisi lokal terbaik dari tanah Kapuas.",
  dateLabel: "Sabtu, 23 Januari 2027",
  dateShort: "23.01.2027",
  timeLabel: "18.00-23.00 WIB",
  venue: "GOR Uncak Kapuas",
  city: "Kabupaten Kapuas Hulu, Kalimantan Barat",
  mapsQuery: "GOR Uncak Kapuas, Kapuas Hulu, Kalimantan Barat",
  /** Nomor WhatsApp admin untuk pembelian & pertanyaan tiket */
  whatsappNumber: "+62 823-4873-4447",
  /** Link chat WhatsApp (pesan awal otomatis terisi) */
  whatsappLink:
    "https://wa.me/6282348734447?text=Halo%2C%20saya%20ingin%20membeli%20tiket%20KAHA%20FEST%202027",
  /** Harga tiket: belum diumumkan */
  ticketNote: "Segera Diumumkan",
  /** Sosmed resmi: hanya Instagram */
  socials: [
    { name: "Instagram", handle: "@kahafest.id", url: "https://www.instagram.com/kahafest.id" },
  ],
} as const;

export type Artist = {
  name: string;
  role: string;
  note: string;
};

export const GUEST_STARS: Artist[] = [
  {
    name: "Young Lex",
    role: "Rapper • Headliner",
    note: "Penampil utama yang menutup malam festival dengan lagu-lagu hitsnya.",
  },
  {
    name: "Badai EC Kerispatih",
    role: "Penyanyi",
    note: "Bintang tamu yang siap membawakan lagu-lagu andalannya di atas panggung GOR Uncak Kapuas.",
  },
  {
    name: "Ecko Show",
    role: "Entertainer • Stand-up",
    note: "Candaan, energi, dan interaksi yang bikin seluruh GOR ikut tertawa.",
  },
  {
    name: "DJ Ayu Cherry",
    role: "DJ Set",
    note: "DJ set penuh groove untuk memanaskan malam dari awal hingga akhir.",
  },
];

export const LOCAL_HEROES: Artist[] = [
  { name: "Randa", role: "Biduan", note: "Local Heroes" },
  { name: "Adelia", role: "Biduan", note: "Local Heroes" },
  { name: "Sayuti", role: "Biduan", note: "Local Heroes" },
  { name: "INNOISE", role: "Band", note: "Local Heroes" },
  { name: "Yessa X Hara", role: "Grup Kolaborasi", note: "Local Heroes" },
];

export type RundownItem = {
  time: string;
  title: string;
  tag: "Info" | "Seremoni" | "Local Heroes" | "Guest Star";
  highlight?: boolean;
};

export const RUNDOWN: RundownItem[] = [
  { time: "18.00", title: "Gerbang Dibuka & DJ Warm-Up", tag: "Info" },
  { time: "18.30", title: "Pembukaan Resmi KAHA FEST 2027", tag: "Seremoni" },
  { time: "19.00", title: "Randa", tag: "Local Heroes" },
  { time: "19.20", title: "Adelia", tag: "Local Heroes" },
  { time: "19.40", title: "Sayuti", tag: "Local Heroes" },
  { time: "20.00", title: "INNOISE", tag: "Local Heroes" },
  { time: "20.25", title: "Yessa X Hara", tag: "Local Heroes" },
  { time: "20.50", title: "DJ Ayu Cherry", tag: "Guest Star" },
  { time: "21.15", title: "Ecko Show", tag: "Guest Star" },
  { time: "21.45", title: "Badai EC Kerispatih", tag: "Guest Star" },
  { time: "22.15", title: "Young Lex", tag: "Guest Star", highlight: true },
  { time: "22.55", title: "Penutupan & Sesi Foto Bersama", tag: "Info" },
];

export type TicketTier = {
  name: string;
  price: string;
  badge?: string;
  perks: string[];
  featured?: boolean;
};

export const TICKETS: TicketTier[] = [
  {
    name: "Presale",
    price: EVENT.ticketNote,
    badge: "Terbatas",
    perks: [
      "Akses area festival standar",
      "Harga paling hemat, kuota terbatas",
      "Pembelian via WhatsApp",
    ],
  },
  {
    name: "Regular",
    price: EVENT.ticketNote,
    badge: "Paling Dicari",
    featured: true,
    perks: [
      "Akses area festival standar",
      "Semua penampil Local Heroes & Guest Star",
      "Pembelian via WhatsApp",
    ],
  },
  {
    name: "VIP",
    price: EVENT.ticketNote,
    perks: [
      "Zona pandang depan panggung",
      "Fasilitas toilet & antrean khusus",
      "Merchandise eksklusif KAHA FEST",
    ],
  },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "Kapan dan di mana KAHA FEST 2027 diselenggarakan?",
    a: "KAHA FEST 2027 digelar pada Sabtu, 23 Januari 2027 pukul 18.00-23.00 WIB di GOR Uncak Kapuas, Kabupaten Kapuas Hulu, Kalimantan Barat. Karena venue berupa gedung (GOR), acara tetap aman dan nyaman meskipun hujan.",
  },
  {
    q: "Bagaimana cara membeli tiket KAHA FEST?",
    a: "Tiket dijual secara resmi melalui WhatsApp admin KAHA FEST di nomor +62 823-4873-4447. Klik tombol “Beli Tiket” di website ini dan Anda langsung terhubung ke admin kami, pesan awal sudah terisi otomatis. Hati-hati terhadap penjual tiket yang tidak menggunakan nomor resmi tersebut.",
  },
  {
    q: "Kapan harga tiket diumumkan?",
    a: "Harga dan kategori tiket segera diumumkan melalui website ini serta Instagram resmi kami @kahafest.id. Aktifkan notifikasi akun kami agar tidak ketinggalan penjualan presale yang berkuota terbatas.",
  },
  {
    q: "Apakah ada batasan usia untuk pengunjung?",
    a: "Informasi batas usia akan diumumkan bersamaan dengan detail tiket. Anak di bawah umur umumnya wajib didampingi orang tua atau wali, dan tiket tetap diperlukan untuk setiap pengunjung yang masuk area festival.",
  },
  {
    q: "Bolehkah membawa makanan dan minuman dari luar?",
    a: "Makanan dan minuman dari luar tidak diperbolehkan masuk ke area festival. Tersedia banyak tenant F&B lokal dengan menu beragam di dalam venue, dari kuliner khas Kapuas Hulu hingga menu favorit anak muda.",
  },
  {
    q: "Barang apa saja yang dilarang dibawa?",
    a: "Senjata tajam, kembang api/pyroteknik, barang mudah terbakar, minuman beralkohol, serta drone tanpa izin resmi panitia dilarang dibawa. Panitia berhak melakukan pemeriksaan di pintu masuk demi keamanan bersama.",
  },
  {
    q: "Apakah tersedia area parkir di venue?",
    a: "Ya, area parkir tersedia di sekitar GOR Uncak Kapuas dengan kapasitas terbatas. Kami menyarankan pengunjung datang lebih awal, menggunakan kendaraan bersama (car pooling), atau kendaraan umum untuk kenyamanan bersama.",
  },
  {
    q: "Apakah acara tetap berjalan jika hujan?",
    a: "Tetap berjalan! KAHA FEST diselenggarakan di dalam GOR sehingga seluruh penampilan dan pengunjung terlindung dari hujan maupun panas. Datanglah dengan nyaman karena festival tetap seru apa pun cuacanya.",
  },
];

export const NAV_LINKS = [
  { href: "#tentang", label: "Tentang" },
  { href: "#lineup", label: "Lineup" },
  { href: "#rundown", label: "Rundown" },
  { href: "#tiket", label: "Tiket" },
  { href: "#galeri", label: "Galeri" },
  { href: "#lokasi", label: "Lokasi" },
  { href: "#faq", label: "FAQ" },
] as const;
