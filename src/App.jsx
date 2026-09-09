import Masthead from './components/layout/Masthead';
import Footer from './components/layout/Footer';
import Plaque from './components/sections/Plaque';
import About from './components/sections/About';
import Schedule from './components/sections/Schedule';
import Fridays from './components/sections/Fridays';
import PhotoStrip from './components/sections/PhotoStrip';
import Questions from './components/sections/Questions';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Masthead />
      <main>
        <Plaque />
        <About />
        <Schedule />
        <Fridays />
        <PhotoStrip />
        <Questions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
