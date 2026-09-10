import React from 'react';

const challengesData = [
  {
    tag: 'Problem',
    title: 'Outdated Digital Presence',
    description: 'An outdated website can make your business look less credible and turn potential customers away.',
    iconType: 'phone',
  },
  {
    tag: 'Problem',
    title: 'Leads Getting Missed',
    description: 'Enquiries are scattered across WhatsApp, email, forms and spreadsheets, making follow-ups easy to miss.',
    iconType: 'roles',
  },
  {
    tag: 'Problem',
    title: 'Too Much Manual Work',
    description: 'Your team spends hours repeating tasks that could be handled automatically by software.',
    iconType: 'process',
  },
  {
    tag: 'Problem',
    title: 'Disconnected Tools',
    description: "Your website, CRM and business tools don't communicate, creating unnecessary work and errors.",
    iconType: 'branding',
  },
  {
    tag: 'Problem',
    title: 'Poor Business Visibility',
    description: 'Without the right dashboards and systems, it is difficult to see what is happening across your business.',
    iconType: 'visibility',
  },
  {
    tag: 'Problem',
    title: "Systems That Don't Scale",
    description: 'Disconnected tools and manual processes become harder to manage as your business grows.',
    iconType: 'demands',
  },
];

const CardVisual = ({ type }) => {
  switch (type) {
    case 'phone':
      return (
        <div className="w-full h-full bg-gray-50 flex items-center justify-center relative overflow-hidden rounded-2xl">
          <div className="w-24 h-40 bg-white shadow-md border border-gray-200 rounded-xl relative transition-transform duration-500 group-hover:-translate-y-2">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gray-200 rounded-full" />
            <div className="mt-6 mx-2 h-16 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-4xl transition-transform duration-500 group-hover:scale-110">😴</span>
            </div>
            <div className="mt-2 mx-2 h-2 bg-gray-100 rounded w-1/2" />
            <div className="mt-2 mx-2 h-2 bg-gray-100 rounded w-3/4" />
          </div>
        </div>
      );
    case 'roles':
      return (
        <div className="w-full h-full bg-gray-50 flex flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl">
          {['Frontend Engineer', 'Backend Developer', 'Product Designer', 'Data Scientist'].map((role, i) => (
            <div
              key={i}
              className={`text-sm font-bold text-gray-400 transition-all duration-500 ${i === 0 ? 'text-gray-800 scale-110' : ''}`}
              style={{
                transform: `translateY(0)`,
              }}
            >
              {role}
            </div>
          ))}
          {/* Hover effect overlays a blur or sliding effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      );
    case 'process':
      return (
        <div className="w-full h-full bg-gray-50 flex items-center justify-center overflow-hidden rounded-2xl">
          <div className="flex items-center justify-center gap-4 transition-transform duration-700 group-hover:rotate-180">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-red-400 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
            <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }} />
          </div>
        </div>
      );
    case 'branding':
      return (
        <div className="w-full h-full bg-gray-50 flex items-center justify-center overflow-hidden rounded-2xl p-6">
          <div className="grid grid-cols-2 gap-2 w-full h-full">
            <div className="bg-black rounded-lg transition-transform duration-500 group-hover:scale-95" />
            <div className="bg-gray-200 rounded-lg transition-transform duration-500 group-hover:scale-105" />
            <div className="bg-gray-300 rounded-lg transition-transform duration-500 group-hover:-translate-y-2" />
            <div className="bg-black rounded-lg transition-transform duration-500 group-hover:translate-x-2" />
          </div>
        </div>
      );
    case 'visibility':
      return (
        <div className="w-full h-full bg-gray-50 flex items-end justify-center gap-2 p-6 overflow-hidden rounded-2xl">
          {[40, 70, 30, 90, 50].map((h, i) => (
            <div
              key={i}
              className="w-8 bg-gray-200 rounded-t-md transition-all duration-500 origin-bottom"
              style={{ height: `${h}%` }}
            />
          ))}
          {/* On hover, bars go up */}
          <div className="absolute inset-x-6 bottom-6 flex gap-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {[60, 85, 50, 100, 75].map((h, i) => (
              <div
                key={`hover-${i}`}
                className="w-8 bg-blue-500 rounded-t-md transition-all duration-700 origin-bottom scale-y-0 group-hover:scale-y-100"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      );
    case 'demands':
      return (
        <div className="w-full h-full bg-gray-50 flex items-center justify-center overflow-hidden rounded-2xl">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-lg transition-transform duration-700 group-hover:rotate-45" />
            <div className="absolute inset-4 bg-gray-800 rounded-lg transition-transform duration-700 group-hover:-rotate-12" />
          </div>
        </div>
      );
    default:
      return null;
  }
};

const Challenges = () => {
  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-black text-white text-xs font-semibold px-3 py-1 rounded-full mb-6">
            BUILT AROUND YOUR BUSINESS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight max-w-2xl mx-auto">
            Where Businesses Lose Time, Leads & Growth
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challengesData.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Top Visual Area */}
              <div className="h-48 w-full rounded-2xl overflow-hidden mb-6 relative">
                <CardVisual type={item.iconType} />
              </div>

              {/* Content Area */}
              <div className="px-2 pb-4 flex flex-col flex-grow">
                <span className="inline-block bg-red-50 text-red-500 text-[10px] font-bold px-2 py-0.5 rounded-full w-max mb-3">
                  {item.tag}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Challenges;
