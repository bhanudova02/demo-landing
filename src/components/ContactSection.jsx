import React, { useState } from 'react';
import { IconArrowRight, IconCheck, IconHeadphones, IconShieldCheck, IconClock } from './Icons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    service: 'Business Website',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    'Business Website',
    'Ecommerce Store',
    'Admin Panel / Web App',
    'Mobile Application',
    'Custom Solution',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-10 sm:py-16 md:py-24 bg-[#f8fafc] border-b border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-2.5">
            <span>Contact & Estimation</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let's discuss your next project.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            Tell us about your goals, timeline, and requirements. Our engineering leads will review your specs and send a transparent scope and estimate within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          
          {/* Left Column: Direct Info & Guarantees (5 cols, rounded-lg) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="bg-white rounded-lg p-4 sm:p-8 border border-slate-200 shadow-sm space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                  Direct Engineering Inquiries
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Prefer direct communication? Reach our team anytime via email or phone.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-sm bg-sky-50 text-sky-600 flex items-center justify-center shrink-0 border border-sky-100">
                    <IconHeadphones className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Us</div>
                    <a href="mailto:hello@nxtwebworks.com" className="text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors">
                      hello@nxtwebworks.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-sm bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <IconClock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Call Directly</div>
                    <a href="tel:+15552345678" className="text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors">
                      +1 (555) 234-5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-sm bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                    <IconShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Office Locations</div>
                    <div className="text-sm font-bold text-slate-900">
                      San Francisco, CA & Hyderabad, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Badge Box */}
              <div className="pt-5 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <IconCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Strict NDA signed prior to any codebase inspection</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% intellectual property & code ownership transferred</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dedicated Slack / Teams channel for daily standups</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Full Interactive Contact Form (7 cols, rounded-lg) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-lg p-4 sm:p-8 md:p-10 border border-slate-200 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-sm bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Thank you, {formData.fullName}!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    We have received your project inquiry. Our technical lead is reviewing your requirements and will reply to <span className="font-semibold text-slate-900">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        company: '',
                        phone: '',
                        service: 'Business Website',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-sm text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Company or Brand Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Selector Pills (rounded-sm) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-2 uppercase tracking-wider">
                      Service Needed
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {servicesList.map((srv) => (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => setFormData({ ...formData, service: srv })}
                          className={`px-3.5 py-2 rounded-sm text-xs font-semibold cursor-pointer transition-all ${
                            formData.service === srv
                              ? 'bg-sky-600 text-white shadow-xs'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1.5 uppercase tracking-wider">
                      Project Details & Timeline
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Briefly describe what you're building, target launch dates, or current pain points..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Submit Button (Solid color, rounded-sm) */}
                  <div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-sm text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 shadow-md transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                    >
                      <span>Send Project Inquiry</span>
                      <IconArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
