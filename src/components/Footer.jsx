import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#f8f9fa] pt-24 pb-10 border-t border-gray-200 relative overflow-hidden">
      {/* Background watermark logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] md:text-[220px] font-black text-gray-900/[0.015] select-none pointer-events-none whitespace-nowrap z-0">
        CodeDale
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          {/* Logo and description (Left column) */}
          <div
            className="md:col-span-4 flex flex-col"
            data-aos="fade-right"
            data-aos-delay="0"
          >
            <div className="flex items-center gap-2 mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19.93V4.07C16.95 4.56 20 7.92 20 12C20 16.08 16.95 19.44 13 19.93ZM4 12C4 7.92 7.05 4.56 11 4.07V19.93C7.05 19.44 4 16.08 4 12Z" fill="currentColor"/>
                <circle cx="12" cy="12" r="3" fill="white" />
              </svg>
              <span className="text-xl font-bold text-blue-600 tracking-tight">Code<span className="font-medium">Dale</span></span>
            </div>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-[280px]">
              Strategic web design, and campaigns tailored to drive result and conversions.
            </p>
          </div>

          {/* Links (Middle columns) */}
          <div
            className="md:col-span-4 grid grid-cols-2 gap-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Company */}
            <div>
              <h4 className="font-medium text-gray-900 mb-6">Company</h4>
              <ul className="flex flex-col space-y-4">
                <li><a href="#" className="text-gray-500 hover:text-blue-600 text-[15px] transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-500 hover:text-blue-600 text-[15px] transition-colors">Our Work</a></li>
                <li><a href="#" className="text-gray-500 hover:text-blue-600 text-[15px] transition-colors">Achievements</a></li>
                <li><a href="#" className="text-gray-500 hover:text-blue-600 text-[15px] transition-colors">FAQs</a></li>
                <li><a href="#" className="text-gray-500 hover:text-blue-600 text-[15px] transition-colors">Brand</a></li>
                <li><a href="#" className="text-gray-500 hover:text-blue-600 text-[15px] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="font-medium text-gray-900 mb-6">Socials</h4>
              <ul className="flex flex-col space-y-4">
                <li>
                  <a href="#" className="text-gray-500 hover:text-blue-600 text-[15px] flex items-center group transition-colors">
                    Email <ArrowUpRight size={14} className="ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-blue-600 text-[15px] flex items-center group transition-colors">
                    Instagram <ArrowUpRight size={14} className="ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-blue-600 text-[15px] flex items-center group transition-colors">
                    LinkedIn <ArrowUpRight size={14} className="ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter (Right column) */}
          <div
            className="md:col-span-4"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h4 className="font-medium text-gray-900 mb-6">Newsletter</h4>
            <p className="text-gray-500 text-[14.5px] leading-relaxed mb-6">
              Stay ahead with design & marketing tips and strategies that drive results.
            </p>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">@</span>
              <input 
                type="email" 
                placeholder="Enter your email..." 
                className="w-full bg-white border border-gray-200 rounded-full py-3.5 pl-10 pr-16 text-[15px] outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm text-gray-700"
              />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors shadow-sm">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center pt-8 mt-4 text-[14px] text-gray-500"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p>©2025 CodeDale All rights reserved</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
