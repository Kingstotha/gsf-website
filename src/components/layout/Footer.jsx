import { siteContent } from '../../data/siteContent';
import LogoMark from '../ui/LogoMark';

function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <LogoMark light />
          <p className="mt-4 max-w-sm text-sm text-slate-300">
            Building a Christ-centered student community at USF through fellowship, Bible study,
            prayer, and service.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {footer.quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-slate-300 transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Important</h3>
          <ul className="space-y-3 text-sm">
            {footer.legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-slate-300 transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-400">
        {footer.copyright}
      </div>
    </footer>
  );
}

export default Footer;
