import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "How much does a website or app cost?",
    answer: "Every project is different. Pricing depends on scope, complexity and the features you need. We provide a clear estimate after understanding your requirements — no surprises, no hidden fees."
  },
  {
    question: "Can you automate our existing business process?",
    answer: "Yes. We analyse your current workflow, identify what can be automated and build the right solution — whether that's connecting your tools, automating follow-ups or building a custom system."
  },
  {
    question: "Do I need to know exactly what I want?",
    answer: "Not at all. Many of our clients come to us with a problem, not a solution. We help you figure out what you actually need before any development begins."
  },
  {
    question: "How long does a project usually take?",
    answer: "A standard business website typically takes 2–4 weeks. Web apps and automation projects vary depending on complexity. We'll give you a realistic timeline upfront after the discovery phase."
  },
  {
    question: "Can you integrate our existing tools?",
    answer: "Yes. We work with a wide range of tools including CRMs, payment gateways, messaging platforms, databases and third-party APIs. If it has an API, we can usually connect it."
  },
  {
    question: "Do you provide maintenance and support?",
    answer: "Absolutely. We offer ongoing support and maintenance packages to keep your system running smoothly. We're also available for future improvements as your business grows."
  },
  {
    question: "How do we get started?",
    answer: "Simply fill out the project form on this page. We'll review your details and get back to you within 24 hours to schedule a free consultation call."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#f8f9fa] relative border-y border-dashed border-gray-200 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative">
        
        {/* Decorative Grid Lines */}
        <div className="absolute top-0 bottom-0 left-8 md:left-24 w-px border-l border-dashed border-gray-200 pointer-events-none hidden sm:block"></div>
        <div className="absolute top-0 bottom-0 right-8 md:right-12 w-px border-r border-dashed border-gray-200 pointer-events-none hidden sm:block"></div>

        {/* Header */}
        <div className="text-center mb-16 relative z-10" data-aos="fade-up">
          <h2 className="text-3xl md:text-[34px] font-bold text-gray-900 mb-4 tracking-tight">
            Questions, answered.
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-[15.5px]">
            Everything you need to know before we start working together.
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col space-y-4 items-end relative z-10 pr-0 sm:pr-8 md:pr-16">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                data-aos="fade-left"
                data-aos-delay={index * 80}
                className="flex flex-col items-end w-full max-w-2xl"
              >
                <div 
                  className="flex items-center gap-3 cursor-pointer group"
                  onClick={() => toggleFaq(index)}
                >
                  <button className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-colors duration-200 shrink-0 ${isOpen ? 'bg-gray-100 border-gray-300 text-gray-700 shadow-inner' : 'bg-transparent border-gray-300 text-gray-600 group-hover:bg-white group-hover:shadow-sm'}`}>
                    {isOpen ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                  </button>
                  <div className={`rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-[14px] sm:text-[15px] font-medium transition-all duration-200 shadow-sm border ${isOpen ? 'bg-gray-100 text-gray-900 border-gray-200' : 'bg-[#efefef] text-gray-800 border-transparent group-hover:bg-[#e8e8e8]'}`}>
                    {item.question}
                  </div>
                </div>
                
                {/* Answer */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out flex justify-end w-full ${isOpen ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}
                >
                  <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm text-gray-600 text-[14.5px] leading-relaxed w-[85%] sm:w-[70%] mr-2 sm:mr-4">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
