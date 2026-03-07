import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import MissionSection from './components/sections/MissionSection';
import ProgramsSection from './components/sections/ProgramsSection';
import ResourcesSection from './components/sections/ResourcesSection';
import FAQSection from './components/sections/FAQSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionSection />
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
