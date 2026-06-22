"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/technology", label: "Technology" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-surface">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm tracking-widest text-ink">
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

        <div className="flex items-center gap-4">
          <Link
            href="/start"
            className="font-mono text-sm px-4 py-2 border border-signal text-signal hover:bg-signal hover:text-canvas transition-colors"
            onClick={() => alert("get started clicked")}
          >
            Let&apos;s get started
          </Link>

          <button
            onClick={() => setOpen(!open)}                      
            className="md:hidden font-mono text-sm text-muted hover:text-ink transition-colors"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? "Close" : "MenuX"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-surface px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}