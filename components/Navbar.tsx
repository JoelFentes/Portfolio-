"use client";

import React, { useState } from "react";
import Link from "next/link";

const NAV_ITEMS: { id: string; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "Sobre" },
  { id: "experience", label: "Experiência" },
  { id: "portfolio", label: "Projetos" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/#home" className="text-base font-extrabold text-ink">
          Joel Fentes.
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              className="text-sm font-medium text-ink transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#contact"
          className="hidden rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-deep md:inline-block"
        >
          Contato
        </Link>

        <button
          className="text-ink md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Alternar menu"
          aria-expanded={menuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-1 border-t border-border bg-bg px-4 py-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-2 py-2 text-sm font-medium text-ink transition-colors hover:bg-accent-soft hover:text-accent-deep"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full bg-ink px-5 py-2 text-center text-sm font-semibold text-white"
          >
            Contato
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
