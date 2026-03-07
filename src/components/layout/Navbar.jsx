import { useState } from 'react';
import { navLinks } from '../../data/siteContent';
import Button from '../ui/Button';
import LogoMark from '../ui/LogoMark';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" aria-label="Go to home" onClick={closeMenu}>
          <LogoMark compact />
        </a>

        <button
          type="button"
          className="inline-flex h-10 items-center justify-center rounded-md border border-slate-300 px-3 text-xs font-semibold uppercase tracking-wide text-slate-700 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-brand-green"
            >
              {link.label}
            </a>
          ))}
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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand-greenSoft hover:text-brand-green"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" className="mt-2" variant="primary">
            Join Us
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
