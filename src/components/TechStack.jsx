import React, { useEffect, useRef, useState } from 'react';
import { Code2, Server, ShoppingBag, Wrench, CheckCircle2, Smartphone } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion';

const categories = [
  {
    icon: Code2,
    title: 'Frontend',
    accent: '#3b82f6',
    accentBg: '#eff6ff',
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: Server,
    title: 'Backend',
    accent: '#8b5cf6',
    accentBg: '#f5f3ff',
    techs: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB'],
  },
  {
    icon: ShoppingBag,
    title: 'Shopify & Commerce',
    accent: '#10b981',
    accentBg: '#ecfdf5',
    techs: ['Shopify Development', 'Custom Themes', 'App Integration', 'Liquid Templating'],
  },
  {
    icon: Wrench,
    title: 'Automation & DevOps',
    accent: '#f59e0b',
    accentBg: '#fffbeb',
    techs: ['n8n / Make / Zapier', 'API Integrations', 'CI/CD & Vercel', 'AI Workflows'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    accent: '#ef4444',
    accentBg: '#fef2f2',
    techs: ['React Native', 'iOS Development', 'Android Development', 'Expo'],
  },
];

const stats = [
  { value: 30, suffix: '+', label: 'Brands Served' },
  { value: 4,  suffix: '',  label: 'Core Services' },
  { value: 24, suffix: 'h', label: 'First Response' },
  { value: 100,suffix: '%', label: 'Remote Friendly' },
];

// Animated count-up number
const CountUp = ({ target, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
};

// Card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  }),
};

const TechStack = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} className="py-20 bg-white relative border-t border-dashed border-gray-200">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-3 block">Tech Stack</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Technologies We Master
            </h2>
          </div>
          <p className="text-gray-500 text-[15px] max-w-xs leading-relaxed md:text-right">
            Production-grade tooling used across every project we ship.
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-[#f8f9fa] border border-gray-100 hover:border-gray-200 hover:shadow-md rounded-2xl p-6 flex flex-col gap-5 cursor-default"
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: cat.accentBg }}
                >
                  <Icon className="w-5 h-5" style={{ color: cat.accent }} />
                </div>

                {/* Title + accent line */}
                <div>
                  <h3 className="text-gray-900 font-bold text-[16px] mb-2">{cat.title}</h3>
                  <motion.div
                    className="h-[2px] rounded-full"
                    style={{ backgroundColor: cat.accent }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: 32 } : { width: 0 }}
                    transition={{ delay: i * 0.1 + 0.4, duration: 0.5, ease: 'easeOut' }}
                  />
                </div>

                {/* Tech list */}
                <ul className="flex flex-col gap-2.5">
                  {cat.techs.map((t, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -8 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.1 + j * 0.07 + 0.35, duration: 0.4 }}
                      className="flex items-center gap-2.5 text-[13px] text-gray-500"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: cat.accent }} />
                      {t}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#f8f9fa] border border-gray-100 rounded-2xl px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <div className="max-w-sm">
            <p className="text-gray-900 font-bold text-[16px] leading-snug mb-1">
              Zenvyra builds practical digital systems for modern businesses.
            </p>
            <p className="text-gray-400 text-[13px]">
              Simple design, clean code and clear communication — from the first call to launch.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center min-w-[56px]"
              >
                <p className="text-gray-900 font-black text-2xl leading-none tabular-nums">
                  <CountUp target={s.value} suffix={s.suffix} />
                </p>
                <p className="text-gray-400 text-[11px] font-semibold uppercase tracking-wider mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TechStack;
