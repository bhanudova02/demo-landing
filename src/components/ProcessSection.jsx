import React from 'react';
import { IconSparkles, IconLayers, IconCode, IconTrendingUp } from './Icons';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'We understand your goals, audience and business requirements.',
      icon: IconSparkles,
      tag: 'Strategic Alignment',
      details: ['Discovery Workshop', 'User & Competitor Research', 'Technical Scope & Specs'],
    },
    {
      number: '02',
      title: 'Plan & Design',
      description: 'We define the structure, user experience and visual direction.',
      icon: IconLayers,
      tag: 'Prototyping & UX',
      details: ['Wireframes & Architecture', 'Design System & UI Kits', 'Clickable Figma Prototypes'],
    },
    {
      number: '03',
      title: 'Develop',
      description: 'We build your website, platform or application with modern technology.',
      icon: IconCode,
      tag: 'Production Build',
      details: ['Clean, Component Architecture', 'API Integrations & Database', 'Automated QA & Security'],
    },
    {
      number: '04',
      title: 'Launch & Grow',
      description: 'We launch, support and continuously improve your digital product.',
      icon: IconTrendingUp,
      tag: 'Go-Live & Scale',
      details: ['Zero-Downtime Deployment', 'Analytics Setup & Tracking', 'Ongoing Support & Iteration'],
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200/80 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Our Process</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            From idea to launch, without the complexity.
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            A structured, transparent engineering process designed to keep your project on time, on budget, and built to the highest technical standards.
          </p>
        </div>

        {/* Timeline Grid (Horizontal Desktop, Vertical Mobile) */}
        <div className="relative">
          
          {/* Horizontal connecting track on desktop (hidden on mobile) */}
          <div className="hidden lg:block absolute top-1/2 -translate-y-12 left-10 right-10 h-0.5 bg-gradient-to-r from-sky-200 via-cyan-300 to-blue-300 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white rounded-lg p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
                >
                  <div>
                    {/* Header with Step Number & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl sm:text-4xl font-black text-slate-200 group-hover:text-sky-500/40 transition-colors font-mono">
                        {step.number}
                      </span>
                      <div className="w-11 h-11 rounded-sm bg-slate-50 border border-slate-200 text-slate-700 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500 transition-all duration-300 shadow-xs">
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>
                    </div>

                    {/* Step Title & Tag */}
                    <span className="inline-block px-2.5 py-0.5 rounded-sm bg-sky-50 text-sky-700 text-[11px] font-semibold mb-2">
                      {step.tag}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Micro checklist items */}
                  <div className="mt-6 pt-5 border-t border-slate-100 space-y-1.5">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:bg-sky-500" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
