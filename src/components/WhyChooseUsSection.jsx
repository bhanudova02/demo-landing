import React from 'react';
import { 
  IconSparkles, 
  IconUsers, 
  IconClock, 
  IconCode, 
  IconHeadphones, 
  IconBriefcase, 
  IconArrowRight 
} from './Icons';

export default function WhyChooseUsSection() {
  const benefits = [
    {
      title: 'High-Quality Work',
      description: 'Clean, scalable and performance-focused solutions engineered for longevity.',
      icon: IconSparkles,
      accent: 'text-amber-500 bg-amber-50',
    },
    {
      title: 'Client-Focused',
      description: 'Your goals stay at the center of every decision, from initial spec to final sign-off.',
      icon: IconUsers,
      accent: 'text-sky-600 bg-sky-50',
    },
    {
      title: 'On-Time Delivery',
      description: 'Clear communication, transparent milestones, and dependable delivery timelines.',
      icon: IconClock,
      accent: 'text-emerald-600 bg-emerald-50',
    },
    {
      title: 'Modern Technology',
      description: 'We use current tools and development practices that ensure fast, maintainable code.',
      icon: IconCode,
      accent: 'text-cyan-600 bg-cyan-50',
    },
    {
      title: 'Ongoing Support',
      description: 'Reliable support, maintenance, and technical improvements even long after launch.',
      icon: IconHeadphones,
      accent: 'text-indigo-600 bg-indigo-50',
    },
    {
      title: 'Business Value',
      description: 'Practical solutions focused on real business results, conversions, and user retention.',
      icon: IconBriefcase,
      accent: 'text-blue-600 bg-blue-50',
    },
  ];

  return (
    <section id="about" className="py-10 sm:py-16 md:py-24 bg-[#f8fafc] border-b border-slate-200/80 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Layout: Left Sticky Info + Right 6 Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-2.5">
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A trusted partner for your digital journey.
            </h2>
            <p className="mt-3 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
              We don't just build websites and apps. We create reliable digital products that support your business goals.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 gap-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">99.4%</div>
                <div className="text-xs text-slate-500 mt-0.5 sm:mt-1">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-sky-600 font-mono">100+</div>
                <div className="text-xs text-slate-500 mt-0.5 sm:mt-1">Products Launched</div>
              </div>
            </div>

            {/* CTA Buttons (Solid rounded-sm, no gradients) */}
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-2.5 sm:gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-sm transition-all"
              >
                <span>Start a Project</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors shadow-2xs"
              >
                <span>Talk to Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: 6 Benefits Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 sm:p-6 border border-slate-200 shadow-sm hover:shadow-lg hover:border-sky-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    {/* Benefit Icon */}
                    <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-sm flex items-center justify-center mb-3 sm:mb-4 ${benefit.accent} border border-slate-100`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
                    </div>

                    {/* Benefit Title */}
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {benefit.title}
                    </h3>

                    {/* Benefit Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Guaranteed standard</span>
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
