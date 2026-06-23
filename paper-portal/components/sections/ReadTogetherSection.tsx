import ParallaxImage from "@/components/ui/ParallaxImage";

const stats = [
  { value: "12,000+", label: "Books listed" },
  { value: "4,800+", label: "Readers joined" },
  { value: "98%", label: "Happy trades" },
];

export default function ReadTogetherSection() {
  return (
    <section
      id="read-together"
      aria-label="Read Together — community"
      className="relative min-h-screen flex items-center py-24"
    >
      {/* Background image — left half */}
      <div className="absolute left-0 top-0 bottom-0 w-full md:w-1/2 opacity-40 md:opacity-100">
        <ParallaxImage
          src="/images/read_together.png"
          alt="Group of people reading and sharing books together"
          speed={0.2}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#141009] via-[#141009]/40 to-transparent" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#141009] via-transparent to-[#141009] pointer-events-none" />

      {/* Content — right side */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex justify-end">
        <div className="max-w-xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#D4A85A] uppercase mb-4">
            The Community
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#F5EDD8] leading-tight mb-6">
            Read together,
            <br />
            <span className="text-[#D4A85A]">grow together.</span>
          </h2>
          <p className="text-[#F5EDD8]/70 text-lg leading-relaxed mb-10">
            Paper Portal is more than a marketplace — it&apos;s a gathering place
            for people who believe that books are best when they keep moving.
            Share reviews, build wish lists, and discover what your community is
            reading right now.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-[#D4A85A]/40 pl-4">
                <p className="font-serif text-2xl font-bold text-[#D4A85A]">{stat.value}</p>
                <p className="text-xs text-[#9A8A6A] mt-1 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
