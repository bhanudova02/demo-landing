import React, { useState, useEffect } from 'react';
import { IconMenu, IconClose, IconArrowRight } from './Icons';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#090d16]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'bg-[#090d16] border-b border-slate-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Company Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-md bg-sky-600 flex items-center justify-center text-white font-black text-sm tracking-tighter shadow-sm">
              NW
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-cyan-400 transition-colors lowercase">
                nxtwebworks
              </span>
              <span className="text-[9px] uppercase tracking-widest text-slate-400 -mt-1 font-semibold">
                Digital Agency
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white hover:text-cyan-400 transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA Button (rounded-sm) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <IconArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-sm text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Open Menu"
            >
              <IconMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Drawer & Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-50 transition-opacity duration-300 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 w-[290px] max-w-[85vw] bg-[#0b101b] border-l border-slate-800 shadow-2xl z-50 flex flex-col justify-between p-6 transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-md bg-sky-600 flex items-center justify-center text-white font-black text-xs">
              NW
            </div>
            <span className="text-lg font-bold text-white lowercase">nxtwebworks</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-1.5 rounded-sm text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close menu"
          >
            <IconClose className="w-5 h-5 text-slate-300" />
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <div className="flex-1 py-6 flex flex-col space-y-1.5 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-sm text-sm font-medium text-slate-200 hover:bg-slate-800/70 hover:text-cyan-400 transition-all flex items-center justify-between group"
            >
              <span>{link.name}</span>
              <span className="text-slate-500 group-hover:text-cyan-400 transition-colors text-xs">→</span>
            </a>
          ))}
        </div>

        {/* Sidebar Bottom CTA & Info */}
        <div className="pt-5 border-t border-slate-800/80 space-y-3">
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-sm text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 shadow-sm transition-all"
          >
            <span>Start a Project</span>
            <IconArrowRight className="w-3.5 h-3.5" />
          </a>
          <div className="text-center text-[11px] text-slate-400 font-medium">
            hello@nxtwebworks.com
          </div>
        </div>
      </div>
    </header>
  );
}
