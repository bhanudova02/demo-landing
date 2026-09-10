import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 px-8 max-w-7xl mx-auto w-full fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5v1h-2v-1c0-1.38-1.12-2.5-2.5-2.5S8.5 10.62 8.5 12s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5h2c0 2.5-2 4.5-4.5 4.5z" fill="#2563eb"/>
        </svg>
        <span className="font-bold text-2xl text-blue-600 tracking-tight">CodeDale</span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex bg-white px-8 py-3 rounded-full shadow-sm border border-gray-100 items-center gap-8 text-sm font-medium text-gray-600 transition-all">
        <a href="#" className="hover:text-gray-900 transition-colors">Services</a>
        <a href="#" className="hover:text-gray-900 transition-colors">Our Work</a>
        <a href="#" className="hover:text-gray-900 transition-colors">Achievements</a>
        <a href="#" className="hover:text-gray-900 transition-colors">FAQs</a>
        <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
      </nav>

      {/* CTA */}
      <button className="bg-[#1a1a1a] hover:bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all shadow-md group">
        Book a Call
        <span className="bg-white/10 p-1 rounded-full group-hover:bg-white/20 transition-colors border border-white/10">
            <ArrowUpRight className="w-4 h-4 text-gray-300" />
        </span>
      </button>
    </header>
  );
};

export default Header;
