import { siteContent } from '../../data/siteContent';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

function ProgramsSection() {
  return (
    <section id="programs" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Offer"
          title="Services & Programs"
          description="Programs are currently sample content and can be edited anytime as your ministry activities evolve."
          centered
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {siteContent.programs.map((program) => (
            <Card key={program.title} title={program.title} description={program.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
