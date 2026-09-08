import React from 'react';

export default function MultiDeviceMockup() {
  return (
    <div className="relative w-full max-w-5xl mx-auto mt-10 md:mt-14 px-4 select-none">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[350px] bg-gradient-to-tr from-sky-400/20 via-blue-500/15 to-cyan-300/20 blur-3xl -z-10 rounded-full pointer-events-none" />

      {/* Main Multi-device Layout Container */}
      <div className="relative w-full min-h-[380px] sm:min-h-[460px] md:min-h-[540px] flex items-center justify-center">

        {/* 1. DESKTOP / ADMIN MONITOR (Back Left) */}
        <div className="absolute left-2 sm:left-6 md:left-10 top-0 sm:top-2 w-[55%] sm:w-[50%] md:w-[48%] transition-transform duration-500 hover:-translate-y-1 z-10">
          <div className="rounded-xl bg-slate-900/90 p-1.5 sm:p-2.5 shadow-2xl shadow-slate-950/20 border border-slate-700/60 backdrop-blur-md">
            {/* Monitor Header */}
            <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-800 text-[10px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                <span className="ml-2 hidden sm:inline-block text-[11px] font-mono text-slate-400">app.nxtwebworks-admin.io</span>
              </div>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-emerald-500/20 text-emerald-400 font-medium">Live Demo</span>
            </div>

            {/* Dashboard Mock Screen */}
            <div className="bg-slate-950 rounded-lg p-2 sm:p-3 text-white overflow-hidden">
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <div>
                  <div className="text-[11px] sm:text-xs text-slate-400 font-medium">Monthly Recurring Revenue</div>
                  <div className="text-sm sm:text-lg font-bold text-white tracking-tight">$142,850 <span className="text-[10px] sm:text-xs text-emerald-400 font-semibold">+28.4%</span></div>
                </div>
                <div className="hidden sm:flex gap-1">
                  <span className="px-2 py-0.5 rounded text-[10px] bg-sky-500/20 text-sky-400 border border-sky-500/30">Analytics</span>
                </div>
              </div>

              {/* Mini Chart Graphic */}
              <div className="h-14 sm:h-20 w-full flex items-end gap-1 sm:gap-1.5 pt-2 border-b border-slate-800/80 pb-2">
                {[35, 52, 45, 68, 80, 62, 94, 78, 110, 95, 125, 140].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div 
                      className={`w-full rounded-t transition-all ${i === 11 ? 'bg-gradient-to-t from-sky-500 to-cyan-300 shadow-sm shadow-cyan-400/50' : 'bg-slate-800 hover:bg-slate-700'}`} 
                      style={{ height: `${(h / 140) * 100}%` }}
                    />
                  </div>
                ))}
              </div>

              {/* Bottom Mini Metrics */}
              <div className="grid grid-cols-2 gap-1.5 mt-2 pt-1">
                <div className="bg-slate-900/80 p-1 sm:p-1.5 rounded border border-slate-800">
                  <div className="text-[9px] text-slate-400">Active Sessions</div>
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-200">18,420</div>
                </div>
                <div className="bg-slate-900/80 p-1 sm:p-1.5 rounded border border-slate-800">
                  <div className="text-[9px] text-slate-400">Avg. Order Value</div>
                  <div className="text-[11px] sm:text-xs font-semibold text-cyan-400">$284.50</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. TABLET / CORPORATE PLATFORM (Back Right) */}
        <div className="absolute right-2 sm:right-6 md:right-8 top-4 sm:top-6 w-[46%] sm:w-[42%] md:w-[38%] transition-transform duration-500 hover:-translate-y-1 z-10">
          <div className="rounded-lg bg-slate-800 p-2 sm:p-3 shadow-xl border border-slate-700">
            <div className="bg-white rounded-xl p-2 sm:p-3 overflow-hidden text-slate-800">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded bg-sky-600 flex items-center justify-center text-[10px] text-white font-bold">V</div>
                  <span className="text-[11px] font-bold text-slate-900">Vanguard Corp</span>
                </div>
                <div className="flex gap-1 text-[9px] text-slate-500">
                  <span className="hidden sm:inline">Solutions</span>
                  <span className="font-semibold text-sky-600">Client Portal</span>
                </div>
              </div>

              <div className="py-2.5">
                <span className="text-[9px] font-semibold text-sky-600 tracking-wider uppercase">Global Advisory</span>
                <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight mt-0.5">Enterprise Scale Architecture</div>
                <p className="text-[10px] text-slate-500 mt-1 line-clamp-2">Empowering Fortune 500 operations with responsive digital platforms.</p>
              </div>

              <div className="grid grid-cols-2 gap-1.5 bg-slate-50 p-2 rounded-lg border border-slate-100">
                <div>
                  <div className="text-[9px] text-slate-400">Global Reach</div>
                  <div className="text-[11px] sm:text-xs font-bold text-slate-800">42 Countries</div>
                </div>
                <div>
                  <div className="text-[9px] text-slate-400">System Uptime</div>
                  <div className="text-[11px] sm:text-xs font-bold text-emerald-600">99.99%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. LAPTOP / ECOMMERCE STORE (Center Front Main Hero) */}
        <div className="relative w-[78%] sm:w-[70%] md:w-[62%] top-8 sm:top-10 z-20 transition-transform duration-500 hover:-translate-y-1">
          {/* Laptop Screen Bezel */}
          <div className="rounded-t-2xl bg-slate-900 p-2 sm:p-3 shadow-2xl shadow-slate-900/30 border-t border-x border-slate-700">
            {/* Browser top bar */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="bg-slate-800/90 text-slate-300 text-[10px] sm:text-[11px] font-mono px-3 py-1 rounded-full border border-slate-700/80 flex items-center gap-1.5">
                <span className="text-emerald-400">🔒</span>
                <span>https://store.nxtwebworks.com</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-slate-400">
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 font-medium">Ecommerce 2.0</span>
              </div>
            </div>

            {/* Laptop Screen Content: Modern Ecommerce Store */}
            <div className="bg-white rounded-lg p-2.5 sm:p-4 text-slate-800">
              {/* Store Navbar */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-sky-600 to-cyan-500 flex items-center justify-center text-white text-[10px] font-black">N</div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight">LUMINA STUDIO</span>
                </div>
                <div className="hidden sm:flex items-center gap-3 text-[11px] text-slate-600">
                  <span className="font-semibold text-sky-600">New Arrivals</span>
                  <span>Audio</span>
                  <span>Gear</span>
                  <span>Sale</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 text-[10px] font-semibold bg-slate-900 text-white rounded-full flex items-center gap-1">
                    🛒 Cart <span className="w-3.5 h-3.5 rounded-full bg-sky-500 text-[9px] flex items-center justify-center font-bold">2</span>
                  </span>
                </div>
              </div>

              {/* Store Hero Banner */}
              <div className="mt-2.5 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-slate-900 via-slate-800 to-sky-950 text-white flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-cyan-400 font-semibold">Special Edition</span>
                  <div className="text-sm sm:text-base font-extrabold tracking-tight mt-0.5">Acoustic Pro Wireless</div>
                  <div className="text-[11px] sm:text-xs text-slate-300 mt-0.5">Spatial audio with ultra-low latency.</div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold text-white">$249.00</span>
                    <button className="px-2.5 py-1 rounded-sm bg-sky-600 text-white text-[10px] font-bold shadow-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
                {/* Visual Product Art */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-sky-500/30 via-cyan-400/20 to-transparent border border-cyan-400/40 flex items-center justify-center text-xl sm:text-2xl shadow-inner">
                  🎧
                </div>
              </div>

              {/* Mini Product Cards Row */}
              <div className="grid grid-cols-3 gap-2 mt-2.5">
                {[
                  { name: "MagSafe Dock", price: "$69.00", tag: "Popular", emoji: "⚡" },
                  { name: "Precision Stylus", price: "$119.00", tag: "In Stock", emoji: "🖊️" },
                  { name: "Matte Sleeve", price: "$49.00", tag: "New", emoji: "💼" },
                ].map((item, idx) => (
                  <div key={idx} className="p-1.5 sm:p-2 rounded-lg bg-slate-50 border border-slate-100 hover:border-sky-300 transition-colors">
                    <div className="flex items-center justify-between text-[8px] text-slate-500">
                      <span>{item.tag}</span>
                      <span>{item.emoji}</span>
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-slate-800 mt-1 truncate">{item.name}</div>
                    <div className="text-[10px] font-semibold text-sky-600">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Laptop Base Stand */}
          <div className="h-3 sm:h-4 bg-gradient-to-b from-slate-700 via-slate-600 to-slate-800 rounded-b-xl relative shadow-lg">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 sm:w-20 h-1 bg-slate-500/70 rounded-b" />
          </div>
        </div>

        {/* 4. SMARTPHONE / MOBILE APP (Front Right Floating) */}
        <div className="absolute right-1 sm:right-4 md:right-8 bottom-0 sm:bottom-2 w-[28%] sm:w-[24%] md:w-[20%] max-w-[170px] z-30 transition-transform duration-500 hover:-translate-y-1">
          <div className="rounded-[2rem] bg-slate-950 p-1.5 sm:p-2 shadow-2xl shadow-slate-900/40 border-2 border-slate-700 ring-1 ring-white/10">
            {/* Notch / Dynamic Island */}
            <div className="w-10 sm:w-12 h-2.5 sm:h-3 bg-slate-900 rounded-full mx-auto mb-1 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
            </div>

            {/* Mobile Screen Content */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-[1.5rem] p-2 text-white overflow-hidden">
              <div className="flex items-center justify-between text-[8px] text-slate-400 mb-1.5 px-0.5">
                <span>9:41</span>
                <span className="text-emerald-400 font-bold">5G • 100%</span>
              </div>

              <div className="bg-gradient-to-r from-sky-500 to-blue-600 rounded-xl p-2 text-white shadow-md shadow-sky-500/30">
                <div className="text-[8px] text-sky-100 font-medium">NxtWeb Flow App</div>
                <div className="text-xs sm:text-sm font-black mt-0.5">$8,940.20</div>
                <div className="text-[8px] text-sky-200 mt-1 flex items-center gap-1">
                  <span>● Instant Transfer</span>
                </div>
              </div>

              <div className="mt-2 space-y-1.5">
                <div className="flex items-center justify-between p-1 rounded bg-slate-800/80 text-[8px]">
                  <span className="text-slate-300 truncate">Stripe Payout</span>
                  <span className="text-emerald-400 font-bold">+$1,250</span>
                </div>
                <div className="flex items-center justify-between p-1 rounded bg-slate-800/80 text-[8px]">
                  <span className="text-slate-300 truncate">AWS Cloud</span>
                  <span className="text-rose-400 font-bold">-$84.20</span>
                </div>
              </div>

              {/* Bottom Nav Mock */}
              <div className="mt-2 pt-1.5 border-t border-slate-800 flex justify-around text-[9px]">
                <span className="text-cyan-400">●</span>
                <span className="text-slate-600">■</span>
                <span className="text-slate-600">▲</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
