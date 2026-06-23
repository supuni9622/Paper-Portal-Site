import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Paper Portals — the team, the mission, and why we believe every book deserves a second life.",
};

export default function AboutPage() {
  return (
    <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column", background:"#141009", color:"#F6F1E7" }}>
      <Navbar />
      <main style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"8rem 1.5rem 4rem", textAlign:"center" }}>
        <p style={{ fontSize:"0.75rem", fontWeight:600, letterSpacing:"0.2em", textTransform:"uppercase", color:"#D4A85A", marginBottom:"1rem" }}>About Us</p>
        <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2.5rem,6vw,4rem)", fontWeight:500, color:"#F6F1E7", marginBottom:"1.5rem" }}>Our story is still being written.</h1>
        <p style={{ color:"rgba(246,241,231,0.6)", fontSize:"1.125rem", maxWidth:"32rem", lineHeight:1.7, marginBottom:"2.5rem" }}>
          This page is coming soon. In the meantime, explore our book listings or head back home.
        </p>
        <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap", justifyContent:"center" }}>
          <Link href="/" style={{ border:"1px solid rgba(212,168,90,.5)", color:"#D4A85A", fontWeight:600, padding:"0.75rem 1.5rem", borderRadius:"2rem", textDecoration:"none" }}>← Back home</Link>
          <Link href="/listings" style={{ background:"#D4A85A", color:"#141009", fontWeight:600, padding:"0.75rem 1.5rem", borderRadius:"2rem", textDecoration:"none" }}>Browse Books</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
