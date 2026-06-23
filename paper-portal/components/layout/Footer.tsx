import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#D4A85A]/20 bg-[#141009] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-serif text-lg font-bold text-[#D4A85A]">Paper Portal</p>
          <p className="text-sm text-[#9A8A6A] mt-1">
            Second-hand books. New stories.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-6 list-none">
            <li>
              <Link href="/" className="text-sm text-[#9A8A6A] hover:text-[#D4A85A] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/listings" className="text-sm text-[#9A8A6A] hover:text-[#D4A85A] transition-colors">
                Browse Books
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm text-[#9A8A6A] hover:text-[#D4A85A] transition-colors">
                About
              </Link>
            </li>
          </ul>
        </nav>

        <p className="text-xs text-[#9A8A6A]">
          © {new Date().getFullYear()} Paper Portal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
