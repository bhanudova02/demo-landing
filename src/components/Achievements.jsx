import React from 'react';

const Achievements = () => {
  return (
    <section className="py-24 bg-[#f8f9fa] relative border-y border-dashed border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What you can build.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-[15px]">
            A few examples of how a website, application and automation come together as one connected system.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 — Lead Generation System */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="bg-white rounded-[32px] p-4 pb-8 shadow-sm border border-gray-100 flex flex-col"
          >
            {/* Visual */}
            <div className="bg-[#eff6ff] rounded-3xl h-64 mb-6 relative overflow-hidden flex flex-col items-center pt-8 px-6 text-center border border-blue-50">
               <div className="bg-white absolute w-[80%] h-full top-6 rounded-t-2xl shadow-sm border border-gray-100 flex flex-col items-center pt-6 z-10">
                 <h3 className="text-[#1e3a5f] font-bold text-[16px] leading-[1.3] mb-3 w-[90%] mx-auto">
                   Lead Generation<br/>System
                 </h3>
                 <div className="flex flex-wrap gap-1 justify-center px-4">
                   {['Website', 'Lead Form', 'CRM', 'Notification', 'Follow-up'].map((s, i) => (
                     <span key={i} className="text-[9px] bg-blue-50 text-blue-600 font-semibold px-2 py-0.5 rounded-full">{s}</span>
                   ))}
                 </div>
                 <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1e3a8a] via-[#3b82f6] to-transparent">
                   <div className="absolute bottom-2 left-4 w-6 h-10 bg-[#93c5fd] rounded-full blur-[2px]"></div>
                   <div className="absolute bottom-1 right-6 w-8 h-12 bg-[#93c5fd] rounded-full blur-[2px]"></div>
                 </div>
               </div>
            </div>
            {/* Content */}
            <div className="px-4">
              <h3 className="text-[19px] font-bold text-gray-900 mb-2">Lead Generation System</h3>
              <p className="text-gray-600 text-[14.5px] leading-relaxed">
                Website → Lead form → CRM → Automated notification → Follow-up sequence. Never miss a lead again.
              </p>
            </div>
          </div>

          {/* Card 2 — Service Business Automation */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-white rounded-[32px] p-4 pb-8 shadow-sm border border-gray-100 flex flex-col"
          >
            {/* Visual */}
            <div className="bg-[#fdfdfd] border border-gray-50 rounded-3xl h-64 mb-6 relative flex items-center justify-center overflow-hidden">
               {/* Big icon */}
               <div className="text-[200px] font-black text-gray-200/60 leading-none absolute select-none tracking-tighter">
                 ⚙
               </div>
               
               {/* Tags */}
               <div className="absolute top-8 left-8 bg-white px-3.5 py-1.5 rounded-full shadow-sm text-[10px] font-medium text-gray-600 border border-gray-100 z-10">
                 Customer enquiry
               </div>
               <div className="absolute top-6 right-6 bg-white px-3.5 py-1.5 rounded-full shadow-sm text-[10px] font-medium text-gray-600 border border-gray-100 z-10">
                 Auto response
               </div>
               <div className="absolute top-24 left-4 bg-white px-3.5 py-1.5 rounded-full shadow-sm text-[10px] font-medium text-gray-600 border border-gray-100 z-10">
                 Booking
               </div>
               <div className="absolute top-28 right-4 bg-white px-3.5 py-1.5 rounded-full shadow-sm text-[10px] font-medium text-gray-600 border border-gray-100 z-10">
                 Reminder
               </div>
               <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white px-3.5 py-1.5 rounded-full shadow-sm text-[10px] font-medium text-gray-600 border border-gray-100 whitespace-nowrap z-10">
                 Follow-up
               </div>
            </div>
            {/* Content */}
            <div className="px-4">
              <h3 className="text-[19px] font-bold text-gray-900 mb-2">Service Business Automation</h3>
              <p className="text-gray-600 text-[14.5px] leading-relaxed">
                Customer enquiry → Automated response → Booking → Reminder → Follow-up. Fully hands-free.
              </p>
            </div>
          </div>

          {/* Card 3 — AI Automation */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-white rounded-[32px] p-4 pb-8 shadow-sm border border-gray-100 flex flex-col"
          >
            {/* Visual */}
            <div className="bg-[#fafbfb] border border-gray-50 rounded-3xl h-64 mb-6 relative overflow-hidden flex flex-col pt-6 px-6">
                <div className="flex justify-between items-center z-10 mb-8">
                  <span className="text-[22px] font-medium text-gray-900">AI Automation</span>
                </div>
                {/* Dashed line */}
                <div className="absolute top-[88px] left-0 right-0 border-b-2 border-dashed border-[#5cb85c] z-10"></div>
                <div className="absolute top-[68px] right-6 z-10">
                  <span className="text-[12px] font-medium text-[#5cb85c]">AI-Powered</span>
                </div>
                
                {/* Chart SVG */}
                <div className="absolute bottom-0 left-0 right-0 h-44">
                  <svg viewBox="0 0 400 150" className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="greenGradient2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#5cb85c" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#5cb85c" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M-10,120 C30,100 60,130 90,90 C120,50 160,80 200,60 C240,40 260,80 290,50 C320,20 360,10 410,30 L410,160 L-10,160 Z"
                      fill="url(#greenGradient2)"
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
              <h3 className="text-[19px] font-bold text-gray-900 mb-2">AI Automation</h3>
              <p className="text-gray-600 text-[14.5px] leading-relaxed">
                Customer enquiry → AI processing → Classification → CRM → Human follow-up. Smart, scalable automation.
              </p>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="400">
          <p className="text-gray-600 text-[15px] mb-4 font-medium">Have an idea? Let's turn it into a system.</p>
          <a
            href="#contact"
            className="inline-block bg-[#111] hover:bg-black text-white text-[15px] font-medium px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            Tell Us About Your Project →
          </a>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
