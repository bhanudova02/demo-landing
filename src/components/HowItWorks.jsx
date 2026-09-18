import React, { useState } from 'react';
import { Lightbulb, Settings, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Share Your Vision',
    description: 'Tell us about your goals and project requirements—just reach out for a free consultation.',
    icon: Lightbulb,
    image: '/images/hero_showcase.jpg',
    tag: 'Discovery',
    tagColor: 'bg-blue-500',
  },
  {
    id: 2,
    title: 'Collaborate on a Solution',
    description: 'We work together to define the scope and strategy. You review and approve the plan before we begin.',
    icon: Settings,
    image: '/images/work_dashboard.jpg',
    tag: 'Strategy',
    tagColor: 'bg-purple-500',
  },
  {
    id: 3,
    title: 'Watch Your Idea Come to Life',
    description: 'Our expert team gets to work, keeping you in the loop with consistent updates. Most projects are delivered promptly, ready for launch!',
    icon: Rocket,
    image: '/images/services_dashboard.jpg',
    tag: 'Launch',
    tagColor: 'bg-green-500',
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-[#f8f9fa] relative border-t border-dashed border-gray-200">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            How to Get Started with CodeDale
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-[15px]">
            Just step away from those traditional old methods of hiring plus managing<br className="hidden md:block" /> and see for yourself
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">

          {/* Left Column - Image Card */}
          <div
            className="w-full md:w-1/2"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50 h-[380px] w-full flex items-center justify-center">
              {/* Image — full visible, no crop */}
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="w-full h-full object-contain transition-all duration-700 p-4"
              />

              {/* Top tag */}
              <div className="absolute top-5 left-5">
                <span className={`${steps[activeStep].tagColor} text-white text-[11px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wide`}>
                  Step {steps[activeStep].id} · {steps[activeStep].tag}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Steps List */}
          <div
            className="w-full md:w-1/2 flex flex-col space-y-4"
            data-aos="fade-left"
            data-aos-delay="200"
            onMouseLeave={() => { }}
          >
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`cursor-pointer p-5 rounded-3xl transition-all duration-300 border border-transparent ${isActive ? 'bg-white shadow-sm border-gray-100 scale-[1.02]' : 'hover:bg-gray-100 opacity-60 hover:opacity-100'
                    }`}
                >
                  <div className={`text-lg font-medium mb-3 flex items-center gap-2 ${isActive ? 'text-blue-600' : 'text-gray-900'}`}>
                    <Icon className="w-4 h-4" />
                    Step {step.id}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-[15px] text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
