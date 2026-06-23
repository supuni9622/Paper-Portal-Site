"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#141009]/90 backdrop-blur-md border-b border-[#D4A85A]/20"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-serif text-xl font-bold text-[#D4A85A] tracking-wide hover:text-[#E8C07A] transition-colors"
        >
          Paper Portal
        </Link>

        <ul className="flex items-center gap-8 list-none">
          <li>
            <Link
              href="/listings"
              className="text-sm text-[#F5EDD8]/80 hover:text-[#D4A85A] transition-colors tracking-wide"
            >
              Browse Books
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-sm text-[#F5EDD8]/80 hover:text-[#D4A85A] transition-colors tracking-wide"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/listings"
              className="text-sm bg-[#D4A85A] text-[#141009] font-semibold px-5 py-2 rounded-full hover:bg-[#E8C07A] transition-colors tracking-wide"
            >
              Start Trading
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
