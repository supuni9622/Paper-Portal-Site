import Link from "next/link";
import ParallaxImage from "@/components/ui/ParallaxImage";

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero — Paper Portal introduction"
      className="relative min-h-screen flex items-center"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <ParallaxImage
          src="/images/hero.png"
          alt="Stack of second-hand books on a warm wooden surface"
          priority
          speed={0.15}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141009]/90 via-[#141009]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col gap-6 max-w-2xl">
        <p className="text-sm font-semibold tracking-[0.2em] text-[#D4A85A] uppercase">
          Welcome to Paper Portal
        </p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#F5EDD8] leading-tight">
          Every book
          <br />
          <span className="text-[#D4A85A]">deserves</span>
          <br />
          a new story.
        </h1>
        <p className="text-lg text-[#F5EDD8]/70 max-w-md leading-relaxed">
          A curated marketplace for second-hand books. Find hidden gems, pass on
          loved reads, and join a community that believes great stories should
          never end.
        </p>
        <div className="flex flex-wrap gap-4 mt-2">
          <Link
            href="/listings"
            className="inline-flex items-center gap-2 bg-[#D4A85A] text-[#141009] font-semibold px-7 py-3.5 rounded-full hover:bg-[#E8C07A] transition-colors text-base"
          >
            Browse Books
          </Link>
          <Link
            href="#book-transfer"
            className="inline-flex items-center gap-2 border border-[#D4A85A]/50 text-[#D4A85A] font-semibold px-7 py-3.5 rounded-full hover:border-[#D4A85A] hover:bg-[#D4A85A]/10 transition-colors text-base"
          >
            How it works
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#9A8A6A]">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#9A8A6A] to-transparent" />
      </div>
    </section>
  );
}
