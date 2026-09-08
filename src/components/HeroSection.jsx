import React from 'react';
import { 
  IconArrowRight, 
  IconSparkles, 
  IconTrendingUp, 
  IconZap, 
  IconShieldCheck, 
  IconCheck 
} from './Icons';

export default function HeroSection() {
  const marqueeTech = [
    'React 19',
    'Next.js',
    'Tailwind CSS',
    'React Native',
    'Stripe Payments',
    'Node.js',
    'TypeScript',
    'PostgreSQL',
    'Supabase',
    'REST & GraphQL',
    'Edge Cloud CDN',
    '100% Lighthouse Speed',
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-slate-200">
      {/* Background Magic UI Dot Grid with radial gradient mask */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_15%,#000_65%,transparent_100%)] pointer-events-none" />

      {/* Ambient subtle glow light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] max-w-full h-[280px] bg-sky-100/70 blur-[110px] -z-10 pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          
          {/* Left Column: Narrative & Action (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Magic UI Shiny Announcement Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-slate-900 text-white text-xs font-medium shadow-xs border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-sky-400 font-bold flex items-center gap-1">
                <IconSparkles className="w-3.5 h-3.5 inline" />
                nxtwebworks
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 truncate">Digital Product Studio</span>
            </div>

            {/* Main Headline (Optimized for Mobile & Desktop) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.14] sm:leading-[1.1]">
              Websites & Mobile Apps,{' '}
              <span className="text-sky-600 block mt-1">
                Built for Business.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              We partner with ambitious founders and fast-growing businesses to engineer high-converting websites, modern ecommerce platforms, custom admin panels, and mobile apps. Fast delivery, clean code, zero fluff.
            </p>

            {/* Action Buttons Row (Solid colors, rounded-sm, mobile friendly) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-sm transition-all active:scale-[0.99] cursor-pointer"
              >
                <span>Start a Project</span>
                <IconArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors cursor-pointer"
              >
                <span>Explore Our Work</span>
              </a>
            </div>

            {/* Credibility & Guarantees Row */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 sm:gap-4 text-[11px] sm:text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <IconCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 stroke-[3] shrink-0" />
                <span>2-Week Sprints</span>
              </div>
              <div className="flex items-center gap-1.5">
                <IconCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 stroke-[3] shrink-0" />
                <span>99.4% On-Time</span>
              </div>
              <div className="flex items-center gap-1.5">
                <IconCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 stroke-[3] shrink-0" />
                <span>100% IP Ownership</span>
              </div>
            </div>

          </div>

          {/* Right Column: Layered Showcase Visual (6 cols) */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            
            {/* Subtle backlight aura */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-sky-200/40 via-cyan-100/30 to-blue-200/30 rounded-lg blur-2xl -z-10" />

            {/* Showcase Card Frame (rounded-lg) */}
            <div className="relative rounded-lg overflow-hidden border border-slate-200/90 shadow-xl bg-white">
              
              {/* Product Showcase Image */}
              <div className="relative overflow-hidden bg-slate-100">
                <img
                  src="/images/hero_showcase.jpg"
                  alt="nxtwebworks Digital Product Showcase"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>

              {/* Mobile Dedicated Live Metrics Bar (Visible on mobile screens) */}
              <div className="sm:hidden grid grid-cols-3 divide-x divide-slate-100 bg-slate-50/90 border-t border-slate-100 p-2.5 text-center">
                <div className="px-1">
                  <div className="text-[10px] text-slate-500 font-medium">Volume</div>
                  <div className="text-xs font-bold text-slate-900 mt-0.5">$142k+</div>
                </div>
                <div className="px-1">
                  <div className="text-[10px] text-slate-500 font-medium">Speed</div>
                  <div className="text-xs font-bold text-emerald-600 mt-0.5">0.3s Fast</div>
                </div>
                <div className="px-1">
                  <div className="text-[10px] text-slate-500 font-medium">Rating</div>
                  <div className="text-xs font-bold text-sky-600 mt-0.5">★ 4.9/5</div>
                </div>
              </div>
            </div>

            {/* Desktop Floating Metric 1 (Top-Left, animated) */}
            <div className="hidden sm:block absolute -top-4 -left-4 z-20 animate-float-gentle">
              <div className="bg-white/95 backdrop-blur-md p-3 rounded-md shadow-lg border border-slate-200 text-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100 shrink-0">
                  <IconTrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Gross Volume</div>
                  <div className="text-sm font-black text-slate-900">$142,850 <span className="text-emerald-600 text-xs font-bold">+28.4%</span></div>
                </div>
              </div>
            </div>

            {/* Desktop Floating Metric 2 (Bottom-Right, animated) */}
            <div className="hidden sm:block absolute -bottom-4 -right-4 z-20 animate-float-reverse">
              <div className="bg-white/95 backdrop-blur-md p-3 rounded-md shadow-lg border border-slate-200 text-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shrink-0">
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

        {/* Magic UI Infinite Marquee Strip */}
        <div className="mt-14 sm:mt-20 pt-8 border-t border-slate-100">
          <div className="text-center mb-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
              Modern Tech Stack & Production Standards
            </span>
          </div>

          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee flex items-center gap-3 whitespace-nowrap py-1">
              {[...marqueeTech, ...marqueeTech].map((tech, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

