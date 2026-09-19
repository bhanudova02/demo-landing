import React, { useEffect, useRef } from 'react';
import { Lightbulb, MapPin, Settings, Rocket } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Discover',
    description: 'Understand the business, customers, goals and current workflow.',
    icon: Lightbulb,
    image: '/images/hero_showcase.jpg',
    tag: 'Discovery',
    tagColor: 'bg-blue-500',
  },
  {
    id: '02',
    title: 'Plan',
    description: 'Recommend the right solution and map the project before development.',
    icon: MapPin,
    image: '/images/work_dashboard.jpg',
    tag: 'Strategy',
    tagColor: 'bg-purple-500',
  },
  {
    id: '03',
    title: 'Build',
    description: 'Design, develop, integrate and test the solution.',
    icon: Settings,
    image: '/images/services_dashboard.jpg',
    tag: 'Build',
    tagColor: 'bg-orange-500',
  },
  {
    id: '04',
    title: 'Launch',
    description: 'Deploy the system and provide support for future improvements.',
    icon: Rocket,
    image: '/images/work_mobile.jpg',
    tag: 'Launch',
    tagColor: 'bg-green-500',
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const tabBarRef = useRef(null);
  const current = steps[activeStep];

  // Auto-advance every 4 seconds
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused, activeStep]);

  // Horizontal-only scroll for mobile tab bar (no page scroll)
  useEffect(() => {
    const container = tabBarRef.current;
    const btn = document.getElementById(`tab-btn-${activeStep}`);
    if (!container || !btn) return;
    const containerLeft = container.getBoundingClientRect().left;
    const btnLeft = btn.getBoundingClientRect().left;
    const btnCenter = btnLeft - containerLeft + btn.offsetWidth / 2;
    const scrollTarget = container.scrollLeft + btnCenter - container.offsetWidth / 2;
    container.scrollTo({ left: scrollTarget, behavior: 'smooth' });
  }, [activeStep]);

  return (
    <section id="how-it-works" className="py-16 bg-[#f8f9fa] relative border-t border-dashed border-gray-200">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            From idea to working system.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-[15px]">
            We don't just build software — we solve business problems through a clear, collaborative process.
          </p>
        </div>

        {/* Horizontal Tab Bar — mobile only */}
        <div className="md:hidden mb-8 -mx-2" data-aos="fade-up" data-aos-delay="50" ref={tabBarRef}>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const Icon = step.icon;
              return (
                <button
                  key={step.id}
                  id={`tab-btn-${index}`}
                  onClick={() => {
                    setActiveStep(index);
                    setPaused(true);
                    setTimeout(() => setPaused(false), 8000);
                  }}
                  className={`flex-none flex items-center gap-2 px-5 py-2.5 rounded-md text-[13px] font-semibold border transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'bg-gray-900 text-white border-gray-900 shadow-sm'
                      : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>Step {step.id}</span>
                  <span className={`text-[11px] ${isActive ? 'text-white/60' : 'text-gray-400'}`}>
                    · {step.title}
                  </span>
                </button>
              );
            })}
          </div>
          {/* Progress line */}
          <div className="mt-3 h-[3px] bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-900 rounded-full transition-all duration-700"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Content Layout */}
        <div
          className="flex flex-col md:flex-row items-stretch gap-10 lg:gap-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Left Column — Image */}
          <div
            className="w-full md:w-1/2"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-gray-900 h-[300px] md:h-[420px]">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-all duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Step tag */}
              <div className="absolute top-5 left-5">
                <span className={`${current.tagColor} text-white text-[11px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wide shadow`}>
                  Step {current.id} · {current.tag}
                </span>
              </div>

              {/* Step info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">Current Phase</p>
                <h3 className="text-white text-2xl font-bold">{current.title}</h3>
                <p className="text-white/75 text-[14px] mt-1 leading-snug">{current.description}</p>
              </div>
            </div>
          </div>

          {/* Right Column — Steps List (desktop only) */}
          <div
            className="w-full md:w-1/2 hidden md:flex flex-col justify-center gap-1"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                  className={`cursor-pointer rounded-2xl transition-all duration-300 overflow-hidden border ${
                    isActive
                      ? 'bg-white shadow-md border-gray-200'
                      : 'border-transparent hover:bg-gray-100/60'
                  }`}
                >
                  {/* Always visible — step number + title */}
                  <div className={`flex items-center gap-4 px-6 py-4 ${isActive ? '' : 'opacity-50 hover:opacity-80'}`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                      isActive ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`text-[11px] font-bold uppercase tracking-widest ${isActive ? 'text-blue-500' : 'text-gray-400'}`}>
                        Step {step.id}
                      </span>
                      <h4 className="text-[16px] font-bold text-gray-900 leading-tight">{step.title}</h4>
                    </div>
                    <div className={`w-2 h-2 rounded-full shrink-0 transition-all ${isActive ? 'bg-blue-500 scale-125' : 'bg-gray-300'}`} />
                  </div>

                  {/* Expanded — only active */}
                  <div className={`transition-all duration-500 ease-in-out ${isActive ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-6 pb-5">
                      <p className="text-[14px] text-gray-500 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* CTA */}
            <div className="mt-4 pl-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white text-[14px] font-medium px-6 py-3 rounded-full transition-all shadow hover:shadow-lg"
              >
                Start the process →
              </a>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
