import React, { useEffect, useRef, useState } from 'react';
import { Code2, Server, ShoppingBag, Wrench, CheckCircle2, Smartphone } from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';

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
    icon: Smartphone,
    title: 'Mobile Development',
    accent: '#ef4444',
    accentBg: '#fef2f2',
    techs: ['React Native', 'iOS Development', 'Android Development', 'Expo'],
  },
  {
    icon: Wrench,
    title: 'Automation & DevOps',
    accent: '#f59e0b',
    accentBg: '#fffbeb',
    techs: ['n8n / Make / Zapier', 'API Integrations', 'CI/CD & Vercel', 'AI Workflows'],
  },
];

const stats = [
  { value: 30, suffix: '+', label: 'Brands Served' },
  { value: 4,  suffix: '',  label: 'Core Services' },
  { value: 24, suffix: 'h', label: 'First Response' },
  { value: 100,suffix: '%', label: 'Remote Friendly' },
];

// Count-up component
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

  return <span ref={ref}>{display}{suffix}</span>;
};

const TechStack = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section ref={sectionRef} className="py-20 bg-[#f8f9fa] relative border-t border-dashed border-gray-200">
      <div className="max-w-6xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-3 block">Tech Stack</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Technologies We Master</h2>
            <p className="text-gray-400 text-[14px] max-w-xs leading-relaxed md:text-right">
              Production-grade tooling used across every project we ship.
            </p>
          </div>
        </motion.div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">

          {/* First 3 cards — top row */}
          {categories.slice(0, 3).map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg rounded-2xl p-6 flex flex-col gap-4 cursor-default transition-shadow duration-300"
              >
                {/* Icon + Title row */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: cat.accentBg }}>
                    <Icon className="w-4 h-4" style={{ color: cat.accent }} />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-[15px]">{cat.title}</h3>
                    <motion.div
                      className="h-[2px] rounded-full mt-1"
                      style={{ backgroundColor: cat.accent }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: 24 } : { width: 0 }}
                      transition={{ delay: i * 0.1 + 0.4, duration: 0.4 }}
                    />
                  </div>
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((t, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: i * 0.1 + j * 0.06 + 0.3, duration: 0.35 }}
                      className="text-[12px] font-medium px-3 py-1 rounded-full border"
                      style={{
                        color: cat.accent,
                        backgroundColor: cat.accentBg,
                        borderColor: `${cat.accent}30`,
                      }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom Row — last 2 cards + stats ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">

          {/* Last 2 cards */}
          {categories.slice(3).map((cat, i) => {
            const Icon = cat.icon;
            const globalIndex = i + 3;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: globalIndex * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg rounded-2xl p-6 flex flex-col gap-4 cursor-default transition-shadow duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: cat.accentBg }}>
                    <Icon className="w-4 h-4" style={{ color: cat.accent }} />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-[15px]">{cat.title}</h3>
                    <motion.div
                      className="h-[2px] rounded-full mt-1"
                      style={{ backgroundColor: cat.accent }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: 24 } : { width: 0 }}
                      transition={{ delay: globalIndex * 0.1 + 0.4, duration: 0.4 }}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((t, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: globalIndex * 0.1 + j * 0.06 + 0.3, duration: 0.35 }}
                      className="text-[12px] font-medium px-3 py-1 rounded-full border"
                      style={{
                        color: cat.accent,
                        backgroundColor: cat.accentBg,
                        borderColor: `${cat.accent}30`,
                      }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Stats card — fills the 3rd slot in bottom row */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-2 lg:col-span-1 bg-gray-900 border border-gray-800 rounded-2xl p-4 md:p-6 flex flex-col justify-between"
          >
            <div>
              <p className="text-white font-bold text-[13px] md:text-[15px] leading-snug mb-1">
                Zenvyra builds practical digital systems.
              </p>
              <p className="text-gray-400 text-[11px] md:text-[12px] leading-relaxed">
                Clean code, clear communication — first call to launch.
              </p>
            </div>
            <div className="grid grid-cols-4 lg:grid-cols-2 gap-3 mt-4 md:mt-6">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="text-white font-black text-xl leading-none tabular-nums">
                    <CountUp target={s.value} suffix={s.suffix} />
                  </p>
                  <p className="text-gray-500 text-[10px] font-semibold uppercase tracking-wider mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default TechStack;
