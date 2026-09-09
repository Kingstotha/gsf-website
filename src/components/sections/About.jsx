import { siteContent } from '../../data/siteContent';
import Seal from '../ui/Seal';

// Who this is, in three short paragraphs, beside the seal whose ring carries the church's name.
function About() {
  const { about } = siteContent;
  return (
    <section id="about" aria-label="About Good Seed Fellowship" className="border-t border-hairline">
      <div className="wrap flex flex-col gap-8 py-10 sm:flex-row sm:items-start sm:py-14">
        <Seal size={120} className="sm:mt-1" />
        <div className="max-w-prose space-y-4 text-body">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
