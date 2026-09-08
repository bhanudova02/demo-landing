import React, { useState } from 'react';
import { 
  IconGlobe, 
  IconShoppingBag, 
  IconLayoutDashboard, 
  IconSmartphone, 
  IconArrowRight,
  IconCheck,
  IconSparkles
} from './Icons';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'websites',
      title: 'Business Websites',
      tabLabel: 'Websites & Landing Pages',
      badge: 'High Conversion & SEO',
      headline: 'Corporate websites and high-converting landing pages that establish authority.',
      description: 'We engineer lightning-fast, beautifully designed websites built on modern React and headless architectures. Every website is custom designed to tell your story, rank high on Google, and convert visitors into qualified business leads.',
      icon: IconGlobe,
      iconBg: 'bg-sky-50 text-sky-600',
      turnaround: '2 - 3 Weeks',
      deliverables: [
        'Custom interactive design (Figma to React)',
        '100% Google Lighthouse speed score (<1s)',
        'Full SEO setup & schema markup',
        'Lead capture & CRM / analytics integration',
      ],
      previewTitle: 'Corporate & Growth Marketing Portal',
      previewMetric: '+142% Inbound Leads',
      previewImage: '/images/work_corporate.jpg',
    },
    {
      id: 'ecommerce',
      title: 'Ecommerce & Online Stores',
      tabLabel: 'Ecommerce Platforms',
      badge: 'Stripe & Shopify',
      headline: 'Modern, high-volume online storefronts engineered to maximize transaction value.',
      description: 'From custom Shopify Plus builds to bespoke headless commerce platforms, we build seamless shopping journeys with instant search, multi-currency checkout, dynamic inventory sync, and 1-click payment gateways.',
      icon: IconShoppingBag,
      iconBg: 'bg-emerald-50 text-emerald-600',
      turnaround: '3 - 5 Weeks',
      deliverables: [
        'Apple Pay, Google Pay & Stripe 1-click checkout',
        'Real-time inventory & ERP synchronization',
        'Product variant customizer & live preview',
        'Automated abandoned cart & order notifications',
      ],
      previewTitle: 'Aura Flagship Storefront',
      previewMetric: '+42% Checkout Completion',
      previewImage: '/images/work_ecommerce.jpg',
    },
    {
      id: 'dashboards',
      title: 'Admin Panels & Web Apps',
      tabLabel: 'Admin Panels & Dashboards',
      badge: 'Custom SaaS & Cloud',
      headline: 'Mission-critical dashboards, internal tooling, and client management portals.',
      description: 'We build fast, secure administrative interfaces that streamline complex business operations. Featuring role-based access control, WebSocket real-time analytics, automated data exports, and bulletproof security.',
      icon: IconLayoutDashboard,
      iconBg: 'bg-blue-50 text-blue-600',
      turnaround: '3 - 6 Weeks',
      deliverables: [
        'Role-based permissions & multi-tenant auth',
        'Interactive real-time data charts & reporting',
        'REST & GraphQL API integrations',
        'PostgreSQL / Supabase cloud database setup',
      ],
      previewTitle: 'Strata Cloud Telemetry Center',
      previewMetric: '24ms Query Latency',
      previewImage: '/images/services_dashboard.jpg',
    },
    {
      id: 'mobile',
      title: 'Mobile Applications',
      tabLabel: 'Mobile Apps (iOS & Android)',
      badge: 'App Store & Google Play',
      headline: 'Native & cross-platform mobile apps built for offline reliability and scale.',
      description: 'We develop high-performance iOS and Android applications with sub-second launch times, biometric security, push notifications, and seamless offline data synchronization built for modern consumers and enterprise teams.',
      icon: IconSmartphone,
      iconBg: 'bg-cyan-50 text-cyan-600',
      turnaround: '4 - 8 Weeks',
      deliverables: [
        'Single maintainable codebase for iOS & Android',
        'FaceID, TouchID & biometric authentication',
        'Offline-first sync & push notification infrastructure',
        'End-to-end App Store & Play Store publishing',
      ],
      previewTitle: 'FinFlow Wealth Native App',
      previewMetric: '4.9★ from 250k Users',
      previewImage: '/images/work_mobile.jpg',
    },
  ];

  const currentService = services[activeTab];
  const CurrentIcon = currentService.icon;

  return (
    <section id="services" className="py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Our Core Services</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Everything your business needs to go digital.
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            From high-converting corporate websites to robust ecommerce platforms, custom admin panels, and mobile apps, we engineer digital products that drive measurable business outcomes.
          </p>
        </div>

        {/* Interactive Service Tab Bar (rounded-sm, solid active states) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeTab === index;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{service.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Active Service Showcase Box (rounded-lg) */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-md p-6 sm:p-8 lg:p-10 transition-all duration-300 mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Detailed Scope (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-sm flex items-center justify-center ${currentService.iconBg} border border-slate-100`}>
                    <CurrentIcon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {currentService.title}
                    </h3>
                    <span className="text-xs text-slate-500">Typical Sprint: {currentService.turnaround}</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-sm bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200">
                  {currentService.badge}
                </span>
              </div>

              <p className="text-sm sm:text-base font-medium text-slate-900 leading-snug">
                {currentService.headline}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {currentService.description}
              </p>

              {/* What's Included Checklist */}
              <div className="pt-2 border-t border-slate-100">
                <div className="text-xs uppercase font-bold text-slate-500 tracking-wider mb-3">
                  Key Technical Deliverables:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="w-4 h-4 rounded-sm bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <IconCheck className="w-3 h-3 stroke-[3]" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button (rounded-sm) */}
              <div className="pt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <span>Request Proposal for {currentService.title}</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Live Image Mockup Frame (6 cols, rounded-lg) */}
            <div className="lg:col-span-6">
              <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md bg-white group">
                {/* Visual Preview (Clean, uncropped) */}
                <div className="relative aspect-[16/10] overflow-hidden flex items-center justify-center">
                  <img
                    src={currentService.previewImage}
                    alt={currentService.title}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Quick Service Cards Grid for Rapid Scanning (rounded-lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isSelected = activeTab === index;
            return (
              <div
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`rounded-lg p-6 border transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 ${
                  isSelected
                    ? 'bg-white border-sky-500 shadow-md ring-1 ring-sky-500'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-sm flex items-center justify-center ${service.iconBg} border border-slate-100`}>
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    {service.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-600">
                  <span>{isSelected ? 'Currently Viewing' : 'View Details'}</span>
                  <IconArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
