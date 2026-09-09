import { useEffect, useRef, useState } from 'react';
import { navLinks, siteContent } from '../../data/siteContent';
import Seal from '../ui/Seal';
import Button from '../ui/Button';

// A static masthead: seal, name, four links and one button. Below lg the links sit behind a
// Menu button; the same nav element serves both, so there is one list of links, not two.
function Masthead() {
  const { masthead, brandName } = siteContent;
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const menuButtonRef = useRef(null);

  const closeMenu = () => setIsOpen(false);

  // Underline the link for the section currently on screen; clear it when none is.
  useEffect(() => {
    const ids = navLinks.map((link) => link.href.slice(1));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return undefined;

    const visible = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        setActiveSection(ids.find((id) => visible.has(id)) || '');
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && isOpen) {
      closeMenu();
      menuButtonRef.current?.focus();
    }
  };

  return (
    <>
      <header className="border-b-2 border-ink" onKeyDown={handleKeyDown}>
        <div className="wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4">
          <a href="#top" aria-label={masthead.homeLabel} onClick={closeMenu} className="flex shrink-0 items-center gap-3">
            <Seal size={40} decorative />
            <h1 className="whitespace-nowrap text-base font-semibold">{brandName}</h1>
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            className="border border-ink px-3 py-2 text-nav font-medium lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="site-menu"
          >
            {isOpen ? masthead.closeLabel : masthead.menuLabel}
          </button>

          <nav
            id="site-menu"
            aria-label="Site"
            className={`${isOpen ? 'block' : 'hidden'} w-full border-t border-hairline pt-3 lg:block lg:w-auto lg:border-0 lg:pt-0`}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      aria-current={isActive ? 'location' : undefined}
                      className={`block whitespace-nowrap py-2 text-nav font-medium underline-offset-[6px] transition-colors duration-150 hover:text-green hover:underline hover:decoration-green lg:py-0 ${
                        isActive ? 'underline decoration-green decoration-2' : 'no-underline'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li className="mt-3 lg:mt-0">
                <Button href={masthead.button.href} external onClick={closeMenu}>
                  {masthead.button.label}
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="rule-double" aria-hidden="true" />
    </>
  );
}

export default Masthead;
