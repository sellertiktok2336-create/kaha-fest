/** Judul section bergaya KAHA FEST yang konsisten */
export default function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-electric/50 bg-electric/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-electric">
        {kicker}
      </p>
      <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">
        <span className="text-chrome">{title}</span>
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-cream/65 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
