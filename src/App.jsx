import Header from './components/Header';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import Challenges from './components/Challenges';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Achievements from './components/Achievements';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative antialiased selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <Hero />
      <CaseStudies />
      <Challenges />
      <Features />
      <HowItWorks />
      <Services />
      <Achievements />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
