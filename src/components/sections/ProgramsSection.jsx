import { siteContent } from '../../data/siteContent';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';

function ProgramsSection() {
  return (
    <section id="programs" className="scroll-mt-24 bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Offer"
          title="Services & Programs"
          description="From Bible study to mentorship, our programs are designed to help you grow in every season of college life."
          centered
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {siteContent.programs.map((program) => (
            <Card key={program.title} icon={program.icon} title={program.title} description={program.description} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
