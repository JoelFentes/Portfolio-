'use client'

import React, { useState } from "react";
import Link from 'next/link';



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-slate-800">Joel Fentes</div>
          <div className={`md:flex space-x-8 ${menuOpen ? "flex flex-col absolute top-16 bg-white w-full left-0 p-4 md:static md:flex-row md:p-0" : "hidden md:flex"}`}>
            {["home", "about", "services", "portfolio"].map((id) => (
              <Link
                key={id}
                href={`#${id}`}
                className="text-slate-600 hover:text-blue-600 transition-colors"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
