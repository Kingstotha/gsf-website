import { siteContent } from '../../data/siteContent';
import LogoMark from '../ui/LogoMark';

function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="bg-[#102b22] text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_0.8fr] lg:px-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <LogoMark light />
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
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
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Connect</h3>
          <ul className="space-y-3 text-sm">
            {footer.connectLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs leading-6 text-slate-300">
        {footer.copyright}
      </div>
    </footer>
  );
}

export default Footer;
