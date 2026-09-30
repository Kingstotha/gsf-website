import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { useEffect, useState } from 'react';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import MissionSection from './components/sections/MissionSection';
import UpcomingEvents from './components/sections/UpcomingEvents';
import ProgramsSection from './components/sections/ProgramsSection';
import ResourcesSection from './components/sections/ResourcesSection';
import FAQSection from './components/sections/FAQSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const refresh = () => setNow(new Date());
    const timer = window.setInterval(refresh, 60000);
    window.addEventListener('focus', refresh);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener('focus', refresh);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <HeroSection now={now} />
        <AboutSection />
        <MissionSection />
        <UpcomingEvents now={now} />
        <ProgramsSection />
        <ResourcesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
