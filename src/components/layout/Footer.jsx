import { siteContent } from '../../data/siteContent';
import Seal from '../ui/Seal';

function Footer() {
  const { footer } = siteContent;
  return (
    <>
      <div className="rule-double-up" aria-hidden="true" />
      <footer className="border-t-2 border-ink">
        <div className="wrap py-8 text-small text-pencil">
          <p className="flex items-center gap-3 text-ink">
            <Seal size={28} decorative />
            <span>{footer.parentLine}</span>
          </p>
          <p className="mt-4">{footer.verse}</p>
          <p className="mt-4">{footer.copyright}</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
