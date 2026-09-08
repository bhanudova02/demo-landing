import React, { useState, useEffect } from 'react';
import { IconPlay, IconClose } from './Icons';

export default function HeroVideoDialog({
  videoSrc = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
  thumbnailSrc = "/images/hero_video_thumb.jpg",
  thumbnailAlt = "nxtwebworks Interactive Product Showreel",
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className={`relative ${className}`}>
      {/* Thumbnail Container with Magic UI Border Glow (rounded-lg) */}
      <div
        onClick={() => setIsOpen(true)}
        className="group relative cursor-pointer rounded-lg overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-900 transition-all duration-300 hover:shadow-sky-500/10 hover:border-sky-400"
      >
        {/* Aspect Ratio 16:9 Video Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-950 flex items-center justify-center">
          <img
            src={thumbnailSrc}
            alt={thumbnailAlt}
            className="w-full h-full object-cover"
            loading="eager"
          />

          {/* Dark gradient overlay on hover */}
          <div className="absolute inset-0 bg-slate-950/25 group-hover:bg-slate-950/40 transition-colors duration-300" />

          {/* Centered Pulsating Magic UI Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              {/* Outer Pulsing Ping Ring */}
              <span className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-sky-500/40 animate-ping" />
              
              {/* Secondary Soft Glow Ring */}
              <span className="absolute w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-sky-400/20" />

              {/* Main Play Button Disc */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-2xl shadow-black/40 flex items-center justify-center text-sky-600 transform transition-transform duration-300 group-hover:scale-110">
                <IconPlay className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5 fill-sky-600" />
              </div>
            </div>
          </div>

          {/* Bottom Video Badge Indicator */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <div className="px-2.5 py-1 rounded-sm bg-slate-900/85 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold flex items-center gap-1.5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>Watch Interactive Showreel (60s)</span>
            </div>
            <span className="hidden sm:inline-block px-2 py-1 rounded-sm bg-black/70 backdrop-blur-md text-slate-300 text-[10px] font-mono border border-white/10">
              4K 60FPS
            </span>
          </div>
        </div>
      </div>

      {/* Video Modal Dialog Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop with frosted blur */}
          <div
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content Box (from-center scale animation) */}
          <div className="relative z-10 w-full max-w-4xl bg-slate-950 rounded-lg overflow-hidden border border-slate-800 shadow-2xl shadow-black animate-in zoom-in-95 duration-200">
            {/* Modal Top Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 text-xs text-slate-300">
              <div className="flex items-center gap-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>nxtwebworks • Product Engineering Showreel</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-sm text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <IconClose className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Frame */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={videoSrc}
                title="nxtwebworks product showcase"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
