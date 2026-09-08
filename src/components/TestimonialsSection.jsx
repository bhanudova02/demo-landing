import React from 'react';
import { IconCheck } from './Icons';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'CEO & Co-founder',
      company: 'Lumina Tech Store',
      imageInitials: 'SJ',
      initialsColor: 'bg-sky-600 text-white',
      rating: 5,
      content: 'nxtwebworks rebuilt our ecommerce platform from the ground up. In the first 60 days, our conversion rate jumped by 42% and checkout abandonment hit an all-time low. Truly outstanding engineering.',
      tag: 'Ecommerce & Web',
    },
    {
      name: 'David Lawson',
      role: 'Head of Product',
      company: 'PulseMetric Analytics',
      imageInitials: 'DL',
      initialsColor: 'bg-blue-600 text-white',
      rating: 5,
      content: 'They delivered our admin dashboard and analytics suite two weeks ahead of schedule. The code is exceptionally clean, well-tested, and our team integrated the APIs effortlessly.',
      tag: 'Admin Dashboard',
    },
    {
      name: 'Marcus Vance',
      role: 'Managing Director',
      company: 'Astraea Global Partners',
      imageInitials: 'MV',
      initialsColor: 'bg-slate-800 text-white',
      rating: 5,
      content: 'From initial design discovery to deployment, nxtwebworks felt like our internal tech team. They understand real business requirements, not just code. The new portal elevated our entire brand.',
      tag: 'Corporate Platform',
    },
    {
      name: 'Elena Rostova',
      role: 'Founder & CTO',
      company: 'FinFlow Mobile',
      imageInitials: 'ER',
      initialsColor: 'bg-emerald-600 text-white',
      rating: 5,
      content: 'Finding an agency that truly excels at mobile applications without sacrificing speed is rare. nxtwebworks built our app with biometric login and real-time sync with zero downtime.',
      tag: 'Mobile App',
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200/80 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Trusted by innovative founders & business leaders.
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            See how our websites, ecommerce platforms, custom dashboards, and mobile applications empower real businesses to grow and succeed.
          </p>
        </div>

        {/* Testimonials 4-Card Grid (rounded-lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                {/* Star rating & Category badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 text-sm">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-sm bg-slate-100 text-slate-700 text-[10px] font-bold">
                    {item.tag}
                  </span>
                </div>

                {/* Quote Content */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{item.content}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-sm flex items-center justify-center font-bold text-xs ${item.initialsColor} shrink-0 shadow-xs`}>
                  {item.imageInitials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-slate-900 truncate flex items-center gap-1.5">
                    <span>{item.name}</span>
                    <span className="text-sky-600" title="Verified Client">
                      <IconCheck className="w-3 h-3 stroke-[3]" />
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 truncate">
                    {item.role}, {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats Bar (rounded-lg) */}
        <div className="mt-12 bg-white rounded-lg p-6 border border-slate-200 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">100+</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">Projects Shipped</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-sky-600 font-mono">99.4%</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">Client Retention Rate</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">14 Days</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">Average Sprint Cycle</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono">&lt; 1 hr</div>
            <div className="text-xs text-slate-500 mt-0.5 font-medium">Support Response Time</div>
          </div>
        </div>

      </div>
    </section>
  );
}
