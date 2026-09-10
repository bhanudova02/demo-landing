import Header from './components/Header';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import Challenges from './components/Challenges';
import Features from './components/Features';

function App() {
  return (
    <div className="relative antialiased selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <Hero />
      <CaseStudies />
      <Challenges />
      <Features />
    </div>
  );
}

export default App;
