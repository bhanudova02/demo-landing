import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const cases = [
  {
    image: '/images/work_mobile.jpg',
    bgColor: '#fde8d8',
    description: 'CodeDale built a fintech mobile app for TFS with live account tracking and a rewards referral system.',
    quote: 'Loved building it with you.',
    client: 'Narasimha Reddy',
    role: 'Founder & CEO of TFS',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=NR&backgroundColor=1a1a2e&fontFamily=Arial',
  },
  {
    image: '/images/hero_showcase.jpg',
    bgColor: '#ede9fe',
    description: 'CodeDale built Fluent Pro: an AI-powered English learning platform with instant, personalized feedback for students.',
    quote: 'Excited to support your impact.',
    client: 'Sujith Reddy Gopu',
    role: 'Founder of Fluent Pro',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=SG&backgroundColor=2d1b69&fontFamily=Arial',
  },
  {
    image: '/images/work_ecommerce.jpg',
    bgColor: '#dbeafe',
    description: 'CodeDale built our B2B e-commerce platform with contract-based catalogues, client-specific SKUs, and dynamic discount programs.',
    quote: 'Proud to ship this together.',
    client: 'Abhishek',
    role: 'Senior Business Analyst at Conquer',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=AB&backgroundColor=0f4c75&fontFamily=Arial',
  },
  {
    image: '/images/work_dashboard.jpg',
    bgColor: '#f3e8ff',
    description: 'CodeDale revamped payatom.com into a sleek, interactive fintech experience with Spline 3D elements and smooth scroll animations.',
    quote: 'Seamless payments, global reach.',
    client: 'Aryan',
    role: 'Founder/CEO, PayAtom',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=AR&backgroundColor=6b21a8&fontFamily=Arial',
  },
  {
    image: '/images/work_corporate.jpg',
    bgColor: '#d1fae5',
    description: 'CodeDale designed and built a real-time patient management dashboard with analytics and appointment scheduling.',
    quote: 'Transformed how we work.',
    client: 'Dr. Priya Sharma',
    role: 'CTO, MedFlow Solutions',
    avatar: 'https://api.dicebear.com/9.x/initials/svg?seed=PS&backgroundColor=064e3b&fontFamily=Arial',
  },
];

const CaseStudies = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    watchDrag: false,
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // Infinite forward loop every 4 seconds
  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="py-6 bg-[#fafafa]">

      {/* Embla Carousel */}
      <div className="overflow-x-hidden w-full py-4 px-2 sm:px-0" ref={emblaRef}>
        <div className="flex">
          {[...cases, ...cases, ...cases].map((item, i) => (
            <div
              key={`slide-${i}`}
              className="group flex-none w-full sm:w-[316px] md:w-[336px] bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col sm:ml-4 cursor-pointer"
            >
              {/* Colored top area with inset image */}
              <div
                className="p-4 pb-4"
                style={{ backgroundColor: item.bgColor }}
              >
                <div className="rounded-2xl overflow-hidden h-64">
                  <img
                    src={item.image}
                    alt={item.client}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="px-4 pt-4">
                <div className="bg-gray-100 rounded-2xl px-4 py-3">
                  <p className="text-[13px] font-semibold text-gray-900 leading-snug">
                    {item.description}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-1">{item.client}</p>
                </div>
              </div>

              {/* Chat-bubble quote */}
              <div className="px-4 pt-3 flex justify-end">
                <div className="text-black group-hover:text-white bg-gray-100 group-hover:bg-[#1a1a1a] text-[12px] font-medium px-4 py-2 rounded-2xl rounded-br-sm max-w-[85%] text-right transition-colors duration-300">
                  {item.quote}
                  <div className="text-gray-400 text-[10px] mt-0.5">CodeDale</div>
                </div>
              </div>

              {/* Client info */}
              <div className="px-4 pt-3 pb-4 flex items-center gap-2.5 mt-auto">
                <img
                  src={item.avatar}
                  alt={item.client}
                  className="w-9 h-9 rounded-full"
                />
                <div>
                  <p className="text-xs font-semibold text-gray-900 leading-tight">{item.client}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Navigation — only 5 dots for original cases */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: 4 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx + cases.length)}
            className={`transition-all duration-300 rounded-full ${
              idx === selectedIndex % cases.length
                ? 'w-6 h-2 bg-blue-500'
                : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default CaseStudies;
