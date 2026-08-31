"use client";

import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "Why Us", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`pointer-events-none fixed inset-x-0 top-0 z-50 px-4 transition-all duration-500 sm:px-6 ${
        scrolled ? "pt-3 sm:pt-3.5" : "pt-5 sm:pt-7 md:pt-8"
      }`}
    >
      <nav
        className={`pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-4 py-2 transition-all duration-500 sm:px-6 sm:py-2.5 ${
          scrolled
            ? "bg-card/95 border border-border shadow-lift backdrop-blur-2xl text-foreground"
            : "bg-transparent border border-transparent shadow-none text-white"
        }`}
      >
        {/* Left: Logo */}
        <a href="#home" className="flex shrink-0 items-center group">
          <div
            className={`flex items-center rounded-2xl px-3.5 py-1.5 transition-all duration-300 ${
              scrolled
                ? "bg-transparent"
                : "bg-white/95 shadow-lg shadow-black/25 backdrop-blur-md border border-white/60 hover:bg-white hover:scale-105"
            }`}
          >
            <img
              src="/logo.png"
              alt="Black Car Service 360"
              className="h-11 sm:h-13 md:h-14 w-auto object-contain transition-transform duration-300"
            />
          </div>
        </a>

        {/* Center: Navigation Links with equal, balanced spacing */}
        <ul
          className={`hidden items-center justify-center gap-1.5 lg:flex xl:gap-3 ${
            scrolled ? "text-muted-foreground" : "text-white/90"
          }`}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  scrolled
                    ? "hover:text-primary hover:bg-muted/80"
                    : "hover:text-white hover:bg-white/15 drop-shadow-sm"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Phone CTA & Mobile toggle */}
        <div className="flex shrink-0 items-center gap-2">
          <a
            href="tel:+12674088229"
            className="hidden items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-300 hover:scale-105 sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            (267) 408-8229
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`grid h-10 w-10 shrink-0 place-items-center rounded-full transition-colors lg:hidden ${
              scrolled
                ? "bg-secondary text-foreground hover:bg-muted"
                : "bg-white/15 text-white hover:bg-white/25"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`pointer-events-auto mx-auto mt-2.5 max-w-6xl overflow-hidden rounded-3xl border border-border bg-card/95 backdrop-blur-2xl shadow-lift transition-all duration-500 lg:hidden ${
          open ? "max-h-96 opacity-100 py-3" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ul className="px-3 space-y-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                onClick={() => setOpen(false)}
                href={l.href}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="tel:+12674088229"
              className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground shadow-soft"
            >
              <Phone className="h-4 w-4" /> Call (267) 408-8229
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
