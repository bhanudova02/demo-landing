import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: "Who's behind CodeDale?",
    answer: "CodeDale is run by a team of passionate developers and designers dedicated to building high-quality digital products."
  },
  {
    question: "Do you accept custom requirements?",
    answer: "Yes, we tailor our solutions to meet your specific business needs and goals."
  },
  {
    question: "What is your turnaround time?",
    answer: "Depending on the project scope, we typically deliver within a few weeks. We prioritize speed without compromising quality."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Absolutely. We offer maintenance and support packages to ensure your product runs smoothly post-launch."
  },
  {
    question: "Can you handle branding and marketing too?",
    answer: "While our primary focus is on product development, we do have partners and in-house capabilities to assist with brand identity."
  },
  {
    question: "What's your pricing?",
    answer: "Our pricing is transparent and project-based. We provide clear estimates after understanding your requirements."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#f8f9fa] relative border-y border-dashed border-gray-200 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative">
        
        {/* Decorative Grid Lines */}
        <div className="absolute top-0 bottom-0 left-8 md:left-24 w-px border-l border-dashed border-gray-200 pointer-events-none hidden sm:block"></div>
        <div className="absolute top-0 bottom-0 right-8 md:right-12 w-px border-r border-dashed border-gray-200 pointer-events-none hidden sm:block"></div>

        {/* Header */}
        <div className="text-center mb-16 relative z-10" data-aos="fade-up">
          <h2 className="text-3xl md:text-[34px] font-bold text-gray-900 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-[15.5px]">
            We Get It—Curiosity Leads to Success! Got questions? That's a great sign. Here are some
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
