import React from 'react';
import { 
  Monitor, 
  Smartphone, 
  Bot, 
  BarChart3, 
  Hexagon, 
  PenTool, 
  Palette, 
  Rocket, 
  Megaphone 
} from 'lucide-react';

const services = [
  { title: 'Web Development', icon: Monitor, color: 'from-blue-400 to-blue-600' },
  { title: 'App Development', icon: Smartphone, color: 'from-red-400 to-red-600' },
  { title: 'AI Applications', icon: Bot, color: 'from-purple-400 to-purple-600' },
  { title: 'Data Driven Products', icon: BarChart3, color: 'from-teal-400 to-teal-600' },
  { title: 'Blockchain Technology', icon: Hexagon, color: 'from-yellow-400 to-orange-600' },
  { title: 'UI/UX', icon: PenTool, color: 'from-pink-400 to-rose-600' },
  { title: 'Logo Designing', icon: Palette, color: 'from-indigo-400 to-indigo-600' },
  { title: 'Rapid Prototyping and MVPs', icon: Rocket, color: 'from-cyan-400 to-cyan-600' },
  { title: 'Digital Marketing & SEO', icon: Megaphone, color: 'from-green-400 to-green-600' },
];

const StackedIcon = ({ icon: Icon, colorClass }) => {
  return (
    <div className="relative w-32 h-20 mx-auto mb-6 group cursor-pointer">
      {/* Left Back Card */}
      <div className={`absolute top-2 left-2 w-16 h-12 rounded bg-gradient-to-br ${colorClass} shadow-md transform -rotate-12 transition-all duration-300 group-hover:-rotate-[20deg] group-hover:-translate-x-2 group-hover:scale-105 opacity-80 border border-white/20`} />
      
      {/* Right Back Card */}
      <div className={`absolute top-2 right-2 w-16 h-12 rounded bg-gradient-to-tr ${colorClass} shadow-md transform rotate-12 transition-all duration-300 group-hover:rotate-[20deg] group-hover:translate-x-2 group-hover:scale-105 opacity-80 border border-white/20`} />
      
      {/* Center Front Card */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-14 bg-white rounded shadow-lg border border-gray-100 flex items-center justify-center z-10 transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110">
        <Icon className="w-6 h-6 text-gray-800" strokeWidth={1.5} />
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-24 bg-[#f8f9fa] relative border-t border-dashed border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Solutions Tailored for Your Growth
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-[15px]">
            Discover our full-service offerings — crafted to deliver reliability, scalability,<br className="hidden md:block" /> and results
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 text-center">
          {services.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <StackedIcon icon={item.icon} colorClass={item.color} />
              <h3 className="text-[15px] font-semibold text-gray-900">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
