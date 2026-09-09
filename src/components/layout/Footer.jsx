import { siteContent } from '../../data/siteContent';
import Seal from '../ui/Seal';

// The footer continues the dark contact block, separated from it by a pale rule.
function Footer() {
  const { footer } = siteContent;
  return (
    <footer className="bg-ink text-paper/70">
      <div className="wrap border-t border-paper/15 py-8 text-small">
        <p className="flex items-center gap-3 text-paper">
          <Seal size={28} decorative />
          <span>{footer.parentLine}</span>
        </p>
        <p className="mt-4">{footer.verse}</p>
        <p className="mt-4">{footer.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
