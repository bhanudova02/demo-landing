import React, { useState, useEffect } from 'react';
import { Lightbulb, Settings, Rocket, Loader2 } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Share Your Vision',
    description: 'Tell us about your goals and project requirements—just reach out for a free consultation.',
    icon: Lightbulb,
    visual: (
      <div className="bg-[#1a1a1a] rounded-3xl p-8 w-full max-w-sm mx-auto flex flex-col items-center justify-center text-center shadow-xl border border-gray-800 transition-all duration-500">
        <Loader2 className="w-16 h-16 text-white mb-8 animate-spin-slow" />
        <h3 className="text-white text-2xl font-bold mb-6">Tell us the<br />Goal</h3>
        <button className="w-full bg-[#333] hover:bg-[#444] text-white py-3 rounded-xl font-medium transition-colors">
          Free Discovery Call
        </button>
      </div>
    )
  },
  {
    id: 2,
    title: 'Collaborate on a Solution',
    description: 'We work together to define the scope and strategy. You review and approve the plan before we begin.',
    icon: Settings,
    visual: (
      <div className="bg-[#1a1a1a] rounded-3xl p-8 w-full max-w-sm mx-auto flex flex-col items-center justify-center text-center shadow-xl border border-gray-800 transition-all duration-500">
        <Settings className="w-16 h-16 text-blue-400 mb-8 animate-spin-slow" />
        <h3 className="text-white text-2xl font-bold mb-6">Define the<br />Strategy</h3>
        <div className="w-full space-y-3">
          <div className="h-2 bg-gray-700 rounded-full w-3/4 mx-auto"></div>
          <div className="h-2 bg-gray-700 rounded-full w-1/2 mx-auto"></div>
          <div className="h-2 bg-blue-500 rounded-full w-full mx-auto mt-6"></div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: 'Watch Your Idea Come to Life',
    description: 'Our expert team gets to work, keeping you in the loop with consistent updates. Most projects are delivered promptly, ready for launch!',
    icon: Rocket,
    visual: (
      <div className="bg-[#1a1a1a] rounded-3xl p-8 w-full max-w-sm mx-auto flex flex-col items-center justify-center text-center shadow-xl border border-gray-800 transition-all duration-500">
        <Rocket className="w-16 h-16 text-green-400 mb-8 animate-bounce" />
        <h3 className="text-white text-2xl font-bold mb-6">Ready for<br />Launch</h3>
        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-medium transition-colors">
          Deploy Project
        </button>
      </div>
    )
  }
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-cycle the active step every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-[#f8f9fa] relative border-t border-dashed border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            How to Get Started with CodeDale
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-[15px]">
            Just step away from those traditional old methods of hiring plus managing<br className="hidden md:block" /> and see for yourself
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column - Visuals */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            {/* Dynamic Icon/Title for active step */}
            <div className="flex flex-col items-center mb-8">
              {React.createElement(steps[activeStep].icon, { className: "w-8 h-8 text-gray-800 mb-3" })}
              <h3 className="text-xl font-bold text-gray-900">{steps[activeStep].title}</h3>
            </div>
            {/* Dynamic Card */}
            {steps[activeStep].visual}
          </div>

          {/* Right Column - Steps List */}
          <div className="w-full md:w-1/2 flex flex-col space-y-4">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <div 
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`cursor-pointer p-8 rounded-3xl transition-all duration-300 border border-transparent ${
                    isActive ? 'bg-white shadow-sm border-gray-100 scale-[1.02]' : 'hover:bg-gray-100 opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className={`text-lg font-medium mb-3 ${isActive ? 'text-blue-600' : 'text-gray-900'}`}>
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
      
      {/* Custom slow spin animation utility for Tailwind */}
      <style dangerouslySetInnerHTML={{__html: `
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}} />
    </section>
  );
};

export default HowItWorks;
