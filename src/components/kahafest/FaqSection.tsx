import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EVENT, FAQS } from "@/config/kahafest";
import SectionHeading from "./SectionHeading";

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28"
      aria-label="Pertanyaan umum KAHA FEST"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <SectionHeading
              kicker="FAQ"
              title="Pertanyaan yang Sering Ditanyakan"
              description="Belum menemukan jawabanmu? Hubungi kami lewat sosmed resmi. Tim KAHA FEST siap membantu."
            />
            <div className="rounded-2xl border border-cream/10 bg-panel p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-cream/60">
                Butuh bantuan langsung?
              </p>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                DM kami di Instagram{" "}
                <a
                  href={EVENT.socials[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-acid underline-offset-4 hover:underline"
                >
                  {EVENT.socials[0].handle}
                </a>
                . Tim KAHA FEST biasanya membalas dalam 1×24 jam pada hari kerja.
              </p>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-cream/10">
                <AccordionTrigger className="px-1 text-left font-display text-sm font-bold text-cream hover:text-acid hover:no-underline sm:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-1 text-sm leading-relaxed text-cream/65 sm:text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
