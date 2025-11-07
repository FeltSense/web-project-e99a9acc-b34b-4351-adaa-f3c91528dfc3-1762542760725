'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950/95 backdrop-blur-md border-b border-teal-500/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16 md:h-20">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
        <div className="relative w-8 h-8 md:w-10 md:h-10">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          <div className="relative w-full h-full bg-slate-950 rounded-lg flex items-center justify-center border border-teal-400/30 group-hover:border-teal-400/60 transition-colors duration-300">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
          </div>
        </div>
        <span className="hidden sm:inline-block text-lg md:text-xl font-bold bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:from-teal-300 group-hover:via-cyan-300 group-hover:to-blue-300 transition-all duration-300">
          FlowSync
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-1">
        <Link href="/" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors duration-300 relative group">
          Home
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>
        
        <a href="#about" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors duration-300 relative group">
          About
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
        
        <a href="#contact" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors duration-300 relative group">
          Contact
          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
      </div>

      {/* CTA Button + Mobile Menu Toggle */}
      <div className="flex items-center gap-3 md:gap-4">
        <button className="hidden sm:inline-flex px-5 py-2 text-sm font-semibold text-slate-950 bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-300 hover:to-cyan-300 rounded-lg transition-all duration-300 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:scale-105 active:scale-95">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-lg text-slate-300 hover:text-teal-400 hover:bg-slate-800/50 transition-all duration-300" aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Menu Backdrop Indicator */}
  <div className="md:hidden h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>
</nav>

{/* Spacer for fixed nav */}
<div className="h-16 md:h-20"></div>
  );
}