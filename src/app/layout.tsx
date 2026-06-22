import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "OSIRL — Open Source PACS for Veterinary Practices",
  description:
    "Open source PACS infrastructure and DICOM viewer integration for veterinary practices in Ireland and beyond.",
};

// const navLinks = [
//   { href: "/services", label: "Services" },
//   { href: "/technology", label: "Technology" },
//   { href: "/about", label: "About" },
//   { href: "/contact", label: "Contact" },
// ];

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased bg-canvas text-ink`}
      >
        {/* <header className="border-b border-surface">
          <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="font-mono text-sm tracking-widest text-ink"
            >
              OSIRL
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted hover:text-ink transition-colors border-b border-transparent hover:border-signal pb-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <Link
              href="/start"
              className="font-mono text-sm px-4 py-2 border border-signal text-signal hover:bg-signal hover:text-canvas transition-colors"
            >
              Let&apos;s get started
            </Link>
          </nav>
        </header> */}

        <NavBar />
        
        {children}

        <footer className="border-t border-surface mt-24">
          <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-6 text-sm text-muted">
            <p className="font-mono">OSIRL · Open source PACS for veterinary practices</p>
            <div className="flex gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-ink transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}