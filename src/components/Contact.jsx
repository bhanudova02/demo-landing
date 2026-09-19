import React, { useState, useRef } from 'react';
import { Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('sending');
    setErrorMessage('');

    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message') || '',
    };

    try {
      const res = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus('success');
        setShowModal(true);
        form.current.reset();
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage('Network error. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
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
              Ready to build your <br className="hidden lg:block"/> digital system?
              </h2>
              <p className="text-gray-400 text-[15px] mb-10 leading-relaxed">
                Whether you have a clear vision or just an idea, we're here to help you build the right system. Share a few details and we'll get back to you within 24 hours.
              </p>
              
              <div className="flex flex-col space-y-6">
                <div className="flex items-center text-gray-300">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-4 border border-white/5">
                    <Mail size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Drop us a line</p>
                     <p className="text-[15px] font-medium text-gray-200">hello@zenvyra.com</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-4 border border-white/5">
                    <MapPin size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Visit our office</p>
                     <p className="text-[15px] font-medium text-gray-200">Available Globally · Remote-first</p>
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
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                {status === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-xl text-sm">
                    {errorMessage}
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="Your Name" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-[15px] text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="Phone Number" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-[15px] text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="Email Address" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-[15px] text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <textarea 
                    name="message"
                    required
                    placeholder="Tell us about your project..." 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-[15px] text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-[15px] font-medium rounded-xl px-5 py-4 flex items-center justify-center transition-all group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
                  {status !== 'sending' && <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>

      {/* Thank You Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1b23] border border-white/10 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl relative">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-5 text-blue-400">
              <CheckCircle size={32} />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
            <p className="text-gray-400 text-[15px] mb-8 leading-relaxed">
              Your message has been sent successfully. Our team will get back to you within 24 hours.
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-xl transition-colors text-[15px] font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
