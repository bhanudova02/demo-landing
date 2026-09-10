import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 min-h-screen flex flex-col items-center justify-center overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute inset-0 z-[-1] bg-[#fafafa]"
        style={{
          backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Top Badge */}
      <div className="bg-white rounded-full px-4 py-2 flex items-center gap-3 shadow-sm border border-gray-100 mb-10 transition-all hover:shadow-md cursor-pointer">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-sm font-medium text-gray-700">WEBSITES · APPS · AUTOMATION</span>
        <ArrowRight className="w-4 h-4 text-gray-400" />
      </div>

      {/* Main Heading */}
      <div className="text-center max-w-4xl relative z-10 w-full">
        <h1 className="text-4xl md:text-5xl lg:text-[58px] font-semibold tracking-tight text-gray-900 leading-[1.1] mb-6">
          Build a digital business
          <br />
          that works for
          you.
        </h1>

        <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
          We design and build high-performance websites, custom applications and smart automation systems that help businesses generate more leads, reduce manual work and grow faster.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mx-auto">
          <button className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all shadow-[0_8px_30px_rgba(59,130,246,0.4)] hover:scale-105 hover:shadow-[0_8px_30px_rgba(59,130,246,0.6)] border">
            Start a Project <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-[#1a1a1a] hover:bg-black text-white px-2 py-2 pr-5 rounded-full text-sm font-medium flex items-center gap-2.5 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-105">
            <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
              <Calendar className="w-3.5 h-3.5 text-white" />
            </span>
            Book a 30-Min Call
          </button>
        </div>
        <p className="text-[13px] text-gray-500 font-medium mt-6">
          No-obligation consultation · Fast response
        </p>
      </div>




    </section>
  );
};

export default Hero;
