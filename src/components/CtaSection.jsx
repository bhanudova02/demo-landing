import React from 'react';
import { IconArrowRight, IconCheck } from './Icons';

export default function CtaSection() {
  return (
    <section className="py-10 sm:py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Card with subtle light-blue background (rounded-lg) */}
        <div className="relative rounded-lg bg-slate-50 border border-sky-200 p-5 sm:p-10 lg:p-14 shadow-lg overflow-hidden">
          
          {/* Floating Status Badge (hidden on mobile to prevent overlapping) */}
          <div className="hidden sm:block absolute top-6 sm:top-8 right-6 sm:right-8 z-20">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-md bg-white shadow-md border border-slate-200 text-xs text-slate-800">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <div>
                <div className="font-bold text-slate-900 leading-none">Let's Talk</div>
                <div className="text-[10px] text-slate-500 mt-0.5">We usually reply within a few hours.</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Heading & CTAs (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4 border border-sky-200">
                <span>Let's Build Together</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Ready to bring your idea to life?
              </h2>

              <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
                Whether you need a website, ecommerce store, admin panel or mobile app, we're ready to build it with you.
              </p>

              {/* Solid Action Buttons (rounded-sm, No Gradients) */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <span>Get a Free Quote</span>
                  <IconArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 transition-colors cursor-pointer"
                >
                  <span>Schedule a Call</span>
                </a>
              </div>

              {/* Guarantees List */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <IconCheck className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                  Free technical estimation
                </span>
                <span className="flex items-center gap-1.5">
                  <IconCheck className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                  Direct senior engineer access
                </span>
                <span className="flex items-center gap-1.5">
                  <IconCheck className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                  NDA protected consultation
                </span>
              </div>
            </div>

            {/* Right Column: High-Resolution Developer Workspace Image (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-lg overflow-hidden shadow-xl border border-slate-200 bg-white p-2">
                <img
                  src="/images/workspace_cta.jpg"
                  alt="Modern developer studio workspace"
                  className="w-full h-auto rounded-md object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md text-white px-3.5 py-2 rounded-sm text-xs flex items-center justify-between">
                  <span className="font-semibold">nxtwebworks Studio HQ</span>
                  <span className="text-emerald-400 font-bold">● Engineers Online</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
