import React from 'react';
import { IconArrowRight, IconGlobe, IconSmartphone, IconTrendingUp, IconCheck, IconZap } from './Icons';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-200">
      {/* Background technical dot grid with soft radial mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Subtle top glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-sky-100/60 blur-[100px] -z-10 pointer-events-none rounded-lg" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Split Grid Layout (Text + Interactive Showcase) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Narrative, Headings & CTAs (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Live Eyebrow Badge (rounded-sm) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-2xs">
              <span className="w-2 h-2 rounded-sm bg-emerald-500 animate-pulse" />
              <span>Websites • Ecommerce • Admin Panels • Apps</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.18] sm:leading-[1.12]">
              Websites & Mobile Apps,{' '}
              <span className="text-sky-600 block mt-1">
                Built for Business.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              We design and develop high-converting corporate websites, modern ecommerce stores, custom admin panels, and mobile apps that turn complex workflows into intuitive digital products.
            </p>

            {/* Action Buttons Row (rounded-sm, solid colors, no gradients) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>Start a Project</span>
                <IconArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors cursor-pointer"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Trust Badges & Credibility Row */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <IconCheck className="w-4 h-4 text-emerald-600 stroke-[3]" />
                <span>2-Week Fast Sprints</span>
              </div>
              <div className="flex items-center gap-1.5">
                <IconCheck className="w-4 h-4 text-emerald-600 stroke-[3]" />
                <span>99.4% On-Time Delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <IconCheck className="w-4 h-4 text-emerald-600 stroke-[3]" />
                <span>100% Code Ownership</span>
              </div>
            </div>

          </div>

          {/* Right Column: Layered Interactive Visual Presentation (6 cols) */}
          <div className="lg:col-span-6 relative">
            
            {/* Decorative subtle backdrop accent */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-sky-200/40 via-cyan-100/30 to-blue-200/20 rounded-lg blur-xl -z-10" />

            {/* Main Showcase Container (Clean, rounded-lg) */}
            <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-xl bg-white group">
              {/* Showcase Image with clean framing */}
              <div className="relative overflow-hidden">
                <img
                  src="/images/hero_showcase.jpg"
                  alt="nxtwebworks Digital Product Showcase"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
            </div>

            {/* Floating Live Metric Card 1 (Top Left, rounded-md, animated) */}
            <div className="hidden sm:block absolute -top-4 -left-4 z-20 animate-float-gentle">
              <div className="bg-white/95 backdrop-blur-md p-3 rounded-md shadow-lg border border-slate-200 text-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100">
                  <IconTrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Gross Volume</div>
                  <div className="text-sm font-black text-slate-900">$142,850 <span className="text-emerald-600 text-xs">+28.4%</span></div>
                </div>
              </div>
            </div>

            {/* Floating Live Metric Card 2 (Bottom Right, rounded-md, animated) */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 z-20 animate-float-reverse">
              <div className="bg-white/95 backdrop-blur-md p-3 rounded-md shadow-lg border border-slate-200 text-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                  <IconZap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">App Speed</div>
                  <div className="text-sm font-black text-slate-900">0.3s Response <span className="text-sky-600 text-xs font-bold">★ 4.9</span></div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
