import React from 'react';

const Achievements = () => {
  return (
    <section className="py-24 bg-[#f8f9fa] relative border-y border-dashed border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Achievement
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-[15px]">
            Curious about what we've accomplished? Let our track record speak for itself.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-[32px] p-4 pb-8 shadow-sm border border-gray-100 flex flex-col">
            {/* Visual */}
            <div className="bg-[#fcf5ef] rounded-3xl h-64 mb-6 relative overflow-hidden flex flex-col items-center pt-8 px-6 text-center border border-gray-50">
               <div className="bg-white absolute w-[80%] h-full top-6 rounded-t-2xl shadow-sm border border-gray-100 flex flex-col items-center pt-8 z-10">
                 <h3 className="text-[#2b3a55] font-bold text-[18px] leading-[1.2] mb-3 w-[90%] mx-auto">
                   English made fun<br/>and personal with AI
                 </h3>
                 <p className="text-[7px] text-[#6b7280] mb-3">with AI-powered books and a talking chatbot</p>
                 <button className="bg-[#6b4c9a] text-white text-[9px] px-4 py-2 rounded-md font-medium shadow-sm">
                   Start Learning Now
                 </button>
                 
                 {/* Illustration mockup at bottom */}
                 <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#2a1a4a] via-[#4d337f] to-transparent">
                   <div className="absolute bottom-2 left-4 w-6 h-10 bg-[#8b79b8] rounded-full blur-[2px]"></div>
                   <div className="absolute bottom-1 right-6 w-8 h-12 bg-[#8b79b8] rounded-full blur-[2px]"></div>
                   <div className="absolute bottom-0 right-1/4 w-12 h-12 bg-[#ffb997] rounded-full blur-md opacity-80"></div>
                 </div>
               </div>
            </div>
            {/* Content */}
            <div className="px-4">
              <h3 className="text-[19px] font-bold text-gray-900 mb-2">30+ Brands Served</h3>
              <p className="text-gray-600 text-[14.5px] leading-relaxed">
                Helping businesses across various industries achieve their goals
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[32px] p-4 pb-8 shadow-sm border border-gray-100 flex flex-col">
            {/* Visual */}
            <div className="bg-[#fdfdfd] border border-gray-50 rounded-3xl h-64 mb-6 relative flex items-center justify-center overflow-hidden">
               {/* Big 8 */}
               <div className="text-[300px] font-black text-gray-200/60 leading-none absolute select-none tracking-tighter">
                 8
               </div>
               
               {/* Tags */}
               <div className="absolute top-10 left-10 bg-white px-3.5 py-1.5 rounded-full shadow-sm text-[10px] font-medium text-gray-600 border border-gray-100 z-10">
                 AI Applications
               </div>
               <div className="absolute top-6 right-8 bg-white px-3.5 py-1.5 rounded-full shadow-sm text-[10px] font-medium text-gray-600 border border-gray-100 z-10">
                 Cloud & DevOps
               </div>
               <div className="absolute top-24 left-6 bg-white px-3.5 py-1.5 rounded-full shadow-sm text-[10px] font-medium text-gray-600 border border-gray-100 z-10">
                 Logo Designing
               </div>
               <div className="absolute top-32 right-6 bg-white px-3.5 py-1.5 rounded-full shadow-sm text-[10px] font-medium text-gray-600 border border-gray-100 z-10">
                 Web Development
               </div>
               <div className="absolute bottom-24 left-2 bg-white px-3.5 py-1.5 rounded-full shadow-sm text-[10px] font-medium text-gray-600 border border-gray-100 z-10">
                 Data Products
               </div>
               <div className="absolute bottom-20 right-10 bg-white px-3.5 py-1.5 rounded-full shadow-sm text-[10px] font-medium text-gray-600 border border-gray-100 z-10">
                 App Development
               </div>
               <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-3.5 py-1.5 rounded-full shadow-sm text-[10px] font-medium text-gray-600 border border-gray-100 whitespace-nowrap z-10">
                 API & System Integrations
               </div>
            </div>
            {/* Content */}
            <div className="px-4">
              <h3 className="text-[19px] font-bold text-gray-900 mb-2">8 Years of Experience</h3>
              <p className="text-gray-600 text-[14.5px] leading-relaxed">
                Bringing seasoned expertise to every project
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[32px] p-4 pb-8 shadow-sm border border-gray-100 flex flex-col">
            {/* Visual */}
            <div className="bg-[#fafbfb] border border-gray-50 rounded-3xl h-64 mb-6 relative overflow-hidden flex flex-col pt-6 px-6">
                <div className="flex justify-between items-center z-10 mb-8">
                  <span className="text-[22px] font-medium text-gray-900">Scaling</span>
                </div>
                {/* Dashed line */}
                <div className="absolute top-[88px] left-0 right-0 border-b-2 border-dashed border-[#5cb85c] z-10"></div>
                <div className="absolute top-[68px] right-6 z-10">
                  <span className="text-[12px] font-medium text-[#5cb85c]">Growth Highlight</span>
                </div>
                
                {/* Chart SVG */}
                <div className="absolute bottom-0 left-0 right-0 h-44">
                  <svg viewBox="0 0 400 150" className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#5cb85c" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#5cb85c" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M-10,120 C30,100 60,130 90,90 C120,50 160,80 200,60 C240,40 260,80 290,50 C320,20 360,10 410,30 L410,160 L-10,160 Z"
                      fill="url(#greenGradient)"
                    />
                    <path
                      d="M-10,120 C30,100 60,130 90,90 C120,50 160,80 200,60 C240,40 260,80 290,50 C320,20 360,10 410,30"
                      fill="none"
                      stroke="#5cb85c"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
            </div>
            {/* Content */}
            <div className="px-4">
              <h3 className="text-[19px] font-bold text-gray-900 mb-2">Empowering Brands to Scale</h3>
              <p className="text-gray-600 text-[14.5px] leading-relaxed">
                We help brands redirect resources to fuel innovation and expansion
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
