import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Browse Books",
  description: "Browse thousands of second-hand books on Paper Portals. Fiction, non-fiction, classics, and hidden gems — all at great prices.",
};

export default function ListingsPage() {
  return (
    <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column", background:"#141009", color:"#F6F1E7" }}>
      <Navbar />
      <main style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"8rem 1.5rem 4rem", textAlign:"center" }}>
        <p style={{ fontSize:"0.75rem", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#D4A85A", marginBottom:"1rem" }}>Browse Books</p>
        <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2.5rem,6vw,4rem)", fontWeight:500, color:"#F6F1E7", marginBottom:"1.5rem" }}>The shelves are being stocked.</h1>
        <p style={{ color:"rgba(246,241,231,0.6)", fontSize:"1.125rem", maxWidth:"32rem", lineHeight:1.7, marginBottom:"2.5rem" }}>
          Our listings page is coming soon. We&apos;re building something special for book lovers. Check back shortly — great reads await.
        </p>
        <Link href="/" style={{ border:"1px solid rgba(212,168,90,.5)", color:"#D4A85A", fontWeight:600, padding:"0.75rem 1.5rem", borderRadius:"2rem", textDecoration:"none", transition:"background .25s" }}>
          ← Back home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
