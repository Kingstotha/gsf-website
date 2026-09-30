import { useState, useEffect, useRef } from 'react';
import { navLinks } from '../../data/siteContent';
import Button from '../ui/Button';
import LogoMark from '../ui/LogoMark';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const menuButtonRef = useRef(null);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    const handleDesktopChange = (event) => {
      if (event.matches) setIsMenuOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    desktopQuery.addEventListener('change', handleDesktopChange);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      desktopQuery.removeEventListener('change', handleDesktopChange);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const allSectionIds = [
      ...navLinks.map((link) => link.href.slice(1)),
      'mission'
    ];
    const sections = allSectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-15% 0px -70% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-green/10 bg-white/95 shadow-sm shadow-slate-900/[0.03] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <a
          href="#home"
          aria-label="Go to home"
          onClick={closeMenu}
          className="min-w-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/50 focus-visible:ring-offset-4"
        >
          <LogoMark compact />
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-brand-green/40 hover:bg-brand-greenSoft hover:text-brand-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/50 focus-visible:ring-offset-2 lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        <nav className="hidden shrink-0 items-center gap-0.5 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive =
              activeSection === sectionId ||
              (sectionId === 'about' && activeSection === 'mission');
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'location' : undefined}
                className={`rounded-full px-2.5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/50 focus-visible:ring-offset-2 xl:px-3 ${
                  isActive
                    ? 'bg-brand-greenSoft font-semibold text-brand-green'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-brand-green'
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
        id="mobile-navigation"
        className={`max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-brand-green/10 bg-white px-4 pb-5 pt-3 shadow-lg shadow-slate-900/5 sm:px-6 lg:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1" aria-label="Mobile navigation">
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive =
              activeSection === sectionId ||
              (sectionId === 'about' && activeSection === 'mission');
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'location' : undefined}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/50 focus-visible:ring-offset-2 ${
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
          <Button href="#contact" className="mt-3 w-full justify-center" variant="primary" onClick={closeMenu}>
            Join Us
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
