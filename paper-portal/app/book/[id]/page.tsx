import type { Metadata } from "next";
import Link from "next/link";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Book #${id}`,
    description: "View details for this second-hand book on Paper Portal.",
  };
}

export default async function BookDetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-sm font-semibold tracking-[0.2em] text-[#D4A85A] uppercase mb-4">
        Book Detail
      </p>
      <h1 className="font-serif text-5xl font-bold text-[#F5EDD8] mb-4">
        Book #{id}
      </h1>
      <p className="text-[#F5EDD8]/60 text-lg max-w-md mb-10 leading-relaxed">
        Individual book pages are coming soon. Return to listings to find your next read.
      </p>
      <div className="flex gap-4">
        <Link
          href="/listings"
          className="border border-[#D4A85A]/50 text-[#D4A85A] font-semibold px-6 py-3 rounded-full hover:bg-[#D4A85A]/10 transition-colors"
        >
          ← All listings
        </Link>
        <Link
          href="/"
          className="bg-[#D4A85A] text-[#141009] font-semibold px-6 py-3 rounded-full hover:bg-[#E8C07A] transition-colors"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
