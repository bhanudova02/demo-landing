import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import BuiltAroundBusinessSection from './components/BuiltAroundBusinessSection';
import ProcessSection from './components/ProcessSection';
import WorkSection from './components/WorkSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CtaSection from './components/CtaSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Dark Top Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Services */}
        <ServicesSection />

        {/* Section 3: Development for Every Business / Built Around Your Business */}
        <BuiltAroundBusinessSection />

        {/* Section 4: Our Process */}
        <ProcessSection />

        {/* Section 5: Our Work */}
        <WorkSection />

        {/* Section 6: Why Choose Us */}
        <WhyChooseUsSection />

        {/* Client Testimonials Section */}
        <TestimonialsSection />

        {/* Section 7: Final CTA Showcase */}
        <CtaSection />

        {/* Dedicated Interactive Contact & Quote Form */}
        <ContactSection />
      </main>

      {/* Section 8: Dark Footer */}
      <Footer />
    </div>
  );
}

export default App;
