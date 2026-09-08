import React, { useState } from 'react';

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 'ecommerce',
      category: 'Ecommerce',
      title: 'Aura Luxury Tech Store',
      type: 'Ecommerce Platform',
      domain: 'aura-store.com',
      description: 'High-converting flagship online store with dynamic product customizer, instant cart drawer, and automated multi-currency Stripe checkout.',
      tags: ['Ecommerce', 'Stripe Payments', 'Inventory Sync', 'Tailwind CSS'],
      image: '/images/work_ecommerce.jpg',
    },
    {
      id: 'dashboard',
      category: 'Web App',
      title: 'Telemetry Cloud Analytics',
      type: 'Admin Dashboard',
      domain: 'app.telemetry-suite.io',
      description: 'Enterprise telemetry and business intelligence platform featuring sub-second WebSocket data streams, role-based access control, and automated exports.',
      tags: ['Admin Panel', 'SaaS', 'WebSocket', 'Analytics'],
      image: '/images/work_dashboard.jpg',
    },
    {
      id: 'corporate',
      category: 'Corporate',
      title: 'Astraea Global Advisory',
      type: 'Corporate Website',
      domain: 'astraea-partners.com',
      description: 'Institutional web platform for an international private equity advisory. Headless CMS architecture, full SEO compliance, and global edge CDN delivery.',
      tags: ['Corporate', 'SEO Optimized', 'Headless CMS', 'Responsive'],
      image: '/images/work_corporate.jpg',
    },
    {
      id: 'mobile',
      category: 'Mobile',
      title: 'Fintech Wealth Mobile App',
      type: 'Mobile Application',
      domain: 'App Store & Play Store',
      description: 'Cross-platform mobile application featuring biometric login, real-time portfolio valuation, spending trend categorizer, and instant push notifications.',
      tags: ['iOS', 'Android', 'Mobile App', 'Biometrics'],
      image: '/images/work_mobile.jpg',
    },
  ];

  const filterCategories = ['All', 'Ecommerce', 'Web App', 'Corporate', 'Mobile'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter || p.tags.includes(activeFilter));

  return (
    <section id="work" className="py-20 md:py-28 bg-white border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
              <span>Featured Work</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Real digital products. Built for real businesses.
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600">
              Explore how we help modern organizations transform complex requirements into sleek, performant software applications.
            </p>
          </div>

          {/* Filter Pills (rounded-sm, solid, no gradients) */}
          <div className="flex flex-wrap gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-sm text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Project Cards Grid (rounded-lg, uncropped images) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-400 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Clean Image Display Box (rounded-t-lg) */}
              <div className="relative aspect-[16/11] bg-slate-100 overflow-hidden flex items-center justify-center border-b border-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Card Details Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-sm bg-slate-100 text-slate-700 text-[11px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
