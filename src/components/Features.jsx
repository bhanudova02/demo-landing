import React from 'react';
import { 
  Globe2, 
  Rocket, 
  BadgeDollarSign, 
  Lightbulb, 
  Users, 
  Target 
} from 'lucide-react';

const featuresData = [
  {
    icon: Globe2,
    title: 'Impact-Driven Solutions',
    description: 'Every product we build is custom-crafted to create real business impact.',
  },
  {
    icon: Rocket,
    title: 'Fast & Reliable Delivery',
    description: 'Get high-quality results in days or weeks, not months.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Transparent & Fair Pricing',
    description: 'Honest, customized pricing with no hidden fees or surprises.',
  },
  {
    icon: Lightbulb,
    title: 'Expert Problem Solvers',
    description: 'We tackle technical and creative challenges with innovative solutions.',
  },
  {
    icon: Users,
    title: 'Seamless Collaboration',
    description: 'Clear communication and feedback at every stage of the project.',
  },
  {
    icon: Target,
    title: 'Direct Access to Top Talent',
    description: 'Work directly with senior experts—no long-term hiring needed.',
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-[#f8f9fa] relative border-y border-dashed border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose CodeDale?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-[15px]">
            Discover the advantages of partnering with a tech team that's built for<br className="hidden md:block" /> results and client success:
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 text-center">
          {featuresData.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex flex-col items-center">
                {/* Icon Wrapper */}
                <div className="mb-6 relative">
                  {/* Subtle background blob/circle to mimic illustration style */}
                  <div className="absolute inset-0 bg-blue-100 rounded-full blur-xl opacity-50 transform scale-150"></div>
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center relative z-10 text-blue-600">
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                </div>
                
                <h3 className="text-[17px] font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] text-gray-500 leading-relaxed max-w-[280px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-20 flex justify-center">
          <button className="bg-[#111] hover:bg-black text-white text-[15px] font-medium px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
            Reserve Your Slot
          </button>
        </div>

      </div>
    </section>
  );
};

export default Features;
