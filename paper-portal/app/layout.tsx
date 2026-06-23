import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = "https://paper-portal.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Paper Portals — Second-Hand Books Marketplace",
    template: "%s | Paper Portals",
  },
  description:
    "Paper Portals is a curated marketplace for second-hand books. Give your books a new home, discover hidden gems, and join a reading community — sustainably.",
  keywords: ["second-hand books", "used books", "book marketplace", "buy books online", "sell books", "sustainable reading"],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Paper Portals",
    title: "Paper Portals — Second-Hand Books Marketplace",
    description: "A curated marketplace for second-hand books. Give your books a new home and discover hidden gems.",
    images: [{ url: "/images/hero.png", width: 1200, height: 630, alt: "Paper Portals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paper Portals — Second-Hand Books Marketplace",
    description: "A curated marketplace for second-hand books.",
    images: ["/images/hero.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Paper Portals",
      description: "Second-hand books marketplace",
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Paper Portals",
      url: siteUrl,
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
