import React from 'react';
import MobileAnnotationMockup from './mockups/MobileAnnotationMockup';
import { IconCheck } from './Icons';

export default function BuiltAroundBusinessSection() {
  const highlights = [
    'User-centered architecture',
    'Sub-second interaction speeds',
    'Cloud-native scaling',
    'Bank-grade data protection',
  ];

  return (
    <section id="solutions" className="py-20 md:py-28 bg-white border-b border-slate-200/80 scroll-mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-cyan-50 border border-cyan-200/60 text-cyan-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Built Around Your Business</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Digital products designed for the way you work.
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We combine thoughtful UX, clean development and practical business thinking to create products that are easy to use and built to grow.
          </p>

          {/* Quick value props pill row */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs font-semibold text-slate-700">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-sm border border-slate-200/70">
                <span className="w-4 h-4 rounded-sm bg-sky-100 text-sky-600 flex items-center justify-center">
                  <IconCheck className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Centered Mobile Device Showcase with Handwritten Annotation Callouts */}
        <MobileAnnotationMockup />

      </div>
    </section>
  );
}
