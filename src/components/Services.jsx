import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Websites',
    icon: '/icons/Web Development.png',
    color: 'from-blue-400 to-blue-600',
    badge: 'Most Popular',
    badgeColor: 'bg-blue-100 text-blue-600',
    accentColor: '#3b82f6',
    items: ['Business websites', 'Landing pages', 'E-commerce', 'Conversion-focused pages', 'SEO-ready structure'],
    cta: 'Build My Website',
  },
  {
    title: 'Web & Mobile Apps',
    icon: '/icons/App Development.png',
    color: 'from-rose-400 to-rose-600',
    badge: 'Custom Built',
    badgeColor: 'bg-rose-100 text-rose-600',
    accentColor: '#f43f5e',
    items: ['Web applications', 'Customer portals', 'Dashboards', 'Internal tools', 'Mobile applications'],
    cta: 'Build My App',
  },
  {
    title: 'Automation',
    icon: '/icons/AI Applications.png',
    color: 'from-violet-400 to-violet-600',
    badge: 'AI Powered',
    badgeColor: 'bg-violet-100 text-violet-600',
    accentColor: '#7c3aed',
    items: ['Lead automation', 'CRM workflows', 'Notifications', 'API integrations', 'AI-powered workflows'],
    cta: 'Automate My Business',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative border-t border-dashed border-gray-200">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block bg-gray-900 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase">
            What We Build
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Everything you need to move<br className="hidden md:block" /> your business forward.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-[15px] leading-relaxed">
            From your first website to a complete automated business workflow, we build the technology around your actual business needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative bg-[#f8f9fa] hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl rounded-3xl p-8 flex flex-col transition-all duration-300 cursor-default"
            >
              {/* Top row — icon + badge */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300`}>
                  <img src={item.icon} alt={item.title} className="w-8 h-8 object-contain" />
                </div>
                <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-5">{item.title}</h3>

              <ul className="flex flex-col gap-2.5 mb-8 flex-grow">
                {item.items.map((li, i) => (
                  <li key={i} className="text-[13.5px] text-gray-500 flex items-center gap-2.5">
                    <CheckCircle2
                      className="w-3.5 h-3.5 shrink-0"
                      style={{ color: item.accentColor }}
                    />
                    {li}
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="h-px bg-gray-100 mb-5" />

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold transition-colors"
                style={{ color: item.accentColor }}
              >
                {item.cta}
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
