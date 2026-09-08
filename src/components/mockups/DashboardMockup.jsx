import React from 'react';

export default function DashboardMockup() {
  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-lg bg-slate-900/90 p-2 sm:p-4 shadow-2xl shadow-sky-950/20 border border-slate-700/70 backdrop-blur-xl">
      {/* Top Browser Window Controls */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="hidden sm:flex items-center gap-2 ml-4 px-3 py-1 rounded-md bg-slate-800/80 text-slate-300 font-mono text-[11px] border border-slate-700/60">
            <span className="text-sky-400">nxtwebworks.enterprise/command-center</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            System Healthy
          </span>
        </div>
      </div>

      {/* Internal Dashboard View */}
      <div className="bg-slate-950 rounded-xl p-3 sm:p-6 text-white">
        {/* Top Summary Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
          <div className="bg-slate-900/80 p-3 sm:p-4 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-400 font-medium">Total Volume</div>
            <div className="text-lg sm:text-2xl font-bold mt-1 text-white tracking-tight">$842,930</div>
            <div className="text-[11px] text-emerald-400 font-semibold mt-1 flex items-center gap-1">
              <span>↑ 18.2%</span> <span className="text-slate-500 font-normal">vs last month</span>
            </div>
          </div>
          <div className="bg-slate-900/80 p-3 sm:p-4 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-400 font-medium">Active Customers</div>
            <div className="text-lg sm:text-2xl font-bold mt-1 text-white tracking-tight">46,210</div>
            <div className="text-[11px] text-emerald-400 font-semibold mt-1 flex items-center gap-1">
              <span>↑ 12.8%</span> <span className="text-slate-500 font-normal">new signups</span>
            </div>
          </div>
          <div className="bg-slate-900/80 p-3 sm:p-4 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-400 font-medium">API Performance</div>
            <div className="text-lg sm:text-2xl font-bold mt-1 text-cyan-400 tracking-tight">24ms</div>
            <div className="text-[11px] text-slate-400 font-medium mt-1">Global 99th percentile</div>
          </div>
          <div className="bg-slate-900/80 p-3 sm:p-4 rounded-xl border border-slate-800">
            <div className="text-xs text-slate-400 font-medium">Conversion Rate</div>
            <div className="text-lg sm:text-2xl font-bold mt-1 text-white tracking-tight">4.82%</div>
            <div className="text-[11px] text-emerald-400 font-semibold mt-1">Industry leading</div>
          </div>
        </div>

        {/* Middle Visual: Chart + Live Pipeline Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Chart column */}
          <div className="lg:col-span-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-sm font-semibold text-white">Digital Platform Traffic & Transactions</h4>
                <p className="text-xs text-slate-400">Synchronized cross-channel analytics</p>
              </div>
              <div className="flex gap-1 text-xs">
                <button className="px-2.5 py-1 rounded bg-slate-800 text-sky-400 font-medium border border-slate-700">Web</button>
                <button className="px-2.5 py-1 rounded bg-slate-900 text-slate-400 hover:text-white">Mobile</button>
                <button className="px-2.5 py-1 rounded bg-slate-900 text-slate-400 hover:text-white">POS</button>
              </div>
            </div>

            {/* Simulated interactive wave chart */}
            <div className="h-44 w-full flex items-end justify-between gap-1.5 pt-4">
              {[40, 55, 48, 65, 58, 72, 85, 68, 92, 105, 96, 115, 130, 122, 145].map((val, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                  <div 
                    className={`w-full rounded-t-sm transition-all duration-300 group-hover:brightness-125 ${
                      idx >= 12 
                        ? 'bg-gradient-to-t from-sky-600 to-cyan-400 shadow-sm shadow-cyan-400/40' 
                        : 'bg-slate-800 hover:bg-slate-700'
                    }`}
                    style={{ height: `${(val / 150) * 100}%` }}
                  />
                  <span className="text-[9px] text-slate-500 hidden sm:inline">{idx + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side live events */}
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Live Pipeline</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <div className="space-y-2.5 text-xs">
                <div className="p-2 rounded bg-slate-950/70 border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div className="font-medium text-slate-200">Shopify Sync Complete</div>
                    <div className="text-[10px] text-slate-400">1,420 orders updated</div>
                  </div>
                  <span className="text-emerald-400 text-[10px] font-bold">Just now</span>
                </div>
                <div className="p-2 rounded bg-slate-950/70 border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div className="font-medium text-slate-200">iOS App 3.4 Deployed</div>
                    <div className="text-[10px] text-slate-400">App Store & TestFlight</div>
                  </div>
                  <span className="text-sky-400 text-[10px] font-bold">2m ago</span>
                </div>
                <div className="p-2 rounded bg-slate-950/70 border border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div className="font-medium text-slate-200">Database Optimized</div>
                    <div className="text-[10px] text-slate-400">PostgreSQL replica ready</div>
                  </div>
                  <span className="text-slate-400 text-[10px]">12m ago</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Security encryption</span>
              <span className="text-emerald-400 font-semibold">AES-256 Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
