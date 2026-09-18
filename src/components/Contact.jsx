import React from 'react';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div
          data-aos="fade-up"
          className="bg-[#0f1014] rounded-[40px] p-8 md:p-14 lg:p-16 overflow-hidden relative shadow-xl"
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Content */}
            <div className="lg:col-span-2" data-aos="fade-right" data-aos-delay="150">
              <h2 className="text-3xl md:text-[40px] font-bold text-white mb-6 leading-tight">
                Ready to transform <br className="hidden lg:block"/> your digital presence?
              </h2>
              <p className="text-gray-400 text-[15px] mb-10 leading-relaxed">
                Whether you have a clear vision or just a spark of an idea, we're here to help you build something extraordinary. Let's start the conversation today.
              </p>
              
              <div className="flex flex-col space-y-6">
                <div className="flex items-center text-gray-300">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-4 border border-white/5">
                    <Mail size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Drop us a line</p>
                    <p className="text-[15px] font-medium text-gray-200">hello@codedale.com</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-4 border border-white/5">
                    <MapPin size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Visit our office</p>
                    <p className="text-[15px] font-medium text-gray-200">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div
              className="lg:col-span-3 bg-white/[0.03] backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[32px]"
              data-aos="fade-left"
              data-aos-delay="250"
            >
              <h3 className="text-xl font-semibold text-white mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-[15px] text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-[15px] text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <textarea 
                    placeholder="Tell us about your project..." 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-[15px] text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-[15px] font-medium rounded-xl px-5 py-4 flex items-center justify-center transition-all group">
                  Submit Inquiry
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
