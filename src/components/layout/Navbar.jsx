import { useState, useEffect } from 'react';
import { navLinks } from '../../data/siteContent';
import Button from '../ui/Button';
import LogoMark from '../ui/LogoMark';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const allSectionIds = ['home', 'about', 'mission', 'programs', 'resources', 'faq', 'contact'];
    const sections = allSectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-10% 0px -80% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" aria-label="Go to home" onClick={closeMenu}>
          <LogoMark compact />
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-700 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive =
              activeSection === sectionId ||
              (sectionId === 'about' && activeSection === 'mission');
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition ${
                  isActive
                    ? 'font-semibold text-brand-green'
                    : 'text-slate-700 hover:text-brand-green'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <Button href="#contact" className="ml-2">
            Join Us
          </Button>
        </nav>
      </div>

      <div
        className={`border-t border-slate-200 bg-white px-4 pb-4 pt-2 md:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive =
              activeSection === sectionId ||
              (sectionId === 'about' && activeSection === 'mission');
            return (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-brand-greenSoft font-semibold text-brand-green'
                    : 'text-slate-700 hover:bg-brand-greenSoft hover:text-brand-green'
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            );
          })}
          <Button href="#contact" className="mt-2 w-full justify-center" variant="primary">
            Join Us
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
