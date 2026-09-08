import React from 'react';
import HeroVideoDialog from './HeroVideoDialog';
import { 
  IconArrowRight, 
  IconSparkles, 
  IconCheck, 
  IconShieldCheck, 
  IconZap,
  IconTrendingUp
} from './Icons';

export default function HeroSection() {
  const marqueeTech = [
    'React 19',
    'Next.js 15',
    'Tailwind CSS',
    'React Native',
    'Stripe Checkout',
    'Node.js',
    'TypeScript',
    'PostgreSQL',
    'Supabase',
    'REST & GraphQL',
    'Edge Cloud CDN',
    '100% Lighthouse Speed',
  ];

  const clientAvatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=faces',
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-12 sm:pt-14 sm:pb-20 border-b border-slate-200">
      {/* Background Magic UI Dot Grid with radial gradient mask */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_15%,#000_65%,transparent_100%)] pointer-events-none" />

      {/* Ambient Top Glow Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] max-w-full h-[320px] bg-sky-100/60 blur-[120px] -z-10 pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Text Section (Center Aligned, High Impact) */}
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
          
          {/* Magic UI Shiny Announcement Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-slate-900 text-white text-xs font-medium shadow-xs border border-slate-800 hover:border-slate-700 transition-colors">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-sky-400 font-bold flex items-center gap-1">
              <IconSparkles className="w-3.5 h-3.5 inline" />
              nxtwebworks
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Digital Engineering Studio</span>
            <span className="text-slate-500 text-xs">→</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            We Build High-Impact Websites{' '}
            <span className="text-sky-600 block sm:inline">
              & Mobile Apps.
            </span>
          </h1>

          {/* Supporting Narrative */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            From modern corporate web platforms and headless ecommerce storefronts to custom admin panels and mobile applications — we design and develop performant digital products built to scale.
          </p>

          {/* Call-to-Actions Row (rounded-sm, solid colors) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-sm transition-all active:scale-[0.99] cursor-pointer"
            >
              <span>Start a Project</span>
              <IconArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors cursor-pointer"
            >
              <span>Explore Our Work</span>
            </a>
          </div>

          {/* Magic UI Avatar Circles Social Proof */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-600">
            <div className="flex items-center -space-x-2">
              {clientAvatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Client"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover shadow-xs"
                />
              ))}
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-xs">
                +120
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <span className="text-amber-500 font-bold">★★★★★</span>
              <span className="font-bold text-slate-900">5.0</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600 font-medium">Loved by 120+ founders & engineering leaders</span>
            </div>
          </div>

        </div>

        {/* Magic UI Hero Video Dialog Showcase (Centerpiece) */}
        <div className="mt-8 sm:mt-12 max-w-5xl mx-auto">
          {/* Subtle Ambient Backlight Glow */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-sky-200/50 via-cyan-100/40 to-blue-200/30 rounded-lg blur-2xl -z-10" />
            
            <HeroVideoDialog
              videoSrc="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
              thumbnailSrc="/images/hero_video_thumb.jpg"
              thumbnailAlt="nxtwebworks product showcase"
            />
          </div>

          {/* 3 Value Pillars Strip Directly Below Showcase */}
          <div className="mt-4 grid grid-cols-3 divide-x divide-slate-100 bg-white rounded-lg border border-slate-200/80 p-3 sm:p-4 text-center shadow-xs">
            <div className="px-2">
              <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center justify-center gap-1.5">
                <IconZap className="w-3.5 h-3.5 text-sky-600" />
                <span>2-Week Sprints</span>
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5">Rapid agile development</div>
            </div>
            <div className="px-2">
              <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center justify-center gap-1.5">
                <IconCheck className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                <span>99.4% On-Time</span>
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5">Milestone precision</div>
            </div>
            <div className="px-2">
              <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center justify-center gap-1.5">
                <IconShieldCheck className="w-3.5 h-3.5 text-cyan-600" />
                <span>100% IP Ownership</span>
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5">Your code, your assets</div>
            </div>
          </div>
        </div>

        {/* Magic UI Infinite Tech Marquee */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-100">
          <div className="text-center mb-3">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-slate-400">
              Modern Tech Stack & Production Standards
            </span>
          </div>

          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee flex items-center gap-3 whitespace-nowrap py-1">
              {[...marqueeTech, ...marqueeTech].map((tech, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
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
