import Link from "next/link";
import ParallaxImage from "@/components/ui/ParallaxImage";

export default function NewChapterSection() {
  return (
    <section
      id="new-chapter"
      aria-label="New Chapter — call to action"
      className="relative min-h-screen flex items-center py-24"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <ParallaxImage
          src="/images/new_chapter.png"
          alt="An open book bathed in warm golden light — a new chapter begins"
          speed={0.15}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141009] via-[#141009]/50 to-[#141009]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <p className="text-sm font-semibold tracking-[0.2em] text-[#D4A85A] uppercase mb-6">
          Your next read awaits
        </p>
        <h2 className="font-serif text-5xl md:text-7xl font-bold text-[#F5EDD8] leading-tight mb-6 max-w-3xl">
          Start a new
          <br />
          <span className="text-[#D4A85A]">chapter today.</span>
        </h2>
        <p className="text-[#F5EDD8]/70 text-lg max-w-xl mb-12 leading-relaxed">
          Whether you&apos;re clearing a shelf or hunting for your next obsession,
          Paper Portal is the place where book lovers meet. Join thousands of
          readers already trading stories.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/listings"
            className="bg-[#D4A85A] text-[#141009] font-semibold px-8 py-4 rounded-full text-base hover:bg-[#E8C07A] transition-colors"
          >
            Browse Books
          </Link>
          <Link
            href="/listings"
            className="border border-[#D4A85A]/50 text-[#D4A85A] font-semibold px-8 py-4 rounded-full text-base hover:bg-[#D4A85A]/10 transition-colors"
          >
            List a Book
          </Link>
        </div>

        <div className="mt-24 border-t border-[#D4A85A]/20 pt-8 flex flex-wrap gap-8 justify-center text-[#9A8A6A] text-sm">
          <span>Free to join</span>
          <span>·</span>
          <span>Secure payments</span>
          <span>·</span>
          <span>Seller protection</span>
          <span>·</span>
          <span>Community verified</span>
        </div>
      </div>
    </section>
  );
}
