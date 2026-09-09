import { siteContent } from '../../data/siteContent';
import Seal from '../ui/Seal';

// Who this is, in three short paragraphs, beside the seal whose ring carries the church's name.
function About() {
  const { about } = siteContent;
  return (
    <section id="about" aria-label="About Good Seed Fellowship" className="bg-paper">
      <div className="wrap flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:gap-12 sm:py-16">
        <Seal size={140} className="sm:mt-1" />
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
