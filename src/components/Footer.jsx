import React from 'react';

export default function Footer() {
  const companyLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  const serviceLinks = [
    { name: 'Business Websites', href: '#services' },
    { name: 'Ecommerce & Stores', href: '#services' },
    { name: 'Admin Panels', href: '#services' },
    { name: 'Mobile Apps (iOS & Android)', href: '#services' },
  ];

  const resourceLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Security & Compliance', href: '#' },
    { name: 'Client Portal', href: '#' },
  ];

  return (
    <footer className="bg-[#070a11] text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5 group inline-flex">
              <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white font-black text-xs shadow-sm">
                NW
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-cyan-400 transition-colors lowercase">
                nxtwebworks
              </span>
            </a>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              We are a premier digital engineering agency. We design and build modern websites, ecommerce stores, admin panels, and mobile apps that empower businesses to scale.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 border border-slate-800 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Accepting New Projects for Q2 2026
              </span>
            </div>
          </div>

          {/* Column: Company */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Services */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Contact & Location */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Email</div>
                <a href="mailto:hello@nxtwebworks.com" className="text-slate-200 hover:text-cyan-400 transition-colors font-medium">
                  hello@nxtwebworks.com
                </a>
              </li>
              <li>
                <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Phone</div>
                <a href="tel:+15552345678" className="text-slate-200 hover:text-cyan-400 transition-colors font-medium">
                  +1 (555) 234-5678
                </a>
              </li>
              <li>
                <div className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">Offices</div>
                <span className="text-slate-300">San Francisco & Hyderabad</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-6">
            <span className="text-sm font-bold text-slate-300 lowercase">nxtwebworks</span>
            <span>© 2026 nxtwebworks. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            {resourceLinks.map((res) => (
              <a key={res.name} href={res.href} className="hover:text-slate-300 transition-colors">
                {res.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
