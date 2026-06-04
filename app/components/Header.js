"use client";

import { useEffect, useState } from "react";
import { navItems, site } from "../data/portfolio";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const linkClass = (href) => {
    const id = href.slice(1);
    const isActive = activeId === id;
    return `transition ${isActive ? "text-cyan-400" : "text-slate-400 hover:text-slate-100"}`;
  };

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <a href="#main" className="skip-link">
        Zum Inhalt
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          className="text-sm font-bold tracking-widest text-slate-200 transition hover:text-cyan-400"
        >
          {site.name}
        </a>
        <button
          type="button"
          className="rounded-md border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-500/50 hover:text-slate-100 md:hidden"
          aria-label="Navigation umschalten"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <nav className="hidden gap-6 text-sm md:flex" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <a key={item.href} className={linkClass(item.href)} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {isMobileMenuOpen && (
        <nav className="border-t border-slate-800 px-6 py-4 md:hidden" aria-label="Mobile Navigation">
          <div className="flex flex-col gap-3 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                className={linkClass(item.href)}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
