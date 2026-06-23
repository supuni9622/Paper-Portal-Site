import Link from "next/link";
import ParallaxImage from "@/components/ui/ParallaxImage";

export default function BookTransferSection() {
  const steps = [
    { num: "01", title: "List your books", body: "Snap a photo, set your price. Your shelf clutter becomes someone's treasure in minutes." },
    { num: "02", title: "Connect with readers", body: "Buyers discover your books through curated search, genre tags, and community picks." },
    { num: "03", title: "Send & earn", body: "Ship it out and receive payment. Simple, safe, and satisfying." },
  ];

  return (
    <section
      id="book-transfer"
      aria-label="Book Transfer — how the marketplace works"
      className="relative min-h-screen flex items-center py-24"
    >
      {/* Background image — right half */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 opacity-40 md:opacity-100">
        <ParallaxImage
          src="/images/book_transfer.png"
          alt="Books being exchanged between two people"
          speed={0.2}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141009] via-[#141009]/60 to-transparent md:from-[#141009] md:via-[#141009]/30 md:to-transparent" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#141009] via-transparent to-[#141009] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#D4A85A] uppercase mb-4">
            The Marketplace
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F5EDD8] leading-tight mb-8">
            Books find their
            <br />
            <span className="text-[#D4A85A]">perfect match.</span>
          </h2>

          <div className="flex flex-col gap-8 mb-10">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-5">
                <span className="font-serif text-3xl font-bold text-[#D4A85A]/40 leading-none mt-1 min-w-[2.5rem]">
                  {step.num}
                </span>
                <div>
                  <h3 className="font-semibold text-[#F5EDD8] mb-1">{step.title}</h3>
                  <p className="text-[#F5EDD8]/60 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/listings"
            className="inline-flex items-center gap-2 border border-[#D4A85A]/50 text-[#D4A85A] font-semibold px-7 py-3.5 rounded-full hover:bg-[#D4A85A]/10 transition-colors"
          >
            Explore listings →
          </Link>
        </div>
      </div>
    </section>
  );
}
