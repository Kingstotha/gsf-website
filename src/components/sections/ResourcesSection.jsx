import { siteContent } from '../../data/siteContent';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

function ResourcesSection() {
  return (
    <section id="resources" className="scroll-mt-24 bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Stay Connected"
          title="Community & Important Links"
          description="Stay connected with Good Seed Fellowship through our official community channels and direct contact options."
          centered
        />

        <div className="grid gap-6 md:grid-cols-3">
          {siteContent.resources.map((resource) => (
            <Card
              key={resource.title}
              title={resource.title}
              description={resource.description}
              linkLabel={resource.linkLabel}
              linkUrl={resource.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResourcesSection;
