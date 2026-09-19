import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import Challenges from './components/Challenges';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Achievements from './components/Achievements';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="relative antialiased selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <Hero />
      <CaseStudies />
      <Challenges />
      <Features />
      <HowItWorks />
      <Services />
      <TechStack />
      <Achievements />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
