import Navbar from "@/components/kahafest/Navbar";
import Hero from "@/components/kahafest/Hero";
import Marquee from "@/components/kahafest/Marquee";
import About from "@/components/kahafest/About";
import Lineup from "@/components/kahafest/Lineup";
import Rundown from "@/components/kahafest/Rundown";
import Tickets from "@/components/kahafest/Tickets";
import GallerySection from "@/components/kahafest/GallerySection";
import LocationSection from "@/components/kahafest/LocationSection";
import FaqSection from "@/components/kahafest/FaqSection";
import Footer from "@/components/kahafest/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Lineup />
        <Marquee reverse />
        <Rundown />
        <Tickets />
        <GallerySection />
        <LocationSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
