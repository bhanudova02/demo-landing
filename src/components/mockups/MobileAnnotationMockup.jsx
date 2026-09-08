import React from 'react';
import { IconZap, IconShieldCheck, IconLayers, IconTrendingUp, IconCheck } from '../Icons';

export default function MobileAnnotationMockup() {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-12 px-4 select-none">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] bg-gradient-to-tr from-sky-200/50 via-cyan-100/40 to-blue-200/30 rounded-full blur-3xl -z-10" />

      {/* Main Centered Mobile Device */}
      <div className="relative mx-auto w-[270px] sm:w-[310px] md:w-[340px] z-20">
        {/* Smartphone Hardware Frame */}
        <div className="relative rounded-lg bg-slate-900 p-3 shadow-2xl shadow-slate-950/25 border-2 border-slate-800 ring-1 ring-slate-700/50">
          {/* Top Speaker & Dynamic Island */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-950 rounded-sm flex items-center justify-between px-3 z-30">
            <span className="w-2.5 h-2.5 rounded-sm bg-slate-800" />
            <span className="w-2 h-2 rounded-sm bg-slate-800/80" />
          </div>

          {/* Screen Display */}
          <div className="relative rounded-md bg-slate-50 overflow-hidden pt-8 pb-6 px-4 text-slate-800 shadow-inner">
            {/* Top Bar */}
            <div className="flex items-center justify-between text-[11px] text-slate-500 font-semibold mb-4 px-1">
              <span>9:41</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-sm bg-emerald-500" />
                <span className="text-[10px] text-slate-600">NxtWebOS</span>
              </div>
            </div>

            {/* App Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-[10px] uppercase font-bold text-sky-600 tracking-wider">Business Portal</div>
                <div className="text-base font-extrabold text-slate-900">Workspace Hub</div>
              </div>
              <div className="w-8 h-8 rounded-sm bg-sky-500 text-white flex items-center justify-center font-bold text-xs shadow-sm shadow-sky-500/30">
                NW
              </div>
            </div>

            {/* Live Performance Card (Points to 'Fast') */}
            <div id="target-fast" className="bg-white rounded-md p-3.5 shadow-sm border border-slate-200/80 mb-3">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-semibold text-slate-700">App Load Time</span>
                <span className="px-1.5 py-0.5 rounded-sm bg-emerald-50 text-emerald-600 font-bold text-[10px]">0.3s Ultra-Fast</span>
              </div>
              <div className="w-full bg-slate-100 rounded-sm h-1.5 overflow-hidden">
                <div className="bg-emerald-500 h-full w-[96%]" />
              </div>
              <div className="mt-2 flex justify-between text-[10px] text-slate-400">
                <span>99.9% Lighthouse score</span>
                <span className="text-emerald-600 font-semibold">Optimal</span>
              </div>
            </div>

            {/* Business KPI Card (Points to 'Business focused') */}
            <div id="target-business" className="bg-slate-900 rounded-md p-3.5 text-white shadow-md mb-3">
              <div className="text-[10px] text-slate-400">Net Business Revenue</div>
              <div className="text-lg font-black tracking-tight text-white mt-0.5">$38,420.00</div>
              <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px]">
                <span className="text-slate-300">Conversion Rate</span>
                <span className="text-cyan-400 font-bold">+34.8% YoY</span>
              </div>
            </div>

            {/* Security & Multi-tenant Card (Points to 'Secure' & 'Scalable') */}
            <div id="target-secure" className="bg-white rounded-md p-3 shadow-sm border border-slate-200/80">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-sm bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                  <IconShieldCheck className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-slate-800 truncate">Enterprise Encryption</div>
                  <div className="text-[10px] text-slate-500">SOC2 & GDPR Compliant</div>
                </div>
                <span className="w-2 h-2 rounded-sm bg-emerald-500" />
              </div>
            </div>

            {/* Bottom Quick Action (Points to 'Simple to use') */}
            <div id="target-simple" className="mt-3 text-center">
              <button className="w-full py-2.5 px-4 bg-sky-600 hover:bg-sky-500 text-white rounded-sm text-xs font-bold shadow-sm transition-colors cursor-pointer">
                1-Click Action Flow
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- FLOATING ANNOTATION LABELS WITH HANDWRITTEN STYLE --- */}

      {/* 1. "Simple to use" (Top Left) */}
      <div className="hidden sm:block absolute left-4 md:left-8 top-12 md:top-16 z-30 transition-transform duration-300 hover:scale-105">
        <div className="bg-white px-3.5 py-2 rounded-md shadow-lg border border-slate-200/90 flex items-center gap-2 text-slate-800">
          <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold">✨</span>
          <div>
            <div className="text-xs font-bold text-slate-900">Simple to use</div>
            <div className="text-[10px] text-slate-500">Zero learning curve UX</div>
          </div>
        </div>
        <div className="font-handwriting text-xl text-sky-600 font-bold mt-1 ml-4 -rotate-3 flex items-center gap-1">
          Intuitive flow! 
          <svg className="w-10 h-8 text-sky-500 -scale-y-100" viewBox="0 0 50 40" fill="none">
            <path d="M5 5 C 20 25, 35 25, 45 35" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
            <polygon points="45,35 40,28 35,36" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* 2. "Fast" (Top Right) */}
      <div className="hidden sm:block absolute right-4 md:right-8 top-10 md:top-14 z-30 transition-transform duration-300 hover:scale-105">
        <div className="bg-white px-3.5 py-2 rounded-md shadow-lg border border-slate-200/90 flex items-center gap-2 text-slate-800">
          <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">
            <IconZap className="w-3.5 h-3.5" />
          </span>
          <div>
            <div className="text-xs font-bold text-slate-900">Fast</div>
            <div className="text-[10px] text-emerald-600 font-semibold">&lt; 300ms response</div>
          </div>
        </div>
        <div className="font-handwriting text-xl text-emerald-600 font-bold mt-1 mr-4 rotate-2 text-right flex items-center justify-end gap-1">
          <svg className="w-10 h-8 text-emerald-500 scale-x-[-1]" viewBox="0 0 50 40" fill="none">
            <path d="M5 5 C 20 25, 35 25, 45 35" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
            <polygon points="45,35 40,28 35,36" fill="currentColor" />
          </svg>
          Lightning speeds
        </div>
      </div>

      {/* 3. "Scalable" (Mid-Left) */}
      <div className="hidden sm:block absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 transition-transform duration-300 hover:scale-105">
        <div className="bg-white px-3.5 py-2 rounded-md shadow-lg border border-slate-200/90 flex items-center gap-2 text-slate-800">
          <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-xs font-bold">
            <IconLayers className="w-3.5 h-3.5" />
          </span>
          <div>
            <div className="text-xs font-bold text-slate-900">Scalable</div>
            <div className="text-[10px] text-slate-500">Grows with traffic</div>
          </div>
        </div>
        <div className="font-handwriting text-lg text-sky-700 font-bold mt-1 ml-2 -rotate-6">
          Ready for 10M+ users ↗
        </div>
      </div>

      {/* 4. "Secure" (Mid-Right) */}
      <div className="hidden sm:block absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 transition-transform duration-300 hover:scale-105">
        <div className="bg-white px-3.5 py-2 rounded-md shadow-lg border border-slate-200/90 flex items-center gap-2 text-slate-800">
          <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold">
            <IconShieldCheck className="w-3.5 h-3.5" />
          </span>
          <div>
            <div className="text-xs font-bold text-slate-900">Secure</div>
            <div className="text-[10px] text-slate-500">Bank-grade safety</div>
          </div>
        </div>
        <div className="font-handwriting text-lg text-purple-700 font-bold mt-1 mr-2 text-right rotate-3">
          End-to-end encrypted 🔒
        </div>
      </div>

      {/* 5. "Business focused" (Bottom Center / Left) */}
      <div className="hidden sm:block absolute left-8 md:left-14 bottom-10 md:bottom-12 z-30 transition-transform duration-300 hover:scale-105">
        <div className="bg-white px-3.5 py-2 rounded-md shadow-lg border border-slate-200/90 flex items-center gap-2 text-slate-800">
          <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center text-xs font-bold">
            <IconTrendingUp className="w-3.5 h-3.5" />
          </span>
          <div>
            <div className="text-xs font-bold text-slate-900">Business focused</div>
            <div className="text-[10px] text-cyan-600 font-semibold">High ROI & Revenue</div>
          </div>
        </div>
        <div className="font-handwriting text-xl text-cyan-700 font-bold mt-1 ml-4 -rotate-3">
          Built for real profit! 💰
        </div>
      </div>

      {/* Mobile Badge Pills for small screens (< 640px) */}
      <div className="sm:hidden flex flex-wrap justify-center gap-2 mt-6">
        <span className="px-3 py-1 bg-white rounded-sm text-xs font-semibold shadow-sm border border-slate-200 text-slate-800 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-sm bg-amber-500" /> Simple to use
        </span>
        <span className="px-3 py-1 bg-white rounded-sm text-xs font-semibold shadow-sm border border-slate-200 text-slate-800 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-sm bg-emerald-500" /> Fast
        </span>
        <span className="px-3 py-1 bg-white rounded-sm text-xs font-semibold shadow-sm border border-slate-200 text-slate-800 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-sm bg-sky-500" /> Scalable
        </span>
        <span className="px-3 py-1 bg-white rounded-sm text-xs font-semibold shadow-sm border border-slate-200 text-slate-800 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-sm bg-purple-500" /> Secure
        </span>
        <span className="px-3 py-1 bg-white rounded-sm text-xs font-semibold shadow-sm border border-slate-200 text-slate-800 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-sm bg-cyan-500" /> Business focused
        </span>
      </div>
    </div>
  );
}
