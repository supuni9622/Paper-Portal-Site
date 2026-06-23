import ParallaxImage from "@/components/ui/ParallaxImage";

const pillars = [
  {
    icon: "♻",
    title: "Extend a book's life",
    body: "Every second-hand book sold keeps it out of the bin and in the hands of a new reader.",
  },
  {
    icon: "🌱",
    title: "Lower carbon footprint",
    body: "Re-using beats reprinting. Sharing a book saves the paper, ink, and shipping of a brand-new copy.",
  },
  {
    icon: "📦",
    title: "Minimal packaging",
    body: "We encourage sellers to use recycled packaging and avoid plastic wrapping.",
  },
];

export default function SustainabilitySection() {
  return (
    <section
      id="sustainability"
      aria-label="Sustainability — environmental impact"
      className="relative min-h-screen flex items-center py-24"
    >
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <ParallaxImage
          src="/images/sustainability.png"
          alt="Lush green plants growing around a pile of old books"
          speed={0.15}
        />
        <div className="absolute inset-0 bg-[#141009]/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
        <p className="text-sm font-semibold tracking-[0.2em] text-[#D4A85A] uppercase mb-4">
          Why it matters
        </p>
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#F5EDD8] leading-tight mb-6 max-w-3xl mx-auto">
          Reading sustainably is{" "}
          <span className="text-[#D4A85A]">reading wisely.</span>
        </h2>
        <p className="text-[#F5EDD8]/70 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          The publishing industry produces millions of tonnes of paper waste each
          year. Every book you buy or sell on Paper Portal is a small act of
          resistance — and it adds up.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-[#141009]/60 backdrop-blur-sm border border-[#D4A85A]/20 rounded-2xl p-8 text-left"
            >
              <span className="text-3xl mb-4 block" role="img" aria-hidden>
                {p.icon}
              </span>
              <h3 className="font-serif font-bold text-[#F5EDD8] text-lg mb-2">{p.title}</h3>
              <p className="text-[#F5EDD8]/60 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
