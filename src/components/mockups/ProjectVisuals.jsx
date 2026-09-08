import React from 'react';

export function EcommerceVisual() {
  return (
    <div className="w-full h-52 sm:h-60 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 p-3 sm:p-4 rounded-xl text-white flex flex-col justify-between overflow-hidden relative group">
      {/* Background glow */}
      <div className="absolute -right-8 -top-8 w-36 h-36 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />

      {/* Mini top bar */}
      <div className="flex items-center justify-between border-b border-slate-700/60 pb-2 text-[10px] text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-500" />
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="font-mono text-slate-300 ml-1">aurora-store.com</span>
        </div>
        <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-medium">Stripe Ready</span>
      </div>

      {/* Product Display UI */}
      <div className="grid grid-cols-2 gap-3 items-center py-2">
        <div className="space-y-1.5">
          <span className="text-[9px] uppercase tracking-wider text-cyan-400 font-bold">Best Seller</span>
          <h5 className="text-xs sm:text-sm font-bold text-white leading-tight">Apex Series Smart Chrono</h5>
          <p className="text-[10px] text-slate-400">Titanium frame, sapphire glass, 14-day battery.</p>
          <div className="flex items-center gap-2 pt-1">
            <span className="text-sm font-extrabold text-white">$349.00</span>
            <span className="px-2 py-0.5 text-[9px] font-bold rounded bg-cyan-400 text-slate-950">Add to Bag</span>
          </div>
        </div>
        {/* Visual Badge Graphic */}
        <div className="flex justify-center">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg bg-gradient-to-tr from-sky-600/30 to-cyan-400/20 border border-sky-400/40 flex flex-col items-center justify-center p-2 shadow-lg relative">
            <span className="text-3xl">⌚</span>
            <span className="text-[9px] text-cyan-200 mt-1 font-semibold">4.9 ★ (1,240)</span>
          </div>
        </div>
      </div>

      {/* Cart & Checkout Toast */}
      <div className="bg-slate-900/90 border border-slate-700 p-2 rounded-lg flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-slate-300">Apple Pay & 1-Click Checkout Enabled</span>
        </div>
        <span className="text-cyan-400 font-bold">Verified</span>
      </div>
    </div>
  );
}

