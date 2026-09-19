import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Websites',
    icon: '/icons/Web Development.png',
    color: 'from-blue-400 to-blue-600',
    items: ['Business websites', 'Landing pages', 'E-commerce', 'Conversion-focused pages', 'SEO-ready structure'],
    cta: 'Build My Website',
  },
  {
    title: 'Web & Mobile Apps',
    icon: '/icons/App Development.png',
    color: 'from-red-400 to-red-600',
    items: ['Web applications', 'Customer portals', 'Dashboards', 'Internal tools', 'Mobile applications'],
    cta: 'Build My App',
  },
  {
    title: 'Automation',
    icon: '/icons/AI Applications.png',
    color: 'from-purple-400 to-purple-600',
    items: ['Lead automation', 'CRM workflows', 'Notifications', 'API integrations', 'AI-powered workflows'],
    cta: 'Automate My Business',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#f8f9fa] relative border-t border-dashed border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-6" data-aos="fade-up">
          <span className="inline-block bg-black text-white text-xs font-semibold px-3 py-1 rounded-full mb-6">WHAT WE BUILD</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Everything you need to move your business forward.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-[15px]">
            From your first website to a complete automated business workflow, we build the technology around your actual business needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {services.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col group hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-sm`}>
                <img src={item.icon} alt={item.title} className="w-8 h-8 object-contain" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>

              <ul className="flex flex-col space-y-2 mb-8 flex-grow">
                {item.items.map((li, i) => (
                  <li key={i} className="text-[14px] text-gray-500 flex items-start gap-2">
                    <span className="text-gray-300 mt-0.5">–</span>
                    {li}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-[14px] font-semibold text-blue-600 hover:text-blue-700 transition-colors group-hover:underline"
              >
                {item.cta} <ArrowUpRight size={14} />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