export function DashboardVisual() {
  return (
    <div className="w-full h-52 sm:h-60 bg-slate-950 p-3 sm:p-4 rounded-xl text-white flex flex-col justify-between overflow-hidden relative">
      <div className="absolute -left-8 -bottom-8 w-36 h-36 bg-sky-500/20 rounded-full blur-2xl pointer-events-none" />

      {/* Browser Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[10px] text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-500" />
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="font-mono text-slate-300 ml-1">pulse.enterprise.app</span>
        </div>
        <span className="text-sky-400 font-medium">Realtime WebSockets</span>
      </div>

      {/* Dashboard KPI + Graph */}
      <div className="py-2">
        <div className="flex justify-between items-end mb-2">
          <div>
            <span className="text-[9px] text-slate-400">ARR Projected</span>
            <div className="text-base sm:text-lg font-black text-white">$2,840,000</div>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-emerald-400 font-bold">▲ +42.8%</span>
            <div className="text-[9px] text-slate-500">vs last quarter</div>
          </div>
        </div>

        {/* Bar chart representation */}
        <div className="h-16 flex items-end gap-1.5 bg-slate-900/60 p-2 rounded-lg border border-slate-800/80">
          {[25, 40, 35, 60, 55, 80, 75, 95, 85, 110, 130, 150].map((v, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end h-full">
              <div 
                className={`w-full rounded-t-sm ${i === 11 ? 'bg-cyan-400' : 'bg-slate-700'}`} 
                style={{ height: `${(v / 150) * 100}%` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex items-center justify-between text-[10px] pt-1 border-t border-slate-800 text-slate-400">
        <span>Active Microservices: 14/14</span>
        <span className="text-emerald-400 font-medium">Avg Latency: 16ms</span>
      </div>
    </div>
  );
}

export function CorporateVisual() {
  return (
    <div className="w-full h-52 sm:h-60 bg-gradient-to-br from-slate-50 to-sky-50/50 p-3 sm:p-4 rounded-xl border border-slate-200/80 text-slate-800 flex flex-col justify-between overflow-hidden relative">
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-2 text-[10px]">
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 rounded bg-slate-900 text-white font-black flex items-center justify-center text-[8px]">V</div>
          <span className="font-bold text-slate-900 tracking-tight">VANGUARD GLOBAL</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-700 text-[9px] font-semibold">Advisory & Capital</span>
      </div>

      <div className="py-2">
        <span className="text-[9px] uppercase font-bold text-sky-600 tracking-wider">Institutional Grade</span>
        <h5 className="text-sm font-black text-slate-900 mt-0.5 leading-snug">Strategic Consulting & Asset Operations</h5>
        <p className="text-[10px] text-slate-600 mt-1 line-clamp-2">Tailored advisory infrastructure engineered for global compliance and institutional investors.</p>

        <div className="grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-slate-200/80">
          <div className="bg-white p-1.5 rounded-lg border border-slate-200/60 shadow-xs">
            <div className="text-[9px] text-slate-400">AUM Managed</div>
            <div className="text-xs font-bold text-slate-900">$4.8B+</div>
          </div>
          <div className="bg-white p-1.5 rounded-lg border border-slate-200/60 shadow-xs">
            <div className="text-[9px] text-slate-400">Global Offices</div>
            <div className="text-xs font-bold text-slate-900">18 Hubs</div>
          </div>
          <div className="bg-white p-1.5 rounded-lg border border-slate-200/60 shadow-xs">
            <div className="text-[9px] text-slate-400">Audit Score</div>
            <div className="text-xs font-bold text-emerald-600">100%</div>
          </div>
        </div>
      </div>

      <div className="text-[10px] text-slate-500 flex items-center justify-between">
        <span>Headless CMS + SSR React</span>
        <span className="text-sky-600 font-semibold">Live Site →</span>
      </div>
    </div>
  );
}

export function MobileAppVisual() {
  return (
    <div className="w-full h-52 sm:h-60 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-3 sm:p-4 rounded-xl text-white flex flex-col justify-between overflow-hidden relative">
      <div className="absolute right-0 bottom-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[10px]">
        <span className="font-bold text-cyan-400">Zenith Mobile 4.2</span>
        <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[9px]">iOS & Android</span>
      </div>

      <div className="grid grid-cols-2 gap-3 items-center py-2">
        <div className="space-y-1.5">
          <span className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">User Experience</span>
          <h5 className="text-xs sm:text-sm font-bold text-white">Smart Biometric Banking</h5>
          <p className="text-[10px] text-slate-300">Offline-first sync, FaceID auth, and sub-second instant payments.</p>
          <div className="flex gap-1 pt-1">
            <span className="px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 text-[9px]">React Native</span>
            <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[9px]">Kotlin / Swift</span>
          </div>
        </div>

        {/* Mini Phone Frame in visual */}
        <div className="flex justify-center">
          <div className="w-24 bg-slate-950 rounded-xl p-2 border border-slate-700 shadow-xl space-y-1.5">
            <div className="w-6 h-1 bg-slate-800 rounded-full mx-auto" />
            <div className="p-1 rounded bg-sky-600 text-[8px] font-bold text-center">
              Balance: $12,450
            </div>
            <div className="h-6 bg-slate-900 rounded p-1 flex items-center justify-between text-[7px] text-slate-400">
              <span>Transfer</span>
              <span className="text-emerald-400">✓ Done</span>
            </div>
            <div className="w-full h-1 bg-slate-800 rounded-full" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800">
        <span>4.9 Star Rating (App Store)</span>
        <span className="text-cyan-400 font-medium">Over 250k Downloads</span>
      </div>
    </div>
  );
}
